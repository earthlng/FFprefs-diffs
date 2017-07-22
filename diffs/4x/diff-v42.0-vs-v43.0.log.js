/******************************************************************************************
 * diffs between FF prefs v42.0 and v43.0
 *
 * prefs: 2659
 *        2554 matching prefs
 *         105 diffs ( 50 new, 36 gone, 19 different )
 ******************************************************************************************/
// new in v43.0:
pref("apz.highlight_checkerboarded_areas", false);
pref("browser.safebrowsing.provider.google.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.provider.google.gethashURL", "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.safebrowsing.provider.google.lists", "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");
pref("browser.safebrowsing.provider.google.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=");
pref("browser.safebrowsing.provider.google.updateURL", "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2&key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.safebrowsing.provider.mozilla.lists", "mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256");
pref("browser.safebrowsing.provider.mozilla.lists.mozfull.description", "mozfullDesc");
pref("browser.safebrowsing.provider.mozilla.lists.mozfull.name", "mozfullName");
pref("browser.safebrowsing.provider.mozilla.lists.mozstd.description", "mozstdDesc");
pref("browser.safebrowsing.provider.mozilla.lists.mozstd.name", "mozstdName");
pref("browser.safebrowsing.provider.mozilla.updateURL", "https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.shell.defaultBrowserCheckCount", 0);
pref("browser.shell.skipDefaultBrowserCheck", true);
pref("devtools.browserconsole.filter.servererror", false);
pref("devtools.browserconsole.filter.serverinfo", false);
pref("devtools.browserconsole.filter.serverlog", false);
pref("devtools.browserconsole.filter.serverwarn", false);
pref("devtools.memory.enabled", false);
pref("devtools.performance.ui.enable-memory-flame", false);
pref("devtools.performance.ui.show-triggers-for-gc-types", "TOO_MUCH_MALLOC ALLOC_TRIGGER LAST_DITCH EAGER_ALLOC_TRIGGER");
pref("devtools.telemetry.supported_performance_marks", "contentInteractive,navigationInteractive,navigationLoaded,visuallyLoaded,fullyLoaded,mediaEnumerated,scanEnd");
pref("devtools.webconsole.filter.servererror", false);
pref("devtools.webconsole.filter.serverinfo", false);
pref("devtools.webconsole.filter.serverlog", false);
pref("devtools.webconsole.filter.serverwarn", false);
pref("dom.fileHandle.enabled", true);
pref("dom.mozKillSwitch.enabled", false);
pref("dom.presentation.discovery.timeout_ms", 10000);
pref("dom.select_events.enabled", false);
pref("font.default.x-math", "serif");
pref("font.size.fixed.x-math", 13);
pref("font.size.variable.x-math", 16);
pref("full-screen-api.warning.delay", 500);
pref("full-screen-api.warning.timeout", 3000);
pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_caret", true);
pref("intl.tsf.hack.ms_japanese_ime.do_not_return_no_layout_error_at_first_char", true);
pref("layout.css.control-characters.visible", false);
pref("loop.linkClicker.url", "https://hello.firefox.com/");
pref("media.gmp.trial-create.enabled", true);
pref("media.peerconnection.ice.tcp_so_sock_count", 0);
pref("network.http.packaged-apps-developer-mode", false);
pref("security.pki.sha1_enforcement_level", 2);
pref("security.sri.enable", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", true);
pref("svg.transform-box.enabled", false);
pref("toolkit.telemetry.optoutSample", true);
pref("ui.osk.debug.keyboardDisplayReason", "");
pref("ui.osk.require_win10", false);

// removed, renamed or hidden in v43.0:
pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.gethashURL", "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.safebrowsing.malware.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=");
pref("browser.safebrowsing.updateURL", "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2&key=%GOOGLE_API_KEY%");
pref("browser.search.jarURIs", "chrome://browser/locale/searchplugins/");
pref("browser.search.loadFromJars", true);
pref("browser.search.showOneOffButtons", true);
pref("browser.trackingprotection.gethashURL", "https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.trackingprotection.updateURL", "https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");
pref("browser.zoom.reflowOnZoom", false);
pref("browser.zoom.reflowZoom.reflowTextOnPageLoad", true);
pref("browser.zoom.reflowZoom.reflowTimeout", 500);
pref("devtools.inspector.animationInspectorV3", false);
pref("dom.ipc.plugins.enabled", true);
pref("dom.messageChannel.enabled", true);
pref("gfx.font_rendering.directwrite.enabled", false);
pref("gfx.vsync.compositor", true);
pref("gfx.vsync.hw-vsync.enabled", true);
pref("gfx.vsync.refreshdriver", true);
pref("image.high_quality_downscaling.enabled", true);
pref("image.high_quality_downscaling.min_factor", 1000);
pref("image.high_quality_upscaling.max_size", 20971520);
pref("intl.tsf.hack.google_ja_input.do_not_return_no_layout_error_at_caret", true);
pref("intl.tsf.hack.google_ja_input.do_not_return_no_layout_error_at_first_char", true);
pref("layout.css.will-change.enabled", true);
pref("media.audio_data.enabled", false);
pref("media.fragmented-mp4.exposed", true);
pref("media.mediasource.format-reader", true);
pref("media.mediasource.format-reader.webm", false);
pref("media.useAudioChannelService", true);
pref("network.http.use-cache", true);
pref("network.sts.serve_multiple_events_per_poll_iteration", true);
pref("pfs.datasource.url", "https://pfs.mozilla.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%&appID=%APP_ID%&appVersion=%APP_VERSION%&clientOS=%CLIENT_OS%&chromeLocale=%CHROME_LOCALE%&appRelease=%APP_RELEASE%");
pref("security.ssl.warn_missing_rfc5746", 1);
pref("svg.transform-origin.enabled", false);
pref("ui.osk.require_tablet_mode", true);

// changed in v43.0:
pref("browser.urlbar.unifiedcomplete", true); // prev: false
pref("canvas.capturestream.enabled", true); // prev: false
pref("datareporting.healthreport.about.reportUrl", "https://fhr.cdn.mozilla.net/%LOCALE%/v4/"); // prev: "https://fhr.cdn.mozilla.net/%LOCALE%/"
pref("datareporting.policy.dataSubmissionEnabled.v2", false); // prev: true
pref("devtools.hud.loglimit.console", 1000); // prev: 200
pref("devtools.hud.loglimit.cssparser", 1000); // prev: 200
pref("devtools.hud.loglimit.exception", 1000); // prev: 200
pref("devtools.hud.loglimit.network", 1000); // prev: 200
pref("devtools.performance.timeline.hidden-markers", "[\"Composite\",\"CompositeForwardTransaction\"]"); // prev: "[]"
pref("devtools.webide.sidebars", true); // prev: false
pref("layout.spammy_warnings.enabled", false); // prev: true
pref("media.fragmented-mp4.ffmpeg.enabled", true); // prev: false
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org"
pref("network.IDN.use_whitelist", false); // prev: true
pref("security.onecrl.maximum_staleness_in_seconds", 108000); // prev: 0
pref("signon.rememberSignons.visibilityToggle", true); // prev: false
pref("ui.osk.enabled", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256"
pref("xpinstall.signatures.required", true); // prev: false

