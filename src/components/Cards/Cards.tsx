import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from 'vr-challenge-ds';

import store from '@/flux/store';

import CardsStoreConnected from './CardsStoreConnected';

const CardsComponent: FC = () => (
  <ThemeProvider theme={ThemeDefault}>
    <Provider store={store}>
      <CardsStoreConnected />
    </Provider>
  </ThemeProvider>
);
export default CardsComponent;
