export default function Spinner() {
  return (
    <div className="flex justify-center">
      <div className="w-10 h-10 rounded-full absolute border-2 border-solid border-gray-200"></div>
      <div className="w-10 h-10 rounded-full animate-spin absolute border-2 border-solid border-indigo-600 border-t-transparent"></div>
    </div>
  );
}
