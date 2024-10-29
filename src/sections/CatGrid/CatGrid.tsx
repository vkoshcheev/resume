import { getCssUrl } from '../../utils/helper';
import images from '../../utils/images';
import './CatGrid.scss';

const CatGrid = () => {
  return (
    <div className="section">
      <div className="section__title">Котеки:</div>

      <div className="cat-grid">
        <div style={{ gridArea: "c1", backgroundImage: getCssUrl(images.mischiefCat) }} />
        <div style={{ gridArea: "c2", backgroundImage: getCssUrl(images.catSillyKitty) }} />
        <div style={{ gridArea: "c3", backgroundImage: getCssUrl(images.sleepTime) }} />
        <div style={{ gridArea: "c4", backgroundImage: getCssUrl(images.catDrinking) }} />
        <div style={{ gridArea: "c5", backgroundImage: getCssUrl(images.catPlay) }} />
        <div style={{ gridArea: "c6", backgroundImage: getCssUrl(images.internetCats) }} />
      </div>
    </div>
  );
};

export default CatGrid;