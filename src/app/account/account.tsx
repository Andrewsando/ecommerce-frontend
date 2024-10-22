"use client"
import { BasicLayout } from "@/layouts";
import { Tab } from "semantic-ui-react";
import Info from "@/components/Account/Info";
import styles from "./account.module.scss";


export default function Account() {

    return (
        <>
            <BasicLayout isOpenSearch isContainer relative>
                <Info />

                <Tab 
                menu={{secondary: true, pointing: true}} 
                className={styles.tabs} />
            </BasicLayout>
        </>
    )
}