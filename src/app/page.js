import GameCard from "./components/gameCard";

export default function Home() {
  return (
    <div class="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[60px] sm:py-[50px] sm:px-[10px]">
      <GameCard />
    </div>
  )

}
