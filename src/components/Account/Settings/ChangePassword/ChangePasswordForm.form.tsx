import * as Yup from "yup";

export function initialValues() {
    return {
        password: "",
        repeatPassword: "",
    };
}

export function validationSchema() {
    return Yup.object({
        password: Yup.string().required('This field is required'),
        repeatPassword: Yup.string()
            .required("This field is required")
            .oneOf([Yup.ref("password")], 'Passwords must match'),
    })
}