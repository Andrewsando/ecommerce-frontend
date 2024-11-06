"use client"
import { Container, Image, Button } from 'semantic-ui-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <div className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.columns}>
                    <div>
                        <Link href='/'>
                            <Image src='/images/logo.png' alt='gaming' />
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <Link href='#'>Termns and conditions</Link>
                            <Link href='#'>Privacy Policy</Link>
                            <Link href='#'>Contacto</Link>
                            <Link href='#'>FAQs</Link>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <LinkedInIcon href='#' />
                        <GitHubIcon href='#' />
                    </div>
                </div>
                <div className={styles.copyright}>
                    <span>Copyright<sup>© </sup>2024 Gaming - All rights reserved</span>
                </div>
            </Container>

        </div >
    )
}