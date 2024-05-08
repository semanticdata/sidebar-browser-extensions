# Browser Extensions

> Note: This is a work-in-progress.

This is a monorepo[^1] of my browser extensions.

The aim of this monorepo is to make maintaining browser extensions easier.

## Table of Contents

- [Browser Extensions](#browser-extensions)
  - [Table of Contents](#table-of-contents)
  - [🦊 Brave Search](#-brave-search)
  - [🟩 ChatGPT in Sidebar](#-chatgpt-in-sidebar)
  - [🟦 Discord in Sidebar](#-discord-in-sidebar)
  - [🔵 Fastmail in Sidebar](#-fastmail-in-sidebar)
  - [🌟 Gemini in Sidebar](#-gemini-in-sidebar)
  - [🟧 Hacker News in Sidebar](#-hacker-news-in-sidebar)
  - [🦙 Llama Life in Sidebar](#-llama-life-in-sidebar)
  - [🟦 Meta AI in Sidebar](#-meta-ai-in-sidebar)
  - [🔖 New Tab Bookmarks](#-new-tab-bookmarks)
  - [📝 Notekeeper](#-notekeeper)
  - [🟪 Sorry, Minnesota Only](#-sorry-minnesota-only)
  - [🔷 Telegram in Sidebar](#-telegram-in-sidebar)
  - [🟫 TickTick in Sidebar](#-ticktick-in-sidebar)
  - [🟤 TickTick Pinned](#-ticktick-pinned)
  - [🟩 WhatsApp in Sidebar](#-whatsapp-in-sidebar)
  - [🟢 WhatsApp Pinned](#-whatsapp-pinned)
  - [Repository Secrets](#repository-secrets)
  - [© License](#-license)

<!-- ## Previous Repositories

- [Brave Search](https://github.com/semanticdata/firefox-brave-search)
- [ChatGPT in Sidebar](https://github.com/semanticdata/firefox-chatgpt-in-sidebar)
- [Discord in Sidebar](https://github.com/semanticdata/firefox-discord-in-sidebar)
- [Fastmail in Sidebar](https://github.com/semanticdata/firefox-fastmail-in-sidebar)
- [Gemini in Sidebar](https://github.com/semanticdata/firefox-gemini-in-sidebar)
- [Hacker News in Sidebar](https://github.com/semanticdata/firefox-hacker-news-in-sidebar)
- [Llama Life in Sidebar](https://github.com/semanticdata/firefox-llamalife-in-sidebar)
- [Meta AI in Sidebar](https://github.com/semanticdata/firefox-metaai-in-sidebar)
- [New Tab Bookmarks](https://github.com/semanticdata/new-tab-bookmarks)
- [Notekeeper](https://github.com/semanticdata/notekeeper)
- [Sorry, Minnesota Only](https://github.com/semanticdata/firefox-sorry-minnesota-only)
- [Telegram in Sidebar](https://github.com/semanticdata/firefox-telegram-in-sidebar)
- [TickTick in Sidebar](https://github.com/semanticdata/firefox-ticktick-in-sidebar)
- [TickTick Pinned](https://github.com/semanticdata/firefox-ticktick-pinned)
- [WhatsApp in Sidebar](https://github.com/semanticdata/firefox-whatsapp-in-sidebar)
- [WhatsApp Pinned](https://github.com/semanticdata/firefox-whatsapp-pinned) -->

| Logo | Extension | Links |
| --- | --- | --- |
| <img src="assets/brave-96x96.png" width="48" height="48"> | [Brave Search](/brave-search/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/chatgpt-96x96.png" width="48" height="48"> | [ChatGPT in Sidebar](/chatgpt-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/discord-96x96.png" width="48" height="48"> | [Discord in Sidebar](/discord-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/fastmail-96x96.png" width="48" height="48"> | [Fastmail in Sidebar](/fastmail-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/gemini-96x96.png" width="48" height="48"> | [Gemini in Sidebar](/gemini-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/hacker-news-96x96.png" width="48" height="48"> | [Hacker News in Sidebar](/hacker-news-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/llama-life-96x96.png" width="48" height="48"> | [Llama Life in Sidebar](/llamalife-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/meta-ai-96x96.png" width="48" height="48"> | [Meta AI in Sidebar](/metaai-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/new-tab-bookmarks-96x96.png" width="48" height="48"> | [New Tab Bookmarks](/new-tab-bookmarks/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/notekeeper-96x96.png" width="48" height="48"> | [Notekeeper](/notekeeper/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/sorry-minnesota-only-96x96.png" width="48" height="48"> | [Sorry, Minnesota Only](/sorry-minnesota-only/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/telegram-96x96.png" width="48" height="48"> | [Telegram in Sidebar](/telegram-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/ticktick-96x96.png" width="48" height="48"> | [TickTick in Sidebar](/telegram-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/ticktick-96x96.png" width="48" height="48"> | [TickTick Pinned](/ticktick-pinned/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/whatsapp-96x96.png" width="48" height="48"> | [WhatsApp in Sidebar](/whatsapp-in-sidebar/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/whatsapp-96x96.png" width="48" height="48"> | [WhatsApp Pinned](/whatsapp-pinned/) | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |

## 🦊 Brave Search

Adds Brave Search as a search engine option within Firefox. Also includes keyword @brave as a search shortcut.

Browse the [source code](brave-search/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/)

## 🟩 ChatGPT in Sidebar

Opens ChatGPT within the Firefox sidebar.

Browse the [source code](chatgpt-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/chatgpt-in-sidebar/)

## 🟦 Discord in Sidebar

Display Discord within the Firefox sidebar.

Browse the [source code](discord-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/discord-in-sidebar/)

## 🔵 Fastmail in Sidebar

Display Fastmail within the Firefox sidebar.

Browse the [source code](fastmail-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/fastmail-in-sidebar/)

## 🌟 Gemini in Sidebar

Display Gemini within the Firefox sidebar.

Browse the [source code](gemini-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/gemini-in-sidebar/)

## 🟧 Hacker News in Sidebar

Display Hacker News within the Firefox sidebar.

Browse the [source code](hacker-news-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/hacker-news-in-sidebar/)

## 🦙 Llama Life in Sidebar

Display Llama Life within the Firefox sidebar.

Browse the [source code](llamalife-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/llama-life-in-sidebar/)

## 🟦 Meta AI in Sidebar

Display Meta AI within the Firefox sidebar.

Browse the [source code](metaai-in-sidebar/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/meta-ai-in-sidebar/)

## 🔖 New Tab Bookmarks

A new tab replacement for your browser.

Browse the [source code](new-tab-bookmarks/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/new-tab-bookmarks/)

## 📝 Notekeeper

An extension that transforms the New Tab into a minimalist, auto-saving text editor.

Browse the [source code](notekeeper/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/new-tab-note/)

## 🟪 Sorry, Minnesota Only

Removes all states starting with "M" except Minnesota within most dropdown menus. This allows you to press "M" in your keyboard and go directly to it, instead of any other state options.

Browse the [source code](brave-search/).

[![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/sorry-minnesota-only/)

## 🔷 Telegram in Sidebar

Display Telegram within the Firefox sidebar.

Browse the [source code](telegram-in-sidebar/).

<!-- [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/telegram-in-sidebar/) -->

## 🟫 TickTick in Sidebar

Display TickTick within the Firefox sidebar.

Browse the [source code](ticktick-in-sidebar/).

<!-- [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/ticktick-in-sidebar/) -->

## 🟤 TickTick Pinned

Opens TickTick in a pinned tab.

Browse the [source code](ticktick-pinned/).

<!-- [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/ticktick-pinned/) -->

## 🟩 WhatsApp in Sidebar

Display WhatsApp within the Firefox sidebar.

Browse the [source code](ticktick-in-sidebar/).

<!-- [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/whatsapp-in-sidebar/) -->

## 🟢 WhatsApp Pinned

Opens WhatsApp in a pinned tab.

Browse the [source code](ticktick-pinned/).

<!-- [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/whatsapp-pinned/) -->

## Repository Secrets

Required for signing extensions prior releasing a new version. These can be found here: [Manage API Keys](https://addons.mozilla.org/en-US/developers/addon/api/key/).

- JWT Issuer: `FIREFOX_JWT_ISSUER`
- JWT Secret: `FIREFOX_JWT_SECRET`

## © License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: In version-control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software-development strategy in which the code for a number of projects is stored in the same repository.
