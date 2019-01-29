/******************************************************************************************
 * diffs between FF prefs v64.0 and v65.0
 *
 * prefs: 3373
 *        3217 matching prefs
 *         156 diffs ( 84 new, 45 gone, 27 different )
 ******************************************************************************************/
// new in v65.0:
pref("apz.relative-update.enabled", true);
pref("browser.contentblocking.control-center.ui.showAllowedLabels", false);
pref("browser.contentblocking.control-center.ui.showBlockedLabels", true);
pref("browser.discovery.containers.enabled", true);
pref("browser.discovery.enabled", true);
pref("browser.discovery.sites", "addons.mozilla.org");
pref("browser.engagement.recent_visited_origins.expiry", 86400);
pref("browser.security.newcerterrorpage.mitm.enabled", false);
pref("browser.sessionstore.warnOnQuit", false);
pref("devtools.aboutdebugging.network", false);
pref("devtools.aboutdebugging.wifi", false);
pref("devtools.console.stdout.chrome", false);
pref("devtools.console.stdout.content", false);
pref("devtools.debugger.end-panel-size", 300);
pref("devtools.debugger.features.origial-blackbox", false);
pref("devtools.debugger.features.xhr-breakpoints", true);
pref("devtools.debugger.logging", false);
pref("devtools.debugger.start-panel-size", 300);
pref("devtools.debugger.xhr-breakpoints-visible", true);
pref("devtools.inspector.showUserAgentShadowRoots", false);
pref("devtools.performance.profiler.sample-frequency-hz", 1000);
pref("devtools.recordreplay.allowRepaintFailures", true);
pref("devtools.recordreplay.includeSystemScripts", false);
pref("devtools.recordreplay.timeline.enabled", false);
pref("dom.block_multiple_popups", true);
pref("dom.compositionevent.text.dispatch_only_system_group_in_content", true);
pref("dom.ipc.tabs.createKillHardCrashReports", false);
pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys", "");
pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode", "");
pref("dom.payments.request.supportedRegions", "US,CA");
pref("dom.performance.time_to_contentful_paint.enabled", false);
pref("dom.reporting.cleanup.timeout", 3600);
pref("dom.reporting.delivering.maxFailures", 3);
pref("dom.reporting.delivering.maxReports", 100);
pref("dom.reporting.delivering.timeout", 5);
pref("dom.reporting.enabled", false);
pref("dom.reporting.featurePolicy.enabled", false);
pref("dom.reporting.header.enabled", false);
pref("dom.reporting.testing.enabled", false);
pref("dom.security.featurePolicy.header.enabled", false);
pref("dom.security.featurePolicy.webidl.enabled", false);
pref("dom.sidebar.enabled", true);
pref("dom.storage.next_gen", false);
pref("dom.storage.shadow_writes", true);
pref("dom.storage.snapshot_prefill", 16384);
pref("dom.storage.snapshot_reusing", true);
pref("dom.storage_access.auto_grants", true);
pref("dom.storage_access.enabled", true);
pref("dom.storage_access.max_concurrent_auto_grants", 5);
pref("dom.targetBlankNoOpener.enabled", false);
pref("extensions.formautofill.reauth.enabled", false);
pref("gfx.omta.background-color", false);
pref("gfx.webrender.dcomp-win-triple-buffering.enabled", true);
pref("gfx.webrender.debug.slow-frame-indicator", false);
pref("gfx.webrender.debug.texture-cache.clear-evicted", true);
pref("gfx.webrender.picture-caching", false);
pref("image.animated.decode-on-demand.recycle", true);
pref("image.webp.enabled", true);
pref("javascript.options.bigint", false);
pref("layout.css.step-position-jump.enabled", true);
pref("media.av1.use-dav1d", false);
pref("media.getusermedia.use_aec_mobile", false);
pref("media.navigator.mediadatadecoder_vpx_enabled", false);
pref("media.rdd-process.enabled", true);
pref("media.rdd-process.startup_timeout_ms", 5000);
pref("media.test.video-suspend", false);
pref("network.connectivity-service.DNSv4.domain", "mozilla.org");
pref("network.connectivity-service.DNSv6.domain", "mozilla.org");
pref("network.connectivity-service.enabled", true);
pref("network.connectivity-service.IPv4.url", "http://detectportal.firefox.com/success.txt?ipv4");
pref("network.connectivity-service.IPv6.url", "http://detectportal.firefox.com/success.txt?ipv6");
pref("network.http.spdy.enable-hpack-dump", false);
pref("network.http.spdy.websockets", true);
pref("network.IDN.extra_allowed_chars", "");
pref("network.IDN.extra_blocked_chars", "");
pref("network.trr.custom_uri", "");
pref("privacy.popups.maxReported", 100);
pref("privacy.restrict3rdpartystorage.partitionedHosts", "accounts.google.com/o/oauth2/");
pref("privacy.restrict3rdpartystorage.userInteractionRequiredForHosts", "");
pref("security.strict_security_checks.enabled", false);
pref("services.sync.prefs.sync.privacy.fuzzyfox.clockgrainus", false);
pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", false);
pref("toolkit.tabbox.switchByScrolling", false);
pref("urlclassifier.trackingAnnotationSkipURLs", "google.com/recaptcha/,*.google.com/recaptcha/");

