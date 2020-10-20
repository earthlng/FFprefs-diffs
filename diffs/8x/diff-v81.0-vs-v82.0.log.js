/******************************************************************************************
 * diffs between FF prefs v81.0 and v82.0
 *
 * prefs: 4156
 *        4076 matching prefs
 *          80 diffs ( 42 new, 22 gone, 16 different )
 ******************************************************************************************/
// new in v82.0:
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-block", "FR");
pref("browser.urlbar.update2.disableOneOffsHorizontalKeyNavigation", false);
pref("browser.urlbar.update2.emptySearchBehavior", 2);
pref("doh-rollout.clearModeOnShutdown", true);
pref("dom.max_script_run_time_without_important_user_input", 10);
pref("dom.media.silence_duration_for_audibility", "2.0");
pref("dom.min_background_timeout_value_without_budget_throttling", 1000);
pref("dom.security.https_only_mode_send_http_background_request", true);
pref("dom.security.sanitizer.enabled", false);
pref("editor.hr_element.allow_to_delete_from_following_line", false);
pref("extensions.pocket.onSaveRecs", true);
pref("extensions.pocket.onSaveRecs.locales", "en-US,en-GB,en-CA");
pref("extensions.postDownloadThirdPartyPrompt", true);
pref("general.smoothScroll.mouseWheel.migrationPercent", 100);
pref("javascript.options.mem.gc_helper_thread_ratio", 50);
pref("javascript.options.mem.gc_max_helper_threads", 8);
pref("javascript.options.off_thread_parse_global", true);
pref("layout.css.counter-ancestor-scope.enabled", true);
pref("layout.css.file-selector-button.enabled", true);
pref("layout.css.is-and-where-better-error-recovery.enabled", false);
pref("media.navigator.video.offer_rtcp_rsize", true);
pref("network.trr.split_horizon_mitigations", true);
pref("print.default_dpi", "144.0");
pref("privacy.window.name.update.enabled", false);
pref("prompts.modalType.httpAuth", 3);
pref("security.caps.allow_uri_is_ui_resource_in_checkloaduriflags", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("services.sync.prefs.sync.browser.sessionstore.warnOnQuit", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", true);
pref("services.sync.prefs.sync.general.autoScroll", true);
pref("services.sync.prefs.sync.general.smoothScroll", true);
pref("services.sync.prefs.sync.media.videocontrols.picture-in-picture.video-toggle.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.newTabContainerOnLeftClick.enabled", true);
pref("services.sync.prefs.sync.ui.osk.enabled", true);
pref("toolkit.aboutProcesses.showAllSubframes", false);
pref("toolkit.aboutProcesses.showThreads", false);
pref("trailhead.firstrun.newtab.triplets", "");
pref("webgl.enable-ahardwarebuffer", false);
pref("webgl.out-of-process.shmem-size", 100000);

// removed, renamed or hidden in v82.0:
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB,DE,IE,CH,AT,BE");
pref("browser.search.geoSpecificDefaults", true);
pref("browser.search.geoSpecificDefaults.url", "https://search.services.mozilla.com/1/%APP%/%VERSION%/%CHANNEL%/%LOCALE%/%REGION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%");
pref("browser.search.modernConfig", true);
pref("devtools.whatsnew.enabled", false);
pref("devtools.whatsnew.feature-enabled", false);
pref("dom.disable_window_open_feature.close", false);
pref("dom.disable_window_open_feature.location", true);
pref("dom.disable_window_open_feature.menubar", false);
pref("dom.disable_window_open_feature.minimizable", false);
pref("dom.disable_window_open_feature.personalbar", false);
pref("dom.disable_window_open_feature.resizable", true);
pref("dom.disable_window_open_feature.status", true);
pref("dom.disable_window_open_feature.titlebar", false);
pref("dom.disable_window_open_feature.toolbar", false);
pref("gfx.webrender.debug.disable-raster-root-scale", false);
pref("layout.css.file-chooser-button.enabled", false);
pref("mathml.legacy_number_syntax.disabled", true);
pref("mathml.nonzero_unitless_lengths.disabled", true);
pref("media.ffmpeg.low-latency.enabled", false);
pref("security.view-source.reachable-from-inner-protocol", false);
pref("trailhead.firstrun.branches", "join-dynamic");

// changed in v82.0:
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"categories\":[\"cfrAddons\",\"cfrFeatures\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA,DE,GB"); // prev: "US,CA,DE"
pref("devtools.netmonitor.features.serverSentEvents", true); // prev: false
pref("dom.block_download_in_sandboxed_iframes", true); // prev: false
pref("dom.document.exec_command.nested_calls_allowed", false); // prev: true
pref("dom.media.mediasession.enabled", true); // prev: false
pref("dom.script_loader.external_scripts.speculative_omt_parse.enabled", true); // prev: false
pref("extensions.formautofill.creditCards.available", true); // prev: false
pref("extensions.formautofill.creditCards.enabled", true); // prev: false
pref("general.smoothScroll.mouseWheel.durationMaxMS", 200); // prev: 400
pref("general.smoothScroll.mouseWheel.durationMinMS", 50); // prev: 200
pref("media.clockdrift.buffering", 50); // prev: 5
pref("media.videocontrols.picture-in-picture.video-toggle.mode", 2); // prev: -1
pref("prompts.tabChromePromptSubDialog", true); // prev: false
pref("services.sync.engine.creditcards.available", true); // prev: false
