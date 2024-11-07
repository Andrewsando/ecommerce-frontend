import { Game } from "@/api";
import { BasicLayout } from "@/layouts";

export default async function SearchPage({ searchParams }:
    {
        searchParams: { s: string }
    }) {

        const gameCtrl = new Game();
        const response = await gameCtrl.searchGames(searchParams.s, 1);
        console.log(response.data);

    return (
        <>
            <BasicLayout relative isOpenSearch={true}>
                <h2>{searchParams.s}</h2>
            </BasicLayout>
        </>
    )
}