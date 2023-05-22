import Banner from "@/components/Banner";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="px-10 lg:px-20 dark:bg-[#161616] dark:text-gray-100 bg-gray-50 text-gray-700 font-light">
      <Nav />
      <Banner/>
    </main>
  );
}
