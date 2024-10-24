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
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        fullname: Yup.string().required(true),
        password: Yup.string().required(true),
    });
}