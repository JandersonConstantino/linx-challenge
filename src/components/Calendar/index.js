import React from 'react';

import { getDayMount, getHours } from 'utils';

import { Date, Hour, Div } from './styles';

const Calendar = () => {
  return (
    <Div>
      <Date>
        {getDayMount()}
      </Date>
      <Hour>
        {getHours()}
      </Hour>
    </Div>
  );
};

export default Calendar;
