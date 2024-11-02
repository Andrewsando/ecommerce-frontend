import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";


export default function HomePage() {
    return (
        <BasicLayout>
            <Home.BannerLastGamePublished />
            <Separator height={100} />
            <Container>
                <Home.LatestGames />
            </Container>
        </BasicLayout>
    );
}