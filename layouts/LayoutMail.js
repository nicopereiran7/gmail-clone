import styled from "styled-components";
import Header from "../components/Mail/Header";
import MailCenter from "../components/Mail/MailCenter";
import MenuSideLeft from "../components/Mail/MenuSideLeft";
import MenuSideRight from "../components/Mail/MenuSideRight";
import HeadTitle from "../components/HeadTitle";

export default function LayoutMail({ children }) {
  return (
    <>
      <HeadTitle title="Mail | Gmail" />
      <Header />
      <Container>
        <MenuSideLeft />
        <MailCenter>{children}</MailCenter>
        <MenuSideRight />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
