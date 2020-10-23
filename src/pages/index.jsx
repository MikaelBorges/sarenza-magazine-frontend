import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';

export default function HomePage({ isMobile }) {
  return (
    <div className="layout">
      {isMobile ? <HomeMobile query={HOME_QUERY_ALL} /> : <Home query={HOME_QUERY_ALL} />}
    </div>
  );
}

export default Home