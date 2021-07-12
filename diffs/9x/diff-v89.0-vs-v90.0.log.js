/******************************************************************************************
 * diffs between FF prefs v89.0 and v90.0
 *
 * prefs: 4343
 *        4239 matching prefs
 *         104 diffs ( 61 new, 29 gone, 14 different )
 ******************************************************************************************/
// new in v90.0:
pref("accessibility.cache.enabled", false);
pref("app.update.background.timeoutSec", 600);
pref("browser.aboutwelcome.protonDesign", true);
pref("browser.download.improvements_to_download_panel", false);
pref("browser.low_commit_space_threshold_mb", 200);
pref("browser.privatebrowsing.infoTitleEnabled", true);
pref("browser.privatebrowsing.promoTitleEnabled", true);
pref("browser.topsites.contile.enabled", false);
pref("browser.topsites.contile.endpoint", "https://contile.services.mozilla.com/v1/tiles");
pref("browser.urlbar.quicksuggest.nonSponsoredIndex", -1);
pref("browser.urlbar.quicksuggest.sponsoredIndex", -1);
pref("browser.urlbar.unitConversion.enabled", false);
pref("dom.event.wheelDelta.enabled", true);
pref("dom.events.asyncClipboard.read", false);
pref("dom.mouse_capture.enabled", true);
pref("dom.quotaManager.caching.checkBuildId", true);
pref("dom.security.https_first", false);
pref("dom.security.https_first_pbm", false);
pref("dom.w3c_pointer_events.scroll_by_pen.enabled", false);
pref("dom.webnotifications.silent.enabled", false);
pref("dom.webnotifications.vibrate.enabled", false);
pref("gfx.font-list-omt.enabled", false);
pref("gfx.windows-font-substitutes.always", false);
pref("image.avif.compliance_strictness", 1);
pref("image.exif-density-correction.enabled", true);
pref("image.exif-density-correction.sanity-check.enabled", true);
pref("image.jxl.enabled", false);
pref("image.svg.blob-image", false);
pref("javascript.options.concurrent_multiprocess_gcs.cpu_divisor", 4);
pref("javascript.options.concurrent_multiprocess_gcs.max", 0);
pref("javascript.options.experimental.ergonomic_brand_checks", true);
pref("javascript.options.experimental.private_fields", true);
pref("javascript.options.experimental.private_methods", true);
pref("javascript.options.self_hosted.use_shared_memory", true);
pref("layout.css.accent-color.enabled", false);
pref("layout.css.moz-control-character-visibility.enabled", false);
pref("layout.extra-tick.minimum-ms", -1);
pref("layout.keep_ticking_after_load_ms", 1000);
pref("mousewheel.system_scroll_override.enabled", true);
pref("mousewheel.system_scroll_override.horizontal.factor", 200);
pref("mousewheel.system_scroll_override.vertical.factor", 200);
pref("network.dns.negative_ttl_for_type_record", 300);
pref("network.http.http3.support_version1", true);
pref("nimbus.debug", false);
pref("pdfjs.enableXfa", false);
pref("places.forgetThisSite.clearByBaseDomain", false);
pref("print.save_as_pdf.links.enabled", true);
pref("privacy.query_stripping.allow_list", "");
pref("privacy.query_stripping.enabled", false);
pref("privacy.query_stripping.redirect", true);
pref("privacy.query_stripping.strip_list", "");
pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
pref("privacy.resistFingerprinting.testGranularityMask", 0);
pref("threads.control_event_queue.enabled", true);
pref("toolkit.backgroundtasks.defaultTimeoutSec", 600);
pref("widget.gtk.alt-theme.accent", true);
pref("widget.gtk.alt-theme.dark", false);
pref("widget.gtk.alt-theme.scrollbar", false);
pref("widget.gtk.alt-theme.scrollbar_active", true);
pref("widget.gtk.alt-theme.selection", true);
pref("widget.system-colors-follow-theme", false);

// removed, renamed or hidden in v90.0:
pref("advanced.mailftp", false);
pref("browser.cache.offline.storage.enable", false);
pref("dom.security.https_only_mode_https_first", false);
pref("dom.security.https_only_mode_https_first_pbm", false);
pref("layout.css.ruby.position-alternate.enabled", true);
pref("media.useAudioChannelAPI", false);
pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 200);
pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 200);
pref("network.ftp.control.qos", 0);
pref("network.ftp.data.qos", 0);
pref("network.ftp.enabled", false);
pref("network.ftp.idleConnectionTimeout", 300);
pref("network.proxy.ftp", "");
pref("network.proxy.ftp_port", 0);
pref("pdfjs.enableWebGL", false);
pref("pdfjs.renderer", "canvas");
pref("plugin.mousewheel.enabled", true);
pref("remote.enabled", true);
pref("services.blocklist.pinning.bucket", "pinning");
pref("services.blocklist.pinning.checked", 0);
pref("services.blocklist.pinning.collection", "pins");
pref("services.blocklist.pinning.enabled", true);
pref("services.blocklist.pinning.signer", "pinning-preload.content-signature.mozilla.org");
pref("ui.android.mouse_as_touch", 1);
pref("widget.content.allow-gtk-dark-theme.accent", true);
pref("widget.content.allow-gtk-dark-theme.scrollbar", false);
pref("widget.content.allow-gtk-dark-theme.scrollbar_active", true);
pref("widget.content.allow-gtk-dark-theme.selection", true);

// changed in v90.0:
pref("browser.download.viewableInternally.enabledTypes", "xml,svg,webp,avif,jxl"); // prev: "xml,svg,webp,avif"
pref("browser.startup.preXulSkeletonUI", false); // prev: true
pref("canvas.createConicGradient.enabled", true); // prev: false
pref("dom.security.secFetch.enabled", true); // prev: false
pref("gfx.webrender.fallback.software.requires-gpu-process", false); // prev: true
pref("gfx.webrender.fallback.software-d3d11", true); // prev: false
pref("intl.charset.detector.ng.in.enabled", true); // prev: false
pref("intl.charset.detector.ng.jp.enabled", true); // prev: false
pref("intl.charset.detector.ng.lk.enabled", true); // prev: false
pref("media.mediacontrol.stopcontrol.timer", true); // prev: false
pref("media.mediacontrol.stopcontrol.timer.ms", 86400000); // prev: 60000
pref("network.http.http3.enabled", true); // prev: false
pref("security.osclientcerts.autoload", true); // prev: false
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|file:.*|blob:.*|moz-extension:.*)$"); // prev: "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*|moz-extension:.*)$"
