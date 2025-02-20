import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { BannerAd, BarTrust, Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";


const platformsId: Record<string, any> = {
    playStation: 2,
    xbox: 1,
    nintendo: 4,
    pc: 3,
}

export default function HomePage() {

    return (
        <>
            <BasicLayout>
                <Home.BannerLastGamePublished />
                <Separator height={100} />
                <Container>
                    <Home.LatestGames title="Last games" />
                </Container>
                <Separator height={100} />
                <BarTrust />
                <Separator height={100} />
                <Container>
                    <Home.LatestGames
                        title='PlayStation'
                        limit={3}
                        platformId={platformsId.PlayStation}
                    />
                </Container>
                <Separator height={100} />

                <BannerAd
                    title='Register and get the best prices'
                    subtitle='Compare with other games and choose yours!'
                    btnTitle='Enter now'
                    btnLink="/account"
                    image='/images/img01.png'
                />

                <Separator height={50} />
                <Container>
                    <Home.LatestGames
                        title='Xbox'
                        limit={3}
                        platformId={platformsId.Xbox}
                    />
                </Container>
                <Separator height={100} />


            </BasicLayout>
        </>
    );
}