/******************************************************************************************
 * diffs between FF prefs v78.1.0esr and v78.2.0esr
 *
 * prefs: 4044
 *        4040 matching prefs
 *           4 diffs ( 1 new, 0 gone, 3 different )
 ******************************************************************************************/
// new in v78.2.0esr:
pref("security.warn_submit_secure_to_insecure", true);

// removed, renamed or hidden in v78.2.0esr:

// changed in v78.2.0esr:
pref("dom.image-lazy-loading.enabled", false); // prev: true
pref("extensions.blocklist.useMLBF", true); // prev: false
pref("extensions.blocklist.useMLBF.stashes", true); // prev: false
