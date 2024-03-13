import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectTitle() {
  const { project } = useProjectCardContext();
  return <Typography variant="h6">
    {project.name}
  </Typography>
}

export default ProjectTitle;
