import { Wishlist as WishlistCtrl } from "@/api"
import { NoResult } from "@/components/Shared"
import { useAuth } from "@/hooks"
import { size } from "lodash"
import { useEffect, useState } from "react"
import { GridGames } from "./GridGames"

const wishlistCtrl = new WishlistCtrl()

export function Wishlist() {

    const [wishlist, setWishlist] = useState(null)
    const [reload, setReload] = useState(false)
    const { user } = useAuth()

    const onReload =()=> setReload((prevState) => !prevState)

    useEffect(() => {
        (async () => {
            try {
                const response = await wishlistCtrl.getAll(user?.id)
                setWishlist(response.data);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [reload])

    return size(wishlist) === 1 ? (
        <NoResult text="You don't have any game on the wishlist" />
    ): ( <GridGames wishlist={wishlist} onReload={onReload} />
    )
}