import { Image } from 'semantic-ui-react'
import styles from './HeaderWallpaper.module.scss'


interface HeaderWallpaperProps {
    image: string
}
export default function HeaderWallpaper({ image }: HeaderWallpaperProps) {
    return (
        <div className={styles.headerWallpaper}>
            <Image src={image}/>
        </div>
    )
}