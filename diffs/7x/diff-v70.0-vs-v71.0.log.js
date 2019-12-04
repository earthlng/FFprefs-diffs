/******************************************************************************************
 * diffs between FF prefs v70.0 and v71.0
 *
 * prefs: 3850
 *        3696 matching prefs
 *         154 diffs ( 72 new, 43 gone, 39 different )
 ******************************************************************************************/
// new in v71.0:
pref("accessibility.heading-element-level-changes.enabled", false);
pref("browser.cache.offline.storage.enable", true);
pref("browser.contentblocking.cfr-milestone.enabled", true);
pref("browser.contentblocking.cfr-milestone.milestone-achieved", 0);
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 500000]");
pref("browser.display.permit_backplate", false);
pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", true);
pref("browser.newtabpage.activity-stream.discoverystream.campaign.blocks", "{}");
pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
pref("browser.search.separatePrivateDefault.ui.enabled", false);
pref("browser.search.suggest.enabled.private", false);
pref("browser.tabs.documentchannel", false);
pref("devtools.browserconsole.input.editor", false);
pref("devtools.contenttoolbox.fission", false);
pref("devtools.debugger.features.overlay", true);
pref("devtools.debugger.features.watchpoints", false);
pref("devtools.debugger.log-event-breakpoints", false);
pref("devtools.inspector.compatibility.enabled", false);
pref("devtools.inspector.use-new-box-model-highlighter", false);
pref("devtools.layout.flex-container.opened", true);
pref("devtools.layout.flex-item.opened", true);
pref("devtools.netmonitor.features.requestBlocking", true);
pref("devtools.responsive.browserUI.enabled", false);
pref("devtools.target-switching.enabled", false);
pref("devtools.whatsnew.enabled", true);
pref("devtools.whatsnew.feature-enabled", true);
pref("dom.formdata.event.enabled", false);
pref("dom.media.mediasession.enabled", false);
pref("dom.missing_prop_counters.enabled", false);
pref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);
pref("dom.user_activation.transient.timeout", 5000);
pref("dom.webshare.enabled", false);
pref("extensions.abuseReport.amoDetailsURL", "https://services.addons.mozilla.org/api/v4/addons/addon/");
pref("extensions.abuseReport.amWebAPI.enabled", true);
pref("extensions.abuseReport.openDialog", false);
pref("first-startup.timeout", 30000);
pref("general.aboutConfig.enable", true);
pref("gfx.text.subpixel-position.force-disabled", false);
pref("gfx.text.subpixel-position.force-enabled", false);
pref("gfx.webrender.debug.dcomp-counter", false);
pref("gfx.webrender.debug.dcomp-redraw-regions", false);
pref("gfx.webrender.debug.obscure-images", false);
pref("gfx.webrender.debug.smart-profiler", false);
pref("identity.sendtabpromo.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/send-tab");
pref("idle_period.cross_process_scheduling", true);
pref("javascript.options.main_thread_stack_quota_cap", 2097152);
pref("javascript.options.wasm_trustedprincipals", true);
pref("layout.css.moz-touch-enabled.enabled", true);
pref("layout.css.scroll-anchoring.suppressions.enabled", true);
pref("layout.css.xul-box-display-values.survive-blockification.enabled", true);
pref("mathml.deprecated_alignment_attributes.disabled", false);
pref("mathml.deprecated_menclose_notation_radical.disabled", false);
pref("mathml.mfenced_element.disabled", false);
pref("mathml.mfrac_bevelled_attribute.disabled", false);
pref("mathml.script_shift_attributes.disabled", false);
pref("mathml.xlink.disabled", false);
pref("media.ffvpx.mp3.enabled", true);
pref("media.hardwaremediakeys.enabled", false);
pref("media.peerconnection.dtls.version.max", 771);
pref("media.peerconnection.dtls.version.min", 770);
pref("media.webrtc.hw.h264.enabled", false);
pref("network.auth.confirmAuth.enabled", false);
pref("network.http.proxy.respect-be-conservative", true);
pref("network.notify.dnsSuffixList", true);
pref("network.psl.onUpdate_notify", false);
pref("network.trr.builtin-excluded-domains", "localhost,local");
pref("network.trr.clear-cache-on-pref-change", true);
pref("permissions.delegation.enable", false);
pref("security.csp.enableNavigateTo", false);
pref("security.tls.version.enable-deprecated", false);
pref("signon.management.page.sort", "name");
pref("toolkit.telemetry.testing.overrideProductsCheck", false);

