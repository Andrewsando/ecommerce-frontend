"use client"
import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styles from "./Account.module.scss";

const total = 5;

export function Account() {
    const { user } = useAuth();
    const router = useRouter();

    const goToLogin = () => router.push('/join/sign-in');
    const goToAccount = () => router.push('/account');

    const goToCart = () => {
        if (!user) {
            goToLogin();
        }
        else {
            router.push('/cart')
        }
    }
    return (
        <div className={styles.account}>
            <Button icon className={styles.cart}>
                <AddShoppingCartIcon name="shop" onClick={goToCart} />
                {total > 0 && <Label circular>{total}</Label>}
            </Button>

            {!user ? (
                <Button icon>
                    <Icon name='user outline' className={styles.cartMuiIcon} onClick={goToLogin} />
                </Button>
            ) : (
                <Button icon className={styles.user}>
                    <PersonIcon name='user outline' onClick={goToAccount} />
                </Button>
            )}
        </div>
    )
}