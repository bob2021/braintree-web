!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(e.braintree||(e.braintree={})).hostedFields=t()}}(function(){var t;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";function r(){this._teardownRegistry=[]}var i=t("batch-execute-functions"),o=t("braintree-utilities/lib/fn");r.prototype.registerFunctionForTeardown=function(t){o.isFunction(t)&&this._teardownRegistry.push(t)},r.prototype.teardown=function(t){i(this._teardownRegistry,o.bind(function(e){this._teardownRegistry=[],o.isFunction(t)&&t(e)},this))},e.exports=r},{"batch-execute-functions":2,"braintree-utilities/lib/fn":3}],2:[function(t,e,n){"use strict";function r(t,e){var n,r=0===t.length;r?(t(),e(null)):(n=i(e),t(n))}function i(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}e.exports=function(t,e){var n=t.length,i=n;if(0===n)return void e(null);for(var o=0;n>o;o++)r(t[o],function(t){return t?void e(t):(i-=1,void(0===i&&e(null)))})}},{}],3:[function(t,e,n){"use strict";function r(t){return"[object Function]"===o.call(t)}function i(t,e){return function(){return t.apply(e,arguments)}}var o=Object.prototype.toString;e.exports={bind:i,isFunction:r}},{}],4:[function(e,n,r){"use strict";!function(e,i){"object"==typeof r&&"undefined"!=typeof n?n.exports=i():"function"==typeof t&&t.amd?t([],i):e.framebus=i()}(this,function(){function t(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(x.push(t),!0)}function e(t){var e,n={};for(e in v)v.hasOwnProperty(e)&&(n[e]=v[e]);return n._origin=t||"*",n}function n(t){var e,n,r=o(this);return s(t)?!1:s(r)?!1:(n=Array.prototype.slice.call(arguments,1),e=a(t,n,r),e===!1?!1:(h(b.top,e,r),!0))}function r(t,e){var n=o(this);return m(t,e,n)?!1:(_[n]=_[n]||{},_[n][t]=_[n][t]||[],_[n][t].push(e),!0)}function i(t,e){var n,r,i=o(this);if(m(t,e,i))return!1;if(r=_[i]&&_[i][t],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===e)return r.splice(n,1),!0;return!1}function o(t){return t&&t._origin||"*"}function s(t){return"string"!=typeof t}function a(t,e,n){var r=!1,i={event:t,origin:n},o=e[e.length-1];"function"==typeof o&&(i.reply=g(o,n),e=e.slice(0,-1)),i.args=e;try{r=E+JSON.stringify(i)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function c(t){var e,n,r,i;if(t.data.slice(0,E.length)!==E)return!1;try{e=JSON.parse(t.data.slice(E.length))}catch(o){return!1}return null!=e.reply&&(n=t.origin,r=t.source,i=e.reply,e.reply=function(t){var e=a(i,[t],n);return e===!1?!1:void r.postMessage(e,n)},e.args.push(e.reply)),e}function u(t){b||(b=t||window,b.addEventListener?b.addEventListener("message",f,!1):b.attachEvent?b.attachEvent("onmessage",f):null===b.onmessage?b.onmessage=f:b=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function f(t){var e;s(t.data)||(e=c(t),e&&(p("*",e.event,e.args,t),p(t.origin,e.event,e.args,t),y(t.data,e.origin,t.source)))}function p(t,e,n,r){var i;if(_[t]&&_[t][e])for(i=0;i<_[t][e].length;i++)_[t][e][i].apply(r,n)}function d(t){return t.top!==t?!1:null==t.opener?!1:t.opener===t?!1:t.opener.closed===!0?!1:!0}function h(t,e,n){var r;try{for(t.postMessage(e,n),d(t)&&h(t.opener.top,e,n),r=0;r<t.frames.length;r++)h(t.frames[r],e,n)}catch(i){}}function y(t,e,n){var r,i;for(r=x.length-1;r>=0;r--)i=x[r],i.closed===!0?x=x.slice(r,1):n!==i&&h(i.top,t,e)}function g(t,e){function n(i,o){t(i,o),v.target(e).unsubscribe(r,n)}var r=l();return v.target(e).subscribe(r,n),r}function m(t,e,n){return s(t)?!0:"function"!=typeof e?!0:s(n)?!0:!1}var b,v,x=[],_={},E="/*framebus*/";return u(),v={target:e,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:r,sub:r,on:r,unsubscribe:i,unsub:i,off:i}})},{}],5:[function(t,e,n){"use strict";var r=t("lodash/object/assign"),i=t("lodash/lang/isString"),o=t("setattributes"),s=t("./lib/default-attributes");e.exports=function(t){var e=document.createElement("iframe"),n=r({},s,t);return n.style&&!i(n.style)&&(r(e.style,n.style),delete n.style),o(e,n),e.getAttribute("id")||(e.id=e.name),e}},{"./lib/default-attributes":6,"lodash/lang/isString":27,"lodash/object/assign":28,setattributes:32}],6:[function(t,e,n){e.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],7:[function(t,e,n){function r(t,e){if("function"!=typeof t)throw new TypeError(i);return e=o(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,r=-1,i=o(n.length-e,0),s=Array(i);++r<i;)s[r]=n[e+r];switch(e){case 0:return t.call(this,s);case 1:return t.call(this,n[0],s);case 2:return t.call(this,n[0],n[1],s)}var a=Array(e+1);for(r=-1;++r<e;)a[r]=n[r];return a[e]=s,t.apply(this,a)}}var i="Expected a function",o=Math.max;e.exports=r},{}],8:[function(t,e,n){function r(t,e,n){for(var r=-1,o=i(e),s=o.length;++r<s;){var a=o[r],c=t[a],u=n(c,e[a],a,t,e);(u===u?u===c:c!==c)&&(void 0!==c||a in t)||(t[a]=u)}return t}var i=t("../object/keys");e.exports=r},{"../object/keys":29}],9:[function(t,e,n){function r(t,e){return null==e?t:i(e,o(e),t)}var i=t("./baseCopy"),o=t("../object/keys");e.exports=r},{"../object/keys":29,"./baseCopy":10}],10:[function(t,e,n){function r(t,e,n){n||(n={});for(var r=-1,i=e.length;++r<i;){var o=e[r];n[o]=t[o]}return n}e.exports=r},{}],11:[function(t,e,n){function r(t){return function(e){return null==e?void 0:e[t]}}e.exports=r},{}],12:[function(t,e,n){function r(t,e,n){if("function"!=typeof t)return i;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)};case 5:return function(n,r,i,o,s){return t.call(e,n,r,i,o,s)}}return function(){return t.apply(e,arguments)}}var i=t("../utility/identity");e.exports=r},{"../utility/identity":31}],13:[function(t,e,n){function r(t){return s(function(e,n){var r=-1,s=null==e?0:n.length,a=s>2?n[s-2]:void 0,c=s>2?n[2]:void 0,u=s>1?n[s-1]:void 0;for("function"==typeof a?(a=i(a,u,5),s-=2):(a="function"==typeof u?u:void 0,s-=a?1:0),c&&o(n[0],n[1],c)&&(a=3>s?void 0:a,s=1);++r<s;){var l=n[r];l&&t(e,l,a)}return e})}var i=t("./bindCallback"),o=t("./isIterateeCall"),s=t("../function/restParam");e.exports=r},{"../function/restParam":7,"./bindCallback":12,"./isIterateeCall":18}],14:[function(t,e,n){var r=t("./baseProperty"),i=r("length");e.exports=i},{"./baseProperty":11}],15:[function(t,e,n){function r(t,e){var n=null==t?void 0:t[e];return i(n)?n:void 0}var i=t("../lang/isNative");e.exports=r},{"../lang/isNative":25}],16:[function(t,e,n){function r(t){return null!=t&&o(i(t))}var i=t("./getLength"),o=t("./isLength");e.exports=r},{"./getLength":14,"./isLength":19}],17:[function(t,e,n){function r(t,e){return t="number"==typeof t||i.test(t)?+t:-1,e=null==e?o:e,t>-1&&t%1==0&&e>t}var i=/^\d+$/,o=9007199254740991;e.exports=r},{}],18:[function(t,e,n){function r(t,e,n){if(!s(n))return!1;var r=typeof e;if("number"==r?i(n)&&o(e,n.length):"string"==r&&e in n){var a=n[e];return t===t?t===a:a!==a}return!1}var i=t("./isArrayLike"),o=t("./isIndex"),s=t("../lang/isObject");e.exports=r},{"../lang/isObject":26,"./isArrayLike":16,"./isIndex":17}],19:[function(t,e,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&i>=t}var i=9007199254740991;e.exports=r},{}],20:[function(t,e,n){function r(t){return!!t&&"object"==typeof t}e.exports=r},{}],21:[function(t,e,n){function r(t){for(var e=c(t),n=e.length,r=n&&t.length,u=!!r&&a(r)&&(o(t)||i(t)),f=-1,p=[];++f<n;){var d=e[f];(u&&s(d,r)||l.call(t,d))&&p.push(d)}return p}var i=t("../lang/isArguments"),o=t("../lang/isArray"),s=t("./isIndex"),a=t("./isLength"),c=t("../object/keysIn"),u=Object.prototype,l=u.hasOwnProperty;e.exports=r},{"../lang/isArguments":22,"../lang/isArray":23,"../object/keysIn":30,"./isIndex":17,"./isLength":19}],22:[function(t,e,n){function r(t){return o(t)&&i(t)&&a.call(t,"callee")&&!c.call(t,"callee")}var i=t("../internal/isArrayLike"),o=t("../internal/isObjectLike"),s=Object.prototype,a=s.hasOwnProperty,c=s.propertyIsEnumerable;e.exports=r},{"../internal/isArrayLike":16,"../internal/isObjectLike":20}],23:[function(t,e,n){var r=t("../internal/getNative"),i=t("../internal/isLength"),o=t("../internal/isObjectLike"),s="[object Array]",a=Object.prototype,c=a.toString,u=r(Array,"isArray"),l=u||function(t){return o(t)&&i(t.length)&&c.call(t)==s};e.exports=l},{"../internal/getNative":15,"../internal/isLength":19,"../internal/isObjectLike":20}],24:[function(t,e,n){function r(t){return i(t)&&a.call(t)==o}var i=t("./isObject"),o="[object Function]",s=Object.prototype,a=s.toString;e.exports=r},{"./isObject":26}],25:[function(t,e,n){function r(t){return null==t?!1:i(t)?l.test(c.call(t)):o(t)&&s.test(t)}var i=t("./isFunction"),o=t("../internal/isObjectLike"),s=/^\[object .+?Constructor\]$/,a=Object.prototype,c=Function.prototype.toString,u=a.hasOwnProperty,l=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},{"../internal/isObjectLike":20,"./isFunction":24}],26:[function(t,e,n){function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}e.exports=r},{}],27:[function(t,e,n){function r(t){return"string"==typeof t||i(t)&&a.call(t)==o}var i=t("../internal/isObjectLike"),o="[object String]",s=Object.prototype,a=s.toString;e.exports=r},{"../internal/isObjectLike":20}],28:[function(t,e,n){var r=t("../internal/assignWith"),i=t("../internal/baseAssign"),o=t("../internal/createAssigner"),s=o(function(t,e,n){return n?r(t,e,n):i(t,e)});e.exports=s},{"../internal/assignWith":8,"../internal/baseAssign":9,"../internal/createAssigner":13}],29:[function(t,e,n){var r=t("../internal/getNative"),i=t("../internal/isArrayLike"),o=t("../lang/isObject"),s=t("../internal/shimKeys"),a=r(Object,"keys"),c=a?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&i(t)?s(t):o(t)?a(t):[]}:s;e.exports=c},{"../internal/getNative":15,"../internal/isArrayLike":16,"../internal/shimKeys":21,"../lang/isObject":26}],30:[function(t,e,n){function r(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(o(t)||i(t))&&e||0;for(var n=t.constructor,r=-1,u="function"==typeof n&&n.prototype===t,f=Array(e),p=e>0;++r<e;)f[r]=r+"";for(var d in t)p&&s(d,e)||"constructor"==d&&(u||!l.call(t,d))||f.push(d);return f}var i=t("../lang/isArguments"),o=t("../lang/isArray"),s=t("../internal/isIndex"),a=t("../internal/isLength"),c=t("../lang/isObject"),u=Object.prototype,l=u.hasOwnProperty;e.exports=r},{"../internal/isIndex":17,"../internal/isLength":19,"../lang/isArguments":22,"../lang/isArray":23,"../lang/isObject":26}],31:[function(t,e,n){function r(t){return t}e.exports=r},{}],32:[function(t,e,n){e.exports=function(t,e){var n;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],null==n?t.removeAttribute(r):t.setAttribute(r,n))}},{}],33:[function(t,e,n){"use strict";var r=t("../shared/constants");e.exports=function(t,e){return t+"/web/"+r.VERSION+"/html/hosted-fields-frame.min.html#"+e}},{"../shared/constants":37}],34:[function(t,e,n){"use strict";function r(t){return function(e){var n,r=e.merchantPayload,i=r.emittedBy,o=t[i].containerElement;Object.keys(r.fields).forEach(function(e){r.fields[e].container=t[e].containerElement}),n=r.fields[i],s.toggle(o,f.externalClasses.FOCUSED,n.isFocused),s.toggle(o,f.externalClasses.VALID,n.isValid),n.isStrictlyValidating?s.toggle(o,f.externalClasses.INVALID,!n.isValid):s.toggle(o,f.externalClasses.INVALID,!n.isPotentiallyValid),this._emit(e.type,r)}}function i(t){var e,n,h,y,x,A,O=this,N={},C=0,T=d();if(!t.client)throw new u({type:u.types.MERCHANT,message:"You must specify a client when initializing Hosted Fields."});if(A=t.client.getConfiguration(),A.analyticsMetadata.sdkVersion!==_)throw new u({type:u.types.MERCHANT,message:"Client and Hosted Fields components must be from the same SDK version."});if(!t.fields)throw new u({type:u.types.MERCHANT,message:"You must specify fields when initializing Hosted Fields."});m.call(this),this._injectedNodes=[],this._destructor=new o,this._fields=N,this._bus=new c({channel:T,merchantUrl:location.href}),this._destructor.registerFunctionForTeardown(function(){O._bus.teardown()}),this._client=t.client,v.sendEvent(this._client,"web.custom.hosted-fields.initialized");for(y in f.whitelistedFields)if(f.whitelistedFields.hasOwnProperty(y)){if(e=t.fields[y],!e)continue;if(n=document.querySelector(e.selector),!n)throw new u({type:u.types.MERCHANT,message:"Selector does not reference a valid DOM node.",details:{fieldSelector:e.selector,fieldKey:y}});if(n.querySelector('iframe[name^="braintree-"]'))throw new u({type:u.types.MERCHANT,message:"Element already contains a Braintree iframe.",details:{fieldSelector:e.selector,fieldKey:y}});h=a({type:y,name:"braintree-hosted-field-"+y,style:f.defaultIFrameStyle}),this._injectedNodes=this._injectedNodes.concat(b(h,n)),this._setupLabelFocus(y,n),N[y]={frameElement:h,containerElement:n},C++,setTimeout(function(t){return function(){t.src=l(O._client.getConfiguration().gatewayConfiguration.assetsUrl,T)}}(h),0)}x=setTimeout(function(){v.sendEvent(O._client,"web.custom.hosted-fields.load.timed-out")},p),this._bus.on(g.FRAME_READY,function(e){C--,0===C&&(clearTimeout(x),e(t),O._emit("ready"))}),this._bus.on(g.INPUT_EVENT,r(N).bind(this)),this._destructor.registerFunctionForTeardown(function(){var t,e,n;for(t=0;t<O._injectedNodes.length;t++)e=O._injectedNodes[t],n=e.parentNode,n.removeChild(e),s.remove(n,f.externalClasses.FOCUSED,f.externalClasses.INVALID,f.externalClasses.VALID)}),this._destructor.registerFunctionForTeardown(function(){var t=E(i.prototype).concat(E(m.prototype));w(O,t)})}var o=t("destructor"),s=t("../../lib/classlist"),a=t("iframer"),c=t("../../lib/bus"),u=t("../../lib/error"),l=t("./compose-url"),f=t("../shared/constants"),p=t("../../lib/constants").INTEGRATION_TIMEOUT_MS,d=t("../../lib/uuid"),h=t("../shared/find-parent-tags"),y=t("../../lib/is-ios"),g=f.events,m=t("../../lib/event-emitter"),b=t("./inject-frame"),v=t("../../lib/analytics"),x=f.whitelistedFields,_="3.0.0-beta.7",E=t("../../lib/methods"),w=t("../../lib/convert-methods-to-error"),A=t("../../lib/deferred");i.prototype=Object.create(m.prototype,{constructor:i}),i.prototype._setupLabelFocus=function(t,e){function n(){s.emit(g.TRIGGER_INPUT_FOCUS,t)}var r,i,o=y(),s=this._bus;if(!o&&null!=e.id){for(r=Array.prototype.slice.call(document.querySelectorAll('label[for="'+e.id+'"]')),r=r.concat(h(e,"label")),i=0;i<r.length;i++)r[i].addEventListener("click",n,!1);this._destructor.registerFunctionForTeardown(function(){for(i=0;i<r.length;i++)r[i].removeEventListener("click",n,!1)})}},i.prototype.teardown=function(t){var e=this._client;this._destructor.teardown(function(n){v.sendEvent(e,"web.custom.hosted-fields.teardown-completed"),"function"==typeof t&&(t=A(t))(n)})},i.prototype.tokenize=function(t){if("function"!=typeof t)throw new u({type:u.types.MERCHANT,message:"tokenize must include a callback function."});this._bus.emit(g.TOKENIZATION_REQUEST,function(e){t.apply(null,e)})},i.prototype.setPlaceholder=function(t,e,n){var r;x.hasOwnProperty(t)?this._fields.hasOwnProperty(t)?this._bus.emit(g.SET_PLACEHOLDER,t,e):r=new u({type:u.types.MERCHANT,message:'Cannot set placeholder for "'+t+'" field because it is not part of the current Hosted Fields options.'}):r=new u({type:u.types.MERCHANT,message:'"'+t+'" is not a valid field. You must use a valid field option when setting a placeholder.'}),"function"==typeof n&&(n=A(n))(r)},i.prototype.clear=function(t,e){var n;x.hasOwnProperty(t)?this._fields.hasOwnProperty(t)?this._bus.emit(g.CLEAR_FIELD,t):n=new u({type:u.types.MERCHANT,message:'Cannot clear "'+t+'" field because it is not part of the current Hosted Fields options.'}):n=new u({type:u.types.MERCHANT,message:'"'+t+'" is not a valid field. You must use a valid field option when clearing a field.'}),"function"==typeof e&&(e=A(e))(n)},e.exports=i},{"../../lib/analytics":40,"../../lib/bus":43,"../../lib/classlist":44,"../../lib/constants":45,"../../lib/convert-methods-to-error":46,"../../lib/deferred":48,"../../lib/error":50,"../../lib/event-emitter":51,"../../lib/is-ios":52,"../../lib/methods":54,"../../lib/uuid":56,"../shared/constants":37,"../shared/find-parent-tags":38,"./compose-url":33,"./inject-frame":35,destructor:1,iframer:5}],35:[function(t,e,n){"use strict";e.exports=function(t,e){var n=document.createElement("div"),r=document.createDocumentFragment();return n.style.clear="both",r.appendChild(t),r.appendChild(n),e.appendChild(r),[t,n]}},{}],36:[function(t,e,n){"use strict";var r=t("./external/hosted-fields"),i="3.0.0-beta.7",o=t("../lib/deferred");e.exports={create:function(t,e){var n;try{n=new r(t)}catch(i){return e=o(e),void e(i)}n.on("ready",function(){e(null,n)})},VERSION:i}},{"../lib/deferred":48,"./external/hosted-fields":34}],37:[function(t,e,n){"use strict";var r=t("../../lib/enumerate"),i="3.0.0-beta.7",o={VERSION:i,externalEvents:{FOCUS:"focus",BLUR:"blur",EMPTY:"empty",NOT_EMPTY:"notEmpty",VALIDITY_CHANGE:"validityChange",CARD_TYPE_CHANGE:"cardTypeChange"},defaultMaxLengths:{number:19,postalCode:8,expirationDate:7,expirationMonth:2,expirationYear:4,cvv:3},externalClasses:{FOCUSED:"braintree-hosted-fields-focused",INVALID:"braintree-hosted-fields-invalid",VALID:"braintree-hosted-fields-valid"},defaultIFrameStyle:{border:"none",width:"100%",height:"100%","float":"left"},whitelistedStyles:["-moz-osx-font-smoothing","-moz-tap-highlight-color","-moz-transition","-webkit-font-smoothing","-webkit-tap-highlight-color","-webkit-transition","color","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-weight","line-height","opacity","outline","text-shadow","transition"],whitelistedFields:{number:{name:"credit-card-number",label:"Credit Card Number"},cvv:{name:"cvv",label:"CVV"},expirationDate:{name:"expiration",label:"Expiration Date"},expirationMonth:{name:"expiration-month",label:"Expiration Month"},expirationYear:{name:"expiration-year",label:"Expiration Year"},postalCode:{name:"postal-code",label:"Postal Code"}}};o.events=r(["FRAME_READY","VALIDATE_STRICT","CONFIGURATION","TOKENIZATION_REQUEST","INPUT_EVENT","TRIGGER_INPUT_FOCUS","SET_PLACEHOLDER","CLEAR_FIELD"],"hosted-fields:"),e.exports=o},{"../../lib/enumerate":49}],38:[function(t,e,n){"use strict";function r(t,e){for(var n=t.parentNode,r=[];null!=n;)null!=n.tagName&&n.tagName.toLowerCase()===e&&r.push(n),n=n.parentNode;return r}e.exports=r},{}],39:[function(t,e,n){"use strict";function r(t,e){var n,r=e?o(e):{},a=i(t.authorization).attrs,c=o(t.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.clientKey?r.clientKey=a.clientKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=t("./create-authorization-data"),o=t("./json-clone"),s=t("./constants");e.exports=r},{"./constants":45,"./create-authorization-data":47,"./json-clone":53}],40:[function(t,e,n){"use strict";function r(t){return Math.floor(t/1e3)}function i(t){return t}function o(t,e,n){var o=t.getConfiguration(),c=t._driver,u=r(Date.now()),l=o.gatewayConfiguration.analytics.url,f={analytics:[{kind:e,timestamp:u}]};c.post(l,a(o,f),i,n,s.ANALYTICS_REQUEST_TIMEOUT_MS)}var s=t("./constants"),a=t("./add-metadata");e.exports={sendEvent:o}},{"./add-metadata":39,"./constants":45}],41:[function(t,e,n){"use strict";function r(t,e){var n,r,o=document.createElement("a");return o.href=e,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===t||i.test(t)}var i=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;e.exports={checkOrigin:r}},{}],42:[function(t,e,n){"use strict";var r=t("../enumerate");e.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":49}],43:[function(t,e,n){"use strict";function r(t){if(t=t||{},this.channel=t.channel,!this.channel)throw new a({type:a.types.INTERNAL,message:"Channel ID must be specified."});this.merchantUrl=t.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=t("framebus"),o=t("./events"),s=t("./check-origin").checkOrigin,a=t("../error");r.prototype.on=function(t,e){var n,r,o=e,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&e.apply(this,arguments)}),n=this._namespaceEvent(t),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:t,handler:o,originalHandler:e}))},r.prototype.emit=function(t){var e;this._isDestroyed||(e=Array.prototype.slice.call(arguments),e[0]=this._namespaceEvent(t),this._log("emit",e),i.emit.apply(i,e))},r.prototype._offDirect=function(t){var e=Array.prototype.slice.call(arguments);this._isDestroyed||(e[0]=this._namespaceEvent(t),this._log("off",e),i.off.apply(i,e))},r.prototype.off=function(t,e){var n,r,i=e;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===e&&(i=r.handler);this._offDirect(t,i)}},r.prototype._namespaceEvent=function(t){return["braintree",this.channel,t].join(":")},r.prototype.teardown=function(){var t,e;for(e=0;e<this._listeners.length;e++)t=this._listeners[e],this._offDirect(t.eventName,t.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(t,e){this._isVerbose&&console.log(t,e)},r.events=o,e.exports=r},{"../error":50,"./check-origin":41,"./events":42,framebus:4}],44:[function(t,e,n){"use strict";function r(t){return t.className.trim().split(/\s+/)}function i(t){var e=Array.prototype.slice.call(arguments,1),n=r(t).filter(function(t){return-1===e.indexOf(t)}).concat(e).join(" ");t.className=n}function o(t){var e=Array.prototype.slice.call(arguments,1),n=r(t).filter(function(t){return-1===e.indexOf(t)}).join(" ");t.className=n}function s(t,e,n){n?i(t,e):o(t,e)}e.exports={add:i,remove:o,toggle:s}},{}],45:[function(t,e,n){"use strict";var r="3.0.0-beta.7",i="web";e.exports={ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],46:[function(t,e,n){"use strict";var r=t("./error");e.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:r.types.MERCHANT,message:e+" cannot be called after teardown."})}})}},{"./error":50}],47:[function(t,e,n){"use strict";function r(t){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(t)}function i(t){var e=t.split("_"),n=e[0],r=e.slice(2).join("_");return{merchantId:r,environment:n}}function o(t){var e,n,o={attrs:{},configUrl:""};return r(t)?(n=i(t),o.attrs.clientKey=t,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(e=JSON.parse(s(t)),o.attrs.authorizationFingerprint=e.authorizationFingerprint,o.configUrl=e.configUrl),o}var s=t("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};e.exports=o},{"../lib/polyfill":55}],48:[function(t,e,n){"use strict";e.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],49:[function(t,e,n){"use strict";function r(t,e){return e=null==e?"":e,t.reduce(function(t,n){return t[n]=e+n,t},{})}e.exports=r},{}],50:[function(t,e,n){"use strict";function r(t){if(!r.types.hasOwnProperty(t.type))throw new Error(t.type+" is not a valid type.");if(!t.message)throw new Error("Error message required.");this.message=t.message,this.type=t.type,this.details=t.details}var i=t("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),e.exports=r},{"./enumerate":49}],51:[function(t,e,n){"use strict";function r(){this._events={}}r.prototype.on=function(t,e){this._events[t]?this._events[t].push(e):this._events[t]=[e]},r.prototype._emit=function(t){var e,n,r=this._events[t];if(r)for(n=Array.prototype.slice.call(arguments,1),e=0;e<r.length;e++)r[e].apply(null,n)},e.exports=r},{}],52:[function(t,e,n){"use strict";e.exports=function(t){return t=t||navigator.userAgent,/(iPad|iPhone|iPod)/i.test(t)}},{}],53:[function(t,e,n){"use strict";e.exports=function(t){return JSON.parse(JSON.stringify(t))}},{}],54:[function(t,e,n){"use strict";e.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],55:[function(t,e,n){(function(t){"use strict";function n(t){var e,n,r,i,o,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=l.indexOf(t.charAt(c++)),o=l.indexOf(t.charAt(c++)),s=l.indexOf(t.charAt(c++)),a=l.indexOf(t.charAt(c++)),e=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,f+=String.fromCharCode(e)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<t.length);return f}var r="function"==typeof t.atob?t.atob:n;e.exports={atob:r,_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],56:[function(t,e,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=r},{}]},{},[36])(36)});