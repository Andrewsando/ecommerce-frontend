import { Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";
import { Video } from "./Video/Video";
import Gallery from "./Gallery/Gallery";

type MediaProps = {
    video: string;
    screenshots: string
}

export default function Media({video, screenshots}: MediaProps) {


    return (
        <Container>
            <h2>
                Visual
            </h2>
            <Separator height={30} />
            <Video video={video}/>
            <Separator height={30} />
            <Gallery screenshots={screenshots}/>
        </Container>
    )
}