import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { company, offices } from "@/data/site";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/contacts")({ component: ContactsPage });

function ContactsPage() {
  const [city, setCity] = useState(offices[0]?.city ?? "Москва");
  const office = offices.find((item) => item.city === city) ?? offices[0];

  return (
    <SiteFrame title="Контакты">
      <PageIntro
        kicker="Контакты"
        title="Офисы, склады и сервис"
        text={`Один телефон на все площадки: ${company.phone}. Письма — ${company.email}.`}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {offices.map((item) => (
            <button
              key={item.city}
              type="button"
              onClick={() => setCity(item.city)}
              className={
                item.city === office?.city
                  ? "w-full rounded-lg border border-primary bg-primary p-4 text-left text-on-primary"
                  : "w-full rounded-lg border border-fg/10 bg-surface p-4 text-left"
              }
            >
              <p className="font-bold">
                {item.city} · {item.role}
              </p>
              <p className={item.city === office?.city ? "mt-1 text-sm text-on-primary/80" : "mt-1 text-sm text-muted"}>
                {item.address}
              </p>
              <p className={item.city === office?.city ? "text-sm text-on-primary/80" : "text-sm text-muted"}>
                {item.hours}
              </p>
              <p className="mt-1 text-sm font-semibold">{company.phone}</p>
            </button>
          ))}
        </div>
        <div className="lg:col-span-3">
          {office ? (
            <iframe
              title={`Карта: ${office.city}`}
              src={office.map}
              className="h-72 w-full rounded-lg border border-fg/10 bg-surface"
              loading="lazy"
            />
          ) : null}
          <div className="mt-4 rounded-lg border border-fg/10 bg-surface p-5">
            <h2 className="text-xl font-extrabold">Написать в офис</h2>
            <div className="mt-4">
              <LeadForm
                kind="message"
                meta={office?.city ?? ""}
                submitLabel="Отправить"
                fields={[
                  { name: "name", label: "Имя", required: true },
                  { name: "phone", label: "Телефон", required: true, type: "tel" },
                  { name: "text", label: "Сообщение", required: true, textarea: true },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}
