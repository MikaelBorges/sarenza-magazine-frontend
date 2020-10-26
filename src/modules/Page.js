import React from "react"
import Head from "./_pageComponents/Head"

function Page({ children, pageStyle }) {
    return (
        <>
            <Head />
            <div className={pageStyle}>
                {children}
            </div>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            toto: 1
        }
    }
}

export default Page

