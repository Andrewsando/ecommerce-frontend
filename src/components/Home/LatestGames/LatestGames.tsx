import { Game } from '@/api'
import styles from './LatestGames.module.scss'
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

    const [games, setGames] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLatestPublished({ limit, platformId })
                setGames(response.data);
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