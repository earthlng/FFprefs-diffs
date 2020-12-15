/******************************************************************************************
 * diffs between FF prefs v83.0 and v84.0
 *
 * prefs: 4207
 *        4128 matching prefs
 *          79 diffs ( 38 new, 24 gone, 17 different )
 ******************************************************************************************/
// new in v84.0:
pref("apz.fling_accel_max_pause_interval_ms", 50);
pref("apz.fling_accel_min_fling_velocity", "1.5");
pref("apz.fling_accel_min_pan_velocity", "0.8");
pref("browser.bookmarks.defaultLocation", "toolbar");
pref("browser.contentblocking.state-partitioning.mvp.ui.enabled", false);
pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
pref("browser.startup.homepage.abouthome_cache.loglevel", "Warn");
pref("browser.startup.preXulSkeletonUI", false);
pref("browser.toolbars.bookmarks.visibility", "newtab");
pref("devtools.performance.recording.child.timeout_s", 0);
pref("dom.event.wheel-deltaMode-lines.always-disabled", false);
pref("dom.event.wheel-deltaMode-lines.disabled", false);
pref("dom.event.wheel-deltaMode-lines-to-pixel-scale", 30);
pref("dom.expose-incomplete-stylesheets", false);
pref("dom.innerSize.rounded", true);
pref("dom.input_event.allow_to_cancel_set_user_input", false);
pref("extensions.pocket.loggedOutVariant", "control");
pref("formhelper.autozoom.force-disable.test-only", false);
pref("gfx.webrender.debug.profiler-ui", "Default");
pref("gfx.webrender.enabled-no-gpu-process-with-angle-win", false);
pref("gfx.webrender.software", false);
pref("gfx.webrender.software.d3d11", true);
pref("javascript.options.wasm_optimizingjit", true);
pref("layout.accessiblecaret.transition-duration", "250.0");
pref("layout.display-list.improve-fragmentation", false);
pref("media.cubeb.wasapi-raw", 1);
pref("media.rdd-ffvpx.enabled", false);
pref("media.rdd-theora.enabled", false);
pref("media.rdd-vpx.enabled", false);
pref("media.rdd-wmf.enabled", false);
pref("media.sanity-test.disabled", false);
pref("media.videocontrols.picture-in-picture.allow-multiple", false);
pref("network.connectivity-service.nat64-prefix", "");
pref("network.dns.use_https_rr_for_speculative_connection", false);
pref("network.trr.retry-timeout-ms", 125);
pref("print.cups.monochrome.extra_settings", "");
pref("privacy.antitracking.testing", false);
pref("security.external_protocol_requires_permission", true);

// removed, renamed or hidden in v84.0:
pref("apz.android.chrome_fling_physics.enabled", true);
pref("apz.fling_accel_interval_ms", 500);
pref("apz.fling_accel_min_velocity", "1.5");
pref("browser.contentblocking.report.lockwise.mobile-android.url", "https://play.google.com/store/apps/details?id=mozilla.lockbox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.lockwise.mobile-ios.url", "https://apps.apple.com/app/id1314000270");
pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", true);
pref("browser.partnerlink.useAttributionURL", false);
pref("devtools.contenttoolbox.fission", true);
pref("dom.inputevent.data.enabled", true);
pref("dom.inputevent.datatransfer.enabled", true);
pref("dom.inputevent.inputtype.enabled", true);
pref("gfx.webrender.debug.compact-profiler", false);
pref("gfx.webrender.debug.new-frame-indicator", false);
pref("gfx.webrender.debug.new-scene-indicator", false);
pref("gfx.webrender.debug.smart-profiler", false);
pref("javascript.options.wasm_ionjit", true);
pref("layout.display-list.retain.verify", false);
pref("layout.display-list.retain.verify.order", false);
pref("mathml.mfenced_element.disabled", true);
pref("media.videocontrols.picture-in-picture.video-toggle.mode", 2);
pref("security.sandbox.rdd.win32k-disable", true);
pref("signon.management.page.hideMobileFooter", false);
pref("signon.management.page.mobileAndroidURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.mobileAppleURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");

// changed in v84.0:
pref("apz.velocity_relevance_time_ms", 100); // prev: 150
pref("browser.cache.offline.storage.enable", false); // prev: true
pref("browser.migrate.showBookmarksToolbarAfterMigration", true); // prev: false
pref("doh-rollout.clearModeOnShutdown", false); // prev: true
pref("dom.event.default_to_passive_wheel_listeners", true); // prev: false
pref("dom.image-lazy-loading.root-margin.bottom", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.left", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.right", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.top", "300.0"); // prev: "0.0"
pref("gfx.canvas.remote", true); // prev: false
pref("layout.css.is-and-where-better-error-recovery.enabled", true); // prev: false
pref("media.getusermedia.microphone.off_while_disabled.enabled", false); // prev: true
pref("media.navigator.mediadatadecoder_vpx_enabled", false); // prev: true
pref("network.dns.dns_query_single_label", false); // prev: true
pref("network.trr.max-fails", 15); // prev: 5
pref("security.bad_cert_domain_error.url_fix_enabled", true); // prev: false
pref("security.remote_settings.intermediates.downloads_per_poll", 5000); // prev: 100
