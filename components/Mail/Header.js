import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar, IconButton } from "@material-ui/core";
import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";
import SearchBar from "material-ui-search-bar";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import BrightnessHighRoundedIcon from "@material-ui/icons/BrightnessHighRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";

import { useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../../features/userSlice";
import Redirect from "../Redirect";
import { useState } from "react";
import { useDispatch } from "react-redux";

import firebase from "firebase/app";
import "firebase/auth";

export default function Header() {
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        router.push("/");
      })
      .catch((err) => alert(err.message));
  };

  if (!userName) {
    return <Redirect to="/" />;
  }

  return (
    <HeadContainer>
      <NavLeft>
        <IconButton>
          <DehazeRoundedIcon />
        </IconButton>
        <Image src="/logo-gmail.png" width={192} height={192} />
        <Link href="/mail/inbox">
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
        <SignOut>
          <Avatar
            src={userPhoto}
            onClick={() => setActiveDropDown(!activeDropDown)}
          />
          {activeDropDown && (
            <DropDown>
              <Avatar src={userPhoto} />
              <p>{userName}</p>
              <span onClick={signOutUser}>Cerrar Sesion</span>
            </DropDown>
          )}
        </SignOut>
      </NavRight>
    </HeadContainer>
  );
}

const HeadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const DropDown = styled.div`
  display: grid;
  justify-content: center;
  position: absolute;
  top: 48px;
  right: 0px;
  background: #fff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0;
  padding: 10px;
  font-size: 12px;
  width: 100px;
  opacity: 1;
  z-index: 1;
  transition-duration: 1s;
  transition: 0.3s ease-in-out;

  span {
    color: #000;
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
