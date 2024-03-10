import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Typography } from "@mui/material";

function ProductDelovery() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="bicycleDelivery">Supplier: {project.supplier_name}</Typography>;
}

export default ProductDelovery;
