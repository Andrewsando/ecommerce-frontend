import * as Yup from 'yup'; 
 
export function initialValues() {
  return {
    email: "",
    repeatEmail: ""
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email('invalid Email ').required('Email is required'),
    repeatEmail: Yup.string()
      .email('invalid Email')
      .required('Repeat email is required')
      .oneOf([Yup.ref("email")], 'Emails must match'),
  });
}
