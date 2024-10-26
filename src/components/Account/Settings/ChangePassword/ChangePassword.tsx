import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { initialValues, validationSchema } from './ChangePasswordForm.form';
import styles from './ChangePasswordForm.module.scss'

export function ChangePasswordForm() {
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log(formValue);

            } catch (error) {
                throw error
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
            <label>Change Password</label>

            <Form.Input
                type='password'
                name='password'
                placeholder='New Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password} />
                
            <Form.Input
                type='password'
                name='repeatPassword'
                placeholder='Repeat Password' 
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword} />
            <Form.Button type='submit' loading={formik.isSubmitting}>Send</Form.Button>
        </Form>
    )
}