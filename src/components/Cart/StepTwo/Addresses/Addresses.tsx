import { Address } from '@/api'
import styles from './Addresses.module.scss'
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks';
import { map } from 'lodash';
import classNames from 'classnames';

const addressCtrl = new Address();

export function Addresses({ addressSelected, setAddressSelected }) {
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user?.id)
                setAddresses(response.data)
                console.log({ addresses });
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    return (
        <div className={styles.addresses}>
            <h2>Address</h2>

            {map(addresses, (direccion: Record<string, any>) => {
                const { name, title, address, postal_code, state, city } = direccion.attributes

                return (
                    <div
                        key={address.id}
                        className={classNames(styles.address, {
                            [styles.active]: address.id === addressSelected?.id,
                        }
                        )}
                        onClick={() => setAddressSelected(direccion)}
                    >
                        <p>{name} ({title})</p>
                        <p>{address}, {postal_code}, {state}, {city}</p>
                    </div>

                )
            })}
        </div>
    )
}