import { useState } from "react";
import { useGetAll } from "../hook/useGetAll";
import Modal from "./modal.components";
import Pagination from "./pagination.components";

export default function Table() {
  const { futbolistas, error, loading } = useGetAll();

  const [selectedFutbolista, setSelectedFutbolista] = useState<number|null>(null);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const playersPerPage = 10;
  const lastPage = currentPage * playersPerPage;
  const firstPage = lastPage - playersPerPage;
  const records = futbolistas.slice(firstPage, lastPage);
  const numberPage = Math.ceil(futbolistas.length / playersPerPage);
  const numbers = [...Array(numberPage + 1).keys()].slice(1);

  function handleModal(id : number) {
    setSelectedFutbolista(id);
  }

  function closeModal() {
    setSelectedFutbolista(0);
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-10 px-10">
      <h1 className="text-xl md:text-4xl font-extrabold mt-10 text-slate-300">
        Tabla de futbolistas
      </h1>
      {loading && (
        <div className="text-slate-300 text-4xl font-semibold">
          Cargando contenido ....
        </div>
      )}
      {error && (
        <div className="text-slate-300 text-4xl font-semibold">
          Error: {error}
        </div>
      )}
      <table className="w-full text-xs md:text-sm rtl:text-right text-slate-300 text-center">
        <thead className=" font-semibold md:font-bold tracking-wider bg-neutral-800">
          <tr className="[&>th]:border [&>th]:py-2">
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de nacimiento</th>
            <th>Caracteristicas</th>
            <th>Posicion</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody className=" bg-neutral-700">
          {records.map((futbolistas) => (
            <tr key={futbolistas.id} className="[&>td]:border [&>td]:py-2">
              <td>{futbolistas.nombres}</td>
              <td>{futbolistas.apellidos}</td>
              <td>{futbolistas.fecha_nac}</td>
              <td>{futbolistas.caracteristicas}</td>
              <td>{futbolistas.objPosicion.descripcion}</td>
              <td>
                <button 
                  className="w-9/12 bg-green-700 rounded-md"
                  onClick={()=> handleModal(futbolistas.id)}
                  >Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberPage={numberPage} numbers={numbers}/>
      </div>
      {selectedFutbolista && (
        <Modal id={selectedFutbolista} onClose={closeModal} />
      )}
    </div>
  );
}
