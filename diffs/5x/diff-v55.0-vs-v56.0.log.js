/******************************************************************************************
 * diffs between FF prefs v55.0 and v56.0
 *
 * prefs: 3061
 *        2911 matching prefs
 *         150 diffs ( 91 new, 28 gone, 31 different )
 ******************************************************************************************/
// new in v56.0:
pref("accessibility.handler.enabled", true);
pref("app.productInfo.baseURL", "https://www.mozilla.org/firefox/features/");
pref("apz.autoscroll.enabled", false);
pref("apz.frame_delay.enabled", false);
pref("apz.keyboard.enabled", false);
pref("apz.popups.enabled", false);
pref("apz.second_tap_tolerance", "0.5");
pref("browser.onboarding.hidden", false);
pref("browser.onboarding.newtour", "private,addons,customize,search,default,sync");
pref("browser.onboarding.notification.finished", false);
pref("browser.onboarding.notification.max-life-time-per-tour-ms", 432000000);
pref("browser.onboarding.notification.max-prompt-count-per-tour", 8);
pref("browser.onboarding.notification.mute-duration-on-first-session-ms", 300000);
pref("browser.onboarding.tourset-version", 1);
pref("browser.onboarding.updatetour", "");
pref("browser.places.useAsyncTransactions", false);
pref("browser.safebrowsing.provider.google.advisoryName", "Google Safe Browsing.");
pref("browser.safebrowsing.provider.google.advisoryURL", "https://developers.google.com/safe-browsing/v4/advisory");
pref("browser.safebrowsing.provider.google4.advisoryName", "Google Safe Browsing.");
pref("browser.safebrowsing.provider.google4.advisoryURL", "https://developers.google.com/safe-browsing/v4/advisory");
pref("browser.stopReloadAnimation.enabled", true);
pref("browser.tabs.restorebutton", 0);
pref("browser.touchmode.auto", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("devtools.gridinspector.gridOutlineMaxColumns", 50);
pref("devtools.gridinspector.gridOutlineMaxRows", 50);
pref("devtools.gridinspector.showNegativeLineNumbers", false);
pref("devtools.inspector.shapesHighlighter.enabled", false);
pref("devtools.netmonitor.visibleColumns", "[\"status\",\"method\",\"file\",\"domain\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]");
pref("devtools.promote.layoutview", 1);
pref("devtools.promote.layoutview.showPromoteBar", true);
pref("dom.disable_window_showModalDialog", true);
pref("dom.forms.autocomplete.formautofill", false);
pref("dom.gamepad.haptic_feedback.enabled", true);
pref("dom.noopener.newprocess.enabled", true);
pref("dom.performance.time_to_non_blank_paint.enabled", false);
pref("dom.timeout.background_budget_regeneration_rate", 100);
pref("dom.timeout.background_throttling_max_budget", 50);
pref("dom.timeout.budget_throttling_max_delay", 15000);
pref("dom.timeout.enable_budget_timer_throttling", false);
pref("dom.timeout.foreground_budget_regeneration_rate", 1);
pref("dom.timeout.foreground_throttling_max_budget", -1);
pref("dom.timeout.throttling_delay", 30000);
pref("extensions.formautofill.available", "staged-rollout");
pref("extensions.formautofill.creditCards.enabled", true);
pref("extensions.formautofill.firstTimeUse", true);
pref("extensions.webextensions.protocol.remote", true);
pref("gfx.direct3d11.break-on-error", false);
pref("gfx.direct3d11.enable-debug-layer", false);
pref("gfx.webrender.highlight-painted-layers", false);
pref("gfx.webrender.layers-free", false);
pref("gl.use-tls-is-current", 0);
pref("image.layout_network_priority", true);
pref("intl.regional_prefs.use_os_locales", false);
pref("javascript.options.mem.nursery.max_kb", -1);
pref("javascript.options.streams", false);
pref("layers.gpu-process.allow-software", true);
pref("layers.mlgpu.dev-enabled", false);
pref("layers.mlgpu.enable-on-windows7", false);
pref("media.cubeb.logging_level", "");
pref("media.decoder.skip-to-next-key-frame.enabled", true);
pref("media.getusermedia.channels", 0);
pref("media.memory_cache_max_size", 8192);
pref("media.memory_caches_combined_limit_kb", 524288);
pref("media.memory_caches_combined_limit_pc_sysmem", 5);
pref("media.navigator.mediadatadecoder_enabled", false);
pref("media.peerconnection.video.denoising", false);
pref("media.resume-bkgnd-video-on-tabhover", true);
pref("media.windows-media-foundation.use-nv12-format", false);
pref("network.http.active_tab_priority", true);
pref("network.http.on_click_priority", true);
pref("network.http.rcwn.max_wait_before_racing_ms", 500);
pref("network.http.throttle.time-window", 3000);
pref("network.preload", true);
pref("network.standard-url.punycode-host", false);
pref("preferences.allow.omt-write", false);
pref("security.data_uri.block_toplevel_data_uri_navigations", false);
pref("services.sync.engine.addresses", false);
pref("services.sync.engine.addresses.available", false);
pref("services.sync.engine.creditcards", false);
pref("services.sync.engine.creditcards.available", false);
pref("services.sync.log.logger.engine.addresses", "Debug");
pref("services.sync.log.logger.engine.creditcards", "Debug");
pref("toolkit.crashreporter.include_context_heap", false);
pref("toolkit.datacollection.infoURL", "https://www.mozilla.org/legal/privacy/firefox.html");
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.updatePing.enabled", true);
pref("webgl.perf.max-acceptable-fb-status-invals", 0);
pref("webgl.perf.max-warnings", 0);
pref("webgl.perf.spew-frame-allocs", true);
pref("widget.window-transforms.disabled", false);

// removed, renamed or hidden in v56.0:
pref("apz.highlight_checkerboarded_areas", false);
pref("browser.safebrowsing.temporary.take_v4_completion_result", false);
pref("browser.urlbar.match.title", "#");
pref("browser.urlbar.match.url", "@");
pref("browser.urlbar.restrict.bookmark", "*");
pref("browser.urlbar.restrict.history", "^");
pref("browser.urlbar.restrict.openpage", "%");
pref("browser.urlbar.restrict.searches", "$");
pref("browser.urlbar.restrict.tag", "+");
pref("browser.urlbar.restrict.typed", "~");
pref("devtools.gridinspector.showGridOutline", false);
pref("devtools.layoutview.enabled", false);
pref("devtools.netmonitor.hiddenColumns", "[\"cookies\",\"duration\",\"endTime\",\"latency\",\"protocol\",\"remoteip\",\"responseTime\",\"scheme\",\"setCookies\",\"startTime\"]");
pref("dom.forms.autocomplete.experimental", false);
pref("dom.ipc.plugins.asyncInit.enabled", false);
pref("dom.timeout.tracking_throttling_delay", 30000);
pref("extensions.formautofill.experimental", false);
pref("extensions.screenshots.system-disabled", true);
pref("intl.tsf.hack.easy_changjei.do_not_return_no_layout_error", true);
pref("intl.tsf.hack.ms_japanese_ime.do_not_associate_imc_on_win10", false);
pref("layers.gpu-process.max_restarts", 3);
pref("layers.popups.compositing.enabled", false);
pref("media.cubeb.log_level", "");
pref("services.sync.registerEngines", "Bookmarks,Form,History,Password,Prefs,Tab,Addons,ExtensionStorage");
pref("services.sync.sendTabToDevice.enabled", true);
pref("webgl.max-acceptable-fb-status-invals", 0);
pref("webgl.max-perf-warnings", 0);
pref("webrender.highlight-painted-layers", false);

// changed in v56.0:
pref("apz.one_touch_pinch.enabled", true); // prev: false
pref("apz.touch_move_tolerance", "0.1"); // prev: "0.03"
pref("browser.preferences.search", true); // prev: false
pref("browser.preferences.useOldOrganization", false); // prev: true
pref("browser.safebrowsing.provider.google4.gethashURL", "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"); // prev: ""
pref("browser.safebrowsing.provider.mozilla.lists.content.description", "mozfullDesc2"); // prev: "mozfullDesc"
pref("browser.slowStartup.timeThreshold", 30000); // prev: 40000
pref("devtools.debugger.file-search-case-sensitive", false); // prev: true
pref("devtools.debugger.file-search-whole-word", false); // prev: false 
pref("devtools.debugger.new-debugger-frontend", true); // prev: false
pref("devtools.debugger.pending-breakpoints", "{}"); // prev: "[]"
pref("extensions.webextensions.remote", true); // prev: false
pref("media.block-autoplay-until-in-foreground", true); // prev: false
pref("media.decoder-doctor.decode-errors-allowed", ""); // prev: "NS_ERROR_DOM_MEDIA_DEMUXER_ERR, NS_ERROR_DOM_MEDIA_METADATA_ERR"
pref("media.decoder-doctor.decode-warnings-allowed", ""); // prev: "NS_ERROR_DOM_MEDIA_DEMUXER_ERR, NS_ERROR_DOM_MEDIA_METADATA_ERR"
pref("media.eme.chromium-api.video-shmems", 6); // prev: 4
pref("media.seekToNextFrame.enabled", true); // prev: false
pref("network.http.originextension", true); // prev: false
pref("network.http.throttle.enable", true); // prev: false
pref("network.predictor.enable-prefetch", false); // prev: true
pref("security.mixed_content.hsts_priming_request_timeout", 2000); // prev: 3000
pref("security.sandbox.content.level", 3); // prev: 1
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,test-flashallow-simple,testexcept-flashallow-simple,test-flash-simple,testexcept-flash-simple,test-flashsubdoc-simple,testexcept-flashsubdoc-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"
pref("urlclassifier.flashAllowExceptTable", "except-flashallow-digest256"); // prev: "testexcept-flashallow-simple,except-flashallow-digest256"
pref("urlclassifier.flashAllowTable", "allow-flashallow-digest256"); // prev: "test-flashallow-simple,allow-flashallow-digest256"
pref("urlclassifier.flashExceptTable", "except-flash-digest256"); // prev: "testexcept-flash-simple,except-flash-digest256"
pref("urlclassifier.flashSubDocExceptTable", "except-flashsubdoc-digest256"); // prev: "testexcept-flashsubdoc-simple,except-flashsubdoc-digest256"
pref("urlclassifier.flashSubDocTable", "block-flashsubdoc-digest256"); // prev: "test-flashsubdoc-simple,block-flashsubdoc-digest256"
pref("urlclassifier.flashTable", "block-flash-digest256"); // prev: "test-flash-simple,block-flash-digest256"
pref("urlclassifier.update.response_timeout_ms", 30000); // prev: 15000
pref("urlclassifier.update.timeout_ms", 90000); // prev: 60000
