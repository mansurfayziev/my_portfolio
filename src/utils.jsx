import styled from "styled-components";

export const theme = {
  pColor: "#d2d2d2",
  color: "#ffffff",
  background: "#131313",
  div: "#1d1d1d",
  element: "#fbff00",
};

export const Button = styled.button`
  padding: 10px 30px;
  margin: 30px 0;
  background: ${theme.element};
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  transition: background 0.5s;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  &:hover {
    background: linear-gradient(
      -45deg,
      ${theme.element},
      transparent,
      ${theme.element}
    );
  }
  .gitimg {
    margin: 0 10px;
    width: 30px;
    height: 30px;
  }
`;