'use client'
import ReactPlayer from "react-player";
import styles from './Video.module.scss';

interface VideoProps {
    video: string
}

export function Video({video}: VideoProps) {
    console.log({video});
    
    return (
        <ReactPlayer 
        url={video} 
        className={styles.video}
        width="100%"
        height={634}
        />
    )
}