import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    padding: 1rem;
    border-radius: 6px;
    color: ${props => props.theme['gray-300']};
    background: ${props => props.theme['gray-900']};

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    font-weight: bold;
    border-radius: 6px;
    background-color: transparent;
    color: ${props => props.theme['green-300']};
    border: 1px solid ${props => props.theme['green-300']};
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${props => props.theme.white};
      border-color: ${props => props.theme['green-500']};
      background-color: ${props => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`