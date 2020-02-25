import React from 'react';

import Loader from 'components/Loader';
import Wrapper from 'components/Wrapper';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import Card from 'components/Card';
import Welcome from 'components/Welcome';
import Filter from 'components/Filter';
import WeatherList from 'components/WeatherList';

const HomePage = () => (
  <Wrapper>
    <Loader />
    <Sidebar />
    <Container>
      <Welcome />
      <Filter />
      <WeatherList />
    </Container>
    <Card />
  </Wrapper>
);

export default HomePage;
