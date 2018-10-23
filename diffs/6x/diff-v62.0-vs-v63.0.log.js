/******************************************************************************************
 * diffs between FF prefs v62.0 and v63.0
 *
 * prefs: 3327
 *        3128 matching prefs
 *         199 diffs ( 122 new, 56 gone, 21 different )
 ******************************************************************************************/
// new in v63.0:
pref("accessibility.typeaheadfind.manual", true);
pref("apz.allow_double_tap_zooming", true);
pref("browser.bookmarks.editDialog.showForNewBookmarks", true);
pref("browser.contentblocking.allowlist.annotations.enabled", true);
pref("browser.contentblocking.allowlist.storage.enabled", true);
pref("browser.contentblocking.cookies-site-data.ui.reject-trackers.enabled", true);
pref("browser.contentblocking.cookies-site-data.ui.reject-trackers.recommended", true);
pref("browser.contentblocking.enabled", true);
pref("browser.contentblocking.fastblock.control-center.ui.enabled", false);
pref("browser.contentblocking.fastblock.ui.enabled", false);
pref("browser.contentblocking.global-toggle.enabled", false);
pref("browser.contentblocking.introCount", 0);
pref("browser.contentblocking.rejecttrackers.control-center.ui.enabled", true);
pref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", true);
pref("browser.contentblocking.rejecttrackers.ui.enabled", true);
pref("browser.contentblocking.rejecttrackers.ui.recommended", true);
pref("browser.contentblocking.reportBreakage.enabled", false);
pref("browser.contentblocking.reportBreakage.url", "https://tracking-protection-issues.herokuapp.com/new");
pref("browser.contentblocking.trackingprotection.control-center.ui.enabled", true);
pref("browser.contentblocking.trackingprotection.ui.enabled", true);
pref("browser.contentblocking.ui.enabled", true);
pref("browser.ctrlTab.recentlyUsedOrder", true);
pref("browser.fastblock.enabled", false);
pref("browser.fastblock.limit", 0);
pref("browser.fastblock.timeout", 5000);
pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", false);
pref("browser.newtabpage.activity-stream.asrouter.messageProviders", "[{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":false,\"cohort\":0},{\"id\":\"snippets\",\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/us-west/bundles/bundle_d6d90fb9098ce8b45e60acf601bcb91b68322309.json\",\"updateCycleInMs\":14400000,\"enabled\":false},{\"id\":\"cfr\",\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"enabled\":false,\"cohort\":\"\"}]");
pref("browser.newtabpage.activity-stream.pocketCta", "{\"cta_button\":\"\",\"cta_text\":\"\",\"cta_url\":\"\",\"use_cta\":false}");
pref("browser.tabs.remote.separatePrivilegedContentProcess", false);
pref("devtools.aboutdebugging.collapsibilities.installedExtension", false);
pref("devtools.aboutdebugging.collapsibilities.otherWorker", false);
pref("devtools.aboutdebugging.collapsibilities.serviceWorker", false);
pref("devtools.aboutdebugging.collapsibilities.sharedWorker", false);
pref("devtools.aboutdebugging.collapsibilities.tab", false);
pref("devtools.aboutdebugging.collapsibilities.temporaryExtension", false);
pref("devtools.aboutdebugging.network-locations", "[]");
pref("devtools.aboutdebugging.new-enabled", false);
pref("devtools.aboutdebugging.showSystemAddons", false);
pref("devtools.debugger.features.autocomplete-expressions", false);
pref("devtools.debugger.features.component-pane", false);
pref("devtools.debugger.features.map-await-expression", false);
pref("devtools.debugger.features.map-expression-bindings", true);
pref("devtools.inspector.chrome.three-pane-enabled", false);
pref("devtools.promote.accessibility", 1);
pref("devtools.remote.adb.extensionID", "adb@mozilla.org");
pref("devtools.responsive.leftAlignViewport.enabled", false);
pref("devtools.responsive.show-setting-tooltip", true);
pref("dom.animations-api.compositing.enabled", false);
pref("dom.animations-api.getAnimations.enabled", false);
pref("dom.animations-api.implicit-keyframes.enabled", false);
pref("dom.animations-api.timelines.enabled", false);
pref("dom.datatransfer.mozAtAPIs", true);
pref("dom.events.asyncClipboard", true);
pref("dom.events.asyncClipboard.dataTransfer", false);
pref("dom.events.testing.asyncClipboard", false);
pref("dom.ipc.keepProcessesAlive.privileged", 1);
pref("dom.ipc.processCount.privileged", 1);
pref("dom.payments.defaults.saveAddress", true);
pref("dom.payments.defaults.saveCreditCard", false);
pref("dom.payments.response.timeout", 5000);
pref("dom.pointer-lock.enabled", true);
pref("dom.ua_widget.enabled", false);
pref("dom.visualviewport.enabled", false);
pref("dom.vr.process.enabled", false);
pref("dom.vr.service.enabled", false);
pref("dom.webgpu.enable", false);
pref("dom.window.event.enabled", false);
pref("editor.inline_table_editing.enabled_by_default", true);
pref("editor.positioning.enabled_by_default", true);
pref("editor.resizing.enabled_by_default", true);
pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%");
pref("extensions.webextensions.enablePerformanceCounters", false);
pref("gfx.webrender.debug.show-overdraw", false);
pref("gfx.webrender.dl.dump-content", false);
pref("gfx.webrender.dl.dump-parent", false);
pref("gfx.webrender.force-disabled", false);
pref("identity.fxaccounts.autoconfig.uri", "");
pref("identity.fxaccounts.commands.enabled", false);
pref("intl.multilingual.enabled", false);
pref("intl.tsf.hack.allow_to_stop_hacking_on_build_17643_or_later", false);
pref("io.activity.enabled", false);
pref("layout.css.motion-path.enabled", false);
pref("layout.css.offset-logical-properties.enabled", false);
pref("layout.css.overflow.moz-scrollbars.enabled", false);
pref("layout.css.overflow-break.intrinsic-size", false);
pref("layout.css.scrollbar-width.enabled", false);
pref("layout.css.unknown-webkit-pseudo-element", false);
pref("layout.css.use-counters.enabled", false);
pref("layout.css.xul-box-display-values.content.enabled", true);
pref("layout.css.xul-tree-pseudos.content.enabled", true);
pref("marionette.log.truncate", true);
pref("media.allowed-to-play.enabled", false);
pref("media.autoplay.allow-extension-background-pages", true);
pref("media.autoplay.allow-muted", true);
pref("media.autoplay.ask-permission", false);
pref("media.autoplay.block-event.enabled", false);
pref("media.autoplay.block-webaudio", false);
pref("media.autoplay.default", 0);
pref("media.autoplay.enabled.user-gestures-needed", false);
pref("media.benchmark.vp9.fps", 0);
pref("media.benchmark.vp9.versioncheck", 0);
pref("media.media-capabilities.enabled", true);
pref("media.media-capabilities.screen.enabled", false);
pref("media.peerconnection.sdp.rust.compare", false);
pref("media.peerconnection.sdp.rust.enabled", false);
pref("media.setsinkid.enabled", false);
pref("network.cookie.quotaPerHost", 150);
pref("network.dns.resolver-thread-extra-idle-time-seconds", 60);
pref("network.http.send_window_size", 1024);
pref("network.proxy.enable_wpad_over_dhcp", true);
pref("network.trr.disable-ECS", true);
pref("network.trr.max-fails", 5);
pref("prio.publicKeyA", "35AC1C7576C7C6EDD7FED6BCFC337B34D48CB4EE45C86BEEFB40BD8875707733");
pref("prio.publicKeyB", "26E6674E65425B823F1F1D5F96E3BB3EF9E406EC7FBA7DEF8B08A35DD135AF50");
pref("privacy.restrict3rdpartystorage.expiration", 2592000);
pref("security.csp.reporting.script-sample.max-length", 40);
pref("security.pki.mitm_detected", false);
pref("services.settings.poll_interval", 86400);
pref("services.sync.prefs.sync.browser.contentblocking.enabled", true);
pref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", true);
pref("urlclassifier.trackingAnnotationTable", "test-track-simple,base-track-digest256");
pref("urlclassifier.trackingAnnotationWhitelistTable", "test-trackwhite-simple,mozstd-trackwhite-digest256");

