(()=>{var e={823:()=>{String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},String.prototype.splitFlag="`"},738:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(823);var u=n(473),r=n(5),i=n(515),o=function(){function e(){}return e.run=function(e){this.lineNumber=0,i.default.getInstance().clear(),u.default.clear(),this.parseCode(e).forEach((function(e){""===e.trim()||e.trim().startsWith("~")||new r.default(e).run()}))},e.parseCode=function(e){for(var t=e.split("\n").join("").split(";"),n=[],u=0;u<t.length;u++){for(var r=1;t[u].includes("{")&&!t[u].includes("}");)t[u]+=","+t[u+r],n.push(u+r++);if(t[u].includes("{")&&t[u].includes("}")){var i=t[u].substring(t[u].indexOf("{")+1,t[u].indexOf("}"));i=i.replaceAll(" ",i.splitFlag),t[u]=t[u].substring(0,t[u].indexOf("{"))+i}}for(u=n.length-1;u>=0;u--)t.splice(n[u],1);return t},e}();t.default=o},473:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.clear=function(){document.getElementById("log").innerHTML=""},e.log=function(e){document.getElementById("log").innerHTML+=e+"\n\n"},e.logToConsole=function(e){console.log(e)},e}();t.default=n},595:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="+",this.description="add",this.example="+ my_var 12; (adds 12 to my_var)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,e[0].get()+e[1].get())},e}();t.default=r},367:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="=",this.description="assign",this.example="= my_var 12; (sets my_var to 12)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,e[1].get())},e}();t.default=r},869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="!",this.description="deallocate",this.example="! my_var; (deallocates my_var)"}return e.prototype.execute=function(e){u.default.getInstance().remove(e[0].key)},e}();t.default=r},814:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="@",this.description="define",this.example="@ my_var 12; (defines my_var and optionally sets it to 12 (defalut: 0))"}return e.prototype.execute=function(e){u.default.getInstance().add(e[0].key,e[1]?e[1].get():0)},e}();t.default=r},17:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=n(473),i=function(){function e(){this.key="<",this.description="log",this.example="< my_var; (logs value of my_var)"}return e.prototype.execute=function(e){r.default.log(u.default.getInstance().get(e[0].key).get())},e}();t.default=i},852:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),r=n(738),i=function(){function e(){this.key="&",this.description="divide",this.example="& 4 {\n...\n}; (runs statements on lines between braces 4 times)"}return e.prototype.execute=function(e){for(var t=e[1].key,n=t.split("\n").join("").split(t.splitFlag).join(" ").split(","),i=function(e){r.default.lineNumber-=(n.length-1)*(e>0?1:0),n.forEach((function(t){""===t.trim()||t.trim().startsWith("~")||new u.default(t.replaceAll("#",e)).run()}))},o=0;o<e[0].get();o++)i(o);r.default.lineNumber++},e}();t.default=i},372:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="%",this.description="module",this.example="% my_var 3; (sets my_var to itself modulo 3)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,e[0].get()%e[1].get())},e}();t.default=r},922:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="*",this.description="multiply",this.example="* my_var 12; (multiplies my_var by 12)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,e[0].get()*e[1].get())},e}();t.default=r},799:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(595),r=n(367),i=n(869),o=n(814),a=n(814),s=n(17),l=n(852),c=n(372),f=n(922),d=n(307),p=n(199),y=n(93),v=[{key:(new u.default).key,op:u.default},{key:(new r.default).key,op:r.default},{key:(new i.default).key,op:i.default},{key:(new o.default).key,op:o.default},{key:(new a.default).key,op:a.default},{key:(new s.default).key,op:s.default},{key:(new l.default).key,op:l.default},{key:(new c.default).key,op:c.default},{key:(new f.default).key,op:f.default},{key:(new d.default).key,op:d.default},{key:(new p.default).key,op:p.default},{key:(new y.default).key,op:y.default}];t.default=v},307:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="^",this.description="power of",this.example="^ my_var 3; (sets my_var to itself to the power of 3)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,Math.pow(e[0].get(),e[1].get()))},e}();t.default=r},199:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="_",this.description="square root",this.example="_ my_var; (sets my_var to its square root)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,Math.sqrt(e[0].get()))},e}();t.default=r},93:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(515),r=function(){function e(){this.key="-",this.description="subtract",this.example="- my_var 12; (subtracts 12 from my_var)"}return e.prototype.execute=function(e){u.default.getInstance().set(e[0].key,e[0].get()-e[1].get())},e}();t.default=r},5:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(738),r=n(473),i=n(799),o=n(515),a=function(){function e(e){this._elements=e.split(" "),this._args=[],this.parse()}return e.prototype.parse=function(){var e=this,t=i.default.find((function(t){return t.key===e._elements[0]}));t&&(this._operation=t.op.prototype),this._elements.splice(1).forEach((function(t){e._args.push(o.default.getInstance().get(t))}))},e.prototype.run=function(){u.default.lineNumber++,this._operation?this._operation.execute(this._args):r.default.log("LINE ".concat(u.default.lineNumber,': "').concat(this._elements[0],'" is an invalid operation.'))},e}();t.default=a},402:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){void 0===t&&(t=0),this.key=e,this.value=t}return e.prototype.get=function(){return this.value},e.prototype.getString=function(){return this.value},e.prototype.set=function(e){this.value=e},e}();t.default=n},515:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(738),r=n(473),i=n(402),o=function(){function e(){}return e.prototype.clear=function(){e._variables=[]},e.getInstance=function(){return e._instance||(e._instance=new e),e._instance},e.prototype.add=function(t,n){t!==e._tempFlag&&(this.findVar(t)?r.default.log("LINE ".concat(u.default.lineNumber,': add() - "').concat(t,'" is already defined.')):e._variables.push(new i.default(t,n)))},e.prototype.findVar=function(t){return e._variables.find((function(e){return e.key===t}))},e.prototype.get=function(t){return parseFloat(t)?new i.default(e._tempFlag,parseFloat(t)):this.findVar(t)||new i.default(t,0)},e.prototype.remove=function(t){var n=e._variables.findIndex((function(e){return e.key===t}));n>=0?e._variables.splice(n,1):r.default.log("LINE ".concat(u.default.lineNumber,': remove() - "').concat(t,'" does not exist.'))},e.prototype.set=function(e,t){var n=this.findVar(e);n?n.set(t):r.default.log("LINE ".concat(u.default.lineNumber,': set() - "').concat(e,'" does not exist.'))},e._variables=[],e}();t.default=o}},t={};function n(u){var r=t[u];if(void 0!==r)return r.exports;var i=t[u]={exports:{}};return e[u](i,i.exports,n),i.exports}(()=>{"use strict";n(823);var e=n(738);document.getElementById("runButton").onclick=function(){e.default.run(document.getElementById("code").value)}})()})();