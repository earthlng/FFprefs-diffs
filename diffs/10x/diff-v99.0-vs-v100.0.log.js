/******************************************************************************************
 * diffs between FF prefs v99.0 and v100.0
 *
 * prefs: 4528
 *        4424 matching prefs
 *         104 diffs ( 46 new, 36 gone, 22 different )
 ******************************************************************************************/
// new in v100.0:
pref("browser.history.wireframeAreaThreshold", 50);
pref("browser.promo.focus.disallowed_regions", "cn");
pref("browser.promo.focus.enabled", true);
pref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", true);
pref("dom.origin-trials.enabled", false);
pref("dom.origin-trials.test-key.enabled", false);
pref("editor.initialize_element_before_connect", true);
pref("extensions.formautofill.creditCards.heuristics.confidenceThreshold", "0.5");
pref("extensions.formautofill.creditCards.heuristics.mode", 0);
pref("extensions.InstallTrigger.enabled", true);
pref("extensions.InstallTriggerImpl.enabled", true);
pref("gfx.webgpu.force-enabled", false);
pref("gfx.webrender.dcomp-video-overlay-win-force-enabled", false);
pref("gfx.webrender.dcomp-video-vp-scaling-win", true);
pref("javascript.options.wasm_exceptions", true);
pref("layout.css.container-queries.enabled", false);
pref("layout.css.content-visibility.enabled", false);
pref("layout.css.overflow-moz-hidden-unscrollable.enabled", true);
pref("layout.selectanchor", false);
pref("media.rdd-process.max-crashes", 2);
pref("media.webrtc.platformencoder.sw_mft", false);
pref("media.wmf.av1.enabled", true);
pref("media.wmf.no-copy-nv12-textures", false);
pref("network.cookie.noPersistentStorage", false);
pref("network.dns.port_prefixed_qname_https_rr", false);
pref("network.http.http2.allow-push", true);
pref("network.http.http2.chunk-size", 16000);
pref("network.http.http2.coalesce-hostnames", true);
pref("network.http.http2.default-concurrent", 100);
pref("network.http.http2.default-hpack-buffer", 65536);
pref("network.http.http2.enable-hpack-dump", false);
pref("network.http.http2.enabled", true);
pref("network.http.http2.enabled.deps", true);
pref("network.http.http2.enforce-tls-profile", true);
pref("network.http.http2.persistent-settings", false);
pref("network.http.http2.ping-threshold", 58);
pref("network.http.http2.ping-timeout", 8);
pref("network.http.http2.pull-allowance", 12582912);
pref("network.http.http2.push-allowance", 131072);
pref("network.http.http2.send-buffer-size", 131072);
pref("network.http.http2.timeout", 170);
pref("network.http.http2.websockets", true);
pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true);
pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", false);
pref("widget.windows.hide_cursor_when_typing", false);
pref("widget.windows.overlay-scrollbars.enabled", true);

// removed, renamed or hidden in v100.0:
pref("browser.contentblocking.state-partitioning.mvp.ui.enabled", true);
pref("browser.sessionstore.max_write_failures", 5);
pref("devtools.enabled", true);
pref("devtools.theme.show-auto-theme-info", true);
pref("dom.events.asyncClipboard", true);
pref("dom.IntersectionObserver.enabled", true);
pref("dom.IntersectionObserverExplicitDocumentRoot.enabled", true);
pref("dom.ipc.processCount.webLargeAllocation", 10);
pref("dom.largeAllocation.forceEnable", false);
pref("dom.largeAllocationHeader.enabled", true);
pref("general.useragent.forceVersion100", false);
pref("general.useragent.handledVersionExperimentEnrollment", false);
pref("layout.css.moz-locale-dir.content.enabled", false);
pref("layout.css.moz-lwtheme.content.enabled", false);
pref("mathml.xlink.disabled", true);
pref("network.http.spdy.allow-push", true);
pref("network.http.spdy.chunk-size", 16000);
pref("network.http.spdy.coalesce-hostnames", true);
pref("network.http.spdy.default-concurrent", 100);
pref("network.http.spdy.default-hpack-buffer", 65536);
pref("network.http.spdy.enable-hpack-dump", false);
pref("network.http.spdy.enabled", true);
pref("network.http.spdy.enabled.deps", true);
pref("network.http.spdy.enabled.http2", true);
pref("network.http.spdy.enforce-tls-profile", true);
pref("network.http.spdy.persistent-settings", false);
pref("network.http.spdy.ping-threshold", 58);
pref("network.http.spdy.ping-timeout", 8);
pref("network.http.spdy.pull-allowance", 12582912);
pref("network.http.spdy.push-allowance", 131072);
pref("network.http.spdy.send-buffer-size", 131072);
pref("network.http.spdy.timeout", 170);
pref("network.http.spdy.websockets", true);
pref("security.onecrl.maximum_staleness_in_seconds", 108000);
pref("security.secure_connection_icon_color_gray", true);
pref("widget.windows.overlay_scrollbars.enabled", false);

// changed in v100.0:
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp,rpTop,ocsp"); // prev: "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp,ocsp"
pref("browser.contentblocking.report.vpn_regions", "as,at,be,ca,ch,de,es,fi,fr,gb,gg,ie,im,io,it,je,mp,my,nl,nz,pr,se,sg,uk,um,us,vg,vi"); // prev: "at,be,ca,ch,de,fr,ie,it,my,nl,nz,sg,es,gb,us"
pref("browser.soft_reload.only_force_validate_top_level_document", true); // prev: false
pref("browser.startup.upgradeDialog.enabled", true); // prev: false
pref("dom.streams.pipeTo.enabled", true); // prev: false
pref("dom.streams.readable_stream_default_controller.enabled", true); // prev: false
pref("dom.streams.readable_stream_default_reader.enabled", true); // prev: false
pref("dom.streams.writable_streams.enabled", true); // prev: false
pref("extensions.formautofill.creditCards.supportedCountries", "US,CA,GB,FR,DE"); // prev: "US,CA,UK,FR,DE"
pref("gfx.offscreencanvas.domain-allowlist", "*.zoom.us,zoom.us"); // prev: "*.zoom.us"
pref("gfx.webrender.dcomp-video-overlay-win", true); // prev: false
pref("gfx.webrender.dcomp-video-yuv-overlay-win", true); // prev: false
pref("intl.multilingual.aboutWelcome.languageMismatchEnabled", true); // prev: false
pref("intl.multilingual.liveReload", true); // prev: false
pref("javascript.options.wasm_caching", false); // prev: true
pref("layout.css.grid-item-baxis-measurement.enabled", true); // prev: false
pref("media.ffmpeg.customized-buffer-allocation", true); // prev: false
pref("media.peerconnection.mtransport_process", true); // prev: false
pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); // prev: false
pref("network.process.enabled", true); // prev: false
pref("security.pki.crlite_mode", 3); // prev: 1
pref("widget.gtk.overlay-scrollbars.enabled", true); // prev: false
