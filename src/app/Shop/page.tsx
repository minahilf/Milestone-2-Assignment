import Image from "next/image";
import p1 from "../../../Assets/p1.png";
import p2 from "../../../Assets/p2.png";
import p3 from "../../../Assets/p3.png";
import p4 from "../../../Assets/p4.png";
import p5 from "../../../Assets/p5.png";
import p6 from "../../../Assets/p6.png";
import p7 from "../../../Assets/p7.png";
import p8 from "../../../Assets/p8.png";
import p9 from "../../../Assets/p9.png";
import p10 from "../../../Assets/p10.png";
import p11 from "../../../Assets/p11.png";
import p12 from "../../../Assets/p12.png";
import c6 from "../../../Assets/c6.png";
import pq from "../../../Assets/pq.png"

export default function Shop() {
  const products = [
    { src: p1, alt: "p1", name: "Luxurious Elixir Rough", price: "$200.00", volume: "100ml" },
    { src: p2, alt: "p2", name: "The Golden Legacy", price: "$160.00", volume: "100ml" },
    { src: p3, alt: "p3", name: "Luxurious Elixir", price: "$250.00", volume: "100ml" },
    { src: p4, alt: "p4", name: "Luxurious Essence", price: "$260.00", volume: "100ml" },
    { src: p5, alt: "p5", name: "Aurum Aura", price: "$200.00", volume: "100ml" },
    { src: p6, alt: "p6", name: "Gleaming Gilt", price: "$160.00", volume: "100ml" },
    { src: p7, alt: "p7", name: "Gilded Elixer Rough", price: "$170.00", volume: "100ml" },
    { src: p8, alt: "p8", name: "Golden Luminary", price: "$120.00", volume: "100ml" },
    { src: p9, alt: "p9", name: "Decadent Opal", price: "$160.00", volume: "100ml" },
    { src: p10, alt: "p10", name: "Glided Elixer", price: "$200.00", volume: "100ml" },
    { src: p11, alt: "p11", name: "Glamourous Gilt", price: "$160.00", volume: "100ml" },
    { src: p12, alt: "p12", name: "Luxury Enigma", price: "$190.00", volume: "100ml" },
  ];

  return (
    <div className="p-6 bg-black">
      <h1 className="text-[#AB572D] text-center font-medium text-[28px]">
        Best Selling Products
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 xl:justify-evenly">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#303030] w-[200px] h-[320px] rounded-md"
          >
            <Image src={product.src} alt={product.alt} className="w-[200px] h-[250px]" />
            <div>
              <h3 className="text-white font-normal text-[16px] text-center">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-[#AB572D] font-medium">{product.price}</p>
                <p className="text-white text-[12px] font-light">{product.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-400 font-light text-[12px] text-center mt-6">
        Page 1 of 4
      </p>

      <h1 className="text-white text-center font-medium text-[28px] mt-4">Special Offers</h1>

   
      <div className="bg-gradient-to-b from-[#074054] via-[#012A3D] to-black sm:flex sm:mt-4">
        <Image
          src={c6}
          alt="offer"
          className="sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] "
        />
        <div className="flex flex-col gap-10 p-4 xl:p-8">
          <h1 className="text-white font-medium text-[26px] lg:mt-6 lg:w-[50%] xl:text-[32px]">
            Limited Time Offer: 20% OFF on Aqua Serenity Perfume!
          </h1>
          <div>
            <h1 className="text-white font-medium text-[22px] xl:text-[24px]">
              Aqua Serenity
            </h1>
            <h1 className="text-[#13D0E3] font-normal text-[22px] xl:text-[24px]">
              Embrace the Tranquil Tides
            </h1>
            <p className="text-white text-[12px] lg:w-[50%] xl:text-[14px]">
              Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.
            </p>
            <div className="border bg-transparent border-white w-[100px] rounded-md mt-4 flex justify-center items-center h-[30px]">
              <button className="text-white text-[12px]">Know More</button>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-gradient-to-b from-[#562E1A]  to-black sm:flex sm:mt-4 sm:flex-row-reverse">
        <Image
          src={pq}
          alt="offer"
          className="sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] "
        />
        <div className="flex flex-col gap-10 p-4 xl:p-8">
          <h1 className="text-white font-medium text-[26px] lg:mt-6 lg:w-[50%] xl:text-[32px]">
            Limited Time Offer: 20% OFF on Golden Angel Perfume!
          </h1>
          <div>
            <h1 className="text-white font-medium text-[22px] xl:text-[24px]">
              Golden Angel
            </h1>
            <h1 className="text-[#13D0E3] font-normal text-[22px] xl:text-[24px]">
              Unleash Your Divine Glow
            </h1>
            <p className="text-white text-[12px] lg:w-[50%] xl:text-[14px]">
            Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.
            </p>
            <div className="border bg-transparent border-white w-[100px] rounded-md mt-4 flex justify-center items-center h-[30px]">
              <button className="text-white text-[12px]">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
