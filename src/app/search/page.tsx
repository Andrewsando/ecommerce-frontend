'use client'
import { BasicLayout } from "@/layouts";
import { useEffect } from "react";

export default function SearchPage(){

    useEffect(() => {

                document.getElementById('search-games')?.focus();
    }, [])

    return (
        <>
        <BasicLayout relative isOpenSearch={true}>
            <h2>We are searching</h2>
        </BasicLayout>
        </>
    )
}