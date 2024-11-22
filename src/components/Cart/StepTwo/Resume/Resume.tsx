import { useEffect, useState } from 'react'
import { forEach, map } from 'lodash'
import { fn } from '@/utils/functions'
import { Button } from 'semantic-ui-react'
import { Cart } from '@/api'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useAuth, useCart } from '@/hooks'
import { useSearchParams } from 'next/navigation'
import styles from './Resume.module.scss'

interface ResumeProps {
    games: Record<string, any> | any,
    addressSelected: Record<string, any> | any
}

const cartCtrl = new Cart();

export function Resume({ games, addressSelected }: ResumeProps) {
    const [total, setTotal] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const searchParams = useSearchParams();
    const { deleteAllItems } = useCart()

    useEffect(() => {
        let totalTemp: number = 0;

        forEach(games, (game) => {
            const { price, discount } = game.attributes;
            const finalPrice = fn.calcDiscountedPrice(price, discount)

            totalTemp += price * game.quantity
        })
        setTotal(totalTemp.toFixed(2))
    }, [games])

    const onPay = async () => {
        setLoading(true)        

        if (!stripe || !elements) {
            setLoading(false)

            return
        }

        const cardElement = elements?.getElement(CardElement);

        if (!cardElement) {
            console.error('El elemento de la tarjeta no está disponible');
            return;
        }

        const result = await stripe.createToken(cardElement);

        if (result.error) {
            console.log(result.error.message);

        } else {
            const response = await cartCtrl.paymentCart(
                result.token,
                games,
                user?.id,
                addressSelected
            );

            if(response?.status === 200) {
                deleteAllItems()
                goToStepEnd()
            } else {
                console.log("Error when making payment");
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const goToStepEnd = () => {
        const currentParams = new URLSearchParams(searchParams)
        currentParams.set('step', '3')
        window.history.replaceState(null, '', `?${currentParams.toString()}`);
    }

    if (!total) return null

    return (

        <div className={styles.resume}>
            <h2>Resume</h2>

            <div className={styles.block}>
                <div className={styles.products}>
                    {map(games, (game) => {
                        const { title, platform, price, discount } = game.attributes;
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
                                    {game.quantity > 0 && `${game.quantity} x `}
                                   $ {fn.calcDiscountedPrice(price, discount)} USD
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.blockTotal}>
                <div>
                    <span>Total</span>
                    <span>$ {total} USD</span>
                </div>

                <Button
                    primary
                    fluid
                    disabled={!addressSelected}
                    className={styles.button}
                    onClick={onPay}
                    loading={loading}
                >
                    Purchase
                </Button>
            </div>
        </div>
    )
}