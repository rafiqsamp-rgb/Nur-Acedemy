# NUR Academy — Export ke APK Android

## Pilihan paling mudah: Capacitor + Android Studio

Project ini sudah disiapkan sebagai wrapper Android untuk NUR Academy. Semua fail website berada di root project.

### 1. Pasang software di PC

Pasang:
- Node.js LTS
- Android Studio
- Android SDK + Android SDK Platform Tools
- JDK 17 (Android Studio biasanya menyediakan/menyarankan JDK yang sesuai)

### 2. Buka folder project

Buka Terminal / PowerShell di folder `NUR-Academy-App`.

Jalankan:

```bash
npm install
npx cap add android
npx cap sync android
```

> Jika `android/` sudah wujud, jangan jalankan `npx cap add android` lagi. Gunakan `npx cap sync android`.

### 3. Buka Android Studio

```bash
npx cap open android
```

Tunggu Gradle selesai sync.

Kemudian pilih emulator atau telefon Android yang sudah diaktifkan USB debugging.

Tekan **Run ▶** untuk menguji NUR Academy sebagai app.

### 4. Export APK debug

Dari Terminal:

```bash
cd android
./gradlew assembleDebug
```

Windows PowerShell:

```powershell
cd android
.\gradlew.bat assembleDebug
```

APK biasanya berada di:

`android/app/build/outputs/apk/debug/app-debug.apk`

### 5. APK release untuk dibagikan

Untuk release yang benar-benar siap dibagikan, gunakan Android Studio:

**Build → Generate Signed Bundle / APK → APK**

Buat atau pilih keystore sendiri dan simpan backup keystore dengan selamat.

Jangan upload keystore/password ke GitHub atau kongsi kepada orang lain.

### 6. Set icon app

Logo NUR Academy tersedia di:

- `assets/nur-academy-logo.png`
- `assets/icon-192.png`
- `assets/icon-512.png`

Untuk Play Store/app launcher yang lebih kemas, gunakan Android Studio **Image Asset** untuk membuat launcher icons daripada logo tersebut.

### 7. Location & Compass

NUR Academy masih menggunakan permission Android/browser untuk Location dan orientation sensor. APK tidak menjadikan GPS/compass automatik tanpa permission.

Saat pertama kali menggunakan fungsi tersebut, Android akan meminta permission jika code meminta permission tersebut.

Pastikan pengguna memberikan permission Location ketika diminta.

### 8. Selepas update website

Setiap kali `index.html`, `app.js`, `style.css`, atau assets berubah:

```bash
npx cap sync android
```

Kemudian rebuild APK.

### 9. Nota penting

- Jangan hapus folder `assets/`.
- Jangan mengubah `appId` selepas app sudah diterbitkan tanpa alasan yang jelas.
- Untuk Google Play, gunakan **AAB** (Android App Bundle), bukan APK biasa.
- Untuk install manual di telefon sendiri, APK debug/release boleh digunakan.
