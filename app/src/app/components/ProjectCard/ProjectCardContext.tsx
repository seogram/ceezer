import { createContext, useContext } from 'react';
import { Project } from '../../type';

const ProjectCardContext = createContext<{ project: Project } | null>(null);

export function useProjectCardContext() {
  const context = useContext(ProjectCardContext);
  if (!context) {
    throw new Error(
      'ProjectCard.* component must be rendered as child of ProjectCard component'
    );
  }
  return context;
}

export default ProjectCardContext;
