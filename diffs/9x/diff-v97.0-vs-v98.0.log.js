/******************************************************************************************
 * diffs between FF prefs v97.0 and v98.0
 *
 * prefs: 4502
 *        4383 matching prefs
 *         119 diffs ( 59 new, 47 gone, 13 different )
 ******************************************************************************************/
// new in v98.0:
pref("browser.bookmarks.editDialog.delayedApply.enabled", false);
pref("browser.download.clearHistoryOnDelete", 0);
pref("browser.find.ignore_ruby_annotations", true);
pref("browser.history.collectWireframes", false);
pref("browser.newtabpage.activity-stream.colorway-closet.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.fourCardLayout.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.hideCardBackground.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.hybridLayout.enabled", false);
pref("browser.places.speculativeConnect.enabled", true);
pref("browser.privacySegmentation.enabled", false);
pref("browser.privacySegmentation.preferences.learnMoreURLSuffix", "data-features");
pref("browser.privacySegmentation.preferences.show", false);
pref("browser.search.removeEngineInfobar.enabled", true);
pref("browser.search.searchEngineRemoval", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/search-engine-removal");
pref("browser.send_to_device_locales", "de,en-GB,en-US,es-AR,es-CL,es-ES,es-MX,fr,id,pl,pt-BR,ru,zh-TW");
pref("browser.theme.dark-private-windows", false);
pref("browser.urlbar.bestMatch.enabled", true);
pref("devtools.custom-formatters", false);
pref("devtools.custom-formatters.enabled", false);
pref("devtools.performance.recording.active-tab-view.enabled", false);
pref("devtools.popups.debug", false);
pref("dom.fs.enabled", false);
pref("dom.storage.snapshot_idle_timeout_ms", 5000);
pref("dom.storage.snapshot_peak_usage.gradual_preincrement", 4096);
pref("dom.storage.snapshot_peak_usage.initial_preincrement", 16384);
pref("dom.storage.snapshot_peak_usage.reduced_gradual_preincrement", 1024);
pref("dom.storage.snapshot_peak_usage.reduced_initial_preincrement", 4096);
pref("dom.streams.byte_streams.enabled", false);
pref("dom.streams.readable_stream_default_controller.enabled", false);
pref("dom.streams.readable_stream_default_reader.enabled", false);
pref("dom.streams.writable_streams.enabled", false);
pref("dom.testing.testutils.enabled", false);
pref("dom.workers.requestAnimationFrame", false);
pref("general.useragent.forceVersion100", false);
pref("general.useragent.handledVersionExperimentEnrollment", false);
pref("general.utility-process.startup_timeout_ms", 5000);
pref("gfx.offscreencanvas.domain-allowlist", "");
pref("gfx.offscreencanvas.domain-enabled", false);
pref("gfx.webrender.dcomp-video-yuv-overlay-win", false);
pref("gfx.webrender.force-partial-present", false);
pref("gfx.will-change.ignore-opacity", false);
pref("intl.multilingual.liveReload", false);
pref("intl.multilingual.liveReloadBidirectional", false);
pref("intl.tsf.hack.atok.search_input_scope_disabled", false);
pref("javascript.options.wasm_simd_avx", false);
pref("layout.display-list.retain.sc", false);
pref("layout.flexbox.item-final-reflow-optimization.enabled", true);
pref("layout.forms.reveal-password-button.enabled", false);
pref("layout.forms.reveal-password-context-menu.enabled", false);
pref("media.audio.audiosink.threshold_ms", "1000.0");
pref("media.cubeb.sandbox_v2", true);
pref("media.devices.unfocused.enabled", false);
pref("media.ffmpeg.customized-buffer-allocation", false);
pref("network.http.http3.enable", true);
pref("network.http.http3.priority", true);
pref("network.http.http3.send_background_tabs_deprioritization", false);
pref("network.trr.temp_blocklist_duration_sec", 60);
pref("security.sandbox.content.win32k-experiment.enrollmentStatus", 0);
pref("security.sandbox.content.win32k-experiment.startupEnrollmentStatus", 0);

// removed, renamed or hidden in v98.0:
pref("browser.search.official", true);
pref("browser.tabs.remote.serviceWorkerIsolationList", "");
pref("dom.event.wheelDelta.enabled", true);
pref("dom.select_popup_in_parent.enabled", false);
pref("gecko.handlerService.defaultHandlersVersion", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("layout.css.resizeobserver.enabled", true);
pref("layout.forms.input-type-show-password-button.enabled", false);
pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false);
pref("network.dns.use_https_rr_for_speculative_connection", false);
pref("network.http.http3.enabled", true);
pref("network.http.http3.priorization", true);
pref("network.http.http3.send_background_tabs_depriorization", false);
pref("network.trr.blacklist-duration", 60);
pref("security.pki.crlite_ct_merge_delay_seconds", 100800);
pref("widget.gtk.alt-theme.dark", true);

// changed in v98.0:
pref("browser.download.improvements_to_download_panel", true); // prev: false
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"aboutwelcome\",\"infobar\",\"spotlight\",\"moments-page\",\"pbNewtab\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"aboutwelcome\",\"infobar\",\"spotlight\",\"moments-page\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "1,5,7,11,18,20"); // prev: "2,4,11,20"
pref("browser.preferences.moreFromMozilla", true); // prev: false
pref("devtools.inspector.compatibility.enabled", true); // prev: false
pref("devtools.performance.new-panel-enabled", true); // prev: false
pref("dom.dialog_element.enabled", true); // prev: false
pref("dom.webcomponents.formAssociatedCustomElement.enabled", true); // prev: false
pref("javascript.options.wasm_caching", true); // prev: false
pref("layout.css.hyphenate-character.enabled", true); // prev: false
pref("media.eme.max-throughput-ms", 500); // prev: 200
pref("media.videocontrols.picture-in-picture.video-toggle.visibility-threshold", "1.0"); // prev: "0.9"
pref("widget.windows.window_occlusion_tracking.enabled", true); // prev: false
