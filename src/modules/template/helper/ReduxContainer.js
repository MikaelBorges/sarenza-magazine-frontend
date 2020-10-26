import React from 'react';
import Container, { initProps as ContainerInitProps } from "./Container"

function ReduxContainer({ children, pageProps }) {
    return (
        <>
            <Container {...pageProps}>
                {children}
            </Container>
        </>
    );
}

export async function initProps() {
    let currentProps = await ContainerInitProps()
    return { props: { ...currentProps.props } }
}

export default ReduxContainer;