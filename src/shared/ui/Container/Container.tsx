import type { FC, ReactNode } from 'react';

import './Container.scss';

export const Container: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={`container${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
