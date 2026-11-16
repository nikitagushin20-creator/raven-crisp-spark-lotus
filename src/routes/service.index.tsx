import { createFileRoute, Link } from "@tanstack/react-router";
import { offices } from "@/data/site";
import { PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/service/")({ component: ServicePage });

const links = [
  {
    to: "/service/warranty" as const,
    title: "Гарантийный ремонт",
    text: "12 месяцев с отгрузки. Запчасти по гарантии везём за свой счёт.",
  },
  {
    to: "/service/repair" as const,
    title: "Негарантийный ремонт",
    text: "Смета до разборки. Срок и стоимость согласуем письменно.",
  },
  {
    to: "/service/register" as const,
    title: "Регистрация оборудования",
    text: "Чтобы гарантия считалась с пуска, а не с даты на складе.",
  },
  {
    to: "/service/engineer" as const,
    title: "Вопрос инженеру",
    text: "Подбор, ошибка контроллера, расходник — ответим по модели.",
  },
];

function ServicePage() {
  return (
    <SiteFrame title="Сервис">
      <PageIntro
        kicker="Сервис"
        title="Ремонт и сопровождение, пока техника в работе"
        text="Предпродажная проверка, пуск, гарантия и платный ремонт на одних и тех же постах. Не отправляем «на завод» то, что можем закрыть запчастью со склада."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2">
        <img
          src="/media/engineer.jpg"
          alt="Инженер осматривает компрессор"
          className="aspect-[3/2] w-full rounded-lg object-cover"
        />
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Гарантия — 12 месяцев с даты отгрузки, если оборудование зарегистрировано и не вскрывалось на стороне.
            Откажем, если узел горел из-за сети, масло меняли «чем было» или ремонт уже начинали сами.
          </p>
          <p>
            Негарантийный ремонт идёт по смете. Невостребованную технику храним 30 дней, дальше согласуем утилизацию
            или возврат за счёт заказчика.
          </p>
          <p>Обучение оператора — короткое, на площадке: что смотреть каждую смену и чего не крутить.</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-4 sm:grid-cols-2">
        {links.map((item) => (
          <Link key={item.to} to={item.to} className="card-hover rounded-lg border border-fg/10 bg-surface p-5">
            <h2 className="text-lg font-extrabold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </Link>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-extrabold">Где принимаем</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {offices.map((office) => (
            <li key={office.city} className="rounded-md border border-fg/10 bg-surface p-4">
              <p className="font-semibold">
                {office.city} — {office.role}
              </p>
              <p className="text-sm text-muted">{office.address}</p>
              <p className="text-sm text-muted">{office.hours}</p>
            </li>
          ))}
        </ul>
      </div>
    </SiteFrame>
  );
}
