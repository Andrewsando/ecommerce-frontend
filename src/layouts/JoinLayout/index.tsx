"use client"
import { HTMLAttributes } from "react";
import styles from "./JoinLayout.module.scss"
import Link from "next/link"
import { Icon, Image } from "semantic-ui-react";
import "@/scss/global.scss"
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";

export default function JoinLayout({ children }: HTMLAttributes<HTMLDivElement>) {

    const { user } = useAuth();
    const router = useRouter();
    
    if(user){
        router.push("/");
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
            <Link href="/">
                <Image src="/images/logo.png" alt="Gaming" />
            </Link>
            <Link href="/">
                <Icon name="close" />
            </Link>
            </div>
            <div className={styles.blockLeft}>{children}</div>
            <div className={styles.blockRight} />
        </div>
    );
}