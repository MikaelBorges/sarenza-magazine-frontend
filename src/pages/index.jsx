import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';

export default function HomePage() {
  return (
    <div className="layout">
      <Home query={HOME_QUERY_ALL} />
    </div>
  );
}
