/******************************************************************************************
 * diffs between FF prefs v52.9.0esr and v60.0esr
 *
 * prefs: 3472
 *        2269 matching prefs
 *        1203 diffs ( 674 new, 322 gone, 207 different )
 ******************************************************************************************/
// new in v60.0esr:
pref("accessibility.handler.enabled", true);
pref("accessibility.indicator.enabled", false);
pref("accessibility.support.url", "https://support.mozilla.org/%LOCALE%/kb/accessibility-services");
pref("alerts.useSystemBackend", true);
pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");
pref("app.normandy.dev_mode", false);
pref("app.normandy.enabled", true);
pref("app.normandy.first_run", true);
pref("app.normandy.logging.level", 50);
pref("app.normandy.run_interval_seconds", 86400);
pref("app.normandy.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");
pref("app.productInfo.baseURL", "https://www.mozilla.org/firefox/features/");
pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=whatsnew");
pref("app.shield.optoutstudies.enabled", true);
pref("app.update.doorhanger", true);
pref("app.update.download.promptMaxAttempts", 2);
pref("app.update.elevation.promptMaxAttempts", 2);
pref("app.update.link.updateAvailableWhatsNew", "update-available-whats-new");
pref("app.update.link.updateManualWhatsNew", "update-manual-whats-new");
pref("apz.autoscroll.enabled", true);
pref("apz.drag.initial.enabled", true);
pref("apz.drag.touch.enabled", true);
pref("apz.frame_delay.enabled", true);
pref("apz.keyboard.enabled", true);
pref("apz.keyboard.passive-listeners", true);
pref("apz.one_touch_pinch.enabled", true);
pref("apz.pinch_lock.mode", 1);
pref("apz.pinch_lock.scoll_lock_threshold", "0.03125");
pref("apz.pinch_lock.span_breakout_threshold", "0.03125");
pref("apz.pinch_lock.span_lock_threshold", "0.03125");
pref("apz.popups.enabled", false);
pref("apz.second_tap_tolerance", "0.5");
pref("browser.bookmarks.openInTabClosesMenu", true);
pref("browser.cache.offline.insecure.enable", true);
pref("browser.chrome.errorReporter.enabled", false);
pref("browser.chrome.errorReporter.infoURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/nightly-error-collection");
pref("browser.chrome.errorReporter.logLevel", "Error");
pref("browser.chrome.errorReporter.projectId", "339");
pref("browser.chrome.errorReporter.publicKey", "c709cb7a2c0b4f0882fcc84a5af161ec");
pref("browser.chrome.errorReporter.sampleRate", "0.001");
pref("browser.chrome.errorReporter.submitUrl", "https://sentry.prod.mozaws.net/api/339/store/");
pref("browser.download.autohideButton", true);
pref("browser.library.activity-stream.enabled", true);
pref("browser.migrate.automigrate.inpage.ui.enabled", false);
pref("browser.newtabpage.activity-stream.prerender", true);
pref("browser.onboarding.enabled", true);
pref("browser.onboarding.newtour", "performance,private,screenshots,addons,customize,default");
pref("browser.onboarding.notification.finished", false);
pref("browser.onboarding.notification.max-life-time-all-tours-ms", 1209600000);
pref("browser.onboarding.notification.max-life-time-per-tour-ms", 432000000);
pref("browser.onboarding.notification.max-prompt-count-per-tour", 8);
pref("browser.onboarding.notification.mute-duration-on-first-session-ms", 300000);
pref("browser.onboarding.state", "default");
pref("browser.onboarding.tourset-version", 2);
pref("browser.onboarding.updatetour", "performance,library,screenshots,singlesearch,customize,sync");
pref("browser.ping-centre.log", false);
pref("browser.ping-centre.production.endpoint", "https://tiles.services.mozilla.com/v3/links/ping-centre");
pref("browser.ping-centre.staging.endpoint", "https://onyx_tiles.stage.mozaws.net/v3/links/ping-centre");
pref("browser.ping-centre.telemetry", true);
pref("browser.preferences.defaultPerformanceSettings.enabled", true);
pref("browser.preferences.search", true);
pref("browser.safebrowsing.passwords.enabled", false);
pref("browser.safebrowsing.provider.google.advisoryName", "Google Safe Browsing");
pref("browser.safebrowsing.provider.google.advisoryURL", "https://developers.google.com/safe-browsing/v4/advisory");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google4.advisoryName", "Google Safe Browsing");
pref("browser.safebrowsing.provider.google4.advisoryURL", "https://developers.google.com/safe-browsing/v4/advisory");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.schedulePressure.defaultCount", 3);
pref("browser.schedulePressure.enabled", true);
pref("browser.schedulePressure.timeoutMs", 300);
pref("browser.search.widget.inNavBar", false);
pref("browser.sessionstore.dom_storage_limit", 2048);
pref("browser.sessionstore.idleDelay", 180000);
pref("browser.sessionstore.interval.idle", 3600000);
pref("browser.sessionstore.max_write_failures", 5);
pref("browser.sessionstore.restore_tabs_lazily", true);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", false);
pref("browser.startup.blankWindow", false);
pref("browser.stopReloadAnimation.enabled", true);
pref("browser.storageManager.enabled", true);
pref("browser.storageManager.pressureNotification.minIntervalMS", 1200000);
pref("browser.storageManager.pressureNotification.usageThresholdGB", 5);
pref("browser.suppress_first_window_animation", true);
pref("browser.tabs.extraDragSpace", false);
pref("browser.tabs.loadBookmarksInTabs", false);
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", true);
pref("browser.tabs.remote.separateFileUriProcess", true);
pref("browser.tabs.remote.warmup.enabled", false);
pref("browser.tabs.remote.warmup.maxTabs", 3);
pref("browser.tabs.remote.warmup.unloadDelayMs", 2000);
pref("browser.tabs.restorebutton", 0);
pref("browser.tabs.tabMinWidth", 76);
pref("browser.touchmode.auto", true);
pref("browser.uidensity", 0);
pref("browser.urlbar.decodeURLsOnCopy", false);
pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);
pref("browser.urlbar.openintab", false);
pref("browser.urlbar.speculativeConnect.enabled", true);
pref("browser.urlbar.switchTabs.adoptIntoActiveWindow", false);
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 4);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.usepreloadedtopurls.expire_days", 14);
pref("browser.xul.error_pages.show_safe_browsing_details_on_load", false);
pref("device.sensors.ambientLight.enabled", true);
pref("device.sensors.motion.enabled", true);
pref("device.sensors.orientation.enabled", true);
pref("device.sensors.proximity.enabled", true);
pref("devtools.browserconsole.filter.css", false);
pref("devtools.browserconsole.filter.debug", true);
pref("devtools.browserconsole.filter.net", false);
pref("devtools.browserconsole.new-frontend-enabled", false);
pref("devtools.browserconsole.ui.filterbar", false);
pref("devtools.changesview.enabled", false);
pref("devtools.command-button-pick.enabled", true);
pref("devtools.computed.boxmodel.opened", true);
pref("devtools.debugger.breakpoints-visible", true);
pref("devtools.debugger.call-stack-visible", true);
pref("devtools.debugger.end-panel-collapsed", false);
pref("devtools.debugger.expressions", "[]");
pref("devtools.debugger.expressions-visible", true);
pref("devtools.debugger.features.async-stepping", true);
pref("devtools.debugger.features.breakpoints-dropdown", false);
pref("devtools.debugger.features.chrome-scopes", false);
pref("devtools.debugger.features.code-coverage", false);
pref("devtools.debugger.features.code-folding", false);
pref("devtools.debugger.features.column-breakpoints", false);
pref("devtools.debugger.features.event-listeners", false);
pref("devtools.debugger.features.map-scopes", false);
pref("devtools.debugger.features.outline", true);
pref("devtools.debugger.features.remove-command-bar-options", false);
pref("devtools.debugger.features.replay", false);
pref("devtools.debugger.features.root", true);
pref("devtools.debugger.features.shortcuts", true);
pref("devtools.debugger.features.wasm", true);
pref("devtools.debugger.features.workers", true);
pref("devtools.debugger.file-search-case-sensitive", false);
pref("devtools.debugger.file-search-regex-match", false);
pref("devtools.debugger.file-search-whole-word", false);
pref("devtools.debugger.pending-breakpoints", "{}");
pref("devtools.debugger.pending-selected-location", "{}");
pref("devtools.debugger.prefs-schema-version", "1.0.0");
pref("devtools.debugger.project-directory-root", "");
pref("devtools.debugger.scopes-visible", true);
pref("devtools.debugger.start-panel-collapsed", false);
pref("devtools.debugger.tabs", "[]");
pref("devtools.debugger.ui.framework-grouping-on", true);
pref("devtools.debugger.workers-visible", true);
pref("devtools.enabled", true);
pref("devtools.eventsview.enabled", false);
pref("devtools.flexboxinspector.enabled", false);
pref("devtools.gridinspector.gridOutlineMaxColumns", 50);
pref("devtools.gridinspector.gridOutlineMaxRows", 50);
pref("devtools.gridinspector.showGridAreas", false);
pref("devtools.gridinspector.showGridLineNumbers", false);
pref("devtools.gridinspector.showInfiniteLines", false);
pref("devtools.inspector.colorWidget.enabled", false);
pref("devtools.inspector.flexboxHighlighter.enabled", false);
pref("devtools.inspector.shapesHighlighter.enabled", true);
pref("devtools.inspector.split-rule-enabled", false);
pref("devtools.inspector.split-sidebar-toggle", false);
pref("devtools.layout.boxmodel.opened", true);
pref("devtools.layout.flexbox.opened", true);
pref("devtools.layout.grid.opened", true);
pref("devtools.netmonitor.persistlog", false);
pref("devtools.netmonitor.visibleColumns", "[\"status\",\"method\",\"file\",\"domain\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]");
pref("devtools.new-animationinspector.enabled", false);
pref("devtools.onboarding.experiment", "off");
pref("devtools.onboarding.experiment.flipped", false);
pref("devtools.onboarding.telemetry.logged", false);
pref("devtools.performance.new-panel-enabled", false);
pref("devtools.policy.disabled", false);
pref("devtools.responsive.reloadConditions.touchSimulation", false);
pref("devtools.responsive.reloadConditions.userAgent", false);
pref("devtools.responsive.reloadNotification.enabled", true);
pref("devtools.screenshot.audio.enabled", true);
pref("devtools.screenshot.clipboard.enabled", false);
pref("devtools.source-map.client-service.enabled", true);
pref("devtools.webconsole.filter.css", false);
pref("devtools.webconsole.sidebarToggle", false);
pref("dom.animations-api.pending-member.enabled", true);
pref("dom.clients.openwindow_favors_same_process", true);
pref("dom.dialog_element.enabled", false);
pref("dom.disable_window_showModalDialog", true);
pref("dom.enable_performance_navigation_timing", true);
pref("dom.event.coalesce_mouse_move", true);
pref("dom.forms.autocomplete.formautofill", false);
pref("dom.forms.datetime.others", false);
pref("dom.forms.select.customstyling", true);
pref("dom.forms.selectSearch", false);
pref("dom.gamepad.haptic_feedback.enabled", true);
pref("dom.input.skip_cursor_move_for_same_value_set", true);
pref("dom.IntersectionObserver.enabled", true);
pref("dom.ipc.plugins.forcedirect.enabled", true);
pref("dom.ipc.processCount.extension", 1);
pref("dom.ipc.processCount.file", 1);
pref("dom.ipc.processCount.webLargeAllocation", 10);
pref("dom.ipc.processPrelaunch.enabled", true);
pref("dom.ipc.scheduler", false);
pref("dom.ipc.scheduler.chaoticScheduling", false);
pref("dom.ipc.scheduler.preemption", false);
pref("dom.ipc.scheduler.threadCount", 2);
pref("dom.ipc.scheduler.useMultipleQueues", true);
pref("dom.ipc.useNativeEventProcessing.content", false);
pref("dom.keyboardevent.keypress.dispatch_non_printable_keys_only_system_group_in_content", false);
pref("dom.largeAllocationHeader.enabled", true);
pref("dom.max_ext_content_script_run_time", 5);
pref("dom.min_tracking_background_timeout_value", 4);
pref("dom.min_tracking_timeout_value", 4);
pref("dom.moduleScripts.enabled", true);
pref("dom.noopener.newprocess.enabled", true);
pref("dom.payments.loglevel", "Warn");
pref("dom.payments.request.enabled", false);
pref("dom.performance.time_to_non_blank_paint.enabled", false);
pref("dom.promise_rejection_events.enabled", false);
pref("dom.push.alwaysConnect", false);
pref("dom.registerContentHandler.enabled", true);
pref("dom.registerProtocolHandler.insecure.enabled", true);
pref("dom.script_loader.bytecode_cache.enabled", true);
pref("dom.script_loader.bytecode_cache.strategy", 0);
pref("dom.select_popup_in_content.enabled", false);
pref("dom.select_popup_in_parent.enabled", false);
pref("dom.serviceWorkers.disable_open_click_delay", 1000);
pref("dom.serviceWorkers.update_delay", 1000);
pref("dom.storage.testing", false);
pref("dom.storageManager.prompt.testing", false);
pref("dom.storageManager.prompt.testing.allow", false);
pref("dom.streams.enabled", false);
pref("dom.timeout.background_budget_regeneration_rate", 100);
pref("dom.timeout.background_throttling_max_budget", 50);
pref("dom.timeout.budget_throttling_max_delay", 15000);
pref("dom.timeout.enable_budget_timer_throttling", true);
pref("dom.timeout.foreground_budget_regeneration_rate", 1);
pref("dom.timeout.foreground_throttling_max_budget", -1);
pref("dom.timeout.max_consecutive_callbacks_ms", 4);
pref("dom.timeout.throttling_delay", 30000);
pref("dom.vr.autoactivate.enabled", false);
pref("dom.vr.controller.enumerate.interval", 1000);
pref("dom.vr.controller_trigger_threshold", "0.1");
pref("dom.vr.display.enumerate.interval", 5000);
pref("dom.vr.display.rafMaxDuration", 50);
pref("dom.vr.inactive.timeout", 5000);
pref("dom.vr.navigation.timeout", 5000);
pref("dom.vr.oculus.invisible.enabled", true);
pref("dom.vr.oculus.present.timeout", 500);
pref("dom.vr.oculus.quit.timeout", 10000);
pref("dom.vr.puppet.enabled", false);
pref("dom.vr.puppet.submitframe", 0);
pref("dom.vr.require-gesture", true);
pref("dom.vr.test.enabled", false);
pref("dom.w3c_pointer_events.dispatch_by_pointer_messages", false);
pref("dom.webcomponents.shadowdom.enabled", false);
pref("dom.webdriver.enabled", true);
pref("dom.webmidi.enabled", false);
pref("dom.xhr.lowercase_header.enabled", false);
pref("editor.use_div_for_default_newlines", true);
pref("extensions.allow-non-mpc-extensions", true);
pref("extensions.formautofill.addresses.enabled", true);
pref("extensions.formautofill.available", "detect");
pref("extensions.formautofill.creditCards.available", false);
pref("extensions.formautofill.creditCards.enabled", true);
pref("extensions.formautofill.creditCards.used", 0);
pref("extensions.formautofill.firstTimeUse", true);
pref("extensions.formautofill.heuristics.enabled", true);
pref("extensions.formautofill.loglevel", "Warn");
pref("extensions.formautofill.section.enabled", true);
pref("extensions.formautofill.supportedCountries", "US");
pref("extensions.formautofill.supportRTL", false);
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com");
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,remoteBreakpad");
pref("extensions.geckoProfiler.symbols.url", "http://symbols.mozilla.org/");
pref("extensions.getAddons.compatOverides.url", "https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.getAddons.themes.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox");
pref("extensions.langpacks.signatures.required", false);
pref("extensions.legacy.enabled", false);
pref("extensions.legacy.exceptions", "{972ce4c6-7e08-4474-a285-3208198ce6fd},testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com");
pref("extensions.screenshots.disabled", false);
pref("extensions.screenshots.upload-disabled", false);
pref("extensions.startupScanScopes", 0);
pref("extensions.webcompat-reporter.enabled", false);
pref("extensions.webcompat-reporter.newIssueEndpoint", "https://webcompat.com/issues/new");
pref("extensions.webextensions.identity.redirectDomain", "extensions.allizom.org");
pref("extensions.webextensions.protocol.remote", true);
pref("extensions.webextensions.remote", true);
pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com");
pref("extensions.webextensions.tabhide.enabled", false);
pref("extensions.webextensions.themes.enabled", true);
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
pref("font.name-list.emoji", "Segoe UI Emoji, EmojiOne Mozilla");
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
pref("full-screen-api.ignore-widgets", false);
pref("general.document_open_conversion_depth_limit", 20);
pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120);
pref("general.smoothScroll.msdPhysics.enabled", false);
pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 1250);
pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1000);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 12);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.3");
pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 2000);
pref("gfx.direct2d.destroy-dt-on-paintthread", true);
pref("gfx.direct3d11.break-on-error", false);
pref("gfx.direct3d11.enable-debug-layer", false);
pref("gfx.downloadable_fonts.keep_color_bitmaps", false);
pref("gfx.downloadable_fonts.keep_variation_tables", false);
pref("gfx.downloadable_fonts.otl_validation", false);
pref("gfx.webrender.all", false);
pref("gfx.webrender.blob-images", 1);
pref("gfx.webrender.debug.alpha-primitives", false);
pref("gfx.webrender.debug.compact-profiler", false);
pref("gfx.webrender.debug.disable-batching", false);
pref("gfx.webrender.debug.epochs", false);
pref("gfx.webrender.debug.gpu-sample-queries", false);
pref("gfx.webrender.debug.gpu-time-queries", false);
pref("gfx.webrender.debug.profiler", false);
pref("gfx.webrender.debug.render-targets", false);
pref("gfx.webrender.debug.texture-cache", false);
pref("gfx.webrender.enabled", false);
pref("gfx.webrender.force-angle", true);
pref("gfx.webrender.highlight-painted-layers", false);
pref("gfx.webrender.hit-test", true);
pref("gfx.webrender.program-binary", true);
pref("gl.use-tls-is-current", 0);
pref("identity.fxaccounts.enabled", true);
pref("identity.fxaccounts.remote.root", "https://accounts.firefox.com/");
pref("image.animated.decode-on-demand.batch-size", 6);
pref("image.animated.decode-on-demand.threshold-kb", 4194303);
pref("image.cache.factor2.threshold-surfaces", 4);
pref("image.layout_network_priority", true);
pref("image.mem.animated.discardable", true);
pref("image.mem.animated.use_heap", false);
pref("image.mem.shared", 2);
pref("image.mem.volatile.min_threshold_kb", -1);
pref("image.multithreaded_decoding.idle_timeout", 600000);
pref("input_event_queue.count_for_prediction", 9);
pref("input_event_queue.default_duration_per_event", 1);
pref("input_event_queue.duration.max", 8);
pref("input_event_queue.duration.min", 1);
pref("input_event_queue.supported", true);
pref("intl.charset.fallback.utf8_for_file", false);
pref("intl.ime.hack.set_input_scope_of_url_bar_to_default", true);
pref("intl.regional_prefs.use_os_locales", false);
pref("intl.tsf.hack.japanist10.do_not_return_no_layout_error_of_composition_string", true);
pref("intl.uidirection", -1);
pref("javascript.options.array_prototype_values", true);
pref("javascript.options.mem.gc_allocation_threshold_factor", 90);
pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90);
pref("javascript.options.mem.nursery.max_kb", 16384);
pref("javascript.options.spectre.index_masking", true);
pref("javascript.options.spectre.jit_to_C++_calls", true);
pref("javascript.options.spectre.object_mitigations.barriers", true);
pref("javascript.options.spectre.object_mitigations.misc", true);
pref("javascript.options.spectre.string_mitigations", true);
pref("javascript.options.spectre.value_masking", true);
pref("javascript.options.streams", false);
pref("javascript.options.wasm_ionjit", true);
pref("jsloader.shareGlobal", true);
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
pref("layers.geometry.basic.enabled", true);
pref("layers.geometry.d3d11.enabled", true);
pref("layers.geometry.opengl.enabled", true);
pref("layers.gpu-process.allow-software", true);
pref("layers.gpu-process.enabled", true);
pref("layers.mlgpu.enabled", true);
pref("layers.mlgpu.enable-on-windows7", true);
pref("layers.omtp.dump-capture", false);
pref("layers.omtp.enabled", true);
pref("layers.omtp.paint-workers", 1);
pref("layers.omtp.release-capture-on-main-thread", false);
pref("layout.animation.prerender.absolute-limit-x", 4096);
pref("layout.animation.prerender.absolute-limit-y", 4096);
pref("layout.animation.prerender.partial", false);
pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125");
pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125");
pref("layout.css.column-span.enabled", false);
pref("layout.css.font-variations.enabled", false);
pref("layout.css.frames-timing.enabled", false);
pref("layout.css.individual-transform.enabled", false);
pref("layout.css.moz-document.content.enabled", true);
pref("layout.css.overscroll-behavior.enabled", true);
pref("layout.css.paint-order.enabled", true);
pref("layout.css.ruby.intercharacter.enabled", false);
pref("layout.css.scoped-style.enabled", false);
pref("layout.css.servo.chrome.enabled", true);
pref("layout.css.servo.enabled", true);
pref("layout.css.text-justify.enabled", true);
pref("layout.display-list.dump-parent", false);
pref("layout.display-list.rebuild-frame-limit", 500);
pref("layout.display-list.retain", false);
pref("layout.display-list.retain.chrome", false);
pref("layout.scrollbars.always-layerize-track", false);
pref("layout.word_select.stop_at_underscore", false);
pref("marionette.debugging.clicktostart", false);
pref("marionette.enabled", false);
pref("marionette.log.level", "info");
pref("marionette.port", 2828);
pref("marionette.prefs.recommended", true);
pref("media.cubeb.logging_level", "");
pref("media.cubeb.sandbox", false);
pref("media.decoder.recycle.enabled", false);
pref("media.decoder.skip-to-next-key-frame.enabled", true);
pref("media.decoder-doctor.decode-errors-allowed", "");
pref("media.decoder-doctor.decode-warnings-allowed", "");
pref("media.decoder-doctor.new-issue-endpoint", "https://webcompat.com/issues/new");
pref("media.eme.chromium-api.video-shmems", 6);
pref("media.eme.hdcp-policy-check.enabled", false);
pref("media.eme.vp9-in-mp4.enabled", false);
pref("media.ffmpeg.low-latency.enabled", false);
pref("media.getusermedia.camera.off_while_disabled.delay_ms", 3000);
pref("media.getusermedia.camera.off_while_disabled.enabled", true);
pref("media.getusermedia.channels", 0);
pref("media.getusermedia.microphone.off_while_disabled.delay_ms", 3000);
pref("media.getusermedia.microphone.off_while_disabled.enabled", true);
pref("media.gpu-process-decoder", true);
pref("media.memory_cache_max_size", 8192);
pref("media.memory_caches_combined_limit_kb", 524288);
pref("media.memory_caches_combined_limit_pc_sysmem", 5);
pref("media.navigator.mediadatadecoder_enabled", false);
pref("media.navigator.streams.fake", false);
pref("media.omt_data_delivery.enabled", true);
pref("media.peerconnection.rtpsourcesapi.enabled", true);
pref("media.peerconnection.video.denoising", false);
pref("media.peerconnection.video.vp9_preferred", false);
pref("media.playback.warnings-as-errors", false);
pref("media.recorder.audio_node.enabled", false);
pref("media.recorder.video.frame_drops", true);
pref("media.resume-bkgnd-video-on-tabhover", true);
pref("media.seamless-looping", true);
pref("media.throttle-factor", 2);
pref("media.throttle-regardless-of-download-rate", false);
pref("media.webvtt.pseudo.enabled", true);
pref("media.wmf.allow-unsupported-resolutions", false);
pref("media.wmf.amd.highres.enabled", true);
pref("media.wmf.amd.vp9.enabled", true);
pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", true);
pref("media.wmf.dxva.d3d11.enabled", true);
pref("media.wmf.dxva.enabled", true);
pref("media.wmf.dxva.max-videos", 8);
pref("media.wmf.play-stand-alone", true);
pref("media.wmf.use-nv12-format", true);
pref("media.wmf.use-sync-texture", true);
pref("mousewheel.debug.make_window_under_cursor_foreground", false);
pref("network.activity.intervalMilliseconds", 0);
pref("network.auth.non-web-content-triggered-resources-http-auth-allow", false);
pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);
pref("network.cookie.ipc.sync", false);
pref("network.cookie.same-site.enabled", true);
pref("network.cookie.thirdparty.nonsecureSessionOnly", false);
pref("network.dns.forceResolve", "");
pref("network.dns.native-is-localhost", false);
pref("network.ftp.enabled", true);
pref("network.http.active_tab_priority", true);
pref("network.http.focused_window_transaction_ratio", "0.9");
pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
pref("network.http.on_click_priority", true);
pref("network.http.originextension", true);
pref("network.http.rcwn.cache_queue_normal_threshold", 8);
pref("network.http.rcwn.cache_queue_priority_threshold", 2);
pref("network.http.rcwn.enabled", true);
pref("network.http.rcwn.max_wait_before_racing_ms", 500);
pref("network.http.rcwn.min_wait_before_racing_ms", 0);
pref("network.http.rcwn.small_resource_size_kb", 256);
pref("network.http.referer.defaultPolicy", 3);
pref("network.http.referer.defaultPolicy.pbmode", 2);
pref("network.http.referer.hideOnionSource", false);
pref("network.http.sendOriginHeader", 0);
pref("network.http.tailing.delay-max", 6000);
pref("network.http.tailing.delay-quantum", 600);
pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100);
pref("network.http.tailing.enabled", true);
pref("network.http.tailing.total-max", 45000);
pref("network.http.throttle.enable", true);
pref("network.http.throttle.hold-time-ms", 800);
pref("network.http.throttle.max-time-ms", 500);
pref("network.http.throttle.read-interval-ms", 500);
pref("network.http.throttle.read-limit-bytes", 8000);
pref("network.http.throttle.resume-for", 100);
pref("network.http.throttle.suspend-for", 900);
pref("network.http.throttle.version", 1);
pref("network.http.tls-handshake-timeout", 30);
pref("network.preload", false);
pref("network.protocol-handler.external.htp", false);
pref("network.protocol-handler.external.htps", false);
pref("network.standard-url.punycode-host", true);
pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5);
pref("network.tcp.tcp_fastopen_enable", false);
pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10);
pref("network.tcp.tcp_fastopen_http_stalls_limit", 3);
pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20);
pref("network.trr.allow-rfc1918", false);
pref("network.trr.blacklist-duration", 259200);
pref("network.trr.bootstrapAddress", "");
pref("network.trr.confirmationNS", "example.com");
pref("network.trr.credentials", "");
pref("network.trr.early-AAAA", false);
pref("network.trr.mode", 0);
pref("network.trr.request-timeout", 3000);
pref("network.trr.uri", "");
pref("network.trr.useGET", false);
pref("network.trr.wait-for-portal", true);
pref("pdfium.enabled", false);
pref("permissions.default.camera", 0);
pref("permissions.default.desktop-notification", 0);
pref("permissions.default.geo", 0);
pref("permissions.default.microphone", 0);
pref("permissions.default.shortcuts", 0);
pref("places.frecency.redirectSourceVisitBonus", 25);
pref("plugins.flashBlock.enabled", true);
pref("plugins.http_https_only", true);
pref("plugins.navigator.hidden_ctp_plugin", "");
pref("plugins.remember_infobar_dismissal", true);
pref("plugins.show_infobar", false);
pref("preferences.allow.omt-write", true);
pref("privacy.firstparty.isolate.restrict_opener_access", true);
pref("privacy.history.custom", false);
pref("privacy.permissionPrompts.showCloseButton", false);
pref("privacy.reduceTimerPrecision", true);
pref("privacy.resistFingerprinting", false);
pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000);
pref("privacy.spoof_english", 0);
pref("privacy.temporary_permission_expire_time_ms", 3600000);
pref("privacy.trackingprotection.annotate_channels", true);
pref("privacy.trackingprotection.lower_network_priority", false);
pref("privacy.userContext.extension", "");
pref("privacy.userContext.longPressBehavior", 0);
pref("security.allow_chrome_frames_inside_content", false);
pref("security.csp.enable_violation_events", false);
pref("security.data_uri.block_toplevel_data_uri_navigations", true);
pref("security.data_uri.unique_opaque_origin", true);
pref("security.insecure_connection_icon.enabled", false);
pref("security.insecure_connection_icon.pbmode.enabled", false);
pref("security.insecure_connection_text.enabled", false);
pref("security.insecure_connection_text.pbmode.enabled", false);
pref("security.insecure_field_warning.ignore_local_ip_address", true);
pref("security.mixed_content.block_object_subrequest", false);
pref("security.mixed_content.upgrade_display_content", false);
pref("security.OCSP.timeoutMilliseconds.hard", 10000);
pref("security.OCSP.timeoutMilliseconds.soft", 2000);
pref("security.pki.distrust_ca_policy", 1);
pref("security.sandbox.gpu.level", 0);
pref("security.sandbox.logging.enabled", false);
pref("security.signed_app_signatures.policy", 2);
pref("security.webauth.webauthn", true);
pref("security.webauth.webauthn_enable_softtoken", false);
pref("security.webauth.webauthn_enable_usbtoken", true);
pref("services.blocklist.pinning.bucket", "pinning");
pref("services.blocklist.pinning.checked", 0);
pref("services.blocklist.pinning.collection", "pins");
pref("services.blocklist.pinning.enabled", true);
pref("services.sync.engine.addresses", false);
pref("services.sync.engine.addresses.available", false);
pref("services.sync.engine.bookmarks.buffer", false);
pref("services.sync.engine.bookmarks.validation.interval", 86400);
pref("services.sync.engine.bookmarks.validation.maxRecords", 1000);
pref("services.sync.engine.bookmarks.validation.percentageChance", 10);
pref("services.sync.engine.creditcards", false);
pref("services.sync.engine.creditcards.available", false);
pref("services.sync.engine.passwords.validation.interval", 86400);
pref("services.sync.engine.passwords.validation.maxRecords", 1000);
pref("services.sync.engine.passwords.validation.percentageChance", 10);
pref("services.sync.log.logger", "Debug");
pref("services.sync.log.logger.engine", "Debug");
pref("services.sync.maxResyncs", 5);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", true);
pref("services.sync.prefs.sync.browser.urlbar.matchBuckets", true);
pref("services.sync.prefs.sync.privacy.reduceTimerPrecision", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", true);
pref("sidebar.position_start", true);
pref("svg.context-properties.content.enabled", false);
pref("svg.disabled", false);
pref("toolkit.cosmeticAnimations.enabled", true);
pref("toolkit.crashreporter.include_context_heap", false);
pref("toolkit.datacollection.infoURL", "https://www.mozilla.org/legal/privacy/firefox.html");
pref("toolkit.dump.emit", false);
pref("toolkit.telemetry.bhrPing.enabled", true);
pref("toolkit.telemetry.firstShutdownPing.enabled", true);
pref("toolkit.telemetry.hybridContent.enabled", true);
pref("toolkit.telemetry.newProfilePing.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.updatePing.enabled", true);
pref("ui.context_menus.after_mouseup", false);
pref("urlclassifier.flashAllowExceptTable", "except-flashallow-digest256");
pref("urlclassifier.flashAllowTable", "allow-flashallow-digest256");
pref("urlclassifier.flashExceptTable", "except-flash-digest256");
pref("urlclassifier.flashInfobarTable", "except-flashinfobar-digest256");
pref("urlclassifier.flashSubDocExceptTable", "except-flashsubdoc-digest256");
pref("urlclassifier.flashSubDocTable", "block-flashsubdoc-digest256");
pref("urlclassifier.flashTable", "block-flash-digest256");
pref("urlclassifier.passwordAllowTable", "goog-passwordwhite-proto");
pref("urlclassifier.update.response_timeout_ms", 30000);
pref("urlclassifier.update.timeout_ms", 90000);
pref("webgl.1.allow-core-profiles", false);
pref("webgl.force-index-validation", 0);
pref("webgl.max-contexts", 32);
pref("webgl.max-contexts-per-principal", 16);
pref("webgl.perf.max-acceptable-fb-status-invals", 0);
pref("webgl.perf.max-warnings", 0);
pref("webgl.perf.spew-frame-allocs", true);
pref("widget.window-transforms.disabled", false);

// removed, renamed or hidden in v60.0esr:
pref("accessibility.ipc_architecture.enabled", true);
pref("accessibility.loadedInLastSession", false);
pref("accessibility.usebrailledisplay", "");
pref("alerts.disableSlidingEffect", false);
pref("app.support.e10sAccessibilityUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/accessibility-ppt");
pref("app.update.badge", false);
pref("application.use_ns_plugin_finder", false);
pref("apz.highlight_checkerboarded_areas", false);
pref("browser.addon-watch.ignore", "[\"mochikit@mozilla.org\",\"special-powers@mozilla.org\",\"fxdevtools-adapters@mozilla.org\",\"fx-devtools\"]");
pref("browser.addon-watch.interval", -1);
pref("browser.bookmarks.showRecentlyBookmarked", true);
pref("browser.cache.auto_delete_cache_version", 0);
pref("browser.cache.use_new_backend", 0);
pref("browser.cache.use_new_backend_temp", true);
pref("browser.casting.enabled", false);
pref("browser.chrome.toolbar_style", 2);
pref("browser.customizemode.tip0.learnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/customize");
pref("browser.customizemode.tip0.shown", false);
pref("browser.download.showPanelDropmarker", false);
pref("browser.formfill.saveHttpsForms", true);
pref("browser.fullscreen.animate", true);
pref("browser.helperApps.alwaysAsk.force", false);
pref("browser.newtabpage.columns", 5);
pref("browser.newtabpage.compact", false);
pref("browser.newtabpage.directory.ping", "https://tiles.services.mozilla.com/v3/links/");
pref("browser.newtabpage.directory.source", "https://tiles.services.mozilla.com/v3/links/fetch/%LOCALE%/%CHANNEL%");
pref("browser.newtabpage.enhanced", true);
pref("browser.newtabpage.introShown", false);
pref("browser.newtabpage.remote", false);
pref("browser.newtabpage.remote.content-signing-test", false);
pref("browser.newtabpage.remote.keys", "");
pref("browser.newtabpage.remote.mode", "production");
pref("browser.newtabpage.remote.version", "1");
pref("browser.newtabpage.rows", 3);
pref("browser.newtabpage.thumbnailPlaceholder", false);
pref("browser.popups.showPopupBlocker", true);
pref("browser.preferences.animateFadeIn", false);
pref("browser.reader.detectedFirstArticle", false);
pref("browser.safebrowsing.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.selfsupport.url", "https://self-repair.mozilla.org/%LOCALE%/repair");
pref("browser.shell.skipDefaultBrowserCheck", true);
pref("browser.tabs.animate", true);
pref("browser.tabs.dontfocusfordialogs", true);
pref("browser.uitour.readerViewTrigger", "^https:\\/\\/www\\.mozilla\\.org\\/[^\\/]+\\/firefox\\/reading\\/start");
pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 4);
pref("browser.urlbar.lastSuggestionsPromptDate", 20160601);
pref("browser.urlbar.match.title", "#");
pref("browser.urlbar.match.url", "@");
pref("browser.urlbar.restrict.bookmark", "*");
pref("browser.urlbar.restrict.history", "^");
pref("browser.urlbar.restrict.openpage", "%");
pref("browser.urlbar.restrict.searches", "$");
pref("browser.urlbar.restrict.tag", "+");
pref("browser.urlbar.restrict.typed", "~");
pref("camera.control.face_detection.enabled", true);
pref("capability.policy.default.SOAPCall.invokeVerifySourceHeader", "allAccess");
pref("datareporting.healthreport.about.reportUrl", "https://fhr.cdn.mozilla.net/%LOCALE%/v4/");
pref("devtools.apps.forbidden-permissions", "embed-apps");
pref("devtools.debugger.chrome-debugging-port", 6080);
pref("devtools.debugger.client-source-maps-enabled", true);
pref("devtools.fontinspector.enabled", true);
pref("devtools.inspector.mdnDocsTooltip.enabled", true);
pref("devtools.layoutview.enabled", false);
pref("devtools.loader.hotreload", false);
pref("devtools.migration.warnings", true);
pref("devtools.netmonitor.statistics", true);
pref("devtools.remote.wifi.visible", true);
pref("devtools.responsive.html.enabled", true);
pref("devtools.responsiveUI.no-reload-notification", false);
pref("devtools.sourcemap.locations.enabled", false);
pref("devtools.styleeditor.source-maps-enabled", true);
pref("devtools.telemetry.supported_performance_marks", "contentInteractive,navigationInteractive,navigationLoaded,visuallyLoaded,fullyLoaded,mediaEnumerated,scanEnd");
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","screenshot --fullpage", "rulers", "measure"]');
pref("devtools.webide.adaptersAddonID", "fxdevtools-adapters@mozilla.org");
pref("devtools.webide.adaptersAddonURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/valence/#OS#/valence-#OS#-latest.xpi");
pref("devtools.webide.addonsURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/index.json");
pref("devtools.webide.autoinstallFxdtAdapters", true);
pref("devtools.webide.autosaveFiles", true);
pref("devtools.webide.logSimulatorOutput", false);
pref("devtools.webide.monitorWebSocketURL", "ws://localhost:9000");
pref("devtools.webide.showProjectEditor", true);
pref("devtools.webide.simulatorAddonID", "fxos_#SLASHED_VERSION#_simulator@mozilla.org");
pref("devtools.webide.simulatorAddonRegExp", "fxos_(.*)_simulator@mozilla\\.org$");
pref("devtools.webide.simulatorAddonsURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/#VERSION#/#OS#/fxos_#SLASHED_VERSION#_simulator-#OS#-latest.xpi");
pref("devtools.webide.widget.autoinstall", true);
pref("devtools.webide.widget.enabled", false);
pref("devtools.webide.widget.inNavbarByDefault", false);
pref("dom.archivereader.enabled", false);
pref("dom.audiochannel.mutedByDefault", false);
pref("dom.beforeAfterKeyboardEvent.enabled", false);
pref("dom.details_element.enabled", true);
pref("dom.disable_window_status_change", true);
pref("dom.enable_user_timing", true);
pref("dom.flyweb.enabled", false);
pref("dom.forms.autocomplete.experimental", false);
pref("dom.forms.requestAutocomplete", false);
pref("dom.idle_period.throttled_length", 10000);
pref("dom.idle-observers-api.enabled", true);
pref("dom.ipc.plugins.asyncInit.enabled", false);
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
pref("dom.secureelement.enabled", false);
pref("dom.serviceWorkers.openWindow.enabled", false);
pref("dom.sysmsg.enabled", false);
pref("dom.system_update.debug", false);
pref("dom.system_update.enabled", false);
pref("dom.url.encode_decode_hash", true);
pref("dom.url.getters_decode_hash", false);
pref("dom.webapps.useCurrentProfile", false);
pref("dom.webcomponents.enabled", false);
pref("dom.workers.enabled", true);
pref("extensions.alwaysUnpack", false);
pref("extensions.dss.enabled", false);
pref("extensions.e10sBlocksEnabling", true);
pref("extensions.getAddons.getWithPerformance.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%&tMain=%TIME_MAIN%&tFirstPaint=%TIME_FIRST_PAINT%&tSessionRestored=%TIME_SESSION_RESTORED%");
pref("extensions.getAddons.maxResults", 15);
pref("extensions.getAddons.recommended.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/list/recommended/all/%MAX_RESULTS%/%OS%/%VERSION%?src=firefox");
pref("extensions.getAddons.search.url", "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/%TERMS%/all/%MAX_RESULTS%/%OS%/%VERSION%/%COMPATIBILITY_MODE%?src=firefox");
pref("extensions.hotfix.cert.checkAttributes", true);
pref("extensions.hotfix.certs.1.sha1Fingerprint", "91:53:98:0C:C1:86:DF:47:8F:35:22:9E:11:C9:A7:31:04:49:A1:AA");
pref("extensions.hotfix.certs.2.sha1Fingerprint", "39:E7:2B:7A:5B:CF:37:78:F9:5D:4A:E0:53:2D:2F:3D:68:53:C5:60");
pref("extensions.hotfix.id", "firefox-hotfix@mozilla.org");
pref("extensions.interposition.enabled", true);
pref("extensions.interposition.prefetching", true);
pref("gecko.handlerService.allowRegisterFromDifferentHost", false);
pref("general.useragent.locale", "en-US");
pref("gfx.content.use-native-pushlayer", true);
pref("gfx.font_loader.families_per_slice", 3);
pref("gfx.font_rendering.cleartype.always_use_for_content", false);
pref("gfx.font_rendering.cleartype.use_for_downloadable_fonts", true);
pref("gfx.font_rendering.directwrite.force-enabled", false);
pref("gfx.prefer-mesa-llvmpipe", false);
pref("gfx.vr.openvr-runtime", "");
pref("identity.fxaccounts.profile_image.enabled", true);
pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v3");
pref("identity.fxaccounts.remote.webchannel.uri", "https://accounts.firefox.com/");
pref("identity.fxaccounts.settings.uri", "https://accounts.firefox.com/settings?service=sync&context=fx_desktop_v3");
pref("idle_queue.long_period", 50);
pref("idle_queue.min_period", 3);
pref("image.mozsamplesize.enabled", false);
pref("images.dither", "auto");
pref("intl.locale.matchOS", false);
pref("intl.tsf.hack.easy_changjei.do_not_return_no_layout_error", true);
pref("intl.tsf.hack.ms_japanese_ime.do_not_associate_imc_on_win10", true);
pref("intl.uidirection.ar", "rtl");
pref("intl.uidirection.fa", "rtl");
pref("intl.uidirection.he", "rtl");
pref("intl.uidirection.ug", "rtl");
pref("intl.uidirection.ur", "rtl");
pref("javascript.options.mem.gc_refresh_frame_slices_enabled", true);
pref("jsloader.reuseGlobal", false);
pref("layers.allow-d3d9-fallback", false);
pref("layers.frame-counter", false);
pref("layers.gralloc.disable", false);
pref("layers.prefer-d3d9", false);
pref("layout.accessiblecaret.timeout_ms", 0);
pref("layout.css.background-clip-text.enabled", true);
pref("layout.css.clip-path-shapes.enabled", false);
pref("layout.css.display-contents.enabled", true);
pref("layout.css.grid.enabled", true);
pref("layout.css.object-fit-and-position.enabled", true);
pref("layout.css.unprefixing-service.enabled", true);
pref("layout.css.variables.enabled", true);
pref("layout.frame_rate.precise", false);
pref("media.directshow.enabled", true);
pref("media.eme.apiVisible", true);
pref("media.getusermedia.aec_delay_agnostic", true);
pref("media.getusermedia.playout_delay", 40);
pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com,bluejeans.com,*.bluejeans.com,*.a.bluejeans.com,*.bbcollab.com");
pref("media.navigator.load_adapt", true);
pref("media.navigator.load_adapt.avg_seconds", 3);
pref("media.navigator.load_adapt.encoder_only", true);
pref("media.navigator.load_adapt.high_load", "0.90");
pref("media.navigator.load_adapt.low_load", "0.40");
pref("media.navigator.load_adapt.measure_interval", 1000);
pref("media.navigator.video.default_minfps", 10);
pref("media.peerconnection.video.h264_enabled", false);
pref("media.raw.enabled", true);
pref("media.wakelock_timeout", 2000);
pref("media.webrtc.debug.aec_log_dir", "");
pref("media.windows-media-foundation.allow-d3d11-dxva", true);
pref("media.wmf.decoder.thread-count", -1);
pref("memory.free_dirty_pages", false);
pref("memory.low_commit_space_threshold_mb", 128);
pref("memory.low_memory_notification_interval_ms", 10000);
pref("memory.low_physical_memory_threshold_mb", 0);
pref("memory.low_virtual_memory_threshold_mb", 128);
pref("middlemouse.openNewWindow", true);
pref("mms.debugging.enabled", false);
pref("network.activity.blipIntervalMilliseconds", 0);
pref("network.http.bypass-cachelock-threshold", 200000);
pref("network.http.enablePerElementReferrer", true);
pref("network.http.keep_empty_response_headers_as_empty_string", true);
pref("network.http.pipelining", false);
pref("network.http.pipelining.abtest", false);
pref("network.http.pipelining.aggressive", false);
pref("network.http.pipelining.max-optimistic-requests", 4);
pref("network.http.pipelining.maxrequests", 32);
pref("network.http.pipelining.maxsize", 300000);
pref("network.http.pipelining.read-timeout", 30000);
pref("network.http.pipelining.reschedule-on-timeout", true);
pref("network.http.pipelining.reschedule-timeout", 1500);
pref("network.http.pipelining.ssl", false);
pref("network.http.proxy.pipelining", false);
pref("network.standard-url.encode-utf8", true);
pref("network.standard-url.escape-utf8", true);
pref("notification.feature.enabled", false);
pref("plugin.load_flash_only", false);
pref("plugin.scan.Acrobat", "5.0");
pref("plugin.scan.Quicktime", "5.0");
pref("plugin.scan.WindowsMediaPlayer", "7.0");
pref("plugins.navigator_hide_disabled_flash", false);
pref("pointer-lock-api.prefixed.enabled", false);
pref("prefs.converted-to-utf8", false);
pref("print.always_cache_old_pres", false);
pref("print.print_extra_margin", 90);
pref("profile.confirm_automigration", true);
pref("profile.migration_behavior", 0);
pref("profile.migration_directory", "");
pref("profile.seconds_until_defunct", -1);
pref("ril.numRadioInterfaces", 0);
pref("security.checkloaduri", true);
pref("security.mixed_content.hsts_priming_cache_timeout", 10080);
pref("security.mixed_content.send_hsts_priming", false);
pref("security.mixed_content.use_hsts", false);
pref("security.onecrl.via.amo", false);
pref("security.sandbox.windows.log", false);
pref("security.ssl.enable_npn", true);
pref("security.ssl.false_start.require-npn", false);
pref("security.tls.unrestricted_rc4_fallback", false);
pref("security.webauth.u2f_enable_softtoken", false);
pref("security.webauth.u2f_enable_usbtoken", false);
pref("security.xcto_nosniff_block_images", false);
pref("security.xpconnect.plugin.unrestricted", true);
pref("services.sync.errorhandler.networkFailureReportTimeout", 1209600);
pref("services.sync.jpake.firstMsgMaxTries", 300);
pref("services.sync.jpake.lastMsgMaxTries", 300);
pref("services.sync.jpake.maxTries", 10);
pref("services.sync.jpake.pollInterval", 1000);
pref("services.sync.jpake.serverURL", "https://setup.services.mozilla.com/");
pref("services.sync.log.logger.addonutils", "Debug");
pref("services.sync.log.logger.authenticator", "Debug");
pref("services.sync.log.logger.declined", "Debug");
pref("services.sync.log.logger.engine.addons", "Debug");
pref("services.sync.log.logger.engine.apps", "Debug");
pref("services.sync.log.logger.engine.bookmarks", "Debug");
pref("services.sync.log.logger.engine.clients", "Debug");
pref("services.sync.log.logger.engine.extension-storage", "Debug");
pref("services.sync.log.logger.engine.forms", "Debug");
pref("services.sync.log.logger.engine.history", "Debug");
pref("services.sync.log.logger.engine.passwords", "Debug");
pref("services.sync.log.logger.engine.prefs", "Debug");
pref("services.sync.log.logger.engine.tabs", "Debug");
pref("services.sync.log.logger.identity", "Debug");
pref("services.sync.log.logger.network.resources", "Debug");
pref("services.sync.log.logger.service.jpakeclient", "Debug");
pref("services.sync.log.logger.service.main", "Debug");
pref("services.sync.log.logger.status", "Debug");
pref("services.sync.log.logger.userapi", "Debug");
pref("services.sync.log.rootLogger", "Debug");
pref("services.sync.miscURL", "misc/");
pref("services.sync.prefs.sync.browser.newtabpage.enhanced", true);
pref("services.sync.prefs.sync.javascript.enabled", true);
pref("services.sync.privacyURL", "https://services.mozilla.com/privacy-policy/");
pref("services.sync.registerEngines", "Bookmarks,Form,History,Password,Prefs,Tab,Addons,ExtensionStorage");
pref("services.sync.scheduler.eolInterval", 604800);
pref("services.sync.scheduler.sync11.singleDeviceInterval", 86400);
pref("services.sync.sendTabToDevice.enabled", true);
pref("services.sync.serverURL", "https://auth.services.mozilla.com/");
pref("services.sync.statusURL", "https://services.mozilla.com/status/");
pref("services.sync.syncKeyHelpURL", "https://services.mozilla.com/help/synckey");
pref("services.sync.termsURL", "https://services.mozilla.com/tos/");
pref("services.sync.userURL", "user/");
pref("services.sync.validation.interval", 86400);
pref("services.sync.validation.maxRecords", 100);
pref("services.sync.validation.percentageChance", 10);
pref("signed.applets.codebase_principal_support", false);
pref("social.directories", "https://activations.cdn.mozilla.net");
pref("social.remote-install.enabled", true);
pref("social.share.activationPanelEnabled", true);
pref("social.shareDirectory", "https://activations.cdn.mozilla.net/sharePanel.html");
pref("social.sidebar.unload_timeout_ms", 10000);
pref("social.toast-notifications.enabled", true);
pref("social.whitelist", "https://mozsocial.cliqz.com");
pref("stagefright.disabled", false);
pref("stagefright.force-enabled", false);
pref("svg.paint-order.enabled", true);
pref("toolkit.identity.debug", false);
pref("toolkit.identity.enabled", false);
pref("ui.key.saveLink.shift", true);
pref("urlclassifier.max-complete-age", 2700);
pref("view_source.tab", true);
pref("viewmanager.do_doublebuffering", true);
pref("wap.UAProf.tagname", "x-wap-profile");
pref("wap.UAProf.url", "");

