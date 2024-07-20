import JoinLayout from "@/layouts/JoinLayout"
import styles from './sign-in.module.scss'
import Link from "next/link"

export default function SignInPage() {
    return (
        <>
            <JoinLayout>
                <div className={styles.signIn}>
                    <h3>Iniciar sesión</h3>
                    <div className={styles.action}>
                        <Link href='/join/sign-up'>
                            No tienes una cuenta?
                        </Link>
                    </div>
                </div>
            </JoinLayout>

        </>
    )
}