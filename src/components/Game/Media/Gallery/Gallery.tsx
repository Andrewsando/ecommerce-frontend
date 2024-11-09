'use client'
import { Image } from 'semantic-ui-react'
import styles from './Gallery.module.scss'
import { map } from 'lodash';

interface GalleryProps {
    screenshots: any
}


export default function Gallery({ screenshots }: GalleryProps) {


    const screenshotsClone = [...screenshots.data];
    const principalImage = screenshotsClone.shift();

    console.log({ screenshotsClone });
    console.log({ principalImage });

    const onOpenClose = () => {
        console.log('OPEN BITCHIEEE');

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
        </>
    )
}