'use client';
import Link from 'next/link';
import styles from './HeaderCart.module.scss';
import { Icon, Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { useSearchParams } from 'next/navigation';
import classNames from 'classnames';

export function HeaderCart() {
    const searchParams = useSearchParams();

    const currentStep = searchParams.get('step')||1;

    const steps = [
        { number: 1, title: "Basket" },
        { number: 2, title: "Payment" },
        { number: 3, title: "Confirmation" },
    ];

    return (
        <div className={styles.headerCart}>
            <div className={styles.left}>
                <Link href="/">
                    <Image src="/images/logo.png" alt="Gaming" />
                </Link>
            </div>

            <div className={styles.center}>
                {map(steps, (step) => (
                    <div key={step.number} className={classNames({
                        [styles.active] : step.number === Number(currentStep),
                        [styles.success] : step.number < Number(currentStep),

                    })}>
                        <span className={styles.number}>
                            <Icon name="check" />
                            {step.number}
                        </span>
                        <span>{step.title}</span>
                        <span className={styles.space} />
                    </div>
                ))}
            </div>

            <div className={styles.right}>
                <Icon name="lock" />
                <div>
                    <span>Secure payment</span>
                    <span>256-bit SSL Secure</span>
                </div>
            </div>
        </div>
    );
}
