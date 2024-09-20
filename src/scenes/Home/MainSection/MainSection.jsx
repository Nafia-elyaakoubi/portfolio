import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/nafia.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
        Salut à tous! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          JE SUIS
          <strong className={s.mainName}> Nafia El yaakoubi</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'En apprentissage continu',
              'Ingénieur Full Stack',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;
