/******************************************************************************************
 * diffs between FF prefs v80.0 and v81.0
 *
 * prefs: 4131
 *        4054 matching prefs
 *          77 diffs ( 42 new, 17 gone, 18 different )
 ******************************************************************************************/
// new in v81.0:
pref("app.update.langpack.enabled", true);
pref("browser.defaultbrowser.notificationbar.checkcount", 0);
pref("browser.defaultbrowser.notificationbar.checklimit", 10000);
pref("browser.download.viewableInternally.enabledTypes", "xml,svg,webp,avif");
pref("browser.helperApps.showOpenOptionForViewableInternally", true);
pref("browser.migrate.showBookmarksToolbarAfterMigration", false);
pref("browser.newtabpage.activity-stream.discoverystream.locale-list-config", "");
pref("browser.partnerlink.attributionURL", "https://topsites.services.mozilla.com/cid/amzn_2020_a1");
pref("browser.privatebrowsing.vpnpromourl", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-%CHANNEL%-browser&utm_campaign=private-browsing-vpn-link");
pref("devtools.inspector.ruleview.inline-compatibility-warning.enabled", false);
pref("dom.block_download_in_sandboxed_iframes", false);
pref("dom.webcomponents.formAssociatedCustomElement.enabled", false);
pref("fission.remoteObjectEmbed", false);
pref("gfx.webrender.debug.capture-profiler", false);
pref("html5.inert.enabled", false);
pref("javascript.options.wasm_simd", false);
pref("layers.iosurfaceimage.recycle-limit", 15);
pref("layout.css.cross-fade.enabled", false);
pref("layout.css.forced-colors.enabled", false);
pref("layout.css.moz-any-is-is.enabled", false);
pref("layout.forms.input-type-search.enabled", false);
pref("media.getusermedia.camera.background.mute.enabled", false);
pref("media.mediacontrol.stopcontrol.aftermediaends", true);
pref("media.mediacontrol.stopcontrol.timer", false);
pref("network.dns.upgrade_with_https_rr", false);
pref("network.dns.use_https_rr_as_altsvc", false);
pref("network.http.http3.alt-svc-mapping-for-testing", "");
pref("network.trr.blocklist_cleanup_done", false);
pref("privacy.partition.bloburl_per_agent_cluster", false);
pref("prompts.tabChromePromptSubDialog", false);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled_pbm", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_pbm", true);
pref("services.sync.prefs.sync.signon.autofillForms", true);
pref("services.sync.prefs.sync.signon.generation.enabled", true);
pref("services.sync.prefs.sync.signon.management.page.breach-alerts.enabled", true);
pref("signon.suggestImportCount", 3);

// removed, renamed or hidden in v81.0:
pref("browser.tabs.documentchannel", true);
pref("browser.tabs.documentchannel.parent-initiated", true);
pref("browser.tabs.documentchannel.ppdc", true);
pref("dom.experimental_forms", false);
pref("dom.forms.color", true);
pref("dom.forms.datetime", true);
pref("dom.security.featurePolicy.enabled", true);
pref("dom.webcomponents.elementInternals.enabled", false);
pref("domsecurity.httpsonly.infoURL", "https://developer.mozilla.org/en-US/docs/Glossary/https");
pref("identity.fxaccounts.service.sendLoginUrl", "https://send.firefox.com/login/");
pref("layout.css.comparison-functions.enabled", true);
pref("layout.css.is-where-selectors.enabled", true);
pref("layout.css.offset-logical-properties.enabled", false);
pref("layout.css.shadow-parts.enabled", true);
pref("network.trr.enable_when_nrpt_detected", false);
pref("network.trr.enable_when_proxy_detected", false);
pref("network.trr.enable_when_vpn_detected", false);

// changed in v81.0:
pref("apz.one_touch_pinch.enabled", false); // prev: true
pref("browser.aboutwelcome.overrideContent", ""); // prev: "{\"id\": \"multi-stage-welcome-default\",\"template\": \"multistage\",\"screens\": [{\"id\": \"AW_GET_STARTED\",\"order\": 0,\"content\": {\"zap\": true,\"title\": {\"string_id\": \"onboarding-multistage-welcome-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-welcome-subtitle\"},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-welcome-primary-button-label\"},\"action\": {\"navigate\": true}},\"secondary_button\": {\"text\": {\"string_id\": \"onboarding-multistage-welcome-secondary-button-text\"},\"label\": {\"string_id\": \"onboarding-multistage-welcome-secondary-button-label\"},\"position\": \"top\",\"action\": {\"type\": \"OPEN_URL\",\"addFlowParams\": true,\"data\": {\"args\": \"https://accounts.firefox.com/?service=sync&action=email&context=fx_desktop_v3&entrypoint=activity-stream-firstrun&style=trailhead\",\"where\": \"current\"}}}}}, {\"id\": \"AW_IMPORT_SETTINGS\",\"order\": 1,\"content\": {\"zap\": true, \"disclaimer\": {\"string_id\": \"onboarding-import-sites-disclaimer\"},\"title\": {\"string_id\": \"onboarding-multistage-import-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-import-subtitle\"},\"tiles\": {\"type\": \"topsites\",\"info\": true},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-import-primary-button-label\"},\"action\": {\"type\": \"SHOW_MIGRATION_WIZARD\",\"navigate\": true}},\"secondary_button\": {\"label\":  {\"string_id\": \"onboarding-multistage-import-secondary-button-label\"},\"action\": {\"navigate\": true}}}}, {\"id\": \"AW_CHOOSE_THEME\",\"order\": 2,\"content\": {\"zap\": true,\"title\":  {\"string_id\": \"onboarding-multistage-theme-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-theme-subtitle\"},\"tiles\": {\"type\": \"theme\",\"action\": {\"theme\": \"<event>\"}, \"data\": [{\"theme\": \"automatic\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-automatic\"}, \"description\": {\"string_id\": \"onboarding-multistage-theme-description-automatic\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-automatic\"}}, {\"theme\": \"light\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-light\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-light\"}},{\"theme\": \"dark\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-dark\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-dark\"}}]},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-theme-primary-button-label\"},\"action\": {\"navigate\": true}},\"secondary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-theme-secondary-button-label\"},\"action\": {\"theme\": \"automatic\",\"navigate\": true}}}}]}"
pref("browser.contentblocking.report.show_mobile_app", true); // prev: false
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 1); // prev: 2
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB,DE,IE,CH,AT,BE"); // prev: "US,CA,GB,DE,IE"
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA,DE"); // prev: "US,CA"
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE,CH,AT,BE"); // prev: "US,DE,CA,GB,IE"
pref("devtools.whatsnew.enabled", false); // prev: true
pref("devtools.whatsnew.feature-enabled", false); // prev: true
pref("extensions.formautofill.creditCards.enabled", false); // prev: true
pref("fission.preserve_browsing_contexts", true); // prev: false
pref("layout.css.moz-focus-outer.enabled", false); // prev: true
pref("media.hardwaremediakeys.enabled", true); // prev: false
pref("network.http.http3.default-max-stream-blocked", 20); // prev: 10
pref("network.http.http3.default-qpack-table-size", 65536); // prev: 0
pref("security.block_Worker_with_wrong_mime", true); // prev: false
pref("signon.capture.inputChanges.enabled", true); // prev: false
pref("signon.showAutoCompleteImport", "import"); // prev: ""
