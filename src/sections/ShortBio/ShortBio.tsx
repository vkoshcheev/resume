import './ShortBio.scss';

const ShortBio = () => {
  
  
  return (
    <div className="section">
      <div className="section__title">Обо мне</div>
      <div className="short-bio__main-info-block__text">
        <p>1,5 года коммерческой разработки в Trial Interactive, занимающейся проектами в сфере медицины.</p>
        <p>
          4 месяца проектной занятости в российской компании IceRockDev, работа над приложением для
          регистрации ДТП с интеграцией сервиса ЕСИА/Госуслуги.
        </p>
        <p>
          Около года работы в компании Этнамед, сперва в должности технического писателя, а затем
          разработчика React.
        </p>
      </div>

      <div className='short-bio__separator'/>
      <div className="section__title">Образование</div>
      <div className="short-bio__main-info-block__education-caption">Высшее (Магистр)</div>
      <div className="short-bio__main-info-block__text">
        <p>
          <b>Уфимский Государственный Авиационный Технический Университет (УГАТУ), РФ</b>
        </p>
        <p><b>Факультет</b>: Информатики и Робототехники (ФИРТ)</p>
        <p><b>Направление</b>: 27.04.04 Управление в Технических Системах</p>
      </div>
    </div>
  );
};

export default ShortBio;