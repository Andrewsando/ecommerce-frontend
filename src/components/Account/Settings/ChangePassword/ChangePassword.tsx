import styles from './ChangePasswordForm.module.scss'
import { Form } from 'semantic-ui-react';

export function ChangePasswordForm() {
    return (
        <Form className={styles.form}>
            <label>Change Password</label>

            <Form.Input
                type='password'
                name='password'
                placeholder='New Password' />
            <Form.Input
                type='password'
                name='Repeat password'
                placeholder='Repeat Password' />
                <Form.Button type='submit'>Send</Form.Button>
        </Form>
    )
}