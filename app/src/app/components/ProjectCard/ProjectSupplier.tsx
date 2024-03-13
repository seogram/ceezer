import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography } from "@mui/material";

function ProjectSupplier() {
  const { project } = useProjectCardContext();
  return <Typography>Supplier: {project.supplier_name}</Typography>;
}

export default ProjectSupplier;
