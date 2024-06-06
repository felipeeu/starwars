import Image from "next/image";
import React from "react";

interface ItemListProps {}

const MobileItem = () => (
  <div className="lg:hidden flex flex-row pr-[59px] ">
    <Image
      className="w-auto pr-3 pb-4"
      src="https://betadesign.com.br/site/wp-content/themes/bds/images/no-image-found-360x250.png"
      alt="image"
      width={115}
      height={146}
    />
    <div className="flex flex-col gap-[5px] pb-[13px]">
      <h4>C-3PO</h4>
      <h5>Tatooine</h5>
    </div>
  </div>
);

const ResponsiveItem = () => (
  <div className="hidden lg:grid lg:pb-[110px]">
    <Image
      className="w-full pr-3 pb-4"
      src="https://betadesign.com.br/site/wp-content/themes/bds/images/no-image-found-360x250.png"
      alt="image"
      width={115}
      height={146}
    />
    <div className="flex flex-col gap-[5px] pb-[13px]">
      <h4 className="pr-[278.5px]">C-3PO</h4>
      <h5 className="text-base pr-[364.5px]">Tatooine</h5>
    </div>
    <div className="p-item uppercase text-[#757575]">
      <p>{`height . 172`}</p>
      <p>{`mass . 172`}</p>
      <p>{`gender . 172`}</p>
    </div>
  </div>
);

const ItemList: React.FC<ItemListProps> = ({}) => {
  return (
    <div className="flex flex-col w-auto px-7 font-helvetica-neue gap-[2.5em]">
      <h2 className="font-light text-[#333333] leading-10 lg:text-34">
        All Characters
      </h2>
      <div className="lg:grid lg:grid-cols-4">
        {Array.from(Array(16).keys()).map((item) => (
          <div key={item}>
            <MobileItem />
            <ResponsiveItem />
          </div>
        ))}
      </div>
      <button className="min-w-[196px] border border-[#002B53] self-center lg:min-w-[496px]">
        <span className="loadmore uppercase text-[#002B53]">load more</span>
      </button>
    </div>
  );
};
export { ItemList };
