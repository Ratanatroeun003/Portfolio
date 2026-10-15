import ProjectTable from '@/features/project/components/project-table';
import { prisma } from '@/lib/prisma';
export default async function Page() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return <ProjectTable initialProjects={projects} />;
}
