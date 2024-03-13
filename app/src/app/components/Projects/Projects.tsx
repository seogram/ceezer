import React from 'react';
import { Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useData } from '@/app/hooks';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import ErrorComponent from '../Error/Error';
import Loading from '../Loading/Loading';
import { useRouter } from "next/navigation";
import type { Projects as ProjectsType } from '@/app/type';

const RootStyle = styled(Stack)({
  gap: '20px',
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

interface Props {
  searchTerm?: string;
}

interface UseProjectDataReturn {
  data: ProjectsType;
  isFetching: boolean;
  isError: boolean;
}

const renderDetails = (projects: ProjectsType) =>
  projects.map((project) => <ProjectDetail projectData={project} key={project.id} />);


const Projects = ({ searchTerm = '' }: Props) => {
  const router = useRouter();
  const { data: projects, isFetching: isProjectFetching, isError } = useData() as UseProjectDataReturn;

  if (isError) return <ErrorComponent />;
  if (isProjectFetching) return <Loading />;

  const filteredProjects = searchTerm
    ? projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : projects;

  return (
    <RootStyle>
      {searchTerm && (
        <StyledBox>
          <Typography data-testid="result">Showing Projects for: {searchTerm}</Typography>
          <Button name="reset" onClick={() => router.replace('/')}>
            Reset Result
          </Button>
        </StyledBox>
      )}
      <Box>{renderDetails(filteredProjects)}</Box>
    </RootStyle>
  );
};

export default Projects;