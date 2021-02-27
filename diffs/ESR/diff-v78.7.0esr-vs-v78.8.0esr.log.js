/******************************************************************************************
 * diffs between FF prefs v78.7.0esr and v78.8.0esr
 *
 * prefs: 4046
 *        4043 matching prefs
 *           3 diffs ( 1 new, 0 gone, 2 different )
 ******************************************************************************************/
// new in v78.8.0esr:
pref("security.csp.truncate_blocked_uri_for_frame_navigations", true);

// removed, renamed or hidden in v78.8.0esr:

// changed in v78.8.0esr:
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v4/addons/search/?guid=%IDS%&lang=%LOCALE%"); // prev: "https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%"
pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v4/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%"); // prev: "https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%"
