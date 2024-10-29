import React from 'react';
import WorkplaceItemCollapsible from './components/WorkplaceItemCollapsible';
import './Workplaces.scss';
import { workplacesList } from './workplacesList';

const Workplaces = () => {
  return (
    <div className="section">
      <div className="section__title">Места работы:</div>
      <div className="workplaces-list__title-note">
        (нажмите на "+" чтобы посмотреть подробную информацию)
      </div>
      <div className="workplaces-list__items-container">
        {workplacesList.map((workplaceData, index) => (
          <React.Fragment key={workplaceData.startDate}>
            {index !== 0 && <div className="workplaces-list__separator">↑</div>}
            <WorkplaceItemCollapsible key={workplaceData.startDate} workplaceItem={workplaceData} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Workplaces;