// changed in v60.0esr:
pref("app.update.badgeWaitTime", 345600); // prev: 0
pref("app.update.staging.enabled", false); // prev: true
pref("apz.drag.enabled", true); // prev: false
pref("apz.touch_move_tolerance", "0.1"); // prev: "0.03"
pref("browser.migrate.chrome.history.limit", 2000); // prev: 0
pref("browser.migrate.chrome.history.maxAgeInDays", 180); // prev: 0
pref("browser.safebrowsing.provider.google4.gethashURL", "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/fullHashes:find?$req=%REQUEST_BASE64%&$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto"); // prev: "goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto"
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"
pref("browser.safebrowsing.provider.mozilla.lists.content.description", "mozfullDesc2"); // prev: "mozfullDesc"
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true); // prev: false
pref("browser.slowStartup.timeThreshold", 20000); // prev: 40000
pref("browser.startup.firstrunSkipsHomepage", true); // prev: false
pref("browser.tabs.remote.autostart", true); // prev: false
pref("browser.urlbar.oneOffSearches", true); // prev: false
pref("browser.urlbar.suggest.searches", true); // prev: false
pref("datareporting.policy.firstRunURL", "https://www.mozilla.org/privacy/firefox/"); // prev: ""
pref("devtools.debugger.ignore-caught-exceptions", false); // prev: true
pref("devtools.debugger.new-debugger-frontend", true); // prev: false
pref("devtools.hud.loglimit", 10000); // prev: 1000
pref("devtools.jsonview.enabled", true); // prev: false
pref("devtools.netmonitor.har.defaultFileName", "Archive %date"); // prev: "Archive %y-%m-%d %H-%M-%S"
pref("devtools.storage.enabled", true); // prev: false
pref("devtools.webconsole.new-frontend-enabled", true); // prev: false
pref("dom.enable_performance_observer", true); // prev: false
pref("dom.event.highrestimestamp.enabled", true); // prev: false
pref("dom.forms.datetime", true); // prev: false
pref("dom.gamepad.extensions.enabled", true); // prev: false
pref("dom.ipc.cpows.allow-cpows-in-compat-addons", "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org"); // prev: "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,toolkit/require,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,browser-loader,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org"
pref("dom.ipc.plugins.asyncdrawing.enabled", true); // prev: false
pref("dom.ipc.processCount", 4); // prev: 1
pref("dom.popup_allowed_events", "change click dblclick mouseup pointerup notificationclick reset submit touchend"); // prev: "change click dblclick mouseup notificationclick reset submit touchend"
pref("dom.requestIdleCallback.enabled", true); // prev: false
pref("dom.storageManager.enabled", true); // prev: false
pref("dom.vr.enabled", true); // prev: false
pref("dom.vr.openvr.enabled", true); // prev: false
pref("dom.vr.poseprediction.enabled", true); // prev: false
pref("dom.w3c_pointer_events.enabled", true); // prev: false
pref("extensions.blocklist.detailsURL", "https://blocked.cdn.mozilla.net/"); // prev: "https://www.mozilla.com/%LOCALE%/blocklist/"
pref("extensions.blocklist.itemURL", "https://blocked.cdn.mozilla.net/%blockID%.html"); // prev: "https://blocklist.addons.mozilla.org/%LOCALE%/%APP%/blocked/%blockID%"
pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/"); // prev: "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/"
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%"); // prev: "https://services.addons.mozilla.org/%LOCALE%/firefox/api/%API_VERSION%/search/guid:%IDS%?src=firefox&appOS=%OS%&appVersion=%VERSION%"
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
pref("font.name-list.monospace.ja", "MS Gothic, MS Mincho, Meiryo, Yu Gothic, Yu Mincho, MS PGothic, MS PMincho"); // prev: "MS Gothic, MS Mincho, MS PGothic, MS PMincho,Meiryo"
pref("font.name-list.monospace.x-beng", "Mitra Mono, Likhan, Mukti Narrow"); // prev: "Likhan, Mukti Narrow"
pref("font.name-list.monospace.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.monospace.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.monospace.zh-CN", "SimSun, MS Song, SimSun-ExtB"); // prev: "MS Song, SimSun, SimSun-ExtB"
pref("font.name-list.sans-serif.ja", "Meiryo, Yu Gothic, MS PGothic, MS Gothic, Yu Mincho, MS PMincho, MS Mincho"); // prev: "MS PGothic, MS Gothic, MS PMincho, MS Mincho,Meiryo"
pref("font.name-list.sans-serif.ko", "Malgun Gothic, Gulim"); // prev: "Gulim"
pref("font.name-list.sans-serif.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.sans-serif.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.sans-serif.zh-HK", "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"); // prev: "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.sans-serif.zh-TW", "Arial, PMingLiU, MingLiU, MingLiU-ExtB"); // prev: "PMingLiU, MingLiU, MingLiU-ExtB"
pref("font.name-list.serif.ja", "Yu Mincho, MS PMincho, MS Mincho, Meiryo, Yu Gothic, MS PGothic, MS Gothic"); // prev: "MS PMincho, MS Mincho, MS PGothic, MS Gothic,Meiryo"
pref("font.name-list.serif.x-math", "Latin Modern Math, STIX Two Math, XITS Math, Cambria Math, Libertinus Math, DejaVu Math TeX Gyre, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Times New Roman"); // prev: "Latin Modern Math, XITS Math, Cambria Math, Libertinus Math, DejaVu Math TeX Gyre, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Symbol, Times New Roman"
pref("font.name-list.serif.x-mlym", "Rachana_w01, AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode"
pref("font.name-list.serif.x-orya", "ori1Uni, Kalinga"); // prev: "Kalinga, ori1Uni"
pref("font.name-list.serif.zh-CN", "SimSun, MS Song, SimSun-ExtB"); // prev: "MS Song, SimSun, SimSun-ExtB"
pref("font.name-list.serif.zh-HK", "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"); // prev: "MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.serif.zh-TW", "Times New Roman, PMingLiu, MingLiU, MingLiU-ExtB"); // prev: "PMingLiu, MingLiU, MingLiU-ExtB"
pref("javascript.options.mem.gc_incremental_slice_ms", 5); // prev: 10
pref("javascript.options.wasm", true); // prev: false
pref("javascript.options.wasm_baselinejit", true); // prev: false
pref("layout.css.float-logical-values.enabled", true); // prev: false
pref("layout.css.font-display.enabled", true); // prev: false
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#834d29\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]"); // prev: "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-3\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"version\":\"1.0\"}]"
pref("media.block-autoplay-until-in-foreground", true); // prev: false
pref("media.cache_readahead_limit", 60); // prev: 999999
pref("media.cache_resume_threshold", 30); // prev: 999999
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"); // prev: "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"
pref("media.dormant-on-pause-timeout-ms", 5000); // prev: -1
pref("media.getusermedia.agc", 3); // prev: 1
pref("media.getusermedia.browser.enabled", false); // prev: true
pref("media.gmp.decoder.aac", 0); // prev: 2
pref("media.gmp.decoder.h264", 0); // prev: 2
pref("media.navigator.audio.full_duplex", true); // prev: false
pref("media.peerconnection.ice.tcp", true); // prev: false
pref("media.seekToNextFrame.enabled", true); // prev: false
pref("media.suspend-bkgnd-video.enabled", true); // prev: false
pref("media.webvtt.regions.enabled", true); // prev: false
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"
pref("media.wmf.vp9.enabled", true); // prev: false
pref("mousewheel.with_alt.action", 2); // prev: 1
pref("mousewheel.with_shift.action", 4); // prev: 2
pref("network.http.spdy.timeout", 170); // prev: 180
pref("network.IDN.restriction_profile", "high"); // prev: "moderate"
pref("network.jar.block-remote-files", true); // prev: false
pref("places.frecency.permRedirectVisitBonus", 50); // prev: 0
pref("places.frecency.tempRedirectVisitBonus", 40); // prev: 0
pref("plugin.state.flash", 1); // prev: 2
pref("plugins.favorfallback.mode", "follow-ctp"); // prev: "never"
pref("plugins.favorfallback.rules", "nosrc,video"); // prev: ""
pref("print.use_simplify_page", true); // prev: false
pref("privacy.popups.disable_from_plugins", 3); // prev: 2
pref("privacy.trackingprotection.ui.enabled", true); // prev: false
pref("security.sandbox.content.level", 5); // prev: 1
pref("security.tls.enable_0rtt_data", true); // prev: false
pref("security.tls.version.max", 4); // prev: 3
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*|moz-extension:.*)$"); // prev: "^(about:.*|chrome://weave/.*|wyciwyg:.*|file:.*|blob:.*)$"
pref("svg.transform-box.enabled", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,except-flashinfobar-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"
pref("urlclassifier.downloadAllowTable", "goog-downloadwhite-proto"); // prev: "goog-downloadwhite-digest256"
pref("urlclassifier.downloadBlockTable", "goog-badbinurl-proto"); // prev: "goog-badbinurl-shavar"
pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,test-harmful-simple,test-malware-simple,test-unwanted-simple"); // prev: "goog-malware-shavar,goog-unwanted-shavar,test-malware-simple,test-unwanted-simple"
pref("urlclassifier.phishTable", "goog-phish-proto,test-phish-simple"); // prev: "goog-phish-shavar,test-phish-simple"
pref("webchannel.allowObject.urlWhitelist", "https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"); // prev: "https://accounts.firefox.com https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"
pref("webextensions.storage.sync.enabled", true); // prev: false
pref("webgl.enable-debug-renderer-info", true); // prev: false

