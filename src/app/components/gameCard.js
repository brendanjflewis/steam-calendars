export default async function GameCard() {

    // fetch is specifically for one game. needs to be refactored
    const getGame = async () => {
        const res = await fetch('https://store.steampowered.com/api/appdetails/?appids=2322010&key=STEAM_API_KEY')
        return res.json()
    }

    const gameData = await getGame()
    const gameDetails = gameData['2322010'].data

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={gameDetails.header_image}></img>
            <div class="px-4 py-4">
                <h1 class="font-bold text-xl mb-2">{gameDetails.name}</h1>
                <p class="text-gray-700 text-base">{gameDetails.short_description}</p>
                <p>{gameDetails.price_overview.final_formatted}</p>
            </div>
        </div>
    );
}