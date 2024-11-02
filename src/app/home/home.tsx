import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { BarTrust, Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";


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
        </BasicLayout>
    );
}