import styled from "styled-components";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginDetails, selectUserEmail } from "../../features/userSlice";
import { useRouter } from "next/router";

import firebase from "firebase/app";
import "firebase/auth";

const provider = new firebase.auth.GoogleAuthProvider();

export default function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector(selectUserEmail);

  useEffect(() => {
    async function auth() {
      await firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          authUser(user);
          router.push("/mail/inbox");
        }
      });
    }
    auth();
  }, [userName, router]);

  const handleAuth = async () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        authUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const authUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <MenuTop>
      <LogoBar>
        <Image src="/logo-gmail.png" alt="gmail" width={32} height={32} />
        <span>Gmail</span>
      </LogoBar>
      <MenuBar>
        <Link href="/">
          <a>Para el trabajo</a>
        </Link>
        <SignIn onClick={handleAuth}>Iniciar Sesion</SignIn>
        <Link href="/">
          <a>
            <Button>Crear una Cuenta</Button>
          </a>
        </Link>
      </MenuBar>
    </MenuTop>
  );
}

const MenuTop = styled.div`
  top: 0;
  position: sticky;
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  color: #5f6368;
  display: flex;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 12%), inset 0 -1px 0 0 #dadce0;

  a {
    margin-left: 50px;
    transition: 0.3s ease all;

    &:hover {
      cursor: pointer;
      color: #000;
    }
  }

  z-index: 1;
`;

const LogoBar = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  span {
    font-size: 26px;
    font-weight: 400;
    margin-left: 8px;
  }

  @media (max-width: 960px) {
    span {
      opacity: 0;
    }
  }
`;

const MenuBar = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  padding: 14px;
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

const SignIn = styled.button`
  margin-left: 50px;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 16px;
  color: #5f6368;

  &:hover {
    cursor: pointer;
  }
`;
