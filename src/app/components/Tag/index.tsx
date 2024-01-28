interface TagProps {
   children: React.ReactNode;
}
    
export default function Tag({children} : TagProps) {
  return (
    <div className="inline-block rounded-md border border-indigo-500 text-indigo-500 px-3 py-1 text-sm ">
      {children}
    </div>
  );
}
