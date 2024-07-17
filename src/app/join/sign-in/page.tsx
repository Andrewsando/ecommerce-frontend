"use client"
import JoinLayout from "@/layouts/JoinLayout";
import styles from "./sign-in.module.scss"

export default function SignIn() {
    return (
        <JoinLayout>
            <div className={styles.bg}>
                <h3 >Iniciar sesión</h3>
            </div>
        </JoinLayout>
    );
}