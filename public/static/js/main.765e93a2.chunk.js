(this.webpackJsonplolstats_web=this.webpackJsonplolstats_web||[]).push([[0],{106:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(8),c=n.n(o),i=(n(80),n(49)),l=n(13),s=n.n(l),m=n(135),u=n(136),d=n(132),h=n(110),f=n(131),g=n(138),p=n(137),v=n(133),w=n(134),E=s()((function(e){return{root:{padding:"8px"},currPlayerRootWin:{background:"linear-gradient(45deg, #64b5f6 0%, white 70%)",padding:"8px"},currPlayerRootLoss:{background:"linear-gradient(45deg, #e57373 0%, white 70%)",padding:"8px"},currPlayer:{background:function(e){return e.background},padding:"8px"}}}));function b(e){var a=E({background:e.isCurrPlayer?e.win?"linear-gradient(45deg, #64b5f6 0%, white 70%)":"linear-gradient(45deg, #e57373 0%, white 70%)":null}),n=(100*e.performance).toFixed(1)+"%";return r.a.createElement("div",{className:a.currPlayer},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:4,sm:4},r.a.createElement(d.a,{variant:"body1"},e.summoner)),r.a.createElement(f.a,{item:!0,xs:4,sm:4},r.a.createElement(d.a,{variant:"body1"},e.champion)),r.a.createElement(f.a,{item:!0,xs:4,sm:4},r.a.createElement(d.a,{variant:"body1"},n))))}var S=s()((function(e){return{root:{}}}));function y(e){var a=S(),n=e.team.players,t=e.team.win,o=n.map((function(a){return r.a.createElement(b,{key:a.summoner,summoner:a.summoner,champion:a.champion,performance:a.performance,isCurrPlayer:e.searchSummoner===a.summoner,win:t})}));return r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{variant:"h5"},e.name," - ",t?"Win":"Loss"),o)}var x=s()((function(e){return{root:{}}}));function k(e){var a=x();return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(d.a,{variant:"h3"},e.win?"Victory":"Defeat"),r.a.createElement(f.a,{container:!0,spacing:4},r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(y,{team:e.redTeam,name:"Red Team",searchSummoner:e.searchSummoner})),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(y,{team:e.blueTeam,name:"Blue Team",searchSummoner:e.searchSummoner}))))))}var N=s()((function(e){return{root:{},matchContainer:{padding:"10px"}}}));function T(e){var a=N(),n=e.matches.map((function(n){for(var t=!1,o=0;o<n.redTeam.players.length;++o)if(n.redTeam.players[o].summoner===e.searchSummoner){t=!0;break}return r.a.createElement("div",{key:n.id,className:a.matchContainer},r.a.createElement(k,{win:t&&n.redTeam.win||!t&&!n.redTeam.win,searchSummoner:e.searchSummoner,redTeam:n.redTeam,blueTeam:n.blueTeam}))}));return r.a.createElement("div",null,n)}var W=s()((function(e){return{root:{},header:{margin:"40px auto"},title:{},textField:{width:"100%"},contentView:{},summonerStatsPaper:{},loadingView:{},pastSearchButton:{}}}));function O(){var e,a=W(),n=Object(t.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1],s=Object(t.useState)(!1),v=Object(i.a)(s,2),w=v[0],E=v[1],b=Object(t.useState)(null),S=Object(i.a)(b,2),y=S[0],x=S[1];function k(){if(0!==c.length){var e=c,a=JSON.parse(localStorage.getItem("searchHistory"));(a=a||{})[e]?a[e]+=1:a[e]=1,localStorage.setItem("searchHistory",JSON.stringify(a)),E(!0);var n=new URLSearchParams;n.append("summoner",encodeURIComponent(c)),n.append("num_matches","5");var t=window.location.protocol+"//"+window.location.host+"/analyze?".concat(n.toString());fetch(t).then((function(e){return e.json()})).then((function(a){a.currSearchName=e,x(a)})).catch((function(e){x(null),console.log("Got error: "+e)})).finally((function(){E(!1)}))}}if(w)e=r.a.createElement(m.a,{className:a.loadingView,maxWidth:"xs"},r.a.createElement(u.a,{variant:"indeterminate"}),r.a.createElement(d.a,{variant:"caption"},"Loading..."));else if(y)e=r.a.createElement(h.a,{className:a.summonerStatsPaper},r.a.createElement(T,{matches:y.matches,searchSummoner:y.currSearchName}));else{var N=JSON.parse(localStorage.getItem("searchHistory"));N=N||{};var O=Object.entries(N).sort((function(e,a){return a[1]-e[1]})).map((function(e){return e[0]})).slice(0,5).map((function(e){return r.a.createElement(f.a,{item:!0,xs:"auto",key:e},r.a.createElement(g.a,{className:a.pastSearchButton,variant:"outlined",onClick:function(){l(e),k()}},e))}));e=r.a.createElement(m.a,{maxWidth:"sm"},r.a.createElement(f.a,{container:!0,spacing:3},O))}return r.a.createElement("div",{className:a.root},r.a.createElement(m.a,{className:a.header,maxWidth:"sm"},r.a.createElement(d.a,{className:a.title,variant:"h1",align:"center"},"LOLStats"),r.a.createElement(p.a,{className:a.textField,label:"Summoner Name",value:c,autoFocus:!0,onChange:function(e){l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(c.length>0&&k(),e.preventDefault())}})),r.a.createElement(m.a,{className:a.contentView,maxWidth:"xl"},e))}var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(105);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");P?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(a,e)}))}}()},75:function(e,a,n){e.exports=n(106)},80:function(e,a,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.765e93a2.chunk.js.map