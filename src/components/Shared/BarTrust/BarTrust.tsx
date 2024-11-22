import { Container, Icon } from 'semantic-ui-react'
import styles from './BarTrust.module.scss'
import { data } from './BarTrust.data'
import { map } from 'lodash'

export function BarTrust() {
    return (
        <div className={styles.barTrust}>
            <Container className={styles.content}>
                {map(data, (item) => (
                    <div className={styles.block} key={item.id}>
                        <Icon name={item?.icon as any} />
                        <div>
                            <h5>{item.title}</h5>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </Container>

        </div>
    )
}