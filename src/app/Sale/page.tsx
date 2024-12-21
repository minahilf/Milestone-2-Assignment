import Image from "next/image";
import sale from "../../../Assets/sale.png";

export default function Sale() {
    return (
        <div className="relative">
            <Image src={sale} alt="sale" className="w-full" />
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-1 sm:gap-2 lg:gap-6 xl:pl-10">
                <h1 className="font-medium text-[12px] text-white sm:text-[24px] lg:text-[26px] xl:text-[34px]">
                    Perfume Year-End Sale! <br /> Up to 50% OFF
                </h1>
                <p className="text-[9px] font-light text-white w-[60%] sm:text-[14px] sm:w-[50%] lg:w-[40%] lg:text-[16px] xl:text-[18px] xl:w-[40%]">
                    Discover an exquisite collection of premium perfumes at
                    unbelievable prices during our exclusive Perfume Sale!
                </p>
                <button className="w-[80px] h-[20px] bg-[#d4652e] rounded-sm text-white font-bold text-[10px] sm:w-[120px] sm:h-[35px] lg:w-[140px] lg:h-[40px] sm:text-[12px] lg:text-[14px]">
                    Know More
                </button>
            </div>
        </div>
    );
}
