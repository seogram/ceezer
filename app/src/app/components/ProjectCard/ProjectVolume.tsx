import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Typography } from "@mui/material";

function ProductDelovery() {
  const { project } = useProjectCardContext();
  return <Typography data-test-id="bicycleDelivery">Volume (tons): {project.offered_volume_in_tons}</Typography>;
}

export default ProductDelovery;
