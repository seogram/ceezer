import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectDelivery() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="delivery">Earliest Delivery: {project.earliest_delivery}</Typography>;
}

export default ProjectDelivery;
