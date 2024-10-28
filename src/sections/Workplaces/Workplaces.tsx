import WorkplaceItemCollapsible from './components/WorkplaceItemCollapsible';
import './Workplaces.scss';
import { workplacesList } from './workplacesList';

const Workplaces = () => {
  return (
    <div className="section">
      <div className="section__title">
        Места работы:
      </div>
      <div className="workplaces-list__title-note">
        (нажмите на "+" чтобы посмотреть подробную информацию)
      </div>
      <div className="workplaces-list">
        {workplacesList.map((workplaceData) => (
          <WorkplaceItemCollapsible key={workplaceData.startDate} workplaceItem={workplaceData} />
        ))}
      </div>
    </div>
  );
};

export default Workplaces;
