import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectId() {
  const { project } = useProjectCardContext();
  return <Typography>ID: {project.id}</Typography>;
}

export default ProjectId;
