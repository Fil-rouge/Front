import styled from "styled-components";
// import { variables } from "utils/const"


const theme = {
  primary: {
    default: "#ED8A61",
    hover: "#F1AB8E"
  },
  secondary: {
    default: "#F1AB8E",
    hover: "#ED8A61"
  }
};

const size = {
  auto: {
    width: "auto",
  },
  full: {
    width: "100%",
  },
  split: {
    width: "50%",
  },
};

export const StyledButton = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  height: 48px;
  width: ${(props) => size[props.size].width};
  padding: 9px 16px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  border: none;
  box-shadow: disabled;
  transition: ease background-color 0.6s;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

StyledButton.defaultProps = {
  theme: "primary",
  size: "auto",
};

export const Button = ({message, size, theme}) => {
  return (
    <>
      <StyledButton size={size} theme={theme}>{message}</StyledButton>
    </>
  );
}
