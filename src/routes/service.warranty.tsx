import { createFileRoute } from "@tanstack/react-router";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";
import { lines } from "@/data/site";

export const Route = createFileRoute("/service/warranty")({ component: Page });

function Page() {
  return (
    <SiteFrame title="Гарантийный ремонт">
      <PageIntro
        kicker="Сервис"
        title="Заявка на гарантийный ремонт"
        text="Нужны модель, заводской номер и что именно случилось. Фото шильдика можно описать текстом — перезвоним и заберём файлы отдельно."
      />
      <div className="mx-auto max-w-xl px-4 py-8">
        <LeadForm
          kind="warranty"
          submitLabel="Отправить заявку"
          fields={[
            { name: "name", label: "Контактное лицо", required: true },
            { name: "phone", label: "Телефон", required: true, type: "tel" },
            { name: "city", label: "Город", required: true, options: ["Москва", "Новосибирск", "Екатеринбург", "Казань", "Краснодар", "Другой"] },
            { name: "line", label: "Линейка", required: true, options: lines.map((line) => line.name) },
            { name: "model", label: "Модель и заводской номер", required: true },
            { name: "text", label: "Неисправность", required: true, textarea: true },
          ]}
        />
      </div>
    </SiteFrame>
  );
}
