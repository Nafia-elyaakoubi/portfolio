import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub ,AiFillMail } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            JE ME <span className={s.purple}> PRÉSENTE </span>{' '}
            
          </h1>

          <div className={s.description}>
            <p>
            Je suis Développeur Full Stack avec <b>3 ans</b> d'expérience dans la<br /> 
             création d'applications web et mobile pour les plateformes iOS,
             Android et Web.
            </p>

            <p>
            Mes compétences incluent la maîtrise de{' '}
              <i>
                <b className={s.purple}>
                Java, Spring, React, Angular
                </b>
              </i>
              <br />
              ainsi que d'autres technologies pertinentes. J'ai de l'expérience dans l'intégration de diverses <br />
              bibliothèques tierces, l'intégration d'API, les notifications push et l'analyse.
            </p>

            <p>
            Mes domaines d'intérêt incluent la création de nouvelles
              <i>
                <b className={s.purple}> Technologies et Produits</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>TROUVEZ-MOI SUR</h1>
        <p>
        N'hésitez pas à <span className={s.purple}>me contacter </span>
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Nafia-elyaakoubi"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:elyaakoubinafia1@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="gmail"
            >
              <AiFillMail  />
            </a>
          </li>
        
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/nafia-el-yaakoubi/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
