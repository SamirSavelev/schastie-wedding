import type { FC, ReactNode } from 'react';

import './Container.scss';

export const Container: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={`container${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};
