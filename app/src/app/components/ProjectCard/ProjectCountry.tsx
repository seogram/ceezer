import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectCountry() {
  const { project } = useProjectCardContext();
  return <Typography>Country: {project.country}</Typography>;
}

export default ProjectCountry;
