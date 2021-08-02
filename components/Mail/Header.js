import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Avatar, IconButton } from "@material-ui/core";
import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";
import SearchBar from "material-ui-search-bar";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import BrightnessHighRoundedIcon from "@material-ui/icons/BrightnessHighRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";

export default function Header() {
  return (
    <HeadContainer>
      <NavLeft>
        <IconButton>
          <DehazeRoundedIcon />
        </IconButton>
        <Image src="/logo-gmail.png" width={192} height={192} />
        <Link href="/mail">
          <a>
            <span className="logo-name">Gmail</span>
          </a>
        </Link>
      </NavLeft>
      <NavCenter>
        <SearchBar placeholder="Buscar Correo" />
      </NavCenter>
      <NavRight>
        <IconButton>
          <HelpOutlineRoundedIcon />
        </IconButton>
        <IconButton>
          <BrightnessHighRoundedIcon />
        </IconButton>
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <Avatar>H</Avatar>
      </NavRight>
    </HeadContainer>
  );
}

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f4f4f4;
`;

const NavLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;

  img {
    width: 50%;
    height: 40px;
  }

  .logo-name {
    margin-left: 10px;
    font-size: 24px;
    color: #5f6368;
  }
`;

const NavCenter = styled.div`
  flex: 0.4;
`;

const NavRight = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
