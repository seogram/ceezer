import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectTitle() {
  const { project } = useProjectCardContext();
  return <Typography variant="h6" data-test-id="bicycleName">
    {project.name}
  </Typography>
}

export default ProjectTitle;
