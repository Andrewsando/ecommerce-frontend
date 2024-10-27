import { useState } from 'react'
import styles from './AddAddress.module.scss'
import { Button } from 'semantic-ui-react';
import { BasicModal } from '@/components/Shared';

export function AddAddress() {

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
                <h2>Contenido del basic modal</h2>
            </BasicModal>
        </>
    )
}