'use client';
import { Icon } from 'semantic-ui-react'
import styles from './WishlistIcon.module.scss'
import classNames from 'classnames'
import { Wishlist } from '@/api'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'

interface WishlistIconProps {
    gameId: number,
    className: any,
    removeCallback?:()=> void
}

const wishlistCtrl = new Wishlist()

export function WishlistIcon({ gameId, className, removeCallback}: WishlistIconProps) {

    const [hasWishList, setHasWishList] = useState<any>(null);
    const { user } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await wishlistCtrl.check(user?.id, gameId)
                setHasWishList(response);

            } catch (error) {
                setHasWishList(false);
                console.error(error);

            }
        })()
    }, [gameId])

    const addWishlist = async () => {
        const response = await wishlistCtrl.add(user?.id, gameId)
        setHasWishList(response);

    }
    const deleteWishlist = async () => {
        try {
            await wishlistCtrl.delete(hasWishList.id)
            setHasWishList(false);

            if(removeCallback) removeCallback();
        } catch (error) {
            throw error
        }
    }

    if (hasWishList === null) return null;


    return (
        <Icon
            name={hasWishList ? "heart" : "heart outline"}
            onClick={hasWishList ? deleteWishlist : addWishlist}
            className={classNames(styles.WishlistIcon, {
                [className]: className,
            })}
        />
    )
}