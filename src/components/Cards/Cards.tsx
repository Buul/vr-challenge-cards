import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from 'vr-challenge-ds';

import store from '@/flux/store';

import CardsStoreConnected from './CardsStoreConnected';

export const Cards: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={ThemeDefault}>
      <CardsStoreConnected />
    </ThemeProvider>
  </Provider>
);
