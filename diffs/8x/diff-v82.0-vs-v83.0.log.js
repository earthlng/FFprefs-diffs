/******************************************************************************************
 * diffs between FF prefs v82.0 and v83.0
 *
 * prefs: 4182
 *        4080 matching prefs
 *         102 diffs ( 48 new, 13 gone, 41 different )
 ******************************************************************************************/
// new in v83.0:
pref("browser.contentblocking.report.hide_vpn_banner", false);
pref("browser.contentblocking.report.vpn.enabled", true);
pref("browser.contentblocking.report.vpn.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-card");
pref("browser.contentblocking.report.vpn_platforms", "win");
pref("browser.contentblocking.report.vpn_regions", "us,ca,nz,sg,my,gb");
pref("browser.contentblocking.report.vpn_sub_id", "sub_HrfCZF7VPHzZkA");
pref("browser.contentblocking.report.vpn-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox.vpn&referrer=utm_source%3Dfirefox-browser%26utm_medium%3Dfirefox-browser%26utm_campaign%3Dabout-protections-mobile-vpn%26anid%3D--");
pref("browser.contentblocking.report.vpn-ios.url", "https://apps.apple.com/us/app/firefox-private-network-vpn/id1489407738");
pref("browser.contentblocking.report.vpn-promo.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-top-promo");
pref("browser.newtabpage.activity-stream.hideTopSitesTitle", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", true);
pref("browser.partnerlink.useAttributionURL", false);
pref("browser.toolbars.bookmarks.2h2020", false);
pref("browser.urlbar.accessibility.tabToSearch.announceResults", true);
pref("browser.urlbar.update2.restyleBrowsingHistoryAsSearch", true);
pref("dom.forms.autocapitalize", false);
pref("dom.indexedDB.privateBrowsing.enabled", false);
pref("dom.navigation.locationChangeRateLimit.count", 200);
pref("dom.navigation.locationChangeRateLimit.timespan", 10);
pref("fission.autostart.session", false);
pref("fission.experiment.enrollmentStatus", 0);
pref("fission.experiment.startupEnrollmentStatus", 0);
pref("fission.openNonFissionWindowOption", false);
pref("gfx.webrender.picture-tile-height", 512);
pref("gfx.webrender.picture-tile-width", 1024);
pref("javascript.options.warp", true);
pref("layers.gpu-process.crash-also-crashes-browser", false);
pref("layout.css.math-depth.enabled", false);
pref("layout.css.math-style.enabled", false);
pref("mathml.scriptminsize_attribute.disabled", false);
pref("mathml.scriptsizemultiplier_attribute.disabled", false);
pref("network.connectivity-service.nat64-check", true);
pref("network.dns.dns_query_single_label", true);
pref("network.dns.echconfig.enabled", false);
pref("network.dns.echconfig.fallback_to_origin_when_all_failed", true);
pref("network.dns.httpssvc.http3_fast_fallback_timeout", 50);
pref("network.dns.httpssvc.reset_exclustion_list", true);
pref("network.http.http3.enable_qlog", false);
pref("network.trr.exclude-etc-hosts", true);
pref("network.trr.fallback-on-zero-response", false);
pref("print.cups.monochrome.enabled", true);
pref("privacy.webrtc.globalMuteToggles", false);
pref("privacy.webrtc.hideGlobalIndicator", false);
pref("security.pki.crlite_ct_merge_delay_seconds", 100800);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", true);
pref("signon.recipes.remoteRecipesEnabled", true);
pref("webgl.out-of-process.force", false);
pref("widget.pause-compositor-when-minimized", true);

// removed, renamed or hidden in v83.0:
pref("doh-rollout.profileCreationThreshold", "1572476400000");
pref("dom.compositionevent.text.dispatch_only_system_group_in_content", true);
pref("dom.datatransfer.mozAtAPIs", false);
pref("dom.security.respect_document_nosniff", true);
pref("gfx.font_loader.interval", 1000);
pref("gfx.webrender.picture-caching", true);
pref("layout.css.moz-touch-enabled.enabled", false);
pref("security.block_importScripts_with_wrong_mime", true);
pref("security.block_script_with_wrong_mime", true);
pref("security.csp.enableStrictDynamic", true);
pref("security.data_uri.unique_opaque_origin", true);
pref("security.sri.enable", true);
pref("services.sync.engine.bookmarks.buffer", true);

// changed in v83.0:
pref("apz.allow_zooming", true); // prev: false
pref("apz.force_disable_desktop_zooming_scrollbars", false); // prev: true
pref("apz.windows.use_direct_manipulation", true); // prev: false
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false); // prev: true
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE,CH,AT,BE,IN"); // prev: "US,DE,CA,GB,IE,CH,AT,BE"
pref("browser.preferences.exposeHTTPSOnly", true); // prev: false
pref("browser.urlbar.update2", true); // prev: false
pref("browser.urlbar.update2.disableOneOffsHorizontalKeyNavigation", true); // prev: false
pref("browser.urlbar.update2.emptySearchBehavior", 0); // prev: 2
pref("browser.urlbar.update2.localOneOffs", true); // prev: false
pref("browser.urlbar.update2.oneOffsRefresh", true); // prev: false
pref("browser.urlbar.update2.tabToComplete", true); // prev: false
pref("devtools.overflow.debugging.enabled", true); // prev: false
pref("devtools.target-switching.enabled", true); // prev: false
pref("fission.remoteObjectEmbed", true); // prev: false
pref("gfx.font_loader.delay", 60000); // prev: 120000
pref("javascript.options.ion.threshold", 1500); // prev: 1000
pref("layout.css.conic-gradient.enabled", true); // prev: false
pref("layout.css.moz-any-is-is.enabled", true); // prev: false
pref("mathml.deprecated_alignment_attributes.disabled", true); // prev: false
pref("mathml.deprecated_menclose_notation_radical.disabled", true); // prev: false
pref("mathml.deprecated_style_attributes.disabled", true); // prev: false
pref("mathml.mathsize_names.disabled", true); // prev: false
pref("mathml.mfrac_bevelled_attribute.disabled", true); // prev: false
pref("mathml.mfrac_linethickness_names.disabled", true); // prev: false
pref("mathml.script_shift_attributes.disabled", true); // prev: false
pref("mathml.stixgeneral_operator_stretching.disabled", true); // prev: false
pref("mathml.xlink.disabled", true); // prev: false
pref("media.navigator.mediadatadecoder_vpx_enabled", true); // prev: false
pref("media.peerconnection.video.use_rtx.blocklist", "doxy.me,*.doxy.me"); // prev: ""
pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", true); // prev: false
pref("network.connectivity-service.DNSv4.domain", "example.org"); // prev: "mozilla.org"
pref("network.connectivity-service.DNSv6.domain", "example.org"); // prev: "mozilla.org"
pref("pdfjs.renderInteractiveForms", true); // prev: false
pref("privacy.purge_trackers.enabled", true); // prev: false
pref("privacy.webrtc.allowSilencingNotifications", true); // prev: false
pref("privacy.webrtc.legacyGlobalIndicator", false); // prev: true
pref("prompts.modalType.httpAuth", 2); // prev: 3
pref("signon.recipes.path", "resource://app/defaults/settings/main/password-recipes.json"); // prev: "chrome://passwordmgr/content/recipes.json"
pref("toolkit.shutdown.lateWriteChecksStage", 3); // prev: 1
pref("webgl.enable-surface-texture", true); // prev: false
