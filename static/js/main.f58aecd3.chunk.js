(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/tick.7182f328.wav"},,,,function(e,a,t){e.exports=t(42)},,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/win.0ed7f907.wav"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n,r,l,c=t(0),i=t.n(c),o=t(10),u=t.n(o),s=t(6),p=t(7),b=(t(30),function(e){return function(e){return function(a){return e(a)}}}),f=t(20),v=t(9);!function(e){e[e.ON_DRAG_START=0]="ON_DRAG_START",e[e.ON_DRAG=1]="ON_DRAG",e[e.ON_DRAG_STOP=2]="ON_DRAG_STOP",e[e.STEP_BACKWARD=3]="STEP_BACKWARD",e[e.STEP_FORWARD=4]="STEP_FORWARD"}(n||(n={})),function(e){e[e.player1=0]="player1",e[e.player2=1]="player2",e[e.available=2]="available"}(r||(r={})),function(e){e[e.player1=0]="player1",e[e.player2=1]="player2"}(l||(l={}));var d=t(1),y=t(2),h=function(){function e(){Object(d.a)(this,e)}return Object(y.a)(e,null,[{key:"checkWinner",value:function(e,a,t,n){for(var r=e[t].map(function(e){return e===a?1:0}),l=0;l<3;l++)if(4===r.slice(l,l+4).reduce(function(e,a){return e+a}))return!0;var c=[];e.forEach(function(e){return c.push(e[n])});for(var i=c.map(function(e){return e===a?1:0}),o=0;o<4;o++)if(4===i.slice(o,o+4).reduce(function(e,a){return e+a}))return!0;for(var u={col:t,row:n},s={col:t,row:n},p={col:t,row:n},b={col:t,row:n},f=!1,v=!1,d=t;d>0;)d-=1,u.row-1>=0&&!f?(u.col=d,u.row-=1):f=!0,p.row+1<=5&&!v?(p.col=d,p.row+=1):v=!0;for(f=!1,v=!1,d=t;d<6;)d+=1,b.row-1>=0&&!f?(b.col=d,b.row-=1):f=!0,s.row+1<=5&&!v?(s.col=d,s.row+=1):v=!0;for(var y=[],h=0;h<=s.col-u.col;h++)y.push(e[u.col+h][u.row+h]);for(var m=[],O=0;O<=b.col-p.col;O++)m.push(e[p.col+O][p.row-O]);if(y=y.map(function(e){return e===a?1:0}),m=m.map(function(e){return e===a?1:0}),y.length>=4)for(var j=0;j<=y.length-4;j++)if(4===y.slice(j,j+4).reduce(function(e,a){return e+a}))return!0;if(m.length>=4)for(var g=0;g<=m.length-4;g++)if(4===m.slice(g,g+4).reduce(function(e,a){return e+a}))return!0;return!1}}]),e}(),m={history:[[[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available],[r.available,r.available,r.available,r.available,r.available,r.available]]],step:0,currentPlayer:l.player1,currentX:0,dragging:!1,winner:null,showPrompt:!0,playTickSound:!1};var O=Object(p.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0,t=a.payload,c=e.currentPlayer,i=e.history,o=e.step;switch(a.type){case n.ON_DRAG_START:return Object(v.a)({},e,{dragging:!0,showPrompt:!1,playTickSound:!1});case n.ON_DRAG:return Object(v.a)({},e,{currentX:t.data.x,playTickSound:!1});case n.ON_DRAG_STOP:var u=t.data.x,s=i[o].map(function(e){return Object(f.a)(e)}),p=Math.round(u/100),b=s[p].lastIndexOf(r.available);if(-1===b)return Object(v.a)({},e,{dragging:!1,playTickSound:!1});s[p][b]=c;var d=[];i.forEach(function(e,a){a<=o&&d.push(e)}),d.push(s);var y=h.checkWinner(s,c,p,b);return Object(v.a)({},e,{history:d,step:o+1,dragging:!1,currentPlayer:c===l.player1?l.player2:l.player1,winner:y?c:null,playTickSound:!y});case n.STEP_BACKWARD:return o>0?Object(v.a)({},e,{step:o-1,currentPlayer:c===l.player1?l.player2:l.player1}):e;case n.STEP_FORWARD:return o+1<i.length?Object(v.a)({},e,{step:o+1,currentPlayer:c===l.player1?l.player2:l.player1}):e;default:return e}}});t(31);var j=t(4),g=t(3),w=t(5),k=(t(32),t(33),t(34),t(35),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.takenBy,t=e.highlight,n=a===r.available?"":a===r.player1?"red":"yellow";return i.a.createElement("div",{className:"slot ".concat(n," ").concat(t?"highlight":"")})}}]),a}(i.a.PureComponent)),E=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){for(var e=this.props,a=e.column,t=e.history,n=e.step,l=e.dragging,c=e.currentX,o=t[n][a],u=l&&Math.round(c/100)===a?o.lastIndexOf(r.available):null,s=[],p=0;p<6;p++)s.push(i.a.createElement(k,{takenBy:o[p],key:"slot-".concat(a,"-").concat(p),highlight:u===p}));return i.a.createElement("div",{className:"column"},s)}}]),a}(i.a.PureComponent),P=Object(s.b)(function(e){return{history:e.game.history,step:e.game.step,dragging:e.game.dragging,currentX:e.game.currentX}})(E),S=t(19),R=t.n(S),A=(t(36),t(37),function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(j.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).soundRef=Object(c.createRef)(),t}return Object(w.a)(a,e),Object(y.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){this.props.playTickSound&&e.currentPlayer!==this.props.currentPlayer&&this.soundRef.current.play()}},{key:"render",value:function(){var e=this.props.currentPlayer===l.player1?"red":"yellow";return i.a.createElement("div",{className:"".concat(e," piece")},i.a.createElement("audio",{autoPlay:!0,ref:this.soundRef,src:t(17)}))}}]),a}(i.a.PureComponent)),T=Object(s.b)(function(e){return{currentPlayer:e.game.currentPlayer,playTickSound:e.game.playTickSound}})(A),_=function(){return{type:n.STEP_BACKWARD}},N=function(){return{type:n.STEP_FORWARD}},D=(t(38),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"prompt"},i.a.createElement("div",{className:"cursor"}),i.a.createElement("div",{className:"prompt-message"},i.a.createElement("p",null,"Drag to play")))}}]),a}(i.a.PureComponent)),C=function(e){return{onStart:function(){e({type:n.ON_DRAG_START})},onDrag:function(a,t){e(function(e,a){return{type:n.ON_DRAG,payload:{data:a}}}(0,t))},onStop:function(a,t){e(function(e,a){return{type:n.ON_DRAG_STOP,payload:{data:a}}}(0,t))}}},G=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.winner,t=e.showPrompt;return i.a.createElement("div",{className:"dragrow"},t&&i.a.createElement(D,null),i.a.createElement(R.a,Object.assign({},C(this.props.dispatch),{grid:[100,100],bounds:"parent",disabled:null!==a}),i.a.createElement("div",{className:"draggableDiv"},i.a.createElement(T,null))))}}]),a}(i.a.PureComponent),W=Object(s.b)(function(e){return{winner:e.game.winner,showPrompt:e.game.showPrompt}})(G),B=(t(39),function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props.winner,a=null===e?null:e===l.player1?"red":"yellow";return null===e?null:i.a.createElement("h1",{className:"".concat(a,"-font message")},"Player ".concat(e+1," wins!"),i.a.createElement("audio",{autoPlay:!0,src:t(40)}))}}]),a}(i.a.PureComponent)),x=Object(s.b)(function(e){return{winner:e.game.winner}})(B),F=(t(41),function(e){var a="arrow-".concat(e.direction);return i.a.createElement("div",{className:a,onClick:e.handleClick})});F.defaultProps={handleClick:function(){}};var X=F,K=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){for(var e=this.props,a=e.playTickSound,n=e.onStepBackwardClick,r=e.onStepForwardClick,l=[],c=0;c<7;c++)l.push(i.a.createElement(P,{column:c,key:"column-".concat(c)}));return i.a.createElement("div",{className:"container"},i.a.createElement(W,null),i.a.createElement("div",null,l),i.a.createElement("div",{className:"arrow-container"},i.a.createElement(X,{direction:"left",handleClick:n}),i.a.createElement(X,{direction:"right",handleClick:r})),i.a.createElement(x,null),a&&i.a.createElement("audio",{autoPlay:!0,src:t(17)}))}}]),a}(i.a.PureComponent),I=Object(s.b)(function(e){return{playTickSound:e.game.playTickSound}},function(e){return Object(p.bindActionCreators)({onStepBackwardClick:_,onStepForwardClick:N},e)})(K),M=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return i.a.createElement(I,null)}}]),a}(i.a.PureComponent),J=function(e){function a(){return Object(d.a)(this,a),Object(j.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M,null))}}]),a}(i.a.PureComponent),U=function(e){var a=Object(p.applyMiddleware)(b);return Object(p.createStore)(O,e,a)}();u.a.render(i.a.createElement(s.a,{store:U},i.a.createElement(J,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f58aecd3.chunk.js.map