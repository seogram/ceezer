import { ReactNode } from 'react';
import ProjectCardContext from '@/app/context/ProjectCardContext';
import { Project } from '@/app/type';
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useResponsive } from '@/app/hooks';
import {
    ProjectId, ProjectImage, ProjectTitle, ProjectDelivery, ProjectPrice,
    ProjectCountry, ProjectDescription, ProjectSdgs, ProjectInfo, ProjectSupplier,
    ProjectWeight, ProjectVolume,ProjectAction
} from "."

const RootStyle = styled(Box)(({ theme }) => ({
    padding: "1.5rem",
    overflow: "auto",
    borderBottom: `1px solid ${theme.palette.grey[200]}`
}));

const WrapperStyle = styled(Box)(() => ({
    marginBottom: "1rem",
}));
const RightBoxStyle = styled(Box)(() => ({
    display: "flex",
}));

type Props = {
    project: Project
    image: ReactNode;
    info: ReactNode;
    action: ReactNode;
};

function ProjectCard({ info, image, project,action }: Props) {

    const isDesktop = useResponsive("up", "md");

    return (
        <ProjectCardContext.Provider value={{ project }}>
            <RootStyle>
                <WrapperStyle key={project.id}>
                    <Stack direction={isDesktop ? "row" : "column"} justifyContent="space-between" alignItems="center" rowGap={2}>
                        {info}
                        <RightBoxStyle alignItems="center">
                            {image}
                        </RightBoxStyle>
                    </Stack>
                    {action}
                </WrapperStyle>
            </RootStyle>
        </ProjectCardContext.Provider>
    );
}
ProjectCard.Info = ProjectInfo;
ProjectCard.Image = ProjectImage;
ProjectCard.Title = ProjectTitle;
ProjectCard.Delivery = ProjectDelivery;
ProjectCard.Price = ProjectPrice;
ProjectCard.Id = ProjectId;
ProjectCard.Country = ProjectCountry;
ProjectCard.Description = ProjectDescription;
ProjectCard.Sdgs = ProjectSdgs;
ProjectCard.Supplier = ProjectSupplier;
ProjectCard.Weight = ProjectWeight;
ProjectCard.Volume = ProjectVolume;
ProjectCard.Action = ProjectAction;

export default ProjectCard;
