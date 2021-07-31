import NavBar from "../components/Home/NavBar";
import SliderBasic from "../components/SliderBasic";
import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div>
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
          <img src="/fondo1.png" />
        </ContainerImg>
      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 50px;

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
