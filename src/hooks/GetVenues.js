import { useState, useEffect } from "react";
import axios from "axios";

export const useVenues = () => {
    const [venues, setVenues] = useState([]);
    const [venueLoading, setVenuesLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVenues = async () => {
        try {
            setVenuesLoading(true);
            const response = await axios.get("/api/business-hub/venues");
            setVenues(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setVenuesLoading(false);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    return { venues, venueLoading, error, refetch: fetchVenues };
};
