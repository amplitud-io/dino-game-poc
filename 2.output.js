(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(t,e,n){"use strict";n.r(e);const{applyVelocityToPosition:a,Velocity:i}=n(54);class o{constructor(t,e,n,a){this._movements_array=t,this._position=n,this._velocity=a,this._movement_delay=e}clone(){return new o([...this._movements_array],this._movement_delay,this._position.clone(),this._velocity.clone())}}class r{constructor(t){this._character_meta=t,this._tick_counter=0,this._movement_delay_counter=0}tick(){this._movement_delay_counter++,this._movement_delay_counter>this._character_meta._movement_delay&&(this._movement_delay_counter=0,this._tick_counter+=1,this.set_position(a(this._character_meta._position,this._character_meta._velocity)))}get_layout(){return this._character_meta._movements_array[this._tick_counter%this._character_meta._movements_array.length]}get_position(){return this._character_meta._position}set_position(t){this._character_meta._position=t}get_velocity(){return this._character_meta._velocity}}class s{constructor(){this._character_array=[]}add_character(t,e){return this._character_array.push([t,e]),this}}class l{constructor(t,e,n){this._allocator_character_array=t,this._min_gap=e,this._gap_random_max=n,this._pending_gap=0}tick(){this._pending_gap-=1}get_character(){if(this._pending_gap>0)return!1;const t=Math.random();for(let e=0;e<this._allocator_character_array._character_array.length;e++)if(t>=this._allocator_character_array._character_array[e][1]){const t=new r(this._allocator_character_array._character_array[e][0].clone());return this._pending_gap=this._min_gap+Math.ceil(Math.random()*this._gap_random_max),t}}}var d=n(73),u=n(54),c=n(74),p=n(87);const y=document.getElementById("board"),_=y.getContext("2d"),m=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{components:[{internalType:"bytes32",name:"name",type:"bytes32"},{internalType:"bytes32",name:"dataType",type:"bytes32"}],internalType:"struct Attribute[]",name:"_attributes",type:"tuple[]"},{internalType:"string",name:"_imagesBaseURI",type:"string"},{internalType:"string[]",name:"_strings",type:"string[]"},{internalType:"uint256[]",name:"_defaultValues",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"attrMap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"attributeList",outputs:[{internalType:"bytes32",name:"name",type:"bytes32"},{internalType:"bytes32",name:"dataType",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"defaultValues",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"imagesBaseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"stringList",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"tokenDataOf",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"tokenMap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],internalType:"struct AttributeUpdate[]",name:"_updates",type:"tuple[]"}],name:"updateAttributes",outputs:[],stateMutability:"nonpayable",type:"function"}];let h,w,f,g,T,b=!1;let x=1e3;const v=new u.Velocity(0,-7);let M=20;new c.Provider("https://testnet.era.zksync.dev");screen.width<x&&(x=screen.width,v.add(new u.Velocity(0,2)),M=50);const P=new u.Velocity(-11,0),k=new u.Velocity(-.6,0),S=new u.Position(200,10);let A=new u.Velocity(0,0),V=!0,F=null,I=!0,N=null,C=0,E=null,O=null,U=null,R=new u.Velocity(0,-.1),j=null,B=null,D={1:"#535353",2:"#f1c232",3:"#FF7600",4:"#f44336",5:"#6a040f"},L=null,q=null,J=[new l((new s).add_character(new o([d.stone_layout.large],0,new u.Position(240,x),v),.9).add_character(new o([d.stone_layout.medium],0,new u.Position(243,x),v),.75).add_character(new o([d.stone_layout.small],0,new u.Position(241,x),v),.6),2,0),new l((new s).add_character(new o([d.cloud_layout],0,new u.Position(100,x),new u.Velocity(0,-1)),.9).add_character(new o([d.cloud_layout],0,new u.Position(135,x),new u.Velocity(0,-1)),.85).add_character(new o([d.cloud_layout],0,new u.Position(150,x),new u.Velocity(0,-1)),.8),350,300),new l((new s).add_character(new o([d.star_layout.small_s1],0,new u.Position(90,x),new u.Velocity(0,-.3)),.9).add_character(new o([d.star_layout.small_s2],0,new u.Position(125,x),new u.Velocity(0,-.3)),.85).add_character(new o([d.star_layout.small_s1],0,new u.Position(140,x),new u.Velocity(0,-.3)),.8),350,250),new l((new s).add_character(new o([d.pit_layout.large],0,new u.Position(223,x),v),.97).add_character(new o([d.pit_layout.up],0,new u.Position(227,x),v),.9).add_character(new o([d.pit_layout.down],0,new u.Position(230,x),v),.85),100,50)],W=[new l((new s).add_character(new o([d.cactus_layout.small_d1],0,new u.Position(201,x),v),.8).add_character(new o([d.cactus_layout.small_s1],0,new u.Position(201,x),v),.7).add_character(new o([d.cactus_layout.small_s2],0,new u.Position(201,x),v),.6).add_character(new o([d.cactus_layout.medium_d1],0,new u.Position(193,x),v),.5).add_character(new o([d.cactus_layout.medium_s1],0,new u.Position(193,x),v),.4).add_character(new o([d.cactus_layout.medium_s2],0,new u.Position(193,x),v),.3),M,100),new l((new s).add_character(new o(d.bird_layout.fly,0,new u.Position(170,x),v.clone().add(new u.Velocity(0,-1))),.98).add_character(new o(d.bird_layout.fly,0,new u.Position(190,x),v.clone().add(new u.Velocity(0,-1))),.9),500,50)];function G(t){return t>=400?5:t>=300?4:t>=200?3:t>=100?2:1}function H(t,e){for(let n=0;n<t.length;n++)for(let a=0;a<t[n].length;a++)if(B.layout[t[n][a]]){(t===d.dino_layout.stand||t===d.dino_layout.jump||t===d.dino_layout.run[0]||t===d.dino_layout.run[1]||t===d.dino_layout.dead)&&2===t[n][a]?_.fillStyle=D[O]:_.fillStyle=B.layout[t[n][a]];let i=e[1]+2*a,o=e[0]+2*n;_.fillRect(i,o,2,2)}}function Y(){if(C+=.15,C>1){C-=1,N++;let t=Math.max(N,E);U=Math.max(0,Math.floor(t/100))+1,O=G(t),j=new u.Velocity(0,-1*U)}_.clearRect(0,0,y.width,y.height),_.fillStyle=B.background,_.fillRect(0,0,y.width,y.height),_.beginPath();for(let t=0;t<y.width;t++)_.fillStyle=B.road,_.fillRect(0,232,y.width,.4);if(_.font="20px Arcade",_.fillStyle=B.score_text,_.fillText("H I G H         "+Math.floor(E).toString().padStart(4,"0").split("").join(" "),y.width-200,20),_.font="20px Arcade",_.fillStyle=B.score_text,_.fillText(`L E V E L    ${O.toString().split("").join(" ")} `,y.width-200,40),_.font="20px Arcade",_.fillStyle=B.score_text,_.fillText(`S P E E D    ${U.toString().split("").join(" ")} `,y.width-200,60),_.font="20px Arcade",_.fillStyle=B.score_text,_.fillText("S C O R E     "+N.toString().padStart(4,"0").split("").join(" "),y.width-200,80),I)return I=!1,H(d.dino_layout.stand,q[0].get_position().get()),F=Date.now(),_.textBaseline="middle",_.textAlign="center",_.font="25px Arcade",_.fillStyle=B.info_text,void _.fillText("J     U     M     P             T     O             S     T     A     R     T",y.width/2,y.height/2-50);[[J,L],[W,q]].forEach(t=>{for(let e=0;e<t[0].length;e++){const n=t[0][e];n.tick();const a=n.get_character();a&&(a.get_velocity().add(j),t[1].push(a))}}),[L,q].forEach((t,e)=>{for(let n=t.length-1;n>=0;n--){1==e&&0==n||N%100!=0||t[n].get_velocity().add(R),t[n].tick();let a=t[n].get_layout();V||1!=e||0!=n||(a=d.dino_layout.stand);const i=t[n].get_position().get();i[1]<-150?t.splice(n,1):H(a,i)}});let t=q[0],e=t.get_position(),n=t.get_layout();for(let t=q.length-1;t>0;t--){const a=q[t].get_position(),i=q[t].get_layout();if(Object(u.isCollided)(e.get()[0],e.get()[1],n.length,n[0].length,a.get()[0],a.get()[1],i.length,i[0].length)){if(_.textBaseline="middle",_.textAlign="center",_.font="25px Arcade",_.fillStyle=B.info_text,_.fillText("G     A     M     E             O     V     E     R",y.width/2,y.height/2-50),H(d.retry_layout,new u.Position(y.height/2-d.retry_layout.length,y.width/2-d.retry_layout[0].length).get()),H(d.dino_layout.dead,q[0].get_position().get()),F=Date.now(),T.attributes[1].value<N){b=!0,$("#upgradeNFTModal").off().on("hidden.bs.modal",(function(){b=!1}));let t=$("#upgradeNFTModal").find("[data-upgrade-btn]");$("#upgradeNFTModal").find(".text-normal").show(),$("#upgradeNFTModal").find(".text-success").hide(),$("#upgradeNFTModal").find(".text-danger").hide(),t.text("Upgrade now"),t.off().on("click",(async function(){$("#upgradeNFTModal").find("button").prop("disabled",!0),$(this).text("Upgrading..."),$("#upgradeNFTModal").find(".text-danger").hide();try{let t=[];t[0]=[0,String(O)],t[1]=[1,String(O-1)],t[2]=[2,String(N)],t[3]=[3,String(O)],t[4]=[4,String(U)];const e=await g.updateAttributes(t);await e.wait(),$("#upgradeNFTModal").find(".text-normal").hide(),$("#upgradeNFTModal").find(".text-success").show(),$(this).text("Close"),$(this).off().on("click",(function(){$("#upgradeNFTModal").modal("hide")}))}catch(t){if(console.log(t),$(this).text("Upgrade now"),4001===t.code||String(t).indexOf("User denied transaction signature.")>=0)return;$("#upgradeNFTModal").find(".text-danger").show()}finally{$("#upgradeNFTModal").find("button").prop("disabled",!1)}})),$("#upgradeNFTModal").modal("show")}return}}t.set_position(Object(u.applyVelocityToPosition)(t.get_position(),A)),t.get_position().get()[0]>S.get()[0]&&(t.set_position(S.clone()),V=!0),A.sub(k),requestAnimationFrame(Y)}async function z(){if(window.ethereum){const e="0x118",n=async()=>await window.ethereum.request({method:"eth_chainId"})==e,a=async()=>{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]}),window.location.reload()};if(await n()){try{let t=await window.ethereum.request({method:"eth_requestAccounts"});h=new Web3(window.ethereum),$("#wallet").html("Wallet: "+t[0].substring(0,6)+"..."+t[0].substring(t[0].length-6)),w=t[0]}catch(t){return void $("#container").html("<h1>Please connect your wallet!</h1>").show()}async function t(){$("#container").show(),async function t(){try{let t=await g.tokenDataOf(w);T=JSON.parse(t)}catch(t){return console.log(t),void $("#container").html("<h2 class='text-danger text-center'>There was an unexpected error.<br/>Please refresh and try again.</h2>")}B=d.themes.classic,F=!1,N=0,C=0,E=T.attributes[1].value||0,U=Math.max(0,Math.floor(E/100))+1,O=G(E),j=new u.Velocity(0,-1*U),y.height=300,y.width=x,L=[],q=[new r(new o(d.dino_layout.run,4,S.clone(),new u.Velocity(0,0)))],document.ontouchstart=()=>{b||(F&&Date.now()-F>1e3?t():V&&(V=!1,A=P.clone()))},document.body.onclick=()=>{F&&!b&&document.ontouchstart()},document.body.onkeydown=t=>{32!==t.keyCode&&" "!==t.key||document.ontouchstart()},Y()}()}try{f=new c.Web3Provider(window.ethereum).getSigner(),g=new c.Contract("0x45e82B469d941Ee1573a71a31327EeB488CeB301",m,f);let e=await g.balanceOf(w);console.log(e),e.eq(p.a.from(0))?($("#minting").html("You don't have a dino NFT.<br/> <button class='btn btn-primary mt-2' href='javascript:void(0)'>Click here</a> to mint one").show(),$("#minting").find("button").off().on("click",(async function(){$("#minting").html("Minting...");try{const e=await g.mint();await e.wait(),t()}catch(t){console.log(t),4001===t.code||String(t).indexOf("User denied transaction signature.")>=0?$("#container").html("<h2 class='text-danger text-center'>You need a dino NFT to play this game.<br/>Please refresh and try again.</h2>"):$("#container").html("<h2 class='text-danger text-center'>There was an unexpected error.<br/>Please refresh and try again.</h2>")}finally{$("#minting").hide(),$("#container").show()}}))):t()}catch(t){console.log(t),$("#container").html("<h1 class='text-danger text-center'>There was an unexpected error.<br/>Please refresh and try again.</h1>")}}else await a()}else $("#container").html("<h1>Please install Metamask!</h1>").show()}$(document).ready((function(){document.fonts.load('1rem "Arcade"').then(()=>{z()})}))},54:function(t,e,n){"use strict";n.r(e),n.d(e,"Position",(function(){return a})),n.d(e,"Velocity",(function(){return i})),n.d(e,"applyVelocityToPosition",(function(){return o})),n.d(e,"isCollided",(function(){return r}));class a{constructor(t,e){this._y_pos=t,this._x_pos=e}get(){return[this._y_pos,this._x_pos]}clone(){return new a(this._y_pos,this._x_pos)}}class i{constructor(t,e){this._y_speed=t,this._x_speed=e}get(){return[this._y_speed,this._x_speed]}sub(t){return this._y_speed-=t._y_speed,this._x_speed-=t._x_speed,this}add(t){return this._y_speed+=t._y_speed,this._x_speed+=t._x_speed,this}clone(){return new i(this._y_speed,this._x_speed)}}function o(t,e){return new a(t._y_pos+e._y_speed,t._x_pos+e._x_speed)}function r(t,e,n,a,i,o,r,s){return t<i+r&&t+n>i&&e+a>o&&e<o+s}},73:function(t,e){const n=[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,2,1,0,0,0,0,0,0,0,0]],a=[[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,4,4,0,4,4,4,0,0,0,0,0,0,0,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0,0,0,0,0],[0,0,4,4,4,4,0,0,4,4,4,4,0,0,0,0,0,0],[0,4,4,4,4,4,4,0,4,4,4,4,4,0,0,0,0,0],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0]],i=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0],[0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0]];CACTUS_SMALL_D1=[[0,0,0,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1,1,1,2,1,1,2,2,2,2,1,1,1,1],[0,0,0,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[1,1,1,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2],[1,1,1,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0]];t.exports={dino_layout:{stand:n,dead:[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,1,1,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,1,2,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,1,1,1,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,2,2,1,0,0,0,0,0,0,0,0]],run:[[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,0,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,0,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,2,1,1,2,2,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,1,0,0],[2,1,0,0,0,0,1,1,2,2,2,2,2,2,1,1,1,1,1,0,0],[2,1,0,0,0,1,1,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0],[2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0],[0,1,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,2,2,1,1,2,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,2,2,1,1,2,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,2,2,1,0,0,0,0,0,0,0,0]]],jump:n},road_layout:[[2,2,2]],cloud_layout:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,3,3,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,3,0,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,3,3,0,0,0],[0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],[0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3],[0,3,3,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[3,3,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]],stone_layout:{large:[[2,2,2,2]],medium:[[2,2]],small:[[2]]},pit_layout:{large:[[1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1]],up:[[1,2,2,2,2,2,1,1,1,1,2,2,2,1],[2,2,1,1,1,1,2,2,2,2,1,1,2,2],[2,1,1,1,1,1,1,1,1,1,1,1,1,2]],down:[[2,1,1,1,1,1,1,1,1,1,1,1,1,2],[2,2,1,1,1,2,2,2,2,2,1,1,1,2],[1,2,2,2,2,1,1,1,1,1,2,2,2,1]]},bird_layout:{fly:[a,a,a,a,a,a,a,i,i,i,i,i,i,i]},cactus_layout:{small_s1:[[0,0,0,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[1,1,1,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,2,1,1,1],[1,2,2,2,2,2,2,2,1,1,0,0],[1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],small_s2:[[1,1,1,1,1,2,2,1,1,0,0,0],[1,2,1,1,2,2,2,2,1,1,1,1],[2,2,2,1,2,2,2,2,1,1,2,1],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,1,2,2,2],[1,1,2,2,2,2,2,2,1,2,2,2],[0,1,1,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,2,2,2,2],[0,0,0,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],small_d1:CACTUS_SMALL_D1,medium_s1:[[0,0,0,1,1,2,2,1,1,1,1,1],[0,0,0,1,2,2,2,2,1,1,2,1],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[0,0,0,1,2,2,2,2,1,2,2,2],[1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,2,1,1,1],[1,2,2,2,2,2,2,2,1,1,0,0],[1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],medium_s2:[[1,1,1,1,1,2,2,1,1,0,0,0],[1,2,1,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,0,0,0],[2,2,2,1,2,2,2,2,1,1,2,1],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,1,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2],[1,1,1,2,2,2,2,2,2,2,2,2],[0,0,1,1,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0]],medium_d1:[[0,0,0,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,1,1,1],[1,2,1,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,1,1,2,1,1,2,2,2,2,1,2,2,2],[2,2,2,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,1,2,2,2,1,2,2,2,2,1,2,2,2],[2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,1,1,1,0,0,0,1,2,2,2,1,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,1,1,0,0,1,0,1,1,2,1,1,0,0,1,2,2,2,1,2,2,2,2,2,2,2,2],[1,1,1,1,2,2,2,2,1,0,0,1,1,1,1,2,2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,0,0,1,2,2,2,2,2,2,2,2,2,1,1,1],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,1,2,2,2,1,2,2,1,1,1,1,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,2,2,2,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,1,1,1,1,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,2,2,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,2,2,1,1,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,1,1,0,0,0,0,1,2,2,2,2,1,0,0,0],[0,0,0,1,2,2,2,2,1,0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0]]},star_layout:{small_s1:[[0,0,0,0,5,0,0,0,0],[0,0,5,0,5,0,5,0,0],[0,5,0,0,5,0,0,5,0],[0,0,0,5,5,5,0,0,0],[5,5,5,5,5,5,5,5,5],[0,0,0,5,5,5,0,0,0],[0,5,0,0,5,0,0,5,0],[0,0,5,0,5,0,5,0,0],[0,0,0,0,5,0,0,0,0]],small_s2:[[0,0,0,5,0,0,0],[0,0,0,5,0,0,0],[0,0,5,5,5,0,0],[5,5,5,5,5,5,5],[0,0,5,5,5,0,0],[0,0,0,5,0,0,0],[0,0,0,5,0,0,0]]},retry_layout:[[1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1],[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],[1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,1,1,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],[2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]],themes:{classic:{id:1,background:"#ffffff",road:"#535353",score_text:"#747474",info_text:"#535353",layout:[!1,"#ffffff","#535353","#dadada","#535353",!1]},dark:{id:2,background:"#202225",road:"#acacac",score_text:"#909191",info_text:"#acacac",layout:[!1,"#202225","#acacac","#3e3f3f","#acacac","#3e3f3f"]}}}},77:function(t,e){}}]);