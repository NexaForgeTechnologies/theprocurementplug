import { useState, useEffect } from "react";
import axios from "axios";

export const useLegalCompliance = () => {
    const [legals, setLegalCompliance] = useState([]);
    const [legalLoading, setLegalLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLegal = async () => {
        try {
            setLegalLoading(true);
            const response = await axios.get("/api/business-hub/legal-compliance");
            setLegalCompliance(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLegalLoading(false);
        }
    };

    useEffect(() => {
        fetchLegal();
    }, []);

    return { legals, legalLoading, error, refetch: fetchLegal };
};
