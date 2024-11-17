import { map } from 'lodash'
import styles from './Basket.module.scss'
import { Dropdown, Icon, Image } from 'semantic-ui-react'
import { fn } from '@/utils/functions'

type BasketProps = {
    games:any[]
}

export function Basket({ games }:BasketProps) {

    console.log(games);
    
    return (
        <div className={styles.basket}>
            <h2>
                Basket
            </h2>

            <div className={styles.block}>
                {map(games, (game) => (
                    <div key={game.id} className={styles.product}>
                        <Image src={game.attributes.cover.data.attributes.url} />
                        <div>
                            <div className={styles.info}>
                                <div>
                                    <p>{game.attributes.title}</p>
                                    <p>{game.attributes.platform.data.attributes.Title}</p>
                                </div>
                                    <Icon name="trash alternate outline" link />
                            </div>

                            <div className={styles.quantity}>
                                <Dropdown 
                                className="number" 
                                options={[]}
                                selection
                                value={null}
                                compact
                                />
                                <span>
                                ${fn.calcDiscountedPrice(
                                        game.attributes.price,
                                        game.attributes.discount
                                        )}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
