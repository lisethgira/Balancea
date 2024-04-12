import logo from "../../assets/logoSinBg.png";
import iconFb from "../../assets/Landing/icon-facebook.svg";
import iconTwitter from "../../assets/Landing/icon-twitter.svg";
import iconYoutube from "../../assets/Landing/icon-youtube.svg";
import iconPinterest from "../../assets/Landing/icon-pinterest.svg";
import { Button, Container } from "../../styles/common";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--DarkBlue);
  padding: 3rem 0;

  .footer_inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const FooterLinks = styled.div`
  .logo {
    max-width: 10rem;
    img {
      filter: invert(50%);
    }
  }
  .social-icons {
    margin-top: 1rem;
    img {
      max-width: 2rem;
      margin-right: 1rem;
    }
  }
  display: flex;
  width: 60%;
  justify-content: space-between;
  .link {
    display: flex;
    flex-direction: column;
    a {
	  margin-top: 15px;
      margin-bottom: 1rem;
	  @media (max-width: 480px) {
		margin-bottom: 1rem;
		margin-top: 0%;
    }

    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    .footer-top {
      padding-bottom: 1.5rem;
      text-align: center;
    }
  }
`;
export const FooterButton = styled.div`
margin-top: 25px;
`;

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Container>
          <div className="footer_inner">
            <FooterLinks>
              <div className="footer-top">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div className="social-icons">
                  <img src={iconFb} alt="" />
                  <img src={iconTwitter} alt="" />
                  <img src={iconYoutube} alt="" />
                  <img src={iconPinterest} alt="" />
                </div>
              </div>
              <div className="link">
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link> <Link to="/blog">Blog</Link>
              </div>
              <div className="link">
                <Link to="/Support">Support</Link>
                <Link to="/Help">Help</Link> <Link to="/contact">Contact</Link>
              </div>
            </FooterLinks>
            <FooterButton>
              <Link to="http://localhost:5173/">
                <Button>Iniciar Sesión</Button>
              </Link>
            </FooterButton>{" "}
          </div>
        </Container>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
