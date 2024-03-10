import { useProjectCardContext } from './ProjectCardContext';
import { Typography } from "@mui/material";

function ProductId() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="bicycleId">ID: {project.id}</Typography>;
}

export default ProductId;
