import Image from "next/image";
import a1 from "../../../Assets/a1.png";
import a2 from "../../../Assets/a2.png";
import a3 from "../../../Assets/a3.png";

export default function Articles() {
    const articles = [
        {
            id: 1,
            image: a1,
            title: "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
            description: "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.",
        },
        {
            id: 2,
            image: a2,
            title: "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
            description: "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.",
        },
        {
            id: 3,
            image: a3,
            title: "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
            description: "Rose, often referred to as the 'Queen of Flowers,' has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.",
        },
    ];

    return (
        <div className="p-6 bg-black">
            <h1 className="text-[#AB572D] text-center font-medium text-[28px] mb-4">Latest Articles</h1>
            <div className="flex flex-row gap-6 overflow-x-scroll scrollbar-hide xl:ml-[8em]">
                {articles.map((article) => (
                    <div key={article.id} className="min-w-[300px]">
                        <Image src={article.image} alt={`article-${article.id}`} className="w-[300px] h-[300px]" />
                        <div>
                            <h1 className="text-white font-semibold text-[16px] mt-2 xl:w-[50%]">{article.title}</h1>
                            <p className="text-white text-[12px] mt-1 xl:w-[60%]">{article.description}</p>
                            <div className="border bg-transparent border-white w-[100px] rounded-md mt-4 flex justify-center items-center h-[30px]">
                                <button className="text-white text-[12px]">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
