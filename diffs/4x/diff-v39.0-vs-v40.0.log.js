/******************************************************************************************
 * diffs between FF prefs v39.0 and v40.0
 *
 * prefs: 2514
 *        2400 matching prefs
 *         114 diffs ( 71 new, 19 gone, 24 different )
 ******************************************************************************************/
// new in v40.0:
pref("app.update.badgeWaitTime", 345600);
pref("browser.fullscreen.animate", true);
pref("browser.push.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/push/");
pref("browser.search.geoSpecificDefaults.url", "https://search.services.mozilla.com/1/%APP%/%VERSION%/%CHANNEL%/%LOCALE%/%REGION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%");
pref("browser.search.jarURIs", "chrome://browser/locale/searchplugins/");
pref("browser.search.loadFromJars", true);
pref("browser.search.redirectWindowsSearch", true);
pref("browser.sessionstore.upgradeBackup.maxUpgradeBackups", 3);
pref("browser.usedOnWindows10", false);
pref("browser.usedOnWindows10.introURL", "https://www.mozilla.org/%LOCALE%/firefox/windows-10/welcome/?utm_source=firefox-browser&utm_medium=firefox-browser");
pref("devtools.browserconsole.filter.serviceworkers", true);
pref("devtools.browserconsole.filter.sharedworkers", true);
pref("devtools.browserconsole.filter.windowlessworkers", true);
pref("devtools.command-button-rulers.enabled", false);
pref("devtools.gcli.imgurClientID", '0df414e888d7240');
pref("devtools.gcli.imgurUploadURL", "https://api.imgur.com/3/image");
pref("devtools.inspector.mdnDocsTooltip.enabled", true);
pref("devtools.performance.enabled", true);
pref("devtools.performance.profiler.buffer-size", 10000000);
pref("devtools.performance.profiler.sample-frequency-khz", 1);
pref("devtools.performance.ui.experimental", false);
pref("devtools.performance.ui.show-jit-optimizations", false);
pref("devtools.scratchpad.editorFontSize", 12);
pref("devtools.scratchpad.lineNumbers", true);
pref("devtools.scratchpad.wrapText", false);
pref("devtools.webconsole.filter.serviceworkers", false);
pref("devtools.webconsole.filter.sharedworkers", false);
pref("devtools.webconsole.filter.windowlessworkers", false);
pref("devtools.webide.enableRuntimeConfiguration", false);
pref("dom.apps.reset-permissions", false);
pref("dom.compositionevent.allow_control_characters", false);
pref("dom.ipc.shims.enabledWarnings", false);
pref("dom.presentation.tcp_server.debug", false);
pref("dom.push.adaptive.enabled", false);
pref("dom.push.adaptive.gap", 60000);
pref("dom.push.adaptive.lastGoodPingInterval", 180000);
pref("dom.push.adaptive.lastGoodPingInterval.mobile", 180000);
pref("dom.push.adaptive.lastGoodPingInterval.wifi", 180000);
pref("dom.push.adaptive.upperLimit", 1740000);
pref("dom.push.connection.enabled", true);
pref("dom.push.debug", false);
pref("dom.push.enabled", false);
pref("dom.push.pingInterval", 1800000);
pref("dom.push.pingInterval.default", 180000);
pref("dom.push.pingInterval.mobile", 180000);
pref("dom.push.pingInterval.wifi", 180000);
pref("dom.push.requestTimeout", 10000);
pref("dom.push.retryBaseInterval", 5000);
pref("dom.push.serverURL", "wss://push.services.mozilla.com/");
pref("dom.push.udp.wakeupEnabled", false);
pref("dom.push.userAgentID", "");
pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
pref("extensions.hotfix.certs.2.sha1Fingerprint", "39:E7:2B:7A:5B:CF:37:78:F9:5D:4A:E0:53:2D:2F:3D:68:53:C5:60");
pref("gl.require-hardware", false);
pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.firefox.com/");
pref("lightweightThemes.selectedThemeID", "");
pref("loop.contextInConversations.enabled", true);
pref("mathml.scale_stretchy_operators.enabled", true);
pref("media.hardware-video-decoding.enabled", true);
pref("memory.report_concurrency", 10);
pref("network.auth.allow-subresource-auth", 1);
pref("network.offline-mirrors-connectivity", true);
pref("plugins.testmode", false);
pref("security.onecrl.maximum_staleness_in_seconds", 0);
pref("selectioncaret.detects.longtap", true);
pref("signon.rememberSignons.visibilityToggle", false);
pref("toolkit.telemetry.archive.enabled", true);
pref("toolkit.telemetry.unified", true);
pref("toolkit.telemetry.unifiedIsOptIn", true);
pref("xpinstall.signatures.devInfoURL", "https://wiki.mozilla.org/Addons/Extension_Signing");
pref("xpinstall.signatures.required", false);

