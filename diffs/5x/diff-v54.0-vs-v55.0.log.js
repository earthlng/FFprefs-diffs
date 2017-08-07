/******************************************************************************************
 * diffs between FF prefs v54.0 and v55.0
 *
 * prefs: 3035
 *        2604 matching prefs
 *         431 diffs ( 206 new, 66 gone, 159 different )
 ******************************************************************************************/
// new in v55.0:
pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=whatsnew");
pref("app.update.doorhanger", true);
pref("app.update.download.promptMaxAttempts", 2);
pref("app.update.elevation.promptMaxAttempts", 2);
pref("app.update.link.updateAvailableWhatsNew", "update-available-whats-new");
pref("app.update.link.updateManualWhatsNew", "update-manual-whats-new");
pref("apz.drag.initial.enabled", true);
pref("apz.one_touch_pinch.enabled", false);
pref("browser.migrate.automigrate.inpage.ui.enabled", false);
pref("browser.onboarding.enabled", true);
pref("browser.photon.structure.enabled", false);
pref("browser.preferences.defaultPerformanceSettings.enabled", true);
pref("browser.preferences.offlineGroup.enabled", true);
pref("browser.preferences.search", false);
pref("browser.preferences.useOldOrganization", true);
pref("browser.search.widget.inNavBar", true);
pref("browser.sessionstore.dom_storage_limit", 2048);
pref("browser.sessionstore.idleDelay", 180000);
pref("browser.sessionstore.interval.idle", 3600000);
pref("browser.sessionstore.restore_tabs_lazily", true);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", false);
pref("browser.suppress_first_window_animation", true);
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", true);
pref("browser.uidensity", 0);
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 4);
pref("devtools.computed.boxmodel.opened", true);
pref("devtools.debugger.expressions", "[]");
pref("devtools.debugger.file-search-case-sensitive", true);
pref("devtools.debugger.file-search-regex-match", false);
pref("devtools.debugger.file-search-whole-word", false );
pref("devtools.debugger.pending-breakpoints", "[]");
pref("devtools.debugger.prefs-schema-version", "1.0.0");
pref("devtools.debugger.ui.framework-grouping-on", true);
pref("devtools.gridinspector.showGridAreas", false);
pref("devtools.layout.boxmodel.opened", true);
pref("devtools.layout.grid.opened", true);
pref("devtools.source-map.client-service.enabled", true);
pref("dom.allow_named_properties_object_for_xrays", 1);
pref("dom.forms.datetime.others", false);
pref("dom.input.skip_cursor_move_for_same_value_set", true);
pref("dom.ipc.processCount.file", 1);
pref("dom.ipc.processPrelaunch.enabled", false);
pref("dom.min_tracking_background_timeout_value", 10000);
pref("dom.min_tracking_timeout_value", 4);
pref("dom.payments.request.enabled", false);
pref("dom.promise_rejection_events.enabled", false);
pref("dom.script_loader.bytecode_cache.enabled", false);
pref("dom.script_loader.bytecode_cache.strategy", 0);
pref("dom.storageManager.prompt.testing", false);
pref("dom.storageManager.prompt.testing.allow", false);
pref("dom.timeout.max_consecutive_callbacks_ms", 4);
pref("dom.timeout.tracking_throttling_delay", 30000);
pref("dom.vr.autoactivate.enabled", false);
pref("dom.vr.controller_trigger_threshold", "0.1");
pref("dom.vr.navigation.timeout", 5000);
pref("dom.vr.oculus.present.timeout", 10000);
pref("dom.vr.oculus.quit.timeout", 30000);
pref("dom.vr.puppet.submitframe", 0);
pref("dom.vr.require-gesture", true);
pref("dom.w3c_pointer_events.dispatch_by_pointer_messages", false);
pref("dom.xhr.lowercase_header.enabled", false);
pref("editor.use_div_for_default_newlines", false);
pref("extensions.allow-non-mpc-extensions", true);
pref("extensions.formautofill.addresses.enabled", true);
pref("extensions.formautofill.experimental", false);
pref("extensions.formautofill.heuristics.enabled", true);
pref("extensions.formautofill.loglevel", "Warn");
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com");
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,remoteBreakpad");
pref("extensions.geckoProfiler.symbols.url", "http://symbols.mozilla.org/");
pref("extensions.legacy.enabled", true);
pref("extensions.legacy.exceptions", "{972ce4c6-7e08-4474-a285-3208198ce6fd},testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com");
pref("extensions.screenshots.disabled", false);
pref("extensions.startupScanScopes", 0);
pref("extensions.webextensions.themes.icons.buttons", "back,forward,reload,stop,bookmark_star,bookmark_menu,downloads,home,app_menu,cut,copy,paste,new_window,new_private_window,save_page,print,history,full_screen,find,options,addons,developer,synced_tabs,open_file,sidebars,share_page,subscribe,text_encoding,email_link,forget,pocket");
pref("extensions.webextensions.themes.icons.enabled", false);
pref("extensions.webextOptionalPermissionPrompts", true);
pref("extensions.webextPermissionPrompts", true);
pref("font.name.cursive.ja", "");
pref("font.name.cursive.x-armn", "");
pref("font.name.cursive.x-beng", "");
pref("font.name.cursive.x-cans", "");
pref("font.name.cursive.x-devanagari", "");
pref("font.name.cursive.x-geor", "");
pref("font.name.cursive.x-gujr", "");
pref("font.name.cursive.x-guru", "");
pref("font.name.cursive.x-khmr", "");
pref("font.name.cursive.x-knda", "");
pref("font.name.cursive.x-mlym", "");
pref("font.name.cursive.x-orya", "");
pref("font.name.cursive.x-sinh", "");
pref("font.name.cursive.x-tamil", "");
pref("font.name.cursive.x-telu", "");
pref("font.name.cursive.x-tibt", "");
pref("font.name-list.cursive.ar", "Comic Sans MS");
pref("font.name-list.cursive.el", "Comic Sans MS");
pref("font.name-list.cursive.th", "Tahoma");
pref("font.name-list.cursive.x-cyrillic", "Comic Sans MS");
pref("font.name-list.cursive.x-ethi", "Visual Geez Unicode Title");
pref("font.name-list.cursive.x-math", "Comic Sans MS");
pref("font.name-list.cursive.x-unicode", "Comic Sans MS");
pref("font.name-list.cursive.x-western", "Comic Sans MS");
pref("font.name-list.cursive.zh-HK", "DFKai-SB");
pref("font.name-list.cursive.zh-TW", "DFKai-SB");
pref("font.name-list.monospace.ar", "Courier New");
pref("font.name-list.monospace.el", "Courier New");
pref("font.name-list.monospace.th", "Tahoma");
pref("font.name-list.monospace.x-cyrillic", "Courier New");
pref("font.name-list.monospace.x-math", "Courier New");
pref("font.name-list.monospace.x-unicode", "Courier New");
pref("font.name-list.monospace.x-western", "Courier New");
pref("font.name-list.sans-serif.el", "Arial");
pref("font.name-list.sans-serif.he", "Arial");
pref("font.name-list.sans-serif.th", "Tahoma");
pref("font.name-list.sans-serif.x-armn", "Arial AMU");
pref("font.name-list.sans-serif.x-cans", "Aboriginal Sans");
pref("font.name-list.sans-serif.x-cyrillic", "Arial");
pref("font.name-list.sans-serif.x-ethi", "GF Zemen Unicode");
pref("font.name-list.sans-serif.x-geor", "BPG Classic 99U");
pref("font.name-list.sans-serif.x-gujr", "Shruti");
pref("font.name-list.sans-serif.x-guru", "");
pref("font.name-list.sans-serif.x-khmr", "Khmer OS");
pref("font.name-list.sans-serif.x-math", "Arial");
pref("font.name-list.sans-serif.x-unicode", "Arial");
pref("font.name-list.sans-serif.x-western", "Arial");
pref("font.name-list.serif.ar", "Times New Roman");
pref("font.name-list.serif.el", "Times New Roman");
pref("font.name-list.serif.th", "Tahoma");
pref("font.name-list.serif.x-cyrillic", "Times New Roman");
pref("font.name-list.serif.x-unicode", "Times New Roman");
pref("font.name-list.serif.x-western", "Times New Roman");
pref("font.size.systemFontScale", 100);
pref("gfx.webrender.force-angle", true);
pref("gfx.webrender.profiler.enabled", false);
pref("gfx.webrendest.enabled", false);
pref("layers.advanced.background-color", 2);
pref("layers.advanced.background-image", 2);
pref("layers.advanced.boxshadow-inset-layers", 2);
pref("layers.advanced.boxshadow-outer-layers", 2);
pref("layers.advanced.bullet-layers", 2);
pref("layers.advanced.button-foreground-layers", 2);
pref("layers.advanced.canvas-background-color", 2);
pref("layers.advanced.columnRule-layers", 2);
pref("layers.advanced.displaybuttonborder-layers", 2);
pref("layers.advanced.filter-layers", 2);
pref("layers.advanced.image-layers", 2);
pref("layers.advanced.outline-layers", 2);
pref("layers.advanced.solid-color", 2);
pref("layers.advanced.table", 2);
pref("layers.advanced.text-layers", 2);
pref("layers.geometry.d3d11.enabled", true);
pref("layers.gpu-process.max_restarts", 3);
pref("layers.popups.compositing.enabled", false);
pref("layout.css.column-span.enabled", false);
pref("layout.css.frames-timing.enabled", false);
pref("layout.css.scoped-style.enabled", false);
pref("layout.css.servo.enabled", false);
pref("layout.css.style-attr-with-xml-base.disabled", true);
pref("media.cache.resource-index", 8192);
pref("media.decoder-doctor.decode-errors-allowed", "NS_ERROR_DOM_MEDIA_DEMUXER_ERR, NS_ERROR_DOM_MEDIA_METADATA_ERR");
pref("media.decoder-doctor.decode-warnings-allowed", "NS_ERROR_DOM_MEDIA_DEMUXER_ERR, NS_ERROR_DOM_MEDIA_METADATA_ERR");
pref("media.decoder-doctor.new-issue-endpoint", "https://webcompat.com/issues/new");
pref("media.eme.chromium-api.enabled", true);
pref("media.eme.chromium-api.video-shmems", 4);
pref("media.playback.warnings-as-errors", false);
pref("media.throttle-factor", 2);
pref("media.throttle-regardless-of-download-rate", false);
pref("media.webvtt.pseudo.enabled", true);
pref("network.auth.subresource-img-cross-origin-http-auth-allow", true);
pref("network.dns.forceResolve", "");
pref("network.http.focused_window_transaction_ratio", "0.9");
pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
pref("network.http.originextension", false);
pref("network.http.rcwn.cache_queue_normal_threshold", 8);
pref("network.http.rcwn.cache_queue_priority_threshold", 2);
pref("network.http.rcwn.enabled", false);
pref("network.http.rcwn.small_resource_size_kb", 256);
pref("network.http.throttle.enable", false);
pref("network.http.throttle.resume-background-in", 1000);
pref("network.http.throttle.resume-for", 100);
pref("network.http.throttle.suspend-for", 900);
pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5);
pref("network.tcp.tcp_fastopen_enable", false);
pref("pdfium.enabled", false);
pref("plugins.http_https_only", true);
pref("plugins.remember_infobar_dismissal", true);
pref("plugins.show_infobar", false);
pref("privacy.resistFingerprinting", false);
pref("security.allow_chrome_frames_inside_content", false);
pref("security.data_uri.unique_opaque_origin", false);
pref("security.insecure_field_warning.ignore_local_ip_address", true);
pref("security.OCSP.timeoutMilliseconds.hard", 10000);
pref("security.OCSP.timeoutMilliseconds.soft", 2000);
pref("security.sandbox.gpu.level", 0);
pref("services.sync.maxResyncs", 5);
pref("sidebar.position_start", true);
pref("svg.context-properties.content.enabled", false);
pref("toolkit.cosmeticAnimations.enabled", true);
pref("toolkit.dump.emit", false);
pref("toolkit.telemetry.newProfilePing.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabled", true);
pref("urlclassifier.flashInfobarTable", "except-flashinfobar-digest256");
pref("urlclassifier.update.response_timeout_ms", 15000);
pref("urlclassifier.update.timeout_ms", 60000);
pref("webgl.force-index-validation", false);
pref("webrender.highlight-painted-layers", false);

