import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-100']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  transition: all 0.4s ease-in-out;

  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
    border-radius: 0;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
