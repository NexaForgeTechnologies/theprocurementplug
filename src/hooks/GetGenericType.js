import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Generic hook to fetch table data without React Query
 * @param {string} tableName - Name of the table to fetch from API
 */
export const useGenericTable = (tableName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/business-hub/generic?table=${tableName}`);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tableName) {
            fetchData();
        }
    }, [tableName]);

    return { data, loading, error, refetch: fetchData };
};
