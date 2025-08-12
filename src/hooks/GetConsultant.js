import { useState, useEffect } from "react";
import axios from "axios";

export const useConsultants = () => {
    const [consultants, setConsultants] = useState([]);
    const [consultantLoading, setConsultantLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchConsultants = async () => {
        try {
            setConsultantLoading(true);
            const response = await axios.get("/api/business-hub/consulting-partner");
            setConsultants(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setConsultantLoading(false);
        }
    };

    useEffect(() => {
        fetchConsultants();
    }, []);

    return { consultants, consultantLoading, error, refetch: fetchConsultants };
};
