# FFprefs-diffs
listing differences in Firefox prefs

___

## Changelog

* [55.0 vs 56.0b1](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/5x/diff-v55.0-vs-v56.0b1.log.js "55.0 vs 56.0b1") - 159 diffs ( 88 new, 27 gone, 44 different )

* 55.0 vs 55.0.1
```js
// changed in v55.0.1:
pref("network.predictor.enable-prefetch", false); // prev: true
```

* [54.0 vs 55.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/5x/diff-v54.0-vs-v55.0.log.js "54.0 vs 55.0") - 432 diffs ( 207 new, 66 gone, 159 different )

* [54.0 vs 55.0b1](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/5x/diff-v54.0-vs-v55.0b1.log.js "54.0 vs 55.0b1") - 432 diffs ( 202 new, 66 gone, 164 different )

* 54.0 vs 54.0.1 - no changes

* [53.0 vs 54.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/5x/diff-v53.0-vs-v54.0.log.js "53.0 vs 54.0") - 119 diffs ( 54 new, 55 gone, 10 different )

* 53.0 vs 53.0.2 vs 53.0.3 - no changes

* [52.0 vs 53.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diff-v52.0-vs-v53.0.log.js "52.0 vs 53.0") - 133 diffs ( 74 new, 38 gone, 21 different )

* 52.0 vs 52.0.1 vs 52.0.2 - no changes

* [51.0 vs 52.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diff-v51.0-vs-v52.0.log.js "51.0 vs 52.0") - 116 diffs ( 55 new, 38 gone, 23 different )

* [older versions](https://github.com/earthlng/FFprefs-diffs/tree/master/diffs)

### ESR

* [52.2.0esr vs 52.3.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.2.0esr-vs-v52.3.0esr.log.js "52.2.0esr vs 52.3.0esr") - 1 diffs ( 0 new, 0 gone, 1 different )

* [52.1.0esr vs 52.2.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.1.0esr-vs-v52.2.0esr.log.js "52.1.0esr vs 52.2.0esr") - 3 diffs ( 3 new, 0 gone, 0 different )
  
* [52.0esr vs 52.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.0esr-vs-v52.1.0esr.log.js "52.0esr vs 52.1.0esr") - 2 diffs ( 0 new, 0 gone, 2 different )

### Windows vs Linux vs MacOS

* [55.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v55.0.html)
* [54.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v54.0.html)
* [53.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v53.0.html)

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
