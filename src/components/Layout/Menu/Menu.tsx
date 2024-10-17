
import { Image, Icon, Input } from "semantic-ui-react"
import { useEffect, useState } from "react";
import { Platform } from "@/api"
import styles from "./Menu.module.scss"

interface MenuProps {
    isOpenSearch: boolean;
}

const platformCtrl = new Platform();

export function Menu ({ isOpenSearch }: MenuProps){
    const [ platforms, setPlatforms ] = useState(null);
    console.log(platforms);
    

    useEffect(() =>{
        (async () => {
            try {
                const response = await platformCtrl.getAll();
                setPlatforms(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (

        <h2>Menu</h2>
    )
}