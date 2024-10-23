import { Form } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'

export function ChangeNameForm() {
    return (
        <Form>
            <label>Full Name</label>

            <div className={styles.content}>
            <Form.Input name="name" placeholder="Nombre y Apellidos"/>
            <Form.Button type="submit">Send</Form.Button>
            </div>
        </Form>
    )
}