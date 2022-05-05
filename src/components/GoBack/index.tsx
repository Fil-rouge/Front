import styled from "styled-components";

const Arrow = styled.div`
  font-size: 24px;

  a {
    text-decoration: none;
  }
`;

export const GoBack = ({href}) => (
  <Arrow className="go-back-arrow">
    <a href={href}>
      <i className="earth-icon ri-arrow-left-line"></i>
    </a>
  </Arrow>
)
