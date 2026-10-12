// Yalnızca toplu sayılar; e-posta veya tekil kayıt dönmez.
export async function onRequestGet({ env }) {
  const q = (sql) => env.DB.prepare(sql).all().then((r) => r.results);
  const [total] = await q('SELECT COUNT(*) AS n FROM waitlist');
  const body = {
    total: total.n,
    byCity: await q('SELECT city AS k, COUNT(*) AS n FROM waitlist GROUP BY city ORDER BY n DESC'),
    byRole: await q('SELECT role AS k, COUNT(*) AS n FROM waitlist GROUP BY role ORDER BY n DESC'),
    byUniversity: await q("SELECT university AS k, COUNT(*) AS n FROM waitlist WHERE university IS NOT NULL GROUP BY university ORDER BY n DESC LIMIT 12"),
  };
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}
