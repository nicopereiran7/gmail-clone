import styled from "styled-components";
import Header from "../components/Mail/Header";
import MailContent from "../components/Mail/MailContent";
import HeadTitle from "../components/HeadTitle";

export default function Mail() {
  return (
    <>
      <HeadTitle title="Mail | Gmail" />
      <Container>
        <Header />
        <MailContent />
      </Container>
    </>
  );
}

const Container = styled.div``;
