import { SkillSet } from '../skills';
import './SkillSetItem.scss';

const SkillSetItem = ({ skillSet }: { skillSet: SkillSet }) => {
  return (
    <div className="skills-list__items__skill-set">
      <div className="skills-list__items__skill-set__title">{skillSet.skillSetName}</div>
      {skillSet.skills.map((skill) => {
        const skillName = '- '.concat(typeof skill === 'string' ? skill : skill[0]);
        return (
          <div key={skillName} className="skills-list__items__skill-set__skill">
            {skillName}
          </div>
        );
      })}
    </div>
  );
};

export default SkillSetItem;
