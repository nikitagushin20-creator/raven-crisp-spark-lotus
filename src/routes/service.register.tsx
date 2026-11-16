import { createFileRoute } from "@tanstack/react-router";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/service/register")({ component: Page });

function Page() {
  return (
    <SiteFrame title="Регистрация оборудования">
      <PageIntro
        kicker="Сервис"
        title="Регистрация оборудования"
        text="Регистрация фиксирует дату ввода. Без неё гарантия считается от отгрузки со склада."
      />
      <div className="mx-auto max-w-xl px-4 py-8">
        <LeadForm
          kind="register"
          submitLabel="Зарегистрировать"
          fields={[
            { name: "company", label: "Организация", required: true },
            { name: "name", label: "Контакт", required: true },
            { name: "phone", label: "Телефон", required: true, type: "tel" },
            { name: "model", label: "Модель", required: true },
            { name: "serial", label: "Заводской номер", required: true },
            { name: "date", label: "Дата пуска", type: "date" },
          ]}
        />
      </div>
    </SiteFrame>
  );
}
