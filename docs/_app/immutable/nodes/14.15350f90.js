import{S as $e,i as et,s as tt,y as je,a as B,k as O,q as b,N as J,e as ne,z as Fe,c as U,l as x,m as v,r as k,h as d,O as N,n as a,P as at,A as He,b as R,C as i,Q as ot,g as Je,d as Ne,B as We,M as Se,E as Be,o as rt,u as ie,p as T}from"../chunks/index.a4677e45.js";import{H as lt}from"../chunks/global.cf228f98.js";import{S as nt}from"../chunks/SelectRegions.4d664128.js";import{c as it,a as st,r as ht}from"../chunks/csv.1818c08b.js";const ut=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ut},Symbol.toStringTag,{value:"Module"}));function Ue(e,t,l){const s=e.slice();return s[16]=t[l],s[18]=l,s}function Qe(e,t,l){const s=e.slice();return s[19]=t[l],s[18]=l,s}function Xe(e,t,l){const s=e.slice();return s[16]=t[l],s[18]=l,s}function Ge(e){let t,l,s,o,u,h,_,g=(100*e[16]).toFixed(0)+"",p,M,q;return{c(){t=J("line"),o=J("line"),_=J("text"),p=b(g),M=b("%"),this.h()},l(f){t=N(f,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),v(t).forEach(d),o=N(f,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),v(o).forEach(d),_=N(f,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var m=v(_);p=k(m,g),M=k(m,"%"),m.forEach(d),this.h()},h(){a(t,"class","grid svelte-ac7ppe"),a(t,"x1",l=29+e[18]*e[4]),a(t,"y1","34"),a(t,"x2",s=29+e[18]*e[4]),a(t,"y2",e[3]),a(o,"class","grid-white svelte-ac7ppe"),a(o,"x1",u=29+e[18]*e[4]),a(o,"y1","34"),a(o,"x2",h=29+e[18]*e[4]),a(o,"y2","38"),a(_,"class","axis-label svelte-ac7ppe"),a(_,"x",q=35+e[18]*e[4]),a(_,"y","30"),a(_,"text-anchor","end")},m(f,m){R(f,t,m),R(f,o,m),R(f,_,m),i(_,p),i(_,M)},p(f,m){m&16&&l!==(l=29+f[18]*f[4])&&a(t,"x1",l),m&16&&s!==(s=29+f[18]*f[4])&&a(t,"x2",s),m&8&&a(t,"y2",f[3]),m&16&&u!==(u=29+f[18]*f[4])&&a(o,"x1",u),m&16&&h!==(h=29+f[18]*f[4])&&a(o,"x2",h),m&4&&g!==(g=(100*f[16]).toFixed(0)+"")&&ie(p,g),m&16&&q!==(q=35+f[18]*f[4])&&a(_,"x",q)},d(f){f&&d(t),f&&d(o),f&&d(_)}}}function Ke(e){let t,l=e[19].display_title+"",s,o,u=Math.round(100*e[19].seasonal_average)+"",h,_;return{c(){t=J("text"),s=b(l),o=b(" - "),h=b(u),_=b("%"),this.h()},l(g){t=N(g,"text",{class:!0,x:!0,y:!0,style:!0});var p=v(t);s=k(p,l),o=k(p," - "),h=k(p,u),_=k(p,"%"),p.forEach(d),this.h()},h(){a(t,"class","bar-label svelte-ac7ppe"),a(t,"x","32"),a(t,"y",56+e[18]*24),T(t,"fill","#000"),T(t,"fill-opacity","0"),T(t,"stroke","white"),T(t,"stroke-width","3px"),T(t,"stroke-opacity","0.62")},m(g,p){R(g,t,p),i(t,s),i(t,o),i(t,h),i(t,_)},p(g,p){p&1&&l!==(l=g[19].display_title+"")&&ie(s,l),p&1&&u!==(u=Math.round(100*g[19].seasonal_average)+"")&&ie(h,u)},d(g){g&&d(t)}}}function Le(e){let t=e[5].find(X).text==="#000",l,s,o,u,h,_=e[18]+1+"",g,p,M=e[19].display_title+"",q,f,m=Math.round(100*e[19].seasonal_average)+"",V,j;function X(...c){return e[9](e[19],...c)}let E=t&&Ke(e);function W(...c){return e[10](e[19],...c)}function w(...c){return e[11](e[19],...c)}return{c(){E&&E.c(),l=J("line"),o=J("line"),h=J("text"),g=b(_),p=J("text"),q=b(M),f=b(" - "),V=b(m),j=b("%"),this.h()},l(c){E&&E.l(c),l=N(c,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),v(l).forEach(d),o=N(c,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),v(o).forEach(d),h=N(c,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var y=v(h);g=k(y,_),y.forEach(d),p=N(c,"text",{class:!0,x:!0,y:!0,style:!0});var z=v(p);q=k(z,M),f=k(z," - "),V=k(z,m),j=k(z,"%"),z.forEach(d),this.h()},h(){a(l,"class","bar"),a(l,"x1",29),a(l,"y1",52+e[18]*24),a(l,"x2",s=29+(e[1]-50)*e[19].seasonal_average/Math.max(...e[2])),a(l,"y2",52+e[18]*24),T(l,"stroke","white"),T(l,"stroke-width","20 "),a(o,"class","bar"),a(o,"x1",30),a(o,"y1",52+e[18]*24),a(o,"x2",u=29+(e[1]-50)*e[19].seasonal_average/Math.max(...e[2])-1),a(o,"y2",52+e[18]*24),T(o,"stroke",e[5].find(W).colour),T(o,"stroke-width","18"),a(h,"class","axis-label svelte-ac7ppe"),a(h,"x","25"),a(h,"y",57+e[18]*24),a(h,"text-anchor","end"),a(p,"class","bar-label svelte-ac7ppe"),a(p,"x","32"),a(p,"y",56+e[18]*24),T(p,"fill",e[5].find(w).text)},m(c,y){E&&E.m(c,y),R(c,l,y),R(c,o,y),R(c,h,y),i(h,g),R(c,p,y),i(p,q),i(p,f),i(p,V),i(p,j)},p(c,y){e=c,y&1&&(t=e[5].find(X).text==="#000"),t?E?E.p(e,y):(E=Ke(e),E.c(),E.m(l.parentNode,l)):E&&(E.d(1),E=null),y&7&&s!==(s=29+(e[1]-50)*e[19].seasonal_average/Math.max(...e[2]))&&a(l,"x2",s),y&7&&u!==(u=29+(e[1]-50)*e[19].seasonal_average/Math.max(...e[2])-1)&&a(o,"x2",u),y&1&&T(o,"stroke",e[5].find(W).colour),y&1&&M!==(M=e[19].display_title+"")&&ie(q,M),y&1&&m!==(m=Math.round(100*e[19].seasonal_average)+"")&&ie(V,m),y&1&&T(p,"fill",e[5].find(w).text)},d(c){E&&E.d(c),c&&d(l),c&&d(o),c&&d(h),c&&d(p)}}}function Ye(e){let t,l,s;return{c(){t=J("line"),this.h()},l(o){t=N(o,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-opacity":!0,"stroke-dasharray":!0}),v(t).forEach(d),this.h()},h(){a(t,"class","grid-white svelte-ac7ppe"),a(t,"x1",l=29+e[18]*e[4]),a(t,"y1","34"),a(t,"x2",s=29+e[18]*e[4]),a(t,"y2",e[3]),a(t,"stroke-opacity","0.75"),a(t,"stroke-dasharray","2 2")},m(o,u){R(o,t,u)},p(o,u){u&16&&l!==(l=29+o[18]*o[4])&&a(t,"x1",l),u&16&&s!==(s=29+o[18]*o[4])&&a(t,"x2",s),u&8&&a(t,"y2",o[3])},d(o){o&&d(t)}}}function Ze(e){let t,l,s,o,u=e[16]===1&&Ye(e);return{c(){t=J("line"),u&&u.c(),o=ne(),this.h()},l(h){t=N(h,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-opacity":!0}),v(t).forEach(d),u&&u.l(h),o=ne(),this.h()},h(){a(t,"class","grid svelte-ac7ppe"),a(t,"x1",l=29+e[18]*e[4]),a(t,"y1","34"),a(t,"x2",s=29+e[18]*e[4]),a(t,"y2",e[3]),a(t,"stroke-opacity","0.21")},m(h,_){R(h,t,_),u&&u.m(h,_),R(h,o,_)},p(h,_){_&16&&l!==(l=29+h[18]*h[4])&&a(t,"x1",l),_&16&&s!==(s=29+h[18]*h[4])&&a(t,"x2",s),_&8&&a(t,"y2",h[3]),h[16]===1?u?u.p(h,_):(u=Ye(h),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},d(h){h&&d(t),u&&u.d(h),h&&d(o)}}}function ft(e){let t,l,s,o,u,h,_,g,p,M,q,f,m,V,j,X,E,W,w,c,y,z,de,Q,_e,Z,pe,me,$,ve,ge,ye,G,we,ee,be,ke,Ee,C,K,L,Y,Me,S,se,he,Ae,te;t=new lt({}),Y=new nt({props:{europe:"no"}});let ae=e[2],A=[];for(let n=0;n<ae.length;n+=1)A[n]=Ge(Xe(e,ae,n));let oe=e[0],I=[];for(let n=0;n<oe.length;n+=1)I[n]=Le(Qe(e,oe,n));let re=e[2],P=[];for(let n=0;n<re.length;n+=1)P[n]=Ze(Ue(e,re,n));return{c(){je(t.$$.fragment),l=B(),s=O("main"),o=O("div"),u=O("h1"),h=b("Downtown Recovery Rankings"),_=B(),g=O("p"),p=O("i"),M=b("Updated October, 2023"),q=B(),f=O("p"),m=b("The recovery metrics on these charts are based on a sample of mobile phone data."),V=B(),j=O("p"),X=b("They are computed by counting the number of unique mobile phones in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. Specifically, the rankings below compare the period from the beginning of March to mid-June in 2023 relative to the same period in 2019."),E=B(),W=O("p"),w=b("A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased relative to the 2019 comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),c=B(),y=O("p"),z=b("Our rankings look a little different from our last update for four reasons: (1) we shifted from combining data from two providers (Safegraph and Spectus) to using just one (Spectus); (2) we changed how we define downtown (see methodology for more details); (3) we are standardizing now by MSA instead of state/province (see methodology); and (4) we are now showing data through mid-June instead of end of May."),de=B(),Q=O("p"),_e=b("For more information, read our "),Z=O("a"),pe=b("Methodology"),me=b(" page. Or click "),$=O("a"),ve=b("here"),ge=b(" to download the data shown on this chart."),ye=B(),G=O("p"),we=b("Interested in seeing updated rankings? We are too! But we are seeking financial sponsors to enable us to continue the work. Please contact "),ee=O("a"),be=b("karen.chapple@utoronto.ca"),ke=b(" if you would like to become our inaugural sponsor!"),Ee=B(),C=O("div"),K=O("div"),L=O("div"),je(Y.$$.fragment),Me=B(),S=J("svg");for(let n=0;n<A.length;n+=1)A[n].c();se=ne();for(let n=0;n<I.length;n+=1)I[n].c();he=ne();for(let n=0;n<P.length;n+=1)P[n].c();this.h()},l(n){Fe(t.$$.fragment,n),l=U(n),s=x(n,"MAIN",{class:!0});var D=v(s);o=x(D,"DIV",{class:!0});var r=v(o);u=x(r,"H1",{});var F=v(u);h=k(F,"Downtown Recovery Rankings"),F.forEach(d),_=U(r),g=x(r,"P",{});var Ie=v(g);p=x(Ie,"I",{});var Pe=v(p);M=k(Pe,"Updated October, 2023"),Pe.forEach(d),Ie.forEach(d),q=U(r),f=x(r,"P",{});var De=v(f);m=k(De,"The recovery metrics on these charts are based on a sample of mobile phone data."),De.forEach(d),V=U(r),j=x(r,"P",{});var Oe=v(j);X=k(Oe,"They are computed by counting the number of unique mobile phones in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. Specifically, the rankings below compare the period from the beginning of March to mid-June in 2023 relative to the same period in 2019."),Oe.forEach(d),E=U(r),W=x(r,"P",{});var xe=v(W);w=k(xe,"A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased relative to the 2019 comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),xe.forEach(d),c=U(r),y=x(r,"P",{});var qe=v(y);z=k(qe,"Our rankings look a little different from our last update for four reasons: (1) we shifted from combining data from two providers (Safegraph and Spectus) to using just one (Spectus); (2) we changed how we define downtown (see methodology for more details); (3) we are standardizing now by MSA instead of state/province (see methodology); and (4) we are now showing data through mid-June instead of end of May."),qe.forEach(d),de=U(r),Q=x(r,"P",{});var le=v(Q);_e=k(le,"For more information, read our "),Z=x(le,"A",{href:!0});var Ve=v(Z);pe=k(Ve,"Methodology"),Ve.forEach(d),me=k(le," page. Or click "),$=x(le,"A",{href:!0});var ze=v($);ve=k(ze,"here"),ze.forEach(d),ge=k(le," to download the data shown on this chart."),le.forEach(d),ye=U(r),G=x(r,"P",{});var ue=v(G);we=k(ue,"Interested in seeing updated rankings? We are too! But we are seeking financial sponsors to enable us to continue the work. Please contact "),ee=x(ue,"A",{href:!0});var Re=v(ee);be=k(Re,"karen.chapple@utoronto.ca"),Re.forEach(d),ke=k(ue," if you would like to become our inaugural sponsor!"),ue.forEach(d),r.forEach(d),Ee=U(D),C=x(D,"DIV",{id:!0,class:!0});var fe=v(C);K=x(fe,"DIV",{id:!0,class:!0});var Ce=v(K);L=x(Ce,"DIV",{id:!0,class:!0});var Te=v(L);Fe(Y.$$.fragment,Te),Te.forEach(d),Ce.forEach(d),Me=U(fe),S=N(fe,"svg",{height:!0,width:!0,id:!0,class:!0});var ce=v(S);for(let H=0;H<A.length;H+=1)A[H].l(ce);se=ne();for(let H=0;H<I.length;H+=1)I[H].l(ce);he=ne();for(let H=0;H<P.length;H+=1)P[H].l(ce);ce.forEach(d),fe.forEach(d),D.forEach(d),this.h()},h(){a(Z,"href","/methodology"),a($,"href","/recovery_rankings.csv"),a(ee,"href","karen.chapple@utoronto.ca"),a(o,"class","text"),a(L,"id","options-region"),a(L,"class","svelte-ac7ppe"),a(K,"id","options"),a(K,"class","svelte-ac7ppe"),a(S,"height",e[3]),a(S,"width",e[1]),a(S,"id","chart"),a(S,"class","svelte-ac7ppe"),a(C,"id","chart-wrapper"),a(C,"class","svelte-ac7ppe"),at(()=>e[12].call(C)),a(s,"class","svelte-ac7ppe")},m(n,D){He(t,n,D),R(n,l,D),R(n,s,D),i(s,o),i(o,u),i(u,h),i(o,_),i(o,g),i(g,p),i(p,M),i(o,q),i(o,f),i(f,m),i(o,V),i(o,j),i(j,X),i(o,E),i(o,W),i(W,w),i(o,c),i(o,y),i(y,z),i(o,de),i(o,Q),i(Q,_e),i(Q,Z),i(Z,pe),i(Q,me),i(Q,$),i($,ve),i(Q,ge),i(o,ye),i(o,G),i(G,we),i(G,ee),i(ee,be),i(G,ke),i(s,Ee),i(s,C),i(C,K),i(K,L),He(Y,L,null),i(C,Me),i(C,S);for(let r=0;r<A.length;r+=1)A[r]&&A[r].m(S,null);i(S,se);for(let r=0;r<I.length;r+=1)I[r]&&I[r].m(S,null);i(S,he);for(let r=0;r<P.length;r+=1)P[r]&&P[r].m(S,null);Ae=ot(C,e[12].bind(C)),te=!0},p(n,[D]){if(D&28){ae=n[2];let r;for(r=0;r<ae.length;r+=1){const F=Xe(n,ae,r);A[r]?A[r].p(F,D):(A[r]=Ge(F),A[r].c(),A[r].m(S,se))}for(;r<A.length;r+=1)A[r].d(1);A.length=ae.length}if(D&39){oe=n[0];let r;for(r=0;r<oe.length;r+=1){const F=Qe(n,oe,r);I[r]?I[r].p(F,D):(I[r]=Le(F),I[r].c(),I[r].m(S,he))}for(;r<I.length;r+=1)I[r].d(1);I.length=oe.length}if(D&28){re=n[2];let r;for(r=0;r<re.length;r+=1){const F=Ue(n,re,r);P[r]?P[r].p(F,D):(P[r]=Ze(F),P[r].c(),P[r].m(S,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=re.length}(!te||D&8)&&a(S,"height",n[3]),(!te||D&2)&&a(S,"width",n[1])},i(n){te||(Je(t.$$.fragment,n),Je(Y.$$.fragment,n),te=!0)},o(n){Ne(t.$$.fragment,n),Ne(Y.$$.fragment,n),te=!1},d(n){We(t,n),n&&d(l),n&&d(s),We(Y),Se(A,n),Se(I,n),Se(P,n),Ae()}}}function ct(e,t,l){let s,o,u;Be(e,st,w=>l(8,o=w)),Be(e,ht,w=>l(13,u=w));let h=[],_=[];const g=u;async function p(){try{const c=await(await fetch("../recovery_rankings.csv")).text();l(6,h=it(c))}catch(w){console.error("Error loading CSV data:",w)}}rt(()=>{p()});let M,q=100,f=1;function m(w,c){let y=[];for(let z=0;z<=Math.ceil(w/c);z++)y.push(z*c);return y}let V=[];const j=(w,c)=>c.name===w.region,X=(w,c)=>c.name===w.region,E=(w,c)=>c.name===w.region;function W(){M=this.offsetWidth,l(1,M)}return e.$$.update=()=>{e.$$.dirty&320&&l(0,_=h.filter(w=>o.includes(w.region)).sort((w,c)=>c.seasonal_average-w.seasonal_average)),e.$$.dirty&1&&l(3,q=24*_.length+50),e.$$.dirty&1&&l(7,f=_.length!==0?_[0].seasonal_average:1),e.$$.dirty&128&&l(7,f=f<1?1:f),e.$$.dirty&128&&(f<2?l(2,V=m(f,.2)):l(2,V=m(f,.5))),e.$$.dirty&6&&l(4,s=(M-50)/(V.length-1))},[_,M,V,q,s,g,h,f,o,j,X,E,W]}class gt extends $e{constructor(t){super(),et(this,t,ct,ft,tt,{})}}export{gt as component,vt as universal};
