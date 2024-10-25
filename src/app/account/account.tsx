"use client"
import { BasicLayout } from "@/layouts";
import { Tab } from "semantic-ui-react";
import { Info, Settings } from "@/components/Account";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import styles from "./account.module.scss";
import { Separator } from "@/components/Shared";


export default function AccountPage() {

    const { logout, user } = useAuth();
    const router = useRouter();

    if (!user) {
        router.push("/");
        return null;
    }

    const panes = [
        {
            menuItem: "Mis pedidos",
            render: () => (
                <Tab.Pane>
                    <p>My orders</p>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Wishlist",
            render: () => (
                <Tab.Pane>
                    <p>My Wishlist</p>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Addresses",
            render: () => (
                <Tab.Pane>
                    <p>My Addresses</p>
                </Tab.Pane>
            )
        },
        {
            menuItem: { icon: "settings", content: "Ajustes" },
            render: () => (
                <Tab.Pane>
                    <Settings.ChangeNameForm />
                    <div className={styles.containerForm}>
                        <Settings.ChangeEmailForm />
                    </div>
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem: {
                icon: "logout",
                content: "",
                onClick: logout,

            }
        },

    ];
    return (
        <>
            <BasicLayout isOpenSearch isContainer relative>
                <Info />
                <Tab
                    menu={{ secondary: true, pointing: true }}
                    className={styles.tabs}
                    panes={panes} />
            </BasicLayout>
        </>
    )
}