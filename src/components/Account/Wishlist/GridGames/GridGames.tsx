import { map } from 'lodash';
import styles from './GridGames.module.scss'
import Link from 'next/link';
import { Label, WishlistIcon } from '@/components/Shared';
import { fn } from '@/app/utils/functions';

export function GridGames({ wishlist, onReload }: any) {


    return (
        <div className={styles.gridGames}>
            {map(wishlist, (item) => {
                const game = item.attributes.game;
                const cover = game.data.attributes;

                return (
                    <div key={item.id} className={styles.game}>
                        <Link href={`/${game.data.attributes.slug}`}>
                            <div>
                                <img src={cover.cover.data.attributes.url} />

                                {game.data.attributes.discount > 0 && (
                                    <Label.Discount className={styles.discount}>
                                        {`-${game.data.attributes.discount}%`}
                                    </Label.Discount>
                                )}
                            </div>
                            <div>
                                <span>
                                    {game.data.attributes.title}
                                </span>
                                <span className={styles.price}>
                                    {fn.calcDiscountedPrice
                                    (game.data.attributes.price, 
                                    game.data.attributes.discount)}
                                    $
                                </span>
                            </div>
                        </Link>
                        <WishlistIcon 
                        gameId={game.data.id} 
                        className={styles.wishlistIcon} 
                        removeCallback={onReload}
                        />
                    </div>
                )
            })}
        </div>
    )
}