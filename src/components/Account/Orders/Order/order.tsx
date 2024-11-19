import { DateTime } from 'luxon';
import style from './order.module.scss';
import { forEach } from 'lodash';

interface OrderProps {
    order: Record<string, any>
}

export function Order({ order }: OrderProps) {

    const { createdAt, totalPayment, products } = order.attributes;
    const createdAtTime = new Date(createdAt).toISOString();

    const getTotalProducts = () => {
        let total = 0;

        forEach(products, (product) =>{
            total += product.quantity            
    })

    return total;
}

    return (
        <>
            <div className={style.order}>
                <div>
                    <span>
                        {DateTime.fromISO(createdAtTime, { locale: "es" }).toFormat("dd/MM/yyyy")}
                    </span>
                    <p>{getTotalProducts()} products</p>
                </div>

                <p>$ {totalPayment.toFixed(2)}</p>
            </div>
        </>
    )
}