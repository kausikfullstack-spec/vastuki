import { sectionSpacing, textLinkStyles } from "@/lib/styles";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ContactCta } from "@/components/sections/contact-cta";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return { title: project.title, description: project.detail };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return (
    <>
      <PageIntro
        eyebrow={project.type}
        title={project.title}
        description={project.detail}
      />
      <div className={`${sectionSpacing}`}>
        <Link href="/projects" className={`${textLinkStyles} mb-8`}>
          ← All projects
        </Link>
        <ProjectGallery images={project.images} title={project.title} />
      </div>
      <ContactCta />
    </>
  );
}
