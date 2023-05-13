import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Card = () => {
  return (
    <div className="card">
      <div className="card_">
        <div className="card_tit">
          <p>Harshit</p>
          <p>Full Stack Devloper</p>
        </div>
        <div className="card_img">
          <Image
            src="/img-pro.jpg"
            alt="profile"
            width={300}
            height={300}
            priority
          />
        </div>
        <p
          style={{
            color: "#dbdbdb",
            fontSize: "2.3rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          hello@cwd-harshit.com
        </p>
        <p
          style={{
            color: "#dbdbdb",
            fontSize: "2rem",
            fontWeight: "500",
            marginBottom: "1rem",
          }}
        >
          Based in Noida, U.P, India
        </p>
        <p
          style={{
            color: "#a1a1a1",
            fontSize: "1.3rem",
            fontWeight: "500",
            marginBottom: "5rem",
          }}
        >
          @2023 Harshit. All Rights Reserved
        </p>
        <div className="card_but">
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <BsTwitter />
            </IconButton>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <AiOutlineInstagram />
            </IconButton>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <AiFillGithub />
            </IconButton>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <AiFillLinkedin />
            </IconButton>
          </Link>
        </div>
        <div className="card_cta">
          <IconButton>
            <GoMail style={{ fontSize: "3rem", color: "#000000" }} />
          </IconButton>
          <p>HIRE ME!</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
