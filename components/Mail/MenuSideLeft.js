import styled from "styled-components";
import Link from "next/link";
import AddIcon from "@material-ui/icons/Add";
import AirplayIcon from "@material-ui/icons/Airplay";
import StarIcon from "@material-ui/icons/Star";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";

export default function MenuSideLeft() {
  return (
    <Container>
      <Header>
        <Redactar onClick={() => console.log("redactar correo")}>
          <AddIcon />
          <span className="name">Redactar</span>
        </Redactar>
      </Header>
      <Mails>
        <Link href="/mail/inbox">
          <a>
            <MailLink>
              <AirplayIcon fontSize="small" />
              <span className="span-link">Recibidos</span>
            </MailLink>
          </a>
        </Link>
        <Link href="/mail/starred">
          <a>
            <MailLink>
              <StarIcon fontSize="small" />
              <span className="span-link">Destacados</span>
            </MailLink>
          </a>
        </Link>
        <Link href="#">
          <a>
            <MailLink>
              <QueryBuilderIcon fontSize="small" />
              <span className="span-link">Pospuestos</span>
            </MailLink>
          </a>
        </Link>
        <Link href="#">
          <a>
            <MailLink>
              <SendIcon fontSize="small" />
              <span className="span-link">Enviados</span>
            </MailLink>
          </a>
        </Link>
      </Mails>
      <MeetContainer>
        <h3>Meet</h3>
        <MailLink>
          <VideocamIcon fontSize="small" />
          <span className="span-link">Nueva Reunion</span>
        </MailLink>
        <MailLink>
          <EventIcon fontSize="small" />
          <span className="span-link">Mis Reuniones</span>
        </MailLink>
      </MeetContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.18;
`;

const Header = styled.div`
  padding: 10px;
`;

const Redactar = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);

  &:hover {
    cursor: pointer;
  }

  .name {
    margin-left: 10px;
  }
`;

const Mails = styled.div`
  display: grid;
`;

const MailLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.2s ease-in-out;
  padding-left: 30px;
  color: #5f6368;

  .span-link {
    font-size: 15px;
    margin-left: 10px;
  }

  &:hover {
    background-color: #f4f4f4;
    cursor: pointer;
  }
`;

const MeetContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid #f4f4f4;

  h3 {
    padding-left: 30px;
    font-size: 14px;
  }
`;
