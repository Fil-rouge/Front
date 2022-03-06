import styled from "styled-components";
import { variables } from "utils/const"
import flag_of_france from "images/flag.svg"

const ContainerStyle = styled.div`
  display:flex;
  align-items:center;
  width: 130px;
  font-size:16px;
  font-family: 'Itim';
  border-radius: 5px;
  color: ${variables.colors.primary.black};
  background-color : ${variables.colors.primary.grey};
  & > i,p,img {
    padding:3px;
  }
`;

export const DropDownLanguages = () => (
  <ContainerStyle>
    <i className="ri-earth-line"></i> 
    <p>Français</p>
    <img src={flag_of_france} alt="french flag" />
    <i className="ri-arrow-down-s-line"></i> 
  </ContainerStyle>
)
