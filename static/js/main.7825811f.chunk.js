(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/tick.7182f328.wav"},,,,function(e,a,t){e.exports=t(41)},,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/win.0ed7f907.wav"},function(e,a,t){"use strict";t.r(a);var n,r,l,c=t(0),i=t.n(c),u=t(9),o=t.n(u),s=t(6),b=t(7),p=(t(30),function(e){return function(e){return function(a){return e(a)}}}),f=t(20),v=t(11);!function(e){e[e.ON_DRAG_START=0]="ON_DRAG_START",e[e.ON_DRAG=1]="ON_DRAG",e[e.ON_DRAG_STOP=2]="ON_DRAG_STOP"}(n||(n={})),function(e){e[e.player1=0]="player1",e[e.player2=1]="player2",e[e.available=2]="available"}(r||(r={})),function(e){e[e.player1=0]="player1",e[e.player2=1]="player2"}(l||(l={}));var d=t(1),O=t(2),m=function(){function e(){Object(d.a)(this,e)}return Object(O.a)(e,null,[{key:"checkWinner",value:function(e,a,t,n){for(var r=e[t].map(function(e){return e===a?1:0}),l=0;l<3;l++)if(4===r.slice(l,l+4).reduce(function(e,a){return e+a}))return!0;var c=[];e.forEach(function(e){return c.push(e[n])});for(var i=c.map(function(e){return e===a?1:0}),u=0;u<4;u++)if(4===i.slice(u,u+4).reduce(function(e,a){return e+a}))return!0;for(var o={col:t,row:n},s={col:t,row:n},b={col:t,row:n},p={col:t,row:n},f=!1,v=!1,d=t;d>0;)d-=1,o.row-1>=0&&!f?(o.col=d,o.row-=1):f=!0,b.row+1<=5&&!v?(b.col=d,b.row+=1):v=!0;for(f=!1,v=!1,d=t;d<6;)d+=1,p.row-1>=0&&!f?(p.col=d,p.row-=1):f=!0,s.row+1<=5&&!v?(s.col=d,s.row+=1):v=!0;for(var O=[],m=0;m<=s.col-o.col;m++)O.push(e[o.col+m][o.row+m]);for(var y=[],h=0;h<=p.col-b.col;h++)y.push(e[b.col+h][b.row-h]);if(O=O.map(function(e){return e===a?1:0}),y=y.map(function(e){return e===a?1:0}),O.length>=4)for(var j=0;j<=O.length-4;j++)if(4===O.slice(j,j+4).reduce(function(e,a){return e+a}))return!0;if(y.length>=4)for(var g=0;g<=y.length-4;g++)if(4===y.slice(g,g+4).reduce(function(e,a){return e+a}))return!0;return!1}}]),e}(),y={data:[[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available]],currentPlayer:l.player1,currentX:0,dragging:!1,winner:null,showPrompt:!0,playTickSound:!1};var h=Object(b.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0,t=a.payload;switch(a.type){case n.ON_DRAG_START:return Object(v.a)({},e,{dragging:!0,showPrompt:!1,playTickSound:!1});case n.ON_DRAG:return Object(v.a)({},e,{currentX:t.data.x,playTickSound:!1});case n.ON_DRAG_STOP:var c=a.payload.data.x,i=e.currentPlayer,u=Object(f.a)(e.data),o=Math.round(c/100),s=u[o].lastIndexOf(r.available);if(-1===s)return Object(v.a)({dragging:!1},e,{playTickSound:!1});u[o][s]=i;var b=m.checkWinner(u,i,o,s);return Object(v.a)({},e,{data:u,dragging:!1,currentPlayer:i===l.player1?l.player2:l.player1,winner:b?i:null,playTickSound:!b});default:return e}}});t(31);var j=t(4),g=t(3),w=t(5),k=(t(32),t(33),t(34),t(35),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this.props,a=e.takenBy,t=e.highlight,n=a===r.available?"":a===r.player1?"red":"yellow";return i.a.createElement("div",{className:"slot ".concat(n," ").concat(t?"highlight":"")})}}]),a}(i.a.PureComponent)),P=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){for(var e=this.props,a=e.column,t=e.data,n=e.dragging,l=e.currentX,c=t[a],u=n&&Math.round(l/100)===a?c.lastIndexOf(r.available):null,o=[],s=0;s<6;s++)o.push(i.a.createElement(k,{takenBy:c[s],key:"slot-".concat(a,"-").concat(s),highlight:u===s}));return i.a.createElement("div",{className:"column"},o)}}]),a}(i.a.PureComponent),E=Object(s.b)(function(e){return{data:e.game.data,dragging:e.game.dragging,currentX:e.game.currentX}})(P),N=t(19),T=t.n(N),S=(t(36),t(37),function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(j.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).soundRef=Object(c.createRef)(),t}return Object(w.a)(a,e),Object(O.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){this.props.playTickSound&&e.currentPlayer!==this.props.currentPlayer&&this.soundRef.current.play()}},{key:"render",value:function(){var e=this.props.currentPlayer===l.player1?"red":"yellow";return i.a.createElement("div",{className:"".concat(e," piece")},i.a.createElement("audio",{autoPlay:!0,ref:this.soundRef,src:t(17)}))}}]),a}(i.a.PureComponent)),R=Object(s.b)(function(e){return{currentPlayer:e.game.currentPlayer,playTickSound:e.game.playTickSound}})(S),_=(t(38),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"prompt"},i.a.createElement("div",{className:"cursor"}),i.a.createElement("div",{className:"prompt-message"},i.a.createElement("p",null,"Drag to play")))}}]),a}(i.a.PureComponent)),A=function(e){return{onStart:function(){e({type:n.ON_DRAG_START})},onDrag:function(a,t){e(function(e,a){return{type:n.ON_DRAG,payload:{data:a}}}(0,t))},onStop:function(a,t){e(function(e,a){return{type:n.ON_DRAG_STOP,payload:{data:a}}}(0,t))}}},D=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this.props,a=e.winner,t=e.showPrompt;return i.a.createElement("div",{className:"dragrow"},t&&i.a.createElement(_,null),i.a.createElement(T.a,Object.assign({},A(this.props.dispatch),{grid:[100,100],bounds:"parent",disabled:null!==a}),i.a.createElement("div",{className:"draggableDiv"},i.a.createElement(R,null))))}}]),a}(i.a.PureComponent),G=Object(s.b)(function(e){return{winner:e.game.winner,showPrompt:e.game.showPrompt}})(D),C=(t(39),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this.props.winner,a=null===e?null:e===l.player1?"red":"yellow";return null===e?null:i.a.createElement("h1",{className:"".concat(a,"-font message")},"Player ".concat(e+1," wins!"),i.a.createElement("audio",{autoPlay:!0,src:t(40)}))}}]),a}(i.a.PureComponent)),x=Object(s.b)(function(e){return{winner:e.game.winner}})(C),X=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){for(var e=this.props.playTickSound,a=[],n=0;n<7;n++)a.push(i.a.createElement(E,{column:n,key:"column-".concat(n)}));return i.a.createElement("div",{className:"container"},i.a.createElement(G,null),a,i.a.createElement(x,null),e&&i.a.createElement("audio",{autoPlay:!0,src:t(17)}))}}]),a}(i.a.PureComponent),B=Object(s.b)(function(e){return{playTickSound:e.game.playTickSound}})(X),I=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){return i.a.createElement(B,null)}}]),a}(i.a.PureComponent),M=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null))}}]),a}(i.a.PureComponent),J=function(e){var a=Object(b.applyMiddleware)(p);return Object(b.createStore)(h,e,a)}();o.a.render(i.a.createElement(s.a,{store:J},i.a.createElement(M,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.7825811f.chunk.js.map