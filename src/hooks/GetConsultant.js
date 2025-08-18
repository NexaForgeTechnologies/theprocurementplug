import { useState, useEffect } from "react";
import axios from "axios";

export const useConsultants = (id) => {
    const [consultants, setConsultants] = useState([]);
    const [consultantLoading, setConsultantLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchConsultants = async () => {
        try {
            setConsultantLoading(true);

            const url = id
                ? `/api/business-hub/consulting-partner/${id}`
                : `/api/business-hub/consulting-partner`;

            const response = await axios.get(url);
            setConsultants(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (err) {
            setError(err);
        } finally {
            setConsultantLoading(false);
        }
    };

    useEffect(() => {
        fetchConsultants();
    }, [id]); // will refetch if id changes

    return { consultants, consultantLoading, error, refetch: fetchConsultants };
};
