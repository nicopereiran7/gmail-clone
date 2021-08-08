import styled from "styled-components";

export default function MailCenter({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.77;
  min-height: 90vh;
`;
