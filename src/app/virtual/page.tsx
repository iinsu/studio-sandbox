import { RowVirtualDynamic } from "./_components/row";

const VirtualExample = () => {
  return (
    <>
      <div className="h-full bg-slate-200 flex flex-col justify-center items-center">
        <div className="h-[700px] bg-white overflow-auto">
          <div className="h-[150px] bg-amber-200 w-[600px]">Head</div>
          <div className="h-[550px] bg-violet-200 w-[600px]">
            <RowVirtualDynamic />
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualExample;
