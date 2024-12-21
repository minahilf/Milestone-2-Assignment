import Image from "next/image";
import s1 from "../../../Assets/s1.png";
import s2 from "../../../Assets/s2.png";
import s3 from "../../../Assets/s3.png";
import s4 from "../../../Assets/s4.png";
import s5 from "../../../Assets/s5.png";
import s6 from "../../../Assets/s6.png";
import s7 from "../../../Assets/s7.png";


export default function Service() {
    const services = [
        {
            number: "01.",
            title: "Personal Fragrance Consultations",
            description:
                "Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you're looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.",
            reverse: false,
            image:s2
        },
        {
            number: "02.",
            title: "Custom Fragrance Creation",
            description: "Experience the art of bespoke perfumery with our custom fragrance creation service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we'll help you bring your fragrance vision to life. Whether it's a special occasion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.",
            reverse: true,
            image:s3
        },
        {
            number: "03.",
            title: "Scented Gift Selection",
            description:
                "Looking for a meaningful gift that leaves a lasting impression? Our scented gift selection service is designed to help you find the perfect fragrance gift for any occasion. Whether it's a birthday, anniversary, or a gesture of appreciation, our experts will assist you in choosing a fragrance that perfectly conveys your sentiments and makes the recipient feel cherished.",
            reverse: false,
            image:s4
        },
        {
            number: "04.",
            title: "Fragrance Events and Workshops",
            description:
                "Join us for fragrance-centric events and workshops that celebrate the art of perfumery. Immerse yourself in the captivating world of scents, learn from experts, and discover the nuances of different fragrance families. These events are perfect for fragrance enthusiasts and novices alike, providing a unique opportunity to expand your olfactory knowledge.",
            reverse: true,
            image:s5
        },
        {
            number: "05.",
            title: "Eco-friendly Initiatives",
            description:
                "At Local Face, we are committed to sustainability and eco-conscious practices. As part of our services, we offer guidance on selecting environmentally friendly and cruelty-free fragrances. We partner with brands that share our values and are dedicated to making a positive impact on the planet.",
            reverse: false,
            image:s6
        },
        {
            number: "06.",
            title: "Online Shopping Convenience",
            description:
                "Explore our carefully curated collection of perfumes from the comfort of your home. Our user-friendly website offers a seamless online shopping experience, complete with detailed product descriptions and customer reviews. You can also reach out to our customer support team for any assistance during your shopping journey.",
            reverse: true,
            image:s7
        },
    ];

    return (
        <div>
            <div className="relative">
                <Image
                    src={s1}
                    alt="About Us"
                    className="xl:h-[400px] lg:h-[300px] sm:h-[300px] w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center sm:gap-6">
                    <h1 className="text-white text-[16px] font-medium text-center sm:text-[24px] lg:text-[36px] xl:text-[40px]">
                        Our Services
                    </h1>
                    <p className="text-white text-[8px] text-center w-[70%] sm:text-[14px] lg:w-[50%] xl:text-[16px]">
                        At Local Face, we are dedicated to providing you with a delightful and immersive perfume shopping experience. Our services are tailored to ensure that you find the perfect fragrance that complements your unique personality and style. We take pride in offering a range of services that go beyond just selling perfumes, aiming to make your journey with us truly special.
                    </p>
                </div>
            </div>


            {services.map((service, index) => (
                <div className="bg-black p-4 lg:p-10 xl:p-[6%]" key={index}>
                    <div className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 ${service.reverse ? "sm:flex-row-reverse" : "sm:flex-row"} items-center`}>
                        <div className="flex flex-col justify-center gap-6 flex-1">
                            <h1 className="text-[#AB572D] font-bold text-[30px] lg:text-[36px] xl:text-[40px]">
                                {service.number}
                            </h1>
                            <h1 className="text-white font-medium text-[18px] lg:text-[22px] xl:text-[26px]">
                                {service.title}
                            </h1>
                            <p className="text-white text-[14px] lg:text-[16px] xl:text-[18px]">
                                {service.description}
                            </p>
                        </div>
                        <Image
                            src={service.image}
                            alt={service.title}
                            className="w-full sm:w-[300px] lg:w-[400px] xl:w-[500px] h-auto aspect-square object-cover"
                        />
                    </div>
                </div>
                
            ))}
               
            </div>

  
    );
}