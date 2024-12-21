import Image from "next/image";
import welcome from "../../../Assets/welcome.png";
export default function Welcome() {
    return (
        <div className="relative">
            <div>
                <Image src={welcome} alt="pic" className="w-full h-[300px]" />
            </div>
            <div className="flex flex-col justify-center items-center absolute bottom-0 top-[0%] p-4 gap-2">
                <h1 className="text-[#AB572D] text-[18px] font-normal sm:text-[22px] xl:text-[26px]">Welcome to Local Face</h1>
                <p className="text-[white] text-[12px] text-center font-light sm:w-[60%] sm:text-[14px] xl:w-[60%] xl:text-[16px]">
                    Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named Victory Scented is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
                </p>
            </div>
        </div>
    );
}
