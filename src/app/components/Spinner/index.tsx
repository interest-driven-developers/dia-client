export default function Spinner() {
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="relative">
    //     <div className="w-10 h-10 rounded-full absolute border-2 border-solid border-gray-200"></div>
    //     <div className="w-10 h-10 rounded-full animate-spin absolute border-2 border-solid border-primary border-t-transparent"></div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-full w-full">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
