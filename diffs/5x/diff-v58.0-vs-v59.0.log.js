/******************************************************************************************
 * diffs between FF prefs v58.0 and v59.0
 *
 * prefs: 3189
 *        2989 matching prefs
 *         200 diffs ( 88 new, 92 gone, 20 different )
 ******************************************************************************************/
// new in v59.0:
pref("alerts.useSystemBackend", true);
pref("apz.pinch_lock.mode", 1);
pref("apz.pinch_lock.scoll_lock_threshold", "0.03125");
pref("apz.pinch_lock.span_breakout_threshold", "0.03125");
pref("apz.pinch_lock.span_lock_threshold", "0.03125");
pref("devtools.debugger.breakpoints-visible", true);
pref("devtools.debugger.expressions-visible", true);
pref("devtools.debugger.features.breakpoints-dropdown", false);
pref("devtools.debugger.features.chrome-scopes", false);
pref("devtools.debugger.features.code-coverage", false);
pref("devtools.debugger.features.code-folding", false);
pref("devtools.debugger.features.event-listeners", false);
pref("devtools.debugger.features.map-scopes", false);
pref("devtools.debugger.features.outline", true);
pref("devtools.debugger.features.remove-command-bar-options", false);
pref("devtools.debugger.features.workers", true);
pref("devtools.debugger.scopes-visible", true);
pref("devtools.debugger.workers-visible", true);
pref("devtools.highlighter.writingModeAdjust", false);
pref("devtools.inspector.flexboxHighlighter.enabled", false);
pref("devtools.inspector.split-rule-enabled", false);
pref("devtools.inspector.split-sidebar-toggle", false);
pref("devtools.performance.new-panel-enabled", false);
pref("devtools.webconsole.sidebarToggle", false);
pref("dom.animations-api.pending-member.enabled", true);
pref("dom.clients.openwindow_favors_same_process", true);
pref("dom.registerContentHandler.enabled", true);
pref("dom.select_popup_in_content.enabled", false);
pref("dom.vr.controller.enumerate.interval", 1000);
pref("dom.vr.display.enumerate.interval", 5000);
pref("dom.vr.inactive.timeout", 5000);
pref("dom.vr.oculus.invisible.enabled", true);
pref("dom.webcomponents.shadowdom.enabled", false);
pref("extensions.formautofill.section.enabled", true);
pref("extensions.formautofill.supportedCountries", "US");
pref("extensions.formautofill.supportRTL", false);
pref("extensions.webextensions.tabhide.enabled", false);
pref("font.name-list.emoji", "Segoe UI Emoji, EmojiOne Mozilla");
pref("full-screen-api.ignore-widgets", false);
pref("gfx.direct2d.destroy-dt-on-paintthread", true);
pref("gfx.downloadable_fonts.keep_color_bitmaps", false);
pref("gfx.webrender.all", false);
pref("gfx.webrender.debug.compact-profiler", false);
pref("gfx.webrender.debug.disable-batching", false);
pref("gfx.webrender.debug.epochs", false);
pref("gfx.webrender.debug.gpu-sample-queries", false);
pref("gfx.webrender.debug.gpu-time-queries", false);
pref("gfx.webrender.hit-test", false);
pref("gfx.webrender.program-binary", true);
pref("identity.fxaccounts.remote.connectdevice.uri", "https://accounts.firefox.com/connect_another_device?service=sync&context=fx_desktop_v3");
pref("intl.charset.fallback.utf8_for_file", false);
pref("intl.ime.hack.set_input_scope_of_url_bar_to_default", true);
pref("javascript.options.spectre.index_masking", true);
pref("layers.omtp.paint-workers", 1);
pref("layout.css.moz-document.content.enabled", true);
pref("layout.css.overscroll-behavior.enabled", true);
pref("layout.display-list.retain.chrome", false);
pref("media.eme.hdcp-policy-check.enabled", false);
pref("media.peerconnection.rtpsourcesapi.enabled", true);
pref("media.seamless-looping", true);
pref("media.wmf.amd.highres.enabled", true);
pref("network.activity.intervalMilliseconds", 0);
pref("network.http.referer.defaultPolicy", 3);
pref("network.http.referer.defaultPolicy.pbmode", 2);
pref("network.http.sendOriginHeader", 0);
pref("network.http.tailing.total-max", 45000);
pref("network.http.throttle.hold-time-ms", 800);
pref("network.http.throttle.max-time-ms", 500);
pref("network.http.throttle.read-interval-ms", 500);
pref("network.http.throttle.read-limit-bytes", 8000);
pref("network.http.throttle.version", 1);
pref("network.protocol-handler.external.htp", false);
pref("network.protocol-handler.external.htps", false);
pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10);
pref("network.tcp.tcp_fastopen_http_stalls_limit", 3);
pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20);
pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
pref("privacy.spoof_english", 0);
pref("security.csp.enable_violation_events", false);
pref("security.insecure_connection_icon.enabled", false);
pref("security.insecure_connection_icon.pbmode.enabled", false);
pref("security.mixed_content.block_object_subrequest", false);
pref("security.signed_app_signatures.policy", 2);
pref("services.sync.log.logger", "Debug");
pref("services.sync.log.logger.engine", "Debug");
pref("toolkit.telemetry.hybridContent.enabled", true);
pref("webgl.max-contexts", 32);
pref("webgl.max-contexts-per-principal", 16);

