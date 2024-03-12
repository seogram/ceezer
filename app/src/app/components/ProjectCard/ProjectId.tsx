import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectId() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="id">ID: {project.id}</Typography>;
}

export default ProjectId;
