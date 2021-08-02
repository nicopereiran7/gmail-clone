import styled from "styled-components";
import Link from "next/link";
import HelpIcon from "@material-ui/icons/Help";

export default function Footer() {
  return (
    <FooterContainer>
      <LeftSide>
        <a href="www.google.com">
          <span>Google</span>
        </a>
      </LeftSide>
      <CenterSide>
        <Link href="#">
          <a>Privacidad</a>
        </Link>
        <Link href="#">
          <a>Condiciones</a>
        </Link>
        <Link href="#">
          <a>Acerca de</a>
        </Link>
        <Link href="#">
          <a>Productos de Google</a>
        </Link>
        <Link href="#">
          <a>Nuestra politica</a>
        </Link>
      </CenterSide>
      <RightSide>
        <HelpIcon />
        <Link href="#">
          <a>Ayuda</a>
        </Link>
      </RightSide>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  padding: 30px 80px;
  background: #f8f9fa;
  align-items: center;

  a {
    font-size: 14px;
    color: #5f6368;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    display: inline-block;
  }
`;

const LeftSide = styled.div`
  flex: 0.1;

  @media (max-width: 900px) {
    padding: 20px 0;
  }
`;

const CenterSide = styled.div`
  flex: 0.7;

  a {
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    padding: 20px 0;
  }
`;

const RightSide = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    padding: 20px 0;
  }
`;
