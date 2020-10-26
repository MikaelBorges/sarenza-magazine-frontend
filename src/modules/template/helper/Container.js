import React from "react"

const Container = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}


export async function initProps() {

    return {
        props: {
            meta: [], //meta => liste des éléments <meta> à ajouter
            head: [] //head => Liste des éléments [<script>, <link>] à ajouter en head
        }
    }
}

export default Container;