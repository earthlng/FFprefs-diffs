/******************************************************************************************
 * diffs between FF prefs v59.0 and v60.0
 *
 * prefs: 3261
 *        3093 matching prefs
 *         168 diffs ( 98 new, 53 gone, 17 different )
 ******************************************************************************************/
// new in v60.0:
pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");
pref("app.normandy.dev_mode", false);
pref("app.normandy.enabled", true);
pref("app.normandy.first_run", true);
pref("app.normandy.logging.level", 50);
pref("app.normandy.run_interval_seconds", 86400);
pref("app.normandy.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");
pref("browser.cache.offline.insecure.enable", true);
pref("browser.chrome.errorReporter.enabled", false);
pref("browser.chrome.errorReporter.infoURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/nightly-error-collection");
pref("browser.chrome.errorReporter.logLevel", "Error");
pref("browser.chrome.errorReporter.projectId", "339");
pref("browser.chrome.errorReporter.publicKey", "c709cb7a2c0b4f0882fcc84a5af161ec");
pref("browser.chrome.errorReporter.sampleRate", "0.001");
pref("browser.chrome.errorReporter.submitUrl", "https://sentry.prod.mozaws.net/api/339/store/");
pref("browser.newtabpage.activity-stream.enableWideLayout", true);
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", true);
pref("browser.newtabpage.activity-stream.sectionOrder", "topsites,topstories,highlights");
pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
pref("browser.newtabpage.activity-stream.topSitesRows", 1);
pref("browser.startup.blankWindow", false);
pref("browser.urlbar.openintab", false);
pref("device.sensors.ambientLight.enabled", true);
pref("device.sensors.motion.enabled", true);
pref("device.sensors.orientation.enabled", true);
pref("device.sensors.proximity.enabled", true);
pref("devtools.browserconsole.filter.css", false);
pref("devtools.browserconsole.filter.debug", true);
pref("devtools.browserconsole.filter.net", false);
pref("devtools.browserconsole.new-frontend-enabled", false);
pref("devtools.browserconsole.ui.filterbar", false);
pref("devtools.debugger.features.replay", false);
pref("devtools.policy.disabled", false);
pref("devtools.responsive.reloadConditions.touchSimulation", false);
pref("devtools.responsive.reloadConditions.userAgent", false);
pref("devtools.responsive.reloadNotification.enabled", true);
pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content", false);
pref("dom.push.alwaysConnect", false);
pref("dom.registerProtocolHandler.insecure.enabled", true);
pref("dom.serviceWorkers.update_delay", 1000);
pref("dom.webdriver.enabled", true);
pref("dom.webmidi.enabled", false);
pref("extensions.getAddons.compatOverides.url", "https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.langpacks.signatures.required", false);
pref("extensions.screenshots.upload-disabled", false);
pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com");
pref("general.document_open_conversion_depth_limit", 20);
pref("identity.fxaccounts.enabled", true);
pref("identity.fxaccounts.remote.root", "https://accounts.firefox.com/");
pref("image.animated.decode-on-demand.batch-size", 6);
pref("image.animated.decode-on-demand.threshold-kb", 4194303);
pref("image.mem.animated.use_heap", false);
pref("image.mem.volatile.min_threshold_kb", -1);
pref("image.multithreaded_decoding.idle_timeout", 600000);
pref("intl.tsf.hack.japanist10.do_not_return_no_layout_error_of_composition_string", true);
pref("javascript.options.array_prototype_values", true);
pref("javascript.options.spectre.jit_to_C++_calls", true);
pref("javascript.options.spectre.object_mitigations.barriers", true);
pref("javascript.options.spectre.object_mitigations.misc", true);
pref("javascript.options.spectre.string_mitigations", true);
pref("javascript.options.spectre.value_masking", true);
pref("layers.omtp.dump-capture", false);
pref("layout.css.individual-transform.enabled", false);
pref("layout.css.paint-order.enabled", true);
pref("layout.word_select.stop_at_underscore", false);
pref("marionette.debugging.clicktostart", false);
pref("marionette.enabled", false);
pref("media.cubeb.sandbox", false);
pref("media.getusermedia.camera.off_while_disabled.delay_ms", 3000);
pref("media.getusermedia.camera.off_while_disabled.enabled", true);
pref("media.getusermedia.microphone.off_while_disabled.delay_ms", 3000);
pref("media.getusermedia.microphone.off_while_disabled.enabled", true);
pref("network.cookie.same-site.enabled", true);
pref("network.dns.native-is-localhost", false);
pref("network.ftp.enabled", true);
pref("network.trr.allow-rfc1918", false);
pref("network.trr.blacklist-duration", 259200);
pref("network.trr.bootstrapAddress", "");
pref("network.trr.confirmationNS", "example.com");
pref("network.trr.credentials", "");
pref("network.trr.early-AAAA", false);
pref("network.trr.mode", 0);
pref("network.trr.request-timeout", 3000);
pref("network.trr.uri", "");
pref("network.trr.useGET", false);
pref("network.trr.wait-for-portal", true);
pref("pdfjs.textLayerMode", 1);
pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
pref("security.insecure_connection_text.enabled", false);
pref("security.insecure_connection_text.pbmode.enabled", false);
pref("security.mixed_content.upgrade_display_content", false);
pref("security.pki.distrust_ca_policy", 1);
pref("services.sync.engine.bookmarks.buffer", false);
pref("services.sync.engine.passwords.validation.interval", 86400);
pref("services.sync.engine.passwords.validation.maxRecords", 1000);
pref("services.sync.engine.passwords.validation.percentageChance", 10);
pref("services.sync.prefs.sync.browser.urlbar.matchBuckets", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);

