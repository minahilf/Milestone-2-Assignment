import Image from "next/image";
import p1 from "../../../Assets/p1.png";
import p2 from "../../../Assets/p2.png";
import p3 from "../../../Assets/p3.png";
import p4 from "../../../Assets/p4.png";

const products = [
  { src: p1, alt: "p1", name: "Luxurious Elixir Rough", price: "$200.00", volume: "100ml" },
  { src: p2, alt: "p2", name: "The Golden Legacy", price: "$160.00", volume: "100ml" },
  { src: p3, alt: "p3", name: "Luxurious Elixir", price: "$250.00", volume: "100ml" },
  { src: p4, alt: "p4", name: "Luxurious Essence", price: "$260.00", volume: "100ml" },
];

export default function Product() {
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
    </div>
  );
}
