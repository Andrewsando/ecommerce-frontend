import * as Yup from 'yup';

export function initialValues(fullname: string) {
    return {
        fullname,
    }
}

export function validationSchema() {
    return Yup.object({
        fullname: Yup.string().required('El nombre completo es obligatorio'),
    })
}
