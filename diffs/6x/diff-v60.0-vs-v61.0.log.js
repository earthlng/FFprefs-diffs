/******************************************************************************************
 * diffs between FF prefs v60.0 and v61.0
 *
 * prefs: 3298
 *        3087 matching prefs
 *         211 diffs ( 90 new, 101 gone, 20 different )
 ******************************************************************************************/
// new in v61.0:
pref("accessibility.monoaudio.enable", false);
pref("apz.android.chrome_fling_physics.enabled", false);
pref("apz.android.chrome_fling_physics.friction", "0.015");
pref("apz.android.chrome_fling_physics.inflexion", "0.35");
pref("apz.android.chrome_fling_physics.stop_threshold", "0.1");
pref("apz.max_tap_time", 300);
pref("browser.newtabpage.activity-stream.asrouter.snippetsUrl", "");
pref("browser.newtabpage.activity-stream.asrouterExperimentEnabled", false);
pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", true);
pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", true);
pref("browser.newtabpage.activity-stream.feeds.theme", true);
pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);
pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", true);
pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
pref("browser.tabs.20FpsThrobber", false);
pref("browser.tabs.30FpsThrobber", false);
pref("browser.tabs.closeTabByDblclick", false);
pref("browser.tabs.insertAfterCurrent", false);
pref("devtools.accessibility.enabled", false);
pref("devtools.application.enabled", false);
pref("devtools.browserconsole.html", false);
pref("devtools.debugger.alphabetize-outline", false);
pref("devtools.debugger.component-stack-visible", true);
pref("devtools.debugger.component-visible", true);
pref("devtools.debugger.features.component-stack", false);
pref("devtools.debugger.features.pause-points", true);
pref("devtools.debugger.features.skip-pausing", false);
pref("devtools.debugger.skip-pausing", false);
pref("devtools.debugger.tabsBlackBoxed", "[]");
pref("devtools.inspector.fonteditor.enabled", false);
pref("devtools.inspector.show-three-pane-tooltip", false);
pref("devtools.inspector.three-pane-enabled", false);
pref("devtools.inspector.three-pane-toggle", false);
pref("devtools.netmonitor.responseBodyLimit", 1048576);
pref("devtools.netmonitor.saveRequestAndResponseBodies", true);
pref("devtools.toolbox.tabsOrder", "");
pref("dom.event.default_to_passive_touch_listeners", true);
pref("dom.indexedDB.storageOption.enabled", false);
pref("dom.performance.enable_scheduler_timing", false);
pref("dom.performance.time_to_dom_content_flushed.enabled", false);
pref("dom.use_components_shim", true);
pref("dom.vr.external.enabled", false);
pref("extensions.webcompat.perform_injections", true);
pref("extensions.webextensions.background-delayed-startup", false);
pref("gfx.downloadable_fonts.validate_variation_tables", true);
pref("gfx.webrender.async-scene-build", 2);
pref("gfx.webrender.blob.invalidation", true);
pref("gfx.webrender.dcomp-win.enabled", true);
pref("identity.fxaccounts.messages.enabled", false);
pref("intl.ime.hack.on_any_apps.fire_key_events_for_composition", false);
pref("layers.enable-tiles-if-skia-pomtp", false);
pref("layers.tiles.edge-padding", false);
pref("layers.tiles.retain-back-buffer", true);
pref("layout.css.emulate-moz-box-with-flex", false);
pref("layout.css.getPropertyCSSValue.enabled", false);
pref("layout.css.moz-document.url-prefix-hack.enabled", true);
pref("layout.css.parsing.parallel", true);
pref("marionette.contentListener", false);
pref("media.audio-max-decode-error", 3);
pref("media.av1.enabled", true);
pref("media.clearkey.persistent-license.enabled", false);
pref("media.eme.audio.blank", false);
pref("media.eme.video.blank", false);
pref("media.forcestereo.enabled", false);
pref("media.hls.enabled", false);
pref("media.mediasource.experimental.enabled", false);
pref("media.resampling.enabled", false);
pref("media.ruin-av-sync.enabled", false);
pref("media.videocontrols.lock-video-orientation", false);
pref("media.video-max-decode-error", 2);
pref("media.webaudio.audiocontextoptions-samplerate.enabled", true);
pref("media.webspeech.recognition.force_enable", false);
pref("media.webspeech.synth.force_global_queue", false);
pref("media.webspeech.test.enable", false);
pref("media.webspeech.test.fake_fsm_events", false);
pref("media.webspeech.test.fake_recognition_service", false);
pref("mousewheel.autodir.enabled", false);
pref("mousewheel.autodir.honourroot", false);
pref("network.cookie.move.interval_sec", 10);
pref("network.http.fallback-connection-timeout", 5);
pref("network.predictor.doing-tests", false);
pref("security.block_ftp_subresources", true);
pref("security.pki.mitm_canary_issuer", "");
pref("security.pki.mitm_canary_issuer.enabled", true);
pref("security.sandbox.gmp.win32k-disable", false);
pref("services.settings.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.settings.default_bucket", "main");
pref("services.settings.default_signer", "remote-settings.content-signature.mozilla.org");
pref("shield.savant.enabled", false);
pref("shield.savant.loglevel", "warn");

