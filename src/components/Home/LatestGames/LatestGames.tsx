'use client';
import { Game } from '@/api'
import { useEffect, useState } from 'react';
import { GridGames } from '@/components/Shared';



const gameCtrl = new Game();

interface LatestGamesProps {
    title?: string,
    limit?: number,
    platformId?: null | undefined;
}

export function LatestGames(props: LatestGamesProps) {

    const { title, limit = 9, platformId = null } = props;
    console.log({platformId});
    

    const [games, setGames] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLatestPublished({ limit, platformId })
                setGames(response.data);
                console.log({response});
                console.log({games});
                
            } catch (error) {
                console.log(error);

            }
        })()
    }, [])

    if (!games) return null;

    return (
        <div>
            <h2>{title}</h2>
            <GridGames games={games} />
        </div>
    )
}