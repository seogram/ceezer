import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useData } from "../../hooks";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
// import { useRouter } from "next/navigation";
import { Projects } from "../../type";

const RootStyle = styled(Stack)(() => ({
  gap: "20px",
}));

type Props = {
  searchTerm?: string | null;
};

type useProjectDataReturn = {
  data: Projects;
  isFetching: boolean;
  isError: boolean;
};

const renderDetails = (projects: Projects) => 
projects?.map(project => <ProjectDetail projectData={project} key={project.id} />)


const Projects = ({ searchTerm }: Props) => {
  // const router = useRouter();

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

  return (
    <RootStyle>
      {/* {searchTerm && (
        <Box sx={{ display: "flex", }}>
          <Box>
            <Typography data-test-id="result">
              {`Showing bicycles for  ${searchTerm} :`}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Button name="reset" onClick={() => router.replace("/")}>
              Reset Result
            </Button>
          </Box>
        </Box>
      )} */}
      <Box>
        {renderDetails(projects)}
      </Box>
    </RootStyle>
  );
};

export default Projects;