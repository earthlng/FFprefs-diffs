/******************************************************************************************
 * diffs between FF prefs v92.0 and v93.0
 *
 * prefs: 4387
 *        4290 matching prefs
 *          97 diffs ( 52 new, 30 gone, 15 different )
 ******************************************************************************************/
// new in v93.0:
pref("browser.newtabpage.activity-stream.asrouter.disable-captive-portal-vpn-promo", false);
pref("browser.places.interactions.scrolling_timeout_ms", 5000);
pref("browser.tabs.remote.subframesPreferUsed", true);
pref("browser.tabs.remote.systemTriggeredAboutBlankAnywhere", false);
pref("browser.urlbar.merino.enabled", false);
pref("browser.urlbar.merino.endpointURL", "https://merino.services.mozilla.com/api/v1/suggest");
pref("browser.urlbar.quicksuggest.remoteSettings.enabled", true);
pref("browser.urlbar.quicksuggest.scenario", "history");
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
pref("dom.events.coalesce.mousemove", true);
pref("dom.keyboardevent.init_key_event.enabled", false);
pref("dom.keyboardevent.init_key_event.enabled_in_addons", true);
pref("dom.quotaManager.checkQuotaInfoLoadTime", true);
pref("dom.quotaManager.longQuotaInfoLoadTimeThresholdMs", 21000);
pref("dom.quotaManager.unaccessedForLongTimeThresholdSec", 33696000);
pref("dom.security.https_only_check_path_upgrade_downgrade_endless_loop", true);
pref("dom.serviceWorkers.mitigations.group_usage_headroom_kb", 409600);
pref("dom.webcomponents.elementInternals.enabled", true);
pref("dom.weblocks.enabled", false);
pref("gfx.webrender.debug.blob.paint-flashing", false);
pref("gfx.webrender.debug.dl.dump-content", false);
pref("gfx.webrender.debug.dl.dump-content-serialized", false);
pref("gfx.webrender.debug.dl.dump-parent", false);
pref("gfx.webrender.debug.enable-capture", false);
pref("gfx.webrender.debug.highlight-painted-layers", false);
pref("javascript.options.experimental.class_static_blocks", true);
pref("javascript.options.mem.gc_malloc_threshold_base_mb", 38);
pref("javascript.options.mem.gc_urgent_threshold_mb", 16);
pref("javascript.options.use_fdlibm_for_sin_cos_tan", false);
pref("layout.css.bucket-attribute-names.enabled", true);
pref("layout.css.cascade-layers.enabled", false);
pref("layout.css.color-mix.color-spaces.enabled", false);
pref("layout.css.computed-style.new-invalid-pseudo-element-behavior", true);
pref("layout.css.font-synthesis-small-caps.enabled", true);
pref("layout.css.prefers-color-scheme.content-override", 2);
pref("media.clearkey.test-key-systems.enabled", false);
pref("media.eme.max-throughput-ms", 200);
pref("network.auth.allow_multiple_challenges_same_line", true);
pref("network.auth.use_new_parse_realm", true);
pref("network.http.http3.max_data", 25165824);
pref("network.http.http3.max_stream_data", 12582912);
pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true);
pref("pdfjs.annotationMode", 2);
pref("privacy.antitracking.cacheStorageAllowedForWindow", true);
pref("privacy.antitracking.enableWebcompat", true);
pref("security.crash_tracking.js_load_1.maxCrashes", 0);
pref("security.crash_tracking.js_load_1.prevCrashes", 0);
pref("security.disallow_privileged_data_subdocuments_loads", false);
pref("security.disallow_privileged_https_subdocuments_loads", true);
pref("security.ssl3.deprecated.rsa_des_ede3_sha", true);
pref("webgl.auto-flush", true);
pref("webgl.auto-flush.gl", false);

// removed, renamed or hidden in v93.0:
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.filterAdult", true);
pref("dom.event.coalesce_mouse_move", true);
pref("gfx.basic_layer_manager.force_enabled", false);
pref("gfx.use-glx-texture-from-pixmap", false);
pref("gfx.webrender.blob.paint-flashing", false);
pref("gfx.webrender.dl.dump-content", false);
pref("gfx.webrender.dl.dump-content-serialized", false);
pref("gfx.webrender.dl.dump-parent", false);
pref("gfx.webrender.enable-capture", false);
pref("gfx.webrender.fallback.basic", false);
pref("gfx.webrender.force-legacy-layers", false);
pref("gfx.webrender.highlight-painted-layers", false);
pref("gfx.webrender.software.unaccelerated-widget.allow", true);
pref("layers.enable-tiles-if-skia-pomtp", true);
pref("layers.omtp.capture-limit", 26214400);
pref("layers.omtp.dump-capture", false);
pref("layers.omtp.enabled", false);
pref("layers.omtp.paint-workers", -1);
pref("layers.omtp.release-capture-on-main-thread", false);
pref("layers.progressive-paint", false);
pref("layout.css.bloom-filter-attribute-names.enabled", true);
pref("layout.css.computed-style.throw-on-invalid-pseudo", false);
pref("layout.css.DOMMatrix.enabled", true);
pref("layout.css.DOMPoint.enabled", true);
pref("layout.css.DOMQuad.enabled", true);
pref("layout.css.is-and-where-better-error-recovery.enabled", true);
pref("pdfjs.renderInteractiveForms", true);
pref("privacy.storagePrincipal.enabledForTrackers", false);
pref("security.ssl3.rsa_des_ede3_sha", true);

// changed in v93.0:
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp"); // prev: "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2"
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"aboutwelcome\",\"infobar\",\"spotlight\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"cfr-fxa\",\"aboutwelcome\",\"infobar\"],\"updateCycleInMs\":3600000}"
pref("browser.tabs.unloadOnLowMemory", true); // prev: false
pref("browser.urlbar.quicksuggest.showOnboardingDialogAfterNRestarts", 0); // prev: 2
pref("browser.urlbar.suggest.quicksuggest", false); // prev: true
pref("devtools.target-switching.server.enabled", true); // prev: false
pref("dom.block_download_insecure", true); // prev: false
pref("dom.forms.datetime-local", true); // prev: false
pref("dom.forms.datetime-local.widget", true); // prev: false
pref("gfx.content.azure.backends", "skia"); // prev: "direct2d1.1,skia"
pref("image.avif.compliance_strictness", 1); // prev: 0
pref("image.avif.enabled", true); // prev: false
pref("pdfjs.enableXfa", true); // prev: false
pref("security.sandbox.rdd.shadow-stack.enabled", true); // prev: false
pref("security.sandbox.socket.shadow-stack.enabled", true); // prev: false
