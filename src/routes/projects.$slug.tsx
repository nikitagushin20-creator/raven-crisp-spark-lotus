import { createFileRoute, Link } from "@tanstack/react-router";
import { projectBySlug } from "@/data/site";
import { SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/projects/$slug")({ component: ProjectPage });

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = projectBySlug(slug);
  if (!project) {
    return (
      <SiteFrame title="Проект">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-extrabold">Проект не найден</h1>
          <Link to="/projects" className="mt-4 inline-block font-semibold text-primary">
            Все проекты
          </Link>
        </div>
      </SiteFrame>
    );
  }
  return (
    <SiteFrame title={project.title}>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-accent">
          {project.city} · {project.year}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">{project.title}</h1>
        <img src={project.image} alt="" className="mt-6 aspect-[3/2] w-full rounded-lg object-cover" />
        <div className="mt-6 space-y-4">
          <Section title="Задача" text={project.task} />
          <Section title="Что сделали" text={project.solution} />
          <Section title="Чем кончилось" text={project.result} />
        </div>
        <Link to="/projects" className="mt-8 inline-block text-sm font-semibold text-primary">
          Остальные проекты
        </Link>
      </article>
    </SiteFrame>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="font-bold">{title}</h2>
      <p className="mt-1 text-muted">{text}</p>
    </section>
  );
}
