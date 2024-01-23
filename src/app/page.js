import Image from "next/image";

import Header from "@/components/Header";
import CompanyList from "@/components/CompanyList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <section className="flex items-center justify-between space-x-6">
        <div className="space-y-4">
          <h1 className="text-6xl font-medium leading-snug">
            Welcome to Architectural Elegance
          </h1>
          <h5 className="">
            At Architectural Elegance, we thrive on challenges. Our team is
            dedicated to providing innovative solutions that not only meet but
            exceed your expectations.
          </h5>
          <div className="space-x-4 flex items-center">
            <button className="p-3 px-6 border-2 border-black bg-black text-white">
              Get Started
            </button>
            <button className="p-3 px-6 border-2 border-black text-black font-medium flex items-center">
              <Image
                src="/play-circle-line.png"
                width={25}
                height={25}
                className="mr-2"
              />
              Play Video
            </button>
          </div>
        </div>
        <Image src="/top.png" width={750} height={500} />
      </section>
      <section className="my-12 pb-20">
        <CompanyList />
      </section>
      <section className="pb-28 flex items-center">
        <div className="flex w-full gap-12">
          <Image
            src={"/buildings/building-1.png"}
            alt=".building-1"
            width={280}
            height={440}
          />
          <Image
            src={"/buildings/building-2.png"}
            alt=".building-2"
            width={280}
            height={440}
            className="translate-y-6"
          />
        </div>
        <div className="">
          <h6 className="font-medium">Who We Are</h6>
          <hr className="border-black border-2 w-8 rounded-full" />
          <h1 className="text-6xl font-medium leading-snug">
            Empowering Environments, Inspiring Lives.
          </h1>
          <p className="text-gray-700">
            Our mission is to go beyond conventional design, crafting spaces
            that resonate with purpose and leave a lasting impact.
          </p>
          <button className="p-3 px-6 border-2 border-black bg-black text-white mt-8">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
