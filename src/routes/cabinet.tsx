import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { formatPrice, kindLabels } from "@/data/site";
import { PageIntro, SiteFrame } from "@/components/chrome";
import { readLocalLeads, readLocalOrders, type LocalLead, type LocalOrder } from "@/lib/cart";

export const Route = createFileRoute("/cabinet")({ component: CabinetPage });

function CabinetPage() {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [leads, setLeads] = useState<LocalLead[]>([]);

  useEffect(() => {
    setOrders(readLocalOrders());
    setLeads(readLocalLeads());
  }, []);

  return (
    <SiteFrame title="Личный кабинет">
      <PageIntro
        kicker="Кабинет"
        title="Заказы и заявки на этом устройстве"
        text="Кабинет хранит то, что вы отправили в этом браузере. Чтобы увидеть просмотры всего сайта, откройте админку."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-extrabold">Заказы</h2>
          {orders.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              Пока пусто.{" "}
              <Link to="/catalog" className="font-semibold text-primary">
                Перейти в каталог
              </Link>
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {orders.map((order) => (
                <li key={order.id} className="rounded-lg border border-fg/10 bg-surface p-4">
                  <p className="font-bold">
                    {order.id} · {formatPrice(order.total)}
                  </p>
                  <p className="text-sm text-muted">
                    {order.at} · {order.city}
                  </p>
                  <ul className="mt-2 text-sm">
                    {order.items.map((item) => (
                      <li key={item.slug}>
                        {item.title} × {item.qty}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="text-xl font-extrabold">Заявки</h2>
          {leads.length === 0 ? (
            <p className="mt-3 text-sm text-muted">Заявки с форм появятся здесь после отправки.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {leads.map((lead, index) => (
                <li key={`${lead.at}-${index}`} className="rounded-lg border border-fg/10 bg-surface p-4">
                  <p className="font-bold">{kindLabels[lead.kind] ?? lead.kind}</p>
                  <p className="text-sm text-muted">{lead.at}</p>
                  <dl className="mt-2 space-y-1 text-sm">
                    {Object.entries(lead.fields).map(([label, value]) =>
                      value ? (
                        <div key={label}>
                          <dt className="inline text-muted">{label}: </dt>
                          <dd className="inline">{value}</dd>
                        </div>
                      ) : null,
                    )}
                  </dl>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </SiteFrame>
  );
}
