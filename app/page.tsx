import { Category } from "@/components/category/category";

const categories = [
  {
    name: "Headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    link: "/headphones",
  },
  {
    name: "Speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    link: "/speakers",
  },
  {
    name: "Earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    link: "/earphones",
  },
];

export default function Home() {
  return (
    <>
      <header className="text-center bg-Dark-Gray bg-[url(/assets/home/mobile/image-header.jpg)] bg-cover pt-[108px] bg-position-[center_top_-4rem] h-[510px]">
      
        <p className="opacity-50 uppercase mb-4">New product</p>
        <h1 className="uppercase text-4xl font-bold mb-6">XX99 Mark II HeadphoneS</h1>
        <p className="text-[.9375rem] w-80 m-auto mb-[28px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <button className="bg-Orange w-40 h-12 uppercase cursor-pointer hover:bg-Soft-Orange">See product</button>
      </header>
      <section className="flex flex-col gap-[68px] mt-[92px] mb-[168px] items-center">
        {
          categories.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              image={category.image}
              link={category.link}
              width={index === 2 ? 200: 147}
            />
          ))
        }
      </section>
    </>
  );
}
