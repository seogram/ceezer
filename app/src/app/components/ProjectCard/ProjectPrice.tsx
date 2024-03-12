import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectPrice() {
  const { project } = useProjectCardContext();
  return (
    <Typography data-test-id="price">
     Price: {project.price_per_ton} €
    </Typography>
  );
}

export default ProjectPrice;
