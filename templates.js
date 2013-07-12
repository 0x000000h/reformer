(function () {
var root = this, exports = {};

// The jade runtime:
var jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects

// field.jade compiled template
exports.field = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push("<div" + jade.attrs({
            id: field.containerId,
            "class": "fieldContainer clearfix" + (field.errors.length ? " error" : "")
        }, {
            id: true,
            "class": true
        }) + ">");
        (function() {
            var $$obj = field.errors;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var error = $$obj[$index];
                    buf.push('<span class="error">' + (null == (jade.interp = error) ? "" : jade.interp) + "</span>");
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    if ($$obj.hasOwnProperty($index)) {
                        var error = $$obj[$index];
                        buf.push('<span class="error">' + (null == (jade.interp = error) ? "" : jade.interp) + "</span>");
                    }
                }
            }
        }).call(this);
        if (field.label) {
            buf.push("<label" + jade.attrs({
                "for": field.id
            }, {
                "for": true
            }) + ">" + jade.escape(null == (jade.interp = field.label) ? "" : jade.interp) + "</label>");
        }
        if (field.textarea) {
            buf.push("<textarea" + jade.attrs({
                id: field.id,
                name: field.name,
                placeholder: field.placeholder
            }, {
                id: true,
                name: true,
                placeholder: true
            }) + "></textarea>");
        }
        if (field.input) {
            buf.push("<input" + jade.attrs({
                id: field.id,
                min: field.get("min"),
                max: field.get("max"),
                step: field.get("step"),
                placeholder: field.get("placeholder"),
                type: field.type,
                name: field.name
            }, {
                id: true,
                min: true,
                max: true,
                step: true,
                placeholder: true,
                type: true,
                name: true
            }) + "/>");
        }
        if (field.select) {
            buf.push("<select" + jade.attrs({
                id: field.id,
                name: field.name,
                "class": field.class
            }, {
                id: true,
                name: true,
                "class": true
            }) + ">");
            (function() {
                var $$obj = field.options;
                if ("number" == typeof $$obj.length) {
                    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                        var option = $$obj[$index];
                        buf.push("<option" + jade.attrs({
                            value: option.val
                        }, {
                            value: true
                        }) + ">" + jade.escape(null == (jade.interp = option.text) ? "" : jade.interp) + "</option>");
                    }
                } else {
                    var $$l = 0;
                    for (var $index in $$obj) {
                        $$l++;
                        if ($$obj.hasOwnProperty($index)) {
                            var option = $$obj[$index];
                            buf.push("<option" + jade.attrs({
                                value: option.val
                            }, {
                                value: true
                            }) + ">" + jade.escape(null == (jade.interp = option.text) ? "" : jade.interp) + "</option>");
                        }
                    }
                }
            }).call(this);
            buf.push("</select>");
        }
        if (field.helpText) {
            buf.push("<p" + jade.attrs({
                id: field.id + "_helpText",
                "class": "helpText"
            }, {
                id: true
            }) + ">" + jade.escape(null == (jade.interp = field.helpText) ? "" : jade.interp) + "</p>");
        }
        buf.push("</div>");
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();