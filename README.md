# Roomie: Launch Machine
**10X Your Brand Hackathon · Istanbul Ignited by Slush'D · Manus AI · 12 Oct 2026**

Roomie is an iOS roommate-matching app (25-question compatibility test, match score, no messages without a mutual like), currently in App Store review. In 5.5 hours I turned it from "product ready, no launch" into a launch-ready brand with Manus, Apify and fal.ai.

**Live:** https://app.roomieapp.site (TR/EN, auto by device language) · **Instagram:** [@roomieapp.site](https://instagram.com/roomieapp.site)

## Before → After
| Before (09:30) | After (15:00) |
|---|---|
| Plain support page | Live bilingual landing page + waitlist + admin dashboard |
| 0 social content | Brand kit, 6-post "Red Flags" series, first Reel posted |
| No positioning | Data-backed positioning & 3 personas: *"Your budgets match, but do your lifestyles?"* |
| No launch plan | Cold-start plan (campus-by-campus) + weekly automated content engine |

## How the tools worked together
1. **Apify**: TikTok Scraper on 5 roommate/rent hashtags (200 videos) → listings lack trust; "bad roommate" stories drive engagement. See `docs/research/`.
2. **Manus (one project, shared context)**: Wide Research market report (51 sources: rents, students, dorms, competitors, scams) → personas, positioning, cold-start campus plan → brand kit & tone of voice → landing page + waitlist DB + admin dashboard → scheduled task that writes the weekly "Red Flags" content every Monday 10:00.
3. **fal.ai**: FLUX.2 [pro] campaign photos, Veo 3.1 and Kling 2.5 vertical videos.
4. **Shipping**: Manus's default `*.manus.space` domain wasn't reachable from Türkiye, so the page was rebuilt as a static site on our own domain via Cloudflare Pages + D1.

## This repo
- `public/`: landing page (`index.html`, `i18n.js` TR/EN, `admin.html` aggregate-only stats)
- `functions/api/`: Cloudflare Pages Functions: `waitlist.js` (validated sign-up, dedupe by email, honeypot), `stats.js` (aggregate counts only)
- `schema.sql`: D1 table
- `docs/`: research brief, Apify findings, brand board, first post, pitch script

## Run / deploy
```bash
npx wrangler d1 execute roomie-waitlist --remote --file=schema.sql
npx wrangler pages deploy --branch main
```

## Notes
- No personal data is published; the admin view shows aggregate counts only. Privacy policy: https://roomieapp.site/privacy
- Match score is a product heuristic, not a guarantee. Roomie does not do identity verification; safety = email verification, automatic photo scanning, mutual-like chat, report/block, in-chat safety note.
- AI-generated campaign visuals are labeled as such.
