/******************************************************************************************
 * diffs between FF prefs v86.0 and v87.0
 *
 * prefs: 4266
 *        4162 matching prefs
 *         104 diffs ( 60 new, 34 gone, 10 different )
 ******************************************************************************************/
// new in v87.0:
pref("apz.nonwr.activate_all_scroll_frames", false);
pref("apz.nonwr.activate_all_scroll_frames_when_fission", false);
pref("apz.prefer_jank_minimal_displayports", true);
pref("apz.wr.activate_all_scroll_frames", false);
pref("apz.wr.activate_all_scroll_frames_when_fission", true);
pref("browser.aboutwelcome.skipFocus", false);
pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true);
pref("browser.proton.toolbar.version", 0);
pref("browser.quitShortcut.disabled", false);
pref("browser.urlbar.keepPanelOpenDuringImeComposition", false);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.showSearchSuggestionsFirst", true);
pref("browser.urlbar.sponsoredTopSites", false);
pref("browser.urlbar.suggest.quicksuggest", true);
pref("dom.enable_event_timing", false);
pref("dom.events.asyncClipboard.clipboardItem", false);
pref("dom.forms.submit.trusted_event_only", false);
pref("dom.quotaManager.directoryRemovalOrRenaming.delayMs", 200);
pref("dom.quotaManager.directoryRemovalOrRenaming.maxRetries", 10);
pref("gfx.color_management.force_srgb", false);
pref("gfx.prefer-x11-egl", false);
pref("gfx.webrender.debug.batched-texture-uploads", true);
pref("gfx.webrender.debug.draw-calls-for-texture-copy", true);
pref("gfx.webrender.fallback.basic", true);
pref("gfx.webrender.fallback.software", false);
pref("gfx.webrender.fallback.software-d3d11", false);
pref("gfx.webrender.prefer-robustness", true);
pref("javascript.options.large_arraybuffers", false);
pref("layout.css.caption-side-non-standard.enabled", false);
pref("layout.css.outline-follows-border-radius.enabled", false);
pref("network.cors_preflight.allow_client_cert", false);
pref("network.dns.limit_253_chars", true);
pref("network.jar.record_failure_reason", true);
pref("network.proxy.reload_pac_delay", 2000);
pref("network.trr.confirmation_telemetry_enabled", true);
pref("network.trr.confirmation_timeout_ms", 6000);
pref("network.trr.odoh.enabled", false);
pref("network.trr.odoh.proxy_uri", "");
pref("network.trr.odoh.target_host", "");
pref("network.trr.odoh.target_path", "");
pref("network.trr.wait-for-confirmation", true);
pref("print.more-settings.open", false);
pref("prompts.windowPromptSubDialog", false);
pref("security.sandbox.content.shadow-stacks-strict", false);
pref("security.sandbox.gmp.shadow-stacks-strict", false);
pref("security.sandbox.gpu.shadow-stacks-strict", false);
pref("security.sandbox.rdd.shadow-stacks-strict", false);
pref("security.sandbox.socket.shadow-stacks-strict", false);
pref("services.sync.prefs.sync.browser.urlbar.resultBuckets", true);
pref("services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst", true);
pref("telemetry.fog.test.activity_limit", 120);
pref("telemetry.fog.test.inactivity_limit", 1200);
pref("timer.ignore_sleep_wake_notifications", false);
pref("widget.gtk.non-native.round-thumb", true);
pref("widget.gtk.non-native.scrollbar.allow-buttons", false);
pref("widget.gtk.non-native.scrollbar.normal-size", 12);
pref("widget.gtk.non-native.scrollbar.thin-size", 6);
pref("widget.gtk.non-native.scrollbar.thumb-cross-size", 40);
pref("widget.gtk.non-native.scrollbar.thumb-size", "0.75");
pref("widget.non-native.use-theme-accent", false);

// removed, renamed or hidden in v87.0:
pref("browser.cache.cache_isolation", false);
pref("browser.library.activity-stream.enabled", true);
pref("browser.preferences.exposeHTTPSOnly", true);
pref("browser.urlbar.imeCompositionClosesPanel", true);
pref("devtools.inspector.new-rulesview.enabled", false);
pref("devtools.target-switching.enabled", true);
pref("dom.events.asyncClipboard.dataTransfer", false);
pref("dom.expose-incomplete-stylesheets", false);
pref("dom.formdata.event.enabled", true);
pref("dom.forms.requestsubmit.enabled", true);
pref("dom.w3c_pointer_events.enabled", true);
pref("dom.w3c_pointer_events.multiprocess.android.enabled", true);
pref("javascript.options.off_thread_parse_global", false);
pref("layers.advanced.basic-layer.enabled", false);
pref("layers.advanced.fission.enabled", false);
pref("layers.mlgpu.enable-buffer-cache", true);
pref("layers.mlgpu.enable-buffer-sharing", true);
pref("layers.mlgpu.enable-clear-view", true);
pref("layers.mlgpu.enable-cpu-occlusion", true);
pref("layers.mlgpu.enabled", false);
pref("layers.mlgpu.enable-depth-buffer", false);
pref("layers.mlgpu.enable-invalidation", true);
pref("layers.mlgpu.enable-on-windows7", true);
pref("layout.css.focus-visible.enabled", true);
pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5);
pref("network.tcp.tcp_fastopen_enable", false);
pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10);
pref("network.tcp.tcp_fastopen_http_stalls_limit", 3);
pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20);
pref("network.trr.early-AAAA", false);
pref("network.trr.wait-for-A-and-AAAA", true);
pref("services.sync.prefs.sync.browser.urlbar.matchBuckets", true);
pref("ui.use_native_colors", true);
pref("webgl.oop.via-pcq", false);

// changed in v87.0:
pref("browser.backspace_action", 2); // prev: 0
pref("browser.topsites.useRemoteSetting", true); // prev: false
pref("devtools.inspector.color-scheme-simulation.enabled", true); // prev: false
pref("dom.input_events.beforeinput.enabled", true); // prev: false
pref("media.cubeb.wasapi-raw", 0); // prev: 1
pref("media.videocontrols.keyboard-tab-to-all-controls", true); // prev: false
pref("network.http.referer.defaultPolicy", 2); // prev: 3
pref("permissions.isolateBy.privateBrowsing", true); // prev: false
pref("print.tab_modal.enabled", true); // prev: false
pref("security.allow_parent_unrestricted_js_loads", false); // prev: true
