import { useState, useEffect } from "react";
import axios from "axios";

export const useEvent = () => {
    const [data, setData] = useState([]);       // renamed from events → data
    const [eventLoading, setEventLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            setEventLoading(true);
            const response = await axios.get("/api/business-hub/events");
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setEventLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return { data, eventLoading, error, refetch: fetchEvents };
};
