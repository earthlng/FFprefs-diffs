/******************************************************************************************
 * diffs between FF prefs v65.0 and v66.0
 *
 * prefs: 3401
 *        3276 matching prefs
 *         125 diffs ( 73 new, 29 gone, 23 different )
 ******************************************************************************************/
// new in v66.0:
pref("app.normandy.remotesettings.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"enabled\":false,\"show_spocs\":true,\"layout_endpoint\":\"https://getpocket.com/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}");
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", true);
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
pref("browser.privatebrowsing.searchUI", true);
pref("browser.sanitizer.loglevel", "Warn");
pref("channelclassifier.allowlist_example", false);
pref("devtools.debugger.event-listener-breakpoints", "[]");
pref("devtools.debugger.event-listeners-visible", false);
pref("devtools.debugger.features.event-listeners-breakpoints", false);
pref("devtools.debugger.features.log-points", false);
pref("devtools.debugger.features.original-blackbox", true);
pref("devtools.debugger.features.windowless-workers", false);
pref("devtools.inspector.flexboxHighlighter.combine", false);
pref("devtools.inspector.new-rulesview.enabled", false);
pref("devtools.inspector.scrollable-badges.enabled", false);
pref("devtools.responsive.metaViewport.enabled", false);
pref("devtools.webconsole.input.editor", false);
pref("dom.block_external_protocol_in_iframes", false);
pref("dom.delay.block_external_protocol_in_iframes", 10);
pref("dom.input_events.conform_to_level_1", true);
pref("dom.inputevent.inputtype.enabled", true);
pref("dom.media.autoplay.autoplay-policy-api", false);
pref("dom.timeout.defer_during_load", true);
pref("dom.timeout.max_idle_defer_ms", 10000);
pref("dom.vr.openvr.action_input", false);
pref("gfx.webrender.all", false);
pref("gfx.webrender.debug.gpu-cache", false);
pref("gfx.webrender.debug.picture-caching", false);
pref("gfx.webrender.debug.primitives", false);
pref("gfx.webrender.debug.texture-cache.disable-shrink", false);
pref("gfx.webrender.enabled", false);
pref("javascript.options.dynamicImport", false);
pref("javascript.options.unboxed_objects", false);
pref("javascript.options.wasm_verbose", false);
pref("layout.css.scroll-anchoring.enabled", true);
pref("layout.css.scroll-anchoring.highlight", false);
pref("layout.dynamic-reflow-roots.enabled", false);
pref("media.autoplay.blackList-override-default", true);
pref("network.process.enabled", false);
pref("pdfjs.disableOpenActionDestination", true);
pref("pdfjs.historyUpdateUrl", false);
pref("performance.adjust_to_machine", false);
pref("performance.low_end_machine", false);
pref("privacy.trackingprotection.cryptomining.enabled", false);
pref("privacy.trackingprotection.fingerprinting.enabled", false);
pref("security.certerrors.permanentOverride", true);
pref("security.remote_settings.intermediates.bucket", "security-state");
pref("security.remote_settings.intermediates.checked", 0);
pref("security.remote_settings.intermediates.collection", "intermediates");
pref("security.remote_settings.intermediates.enabled", false);
pref("security.remote_settings.intermediates.signer", "onecrl.content-signature.mozilla.org");
pref("services.sync.prefs.sync.browser.contentblocking.category", true);
pref("services.sync.prefs.sync.browser.contentblocking.introCount", true);
pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeDownloads", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.topstories.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSearch", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.topSitesRows", true);
pref("services.sync.prefs.sync.browser.taskbar.previews.enable", true);
pref("services.sync.prefs.sync.media.eme.enabled", true);
pref("urlclassifier.features.cryptomining.blacklistTables", "base-cryptomining-track-digest256");
pref("urlclassifier.features.cryptomining.whitelistTables", "mozstd-trackwhite-digest256");
pref("urlclassifier.features.fingerprinting.blacklistTables", "base-fingerprinting-track-digest256");
pref("urlclassifier.features.fingerprinting.whitelistTables", "mozstd-trackwhite-digest256");

// removed, renamed or hidden in v66.0:
pref("app.update.download.backgroundInterval", 0);
pref("apz.allow_checkerboarding", true);
pref("browser.chrome.errorReporter.enabled", false);
pref("browser.chrome.errorReporter.logLevel", "Error");
pref("browser.chrome.errorReporter.projectId", "339");
pref("browser.chrome.errorReporter.publicKey", "c709cb7a2c0b4f0882fcc84a5af161ec");
pref("browser.chrome.errorReporter.sampleRate", "0.001");
pref("browser.chrome.errorReporter.submitUrl", "https://sentry.prod.mozaws.net/api/339/store/");
pref("devtools.debugger.features.origial-blackbox", false);
pref("devtools.webconsole.jsterm.reverse-search", true);
pref("dom.event.returnValue.enabled", false);
pref("dom.ipc.scheduler.chaoticScheduling", false);
pref("dom.ipc.scheduler.preemption", false);
pref("dom.ipc.scheduler.threadCount", 2);
pref("dom.ipc.scheduler.useMultipleQueues", true);
pref("dom.vr.process.enabled", false);
pref("intl.charset.fallback.utf8_for_file", false);
pref("layout.css.background-blend-mode.enabled", true);
pref("layout.css.box-decoration-break.enabled", true);
pref("layout.css.color-adjust.enabled", true);
pref("layout.css.image-orientation.enabled", true);
pref("layout.css.isolation.enabled", true);
pref("layout.css.mix-blend-mode.enabled", true);
pref("layout.css.overflow.moz-scrollbars.enabled", false);
pref("layout.css.scroll-behavior.property-enabled", true);
pref("media.autoplay.ask-permission", false);
pref("network.allow-experiments", true);
pref("network.http.accept.default", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
pref("urlclassifier.flashInfobarTable", "except-flashinfobar-digest256");

// changed in v66.0:
pref("app.update.staging.enabled", true); // prev: false
pref("breakpad.reportURL", "https://crash-stats.mozilla.org/report/index/"); // prev: "https://crash-stats.mozilla.com/report/index/"
pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true,\"exclude\":[]}"); // prev: "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true,\"exclude\":[\"RETURN_TO_AMO_1\"]}"
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true); // prev: false
pref("browser.safebrowsing.downloads.remote.url", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_SAFEBROWSING_API_KEY%"); // prev: "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.google.updateURL", "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_SAFEBROWSING_API_KEY%"); // prev: "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("browser.safebrowsing.provider.google4.gethashURL", "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256"
pref("browser.security.newcerterrorpage.enabled", true); // prev: false
pref("browser.security.newcerterrorpage.mitm.enabled", true); // prev: false
pref("dom.ipc.processCount", 8); // prev: 4
pref("dom.keyboardevent.keypress.set_keycode_and_charcode_to_same_value", true); // prev: false
pref("dom.window.event.enabled", true); // prev: false
pref("extensions.webextensions.ExtensionStorageIDB.enabled", true); // prev: false
pref("geo.wifi.uri", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%"); // prev: "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%"
pref("gfx.webrender.picture-caching", true); // prev: false
pref("html5.flushtimer.initialdelay", 16); // prev: 120
pref("html5.flushtimer.subsequentdelay", 16); // prev: 120
pref("media.autoplay.enabled.user-gestures-needed", true); // prev: false
pref("network.http.send_window_size", 1024); // prev: 0
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256"

