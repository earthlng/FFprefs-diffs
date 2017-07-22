/******************************************************************************************
 * diffs between FF prefs v46.0 and v47.0
 *
 * prefs: 2698
 *        2571 matching prefs
 *         127 diffs ( 61 new, 52 gone, 14 different )
 ******************************************************************************************/
// new in v47.0:
pref("alerts.showFavicons", false);
pref("apz.displayport_expiry_ms", 15000);
pref("browser.meta_refresh_when_inactive.disabled", false);
pref("browser.newtabpage.remote.mode", "production");
pref("browser.safebrowsing.blockedURIs.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous", true);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", true);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("devtools.command-button-noautohide.enabled", false);
pref("devtools.loader.hotreload", false);
pref("devtools.markup.collapseAttributes", true);
pref("devtools.memory.custom-census-displays", "{}");
pref("devtools.memory.custom-dominator-tree-displays", "{}");
pref("devtools.performance.ui.show-jit-optimizations", false);
pref("devtools.responsive.html.enabled", false);
pref("devtools.scratchpad.enabled", false);
pref("devtools.webconsole.autoMultiline", true);
pref("dom.details_element.enabled", false);
pref("dom.document.scrollingElement.enabled", false);
pref("dom.ipc.cpows.forbid-unsafe-from-browser", true);
pref("dom.mozBrowserFramesEnabled", true);
pref("dom.vr.poseprediction.enabled", false);
pref("full-screen-api.unprefix.enabled", false);
pref("gfx.logging.peak-texture-usage.enabled", false);
pref("gfx.logging.texture-usage.enabled", false);
pref("javascript.options.dump_stack_on_debuggee_would_run", false);
pref("javascript.options.throw_on_debuggee_would_run", false);
pref("javascript.options.wasm", false);
pref("layout.accessiblecaret.allow_script_change_updates", false);
pref("layout.accessiblecaret.always_tilt", false);
pref("layout.accessiblecaret.caret_shown_when_long_tapping_on_empty_content", false);
pref("layout.css.text-align-unsafe-value.enabled", false);
pref("media.benchmark.frames", 300);
pref("media.benchmark.timeout", 1000);
pref("media.benchmark.vp9.threshold", 150);
pref("media.gmp.storage.version.expected", 1);
pref("media.gmp-widevinecdm.enabled", true);
pref("media.hardware-video-decoding.force-enabled", false);
pref("media.wave.decoder.enabled", true);
pref("media.windows-media-foundation.allow-d3d11-dxva", false);
pref("media.wmf.disable-d3d11-for-dlls", "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.519, 8.17.10.511, 8.17.10.511, 8.17.10.453, 8.17.10.451; atidxx64.dll: 8.17.10.661, 8.17.10.644");
pref("narrate.enabled", true);
pref("narrate.rate", 0);
pref("narrate.test", false);
pref("narrate.voice", "automatic");
pref("network.mdns.use_js_fallback", false);
pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
pref("security.view-source.reachable-from-inner-protocol", false);
pref("security.webauth.u2f", false);
pref("security.webauth.u2f.softtoken", false);
pref("security.webauth.u2f.usbtoken", false);
pref("services.kinto.base", "https://firefox.settings.services.mozilla.com/v1");
pref("services.kinto.bucket", "blocklists");
pref("services.kinto.onecrl.checked", 0);
pref("services.kinto.onecrl.collection", "certificates");
pref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", true);
pref("services.sync.syncedTabs.showRemoteIcons", true);
pref("ui.popup.disable_autohide", false);
pref("urlclassifier.blockedTable", "test-block-simple,mozplugin-block-digest256");

