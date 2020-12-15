# FFprefs-diffs
listing changes in Firefox default preferences. The diffs are created using 64-bit Firefoxes (en-US) on Windows.

* all older diffs were created based solely on FF's default preferences files and therefore didn't include prefs
set by system addons or other components. **59.0 vs 60.0 is the first diff which includes changes to those prefs as well.**
  * ~~ESR & OS diffs will continue to be based solely on the default preferences files~~

update (Sept 2019):

> ESR & OS diffs will continue to be based solely on the default preferences files

* OS diffs discontinued because too many prefs were moved out of the default preferences files since FF61
* **ESR diffs, starting with `60.9.0esr vs 68.0esr`, will now include all pref changes. <br>**
To transition to the new system, `60.9.0esr vs 68.0esr` is a *default-preferences-only* 60.9.0esr vs the *full* 68.0esr diff

___

## Changelog

* [83.0 vs 84.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/8x/diff-v83.0-vs-v84.0.log.js "83.0 vs 84.0") - 79 diffs ( 38 new, 24 gone, 17 different )

* [82.0 vs 83.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/8x/diff-v82.0-vs-v83.0.log.js "82.0 vs 83.0") - 102 diffs ( 48 new, 13 gone, 41 different )

* [81.0 vs 82.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/8x/diff-v81.0-vs-v82.0.log.js "81.0 vs 82.0") - 80 diffs ( 42 new, 22 gone, 16 different )

* [80.0 vs 81.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/8x/diff-v80.0-vs-v81.0.log.js "80.0 vs 81.0") - 77 diffs ( 42 new, 17 gone, 18 different )

* [79.0 vs 80.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/8x/diff-v79.0-vs-v80.0.log.js "79.0 vs 80.0") - 65 diffs ( 40 new, 8 gone, 17 different )

* [78.0 vs 79.0](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v78.0-vs-v79.0.log.js "78.0 vs 79.0") - 93 diffs ( 42 new, 27 gone, 24 different )

* [78.0 vs 78.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/7x/diff-v78.0-vs-v78.0esr.log.js "78.0 vs 78.0 ESR") - 1 diff ( 0 new, 0 gone, 1 different )

* [older versions](https://github.com/earthlng/FFprefs-diffs/tree/master/diffs)


### ESR

<details><summary>ESR78.x</summary><p>

* [78.5.0esr vs 78.6.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v78.5.0esr-vs-v78.6.0esr.log.js "78.5.0esr vs 78.6.0esr") - 1 diff ( 0 new, 0 gone, 1 different )

* [78.4.0esr vs 78.5.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v78.4.0esr-vs-v78.5.0esr.log.js "78.4.0esr vs 78.5.0esr") - 1 diff ( 1 new, 0 gone, 0 different )

* 78.3.0esr vs 78.4.0esr - no changes

* 78.2.0esr vs 78.3.0esr - no changes

* [78.1.0esr vs 78.2.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v78.1.0esr-vs-v78.2.0esr.log.js "78.1.0esr vs 78.2.0esr") - 4 diffs ( 1 new, 0 gone, 3 different )

* [78.0esr vs 78.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v78.0esr-vs-v78.1.0esr.log.js "78.0esr vs 78.1.0esr") - 6 diffs ( 3 new, 2 gone, 1 different )

* [68.12.0esr vs 78.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v68.12.0esr-vs-v78.0esr.log.js "68.12.0esr vs 78.0esr") - 1093 diffs ( 762 new, 214 gone, 117 different )

</p></details>

<details><summary>ESR68.x</summary><p>

* 68.11.0esr vs 68.12.0esr - no changes

* 68.10.0esr vs 68.11.0esr - no changes

* 68.9.0esr vs 68.10.0esr - no changes

* 68.8.0esr vs 68.9.0esr - no changes

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

<details><summary>ESR52.x & ESR60.x</summary><p>

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

* 52.8.0esr vs 52.9.0esr - no changes

* 52.7.0esr vs 52.8.0esr - no changes

* [52.6.0esr vs 52.7.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.6.0esr-vs-v52.7.0esr.log.js "52.6.0esr vs 52.7.0esr") - 2 diffs ( 0 new, 1 gone, 1 different )

* [52.5.0esr vs 52.6.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.5.0esr-vs-v52.6.0esr.log.js "52.5.0esr vs 52.6.0esr") - 5 diffs ( 1 new, 1 gone, 3 different )

* 52.4.0esr vs 52.5.0esr - no changes

* 52.3.0esr vs 52.4.0esr - no changes

* [52.2.0esr vs 52.3.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.2.0esr-vs-v52.3.0esr.log.js "52.2.0esr vs 52.3.0esr") - 1 diff ( 0 new, 0 gone, 1 different )

* [52.1.0esr vs 52.2.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.1.0esr-vs-v52.2.0esr.log.js "52.1.0esr vs 52.2.0esr") - 3 diffs ( 3 new, 0 gone, 0 different )
  
* [52.0esr vs 52.1.0esr](https://github.com/earthlng/FFprefs-diffs/blob/master/diffs/ESR/diff-v52.0esr-vs-v52.1.0esr.log.js "52.0esr vs 52.1.0esr") - 2 diffs ( 0 new, 0 gone, 2 different )

</p></details>

### Windows vs Linux vs MacOS

* [62.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v62.0.html)
* [61.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v61.0.html)
* [60.0 - Windows vs Linux vs MacOS](https://earthlng.github.io/FFprefs-diffs/Firefox-v60.0.html)
* [older versions](https://earthlng.github.io/FFprefs-diffs/index.html)

