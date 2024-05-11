# 🔌 Browser Extensions

> ⚠ Note: this is a work-in-progress.

This monorepo[^1] contains the source code for my browser extensions. Its aim is to make maintenance easier.

<img src="assets/banners/brave-header-2.png">
<img src="assets/banners/chatgpt-banner-1.png">
<img src="assets/banners/discord-banner-2.png">
<img src="assets/banners/fastmail-sidebar-1.png">
<img src="assets/banners/gemini-2.png">
<img src="assets/banners/hn-2.png">
<img src="assets/banners/llamalife-2.png">
<img src="assets/banners/metaai-2.png">
<img src="assets/banners/newtab-bookmarks-1.png">
<img src="assets/banners/notekeeper-2.png">
<img src="assets/banners/sorry-mn-only-2.png">
<img src="assets/banners/telegram-sidebar-1.png">
<img src="assets/banners/ticktick-pinned-2.png">
<img src="assets/banners/ticktick-sidebar-1.png">
<img src="assets/banners/whatsapp-pinned-1.png">
<img src="assets/banners/whatsapp-sidebar-2.png">
<!-- <img src="text-revealer/assets/logo-cropped.png"  width="250" height="100" /> -->

## ☑ Requirements

Two repository secrets are required to sign extensions prior releasing a new version with [web-ext](https://github.com/mozilla/web-ext).

- JWT Issuer: `FIREFOX_JWT_ISSUER`
- JWT Secret: `FIREFOX_JWT_SECRET`

Visit the [Manage API Keys](https://addons.mozilla.org/en-US/developers/addon/api/key/) page to obtain yours.

## © License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: In version-control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software-development strategy in which the code for a number of projects is stored in the same repository.
