import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";

export default function SliderBasic() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    spedd: 3000,
  };

  return (
    <Slider {...settings}>
      <Slide>
        <Info>
          <Title>Mejora tu productividad con Gmail</Title>
          <Description>
            Participa en videollamadas para hasta 100 personas con subtítulos
            instantáneos y pantalla compartida; ahora Google Meet está integrado
            en Gmail.
          </Description>
          <Button>Crear una cuenta</Button>
        </Info>
        <Img>
          <img src="/img01.png" />
        </Img>
      </Slide>
      <Slide>
        <Info>
          <Title>Escribe correos mas rapido</Title>
          <Description>
            Recibe sugerencias mientras escribes. Solo tienes que pulsar el
            tabulador para aceptarlas.
          </Description>
          <Button>Crear una cuenta</Button>
        </Info>
        <Img>
          <img src="/img02.png" />
        </Img>
      </Slide>
      <Slide>
        <Info>
          <Title>Responde más rapido</Title>
          <Description>
            Responde los correos electrónicos más rápido con sugerencias de
            respuestas que suenan como si las hubieras escrito tú.
          </Description>
          <Button>Crear una cuenta</Button>
        </Info>
        <Img>
          <img src="/img03.png" />
        </Img>
      </Slide>
    </Slider>
  );
}

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
`;

const Description = styled.p`
  color: #5f6368;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 1.5rem;
`;

const Info = styled.div`
  flex: 0.5;
`;

const Img = styled.div`
  flex: 0.5;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  padding: 16px;
  background: #1a73e8;
  color: #fff;
  border: none;
  font-weight: 600;
  border-radius: 2px;
  transition: 0.3s ease all;

  &:hover {
    cursor: pointer;
    background: #003d7c;
  }
`;
