'use client';

import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Auth } from "@/api";
import { initialValues, validationSchema } from "./RegisterForm.form";

const authCtrl = new Auth();

export default function RegisterForm() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue);
                router.push("/join/sign-in");
                console.error('form',formValue);

            } catch (error) {
                console.error(error);
                console.error('formError',formValue);

            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group >
                <Form.Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />

            </Form.Group>

            <Form.Group >
                <Form.Input
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.errors.fullname}
                    />

                <Form.Input
                    name="username"
                    type="text"
                    placeholder="User name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username} 
                />
            </Form.Group>

            <Form.Button
                type="submit" fluid loading={formik.isSubmitting}>
                Register
            </Form.Button>
        </Form>
    );
}