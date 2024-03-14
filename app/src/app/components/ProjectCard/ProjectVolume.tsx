import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectVolume() {
  const { project } = useProjectCardContext();
  return <Typography>Volume (tons): {project.offered_volume_in_tons}</Typography>;
}

export default ProjectVolume;
