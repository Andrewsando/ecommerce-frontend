import styles from './GridGames.module.scss';
import { map } from 'lodash';
import { fn } from '@/app/utils/functions';
import Link from 'next/link';
import { Label } from '../Label';



type GridGamesProps = {
    games: Array<{ id: string; attributes: any }>,
}

export function GridGames(props: GridGamesProps) {

    const { games } = props;
    console.log(games);
    

    return (
        <div className={styles.gridGames}>
            {map(games, (game)=>(
                <Link 
                key={game.id} 
                href={`/${game.attributes.slug}`} 
                className={styles.game}>
                    <div>
                        <img src={game.attributes.cover.data.attributes.url} />
                        {game.attributes.discount > 0 &&(
                            <Label.Discount className={styles.discount}>
                                {`-${game.attributes.discount}%`}
                            </Label.Discount>
                        )}
                    </div>

                    <div>
                        <span>{game.attributes.title}</span>
                        <span className={styles.price}>
                            {fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)} USD
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}