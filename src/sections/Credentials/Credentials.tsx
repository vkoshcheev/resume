import images from '../../utils/images';
import './Credentials.scss';

const Credentials = () => {
  return (
    <div className="section section-row">
      <img src={images.profileImage} className="credentials-avatar" />

      <div className="credentials__main-info-block">
        <div className="credentials__main-info-block__credentials-text">Владимир</div>
        <div className="credentials__main-info-block__text">Frontend разработчик React & React Native</div>

        <div className="credentials__main-info-block__hh-link-section">
          Контакты можно найти на странице резюме hh.ru:
          <br />
          <a
            href="https://hh.ru/applicant/resumes/view?resume=fff97ac1ff0d88607e0039ed1f4a39617a3041"
            target="_blank"
          >
            Ссылка
          </a>
        </div>
      </div>
    </div>
  );
};

export default Credentials;