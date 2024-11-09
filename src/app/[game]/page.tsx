import { Game as GameClass } from "@/api";
import { Game as GameComponent } from "@/components/Game";
import { Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";

export default async function Game({ params, searchParams }:
    {
        params: { game: string },
        searchParams: { page: number }
    }) {
    const { game } = params

    

    const gameCtrl = new GameClass()
    const response = await gameCtrl.getBySlug(game)
    // console.log('gameee',response);
    // console.log('response',response.attributes.platform.data.attributes.icon.data.attributes.url);
        const wallpaper = response.attributes.wallpaper.data.attributes.url

    return (
        <BasicLayout>
            <GameComponent.HeaderWallpaper image={wallpaper} />
            <GameComponent.Panel gameId={response.id} game={response.attributes}/>
            <Separator height={50} />
            <GameComponent.Info game={response.attributes}/>
            <Separator height={30} />
            <GameComponent.Media 
            video={response.attributes.video}
            screenshots={response.attributes.screenshots} 
            />
            <Separator height={50} />

        </BasicLayout>

    )
}