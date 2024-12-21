 import Image from "next/image";
import about from "../../../Assets/about.png"
import about2 from "../../../Assets/about2.png"
export default function About() {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <Image
                    src={about} 
                    alt="About" 
                    className="xl:h-[400px] lg:h-[300px] sm:h-[300px] w-full object-cover" 
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center sm:gap-6">
                    <h1 className="text-white text-[16px] font-medium text-center sm:text-[24px] lg:text-[36px] xl:text-[40px]">
                        About Us
                    </h1>
                    <p className="text-white text-[8px] text-center w-[70%] sm:text-[14px] lg:w-[50%] xl:text-[16px]">
                        At Local Face, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
                    </p>
                </div>
            </div>
            
            <div className="bg-[#242424] flex flex-col justify-center items-center gap-2 h-[200px] sm:p-4 lg:h-[300px]">
                <h1 className="text-[#AB572D] text-[16px] text-center sm:text-[24px] xl:text-[40px] lg:text-[34px]">
                    Our Story
                </h1>
                <p className="text-white text-[10px] text-center w-[70%] sm:text-[14px] lg:w-[50%] xl:text-[16px]">
                    Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of cultures around the world, we set out on a journey to curate a collection of scents that capture the essence of each region. Our aim is to bring you closer to the heart and soul of different cultures through the art of perfumery.
                </p>
            </div>
            <Image src={about2} alt="about" className="lg:h-[400px] xl:h-[500px]"/>

            <div className="bg-[#242424] py-6 px-4 lg:h-[400px]">
            <h1 className="text-[#AB572D] text-[16px] text-center sm:text-[24px] xl:text-[40px] lg:text-[34px] mb-2">
                What Makes Us Unique
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center p-4">
                    <h2 className="text-white text-[14px] font-medium mb-2">
                        Locally Inspired
                    </h2>
                    <p className="text-white text-[14px] text-center">
                        Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin
                    </p>
                </div>

                <div className="flex flex-col items-center p-4">
                    <h2 className="text-white text-[14px] font-medium mb-2">
                        High Quality Ingredients
                    </h2> 
                    <p className="text-white text-[14px] text-center">
                        We believe that the key to an extraordinary scent lies in the quality of ingredients. That's why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4">
                    <h2 className="text-white text-[14px] font-medium mb-2">
                        Personalized Service
                    </h2>
                    <p className="text-white text-[14px] text-center">
                        We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you're exploring new scents or seeking to rediscover an old favorite, we're here to guide you every step of the way.
                    </p>
                </div>
            </div>
            <p className="text-white text-[12px] mt-4 sm:text-[12px] lg:text-[14px] xl:text-[16px]">Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. Discover the captivating aromas that embrace the essence of local cultures and connect with the beauty of our shared humanity.</p>
        </div>        
        </div>
    );
}