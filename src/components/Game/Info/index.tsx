import { Container } from 'semantic-ui-react';
import styles from './Info.module.scss';

type InfoProps = {
    game: Record<string, any>
}

export function Info({ game }: InfoProps) {

    return (
        <Container className={styles.info}>
            <div className={styles.summary}>
            <p>{game.summary}</p>
            </div>

            <div className={styles.more}>
                <ul>
                    <li>
                        <span>
                            Release date:</span> {game.releaseDate}
                        
                    </li>
                </ul>
            </div>
        </Container>
    )
}