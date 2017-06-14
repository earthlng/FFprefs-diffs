# FFprefs-diffs
listing differences in Firefox prefs

___

## Changelog

* [54.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v54.0.html)

* [53.0 vs 54.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/5x/diff-v53.0-vs-v54.0.log.js "53.0 vs 54.0")
  * 119 diffs ( 54 new, 55 gone, 10 different )

* [53.0 vs 54.0b1](https://github.com/earthlng/FFprefs-diffs/blob/master/diff-v53.0-vs-v54.0b1.log.js "53.0 vs 54.0b1")
  * 121 diffs ( 52 new, 55 gone, 14 different )

* 53.0 vs 53.0.2 vs 53.0.3
  * no changes

* [53.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v53.0.html)

* [52.0 vs 53.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diff-v52.0-vs-v53.0.log.js "52.0 vs 53.0")
  * 133 diffs ( 74 new, 38 gone, 21 different )

* 52.0 vs 52.0.1 vs 52.0.2
  * no changes

* [51.0 vs 52.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diff-v51.0-vs-v52.0.log.js "51.0 vs 52.0")
  * 116 diffs ( 55 new, 38 gone, 23 different )

* 51.0 vs 51.0.1
  * no changes

___

_The diffs are created using 64-bit Firefoxes on Windows,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by comparing the following files in the order that Firefox applies them:_

> 1. omni.ja/greprefs.js
> 2. omni.ja/defaults/pref/services-sync.js
> 3. browser/omni.ja/defaults/preferences/webide-prefs.js
> 4. browser/omni.ja/defaults/preferences/firefox.js
> 5. browser/omni.ja/defaults/preferences/firefox-l10n.js
> 6. browser/omni.ja/defaults/preferences/firefox-branding.js
> 7. browser/omni.ja/defaults/preferences/devtools.js

_starting with Firefox 54.0beta1 two new files were added/split-out ([marionette.js](https://bugzilla.mozilla.org/show_bug.cgi?id=1350887) and [debugger.js](https://bugzilla.mozilla.org/show_bug.cgi?id=1328693)). new order:_

> 1. omni.ja/greprefs.js
> 2. omni.ja/defaults/pref/services-sync.js
> 3. omni.ja/defaults/pref/marionette.js
> 4. browser/omni.ja/defaults/preferences/webide-prefs.js
> 5. browser/omni.ja/defaults/preferences/firefox.js
> 6. browser/omni.ja/defaults/preferences/firefox-l10n.js
> 7. browser/omni.ja/defaults/preferences/firefox-branding.js
> 8. browser/omni.ja/defaults/preferences/devtools.js
> 9. browser/omni.ja/defaults/preferences/debugger.js
