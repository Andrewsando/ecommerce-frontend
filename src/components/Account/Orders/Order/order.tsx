import { DateTime } from 'luxon';
import style from './order.module.scss';
import { forEach, map } from 'lodash';
import { useState } from 'react';
import { BasicModal } from '@/components/Shared';
import { Image } from 'semantic-ui-react';
import { fn } from '@/utils/functions';

interface OrderProps {
    order: Record<string, any>
}

export function Order({ order }: OrderProps) {

    const { createdAt, totalPayment, products, addressShipping } = order.attributes;
    const createdAtTime = new Date(createdAt).toISOString();
    const [showModal, setShowModal] = useState<boolean>(false)

    const openCloseModal = () => {

        setShowModal((prevState) => !prevState)

    }
    const getTotalProducts = () => {
        let total = 0;

        forEach(products, (product) => {
            total += product.quantity
        })

        return total;
    }

    return (
        <>
            <div
                className={style.order}
                onClick={openCloseModal}
            >
                <div>
                    <span>
                        {DateTime.fromISO(createdAtTime, { locale: "es" }).toFormat("dd/MM/yyyy")}
                    </span>
                    <p>{getTotalProducts()} products</p>
                </div>

                <p>$ {totalPayment.toFixed(2)}</p>
            </div>

            <BasicModal
                show={showModal}
                onClose={openCloseModal}
                title="Order information"
            >
                {map(products, (product) => {
                    const { cover, title, platform, price, discount, id } = product.attributes
                    return (

                        <div className={style.product} key={id}>
                            <Image src={cover.data.attributes.url} />

                            <div>
                                <div className={style.info}>
                                    <div>
                                        <p>{title}</p>
                                        <p>{platform.data.attributes.Title}</p>
                                    </div>
                                </div>
                                <div className={style.quantity}>
                                    <span>x {product.quantity}</span>
                                    <span>$ {fn.calcDiscountedPrice(price, discount)} USD</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className={style.address}>
                    <div>
                        <p className={style.title}>{addressShipping.attributes.title}</p>
                        <p className={style.addressInfo}>{addressShipping.attributes.name}, {" "} {addressShipping.attributes.address}, {" "} {addressShipping.attributes.postal_code}</p>
                    </div>
                </div>

                <div className={style.total}>
                <p> Total: ${order.attributes.totalPayment.toFixed(2)} USD</p>
                </div>
            </BasicModal>
        </>
    )
}