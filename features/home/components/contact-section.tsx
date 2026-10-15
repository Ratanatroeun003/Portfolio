'use client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { SendTelegramMessage } from '@/features/contact/action';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from '@/components/ui/field';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ContactFormSchema,
  ContactType,
} from '@/features/contact/contact.schema';
const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const onSubmit = async (data: ContactType) => {
    try {
      const res = await SendTelegramMessage(data);
      if (!res.success) {
        toast.error(res.message);
      }
      toast.success('Message sent Successfully');
      reset();
    } catch (error) {
      toast.error('something went wrong please try again letter!');
    }
  };
  return (
    <section id="contact" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Get In Touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have a project in mind, a question, or just want to say hi? Feel
            free to drop a message.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="flex flex-col justify-between space-y-6 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">
                Contact Information
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
                I am always open to discussing new opportunities, full-stack
                applications, or collaboration ideas.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground">
                    Email Me
                  </p>
                  <a
                    href="mailto:troeunratana@gmail.com"
                    className="text-xs font-semibold hover:text-primary transition-colors sm:text-sm"
                  >
                    troeunratana@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground">
                    Call / Telegram
                  </p>
                  <a
                    href="tel:+855714407205"
                    className="text-xs font-semibold hover:text-primary transition-colors sm:text-sm"
                  >
                    +855 (0) 71 440 7205
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground">
                    Location
                  </p>
                  <p className="text-xs font-semibold sm:text-sm">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-xs text-muted-foreground">
              Typically responds within 24 hours.
            </div>
          </div>
          <Card className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur-md sm:p-8 lg:col-span-3 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FieldSet disabled={isSubmitting}>
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel>Your Name</FieldLabel>
                      <Input {...register('name')} placeholder="Your Name" />
                      <FieldError>{errors.name?.message}</FieldError>
                    </Field>
                    <Field>
                      <FieldLabel>Your Email</FieldLabel>
                      <Input
                        {...register('email')}
                        placeholder="abc@gmail.com"
                      />
                      <FieldError>{errors.email?.message}</FieldError>
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>Subject</FieldLabel>
                    <Input
                      {...register('subject')}
                      placeholder="Your Subject"
                    />
                    <FieldError>{errors.subject?.message}</FieldError>
                  </Field>
                  <Field>
                    <FieldLabel>Your Message</FieldLabel>
                    <Textarea {...register('message')} placeholder="message" />
                    <FieldError>{errors.message?.message}</FieldError>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
