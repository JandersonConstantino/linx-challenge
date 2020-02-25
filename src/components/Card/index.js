import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Container,
  DivImage,
  Image,
  LabelTemperature,
  DivLabel,
  LabelCelsius
} from './styles';
import Header from './components/Header';
import Footer from './components/Footer';

const Card = () => {
  const { currentDay } = useSelector(({ weather }) => weather);
  const { t } = useTranslation();

  return !currentDay ? null : (
    <Container>
      <Header />
      <DivImage>
        <Image
          alt={(t('CLOUDS'))}
          src={require('assets/cloud-background.png')}
        />
        <DivLabel>
          <LabelTemperature>{currentDay.main.temp}</LabelTemperature>
          <LabelCelsius>°ᶜ</LabelCelsius>
        </DivLabel>
      </DivImage>
      <Footer />
    </Container>
  );
};

export default Card;
