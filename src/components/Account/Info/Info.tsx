import { useAuth } from '@/hooks';
import { Button } from "semantic-ui-react";
import { DateTime } from 'luxon';
import styles from './info.module.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export function Info() {
    const { user } = useAuth();

    return (
        <div className={styles.info}>
            <Button className={styles.user}>
                <PersonOutlineIcon />
            </Button>
            <h3 className={styles.username}>{user?.username}</h3>
            <h4 className={styles.email}>{user?.email}</h4>
            <p className={styles.createdAt}>
                Member since:{" "}
                {DateTime.fromISO(user?.createdAt, { locale: "es" }).toFormat("dd/MM/yyyy")}
            </p>
        </div>
    )
}