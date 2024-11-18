import { Address } from '@/api'
import styles from './Addresses.module.scss'
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks';

const addressCtrl = new Address();

export function Addresses() {
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();
    console.log({addresses});


    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user?.id)
                setAddresses(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    return (
        <div>Addresses</div>
    )
}