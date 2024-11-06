"use client"
import { Button, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { BasicModal, Confirm } from '@/components/Shared';
import { AddressForm } from '../../AddressForm';
import { Address as AddressCtrl } from '@/api';
import styles from './Address.module.scss'


interface AddressProps {
    addressId: number;
    address: {
        title: string,
        name: string,
        address: string,
        state: string,
        city: string,
        postal_code: number
    };
    onReload: () => void
}

const addressCtrl = new AddressCtrl();

export function Address({ addressId, address, onReload }: AddressProps) {

    const [showEdit, setShowEdit] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const openCloseEdit = () => setShowEdit(prevState => !prevState);
    const openCloseConfirm = () => setShowConfirm(prevState => !prevState);


    const onDelete = async () => {
        try {
            await addressCtrl.delete(addressId);
            onReload()
        } catch (error) {
            console.error(error)
        }
    }

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
                    <Button primary icon onClick={openCloseConfirm}>
                        <Icon name="delete" />
                    </Button>
                </div>
            </div>

            <Confirm
                open={showConfirm}
                onCancel={openCloseConfirm}
                onConfirm={onDelete}
                content='Seguro vas a eliminar?'
            />
            
        </>
    )
}