import { Game as GameClass } from "@/api";
import { Game as GameComponent } from "@/components/Game";
import { Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";

type GameProps = {
    params: Promise<{ game: string }>
}

export async function generateMetadata({ params }: GameProps) {
    const { game } = await params;
    const gameCtrl = new GameClass();
    const response = await gameCtrl.getBySlug(game);

    return {
        title: `${response?.attributes.title}`,
        description: response?.attributes.description,
    };
}

export default async function Game({ params }: GameProps){
    const { game } = await params
    const gameCtrl = new GameClass()
    const response = await gameCtrl.getBySlug(game)

    const wallpaper = response?.attributes.wallpaper.data.attributes.url

    return response && (
        <BasicLayout>
            <GameComponent.HeaderWallpaper image={wallpaper} />
            <GameComponent.Panel gameId={response.id} game={response.attributes} />
            <Separator height={50} />
            <GameComponent.Info game={response.attributes} />
            <Separator height={30} />
            <GameComponent.Media
                video={response.attributes.video}
                screenshots={response.attributes.screenshots}
            />
            <Separator height={50} />

        </BasicLayout>

    )
}