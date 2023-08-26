import { BiImageAlt } from "react-icons/bi";

const ArticleDetailSkeleton = () => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start animate-pulse">
      <article className="flex-1">
        {/* post image */}
        <div className="rounded-xl w-full aspect-video bg-slate-300 flex justify-center items-center">
          <BiImageAlt className="text-4xl text-slate-400" />
        </div>
        {/* user profile */}
        <div className="mt-4 flex flex-row items-center gap-x-2">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300" />
          <div className="w-24 h-[10px] bg-slate-300 rounded-lg" />
        </div>
        {/* article posted on */}
        <div className="w-[35%] h-2 bg-slate-300 rounded-lg mt-2" />
        {/* categories */}
        <div className="flex gap-x-2 mt-4 mb-8">
          <div className="bg-slate-300 rounded-lg px-3 py-1.5 w-[120px] h-[35px]" />
          <div className="bg-slate-300 rounded-lg px-3 py-1.5 w-[150px] h-[35px]" />
          <div className="bg-slate-300 rounded-lg px-3 py-1.5 w-[100px] h-[35px]" />
        </div>
        {/* title */}
        <div className="mt-4 md:text-[26px] w-3/5 h-2 rounded-lg bg-slate-300" />
        <div className="mt-4 prose prose-sm sm:prose-base">
          <p className="w-full h-2 mt-6 rounded-lg bg-slate-300"></p>
          <p className="w-[98%] h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-full h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-[40%] h-2 mt-4 rounded-lg bg-slate-300"></p>
        </div>
      </article>

      {/* Suggested posts */}
      <div
        className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-8 lg:mt-0 lg:max-w-xs`}
      >
        {/* title */}
        <div className="w-[50%] h-2 rounded-lg bg-slate-300" />
        <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
          {[...Array(6)].map((item, index) => (
            <div
              key={index}
              className="flex space-x-3 flex-nowrap items-center"
            >
              {/* image */}
              <div className="aspect-square w-1/5 rounded-lg bg-slate-300" />
              <div className="w-full">
                {/* post title */}
                <div className="w-full h-2 rounded-lg bg-slate-300" />
                <p className="w-[40%] h-2 mt-4 rounded-lg bg-slate-300"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailSkeleton;
