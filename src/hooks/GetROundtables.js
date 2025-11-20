import { useState, useEffect } from "react";
import axios from "axios";

export const useRoundtable = () => {
    const [data, setData] = useState([]);       // renamed from events → data
    const [roundtableLoading, setRoundtableLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRoundtable = async () => {
        try {
            setRoundtableLoading(true);
            const response = await axios.get("/api/round-table/get-all-record");
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setRoundtableLoading(false);
        }
    };

    useEffect(() => {
        fetchRoundtable();
    }, []);

    return { data, roundtableLoading, error, refetch: fetchRoundtable };
};
