/******************************************************************************************
 * diffs between FF prefs v85.0 and v86.0
 *
 * prefs: 4238
 *        4158 matching prefs
 *          80 diffs ( 30 new, 32 gone, 18 different )
 ******************************************************************************************/
// new in v86.0:
pref("browser.engagement.ctrlTab.has-used", false);
pref("browser.engagement.library-button.has-used", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint-query", "");
pref("browser.newtabpage.activity-stream.newNewtabExperience.colors", "#0090ED,#FF4F5F,#2AC3A2,#FF7139,#A172FF,#FFA437,#FF2A8A");
pref("browser.partnerlink.campaign.topsites", "amzn_2020_a1");
pref("browser.tabs.remote.useOriginAttributesInRemoteType", false);
pref("browser.tabs.tooltipsShowPidAndActiveness", false);
pref("canvas.createConicGradient.enabled", false);
pref("devtools.command-button-errorcount.enabled", true);
pref("docshell.shistory.bfcache.allow_unload_listeners", false);
pref("docshell.shistory.bfcache.require_no_opener", false);
pref("dom.events.offset-in-svg-relative-to-svg-root", true);
pref("dom.input_events.canSuspendInBCG.enabled", false);
pref("extensions.webextensions.base-content-security-policy.v3", "script-src 'self' http://localhost:* http://127.0.0.1:*; object-src 'self';");
pref("gfx.bundled-fonts.activate", -1);
pref("gfx.font_rendering.fallback.async", true);
pref("gfx.webrender.debug.force-picture-invalidation", false);
pref("gfx.webrender.software.d3d11.upload-mode", 2);
pref("gfx.webrender.svg-images", false);
pref("layout.css.autofill.enabled", true);
pref("layout.css.image-set.enabled", false);
pref("media.videocontrols.keyboard-tab-to-all-controls", false);
pref("network.cache.frecency_array_check_enabled", false);
pref("pdfjs.enableScripting", false);
pref("pdfjs.viewerCssTheme", 0);
pref("prompts.contentPromptSubDialog", false);
pref("remote.enabled", true);
pref("remote.force-local", true);
pref("security.csp.truncate_blocked_uri_for_frame_navigations", true);
pref("widget.remote-look-and-feel", false);

// removed, renamed or hidden in v86.0:
pref("browser.download.hide_plugins_without_extensions", true);
pref("browser.download.show_plugins_in_list", true);
pref("browser.ssb.enabled", false);
pref("browser.tabs.tooltipsShowPid", false);
pref("browser.urlbar.update2", true);
pref("browser.urlbar.update2.disableOneOffsHorizontalKeyNavigation", true);
pref("browser.urlbar.update2.oneOffsRefresh", true);
pref("browser.urlbar.update2.restyleBrowsingHistoryAsSearch", true);
pref("extensions.content_script_csp.enabled", false);
pref("extensions.content_script_csp.report_only", true);
pref("extensions.webextensions.tabhide.enabled", true);
pref("javascript.options.ion.full.threshold", 100000);
pref("layout.css.file-selector-button.enabled", true);
pref("layout.css.moz-any-is-is.enabled", true);
pref("layout.css.moz-focus-outer.enabled", false);
pref("layout.css.text-decoration-skip-ink.enabled", true);
pref("layout.css.text-decoration-thickness.enabled", true);
pref("layout.css.text-justify.enabled", true);
pref("layout.css.text-underline-offset.enabled", true);
pref("layout.css.text-underline-position.enabled", true);
pref("layout.css.unknown-webkit-pseudo-element", true);
pref("layout.css.xul-tree-pseudos.content.enabled", false);
pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", true);
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822");
pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.15.10.2119, 8.15.10.2104, 8.15.10.2102, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996");
pref("network.http.spdy.bug1556491", true);
pref("network.http.spdy.bug1563695", true);
pref("prompts.tab_modal.enabled", true);
pref("security.ssl.errorReporting.automatic", false);
pref("security.ssl.errorReporting.enabled", false);
pref("security.ssl.errorReporting.url", "https://incoming.telemetry.mozilla.org/submit/sslreports/");
pref("svg.transform-box.enabled", true);

// changed in v86.0:
pref("apz.popups.enabled", true); // prev: false
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 250000, 314159, 500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000, 2250000, 2500000, 8675309]"); // prev: "[1000, 5000, 10000, 25000, 50000, 100000, 500000]"
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cm,fp,stp,lvl2"); // prev: "tp,tpPrivate,cookieBehavior4,cm,fp,stp,lvl2"
pref("browser.contentblocking.state-partitioning.mvp.ui.enabled", true); // prev: false
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\",\"infobar\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\"],\"updateCycleInMs\":3600000}"
pref("browser.partnerlink.attributionURL", "https://topsites.services.mozilla.com/cid/"); // prev: "https://topsites.services.mozilla.com/cid/amzn_2020_a1"
pref("dom.popup_allowed_events", "change click dblclick auxclick mousedown mouseup pointerdown pointerup notificationclick reset submit touchend contextmenu"); // prev: "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
pref("extensions.formautofill.supportedCountries", "US,CA"); // prev: "US"
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v4/addons/search/?guid=%IDS%&lang=%LOCALE%"); // prev: "https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%"
pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v4/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%"); // prev: "https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%"
pref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* http://localhost:* http://127.0.0.1:* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' moz-extension: blob: filesystem:;"); // prev: "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;"
pref("gfx.canvas.remote", true); // prev: false
pref("javascript.options.off_thread_parse_global", false); // prev: true
pref("media.peerconnection.dtls.version.min", 771); // prev: 770
pref("media.videocontrols.picture-in-picture.allow-multiple", true); // prev: false
pref("privacy.window.name.update.enabled", true); // prev: false
pref("webgl.disable-fail-if-major-performance-caveat", true); // prev: false
pref("webgl.out-of-process", true); // prev: false
