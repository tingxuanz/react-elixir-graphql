// handle act() warning
// https://trojanowski.dev/apollo-hooks-testing-without-act-warnings/
import { act } from '@testing-library/react';

export const wait = async function (ms = 0) {
  await act((): Promise<any> => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}