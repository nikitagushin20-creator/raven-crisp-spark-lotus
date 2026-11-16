import { createFileRoute } from "@tanstack/react-router";
import { presence } from "@/data/site";
import { LeadForm, PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/dealers")({ component: DealersPage });

function DealersPage() {
  return (
    <SiteFrame title="Дилерам">
      <PageIntro
        kicker="Дилерам"
        title="Склад, цены и обучение для тех, кто продаёт технику"
        text="Дилеру отдаём прайс с защитой региона, остатки раз в день и инженера, который подключается на сложных подборах."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          {[
            ["Складской запас", "Компрессоры до 37 кВт, плиты и расходники держим в Москве и Новосибирске. Дилер забирает под клиента, не замораживая весь модельный ряд."],
            ["Регион", "Не сажаем двух дилеров на один город без разговора. Заявку рассматриваем, если уже есть сервис или договор с местной мастерской."],
            ["Обучение", "Раз в квартал — разбор новых моделей и типовых отказов. Можно приехать на пост или собрать смену у себя."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-fg/10 bg-surface p-4">
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
          <p className="text-sm text-muted">Сейчас техника представлена в городах: {presence.join(", ")}.</p>
        </div>
        <div className="rounded-lg border border-fg/10 bg-surface p-5">
          <h2 className="text-xl font-extrabold">Заявка дилера</h2>
          <div className="mt-4">
            <LeadForm
              kind="dealer"
              submitLabel="Отправить заявку"
              fields={[
                { name: "company", label: "Компания", required: true },
                { name: "city", label: "Город", required: true },
                { name: "name", label: "Контакт", required: true },
                { name: "phone", label: "Телефон", required: true, type: "tel" },
                { name: "text", label: "Чем уже занимаетесь", required: true, textarea: true },
              ]}
            />
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}
