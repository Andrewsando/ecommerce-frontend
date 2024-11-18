import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
import { forEach } from 'lodash'
import { fn } from '@/utils/functions'
import { Button } from 'semantic-ui-react'
import { useSearchParams } from 'next/navigation';
import styles from './Resume.module.scss'
import Link from 'next/link'



export function Resume({ games }: any) {

    const searchParams = useSearchParams();
    const [totals, setTotals] = useState<Record<string, number> | null>(null);

    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0,
        }

        forEach(games, (game) => {
            const { price, discount } = game.attributes

            const finalPrice = fn.calcDiscountedPrice(
                price,
                discount
            );

            totals = {
                original: totals.original + price * game.quantity,
                discount: (totals.discount + price - finalPrice) * game.quantity,
                price: totals.price + finalPrice * game.quantity,
            };
        })
        setTotals(totals)
    }, [games])

    const goToStepTwo = () => {
        const currentParams = new URLSearchParams(searchParams)
        currentParams.set('step', '2')
        window.history.replaceState(null, '', `?${currentParams.toString()}`);
        console.log('papiii');

    };

    if (!totals) return null

    return (
        <div className={styles.resume}>
            <h2>Resume</h2>

            <div className={styles.block}>
                <div className={styles.prices}>
                    <div>
                        <span>Official price</span>
                        <span>${totals.original.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Discount</span>
                        <span>${totals.discount.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Subtotal</span>
                        <span>${totals.price.toFixed(2)}</span>
                    </div>

                    <Button primary fluid className={styles.button} onClick={goToStepTwo} >
                        Go to Payment
                    </Button>

                    <Link href="/">Keep buying</Link>
                </div>
            </div>
        </div>
    )
}
