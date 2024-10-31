import { Button, Icon } from 'semantic-ui-react';
import styles from './Address.module.scss'
import { useState } from 'react';
import { BasicModal } from '@/components/Shared';
import { AddressForm } from '../../AddressForm';


interface AddressProps {
    addressId: string;
    address: {
        title: string,
        name: string,
        address: string,
        state: string,
        city: string,
        postal_code: number
    };
    onReload: () => boolean
}

export function Address({ addressId, address, onReload }: AddressProps) {

    const [showEdit, setShowEdit] = useState(false)

    const openCloseEdit = () => setShowEdit(prevState => !prevState);

    return (
        <>
            <div className={styles.address}>
                <div>
                    <p className={styles.title}>{address.title}: </p>
                    <p className={styles.addressInfo}>
                        {address.name}, {address.address}, {address.state}, {address.city}, {" "} {address.postal_code} </p>
                </div>
                <div className={styles.actions}>
                    <Button primary icon onClick={openCloseEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button primary icon>
                        <Icon name="delete" />
                    </Button>
                </div>
            </div>

            <BasicModal
                show={showEdit}
                onClose={openCloseEdit}
                title="Editar dirección" >
                <AddressForm
                    onClose={openCloseEdit}
                    onReload={onReload}
                    addressId={addressId}
                    address={address} />
            </BasicModal>
        </>
    )
}