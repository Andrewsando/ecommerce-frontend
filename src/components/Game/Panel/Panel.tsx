import { Button, Container, Icon, Image } from 'semantic-ui-react';
import styles from './Panel.module.scss'
import { fn } from '@/app/utils/functions';

type PanelProps = {
    gameId: number,
    game: Record<string, any>
}

export default function Panel({ gameId, game }: PanelProps) {

    console.log('lerooo', game.platform.data.attributes.title);

    const platform = game.platform.data;
    const buyPrice = fn.calcDiscountedPrice(game.price, game.discount)

    return (
        <Container className={styles.panel}>
            <div className={styles.imgContainer}>
                <Image src={game.cover.data.attributes.url} />
            </div>
            <div className={styles.actionsContainer}>
                <div>
                    <h2>{game.title}</h2>

                    <div className={styles.moreInfo}>
                        <span>
                            <Image src={platform.attributes.icon.data.attributes.url} />
                            {platform.attributes.Title}
                        </span>
                        <span>
                            <Icon name="check" />
                            In stock
                        </span>
                    </div>
                    <div className={styles.price}>
                        {game.discount > 0 && (
                            <>
                                <span className={styles.originalPrice}>
                                    <Icon name="tag" />
                                    {game.price} $
                                </span>

                                <span className={styles.discount}>-{game.discount}%</span>
                            </>
                        )}
                        <span className={styles.price}>$ {buyPrice}</span>
                    </div>

                    <Button primary fluid>
                        Buy now
                    </Button>
                </div>
            </div>
        </Container>
    )
}