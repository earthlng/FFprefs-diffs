/******************************************************************************************
 * diffs between FF prefs v93.0 and v94.0
 *
 * prefs: 4402
 *        4280 matching prefs
 *         122 diffs ( 45 new, 65 gone, 12 different )
 ******************************************************************************************/
// new in v94.0:
pref("browser.download.enable_spam_prevention", false);
pref("browser.newtabpage.activity-stream.discoverystream.compactLayout.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.lastCardMessage.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.loadMore.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.newFooterSection.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
pref("browser.sessionstore.dom_form_limit", 2097152);
pref("browser.sessionstore.dom_form_max_limit", 52428800);
pref("browser.startup.couldRestoreSession.count", 0);
pref("browser.tabs.remote.testOnly.failPBrowserCreation.enabled", false);
pref("browser.warnOnQuitShortcut", false);
pref("clipboard.copyPrivateDataToClipboardCloudOrHistory", false);
pref("devtools.every-frame-target.enabled", false);
pref("dom.shadowdom.delegatesFocus.enabled", true);
pref("fission.highValue.coop.expiration", 2592000);
pref("fission.webContentIsolationStrategy", 1);
pref("gfx.webrender.batched-texture-uploads", true);
pref("gfx.webrender.blob-tile-size", 256);
pref("gfx.webrender.draw-calls-for-texture-copy", true);
pref("gfx.webrender.multithreading", true);
pref("gfx.webrender.pbo-uploads", false);
pref("layout.css.autofill.background", true);
pref("layout.css.font-visibility.private", 3);
pref("layout.css.font-visibility.resistFingerprinting", 1);
pref("layout.css.font-visibility.standard", 3);
pref("layout.css.font-visibility.trackingprotection", 3);
pref("layout.css.grid-item-baxis-measurement.enabled", false);
pref("layout.css.scroll-linked-animations.enabled", false);
pref("layout.css.trig.enabled", false);
pref("media.decoder.skip_when_video_too_slow_ms", 2500);
pref("network.cache.bug1708673", false);
pref("network.disable-localhost-when-offline", false);
pref("network.dns.http3_echconfig.enabled", false);
pref("network.http.clear_bogus_content_encoding", false);
pref("network.http.early_data_disable_on_error", true);
pref("network.http.early_data_max_error", 5);
pref("network.proxy.testing_localhost_is_secure_when_hijacked", false);
pref("network.trr.strict_native_fallback", false);
pref("privacy.clearsitedata.cache.enabled", false);
pref("privacy.partition.network_state.ocsp_cache", false);
pref("privacy.partition.network_state.ocsp_cache.pbmode", true);
pref("toolkit.aboutProcesses.profileDuration", 5);
pref("toolkit.aboutProcesses.showProfilerIcons", false);
pref("toolkit.sqlitejsm.loglevel", "Error");
pref("widget.non-native-theme.always-high-contrast", false);

// removed, renamed or hidden in v94.0:
pref("apz.nonwr.activate_all_scroll_frames", false);
pref("apz.nonwr.activate_all_scroll_frames_when_fission", false);
pref("browser.newtabpage.activity-stream.customizationMenu.enabled", false);
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", true);
pref("browser.privatebrowsing.infoBody", "");
pref("browser.privatebrowsing.infoEnabled", true);
pref("browser.privatebrowsing.infoIcon", "");
pref("browser.privatebrowsing.infoLinkText", "");
pref("browser.privatebrowsing.infoLinkUrl", "");
pref("browser.privatebrowsing.infoTitle", "");
pref("browser.privatebrowsing.infoTitleEnabled", true);
pref("browser.privatebrowsing.promoEnabled", true);
pref("browser.privatebrowsing.promoLinkText", "");
pref("browser.privatebrowsing.promoLinkUrl", "");
pref("browser.privatebrowsing.promoTitle", "");
pref("browser.privatebrowsing.promoTitleEnabled", true);
pref("browser.sessionstore.warnOnQuit", false);
pref("gfx.layerscope.enabled", false);
pref("gfx.layerscope.port", 23456);
pref("gfx.logging.painted-pixel-count.enabled", false);
pref("gfx.webrender.debug.batched-texture-uploads", true);
pref("gfx.webrender.debug.draw-calls-for-texture-copy", true);
pref("gfx.webrender.enable-multithreading", true);
pref("layers.acceleration.draw-fps.print-histogram", false);
pref("layers.acceleration.draw-fps.write-to-file", false);
pref("layers.bench.enabled", false);
pref("layers.bufferrotation.enabled", true);
pref("layers.componentalpha.enabled", true);
pref("layers.compositing-tiles.height", 1024);
pref("layers.compositing-tiles.width", 1024);
pref("layers.draw-bigimage-borders", false);
pref("layers.draw-borders", false);
pref("layers.draw-layer-info", false);
pref("layers.draw-tile-borders", false);
pref("layers.dump", false);
pref("layers.dump-client-layers", false);
pref("layers.dump-host-layers", false);
pref("layers.dump-texture", false);
pref("layers.effect.contrast", "0.0");
pref("layers.effect.grayscale", false);
pref("layers.effect.invert", false);
pref("layers.flash-borders", false);
pref("layers.geometry.basic.enabled", true);
pref("layers.geometry.d3d11.enabled", true);
pref("layers.geometry.opengl.enabled", true);
pref("layers.low-precision-opacity", "1.0");
pref("layers.max-active", -1);
pref("layers.orientation.sync.timeout", 0);
pref("layers.single-tile.enabled", true);
pref("layers.tile-initial-pool-size", 50);
pref("layers.tile-pool-clear-timeout", 5000);
pref("layers.tile-pool-shrink-timeout", 50);
pref("layers.tile-pool-unused-size", 10);
pref("layers.tiles.edge-padding", false);
pref("layers.tiles.fade-in.duration-ms", 250);
pref("layers.tiles.fade-in.enabled", false);
pref("layers.tiles.retain-back-buffer", true);
pref("layers.transaction.warning-ms", 200);
pref("layers.uniformity-info", false);
pref("layers.use-image-offscreen-surfaces", true);
pref("layout.animated-image-layers.enabled", false);
pref("layout.css.font-visibility.level", 3);
pref("layout.paint_rects_separately", true);
pref("layout.smaller-painted-layers", false);
pref("services.sync.prefs.sync.browser.sessionstore.warnOnQuit", true);

// changed in v94.0:
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp,ocsp"); // prev: "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp"
pref("browser.display.use_system_colors", true); // prev: false
pref("browser.tabs.warnOnClose", false); // prev: true
pref("content.sink.pending_event_mode", 1); // prev: 0
pref("dom.forms.enterkeyhint", true); // prev: false
pref("dom.ipc.processCount.webIsolated", 4); // prev: 1
pref("network.http.altsvc.oe", false); // prev: true
pref("network.notify.IPv6", false); // prev: true
pref("network.send_ODA_to_content_directly", true); // prev: false
pref("network.ssl_tokens_cache_enabled", true); // prev: false
pref("security.disallow_privileged_data_subdocuments_loads", true); // prev: false
pref("signon.usernameOnlyForm.enabled", true); // prev: false
