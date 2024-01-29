import { HeroSection, Categories, Products } from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Products type="recently-viewed" />
      <Products type="recommended" />
    </>
  );
}
