// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Responsive Slides plugin Start

/*! http://responsiveslides.com v1.55 by @viljamis */
(function (c, K, C) {
    c.fn.responsiveSlides = function (m) {
        var a = c.extend({
            auto: !0,
            speed: 500,
            timeout: 4E3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: c.noop,
            after: c.noop
        }, m);
        return this.each(function () {
            C++;
            var f = c(this),
                u, t, v, n, q, r, p = 0,
                e = f.children(),
                D = e.length,
                h = parseFloat(a.speed),
                E = parseFloat(a.timeout),
                w = parseFloat(a.maxwidth),
                g = a.namespace,
                d = g + C,
                F = g + "_nav " + d + "_nav",
                x = g + "_here",
                k = d + "_on",
                y = d + "_s",
                l = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
                z = {
                    "float": "left",
                    position: "relative",
                    opacity: 1,
                    zIndex: 2
                },
                A = {
                    "float": "none",
                    position: "absolute",
                    opacity: 0,
                    zIndex: 1
                },
                G = function () {
                    var b = (document.body || document.documentElement).style,
                        a = "transition";
                    if ("string" === typeof b[a]) return !0;
                    u = ["Moz", "Webkit", "Khtml", "O", "ms"];
                    var a = a.charAt(0).toUpperCase() + a.substr(1),
                        c;
                    for (c = 0; c < u.length; c++)
                        if ("string" === typeof b[u[c] + a]) return !0;
                    return !1
                }(),
                B = function (b) {
                    a.before(b);
                    G ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z),
                        p = b, setTimeout(function () {
                            a.after(b)
                        }, h)) : e.stop().fadeOut(h, function () {
                        c(this).removeClass(k).css(A).css("opacity", 1)
                    }).eq(b).fadeIn(h, function () {
                        c(this).addClass(k).css(z);
                        a.after(b);
                        p = b
                    })
                };
            a.random && (e.sort(function () {
                return Math.round(Math.random()) - .5
            }), f.empty().append(e));
            e.each(function (a) {
                this.id = y + a
            });
            f.addClass(g + " " + d);
            m && m.maxwidth && f.css("max-width", w);
            e.hide().css(A).eq(0).addClass(k).css(z).show();
            G && e.show().css({
                "-webkit-transition": "opacity " + h + "ms ease-in-out",
                "-moz-transition": "opacity " +
                    h + "ms ease-in-out",
                "-o-transition": "opacity " + h + "ms ease-in-out",
                transition: "opacity " + h + "ms ease-in-out"
            });
            if (1 < e.length) {
                if (E < h + 100) return;
                if (a.pager && !a.manualControls) {
                    var H = [];
                    e.each(function (a) {
                        a += 1;
                        H += "<li><a href='#' class='" + y + a + "'>" + a + "</a></li>"
                    });
                    l.append(H);
                    m.navContainer ? c(a.navContainer).append(l) : f.after(l)
                }
                a.manualControls && (l = c(a.manualControls), l.addClass(g + "_tabs " + d + "_tabs"));
                (a.pager || a.manualControls) && l.find("li").each(function (a) {
                    c(this).addClass(y + (a + 1))
                });
                if (a.pager || a.manualControls) r =
                    l.find("a"), t = function (a) {
                        r.closest("li").removeClass(x).eq(a).addClass(x)
                    };
                a.auto && (v = function () {
                    q = setInterval(function () {
                        e.stop(!0, !0);
                        var b = p + 1 < D ? p + 1 : 0;
                        (a.pager || a.manualControls) && t(b);
                        B(b)
                    }, E)
                }, v());
                n = function () {
                    a.auto && (clearInterval(q), v())
                };
                a.pause && f.hover(function () {
                    clearInterval(q)
                }, function () {
                    n()
                });
                if (a.pager || a.manualControls) r.bind("click", function (b) {
                        b.preventDefault();
                        a.pauseControls || n();
                        b = r.index(this);
                        p === b || c("." + k).queue("fx").length || (t(b), B(b))
                    }).eq(0).closest("li").addClass(x),
                    a.pauseControls && r.hover(function () {
                        clearInterval(q)
                    }, function () {
                        n()
                    });
                if (a.nav) {
                    g = "<a href='#' class='" + F + " prev'>" + a.prevText + "</a><a href='#' class='" + F + " next'>" + a.nextText + "</a>";
                    m.navContainer ? c(a.navContainer).append(g) : f.after(g);
                    var d = c("." + d + "_nav"),
                        I = d.filter(".prev");
                    d.bind("click", function (b) {
                        b.preventDefault();
                        b = c("." + k);
                        if (!b.queue("fx").length) {
                            var d = e.index(b);
                            b = d - 1;
                            d = d + 1 < D ? p + 1 : 0;
                            B(c(this)[0] === I[0] ? b : d);
                            (a.pager || a.manualControls) && t(c(this)[0] === I[0] ? b : d);
                            a.pauseControls || n()
                        }
                    });
                    a.pauseControls && d.hover(function () {
                        clearInterval(q)
                    }, function () {
                        n()
                    })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && m.maxwidth) {
                var J = function () {
                    f.css("width", "100%");
                    f.width() > w && f.css("width", w)
                };
                J();
                c(K).bind("resize", function () {
                    J()
                })
            }
        })
    }
})(jQuery, this, 0);

// Responsive Slides plugin end

// counter up plugin

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function () {
            var t = e(this),
                r = n,
                i = function () {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);
// counter up plugin end




//============= end =============//