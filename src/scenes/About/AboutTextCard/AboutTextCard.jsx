import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Salut, je suis{' '}
        <span className={s.purple}>Nafia El Yaakoubi, </span>
        <br />Ingénieure Full Stack passionnée par le développement de solutions
        innovantes. Basée à{' '}
        <span className={s.purple}>Casablanca, Maroc.</span>
        <br />
        <br />
        J'ai étudié à l'ENSET - École Normale Supérieure de l'Enseignement Technique, 
        où j'ai obtenu mon Master en Ingénierie Informatique : Big Data et Cloud Computing.
        <br />
        <br />
        En dehors de mon métier, voici quelques activités que j’aime pratiquer :
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Boxe
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Surf
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Voyage
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
