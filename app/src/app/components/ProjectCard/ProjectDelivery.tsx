import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Typography } from "@mui/material";

function ProductDelovery() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="bicycleDelivery">Earliest Delivery: {project.earliest_delivery}</Typography>;
}

export default ProductDelovery;
