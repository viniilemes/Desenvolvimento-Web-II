import { createContext } from 'react';

interface LetterContextProps {
  name: string;
  setName: (name: string) => void;
}

export const LetterContext = createContext<LetterContextProps>({
  name: '',
  setName: () => {},
});
