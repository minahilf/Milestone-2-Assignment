import Image from "next/image";
import value from "../../../Assets/value.png"
export default function Value(){
    return(
        <div className="bg-black flex flex-col justify-center items-center sm:flex-row  ">
            <Image src={value} alt="val" className=" w-full sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[400px] xl:w-[700px] xl:h-[500px]"/>
            <div className="text-center flex flex-col items-center justify-center mt-4 gap-4">
                <h1 className="text-white text-[20px] font-medium lg:text-[28px] xl:text-[34px]">Our Values</h1>
                <p className="text-white text-[12px] w-[80%] lg:w-[60%] lg:text-[14px] xl:text-[16px] pb-5">At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives. 
<br /><br />
Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.</p>
            </div>
        </div>
    )
}