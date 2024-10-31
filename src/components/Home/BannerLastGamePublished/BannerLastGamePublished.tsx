import { Game } from "@/api";
import { useEffect, useState } from "react"


const gameCtrl = new Game();

export function BannerLastGamePublished() {
    const [game, setGame] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLastPublished();
                console.log(response.data[0]);
            } catch (error) {
                console.log(error);

            }
        })();
    }, [])
 if(!game) return null 
 
    return (
        <div>
            <h2>BannerLastGamePublished</h2>
        </div>
    )
}