"use client"

import JoinLayout from "@/layouts/JoinLayout";
import styles from "./sign-up.module.scss"

export default function SignUpPage() {
    return (
        <JoinLayout >
            <div className={styles.bg}>
                <h3>Crear cuenta</h3>
            </div>
        </JoinLayout>
    );
}