// removed, renamed or hidden in v55.0:
pref("alerts.disableSlidingEffect", false);
pref("app.update.badge", false);
pref("apz.allow_with_webrender", false);
pref("browser.addon-watch.ignore", "[\"mochikit@mozilla.org\",\"special-powers@mozilla.org\",\"fxdevtools-adapters@mozilla.org\",\"fx-devtools\",\"webcompat-reporter@mozilla.org\"]");
pref("browser.addon-watch.interval", -1);
pref("browser.download.showPanelDropmarker", false);
pref("browser.formautofill.enabled", false);
pref("browser.formautofill.experimental", false);
pref("browser.formautofill.loglevel", "Warn");
pref("browser.formfill.saveHttpsForms", true);
pref("browser.fullscreen.animate", true);
pref("browser.newtabpage.directory.ping", "https://tiles.services.mozilla.com/v3/links/");
pref("browser.reader.detectedFirstArticle", false);
pref("browser.selfsupport.url", "https://self-repair.mozilla.org/%LOCALE%/repair");
pref("browser.shell.skipDefaultBrowserCheck", true);
pref("browser.tabs.animate", true);
pref("devtools.source-map.locations.enabled", false);
pref("devtools.webide.autosaveFiles", true);
pref("devtools.webide.showProjectEditor", true);
pref("devtools.webide.widget.autoinstall", true);
pref("devtools.webide.widget.enabled", false);
pref("devtools.webide.widget.inNavbarByDefault", false);
pref("dom.audiochannel.mutedByDefault", false);
pref("dom.enable_user_timing", true);
pref("dom.forms.requestAutocomplete", false);
pref("dom.keyboardevent.code.enabled", true);
pref("dom.mms.defaultServiceId", 0);
pref("dom.mms.requestReadReport", true);
pref("dom.mms.requestStatusReport", true);
pref("dom.mms.retrieval_mode", "manual");
pref("dom.mms.retrievalRetryCount", 4);
pref("dom.mms.retrievalRetryIntervals", "60000,300000,600000,1800000");
pref("dom.mms.sendRetryCount", 3);
pref("dom.mms.sendRetryInterval", "10000,60000,180000");
pref("dom.mms.version", 19);
pref("dom.timeout.max_consecutive_callbacks", 5);
pref("dom.url.encode_decode_hash", true);
pref("dom.url.getters_decode_hash", false);
pref("extensions.dss.enabled", false);
pref("geo.security.allowinsecure", true);
pref("gfx.vr.openvr-runtime", "");
pref("identity.fxaccounts.profile_image.enabled", true);
pref("jsloader.reuseGlobal", false);
pref("layers.frame-counter", false);
pref("layout.accessiblecaret.timeout_ms", 0);
pref("layout.css.background-clip-text.enabled", true);
pref("layout.css.display-flow-root.enabled", true);
pref("layout.css.variables.enabled", true);
pref("layout.frame_rate.precise", false);
pref("marionette.enabled", false);
pref("marionette.forcelocal", true);
pref("media.directshow.enabled", true);
pref("mms.debugging.enabled", false);
pref("network.http.bypass-cachelock-threshold", 200000);
pref("network.http.enablePerElementReferrer", true);
pref("network.throttle.enable", true);
pref("network.throttle.resume-for", 2000);
pref("network.throttle.suspend-for", 2000);
pref("plugins.navigator_hide_disabled_flash", false);
pref("ril.numRadioInterfaces", 0);
pref("security.data_uri.inherit_security_context", true);
pref("services.sync.prefs.sync.javascript.enabled", true);
pref("social.sidebar.unload_timeout_ms", 10000);
pref("urlclassifier.max-complete-age", 2700);
pref("wap.UAProf.tagname", "x-wap-profile");
pref("wap.UAProf.url", "");

