import styles from './Discount.module.scss'
import classNames from 'classnames'

interface DiscountProps {
    children: React.ReactNode;
    className?: string | any;
}

export function Discount(props: DiscountProps) {
    const { children, className } = props

    return (
        <span className={classNames(styles.labelDiscount, {[className]: className })}>
            {children}
        </span>
    )
}