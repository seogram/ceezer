import { useProjectCardContext } from '@/app/context/ProjectCardContext';
import Image from "next/image";

function ProjectImage() {
  const { project } = useProjectCardContext();
  const url = project.image;

  return (
    <Image
      src={url}
      alt={project.name}
      width={250}
      height={250}
      style={{ borderRadius: 4 }}
    />
  );
}

export default ProjectImage;
