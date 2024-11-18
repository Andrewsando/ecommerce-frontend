import { Separator } from '@/components/Shared';
import styles from './StepTwo.module.scss'
import { Addresses } from './Addresses';

type StepTwoProps = {
    games: any[] | null;
}

export function StepTwo({ games }:StepTwoProps) {
    console.log({ games });

    return (
        <div className={styles.stepTwo}>
            <div className={styles.center}>
                <Addresses />
                <Separator height={50} />
                <p>PAYMENT</p>
            </div>

            <div className={styles.right}>
                <p>RESUME</p>
            </div>
        </div>
    )
}