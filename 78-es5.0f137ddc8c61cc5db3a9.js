function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{cgg9:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return h}));var a=n("ofXK"),c=n("Nrjh"),i=n("/om3"),o=n("tyNb"),r=n("dBcC"),s=n("WIjQ"),l=n("G6Tw"),f=n("G6HM"),u=n("fXoL"),d=n("kx+m"),v=function(){function e(){_classCallCheck(this,e),this.viewDate=new Date,this.events=[{start:new Date,title:"An event",color:f.a.red}]}return _createClass(e,[{key:"dayClicked",value:function(e){var t=e.date,n=e.events;Object(s.a)(t,this.viewDate)&&(Object(l.a)(this.viewDate,t)&&!0===this.activeDayIsOpen||0===n.length?this.activeDayIsOpen=!1:(this.activeDayIsOpen=!0,this.viewDate=t))}}]),e}();v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=u.bc({type:v,selectors:[["mwl-demo-component"]],decls:3,vars:4,consts:[[3,"viewDate","events","activeDayIsOpen","dayClicked"]],template:function(e,t){1&e&&(u.mc(0,"mwl-calendar-month-view",0),u.yc("dayClicked",(function(e){return t.dayClicked(e.day)})),u.id(1,"\n"),u.lc(),u.id(2,"\n")),2&e&&u.Jc("@.disabled",!0)("viewDate",t.viewDate)("events",t.events)("activeDayIsOpen",t.activeDayIsOpen)},directives:[d.a],encapsulation:2,changeDetection:0});var p=n("j1vE"),h=function e(){_classCallCheck(this,e)};h.\u0275mod=u.fc({type:h}),h.\u0275inj=u.ec({factory:function(e){return new(e||h)},imports:[[a.c,c.a.forRoot({provide:i.a,useFactory:p.a}),r.a,o.e.forChild([{path:"",component:v}])]]})},dBcC:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("ofXK"),c=n("3Pt+"),i=n("Nrjh"),o=n("fXoL"),r=function e(){_classCallCheck(this,e)};r.\u0275mod=o.fc({type:r}),r.\u0275inj=o.ec({factory:function(e){return new(e||r)},imports:[[a.c,c.c,i.a]]})}}]);