# minchanjazz.com

Website of jazz drummer Minchan Kim (김민찬). Static site, no build step: Netlify serves these files as they are. Every commit to `main` goes live in about a minute.

## Files

| File | What it is | Edit it when… |
|---|---|---|
| `content.js` | **All the content that changes often**, in English and Korean: shows, past stages, videos, press, photos, partners, works, email, cal.com link | adding a show, a video, a photo, a partner, changing the email or booking link |
| `index.html` | Home page (hero, about, shows, watch, lessons, works, "are you", contact) | changing wording on the home page |
| `about.html` | "My story", the long bio | changing the long bio |
| `press.html` | Press & performances: video archive, press, photos, short bio | changing the short bio |
| `partners.html` | Gear & partners | changing the "how I choose" text |
| `site.css` | Design (colours, fonts, layout) | only for design changes |
| `site.js` | Behaviour: language switch, rendering of content.js, forms, floating contact button | rarely |
| `img/` | Photos | adding photos (also list them in `content.js` → `photos`) |

## Rules for anyone (or any AI) editing this site

1. **Both languages, always.** Every text has an English and a Korean version. In `content.js` each field looks like `{ en: "...", ko: "..." }`. In the HTML pages, English is in the page body and Korean is in the `window.KO = { ... }` block at the bottom of the same page, keyed by `data-i` names. If you change one, change the other.
2. **First person.** The site speaks as Minchan: "I play…", "저는…". Never "Minchan plays…".
3. **Shows:** add to `content.js` → `shows`. Copy an existing object. `day` is the big number ("16–17" or "TBA"), `when` the small label, `link` the ticket URL (or `#notify`), `chips` short tags. Put the first upcoming show first; it gets the "Next show" chip (`hot: true`). Move past shows to `past`. Also update the "Next up" fact on the home page (`f4.v` in `index.html`, both languages).
4. **Videos:** `content.js` → `videos`. `featured: true` on exactly three; those show on the home page, all show on the press page. `id` is the YouTube video id (the part after `v=` or after `youtu.be/`); the link and thumbnail come from it automatically. `grad` picks the gradient shown behind the thumbnail (g1–g5).
5. **Partners:** `content.js` → `partners`. `status` is `endorsed`, `using` or `recommend`. `link` and `code` are optional; buttons appear automatically when they are filled.
6. **Photos:** put the file in `img/` (JPEG, longest side ≤ 1600px), then add it to `content.js` → `photos` with `credit` when the photographer is known.
7. **Email and booking link:** `content.js` → `email`, `cal`. Nothing else needs changing.
8. **Keep the design.** Do not touch `site.css` unless asked to change the design. Do not remove the language switch, the floating contact button, or the count-in / ride pattern animation.
9. **Check both languages after editing:** open the site, click EN and 한국어, look at the section you changed.
10. **If something breaks:** Netlify keeps every deploy. Open the Netlify dashboard → Deploys → pick the previous one → "Publish deploy".

## 한국어 요약

- 자주 바뀌는 내용(공연, 영상, 사진, 파트너, 이메일, 예약 링크)은 전부 `content.js`에 있습니다. 영어·한국어가 한 쌍으로 들어 있으니 둘 다 고칩니다.
- 사이트는 1인칭(저는…)으로 말합니다.
- 공연 추가: `content.js`의 `shows`에 항목 하나를 복사해서 채웁니다. 지난 공연은 `past`로 옮깁니다. 홈 화면 "다음 공연" 칸(`index.html`의 `f4.v`)도 같이 고칩니다.
- 디자인(`site.css`)은 요청이 없으면 건드리지 않습니다.
- 고친 뒤에는 사이트를 열어 EN과 한국어 둘 다 확인합니다.
- 문제가 생기면 Netlify → Deploys에서 이전 배포를 "Publish deploy"로 되돌립니다.
