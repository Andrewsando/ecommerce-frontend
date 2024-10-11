import { Image } from "semantic-ui-react";
import styles from "./TopBar.module.scss";
import Link from "next/link";



export function TopBar(props: any) {
    const { isOpenSearch } = props;

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="Gaming" />
                </Link>
            </div>

            <div className={styles.center}>
                <span>MENU</span>
            </div>

            <div className={styles.right}>
                <span>ACCOUNT</span>
            </div>
        </div>
    )
}