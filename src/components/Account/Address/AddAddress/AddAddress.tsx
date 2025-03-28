'use client';
import { useState } from 'react'
import styles from './AddAddress.module.scss'
import { Button } from 'semantic-ui-react';
import { BasicModal } from '@/components/Shared';
import { AddressForm } from '../AddressForm';

type Props = {
    onReload: () => void; 
}

export function AddAddress(props: Props) {

    const { onReload } = props
    const [show, setShow] = useState(false);
    const onOpenClose = () => setShow((prevState) => !prevState)

    return (

        <>
            <Button
                primary
                className={styles.addBtn}
                onClick={onOpenClose}>
                Create
            </Button>

            <BasicModal show={show} onClose={onOpenClose} title='New Address'>
                <AddressForm onClose={onOpenClose} onReload={onReload} />
            </BasicModal>
        </>
    )
}