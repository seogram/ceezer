import * as React from 'react';
import { useProjectCardContext } from './ProjectCardContext';
import { Typography, Divider } from "@mui/material";

function ProductDelovery() {
  const { project } = useProjectCardContext();
  return  (
    <>
    <Divider sx={{width : "95%",my:1}}/>
    <Typography data-test-id="bicycleDelivery">{project.description}</Typography>
    <Divider sx={{width : "95%",my:1}}/>
  </>
  )

}

export default ProductDelovery;
