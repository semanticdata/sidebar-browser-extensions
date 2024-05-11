# 🔌 Browser Extensions

> ⚠ Note: this is a work-in-progress.

This monorepo[^1] contains the source code for my browser extensions. Its aim is to make maintenance easier.

## 📦 Contents

|                                                                                                                         | Description                                                                                                    |                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: |
| <img src="assets/brave-96x96.png" width="48" height="48"> | [Brave Search](/brave-search/)                                 Adds Brave Search as a search engine option within Firefox. Also includes keyword @brave as a search shortcut. | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/chatgpt-96x96.png" width="48" height="48"> [ChatGPT in Sidebar](/chatgpt-in-sidebar/)                  | Opens ChatGPT within the Firefox sidebar.                                                                      | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/discord-96x96.png" width="48" height="48"> [Discord in Sidebar](/discord-in-sidebar/)                  | Display Discord within the Firefox sidebar.                                                                    | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/fastmail-96x96.png" width="48" height="48"> [Fastmail in Sidebar](/fastmail-in-sidebar/)               | Display Fastmail within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/gemini-96x96.png" width="48" height="48"> [Gemini in Sidebar](/gemini-in-sidebar/)                     | Display Gemini within the Firefox sidebar.                                                                     | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/hacker-news-96x96.png" width="48" height="48"> [Hacker News in Sidebar](/hacker-news-in-sidebar/)      | Display Hacker News within the Firefox sidebar.                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/llama-life-96x96.png" width="48" height="48"> [Llama Life in Sidebar](/llamalife-in-sidebar/)          | Display Llama Life within the Firefox sidebar.                                                                 | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/meta-ai-96x96.png" width="48" height="48"> [Meta AI in Sidebar](/metaai-in-sidebar/)                   | Display Meta AI within the Firefox sidebar.                                                                    | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/new-tab-bookmarks-96x96.png" width="48" height="48"> [New Tab Bookmarks](/new-tab-bookmarks/)          | A new tab replacement for your browser.                                                                        | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/notekeeper-96x96.png" width="48" height="48"> [Notekeeper](/notekeeper/)                               | An extension that transforms the New Tab into a minimalist, auto-saving text editor.                           | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/sorry-minnesota-only-96x96.png" width="48" height="48">[Sorry, Minnesota Only](/sorry-minnesota-only/) |                                                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/telegram-96x96.png" width="48" height="48"> [Telegram in Sidebar](/telegram-in-sidebar/)               | Display Telegram within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/ticktick-96x96.png" width="48" height="48"> [TickTick in Sidebar](/telegram-in-sidebar/)               | Display TickTick within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/ticktick-96x96.png" width="48" height="48"> [TickTick Pinned](/ticktick-pinned/)                       | Opens TickTick in a pinned tab.                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/whatsapp-96x96.png" width="48" height="48"> [WhatsApp in Sidebar](/whatsapp-in-sidebar/)               | Display WhatsApp within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/whatsapp-96x96.png" width="48" height="48"> [WhatsApp Pinned](/whatsapp-pinned/)                       | Opens WhatsApp in a pinned tab.                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="text-revealer/assets/logo-cropped.png"  width="150">                                                          | Reveal deeper information about text you highlight on a web page.                                              | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |

## ☑ Requirements

Two repository secrets are required to sign extensions prior releasing a new version with [web-ext](https://github.com/mozilla/web-ext).

- JWT Issuer: `FIREFOX_JWT_ISSUER`
- JWT Secret: `FIREFOX_JWT_SECRET`

Visit the [Manage API Keys](https://addons.mozilla.org/en-US/developers/addon/api/key/) page to obtain yours.

## © License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: In version-control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software-development strategy in which the code for a number of projects is stored in the same repository.
