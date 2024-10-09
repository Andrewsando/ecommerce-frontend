import Link from "next/link";
import styles from "./sign-up.module.scss";
import RegisterForm from "@/components/Auth/RegisterForm/RegisterForm";
import JoinLayout from "@/layouts/JoinLayout";

export default function SignUpPage() {
    return (
        <>

            <JoinLayout>
                <div className={styles.signIn}>
                    <h3>Crear cuenta</h3>
                    <RegisterForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-in">Atras</Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    );
}