import { Game as GameClass } from "@/api";
import { Game as GameComponent } from "@/components/Game";
import { BasicLayout } from "@/layouts";

export default async function Game({ params, searchParams }:
    {
        params: { game: string },
        searchParams: { page: number }
    }) {
    const { game } = params

    const gameCtrl = new GameClass()
    const response = await gameCtrl.getBySlug(game)
    console.log('response',response.attributes.platform.data.attributes.icon.data.attributes.url);
        const wallpaper = response.attributes.wallpaper.data.attributes.url

    return (
        <>
        <BasicLayout>
            <GameComponent.HeaderWallpaper image={wallpaper} />
        </BasicLayout>
        </>

    )
}