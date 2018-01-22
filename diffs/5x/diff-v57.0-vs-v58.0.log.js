/******************************************************************************************
 * diffs between FF prefs v57.0 and v58.0
 *
 * prefs: 3143
 *        3013 matching prefs
 *         130 diffs ( 63 new, 42 gone, 25 different )
 ******************************************************************************************/
// new in v58.0:
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST");
pref("browser.schedulePressure.defaultCount", 3);
pref("browser.schedulePressure.enabled", true);
pref("browser.schedulePressure.timeoutMs", 1000);
pref("browser.sessionstore.max_write_failures", 5);
pref("browser.urlbar.switchTabs.adoptIntoActiveWindow", false);
pref("browser.xul.error_pages.show_safe_browsing_details_on_load", false);
pref("devtools.changesview.enabled", false);
pref("devtools.debugger.features.column-breakpoints", false);
pref("devtools.debugger.features.project-text-search", true);
pref("devtools.debugger.features.root", false);
pref("devtools.debugger.features.shortcuts", true);
pref("devtools.debugger.project-directory-root", "");
pref("devtools.eventsview.enabled", false);
pref("devtools.flexboxinspector.enabled", false);
pref("devtools.layout.flexbox.opened", true);
pref("devtools.new-animationinspector.enabled", false);
pref("devtools.onboarding.experiment", "off");
pref("devtools.onboarding.experiment.flipped", false);
pref("devtools.onboarding.telemetry.logged", false);
pref("dom.enable_performance_navigation_timing", true);
pref("dom.vr.display.rafMaxDuration", 50);
pref("extensions.formautofill.creditCards.used", 0);
pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120);
pref("general.smoothScroll.msdPhysics.enabled", false);
pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 1250);
pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1000);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 12);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.3");
pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 2000);
pref("gfx.webrender.debug.alpha-primitives", false);
pref("layers.omtp.release-capture-on-main-thread", false);
pref("layout.css.servo.chrome.enabled", false);
pref("layout.display-list.dump-parent", false);
pref("layout.display-list.rebuild-frame-limit", 500);
pref("layout.display-list.retain", false);
pref("media.omt_data_delivery.enabled", true);
pref("media.peerconnection.video.vp9_preferred", false);
pref("media.recorder.audio_node.enabled", false);
pref("media.recorder.video.frame_drops", true);
pref("media.wmf.dxva.d3d11.enabled", true);
pref("media.wmf.dxva.enabled", true);
pref("media.wmf.dxva.max-videos", 8);
pref("media.wmf.play-stand-alone", true);
pref("media.wmf.use-nv12-format", true);
pref("media.wmf.use-sync-texture", true);
pref("mousewheel.debug.make_window_under_cursor_foreground", false);
pref("network.auth.non-web-content-triggered-resources-http-auth-allow", false);
pref("network.cookie.thirdparty.nonsecureSessionOnly", false);
pref("network.http.tls-handshake-timeout", 30);
pref("permissions.default.camera", 0);
pref("permissions.default.desktop-notification", 0);
pref("permissions.default.geo", 0);
pref("permissions.default.microphone", 0);
pref("permissions.default.shortcuts", 0);
pref("privacy.reduceTimerPrecision", false);
pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 20);
pref("services.sync.prefs.sync.privacy.reduceTimerPrecision", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", true);
pref("ui.context_menus.after_mouseup", false);

// removed, renamed or hidden in v58.0:
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
pref("browser.preferences.offlineGroup.enabled", false);
pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 4);
pref("browser.urlbar.lastSuggestionsPromptDate", 20160601);
pref("devtools.debugger.client-source-maps-enabled", true);
pref("devtools.debugger.project-text-search-enabled", true);
pref("devtools.debugger.scopes-visible", false);
pref("devtools.fontinspector.enabled", true);
pref("devtools.inspector.mdnDocsTooltip.enabled", false);
pref("devtools.promote.layoutview", 1);
pref("devtools.promote.layoutview.showPromoteBar", true);
pref("devtools.responsive.html.enabled", true);
pref("devtools.responsiveUI.no-reload-notification", false);
pref("dom.abortController.enabled", true);
pref("dom.abortController.fetch.enabled", true);
pref("dom.allow_named_properties_object_for_xrays", 1);
pref("extensions.e10sBlocksEnabling", true);
pref("extensions.e10sMultiBlocksEnabling", true);
pref("gfx.webrender.layers-free", false);
pref("gfx.webrendest.enabled", false);
pref("idle_queue.long_period", 50);
pref("idle_queue.min_period", 3);
pref("layers.advanced.boxshadow-inset-layers", 2);
pref("layers.advanced.boxshadow-outer-layers", 2);
pref("layers.advanced.button-foreground-layers", 2);
pref("layers.advanced.displaybuttonborder-layers", 2);
pref("layers.advanced.filter-layers", 2);
pref("layout.css.style-attr-with-xml-base.disabled", true);
pref("media.webrtc.debug.aec_log_dir", "");
pref("media.windows-media-foundation.allow-d3d11-dxva", true);
pref("media.windows-media-foundation.use-nv12-format", true);
pref("memory.free_dirty_pages", true);
pref("memory.low_commit_space_threshold_mb", 128);
pref("memory.low_memory_notification_interval_ms", 10000);
pref("memory.low_physical_memory_threshold_mb", 0);
pref("memory.low_virtual_memory_threshold_mb", 128);
pref("network.standard-url.enable-rust", false);
pref("security.onecrl.via.amo", false);
pref("social.directories", "https://activations.cdn.mozilla.net");
pref("social.remote-install.enabled", true);
pref("social.toast-notifications.enabled", true);
pref("social.whitelist", "https://mozsocial.cliqz.com");

// changed in v58.0:
pref("browser.places.useAsyncTransactions", true); // prev: false
pref("browser.search.defaultenginename.US", "data:text/plain,browser.search.defaultenginename.US=Google"); // prev: "data:text/plain,browser.search.defaultenginename.US=Yahoo"
pref("browser.search.order.US.1", "data:text/plain,browser.search.order.US.1=Google"); // prev: "data:text/plain,browser.search.order.US.1=Yahoo"
pref("browser.search.order.US.2", "data:text/plain,browser.search.order.US.2=Yahoo"); // prev: "data:text/plain,browser.search.order.US.2=Google"
pref("browser.tabs.remote.autostart", true); // prev: false
pref("devtools.inspector.shapesHighlighter.enabled", true); // prev: false
pref("dom.ipc.processCount", 4); // prev: 1
pref("dom.ipc.processPrelaunch.enabled", true); // prev: false
pref("dom.script_loader.bytecode_cache.enabled", true); // prev: false
pref("dom.timeout.enable_budget_timer_throttling", true); // prev: false
pref("extensions.formautofill.available", "detect"); // prev: "staged-rollout"
pref("javascript.options.shared_memory", false); // prev: true
pref("javascript.options.wasm_baselinejit", true); // prev: false
pref("layers.advanced.background-color", false); // prev: 2
pref("layers.advanced.caret-layers", false); // prev: 2
pref("layers.advanced.solid-color", false); // prev: 2
pref("layers.advanced.table", false); // prev: 2
pref("layers.omtp.enabled", true); // prev: false
pref("layout.css.font-display.enabled", true); // prev: false
pref("mousewheel.with_alt.action", 2); // prev: 1
pref("mousewheel.with_shift.action", 4); // prev: 2
pref("security.sandbox.content.level", 4); // prev: 3
pref("security.tls.enable_0rtt_data", false); // prev: true
pref("security.use_sqldb", true); // prev: false
pref("webgl.force-index-validation", 0); // prev: false

