import Link from "next/link";
import CarouselCard from "./_components/CarouselCard";
import ClientSideVisibleItems from "./_components/ClientSideVisibleItems";
import { getWarehouseStore } from "./_lib/data-service";
import Image from "next/image";
import bg from "@/public/bg.png"


export default async function Page() {
  const products = await getWarehouseStore();

  const carouselCard = products.map((product) => (
    <CarouselCard product={product} key={product.id} />
  ));

  // Predvolený počet viditeľných položiek (napr. na základe stredného breakpointu)
  const defaultVisibleItems = 4;

  return (
    <div className="flex flex-col items-center justify-around min-h-screen w-full px-24 pb-24">
      <div className="relative text-center border rounded-md">
        <Image src={bg} fill quality={80} placeholder="blur" className="object-cover object-top opacity-20" alt="Warehouse products" />

        <h1 className="text-8xl text-white tracking-tight font-normal px-32 py-10">
          Warehouse shop
        </h1>
      </div>


      <div className="w-3/4">
        <ClientSideVisibleItems
          defaultVisibleItems={defaultVisibleItems}
          autoSlide={true}
          autoSlideInterval={5000}
        >
          {carouselCard}
        </ClientSideVisibleItems>
      </div>
    </div>
  );
}
