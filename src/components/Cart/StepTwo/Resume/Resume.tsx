import { useEffect, useState } from 'react'
import styles from './Resume.module.scss'
import { forEach, map } from 'lodash'
import { fn } from '@/utils/functions'
import { Button } from 'semantic-ui-react'

interface ResumeProps {
    games: Record<string, any> | any,
    addressSelected: Record<string, any> | any
}

export function Resume({ games, addressSelected }: ResumeProps) {
    const [total, setTotal] = useState<string | null>(null);



    useEffect(() => {
        let totalTemp: number = 0;

        forEach(games, (game) => {
            const { price, discount } = game.attributes;
            const finalPrice = fn.calcDiscountedPrice(price, discount)

            totalTemp += price * game.quantity
        })

        setTotal(totalTemp.toFixed(2))

    }, [games])

    return (

        <div className={styles.resume}>
            <h2>Resume</h2>

            <div className={styles.block}>
                <div className={styles.products}>
                    {map(games, (game) => {
                        const { title, platform, price, discount } = game.attributes;
                        console.log(platform);
                        return (
                            <div
                                key={game.id}
                                className={styles.product}
                            >
                                <div>
                                    <p>{title}</p>
                                    <span>{platform.data.attributes.Title}</span>
                                </div>
                                <span>
                                    {game.quantity > 0 && `${game.quantity}x`}
                                    $ {fn.calcDiscountedPrice(price, discount)}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.blockTotal}>
                    <div>
                        <span>Total</span>
                        <span>$ {total}</span>                     
                    </div>

                    <Button primary fluid disabled={!addressSelected} className={styles.button}>
                        Pay 
                    </Button>
            </div>
        </div>
    )
}