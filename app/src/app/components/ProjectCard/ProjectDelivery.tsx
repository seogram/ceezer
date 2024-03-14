import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectDelivery() {
  const { project } = useProjectCardContext();
  return <Typography>Earliest Delivery: {project.earliest_delivery}</Typography>;
}

export default ProjectDelivery;
