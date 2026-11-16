import { createFileRoute } from "@tanstack/react-router";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/service/repair")({ component: Page });

function Page() {
  return (
    <SiteFrame title="Негарантийный ремонт">
      <PageIntro
        kicker="Сервис"
        title="Заявка на негарантийный ремонт"
        text="Смету пришлём до начала работ. Срок зависит от того, есть ли узел на складе."
      />
      <div className="mx-auto max-w-xl px-4 py-8">
        <LeadForm
          kind="repair"
          submitLabel="Запросить смету"
          fields={[
            { name: "name", label: "Контактное лицо", required: true },
            { name: "phone", label: "Телефон", required: true, type: "tel" },
            { name: "model", label: "Модель", required: true },
            { name: "text", label: "Что нужно сделать", required: true, textarea: true },
          ]}
        />
      </div>
    </SiteFrame>
  );
}
