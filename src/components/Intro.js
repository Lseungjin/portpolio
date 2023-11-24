import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faHeart, faComputerMouse, faArrowDown, } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Intro = () => {
  const goContact = () => {
    const targetMenu = document.getElementById("Contact");
    targetMenu.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="wrapper intro_wrapper">
      <div className="container intro">
        <div className="intro_text">
          <div>
            <span>안녕하세요 </span>
            <span>이승진입니다.</span>
          </div>
          <span>Backend, Blockchain Developer</span>

          <div className="intro_log">
            <a href="https://github.com/Lseungjin" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/2LeeSeungJin" target="blank">
              <FontAwesomeIcon icon={faBlog} />
            </a>
            <button onClick={() => goContact()}>
              Contact Me _<FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>

        <div className="intro_img">
          <img src={process.env.PUBLIC_URL + "./img1.jpg"} />
        </div>
      </div>

      <div className="intro_scroll">
        <span>
          <FontAwesomeIcon icon={faComputerMouse} />
        </span>
        <span>Scroll Down</span>
        <span>
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>
    </div>
  );
};

export default Intro;