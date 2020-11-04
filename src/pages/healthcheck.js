import Healthcheck, { getServerSideProps as healthcheckSSRprops } from "../modules/Healthcheck"

export const getServerSideProps = async (ctx) => {
    debugger;
    return {
        props: {
            ...(await healthcheckSSRprops(ctx)).props
        }
    }
}

export default Healthcheck;