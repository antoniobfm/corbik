import React from 'react';

import { Container } from '@/modules/Library/styles';
import Header from '@/modules/Library/Header';
import MyLibrary from '@/modules/Library/MyLibrary';

const Library: React.FC = () => {
  return (
    <Container>
      <Header />
      <MyLibrary />
    </Container>
  )
}

export default Library;