// removed, renamed or hidden in v59.0:
pref("accessibility.usebrailledisplay", "");
pref("application.use_ns_plugin_finder", false);
pref("browser.chrome.toolbar_style", 2);
pref("browser.helperApps.alwaysAsk.force", false);
pref("browser.popups.showPopupBlocker", true);
pref("browser.search.order.US.3", "data:text/plain,browser.search.order.US.3=Bing");
pref("camera.control.face_detection.enabled", true);
pref("capability.policy.default.SOAPCall.invokeVerifySourceHeader", "allAccess");
pref("datareporting.healthreport.about.reportUrl", "https://fhr.cdn.mozilla.net/%LOCALE%/v4/");
pref("devtools.debugger.features.project-text-search", true);
pref("devtools.gridinspector.showNegativeLineNumbers", false);
pref("devtools.migration.warnings", true);
pref("devtools.remote.wifi.visible", true);
pref("devtools.telemetry.supported_performance_marks", "contentInteractive,navigationInteractive,navigationLoaded,visuallyLoaded,fullyLoaded,mediaEnumerated,scanEnd");
pref("dom.disable_window_status_change", true);
pref("dom.flyweb.enabled", false);
pref("dom.idle_period.throttled_length", 10000);
pref("dom.idle-observers-api.enabled", true);
pref("dom.serviceWorkers.openWindow.enabled", true);
pref("dom.sysmsg.enabled", false);
pref("dom.webapps.useCurrentProfile", false);
pref("dom.webcomponents.enabled", false);
pref("extensions.getAddons.maxResults", 15);
pref("extensions.getAddons.recommended.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/list/recommended/all/%MAX_RESULTS%/%OS%/%VERSION%?src=firefox");
pref("extensions.getAddons.search.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/%TERMS%/all/%MAX_RESULTS%/%OS%/%VERSION%/%COMPATIBILITY_MODE%?src=firefox");
pref("general.useragent.locale", "en-US");
pref("gfx.font_rendering.directwrite.force-enabled", false);
pref("images.dither", "auto");
pref("intl.locale.matchOS", false);
pref("javascript.options.mem.gc_refresh_frame_slices_enabled", true);
pref("layers.advanced.text-layers", 2);
pref("layers.gralloc.disable", false);
pref("layers.omtp.force-sync", false);
pref("layout.css.grid.enabled", true);
pref("media.cache.resource-index", 8192);
pref("media.getusermedia.aec_delay_agnostic", true);
pref("media.getusermedia.playout_delay", 40);
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com,bluejeans.com,*.bluejeans.com,*.a.bluejeans.com,*.bbcollab.com");
pref("media.navigator.load_adapt", true);
pref("media.navigator.load_adapt.avg_seconds", 3);
pref("media.navigator.load_adapt.encoder_only", true);
pref("media.navigator.load_adapt.high_load", "0.90");
pref("media.navigator.load_adapt.low_load", "0.40");
pref("media.navigator.load_adapt.measure_interval", 1000);
pref("media.navigator.video.default_minfps", 10);
pref("media.peerconnection.video.h264_enabled", false);
pref("media.raw.enabled", true);
pref("media.wmf.decoder.thread-count", -1);
pref("middlemouse.openNewWindow", true);
pref("network.activity.blipIntervalMilliseconds", 0);
pref("network.http.referer.userControlPolicy", 3);
pref("network.http.throttle.resume-background-in", 1000);
pref("network.http.throttle.time-window", 3000);
pref("notification.feature.enabled", false);
pref("prefs.converted-to-utf8", false);
pref("print.always_cache_old_pres", false);
pref("print.print_extra_margin", 90);
pref("profile.confirm_automigration", true);
pref("profile.migration_behavior", 0);
pref("profile.migration_directory", "");
pref("profile.seconds_until_defunct", -1);
pref("security.checkloaduri", true);
pref("security.mixed_content.hsts_priming_cache_timeout", 604800);
pref("security.mixed_content.hsts_priming_request_timeout", 2000);
pref("security.mixed_content.send_hsts_priming", false);
pref("security.mixed_content.use_hsts", false);
pref("security.use_sqldb", true);
pref("security.xpconnect.plugin.unrestricted", true);
pref("services.sync.log.logger.addonutils", "Debug");
pref("services.sync.log.logger.authenticator", "Debug");
pref("services.sync.log.logger.declined", "Debug");
pref("services.sync.log.logger.engine.addons", "Debug");
pref("services.sync.log.logger.engine.addresses", "Debug");
pref("services.sync.log.logger.engine.apps", "Debug");
pref("services.sync.log.logger.engine.bookmarks", "Debug");
pref("services.sync.log.logger.engine.clients", "Debug");
pref("services.sync.log.logger.engine.creditcards", "Debug");
pref("services.sync.log.logger.engine.extension-storage", "Debug");
pref("services.sync.log.logger.engine.forms", "Debug");
pref("services.sync.log.logger.engine.history", "Debug");
pref("services.sync.log.logger.engine.passwords", "Debug");
pref("services.sync.log.logger.engine.prefs", "Debug");
pref("services.sync.log.logger.engine.tabs", "Debug");
pref("services.sync.log.logger.identity", "Debug");
pref("services.sync.log.logger.network.resources", "Debug");
pref("services.sync.log.logger.service.main", "Debug");
pref("services.sync.log.logger.status", "Debug");
pref("services.sync.log.rootLogger", "Debug");
pref("stagefright.disabled", false);
pref("stagefright.force-enabled", false);
pref("ui.key.saveLink.shift", true);
pref("viewmanager.do_doublebuffering", true);

