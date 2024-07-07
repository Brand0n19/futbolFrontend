import { useEffect, useState } from "react";
import { Futbolista } from "../model/futbolista.model";
import { getDataById } from "../services/futbolistas.services";

export const useGetById =(id:number)=> {
    const [futbolista, setFutbolista] = useState<Futbolista | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getDataById(id);
          setFutbolista(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);

  return {futbolista, loading, error}
}