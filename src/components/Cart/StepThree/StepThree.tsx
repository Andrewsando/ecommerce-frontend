import { Button, Icon } from 'semantic-ui-react'
import style from './StepThree.module.scss'
import Link from 'next/link'

export function StepThree() {
    return (
        <div className={style.stepThree}>
            <Icon name="check circle outline" />
            <h2>Successful purchase</h2>

            <Button
                as={Link}
                href='/account'
                primary
            >
                View order
            </Button>

        </div>
    )
}