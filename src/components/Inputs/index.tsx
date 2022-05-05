import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8px;
  }

  input {
    background-color: var(--primary-yellow-light);
    font-size: 12px;
    outline: none;
    border: none;
    padding: 15px;
    color: var(--secondary-grey);
    font-family: 'Itim';
  }
`;

export const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <>
      <StyledInput className="urstock-input">
        <label htmlFor="input">{label}</label>
        <input type={type} name="input" placeholder={placeholder} />
      </StyledInput>
    </>
  );
};
