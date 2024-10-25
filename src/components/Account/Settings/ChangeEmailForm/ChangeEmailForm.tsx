import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './ChangeEmailForm.form'
import styles from './ChangeEmailForm.module.scss';

export function ChangeEmailForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log('send form');
                console.log(formValue);
            } catch (error) {
                console.log(error);

            }
        }
        ,
    })
    return (
        <Form
            onSubmit={formik.handleSubmit}
            className={styles.form}
        >
            <label>Change Email</label>

            <Form.Input
                name="email"
                placeholder="New email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />

            <Form.Input
                name="repeatEmail"
                placeholder="Repeat email"
                value={formik.values.repeatEmail}
                onChange={formik.handleChange}
                error={formik.errors.repeatEmail}
            />
            <Form.Button
                type="submit"
                loading={formik.isSubmitting}>
                Enviar
            </Form.Button>
        </Form>
    )
}