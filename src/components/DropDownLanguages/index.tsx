import styled from "styled-components";
import { variables } from "utils/const"
import flag_of_france from "images/flag.svg"

const ContainerStyle = styled.div`
  display:flex;
  align-items:center;
  width: 112px;
  font-family: 'Itim';
  border-radius: 5px;
  color: ${variables.colors.primary.black};
  background-color : ${variables.colors.primary.grey};
  justify-content: space-around;
  padding: 7px 0px;

  .earth-icon {
    font-size: 15px;
  }

  p {
    margin-bottom: 1px;
    font-size: 12px;
  }
`;

export const DropDownLanguages = () => (
  <ContainerStyle className="dropdown-languages">
    <i className="earth-icon ri-earth-fill"></i> 
    <p>Français</p>
    <img src={flag_of_france} alt="french flag" />
    <i className="ri-arrow-down-s-line"></i> 
  </ContainerStyle>
)