// removed, renamed or hidden in v61.0:
pref("apz.minimap.visibility.enabled", false);
pref("browser.newtabpage.activity-stream.collapseTopSites", false);
pref("browser.newtabpage.activity-stream.enableWideLayout", true);
pref("browser.newtabpage.activity-stream.section.highlights.collapsed", false);
pref("browser.newtabpage.activity-stream.section.topstories.collapsed", false);
pref("browser.newtabpage.activity-stream.showTopSites", true);
pref("browser.storageManager.enabled", true);
pref("browser.tabs.restorebutton", 0);
pref("devtools.browserconsole.filter.csserror", true);
pref("devtools.browserconsole.filter.csslog", false);
pref("devtools.browserconsole.filter.cssparser", false);
pref("devtools.browserconsole.filter.exception", true);
pref("devtools.browserconsole.filter.jslog", true);
pref("devtools.browserconsole.filter.jswarn", true);
pref("devtools.browserconsole.filter.netwarn", true);
pref("devtools.browserconsole.filter.network", true);
pref("devtools.browserconsole.filter.networkinfo", false);
pref("devtools.browserconsole.filter.secerror", true);
pref("devtools.browserconsole.filter.secwarn", true);
pref("devtools.browserconsole.filter.servererror", false);
pref("devtools.browserconsole.filter.serverinfo", false);
pref("devtools.browserconsole.filter.serverlog", false);
pref("devtools.browserconsole.filter.serverwarn", false);
pref("devtools.browserconsole.filter.serviceworkers", true);
pref("devtools.browserconsole.filter.sharedworkers", true);
pref("devtools.browserconsole.filter.windowlessworkers", true);
pref("devtools.browserconsole.new-frontend-enabled", false);
pref("devtools.changesview.enabled", false);
pref("devtools.computed.boxmodel.opened", true);
pref("devtools.debugger.features.breakpoints-dropdown", false);
pref("devtools.eventsview.enabled", false);
pref("devtools.hud.loglimit.console", 1000);
pref("devtools.hud.loglimit.cssparser", 1000);
pref("devtools.hud.loglimit.exception", 1000);
pref("devtools.hud.loglimit.network", 1000);
pref("devtools.inspector.colorWidget.enabled", false);
pref("devtools.inspector.split-rule-enabled", false);
pref("devtools.inspector.split-sidebar-toggle", false);
pref("devtools.webconsole.filter.csserror", true);
pref("devtools.webconsole.filter.csslog", false);
pref("devtools.webconsole.filter.cssparser", false);
pref("devtools.webconsole.filter.exception", true);
pref("devtools.webconsole.filter.jslog", false);
pref("devtools.webconsole.filter.jswarn", true);
pref("devtools.webconsole.filter.netwarn", true);
pref("devtools.webconsole.filter.network", true);
pref("devtools.webconsole.filter.networkinfo", false);
pref("devtools.webconsole.filter.secerror", true);
pref("devtools.webconsole.filter.secwarn", true);
pref("devtools.webconsole.filter.servererror", false);
pref("devtools.webconsole.filter.serverinfo", false);
pref("devtools.webconsole.filter.serverlog", false);
pref("devtools.webconsole.filter.serverwarn", false);
pref("devtools.webconsole.filter.serviceworkers", true);
pref("devtools.webconsole.filter.sharedworkers", false);
pref("devtools.webconsole.filter.windowlessworkers", false);
pref("devtools.webconsole.new-frontend-enabled", true);
pref("dom.animations-api.pending-member.enabled", true);
pref("dom.compartment_per_addon", true);
pref("dom.forms.number", true);
pref("dom.ipc.cpows.allow-cpows-in-compat-addons", "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org");
pref("dom.ipc.cpows.forbid-cpows-in-compat-addons", true);
pref("dom.ipc.scheduler", false);
pref("dom.requestcontext.enabled", false);
pref("experiments.enabled", true);
pref("experiments.manifest.fetchIntervalSeconds", 86400);
pref("experiments.manifest.uri", "https://telemetry-experiment.cdn.mozilla.net/manifest/v1/firefox/%VERSION%/%CHANNEL%");
pref("experiments.supported", true);
pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.description", "chrome://browser/locale/browser.properties");
pref("extensions.{972ce4c6-7e08-4474-a285-3208198ce6fd}.name", "chrome://browser/locale/browser.properties");
pref("extensions.allow-non-mpc-extensions", true);
pref("extensions.dss.switchPending", false);
pref("general.skins.selectedSkin", "classic/1.0");
pref("gfx.downloadable_fonts.keep_variation_tables", false);
pref("layers.advanced.background-color", false);
pref("layers.advanced.background-image", 2);
pref("layers.advanced.border-layers", 2);
pref("layers.advanced.bullet-layers", 2);
pref("layers.advanced.canvas-background-color", 2);
pref("layers.advanced.caret-layers", false);
pref("layers.advanced.columnRule-layers", 2);
pref("layers.advanced.image-layers", 2);
pref("layers.advanced.outline-layers", 2);
pref("layers.advanced.solid-color", false);
pref("layers.advanced.table", false);
pref("layout.accessiblecaret.always_show_when_scrolling", true);
pref("layout.css.expensive-style-struct-assertions.enabled", false);
pref("layout.css.float-logical-values.enabled", true);
pref("layout.css.scoped-style.enabled", false);
pref("layout.css.scope-pseudo.enabled", true);
pref("layout.css.servo.chrome.enabled", true);
pref("layout.css.servo.enabled", true);
pref("layout.css.text-combine-upright.enabled", true);
pref("media.wmf.skip-blacklist", false);
pref("network.jar.block-remote-files", true);
pref("network.jar.open-unsafe-types", false);
pref("network.predictor.redirect-likely-confidence", 75);
pref("services.blocklist.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.blocklist.signing.enforced", true);
pref("svg.path-caching.enabled", true);
pref("toolkit.telemetry.infoURL", "https://www.mozilla.org/legal/privacy/firefox.html#telemetry");

