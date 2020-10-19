import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Rubrique from '../modules/Rubriques/Rubriques';

export default function HomePage() {
  return (
    <div className="layout">
      <Rubrique query={HOME_QUERY_ALL} />
    </div>
  );
}
