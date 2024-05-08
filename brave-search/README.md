# ![Brave logo](icons/96x96.png) Brave Search Engine and Keywords

![Mozilla Add-on Version](https://img.shields.io/amo/v/%7B53c0f15a-a430-4d4f-ac91-caed0d516155%7D)
![Mozilla Add-on Rating](https://img.shields.io/amo/rating/%7B53c0f15a-a430-4d4f-ac91-caed0d516155%7D)
![Mozilla Add-on Downloads](https://img.shields.io/amo/dw/%7B53c0f15a-a430-4d4f-ac91-caed0d516155%7D)
![Mozilla Add-on Users](https://img.shields.io/amo/users/%7B53c0f15a-a430-4d4f-ac91-caed0d516155%7D)
![GitHub License](https://img.shields.io/github/license/semanticdata/firefox-brave-search)

Firefox extension that adds Brave Search to Firefox and includes `@brave`, `!brave`, `@b`, and `!b` as search keywords. This allows you to easily search brave in multiple new ways.

[![Get the Addon](https://raw.githubusercontent.com/semanticdata/text-revealer-firefox-extension/master/firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/brave-search-and-keyword/)

## Usage

- `!b !w Hello World` would let you search Wikipedia directly from any website regardless or wether or not you set Brave as your default search provider.
- `!gh Zola themes` would let you search GitHub directly while having this extension enabled.

## ⚠ Disclaimers

This extension is an independent project. It has no relation, and is not affiliated to Brave in any way. Brave™ is a registered trademark of Brave Software, Inc.

After some research, it appears Mozilla has placed limitations on using `chrome_settings_overrides` on Android. This is necessary to assign a new search engine under the platform.

[Read more](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions) about these limitations.

## © License

Source code in this repository is available under the [MIT License](LICENSE).
