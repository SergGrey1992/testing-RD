import React from 'react';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {};

export const Providers = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>{children}</Provider>
      </SafeAreaProvider>
    </>
  );
};
