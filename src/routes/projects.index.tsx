import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/site";
import { PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

function ProjectsPage() {
  return (
    <SiteFrame title="Проекты">
      <PageIntro
        kicker="Проекты"
        title="Что уже стоит и работает"
        text="Короткие истории поставок: задача, что поставили и чем закончилось. Без обещаний «под ключ за три дня» там, где этого не было."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="card-hover overflow-hidden rounded-lg border border-fg/10 bg-surface"
          >
            <img src={project.image} alt="" className="aspect-[3/2] w-full object-cover" />
            <div className="p-4">
              <p className="text-xs font-semibold text-accent">
                {project.city} · {project.year}
              </p>
              <h2 className="mt-1 text-lg font-extrabold">{project.title}</h2>
              <p className="mt-2 text-sm text-muted">{project.task}</p>
            </div>
          </Link>
        ))}
      </div>
    </SiteFrame>
  );
}