// removed, renamed or hidden in v47.0:
pref("apz.fling_repaint_interval", 16);
pref("apz.pan_repaint_interval", 16);
pref("apz.smooth_scroll_repaint_interval", 16);
pref("browser.history.allowPopState", true);
pref("browser.history.allowPushState", true);
pref("browser.history.allowReplaceState", true);
pref("browser.search.param.yahoo-fr", "moz35");
pref("browser.search.param.yahoo-fr-ja", "mozff");
pref("datareporting.healthreport.about.reportUrlUnified", "https://fhr.cdn.mozilla.net/%LOCALE%/v4/");
pref("devtools.command-button-tilt.enabled", false);
pref("devtools.memory.custom-breakdowns", "{}");
pref("devtools.memory.custom-dominator-tree-breakdowns", "{}");
pref("devtools.performance.ui.enable-jit-optimizations", false);
pref("devtools.tilt.enabled", true);
pref("devtools.tilt.intro_transition", true);
pref("devtools.tilt.outro_transition", true);
pref("dom.identity.enabled", false);
pref("dom.max_child_script_run_time", 10);
pref("dom.permissions.enabled", true);
pref("dom.serviceWorkers.interception.enabled", true);
pref("dom.serviceWorkers.interception.opaque.enabled", true);
pref("gfx.direct2d.use1_1", true);
pref("layers.offmainthreadcomposition.testing.enabled", false);
pref("layout.css.text-align-true-value.enabled", false);
pref("network.cookie.alwaysAcceptSessionCookies", false);
pref("plugin.state.np_prsnl", 2);
pref("plugin.state.npatgpc", 2);
pref("plugin.state.npbispbrowser", 2);
pref("plugin.state.npboxedit", 2);
pref("plugin.state.npchip", 2);
pref("plugin.state.npciscowebcommunicator", 2);
pref("plugin.state.npesteid-firefox-plugin", 2);
pref("plugin.state.npfacebookvideocalling", 2);
pref("plugin.state.npgcplugin", 2);
pref("plugin.state.npmcafeemss", 2);
pref("plugin.state.npmcffplg", 2);
pref("plugin.state.npmeetingjoinpluginoc", 2);
pref("plugin.state.npmozcouponprinter", 2);
pref("plugin.state.npmvtplugin", 2);
pref("plugin.state.npnipp", 2);
pref("plugin.state.npnisp", 2);
pref("plugin.state.npplayerplugin", 2);
pref("plugin.state.nprobloxproxy", 2);
pref("plugin.state.npskypewebplugin", 2);
pref("plugin.state.npunity3d", 2);
pref("plugin.state.npvidyoweb", 2);
pref("plugin.state.npviewright", 2);
pref("plugin.state.npwebcard", 2);
pref("privacy.sanitize.migrateClearSavedPwdsOnExit", false);
pref("services.sync.enabled", true);
pref("services.sync.syncedTabsUIRefresh", false);
pref("toolkit.telemetry.optoutSample", true);

// changed in v47.0:
pref("browser.safebrowsing.provider.mozilla.lists", "mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"); // prev: "mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256"
pref("devtools.fontinspector.enabled", false); // prev: true
pref("devtools.gcli.jquerySrc", "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"); // prev: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
pref("devtools.gcli.lodashSrc", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js"); // prev: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"
pref("devtools.gcli.underscoreSrc", "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"); // prev: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"
pref("devtools.migration.warnings", true); // prev: false
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers", "measure"]'); // prev: '["splitconsole", "paintflashing toggle","tilt toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers", "measure"]'
pref("dom.workers.maxPerDomain", 50); // prev: 20
pref("gfx.canvas.azure.backends", "direct2d1.1,skia,cairo"); // prev: "direct2d1.1,direct2d,skia,cairo"
pref("gfx.content.azure.backends", "direct2d1.1,cairo"); // prev: "direct2d1.1,direct2d,cairo"
pref("identity.fxaccounts.settings.uri", "https://accounts.firefox.com/settings?service=sync&context=fx_desktop_v3"); // prev: "https://accounts.firefox.com/settings"
pref("image.http.accept", "*/*"); // prev: "image/png,image/*;q=0.8,*/*;q=0.5"
pref("plugins.rewrite_youtube_embeds", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-forbid-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256,test-block-simple,mozplugin-block-digest256,mozplugin2-block-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-forbid-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256"

