/******************************************************************************************
 * diffs between FF prefs v60.5.0esr and v60.6.0esr
 *
 * prefs: 3150
 *        3142 matching prefs
 *           8 diffs ( 1 new, 0 gone, 7 different )
 ******************************************************************************************/
// new in v60.6.0esr:
pref("javascript.options.unboxed_objects", false);

// removed, renamed or hidden in v60.6.0esr:

// changed in v60.6.0esr:
pref("browser.safebrowsing.downloads.remote.url", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_SAFEBROWSING_API_KEY%"); // prev: "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.google.updateURL", "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_SAFEBROWSING_API_KEY%"); // prev: "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("browser.safebrowsing.provider.google4.gethashURL", "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"); // prev: "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%&$httpMethod=POST"
pref("geo.provider.ms-windows-location", true); // prev: false
pref("geo.wifi.uri", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%"); // prev: "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_API_KEY%"

