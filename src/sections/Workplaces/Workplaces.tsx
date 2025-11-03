import React, { useState } from 'react';
import WorkplaceItemCollapsible from './components/WorkplaceItemCollapsible';
import './Workplaces.scss';
import { workplacesList } from './workplacesList';

const Workplaces = () => {
  const [sortOrderFromFirst, setSortOrderFromFirst] = useState(false);
  const [workplacesListSorted, setWorkplacesListSorted] = useState(workplacesList);

  const onSortButtonClick = () => {
    setSortOrderFromFirst(!sortOrderFromFirst);
    
    setWorkplacesListSorted(
      [...workplacesList].sort((a, b) => (sortOrderFromFirst ? -1 : 1) * (a.sortOrder - b.sortOrder))
    );
  }

  const sortSymbol = sortOrderFromFirst ? ' ⇣' : '⇡'; // ⇣⇡↓↑

  return (
    <div className="section">
      <div className="workplaces-list__header">
        <div className="section__title">Места работы</div>
        <button className="workplaces-list__header__sort-button" onClick={onSortButtonClick}>
          Сортировка <span className="arrow">{sortSymbol}</span>
        </button>
      </div>
      <div className="workplaces-list__title-note">
        (нажмите на "+", чтобы посмотреть подробную информацию)
      </div>
      <div className="workplaces-list__items-container">
        {workplacesListSorted.map((workplaceData, index) => (
          <React.Fragment key={workplaceData.startDate}>
            {index !== 0 && <div className="workplaces-list__separator">{sortSymbol}</div>}
            <WorkplaceItemCollapsible key={workplaceData.startDate} workplaceItem={workplaceData} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Workplaces;
