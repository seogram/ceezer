import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import { Typography, styled, Box, Divider } from "@mui/material";


const Wrapper = styled(Box)(({ theme }) => ({
  width: "50%",
  padding: "0.5rem 0",
  textAlign: "justify",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function ProjectDescription() {
  const { project } = useProjectCardContext();

  return (
    <>
      <Wrapper>
        <Divider />
        <Typography>{project.description}</Typography>
        <Divider />
      </Wrapper>
    </>
  )

}

export default ProjectDescription;
