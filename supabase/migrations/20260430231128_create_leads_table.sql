create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  company text not null,
  fleet_size text not null,
  vessel_types text not null,
  message text,
  source text default 'website',
  status text default 'new',
  contacted boolean default false
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Allow anonymous inserts (for the contact form)
create policy "Allow anonymous inserts" on public.leads
  for insert to anon
  with check (true);

-- Allow authenticated reads (for your admin dashboard)
create policy "Allow authenticated reads" on public.leads
  for select to authenticated
  using (true);
