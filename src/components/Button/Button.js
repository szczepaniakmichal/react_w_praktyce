import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  padding: 10px;
  width: ${({ width }) => width || '200px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${props =>
    props.secondBtn &&
    css`
      background-color: silver;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
