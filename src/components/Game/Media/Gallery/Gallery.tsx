'use client'
import { Image } from 'semantic-ui-react'
import { map } from 'lodash';
import { FullModal } from '@/components/Shared';
import { useState } from 'react';
import styles from './Gallery.module.scss';
import Slider from 'react-slick';

interface GalleryProps {
    screenshots: any
}


export default function Gallery({ screenshots }: GalleryProps) {

    const [show, setShow] = useState(false)
    const screenshotsClone = [...screenshots.data];
    const principalImage = screenshotsClone.shift();

    const onOpenClose = () => setShow(prevState => !prevState);
    const settings = {
        dots: true,
        dotsClass: styles.dots,
        infinite: true,
        slidersToShow: 1,
        slidersToScroll: 1,
        arrows: false,
        customPaging: function(index:any){
            return< Image src={screenshots.data[index].attributes.url} />
        }
    }

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <Image
                        src={principalImage.attributes.url}
                        onClick={onOpenClose}
                    />
                </div>

                <div className={styles.grid}>
                    {map(screenshotsClone, (screenshot) => (
                        <div key={screenshot.id}>
                            <Image src={screenshot.attributes.url}
                                onClick={onOpenClose}
                            />

                        </div>
                    ))}

                </div>
            </div>

            <FullModal
                show={show}
                onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {map(screenshots.data, (screenshot) => (
                            <div key={screenshot.id}>
                                <Image src={screenshot.attributes.url} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </FullModal>
        </>
    )
}