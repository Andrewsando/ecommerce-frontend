"use client"
import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import { useAuth, useCart } from "@/hooks";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styles from "./Account.module.scss";




export function Account() {
    const { user } = useAuth();
    const { total } = useCart();
    const router = useRouter();

    const goToLogin = () => router.push('/join/sign-in');
    const goToAccount = () => router.push('/account');

    const goToCart = () => {
        if (!user) {
            goToLogin();
            console.log('no user');
            
        }
        else {
            console.log('user');
            router.push('cart')
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