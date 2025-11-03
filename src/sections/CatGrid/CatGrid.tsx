import media from '../../utils/media';
import './CatGrid.scss';
import CatGridItem from './CatGridItem';

const CatGrid = () => {
  return (
    <div className="section">
      <div className="section__title">Котеки</div>

      <div className="cat-grid">
        <CatGridItem gridArea="c1" mp4src={media.mischiefCat} />
        <CatGridItem gridArea="c2" mp4src={media.catSillyKitty} />
        <CatGridItem gridArea="c3" mp4src={media.sleepTime} />
        <CatGridItem gridArea="c4" mp4src={media.catDrinking} />
        <CatGridItem gridArea="c5" mp4src={media.catPlay} />
        <CatGridItem gridArea="c6" mp4src={media.internetCats} />
      </div>
    </div>
  );
};

export default CatGrid;