// changed in v59.0:
pref("browser.search.order.US.2", "data:text/plain,browser.search.order.US.2=Bing"); // prev: "data:text/plain,browser.search.order.US.2=Yahoo"
pref("devtools.debugger.call-stack-visible", true); // prev: false
pref("dom.event.coalesce_mouse_move", true); // prev: false
pref("dom.min_tracking_background_timeout_value", 4); // prev: 10000
pref("dom.vr.oculus.present.timeout", 500); // prev: 10000
pref("dom.vr.oculus.quit.timeout", 10000); // prev: 30000
pref("dom.w3c_pointer_events.enabled", true); // prev: false
pref("gfx.webrender.blob-images", 2); // prev: false
pref("image.mem.shared", 2); // prev: false
pref("media.getusermedia.agc", 3); // prev: 1
pref("media.webvtt.regions.enabled", true); // prev: false
pref("network.auth.subresource-img-cross-origin-http-auth-allow", false); // prev: true
pref("network.http.rcwn.enabled", true); // prev: false
pref("privacy.reduceTimerPrecision", true); // prev: false
pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 2000); // prev: 20
pref("security.data_uri.block_toplevel_data_uri_navigations", true); // prev: false
pref("security.tls.enable_0rtt_data", true); // prev: false
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*|moz-extension:.*)$"); // prev: "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*)$"
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"
pref("webchannel.allowObject.urlWhitelist", "https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"); // prev: "https://accounts.firefox.com https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"

