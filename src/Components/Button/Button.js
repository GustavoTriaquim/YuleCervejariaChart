import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 300px;
  height: 50px;
  background-color: #f3c037;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  color: #0c0c0c;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize || '15px'};
  gap: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 1500px) {
    width: 15vw;
    height: 5vh;
    font-size: 1vw;
    transition: none;

    &:hover {
      cursor: default;
      transform: none;
    }

    &:active {
      background-color: #0c0c0c;
      color: #f3c037;
    }
  }
`;

function Button({ bType, children, size, click }) {
  return (
    <ButtonStyle type={bType} fontSize={size} onClick={click}>
      {children}
    </ButtonStyle>
  );
}

export default Button;