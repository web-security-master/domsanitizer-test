(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var i=n("fXoL"),r=n("jhN1"),o=n("tyNb");const s=[];let a=(()=>{class t{}return t.\u0275mod=i.Ab({type:t}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},imports:[[o.a.forRoot(s)],o.a]}),t})(),c=(()=>{class t{constructor(t){this.sanitizer=t,this.editorCode="",this.sanitizedCode="",this.sanitizedRender="",this.tests=["<p>\n <script>alert('Hello!')<\/script>\n   {{Tag=Name}}\n   {{Tag=Title}}\n</p>",'<p>\n <link rel="http://malicious-site.org" />\n {{Tag=Name}}\n {{Tag=Title}}\n</p>',"<p onclick=\"alert('Hello!')\">\n {{Tag=Name}}\n {{Tag=Title}}\n</p>",'<p data-handler="window.location">\n {{Tag=Name}}\n {{Tag=Title}}\n</p>'],this.log=console.dir,this.clean=()=>{this.sanitizedCode=this.sanitizer.sanitize(i.H.HTML,this.editorCode)||"",this.sanitizedRender=this.sanitizer.bypassSecurityTrustHtml(this.sanitizedCode)||""},this.update=t=>this.editorCode=t.target.textContent||""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Cb(r.b))},t.\u0275cmp=i.wb({type:t,selectors:[["app-sanitizer"]],decls:21,vars:3,consts:[["contenteditable","true",1,"editor",3,"textContent","blur"],[1,"editor"],[1,"editor",3,"innerHTML"],[3,"click"]],template:function(t,e){1&t&&(i.Rb(0,"Source code (you can also edit the text):\n"),i.Fb(1,"pre",0),i.Kb("blur",function(t){return e.update(t)}),i.Eb(),i.Db(2,"hr"),i.Rb(3,"\nSanitized Code:\n"),i.Fb(4,"pre",1),i.Rb(5),i.Eb(),i.Db(6,"br"),i.Rb(7,"\nSanitized Render:\n"),i.Db(8,"div",2),i.Db(9,"br"),i.Db(10,"hr"),i.Fb(11,"button",3),i.Kb("click",function(){return e.editorCode=e.tests[0]}),i.Rb(12,"Test Case 1"),i.Eb(),i.Fb(13,"button",3),i.Kb("click",function(){return e.editorCode=e.tests[1]}),i.Rb(14,"Test Case 2"),i.Eb(),i.Fb(15,"button",3),i.Kb("click",function(){return e.editorCode=e.tests[2]}),i.Rb(16,"Test Case 3"),i.Eb(),i.Fb(17,"button",3),i.Kb("click",function(){return e.editorCode=e.tests[3]}),i.Rb(18,"Test Case 4"),i.Eb(),i.Fb(19,"button",3),i.Kb("click",function(){return e.clean()}),i.Rb(20,"RUN SANITIZER"),i.Eb()),2&t&&(i.tb(1),i.Mb("textContent",e.editorCode),i.tb(4),i.Sb(e.sanitizedCode),i.tb(3),i.Mb("innerHTML",e.sanitizedRender,i.Ob))},styles:[".editor[_ngcontent-%COMP%]{height:20vh;width:50vw;border:2px dashed purple}hr[_ngcontent-%COMP%]{width:50vw;margin-left:0}button[_ngcontent-%COMP%]{padding:5px;margin:10px}"]}),t})(),b=(()=>{class t{constructor(){this.title="domsanitizer-test"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.wb({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Db(0,"app-sanitizer"),i.Db(1,"router-outlet"))},directives:[c,o.b],styles:[""]}),t})(),d=(()=>{class t{}return t.\u0275mod=i.Ab({type:t,bootstrap:[b]}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},providers:[],imports:[[r.a,a]]}),t})();Object(i.R)(),r.c().bootstrapModule(d).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,4]]]);
//# sourceMappingURL=main.7745661df19ce8f0edda.js.map