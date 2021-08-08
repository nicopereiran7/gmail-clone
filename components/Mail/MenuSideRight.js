import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

export default function MenuSideRight() {
  return (
    <Container>
      <IconBtn>
        <InsertInvitationIcon fontSize="small" />
      </IconBtn>
      <IconBtn>
        <KeyboardHideIcon fontSize="small" />
      </IconBtn>
      <IconBtn>
        <PermContactCalendarIcon fontSize="small" />
      </IconBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.05;
`;

const IconBtn = styled(IconButton)`
  border-radius: 0 !important;
`;
