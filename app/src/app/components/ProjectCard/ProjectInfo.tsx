import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

function ProjectInfo({ children }: Props) {
  return <div>{children}</div>;
}

export default ProjectInfo;
