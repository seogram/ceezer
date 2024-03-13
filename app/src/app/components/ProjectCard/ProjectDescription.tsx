import * as React from 'react';
import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography, Divider, styled } from "@mui/material";


const DividerStyle = styled(Divider)(() => ({
  width : "95%",my:1
}));

function ProjectDescription() {
  const { project } = useProjectCardContext();

  return  (
    <>
    <DividerStyle />
    <Typography>{project.description}</Typography>
    <DividerStyle />
  </>
  )

}

export default ProjectDescription;