// removed, renamed or hidden in v71.0:
pref("app.productInfo.baseURL", "https://www.mozilla.org/firefox/features/");
pref("apz.pinch_lock.scoll_lock_threshold", "0.03125");
pref("browser.cache.offline.insecure.enable", false);
pref("browser.offline-apps.notify", true);
pref("devtools.connectpage.enabled", false);
pref("devtools.debugger.features.overlay-step-buttons", false);
pref("devtools.responsive.show-setting-tooltip", true);
pref("devtools.webconsole.features.editor", false);
pref("devtools.webide.autoConnectRuntime", true);
pref("devtools.webide.autoinstallADBExtension", true);
pref("devtools.webide.busyTimeout", 10000);
pref("devtools.webide.enabled", false);
pref("devtools.webide.enableLocalRuntime", false);
pref("devtools.webide.lastConnectedRuntime", "");
pref("devtools.webide.lastSelectedProject", "");
pref("devtools.webide.restoreLastProject", true);
pref("devtools.webide.templatesURL", "https://code.cdn.mozilla.net/templates/list.json");
pref("devtools.webide.zoom", "1");
pref("dom.disable_window_showModalDialog", true);
pref("dom.event.handling-user-input-time-limit", 1000);
pref("dom.xmldocument.async.enabled", false);
pref("dom.xmldocument.load.enabled", false);
pref("extensions.cookiesBehavior.overrideOnTopLevel", false);
pref("general.useragent.site_specific_overrides", true);
pref("general.warnOnAboutConfig", true);
pref("gfx.webrender.start-debug-server", false);
pref("layout.css.prefixes.device-pixel-ratio-webkit", true);
pref("layout.css.scroll-snap.enabled", false);
pref("layout.css.scroll-snap-v1.enabled", true);
pref("layout.scroll.root-frame-containers", false);
pref("network.delay.tracking.load", 0);
pref("network.warnOnAboutNetworking", false);
pref("offline-apps.allow_by_default", true);
pref("offline-apps.quota.warn", 51200);
pref("plugins.load_appdir_plugins", false);
pref("privacy.socialtracking.notification.counter", 0);
pref("privacy.socialtracking.notification.enabled", true);
pref("privacy.socialtracking.notification.lastShown", "0");
pref("privacy.socialtracking.notification.max", 2);
pref("privacy.socialtracking.notification.period.min", 172800000);
pref("privacy.socialtracking.notification.session.pageload.min", 4);
pref("services.sync.fxa.privacyURL", "https://accounts.firefox.com/legal/privacy");
pref("services.sync.fxa.termsURL", "https://accounts.firefox.com/legal/terms");

// changed in v71.0:
pref("app.update.staging.enabled", false); // prev: true
pref("apz.axis_lock.breakout_angle", "0.392699"); // prev: "0.3926991"
pref("apz.axis_lock.direct_pan_angle", "1.0472"); // prev: "1.047197"
pref("apz.axis_lock.lock_angle", "0.523599"); // prev: "0.5235987"
pref("apz.fling_curve_function_x1", "0.0"); // prev: "0"
pref("apz.fling_curve_function_x2", "1.0"); // prev: "1"
pref("apz.fling_curve_function_y1", "0.0"); // prev: "0"
pref("apz.fling_curve_function_y2", "1.0"); // prev: "1"
pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000,\"exclude\":[\"EXTENDED_TRIPLETS_PRETRAILHEAD\"]}"); // prev: "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":false,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":false,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":false,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.tabs.remote.separatedMozillaDomains", "addons.cdn.mozilla.net,addons.mozilla.org,accounts.firefox.com"); // prev: "addons.mozilla.org,accounts.firefox.com"
pref("devtools.debugger.features.inline-preview", true); // prev: false
pref("devtools.netmonitor.features.search", true); // prev: false
pref("devtools.netmonitor.features.webSockets", true); // prev: false
pref("dom.datatransfer.mozAtAPIs", false); // prev: true
pref("dom.storage.next_gen", false); // prev: true
pref("extensions.abuseReport.url", "https://services.addons.mozilla.org/api/v4/abuse/report/addon/"); // prev: "https://addons.mozilla.org/api/v4/abuse/report/addon/"
pref("image.mem.surfacecache.max_size_kb", 2072576); // prev: 1048576
pref("layers.effect.contrast", "0.0"); // prev: "0"
pref("layers.low-precision-opacity", "1.0"); // prev: "1"
pref("layout.accessiblecaret.height", "36.0"); // prev: "36"
pref("layout.accessiblecaret.width", "34.0"); // prev: "34"
pref("layout.css.clip-path-path.enabled", true); // prev: false
pref("layout.css.column-span.enabled", true); // prev: false
pref("layout.css.devPixelsPerPx", "-1.0"); // prev: "-1"
pref("layout.css.grid-template-subgrid-value.enabled", true); // prev: false
pref("layout.css.line-height.normal-as-resolved-value.enabled", true); // prev: false
pref("layout.css.scroll-snap.prediction-sensitivity", "0.75"); // prev: "0.750"
pref("layout.css.width-and-height-map-to-aspect-ratio.enabled", true); // prev: false
pref("media.mediacapabilities.from-database", false); // prev: true
pref("media.videocontrols.picture-in-picture.enabled", true); // prev: false
pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true); // prev: false
pref("network.trr.excluded-domains", ""); // prev: "localhost,local"
pref("security.aboutcertificate.enabled", true); // prev: false
pref("security.ssl.errorReporting.enabled", false); // prev: true
pref("signon.includeOtherSubdomainsInLookup", true); // prev: false
pref("signon.showAutoCompleteOrigins", true); // prev: false
pref("trailhead.firstrun.branches", ""); // prev: "join-supercharge"
pref("webgl.dxgl.enabled", false); // prev: true
