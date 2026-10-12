# StudioHub — Upload AI Assisted (Mockup)

Mockup interaktif (HTML/CSS/JS statis, tanpa build step) untuk fitur baru **Upload AI Assisted** di CMS StudioHub.

## Cara menjalankan
Buka `index.html` langsung di browser, atau jalankan server statis:

```
npx serve .
# atau
python3 -m http.server 8080
```

## Struktur
```
index.html          # markup halaman (sidebar, form, metadata)
assets/css/style.css
assets/js/app.js    # simulasi alur: pilih file → URL → Auto Compose → field terisi
```

## Skenario demo (tombol "Contoh URL")
| Sumber | Yang disimulasikan |
|---|---|
| Artikel kompas.com | scrape judul/isi/byline, kredit dari byline, thumbnail dari frame video |
| Reel Instagram | scrape caption + cover, hashtag → tags, kredit dari mention, thumbnail dari cover reel |
| Tanpa URL | hanya transkrip audio + credit title video |

Field yang diisi AI ditandai ungu + asal datanya; setelah diedit berubah hijau "diubah".
Field wajib: File Video, Title, Description. Data nama/artikel di mockup ini fiktif.
