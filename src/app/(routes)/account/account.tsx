'use client'
import { BasicLayout } from "@/layouts";
import { Tab } from "semantic-ui-react";
import { Address, Info, Orders, Settings, Wishlist } from "@/components/Account";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { Separator, WishlistIcon } from "@/components/Shared";
import styles from "./account.module.scss";
import { ListAddresses } from "@/components/Account/Address/ListAddresses";
import { useState } from "react";

export default function AccountPage() {
    console.log({ Tab });

    const { logout, user } = useAuth();
    const router = useRouter();
    const [reload, setReload] = useState(false);

    if (!user) {
        router.push("/");
        return null;
    }

    const onReload = (): void => {
        setReload(prevState => !prevState);
    };

    const panes = [
        {
            menuItem: "My orders",
            render: () => (
                <Tab.Pane attached={false}>
                    <Orders />
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem: "Wishlist",
            render: () => (
                <Tab.Pane>
                    <Wishlist />
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem: "Addresses",
            render: () => (
                <Tab.Pane attached={false}>
                    <Address.AddAddress onReload={onReload} />
                    <ListAddresses reload={reload} onReload={onReload} />
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem: { key: 20, icon: "settings", content: "Settings" },
            render: () => (
                <Tab.Pane>
                    <Settings.ChangeNameForm />
                    <div className={styles.containerForm}>
                        <Settings.ChangeEmailForm />
                        <Settings.ChangePasswordForm />
                    </div>
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem: {
                key: 21,
                icon: "log out",
                content: "",
                onClick: logout,
            }
        },
    ];

    return (
        <BasicLayout isOpenSearch isContainer relative>
            <Info />
            <Tab
                menu={{ secondary: true, pointing: true }}
                className={styles.tabs}
                panes={panes}
            />
        </BasicLayout>
    );
}
