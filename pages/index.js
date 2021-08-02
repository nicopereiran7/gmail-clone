import NavBar from "../components/Home/NavBar";
import SliderBasic, { Button } from "../components/SliderBasic";
import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Home/Footer";
import HeadTitle from "../components/HeadTitle";

export default function Home() {
  return (
    <div>
      <HeadTitle title="Home | Gmail" />
      <NavBar />
      <SliderBasic />
      <Container>
        <h1>Usa Gmail en cualquier dispositivo</h1>
        <Description>
          La facilidad de uso y sencillez de Gmail, estés donde estés.
        </Description>
        <div className="btn">
          <Image src="/google-play.png" alt="" width={120} height={40} />
          <Image src="/apple-store.png" alt="" width={120} height={40} />
        </div>
        <ContainerImg>
          <Image src="/fondo1.png" alt="" width={3000} height={1167} />
        </ContainerImg>
      </Container>
      <EndContainer>
        <Image src="/logo-gmail.png" alt="" width={384} height={384} />
        <h1>Empieza a utilizar Gmail</h1>
        <Button>Consigue Gmail</Button>
      </EndContainer>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 50px;
  padding-bottom: 0;

  .btn {
    margin-top: 30px;
  }
`;

const Description = styled.p`
  margin-top: 30px;
`;

const ContainerImg = styled.div`
  margin-top: 40px;

  img {
    width: 80%;
    object-fit: cover;
  }
`;

const EndContainer = styled.div`
  text-align: center;
  padding: 60px 0;

  img {
    width: 50%;
    height: 100px;
  }

  h1 {
    padding: 20px;
  }
`;
