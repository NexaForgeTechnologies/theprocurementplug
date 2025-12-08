import { useState, useEffect } from "react";
import axios from "axios";

export const usePost = () => {
    const [data, setData] = useState([]);       // renamed from events → data
    const [postLoading, setPostLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        try {
            setPostLoading(true);
            const response = await axios.get("/api/thought-leadership/get-all-record");
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setPostLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return { data, postLoading, error, refetch: fetchPost };
};
