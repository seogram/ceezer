
import { Project } from "../../type";
import ProjectCard from '../ProjectCard/ProjectCard';

type Props = {
    projectData: Project;
};

const ProjectDetail = ({ projectData }: Props) => {
    const {
        id,
        name,
        country,
        image,
        price_per_ton,
        offered_volume_in_tons,
        distribution_weight,
        supplier_name,
        earliest_delivery,
        sdgs,
        description,
    } = projectData;

    return (
        <ProjectCard
            project={{
                id, 
                name, 
                country, 
                image, 
                price_per_ton,
                offered_volume_in_tons, 
                distribution_weight,
                supplier_name, 
                earliest_delivery, 
                sdgs, 
                description
            }}
            image={<ProjectCard.Image />}
            info={
                <ProjectCard.Info>
                    <ProjectCard.Id />
                    <ProjectCard.Title />
                    <ProjectCard.Country />
                    <ProjectCard.Volume />
                    <ProjectCard.Weight />
                    <ProjectCard.Supplier />
                    <ProjectCard.Description />
                    <ProjectCard.Sdgs />
                    <ProjectCard.Delivery />
                    <ProjectCard.Price />
                </ProjectCard.Info>
            }
            action={<ProjectCard.Action />}
        />
    );
};

export default ProjectDetail;