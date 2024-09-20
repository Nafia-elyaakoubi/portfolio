import s from './TechSkills.module.scss';
import {
  DiJava,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiLaravel,
  DiPostgresql,
  DiAngularSimple,
  DiMysql,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
            <li className={s.techIcon}>
        <SiTypescript />
      </li>


      <li className={s.techIcon}>
        < DiAngularSimple/>
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>

      <li className={s.techIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338c0 0-.599.034-1.201.133c0 0 .228-.097.519-.198c2.374-.821 3.496-.986 4.939-1.727c2.71-1.388 5.408-4.413 5.957-7.555c-1.032 3.022-4.17 5.623-7.027 6.679c-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059c1.916-.736 3.747-.332 5.818-.825c2.208-.525 4.766-2.18 5.805-4.344c1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.2 9.2 0 0 1-1.065 1.89a9.98 9.98 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.98 9.98 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292c.274-2.539-.476-5.763-1.752-9.596"/></svg>
      </li>
      <li className={s.techIcon}>
        < DiGit/>
      </li>
      <li className={s.techIcon}>
        <DiLaravel  />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        < DiMysql/>
      </li>
      
    </ul>
  );
};

export default TechSkills;
