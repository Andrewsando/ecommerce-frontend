import { Game } from "@/api";
import { GridGames, NoResult, Pagination, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

export default async function SearchPage({ searchParams }:
    {
        searchParams: Promise<{ s: string }>
    }) {

    const gameCtrl = new Game();
    const response = await gameCtrl.searchGames((await searchParams).s, 1);

    const paginationGame = response.meta.pagination
    const hasProducts = size(response.data) > 0

    return (
        <>
            <BasicLayout relative isOpenSearch={true}>
                <Container>
                    <Separator height={50} />
                    <h2>Searching: {(await searchParams).s}</h2>
                    {hasProducts ? (
                        <>
                            <GridGames games={response.data} />
                            <Separator height={30} />
                            <Pagination
                                currentPage={response.page}
                                pageSize={response.pageSize}
                                totalPages={response.pageCount}
                            />
                        </>
                    ) : (
                        <NoResult text={`There are not products`} />
                    )}
                    <Separator height={100} />

                </Container>
            </BasicLayout>
        </>
    )
}