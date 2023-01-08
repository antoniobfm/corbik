import React from 'react';

import { Container } from '@/modules/Library/styles';
import Header from '@/modules/Library/Header';
import MyLibrary from '@/modules/Library/MyLibrary';
import PublicLibrary from '@/modules/Library/PublicLibrary';
import SearchBar from '@/modules/Library/SearchBar';

const Library: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <MyLibrary />
      <PublicLibrary />
    </Container>
  )
}

export default Library;