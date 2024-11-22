import { Separator } from "@/components/Shared";
import { ReactNode } from 'react';
import { Footer, HeaderCart } from "@/components/Layout";
import { Container } from "semantic-ui-react";
import type { Metadata } from "next";

interface CartLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Cart Shopping",
    description: "Your favorite games for Steam, PlayStation, Xbox and Switch at their best prices",
  };

export default function CartLayout({ children }: CartLayoutProps) {

    const bgColor = { backgroundColor: "#272727", color: "#fff" }
    return (

        <section style={bgColor}>
            <HeaderCart />
            <Separator height={150} />
            <Container>
                {children}
            </Container>
            <Separator height={70} />
            <Footer />
        </section>
    )
}