// removed, renamed or hidden in v63.0:
pref("accessibility.typeaheadfind.enabletimeout", true);
pref("app.update.enabled", true);
pref("browser.chrome.favicons", true);
pref("browser.chromeURL", "chrome://browser/content/");
pref("browser.contentHandlers.types.0.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.0.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.0.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.1.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.1.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.1.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.2.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.2.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.2.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.3.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.3.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.3.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.4.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.4.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.4.uri", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.5.title", "chrome://browser-region/locale/region.properties");
pref("browser.contentHandlers.types.5.type", "application/vnd.mozilla.maybe.feed");
pref("browser.contentHandlers.types.5.uri", "chrome://browser-region/locale/region.properties");
pref("browser.ctrlTab.previews", false);
pref("browser.newtabpage.activity-stream.asrouter.snippetsUrl", "");
pref("browser.newtabpage.activity-stream.asrouterExperimentEnabled", false);
pref("browser.newtabpage.activity-stream.asrouterOnboardingCohort", 0);
pref("browser.newtabpage.activity-stream.feeds.theme", true);
pref("browser.newtabpage.activity-stream.section.topstories.showDisclaimer", true);
pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "https://activity-stream-icons.services.mozilla.com/v1/icons.json.br");
pref("browser.showQuitWarning", false);
pref("devtools.browserconsole.html", false);
pref("devtools.debugger.component-stack-visible", true);
pref("devtools.debugger.features.component-stack", false);
pref("dom.animations-api.element-animate.enabled", true);
pref("extensions.webextensions.themes.enabled", true);
pref("gfx.webrender.async-scene-build", true);
pref("identity.fxaccounts.messages.enabled", false);
pref("layout.accessiblecaret.bar.enabled", false);
pref("layout.accessiblecaret.bar.width", "2.0");
pref("layout.css.all-shorthand.enabled", true);
pref("layout.css.property-append-only", false);
pref("layout.css.unset-value.enabled", true);
pref("media.autoplay.enabled", true);
pref("media.ogg.flac.enabled", true);
pref("media.wmf.amd.vp9.enabled", false);
pref("network.cookie.lifetime.days", 90);
pref("network.cookie.prefsMigrated", false);
pref("privacy.trackingprotection.storagerestriction.enabled", false);
pref("privacy.trackingprotection.ui.enabled", true);
pref("services.blocklist.update_enabled", true);
pref("services.sync.prefs.sync.browser.ctrlTab.previews", true);
pref("services.sync.prefs.sync.network.cookie.lifetime.days", true);
pref("shield.savant.enabled", false);
pref("shield.savant.loglevel", "warn");
pref("svg.marker-improvements.enabled", true);
pref("webgl.webgl2-compat-mode", false);

