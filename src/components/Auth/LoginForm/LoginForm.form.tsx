import * as Yup from "yup"

export function initialValues() {
    return {
        identifier: "",
        password: "",
    };

}

export function validationSchema(){
    return Yup.object({
        identifier: Yup.string().required('Identifier is mandatory'),
        password: Yup.string().required('Password is mandatory'),

    })
}