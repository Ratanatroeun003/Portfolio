'use client';
import React, { useState } from 'react';
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../../../components/ui/table';

import ProjectForm from '@/features/project/components/Project-form';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';
import { Project } from '@prisma/client';
import { Pencil, Plus } from 'lucide-react';
import { deleteProjectAction } from '@/features/project/action';
import { DeleteButton } from '../../../components/ui/AlertDialog';

interface ProjectTableProps {
  initialProjects: Project[];
}

const ProjectTable = ({ initialProjects }: ProjectTableProps) => {
  const [open, setOpen] = useState(false);
  const [selectedProject, SetSelectedProject] = useState<null | Project>(null);

  const handleCreate = () => {
    SetSelectedProject(null);
    setOpen(true);
  };
  const handleEdit = (p: Project) => {
    SetSelectedProject(p);
    setOpen(true);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-end">
          <Button
            className="bg-primary hover:cursor-pointer"
            onClick={handleCreate}
          >
            Create <Plus />
          </Button>
        </div>
        {open && (
          <ProjectForm
            open={open}
            onOpenChange={setOpen}
            project={selectedProject}
          />
        )}

        <Table>
          <TableCaption>A list of Projects</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Thumbnail</TableHead>
              <TableHead className="font-semibold">Title</TableHead>
              <TableHead className="font-semibold">Technology</TableHead>
              <TableHead className="font-semibold">Featured</TableHead>
              <TableHead className="font-semibold">Created At</TableHead>
              <TableHead className="font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialProjects.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <div className="w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src={
                        p.imageUrl ??
                        'https://res.cloudinary.com/deiswm9jn/image/upload/v1763634773/samples/paper.png'
                      }
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 64px"
                      alt="thumbnail"
                      className="object-cover border border-border rounded-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.technologies}</TableCell>
                <TableCell>{p.featured ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  {new Date(p.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button
                      onClick={() => handleEdit(p)}
                      variant="outline"
                      size="icon"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <DeleteButton id={p.id} onDelete={deleteProjectAction} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectTable;
