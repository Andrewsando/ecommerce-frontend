import { Wishlist as WishlistCtrl } from "@/api"
import { useAuth } from "@/hooks"
import { useEffect, useState } from "react"

const wishlistCtrl = new WishlistCtrl()

export function Wishlist() {

    const [wishlist, setWishlist] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await wishlistCtrl.getAll(user?.id)
                setWishlist(response);


            } catch (error) {
                console.error(error);

            }
        })()
    }, [])

    return (
        <div>
            <h2>wishlist</h2>
        </div>
    )
}