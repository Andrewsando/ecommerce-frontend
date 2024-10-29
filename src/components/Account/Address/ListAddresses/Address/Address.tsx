import { Button, Icon } from 'semantic-ui-react';
import styles from './Address.module.scss'
interface AddressProps {
    addressId: string;
    address: {
        title: string,
        name: string,
        address: string,
        state: string,
        city: string,
        postal_code: number
    }
}

export function Address({ addressId, address }: AddressProps) {
    return (
        <>
            <div className={styles.address}>
                <div>
                    <p className={styles.title}>{address.title}: </p>
                    <p className={styles.addressInfo}>
                        {address.name}, {address.address}, {address.state}, {address.city}, {" "} {address.postal_code} </p>
                </div>
                <div className={styles.actions}>
                    <Button primary icon>
                        <Icon name="pencil" />
                    </Button>
                    <Button primary icon>
                        <Icon name="delete" />
                    </Button>
                </div>
            </div>
        </>
    )
}