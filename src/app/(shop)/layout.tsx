import { Separator } from "@/components/Shared";
import { Container } from "semantic-ui-react";
import { ReactNode } from 'react';
import { Footer, HeaderCart } from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface CartLayoutProps {
    children: ReactNode
}

export default function CartLayout({ children }: CartLayoutProps) {
    return (

        <>
            <HeaderCart />
            <Separator height={150} />
            <Container>{children}</Container>
            <Separator height={70} />
            <Footer />
        </>
    )
}