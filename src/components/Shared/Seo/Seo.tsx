import Head from "next/head";

type SeoProps = {
    title: string,
    description: string
}

export function Seo({title="GAMING - Your favorite games", description="Your favorite games for Steam, PlayStation, Xbox and Switch at their best prices"}:SeoProps){

    return(
        <Head>
            <title>{title}</title>
            <meta property="description" content={description} />
        </Head>
    )
}