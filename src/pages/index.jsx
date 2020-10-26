import Home, { initProps } from "../modules/Home/Home"

export async function getServerSideProps() { 
  const currentProps =  initProps();
  return {
    props: {
      ...currentProps
    }
  }
}

export default Home