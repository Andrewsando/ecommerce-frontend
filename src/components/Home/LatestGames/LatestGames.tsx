import { Game } from '@/api'
import styles from './LatestGames.module.scss'
import { useEffect, useState } from 'react';



const gameCtrl = new Game();
const limit = 9;
const platformId = null;

export function LatestGames(){

        const [games, setGames] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const response = await gameCtrl.getLatestPublished({limit, platformId })
                    setGames(response.data);
                    console.log(response);
    
                } catch (error) {
                    console.log(error);
    
                }
            })()
        }, [])

        if(!games) return null;

    return (
        <div>hola</div>
    )
}