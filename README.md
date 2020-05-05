# FFprefs-diffs
listing changes in Firefox default preferences. The diffs are created using 64-bit Firefoxes (en-US) on Windows.

* all older diffs were created based solely on FF's default preferences files and therefore didn't include prefs
set by system addons or other components. **59.0 vs 60.0 is the first diff which includes changes to those prefs as well.**
  * ESR & OS diffs will continue to be based solely on the default preferences files

update (Sept 2019):

> ESR & OS diffs will continue to be based solely on the default preferences files

* OS diffs discontinued because too many prefs were moved out of the default preferences files since FF61
* **ESR diffs, starting with `60.9.0esr vs 68.0esr`, will now include all pref changes. <br>**
To transition to the new system, `60.9.0esr vs 68.0esr` is a *default-preferences-only* 60.9.0esr vs the *full* 68.0esr diff

___

## Changelog

* [75.0 vs 76.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v75.0-vs-v76.0.log.js "75.0 vs 76.0") - 75 diffs ( 36 new, 17 gone, 22 different )

* [74.0 vs 75.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v74.0-vs-v75.0.log.js "74.0 vs 75.0") - 113 diffs ( 63 new, 24 gone, 26 different )

* [73.0 vs 74.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v73.0-vs-v74.0.log.js "73.0 vs 74.0") - 72 diffs ( 46 new, 11 gone, 15 different )

* [72.0 vs 73.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v72.0-vs-v73.0.log.js "72.0 vs 73.0") - 80 diffs ( 42 new, 17 gone, 21 different )

* [71.0 vs 72.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v71.0-vs-v72.0.log.js "71.0 vs 72.0") - 129 diffs ( 77 new, 29 gone, 23 different )

* [70.0 vs 71.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v70.0-vs-v71.0.log.js "70.0 vs 71.0") - 154 diffs ( 72 new, 43 gone, 39 different )

* [69.0 vs 70.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v69.0-vs-v70.0.log.js "69.0 vs 70.0") - 289 diffs ( 200 new, 52 gone, 37 different )

* [68.0 vs 69.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v68.0-vs-v69.0.log.js "68.0 vs 69.0") - 246 diffs ( 177 new, 33 gone, 36 different )

* [68.0 vs 68.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v68.0-vs-v68.0esr.log.js "68.0 vs 68.0 ESR") - 5 diffs ( 0 new, 0 gone, 5 different )

* [67.0 vs 68.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/6x/diff-v67.0-vs-v68.0.log.js "67.0 vs 68.0") - 237 diffs ( 133 new, 76 gone, 28 different )

* [older versions](https://github.com/earthlng/FFprefs-diffs/tree/master/diffs)


### ESR

<details><summary>ESR68.x (click to expand)</summary><p>

* [68.7.0esr vs 68.8.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v68.7.0esr-vs-v68.8.0esr.log.js "68.7.0esr vs 68.8.0esr") - 1 diff ( 0 new, 0 gone, 1 different )

* 68.6.0esr vs 68.7.0esr - no changes

* 68.5.0esr vs 68.6.0esr - no changes

* 68.4.0esr vs 68.5.0esr - no changes

* [68.3.0esr vs 68.4.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v68.3.0esr-vs-v68.4.0esr.log.js "68.3.0esr vs 68.4.0esr") - 2 diffs ( 1 new, 0 gone, 1 different )

* [68.2.0esr vs 68.3.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v68.2.0esr-vs-v68.3.0esr.log.js "68.2.0esr vs 68.3.0esr") - 2 diffs ( 0 new, 0 gone, 2 different )

* 68.1.0esr vs 68.2.0esr - no changes

* [68.0esr vs 68.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v68.0esr-vs-v68.1.0esr.log.js "68.0esr vs 68.1.0esr") - 8 diffs ( 7 new, 0 gone, 1 different )

* [60.9.0esr vs 68.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v60.9.0esr-vs-v68.0esr-full.log.js "60.9.0esr vs 68.0esr") - 1083 diffs ( 675 new, 328 gone, 80 different )

</p></details>

<details><summary>ESR60.x (click to expand)</summary><p>

* 60.8.0esr vs 60.9.0esr - no changes

* [60.7.0esr vs 60.8.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v60.7.0esr-vs-v60.8.0esr.log.js "60.7.0esr vs 60.8.0esr") - 13 diffs ( 1 new, 12 gone, 0 different )

* 60.6.0esr vs 60.7.0esr - no changes

* [60.5.0esr vs 60.6.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v60.5.0esr-vs-v60.6.0esr.log.js "60.5.0esr vs 60.6.0esr") - 8 diffs ( 1 new, 0 gone, 7 different )

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

