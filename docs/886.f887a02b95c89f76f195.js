"use strict";(self.webpackChunkcampos=self.webpackChunkcampos||[]).push([[886],{9886:(Z,c,o)=>{o.r(c),o.d(c,{HomeModule:()=>b});var u=o(8583),p=o(2305),d=o(55),g=o(2340),t=o(7716),m=o(9790),h=o(3686);const f=["output"],v=[{path:"",component:(()=>{class e{constructor(n){this.translate=n,this.typedText="",this.cursorBlink=!0,this.translate.use(g.N.language||"pt")}ngOnInit(){this.typeText("Campos.SobreMimTexto"),this.terminalSound=new d.Howl({src:["assets/sounds/typing-sound.mp3"],volume:.1})}ngOnDestroy(){var n;null===(n=this.terminalSound)||void 0===n||n.pause()}typeText(n){return new Promise(r=>{let i=0;const M=setInterval(()=>{var s,l;null===(s=this.terminalSound)||void 0===s||s.play(),i<n.length?(this.typedText+=n[i],i++):(clearInterval(M),r(),null===(l=this.terminalSound)||void 0===l||l.pause())},100)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(n,r){if(1&n&&t.Gf(f,5),2&n){let i;t.iGM(i=t.CRH())&&(r.outputElement=i.first)}},decls:24,vars:9,consts:[[1,"container"],[1,"display-flex-center","half-height"],[1,"container-about-me","full-height","half-width"],["id","monitor",1,"full-width-height","background-screens"],[1,"full-width-height","position-absolute","overflow-hidden"],[1,"scanlines","full-width-height","position-absolute"],[1,"full-width-height"],[1,"color-white","text-uppercase","text-align-center","f-vh-3"],["id","output",1,"padding-18","color-white","text-uppercase","f-vh-2","line-height-vw-2"],[1,"bottom-vw-3","left-vw-4","display-flex-center","flex-collumn","position-absolute"],[1,"speech-bubble","border-radius-10","position-relative","width-vw-5"],[1,"position-relative"],[1,"text-uppercase"],["href","https://www.tripadvisor.com.br/Attractions-g303629-Activities-\n        Sao_Jose_Dos_Campos_State_of_Sao_Paulo.html","target","_blank",1,"planet","cursor-pointer","width-px-200","height-px-200"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-menu"),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t._UZ(6,"div",5),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div",6),t.TgZ(9,"h2",7),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"pre",8),t.TgZ(13,"a"),t._uU(14,"$>"),t.qZA(),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t.TgZ(19,"div",11),t.TgZ(20,"p",12),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"a",13),t.qZA(),t.qZA()),2&n&&(t.xp6(10),t.hij(" ",t.lcZ(11,3,"Campos.SobreMimTitulo")," "),t.xp6(5),t.Oqu(t.lcZ(16,5,r.typedText)),t.xp6(6),t.hij(" ",t.lcZ(22,7,"Campos.Localizacao")," "))},directives:[h.M],pipes:[m.X$],styles:["@keyframes glitch{0%,to{transform:translate(0);opacity:1}25%{transform:translate(-1px,2px);opacity:.8}50%{transform:translate(2px,-1px);opacity:1}75%{transform:translate(0);opacity:.9}}@keyframes scanline-scroll{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes rotatePlanet{0%{transform:rotate(0)}to{transform:rotate(360deg)}}mat-icon[_ngcontent-%COMP%]{transform:rotate(180deg);color:#90ee90}.container-about-me[_ngcontent-%COMP%]{margin-top:10vw}.container-about-me[_ngcontent-%COMP%]   #monitor[_ngcontent-%COMP%]{animation:glitch 1s ease-in-out 1.5s infinite;border:30px solid transparent;border-image-source:url(bazel.5ac3a5d4e9d8c565eaf6.png);border-image-slice:30 fill}.container-about-me[_ngcontent-%COMP%]   #monitor[_ngcontent-%COMP%]   .scanlines[_ngcontent-%COMP%]{animation:scanline-scroll 2s linear infinite;background:repeating-linear-gradient(rgba(255,255,255,.05) 0px,rgba(255,255,255,.05) 1px,transparent 2px,transparent 4px)}.container-about-me[_ngcontent-%COMP%]   #monitor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container-about-me[_ngcontent-%COMP%]   #monitor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{max-width:100%;word-wrap:break-word;text-wrap:wrap}.container-about-me[_ngcontent-%COMP%]   #monitor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#90ee90}.planet[_ngcontent-%COMP%]{background-image:url(planet.9cb0fca82d7ad50943bc.png);background-size:cover;background-position:center;animation:rotatePlanet 10s linear infinite}.speech-bubble[_ngcontent-%COMP%]{padding:15px 20px;background-color:#fff;box-shadow:0 4px 6px #0000001a}@media screen and (max-width: 1366px){#output[_ngcontent-%COMP%]{line-height:22px}.speech-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.planet[_ngcontent-%COMP%]{width:150px;height:150px}}@media screen and (min-width: 3440px){.container-about-me[_ngcontent-%COMP%]{width:40%}.container-about-me[_ngcontent-%COMP%]   #output[_ngcontent-%COMP%]{padding:0 0 0 50px;line-height:45px}.planet[_ngcontent-%COMP%]{width:300px;height:300px}}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(v)],p.Bz]}),e})();var C=o(5808);let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,x,C.m]]}),e})()}}]);