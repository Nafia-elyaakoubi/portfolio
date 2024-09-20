import s from './Footer.module.scss';
import { AiFillGithub , AiFillMail} from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made by Nafia El Yaakoubi</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Nafia-elyaakoubi"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:elyaakoubinafia1@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <AiFillMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nafia-el-yaakoubi/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
