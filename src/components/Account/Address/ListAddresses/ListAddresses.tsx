import { Address } from '@/api'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'
import styles from './ListAddresses.module.scss'

const addressCtrl = new Address()

export function ListAddresses(){

    const [addresses, setAddresses] = useState(null)
    const { user } = useAuth()

    useEffect(()=>{
        (async ()=>{
            try {
                const response = await addressCtrl.getAll(user?.id)
                setAddresses(response.data)
                
            }catch(error){
                console.log(error);
                
            }
        })()
    }, [])

    if(!addresses ) return null
    
    return(
        <h1>ListAddresses</h1>
    )
}