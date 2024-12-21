import Image from "next/image";
import perfume from "../../../Assets/main.png";

export default function Main() {
  return (
    <div className="bg-black flex flex-col items-center justify-center sm:flex-row sm:pr-10 lg:pr-20 xl:pr-32 sm:pl-10 lg:pl-20 xl:pl-32">

      <div className="flex flex-col gap-4 text-center sm:text-left sm:items-start sm:relative sm:bottom-[16px]">
        <h1 className="text-white pt-[16%] font-thin text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[36px]">
          Elevate Your Spirit with Victory Scented Fragrances!
        </h1>
        <p className="text-white font-thin text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]">
          Shop now and embrace the sweet smell of victory <br />
          with Local Face.
        </p>
        <div className="flex justify-center items-center">
          <button className="w-[100px] h-[30px] bg-[#d4652e] flex justify-center items-center rounded-sm text-white font-bold text-[14px] sm:w-[120px] sm:h-[35px] lg:w-[140px] lg:h-[40px]">
            Shop Now
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:w-1/2 flex justify-center sm:justify-end">
        <Image
          src={perfume}
          alt="perfume"
          className="w-[300px] h-[500px] sm:w-[350px] sm:h-[550px] lg:w-[400px] lg:h-[600px] xl:w-[450px] xl:h-[650px]"
        />
      </div>
    </div>
  );
}
