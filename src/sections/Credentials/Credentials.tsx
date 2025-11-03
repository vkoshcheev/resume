import media from '../../utils/media';
import './Credentials.scss';
import { linksInfo } from './linksInfo';

const Credentials = () => {
  return (
    <div className="section">
      <div className="credentials__main">
        <img src={media.profileImage} className="credentials-avatar" />

        <div className="credentials__main__info-block">
          <div className="section__title">Владимир</div>
          <div className="credentials__main__info-block__text">Front-end разработчик <b>React</b></div>

          <div className="show-above-720" style={{ marginTop: 'auto'}}>
            <div className="credentials__main__info-block__links-section">
              {linksInfo.map((linkInfo) => (
                <div key={linkInfo.href}>
                  <b>{linkInfo.title}</b>
                  <br />
                  <a href={linkInfo.href} target="_blank">
                    {linkInfo.labelDesktop}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="show-below-720">
        <div className="credentials__main__info-block__links-section">
          {linksInfo.map((linkInfo) => (
            <a key={linkInfo.href} href={linkInfo.href} target="_blank">
              {linkInfo.labelMobile}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credentials;