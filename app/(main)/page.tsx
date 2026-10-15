import HomeContent from '@/features/home/components/home-content';
import { prisma } from '@/lib/prisma';
const page = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <div>
      <HomeContent projects={projects} />
    </div>
  );
};

export default page;
