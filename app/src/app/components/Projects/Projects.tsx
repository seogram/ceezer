import React from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useData } from "@/app/hooks";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { useRouter } from "next/navigation";
import { Projects as ProjectsType } from "@/app/type";

const RootStyle = styled(Stack)(() => ({
  gap: "20px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex", 
  alignItems: "center", 
  justifyContent: "space-between"
}));

type Props = {
  searchTerm?: string | null;
};

type useProjectDataReturn = {
  data: ProjectsType;
  isFetching: boolean;
  isError: boolean;
};

const renderDetails = (projects: ProjectsType) =>
  projects.map(project => <ProjectDetail projectData={project} key={project.id} />)


const Projects = ({ searchTerm }: Props) => {
  const router = useRouter();

  const {
    data: projects,
    isFetching: isUserFetching,
    isError,
  }: useProjectDataReturn = useData();

  if (isError) {
    return <Error />;
  }

  if (isUserFetching) {
    return <Loading />;
  }
  const filterByName = () => {
    const keyword = searchTerm?.toLowerCase();
    return projects.filter(project => project.name.toLowerCase().search(keyword!) > -1);
  }

  const filteredProjects = searchTerm ? filterByName() : projects

  return (
    <RootStyle>
      {searchTerm && (
        <StyledBox >
          <Box>
            <Typography data-test-id="result">
              {`Showing Projects for :  ${searchTerm} `}
            </Typography>
          </Box>
          <Box >
            <Button name="reset" onClick={() => router.replace("/")}>
              Reset Result
            </Button>
          </Box>
        </StyledBox>
      )}
      <Box>
        {renderDetails(filteredProjects)}
      </Box>
    </RootStyle>
  );
};

export default Projects;