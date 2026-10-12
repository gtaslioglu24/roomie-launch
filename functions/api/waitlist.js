// Bekleme listesi: POST kayıt ekler, GET yalnızca toplu sayıyı döner.
const CITIES = ['İstanbul', 'Ankara', 'İzmir'];
const ROLES = ['host', 'seeker', 'co'];
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

export async function onRequestGet({ env }) {
  const row = await env.DB.prepare('SELECT COUNT(*) AS total FROM waitlist').first();
  return new Response(JSON.stringify({ total: row.total }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'no-store' },
  });
}

export async function onRequestPost({ request, env }) {
  let d;
  try { d = await request.json(); } catch { return json({ error: 'Geçersiz istek.' }, 400); }
  if (d.website) return json({ ok: true }); // bot tuzağı
  const email = String(d.email || '').trim().toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 200) return json({ error: 'Geçerli bir e-posta yaz.' }, 400);
  if (!CITIES.includes(d.city)) return json({ error: 'Şehir seç.' }, 400);
  if (!ROLES.includes(d.role)) return json({ error: 'Hangisi olduğunu seç.' }, 400);
  if (d.consent !== true) return json({ error: 'Onay kutusunu işaretle.' }, 400);
  const district = String(d.district || '').trim().slice(0, 60) || null;
  const university = String(d.university || '').trim().slice(0, 80) || null;
  await env.DB.prepare(
    `INSERT INTO waitlist (email, city, district, university, role, consent_at)
     VALUES (?1, ?2, ?3, ?4, ?5, datetime('now'))
     ON CONFLICT(email) DO UPDATE SET city=?2, district=?3, university=?4, role=?5`
  ).bind(email, d.city, district, university, d.role).run();
  return json({ ok: true });
}