// changed in v61.0:
pref("app.normandy.run_interval_seconds", 21600); // prev: 86400
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_description\":\"pocket_description\",\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"privacy_notice_link\":\"https://www.mozilla.org/privacy/firefox/#suggest-relevant-content\",\"disclaimer_link\":\"https://getpocket.com/firefox/new_tab_learn_more\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}"
pref("browser.tabs.remote.warmup.enabled", true); // prev: false
pref("devtools.debugger.features.map-scopes", true); // prev: false
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,remoteBreakpad,dump_syms.exe"); // prev: "localBreakpad,remoteBreakpad"
pref("extensions.langpacks.signatures.required", true); // prev: false
pref("extensions.legacy.exceptions", "testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com"); // prev: "{972ce4c6-7e08-4474-a285-3208198ce6fd},testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com"
pref("extensions.webextensions.tabhide.enabled", true); // prev: false
pref("font.name-list.emoji", "Segoe UI Emoji, Twemoji Mozilla"); // prev: "Segoe UI Emoji, EmojiOne Mozilla"
pref("gfx.webrender.blob-images", true); // prev: 1
pref("image.mem.shared", true); // prev: 2
pref("layers.omtp.paint-workers", -1); // prev: 1
pref("layers.tile-height", 512); // prev: 256
pref("layers.tile-width", 512); // prev: 256
pref("layout.css.moz-document.content.enabled", false); // prev: true
pref("lightweightThemes.selectedThemeID", "default-theme@mozilla.org"); // prev: ""
pref("media.wmf.amd.vp9.enabled", false); // prev: true
pref("network.http.throttle.version", 2); // prev: 1
pref("network.trr.blacklist-duration", 1200); // prev: 259200
pref("privacy.usercontext.about_newtab_segregation.enabled", true); // prev: false