// changed in v63.0:
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", ""); // prev: "google"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256"
pref("browser.startup.homepage", "about:home"); // prev: "chrome://branding/locale/browserconfig.properties"
pref("browser.translation.engine", "Google"); // prev: "bing"
pref("devtools.accessibility.enabled", true); // prev: false
pref("devtools.debugger.features.skip-pausing", true); // prev: false
pref("devtools.inspector.fonteditor.enabled", true); // prev: false
pref("devtools.inspector.fonthighlighter.enabled", true); // prev: false
pref("devtools.toolbox.selectedTool", "inspector"); // prev: "webconsole"
pref("dom.animations-api.core.enabled", true); // prev: false
pref("dom.clearSiteData.enabled", true); // prev: false
pref("dom.webcomponents.customelements.enabled", true); // prev: false
pref("dom.webcomponents.shadowdom.enabled", true); // prev: false
pref("extensions.webextensions.background-delayed-startup", true); // prev: false
pref("layout.css.prefixes.device-pixel-ratio-webkit", true); // prev: false
pref("layout.css.webkit-appearance.enabled", true); // prev: false
pref("media.av1.enabled", false); // prev: true
pref("network.trr.request-timeout", 1500); // prev: 3000
pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query"); // prev: ""
pref("security.csp.enable_violation_events", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256"
