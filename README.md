# NUR Academy V12.1

NUR Academy ialah aplikasi web/PWA Islamic Learning + Utility dengan fokus Bahasa Melayu Malaysia.

## Ciri utama
- Waktu Solat menggunakan AlAdhan API
- GPS dan lokasi manual Malaysia
- Countdown waktu solat
- Notifikasi web dengan pilihan masa peringatan
- Bunyi peringatan ringan terbina dalam (Web Audio)
- Al-Quran 114 surah melalui Quran Cloud API
- Teks Arab daripada API dikekalkan tanpa diubah
- Terjemahan Bahasa Melayu
- Audio ayat dan playlist satu surah dengan Previous/Next
- Bookmark surah dan bookmark ayat
- Nota peribadi ayat
- Last Read
- NUR Daily
- Zikir 33/100 dengan simpanan setempat
- Akademi 6 topik + kemajuan pembelajaran
- Arah Kiblat melalui pengiraan bearing geografi
- Carian global
- First-time setup
- Hamburger side menu
- Privasi, Terma, Sumber & API, Bantuan/FAQ
- Dark/Light theme
- PWA + service worker
- Status Dalam talian / Luar talian

## Latar gambar
Latar foto masjid menggunakan foto daripada Unsplash dan dirujuk sebagai foto bebas digunakan di bawah Unsplash License. Rujukan foto yang digunakan:
- https://unsplash.com/photos/dome-building-under-the-light-of-the-moon-vApfWetW1HY
- https://unsplash.com/photos/white-dome-building-near-body-of-water-during-sunset-7_COgbItdkQ

Semak terma lesen Unsplash semasa penerbitan komersial atau perubahan projek.

## API
- AlAdhan: https://api.aladhan.com/v1
- Quran Cloud: https://api.alquran.cloud/v1
- OpenStreetMap Nominatim: https://nominatim.openstreetmap.org/

## Nota fungsi
Notifikasi static web bergantung pada sokongan browser dan keadaan halaman. Scheduled background notification apabila browser/app ditutup sepenuhnya memerlukan push/background/native mechanism.

Arah Kiblat menggunakan bearing geografi sebagai asas dan boleh menggunakan sensor orientasi peranti secara langsung apabila disokong browser/peranti.

API content memerlukan internet. Shell PWA boleh dibuka selepas cache tersedia, tetapi data langsung mungkin tidak tersedia offline.

## Deployment
Upload folder ini ke static hosting HTTPS seperti Netlify, GitHub Pages atau Cloudflare Pages.

Jangan masukkan API key rahsia kerana konfigurasi aplikasi menggunakan API awam.

## V12.3 Brand Update
- Added official NUR Academy logo asset and applied it to favicon, app header, startup loader, notification icon, and PWA icons.
- Preserved the existing application structure and functionality.
- Added a new service-worker cache version so the branded assets are picked up after deployment.

## NUR Academy 13.0.0 — Full Feature Upgrade

This release preserves the existing app structure and adds functional modules rather than decorative placeholders:

- My NUR daily dashboard and progress
- Prayer completion tracking with 7-day history
- Quran reading plan with daily target and completion history
- Quran translation/font controls and existing bookmarks/notes/audio
- Dhikr daily targets and completion state
- Academy lesson completion + interactive quizzes
- Ramadan mode with Hijri status, Imsak/Maghrib display when prayer data is available, checklist and notes
- Real device orientation compass support with permission handling and calibration guidance
- Gregorian + Islamic/Hijri date display
- Backup/restore as local JSON
- Accessibility: app text scaling and high contrast
- Better offline/cache versioning and stale-prayer refresh handling
- Faster startup: loader no longer depends on network calls
- Network requests have timeouts and graceful cached fallbacks

Location and device-sensor APIs still depend on browser permissions and secure HTTPS contexts. Live prayer/Quran data depends on the configured third-party APIs.
