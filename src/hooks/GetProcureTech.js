import { useState, useEffect } from "react";
import axios from "axios";

export const useProcuretech = (typeId) => {
  const [procuretechSolutions, setProcuretech] = useState([]);
  const [procureTechLoading, setProcureTechLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProcureTech = async () => {
    try {
      setProcureTechLoading(true);

      const url = typeId
        ? `/api/business-hub/procuretech-solution?type_id=${typeId}`
        : `/api/business-hub/procuretech-solution`;

      const response = await axios.get(url);

      // make sure response is always array
      setProcuretech(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setProcureTechLoading(false);
    }
  };

  useEffect(() => {
    fetchProcureTech();
  }, [typeId]); // refetch when typeId changes

  return { procuretechSolutions, procureTechLoading, error, refetch: fetchProcureTech };
};
