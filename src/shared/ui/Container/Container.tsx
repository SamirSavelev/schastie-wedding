import type { FC, ReactNode } from 'react';

import './Container.scss';

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container">{children}</div>;
};
