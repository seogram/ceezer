import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectVolume() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="volume">Volume (tons): {project.offered_volume_in_tons}</Typography>;
}

export default ProjectVolume;