// changed in v55.0:
pref("app.update.badgeWaitTime", 345600); // prev: 0
pref("app.update.staging.enabled", false); // prev: true
pref("apz.drag.enabled", true); // prev: false
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256"
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true); // prev: false
pref("browser.startup.firstrunSkipsHomepage", true); // prev: false
pref("browser.tabs.remote.separateFileUriProcess", true); // prev: false
pref("browser.urlbar.oneOffSearches", true); // prev: false
pref("browser.urlbar.suggest.searches", true); // prev: false
pref("datareporting.policy.firstRunURL", "https://www.mozilla.org/privacy/firefox/"); // prev: ""
pref("devtools.debugger.ignore-caught-exceptions", false); // prev: true
pref("devtools.inspector.mdnDocsTooltip.enabled", false); // prev: true
pref("devtools.storage.enabled", true); // prev: false
pref("dom.gamepad.extensions.enabled", true); // prev: false
pref("dom.IntersectionObserver.enabled", true); // prev: false
pref("dom.ipc.cpows.allow-cpows-in-compat-addons", "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org"); // prev: "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,toolkit/require,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,browser-loader,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org"
pref("dom.popup_allowed_events", "change click dblclick mouseup pointerup notificationclick reset submit touchend"); // prev: "change click dblclick mouseup notificationclick reset submit touchend"
pref("dom.requestIdleCallback.enabled", true); // prev: false
pref("dom.vr.enabled", true); // prev: false
pref("dom.vr.openvr.enabled", true); // prev: false
pref("dom.vr.poseprediction.enabled", true); // prev: false
pref("extensions.webextensions.themes.enabled", true); // prev: false
pref("font.name.cursive.ar", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.el", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.he", ""); // prev: "Guttman Yad"
pref("font.name.cursive.ko", ""); // prev: "Gungsuh"
pref("font.name.cursive.th", ""); // prev: "Tahoma"
pref("font.name.cursive.x-cyrillic", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.x-ethi", ""); // prev: "Visual Geez Unicode Title"
pref("font.name.cursive.x-math", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.x-unicode", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.x-western", ""); // prev: "Comic Sans MS"
pref("font.name.cursive.zh-CN", ""); // prev: "KaiTi"
pref("font.name.cursive.zh-HK", ""); // prev: "DFKai-SB"
pref("font.name.cursive.zh-TW", ""); // prev: "DFKai-SB"
pref("font.name.monospace.ar", ""); // prev: "Courier New"
pref("font.name.monospace.el", ""); // prev: "Courier New"
pref("font.name.monospace.he", ""); // prev: "Fixed Miriam Transparent"
pref("font.name.monospace.ja", ""); // prev: "MS Gothic"
pref("font.name.monospace.ko", ""); // prev: "GulimChe"
pref("font.name.monospace.th", ""); // prev: "Tahoma"
pref("font.name.monospace.x-armn", ""); // prev: "Arial AMU"
pref("font.name.monospace.x-beng", ""); // prev: "Mitra Mono"
pref("font.name.monospace.x-cans", ""); // prev: "Aboriginal Sans"
pref("font.name.monospace.x-cyrillic", ""); // prev: "Courier New"
pref("font.name.monospace.x-devanagari", ""); // prev: "Mangal"
pref("font.name.monospace.x-ethi", ""); // prev: "Ethiopia Jiret"
pref("font.name.monospace.x-geor", ""); // prev: "BPG Classic 99U"
pref("font.name.monospace.x-gujr", ""); // prev: "Shruti"
pref("font.name.monospace.x-guru", ""); // prev: "Raavi"
pref("font.name.monospace.x-khmr", ""); // prev: "Khmer OS"
pref("font.name.monospace.x-knda", ""); // prev: "Tunga"
pref("font.name.monospace.x-math", ""); // prev: "Courier New"
pref("font.name.monospace.x-mlym", ""); // prev: "Rachana_w01"
pref("font.name.monospace.x-orya", ""); // prev: "ori1Uni"
pref("font.name.monospace.x-sinh", ""); // prev: "Iskoola Pota"
pref("font.name.monospace.x-tamil", ""); // prev: "Latha"
pref("font.name.monospace.x-telu", ""); // prev: "Gautami"
pref("font.name.monospace.x-tibt", ""); // prev: "Tibetan Machine Uni"
pref("font.name.monospace.x-unicode", ""); // prev: "Courier New"
pref("font.name.monospace.x-western", ""); // prev: "Courier New"
pref("font.name.monospace.zh-CN", ""); // prev: "SimSun"
pref("font.name.monospace.zh-HK", ""); // prev: "MingLiu_HKSCS"
pref("font.name.monospace.zh-TW", ""); // prev: "MingLiU"
pref("font.name.sans-serif.ar", ""); // prev: "Segoe UI"
pref("font.name.sans-serif.el", ""); // prev: "Arial"
pref("font.name.sans-serif.he", ""); // prev: "Arial"
pref("font.name.sans-serif.ja", ""); // prev: "MS PGothic"
pref("font.name.sans-serif.ko", ""); // prev: "Gulim"
pref("font.name.sans-serif.th", ""); // prev: "Tahoma"
pref("font.name.sans-serif.x-armn", ""); // prev: "Arial AMU"
pref("font.name.sans-serif.x-beng", ""); // prev: "Vrinda"
pref("font.name.sans-serif.x-cans", ""); // prev: "Aboriginal Sans"
pref("font.name.sans-serif.x-cyrillic", ""); // prev: "Arial"
pref("font.name.sans-serif.x-devanagari", ""); // prev: "Nirmala UI"
pref("font.name.sans-serif.x-ethi", ""); // prev: "GF Zemen Unicode"
pref("font.name.sans-serif.x-geor", ""); // prev: "BPG Classic 99U"
pref("font.name.sans-serif.x-gujr", ""); // prev: "Shruti"
pref("font.name.sans-serif.x-khmr", ""); // prev: "Khmer OS"
pref("font.name.sans-serif.x-knda", ""); // prev: "Tunga"
pref("font.name.sans-serif.x-math", ""); // prev: "Arial"
pref("font.name.sans-serif.x-mlym", ""); // prev: "Rachana_w01"
pref("font.name.sans-serif.x-orya", ""); // prev: "ori1Uni"
pref("font.name.sans-serif.x-sinh", ""); // prev: "Iskoola Pota"
pref("font.name.sans-serif.x-telu", ""); // prev: "Gautami"
pref("font.name.sans-serif.x-tibt", ""); // prev: "Tibetan Machine Uni"
pref("font.name.sans-serif.x-unicode", ""); // prev: "Arial"
pref("font.name.sans-serif.x-western", ""); // prev: "Arial"
pref("font.name.sans-serif.zh-CN", ""); // prev: "Microsoft YaHei"
pref("font.name.sans-serif.zh-HK", ""); // prev: "Arial"
pref("font.name.sans-serif.zh-TW", ""); // prev: "Arial"
pref("font.name.serif.ar", ""); // prev: "Times New Roman"
pref("font.name.serif.el", ""); // prev: "Times New Roman"
pref("font.name.serif.he", ""); // prev: "Narkisim"
pref("font.name.serif.ja", ""); // prev: "MS PMincho"
pref("font.name.serif.ko", ""); // prev: "Batang"
pref("font.name.serif.th", ""); // prev: "Tahoma"
pref("font.name.serif.x-armn", ""); // prev: "Sylfaen"
pref("font.name.serif.x-beng", ""); // prev: "Vrinda"
pref("font.name.serif.x-cans", ""); // prev: "Aboriginal Serif"
pref("font.name.serif.x-cyrillic", ""); // prev: "Times New Roman"
pref("font.name.serif.x-devanagari", ""); // prev: "Kokila"
pref("font.name.serif.x-ethi", ""); // prev: "Visual Geez Unicode"
pref("font.name.serif.x-geor", ""); // prev: "Sylfaen"
pref("font.name.serif.x-gujr", ""); // prev: "Shruti"
pref("font.name.serif.x-guru", ""); // prev: "Raavi"
pref("font.name.serif.x-khmr", ""); // prev: "PhnomPenh OT"
pref("font.name.serif.x-knda", ""); // prev: "Tunga"
pref("font.name.serif.x-math", ""); // prev: "Latin Modern Math"
pref("font.name.serif.x-mlym", ""); // prev: "Rachana_w01"
pref("font.name.serif.x-orya", ""); // prev: "ori1Uni"
pref("font.name.serif.x-sinh", ""); // prev: "Iskoola Pota"
pref("font.name.serif.x-tamil", ""); // prev: "Latha"
pref("font.name.serif.x-telu", ""); // prev: "Gautami"
pref("font.name.serif.x-tibt", ""); // prev: "Tibetan Machine Uni"
pref("font.name.serif.x-unicode", ""); // prev: "Times New Roman"
pref("font.name.serif.x-western", ""); // prev: "Times New Roman"
pref("font.name.serif.zh-CN", ""); // prev: "SimSun"
pref("font.name.serif.zh-HK", ""); // prev: "Times New Roman"
pref("font.name.serif.zh-TW", ""); // prev: "Times New Roman"
pref("font.name-list.monospace.x-beng", "Mitra Mono, Likhan, Mukti Narrow"); // prev: "Likhan, Mukti Narrow"
pref("font.name-list.monospace.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.monospace.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.monospace.zh-CN", "SimSun, MS Song, SimSun-ExtB"); // prev: "MS Song, SimSun, SimSun-ExtB"
pref("font.name-list.sans-serif.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.sans-serif.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.sans-serif.zh-HK", "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"); // prev: "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.sans-serif.zh-TW", "Arial, PMingLiU, MingLiU, MingLiU-ExtB"); // prev: "PMingLiU, MingLiU, MingLiU-ExtB"
pref("font.name-list.serif.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.serif.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.serif.zh-CN", "SimSun, MS Song, SimSun-ExtB"); // prev: "MS Song, SimSun, SimSun-ExtB"
pref("font.name-list.serif.zh-HK", "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"); // prev: "MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.serif.zh-TW", "Times New Roman, PMingLiu, MingLiU, MingLiU-ExtB"); // prev: "PMingLiu, MingLiU, MingLiU-ExtB"
pref("gfx.webrender.enabled", false); // prev: true
pref("image.mem.animated.discardable", true); // prev: false
pref("intl.tsf.hack.ms_japanese_ime.do_not_associate_imc_on_win10", false); // prev: true
pref("javascript.options.mem.gc_incremental_slice_ms", 5); // prev: 10
pref("javascript.options.shared_memory", true); // prev: false
pref("layers.advanced.border-layers", 2); // prev: false
pref("layers.advanced.caret-layers", 2); // prev: false
pref("layout.css.float-logical-values.enabled", true); // prev: false
pref("layout.css.text-justify.enabled", true); // prev: false
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]"); // prev: "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]"
pref("media.cache_readahead_limit", 60); // prev: 999999
pref("media.cache_resume_threshold", 30); // prev: 999999
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"
pref("media.wmf.vp9.enabled", true); // prev: false
pref("network.http.spdy.timeout", 170); // prev: 180
pref("network.jar.block-remote-files", true); // prev: false
pref("network.predictor.enable-prefetch", true); // prev: false
pref("plugins.favorfallback.mode", "follow-ctp"); // prev: "never"
pref("plugins.favorfallback.rules", "nosrc,video"); // prev: ""
pref("plugins.flashBlock.enabled", true); // prev: false
pref("print.use_simplify_page", true); // prev: false
pref("privacy.trackingprotection.annotate_channels", true); // prev: false
pref("security.tls.enable_0rtt_data", true); // prev: false
pref("svg.transform-box.enabled", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,test-flashallow-simple,testexcept-flashallow-simple,test-flash-simple,testexcept-flash-simple,test-flashsubdoc-simple,testexcept-flashsubdoc-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,test-flashallow-simple,testexcept-flashallow-simple,test-flash-simple,testexcept-flash-simple,test-flashsubdoc-simple,testexcept-flashsubdoc-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256"
