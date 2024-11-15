import { Platform, Game } from "@/api"
import { GridGames, NoResult, Pagination, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

export default async function PlatformPage({ params, searchParams }:
    {
        params: { platform: string },
        searchParams: { page: number }
    }) {
    const { platform } = params
    const page = searchParams.page || 1

    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform)

    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGamesByPlatformSlug(platform, page)

    const paginationGame = responseGame.meta.pagination
    
    const hasProducts = size(responseGame.data) > 0

    return (
        <BasicLayout relative>
            <Container>
                <Separator height={50} />
                <h2>{platform}</h2>
                {hasProducts ? (
                    <>
                        <GridGames games={responseGame.data} />
                        <Separator height={30} />
                        <Pagination 
                        currentPage={paginationGame.page}
                        pageSize={paginationGame.pageSize} 
                        totalPages={paginationGame.pageCount} />
                    </>
                ) : (
                    <NoResult text={`The category ${platform} does not have products`}/>
                )}
                <Separator height={100} />

                </Container>
        </BasicLayout>
    );
}