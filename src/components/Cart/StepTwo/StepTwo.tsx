import { Separator } from '@/components/Shared';
import { Addresses } from './Addresses';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ENV } from '@/utils/constants';
import { Elements } from '@stripe/react-stripe-js';
import { Payment } from './Payment';
import { Resume } from './Resume';
import styles from './StepTwo.module.scss'

type StepTwoProps = {
    games: any[] | null;
}

const stripeInit = loadStripe(ENV.STRIPE_TOKEN)

export function StepTwo({ games }: StepTwoProps) {

    const [addressSelected, setAddressSelected] = useState(null)

    return (
        <Elements stripe={stripeInit}>
            <div className={styles.stepTwo}>
                <div className={styles.center}>
                    <Addresses
                        addressSelected={addressSelected}
                        setAddressSelected={setAddressSelected}
                    />
                    <Separator height={50} />
                    {addressSelected && (
                        <Payment />
                    )}
                </div>

                <div className={styles.right}>
                    <Resume
                        games={games}
                        addressSelected={addressSelected}
                    />
                </div>
            </div>
        </Elements>
    )
}