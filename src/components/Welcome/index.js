import React from 'react';
import { useTranslation } from 'react-i18next';

import { BeWelcome } from './styles';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <BeWelcome>
      {t('BE_WELCOME')}
    </BeWelcome>
  )
};

export default Welcome;
