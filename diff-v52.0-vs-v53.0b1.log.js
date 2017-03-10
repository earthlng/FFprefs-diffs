/******************************************************************************************
 * diffs between FF prefs v52.0 and v53.0b1
 *
 * prefs: 2870
 *        2736 matching prefs
 *         134 diffs ( 75 new, 37 gone, 22 different )
 ******************************************************************************************/
// new in v53.0b1:
pref("browser.formautofill.experimental", false);
pref("browser.migrate.automigrate.undo-survey", "https://qsurvey.mozilla.com/s3/Firefox-52-Import-Undo?prevBrowser=%IMPORTEDBROWSER%");
pref("browser.migrate.automigrate.undo-survey-locales", "en-US");
pref("browser.safebrowsing.temporary.take_v4_completion_result", false);
pref("browser.storageManager.enabled", false);
pref("browser.tabs.remote.separateFileUriProcess", false);
pref("browser.urlbar.decodeURLsOnCopy", false);
pref("devtools.command-button-pick.enabled", true);
pref("devtools.debugger.call-stack-visible", false);
pref("devtools.debugger.end-panel-collapsed", false);
pref("devtools.debugger.pending-selected-location", "{}");
pref("devtools.debugger.scopes-visible", false);
pref("devtools.debugger.start-panel-collapsed", false);
pref("devtools.debugger.tabs", "[]");
pref("devtools.gridinspector.showGridLineNumbers", false);
pref("devtools.gridinspector.showInfiniteLines", false);
pref("devtools.inspector.colorWidget.enabled", false);
pref("devtools.screenshot.audio.enabled", true);
pref("devtools.screenshot.clipboard.enabled", false);
pref("devtools.webconsole.filter.css", false);
pref("dom.dialog_element.enabled", false);
pref("dom.forms.selectSearch", false);
pref("dom.IntersectionObserver.enabled", false);
pref("dom.ipc.processCount.webLargeAllocation", 10);
pref("dom.largeAllocationHeader.enabled", true);
pref("dom.select_popup_in_parent.enabled", false);
pref("dom.storage.testing", false);
pref("extensions.getAddons.themes.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox");
pref("extensions.webcompat-reporter.enabled", false);
pref("extensions.webcompat-reporter.newIssueEndpoint", "https://webcompat.com/issues/new");
pref("extensions.webextensions.identity.redirectDomain", "extensions.allizom.org");
pref("extensions.webextensions.remote", false);
pref("extensions.webextensions.themes.enabled", false);
pref("identity.fxaccounts.settings.devices.uri", "https://accounts.firefox.com/settings/clients?service=sync&context=fx_desktop_v3");
pref("layers.geometry.basic.enabled", true);
pref("layers.geometry.opengl.enabled", true);
pref("layers.gpu-process.enabled", true);
pref("layout.animation.prerender.absolute-limit-x", 4096);
pref("layout.animation.prerender.absolute-limit-y", 4096);
pref("layout.animation.prerender.partial", false);
pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125");
pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125");
pref("layout.css.display-flow-root.enabled", true);
pref("layout.css.font-variations.enabled", false);
pref("media.cubeb.log_level", "");
pref("media.decoder.recycle.enabled", false);
pref("media.gpu-process-decoder", true);
pref("media.wmf.allow-unsupported-resolutions", false);
pref("network.http.referer.userControlPolicy", 3);
pref("network.standard-url.enable-rust", false);
pref("places.frecency.redirectSourceVisitBonus", 25);
pref("plugins.flashBlock.enabled", false);
pref("privacy.history.custom", false);
pref("privacy.permissionPrompts.showCloseButton", false);
pref("privacy.temporary_permission_expire_time_ms", 3600000);
pref("privacy.trackingprotection.annotate_channels", false);
pref("privacy.trackingprotection.lower_network_priority", false);
pref("privacy.userContext.longPressBehavior", 0);
pref("security.mixed_content.hsts_priming_request_timeout", 3000);
pref("security.webauth.webauthn", false);
pref("security.webauth.webauthn_enable_softtoken", false);
pref("security.webauth.webauthn_enable_usbtoken", false);
pref("services.blocklist.pinning.bucket", "pinning");
pref("services.blocklist.pinning.checked", 0);
pref("services.blocklist.pinning.collection", "pins");
pref("services.blocklist.pinning.enabled", true);
pref("svg.disabled", false);
pref("urlclassifier.flashAllowExceptTable", "testexcept-flashallow-simple");
pref("urlclassifier.flashAllowTable", "test-flashallow-simple");
pref("urlclassifier.flashExceptTable", "testexcept-flash-simple");
pref("urlclassifier.flashSubDocExceptTable", "testexcept-flashsubdoc-simple");
pref("urlclassifier.flashSubDocTable", "test-flashsubdoc-simple");
pref("urlclassifier.flashTable", "test-flash-simple");
pref("webgl.max-acceptable-fb-status-invals", 0);
pref("webgl.max-perf-warnings", 0);

