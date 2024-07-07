import { useEffect, useState } from "react";
import { Futbolista } from "../model/futbolista.model";
import { getDataAll } from "../services/futbolistas.services";

export const useGetAll =()=> {
    const [futbolistas, setfutbolistas] = useState<Futbolista[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataAll();
        setfutbolistas(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {futbolistas, loading, error}
}