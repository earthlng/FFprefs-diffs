/******************************************************************************************
 * diffs between FF prefs v94.0 and v95.0
 *
 * prefs: 4379
 *        4316 matching prefs
 *          63 diffs ( 42 new, 14 gone, 7 different )
 ******************************************************************************************/
// new in v95.0:
pref("browser.active_color.dark", "#FF9E9E");
pref("browser.anchor_color.dark", "#9E9EFF");
pref("browser.display.background_color.dark", "#1C1B22");
pref("browser.display.foreground_color.dark", "#FBFBFE");
pref("browser.preferences.moreFromMozilla", false);
pref("browser.soft_reload.only_force_validate_top_level_document", false);
pref("browser.tabs.inTitlebar", 2);
pref("browser.tabs.min_inactive_duration_before_unload", 600000);
pref("browser.theme.content-theme", 2);
pref("browser.urlbar.merino.timeoutMs", 200);
pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.visited_color.dark", "#D0ADF0");
pref("devtools.theme.show-auto-theme-info", true);
pref("dom.crypto.randomUUID.enabled", true);
pref("dom.script_loader.full_parse_max_size", 10485760);
pref("dom.script_loader.full_parse_min_mem", 2);
pref("dom.vr.webxr.quantization", "0.05");
pref("extensions.filterResponseServiceWorkerScript.disabled", false);
pref("fission.processPrivateWindowSiteNames", false);
pref("fission.processSiteNames", false);
pref("gfx.egl.prefer-gles.enabled", false);
pref("gfx.swap-interval.egl", false);
pref("gfx.swap-interval.glx", true);
pref("intl.compare_against_brokered_complex_line_breaks", false);
pref("javascript.options.experimental.enable_change_array_by_copy", false);
pref("javascript.options.wasm_caching", false);
pref("layers.iosurfaceimage.use-nv12", true);
pref("media.mp4.sniff_iso_brand", true);
pref("network.proxy.parse_pac_on_socket_process", false);
pref("network.trr.padding", true);
pref("network.trr.padding.length", 128);
pref("network.url.max-length", 0);
pref("nglayout.debug.disable_xul_cache", false);
pref("privacy.globalprivacycontrol.enabled", false);
pref("privacy.globalprivacycontrol.functionality.enabled", false);
pref("privacy.restrict3rdpartystorage.rollout.preferences.learnMoreURLSuffix", "total-cookie-protection");
pref("privacy.restrict3rdpartystorage.rollout.preferences.TCPToggleInStandard", false);
pref("security.disallow_privileged_https_stylesheet_loads", true);
pref("widget.windows.window_occlusion_tracking.enabled", false);
pref("widget.windows.window_occlusion_tracking_display_state.enabled", false);
pref("widget.windows.window_occlusion_tracking_session_lock.enabled", false);

// removed, renamed or hidden in v95.0:
pref("apz.peek_messages.enabled", true);
pref("browser.tabs.drawInTitlebar", true);
pref("browser.toolbars.bookmarks.2h2020", true);
pref("browser.urlbar.quicksuggest.scenario", "history");
pref("browser.urlbar.suggest.quicksuggest", false);
pref("dom.script_loader.full_parse", false);
pref("fission.processOriginNames", false);
pref("image.mem.allow_locking_in_content_processes", true);
pref("layers.enable-tiles", false);
pref("layers.tile-height", 512);
pref("layers.tiles.adjust", true);
pref("layers.tile-width", 512);
pref("privacy.file_unique_origin", true);
pref("widget.gtk.follow-firefox-theme", true);

// changed in v95.0:
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"moments-page\",\"aboutwelcome\",\"infobar\",\"spotlight\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"aboutwelcome\",\"infobar\",\"spotlight\"],\"updateCycleInMs\":3600000}"
pref("browser.startup.upgradeDialog.enabled", false); // prev: true
pref("devtools.theme", "auto"); // prev: "light"
pref("dom.forms.inputmode", true); // prev: false
pref("layout.css.page-size.enabled", true); // prev: false
pref("layout.css.prefers-color-scheme.content-override", 3); // prev: 2
pref("network.cookie.move.interval_sec", 0); // prev: 10
