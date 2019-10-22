/******************************************************************************************
 * diffs between FF prefs v69.0 and v70.0
 *
 * prefs: 3830
 *        3541 matching prefs
 *         289 diffs ( 200 new, 52 gone, 37 different )
 ******************************************************************************************/
// new in v70.0:
pref("browser.cache.cache_isolation", false);
pref("browser.cache.memory.capacity", -1);
pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false);
pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report");
pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report");
pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report");
pref("browser.contentblocking.report.lockwise.enabled", true);
pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report");
pref("browser.contentblocking.report.lockwise.url", "https://lockwise.firefox.com/?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients");
pref("browser.contentblocking.report.monitor.enabled", true);
pref("browser.contentblocking.report.monitor.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/monitor-faq");
pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email=");
pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections");
pref("browser.contentblocking.report.proxy.enabled", false);
pref("browser.contentblocking.report.proxy_extension.url", "https://fpn.firefox.com/browser?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report");
pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report");
pref("browser.fixup.typo.scheme", true);
pref("browser.messaging-system.fxatoolbarbadge.enabled", true);
pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", false);
pref("browser.search.separatePrivateDefault", false);
pref("browser.tabs.remote.force-paint", true);
pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", false);
pref("browser.urlbar.megabar", false);
pref("content.cors.disable", false);
pref("content.notify.backoffcount", -1);
pref("content.notify.interval", 120000);
pref("content.notify.ontimer", true);
pref("content.sink.enable_perf_mode", 0);
pref("content.sink.event_probe_rate", 1);
pref("content.sink.initial_perf_time", 2000000);
pref("content.sink.interactive_deflect_count", 0);
pref("content.sink.interactive_parse_time", 3000);
pref("content.sink.interactive_time", 750000);
pref("content.sink.pending_event_mode", 0);
pref("content.sink.perf_deflect_count", 200);
pref("content.sink.perf_parse_time", 360000);
pref("device.sensors.test.events", false);
pref("devtools.browserconsole.input.editorWidth", 0);
pref("devtools.browsertoolbox.fission", false);
pref("devtools.connectpage.enabled", false);
pref("devtools.debugger.dom-mutation-breakpoints-visible", false);
pref("devtools.debugger.features.dom-mutation-breakpoints", true);
pref("devtools.debugger.features.inline-preview", false);
pref("devtools.debugger.features.overlay-step-buttons", false);
pref("devtools.netmonitor.features.search", false);
pref("devtools.netmonitor.panes-search-height", 450);
pref("devtools.netmonitor.panes-search-width", 550);
pref("devtools.netmonitor.ws.displayed-frames.limit", 500);
pref("devtools.netmonitor.ws.messageDataLimit", 100000);
pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]");
pref("devtools.popup.disable_autohide", false);
pref("devtools.recordreplay.logging", false);
pref("devtools.recordreplay.loggingFull", false);
pref("devtools.storage.extensionStorage.enabled", true);
pref("devtools.toolbox.content-frame", true);
pref("devtools.toolbox.force-chrome-prefs", true);
pref("devtools.webconsole.input.editorOnboarding", true);
pref("devtools.webconsole.input.editorWidth", 0);
pref("dom.allow_XUL_XBL_for_file", false);
pref("dom.block_reload_from_resize_event_handler", true);
pref("dom.capture.enabled", false);
pref("dom.enable_window_print", true);
pref("dom.events.dataTransfer.protected.enabled", false);
pref("dom.events.user_interaction_interval", 5000);
pref("dom.forms.number.grouping", false);
pref("dom.ipc.cpows.log.enabled", false);
pref("dom.ipc.cpows.log.stack", false);
pref("dom.ipc.processPrelaunch.delayMs", 1000);
pref("dom.ipc.processPriorityManager.backgroundGracePeriodMS", 0);
pref("dom.ipc.processPriorityManager.backgroundPerceivableGracePeriodMS", 0);
pref("dom.ipc.processPriorityManager.testMode", false);
pref("dom.ipc.tabs.disabled", false);
pref("dom.largeAllocation.testing.allHttpLoads", false);
pref("dom.maxtouchpoints.testing.value", -1);
pref("dom.quotaManager.loadQuotaFromCache", true);
pref("dom.quotaManager.temporaryStorage.chunkSize", 10240);
pref("dom.quotaManager.temporaryStorage.fixedLimit", -1);
pref("dom.securecontext.whitelist_onions", false);
pref("dom.security.respect_document_nosniff", false);
pref("dom.storage.abort_on_sync_parent_to_child_messages", false);
pref("dom.testing.sync-content-blocking-notifications", false);
pref("dom.w3c_pointer_events.multiprocess.android.enabled", true);
pref("dom.webidl.test1", true);
pref("dom.webidl.test2", true);
pref("dom.webnotifications.allowcrossoriginiframe", false);
pref("dom.window.history.async", true);
pref("editor.password.mask_delay", -1);
pref("editor.password.testing.mask_delay", false);
pref("geo.timeout", 6000);
pref("gfx.blocklist.all", 0);
pref("gfx.core-animation.enabled", false);
pref("gfx.font_rendering.ahem_antialias_none", false);
pref("gfx.webrender.flip-sequential", false);
pref("gfx.webrender.triple-buffering.enabled", true);
pref("identity.fxaccounts.service.monitorLoginUrl", "https://monitor.firefox.com/");
pref("identity.fxaccounts.service.sendLoginUrl", "https://send.firefox.com/login/");
pref("idle_period.during_page_load.min", 12);
pref("idle_period.min", 3);
pref("javascript.options.blinterp", true);
pref("javascript.options.blinterp.threshold", 10);
pref("javascript.options.gc_delay", 4000);
pref("javascript.options.gc_delay.first", 10000);
pref("javascript.options.gc_delay.full", 60000);
pref("javascript.options.gc_delay.interslice", 100);
pref("javascript.options.mem.gc_avoid_interrupt_factor", 100);
pref("javascript.options.mem.gc_non_incremental_factor", 112);
pref("layers.compositing-tiles.height", 1024);
pref("layers.compositing-tiles.width", 1024);
pref("layers.d3d11.enable-blacklist", true);
pref("layout.css.aspect-ratio-number.enabled", false);
pref("layout.css.text-decoration-thickness.enabled", true);
pref("layout.css.use-counters-unimplemented.enabled", false);
pref("layout.framevisibility.amountscrollbeforeupdatehorizontal", 2);
pref("layout.framevisibility.amountscrollbeforeupdatevertical", 2);
pref("layout.reflow.synthMouseMove", true);
pref("layout.show_previous_page", true);
pref("layout.viewport_contains_no_contents_area", false);
pref("mathml.deprecated_style_attributes.disabled", false);
pref("mathml.legacy_number_syntax.disabled", true);
pref("mathml.mathsize_names.disabled", false);
pref("mathml.mathspace_names.disabled", false);
pref("mathml.mfrac_linethickness_names.disabled", false);
pref("mathml.nonzero_unitless_lengths.disabled", true);
pref("media.audioFocus.management", false);
pref("media.cloneElementVisually.testing", false);
pref("media.mediacapabilities.drop-threshold", 95);
pref("media.mediacapabilities.from-database", true);
pref("media.peerconnection.ice.obfuscate_host_addresses", false);
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false);
pref("media.peerconnection.mtransport_process", false);
pref("media.rdd-opus.enabled", false);
pref("media.rdd-wav.enabled", false);
pref("media.webrtc.net.force_disable_rtcp_reception", false);
pref("media.webrtc.platformencoder", false);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.dns.skipTRR-when-parental-control-enabled", true);
pref("network.http.altsvc.proxy_checks", true);
pref("network.http.referer.referrerLengthLimit", 4096);
pref("network.http.spdy.bug1556491", true);
pref("network.http.spdy.bug1563695", true);
pref("network.netlink.route.check.IPv4", "23.219.91.27");
pref("network.netlink.route.check.IPv6", "2a02:26f0:40::17db:5b1b");
pref("network.trr.request_timeout_mode_trronly_ms", 30000);
pref("network.trr.request_timeout_ms", 1500);
pref("page_load.deprioritization_period", 5000);
pref("permissions.desktop-notification.notNow.enabled", false);
pref("permissions.fullscreen.allowed", false);
pref("privacy.firstparty.isolate.block_post_message", false);
pref("privacy.fuzzyfox.clockgrainus", 100);
pref("privacy.reduceTimerPrecision.unconditional", true);
pref("privacy.resistFingerprinting.target_video_res", 480);
pref("privacy.restrict3rdpartystorage.console.lazy", true);
pref("privacy.socialtracking.block_cookies.enabled", true);
pref("privacy.socialtracking.notification.counter", 0);
pref("privacy.socialtracking.notification.enabled", true);
pref("privacy.socialtracking.notification.lastShown", "0");
pref("privacy.socialtracking.notification.max", 2);
pref("privacy.socialtracking.notification.period.min", 172800000);
pref("privacy.socialtracking.notification.session.pageload.min", 4);
pref("security.aboutcertificate.enabled", false);
pref("security.all_resource_uri_content_accessible", false);
pref("security.allow_eval_in_parent_process", false);
pref("security.allow_eval_with_system_principal", false);
pref("security.block_Worker_with_wrong_mime", false);
pref("security.identityblock.show_extended_validation", false);
pref("security.protectionspopup.recordEventTelemetry", true);
pref("security.remote_settings.crlite_filters.bucket", "security-state");
pref("security.remote_settings.crlite_filters.checked", 0);
pref("security.remote_settings.crlite_filters.collection", "cert-revocations");
pref("security.remote_settings.crlite_filters.enabled", false);
pref("security.remote_settings.crlite_filters.signer", "onecrl.content-signature.mozilla.org");
pref("security.sandbox.content.win32k-disable", false);
pref("security.secure_connection_icon_color_gray", true);
pref("security.tls.enable_delegated_credentials", false);
pref("services.common.log.logger.rest.request", "Debug");
pref("services.common.log.logger.rest.response", "Debug");
pref("services.common.log.logger.tokenserverclient", "Debug");
pref("signon.management.overrideURI", "about:logins?filter=%DOMAIN%");
pref("signon.management.page.breach-alerts.enabled", true);
pref("signon.management.page.breachAlertUrl", "https://monitor.firefox.com/breach-details/");
pref("signon.management.page.hideMobileFooter", false);
pref("signon.management.page.mobileAndroidURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.mobileAppleURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("toolkit.telemetry.geckoview.batchDurationMS", 5000);
pref("toolkit.telemetry.geckoview.streaming", false);
pref("toolkit.telemetry.ipcBatchTimeout", 2000);
pref("toolkit.telemetry.isGeckoViewMode", false);
pref("ui.scrolling.negate_wheel_scroll", false);
pref("urlclassifier.features.cryptomining.annotate.blacklistTables", "base-cryptomining-track-digest256");
pref("urlclassifier.features.cryptomining.annotate.whitelistTables", "mozstd-trackwhite-digest256");
pref("urlclassifier.features.fingerprinting.annotate.blacklistTables", "base-fingerprinting-track-digest256");
pref("urlclassifier.features.fingerprinting.annotate.whitelistTables", "mozstd-trackwhite-digest256");
pref("urlclassifier.features.socialtracking.annotate.blacklistTables", "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
pref("urlclassifier.features.socialtracking.annotate.whitelistTables", "mozstd-trackwhite-digest256");
pref("urlclassifier.features.socialtracking.blacklistTables", "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
pref("urlclassifier.features.socialtracking.whitelistTables", "mozstd-trackwhite-digest256");
pref("widget.disable-native-theme", false);

// removed, renamed or hidden in v70.0:
pref("abc.def", true);
pref("apz.overscroll.spring_friction", "0.015");
pref("apz.overscroll.spring_stiffness", "0.0018");
pref("browser.cache.compression_level", 0);
pref("browser.cache.frecency_experiment", 0);
pref("browser.contentblocking.allowlist.annotations.enabled", true);
pref("browser.contentblocking.allowlist.storage.enabled", true);
pref("browser.contentblocking.introCount", 0);
pref("browser.contentblocking.introDelaySeconds", 1800);
pref("browser.contentblocking.maxIntroCount", 0);
pref("browser.contentblocking.rejecttrackers.control-center.ui.enabled", true);
pref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", true);
pref("browser.contentblocking.reportBreakage.enabled", false);
pref("browser.contentblocking.trackingprotection.control-center.ui.enabled", true);
pref("browser.security.newcerterrorpage.mitm.enabled", true);
pref("browser.tabs.remote.useCrossOriginPolicy", false);
pref("browser.urlbar.quantumbar", true);
pref("devtools.aboutdebugging.new-enabled", true);
pref("devtools.debugger.features.windowless-workers", true);
pref("devtools.netmonitor.features.resizeColumns", true);
pref("devtools.netmonitor.ws.payload-preview-width", 550);
pref("devtools.onboarding.experiment", "off");
pref("devtools.onboarding.experiment.flipped", false);
pref("devtools.onboarding.telemetry.logged", false);
pref("devtools.webconsole.jsterm.codeMirror", true);
pref("dom.min_tracking_background_timeout_value", 4);
pref("dom.min_tracking_timeout_value", 4);
pref("dom.xhr.lowercase_header.enabled", true);
pref("gfx.font_ahem_antialias_none", false);
pref("gfx.webrender.dcomp-win-triple-buffering.enabled", true);
pref("ghi.jkl", true);
pref("javascript.options.bigint", true);
pref("javascript.options.mem.gc_allocation_threshold_factor", 90);
pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90);
pref("javascript.options.mem.high_water_mark", 128);
pref("javascript.options.unboxed_objects", false);
pref("layout.css.paint-order.enabled", true);
pref("layout.css.text-decoration-width.enabled", false);
pref("layout.float-fragments-inside-column.enabled", true);
pref("network.trr.request-timeout", 1500);
pref("plugin.persistentPermissionAlways.intervalInDays", 90);
pref("plugin.sessionPermissionNow.intervalInMinutes", 60);
pref("privacy.trackingprotection.cryptomining.annotate.enabled", true);
pref("privacy.trackingprotection.fingerprinting.annotate.enabled", true);
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/content-blocking/start/");
pref("privacy.trackingprotection.socialtracking.annotate.enabled", false);
pref("security.block_ftp_subresources", true);
pref("services.sync.prefs.sync.browser.contentblocking.introCount", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.annotate.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.annotate.enabled", true);
pref("signon.management.page.faqURL", "https://lockwise.firefox.com/faq.html");
pref("signon.management.page.feedbackURL", "https://www.surveygizmo.com/s3/5036102/Lockwise-feedback?ver=%VERSION%");

// changed in v70.0:
pref("apz.allow_immediate_handoff", false); // prev: true
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp,stp"); // prev: "tp,tpPrivate,cookieBehavior4,cm,fp"
pref("browser.in-content.dark-mode", true); // prev: false
pref("browser.messaging-system.whatsNewPanel.enabled", true); // prev: false
pref("browser.newtabpage.activity-stream.discoverystream.enabled", true); // prev: false
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"
pref("devtools.debugger.component-visible", false); // prev: true
pref("devtools.debugger.event-listeners-visible", false); // prev: true
pref("devtools.debugger.expressions-visible", false); // prev: true
pref("devtools.debugger.features.async-stepping", false); // prev: true
pref("devtools.debugger.workers-visible", false); // prev: true
pref("devtools.debugger.xhr-breakpoints-visible", false); // prev: true
pref("devtools.inspector.inactive.css.enabled", true); // prev: false
pref("devtools.markup.mutationBreakpoints.enabled", true); // prev: false
pref("devtools.netmonitor.ws.payload-preview-height", 128); // prev: 450
pref("devtools.webide.enabled", false); // prev: true
pref("dom.ipc.cancel_content_js_when_navigating", true); // prev: false
pref("dom.script_loader.external_scripts.utf8_parsing.enabled", true); // prev: false
pref("dom.storage.next_gen", true); // prev: false
pref("dom.worker.script_loader.utf8_parsing.enabled", true); // prev: false
pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%"); // prev: "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%"
pref("javascript.options.baselinejit.threshold", 100); // prev: 10
pref("javascript.options.mem.gc_allocation_threshold_mb", 27); // prev: 30
pref("layout.css.devPixelsPerPx", "-1"); // prev: "-1.0"
pref("layout.css.shared-memory-ua-sheets.enabled", true); // prev: false
pref("layout.css.text-decoration-skip-ink.enabled", true); // prev: false
pref("layout.css.text-underline-offset.enabled", true); // prev: false
pref("media.mediasource.webm.enabled", true); // prev: false
pref("network.http.referer.defaultPolicy.trackers", 2); // prev: 3
pref("network.http.sendOriginHeader", 2); // prev: 0
pref("network.notify.IPv6", true); // prev: false
pref("security.insecure_connection_icon.enabled", true); // prev: false
pref("security.insecure_connection_icon.pbmode.enabled", true); // prev: false
pref("signon.generation.available", true); // prev: false
pref("signon.generation.enabled", true); // prev: false
pref("signon.management.page.enabled", true); // prev: false
pref("urlclassifier.disallow_completions", "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"

