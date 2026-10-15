'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from '../../../components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Project } from '@prisma/client';
import { ProjectInput, projectSchema } from '@/features/project/project.schema';
import { toast } from 'sonner';
import { Textarea } from '../../../components/ui/textarea';
import {
  createProjectAction,
  updateProjectAction,
} from '@/features/project/action';
import { Checkbox } from '../../../components/ui/checkbox';
import {
  Field,
  FieldLabel,
  FieldError,
  FieldSet,
  FieldGroup,
} from '../../../components/ui/field';
interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}
import { Input } from '../../../components/ui/input';

export default function ProjectForm({
  open,
  onOpenChange,
  project,
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      imageUrl: project?.imageUrl || '',
      githubUrl: project?.githubUrl || '',
      demoUrl: project?.demoUrl || '',
      technologies: project?.technologies || '',
      featured: project?.featured || false,
    },
  });
  const onSubmit = async (data: ProjectInput) => {
    try {
      const res = project
        ? await updateProjectAction(project.id, data)
        : await createProjectAction(data);
      if (!res.success) {
        toast.error(res?.error || 'Something went wrong on the server!');
        return;
      }
      toast.success(project ? 'Successfully Updated' : 'Successfully Created');
      onOpenChange(false);
    } catch (error) {
      toast.error('Something went wrong, please try again!');
    }
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader className="text-center">
            {project ? `Edit project(${project.id})` : 'Create new project'}
          </SheetHeader>
          <FieldSet disabled={isSubmitting} className="px-4">
            <FieldGroup>
              <Field>
                <FieldLabel>Title</FieldLabel>
                <Input {...register('title')} />
                <FieldError>{errors.title?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel>Description</FieldLabel>
                <Textarea {...register('description')} />
                <FieldError>{errors.description?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel>Image_Url</FieldLabel>
                <Input {...register('imageUrl')} />
                <FieldError>{errors.imageUrl?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel>GitHub_Url</FieldLabel>
                <Input {...register('githubUrl')} />
                <FieldError>{errors.githubUrl?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel>Demo_Url</FieldLabel>
                <Input {...register('demoUrl')} />
                <FieldError>{errors.demoUrl?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel>Technology</FieldLabel>
                <Input {...register('technologies')} />
                <FieldError>{errors.technologies?.message}</FieldError>
              </Field>
              <Field>
                <div className="flex flex-row gap-2">
                  <FieldLabel>Featured</FieldLabel>
                  <Checkbox
                    id="featured"
                    checked={watch('featured')}
                    onCheckedChange={(checked) =>
                      setValue('featured', !!checked)
                    }
                  />
                </div>
                <FieldError>{errors.featured?.message}</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
          <SheetFooter className="pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving' : 'Save'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
