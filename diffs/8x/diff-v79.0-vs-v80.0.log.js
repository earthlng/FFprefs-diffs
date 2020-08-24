/******************************************************************************************
 * diffs between FF prefs v79.0 and v80.0
 *
 * prefs: 4097
 *        4032 matching prefs
 *          65 diffs ( 40 new, 8 gone, 17 different )
 ******************************************************************************************/
// new in v80.0:
pref("apz.force_disable_desktop_zooming_scrollbars", true);
pref("browser.preferences.experimental.hidden", false);
pref("browser.preferences.exposeHTTPSOnly", false);
pref("browser.region.update.enabled", true);
pref("browser.tabs.documentchannel.parent-controlled", false);
pref("browser.topsites.useRemoteSetting", false);
pref("browser.urlbar.loglevel", "Error");
pref("browser.urlbar.update2", false);
pref("browser.urlbar.update2.localOneOffs", false);
pref("browser.urlbar.update2.oneOffsRefresh", false);
pref("browser.urlbar.update2.tabToComplete", false);
pref("devtools.netmonitor.audits.slow", 500);
pref("dom.block_download_insecure", false);
pref("dom.security.https_only_mode_ever_enabled_pbm", false);
pref("dom.security.https_only_mode_pbm", false);
pref("dom.security.unexpected_system_load_telemetry_enabled", true);
pref("dom.suspend_inactive.enabled", false);
pref("domsecurity.httpsonly.infoURL", "https://developer.mozilla.org/en-US/docs/Glossary/https");
pref("extensions.backgroundServiceWorker.enabled", false);
pref("extensions.formautofill.addresses.capture.enabled", false);
pref("extensions.formautofill.creditCards.hideui", false);
pref("extensions.serviceWorkerRegister.allowed", false);
pref("fission.processOriginNames", false);
pref("gfx.use-ahardwarebuffer-content", false);
pref("layout.animation.prerender.partial.jank", false);
pref("layout.css.prefers-contrast.enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.has-used", false);
pref("media.videocontrols.picture-in-picture.video-toggle.mode", -1);
pref("media.videocontrols.picture-in-picture.video-toggle.position", "right");
pref("print.tab_modal.enabled", false);
pref("security.bad_cert_domain_error.url_fix_enabled", false);
pref("security.ssl3.rsa_aes_128_gcm_sha256", true);
pref("security.ssl3.rsa_aes_256_gcm_sha384", true);
pref("security.warn_submit_secure_to_insecure", true);
pref("security.xfocsp.errorReporting.automatic", false);
pref("security.xfocsp.errorReporting.enabled", true);
pref("signon.management.page.fileImport.enabled", false);
pref("storage.sqlite.exclusiveLock.enabled", true);
pref("webgl.debug.incomplete-tex-color", 0);
pref("webgl.oop.via-pcq", false);

// removed, renamed or hidden in v80.0:
pref("browser.urlbar.update2.expandTextOnFocus", false);
pref("devtools.accessibility.auto-init.enabled", true);
pref("devtools.responsive.browserUI.enabled", true);
pref("dom.sidebar.enabled", false);
pref("layout.viewport_contains_no_contents_area", true);
pref("media.getusermedia.experimental_input_processing", false);
pref("network.standard-url.punycode-host", true);
pref("webgl.prototype.ipc-pcq", 0);

// changed in v80.0:
pref("apz.mvm.force-enabled", true); // prev: false
pref("browser.aboutwelcome.overrideContent", "{\"id\": \"multi-stage-welcome-default\",\"template\": \"multistage\",\"screens\": [{\"id\": \"AW_GET_STARTED\",\"order\": 0,\"content\": {\"zap\": true,\"title\": {\"string_id\": \"onboarding-multistage-welcome-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-welcome-subtitle\"},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-welcome-primary-button-label\"},\"action\": {\"navigate\": true}},\"secondary_button\": {\"text\": {\"string_id\": \"onboarding-multistage-welcome-secondary-button-text\"},\"label\": {\"string_id\": \"onboarding-multistage-welcome-secondary-button-label\"},\"position\": \"top\",\"action\": {\"type\": \"OPEN_URL\",\"addFlowParams\": true,\"data\": {\"args\": \"https://accounts.firefox.com/?service=sync&action=email&context=fx_desktop_v3&entrypoint=activity-stream-firstrun&style=trailhead\",\"where\": \"current\"}}}}}, {\"id\": \"AW_IMPORT_SETTINGS\",\"order\": 1,\"content\": {\"zap\": true, \"disclaimer\": {\"string_id\": \"onboarding-import-sites-disclaimer\"},\"title\": {\"string_id\": \"onboarding-multistage-import-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-import-subtitle\"},\"tiles\": {\"type\": \"topsites\",\"info\": true},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-import-primary-button-label\"},\"action\": {\"type\": \"SHOW_MIGRATION_WIZARD\",\"navigate\": true}},\"secondary_button\": {\"label\":  {\"string_id\": \"onboarding-multistage-import-secondary-button-label\"},\"action\": {\"navigate\": true}}}}, {\"id\": \"AW_CHOOSE_THEME\",\"order\": 2,\"content\": {\"zap\": true,\"title\":  {\"string_id\": \"onboarding-multistage-theme-header\"},\"subtitle\": {\"string_id\": \"onboarding-multistage-theme-subtitle\"},\"tiles\": {\"type\": \"theme\",\"action\": {\"theme\": \"<event>\"}, \"data\": [{\"theme\": \"automatic\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-automatic\"}, \"description\": {\"string_id\": \"onboarding-multistage-theme-description-automatic\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-automatic\"}}, {\"theme\": \"light\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-light\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-light\"}},{\"theme\": \"dark\",\"label\": {\"string_id\": \"onboarding-multistage-theme-label-dark\"}, \"tooltip\": {\"string_id\": \"onboarding-multistage-theme-tooltip-dark\"}}]},\"primary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-theme-primary-button-label\"},\"action\": {\"navigate\": true}},\"secondary_button\": {\"label\": {\"string_id\": \"onboarding-multistage-theme-secondary-button-label\"},\"action\": {\"theme\": \"automatic\",\"navigate\": true}}}}]}"); // prev: ""
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 2); // prev: 1
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB,DE,IE"); // prev: "US,CA,GB,DE"
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE"); // prev: "US,DE,CA,GB"
pref("dom.animations-api.compositing.enabled", true); // prev: false
pref("dom.arena_allocator.enabled", true); // prev: false
pref("dom.max_chrome_script_run_time", 0); // prev: 20
pref("extensions.blocklist.useMLBF", true); // prev: false
pref("extensions.blocklist.useMLBF.stashes", true); // prev: false
pref("identity.sync.useOAuthForSyncToken", true); // prev: false
pref("media.navigator.video.use_transport_cc", true); // prev: false
pref("media.peerconnection.video.use_rtx", true); // prev: false
pref("media.peerconnection.video.use_rtx.blocklist", ""); // prev: "*.google.com"
pref("security.allow_disjointed_external_uri_loads", false); // prev: true
pref("signon.backup.enabled", true); // prev: false
pref("signon.capture.inputChanges.enabled", false); // prev: true
