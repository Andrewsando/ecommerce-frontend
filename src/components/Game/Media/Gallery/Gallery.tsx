'use client'
import { Image } from 'semantic-ui-react'
import styles from './Gallery.module.scss'
import { map } from 'lodash';
import { FullModal } from '@/components/Shared';
import { useState } from 'react';

interface GalleryProps {
    screenshots: any
}


export default function Gallery({ screenshots }: GalleryProps) {

    const [show, setShow] = useState(false)
    const screenshotsClone = [...screenshots.data];
    const principalImage = screenshotsClone.shift();

    const onOpenClose = () => setShow(prevState => !prevState )

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
                <h2>slider de imagenes</h2>
            </FullModal>
        </>
    )
}