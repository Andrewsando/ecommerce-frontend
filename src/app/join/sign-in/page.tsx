import JoinLayout from "@/layouts/JoinLayout"
import styles from './sign-in.module.scss'
import Link from "next/link"
import { LoginForm } from "@/components/Auth/LoginForm"

export default function SignInPage() {
    return (
        <>
            <JoinLayout>
                <div className={styles.signIn}>
                    <h3>Log In</h3>
                    <LoginForm />
                    <div className={styles.actions}>
                        <Link href='/join/sign-up'>
                            Don't have an account?, Sign Up!
                        </Link>
                    </div>
                </div>
            </JoinLayout>

        </>
    )
}