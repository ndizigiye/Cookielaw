function cookieControl(a) {
    if (typeof (a) == "undefined") {
        a = {
            pollPeriod: 25,
            pollIncrement: 1.25
        }
    }
    a.pollPeriod = a.pollPeriod || 25;
    a.pollIncrement = a.pollIncrement || 1.25;
    a.jQueryUrl = a.jQueryUrl || "http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js";
    if (typeof (jQuery) == "undefined" || parseInt(jQuery.fn.jquery.replace(/\./g, "")) < 144) {
        document.write('<script type="text/javascript" src="' + a.jQueryUrl + '"><\/script>')
    }
    _cookieControlPoll(a)
}
function _cookieControlPoll(a) {
    if (typeof (jQuery) == "undefined") {
        setTimeout(function () {
            _cookieControlPoll(a)
        }, a.pollPeriod);
        a.pollPeriod *= a.pollIncrement
    } else {
        jQuery(function () {
            CookieControl.init(a)
        })
    }
}
var CookieControl = {
    options: {
        countries: "United Kingdom",
        shape: "triangle",
        position: "left",
        text: "Boilerplate text goes here.",
        cookieName: "civicAllowCookies",
        iconStatusCookieName: "civicShowCookieIcon",
        cookiePath: "/",
        clickFadeSpeed: 200,
        acceptDelay: 400,
        startOpen: false,
        autoHide: 60000,
        css: "div#cccwr{z-index:9999;bottom:0;left:0;position:fixed}div#cccwr div{font:12px/16px sans-serif;margin:0;border:0;text-align:left}div#cccwr #ccc-icon{cursor:pointer;display:none}div#ccc-icon button{background:transparent url(data:image/png;base64,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) no-repeat 0 0;*background-image:url(http://www.civicuk.com/cookie-law/images/ccc-icons.gif);border:0;height:62px;width:62px}.ccc-left #ccc-icon.ccc-triangle button{background-position:-62px 0!important}.ccc-left .ccc-go #ccc-icon.ccc-triangle button{background-position:-62px -62px!important}.ccc-right #ccc-icon.ccc-triangle button{background-position:-124px 0!important}.ccc-right .ccc-go #ccc-icon.ccc-triangle button{background-position:-124px -62px!important}div#cccwr #ccc-icon.ccc-diamond button{background-position:10px 0!important}div#cccwr .ccc-go #ccc-icon.ccc-diamond button{background-position:10px -62px!important}div#cccwr.ccc-right{left:auto;right:0}div#cccwr.ccc-right #ccc-icon{left:auto;right:0}div#ccc-widget{display:none;border-radius:5px;bottom:10px;box-shadow:0 0 3px rgba(0,0,0,0.2);font:12px/16px sans-serif;left:70px;position:fixed;width:250px;z-index:5000}div#cccwr.ccc-right #ccc-widget{left:auto;right:70px}div#ccc-widget-body{background:#fff;border:1px solid #ccc;border-radius:0 0 5px 5px;-o-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;-mozilla-border-radius:0 0 5px 5px;border-top:0;color:#888;padding:1em 20px}div#ccc-widget-body ul{padding:0;margin:0}.cccbg{background:transparent url(data:image/png;base64,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) no-repeat 0 0;*background:transparent url(http://www.civicuk.com/cookie-law/images/widget.gif) no-repeat 0 0}div#ccc-widget-head{border:1px solid #d47c18;border-radius:5px 5px 0 0;-o-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;-mozilla-border-radius:5px 5px 0 0;background-color:#f0942b;background-position:right -65px;height:65px}.ccc-go #ccc-widget #ccc-widget-head{background-position:right top;border-color:#5e9912}div#ccc-widget-head h2{text-indent:-999em;margin:0;border:0}div#ccc-widget p{margin:0 0 1em;color:#888}div#ccc-widget a{color:#f0942b}div#ccc-widget ul li{background:#bbb;border:1px solid #999;border-radius:6px;-o-border-radius:6px;-webkit-border-radius:6px;-mozilla-border-radius:6px;color:#fff;font-size:1.2em;font-weight:700;margin-bottom:10px;padding:1px}div#ccc-widget ul li a{background-color:#999;border:1px solid #aaa;border-radius:5px;-o-border-radius:5px;-webkit-border-radius:5px;-mozilla-border-radius:5px;color:#fff;display:block;height:32px;line-height:32px;padding-left:44px;text-decoration:none}div#ccc-widget ul li.go{background-color:#bfe483;border-color:#8fca43}div#ccc-widget ul li.go a{background-color:#8fca43;background-position:left -135px;border-color:#9dd256}div#ccc-widget ul li.go a:hover{background-color:#9dd256}div#ccc-widget ul li.pause{background:#f6b143;border-color:#f0942b}div#ccc-widget ul li.pause a{background-color:#f0942b;background-position:left -175px;border-color:#f29f34}div#ccc-widget ul li.pause a:hover{background-color:#f29f34}div#ccc-widget ul li.stop{background:#e86158;border-color:#db3332}div#ccc-widget ul li.stop a{background-color:#db3332;background-position:left -215px;border-color:#e14742}div#ccc-widget ul li.stop a:hover{background-color:#e14742}div#ccc-widget a#ccc-close{background-color:#fff;background-position:-9px -258px;border:1px solid #ccc;border-radius:25px;-o-border-radius:25px;-webkit-border-radius:25px;-mozilla-border-radius:25px;box-shadow:0 0 3px rgba(0,0,0,0.2);color:#b4b4b4;cursor:pointer;display:block;font-size:30px;height:20px;line-height:24px;position:absolute;right:-10px;text-align:center;top:-10px;width:20px;text-indent:-999em}div#ccc-widget .show-icon{color:#464646;font-weight:700;text-align:center}div#ccc-widget p.about{text-align:right;margin:10px 0 0}div#ccc-widget .show-icon label{margin-right:12px;float:none;padding:0;width:auto}div#ccc-widget input{background:#fff;border:0;clear:none;float:none;height:auto;margin:0;padding:0;width:auto}",
        html: '<div id="cccwr"><div id="ccc-state" class="ccc-pause"><div id="ccc-icon"><button /></div><div id="ccc-widget"><div id="ccc-widget-head" class="cccbg"><h2>Cookie Control</h2></div><div id="ccc-widget-body"><ul><li class="go"><a href="#" id="ccc-go" class="cccbg">I am happy with this</a></li><li class="pause"><a href="http://civicuk.com/cookie-law/browser-settings" target="_blank" id="ccc-pause" class="cccbg">Browser settings </a></li></ul><div class="show-icon">Show the cookie icon?<br /><label><input id="ccc-show-icon" type="radio" checked="checked" name="showicon" value="Y" /> Yes </label><label><input id="ccc-hide-icon" type="radio" name="showicon" value="N" /> No </label></div><p class="about"><a href="http://civicuk.com/cookie-law/index" target="_blank">About this tool</a></p></div><a id="ccc-close" class="cccbg">x</a></div></div></div>',
        onReady: null,
        onCookiesAllowed: null,
        onCookiesNotAllowed: null,
        onAccept: null
    },
    init: function (a) {
        if (typeof String.prototype.trim !== "function") {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, "")
            }
        }
        this._jc = false;
        this.options = jQuery.extend(this.options, a);
        this.initWidget();
        this.readyEvent();
        if (this.maySendCookies()) {
            this.cookiesAllowedEvent()
        } else {
            this.cookiesNotAllowedEvent()
        }
    },
    cookieLawApplies: function () {
        if (this.countryHasCookieLaw()) {
            return true
        }
        return false
    },
    maySendCookies: function () {
        if (!this.cookieLawApplies()) {
            return true
        }
        if (this.consented()) {
            return true
        }
        return false
    },
    consented: function () {
        return this._jc || (this.getCookie(this.options.cookieName) === "yes")
    },
    reset: function () {
        this.delCookie(this.options.cookieName);
        this.delCookie(this.options.iconStatusCookieName)
    },
    initWidget: function () {
        if (!this.cookieLawApplies()) {
            return
        }
        if (this.getCookie(this.options.iconStatusCookieName) === "no") {
            return
        }
        this.initShowCookieWidget()
    },
    initShowCookieWidget: function () {
        var c = this.consented();
        if (jQuery("#ccc-widget").length) {
            return
        }
        jQuery("head").append('<style type="text/css">' + this.options.css + "</style>");
        jQuery("body").prepend(this.options.html);
        var a = jQuery("#ccc-icon");
        var b = jQuery("#ccc-state");
        jQuery("#cccwr").addClass("ccc-" + this.options.position);
        a.addClass("ccc-" + this.options.shape);
        jQuery("#ccc-widget-body").prepend(this.options.text);
        a.show();
        b.addClass(c ? "ccc-go" : "ccc-pause");
        a.click(function (d) {
            d.preventDefault();
            jQuery("#ccc-widget").clearQueue().fadeToggle(CookieControl.options.clickFadeSpeed)
        });
        jQuery("#ccc-close").click(function (d) {
            d.preventDefault();
            jQuery("#ccc-widget").clearQueue().fadeOut(CookieControl.options.clickFadeSpeed)
        });
        jQuery("#ccc-go").click(function () {
            var e = CookieControl;
            b.removeClass("ccc-pause").addClass("ccc-go");
            var d = e.checkShowIconState(a);
            CookieControl._jc = true;
            jQuery("#ccc-widget" + (d ? ",#ccc-icon" : "")).clearQueue().delay(e.options.acceptDelay).fadeOut(e.options.clickFadeSpeed, function () {
                CookieControl.acceptEvent();
                e.setCookie(e.options.cookieName, "yes")
            });
            return false
        });
        jQuery("#ccc-pause").click(function () {
            b.attr("class", "ccc-pause");
            clearTimeout(ccc_t);
            document.cookie = "civicAllowCookies=no;path=/";
            ccc_checkShowIconState(a)
        });
        if (this.options.startOpen && !c) {
            jQuery("#ccc-widget").fadeIn(this.options.clickFadeSpeed).delay(this.options.autoHide).fadeOut(this.options.clickFadeSpeed)
        }
    },
    countryHasCookieLaw: function () {
        if (this.options.countries && typeof (geoplugin_countryName) === "function") {
            var a = geoplugin_countryName().trim();
            if (typeof (this.options.countries) === "string") {
                this.options.countries = this.options.countries.split(/\s*,\s*/)
            }
            return jQuery.inArray(geoplugin_countryName().trim(), this.options.countries) >= 0
        }
        return true
    },
    checkShowIconState: function () {
        var a = CookieControl;
        if (jQuery("#ccc-widget input[name=showicon]:checked").val() === "N") {
            this.setCookie(a.options.iconStatusCookieName, "no");
            return true
        } else {
            this.setCookie(a.options.iconStatusCookieName, "yes");
            return false
        }
    },
    setCookie: function (c, f, b) {
        var e = new Date();
        var d = 1000 * 60 * 60 * 24 * 90;
        var g = new Date(e.getTime() + d);
        var a = g.toGMTString();
        document.cookie = c + "=" + f + ";expires=" + a + ";path=" + this.options.cookiePath
    },
    getCookie: function (a) {
        var b = false;
        jQuery.each(document.cookie.split(";"), function (e, f) {
            var d = f.split("=");
            if (d[0].trim() === a) {
                b = unescape(d[1]);
                return false
            }
        });
        return b
    },
    delCookie: function (a) {
        document.cookie = a + "=;path=" + this.options.cookiePath
    },
    acceptEvent: function (a) {
        if (this.firedAcceptEvent || this.getCookie(this.options.cookieName) === "yes") {
            return
        }
        this.firedAcceptEvent = true;
        if (typeof (this.options.onAccept) == "function") {
            this.options.onAccept(this)
        }
        return a
    },
    readyEvent: function (a) {
        if (typeof (this.options.onReady) == "function") {
            this.options.onReady(this)
        }
        return a
    },
    cookiesNotAllowedEvent: function (a) {
        if (typeof (this.options.onCookiesNotAllowed) == "function") {
            this.options.onCookiesNotAllowed(this)
        }
        return a
    },
    cookiesAllowedEvent: function (a) {
        if (typeof (this.options.onCookiesAllowed) == "function") {
            this.options.onCookiesAllowed(this)
        }
        return a
    }
};