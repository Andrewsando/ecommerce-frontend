import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./AddressForm.form";
import { Address } from "@/api";
import { useAuth } from "@/hooks";


const addressCtrl = new Address();

interface AddressFormProps {
    onClose: () => void;
}

export function AddressForm(props: AddressFormProps) {

    const { onClose } = props;
    const { user } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await addressCtrl.create(formValue, user?.id)
                formik.resetForm()
                onClose()
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name='title'
                placeholder='Address title'
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.errors.title}
            />

            <Form.Group widths='equal'>
                <Form.Input
                    name='address'
                    placeholder='Address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.errors.address}
                />
                <Form.Input
                    name='name'
                    placeholder='Full name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Input
                    name='state'
                    placeholder='State'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.errors.state}
                />
                <Form.Input
                    name='city'
                    placeholder='City'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.errors.city}
                />
            </Form.Group>

            <Form.Group widths='equal'>
                <Form.Input
                    name='postal_code'
                    placeholder='Postal Code'
                    value={formik.values.postal_code}
                    onChange={formik.handleChange}
                    error={formik.errors.postal_code}
                />
                <Form.Input
                    name='phone'
                    placeholder='Phone number'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.errors.phone}
                />
            </Form.Group>

            <Form.Button type="submit" fluid>
                Send
            </Form.Button>
        </Form>
    )
}