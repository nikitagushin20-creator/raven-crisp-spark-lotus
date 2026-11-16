import { createFileRoute } from "@tanstack/react-router";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/service/engineer")({ component: Page });

function Page() {
  return (
    <SiteFrame title="Вопрос инженеру">
      <PageIntro
        kicker="Сервис"
        title="Задать вопрос сервисному инженеру"
        text="Напишите модель и что уже пробовали. Ответ — в рабочее время, обычно в тот же день."
      />
      <div className="mx-auto max-w-xl px-4 py-8">
        <LeadForm
          kind="engineer"
          submitLabel="Отправить вопрос"
          fields={[
            { name: "name", label: "Имя", required: true },
            { name: "phone", label: "Телефон", required: true, type: "tel" },
            { name: "model", label: "Модель, если есть" },
            { name: "text", label: "Вопрос", required: true, textarea: true },
          ]}
        />
      </div>
    </SiteFrame>
  );
}
