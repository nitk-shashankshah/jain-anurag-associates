import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  /**
   * `narrow` suits prose; the default suits grids and full sections. `edge` runs full
   * width with only the standard padding, for the header and hero, which sit closer to
   * the screen edge than the sections below them.
   */
  width?: 'default' | 'narrow' | 'edge';
  as?: ElementType;
  className?: string;
}

const WIDTH_CLASS = { default: '', narrow: styles.narrow, edge: styles.edge };

export function Container({ children, width = 'default', as: Tag = 'div', className = '' }: ContainerProps) {
  return <Tag className={`${styles.container} ${WIDTH_CLASS[width]} ${className}`}>{children}</Tag>;
}
