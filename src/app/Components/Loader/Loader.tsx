import { DEFAULT_VISIBLE_ITEMS } from "@/app/constants";

const Loader: React.FC = () => {
  return (
    <>
      {Array.from({ length: DEFAULT_VISIBLE_ITEMS }, (_, key) => key + 1).map(
        (item) => (
          <div
            className="border border-slate-200 shadow p-16 max-w-sm w-full mb-4"
            key={item}
          >
            <div className="animate-pulse flex  flex-col  space-x-4">
              <div className="bg-slate-200 h-[180px] w-[250px] mb-4"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export { Loader };
