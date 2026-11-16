create table if not exists page_views (
  id         bigserial primary key,
  path       text not null,
  title      text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists page_views_created_idx on page_views (created_at);
create index if not exists page_views_path_idx on page_views (path);

create table if not exists site_events (
  id         bigserial primary key,
  kind       text not null,
  path       text not null default '',
  meta       text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists site_events_created_idx on site_events (created_at);
create index if not exists site_events_kind_idx on site_events (kind);

create table if not exists admin_sessions (
  token      text primary key,
  expires_at timestamptz not null
);
