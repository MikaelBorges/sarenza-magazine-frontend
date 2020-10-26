import Home, { initProps } from "../modules/Home/Home"

export async function getServerSideProps() {

  let currentProps = await initProps()
  return {
    props: { 
      ...currentProps.props
    }
  }
}

export default Home