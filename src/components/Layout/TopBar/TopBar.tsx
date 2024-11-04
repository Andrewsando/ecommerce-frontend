"use client";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import styles from "./TopBar.module.scss";
import Link from "next/link";
import { Menu } from "../Menu";

interface TopBarProps {
    isOpenSearch: boolean;
}


export function TopBar({ isOpenSearch }: TopBarProps) {

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="Gaming" />
                </Link>
            </div>

            <div className={styles.center}>
                <Menu isOpenSearch={isOpenSearch}/>
            </div>

            <div className={styles.right}>
                <Account />
            </div>
        </div>
    )
}