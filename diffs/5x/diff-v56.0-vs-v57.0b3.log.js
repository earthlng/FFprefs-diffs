/******************************************************************************************
 * diffs between FF prefs v56.0 and v57.0b3
 *
 * prefs: 3109
 *        2949 matching prefs
 *         160 diffs ( 76 new, 32 gone, 52 different )
 ******************************************************************************************/
// new in v57.0b3:
pref("accessibility.indicator.enabled", true);
pref("accessibility.support.url", "https://support.mozilla.org/%LOCALE%/kb/accessibility-services");
pref("apz.drag.touch.enabled", true);
pref("apz.keyboard.passive-listeners", true);
pref("browser.bookmarks.openInTabClosesMenu", true);
pref("browser.download.autohideButton", true);
pref("browser.library.activity-stream.enabled", true);
pref("browser.newtabpage.activity-stream.aboutHome.enabled", true);
pref("browser.newtabpage.activity-stream.prerender", true);
pref("browser.onboarding.notification.max-life-time-all-tours-ms", 1209600000);
pref("browser.onboarding.state", "default");
pref("browser.ping-centre.log", false);
pref("browser.ping-centre.production.endpoint", "https://tiles.services.mozilla.com/v3/links/ping-centre");
pref("browser.ping-centre.staging.endpoint", "https://onyx_tiles.stage.mozaws.net/v3/links/ping-centre");
pref("browser.ping-centre.telemetry", true);
pref("browser.safebrowsing.passwords.enabled", false);
pref("browser.tabs.extraDragSpace", false);
pref("browser.tabs.loadBookmarksInTabs", false);
pref("browser.tabs.remote.warmup.enabled", false);
pref("browser.tabs.remote.warmup.maxTabs", 3);
pref("browser.tabs.remote.warmup.unloadDelayMs", 2000);
pref("browser.urlbar.maxHistoricalSearchSuggestions", 1);
pref("devtools.debugger.features.async-stepping", true);
pref("devtools.debugger.features.wasm", true);
pref("devtools.debugger.project-text-search-enabled", true);
pref("devtools.enabled", true);
pref("devtools.netmonitor.persistlog", false);
pref("dom.abortController.enabled", true);
pref("dom.abortController.fetch.enabled", true);
pref("dom.event.coalesce_mouse_move", false);
pref("dom.ipc.scheduler", false);
pref("dom.ipc.scheduler.chaoticScheduling", false);
pref("dom.ipc.scheduler.preemption", false);
pref("dom.ipc.scheduler.threadCount", 2);
pref("dom.ipc.scheduler.useMultipleQueues", true);
pref("dom.ipc.useNativeEventProcessing.content", true);
pref("dom.max_ext_content_script_run_time", 5);
pref("dom.payments.loglevel", "Warn");
pref("dom.streams.enabled", false);
pref("extensions.formautofill.creditCards.available", false);
pref("gfx.webrender.blob-images", false);
pref("gfx.webrender.debug.profiler", false);
pref("gfx.webrender.debug.render-targets", false);
pref("gfx.webrender.debug.texture-cache", false);
pref("image.cache.factor2.threshold-surfaces", 4);
pref("input_event_queue.count_for_prediction", 9);
pref("input_event_queue.default_duration_per_event", 1);
pref("input_event_queue.duration.max", 8);
pref("input_event_queue.duration.min", 1);
pref("input_event_queue.supported", true);
pref("javascript.options.mem.gc_allocation_threshold_factor", 90);
pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90);
pref("javascript.options.wasm_ionjit", true);
pref("jsloader.shareGlobal", true);
pref("layers.mlgpu.enabled", true);
pref("layers.omtp.enabled", false);
pref("layers.omtp.force-sync", false);
pref("layout.css.ruby.intercharacter.enabled", false);
pref("media.navigator.streams.fake", false);
pref("media.wmf.amd.vp9.enabled", true);
pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", true);
pref("network.cookie.ipc.sync", false);
pref("network.http.rcwn.min_wait_before_racing_ms", 0);
pref("network.http.tailing.delay-max", 6000);
pref("network.http.tailing.delay-quantum", 600);
pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100);
pref("network.http.tailing.enabled", true);
pref("privacy.userContext.extension", "");
pref("security.use_sqldb", false);
pref("services.sync.engine.bookmarks.validation.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", true);
pref("toolkit.telemetry.bhrPing.enabled", true);
pref("toolkit.telemetry.firstShutdownPing.enabled", true);
pref("urlclassifier.passwordAllowTable", "goog-passwordwhite-proto");
pref("webgl.1.allow-core-profiles", false);

