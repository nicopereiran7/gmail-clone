import styled from "styled-components";
import MailCenter from "./MailCenter";
import MenuSideLeft from "./MenuSideLeft";
import MenuSideRight from "./MenuSideRight";

export default function MailContent() {
  return (
    <Container>
      <MenuSideLeft />
      <MailCenter />
      <MenuSideRight />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
