import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

function ProductInfo({ children }: Props) {
  return <div>{children}</div>;
}

export default ProductInfo;
