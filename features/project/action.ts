'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { projectSchema, ProjectInput } from '@/features/project/project.schema';


export async function createProjectAction(data: ProjectInput) {
  const validatedFields = projectSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields' };
  }
  try {
    await prisma.project.create({
      data: validatedFields.data,
    });
    revalidatePath('/admin/projects');
    return { success: true, message:'Successfully created project' };
  } catch (error) {
    return { success: false, error: 'Failed to create project' };
  }
}
export async function updateProjectAction(id: string, data: ProjectInput) {
  if(!id){
    return {success:false,error:'project id not found'}
  }
  const validatedFields = projectSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields' };
  }
  try {
    await prisma.project.update({
      where: { id },
      data: validatedFields.data,
    });

    revalidatePath('/admin/projects');
    return { success: true, message:'Successfully updated project' };
  } catch (error) {
    return { success: false, error: 'Failed to update project' };
  }
}
export async function deleteProjectAction(id:string) {
    if(!id){
    return {success:false,error:'project id not found'}
  }
  try {
    await prisma.project.delete({where:{id}})
    revalidatePath('/admin/projects')
    return {success:true,message:'Successfully deleted project'}
  } catch (error) {
    return {success:false,error:'Failed to delete project'}
  }
}