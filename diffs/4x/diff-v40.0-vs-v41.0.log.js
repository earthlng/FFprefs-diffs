/******************************************************************************************
 * diffs between FF prefs v40.0 and v41.0
 *
 * prefs: 2576
 *        2465 matching prefs
 *         111 diffs ( 81 new, 16 gone, 14 different )
 ******************************************************************************************/
// new in v41.0:
pref("browser.download.loglevel", "Error");
pref("browser.safebrowsing.downloads.remote.timeout_ms", 10000);
pref("browser.safebrowsing.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.search.param.yahoo-fr", "moz35");
pref("browser.search.param.yahoo-fr-ja", "mozff");
pref("browser.translation.engine", "bing");
pref("browser.urlbar.restrict.searches", "$");
pref("browser.urlbar.suggest.searches", false);
pref("canvas.capturestream.enabled", false);
pref("caret.manages-android-actionbar", false);
pref("datareporting.healthreport.about.reportUrlUnified", "https://fhr.cdn.mozilla.net/%LOCALE%/v4/");
pref("devtools.debugger.ui.panes-workers-and-sources-width", 200);
pref("devtools.debugger.workers", false);
pref("devtools.inspector.animationInspectorV3", false);
pref("devtools.netmonitor.har.compress", false);
pref("devtools.netmonitor.har.defaultFileName", "Archive %y-%m-%d %H-%M-%S");
pref("devtools.netmonitor.har.defaultLogDir", "");
pref("devtools.netmonitor.har.enableAutoExportToFile", false);
pref("devtools.netmonitor.har.forceExport", false);
pref("devtools.netmonitor.har.includeResponseBodies", true);
pref("devtools.netmonitor.har.jsonp", false);
pref("devtools.netmonitor.har.jsonpCallback", "");
pref("devtools.netmonitor.har.pageLoadedTimeout", 1500);
pref("devtools.performance.ui.enable-allocations", false);
pref("devtools.performance.ui.enable-jit-optimizations", false);
pref("devtools.toolbox.previousHost", "side");
pref("dom.ipc.plugins.asyncInit.enabled", false);
pref("dom.ipc.plugins.sandbox-level.flash", 0);
pref("dom.messageChannel.enabled", true);
pref("dom.push.http2.maxRetries", 2);
pref("dom.push.http2.reset_retry_count_after_ms", 60000);
pref("dom.push.http2.retryInterval", 5000);
pref("dom.url.getters_decode_hash", false);
pref("font.minimum-size.x-math", 0);
pref("font.name.cursive.x-math", "Comic Sans MS");
pref("font.name.monospace.x-math", "Courier New");
pref("font.name.sans-serif.x-math", "Arial");
pref("font.name.serif.x-math", "Latin Modern Math");
pref("font.name-list.serif.x-math", "Latin Modern Math, XITS Math, Cambria Math, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Symbol, Times New Roman");
pref("identity.fxaccounts.profile_image.enabled", true);
pref("intl.ime.hack.on_ime_unaware_apps.fire_key_events_for_composition", false);
pref("intl.imm.composition_font", "");
pref("intl.imm.composition_font.japanist_2003", "MS PGothic");
pref("intl.imm.japanese.assume_active_tip_name_as", "");
pref("intl.imm.vertical_writing.always_assume_not_supported", false);
pref("intl.tsf.hack.ms_simplified_chinese.query_insert_result", true);
pref("intl.tsf.hack.ms_traditional_chinese.query_insert_result", true);
pref("javascript.options.compact_on_user_inactive_delay", 300000);
pref("layers.compositor-lru-size", 0);
pref("layers.deaa.enabled", true);
pref("layout.accessiblecaret.bar.width", "2.0");
pref("layout.accessiblecaret.enabled", false);
pref("layout.accessiblecaret.height", "47.0");
pref("layout.accessiblecaret.margin-left", "-23.5");
pref("layout.accessiblecaret.timeout_ms", 3000);
pref("layout.accessiblecaret.width", "44.0");
pref("layout.css.contain.enabled", false);
pref("layout.css.text-combine-upright.enabled", false);
pref("loop.textChat.enabled", true);
pref("media.format-reader.mp4", true);
pref("media.mediasource.format-reader", false);
pref("media.mediasource.format-reader.mp4", true);
pref("media.peerconnection.ice.force_interface", "");
pref("media.peerconnection.ice.stun_client_maximum_transmits", 7);
pref("media.peerconnection.ice.tcp", false);
pref("media.peerconnection.ice.trickle_grace_period", 5000);
pref("network.auth.subresource-http-auth-allow", 2);
pref("network.http.enable-packaged-apps", false);
pref("selectioncaret.observes.compositions", false);
pref("selectioncaret.visibility.affectscaret", false);
pref("signon.ui.experimental", false);
pref("svg.transform-origin.enabled", false);
pref("toolkit.asyncshutdown.log", false);
pref("toolkit.telemetry.optoutSample", true);
pref("touchcaret.extendedvisibility", false);
pref("view_source.tab", false);
pref("webgl.disable-debug-renderer-info", false);
pref("webgl.disable-fail-if-major-performance-caveat", false);
pref("webgl.renderer-string-override", "");
pref("webgl.vendor-string-override", "");

