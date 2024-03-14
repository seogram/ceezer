import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectWeight() {
  const { project } = useProjectCardContext();
  return <Typography>Distributon: {project.distribution_weight}</Typography>;
}

export default ProjectWeight;
