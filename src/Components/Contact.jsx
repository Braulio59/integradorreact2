import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 450px;
  flex-direction: column;
  gap: 50px;
  color: black;
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 45px;

    a {
      color: black;
      svg {
        cursor: pointer;
        height: 45px;
        width: 45px;
      }
    }
  }
`;

const Contactos = styled.h1`
  display: flex;
  /* margin-bottom: 200px; */
  font-family: "Lato", sans-serif;
  font-size: 25px;
`;

const Contact = () => {
  return (
    <Container>
      <Contactos>Contacto</Contactos>

      <div className="icons">
        <a href="https://instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="mailto:juanehueda885@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="tel:3515221472">
          <FaPhoneAlt />
        </a>
      </div>
    </Container>
  );
};
export default Contact;
