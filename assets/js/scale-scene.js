(()=>{var dc=0,Go=1,fc=2;var Ai=1,pc=2,ns=3,oi=0,Ge=1,Tn=2,En=0,is=1,Ho=2,Wo=3,Xo=4,mc=5;var wi=100,gc=101,_c=102,xc=103,vc=104,yc=200,Sc=201,Mc=202,bc=203,qo=204,Yo=205,Ac=206,wc=207,Tc=208,Ec=209,Cc=210,Rc=211,Ic=212,Pc=213,Lc=214,Rr=0,Ir=1,Pr=2,$i=3,Lr=4,Dr=5,Nr=6,Ur=7,la=0,Dc=1,Nc=2,dn=0,Zo=1,$o=2,Jo=3,Ko=4,Qo=5,jo=6,tl=7;var el=300,li=301,Ti=302,ca=303,ha=304,Hs=306,Fr=1e3,vn=1001,Or=1002,Re=1003,Uc=1004;var Ws=1005;var Ie=1006,ua=1007;var ci=1008;var qe=1009,nl=1010,il=1011,ss=1012,da=1013,fn=1014,nn=1015,pn=1016,fa=1017,pa=1018,rs=1020,sl=35902,rl=35899,al=1021,ol=1022,sn=1023,Sn=1026,hi=1027,ma=1028,ga=1029,ui=1030,_a=1031;var xa=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,va=35840,ya=35841,Sa=35842,Ma=35843,ba=36196,Aa=37492,wa=37496,Ta=37488,Ea=37489,$s=37490,Ca=37491,Ra=37808,Ia=37809,Pa=37810,La=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Va=37820,Ga=37821,Ha=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,Js=36285,Za=36286;var Ms=2300,Br=2301,Er=2302,Uo=2303,Fo=2400,Oo=2401,Bo=2402;var Fc=3200;var $a=0,Oc=1,Gn="",ze="srgb",bs="srgb-linear",As="linear",se="srgb";var Cr=7680;var Bc=519,zc=512,kc=513,Vc=514,Ja=515,Gc=516,Hc=517,Ka=518,Wc=519,Xc=35044;var ll="300 es",un=2e3,Ji=2001;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qc(){let i=ws("canvas");return i.style.display="block",i}var Hl={},Ki=null;function cl(...i){let t="THREE."+i.shift();Ki?Ki("log",t,...i):console.log(t,...i)}function Yc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=Yc(i);let t="THREE."+i.shift();if(Ki)Ki("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ut(...i){i=Yc(i);let t="THREE."+i.shift();if(Ki)Ki("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Mi(...i){let t=i.join(" ");t in Hl||(Hl[t]=!0,Dt(...i))}function Zc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $c={[Rr]:Ir,[Pr]:Nr,[Lr]:Ur,[$i]:Dr,[Ir]:Rr,[Nr]:Pr,[Ur]:Lr,[Dr]:$i},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uo=Math.PI/180,zr=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Oh(i,t){return(i%t+t)%t}function fo(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pl=class pl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pl.prototype.isVector2=!0;var qt=pl,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],h=r[a+0],g=r[a+1],x=r[a+2],S=r[a+3];if(m!==S||l!==h||c!==g||u!==x){let p=l*h+c*g+u*x+m*S;p<0&&(h=-h,g=-g,x=-x,S=-S,p=-p);let d=1-o;if(p<.9995){let T=Math.acos(p),P=Math.sin(T);d=Math.sin(d*T)/P,o=Math.sin(o*T)/P,l=l*d+h*o,c=c*d+g*o,u=u*d+x*o,m=m*d+S*o}else{l=l*d+h*o,c=c*d+g*o,u=u*d+x*o,m=m*d+S*o;let T=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=T,c*=T,u*=T,m*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],h=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+u*m+l*g-c*h,t[e+1]=l*x+u*h+c*m-o*g,t[e+2]=c*x+u*g+o*h-l*m,t[e+3]=u*x-o*m-l*h-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),h=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*m+c*g*x,this._y=c*g*m-h*u*x,this._z=c*u*x+h*g*m,this._w=c*u*m-h*g*x;break;case"YXZ":this._x=h*u*m+c*g*x,this._y=c*g*m-h*u*x,this._z=c*u*x-h*g*m,this._w=c*u*m+h*g*x;break;case"ZXY":this._x=h*u*m-c*g*x,this._y=c*g*m+h*u*x,this._z=c*u*x+h*g*m,this._w=c*u*m-h*g*x;break;case"ZYX":this._x=h*u*m-c*g*x,this._y=c*g*m+h*u*x,this._z=c*u*x-h*g*m,this._w=c*u*m+h*g*x;break;case"YZX":this._x=h*u*m+c*g*x,this._y=c*g*m+h*u*x,this._z=c*u*x-h*g*m,this._w=c*u*m-h*g*x;break;case"XZY":this._x=h*u*m-c*g*x,this._y=c*g*m-h*u*x,this._z=c*u*x+h*g*m,this._w=c*u*m+h*g*x;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],h=n+o+m;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ml=class ml{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ml.prototype.isVector3=!0;var z=ml,po=new z,Wl=new bn,gl=class gl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],h=n[2],g=n[5],x=n[8],S=s[0],p=s[3],d=s[6],T=s[1],P=s[4],y=s[7],b=s[2],A=s[5],R=s[8];return r[0]=a*S+o*T+l*b,r[3]=a*p+o*P+l*A,r[6]=a*d+o*y+l*R,r[1]=c*S+u*T+m*b,r[4]=c*p+u*P+m*A,r[7]=c*d+u*y+m*R,r[2]=h*S+g*T+x*b,r[5]=h*p+g*P+x*A,r[8]=h*d+g*y+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,h=o*l-u*r,g=c*r-a*l,x=e*m+n*h+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=m*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=g*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mo.makeScale(t,e)),this}rotate(t){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gl.prototype.isMatrix3=!0;var Ot=gl,mo=new Ot,Xl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bh(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?As:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:t,whitePoint:n,transfer:As,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var Yt=Bh();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,kr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=ws("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zh=0,Qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var kh=0,_o=new z,Ve=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vn,s=vn,r=Ie,a=ci,o=sn,l=qe,c=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ks(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==el)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=el;Ve.DEFAULT_ANISOTROPY=1;var _l=class _l{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],m=l[8],h=l[1],g=l[5],x=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,y=(g+1)/2,b=(d+1)/2,A=(u+h)/4,R=(m+S)/4,v=(x+p)/4;return P>y&&P>b?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=A/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=v/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-x)*(p-x)+(m-S)*(m-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-x)/T,this.y=(m-S)/T,this.z=(h-u)/T,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_l.prototype.isVector4=!0;var he=_l,Vr=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Vr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gr=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oa=class oa{constructor(t,e,n,s,r,a,o,l,c,u,m,h,g,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,m,h,g,x,S,p)}set(t,e,n,s,r,a,o,l,c,u,m,h,g,x,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=m,d[14]=h,d[3]=g,d[7]=x,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let h=a*u,g=a*m,x=o*u,S=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,g=l*m,x=c*u,S=c*m;e[0]=h+S*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=g*o-x,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,g=l*m,x=c*u,S=c*m;e[0]=h-S*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,g=a*m,x=o*u,S=o*m;e[0]=l*u,e[4]=x*c-g,e[8]=h*c+S,e[1]=l*m,e[5]=S*c+h,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,g=a*c,x=o*l,S=o*c;e[0]=l*u,e[4]=S-h*m,e[8]=x*m+g,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*m+x,e[10]=h-S*m}else if(t.order==="XZY"){let h=a*l,g=a*c,x=o*l,S=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=h*m+S,e[5]=a*u,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*u,e[10]=S*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vh,t,Gh)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Jn.crossVectors(n,Ye),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Jn.crossVectors(n,Ye)),Jn.normalize(),or.crossVectors(Ye,Jn),s[0]=Jn.x,s[4]=or.x,s[8]=Ye.x,s[1]=Jn.y,s[5]=or.y,s[9]=Ye.y,s[2]=Jn.z,s[6]=or.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],h=n[9],g=n[13],x=n[2],S=n[6],p=n[10],d=n[14],T=n[3],P=n[7],y=n[11],b=n[15],A=s[0],R=s[4],v=s[8],w=s[12],L=s[1],U=s[5],k=s[9],H=s[13],D=s[2],V=s[6],J=s[10],Z=s[14],et=s[3],X=s[7],j=s[11],nt=s[15];return r[0]=a*A+o*L+l*D+c*et,r[4]=a*R+o*U+l*V+c*X,r[8]=a*v+o*k+l*J+c*j,r[12]=a*w+o*H+l*Z+c*nt,r[1]=u*A+m*L+h*D+g*et,r[5]=u*R+m*U+h*V+g*X,r[9]=u*v+m*k+h*J+g*j,r[13]=u*w+m*H+h*Z+g*nt,r[2]=x*A+S*L+p*D+d*et,r[6]=x*R+S*U+p*V+d*X,r[10]=x*v+S*k+p*J+d*j,r[14]=x*w+S*H+p*Z+d*nt,r[3]=T*A+P*L+y*D+b*et,r[7]=T*R+P*U+y*V+b*X,r[11]=T*v+P*k+y*J+b*j,r[15]=T*w+P*H+y*Z+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],h=t[10],g=t[14],x=t[3],S=t[7],p=t[11],d=t[15],T=l*g-c*h,P=o*g-c*m,y=o*h-l*m,b=a*g-c*u,A=a*h-l*u,R=a*m-o*u;return e*(S*T-p*P+d*y)-n*(x*T-p*b+d*A)+s*(x*P-S*b+d*R)-r*(x*y-S*A+p*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],h=t[10],g=t[11],x=t[12],S=t[13],p=t[14],d=t[15],T=e*o-n*a,P=e*l-s*a,y=e*c-r*a,b=n*l-s*o,A=n*c-r*o,R=s*c-r*l,v=u*S-m*x,w=u*p-h*x,L=u*d-g*x,U=m*p-h*S,k=m*d-g*S,H=h*d-g*p,D=T*H-P*k+y*U+b*L-A*w+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return t[0]=(o*H-l*k+c*U)*V,t[1]=(s*k-n*H-r*U)*V,t[2]=(S*R-p*A+d*b)*V,t[3]=(h*A-m*R-g*b)*V,t[4]=(l*L-a*H-c*w)*V,t[5]=(e*H-s*L+r*w)*V,t[6]=(p*y-x*R-d*P)*V,t[7]=(u*R-h*y+g*P)*V,t[8]=(a*k-o*L+c*v)*V,t[9]=(n*L-e*k-r*v)*V,t[10]=(x*A-S*y+d*T)*V,t[11]=(m*y-u*A-g*T)*V,t[12]=(o*w-a*U-l*v)*V,t[13]=(e*U-n*w+s*v)*V,t[14]=(S*P-x*b-p*T)*V,t[15]=(u*b-m*P+h*T)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,h=r*c,g=r*u,x=r*m,S=a*u,p=a*m,d=o*m,T=l*c,P=l*u,y=l*m,b=n.x,A=n.y,R=n.z;return s[0]=(1-(S+d))*b,s[1]=(g+y)*b,s[2]=(x-P)*b,s[3]=0,s[4]=(g-y)*A,s[5]=(1-(h+d))*A,s[6]=(p+T)*A,s[7]=0,s[8]=(x+P)*R,s[9]=(p-T)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,u=1/o,m=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=m,on.elements[9]*=m,on.elements[10]*=m,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,u=2*r/(e-t),m=2*r/(n-s),h=(e+t)/(e-t),g=(n+s)/(n-s),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===un)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ji)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,u=2/(e-t),m=2/(n-s),h=-(e+t)/(e-t),g=-(n+s)/(n-s),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===un)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ji)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};oa.prototype.isMatrix4=!0;var de=oa,Ui=new z,on=new de,Vh=new z(0,0,0),Gh=new z(1,1,1),Jn=new z,or=new z,Ye=new z,Yl=new de,Zl=new bn,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hh=0,$l=new z,Fi=new bn,Pn=new de,lr=new z,gs=new z,Wh=new z,Xh=new bn,Jl=new z(1,0,0),Kl=new z(0,1,0),Ql=new z(0,0,1),jl={type:"added"},qh={type:"removed"},Oi={type:"childadded",child:null},xo={type:"childremoved",child:null},Ae=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new On,n=new bn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ot}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Jl,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jl,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(gs,lr,this.up):Pn.lookAt(lr,gs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qh),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new z(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yh={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Oh(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.workingToColorSpace(De.copy(this),t),Math.round($t(De.r*255,0,255))*65536+Math.round($t(De.g*255,0,255))*256+Math.round($t(De.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(De.copy(this),e);let n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ze){Yt.workingToColorSpace(De.copy(this),t);let e=De.r,n=De.g,s=De.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(cr);let n=fo(Kn.h,cr.h,e),s=fo(Kn.s,cr.s,e),r=fo(Kn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Bt;Bt.NAMES=Jc;var Cs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new z,Ln=new z,yo=new z,Dn=new z,Bi=new z,zi=new z,tc=new z,So=new z,Mo=new z,bo=new z,Ao=new he,wo=new he,To=new he,ei=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Ln.subVectors(n,e),yo.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(Ln),l=ln.dot(yo),c=Ln.dot(Ln),u=Ln.dot(yo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,g=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),wo.setScalar(0),To.setScalar(0),Ao.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(To,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Ln.subVectors(t,e),ln.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),zi.subVectors(r,n),So.subVectors(t,n);let l=Bi.dot(So),c=zi.dot(So);if(l<=0&&c<=0)return e.copy(n);Mo.subVectors(t,s);let u=Bi.dot(Mo),m=zi.dot(Mo);if(u>=0&&m<=u)return e.copy(s);let h=l*m-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Bi,a);bo.subVectors(t,r);let g=Bi.dot(bo),x=zi.dot(bo);if(x>=0&&g<=x)return e.copy(r);let S=g*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(zi,o);let p=u*x-g*m;if(p<=0&&m-u>=0&&g-x>=0)return tc.subVectors(r,s),o=(m-u)/(m-u+(g-x)),e.copy(s).addScaledVector(tc,o);let d=1/(p+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},An=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),ur.subVectors(this.max,_s),ki.subVectors(t.a,_s),Vi.subVectors(t.b,_s),Gi.subVectors(t.c,_s),Qn.subVectors(Vi,ki),jn.subVectors(Gi,Vi),xi.subVectors(ki,Gi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!Eo(e,ki,Vi,Gi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,ki,Vi,Gi,ur))?!1:(dr.crossVectors(Qn,jn),e=[dr.x,dr.y,dr.z],Eo(e,ki,Vi,Gi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Nn=[new z,new z,new z,new z,new z,new z,new z,new z],cn=new z,hr=new An,ki=new z,Vi=new z,Gi=new z,Qn=new z,jn=new z,xi=new z,_s=new z,ur=new z,dr=new z,vi=new z;function Eo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Me=new z,fr=new qt,Zh=0,ke=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Is=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ps=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var tn=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},$h=new An,xs=new z,Co=new z,ni=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Co)),this.expandByPoint(xs.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jh=0,je=new de,Ro=new Ae,Hi=new z,Ze=new An,vs=new An,Ce=new z,wn=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Ps:Is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Ze.min,vs.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,vs.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(vs.min),Ze.expandByPoint(vs.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ce.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(t,c),Ce.add(Hi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;let c=new z,u=new z,m=new z,h=new qt,g=new qt,x=new qt,S=new z,p=new z;function d(v,w,L){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),m.fromBufferAttribute(n,L),h.fromBufferAttribute(r,v),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,L),u.sub(c),m.sub(c),g.sub(h),x.sub(h);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar(U),p.copy(m).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(U),o[v].add(S),o[w].add(S),o[L].add(S),l[v].add(p),l[w].add(p),l[L].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let v=0,w=T.length;v<w;++v){let L=T[v],U=L.start,k=L.count;for(let H=U,D=U+k;H<D;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let P=new z,y=new z,b=new z,A=new z;function R(v){b.fromBufferAttribute(s,v),A.copy(b);let w=o[v];P.copy(w),P.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(A,w);let U=y.dot(l[v])<0?-1:1;a.setXYZW(v,P.x,P.y,P.z,U)}for(let v=0,w=T.length;v<w;++v){let L=T[v],U=L.start,k=L.count;for(let H=U,D=U+k;H<D;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,m=new z;if(t)for(let h=0,g=t.count;h<g;h+=3){let x=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u),g=0,x=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*u;for(let d=0;d<u;d++)h[x++]=c[g++]}return new ke(h,u,m)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let h=c[u],g=t(h,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){let g=c[m];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],m=r[c];for(let h=0,g=m.length;h<g;h++)u.push(m[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new z,Kh=new z,Qh=new Ot,hn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Io.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qh.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jh=0,Bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=is,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new z,Po=new z,pr=new z,mr=new z,Hr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),mr.copy(this.origin).sub(Po);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=mr.dot(this.direction),l=-mr.dot(pr),c=mr.lengthSq(),u=Math.abs(1-a*a),m,h,g,x;if(u>0)if(m=a*l-o,h=a*o-l,x=r*u,m>=0)if(h>=-x)if(h<=x){let S=1/u;m*=S,h*=S,g=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h<=-x?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+h*(h+2*l)+c):h<=x?(m=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Po).addScaledVector(pr,h),g}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=t.x-a.x,h=t.y-a.y,g=t.z-a.z,x=e.x-a.x,S=e.y-a.y,p=e.z-a.z,d=n.x-a.x,T=n.y-a.y,P=n.z-a.z,y=Math.abs(l),b=Math.abs(c),A=Math.abs(u),R,v,w,L,U,k,H,D,V,J,Z,et;if(y>=b&&y>=A?(w=l,k=m,V=x,et=d,l>=0?(R=c,v=u,L=h,U=g,H=S,D=p,J=T,Z=P):(R=u,v=c,L=g,U=h,H=p,D=S,J=P,Z=T)):b>=A?(w=c,k=h,V=S,et=T,c>=0?(R=u,v=l,L=g,U=m,H=p,D=x,J=P,Z=d):(R=l,v=u,L=m,U=g,H=x,D=p,J=d,Z=P)):(w=u,k=g,V=p,et=P,u>=0?(R=l,v=c,L=m,U=h,H=x,D=S,J=d,Z=T):(R=c,v=l,L=h,U=m,H=S,D=x,J=T,Z=d)),w===0)return null;let X=R/w,j=v/w,nt=1/w,Rt=L-X*k,It=U-j*k,ee=H-X*V,Ht=D-j*V,Qt=J-X*et,W=Z-j*et,Q=Qt*Ht-W*ee,ft=Rt*W-It*Qt,Lt=ee*It-Ht*Rt;if(s){if(Q<0||ft<0||Lt<0)return null}else if((Q<0||ft<0||Lt<0)&&(Q>0||ft>0||Lt>0))return null;let xt=Q+ft+Lt;if(xt===0)return null;let zt=nt*(Q*k+ft*V+Lt*et);return(xt>0?zt<0:zt>0)?null:this.at(zt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ec=new de,yi=new Hr,gr=new ni,nc=new z,_r=new z,xr=new z,vr=new z,Lo=new z,yr=new z,ic=new z,Sr=new z,we=class extends Ae{constructor(t=new wn,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Lo.fromBufferAttribute(m,t),a?yr.addScaledVector(Lo,u):yr.addScaledVector(Lo.sub(e),u))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(gr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(gr,nc)===null||yi.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),yi.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let p=h[x],d=a[p.materialIndex],T=Math.max(p.start,g.start),P=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let y=T,b=P;y<b;y+=3){let A=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);s=Mr(this,d,t,n,c,u,m,A,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let p=x,d=S;p<d;p+=3){let T=o.getX(p),P=o.getX(p+1),y=o.getX(p+2);s=Mr(this,a,t,n,c,u,m,T,P,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let p=h[x],d=a[p.materialIndex],T=Math.max(p.start,g.start),P=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=T,b=P;y<b;y+=3){let A=y,R=y+1,v=y+2;s=Mr(this,d,t,n,c,u,m,A,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let p=x,d=S;p<d;p+=3){let T=p,P=p+1,y=p+2;s=Mr(this,a,t,n,c,u,m,T,P,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function tu(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:i}}function Mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,xr),i.getVertexPosition(c,vr);let u=tu(i,t,e,n,_r,xr,vr,ic);if(u){let m=new z;ei.getBarycoord(ic,_r,xr,vr,m),s&&(u.uv=ei.getInterpolatedAttribute(s,o,l,c,m,new qt)),r&&(u.uv1=ei.getInterpolatedAttribute(r,o,l,c,m,new qt)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,m,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};ei.getNormal(_r,xr,vr,h.normal),u.face=h,u.barycoord=m}return u}var Ls=class extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,u=Re,m,h){super(null,a,o,l,c,u,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Wi=new de,sc=new de,br=[],rc=new An,eu=new de,ys=new we,Ss=new ni,Ds=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),rc.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(rc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ss.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),sc.multiplyMatrices(n,Wi),ys.matrixWorld=sc,ys.raycast(t,br);for(let a=0,o=br.length;a<o;a++){let l=br[a];l.instanceId=r,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,ma,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Si=new ni,nu=new qt(.5,.5),Ar=new z,ts=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],h=r[6],g=r[7],x=r[8],S=r[9],p=r[10],d=r[11],T=r[12],P=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,g-u,d-x,b-T).normalize(),s[1].setComponents(c+a,g+u,d+x,b+T).normalize(),s[2].setComponents(c+o,g+m,d+S,b+P).normalize(),s[3].setComponents(c-o,g-m,d-S,b-P).normalize(),n)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,g-h,d-p,b-y).normalize();else if(s[4].setComponents(c-l,g-h,d-p,b-y).normalize(),e===un)s[5].setComponents(c+l,g+h,d+p,b+y).normalize();else if(e===Ji)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);let e=nu.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ns=class extends Ve{constructor(t=[],e=li,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Us=class extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Ve{constructor(t,e,n=fn,s,r,a,o=Re,l=Re,c,u=Sn,m=1){if(u!==Sn&&u!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:m};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wr=class extends ii{constructor(t,e=fn,n=li,s,r,a=Re,o=Re,l,c=Sn){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kn=class i extends wn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],h=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(m,2));function x(S,p,d,T,P,y,b,A,R,v,w){let L=y/R,U=b/v,k=y/2,H=b/2,D=A/2,V=R+1,J=v+1,Z=0,et=0,X=new z;for(let j=0;j<J;j++){let nt=j*U-H;for(let Rt=0;Rt<V;Rt++){let It=Rt*L-k;X[S]=It*T,X[p]=nt*P,X[d]=D,c.push(X.x,X.y,X.z),X[S]=0,X[p]=0,X[d]=A>0?1:-1,u.push(X.x,X.y,X.z),m.push(Rt/R),m.push(1-j/v),Z+=1}}for(let j=0;j<v;j++)for(let nt=0;nt<R;nt++){let Rt=h+nt+V*j,It=h+nt+V*(j+1),ee=h+(nt+1)+V*(j+1),Ht=h+(nt+1)+V*j;l.push(Rt,It,Ht),l.push(It,ee,Ht),et+=6}o.addGroup(g,et,w),g+=et,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vn=class i extends wn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=t/o,h=e/l,g=[],x=[],S=[],p=[];for(let d=0;d<u;d++){let T=d*h-a;for(let P=0;P<c;P++){let y=P*m-r;x.push(y,-T,0),S.push(0,0,1),p.push(P/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let P=T+c*d,y=T+c*(d+1),b=T+1+c*(d+1),A=T+1+c*d;g.push(P,y,A),g.push(y,b,A)}this.setIndex(g),this.setAttribute("position",new tn(x,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Os=class extends Bn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Bt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ac(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ac(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function iu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Kc={clone:Ei,merge:Ue},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=iu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new he().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xr=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var en=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=la,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qr=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yr=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Do(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zr=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fo,endingEnd:Fo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oo:r=t,o=2*e-n;break;case Bo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oo:a=t,l=2*n-e;break;case Bo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),S=x*x,p=S*x,d=-h*p+2*h*S-h*x,T=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*x+1,P=(-1-g)*p+(1.5+g)*S+.5*x,y=g*p-g*S;for(let b=0;b!==o;++b)r[b]=d*a[u+b]+T*a[c+b]+P*a[l+b]+y*a[m+b];return r}},$r=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),m=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*m+a[l+h]*u;return r}},Jr=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kr=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let x=(n-e)/(s-e),S=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*x;return r}let h=o*2,g=t-1;for(let x=0;x!==o;++x){let S=a[c+x],p=a[l+x],d=g*h+x*2,T=m[d],P=m[d+1],y=t*h+x*2,b=u[y],A=u[y+1],R=ou(n,e,T,b,s);r[x]=Qc(R,S,P,A,p)}return r}};function Qc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function au(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ou(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Qc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=au(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xi(e,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xi(t.times,Array),values:Xi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Do(t.settings)&&(n.settings={inTangents:Xi(t.settings.inTangents,Array),outTangents:Xi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case Br:e=this.InterpolantFactoryMethodLinear;break;case Er:e=this.InterpolantFactoryMethodSmooth;break;case Uo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Er;case this.InterpolantFactoryMethodBezier:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Do(this.settings)&&(oc(this.settings.inTangents,t),oc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Er,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,h=m-n,g=m+n;for(let x=0;x!==n;++x){let S=e[m+x];if(S!==e[h+x]||S!==e[g+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,h=a*n;for(let g=0;g!==n;++g)e[h+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Do(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function oc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Je.prototype.ValueTypeName="";Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=Br;var ri=class extends Je{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ms;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};Qr.prototype.ValueTypeName="color";var jr=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};jr.prototype.ValueTypeName="number";var ta=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bs=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends Je{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ms;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="vector";var na=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=c.length;m<h;m+=2){let g=c[m],x=c[m+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jc=new na,ia=class{constructor(t){this.manager=t!==void 0?t:jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ks=class extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},No=new de,lc=new z,cc=new z,sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(No,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ji||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wr=new z,Tr=new bn,xn=new z,Vs=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Tr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Tr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Tr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new z,hc=new qt,uc=new qt,Ne=class extends Vs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var es=class extends Vs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zo=class extends sa{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new zo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qi=-90,Yi=1,ra=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(qi,Yi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(qi,Yi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(qi,Yi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(qi,Yi,t,e);o.layers=this.layers,this.add(o);let l=new Ne(qi,Yi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,h,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},aa=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ul="\\[\\]\\.:\\/",lu=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",cu="[^"+ul.replace("\\.","")+"]",hu=/((?:WC+[\/:])*)/.source.replace("WC",dl),uu=/(WCOD+)?/.source.replace("WCOD",cu),du=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),fu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),pu=new RegExp("^"+hu+uu+du+fu+"$"),mu=["material","materials","bones","map"],ko=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lu,"")}static parseTrackName(t){let e=pu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=ko;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eg=new Float32Array(1);var xl=class xl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};xl.prototype.isMatrix2=!0;var Vo=xl;function fl(i,t,e,n){let s=gu(n);switch(e){case al:return i*t;case ma:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case _a:return i*t*2/s.components*s.byteLength;case ol:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case xa:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case va:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Aa:case Ta:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case $s:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gu(i){switch(i){case qe:case nl:return{byteLength:1,components:1};case ss:case il:case pn:return{byteLength:2,components:1};case fa:case pa:return{byteLength:2,components:4};case fn:case da:case nn:return{byteLength:4,components:1};case sl:case rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xu(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<m.length;g++){let x=m[h],S=m[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,m[h]=S)}m.length=h+1;for(let g=0,x=m.length;g<x;g++){let S=m[g];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_d=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:vu,alphahash_pars_fragment:yu,alphamap_fragment:Su,alphamap_pars_fragment:Mu,alphatest_fragment:bu,alphatest_pars_fragment:Au,aomap_fragment:wu,aomap_pars_fragment:Tu,batching_pars_vertex:Eu,batching_vertex:Cu,begin_vertex:Ru,beginnormal_vertex:Iu,bsdfs:Pu,iridescence_fragment:Lu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Vu,common:Gu,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:Zu,colorspace_fragment:$u,colorspace_pars_fragment:Ju,envmap_fragment:Ku,envmap_common_pars_fragment:Qu,envmap_pars_fragment:ju,envmap_pars_vertex:td,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:xd,lights_fragment_maps:vd,lights_fragment_end:yd,lightprobes_pars_fragment:Sd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:wd,map_fragment:Td,map_pars_fragment:Ed,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:Zd,premultiplied_alpha_fragment:$d,project_vertex:Jd,dithering_fragment:Kd,dithering_pars_fragment:Qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:vf,background_vert:yf,background_frag:Sf,backgroundCube_vert:Mf,backgroundCube_frag:bf,cube_vert:Af,cube_frag:wf,depth_vert:Tf,depth_frag:Ef,distance_vert:Cf,distance_frag:Rf,equirect_vert:If,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:Df,meshbasic_vert:Nf,meshbasic_frag:Uf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:kf,meshnormal_frag:Vf,meshphong_vert:Gf,meshphong_frag:Hf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:Zf,points_frag:$f,shadow_vert:Jf,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:jf},gt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Rn={basic:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ue([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ue([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ue([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ue([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ue([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ue([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ue([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ue([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ue([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Ue([gt.common,gt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Ue([gt.lights,gt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Rn.physical={uniforms:Ue([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Qa={r:0,b:0,g:0},tp=new de,Mh=new Ot;Mh.set(-1,0,0,0,1,0,0,0,1);function ep(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,u=null,m=0,h=null;function g(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){let y=T.backgroundBlurriness>0;P=t.get(P,y)}return P}function x(T){let P=!1,y=g(T);y===null?p(a,o):y&&y.isColor&&(p(y,1),P=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,P){let y=g(P);y&&(y.isCubeTexture||y.mapping===Hs)?(c===void 0&&(c=new we(new kn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Ei(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mh),c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==se,(u!==y||m!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,m=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new we(new Vn(2,2),new $e({name:"BackgroundMaterial",uniforms:Ei(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||m!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,m=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,P){T.getRGB(Qa,hl(i)),e.buffers.color.setClear(Qa.r,Qa.g,Qa.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:x,addToRenderList:S,dispose:d}}function np(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,k,H,D,V){let J=!1,Z=m(U,D,H,k);r!==Z&&(r=Z,c(r.object)),J=g(U,D,H,V),J&&x(U,D,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(U,k,H,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function m(U,k,H,D){let V=D.wireframe===!0,J=n[k.id];J===void 0&&(J={},n[k.id]=J);let Z=U.isInstancedMesh===!0?U.id:0,et=J[Z];et===void 0&&(et={},J[Z]=et);let X=et[H.id];X===void 0&&(X={},et[H.id]=X);let j=X[V];return j===void 0&&(j=h(l()),X[V]=j),j}function h(U){let k=[],H=[],D=[];for(let V=0;V<e;V++)k[V]=0,H[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:D,object:U,attributes:{},index:null}}function g(U,k,H,D){let V=r.attributes,J=k.attributes,Z=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let nt=V[X],Rt=J[X];if(Rt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Rt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Rt=U.instanceColor)),nt===void 0||nt.attribute!==Rt||Rt&&nt.data!==Rt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function x(U,k,H,D){let V={},J=k.attributes,Z=0,et=H.getAttributes();for(let X in et)if(et[X].location>=0){let nt=J[X];nt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor));let Rt={};Rt.attribute=nt,nt&&nt.data&&(Rt.data=nt.data),V[X]=Rt,Z++}r.attributes=V,r.attributesNum=Z,r.index=D}function S(){let U=r.newAttributes;for(let k=0,H=U.length;k<H;k++)U[k]=0}function p(U){d(U,0)}function d(U,k){let H=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;H[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),V[U]!==k&&(i.vertexAttribDivisor(U,k),V[U]=k)}function T(){let U=r.newAttributes,k=r.enabledAttributes;for(let H=0,D=k.length;H<D;H++)k[H]!==U[H]&&(i.disableVertexAttribArray(H),k[H]=0)}function P(U,k,H,D,V,J,Z){Z===!0?i.vertexAttribIPointer(U,k,H,V,J):i.vertexAttribPointer(U,k,H,D,V,J)}function y(U,k,H,D){S();let V=D.attributes,J=H.getAttributes(),Z=k.defaultAttributeValues;for(let et in J){let X=J[et];if(X.location>=0){let j=V[et];if(j===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let nt=j.normalized,Rt=j.itemSize,It=t.get(j);if(It===void 0)continue;let ee=It.buffer,Ht=It.type,Qt=It.bytesPerElement,W=Ht===i.INT||Ht===i.UNSIGNED_INT||j.gpuType===da;if(j.isInterleavedBufferAttribute){let Q=j.data,ft=Q.stride,Lt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)d(X.location+xt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let xt=0;xt<X.locationSize;xt++)P(X.location+xt,Rt/X.locationSize,Ht,nt,ft*Qt,(Lt+Rt/X.locationSize*xt)*Qt,W)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q,j.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Q=0;Q<X.locationSize;Q++)P(X.location+Q,Rt/X.locationSize,Ht,nt,Rt*Qt,Rt/X.locationSize*Q*Qt,W)}}else if(Z!==void 0){let nt=Z[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(X.location,nt);break;case 3:i.vertexAttrib3fv(X.location,nt);break;case 4:i.vertexAttrib4fv(X.location,nt);break;default:i.vertexAttrib1fv(X.location,nt)}}}}T()}function b(){w();for(let U in n){let k=n[U];for(let H in k){let D=k[H];for(let V in D){let J=D[V];for(let Z in J)u(J[Z].object),delete J[Z];delete D[V]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let H in k){let D=k[H];for(let V in D){let J=D[V];for(let Z in J)u(J[Z].object),delete J[Z];delete D[V]}}delete n[U.id]}function R(U){for(let k in n){let H=n[k];for(let D in H){let V=H[D];if(V[U.id]===void 0)continue;let J=V[U.id];for(let Z in J)u(J[Z].object),delete J[Z];delete V[U.id]}}}function v(U){for(let k in n){let H=n[k],D=U.isInstancedMesh===!0?U.id:0,V=H[D];if(V!==void 0){for(let J in V){let Z=V[J];for(let et in Z)u(Z[et].object),delete Z[et];delete V[J]}delete H[D],Object.keys(H).length===0&&delete n[k]}}}function w(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:p,disableUnusedAttributes:T}}function ip(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let g=0;g<u;g++)h+=c[g];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qe&&R!==nn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:y,maxSamples:b,samples:A}}function rp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let g=m.length!==0||h||n!==0||s;return s=h,n=m.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=u(m,h,0)},this.setState=function(m,h,g){let x=m.clippingPlanes,S=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let T=r?0:n,P=T*4,y=d.clippingState||null;l.value=y,y=u(x,h,P,g);for(let b=0;b!==P;++b)y[b]=e[b];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,h,g,x){let S=m!==null?m.length:0,p=null;if(S!==0){if(p=l.value,x!==!0||p===null){let d=g+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let P=0,y=g;P!==S;++P,y+=4)a.copy(m[P]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var os=4,ap=6,op=20,lp=256,Qs=new es,th=new Bt,vl=null,yl=0,Sl=0,Ml=!1,cp=new z,Ci=new z,to=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=cp}=r;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,yl,Sl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:pn,format:sn,colorSpace:bs,depthBuffer:!1},s=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hp(r)),this._blurMaterial=dp(r,t,e),this._ggxMaterial=up(r,t,e)}return s}_compileMaterial(t){let e=new we(new wn,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,g=m.toneMapping;m.getClearColor(th),m.toneMapping=dn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new kn,new bi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,d=!1,T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,d=!0):(p.color.copy(th),d=!0);for(let P=0;P<6;P++){let y=P%3;y===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):y===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));let b=this._cubeSize;as(s,y*b,P>2?b:0,b,b),m.setRenderTarget(s),d&&m.render(S,l),m.render(t,l)}m.toneMapping=g,m.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===li||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;as(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),h=c*1.25,g=m*h,{_lodMax:x}=this,S=this._sizeLods[n],p=3*S*(n>x-os?n-x+os:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,as(r,p,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,as(t,p,d,3*S,2*S),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],m=3*u*(s>this._lodMax-os?s-this._lodMax+os:0),h=4*(this._cubeSize-u);as(e,m,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Qs)}};function hp(i){let t=[],e=[],n=i,s=i-os+1+ap;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,h=6,g=3,x=new Float32Array(g*h*m),S=new Float32Array(g*h*m);for(let d=0;d<m;d++){let T=d%3*2/3-1,P=d>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(y,g*h*d);for(let b=0;b<h;b++){let A=u[b*2]*2-1,R=u[b*2+1]*2-1;d===0?Ci.set(1,R,A):d===1?Ci.set(-A,1,-R):d===2?Ci.set(-A,R,1):d===3?Ci.set(-1,R,-A):d===4?Ci.set(-A,-1,R):Ci.set(A,R,-1),Ci.toArray(S,(d*h+b)*g)}}let p=new wn;p.setAttribute("position",new ke(x,g)),p.setAttribute("outputDirection",new ke(S,g)),e.push(new we(p,null)),n>os&&n--}return{lodMeshes:e,sizeLods:t}}function eh(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function up(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function dp(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:op,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function nh(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ih(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eo=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ns(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:En});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ie),new ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function fp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===ca||g===ha)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let S=new eo(x.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,x=g===ca||g===ha,S=g===li||g===Ti;if(x||S){let p=e.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new to(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let T=h.image;return x&&T&&T.height>0||S&&T&&l(T)?(n===null&&(n=new to(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,g){return g===ca?h.mapping=li:g===ha&&(h.mapping=Ti),h}function l(h){let g=0,x=6;for(let S=0;S<x;S++)h[S]!==void 0&&g++;return g===x}function c(h){let g=h.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function u(h){let g=h.target;g.removeEventListener("dispose",u);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mi("WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){let s={},r=new WeakMap;function a(m){let h=m.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(m){let h=m.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER)}function c(m){let h=[],g=m.index,x=m.attributes.position,S=0;if(x===void 0)return;if(g!==null){let T=g.array;S=g.version;for(let P=0,y=T.length;P<y;P+=3){let b=T[P+0],A=T[P+1],R=T[P+2];h.push(b,A,A,R,R,b)}}else{let T=x.array;S=x.version;for(let P=0,y=T.length/3-1;P<y;P+=3){let b=P+0,A=P+1,R=P+2;h.push(b,A,A,R,R,b)}}let p=new(x.count>=65535?Ps:Is)(h,1);p.version=S;let d=r.get(m);d&&t.remove(d),r.set(m,p)}function u(m){let h=r.get(m);if(h){let g=m.index;g!==null&&h.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function gp(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*a),e.update(h,n,1)}function c(m,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,m*a,g),e.update(h,n,g))}function u(m,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,g);let S=0;for(let p=0;p<g;p++)S+=h[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _p(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xp(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==m){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],P=0;g===!0&&(P=1),x===!0&&(P=2),S===!0&&(P=3);let y=o.attributes.position.count*P,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*b*4*m),R=new Ts(A,y,b,m);R.type=nn,R.needsUpdate=!0;let v=P*4;for(let L=0;L<m;L++){let U=p[L],k=d[L],H=T[L],D=y*b*4*L;for(let V=0;V<U.count;V++){let J=V*v;g===!0&&(s.fromBufferAttribute(U,V),A[D+J+0]=s.x,A[D+J+1]=s.y,A[D+J+2]=s.z,A[D+J+3]=0),x===!0&&(s.fromBufferAttribute(k,V),A[D+J+4]=s.x,A[D+J+5]=s.y,A[D+J+6]=s.z,A[D+J+7]=0),S===!0&&(s.fromBufferAttribute(H,V),A[D+J+8]=s.x,A[D+J+9]=s.y,A[D+J+10]=s.z,A[D+J+11]=H.itemSize===4?s.w:1)}}h={count:m,texture:R,size:new qt(y,b)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vp(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var yp={[Zo]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Ko]:"ACES_FILMIC_TONE_MAPPING",[jo]:"AGX_TONE_MAPPING",[tl]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function Sp(i,t,e,n,s,r){let a=new Xe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wn;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));let u=new Xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new we(c,u),h=new es(-1,1,1,-1,0,1),g=null,x=null,S=!1,p,d=null,T=[],P=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let A=0;A<T.length;A++){let R=T[A];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){T=y,P=T.length>0&&T[0].isRenderPass===!0;let b=a.width,A=a.height;T.length>0&&o===null&&(o=new Xe(b,A,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(b,A,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let v=T[R];v.setSize&&v.setSize(b,A)}},this.begin=function(y,b){if(S||y.toneMapping===dn&&T.length===0)return!1;if(d=b,b!==null){let A=b.width,R=b.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return P===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=dn,!0},this.hasRenderPass=function(){return P},this.end=function(y,b){y.toneMapping=p,S=!0;let A=a,R=o;for(let v=0;v<T.length;v++){let w=T[v];w.enabled!==!1&&(w.render(y,R,A,b),w.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(g!==y.outputColorSpace||x!==y.toneMapping){g=y.outputColorSpace,x=y.toneMapping,u.defines={},Yt.getTransfer(g)===se&&(u.defines.SRGB_TRANSFER="");let v=yp[x];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(d),y.render(m,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var bh=new Ve,wl=new ii(1,1),Ah=new Ts,wh=new Gr,Th=new Ns,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function so(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;lh.set(n),i.uniformMatrix2fv(this.addr,!1,lh),Ee(e,n)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Ee(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),Ee(e,n)}}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=e.isReversedDepthBuffer()?Ka:Ja,r=wl):r=bh,e.setTexture2D(t||r,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wh,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ah,s)}function Vp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return Ap;case 35666:return wp;case 35674:return Tp;case 35675:return Ep;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Ip;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Np;case 36295:return Up;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Hp(i,t){let e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Wp(i,t){let e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function Xp(i,t){let e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){let e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yp(i,t){let e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zp(i,t){let e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $p(i,t){i.uniform1iv(this.addr,t)}function Jp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function Qp(i,t){i.uniform4iv(this.addr,t)}function jp(i,t){i.uniform1uiv(this.addr,t)}function tm(i,t){i.uniform2uiv(this.addr,t)}function em(i,t){i.uniform3uiv(this.addr,t)}function nm(i,t){i.uniform4uiv(this.addr,t)}function im(i,t,e){let n=this.cache,s=t.length,r=so(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wl:a=bh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sm(i,t,e){let n=this.cache,s=t.length,r=so(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wh,r[a])}function rm(i,t,e){let n=this.cache,s=t.length,r=so(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Th,r[a])}function am(i,t,e){let n=this.cache,s=t.length,r=so(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ah,r[a])}function om(i){switch(i){case 5126:return Gp;case 35664:return Hp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return Zp;case 5124:case 35670:return $p;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Qp;case 5125:return jp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=om(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function lm(i,t,e){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ch(e,c===void 0?new Tl(o,i,t):new El(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Cl(o),ch(e,m)),e=m}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);lm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cm=37297,hm=0;function um(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var uh=new Ot;function dm(i){Yt._getMatrix(uh,Yt.workingColorSpace,i);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case As:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+um(i.getShaderSource(t),o)}else return r}function fm(i,t){let e=dm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pm={[Zo]:"Linear",[$o]:"Reinhard",[Jo]:"Cineon",[Ko]:"ACESFilmic",[jo]:"AgX",[tl]:"Neutral",[Qo]:"Custom"};function mm(i,t){let e=pm[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ja=new z;function gm(){Yt.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function xm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tr(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(ym,Mm)}var Sm=new Map;function Mm(i,t){let e=Gt[t];if(e===void 0){let n=Sm.get(t);if(n!==void 0)e=Gt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rl(e)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(bm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var wm={[Ai]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function Tm(i){return wm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Em={[li]:"ENVMAP_TYPE_CUBE",[Ti]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function Cm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Em[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rm={[Ti]:"ENVMAP_MODE_REFRACTION"};function Im(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pm={[la]:"ENVMAP_BLENDING_MULTIPLY",[Dc]:"ENVMAP_BLENDING_MIX",[Nc]:"ENVMAP_BLENDING_ADD"};function Lm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pm[i.combine]||"ENVMAP_BLENDING_NONE"}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Tm(e),c=Cm(e),u=Im(e),m=Lm(e),h=Dm(e),g=_m(e),x=xm(r),S=s.createProgram(),p,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(tr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(tr).join(`
`),d.length>0&&(d+=`
`)):(p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),d=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==dn?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=Rl(a),a=fh(a,e),a=ph(a,e),o=Rl(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=T+p+a,y=T+d+o,b=hh(s,s.VERTEX_SHADER,P),A=hh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,b),s.attachShader(S,A),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(U){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(S)||"",H=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(A)||"",V=k.trim(),J=H.trim(),Z=D.trim(),et=!0,X=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,A);else{let j=dh(s,b,"vertex"),nt=dh(s,A,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+j+`
`+nt)}else V!==""?Dt("WebGLProgram: Program Info Log:",V):(J===""||Z==="")&&(X=!1);X&&(U.diagnostics={runnable:et,programLog:V,vertexShader:{log:J,prefix:p},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(b),s.deleteShader(A),v=new ls(s,S),w=vm(s,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,cm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=A,this}var Um=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}};function Fm(i){return i===ui||i===$s||i===Js}function Om(i,t,e,n,s,r){let a=new Es,o=new Il,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,w,L,U,k,H){let D=U.fog,V=k.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,et=t.get(v.envMap||J,Z),X=et&&et.mapping===Hs?et.image.height:null,j=g[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Dt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=nt!==void 0?nt.length:0,It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let ee,Ht,Qt,W;if(j){let ne=Rn[j];ee=ne.vertexShader,Ht=ne.fragmentShader}else{ee=v.vertexShader,Ht=v.fragmentShader;let ne=o.getVertexShaderStage(v),Jt=o.getFragmentShaderStage(v);o.update(v,ne,Jt),Qt=ne.id,W=Jt.id}let Q=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,xt=k.isBatchedMesh===!0,zt=!!v.map,xe=!!v.matcap,kt=!!et,Zt=!!v.aoMap,re=!!v.lightMap,Nt=!!v.bumpMap&&v.wireframe===!1,jt=!!v.normalMap,me=!!v.displacementMap,be=!!v.emissiveMap,ae=!!v.metalnessMap,ge=!!v.roughnessMap,I=v.anisotropy>0,ve=v.clearcoat>0,te=v.dispersion>0,M=v.retroreflectivity>0,f=v.iridescence>0,N=v.sheen>0,B=v.transmission>0,Y=I&&!!v.anisotropyMap,it=ve&&!!v.clearcoatMap,lt=ve&&!!v.clearcoatNormalMap,q=ve&&!!v.clearcoatRoughnessMap,K=f&&!!v.iridescenceMap,ut=f&&!!v.iridescenceThicknessMap,wt=N&&!!v.sheenColorMap,ct=N&&!!v.sheenRoughnessMap,dt=!!v.specularMap,Tt=!!v.specularColorMap,Pt=!!v.specularIntensityMap,_t=B&&!!v.transmissionMap,C=B&&!!v.thicknessMap,rt=!!v.gradientMap,$=!!v.alphaMap,st=v.alphaTest>0,pt=!!v.alphaHash,tt=!!v.extensions,Ct=dn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let bt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:Ht,defines:v.defines,customVertexShaderID:Qt,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:xt,batchingColor:xt&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:xe,envMap:kt,envMapMode:kt&&et.mapping,envMapCubeUVHeight:X,aoMap:Zt,lightMap:re,bumpMap:Nt,normalMap:jt,displacementMap:me,emissiveMap:be,normalMapObjectSpace:jt&&v.normalMapType===Oc,normalMapTangentSpace:jt&&v.normalMapType===$a,packedNormalMap:jt&&v.normalMapType===$a&&Fm(v.normalMap.format),metalnessMap:ae,roughnessMap:ge,anisotropy:I,anisotropyMap:Y,clearcoat:ve,clearcoatMap:it,clearcoatNormalMap:lt,clearcoatRoughnessMap:q,dispersion:te,retroreflection:M,iridescence:f,iridescenceMap:K,iridescenceThicknessMap:ut,sheen:N,sheenColorMap:wt,sheenRoughnessMap:ct,specularMap:dt,specularColorMap:Tt,specularIntensityMap:Pt,transmission:B,transmissionMap:_t,thicknessMap:C,gradientMap:rt,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:st,alphaHash:pt,combine:v.combine,mapUv:zt&&x(v.map.channel),aoMapUv:Zt&&x(v.aoMap.channel),lightMapUv:re&&x(v.lightMap.channel),bumpMapUv:Nt&&x(v.bumpMap.channel),normalMapUv:jt&&x(v.normalMap.channel),displacementMapUv:me&&x(v.displacementMap.channel),emissiveMapUv:be&&x(v.emissiveMap.channel),metalnessMapUv:ae&&x(v.metalnessMap.channel),roughnessMapUv:ge&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:it&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ct&&x(v.sheenRoughnessMap.channel),specularMapUv:dt&&x(v.specularMap.channel),specularColorMapUv:Tt&&x(v.specularColorMap.channel),specularIntensityMapUv:Pt&&x(v.specularIntensityMap.channel),transmissionMapUv:_t&&x(v.transmissionMap.channel),thicknessMapUv:C&&x(v.thicknessMap.channel),alphaMapUv:$&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(jt||I),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(zt||$),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&jt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ft,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:It,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===se,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(v.emissiveMap.colorSpace)===se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:tt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(w,v),T(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function d(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function P(v){let w=g[v.type],L;if(w){let U=Rn[w];L=Kc.clone(U.uniforms)}else L=v.uniforms;return L}function y(v,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new Nm(i,w,v,s),c.push(L),u.set(w,L)),L}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:P,acquireProgram:y,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function Bm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,x,S,p,d){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:g,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},i[t]=T):(T.id=h.id,T.object=h,T.geometry=g,T.material=x,T.materialVariant=a(h),T.groupOrder=S,T.renderOrder=h.renderOrder,T.z=p,T.group=d),t++,T}function l(h,g,x,S,p,d,T){T.reversedDepth===!0&&(p=-p);let P=o(h,g,x,S,p,d);x.transmission>0?n.push(P):x.transparent===!0?s.push(P):e.push(P)}function c(h,g,x,S,p,d){let T=o(h,g,x,S,p,d);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,g){e.length>1&&e.sort(h||zm),n.length>1&&n.sort(g||_h),s.length>1&&s.sort(g||_h)}function m(){for(let h=t,g=i.length;h<g;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new xh,i.set(n,[a])):s>=r.length?(a=new xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Bt};break;case"SpotLight":e={position:new z,direction:new z,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){let t=new Vm,e=Gm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new de,a=new de;function o(c){let u=0,m=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let g=0,x=0,S=0,p=0,d=0,T=0,P=0,y=0,b=0,A=0,R=0,v=0,w=0,L=0;c.sort(Wm);for(let k=0,H=c.length;k<H;k++){let D=c[k],V=D.color,J=D.intensity,Z=D.distance,et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ui?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=V.r*J,m+=V.g*J,h+=V.b*J;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],J);L++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=nt,n.sunShadowMap[x]=et;let Rt=j.getViewportCount();for(let It=0;It<Rt;It++)n.sunShadowMatrix[S+It]=j.getMatrix(It),n.sunShadowCascade[S+It]=j._cascadeData[It];S+=Rt,x++}n.sun[g]=X,g++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=X,p++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(V).multiplyScalar(J),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[T]=X;let j=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,j.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[T]=j.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[T]=nt,n.spotShadowMap[T]=et,R++}T++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(V).multiplyScalar(J),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[P]=X,P++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let j=D.shadow,nt=e.get(D);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[d]=nt,n.pointShadowMap[d]=et,n.pointShadowMatrix[d]=D.shadow.matrix,A++}n.point[d]=X,d++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(J),X.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[y]=X,y++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=h;let U=n.hash;(U.sunLength!==g||U.directionalLength!==p||U.pointLength!==d||U.spotLength!==T||U.rectAreaLength!==P||U.hemiLength!==y||U.numSunShadows!==x||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==R||U.numSpotMaps!==v||U.numLightProbes!==L)&&(n.sun.length=g,n.directional.length=p,n.spot.length=T,n.rectArea.length=P,n.point.length=d,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,U.sunLength=g,U.directionalLength=p,U.pointLength=d,U.spotLength=T,U.rectAreaLength=P,U.hemiLength=y,U.numSunShadows=x,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=R,U.numSpotMaps=v,U.numLightProbes=L,n.version=Hm++)}function l(c,u){let m=0,h=0,g=0,x=0,S=0,p=0,d=u.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){let y=c[T];if(y.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function vh(i){let t=new Xm(i),e=[],n=[],s=[];function r(h){m.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new vh(i),t.set(s,[o])):r>=a.length?(o=new vh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$m=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Jm=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],yh=new de,js=new z,Al=new z;function Km(i,t,e){let n=new ts,s=new qt,r=new qt,a=new he,o=new qr,l=new Yr,c={},u=e.maxTextureSize,m={[oi]:Ge,[Ge]:oi,[Tn]:Tn},h=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let x=new wn;x.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new we(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let d=this.type;this.render=function(A,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===pc&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);let w=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(En),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=d!==this.type;H&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=A.length;D<V;D++){let J=A[D],Z=J.shadow;if(Z===void 0){Dt("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let et=Z.getFrameExtents();s.multiply(et),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,Z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ns){if(J.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Xe(s.x,s.y,{format:ui,type:pn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new ii(s.x,s.y,nn),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Sn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Re,Z.map.depthTexture.magFilter=Re}else J.isPointLight?(Z.map=new eo(s.x),Z.map.depthTexture=new Wr(s.x,fn)):(Z.map=new Xe(s.x,s.y),Z.map.depthTexture=new ii(s.x,s.y,fn)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Sn,this.type===Ai?(Z.map.depthTexture.compareFunction=X?Ka:Ja,Z.map.depthTexture.minFilter=Ie,Z.map.depthTexture.magFilter=Ie):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Re,Z.map.depthTexture.magFilter=Re);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let j=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,v);for(let nt=0;nt<j;nt++){let Rt=Z.getCamera(nt);if(J.isPointLight){let It=Z.camera,ee=Z.matrix,Ht=J.distance||It.far;Ht!==It.far&&(It.far=Ht,It.updateProjectionMatrix()),js.setFromMatrixPosition(J.matrixWorld),It.position.copy(js),Al.copy(It.position),Al.add($m[nt]),It.up.copy(Jm[nt]),It.lookAt(Al),It.updateMatrixWorld(),ee.makeTranslation(-js.x,-js.y,-js.z),yh.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(yh,It.coordinateSystem,It.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(Z.map),i.clear());let It=Z.getViewport(nt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),k.viewport(a)}n=Z.getFrustum(nt),y(R,v,Rt,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ns&&T(Z,v),Z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(w,L,U)};function T(A,R){let v=t.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null?A.mapPass=new Xe(s.x,s.y,{format:ui,type:pn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,v,h,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value.set(A.map.width,A.map.height),g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,v,g,S,null)}function P(A,R,v,w){let L=null,U=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)L=U;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=L.uuid,H=R.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let V=D[H];V===void 0&&(V=L.clone(),D[H]=V,R.addEventListener("dispose",b)),L=V}if(L.visible=R.visible,L.wireframe=R.wireframe,w===ns?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:m[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let k=i.properties.get(L);k.light=v}return L}function y(A,R,v,w,L){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ns)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let H=t.update(A),D=A.material;if(Array.isArray(D)){let V=H.groups;for(let J=0,Z=V.length;J<Z;J++){let et=V[J],X=D[et.materialIndex];if(X&&X.visible){let j=P(A,X,w,L);A.onBeforeShadow(i,A,R,v,H,j,et),i.renderBufferDirect(v,null,H,j,A,et),A.onAfterShadow(i,A,R,v,H,j,et)}}}else if(D.visible){let V=P(A,D,w,L);A.onBeforeShadow(i,A,R,v,H,V,null),i.renderBufferDirect(v,null,H,V,A,null),A.onAfterShadow(i,A,R,v,H,V,null)}}let k=A.children;for(let H=0,D=k.length;H<D;H++)y(k[H],R,v,w,L)}function b(A){A.target.removeEventListener("dispose",b);for(let v in c){let w=c[v],L=A.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function Qm(i,t){function e(){let C=!1,rt=new he,$=null,st=new he(0,0,0,0);return{setMask:function(pt){$!==pt&&!C&&(i.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){C=pt},setClear:function(pt,tt,Ct,bt,ne){ne===!0&&(pt*=bt,tt*=bt,Ct*=bt),rt.set(pt,tt,Ct,bt),st.equals(rt)===!1&&(i.clearColor(pt,tt,Ct,bt),st.copy(rt))},reset:function(){C=!1,$=null,st.set(-1,0,0,0)}}}function n(){let C=!1,rt=!1,$=null,st=null,pt=null;return{setReversed:function(tt){if(rt!==tt){let Ct=t.get("EXT_clip_control");tt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),rt=tt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return rt},setTest:function(tt){tt?Q(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(tt){$!==tt&&!C&&(i.depthMask(tt),$=tt)},setFunc:function(tt){if(rt&&(tt=$c[tt]),st!==tt){switch(tt){case Rr:i.depthFunc(i.NEVER);break;case Ir:i.depthFunc(i.ALWAYS);break;case Pr:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Lr:i.depthFunc(i.EQUAL);break;case Dr:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Ur:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=tt}},setLocked:function(tt){C=tt},setClear:function(tt){pt!==tt&&(pt=tt,rt&&(tt=1-tt),i.clearDepth(tt))},reset:function(){C=!1,$=null,st=null,pt=null,rt=!1}}}function s(){let C=!1,rt=null,$=null,st=null,pt=null,tt=null,Ct=null,bt=null,ne=null;return{setTest:function(Jt){C||(Jt?Q(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Jt){rt!==Jt&&!C&&(i.stencilMask(Jt),rt=Jt)},setFunc:function(Jt,Oe,He){($!==Jt||st!==Oe||pt!==He)&&(i.stencilFunc(Jt,Oe,He),$=Jt,st=Oe,pt=He)},setOp:function(Jt,Oe,He){(tt!==Jt||Ct!==Oe||bt!==He)&&(i.stencilOp(Jt,Oe,He),tt=Jt,Ct=Oe,bt=He)},setLocked:function(Jt){C=Jt},setClear:function(Jt){ne!==Jt&&(i.clearStencil(Jt),ne=Jt)},reset:function(){C=!1,rt=null,$=null,st=null,pt=null,tt=null,Ct=null,bt=null,ne=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},h={},g=new WeakMap,x=[],S=null,p=!1,d=null,T=null,P=null,y=null,b=null,A=null,R=null,v=new Bt(0,0,0),w=0,L=!1,U=null,k=null,H=null,D=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=et>=2);let j=null,nt={},Rt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),ee=new he().fromArray(Rt),Ht=new he().fromArray(It);function Qt(C,rt,$,st){let pt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(C,tt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<$;Ct++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(rt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return tt}let W={};W[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc($i),Nt(!1),jt(Go),Q(i.CULL_FACE),Zt(En);function Q(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function ft(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Lt(C,rt){return h[C]!==rt?(i.bindFramebuffer(C,rt),h[C]=rt,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=rt),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function xt(C,rt){let $=x,st=!1;if(C){$=g.get(rt),$===void 0&&($=[],g.set(rt,$));let pt=C.textures;if($.length!==pt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Ct=pt.length;tt<Ct;tt++)$[tt]=i.COLOR_ATTACHMENT0+tt;$.length=pt.length,st=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,st=!0);st&&i.drawBuffers($)}function zt(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let xe={[wi]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};xe[xc]=i.MIN,xe[vc]=i.MAX;let kt={[yc]:i.ZERO,[Sc]:i.ONE,[Mc]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[bc]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Lc]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(C,rt,$,st,pt,tt,Ct,bt,ne,Jt){if(C===En){p===!0&&(ft(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),C!==mc){if(C!==d||Jt!==L){if((T!==wi||b!==wi)&&(i.blendEquation(i.FUNC_ADD),T=wi,b=wi),Jt)switch(C){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",C);break}else switch(C){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wo:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",C);break}P=null,y=null,A=null,R=null,v.set(0,0,0),w=0,d=C,L=Jt}return}pt=pt||rt,tt=tt||$,Ct=Ct||st,(rt!==T||pt!==b)&&(i.blendEquationSeparate(xe[rt],xe[pt]),T=rt,b=pt),($!==P||st!==y||tt!==A||Ct!==R)&&(i.blendFuncSeparate(kt[$],kt[st],kt[tt],kt[Ct]),P=$,y=st,A=tt,R=Ct),(bt.equals(v)===!1||ne!==w)&&(i.blendColor(bt.r,bt.g,bt.b,ne),v.copy(bt),w=ne),d=C,L=!1}function re(C,rt){C.side===Tn?ft(i.CULL_FACE):Q(i.CULL_FACE);let $=C.side===Ge;rt&&($=!$),Nt($),C.blending===is&&C.transparent===!1?Zt(En):Zt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let st=C.stencilWrite;o.setTest(st),st&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),be(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function jt(C){C!==dc?(Q(i.CULL_FACE),C!==k&&(C===Go?i.cullFace(i.BACK):C===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),k=C}function me(C){C!==H&&(Z&&i.lineWidth(C),H=C)}function be(C,rt,$){C?(Q(i.POLYGON_OFFSET_FILL),(D!==rt||V!==$)&&(D=rt,V=$,a.getReversed()&&(rt=-rt),i.polygonOffset(rt,$))):ft(i.POLYGON_OFFSET_FILL)}function ae(C){C?Q(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function ge(C){C===void 0&&(C=i.TEXTURE0+J-1),j!==C&&(i.activeTexture(C),j=C)}function I(C,rt,$){$===void 0&&(j===null?$=i.TEXTURE0+J-1:$=j);let st=nt[$];st===void 0&&(st={type:void 0,texture:void 0},nt[$]=st),(st.type!==C||st.texture!==rt)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(C,rt||W[C]),st.type=C,st.texture=rt)}function ve(){let C=nt[j];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function f(){try{i.texSubImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function N(){try{i.texSubImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function it(){try{i.texStorage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function lt(){try{i.texStorage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function q(){try{i.texImage2D(...arguments)}catch(C){Ut("WebGLState:",C)}}function K(){try{i.texImage3D(...arguments)}catch(C){Ut("WebGLState:",C)}}function ut(C){return m[C]!==void 0?m[C]:i.getParameter(C)}function wt(C,rt){m[C]!==rt&&(i.pixelStorei(C,rt),m[C]=rt)}function ct(C){ee.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ee.copy(C))}function dt(C){Ht.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ht.copy(C))}function Tt(C,rt){let $=c.get(rt);$===void 0&&($=new WeakMap,c.set(rt,$));let st=$.get(C);st===void 0&&(st=i.getUniformBlockIndex(rt,C.name),$.set(C,st))}function Pt(C,rt){let st=c.get(rt).get(C);l.get(rt)!==st&&(i.uniformBlockBinding(rt,st,C.__bindingPointIndex),l.set(rt,st))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},j=null,nt={},h={},g=new WeakMap,x=[],S=null,p=!1,d=null,T=null,P=null,y=null,b=null,A=null,R=null,v=new Bt(0,0,0),w=0,L=!1,U=null,k=null,H=null,D=null,V=null,ee.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ft,bindFramebuffer:Lt,drawBuffers:xt,useProgram:zt,setBlending:Zt,setMaterial:re,setFlipSided:Nt,setCullFace:jt,setLineWidth:me,setPolygonOffset:be,setScissorTest:ae,activeTexture:ge,bindTexture:I,unbindTexture:ve,compressedTexImage2D:te,compressedTexImage3D:M,texImage2D:q,texImage3D:K,pixelStorei:wt,getParameter:ut,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:it,texStorage3D:lt,texSubImage2D:f,texSubImage3D:N,compressedTexSubImage2D:B,compressedTexSubImage3D:Y,scissor:ct,viewport:dt,reset:_t}}function jm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap,m=new Set,h,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,f){return x?new OffscreenCanvas(M,f):ws("canvas")}function p(M,f,N){let B=1,Y=te(M);if((Y.width>N||Y.height>N)&&(B=N/Math.max(Y.width,Y.height)),B<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let it=Math.floor(B*Y.width),lt=Math.floor(B*Y.height);h===void 0&&(h=S(it,lt));let q=f?S(it,lt):h;return q.width=it,q.height=lt,q.getContext("2d").drawImage(M,0,0,it,lt),Dt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+lt+")."),q}else return"data"in M&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function d(M){return M.generateMipmaps}function T(M){i.generateMipmap(M)}function P(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(M,f,N,B,Y,it=!1){if(M!==null){if(i[M]!==void 0)return i[M];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let lt;B&&(lt=t.get("EXT_texture_norm16"),lt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=f;if(f===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8),N===i.UNSIGNED_SHORT&&lt&&(q=lt.R16_EXT),N===i.SHORT&&lt&&(q=lt.R16_SNORM_EXT)),f===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),f===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8),N===i.UNSIGNED_SHORT&&lt&&(q=lt.RG16_EXT),N===i.SHORT&&lt&&(q=lt.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),f===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),f===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),f===i.RGB&&(N===i.UNSIGNED_SHORT&&lt&&(q=lt.RGB16_EXT),N===i.SHORT&&lt&&(q=lt.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),f===i.RGBA){let K=it?As:Yt.getTransfer(Y);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=K===se?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&lt&&(q=lt.RGBA16_EXT),N===i.SHORT&&lt&&(q=lt.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(M,f){let N;return M?f===null||f===fn||f===rs?N=i.DEPTH24_STENCIL8:f===nn?N=i.DEPTH32F_STENCIL8:f===ss&&(N=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===fn||f===rs?N=i.DEPTH_COMPONENT24:f===nn?N=i.DEPTH_COMPONENT32F:f===ss&&(N=i.DEPTH_COMPONENT16),N}function A(M,f){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==Re&&M.minFilter!==Ie?Math.log2(Math.max(f.width,f.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?f.mipmaps.length:1}function R(M){let f=M.target;f.removeEventListener("dispose",R),w(f),f.isVideoTexture&&u.delete(f),f.isHTMLTexture&&m.delete(f)}function v(M){let f=M.target;f.removeEventListener("dispose",v),U(f)}function w(M){let f=n.get(M);if(f.__webglInit===void 0)return;let N=M.source,B=g.get(N);if(B){let Y=B[f.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(M),Object.keys(B).length===0&&g.delete(N)}n.remove(M)}function L(M){let f=n.get(M);i.deleteTexture(f.__webglTexture);let N=M.source,B=g.get(N);delete B[f.__cacheKey],a.memory.textures--}function U(M){let f=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(f.__webglFramebuffer[B]))for(let Y=0;Y<f.__webglFramebuffer[B].length;Y++)i.deleteFramebuffer(f.__webglFramebuffer[B][Y]);else i.deleteFramebuffer(f.__webglFramebuffer[B]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[B])}else{if(Array.isArray(f.__webglFramebuffer))for(let B=0;B<f.__webglFramebuffer.length;B++)i.deleteFramebuffer(f.__webglFramebuffer[B]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let B=0;B<f.__webglColorRenderbuffer.length;B++)f.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[B]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let N=M.textures;for(let B=0,Y=N.length;B<Y;B++){let it=n.get(N[B]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(N[B])}n.remove(M)}let k=0;function H(){k=0}function D(){return k}function V(M){k=M}function J(){let M=k;return M>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,M}function Z(M){let f=[];return f.push(M.wrapS),f.push(M.wrapT),f.push(M.wrapR||0),f.push(M.magFilter),f.push(M.minFilter),f.push(M.anisotropy),f.push(M.internalFormat),f.push(M.format),f.push(M.type),f.push(M.generateMipmaps),f.push(M.premultiplyAlpha),f.push(M.flipY),f.push(M.unpackAlignment),f.push(M.colorSpace),f.join()}function et(M,f){let N=n.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){let B=M.image;if(B===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(N,M,f);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+f)}function X(M,f){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ft(N,M,f);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+f)}function j(M,f){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){ft(N,M,f);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+f)}function nt(M,f){let N=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Lt(N,M,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+f)}let Rt={[Fr]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},It={[Re]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},ee={[zc]:i.NEVER,[Wc]:i.ALWAYS,[kc]:i.LESS,[Ja]:i.LEQUAL,[Vc]:i.EQUAL,[Ka]:i.GEQUAL,[Gc]:i.GREATER,[Hc]:i.NOTEQUAL};function Ht(M,f){if(f.type===nn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Ie||f.magFilter===ua||f.magFilter===Ws||f.magFilter===ci||f.minFilter===Ie||f.minFilter===ua||f.minFilter===Ws||f.minFilter===ci)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,Rt[f.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Rt[f.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Rt[f.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,It[f.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,It[f.minFilter]),f.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ee[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Re||f.minFilter!==Ws&&f.minFilter!==ci||f.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Qt(M,f){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,f.addEventListener("dispose",R));let B=f.source,Y=g.get(B);Y===void 0&&(Y={},g.set(B,Y));let it=Z(f);if(it!==M.__cacheKey){Y[it]===void 0&&(Y[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Y[it].usedTimes++;let lt=Y[M.__cacheKey];lt!==void 0&&(Y[M.__cacheKey].usedTimes--,lt.usedTimes===0&&L(f)),M.__cacheKey=it,M.__webglTexture=Y[it].texture}return N}function W(M,f,N){return Math.floor(Math.floor(M/N)/f)}function Q(M,f,N,B){let it=M.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,N,B,f.data);else{it.sort((wt,ct)=>wt.start-ct.start);let lt=0;for(let wt=1;wt<it.length;wt++){let ct=it[lt],dt=it[wt],Tt=ct.start+ct.count,Pt=W(dt.start,f.width,4),_t=W(ct.start,f.width,4);dt.start<=Tt+1&&Pt===_t&&W(dt.start+dt.count-1,f.width,4)===Pt?ct.count=Math.max(ct.count,dt.start+dt.count-ct.start):(++lt,it[lt]=dt)}it.length=lt+1;let q=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let wt=0,ct=it.length;wt<ct;wt++){let dt=it[wt],Tt=Math.floor(dt.start/4),Pt=Math.ceil(dt.count/4),_t=Tt%f.width,C=Math.floor(Tt/f.width),rt=Pt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,_t,C,rt,$,N,B,f.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function ft(M,f,N){let B=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(B=i.TEXTURE_3D);let Y=Qt(M,f),it=f.source;e.bindTexture(B,M.__webglTexture,i.TEXTURE0+N);let lt=n.get(it);if(it.version!==lt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let $=Yt.getPrimaries(Yt.workingColorSpace),st=f.colorSpace===Gn?null:Yt.getPrimaries(f.colorSpace),pt=f.colorSpace===Gn||$===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let K=p(f.image,!1,s.maxTextureSize);K=ve(f,K);let ut=r.convert(f.format,f.colorSpace),wt=r.convert(f.type),ct=y(f.internalFormat,ut,wt,f.normalized,f.colorSpace,f.isVideoTexture);Ht(B,f);let dt,Tt=f.mipmaps,Pt=f.isVideoTexture!==!0,_t=lt.__version===void 0||Y===!0,C=it.dataReady,rt=A(f,K);if(f.isDepthTexture)ct=b(f.format===hi,f.type),_t&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ct,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,ut,wt,null));else if(f.isDataTexture)if(Tt.length>0){Pt&&_t&&e.texStorage2D(i.TEXTURE_2D,rt,ct,Tt[0].width,Tt[0].height);for(let $=0,st=Tt.length;$<st;$++)dt=Tt[$],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,$,ct,dt.width,dt.height,0,ut,wt,dt.data);f.generateMipmaps=!1}else Pt?(_t&&e.texStorage2D(i.TEXTURE_2D,rt,ct,K.width,K.height),C&&Q(f,K,ut,wt)):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,ut,wt,K.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Pt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ct,Tt[0].width,Tt[0].height,K.depth);for(let $=0,st=Tt.length;$<st;$++)if(dt=Tt[$],f.format!==sn)if(ut!==null)if(Pt){if(C)if(f.layerUpdates.size>0){let pt=fl(dt.width,dt.height,f.format,f.type);for(let tt of f.layerUpdates){let Ct=dt.data.subarray(tt*pt/dt.data.BYTES_PER_ELEMENT,(tt+1)*pt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,tt,dt.width,dt.height,1,ut,Ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,dt.width,dt.height,K.depth,0,dt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,wt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,dt.width,dt.height,K.depth,0,ut,wt,dt.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Pt&&_t&&e.texStorage2D(i.TEXTURE_2D,rt,ct,Tt[0].width,Tt[0].height);for(let $=0,st=Tt.length;$<st;$++)dt=Tt[$],f.format!==sn?ut!==null?Pt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,dt.width,dt.height,0,dt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,$,ct,dt.width,dt.height,0,ut,wt,dt.data)}else if(f.isDataArrayTexture)if(Pt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ct,K.width,K.height,K.depth),C)if(f.layerUpdates.size>0){let $=fl(K.width,K.height,f.format,f.type);for(let st of f.layerUpdates){let pt=K.data.subarray(st*$/K.data.BYTES_PER_ELEMENT,(st+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,K.width,K.height,1,ut,wt,pt)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,wt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,K.width,K.height,K.depth,0,ut,wt,K.data);else if(f.isData3DTexture)Pt?(_t&&e.texStorage3D(i.TEXTURE_3D,rt,ct,K.width,K.height,K.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,wt,K.data)):e.texImage3D(i.TEXTURE_3D,0,ct,K.width,K.height,K.depth,0,ut,wt,K.data);else if(f.isFramebufferTexture){if(_t)if(Pt)e.texStorage2D(i.TEXTURE_2D,rt,ct,K.width,K.height);else{let $=K.width,st=K.height;for(let pt=0;pt<rt;pt++)e.texImage2D(i.TEXTURE_2D,pt,ct,$,st,0,ut,wt,null),$>>=1,st>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),m.add(f),$.onpaint=st=>{let pt=st.changedElements;for(let tt of m)pt.includes(tt.image)&&(tt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let pt=i.RGBA,tt=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,tt,Ct,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Pt&&_t){let $=te(Tt[0]);e.texStorage2D(i.TEXTURE_2D,rt,ct,$.width,$.height)}for(let $=0,st=Tt.length;$<st;$++)dt=Tt[$],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut,wt,dt):e.texImage2D(i.TEXTURE_2D,$,ct,ut,wt,dt);f.generateMipmaps=!1}else if(Pt){if(_t){let $=te(K);e.texStorage2D(i.TEXTURE_2D,rt,ct,$.width,$.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,wt,K)}else e.texImage2D(i.TEXTURE_2D,0,ct,ut,wt,K);d(f)&&T(B),lt.__version=it.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function Lt(M,f,N){if(f.image.length!==6)return;let B=Qt(M,f),Y=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let it=n.get(Y);if(Y.version!==it.__version||B===!0){e.activeTexture(i.TEXTURE0+N);let lt=Yt.getPrimaries(Yt.workingColorSpace),q=f.colorSpace===Gn?null:Yt.getPrimaries(f.colorSpace),K=f.colorSpace===Gn||lt===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=f.isCompressedTexture||f.image[0].isCompressedTexture,wt=f.image[0]&&f.image[0].isDataTexture,ct=[];for(let tt=0;tt<6;tt++)!ut&&!wt?ct[tt]=p(f.image[tt],!0,s.maxCubemapSize):ct[tt]=wt?f.image[tt].image:f.image[tt],ct[tt]=ve(f,ct[tt]);let dt=ct[0],Tt=r.convert(f.format,f.colorSpace),Pt=r.convert(f.type),_t=y(f.internalFormat,Tt,Pt,f.normalized,f.colorSpace),C=f.isVideoTexture!==!0,rt=it.__version===void 0||B===!0,$=Y.dataReady,st=A(f,dt);Ht(i.TEXTURE_CUBE_MAP,f);let pt;if(ut){C&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,_t,dt.width,dt.height);for(let tt=0;tt<6;tt++){pt=ct[tt].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){let bt=pt[Ct];f.format!==sn?Tt!==null?C?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,_t,bt.width,bt.height,0,bt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,bt.width,bt.height,Tt,Pt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,_t,bt.width,bt.height,0,Tt,Pt,bt.data)}}}else{if(pt=f.mipmaps,C&&rt){pt.length>0&&st++;let tt=te(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,_t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(wt){C?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ct[tt].width,ct[tt].height,Tt,Pt,ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,_t,ct[tt].width,ct[tt].height,0,Tt,Pt,ct[tt].data);for(let Ct=0;Ct<pt.length;Ct++){let ne=pt[Ct].image[tt].image;C?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,ne.width,ne.height,Tt,Pt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,_t,ne.width,ne.height,0,Tt,Pt,ne.data)}}else{C?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt,Pt,ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,_t,Tt,Pt,ct[tt]);for(let Ct=0;Ct<pt.length;Ct++){let bt=pt[Ct];C?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,Tt,Pt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,_t,Tt,Pt,bt.image[tt])}}}d(f)&&T(i.TEXTURE_CUBE_MAP),it.__version=Y.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function xt(M,f,N,B,Y,it){let lt=r.convert(N.format,N.colorSpace),q=r.convert(N.type),K=y(N.internalFormat,lt,q,N.normalized,N.colorSpace),ut=n.get(f),wt=n.get(N);if(wt.__renderTarget=f,!ut.__hasExternalTextures){let ct=Math.max(1,f.width>>it),dt=Math.max(1,f.height>>it);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,K,ct,dt,f.depth,0,lt,q,null):e.texImage2D(Y,it,K,ct,dt,0,lt,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ge(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Y,wt.__webglTexture,0,ae(f)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Y,wt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(M,f,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),f.depthBuffer){let B=f.depthTexture,Y=B&&B.isDepthTexture?B.type:null,it=b(f.stencilBuffer,Y),lt=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),it,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),it,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,it,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,M)}else{let B=f.textures;for(let Y=0;Y<B.length;Y++){let it=B[Y],lt=r.convert(it.format,it.colorSpace),q=r.convert(it.type),K=y(it.internalFormat,lt,q,it.normalized,it.colorSpace);ge(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),K,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),K,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,K,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(M,f,N){let B=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(f.depthTexture);if(Y.__renderTarget=f,(!Y.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),B){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,f.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,f.depthTexture);let ut=r.convert(f.depthTexture.format),wt=r.convert(f.depthTexture.type),ct;f.depthTexture.format===Sn?ct=i.DEPTH_COMPONENT24:f.depthTexture.format===hi&&(ct=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ct,f.width,f.height,0,ut,wt,null)}}else et(f.depthTexture,0);let it=Y.__webglTexture,lt=ae(f),q=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=f.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===Sn)ge(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,it,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,it,0);else if(f.depthTexture.format===hi)ge(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,it,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(M){let f=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==M.depthTexture){let B=M.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),B){let Y=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,B.removeEventListener("dispose",Y)};B.addEventListener("dispose",Y),f.__depthDisposeCallback=Y}f.__boundDepthTexture=B}if(M.depthTexture&&!f.__autoAllocateDepthBuffer)if(N)for(let B=0;B<6;B++)xe(f.__webglFramebuffer[B],M,B);else{let B=M.texture.mipmaps;B&&B.length>0?xe(f.__webglFramebuffer[0],M,0):xe(f.__webglFramebuffer,M,0)}else if(N){f.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[B]),f.__webglDepthbuffer[B]===void 0)f.__webglDepthbuffer[B]=i.createRenderbuffer(),zt(f.__webglDepthbuffer[B],M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=f.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}else{let B=M.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),zt(f.__webglDepthbuffer,M,!1);else{let Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(M,f,N){let B=n.get(M);f!==void 0&&xt(B.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&kt(M)}function re(M){let f=M.texture,N=n.get(M),B=n.get(f);M.addEventListener("dispose",v);let Y=M.textures,it=M.isWebGLCubeRenderTarget===!0,lt=Y.length>1;if(lt||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=f.version,a.memory.textures++),it){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let K=0;K<f.mipmaps.length;K++)N.__webglFramebuffer[q][K]=i.createFramebuffer()}else N.__webglFramebuffer[q]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<f.mipmaps.length;q++)N.__webglFramebuffer[q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(lt)for(let q=0,K=Y.length;q<K;q++){let ut=n.get(Y[q]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&ge(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<Y.length;q++){let K=Y[q];N.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[q]);let ut=r.convert(K.format,K.colorSpace),wt=r.convert(K.type),ct=y(K.internalFormat,ut,wt,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),dt=ae(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ct,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,N.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,f);for(let q=0;q<6;q++)if(f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)xt(N.__webglFramebuffer[q][K],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else xt(N.__webglFramebuffer[q],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(f)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let q=0,K=Y.length;q<K;q++){let ut=Y[q],wt=n.get(ut),ct=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,wt.__webglTexture),Ht(ct,ut),xt(N.__webglFramebuffer,M,ut,i.COLOR_ATTACHMENT0+q,ct,0),d(ut)&&T(ct)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(q=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,B.__webglTexture),Ht(q,f),f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)xt(N.__webglFramebuffer[K],M,f,i.COLOR_ATTACHMENT0,q,K);else xt(N.__webglFramebuffer,M,f,i.COLOR_ATTACHMENT0,q,0);d(f)&&T(q),e.unbindTexture()}M.depthBuffer&&kt(M)}function Nt(M){let f=M.textures;for(let N=0,B=f.length;N<B;N++){let Y=f[N];if(d(Y)){let it=P(M),lt=n.get(Y).__webglTexture;e.bindTexture(it,lt),T(it),e.unbindTexture()}}}let jt=[],me=[];function be(M){if(M.samples>0){if(ge(M)===!1){let f=M.textures,N=M.width,B=M.height,Y=i.COLOR_BUFFER_BIT,it=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(M),q=f.length>1;if(q)for(let ut=0;ut<f.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let K=M.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ut=0;ut<f.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ut]);let wt=n.get(f[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,Y,i.NEAREST),l===!0&&(jt.length=0,me.length=0,jt.push(i.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(jt.push(it),me.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ut=0;ut<f.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ut]);let wt=n.get(f[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let f=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function ae(M){return Math.min(s.maxSamples,M.samples)}function ge(M){let f=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function I(M){let f=a.render.frame;u.get(M)!==f&&(u.set(M,f),M.update())}function ve(M,f){let N=M.colorSpace,B=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==bs&&N!==Gn&&(Yt.getTransfer(N)===se?(B!==sn||Y!==qe)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",N)),f}function te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=Zt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tg(i,t){function e(n,s=Gn){let r,a=Yt.getTransfer(s);if(n===qe)return i.UNSIGNED_BYTE;if(n===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===da)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ol)return i.RGB;if(n===sn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===ma)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===ya||n===Sa||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Aa||n===wa||n===Ta||n===Ea||n===$s||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Aa)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ta)return r.COMPRESSED_R11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$s)return r.COMPRESSED_RG11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===Js||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,g=null,x=null,S=typeof XRWebGLBinding<"u",p=new Ll,d={},T=e.getContextAttributes(),P=null,y=null,b=[],A=[],R=new qt,v=null,w=null,L=new Ne;L.viewport=new he;let U=new Ne;U.viewport=new he;let k=[L,U],H=new aa,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=b[W];return Q===void 0&&(Q=new ji,b[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=b[W];return Q===void 0&&(Q=new ji,b[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=b[W];return Q===void 0&&(Q=new ji,b[W]=Q),Q.getHandSpace()};function J(W){let Q=A.indexOf(W.inputSource);if(Q===-1)return;let ft=b[Q];ft!==void 0&&(ft.update(W.inputSource,W.frame,c||a),ft.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",et);for(let W=0;W<b.length;W++){let Q=A[W];Q!==null&&(A[W]=null,b[W].disconnect(Q))}D=null,V=null,p.reset();for(let W in d)delete d[W];if(t.setRenderTarget(P),g=null,h=null,m=null,s=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",et),T.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Lt=null,xt=null;T.depth&&(xt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=T.stencil?hi:Sn,Lt=T.stencil?rs:fn);let zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Xe(h.textureWidth,h.textureHeight,{format:sn,type:qe,depthTexture:new ii(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ft={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Xe(g.framebufferWidth,g.framebufferHeight,{format:sn,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(W){for(let Q=0;Q<W.removed.length;Q++){let ft=W.removed[Q],Lt=A.indexOf(ft);Lt>=0&&(A[Lt]=null,b[Lt].disconnect(ft))}for(let Q=0;Q<W.added.length;Q++){let ft=W.added[Q],Lt=A.indexOf(ft);if(Lt===-1){for(let zt=0;zt<b.length;zt++)if(zt>=A.length){A.push(ft),Lt=zt;break}else if(A[zt]===null){A[zt]=ft,Lt=zt;break}if(Lt===-1)break}let xt=b[Lt];xt&&xt.connect(ft)}}let X=new z,j=new z;function nt(W,Q,ft){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ft.matrixWorld);let Lt=X.distanceTo(j),xt=Q.projectionMatrix.elements,zt=ft.projectionMatrix.elements,xe=xt[14]/(xt[10]-1),kt=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],re=(xt[9]-1)/xt[5],Nt=(xt[8]-1)/xt[0],jt=(zt[8]+1)/zt[0],me=xe*Nt,be=xe*jt,ae=Lt/(-Nt+jt),ge=ae*-Nt;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let I=xe+ae,ve=kt+ae,te=me-ge,M=be+(Lt-ge),f=Zt*kt/ve*I,N=re*kt/ve*I;W.projectionMatrix.makePerspective(te,M,f,N,I,ve),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Rt(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,ft=W.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),H.near=U.near=L.near=Q,H.far=U.far=L.far=ft,(D!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,V=H.far),H.layers.mask=W.layers.mask|6,L.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Lt=W.parent,xt=H.cameras;Rt(H,Lt);for(let zt=0;zt<xt.length;zt++)Rt(xt[zt],Lt);xt.length===2?nt(H,L,U):H.projectionMatrix.copy(L.projectionMatrix),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),It(W,H,Lt)};function It(W,Q,ft){ft===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ft.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(W){return d[W]};let ee=null;function Ht(W,Q){if(u=Q.getViewerPose(c||a),x=Q,u!==null){let ft=u.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let Lt=!1;ft.length!==H.cameras.length&&(H.cameras.length=0,Lt=!0);for(let kt=0;kt<ft.length;kt++){let Zt=ft[kt],re=null;if(g!==null)re=g.getViewport(Zt);else{let jt=m.getViewSubImage(h,Zt);re=jt.viewport,kt===0&&(t.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(y))}let Nt=k[kt];Nt===void 0&&(Nt=new Ne,Nt.layers.enable(kt),Nt.viewport=new he,k[kt]=Nt),Nt.matrix.fromArray(Zt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Zt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(H.matrix.copy(Nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Lt===!0&&H.cameras.push(Nt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let kt=m.getDepthInformation(ft[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(xt&&xt.includes("camera-access")&&S){t.state.unbindTexture(),m=n.getBinding();for(let kt=0;kt<ft.length;kt++){let Zt=ft[kt].camera;if(Zt){let re=d[Zt];re||(re=new Fs,d[Zt]=re);let Nt=m.getCameraImage(Zt);re.sourceTexture=Nt}}}}for(let ft=0;ft<b.length;ft++){let Lt=A[ft],xt=b[ft];Lt!==null&&xt!==void 0&&xt.update(Lt,Q,c||a)}ee&&ee(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}let Qt=new Sh;Qt.setAnimationLoop(Ht),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}},ig=new de,Eh=new Ot;Eh.set(-1,0,0,0,1,0,0,0,1);function sg(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,hl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,T,P,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),m(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,P):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ge&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ge&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let T=t.get(d),P=T.envMap,y=T.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Eh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,P){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=P*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let T=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let A=b.program;n.uniformBlockBinding(y,A)}function c(y,b){let A=s[y.id];A===void 0&&(p(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",T));let R=b.program;n.updateUBOMapping(y,R);let v=t.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let b=m();y.__bindingPointIndex=b;let A=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,A),A}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],A=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,w=A.length;v<w;v++){let L=A[v];if(Array.isArray(L))for(let U=0,k=L.length;U<k;U++)g(L[U],v,U,R);else g(L,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,b,A,R){if(S(y,b,A,R)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let U=0;U<w.length;U++){let k=w[U],H=d(k);x(k,y.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function x(y,b,A){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,A)}function S(y,b,A,R){let v=y.value,w=b+"_"+A;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let L=R[w];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(y){let b=y.uniforms,A=0,R=16;for(let w=0,L=b.length;w<L;w++){let U=Array.isArray(b[w])?b[w]:[b[w]];for(let k=0,H=U.length;k<H;k++){let D=U[k],V=Array.isArray(D.value)?D.value:[D.value];for(let J=0,Z=V.length;J<Z;J++){let et=V[J],X=d(et),j=A%R,nt=j%X.boundary,Rt=j+nt;A+=nt,Rt!==0&&R-Rt<X.storage&&(A+=R-Rt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=X.storage}}}let v=A%R;return v>0&&(A+=R-v),y.__size=A,y.__cache={},this}function d(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",y),b}function T(y){let b=y.target;b.removeEventListener("dispose",T);let A=a.indexOf(b.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function P(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function og(){return Cn===null&&(Cn=new Ls(ag,16,16,ui,pn),Cn.name="DFG_LUT",Cn.minFilter=Ie,Cn.magFilter=Ie,Cn.wrapS=vn,Cn.wrapT=vn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var no=class{constructor(t={}){let{canvas:e=qc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=qe}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=g,p=new Set([xa,_a,ga]),d=new Set([qe,fn,ss,rs,fa,pa]),T=new Uint32Array(4),P=new Int32Array(4),y=new z,b=null,A=null,R=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,k=null,H=null,D=null,V=null;this._outputColorSpace=ze;let J=0,Z=0,et=null,X=-1,j=null,nt=new he,Rt=new he,It=null,ee=new Bt(0),Ht=0,Qt=e.width,W=e.height,Q=1,ft=null,Lt=null,xt=new he(0,0,Qt,W),zt=new he(0,0,Qt,W),xe=!1,kt=new ts,Zt=!1,re=!1,Nt=new de,jt=new z,me=new he,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function ge(){return et===null?Q:1}let I=n;function ve(_,E){return e.getContext(_,E)}let te,M,f,N,B,Y,it,lt,q,K,ut,wt,ct,dt,Tt,Pt,_t,C,rt,$,st,pt,tt;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),I===null){let E="webgl2";if(I=ve(E,_),I===null)throw ve(E)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(_){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),Ut("WebGLRenderer: "+_.message),_}function Ct(){te=new pp(I),te.init(),st=new tg(I,te),M=new sp(I,te,t,st),f=new Qm(I,te),M.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),H=I.createFramebuffer(),D=I.createFramebuffer(),V=I.createFramebuffer(),N=new _p(I),B=new Bm,Y=new jm(I,te,f,B,M,st,N),it=new fp(L),lt=new xu(I),pt=new np(I,lt),q=new mp(I,lt,N,pt),K=new vp(I,q,lt,pt,N),C=new xp(I,M,Y),Tt=new rp(B),ut=new Om(L,it,te,M,pt,Tt),wt=new sg(L,B),ct=new km,dt=new qm(te),_t=new ep(L,it,f,K,x,l),Pt=new Km(L,K,M),tt=new rg(I,N,M,f),rt=new ip(I,te,N),$=new gp(I,te,N),N.programs=ut.programs,L.capabilities=M,L.extensions=te,L.properties=B,L.renderLists=ct,L.shadowMap=Pt,L.state=f,L.info=N}S!==qe&&(w=new Sp(S,e.width,e.height,o,s,r));let bt=new Dl(L,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let _=te.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=te.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(_){_!==void 0&&(Q=_,this.setSize(Qt,W,!1))},this.getSize=function(_){return _.set(Qt,W)},this.setSize=function(_,E,G=!0){if(bt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=_,W=E,e.width=Math.floor(_*Q),e.height=Math.floor(E*Q),G===!0&&(e.style.width=_+"px",e.style.height=E+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,_,E)},this.getDrawingBufferSize=function(_){return _.set(Qt*Q,W*Q).floor()},this.setDrawingBufferSize=function(_,E,G){Qt=_,W=E,Q=G,e.width=Math.floor(_*G),e.height=Math.floor(E*G),this.setViewport(0,0,_,E)},this.setEffects=function(_){if(S===qe){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let E=0;E<_.length;E++)if(_[E].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(nt)},this.getViewport=function(_){return _.copy(xt)},this.setViewport=function(_,E,G,F){_.isVector4?xt.set(_.x,_.y,_.z,_.w):xt.set(_,E,G,F),f.viewport(nt.copy(xt).multiplyScalar(Q).round())},this.getScissor=function(_){return _.copy(zt)},this.setScissor=function(_,E,G,F){_.isVector4?zt.set(_.x,_.y,_.z,_.w):zt.set(_,E,G,F),f.scissor(Rt.copy(zt).multiplyScalar(Q).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(_){f.setScissorTest(xe=_)},this.setOpaqueSort=function(_){ft=_},this.setTransparentSort=function(_){Lt=_},this.getClearColor=function(_){return _.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(_=!0,E=!0,G=!0){let F=0;if(_){let O=!1;if(et!==null){let mt=et.texture.format;O=p.has(mt)}if(O){let mt=et.texture.type,vt=d.has(mt),ot=_t.getClearColor(),yt=_t.getClearAlpha(),At=ot.r,Vt=ot.g,Xt=ot.b;vt?(T[0]=At,T[1]=Vt,T[2]=Xt,T[3]=yt,I.clearBufferuiv(I.COLOR,0,T)):(P[0]=At,P[1]=Vt,P[2]=Xt,P[3]=yt,I.clearBufferiv(I.COLOR,0,P))}else F|=I.COLOR_BUFFER_BIT}E&&(F|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),k=_},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),_t.dispose(),ct.dispose(),dt.dispose(),B.dispose(),it.dispose(),K.dispose(),pt.dispose(),tt.dispose(),ut.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rr),bt.removeEventListener("sessionend",fs),mn.stop()};function ne(_){_.preventDefault(),cl("WebGLRenderer: Context Lost."),U=!0}function Jt(){cl("WebGLRenderer: Context Restored."),U=!1;let _=N.autoReset,E=Pt.enabled,G=Pt.autoUpdate,F=Pt.needsUpdate,O=Pt.type;Ct(),N.autoReset=_,Pt.enabled=E,Pt.autoUpdate=G,Pt.needsUpdate=F,Pt.type=O}function Oe(_){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function He(_){let E=_.target;E.removeEventListener("dispose",He),ir(E)}function ir(_){gi(_),B.remove(_)}function gi(_){let E=B.get(_).programs;E!==void 0&&(E.forEach(function(G){ut.releaseProgram(G)}),_.isShaderMaterial&&ut.releaseShaderCache(_))}this.renderBufferDirect=function(_,E,G,F,O,mt){E===null&&(E=be);let vt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ot=ht(_,E,G,F,O);f.setMaterial(F,vt);let yt=G.index,At=1;if(F.wireframe===!0){if(yt=q.getWireframeAttribute(G),yt===void 0)return;At=2}let Vt=G.drawRange,Xt=G.attributes.position,Et=Vt.start*At,ie=(Vt.start+Vt.count)*At;mt!==null&&(Et=Math.max(Et,mt.start*At),ie=Math.min(ie,(mt.start+mt.count)*At)),yt!==null?(Et=Math.max(Et,0),ie=Math.min(ie,yt.count)):Xt!=null&&(Et=Math.max(Et,0),ie=Math.min(ie,Xt.count));let Se=ie-Et;if(Se<0||Se===1/0)return;pt.setup(O,F,ot,G,yt);let fe,ce=rt;if(yt!==null&&(fe=lt.get(yt),ce=$,ce.setIndex(fe)),O.isMesh)F.wireframe===!0?(f.setLineWidth(F.wireframeLinewidth*ge()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(O.isLine){let Pe=F.linewidth;Pe===void 0&&(Pe=1),f.setLineWidth(Pe*ge()),O.isLineSegments?ce.setMode(I.LINES):O.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else O.isPoints?ce.setMode(I.POINTS):O.isSprite&&ce.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pe=O._multiDrawStarts,Mt=O._multiDrawCounts,Be=O._multiDrawCount,Kt=yt?lt.get(yt).bytesPerElement:1,Qe=B.get(F).currentProgram.getUniforms();for(let _n=0;_n<Be;_n++)Qe.setValue(I,"_gl_DrawID",_n),ce.render(Pe[_n]/Kt,Mt[_n])}else if(O.isInstancedMesh)ce.renderInstances(Et,Se,O.count);else if(G.isInstancedBufferGeometry){let Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,Pe);ce.renderInstances(Et,Se,Mt)}else ce.render(Et,Se)};function In(_,E,G,F){k!==null&&_.isNodeMaterial&&k.setObject(F,_),Zt===!0&&Tt.setState(_,G,!1),_.transparent===!0&&_.side===Tn&&_.forceSinglePass===!1?(_.side=Ge,_.needsUpdate=!0,_i(_,E,F),_.side=oi,_.needsUpdate=!0,_i(_,E,F),_.side=Tn):_i(_,E,F)}this.compile=function(_,E,G=null){G===null&&(G=_),k!==null&&k.renderStart(_,E,G),A=dt.get(G),A.init(E),v.push(A),G.traverseVisible(function(O){O.isLight&&O.layers.test(E.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),_!==G&&_.traverseVisible(function(O){O.isLight&&O.layers.test(E.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),re=this.localClippingEnabled,Zt=Tt.init(this.clippingPlanes,re),Zt===!0&&Tt.setGlobalState(this.clippingPlanes,E),k!==null&&Pt.render(A.state.shadowsArray,G,E);let F=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let mt=O.material;if(mt)if(Array.isArray(mt))for(let vt=0;vt<mt.length;vt++){let ot=mt[vt];In(ot,G,E,O),F.add(ot)}else In(mt,G,E,O),F.add(mt)}),A=v.pop(),k!==null&&k.renderEnd(),F},this.compileAsync=function(_,E,G=null){let F=this.compile(_,E,G);return new Promise(O=>{function mt(){if(F.forEach(function(vt){let yt=B.get(vt).currentProgram;(yt===void 0||yt.isReady())&&F.delete(vt)}),F.size===0){O(_);return}setTimeout(mt,10)}te.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ds=null;function sr(_){ds&&ds(_)}function rr(){mn.stop()}function fs(){mn.start()}let mn=new Sh;mn.setAnimationLoop(sr),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(_){ds=_,bt.setAnimationLoop(_),_===null?mn.stop():mn.start()},bt.addEventListener("sessionstart",rr),bt.addEventListener("sessionend",fs),this.render=function(_,E){if(E!==void 0&&E.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(_,E);let G=bt.enabled===!0&&bt.isPresenting===!0,F=w!==null&&(et===null||G)&&w.begin(L,et);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(E),E=bt.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,E,et),A=dt.get(_,v.length),A.init(E),A.state.textureUnits=Y.getTextureUnits(),v.push(A),Nt.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),kt.setFromProjectionMatrix(Nt,un,E.reversedDepth),re=this.localClippingEnabled,Zt=Tt.init(this.clippingPlanes,re),b=ct.get(_,R.length),b.init(),R.push(b),bt.enabled===!0&&bt.isPresenting===!0){let vt=L.xr.getDepthSensingMesh();vt!==null&&Ke(vt,E,-1/0,L.sortObjects)}Ke(_,E,0,L.sortObjects),b.finish(),k!==null&&k.updateLights(A.state.lightsArray),L.sortObjects===!0&&b.sort(ft,Lt),ae=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ae&&_t.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Tt.beginShadows();let O=A.state.shadowsArray;if(Pt.render(O,_,E),Zt===!0&&Tt.endShadows(),(F&&w.hasRenderPass())===!1){let vt=b.opaque,ot=b.transmissive;if(A.setupLights(),E.isArrayCamera){let yt=E.cameras;if(ot.length>0)for(let At=0,Vt=yt.length;At<Vt;At++){let Xt=yt[At];ar(vt,ot,_,Xt)}ae&&_t.render(_);for(let At=0,Vt=yt.length;At<Vt;At++){let Xt=yt[At];Ii(b,_,Xt,Xt.viewport)}}else ot.length>0&&ar(vt,ot,_,E),ae&&_t.render(_),Ii(b,_,E)}et!==null&&Z===0&&(Y.updateMultisampleRenderTarget(et),Y.updateRenderTargetMipmap(et)),F&&w.end(L),_.isScene===!0&&_.onAfterRender(L,_,E),pt.resetDefaultState(),X=-1,j=null,v.pop(),v.length>0?(A=v[v.length-1],Y.setTextureUnits(A.state.textureUnits),Zt===!0&&Tt.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,k!==null&&k.renderEnd()};function Ke(_,E,G,F){if(_.visible===!1)return;if(_.layers.test(E.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(E);else if(_.isLightProbeGrid)A.pushLightProbeGrid(_);else if(_.isLight)A.pushLight(_),_.castShadow&&A.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(kt)){F&&me.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Nt);let vt=K.update(_),ot=_.material;ot.visible&&b.push(_,vt,ot,G,me.z,null,E)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(kt))){let vt=K.update(_),ot=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),me.copy(_.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),me.copy(vt.boundingSphere.center)),me.applyMatrix4(_.matrixWorld).applyMatrix4(Nt)),Array.isArray(ot)){let yt=vt.groups;for(let At=0,Vt=yt.length;At<Vt;At++){let Xt=yt[At],Et=ot[Xt.materialIndex];Et&&Et.visible&&b.push(_,vt,Et,G,me.z,Xt,E)}}else ot.visible&&b.push(_,vt,ot,G,me.z,null,E)}}let mt=_.children;for(let vt=0,ot=mt.length;vt<ot;vt++)Ke(mt[vt],E,G,F)}function Ii(_,E,G,F){let{opaque:O,transmissive:mt,transparent:vt}=_;A.setupLightsView(G),Zt===!0&&Tt.setGlobalState(L.clippingPlanes,G),F&&f.viewport(nt.copy(F)),O.length>0&&qn(O,E,G),mt.length>0&&qn(mt,E,G),vt.length>0&&qn(vt,E,G),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function ar(_,E,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Et=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new Xe(1,1,{generateMipmaps:!0,type:Et?pn:qe,minFilter:ci,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let mt=A.state.transmissionRenderTarget[F.id],vt=F.viewport||nt;mt.setSize(vt.z*L.transmissionResolutionScale,vt.w*L.transmissionResolutionScale);let ot=L.getRenderTarget(),yt=L.getActiveCubeFace(),At=L.getActiveMipmapLevel();L.setRenderTarget(mt),L.getClearColor(ee),Ht=L.getClearAlpha(),Ht<1&&L.setClearColor(16777215,.5),L.clear(),ae&&_t.render(G);let Vt=L.toneMapping;L.toneMapping=dn;let Xt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),Zt===!0&&Tt.setGlobalState(L.clippingPlanes,F),qn(_,G,F),Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ie=0,Se=E.length;ie<Se;ie++){let fe=E[ie],{object:ce,geometry:Pe,material:Mt,group:Be}=fe;if(Mt.side===Tn&&ce.layers.test(F.layers)){let Kt=Mt.side;Mt.side=Ge,Mt.needsUpdate=!0,gn(ce,G,F,Pe,Mt,Be),Mt.side=Kt,Mt.needsUpdate=!0,Et=!0}}Et===!0&&(Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt))}L.setRenderTarget(ot,yt,At),L.setClearColor(ee,Ht),Xt!==void 0&&(F.viewport=Xt),L.toneMapping=Vt}function qn(_,E,G){let F=E.isScene===!0?E.overrideMaterial:null;for(let O=0,mt=_.length;O<mt;O++){let vt=_[O],{object:ot,geometry:yt,group:At}=vt,Vt=vt.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),ot.layers.test(G.layers)&&gn(ot,E,G,yt,Vt,At)}}function gn(_,E,G,F,O,mt){k!==null&&O.isNodeMaterial&&k.setObject(_,O),_.onBeforeRender(L,E,G,F,O,mt),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(L,E,G,F,_,mt),O.transparent===!0&&O.side===Tn&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,L.renderBufferDirect(G,E,F,O,_,mt),O.side=oi,O.needsUpdate=!0,L.renderBufferDirect(G,E,F,O,_,mt),O.side=Tn):L.renderBufferDirect(G,E,F,O,_,mt),_.onAfterRender(L,E,G,F,O,mt)}function _i(_,E,G){E.isScene!==!0&&(E=be);let F=B.get(_),O=A.state.lights,mt=A.state.shadowsArray,vt=O.state.version,ot=ut.getParameters(_,O.state,mt,E,G,A.state.lightProbeGridArray),yt=ut.getProgramCacheKey(ot),At=F.programs;F.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,F.fog=E.fog;let Vt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;F.envMap=it.get(_.envMap||F.environment,Vt),F.envMapRotation=F.environment!==null&&_.envMap===null?E.environmentRotation:_.envMapRotation,At===void 0&&(_.addEventListener("dispose",He),At=new Map,F.programs=At);let Xt=At.get(yt);if(Xt!==void 0){if(F.currentProgram===Xt&&F.lightsStateVersion===vt)return Pi(_,ot),Xt}else ot.uniforms=ut.getUniforms(_),k!==null&&_.isNodeMaterial&&k.build(_,G,ot),_.onBeforeCompile(ot,L),Xt=ut.acquireProgram(ot,yt),At.set(yt,Xt),F.uniforms=ot.uniforms;let Et=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Et.clippingPlanes=Tt.uniform),Pi(_,ot),F.needsLights=Ft(_),F.lightsStateVersion=vt,F.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.sunLights.value=O.state.sun,Et.sunLightShadows.value=O.state.sunShadow,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.sunShadowMatrix.value=O.state.sunShadowMatrix,Et.sunShadowCascade.value=O.state.sunShadowCascade,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=A.state.lightProbeGridArray.length>0,F.currentProgram=Xt,F.uniformsList=null,Xt}function ps(_){if(_.uniformsList===null){let E=_.currentProgram.getUniforms();_.uniformsList=ls.seqWithValue(E.seq,_.uniforms)}return _.uniformsList}function Pi(_,E){let G=B.get(_);G.outputColorSpace=E.outputColorSpace,G.batching=E.batching,G.batchingColor=E.batchingColor,G.instancing=E.instancing,G.instancingColor=E.instancingColor,G.instancingMorph=E.instancingMorph,G.skinning=E.skinning,G.morphTargets=E.morphTargets,G.morphNormals=E.morphNormals,G.morphColors=E.morphColors,G.morphTargetsCount=E.morphTargetsCount,G.numClippingPlanes=E.numClippingPlanes,G.numIntersection=E.numClipIntersection,G.vertexAlphas=E.vertexAlphas,G.vertexTangents=E.vertexTangents,G.toneMapping=E.toneMapping}function at(_,E){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(E.matrixWorld);for(let G=0,F=_.length;G<F;G++){let O=_[G];if(O.texture!==null&&O.boundingBox.containsPoint(y))return O}return null}function ht(_,E,G,F,O){E.isScene!==!0&&(E=be),Y.resetTextureUnits();let mt=E.fog,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?E.environment:null,ot=et===null?L.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Yt.workingColorSpace,yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,At=it.get(F.envMap||vt,yt),Vt=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Et=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,Se=!!G.morphAttributes.color,fe=dn;F.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=L.toneMapping);let ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pe=ce!==void 0?ce.length:0,Mt=B.get(F),Be=A.state.lights;if(Zt===!0&&(re===!0||_!==j)){let ue=_===j&&F.id===X;Tt.setState(F,_,ue)}let Kt=!1;F.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Be.state.version||Mt.outputColorSpace!==ot||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==At||F.fog===!0&&Mt.fog!==mt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Tt.numPlanes||Mt.numIntersection!==Tt.numIntersection)||Mt.vertexAlphas!==Vt||Mt.vertexTangents!==Xt||Mt.morphTargets!==Et||Mt.morphNormals!==ie||Mt.morphColors!==Se||Mt.toneMapping!==fe||Mt.morphTargetsCount!==Pe||!!Mt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,Mt.__version=F.version);let Qe=Mt.currentProgram;Kt===!0&&(Qe=_i(F,E,O),k&&F.isNodeMaterial&&k.onUpdateProgram(F,Qe,Mt));let _n=!1,Yn=!1,Li=!1,le=Qe.getUniforms(),ye=Mt.uniforms;if(f.useProgram(Qe.program)&&(_n=!0,Yn=!0,Li=!0),F.id!==X&&(X=F.id,Yn=!0),Mt.needsLights){let ue=at(A.state.lightProbeGridArray,O);Mt.lightProbeGrid!==ue&&(Mt.lightProbeGrid=ue,Yn=!0)}if(_n||j!==_){f.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),le.setValue(I,"projectionMatrix",_.projectionMatrix),le.setValue(I,"viewMatrix",_.matrixWorldInverse);let $n=le.map.cameraPosition;$n!==void 0&&$n.setValue(I,jt.setFromMatrixPosition(_.matrixWorld)),M.logarithmicDepthBuffer&&le.setValue(I,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&le.setValue(I,"isOrthographic",_.isOrthographicCamera===!0),j!==_&&(j=_,Yn=!0,Li=!0)}if(Mt.needsLights&&(Be.state.sunShadowMap.length>0&&le.setValue(I,"sunShadowMap",Be.state.sunShadowMap,Y),Be.state.directionalShadowMap.length>0&&le.setValue(I,"directionalShadowMap",Be.state.directionalShadowMap,Y),Be.state.spotShadowMap.length>0&&le.setValue(I,"spotShadowMap",Be.state.spotShadowMap,Y),Be.state.pointShadowMap.length>0&&le.setValue(I,"pointShadowMap",Be.state.pointShadowMap,Y)),O.isSkinnedMesh){le.setOptional(I,O,"bindMatrix"),le.setOptional(I,O,"bindMatrixInverse");let ue=O.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),le.setValue(I,"boneTexture",ue.boneTexture,Y))}O.isBatchedMesh&&(le.setOptional(I,O,"batchingTexture"),le.setValue(I,"batchingTexture",O._matricesTexture,Y),le.setOptional(I,O,"batchingIdTexture"),le.setValue(I,"batchingIdTexture",O._indirectTexture,Y),le.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(I,"batchingColorTexture",O._colorsTexture,Y));let Zn=G.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&C.update(O,G,Qe),(Yn||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,le.setValue(I,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&E.environment!==null&&(ye.envMapIntensity.value=E.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=og()),Yn){if(le.setValue(I,"toneMappingExposure",L.toneMappingExposure),Mt.needsLights&&St(ye,Li),mt&&F.fog===!0&&wt.refreshFogUniforms(ye,mt),wt.refreshMaterialUniforms(ye,F,Q,W,A.state.transmissionRenderTarget[_.id]),Mt.needsLights&&Mt.lightProbeGrid){let ue=Mt.lightProbeGrid;ye.probesSH.value=ue.texture,ye.probesMin.value.copy(ue.boundingBox.min),ye.probesMax.value.copy(ue.boundingBox.max),ye.probesResolution.value.copy(ue.resolution)}ls.upload(I,ps(Mt),ye,Y)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ls.upload(I,ps(Mt),ye,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&le.setValue(I,"center",O.center),le.setValue(I,"modelViewMatrix",O.modelViewMatrix),le.setValue(I,"normalMatrix",O.normalMatrix),le.setValue(I,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let ue=F.uniformsGroups;for(let $n=0,Di=ue.length;$n<Di;$n++){let Gl=ue[$n];tt.update(Gl,Qe),tt.bind(Gl,Qe)}}return Qe}function St(_,E){_.ambientLightColor.needsUpdate=E,_.lightProbe.needsUpdate=E,_.sunLights.needsUpdate=E,_.sunLightShadows.needsUpdate=E,_.directionalLights.needsUpdate=E,_.directionalLightShadows.needsUpdate=E,_.pointLights.needsUpdate=E,_.pointLightShadows.needsUpdate=E,_.spotLights.needsUpdate=E,_.spotLightShadows.needsUpdate=E,_.rectAreaLights.needsUpdate=E,_.hemisphereLights.needsUpdate=E}function Ft(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(_,E,G){let F=B.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),B.get(_.texture).__webglTexture=E,B.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,E){let G=B.get(_);G.__webglFramebuffer=E,G.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(_,E=0,G=0){et=_,J=E,Z=G;let F=null,O=!1,mt=!1;if(_){let ot=B.get(_);if(ot.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(I.FRAMEBUFFER,ot.__webglFramebuffer),nt.copy(_.viewport),Rt.copy(_.scissor),It=_.scissorTest,f.viewport(nt),f.scissor(Rt),f.setScissorTest(It),X=-1;return}else if(ot.__webglFramebuffer===void 0)Y.setupRenderTarget(_);else if(ot.__hasExternalTextures)Y.rebindTextures(_,B.get(_.texture).__webglTexture,B.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Vt=_.depthTexture;if(ot.__boundDepthTexture!==Vt){if(Vt!==null&&B.has(Vt)&&(_.width!==Vt.image.width||_.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(_)}}let yt=_.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);let At=B.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(At[E])?F=At[E][G]:F=At[E],O=!0):_.samples>0&&Y.useMultisampledRTT(_)===!1?F=B.get(_).__webglMultisampledFramebuffer:Array.isArray(At)?F=At[G]:F=At,nt.copy(_.viewport),Rt.copy(_.scissor),It=_.scissorTest}else nt.copy(xt).multiplyScalar(Q).floor(),Rt.copy(zt).multiplyScalar(Q).floor(),It=xe;if(G!==0&&(F=H),f.bindFramebuffer(I.FRAMEBUFFER,F)&&f.drawBuffers(_,F),f.viewport(nt),f.scissor(Rt),f.setScissorTest(It),O){let ot=B.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+E,ot.__webglTexture,G)}else if(mt){let ot=E;for(let yt=0;yt<_.textures.length;yt++){let At=B.get(_.textures[yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+yt,At.__webglTexture,G,ot)}}else if(_!==null&&G!==0){let ot=B.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ot.__webglTexture,G)}X=-1};function Wt(_){let E=B.get(_);return(E.__readFormat!==_.format||E.__readType!==_.type)&&(E.__readFormat=_.format,E.__readType=_.type,E.__formatReadable=M.textureFormatReadable(_.format),E.__typeReadable=M.textureTypeReadable(_.type)),E}this.readRenderTargetPixels=function(_,E,G,F,O,mt,vt,ot=0){if(!(_&&_.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=B.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){f.bindFramebuffer(I.FRAMEBUFFER,yt);try{let At=_.textures[ot],Vt=At.format,Xt=At.type;_.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ot);let Et=Wt(At);if(Et.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=_.width-F&&G>=0&&G<=_.height-O&&I.readPixels(E,G,F,O,st.convert(Vt),st.convert(Xt),mt)}finally{let At=et!==null?B.get(et).__webglFramebuffer:null;f.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(_,E,G,F,O,mt,vt,ot=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=B.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(E>=0&&E<=_.width-F&&G>=0&&G<=_.height-O){f.bindFramebuffer(I.FRAMEBUFFER,yt);let At=_.textures[ot],Vt=At.format,Xt=At.type;_.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ot);let Et=Wt(At);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ie),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(E,G,F,O,st.convert(Vt),st.convert(Xt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Se=et!==null?B.get(et).__webglFramebuffer:null;f.bindFramebuffer(I.FRAMEBUFFER,Se);let fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zc(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ie),I.deleteSync(fe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,E=null,G=0){let F=Math.pow(2,-G),O=Math.floor(_.image.width*F),mt=Math.floor(_.image.height*F),vt=E!==null?E.x:0,ot=E!==null?E.y:0;Y.setTexture2D(_,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,vt,ot,O,mt),f.unbindTexture()},this.copyTextureToTexture=function(_,E,G=null,F=null,O=0,mt=0){let vt,ot,yt,At,Vt,Xt,Et,ie,Se,fe=_.isCompressedTexture?_.mipmaps[mt]:_.image;if(G!==null)vt=G.max.x-G.min.x,ot=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Vt=G.min.y,Xt=G.isBox3?G.min.z:0;else{let ye=Math.pow(2,-O);vt=Math.floor(fe.width*ye),ot=Math.floor(fe.height*ye),_.isDataArrayTexture?yt=fe.depth:_.isData3DTexture?yt=Math.floor(fe.depth*ye):yt=1,At=0,Vt=0,Xt=0}F!==null?(Et=F.x,ie=F.y,Se=F.z):(Et=0,ie=0,Se=0);let ce=st.convert(E.format),Pe=st.convert(E.type),Mt;E.isData3DTexture?(Y.setTexture3D(E,0),Mt=I.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(Y.setTexture2DArray(E,0),Mt=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(E,0),Mt=I.TEXTURE_2D),f.activeTexture(I.TEXTURE0),f.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,E.flipY),f.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),f.pixelStorei(I.UNPACK_ALIGNMENT,E.unpackAlignment);let Be=f.getParameter(I.UNPACK_ROW_LENGTH),Kt=f.getParameter(I.UNPACK_IMAGE_HEIGHT),Qe=f.getParameter(I.UNPACK_SKIP_PIXELS),_n=f.getParameter(I.UNPACK_SKIP_ROWS),Yn=f.getParameter(I.UNPACK_SKIP_IMAGES);f.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),f.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),f.pixelStorei(I.UNPACK_SKIP_PIXELS,At),f.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),f.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);let Li=_.isDataArrayTexture||_.isData3DTexture,le=E.isDataArrayTexture||E.isData3DTexture;if(_.isDepthTexture){let ye=B.get(_),Zn=B.get(E),ue=B.get(ye.__renderTarget),$n=B.get(Zn.__renderTarget);f.bindFramebuffer(I.READ_FRAMEBUFFER,ue.__webglFramebuffer),f.bindFramebuffer(I.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Di=0;Di<yt;Di++)Li&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(_).__webglTexture,O,Xt+Di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(E).__webglTexture,mt,Se+Di)),I.blitFramebuffer(At,Vt,vt,ot,Et,ie,vt,ot,I.DEPTH_BUFFER_BIT,I.NEAREST);f.bindFramebuffer(I.READ_FRAMEBUFFER,null),f.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||B.has(_)){let ye=B.get(_),Zn=B.get(E);f.bindFramebuffer(I.READ_FRAMEBUFFER,D),f.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let ue=0;ue<yt;ue++)Li?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,O,Xt+ue):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,O),le?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,mt,Se+ue):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,mt),O!==0?I.blitFramebuffer(At,Vt,vt,ot,Et,ie,vt,ot,I.COLOR_BUFFER_BIT,I.NEAREST):le?I.copyTexSubImage3D(Mt,mt,Et,ie,Se+ue,At,Vt,vt,ot):I.copyTexSubImage2D(Mt,mt,Et,ie,At,Vt,vt,ot);f.bindFramebuffer(I.READ_FRAMEBUFFER,null),f.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else le?_.isDataTexture||_.isData3DTexture?I.texSubImage3D(Mt,mt,Et,ie,Se,vt,ot,yt,ce,Pe,fe.data):E.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,mt,Et,ie,Se,vt,ot,yt,ce,fe.data):I.texSubImage3D(Mt,mt,Et,ie,Se,vt,ot,yt,ce,Pe,fe):_.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,mt,Et,ie,vt,ot,ce,Pe,fe.data):_.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,mt,Et,ie,fe.width,fe.height,ce,fe.data):I.texSubImage2D(I.TEXTURE_2D,mt,Et,ie,vt,ot,ce,Pe,fe);f.pixelStorei(I.UNPACK_ROW_LENGTH,Be),f.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Kt),f.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),f.pixelStorei(I.UNPACK_SKIP_ROWS,_n),f.pixelStorei(I.UNPACK_SKIP_IMAGES,Yn),mt===0&&E.generateMipmaps&&I.generateMipmap(Mt),f.unbindTexture()},this.initRenderTarget=function(_){B.get(_).__webglFramebuffer===void 0&&Y.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Y.setTextureCube(_,0):_.isData3DTexture?Y.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Y.setTexture2DArray(_,0):Y.setTexture2D(_,0),f.unbindTexture()},this.resetState=function(){J=0,Z=0,et=null,f.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Ch="data:image/png;base64,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";var er={cols:159,rows:86,pitchX:.56,pitchZ:1.18,x0:-44.52,z0:-50.74},ro=[{id:"hyd",name:"Hyderabad",x:-12.87,z:17.25},{id:"ndb",name:"Nandurbar",x:-25.67,z:4.52},{id:"kgm",name:"Kothagudem",x:-6.44,z:16.73},{id:"jh",name:"Jharkhand",x:8.45,z:-2.97}],Rh=[[],[31,39],[27,42],[25,45],[25,25,27,46,58,58,60,61],[31,50,54,65],[32,65],[33,64],[30,62],[30,61],[30,58],[30,58],[30,60],[32,61],[36,56,58,61],[40,56],[37,57],[35,57],[35,57,59,60],[35,61,63,63],[33,65],[32,69],[29,67],[29,66],[28,65,143,143,149,151],[25,64,141,153],[23,67,136,152],[22,71,134,157],[12,14,20,75,108,111,133,156],[11,78,108,111,127,155],[9,89,108,111,130,150,156,156],[8,92,109,113,120,120,128,148],[12,99,102,102,108,109,111,145],[11,108,114,115,117,145],[12,108,118,145],[14,111,118,143],[16,109,131,143],[17,107,131,142],[13,13,16,109,129,141],[4,111,126,135,137,140],[1,110,125,129,131,136],[3,111,126,127,131,136],[6,10,13,112,131,134],[12,112,132,134],[5,22,25,112,132,135],[7,23,25,107,109,109,112,112],[9,22,25,102],[11,20,25,101],[14,16,26,101],[26,100],[26,98],[26,93],[26,90],[26,89],[27,87],[27,84],[28,82],[28,79],[29,76],[29,76],[29,71],[30,70],[31,65],[32,64],[33,64],[34,65],[35,64],[36,65],[36,66,133,134],[37,65,133,134],[38,65,133,134],[39,63,132,133],[40,63,132,133],[42,63],[22,23,30,31,42,63,131,132],[25,25,30,30,43,63,131,132],[44,60],[45,59],[45,58],[46,55],[47,54],[27,27,49,52],[],[138,138],[138,139],[138,139]];var lo=Math.PI/180,Ih=30,oe={w:.5,h:1.1},Fe={back:.008,paper:.004,pocket:.006,flap:.006},nr=Fe.back+Fe.paper+Fe.pocket+Fe.flap,ao=.53,pi=.47,Hn={from:.045,to:.6,width:.86},mi={at:.285,r:.155},Nh="SCM / ",cg=100001,hg=41.3,ug=i=>1e5+(i*617531+4127)%9e5,hs={x0:.15,x1:.85,y0:.17,y1:.66,modules:64},Nl=[11,13,9,6,10,5],dg=14/24,Ul=10,an={y0:.715,y1:.865,baseline:.82,font:52},fg=106*lo,Xn={from:new z(-1.5,2.7,1.9),intensity:1.75},pg=Math.PI-Xn.intensity*(Xn.from.y/Xn.from.length()),Ph={across:.6,up:.84,shiftX:.145,shiftY:0},Lh={across:.86,up:.46,shiftX:0,shiftY:.2},mg={across:.84,up:.86,shiftX:0,shiftY:0},Fl=[-2,-1],oo=[{at:"card",aim:-.12,span:1.9,narrow:1.3,tall:1.5,el:33,az:-30,open:1,fog:[.98,1.7],haze:[.66,.96]},{at:"card",aim:-.24,span:1.6,narrow:1,tall:1.52,el:61,az:-24,open:1,fog:[1.2,2.6],haze:[.3,.72]},{at:"card",aim:0,span:9.4,narrow:5.2,tall:0,el:44,az:-13,open:0,fog:[1.25,3.3],haze:Fl},{at:"india",aim:0,span:97,narrow:96,tall:112,el:83,az:0,open:0,fog:[30,40],haze:Fl}],Dh={at:"card",aim:-.2,span:1.02,narrow:1.02,tall:1.34,el:38,az:-24,open:1,fog:[30,40],haze:Fl},_e=(i,t,e)=>Math.min(e,Math.max(t,i)),rn=(i,t,e)=>i+(t-i)*e,Ri=i=>i*i*(3-2*i),Ol=i=>i*i*i*(i*(i*6-15)+10),gg=i=>Ol(_e((i-.07)/.86,0,1));function kl(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Wn=512,us=i=>Math.round(i*oe.h*(Wn/oe.w));function ho(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let a=kl(s);for(let o=0;o<r;o+=1){let l=a()*t,c=a()*e,u=4+a()*14,m=a()*Math.PI;i.strokeStyle=a()<.5?"rgba(255,255,255,0.6)":"rgba(40,70,40,0.04)",i.lineWidth=1,i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(m)*u,c+Math.sin(m)*u),i.stroke()}}function _g(i,t,e){let n=i.getContext("2d");if(ho(n,i.width,i.height,t.paper,11,500),e){let s=i.width*.9;n.drawImage(e,(i.width-s)/2,(i.height-s)/2-i.height*.01,s,s)}}function xg(i,t){let e=i.width,n=i.getContext("2d");ho(n,e,i.height,"#f5f7f7",5,2600);let s=e/(oe.w*Hn.width),r=(mi.at-Hn.from)*oe.h*s;n.strokeStyle=t.ink,n.lineWidth=7,n.lineCap="round",n.setLineDash([20,19]),n.beginPath(),n.arc(e/2,r,mi.r*s,0,Math.PI*2),n.stroke(),n.setLineDash([])}function Vl(i,t){i.font=`500 ${t}px "Anek Latin", system-ui, sans-serif`,i.fontStretch="condensed",i.textBaseline="alphabetic"}function vg(i){Vl(i,an.font);let t=i.measureText(Nh).width,e=0;for(let r=0;r<10;r+=1)e=Math.max(e,i.measureText(String(r)).width);let n=Math.ceil(e)+2,s=(Wn-(t+n*6))/2;return{start:s,digits:s+t,advance:n}}function yg(i,t,e){let n=i.width,s=i.height,r=i.getContext("2d");ho(r,n,s,t.paper,17,450),r.fillStyle=t.ink,Vl(r,an.font),r.textAlign="left",r.fillText(Nh,e.start,s*an.baseline)}var co={w:64,h:192};function Sg(i,t){let e=i.getContext("2d"),n=(an.y1-an.y0)*us(pi);e.setTransform(1,0,0,1,0,0),e.fillStyle="#000",e.fillRect(0,0,i.width,i.height),e.setTransform(co.w/t.advance,0,0,co.h/n,0,0),e.fillStyle="#fff",Vl(e,an.font),e.textAlign="center";let s=(an.baseline-an.y0)*us(pi);for(let r=0;r<10;r+=1)e.fillText(String(r),(r+.5)*t.advance,s);e.setTransform(1,0,0,1,0,0)}function Mg(i,t,e){let n=i.getContext("2d");n.drawImage(t,0,0),n.drawImage(e,0,t.height);let s=n.createLinearGradient(0,t.height,0,t.height+14);s.addColorStop(0,"rgba(30,60,35,0.26)"),s.addColorStop(1,"rgba(30,60,35,0)"),n.fillStyle=s,n.fillRect(0,t.height,i.width,14)}function bg(i,t){ho(i.getContext("2d"),i.width,i.height,t.paper,29,500)}function Ag(i,t){let e=i.width,n=i.getContext("2d"),s=n.createImageData(e,e),r=kl(23),a=[2,3,4,5,7].map(u=>({k:u,amp:.11*r()/u+.006,phase:r()*Math.PI*2})),[o,l,c]=t;for(let u=0;u<e;u+=1)for(let m=0;m<e;m+=1){let h=(m+.5)/e-.5,g=(u+.5)/e-.5,x=Math.hypot(h,g),S=Math.atan2(g,h),p=.4;a.forEach(A=>{p*=1+A.amp*Math.sin(A.k*S+A.phase)});let d=x/p,T=1-.5*d*d+(r()-.5)*.02,y=1.08-.3*Ri(_e((d-.55)/.45,0,1))+(r()-.5)*.05,b=(u*e+m)*4;s.data[b]=_e(o*y,0,255),s.data[b+1]=_e(l*y,0,255),s.data[b+2]=_e(c*y,0,255),s.data[b+3]=_e(T,0,1)*255}n.putImageData(s,0,0)}var Bl=.7;function wg(i){let t=i.width,e=i.getContext("2d"),n=t*Bl,s=n*(oe.w/oe.h),r=(t-s)/2,a=(t-n)/2;e.clearRect(0,0,t,t),e.filter=`blur(${t*.035}px)`,e.fillStyle="#000",e.fillRect(r-t*.02,a-t*.02,s+t*.04,n+t*.04),e.filter="none",e.globalCompositeOperation="destination-out",e.fillRect(r,a,s,n),e.globalCompositeOperation="source-over"}function di(i,t){return Object.assign(document.createElement("canvas"),{width:i,height:t})}function fi(i){let t=new Us(i);return t.colorSpace=ze,t.anisotropy=8,t}function zl(i){let t=zl.ctx||(zl.ctx=document.createElement("canvas").getContext("2d"));t.fillStyle="#000",t.fillStyle=i.trim();let e=t.fillStyle;return[1,3,5].map(n=>parseInt(e.slice(n,n+2),16))}function Tg(i){let t=i.querySelector("[data-story]"),e=i.querySelector("[data-stage]"),n=[...i.querySelectorAll("[data-step]")],s=i.querySelector("[data-scene]"),r=i.querySelector("[data-scene-blank]"),a=[...i.querySelectorAll("[data-rail] a")],o=i.querySelector("[data-rail]"),l=i.querySelector("[data-places]"),c=new Map([...i.querySelectorAll("[data-place]")].map(at=>[at.dataset.place,at])),u=i.querySelector("[data-parts]"),m=new Map([...i.querySelectorAll("[data-part]")].map(at=>[at.dataset.part,at])),h=new no({antialias:!0,powerPreference:"high-performance"});h.shadowMap.enabled=!0,h.shadowMap.type=Ai;let g=h.domElement;g.setAttribute("aria-hidden","true");let x=new Rs,S=new Ne(Ih,1,.1,100);x.fog=new Cs(16777215,1,10),x.background=new Bt;let p={},d=di(Wn,us(ao)),T=di(Wn,us(pi)),P=di(co.w*10,co.h),y=di(Wn,us(ao)+us(pi)),b=di(Wn,Math.round(Wn*((Hn.to-Hn.from)*oe.h)/(oe.w*Hn.width))),A=di(256,300),R=di(256,256),v=di(256,256),w={flap:fi(d),pocket:fi(T),closed:fi(y),paper:fi(b),inside:fi(A),spot:fi(R),digits:fi(P)};wg(v);let L=fi(v),U=null,k={value:new qt(-2,-1)},H={value:0},D=(at,ht)=>(at.onBeforeCompile=St=>{St.uniforms.uHaze=k,St.uniforms.uSoft=H,St.fragmentShader=St.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uHaze;
uniform float uSoft;`).replace("#include <fog_fragment>",`
          float llFar = smoothstep( fogNear, fogFar, vFogDepth );
          float llNear = 1.0 - smoothstep( uHaze.x, uHaze.y, vFogDepth );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, max( uSoft, max( llFar, llNear ) ) );`),ht&&ht(St)},ht&&(at.customProgramCacheKey=()=>"field-print"),at),V={uInk:{value:new Bt},uDigits:{value:w.digits},uBar:{value:new he(hs.x0,hs.x1,hs.y0,hs.y1)},uCode:{value:new he(0,1,an.y0,an.y1)}},J=at=>ht=>{Object.assign(ht.uniforms,V),ht.vertexShader=ht.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aCodeA;
        attribute vec3 aCodeB;
        attribute float aSeed;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vCodeA = aCodeA;
        vCodeB = aCodeB;
        vSeed = aSeed;`),ht.fragmentShader=ht.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uInk;
        uniform sampler2D uDigits;
        uniform vec4 uBar;
        uniform vec4 uCode;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;
        // One module of this card's barcode: which four-module symbol it belongs to is picked by a
        // hash of the symbol's position and the card's seed, then the module reads its bit from it.
        float llBar( float module ) {
          float symbol = floor( module / 4.0 );
          float place = mod( floor( module ), 4.0 );
          float pick = floor( fract( sin( symbol * 12.9898 + vSeed * 78.233 ) * 43758.5453 ) * ${Nl.length}.0 );
          float bits = ${Nl.map((St,Ft)=>Ft<Nl.length-1?`pick < ${Ft}.5 ? ${St}.0 : `:`${St}.0`).join("")};
          return mod( floor( bits / exp2( 3.0 - place ) ), 2.0 );
        }
        // How much ink falls on this point of the face. Derivatives are taken outside any branch,
        // and the result is masked rather than branched, so it is well defined everywhere.
        float llPrint( vec2 uv ) {
          float py = 1.0 - uv.y / ${at.toFixed(4)}; // 0 at the pocket's top edge, 1 at the card's foot
          float module = ( uv.x - uBar.x ) / ( uBar.y - uBar.x ) * ${hs.modules.toFixed(1)};
          float width = fwidth( module );
          // The bars are averaged under the pixel, weighted toward its centre. While bars are wider
          // than a pixel the average is narrow and their edges stay sharp; as they shrink below one
          // it widens, so a distant barcode greys into soft stripes, as a printed one does, instead
          // of breaking into dashes.
          float reach = width * mix( 0.75, 1.4, smoothstep( 0.35, 1.0, width ) );
          float ink = 0.0;
          float cover = 0.0;
          for ( int i = 0; i < ${Ul}; i ++ ) {
            float t = ( float( i ) + 0.5 ) / ${Ul/2}.0 - 1.0;
            float at = module + t * reach;
            float weight = ( 1.0 - abs( t ) ) * step( 0.0, at ) * step( at, ${hs.modules.toFixed(1)} );
            cover += weight;
            ink += weight * llBar( at );
          }
          // Once a pixel spans whole symbols, the samples are too few: use the barcode's overall tone.
          float soft = fwidth( py ) * 0.5 + 0.00001;
          float rows = smoothstep( uBar.z - soft, uBar.z + soft, py ) * ( 1.0 - smoothstep( uBar.w - soft, uBar.w + soft, py ) );
          float bars = mix( ink, cover * ${dg.toFixed(3)}, smoothstep( 2.0, 4.0, width ) ) / ${Ul/2}.0 * rows;

          float cell = ( uv.x - uCode.x ) / uCode.y;
          float row = ( py - uCode.z ) / ( uCode.w - uCode.z );
          vec2 smoothUv = vec2( cell / 10.0, 1.0 - row );
          vec2 gradX = dFdx( smoothUv );
          vec2 gradY = dFdy( smoothUv );
          float inCode = step( 0.0, cell ) * step( cell, 5.999 ) * step( 0.0, row ) * step( row, 1.0 );
          float slot = clamp( floor( cell ), 0.0, 5.0 );
          vec3 triple = slot < 2.5 ? vCodeA : vCodeB;
          float place = slot < 2.5 ? slot : slot - 3.0;
          float digit = floor( ( place < 0.5 ? triple.x : ( place < 1.5 ? triple.y : triple.z ) ) + 0.5 );
          vec2 glyphUv = vec2( ( digit + clamp( fract( cell ), 0.03, 0.97 ) ) / 10.0, 1.0 - row );
          float glyph = textureGrad( uDigits, glyphUv, gradX, gradY ).r * inCode;
          return max( bars, glyph );
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        diffuseColor.rgb = mix( diffuseColor.rgb, uInk, llPrint( vMapUv ) );`)},Z=D(new en({map:w.closed}),J(pi)),et=D(new en),X=new en,j=new en({map:w.flap}),nt=new en({map:w.inside}),Rt=new en({map:w.pocket});Rt.onBeforeCompile=J(1),Rt.customProgramCacheKey=()=>"card-print";let It=new en({map:w.paper}),ee=new en({map:w.spot,alphaTest:1.01,alphaToCoverage:!0}),Ht=[];Rh.forEach((at,ht)=>{for(let St=0;St<at.length;St+=2)for(let Ft=at[St];Ft<=at[St+1];Ft+=1)Ht.push({x:er.x0+(Ft+.5)*er.pitchX,z:er.z0+(ht+.5)*er.pitchZ})});let W=(at=>Ht.reduce((ht,St)=>Math.hypot(St.x-at.x,St.z-at.z)<Math.hypot(ht.x-at.x,ht.z-at.z)?St:ht))(ro.find(at=>at.id==="hyd")),Q=Ht.filter(at=>at!==W),ft=new Ds(new kn(oe.w,nr,oe.h),[et,et,Z,et,et,et],Q.length);ft.frustumCulled=!1,ft.receiveShadow=!0;let Lt=kl(101),xt=new Ae,zt=new Float32Array(Q.length),xe=new Float32Array(Q.length*3),kt=new Float32Array(Q.length*3),Zt=new Float32Array(Q.length);Q.forEach((at,ht)=>{let St=String(ug(ht)).split("").map(Number);xe.set(St.slice(0,3),ht*3),kt.set(St.slice(3),ht*3),Zt[ht]=1+Lt()*97,xt.position.set(at.x+(Lt()-.5)*.02,nr/2,at.z+(Lt()-.5)*.024),xt.rotation.set(0,(Lt()-.5)*.06,0),xt.updateMatrix(),ft.setMatrixAt(ht,xt.matrix),zt[ht]=.955+Lt()*.045}),ft.instanceMatrix.needsUpdate=!0,ft.geometry.setAttribute("aCodeA",new zn(xe,3)),ft.geometry.setAttribute("aCodeB",new zn(kt,3)),ft.geometry.setAttribute("aSeed",new zn(Zt,1)),x.add(ft);let re=[];ro.forEach(at=>{Q.forEach((ht,St)=>{let Ft=Math.hypot(ht.x-at.x,ht.z-at.z);Ft<1.9&&re.push({index:St,weight:1-Ri(_e((Ft-.7)/1.2,0,1))*.75})})});let Nt=new yn;Nt.position.set(W.x,0,W.z),Nt.rotation.y=.035;let jt=-oe.h/2,me=(at,ht,St,Ft,Wt,_)=>{let E=new we(new kn(at,ht,St),_);return E.position.set(0,Ft+ht/2,Wt+St/2),E.castShadow=!0,E.receiveShadow=!0,E},be=(at,ht=X)=>[X,X,at,ht,X,X];Nt.add(me(oe.w,Fe.back,oe.h,0,jt,be(X))),Nt.add(me(oe.w*Hn.width,Fe.paper,(Hn.to-Hn.from)*oe.h,Fe.back,jt+Hn.from*oe.h,be(It)));let ae=me(oe.w,Fe.pocket,pi*oe.h,Fe.back+Fe.paper,jt+(1-pi)*oe.h,be(Rt)),ge=String(cg).split("").map(Number),I=at=>new ke(Float32Array.from({length:ae.geometry.attributes.position.count*at.length},(ht,St)=>at[St%at.length]),at.length);ae.geometry.setAttribute("aCodeA",I(ge.slice(0,3))),ae.geometry.setAttribute("aCodeB",I(ge.slice(3))),ae.geometry.setAttribute("aSeed",I([hg])),Nt.add(ae);let ve=new yn;ve.position.set(0,Fe.back+Fe.paper+Fe.pocket,jt);let te=me(oe.w,Fe.flap,ao*oe.h,0,0,be(j,nt));te.receiveShadow=!1,ve.add(te),Nt.add(ve);let M=new Vn(1,1);M.rotateX(-Math.PI/2);let f=new we(M,ee);f.position.set(-.012,Fe.back+Fe.paper+8e-4,jt+mi.at*oe.h+.008),f.rotation.y=.7,f.scale.set(mi.r*2*.9,1,mi.r*2*.84),f.receiveShadow=!0,Nt.add(f),x.add(Nt);let N=(at,ht,St,Ft)=>{let Wt=new Ae;return Wt.position.set(ht,St,Ft),at.add(Wt),Wt},B={cover:N(ve,-oe.w*.3,0,ao*oe.h*.62),circle:N(Nt,-mi.r*.72,nr/2,jt+mi.at*oe.h+mi.r*.7),code:N(Nt,-oe.w*.36,nr,jt+(1-pi*.3)*oe.h)},Y=new ks(16777215,16777215,pg),it=new Gs(16777215,Xn.intensity);it.position.set(W.x+Xn.from.x,Xn.from.y,W.z+Xn.from.z),it.target.position.set(W.x,0,W.z),it.castShadow=!0,it.shadow.mapSize.set(2048,2048),it.shadow.radius=5,it.shadow.bias=-4e-4,it.shadow.normalBias=.003,Object.assign(it.shadow.camera,{left:-1.5,right:1.5,top:1.5,bottom:-1.5,near:Xn.from.length()-1.6,far:Xn.from.length()+1.6}),it.shadow.camera.updateProjectionMatrix(),x.add(Y,it,it.target);let lt=new we(new Vn(8,8).rotateX(-Math.PI/2),new Os({opacity:.22}));lt.position.set(W.x,5e-4,W.z),lt.receiveShadow=!0,x.add(lt);let q=new we(new Vn(1,1).rotateX(-Math.PI/2),new bi({map:L,transparent:!0,depthWrite:!1,opacity:.2}));q.position.set(W.x,nr+.0015,W.z),q.rotation.y=Nt.rotation.y,q.scale.set(oe.h/Bl,1,oe.h/Bl),q.renderOrder=2,x.add(q);function K(){let at=getComputedStyle(document.documentElement),ht=Ft=>at.getPropertyValue(Ft).trim();p.mist=ht("--mist"),p.paper=ht("--paper"),p.ink=ht("--canopy"),p.sun=ht("--sun"),p.meadow=ht("--meadow"),x.background.set(p.mist),x.fog.color.set(p.mist),Y.groundColor.set(p.mist),_g(d,p,U);let St=vg(T.getContext("2d"));yg(T,p,St),Mg(y,d,T),Sg(P,St),V.uInk.value.set(p.ink),V.uCode.value.set(St.digits/Wn,St.advance/Wn,an.y0,an.y1),xg(b,p),bg(A,p),Ag(R,zl(ht("--blood"))),Object.values(w).forEach(Ft=>{Ft.needsUpdate=!0}),X.color.set(p.paper),et.color.set(p.paper),lt.material.color.set(p.ink),q.material.color.set(p.ink),Pt(dt,Tt,!0)}let ut=new Bt,wt=new Bt,ct=new Bt,dt=0,Tt=0;function Pt(at,ht,St){!St&&Math.abs(at-dt)<.004&&Math.abs(ht-Tt)<.004||(ut.set(p.sun),wt.set(p.meadow),(St||Math.abs(ht-Tt)>=.004)&&Q.forEach((Ft,Wt)=>{ft.setColorAt(Wt,ct.set(1,1,1).lerp(wt,ht).multiplyScalar(zt[Wt]))}),re.forEach(({index:Ft,weight:Wt})=>{ct.set(1,1,1).lerp(wt,ht).multiplyScalar(zt[Ft]).lerp(ut,at*Wt),ft.setColorAt(Ft,ct)}),ft.instanceColor.needsUpdate=!0,ct.set(1,1,1).lerp(wt,ht).lerp(ut,at),j.color.copy(ct),Rt.color.copy(ct),dt=at,Tt=ht)}let _t={width:0,height:0,aspect:1,layout:Ph,ratio:Math.min(window.devicePixelRatio||1,2)},C={x:0,y:0,tx:0,ty:0},rt=null,$=0,st=0,pt=0,tt=0,Ct=!1,bt=0,ne=!1,Jt=0,Oe=0,He=0,ir=new z,gi=new z,In=new z,ds=window.matchMedia("(prefers-reduced-motion: reduce)");function sr(at){let ht=Math.tan(Ih*lo/2),St=(_t.layout===Lh?at.narrow:at.span)/(2*ht*_t.aspect*_t.layout.across),Ft=at.tall/(2*ht*_t.layout.up);return Math.max(St,Ft)}function rr(at,ht){ht.getWorldPosition(In).project(S),at.style.transform=`translate(${((In.x*.5+.5)*_t.width).toFixed(1)}px, ${((-In.y*.5+.5)*_t.height).toFixed(1)}px)`}function fs(){let at=rt==="blank",ht=at?0:_e(Math.floor(st),0,oo.length-2),St=at?Dh:oo[ht],Ft=at?Dh:oo[ht+1],Wt=at?0:gg(st-ht),_=Math.exp(rn(Math.log(sr(St)),Math.log(sr(Ft)),Wt)),E=(rn(St.el,Ft.el,Wt)+C.y*-1.4)*lo,G=(rn(St.az,Ft.az,Wt)+C.x*2.2)*lo,F=rn(St.open,Ft.open,Ol(_e(Wt/.55,0,1)))*(at?1:bt);ve.rotation.x=-fg*F,q.material.opacity=.22*F;let O=ot=>ot.at==="card"?1:0,mt=rn(O(St),O(Ft),Wt);gi.set(W.x*mt,.05*mt,rn(1.2,W.z+rn(St.aim,Ft.aim,Wt),mt)),ir.set(gi.x+_*Math.cos(E)*Math.sin(G),gi.y+_*Math.sin(E),gi.z+_*Math.cos(E)*Math.cos(G)),S.position.copy(ir),S.lookAt(gi),S.near=_e(_*.12,.05,30),S.far=_*3+80,S.setViewOffset(_t.width,_t.height,-_t.layout.shiftX*_t.width,_t.layout.shiftY*_t.height,_t.width,_t.height),x.fog.near=_*rn(St.fog[0],Ft.fog[0],Wt),x.fog.far=_*rn(St.fog[1],Ft.fog[1],Wt),k.value.set(_*rn(St.haze[0],Ft.haze[0],Wt),_*rn(St.haze[1],Ft.haze[1],Wt)),H.value=at?0:.42*(1-Ri(_e((_-5)/12,0,1))),ft.visible=!at,it.castShadow=_<40;let vt=at?0:Ri(_e((st-2.5)/.42,0,1));if(Pt(vt,at?0:Ri(_e((_-40)/110,0,1)),!1),h.render(x,S),l&&(l.style.opacity=String(vt),vt>.01&&(S.updateMatrixWorld(),ro.forEach(ot=>{let yt=c.get(ot.id);yt&&(In.set(ot.x,0,ot.z).project(S),yt.style.transform=`translate(${((In.x*.5+.5)*_t.width).toFixed(1)}px, ${((-In.y*.5+.5)*_t.height).toFixed(1)}px)`)}))),u){let ot=at?0:Ri(_e((st-.62)/.3,0,1))*(1-Ri(_e((st-1.08)/.22,0,1)));u.style.opacity=String(ot),ot>.01&&(S.updateMatrixWorld(),m.forEach((yt,At)=>{B[At]&&rr(yt,B[At])}))}if(o){o.style.setProperty("--p",String(_e((st-1)/2,0,1)));let ot=st<1.5?0:st<2.5?1:2;a.forEach((yt,At)=>{At===ot?yt.setAttribute("aria-current","step"):yt.removeAttribute("aria-current")})}}function mn(at){if(!rt){ne=!1;return}let ht=(at-Jt)/1e3,St=_e(ht,.001,.05);Jt=at;let Ft=!1,Wt=42;if(pt+=(Wt*($-st)-2*Math.sqrt(Wt)*pt)*St,st+=pt*St,Math.abs($-st)<3e-4&&Math.abs(pt)<.002?(st=$,pt=0):Ft=!0,(Math.abs(C.tx-C.x)>5e-4||Math.abs(C.ty-C.y)>5e-4)&&(C.x+=(C.tx-C.x)*(1-Math.exp(-St*3)),C.y+=(C.ty-C.y)*(1-Math.exp(-St*3)),Ft=!0),rt==="blank")ee.alphaTest=1.01;else if(Ct)bt=1,ee.alphaTest=.5;else{let _=(at-tt)/1e3;bt=Ol(_e((_-.4)/1.25,0,1));let E=_e((_-1.55)/1.5,0,1);ee.alphaTest=rn(1.01,.5,1-(1-E)**3),Ct=_>3.1,Ft=!0}fs(),Ft&&_t.ratio>1&&(He+=1,ht>.024&&(Oe+=1),He>=45&&(Oe>22&&(_t.ratio=Math.max(1,_t.ratio-.25),h.setPixelRatio(_t.ratio),h.setSize(_t.width,_t.height,!1)),He=0,Oe=0)),Ft?requestAnimationFrame(mn):ne=!1}function Ke(){ne||!rt||(ne=!0,Jt=performance.now(),requestAnimationFrame(mn))}function Ii(){let at=rt==="blank"?r:s;if(!at)return;let ht=at.clientWidth,St=at.clientHeight;!ht||!St||(_t.width=ht,_t.height=St,_t.aspect=ht/St,_t.layout=rt==="blank"?mg:ht>=900&&_t.aspect>1.05?Ph:Lh,h.setPixelRatio(_t.ratio),h.setSize(ht,St,!1),S.aspect=_t.aspect,Ke())}function ar(at){if(at===rt||(rt=at,!rt))return;let ht=rt==="blank"?r:s;g.parentNode!==ht&&ht.appendChild(g),rt==="story"&&!tt&&(tt=performance.now()+250),Ii(),Ke()}function qn(){let ht=(parseFloat(getComputedStyle(e).top)||0)-t.getBoundingClientRect().top,St=n.map(Wt=>Wt.offsetTop),Ft=0;for(let Wt=0;Wt<St.length-1;Wt+=1)ht>=St[Wt]&&(Ft=Wt+_e((ht-St[Wt])/Math.max(1,St[Wt+1]-St[Wt]),0,1));$=_e(Ft,0,oo.length-1),Ke()}let gn={story:!1,blank:!1},_i=()=>ar(gn.blank&&!gn.story?"blank":gn.story?"story":gn.blank?"blank":null),ps=new IntersectionObserver(at=>{at.forEach(ht=>{ht.target===e?gn.story=ht.isIntersecting:gn.blank=ht.isIntersecting}),_i()},{rootMargin:"10% 0px"});if(ps.observe(e),r&&ps.observe(r),window.addEventListener("scroll",qn,{passive:!0}),window.addEventListener("resize",()=>{Ii(),qn()}),"ResizeObserver"in window){let at=new ResizeObserver(Ii);at.observe(s),r&&at.observe(r)}window.addEventListener("pointermove",at=>{if(at.pointerType==="touch"||ds.matches||!rt)return;let ht=g.getBoundingClientRect();C.tx=_e((at.clientX-ht.left)/ht.width*2-1,-1,1),C.ty=_e((at.clientY-ht.top)/ht.height*2-1,-1,1),Ke()},{passive:!0}),document.addEventListener("ll:theme",()=>{K(),Ke()}),document.addEventListener("visibilitychange",()=>{document.hidden||Ke()}),document.fonts&&document.fonts.load&&document.fonts.load('500 52px "Anek Latin"').then(()=>{K(),Ke()}).catch(()=>{});let Pi=new Image;Pi.onload=()=>{U=Pi,K(),Ke()},Pi.src=Ch,g.addEventListener("webglcontextlost",at=>{at.preventDefault(),document.documentElement.classList.remove("story-live")}),K(),qn(),st=$,gn.story=!0,_i(),fs(),document.documentElement.classList.add("story-live","scene-ready")}try{Tg(document)}catch(i){document.documentElement.classList.remove("story-live"),console.warn("Scale: 3D scene unavailable, showing still images instead.",i)}})();
