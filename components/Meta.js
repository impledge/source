import Head from 'next/head';
import { NAME, ORG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
    return (
        <Head>
            <meta name="description" content={`Hello, and welcome to ${NAME}. Our mission is to build
            solutions for workflow inadequacies by leveraging technology. Built to support any project
            you're working on.`}
            />
            <meta property="og:image" content={ORG_IMAGE_URL} />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
    )
}