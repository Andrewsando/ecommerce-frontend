import * as Yup from 'yup';

export function initialValues() {
    return {
        email: '',
        username: '',
        fullname: '',
        password: '',
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Please enter a valid email address").required("This field is required"),
        username: Yup.string().required("This field is required"),
        fullname: Yup.string().required("This field is required"),
        password: Yup.string().required("This field is required"),
    });
}