import Image from "next/image";
import c1 from "../../../Assets/c1.png";
import c2 from "../../../Assets/c2.png";
import c3 from "../../../Assets/c3.png";
import c4 from "../../../Assets/c4.png";
import c5 from "../../../Assets/c5.png";
import c6 from "../../../Assets/c6.png";
import c7 from "../../../Assets/c7.png"


export default function Collection() {
    return (
        <div className="p-8 bg-black">
            <h1 className="text-[#AB572D] text-center font-medium text-[28px] mb-6">
                Our Collections
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Collection 1 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] xl:w-[600px] xl:h-[300px]">
                    <Image
                        src={c1}
                        alt="Designer Delight Collection"
                        className="h-full w-full "
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Designer Delights Collection
                    </p>
                </div>
                {/* Collection 2 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] xl:w-[600px] xl:h-[300px]">
                    <Image
                        src={c2}
                        alt="Travel Essential Collection"
                        className="h-full w-full"
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Travel Essentials Collection
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Collection 3 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] mt-4 xl:w-[600px] xl:h-[300px]">
                    <Image
                        src={c3}
                        alt="Designer Delight Collection"
                        className="h-full w-full "
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Special Occasions Collection
                    </p>
                </div>
                {/* Collection 4 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] xl:w-[600px] xl:h-[300px] sm:mt-4">
                    <Image
                        src={c4}
                        alt="Travel Essential Collection"
                        className="h-full w-full"
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Seasonal Sensations Collection
                    </p>
                </div>
            </div>


            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Collection 5 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] mt-4 xl:w-[600px] xl:h-[300px]">
                    <Image
                        src={c5}
                        alt="Designer Delight Collection"
                        className="h-full w-full "
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Vintage Treasures Collection
                    </p>
                </div>
                {/* Collection 6 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] xl:w-[600px] xl:h-[300px] sm:mt-4">
                    <Image
                        src={c6}
                        alt="Travel Essential Collection"
                        className="h-full w-full"
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Limited Edition Collection
                    </p>
                </div>
                {/* Collection 7 */}
                <div className="relative h-[250px] w-[300px] sm:h-[200px] sm:w-[400px] lg:h-[250px] lg:w-[500px] xl:w-[600px] xl:h-[300px] sm:mt-4">
                    <Image
                        src={c7}
                        alt="Travel Essential Collection"
                        className="h-full w-full"
                    />
                    <p className="absolute bottom-4 left-4 text-white font-light text-[12px] sm:text-[14px] lg:text-[16px]">
                        Modern Classics Collection
                    </p>
                </div>
            </div>
        </div>
    );
}
