import { Form } from 'semantic-ui-react'
import styles from './ChangeNameForm.module.scss'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './ChangeNameForm.form'
import { useAuth } from '@/hooks'
import { User } from '@/api'

const userCtrl = new User();

export function ChangeNameForm() {

    const { user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(user?.fullname),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log('se mandaaaa');
                if(user){
                    await userCtrl.updateMe(user?.id, formValue)
                } else {
                    console.log(" not user")
                }
            } catch (error) {
                console.log(123,error);
            }
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <label>Full Name</label>

            <div className={styles.content}>
                <Form.Input
                    name="fullname"
                    placeholder="Name"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.errors.fullname} />

                <Form.Button type="submit"
                    loading={formik.isSubmitting}>
                    Send
                </Form.Button>
            </div>
        </Form>
    )
}