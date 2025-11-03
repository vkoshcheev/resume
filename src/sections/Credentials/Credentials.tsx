import media from '../../utils/media';
import './Credentials.scss';

const Credentials = () => {
  return (
    <div className="section section-row">
      <img src={media.profileImage} className="credentials-avatar" />

      <div className="credentials__main-info-block">
        <div className="section__title">Владимир</div>
        <div className="credentials__main-info-block__text">Frontend разработчик React</div>

        <div className="credentials__main-info-block__link-section">
          <div className="show-above-720">Контакты можно найти на странице резюме hh.ru:<br /></div>
          
          <a
            href="https://hh.ru/applicant/resumes/view?resume=fff97ac1ff0d88607e0039ed1f4a39617a3041"
            target="_blank"
          >
            Ссылка на резюме (hh.ru)
          </a>
        </div>

        <div className="credentials__main-info-block__link-section show-above-720">
          Исходный код:
          <br />
          <a href="https://github.com/vkoshcheev/resume" target="_blank">
            https://github.com/vkoshcheev/resume
          </a>
        </div>

        <div className="credentials__main-info-block__link-section show-above-720">
          Мой вебсайт с курсами валют стран СНГ:
          <br />
          <a href="https://vkoshcheev.github.io/exchange-rates/" target="_blank">
            https://vkoshcheev.github.io/exchange-rates
          </a>
        </div>

        <div className="credentials__main-info-block__link-section show-below-720">
          <a href="https://github.com/vkoshcheev/resume" target="_blank">
            Ссылка на исходный код страницы
          </a>
        </div>

        <div className="credentials__main-info-block__link-section show-below-720">
          <a href="https://vkoshcheev.github.io/exchange-rates/" target="_blank">
            Мой вебсайт - курсы валют стран СНГ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Credentials;