import { useState, useEffect } from "react";
import axios from "axios";

export const useProcuretech = () => {
    const [procuretechSolutions, setProcuretech] = useState([]);
    const [procureTechLoading, setProcureTechLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProcureTech = async () => {
        try {
            setProcureTechLoading(true);
            const response = await axios.get("/api/business-hub/procuretech-solution");
            setProcuretech(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setProcureTechLoading(false);
        }
    };

    useEffect(() => {
        fetchProcureTech();
    }, []);

    return { procuretechSolutions, procureTechLoading, error, refetch: fetchProcureTech };
};
