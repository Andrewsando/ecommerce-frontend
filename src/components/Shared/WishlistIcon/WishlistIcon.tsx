import { Icon } from 'semantic-ui-react'
import styles from './WishlistIcon.module.scss'
import classNames from 'classnames'

interface WishlistIconProps {
    gameId: number,
    className: any,
}

export function WishlistIcon({ gameId, className }: WishlistIconProps) {
    return (
        <Icon
            name="heart"
            className={classNames(styles.WishlistIcon, {
                [className]: className,

            })}
            />
        )
    }