import { ApolloProvider } from "@apollo/react-hooks"
import { useApollo } from "../../../utils/apolloClient"

import Menu from "../../Menu/Menu"
import Footer from "../../Footer/Footer"

import Container, {initProps as ContainerInitProps} from "./Container"

export const GraphQLContainer = ({ children, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState)
    return (
        <>
            <Container>
                <Menu />
                <ApolloProvider client={apolloClient}>
                    {children}
                </ApolloProvider>
                <Footer />
            </Container>
        </>
    )
}

export async function initProps (){
    let currentProps = await ContainerInitProps()
    return {
        props: {
            ...currentProps.props
        }
    }
}

export default GraphQLContainer