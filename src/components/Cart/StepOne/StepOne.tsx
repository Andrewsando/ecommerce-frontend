import { Basket } from './Basket';
import { Resume } from './Resume';
import styles from './StepOne.module.scss'

interface StepOneProps {
    games:any[]
}

export function StepOne ({games}:StepOneProps){
    return(
        <div className={styles.stepOne}>
            <div className={styles.center}>
                <Basket games={games}/>
            </div>
            <div className={styles.right}>
                <Resume games={games} />
            </div>
        </div>
    )
}