/******************************************************************************************
 * diffs between FF prefs v74.0 and v75.0
 *
 * prefs: 3978
 *        3865 matching prefs
 *         113 diffs ( 63 new, 24 gone, 26 different )
 ******************************************************************************************/
// new in v75.0:
pref("browser.aboutwelcome.enabled", false);
pref("browser.aboutwelcome.log", "warn");
pref("browser.cache.disk.content_type_media_limit", 50);
pref("browser.contentblocking.report.lockwise.mobile-android.url", "https://play.google.com/store/apps/details?id=mozilla.lockbox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.lockwise.mobile-ios.url", "https://apps.apple.com/app/id1314000270");
pref("browser.contentblocking.report.mobile-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.mobile-ios.url", "https://apps.apple.com/app/firefox-private-safe-browser/id989804926");
pref("browser.contentblocking.report.show_mobile_app", false);
pref("browser.display.suppress_canvas_background_image_on_forced_colors", true);
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", true);
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA");
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US");
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA");
pref("browser.privatebrowsing.forceMediaMemoryCache", false);
pref("browser.startup.homepage.abouthome_cache.enabled", false);
pref("default-browser-agent.enabled", true);
pref("devtools.debugger.features.async-captured-stacks", false);
pref("devtools.debugger.features.command-click", false);
pref("devtools.performance.popup.intro-displayed", false);
pref("devtools.webconsole.input.context", false);
pref("dom.confirm_repost.testing.always_accept", false);
pref("dom.css_pseudo_element.enabled", false);
pref("dom.document.exec_command.nested_calls_allowed", true);
pref("dom.image-lazy-loading.root-margin.bottom", "0.0");
pref("dom.image-lazy-loading.root-margin.bottom.percentage", false);
pref("dom.image-lazy-loading.root-margin.left", "0.0");
pref("dom.image-lazy-loading.root-margin.left.percentage", false);
pref("dom.image-lazy-loading.root-margin.right", "0.0");
pref("dom.image-lazy-loading.root-margin.right.percentage", false);
pref("dom.image-lazy-loading.root-margin.top", "0.0");
pref("dom.image-lazy-loading.root-margin.top.percentage", false);
pref("dom.IntersectionObserverExplicitDocumentRoot.enabled", false);
pref("dom.reporting.crash.enabled", false);
pref("geo.provider.network.timeToWaitBeforeSending", 5000);
pref("geo.provider-country.network.scan", false);
pref("geo.provider-country.network.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("gfx.webrender.batching.lookback", 10);
pref("gfx.webrender.debug.disable-raster-root-scale", false);
pref("gfx.webrender.dl.dump-content-serialized", false);
pref("layout.css.conic-gradient.enabled", false);
pref("layout.css.focus-visible.enabled", false);
pref("media.eme.require-app-approval", false);
pref("media.mediacontrol.eligible.media.duration.s", "3.0");
pref("media.mediacontrol.stopcontrol.timer.ms", 60000);
pref("media.mediasource.vp9.enabled", true);
pref("network.cookie.sameSite.laxPlusPOST.timeout", 120);
pref("network.cookieJarSettings.unblocked_for_testing", false);
pref("network.http.stale_while_revalidate.enabled", true);
pref("network.trr.fetch_off_main_thread", true);
pref("network.trr.send_empty_accept-encoding_headers", true);
pref("pdfjs.ignoreDestinationZoom", false);
pref("privacy.purge_trackers.enabled", false);
pref("privacy.purge_trackers.logging.enabled", false);
pref("privacy.purge_trackers.max_purge_count", 100);
pref("remote.log.truncate", true);
pref("security.sandbox.socket.win32k-disable", true);
pref("services.sync.extension-storage.skipPercentageChance", 20);
pref("signon.passwordEditCapture.enabled", false);
pref("toolkit.telemetry.geckoview.maxBatchStalenessMS", 60000);
pref("view_source.tab_size", 4);
pref("webgl.power-preference-override", 0);
pref("widget.disable-native-theme-for-content", false);

// removed, renamed or hidden in v75.0:
pref("browser.contentblocking.control-center.ui.showAllowedLabels", false);
pref("browser.contentblocking.control-center.ui.showBlockedLabels", true);
pref("browser.contentblocking.report.lockwise.url", "https://lockwise.firefox.com/?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.newtabpage.activity-stream.discoverystream.lang-layout-config", "en");
pref("browser.search.geoip.timeout", 3000);
pref("browser.search.geoip.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("browser.urlbar.clickSelectsAll", true);
pref("browser.urlbar.doubleClickSelectsAll", false);
pref("devtools.inspector.showUserAgentShadowRoots", false);
pref("devtools.recordreplay.allowRepaintFailures", true);
pref("devtools.recordreplay.cloudServer", "");
pref("devtools.recordreplay.enabled", false);
pref("devtools.recordreplay.fastLogpoints", false);
pref("devtools.recordreplay.includeSystemScripts", false);
pref("devtools.recordreplay.logging", false);
pref("devtools.recordreplay.loggingFull", false);
pref("devtools.recordreplay.mvp.enabled", false);
pref("dom.vr.openvr.action_input", true);
pref("layout.css.webkit-appearance.enabled", true);
pref("network.cookieSettings.unblocked_for_testing", false);
pref("print.use_global_printsettings", true);
pref("security.strict_security_checks.enabled", false);
pref("webgl.default-low-power", true);
pref("widget.disable-native-theme", false);

// changed in v75.0:
pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", true); // prev: false
pref("browser.urlbar.openViewOnFocus", true); // prev: false
pref("browser.urlbar.update1", true); // prev: false
pref("browser.urlbar.update1.interventions", true); // prev: false
pref("browser.urlbar.update1.searchTips", true); // prev: false
pref("browser.urlbar.update1.view.stripHttps", true); // prev: false
pref("devtools.debugger.features.async-live-stacks", true); // prev: false
pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"initiator\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":15}]"); // prev: "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":25}]"
pref("devtools.webconsole.input.eagerEvaluation", true); // prev: false
pref("dom.animations-api.autoremove.enabled", true); // prev: false
pref("dom.animations-api.getAnimations.enabled", true); // prev: false
pref("dom.animations-api.implicit-keyframes.enabled", true); // prev: false
pref("dom.animations-api.timelines.enabled", true); // prev: false
pref("dom.forms.requestsubmit.enabled", true); // prev: false
pref("dom.image-lazy-loading.enabled", true); // prev: false
pref("font.name-list.monospace.zh-HK", "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.sans-serif.zh-HK", "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.serif.zh-HK", "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("gfx.webrender.compositor", true); // prev: false
pref("layout.css.comparison-functions.enabled", true); // prev: false
pref("layout.css.serialize-grid-implicit-tracks", false); // prev: true
pref("security.allow_parent_unrestricted_js_loads", true); // prev: false
pref("security.remote_settings.intermediates.enabled", true); // prev: false
pref("security.tls.version.min", 1); // prev: 3
pref("services.sync.maxResyncs", 1); // prev: 5
pref("toolkit.shutdown.lateWriteChecksStage", 1); // prev: 0
