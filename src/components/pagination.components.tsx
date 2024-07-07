interface Pagination{
    currentPage: number
    setCurrentPage:  (param: number) => void
    numberPage: number
    numbers: number[]
}

export default function Pagination({currentPage, setCurrentPage,numberPage,numbers}:Pagination) {

    function prePage() {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      }
      function changePage(num: number) {
        setCurrentPage(num);
      }
      function nextPage() {
        if (currentPage !== numberPage) {
          setCurrentPage(currentPage + 1);
        }
      }
  return (
    <div className="flex font-semibold text-sm ">
      <button
        className="bg-slate-300 text-gray-900 px-3 rounded-s-lg hover:bg-slate-400"
        onClick={prePage}
      >
        Anterior
      </button>
      {numbers.map((num, i) => (
        <div className="bg-slate-300 text-gray-900" key={i}>
          <button
            className={`bg-slate-300 text-gray-900 px-3 hover:bg-slate-400 ${
              currentPage === num ? "bg-slate-400" : ""
            }`}
            onClick={() => changePage(num)}
          >
            {num}
          </button>
        </div>
      ))}
      <button
        className="bg-slate-300 text-gray-900 px-3 rounded-e-lg hover:bg-slate-400"
        onClick={nextPage}
      >
        Siguiente
      </button>
    </div>
  );
}
