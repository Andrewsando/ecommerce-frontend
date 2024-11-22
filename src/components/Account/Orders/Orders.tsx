import { Order } from "@/api/orders"
import { NoResult } from "@/components/Shared";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { useEffect, useState } from "react"
import { Order as OrderComponent } from "./Order/order";

const orderCtrl = new Order()

export function Orders() {
    const [ orders, setOrders ] = useState(null);
    const { user } = useAuth()
    
    useEffect(() => {
        (async () => {
            try {
                const response = await orderCtrl.getAll(user?.id)
                setOrders(response.data);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    if (!orders) return <NoResult text="Yo don't have any product purchased" />
    
    return (
        <div>
            {map(orders, (order:any)=>(
                <OrderComponent key={order.id} order={order} />
            ))}
        </div>
    )
}