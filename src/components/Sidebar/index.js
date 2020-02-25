import React from 'react';
import { useTranslation } from 'react-i18next';

import Calendar from 'components/Calendar';

import * as Styles from './styles';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Styles.Toolbar>
      <div>
        <img
          alt={t('LOGO')}
          src={require('assets/logo.png')}
        />
      </div>
      <div>
        <Styles.Image
          alt={t('HOME')}
          src={require('assets/home.png')}
        />
      </div>
      <div>
        <Calendar />
      </div>
    </Styles.Toolbar>
  );
};

export default Sidebar;
