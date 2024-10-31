import { Address as AddressCtrl } from '@/api'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'
import { map } from "lodash"
import { Address } from "./Address"
import styles from './ListAddresses.module.scss'

type Props = {
    reload: boolean;
    onReload: ()=> void
}
    
const addressCtrl = new AddressCtrl()

export function ListAddresses(props: Props) {

    const { reload, onReload } = props;
    const [addresses, setAddresses] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user?.id)
                setAddresses(response.data)

            } catch (error) {
                console.log(error);

            }
        })()
    }, [reload])

    if (!addresses) return null

    return (
        <div className={styles.addresses}>
            {map(addresses, (address: Record<string, any>) => (
                <Address 
                key={address.id} 
                addressId={address.id} 
                address={address.attributes}
                onReload={onReload} />
            ))}
        </div>
    )
}