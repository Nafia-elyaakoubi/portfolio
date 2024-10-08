import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
            Qui est <b className={s.purple}>Nafia El Yaakoubi ?</b>
            </h1>
            <AboutTextCard />
          </div>


        </div>

        <h2 className={s.skills}>
        Compétences <b className={s.purple}>Professionnelles</b>
        </h2>
        <TechSkills />
      </div>
    </BaseLayout>
  );
};

export default About;
