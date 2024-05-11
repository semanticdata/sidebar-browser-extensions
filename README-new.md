# 🔌 Browser Extensions

> ⚠ Note: this is a work-in-progress.

This monorepo[^1] contains the source code for my browser extensions. Its aim is to make maintenance easier.

## 📦 Contents

|                                                                                                                         |                                                                                                     |                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: |
| <img src="assets/banners/brave-header-1.png">                                                                           | Adds Brave Search as a search engine option within Firefox. Also includes keyword @brave as a search shortcut. | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/chatgpt-banner-1.png">                                                                         | Opens ChatGPT within the Firefox sidebar.                                                                      | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/discord-banner-1.png">                                                                         | Display Discord within the Firefox sidebar.                                                                    | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/fastmail-sidebar-1.png">                                                                       | Display Fastmail within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/gemini-1.png">                                                                                 | Display Gemini within the Firefox sidebar.                                                                     | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/hn-1.png">                                     | Display Hacker News within the Firefox sidebar.                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/llamalife-1.png">       | Display Llama Life within the Firefox sidebar.                                                                 | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/metaai-2.png">                  | Display Meta AI within the Firefox sidebar.                                                                    | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/newtab-bookmarks-1.png">        | A new tab replacement for your browser.                                                                        | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/notekeeper-1.png">                            | An extension that transforms the New Tab into a minimalist, auto-saving text editor.                           | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/sorry-mn-only-1.png"> |                                                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/telegram-sidebar-1.png">            | Display Telegram within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/ticktick-sidebar-1.png">             | Display TickTick within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/ticktick-pinned-1.png">                      | Opens TickTick in a pinned tab.                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/whatsapp-sidebar-1.png">              | Display WhatsApp within the Firefox sidebar.                                                                   | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="assets/banners/whatsapp-pinned-1.png">               | Opens WhatsApp in a pinned tab.                                                                                | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |
| <img src="text-revealer/assets/logo-cropped.png"  width="250" height="100" />                                                          | Reveal deeper information about text you highlight on a web page.                                              | [![get the addon](get-addon-firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/) |

## ☑ Requirements

Two repository secrets are required to sign extensions prior releasing a new version with [web-ext](https://github.com/mozilla/web-ext).

- JWT Issuer: `FIREFOX_JWT_ISSUER`
- JWT Secret: `FIREFOX_JWT_SECRET`

Visit the [Manage API Keys](https://addons.mozilla.org/en-US/developers/addon/api/key/) page to obtain yours.

## © License

Source code in this repository is available under the [MIT License](LICENSE).

[^1]: In version-control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software-development strategy in which the code for a number of projects is stored in the same repository.
