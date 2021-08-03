import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const data = [
  {
    title: "Mejora tu productividad con Gmail",
    description: `Participa en videollamadas para hasta 100 personas con subtítulos
  instantáneos y pantalla compartida; ahora Google Meet está integrado
  en Gmail`,
    image: "/img01.png",
  },
  {
    title: "Escribe correos mas rapido",
    description: `Recibe sugerencias mientras escribes. Solo tienes que pulsar el
    tabulador para aceptarlas.`,
    image: "/img02.png",
  },
  {
    title: "Responde más rapido",
    description: `Responde los correos electrónicos más rápido con sugerencias de
    respuestas que suenan como si las hubieras escrito tú.`,
    image: "/img03.png",
  },
];

export default function SliderBasic() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Carousel {...settings}>
      {data.map((item, index) => (
        <Wrap key={index}>
          <Info>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Button>Consigue Gmail</Button>
          </Info>
          <Img>
            <Image src={item.image} alt="" width={1000} height={800} />
          </Img>
        </Wrap>
      ))}
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  background-color: #fff;

  & > button {
    opacity: 0;
    color: black;
    width: 3vw;
    z-index: 1;
    transition: opacity 0.3s ease 0s;
    right: 0;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
      transition: 0.3s ease all;
    }
  }

  li.slick-active button:before {
    color: black;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-prev {
    right: -75px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  flex: 0.5;
  width: 100%;
  padding: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
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

const Img = styled.div`
  flex: 0.5;

  img {
    width: 80%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
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