// removed, renamed or hidden in v40.0:
pref("browser.devedition.theme.enabled", false);
pref("browser.devedition.theme.showCustomizeButton", false);
pref("browser.fullscreen.animateUp", 1);
pref("devtools.debugger.chrome-enabled", true);
pref("devtools.performance_dev.enabled", false);
pref("devtools.profiler.enabled", true);
pref("devtools.profiler.ui.flatten-tree-recursion", true);
pref("devtools.profiler.ui.show-idle-blocks", true);
pref("devtools.profiler.ui.show-platform-data", false);
pref("devtools.timeline.enabled", false);
pref("devtools.timeline.hiddenMarkers", "[]");
pref("dom.webcrypto.enabled", true);
pref("loop.contextInConverations.enabled", false);
pref("media.windows-media-foundation.use-dxva", true);
pref("network.http.atsvc.enabled", true);
pref("network.http.atsvc.oe", true);
pref("services.push.enabled", false);
pref("services.push.serverURL", "wss://push.services.mozilla.com/");
pref("toolbar.customization.usesheet", false);

// changed in v40.0:
pref("apz.fling_repaint_interval", 16); // prev: 75
pref("apz.pan_repaint_interval", 16); // prev: 250
pref("apz.smooth_scroll_repaint_interval", 16); // prev: 75
pref("apz.x_skate_size_multiplier", "2.5"); // prev: "1.5"
pref("apz.y_skate_size_multiplier", "3.5"); // prev: "2.5"
pref("browser.uitour.readerViewTrigger", "^https:\\/\\/www\\.mozilla\\.org\\/[^\\/]+\\/firefox\\/reading\\/start"); // prev: "^https:\/\/www\.mozilla\.org\/[^\/]+\/firefox\/reading\/start"
pref("devtools.command-button-frames.enabled", true); // prev: false
pref("devtools.performance.memory.max-log-length", 125000); // prev: 2147483647
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","tilt toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers"]'); // prev: '["splitconsole", "paintflashing toggle","tilt toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage"]'
pref("devtools.webide.adaptersAddonURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/valence/#OS#/valence-#OS#-latest.xpi"); // prev: "https://ftp.mozilla.org/pub/mozilla.org/labs/fxdt-adapters/#OS#/fxdt-adapters-#OS#-latest.xpi"
pref("dom.ipc.plugins.asyncInit", true); // prev: false
pref("dom.ipc.plugins.contentTimeoutSecs", 10); // prev: 45
pref("gfx.vsync.compositor", true); // prev: false
pref("gfx.vsync.hw-vsync.enabled", true); // prev: false
pref("gfx.vsync.refreshdriver", true); // prev: false
pref("image.downscale-during-decode.enabled", true); // prev: false
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-3\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"version\":\"1.0\"}]"); // prev: "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-3\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"textcolor\":\"#None\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"version\":\"1.0\"}]"
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au"
pref("media.peerconnection.identity.enabled", true); // prev: false
pref("security.apps.privileged.CSP.default", "default-src * data: blob:; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'"); // prev: "default-src *; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'"
pref("social.share.activationPanelEnabled", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,goog-downloadwhite-digest256,mozpub-track-digest256"); // prev: "test-malware-simple,test-phish-simple,goog-downloadwhite-digest256,mozpub-track-digest256"
pref("urlclassifier.malwareTable", "goog-malware-shavar,goog-unwanted-shavar,test-malware-simple,test-unwanted-simple"); // prev: "goog-malware-shavar,test-malware-simple"
pref("xpinstall.customConfirmationUI", true); // prev: false

