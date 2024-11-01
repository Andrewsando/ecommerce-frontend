import { Game } from "@/api";
import { useEffect, useState } from "react"
import { Image, Container } from "semantic-ui-react";
import { DateTime } from 'luxon';
import Link from 'next/link'
import styles from './BannerLastGamePublished.module.scss'

const gameCtrl = new Game();

export function BannerLastGamePublished() {
    const [game, setGame] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLastPublished();
                setGame(response.data[0]);
            } catch (error) {
                console.log(error);

            }
        })();
    }, [])
    if (!game) return null

    console.log(game.attributes.wallpaper);

    const wallpaper = game.attributes.wallpaper
    const releaseDate = new Date(game.attributes.releaseDate).toISOString()

    return (
        <div className={styles.container}>
            <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
            <Link className={styles.infoContainer} href={game.attributes.slug}>
                <Container>
                    <span className={styles.date}>
                        {DateTime.fromISO(releaseDate).minus({days: 1}).toRelative()}
                    </span>

                    <h2>{game.attributes.title}</h2>
                    <p>{game.attributes.price}</p>
                    <label>40%</label>
                    <span className={styles.finalPrice}>15 COP</span>
                </Container>
            </Link>
        </div>
    )
}