import { BiImageAlt } from "react-icons/bi";

const EditPostDetailSkeleton = () => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start animate-pulse">
      <div className="flex flex-col w-full justify-center">
        {/* post image */}
        <div className="rounded-xl w-full h-[300px] aspect-video bg-slate-300 flex justify-center items-center mb-4">
          <BiImageAlt className="text-4xl text-slate-400" />
        </div>
        {/* Delete Image button */}
        <div className="w-[100px] h-[20px] bg-slate-300 rounded-md px-2 py-1 mb-5" />
        {/* post title */}
        <div className="w-[60%] h-[15px] bg-slate-300 rounded-lg px-2 py-1 mb-6" />
        {/* editor */}
        <div className="w-full h-[60px] bg-slate-300 rounded-lg px-2 py-1 mb-4" />
        <div className="w-full h-[150px] bg-slate-200 rounded-lg px-2 py-1 mb-5" />
        {/* update button */}
        <div className="w-full h-[22px] bg-slate-300 rounded-md px-2 py-1" />
      </div>
    </section>
  );
};

export default EditPostDetailSkeleton;