// removed, renamed or hidden in v65.0:
pref("app.update.auto", true);
pref("browser.contentblocking.cookies-site-data.ui.reject-trackers.enabled", true);
pref("browser.contentblocking.cookies-site-data.ui.reject-trackers.recommended", true);
pref("browser.contentblocking.enabled", true);
pref("browser.contentblocking.fastblock.control-center.ui.enabled", false);
pref("browser.contentblocking.fastblock.ui.enabled", false);
pref("browser.contentblocking.global-toggle.enabled", false);
pref("browser.contentblocking.rejecttrackers.ui.enabled", true);
pref("browser.contentblocking.rejecttrackers.ui.recommended", true);
pref("browser.contentblocking.trackingprotection.ui.enabled", true);
pref("browser.contentblocking.ui.enabled", true);
pref("browser.fastblock.enabled", false);
pref("browser.fastblock.limit", 20000);
pref("browser.fastblock.timeout", 5000);
pref("browser.fixup.hide_user_pass", true);
pref("browser.schedulePressure.defaultCount", 3);
pref("browser.schedulePressure.enabled", true);
pref("browser.schedulePressure.timeoutMs", 300);
pref("browser.tabs.20FpsThrobber", false);
pref("browser.tabs.30FpsThrobber", false);
pref("browser.urlbar.autocomplete.enabled", true);
pref("browser.urlbar.matchBehavior", 1);
pref("browser.urlbar.suggest.history.onlyTyped", false);
pref("canvas.customfocusring.enabled", false);
pref("canvas.imagebitmap_extensions.enabled", false);
pref("devtools.debugger.features.event-listeners", false);
pref("devtools.debugger.forbid-certified-apps", true);
pref("devtools.debugger.new-debugger-frontend", true);
pref("devtools.inspector.fonteditor.enabled", true);
pref("devtools.performance.profiler.sample-frequency-khz", 1);
pref("dom.browserElement.maxScreenshotDelayMS", 2000);
pref("dom.webcomponents.customelements.enabled", true);
pref("dom.webcomponents.shadowdom.enabled", true);
pref("io.activity.intervalMilliseconds", 0);
pref("layout.css.frames-timing.enabled", false);
pref("layout.css.overflow-break.intrinsic-size", false);
pref("layout.css.shape-outside.enabled", true);
pref("layout.css.text-align-unsafe-value.enabled", false);
pref("media.navigator.mediadatadecoder_enabled", false);
pref("network.IDN.blacklist_chars", "\u0020\u00A0\u00BC\u00BD\u00BE\u01C3\u02D0\u0337\u0338\u0589\u058A\u05C3\u05F4\u0609\u060A\u066A\u06D4\u0701\u0702\u0703\u0704\u115F\u1160\u1735\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u200E\u200F\u2010\u2019\u2024\u2027\u2028\u2029\u202A\u202B\u202C\u202D\u202E\u202F\u2039\u203A\u2041\u2044\u2052\u205F\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215A\u215B\u215C\u215D\u215E\u215F\u2215\u2236\u23AE\u2571\u29F6\u29F8\u2AFB\u2AFD\u2FF0\u2FF1\u2FF2\u2FF3\u2FF4\u2FF5\u2FF6\u2FF7\u2FF8\u2FF9\u2FFA\u2FFB\u3000\u3002\u3014\u3015\u3033\u30A0\u3164\u321D\u321E\u33AE\u33AF\u33C6\u33DF\uA789\uFE14\uFE15\uFE3F\uFE5D\uFE5E\uFEFF\uFF0E\uFF0F\uFF61\uFFA0\uFFF9\uFFFA\uFFFB\uFFFC\uFFFD");
pref("pdfium.enabled", false);
pref("privacy.trackingprotection.introCount", 0);
pref("services.sync.prefs.sync.browser.contentblocking.enabled", true);
pref("services.sync.prefs.sync.browser.urlbar.autocomplete.enabled", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", true);

// changed in v65.0:
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}"); // prev: "{\"id\":\"cfr\",\"enabled\":false,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}"
pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true,\"exclude\":[\"RETURN_TO_AMO_1\"]}"); // prev: "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true}"
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{\"id\":\"snippets\",\"enabled\":true,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"); // prev: "{\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "google"); // prev: ""
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256"
pref("devtools.flexboxinspector.enabled", true); // prev: false
pref("devtools.inspector.changes.enabled", true); // prev: false
pref("devtools.inspector.flexboxHighlighter.enabled", true); // prev: false
pref("devtools.netmonitor.visibleColumns", "[\"status\",\"method\",\"domain\",\"file\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"); // prev: "[\"status\",\"method\",\"file\",\"domain\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"
pref("devtools.webconsole.jsterm.reverse-search", true); // prev: false
pref("dom.keyboardevent.dispatch_during_composition", true); // prev: false
pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content", true); // prev: false
pref("dom.push.alwaysConnect", true); // prev: false
pref("dom.ua_widget.enabled", true); // prev: false
pref("font.name-list.sans-serif.zh-TW", "Arial, PMingLiU, MingLiU, MingLiU-ExtB, Microsoft JhengHei"); // prev: "Arial, Microsoft JhengHei, PMingLiU, MingLiU, MingLiU-ExtB"
pref("geo.provider.ms-windows-location", true); // prev: false
pref("image.animated.generate-full-frames", true); // prev: false
pref("image.http.accept", "image/webp,*/*"); // prev: "*/*"
pref("intl.multilingual.enabled", true); // prev: false
pref("javascript.options.streams", true); // prev: false
pref("media.av1.enabled", true); // prev: false
pref("media.getusermedia.agc", 1); // prev: 3
pref("media.navigator.mediadatadecoder_h264_enabled", true); // prev: false
pref("network.http.accept.default", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"); // prev: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
pref("network.http.send_window_size", 0); // prev: 1024
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/content-blocking/start/"); // prev: "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/"
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256"
