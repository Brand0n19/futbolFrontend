import { useEffect, useState } from "react";
import { Futbolista } from "../model/futbolista.model";
import { getDataById } from "../services/futbolistas.services";

interface Modal {
  id: number
  onClose: () => void
}


export default function Modal({id, onClose}:Modal) {
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

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-black bg-opacity-50">
      {loading && <div>Cargando contenido ....</div>}
      {error && <div>Error: {error}</div>}
      {futbolista && (
        <div className="bg-white rounded-xl shadow-lg p-6 transition-all max-w-md w-full">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            {futbolista.nombres} {futbolista.apellidos}
          </h2>
          <p>
            <strong className="me-3 text-sm md:text-lg">Fecha de nacimiento:</strong>
            {futbolista.fecha_nac}
          </p>
          <p>
            <strong className="me-3 text-sm md:text-lg">Caracteristicas:</strong>
            {futbolista.caracteristicas}
          </p>
          <p>
            <strong className="me-3 text-sm md:text-lg">Posicion:</strong>
            {futbolista.objPosicion.descripcion}
          </p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm md:text-lg"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
