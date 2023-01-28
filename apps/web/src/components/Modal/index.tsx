import React from 'react';

import { Container } from './styles';

interface IModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({children}: IModalProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Modal;