// removed, renamed or hidden in v41.0:
pref("browser.download.debug", false);
pref("browser.newtab.url", "about:newtab");
pref("browser.safebrowsing.reportErrorURL", "http://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%");
pref("browser.safebrowsing.reportGenericURL", "http://%LOCALE%.phish-generic.mozilla.com/?hl=%LOCALE%");
pref("browser.safebrowsing.reportMalwareErrorURL", "http://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%");
pref("browser.safebrowsing.reportMalwareURL", "http://%LOCALE%.malware-report.mozilla.com/?hl=%LOCALE%");
pref("browser.safebrowsing.reportURL", "https://safebrowsing.google.com/safebrowsing/report?");
pref("devtools.debugger.ui.panes-sources-width", 200);
pref("devtools.performance.ui.show-jit-optimizations", false);
pref("dom.ipc.plugins.asyncInit", true);
pref("dom.workers.websocket.enabled", true);
pref("font.mathfont-family", "MathJax_Main, STIXNonUnicode, STIXSizeOneSym, STIXGeneral, Asana Math, Symbol, DejaVu Sans, Cambria Math");
pref("full-screen-api.content-only", false);
pref("network.auth.allow-subresource-auth", 1);
pref("network.http.spdy.enabled.http2draft", true);
pref("plugins.enumerable_names", "*");

// changed in v41.0:
pref("app.update.badgeWaitTime", 0); // prev: 345600
pref("browser.pocket.enabledLocales", "cs de en-GB en-US en-ZA es-ES es-MX fr hu it ja ja-JP-mac ko nl pl pt-BR pt-PT ru zh-CN zh-TW"); // prev: "en-US en-GB en-ZA de es-ES ja ja-JP-mac ru"
pref("browser.safebrowsing.reportPhishURL", "https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url="); // prev: "http://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%"
pref("devtools.inspector.show_pseudo_elements", false); // prev: true
pref("dom.caches.enabled", true); // prev: false
pref("font.default.th", "sans-serif"); // prev: "serif"
pref("intl.tsf.enable", true); // prev: false
pref("layers.offmainthreadcomposition.async-animations", true); // prev: false
pref("layout.css.font-loading-api.enabled", true); // prev: false
pref("layout.css.vertical-text.enabled", true); // prev: false
pref("media.peerconnection.default_iceservers", "[]"); // prev: "[{\"urls\": [\"stun:stun.services.mozilla.com\"]}]"
pref("network.dns.get-ttl", true); // prev: false
pref("network.manage-offline-status", true); // prev: false
pref("services.sync.log.appender.console", "Fatal"); // prev: "Warn"

