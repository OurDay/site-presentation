/*! modernizr 3.8.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?- !*/
!function(n,e,o){function s(n,e){return typeof n===e}var t=[],a={_version:"3.8.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){t.push({name:n,fn:e,options:o})},addAsyncTest:function(n){t.push({name:null,fn:n})}},i=function(){};i.prototype=a,i=new i;var f=[];!function(){var n,e,o,a,r,l,u;for(var p in t)if(t.hasOwnProperty(p)){if(n=[],e=t[p],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(a=s(e.fn,"function")?e.fn():e.fn,r=0;r<n.length;r++)l=n[r],u=l.split("."),1===u.length?i[u[0]]=a:(i[u[0]]&&(!i[u[0]]||i[u[0]]instanceof Boolean)||(i[u[0]]=new Boolean(i[u[0]])),i[u[0]][u[1]]=a),f.push((a?"":"no-")+u.join("-"))}}(),delete a.addTest,delete a.addAsyncTest;for(var r=0;r<i._q.length;r++)i._q[r]();n.Modernizr=i}(window,document);