import Link from "next/link";
import styles from "./sign-up.module.scss";
import RegisterForm from "@/components/Auth/RegisterForm/RegisterForm";
import JoinLayout from "@/layouts/JoinLayout";
import type { Metadata } from 'next'; 

export const metadata: Metadata = { 
    title: 'Register', 
    description: 'Find the best details and prices of your favorite games.', 
};

export default function SignUpPage() {
    return (
        <>

            <JoinLayout>
                <div className={styles.signIn}>
                    <h3>Create Account</h3>
                    <RegisterForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-in">Go Back</Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    );
}