// removed, renamed or hidden in v57.0b3:
pref("accessibility.loadedInLastSession", false);
pref("app.support.e10sAccessibilityUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/accessibility-ppt");
pref("browser.bookmarks.showRecentlyBookmarked", true);
pref("browser.cache.auto_delete_cache_version", 0);
pref("browser.cache.use_new_backend", 0);
pref("browser.cache.use_new_backend_temp", true);
pref("browser.casting.enabled", false);
pref("browser.customizemode.tip0.learnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/customize");
pref("browser.customizemode.tip0.shown", false);
pref("browser.onboarding.hidden", false);
pref("browser.photon.structure.enabled", false);
pref("browser.preferences.useOldOrganization", false);
pref("devtools.debugger.chrome-debugging-port", 6080);
pref("devtools.jsonview.enabled", true);
pref("devtools.loader.hotreload", false);
pref("devtools.styleeditor.source-maps-enabled", true);
pref("devtools.theme", "light");
pref("devtools.toolbar.visible", false);
pref("devtools.webide.adaptersAddonID", "fxdevtools-adapters@mozilla.org");
pref("devtools.webide.adaptersAddonURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/valence/#OS#/valence-#OS#-latest.xpi");
pref("devtools.webide.autoinstallFxdtAdapters", true);
pref("geo.provider.ms-windows-location", false);
pref("gfx.webrender.profiler.enabled", false);
pref("layers.mlgpu.dev-enabled", false);
pref("layout.css.clip-path-shapes.enabled", true);
pref("media.eme.chromium-api.enabled", true);
pref("media.wakelock_timeout", 2000);
pref("network.http.keep_empty_response_headers_as_empty_string", true);
pref("security.webauth.u2f_enable_softtoken", false);
pref("security.webauth.u2f_enable_usbtoken", false);
pref("social.share.activationPanelEnabled", true);
pref("social.shareDirectory", "https://activations.cdn.mozilla.net/sharePanel.html");

// changed in v57.0b3:
pref("apz.autoscroll.enabled", true); // prev: false
pref("apz.frame_delay.enabled", true); // prev: false
pref("apz.keyboard.enabled", true); // prev: false
pref("browser.crashReports.unsubmittedCheck.enabled", true); // prev: false
pref("browser.newtabpage.activity-stream.enabled", true); // prev: false
pref("browser.onboarding.newtour", "performance,private,screenshots,addons,customize,default"); // prev: "private,addons,customize,search,default,sync"
pref("browser.onboarding.tourset-version", 2); // prev: 1
pref("browser.onboarding.updatetour", "performance,library,screenshots,singlesearch,customize,sync"); // prev: ""
pref("browser.preferences.offlineGroup.enabled", false); // prev: true
pref("browser.safebrowsing.provider.google.advisoryName", "Google Safe Browsing"); // prev: "Google Safe Browsing."
pref("browser.safebrowsing.provider.google4.advisoryName", "Google Safe Browsing"); // prev: "Google Safe Browsing."
pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto"); // prev: "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto"
pref("browser.search.widget.inNavBar", false); // prev: true
pref("browser.slowStartup.timeThreshold", 20000); // prev: 30000
pref("browser.storageManager.enabled", true); // prev: false
pref("browser.touchmode.auto", true); // prev: false
pref("browser.urlbar.speculativeConnect.enabled", true); // prev: false
pref("devtools.devedition.promo.enabled", true); // prev: false
pref("devtools.hud.loglimit", 10000); // prev: 1000
pref("devtools.webconsole.new-frontend-enabled", true); // prev: false
pref("dom.enable_performance_observer", true); // prev: false
pref("dom.forms.datetime", true); // prev: false
pref("dom.storageManager.enabled", true); // prev: false
pref("editor.use_div_for_default_newlines", true); // prev: false
pref("extensions.formautofill.available", "detect"); // prev: "staged-rollout"
pref("extensions.legacy.enabled", false); // prev: true
pref("font.name-list.monospace.ja", "MS Gothic, MS Mincho, Meiryo, Yu Gothic, Yu Mincho, MS PGothic, MS PMincho"); // prev: "MS Gothic, MS Mincho, MS PGothic, MS PMincho,Meiryo"
pref("font.name-list.sans-serif.ja", "Meiryo, Yu Gothic, MS PGothic, MS Gothic, Yu Mincho, MS PMincho, MS Mincho"); // prev: "MS PGothic, MS Gothic, MS PMincho, MS Mincho,Meiryo"
pref("font.name-list.sans-serif.ko", "Gulim, Malgun Gothic"); // prev: "Gulim"
pref("font.name-list.serif.ja", "Yu Mincho, MS PMincho, MS Mincho, Meiryo, Yu Gothic, MS PGothic, MS Gothic"); // prev: "MS PMincho, MS Mincho, MS PGothic, MS Gothic,Meiryo"
pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // prev: "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%"
pref("javascript.options.mem.nursery.max_kb", 16384); // prev: -1
pref("layers.mlgpu.enable-on-windows7", true); // prev: false
pref("layout.css.servo.enabled", true); // prev: false
pref("media.windows-media-foundation.use-nv12-format", true); // prev: false
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"
pref("memory.free_dirty_pages", true); // prev: false
pref("network.standard-url.punycode-host", true); // prev: false
pref("plugin.state.flash", 1); // prev: 2
pref("preferences.allow.omt-write", true); // prev: false
pref("privacy.popups.disable_from_plugins", 3); // prev: 2
pref("security.data_uri.block_toplevel_data_uri_navigations", true); // prev: false
pref("security.data_uri.unique_opaque_origin", true); // prev: false
pref("security.mixed_content.send_hsts_priming", true); // prev: false
pref("security.mixed_content.use_hsts", true); // prev: false
pref("security.tls.version.max", 4); // prev: 3
pref("security.webauth.webauthn_enable_usbtoken", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"
pref("urlclassifier.downloadAllowTable", "goog-downloadwhite-proto"); // prev: "goog-downloadwhite-digest256"
pref("urlclassifier.downloadBlockTable", "goog-badbinurl-proto"); // prev: "goog-badbinurl-shavar"
pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,test-harmful-simple,test-malware-simple,test-unwanted-simple"); // prev: "goog-malware-shavar,goog-unwanted-shavar,test-malware-simple,test-unwanted-simple"
pref("urlclassifier.phishTable", "goog-phish-proto,test-phish-simple"); // prev: "goog-phish-shavar,test-phish-simple"
