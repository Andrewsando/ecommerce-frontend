import { Separator } from "@/components/Shared";
import { ReactNode } from 'react';
import { Footer, HeaderCart } from "@/components/Layout";
import { Container } from "semantic-ui-react";

interface CartLayoutProps {
    children: ReactNode
}

export default function CartLayout({ children }: CartLayoutProps) {

    const bgColor = { backgroundColor: "#272727", color: "#fff" }
    return (

        <body style={bgColor}>
            <HeaderCart />
            <Separator height={150} />
            <Container>
                {children}
            </Container>
            <Separator height={70} />
            <Footer />
        </body>
    )
}