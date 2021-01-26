/******************************************************************************************
 * diffs between FF prefs v84.0 and v85.0
 *
 * prefs: 4216
 *        4158 matching prefs
 *          58 diffs ( 33 new, 8 gone, 17 different )
 ******************************************************************************************/
// new in v85.0:
pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
pref("browser.display.always_show_rings_after_key_focus", false);
pref("browser.download.sanitize_non_media_extensions", true);
pref("browser.enableAboutThirdParty", false);
pref("browser.engagement.downloads-button.has-used", false);
pref("browser.engagement.fxa-toolbar-menu-button.has-used", false);
pref("browser.engagement.home-button.has-used", false);
pref("browser.engagement.sidebar-button.has-used", false);
pref("browser.fixup.alternate.protocol", "https");
pref("browser.history.maxUrlLength", 2000);
pref("browser.newtabpage.activity-stream.customizationMenu.enabled", false);
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", false);
pref("browser.proton.enabled", false);
pref("browser.tabs.tooltipsShowPid", false);
pref("browser.toolbars.bookmarks.showOtherBookmarks", true);
pref("browser.urlbar.extension.timeout", 400);
pref("browser.urlbar.imeCompositionClosesPanel", true);
pref("browser.urlbar.shortcuts.bookmarks", true);
pref("browser.urlbar.shortcuts.history", true);
pref("browser.urlbar.shortcuts.tabs", true);
pref("browser.urlbar.suggest.engines", true);
pref("devtools.storage.test.forceLegacyActors", false);
pref("dom.delay.block_external_protocol_in_iframes.enabled", true);
pref("dom.menuitem.enabled", false);
pref("dom.storage.default_site_quota", 25600);
pref("gfx.webrender.allow-partial-present-buffer-age", true);
pref("intl.tsf.hack.extend_setting_selection_range_to_cluster_boundaries", true);
pref("media.rdd-retryonfailure.enabled", true);
pref("messaging-system.rsexperimentloader.collection_id", "nimbus-desktop-experiments");
pref("network.http.accept", "");
pref("network.http.http3.backup_timer_delay", 100);
pref("print.pages_per_sheet.enabled", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.engines", true);

// removed, renamed or hidden in v85.0:
pref("apz.relative-update.enabled", true);
pref("browser.urlbar.update2.localOneOffs", true);
pref("browser.urlbar.update2.tabToComplete", true);
pref("devtools.debugger.features.watchpoints", true);
pref("javascript.options.warp", true);
pref("layout.css.conic-gradient.enabled", true);
pref("network.security.esni.enabled", false);
pref("security.pki.distrust_ca_policy", 2);

// changed in v85.0:
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp,stp,lvl2"); // prev: "tp,tpPrivate,cookieBehavior4,cm,fp,stp"
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 2); // prev: 1
pref("browser.toolbars.bookmarks.2h2020", true); // prev: false
pref("gfx.canvas.remote", false); // prev: true
pref("gfx.webrender.enabled-no-gpu-process-with-angle-win", true); // prev: false
pref("layers.mlgpu.enabled", false); // prev: true
pref("layout.css.focus-visible.enabled", true); // prev: false
pref("layout.display-list.improve-fragmentation", true); // prev: false
pref("media.rdd-ffvpx.enabled", true); // prev: false
pref("media.rdd-theora.enabled", true); // prev: false
pref("media.rdd-vpx.enabled", true); // prev: false
pref("media.rdd-wmf.enabled", true); // prev: false
pref("network.preload", true); // prev: false
pref("privacy.partition.network_state", true); // prev: false
pref("privacy.restrict3rdpartystorage.partitionedHosts", "accounts.google.com/o/oauth2/,d35nw2lg0ahg0v.cloudfront.net/,datastudio.google.com/embed/reporting/,d3qlaywcwingl6.cloudfront.net/"); // prev: "accounts.google.com/o/oauth2/"
pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3,4,5"); // prev: ".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3"
pref("zoom.maxPercent", 500); // prev: 300