// removed, renamed or hidden in v60.0:
pref("browser.newtabpage.activity-stream.aboutHome.enabled", true);
pref("browser.newtabpage.activity-stream.enabled", true);
pref("browser.newtabpage.activity-stream.topSitesCount", 6);
pref("browser.newtabpage.columns", 5);
pref("browser.newtabpage.compact", false);
pref("browser.newtabpage.directory.source", "https://tiles.services.mozilla.com/v3/links/fetch/%LOCALE%/%CHANNEL%");
pref("browser.newtabpage.enhanced", true);
pref("browser.newtabpage.introShown", false);
pref("browser.newtabpage.rows", 3);
pref("browser.newtabpage.thumbnailPlaceholder", false);
pref("browser.places.useAsyncTransactions", true);
pref("devtools.highlighter.writingModeAdjust", false);
pref("devtools.webide.monitorWebSocketURL", "ws://localhost:9000");
pref("dom.secureelement.enabled", false);
pref("dom.workers.enabled", true);
pref("extensions.alwaysUnpack", false);
pref("extensions.getAddons.getWithPerformance.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%&tMain=%TIME_MAIN%&tFirstPaint=%TIME_FIRST_PAINT%&tSessionRestored=%TIME_SESSION_RESTORED%");
pref("extensions.hotfix.cert.checkAttributes", true);
pref("extensions.hotfix.certs.1.sha1Fingerprint", "91:53:98:0C:C1:86:DF:47:8F:35:22:9E:11:C9:A7:31:04:49:A1:AA");
pref("extensions.hotfix.certs.2.sha1Fingerprint", "39:E7:2B:7A:5B:CF:37:78:F9:5D:4A:E0:53:2D:2F:3D:68:53:C5:60");
pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
pref("extensions.interposition.enabled", true);
pref("extensions.interposition.prefetching", true);
pref("extensions.shield-recipe-client.api_url", "https://normandy.cdn.mozilla.net/api/v1");
pref("extensions.shield-recipe-client.dev_mode", false);
pref("extensions.shield-recipe-client.enabled", true);
pref("extensions.shield-recipe-client.first_run", true);
pref("extensions.shield-recipe-client.logging.level", 50);
pref("extensions.shield-recipe-client.run_interval_seconds", 86400);
pref("extensions.shield-recipe-client.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");
pref("extensions.shield-recipe-client.startup_delay_seconds", 300);
pref("extensions.shield-recipe-client.user_id", "");
pref("gfx.font_loader.families_per_slice", 3);
pref("identity.fxaccounts.remote.connectdevice.uri", "https://accounts.firefox.com/connect_another_device?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.email.uri", "https://accounts.firefox.com/?service=sync&context=fx_desktop_v3&action=email");
pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.firefox.com/");
pref("identity.fxaccounts.settings.devices.uri", "https://accounts.firefox.com/settings/clients?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.settings.uri", "https://accounts.firefox.com/settings?service=sync&context=fx_desktop_v3");
pref("layout.css.stylo-blocklist.blocked_domains", "");
pref("layout.css.stylo-blocklist.enabled", false);
pref("pdfjs.disableTextLayer", false);
pref("pdfjs.enableHandToolOnLoad", false);
pref("pdfjs.enhanceTextSelection", false);
pref("security.xcto_nosniff_block_images", false);
pref("services.sync.errorhandler.networkFailureReportTimeout", 1209600);
pref("services.sync.prefs.sync.browser.newtabpage.enhanced", true);
pref("services.sync.scheduler.eolInterval", 604800);
pref("signed.applets.codebase_principal_support", false);
pref("svg.paint-order.enabled", true);
pref("view_source.tab", true);

// changed in v60.0:
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_description\":\"pocket_description\",\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"privacy_notice_link\":\"https://www.mozilla.org/privacy/firefox/#suggest-relevant-content\",\"disclaimer_link\":\"https://getpocket.com/firefox/new_tab_learn_more\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_header\":\"pocket_feedback_header\",\"provider_description\":\"pocket_description\",\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"stories_referrer\":\"http://getpocket.com/recommendations\",\"info_link\":\"https://www.mozilla.org/privacy/firefox/#pocketstories\",\"disclaimer_link\":\"https://getpocket.com/firefox/new_tab_learn_more.php\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"
pref("browser.schedulePressure.timeoutMs", 300); // prev: 1000
pref("devtools.debugger.features.root", true); // prev: false
pref("dom.ipc.useNativeEventProcessing.content", false); // prev: true
pref("dom.moduleScripts.enabled", true); // prev: false
pref("editor.use_div_for_default_newlines", true); // prev: false
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%"); // prev: "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%"
pref("font.name-list.sans-serif.ko", "Malgun Gothic, Gulim"); // prev: "Gulim, Malgun Gothic"
pref("gfx.webrender.blob-images", 1); // prev: 2
pref("gfx.webrender.hit-test", true); // prev: false
pref("layout.css.servo.chrome.enabled", true); // prev: false
pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000); // prev: 2000
pref("security.sandbox.content.level", 5); // prev: 4
pref("security.tls.version.max", 4); // prev: 3
pref("security.webauth.webauthn", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto"

