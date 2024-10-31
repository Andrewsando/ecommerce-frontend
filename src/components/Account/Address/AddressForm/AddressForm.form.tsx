import * as Yup from 'yup';

export function initialValues(address){
    return{
        title: address?.title || "",
        name: address?.name ||"",
        address: address?.address ||"",
        city: address?.city ||"",
        state: address?.state ||"",
        postal_code: address?.postal_code ||"",
        phone: address?.phone ||"",
     }
}

export function validationSchema(){
    return Yup.object({
        title: Yup.string().required('Add a title'),
        name: Yup.string().required('Add a name'),
        address: Yup.string().required('Add an address'),
        city: Yup.string().required('Add a city'),
        state: Yup.string().required('Add a state'),
        postal_code: Yup.number().required('Add a postal code'),
        phone: Yup.number().required('Add a phone number'),
    })
}