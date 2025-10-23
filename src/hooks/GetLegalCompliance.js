import { useState, useEffect } from "react";
import axios from "axios";

export const useLegalCompliance = (id) => {
    const [legals, setLegalCompliance] = useState([]);
    const [legalLoading, setLegalLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLegal = async () => {
        try {
            setLegalLoading(true);

            const url = id
                ? `/api/business-hub/legal-compliance?id=${id}`
                : `/api/business-hub/legal-compliance`;

            const response = await axios.get(url);

            // Always keep array structure
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data];

            setLegalCompliance(data);
        } catch (err) {
            setError(err);
        } finally {
            setLegalLoading(false);
        }
    };

    useEffect(() => {
        fetchLegal();
    }, [id]); // refetch when id changes

    return { legals, legalLoading, error, refetch: fetchLegal };
};
