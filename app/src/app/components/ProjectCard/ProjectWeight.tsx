import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectWeight() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="weight">Distributon: {project.distribution_weight}</Typography>;
}

export default ProjectWeight;
