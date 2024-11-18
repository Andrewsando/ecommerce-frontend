import { map } from 'lodash';
import styles from './Basket.module.scss';
import { Dropdown, Icon, Image } from 'semantic-ui-react';
import { fn } from '@/utils/functions';
import { useCart } from '@/hooks';

type BasketProps = {
    games: any[];
};

const options = Array.from({ length: 50 }, (_, index) => {
    const number = index + 1;
    return { key: number, text: String(number), value: number };
});

export function Basket({ games }: BasketProps) {

    const { changeQuantityItem, deleteItem } = useCart();

    return (
        <div className={styles.basket}>
            <h2>Basket</h2>

            <div className={styles.block}>
                {map(games, (game) => {
                    const { cover, title, platform, price, discount } = game.attributes;

                    return (
                        <div key={game.id} className={styles.product}>
                            <Image src={cover?.data?.attributes?.url || '/default-image.png'} />
                            <div>
                                <div className={styles.info}>
                                    <div>
                                        <p>{title}</p>
                                        <p>{platform?.data?.attributes?.Title}</p>
                                    </div>
                                    <Icon
                                        name="trash alternate outline"
                                        link
                                        onClick={() => deleteItem(game.id)}
                                    />
                                </div>

                                <div className={styles.quantity}>
                                    <span>
                                        ${fn.calcDiscountedPrice(price, discount)}
                                    </span>
                                    <Dropdown
                                        className="number"
                                        options={options}
                                        selection
                                        value={game.quantity}
                                        compact
                                        onChange={(_, data: any) => changeQuantityItem(game.id, data.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}