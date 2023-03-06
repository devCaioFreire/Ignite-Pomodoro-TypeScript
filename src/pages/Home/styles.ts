import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  line-height: 2.9;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
  }
`
