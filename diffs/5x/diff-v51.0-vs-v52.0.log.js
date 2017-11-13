/******************************************************************************************
 * diffs between FF prefs v51.0 and v52.0
 *
 * prefs: 2833
 *        2717 matching prefs
 *         116 diffs ( 55 new, 38 gone, 23 different )
 ******************************************************************************************/
// new in v52.0:
pref("app.update.timerFirstInterval", 30000);
pref("browser.migrate.chrome.history.limit", 0);
pref("browser.migrate.chrome.history.maxAgeInDays", 0);
pref("browser.tabs.crashReporting.requestEmail", false);
pref("browser.tabs.delayHidingAudioPlayingIconMS", 3000);
pref("devtools.debugger.client-source-maps-enabled", true);
pref("devtools.layoutview.enabled", false);
pref("devtools.webconsole.filter.debug", true);
pref("devtools.webconsole.filter.net", false);
pref("devtools.webconsole.ui.filterbar", false);
pref("dom.audiochannel.audioCompeting.allAgents", false);
pref("dom.forms.datetime.timepicker", false);
pref("dom.gamepad.extensions.enabled", false);
pref("dom.idle_period.throttled_length", 10000);
pref("dom.manifest.onappinstalled", false);
pref("dom.requestIdleCallback.enabled", false);
pref("dom.select_events.textcontrols.enabled", false);
pref("dom.w3c_pointer_events.implicit_capture", false);
pref("dom.webnotifications.requireinteraction.count", 3);
pref("dom.webnotifications.requireinteraction.enabled", false);
pref("gfx.canvas.skiagl.dynamic-cache", true);
pref("identity.fxaccounts.contextParam", "fx_desktop_v3");
pref("idle_queue.long_period", 50);
pref("idle_queue.min_period", 3);
pref("layers.draw-mask-debug", false);
pref("layout.accessiblecaret.hide_carets_for_mouse_input", true);
pref("layout.idle_period.required_quiescent_frames", 2);
pref("layout.idle_period.time_limit", 1);
pref("logging.config.clear_on_startup", true);
pref("media.dormant-on-pause-timeout-ms", -1);
pref("media.navigator.load_adapt.encoder_only", true);
pref("media.peerconnection.dtmf.enabled", true);
pref("media.wmf.vp9.enabled", false);
pref("narrate.filter-voices", true);
pref("network.auth.private-browsing-sso", false);
pref("network.cookie.leave-secure-alone", true);
pref("network.http.max_response_header_size", 393216);
pref("network.http.referer.XOriginTrimmingPolicy", 0);
pref("network.http.spdy.default-hpack-buffer", 65536);
pref("plugins.favorfallback.mode", "never");
pref("plugins.favorfallback.rules", "");
pref("prompts.authentication_dialog_abuse_limit", 3);
pref("security.csp.enableStrictDynamic", true);
pref("security.enterprise_roots.enabled", false);
pref("security.insecure_field_warning.contextual.enabled", true);
pref("security.mixed_content.hsts_priming_cache_timeout", 10080);
pref("security.pki.certificate_transparency.mode", 1);
pref("security.sandbox.windows.log.stackTraceDepth", 0);
pref("services.sync.log.logger.engine.extension-storage", "Debug");
pref("services.sync.validation.interval", 86400);
pref("services.sync.validation.maxRecords", 100);
pref("services.sync.validation.percentageChance", 10);
pref("signon.autofillForms.http", false);
pref("webextensions.storage.sync.enabled", false);
pref("webextensions.storage.sync.serverURL", "https://webextensions.settings.services.mozilla.com/v1");

// removed, renamed or hidden in v52.0:
pref("app.update.cert.requireBuiltIn", false);
pref("bidi.support", 1);
pref("browser.search.redirectWindowsSearch", true);
pref("devtools.command-button-pick.enabled", true);
pref("devtools.debugger.promise", false);
pref("dom.apps.reset-permissions", false);
pref("dom.cellbroadcast.enabled", false);
pref("dom.icc.enabled", false);
pref("dom.image.picture.enabled", true);
pref("dom.image.srcset.enabled", true);
pref("dom.manifest.oninstall", false);
pref("dom.MediaError.message.enabled", false);
pref("dom.mobileconnection.enabled", false);
pref("dom.mozApps.debug", false);
pref("dom.mozApps.maxLocalId", 1000);
pref("dom.mozApps.signed_apps_installable_from", "https://marketplace.firefox.com");
pref("dom.sms.defaultServiceId", 0);
pref("dom.sms.enabled", false);
pref("dom.sms.maxReadAheadEntries", 0);
pref("dom.sms.requestStatusReport", true);
pref("dom.sms.strict7BitEncoding", false);
pref("dom.telephony.defaultServiceId", 0);
pref("dom.telephony.enabled", false);
pref("dom.undo_manager.enabled", false);
pref("dom.voicemail.defaultServiceId", 0);
pref("dom.voicemail.enabled", false);
pref("layout.css.masking.enabled", true);
pref("media.decoder.heuristic.dormant.enabled", true);
pref("media.decoder.heuristic.dormant.timeout", 10000);
pref("media.format-reader.ogg", true);
pref("media.gmp-eme-adobe.enabled", true);
pref("media.gmp-eme-adobe.visible", true);
pref("media.wave.decoder.enabled", true);
pref("media.webm.intel_decoder.enabled", false);
pref("network.http.enable-packaged-apps", false);
pref("network.http.sendSecureXSiteReferrer", true);
pref("network.http.signed-packages.enabled", false);
pref("security.apps.privileged.CSP.default", "default-src * data: blob:; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'");

// changed in v52.0:
pref("browser.search.geoip.timeout", 3000); // prev: 2000
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", false); // prev: true
pref("devtools.apps.forbidden-permissions", "embed-apps"); // prev: "embed-apps,embed-widgets"
pref("devtools.responsive.html.enabled", true); // prev: false
pref("dom.select_events.enabled", true); // prev: false
pref("dom.w3c_touch_events.enabled", 2); // prev: 0
pref("gfx.content.azure.backends", "direct2d1.1,skia,cairo"); // prev: "direct2d1.1,cairo"
pref("javascript.options.wasm", true); // prev: false
pref("layout.accessiblecaret.enabled_on_touch", true); // prev: false
pref("layout.accessiblecaret.use_long_tap_injector", false); // prev: true
pref("layout.css.grid.enabled", true); // prev: false
pref("layout.css.touch_action.enabled", true); // prev: false
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"); // prev: "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight,MediaUnsupportedLibavcodec"
pref("media.ondevicechange.enabled", true); // prev: false
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"
pref("memory.low_commit_space_threshold_mb", 128); // prev: 256
pref("memory.low_virtual_memory_threshold_mb", 128); // prev: 256
pref("narrate.voice", " { \"default\": \"automatic\" }"); // prev: "automatic"
pref("network.captive-portal-service.enabled", true); // prev: false
pref("network.predictor.enable-prefetch", true); // prev: false
pref("security.pki.sha1_enforcement_level", 3); // prev: 4
pref("services.sync.registerEngines", "Bookmarks,Form,History,Password,Prefs,Tab,Addons,ExtensionStorage"); // prev: "Bookmarks,Form,History,Password,Prefs,Tab,Addons"
pref("services.sync.sendTabToDevice.enabled", true); // prev: false

