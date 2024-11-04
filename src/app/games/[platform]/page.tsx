import { Platform, Game } from "@/api"
import { GridGames, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

export default async function PlatformPage({ params, searchParams }:
    {
        params: { platform: string },
        searchParams: { id: string, query: string }
    }) {
    const { platform } = params
    const page = 1

    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform)

    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGamesByPlatformSlug(platform, page)
    console.log(responseGame.data);

    const hasProducts = size(responseGame.data) > 0

    return (
        <BasicLayout relative>
            <Container>
                <Separator height={50} />
                <h2>{platform}</h2>
                {hasProducts ? (
                    <GridGames games={responseGame.data} />
                ) : (
                    <p>No results</p>
                )}
                <Separator height={100} />

                </Container>
        </BasicLayout>
    );
}