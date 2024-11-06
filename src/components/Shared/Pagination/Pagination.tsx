"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './Pagination.module.scss'
import { Pagination as PaginationSU } from 'semantic-ui-react'

interface PaginationProps {
    pageSize: number,
    totalPages: number,
    currentPage: number
}

type dataProps = Record<string, any>;

export function Pagination({ pageSize, totalPages, currentPage }: PaginationProps) {

    const router = useRouter()
    const pathname = usePathname()

    const onPageChange = (_:dataProps, data:dataProps)=>{

        const { activePage } = data;
        router.push(`${pathname}?page=${activePage}`)   
    }
    return (
        <div className={styles.container}>
            <PaginationSU 
            defaultActivePage={currentPage}
            totalPages={totalPages}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            onPageChange={onPageChange} />
            </div>
    )
}