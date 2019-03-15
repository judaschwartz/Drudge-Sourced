chrome.storage.sync.get({
    site_name : true,
    site_icon : true,
    new_tab : false,
    site_refresh : false
}, function(items) {
    site_name = items.site_name;
    site_icon = items.site_icon;
    $('[id$="wrap"]').css('height','initial');
    var ad_hide = setInterval(function (){$('[id^="div_utif"]').hide();},500);
    if (items.site_refresh) {
        for (var i=1;i<ad_hide; i++){clearInterval(i);}
    }
    if (items.new_tab) {
        $("a[href^='http']").attr('target','blank');
    }
    var skip = ['FRONT PAGES UK','THE PAPERS','WORLD HEADLINES','BOXOFFICE','TV RATINGS','ARCHIVES ','RECENT HEADLINES...','WEATHER ACTION','QUAKE SHEET','DRUDGE REFERENCE DESK','EMAIL: DRUDGE@DRUDGEREPORT.COM','BE SEEN! RUN ADS ON DRUDGE REPORT...','PRIVACY POLICY...'];
    $("a[href^='http']").each(function () {
        var link = $(this).text();
        if (site_name && site_icon) {
            if (!link.length || skip.includes(link)) {
            } else if (link.length < 18) {
                $(this).css({
                    background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
                    position: "relative",
                    padding: "0 0 0 20px"
                }).append('<span style="position: absolute;bottom: 0;left: 150px;background: #00646433;opacity: 0.8;padding: 0 5px;white-space: nowrap;font-size: 11px;font-weight: 100;">' + this.hostname.replace("www.", "") + "</span>");
            } else {
                $(this).css({
                    display: "block",
                    background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
                    position: "relative",
                    padding: "0 0 5px 20px"
                }).append('<span style="position: absolute;bottom: -5px;left: 20px;color: red;background: #00646433;opacity: 0.8;padding: 0 5px;white-space: nowrap;font-size: 11px;font-weight: 100;">' + this.hostname.replace("www.", "") + "</span>");
            }
        } else if (site_name) {
            if (!link.length || skip.includes(link)) {
            } else if (link.length < 18) {
                $(this).css({
                    position: "relative",
                    padding: "0"
                }).append('<span style="position: absolute;bottom: 0;left: 150px;background: #00646433;opacity: 0.8;padding: 0 5px;white-space: nowrap;font-size: 11px;font-weight: 100;">' + this.hostname.replace("www.", "") + "</span>");
            } else {
                $(this).css({
                    display: "block",
                    position: "relative",
                    padding: "0 0 5px 0"
                }).append('<span style="position: absolute;bottom: -5px;left: 0;color: red;background: #00646433;opacity: 0.8;padding: 0 5px;white-space: nowrap;font-size: 11px;font-weight: 100;">' + this.hostname.replace("www.", "") + "</span>");
            }
        } else if (site_icon) {
            if (!link.length || skip.includes(link)) {
            } else {
                $(this).css({
                    background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
                    padding: "0 0 0 20px"
                });
            }
        }
    });

    function imageExists(el, url, callback) {
        var img = new Image();
        img.onload = function() {callback(img.width+1);};
        img.onerror = function() {callback(false);};
        img.src = url;
    }
    $("a[href^='http']").each(function () {
        var link = $(this).text();
        if (link.length && !skip.includes(link)) {
            var el =this;
            var imageUrl = "https://"+ this.hostname + "/favicon.ico";
            imageExists(el, imageUrl, function(exists) {
                if (exists>16) {
                    $(el).css({"background-image": 'url("'+imageUrl+'")','background-size':'16px'});
                }
            });
        }
    });
    jQuery('body > tt > b> tt > b > a span').css({'text-align': 'right',left: '0',top: '2px',bottom: 'unset',width:'90px',overflow:'hidden'}).parent().css({display: 'inline', 'padding': '1px 0 0 125px', 'background-position-x': '105px'});
    jQuery('center font[size="+7"] a span').css('position','static');
});
