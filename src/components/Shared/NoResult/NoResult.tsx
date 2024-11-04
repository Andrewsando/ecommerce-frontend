import styles from './NoResult.module.scss';

type NoResultProps = {
    text: string
}

export function NoResult({ text }: NoResultProps) {

    return (
        <div className={styles.noResult}>
            <p>{text}</p>
        </div>
    )
}