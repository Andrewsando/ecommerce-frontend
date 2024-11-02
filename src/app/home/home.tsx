import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { BarTrust, Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";


const platformsId = {
    playStation: 1,
    xbox: 4,
    nintendo: 2,
    pc: 3,
}

export default function HomePage() {
    return (
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
                    title='playStation'
                    limit={3}
                    platformId={platformsId.pc}
                />
            </Container>
            <Separator height={100} />

        </BasicLayout>
    );
}