// removed, renamed or hidden in v53.0b1:
pref("accessibility.ipc_architecture.enabled", true);
pref("browser.preferences.animateFadeIn", false);
pref("browser.tabs.dontfocusfordialogs", true);
pref("devtools.apps.forbidden-permissions", "embed-apps");
pref("devtools.netmonitor.statistics", true);
pref("dom.beforeAfterKeyboardEvent.enabled", false);
pref("dom.details_element.enabled", true);
pref("dom.mozInputMethod.enabled", false);
pref("dom.mozNetworkStats.enabled", false);
pref("dom.mozPermissionSettings.enabled", false);
pref("dom.mozSettings.allowForceReadOnly", false);
pref("dom.mozSettings.enabled", false);
pref("dom.mozSettings.SettingsDB.debug.enabled", false);
pref("dom.mozSettings.SettingsDB.verbose.enabled", false);
pref("dom.mozSettings.SettingsManager.debug.enabled", false);
pref("dom.mozSettings.SettingsManager.verbose.enabled", false);
pref("dom.mozSettings.SettingsRequestManager.debug.enabled", false);
pref("dom.mozSettings.SettingsRequestManager.verbose.enabled", false);
pref("dom.mozSettings.SettingsService.debug.enabled", false);
pref("dom.mozSettings.SettingsService.verbose.enabled", false);
pref("dom.node.rootNode.enabled", false);
pref("dom.presentation.discovery.legacy.enabled", false);
pref("dom.system_update.debug", false);
pref("dom.system_update.enabled", false);
pref("gecko.handlerService.allowRegisterFromDifferentHost", false);
pref("gfx.prefer-mesa-llvmpipe", false);
pref("image.mozsamplesize.enabled", false);
pref("layout.css.display-contents.enabled", true);
pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
pref("network.standard-url.encode-utf8", true);
pref("network.standard-url.escape-utf8", true);
pref("plugin.scan.Acrobat", "5.0");
pref("plugin.scan.Quicktime", "5.0");
pref("plugin.scan.WindowsMediaPlayer", "7.0");
pref("security.ssl.enable_npn", true);
pref("security.ssl.false_start.require-npn", false);
pref("security.tls.unrestricted_rc4_fallback", false);

// changed in v53.0b1:
pref("browser.addon-watch.ignore", "[\"mochikit@mozilla.org\",\"special-powers@mozilla.org\",\"fxdevtools-adapters@mozilla.org\",\"fx-devtools\",\"webcompat-reporter@mozilla.org\"]"); // prev: "[\"mochikit@mozilla.org\",\"special-powers@mozilla.org\",\"fxdevtools-adapters@mozilla.org\",\"fx-devtools\"]"
pref("browser.crashReports.unsubmittedCheck.enabled", true); // prev: false
pref("browser.migrate.automigrate.enabled", true); // prev: false
pref("browser.safebrowsing.provider.google4.gethashURL", ""); // prev: "https://safebrowsing.googleapis.com/v4/fullHashes:find?$req=%REQUEST_BASE64%&$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"
pref("devtools.devedition.promo.enabled", true); // prev: false
pref("devtools.jsonview.enabled", true); // prev: false
pref("devtools.netmonitor.har.defaultFileName", "Archive %date"); // prev: "Archive %y-%m-%d %H-%M-%S"
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","screenshot --fullpage --file", "rulers", "measure"]'); // prev: '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","screenshot --fullpage", "rulers", "measure"]'
pref("javascript.options.shared_memory", true); // prev: false
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]"); // prev: "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-3\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"version\":\"1.0\"}]"
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"); // prev: "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"
pref("media.dormant-on-pause-timeout-ms", 5000); // prev: -1
pref("media.getusermedia.browser.enabled", false); // prev: true
pref("media.navigator.audio.full_duplex", true); // prev: false
pref("places.frecency.permRedirectVisitBonus", 50); // prev: 0
pref("places.frecency.tempRedirectVisitBonus", 40); // prev: 0
pref("print.use_simplify_page", true); // prev: false
pref("security.tls.version.max", 4); // prev: 3
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*)$"); // prev: "^(about:.*|chrome://weave/.*|wyciwyg:.*|file:.*|blob:.*)$"
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,test-flashallow-simple,testexcept-flashallow-simple,test-flash-simple,testexcept-flash-simple,test-flashsubdoc-simple,testexcept-flashsubdoc-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"
pref("webextensions.storage.sync.enabled", true); // prev: false
pref("webgl.enable-debug-renderer-info", true); // prev: false

