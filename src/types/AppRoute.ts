import type { ComponentType, LazyExoticComponent } from 'react';

export interface AppRoute {
  path: string;
  component: ComponentType<any> | LazyExoticComponent<ComponentType<any>>;
  roles?: ('admin' | 'borrower' | 'merchant' | 'user')[];
  isAnonymous?: boolean;
  children?: AppRoute[];
}
