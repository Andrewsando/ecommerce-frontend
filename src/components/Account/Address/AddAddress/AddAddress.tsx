import { useState } from 'react'
import styles from './AddAddress.module.scss'
import { Button } from 'semantic-ui-react';

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
        </>
    )
}