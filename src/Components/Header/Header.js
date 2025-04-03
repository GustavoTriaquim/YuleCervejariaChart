import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../Assets/image 1 (1).png';
import styled from "styled-components";

const HeaderBlack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #0c0c0c;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 7%;

  @media (max-width: 1000px) {
    padding: 15px 3%;
  }
`;

const Img = styled.img`
  width: 115px;

  @media (max-width: 1500px) {
    width: 7vw;
  }
`;

const Text = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-align: center;
  cursor: default;

  @media (max-width: 1500px) {
    font-size: 1.15vw;
  }
`;

function Header() {
  return (
    <HeaderBlack>
      <Img src={logo} alt="Yule Brewery" />
      <Text>GRÁFICO DE PRODUÇÃO - COURO VEGETAL 100% VEGANO</Text>
      <Button
        bType={'button'}
        click={() => {
          window.location.href = 'https://g.co/kgs/rJFXCje';
        }}
      >
        <FontAwesomeIcon icon={faPhone} />
        ENTRAR EM CONTATO
      </Button>
    </HeaderBlack>
  );
}

export default Header;