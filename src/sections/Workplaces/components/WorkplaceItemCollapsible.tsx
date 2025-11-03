import { useCallback, useEffect, useRef, useState } from 'react';
import Collapsible from 'react-collapsible';
import { WorkplaceData } from '../workplacesList';
import './WorkplacesItemCollapsible.scss';

const WorkplaceItemCollapsible = ({ workplaceItem }: { workplaceItem: WorkplaceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rotatingDivRef = useRef<HTMLImageElement>(null);

  const setExpanded = (expanded: boolean) => {
    const angle = expanded ? 0 : -45;
    rotatingDivRef.current!.style.transition = 'transform 0.5s ease-in-out';
    rotatingDivRef.current!.style.transform = `rotate(${angle}deg)`;
  };

  useEffect(() => {
    setExpanded(isOpen);
  }, [isOpen]);

  const CollapsibleHeader = useCallback(
    () => {
      return (
        <div className="workplaces-list__item__header">
          <button
            className="workplaces-list__item__header__button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div ref={rotatingDivRef} className="workplaces-list__item__header__button__rotating-div">
              ✖
            </div>
          </button>
          <div>
            <div className="workplaces-list__item__header__text-container__occupation">
              {workplaceItem.occupation}
            </div>
            <div className="workplaces-list__item__header__text-container__company-name">
              {workplaceItem.companyName}
            </div>
            <div className="workplaces-list__item__header__text-container__dates">
              {`${workplaceItem.startDate} — ${workplaceItem.finishDate} (${workplaceItem.duration})`}
            </div>
          </div>
        </div>
      );
    },
    [],
  );

  return (
    <div className="workplaces-list__item">
      <Collapsible
        trigger={<CollapsibleHeader />}
        handleTriggerClick={() => {}}
        open={isOpen}
      >
        <div className="workplaces-list__item__main-text">{workplaceItem.responsibilities}</div>
      </Collapsible>
    </div>
  );
};

export default WorkplaceItemCollapsible;
