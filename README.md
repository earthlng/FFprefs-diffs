# FFprefs-diffs
listing changes in Firefox default preferences. The diffs are created using 64-bit Firefoxes (en-US) on Windows.

* all older diffs were created based solely on FF's default preferences files and therefore didn't include prefs
set by system addons or other components. **59.0 vs 60.0 is the first diff which includes changes to those prefs as well.**
  * ESR & OS diffs will continue to be based on the default preferences files only.

___

## Changelog

* [64.0 vs 65.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v64.0-vs-v65.0.log.js "64.0 vs 65.0") - 156 diffs ( 84 new, 45 gone, 27 different )

* [63.0 vs 64.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v63.0-vs-v64.0.log.js "63.0 vs 64.0") - 140 diffs ( 63 new, 45 gone, 32 different )

* [62.0 vs 63.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v62.0-vs-v63.0.log.js "62.0 vs 63.0") - 199 diffs ( 122 new, 56 gone, 21 different )

* [61.0 vs 62.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v61.0-vs-v62.0.log.js "61.0 vs 62.0") - 120 diffs ( 51 new, 43 gone, 26 different )

* [60.0 vs 61.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v60.0-vs-v61.0.log.js "60.0 vs 61.0") - 211 diffs ( 90 new, 101 gone, 20 different )

<details><summary>prefs set by System Addons or other components in FF60 which were not included in any previous diffs</summary><p>

```js
pref("app.shield.optoutstudies.enabled", true);
pref("browser.newtabpage.activity-stream.collapseTopSites", false);
pref("browser.newtabpage.activity-stream.default.sites", "https://www.youtube.com/,https://www.facebook.com/,https://www.wikipedia.org/,https://www.reddit.com/,https://www.amazon.com/,https://twitter.com/");
pref("browser.newtabpage.activity-stream.disableSnippets", false);
pref("browser.newtabpage.activity-stream.feeds.favicon", true);
pref("browser.newtabpage.activity-stream.feeds.migration", true);
pref("browser.newtabpage.activity-stream.feeds.newtabinit", true);
pref("browser.newtabpage.activity-stream.feeds.places", true);
pref("browser.newtabpage.activity-stream.feeds.prefs", true);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", true);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_description\":\"pocket_description\",\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"privacy_notice_link\":\"https://www.mozilla.org/privacy/firefox/#suggest-relevant-content\",\"disclaimer_link\":\"https://getpocket.com/firefox/new_tab_learn_more\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}");
pref("browser.newtabpage.activity-stream.feeds.sections", true);
pref("browser.newtabpage.activity-stream.feeds.snippets", true);
pref("browser.newtabpage.activity-stream.feeds.systemtick", true);
pref("browser.newtabpage.activity-stream.feeds.telemetry", true);
pref("browser.newtabpage.activity-stream.feeds.topsites", true);
pref("browser.newtabpage.activity-stream.filterAdult", true);
pref("browser.newtabpage.activity-stream.migrationExpired", false);
pref("browser.newtabpage.activity-stream.migrationLastShownDate", 0);
pref("browser.newtabpage.activity-stream.migrationRemainingDays", 4);
pref("browser.newtabpage.activity-stream.section.highlights.collapsed", false);
pref("browser.newtabpage.activity-stream.section.topstories.collapsed", false);
pref("browser.newtabpage.activity-stream.section.topstories.showDisclaimer", true);
pref("browser.newtabpage.activity-stream.showSearch", true);
pref("browser.newtabpage.activity-stream.showSponsored", true);
pref("browser.newtabpage.activity-stream.showTopSites", true);
pref("browser.newtabpage.activity-stream.telemetry", true);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://tiles.services.mozilla.com/v4/links/activity-stream");
pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "https://activity-stream-icons.services.mozilla.com/v1/icons.json.br");
pref("extensions.pocket.api", "api.getpocket.com");
pref("extensions.pocket.oAuthConsumerKey", "40249-e88c401e1b1f2242d9e441c4");
pref("extensions.pocket.site", "getpocket.com");
pref("extensions.webcompat.perform_ua_overrides", true);
pref("pdfjs.cursorToolOnLoad", 0);
pref("pdfjs.defaultZoomValue", "");
pref("pdfjs.disableAutoFetch", false);
pref("pdfjs.disableFontFace", false);
pref("pdfjs.disablePageLabels", false);
pref("pdfjs.disablePageMode", false);
pref("pdfjs.disableRange", false);
pref("pdfjs.disableStream", false);
pref("pdfjs.enablePrintAutoRotate", false);
pref("pdfjs.enableWebGL", false);
pref("pdfjs.externalLinkTarget", 0);
pref("pdfjs.pdfBugEnabled", false);
pref("pdfjs.renderer", "canvas");
pref("pdfjs.renderInteractiveForms", false);
pref("pdfjs.showPreviousViewOnLoad", true);
pref("pdfjs.sidebarViewOnLoad", 0);
pref("pdfjs.useOnlyCssZoom", false);
```

</p></details>

* [59.0 vs 60.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v59.0-vs-v60.0.log.js "59.0 vs 60.0") - 168 diffs ( 98 new, 53 gone, 17 different )

* [older versions](https://github.com/earthlng/FFprefs-diffs/tree/master/diffs)


### ESR

<details><summary>ESR60.x (click to expand)</summary><p>

* 60.4.0esr vs 60.5.0esr - no changes

* 60.3.0esr vs 60.4.0esr - no changes

* 60.2.0esr vs 60.3.0esr - no changes

* 60.1.0esr vs 60.2.0esr - no changes

* [60.0esr vs 60.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v60.0esr-vs-v60.1.0esr.log.js "60.0esr vs 60.1.0esr") - 3 diffs ( 0 new, 1 gone, 2 different )

* [52.9.0esr vs 60.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.9.0esr-vs-v60.0esr.log.js "52.9.0esr vs 60.0esr") - 1203 diffs ( 674 new, 322 gone, 207 different )

</p></details>

<details><summary>ESR52.x (click to expand)</summary><p>

* 52.8.0esr vs 52.9.0esr - no changes

* 52.7.0esr vs 52.8.0esr - no changes

* [52.6.0esr vs 52.7.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.6.0esr-vs-v52.7.0esr.log.js "52.6.0esr vs 52.7.0esr") - 2 diffs ( 0 new, 1 gone, 1 different )

* [52.5.0esr vs 52.6.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.5.0esr-vs-v52.6.0esr.log.js "52.5.0esr vs 52.6.0esr") - 5 diffs ( 1 new, 1 gone, 3 different )

* 52.4.0esr vs 52.5.0esr - no changes

* 52.3.0esr vs 52.4.0esr - no changes

* [52.2.0esr vs 52.3.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.2.0esr-vs-v52.3.0esr.log.js "52.2.0esr vs 52.3.0esr") - 1 diffs ( 0 new, 0 gone, 1 different )

* [52.1.0esr vs 52.2.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.1.0esr-vs-v52.2.0esr.log.js "52.1.0esr vs 52.2.0esr") - 3 diffs ( 3 new, 0 gone, 0 different )
  
* [52.0esr vs 52.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.0esr-vs-v52.1.0esr.log.js "52.0esr vs 52.1.0esr") - 2 diffs ( 0 new, 0 gone, 2 different )

</p></details>

### Windows vs Linux vs MacOS

* [62.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v62.0.html)
* [61.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v61.0.html)
* [60.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v60.0.html)
* [older versions](https://earthlng.github.io/FFprefs-diffs/index.html)

