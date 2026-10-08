(()=>{var fc=0,Ho=1,pc=2;var Si=1,mc=2,es=3,ai=0,Ve=1,Tn=2,En=0,ns=1,Wo=2,Xo=3,qo=4,gc=5;var Mi=100,_c=101,xc=102,vc=103,yc=104,Sc=200,Mc=201,bc=202,wc=203,Yo=204,$o=205,Ac=206,Tc=207,Ec=208,Cc=209,Rc=210,Pc=211,Ic=212,Lc=213,Dc=214,Cr=0,Rr=1,Pr=2,$i=3,Ir=4,Lr=5,Dr=6,Nr=7,oa=0,Nc=1,Uc=2,dn=0,Zo=1,Jo=2,Ko=3,jo=4,Qo=5,tl=6,el=7;var nl=300,oi=301,bi=302,la=303,ca=304,Ws=306,Ur=1e3,vn=1001,Fr=1002,Ce=1003,Fc=1004;var Xs=1005;var Re=1006,ha=1007;var li=1008;var Xe=1009,il=1010,sl=1011,is=1012,ua=1013,fn=1014,en=1015,pn=1016,da=1017,fa=1018,ss=1020,rl=35902,al=35899,ol=1021,ll=1022,nn=1023,Sn=1026,ci=1027,pa=1028,ma=1029,hi=1030,ga=1031;var _a=1033,qs=33776,Ys=33777,$s=33778,Zs=33779,xa=35840,va=35841,ya=35842,Sa=35843,Ma=36196,ba=37492,wa=37496,Aa=37488,Ta=37489,Js=37490,Ea=37491,Ca=37808,Ra=37809,Pa=37810,Ia=37811,La=37812,Da=37813,Na=37814,Ua=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Va=37821,Ga=36492,Ha=36494,Wa=36495,Xa=36283,qa=36284,Ks=36285,Ya=36286;var bs=2300,Or=2301,Tr=2302,Fo=2303,Oo=2400,Bo=2401,zo=2402;var Oc=3200;var $a=0,Bc=1,Vn="",Be="srgb",ws="srgb-linear",As="linear",ne="srgb";var Er=7680;var zc=519,kc=512,Vc=513,Gc=514,Za=515,Hc=516,Wc=517,Ja=518,Xc=519,qc=35044;var cl="300 es",un=2e3,Zi=2001;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){let i=Ts("canvas");return i.style.display="block",i}var Wl={},Ji=null;function hl(...i){let t="THREE."+i.shift();Ji?Ji("log",t,...i):console.log(t,...i)}function $c(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=$c(i);let t="THREE."+i.shift();if(Ji)Ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=$c(i);let t="THREE."+i.shift();if(Ji)Ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vi(...i){let t=i.join(" ");t in Wl||(Wl[t]=!0,Dt(...i))}function Zc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Jc={[Cr]:Rr,[Pr]:Dr,[Ir]:Nr,[$i]:Lr,[Rr]:Cr,[Dr]:Pr,[Nr]:Ir,[Lr]:$i},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fo=Math.PI/180,Br=180/Math.PI;function js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Oh(i,t){return(i%t+t)%t}function po(i,t,e){return(1-e)*i+e*t}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ml=class ml{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ml.prototype.isVector2=!0;var Xt=ml,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],g=r[a+1],v=r[a+2],S=r[a+3];if(p!==S||l!==h||c!==g||u!==v){let m=l*h+c*g+u*v+p*S;m<0&&(h=-h,g=-g,v=-v,S=-S,m=-m);let d=1-o;if(m<.9995){let T=Math.acos(m),L=Math.sin(T);d=Math.sin(d*T)/L,o=Math.sin(o*T)/L,l=l*d+h*o,c=c*d+g*o,u=u*d+v*o,p=p*d+S*o}else{l=l*d+h*o,c=c*d+g*o,u=u*d+v*o,p=p*d+S*o;let T=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=T,c*=T,u*=T,p*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],h=r[a+1],g=r[a+2],v=r[a+3];return t[e]=o*v+u*p+l*g-c*h,t[e+1]=l*v+u*h+c*p-o*g,t[e+2]=c*v+u*g+o*h-l*p,t[e+3]=u*v-o*p-l*h-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),h=l(n/2),g=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*p+c*g*v,this._y=c*g*p-h*u*v,this._z=c*u*v+h*g*p,this._w=c*u*p-h*g*v;break;case"YXZ":this._x=h*u*p+c*g*v,this._y=c*g*p-h*u*v,this._z=c*u*v-h*g*p,this._w=c*u*p+h*g*v;break;case"ZXY":this._x=h*u*p-c*g*v,this._y=c*g*p+h*u*v,this._z=c*u*v+h*g*p,this._w=c*u*p-h*g*v;break;case"ZYX":this._x=h*u*p-c*g*v,this._y=c*g*p+h*u*v,this._z=c*u*v-h*g*p,this._w=c*u*p+h*g*v;break;case"YZX":this._x=h*u*p+c*g*v,this._y=c*g*p+h*u*v,this._z=c*u*v-h*g*p,this._w=c*u*p-h*g*v;break;case"XZY":this._x=h*u*p-c*g*v,this._y=c*g*p-h*u*v,this._z=c*u*v+h*g*p,this._w=c*u*p+h*g*v;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gl=class gl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gl.prototype.isVector3=!0;var k=gl,mo=new k,Xl=new bn,_l=class _l{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],g=n[5],v=n[8],S=s[0],m=s[3],d=s[6],T=s[1],L=s[4],y=s[7],b=s[2],w=s[5],R=s[8];return r[0]=a*S+o*T+l*b,r[3]=a*m+o*L+l*w,r[6]=a*d+o*y+l*R,r[1]=c*S+u*T+p*b,r[4]=c*m+u*L+p*w,r[7]=c*d+u*y+p*R,r[2]=h*S+g*T+v*b,r[5]=h*m+g*L+v*w,r[8]=h*d+g*y+v*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,h=o*l-u*r,g=c*r-a*l,v=e*p+n*h+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return t[0]=p*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=g*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(go.makeScale(t,e)),this}rotate(t){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(go.makeRotation(-t)),this}translate(t,e){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_l.prototype.isMatrix3=!0;var Ot=_l,go=new Ot,ql=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bh(){let i={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?As:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ws]:{primaries:t,whitePoint:n,transfer:As,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var Yt=Bh();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Ts("canvas")),Di.width=t.width,Di.height=t.height;let s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zh=0,Ki=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var kh=0,xo=new k,ke=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vn,s=vn,r=Re,a=li,o=nn,l=Xe,c=i.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=js(),this.name="",this.source=new Ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=nl;ke.DEFAULT_ANISOTROPY=1;var xl=class xl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],g=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,y=(g+1)/2,b=(d+1)/2,w=(u+h)/4,R=(p+S)/4,x=(v+m)/4;return L>y&&L>b?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=w/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-v)*(m-v)+(p-S)*(p-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(p-S)/T,this.z=(h-u)/T,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xl.prototype.isVector4=!0;var ce=xl,kr=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ki(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends kr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Es=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vr=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var aa=class aa{constructor(t,e,n,s,r,a,o,l,c,u,p,h,g,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,h,g,v,S,m)}set(t,e,n,s,r,a,o,l,c,u,p,h,g,v,S,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=g,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,g=a*p,v=o*u,S=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=g+v*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=v+g*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,g=l*p,v=c*u,S=c*p;e[0]=h+S*o,e[4]=v*o-g,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=g*o-v,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,g=l*p,v=c*u,S=c*p;e[0]=h-S*o,e[4]=-a*p,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,g=a*p,v=o*u,S=o*p;e[0]=l*u,e[4]=v*c-g,e[8]=h*c+S,e[1]=l*p,e[5]=S*c+h,e[9]=g*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,g=a*c,v=o*l,S=o*c;e[0]=l*u,e[4]=S-h*p,e[8]=v*p+g,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*p+v,e[10]=h-S*p}else if(t.order==="XZY"){let h=a*l,g=a*c,v=o*l,S=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=h*p+S,e[5]=a*u,e[9]=g*p-v,e[2]=v*p-g,e[6]=o*u,e[10]=S*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vh,t,Gh)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Zn.crossVectors(n,qe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Zn.crossVectors(n,qe)),Zn.normalize(),ar.crossVectors(qe,Zn),s[0]=Zn.x,s[4]=ar.x,s[8]=qe.x,s[1]=Zn.y,s[5]=ar.y,s[9]=qe.y,s[2]=Zn.z,s[6]=ar.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],g=n[13],v=n[2],S=n[6],m=n[10],d=n[14],T=n[3],L=n[7],y=n[11],b=n[15],w=s[0],R=s[4],x=s[8],A=s[12],I=s[1],U=s[5],V=s[9],H=s[13],D=s[2],G=s[6],j=s[10],$=s[14],nt=s[3],W=s[7],Q=s[11],et=s[15];return r[0]=a*w+o*I+l*D+c*nt,r[4]=a*R+o*U+l*G+c*W,r[8]=a*x+o*V+l*j+c*Q,r[12]=a*A+o*H+l*$+c*et,r[1]=u*w+p*I+h*D+g*nt,r[5]=u*R+p*U+h*G+g*W,r[9]=u*x+p*V+h*j+g*Q,r[13]=u*A+p*H+h*$+g*et,r[2]=v*w+S*I+m*D+d*nt,r[6]=v*R+S*U+m*G+d*W,r[10]=v*x+S*V+m*j+d*Q,r[14]=v*A+S*H+m*$+d*et,r[3]=T*w+L*I+y*D+b*nt,r[7]=T*R+L*U+y*G+b*W,r[11]=T*x+L*V+y*j+b*Q,r[15]=T*A+L*H+y*$+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],g=t[14],v=t[3],S=t[7],m=t[11],d=t[15],T=l*g-c*h,L=o*g-c*p,y=o*h-l*p,b=a*g-c*u,w=a*h-l*u,R=a*p-o*u;return e*(S*T-m*L+d*y)-n*(v*T-m*b+d*w)+s*(v*L-S*b+d*R)-r*(v*y-S*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],g=t[11],v=t[12],S=t[13],m=t[14],d=t[15],T=e*o-n*a,L=e*l-s*a,y=e*c-r*a,b=n*l-s*o,w=n*c-r*o,R=s*c-r*l,x=u*S-p*v,A=u*m-h*v,I=u*d-g*v,U=p*m-h*S,V=p*d-g*S,H=h*d-g*m,D=T*H-L*V+y*U+b*I-w*A+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(o*H-l*V+c*U)*G,t[1]=(s*V-n*H-r*U)*G,t[2]=(S*R-m*w+d*b)*G,t[3]=(h*w-p*R-g*b)*G,t[4]=(l*I-a*H-c*A)*G,t[5]=(e*H-s*I+r*A)*G,t[6]=(m*y-v*R-d*L)*G,t[7]=(u*R-h*y+g*L)*G,t[8]=(a*V-o*I+c*x)*G,t[9]=(n*I-e*V-r*x)*G,t[10]=(v*w-S*y+d*T)*G,t[11]=(p*y-u*w-g*T)*G,t[12]=(o*A-a*U-l*x)*G,t[13]=(e*U-n*A+s*x)*G,t[14]=(S*L-v*b-m*T)*G,t[15]=(u*b-p*L+h*T)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,h=r*c,g=r*u,v=r*p,S=a*u,m=a*p,d=o*p,T=l*c,L=l*u,y=l*p,b=n.x,w=n.y,R=n.z;return s[0]=(1-(S+d))*b,s[1]=(g+y)*b,s[2]=(v-L)*b,s[3]=0,s[4]=(g-y)*w,s[5]=(1-(h+d))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(v+L)*R,s[9]=(m-T)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,u=1/o,p=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),g=(n+s)/(n-s),v,S;if(l)v=r/(a-r),S=a*r/(a-r);else if(o===un)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Zi)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),g=-(n+s)/(n-s),v,S;if(l)v=1/(a-r),S=a/(a-r);else if(o===un)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===Zi)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};aa.prototype.isMatrix4=!0;var fe=aa,Ni=new k,on=new fe,Vh=new k(0,0,0),Gh=new k(1,1,1),Zn=new k,ar=new k,qe=new k,$l=new fe,Zl=new bn,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hh=0,Jl=new k,Ui=new bn,Pn=new fe,or=new k,_s=new k,Wh=new k,Xh=new bn,Kl=new k(1,0,0),jl=new k(0,1,0),Ql=new k(0,0,1),tc={type:"added"},qh={type:"removed"},Fi={type:"childadded",child:null},vo={type:"childremoved",child:null},be=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Fn,n=new bn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ot}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(_s,or,this.up):Pn.lookAt(or,_s,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qh),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};be.DEFAULT_UP=new k(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yh={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),g=.02,v=.005;c.inputState.pinching&&h>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Oh(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Yt.workingToColorSpace(Le.copy(this),t),Math.round(jt(Le.r*255,0,255))*65536+Math.round(jt(Le.g*255,0,255))*256+Math.round(jt(Le.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Be){Yt.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(lr);let n=po(Jn.h,lr.h,e),s=po(Jn.s,lr.s,e),r=po(Jn.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Bt;Bt.NAMES=Kc;var Rs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new k,In=new k,So=new k,Ln=new k,Oi=new k,Bi=new k,ec=new k,Mo=new k,bo=new k,wo=new k,Ao=new ce,To=new ce,Eo=new ce,ti=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),In.subVectors(n,e),So.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(In),l=ln.dot(So),c=In.dot(In),u=In.dot(So),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,g=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-g-v,v,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),To.setScalar(0),Eo.setScalar(0),Ao.fromBufferAttribute(t,e),To.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(To,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),Mo.subVectors(t,n);let l=Oi.dot(Mo),c=Bi.dot(Mo);if(l<=0&&c<=0)return e.copy(n);bo.subVectors(t,s);let u=Oi.dot(bo),p=Bi.dot(bo);if(u>=0&&p<=u)return e.copy(s);let h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Oi,a);wo.subVectors(t,r);let g=Oi.dot(wo),v=Bi.dot(wo);if(v>=0&&g<=v)return e.copy(r);let S=g*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Bi,o);let m=u*v-g*p;if(m<=0&&p-u>=0&&g-v>=0)return ec.subVectors(r,s),o=(p-u)/(p-u+(g-v)),e.copy(s).addScaledVector(ec,o);let d=1/(m+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),hr.subVectors(this.max,xs),zi.subVectors(t.a,xs),ki.subVectors(t.b,xs),Vi.subVectors(t.c,xs),Kn.subVectors(ki,zi),jn.subVectors(Vi,ki),mi.subVectors(zi,Vi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-mi.y,mi.x,0];return!Co(e,zi,ki,Vi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,zi,ki,Vi,hr))?!1:(ur.crossVectors(Kn,jn),e=[ur.x,ur.y,ur.z],Co(e,zi,ki,Vi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,cr=new wn,zi=new k,ki=new k,Vi=new k,Kn=new k,jn=new k,mi=new k,xs=new k,hr=new k,ur=new k,gi=new k;function Co(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Se=new k,dr=new Xt,$h=0,ze=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Is=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ls=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qe=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zh=new wn,vs=new k,Ro=new k,ei=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ro)),this.expandByPoint(vs.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jh=0,je=new fe,Po=new be,Gi=new k,Ye=new wn,ys=new wn,Ee=new k,An=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Ls:Is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ye.min,ys.min),Ye.expandByPoint(Ee),Ee.addVectors(Ye.max,ys.max),Ye.expandByPoint(Ee)):(Ye.expandByPoint(ys.min),Ye.expandByPoint(ys.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(t,c),Ee.add(Gi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new k,l[x]=new k;let c=new k,u=new k,p=new k,h=new Xt,g=new Xt,v=new Xt,S=new k,m=new k;function d(x,A,I){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),p.fromBufferAttribute(n,I),h.fromBufferAttribute(r,x),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,I),u.sub(c),p.sub(c),g.sub(h),v.sub(h);let U=1/(g.x*v.y-v.x*g.y);isFinite(U)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(U),m.copy(p).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(U),o[x].add(S),o[A].add(S),o[I].add(S),l[x].add(m),l[A].add(m),l[I].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,A=T.length;x<A;++x){let I=T[x],U=I.start,V=I.count;for(let H=U,D=U+V;H<D;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let L=new k,y=new k,b=new k,w=new k;function R(x){b.fromBufferAttribute(s,x),w.copy(b);let A=o[x];L.copy(A),L.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(w,A);let U=y.dot(l[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,U)}for(let x=0,A=T.length;x<A;++x){let I=T[x],U=I.start,V=I.count;for(let H=U,D=U+V;H<D;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,p=new k;if(t)for(let h=0,g=t.count;h<g;h+=3){let v=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u),g=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[g++]}return new ze(h,u,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let h=c[u],g=t(h,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){let g=c[p];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let h=0,g=p.length;h<g;h++)u.push(p[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new k,Kh=new k,jh=new Ot,hn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Io.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jh.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qh=0,On=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=js(),this.name="",this.type="Material",this.blending=ns,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new k,Lo=new k,fr=new k,pr=new k,Gr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=pr.dot(this.direction),l=-pr.dot(fr),c=pr.lengthSq(),u=Math.abs(1-a*a),p,h,g,v;if(u>0)if(p=a*l-o,h=a*o-l,v=r*u,p>=0)if(h>=-v)if(h<=v){let S=1/u;p*=S,h*=S,g=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Lo).addScaledVector(fr,h),g}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,g=t.z-a.z,v=e.x-a.x,S=e.y-a.y,m=e.z-a.z,d=n.x-a.x,T=n.y-a.y,L=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(u),R,x,A,I,U,V,H,D,G,j,$,nt;if(y>=b&&y>=w?(A=l,V=p,G=v,nt=d,l>=0?(R=c,x=u,I=h,U=g,H=S,D=m,j=T,$=L):(R=u,x=c,I=g,U=h,H=m,D=S,j=L,$=T)):b>=w?(A=c,V=h,G=S,nt=T,c>=0?(R=u,x=l,I=g,U=p,H=m,D=v,j=L,$=d):(R=l,x=u,I=p,U=g,H=v,D=m,j=d,$=L)):(A=u,V=g,G=m,nt=L,u>=0?(R=l,x=c,I=p,U=h,H=v,D=S,j=d,$=T):(R=c,x=l,I=h,U=p,H=S,D=v,j=T,$=d)),A===0)return null;let W=R/A,Q=x/A,et=1/A,It=I-W*V,At=U-Q*V,re=H-W*G,Gt=D-Q*G,$t=j-W*nt,Z=$-Q*nt,J=$t*Gt-Z*re,gt=It*Z-At*$t,Rt=re*At-Gt*It;if(s){if(J<0||gt<0||Rt<0)return null}else if((J<0||gt<0||Rt<0)&&(J>0||gt>0||Rt>0))return null;let xt=J+gt+Rt;if(xt===0)return null;let zt=et*(J*V+gt*G+Rt*nt);return(xt>0?zt<0:zt>0)?null:this.at(zt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nc=new fe,_i=new Gr,mr=new ei,ic=new k,gr=new k,_r=new k,xr=new k,Do=new k,vr=new k,sc=new k,yr=new k,we=class extends be{constructor(t=new An,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Do.fromBufferAttribute(p,t),a?vr.addScaledVector(Do,u):vr.addScaledVector(Do.sub(e),u))}e.add(vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(mr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(mr,ic)===null||_i.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){let m=h[v],d=a[m.materialIndex],T=Math.max(m.start,g.start),L=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=T,b=L;y<b;y+=3){let w=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);s=Sr(this,d,t,n,c,u,p,w,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=v,d=S;m<d;m+=3){let T=o.getX(m),L=o.getX(m+1),y=o.getX(m+2);s=Sr(this,a,t,n,c,u,p,T,L,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){let m=h[v],d=a[m.materialIndex],T=Math.max(m.start,g.start),L=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let y=T,b=L;y<b;y+=3){let w=y,R=y+1,x=y+2;s=Sr(this,d,t,n,c,u,p,w,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=v,d=S;m<d;m+=3){let T=m,L=m+1,y=m+2;s=Sr(this,a,t,n,c,u,p,T,L,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ai,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function Sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);let u=tu(i,t,e,n,gr,_r,xr,sc);if(u){let p=new k;ti.getBarycoord(sc,gr,_r,xr,p),s&&(u.uv=ti.getInterpolatedAttribute(s,o,l,c,p,new Xt)),r&&(u.uv1=ti.getInterpolatedAttribute(r,o,l,c,p,new Xt)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,p,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new k,materialIndex:0};ti.getNormal(gr,_r,xr,h.normal),u.face=h,u.barycoord=p}return u}var Ds=class extends ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,u=Ce,p,h){super(null,a,o,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hi=new fe,rc=new fe,Mr=[],ac=new wn,eu=new fe,Ss=new we,Ms=new ei,Ns=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),ac.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(ac)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Ms.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),rc.multiplyMatrices(n,Hi),Ss.matrixWorld=rc,Ss.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let l=Mr[a];l.instanceId=r,l.object=this,e.push(l)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(s*this.count),s,this.count,pa,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new ei,nu=new Xt(.5,.5),br=new k,Qi=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],g=r[7],v=r[8],S=r[9],m=r[10],d=r[11],T=r[12],L=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,g-u,d-v,b-T).normalize(),s[1].setComponents(c+a,g+u,d+v,b+T).normalize(),s[2].setComponents(c+o,g+p,d+S,b+L).normalize(),s[3].setComponents(c-o,g-p,d-S,b-L).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,g-h,d-m,b-y).normalize();else if(s[4].setComponents(c-l,g-h,d-m,b-y).normalize(),e===un)s[5].setComponents(c+l,g+h,d+m,b+y).normalize();else if(e===Zi)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=nu.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends ke{constructor(t=[],e=oi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fs=class extends ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends ke{constructor(t,e,n=fn,s,r,a,o=Ce,l=Ce,c,u=Sn,p=1){if(u!==Sn&&u!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hr=class extends ni{constructor(t,e=fn,n=oi,s,r,a=Ce,o=Ce,l,c=Sn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Os=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zn=class i extends An{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],h=0,g=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function v(S,m,d,T,L,y,b,w,R,x,A){let I=y/R,U=b/x,V=y/2,H=b/2,D=w/2,G=R+1,j=x+1,$=0,nt=0,W=new k;for(let Q=0;Q<j;Q++){let et=Q*U-H;for(let It=0;It<G;It++){let At=It*I-V;W[S]=At*T,W[m]=et*L,W[d]=D,c.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[d]=w>0?1:-1,u.push(W.x,W.y,W.z),p.push(It/R),p.push(1-Q/x),$+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<R;et++){let It=h+et+G*Q,At=h+et+G*(Q+1),re=h+(et+1)+G*(Q+1),Gt=h+(et+1)+G*Q;l.push(It,At,Gt),l.push(At,re,Gt),nt+=6}o.addGroup(g,nt,A),g+=nt,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var kn=class i extends An{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,h=e/l,g=[],v=[],S=[],m=[];for(let d=0;d<u;d++){let T=d*h-a;for(let L=0;L<c;L++){let y=L*p-r;v.push(y,-T,0),S.push(0,0,1),m.push(L/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let L=T+c*d,y=T+c*(d+1),b=T+1+c*(d+1),w=T+1+c*d;g.push(L,y,w),g.push(y,b,w)}this.setIndex(g),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(S,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Bs=class extends On{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Bt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(oc(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(oc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function oc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function iu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ul(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var jc={clone:wi,merge:Ne},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=iu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tn=class extends On{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xr=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qr=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yr=class extends ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bo:r=t,o=2*e-n;break;case zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=t,l=2*n-e;break;case zo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,g=this._weightNext,v=(n-e)/(s-e),S=v*v,m=S*v,d=-h*m+2*h*S-h*v,T=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*v+1,L=(-1-g)*m+(1.5+g)*S+.5*v,y=g*m-g*S;for(let b=0;b!==o;++b)r[b]=d*a[u+b]+T*a[c+b]+L*a[l+b]+y*a[p+b];return r}},$r=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*p+a[l+h]*u;return r}},Zr=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jr=class extends ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let v=(n-e)/(s-e),S=1-v;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*v;return r}let h=o*2,g=t-1;for(let v=0;v!==o;++v){let S=a[c+v],m=a[l+v],d=g*h+v*2,T=p[d],L=p[d+1],y=t*h+v*2,b=u[y],w=u[y+1],R=ou(n,e,T,b,s);r[v]=Qc(R,S,L,w,m)}return r}};function Qc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function au(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ou(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Qc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=au(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wi(e,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wi(t.times,Array),values:Wi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:Wi(t.settings.inTangents,Array),outTangents:Wi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case bs:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break;case Fo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Tr;case this.InterpolantFactoryMethodBezier:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(lc(this.settings.inTangents,t),lc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,h=p-n,g=p+n;for(let v=0;v!==n;++v){let S=e[p+v];if(S!==e[h+v]||S!==e[g+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let g=0;g!==n;++g)e[h+g]=e[p+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Or;var si=class extends Ze{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=bs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Kr.prototype.ValueTypeName="color";var jr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};jr.prototype.ValueTypeName="number";var Qr=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Ze{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=bs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="vector";var ea=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){let g=c[p],v=c[p+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},th=new ea,na=class{constructor(t){this.manager=t!==void 0?t:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vs=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uo=new fe,cc=new k,hc=new k,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(cc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wr=new k,Ar=new bn,xn=new k,Gs=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Ar,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Ar,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new k,uc=new Xt,dc=new Xt,De=class extends Gs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ts=class extends Gs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ko=class extends ia{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new ko}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xi=-90,qi=1,sa=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Xi,qi,t,e);s.layers=this.layers,this.add(s);let r=new De(Xi,qi,t,e);r.layers=this.layers,this.add(r);let a=new De(Xi,qi,t,e);a.layers=this.layers,this.add(a);let o=new De(Xi,qi,t,e);o.layers=this.layers,this.add(o);let l=new De(Xi,qi,t,e);l.layers=this.layers,this.add(l);let c=new De(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ra=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dl="\\[\\]\\.:\\/",lu=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",cu="[^"+dl.replace("\\.","")+"]",hu=/((?:WC+[\/:])*)/.source.replace("WC",fl),uu=/(WCOD+)?/.source.replace("WCOD",cu),du=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),fu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),pu=new RegExp("^"+hu+uu+du+fu+"$"),mu=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lu,"")}static parseTrackName(t){let e=pu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Vo;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eg=new Float32Array(1);var vl=class vl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};vl.prototype.isMatrix2=!0;var Go=vl;function pl(i,t,e,n){let s=gu(n);switch(e){case ol:return i*t;case pa:return i*t/s.components*s.byteLength;case ma:return i*t/s.components*s.byteLength;case hi:return i*t*2/s.components*s.byteLength;case ga:return i*t*2/s.components*s.byteLength;case ll:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case _a:return i*t*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:case Sa:return Math.max(i,16)*Math.max(t,8)/4;case xa:case ya:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case ba:case Aa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case Js:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Ha:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ks:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gu(i){switch(i){case Xe:case il:return{byteLength:1,components:1};case is:case sl:case pn:return{byteLength:2,components:1};case da:case fa:return{byteLength:2,components:4};case fn:case ua:case en:return{byteLength:4,components:1};case rl:case al:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xu(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<p.length;g++){let v=p[h],S=p[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,p[h]=S)}p.length=h+1;for(let g=0,v=p.length;g<v;g++){let S=p[g];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vu=`#ifdef USE_ALPHAHASH
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
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
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
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
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
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
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
}`,$f=`uniform float size;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:vu,alphahash_pars_fragment:yu,alphamap_fragment:Su,alphamap_pars_fragment:Mu,alphatest_fragment:bu,alphatest_pars_fragment:wu,aomap_fragment:Au,aomap_pars_fragment:Tu,batching_pars_vertex:Eu,batching_vertex:Cu,begin_vertex:Ru,beginnormal_vertex:Pu,bsdfs:Iu,iridescence_fragment:Lu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Vu,common:Gu,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:Zu,colorspace_pars_fragment:Ju,envmap_fragment:Ku,envmap_common_pars_fragment:ju,envmap_pars_fragment:Qu,envmap_pars_vertex:td,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:xd,lights_fragment_maps:vd,lights_fragment_end:yd,lightprobes_pars_fragment:Sd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Ad,map_fragment:Td,map_pars_fragment:Ed,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:Zd,project_vertex:Jd,dithering_fragment:Kd,dithering_pars_fragment:jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,worldpos_vertex:vf,background_vert:yf,background_frag:Sf,backgroundCube_vert:Mf,backgroundCube_frag:bf,cube_vert:wf,cube_frag:Af,depth_vert:Tf,depth_frag:Ef,distance_vert:Cf,distance_frag:Rf,equirect_vert:Pf,equirect_frag:If,linedashed_vert:Lf,linedashed_frag:Df,meshbasic_vert:Nf,meshbasic_frag:Uf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:kf,meshnormal_frag:Vf,meshphong_vert:Gf,meshphong_frag:Hf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:$f,points_frag:Zf,shadow_vert:Jf,shadow_frag:Kf,sprite_vert:jf,sprite_frag:Qf},mt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Rn={basic:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ne([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ne([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ne([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ne([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ne([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ne([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ne([mt.common,mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ne([mt.lights,mt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Rn.physical={uniforms:Ne([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Ka={r:0,b:0,g:0},tp=new fe,bh=new Ot;bh.set(-1,0,0,0,1,0,0,0,1);function ep(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,u=null,p=0,h=null;function g(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let y=T.backgroundBlurriness>0;L=t.get(L,y)}return L}function v(T){let L=!1,y=g(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),L=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,L){let y=g(L);y&&(y.isCubeTexture||y.mapping===Ws)?(c===void 0&&(c=new we(new zn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:wi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(L.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bh),c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ne,(u!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new we(new kn(2,2),new $e({name:"BackgroundMaterial",uniforms:wi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,L){T.getRGB(Ka,ul(i)),e.buffers.color.setClear(Ka.r,Ka.g,Ka.b,L,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,L=1){a.set(T),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:v,addToRenderList:S,dispose:d}}function np(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,V,H,D,G){let j=!1,$=p(U,D,H,V);r!==$&&(r=$,c(r.object)),j=g(U,D,H,G),j&&v(U,D,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(U,V,H,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function p(U,V,H,D){let G=D.wireframe===!0,j=n[V.id];j===void 0&&(j={},n[V.id]=j);let $=U.isInstancedMesh===!0?U.id:0,nt=j[$];nt===void 0&&(nt={},j[$]=nt);let W=nt[H.id];W===void 0&&(W={},nt[H.id]=W);let Q=W[G];return Q===void 0&&(Q=h(l()),W[G]=Q),Q}function h(U){let V=[],H=[],D=[];for(let G=0;G<e;G++)V[G]=0,H[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:D,object:U,attributes:{},index:null}}function g(U,V,H,D){let G=r.attributes,j=V.attributes,$=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=G[W],It=j[W];if(It===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(It=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(It=U.instanceColor)),et===void 0||et.attribute!==It||It&&et.data!==It.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function v(U,V,H,D){let G={},j=V.attributes,$=0,nt=H.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=j[W];et===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let It={};It.attribute=et,et&&et.data&&(It.data=et.data),G[W]=It,$++}r.attributes=G,r.attributesNum=$,r.index=D}function S(){let U=r.newAttributes;for(let V=0,H=U.length;V<H;V++)U[V]=0}function m(U){d(U,0)}function d(U,V){let H=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;H[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),G[U]!==V&&(i.vertexAttribDivisor(U,V),G[U]=V)}function T(){let U=r.newAttributes,V=r.enabledAttributes;for(let H=0,D=V.length;H<D;H++)V[H]!==U[H]&&(i.disableVertexAttribArray(H),V[H]=0)}function L(U,V,H,D,G,j,$){$===!0?i.vertexAttribIPointer(U,V,H,G,j):i.vertexAttribPointer(U,V,H,D,G,j)}function y(U,V,H,D){S();let G=D.attributes,j=H.getAttributes(),$=V.defaultAttributeValues;for(let nt in j){let W=j[nt];if(W.location>=0){let Q=G[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let et=Q.normalized,It=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let re=At.buffer,Gt=At.type,$t=At.bytesPerElement,Z=Gt===i.INT||Gt===i.UNSIGNED_INT||Q.gpuType===ua;if(Q.isInterleavedBufferAttribute){let J=Q.data,gt=J.stride,Rt=Q.offset;if(J.isInstancedInterleavedBuffer){for(let xt=0;xt<W.locationSize;xt++)d(W.location+xt,J.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let xt=0;xt<W.locationSize;xt++)L(W.location+xt,It/W.locationSize,Gt,et,gt*$t,(Rt+It/W.locationSize*xt)*$t,Z)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)d(W.location+J,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,re);for(let J=0;J<W.locationSize;J++)L(W.location+J,It/W.locationSize,Gt,et,It*$t,It/W.locationSize*J*$t,Z)}}else if($!==void 0){let et=$[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(W.location,et);break;case 3:i.vertexAttrib3fv(W.location,et);break;case 4:i.vertexAttrib4fv(W.location,et);break;default:i.vertexAttrib1fv(W.location,et)}}}}T()}function b(){A();for(let U in n){let V=n[U];for(let H in V){let D=V[H];for(let G in D){let j=D[G];for(let $ in j)u(j[$].object),delete j[$];delete D[G]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let V=n[U.id];for(let H in V){let D=V[H];for(let G in D){let j=D[G];for(let $ in j)u(j[$].object),delete j[$];delete D[G]}}delete n[U.id]}function R(U){for(let V in n){let H=n[V];for(let D in H){let G=H[D];if(G[U.id]===void 0)continue;let j=G[U.id];for(let $ in j)u(j[$].object),delete j[$];delete G[U.id]}}}function x(U){for(let V in n){let H=n[V],D=U.isInstancedMesh===!0?U.id:0,G=H[D];if(G!==void 0){for(let j in G){let $=G[j];for(let nt in $)u($[nt].object),delete $[nt];delete G[j]}delete H[D],Object.keys(H).length===0&&delete n[V]}}}function A(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function ip(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let g=0;g<u;g++)h+=c[g];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xe&&R!==en&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:y,maxSamples:b,samples:w}}function rp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let g=p.length!==0||h||n!==0||s;return s=h,n=p.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,g){let v=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,L=T*4,y=d.clippingState||null;l.value=y,y=u(v,h,L,g);for(let b=0;b!==L;++b)y[b]=e[b];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,g,v){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=l.value,v!==!0||m===null){let d=g+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let L=0,y=g;L!==S;++L,y+=4)a.copy(p[L]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var as=4,ap=6,op=20,lp=256,Qs=new ts,eh=new Bt,yl=null,Sl=0,Ml=0,bl=!1,cp=new k,Ai=new k,Qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=cp}=r;yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Sl,Ml),this._renderer.xr.enabled=bl,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:pn,format:nn,colorSpace:ws,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hp(r)),this._blurMaterial=dp(r,t,e),this._ggxMaterial=up(r,t,e)}return s}_compileMaterial(t){let e=new we(new An,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(eh),p.toneMapping=dn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new zn,new yi({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,d=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,d=!0):(m.color.copy(eh),d=!0);for(let L=0;L<6;L++){let y=L%3;y===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):y===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));let b=this._cubeSize;rs(s,y*b,L>2?b:0,b,b),p.setRenderTarget(s),d&&p.render(S,l),p.render(t,l)}p.toneMapping=g,p.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oi||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,g=p*h,{_lodMax:v}=this,S=this._sizeLods[n],m=3*S*(n>v-as?n-v+as:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=v-e,rs(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,rs(t,m,d,3*S,2*S),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-as?s-this._lodMax+as:0),h=4*(this._cubeSize-u);rs(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Qs)}};function hp(i){let t=[],e=[],n=i,s=i-as+1+ap;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,g=3,v=new Float32Array(g*h*p),S=new Float32Array(g*h*p);for(let d=0;d<p;d++){let T=d%3*2/3-1,L=d>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(y,g*h*d);for(let b=0;b<h;b++){let w=u[b*2]*2-1,R=u[b*2+1]*2-1;d===0?Ai.set(1,R,w):d===1?Ai.set(-w,1,-R):d===2?Ai.set(-w,R,1):d===3?Ai.set(-1,R,-w):d===4?Ai.set(-w,-1,R):Ai.set(w,R,-1),Ai.toArray(S,(d*h+b)*g)}}let m=new An;m.setAttribute("position",new ze(v,g)),m.setAttribute("outputDirection",new ze(S,g)),e.push(new we(m,null)),n>as&&n--}return{lodMeshes:e,sizeLods:t}}function nh(i,t,e){let n=new We(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function up(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function dp(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:op,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function ih(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function sh(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var to=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Us(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:En});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=Re),new sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function fp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===la||g===ca)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let S=new to(v.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,v=g===la||g===ca,S=g===oi||g===bi;if(v||S){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Qa(i)),m=v?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return v&&T&&T.height>0||S&&T&&l(T)?(n===null&&(n=new Qa(i)),m=v?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,g){return g===la?h.mapping=oi:g===ca&&(h.mapping=bi),h}function l(h){let g=0,v=6;for(let S=0;S<v;S++)h[S]!==void 0&&g++;return g===v}function c(h){let g=h.target;g.removeEventListener("dispose",c);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function u(h){let g=h.target;g.removeEventListener("dispose",u);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(p){let h=p.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER)}function c(p){let h=[],g=p.index,v=p.attributes.position,S=0;if(v===void 0)return;if(g!==null){let T=g.array;S=g.version;for(let L=0,y=T.length;L<y;L+=3){let b=T[L+0],w=T[L+1],R=T[L+2];h.push(b,w,w,R,R,b)}}else{let T=v.array;S=v.version;for(let L=0,y=T.length/3-1;L<y;L+=3){let b=L+0,w=L+1,R=L+2;h.push(b,w,w,R,R,b)}}let m=new(v.count>=65535?Ls:Is)(h,1);m.version=S;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function u(p){let h=r.get(p);if(h){let g=p.index;g!==null&&h.version<g.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function gp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function c(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,p*a,g),e.update(h,n,g))}function u(p,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,g);let S=0;for(let m=0;m<g;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _p(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xp(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],L=0;g===!0&&(L=1),v===!0&&(L=2),S===!0&&(L=3);let y=o.attributes.position.count*L,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*p),R=new Es(w,y,b,p);R.type=en,R.needsUpdate=!0;let x=L*4;for(let I=0;I<p;I++){let U=m[I],V=d[I],H=T[I],D=y*b*4*I;for(let G=0;G<U.count;G++){let j=G*x;g===!0&&(s.fromBufferAttribute(U,G),w[D+j+0]=s.x,w[D+j+1]=s.y,w[D+j+2]=s.z,w[D+j+3]=0),v===!0&&(s.fromBufferAttribute(V,G),w[D+j+4]=s.x,w[D+j+5]=s.y,w[D+j+6]=s.z,w[D+j+7]=0),S===!0&&(s.fromBufferAttribute(H,G),w[D+j+8]=s.x,w[D+j+9]=s.y,w[D+j+10]=s.z,w[D+j+11]=H.itemSize===4?s.w:1)}}h={count:p,texture:R,size:new Xt(y,b)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];let v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vp(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,h=t.get(c,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var yp={[Zo]:"LINEAR_TONE_MAPPING",[Jo]:"REINHARD_TONE_MAPPING",[Ko]:"CINEON_TONE_MAPPING",[jo]:"ACES_FILMIC_TONE_MAPPING",[tl]:"AGX_TONE_MAPPING",[el]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function Sp(i,t,e,n,s,r){let a=new We(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new An;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let u=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new we(c,u),h=new ts(-1,1,1,-1,0,1),g=null,v=null,S=!1,m,d=null,T=[],L=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<T.length;w++){let R=T[w];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){T=y,L=T.length>0&&T[0].isRenderPass===!0;let b=a.width,w=a.height;T.length>0&&o===null&&(o=new We(b,w,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new We(b,w,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){let x=T[R];x.setSize&&x.setSize(b,w)}},this.begin=function(y,b){if(S||y.toneMapping===dn&&T.length===0)return!1;if(d=b,b!==null){let w=b.width,R=b.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return L===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=dn,!0},this.hasRenderPass=function(){return L},this.end=function(y,b){y.toneMapping=m,S=!0;let w=a,R=o;for(let x=0;x<T.length;x++){let A=T[x];A.enabled!==!1&&(A.render(y,R,w,b),A.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(g!==y.outputColorSpace||v!==y.toneMapping){g=y.outputColorSpace,v=y.toneMapping,u.defines={},Yt.getTransfer(g)===ne&&(u.defines.SRGB_TRANSFER="");let x=yp[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(p,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var wh=new ke,Tl=new ni(1,1),Ah=new Es,Th=new Vr,Eh=new Us,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Tp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),Te(e,n)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Te(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),Te(e,n)}}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Ja:Za,r=Tl):r=wh,e.setTexture2D(t||r,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Th,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eh,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ah,s)}function Vp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return wp;case 35666:return Ap;case 35674:return Tp;case 35675:return Ep;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Pp;case 35668:case 35672:return Ip;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Np;case 36295:return Up;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Hp(i,t){let e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Wp(i,t){let e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Xp(i,t){let e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){let e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yp(i,t){let e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $p(i,t){let e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zp(i,t){i.uniform1iv(this.addr,t)}function Jp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function Qp(i,t){i.uniform1uiv(this.addr,t)}function tm(i,t){i.uniform2uiv(this.addr,t)}function em(i,t){i.uniform3uiv(this.addr,t)}function nm(i,t){i.uniform4uiv(this.addr,t)}function im(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tl:a=wh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Th,r[a])}function rm(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Eh,r[a])}function am(i,t,e){let n=this.cache,s=t.length,r=io(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ah,r[a])}function om(i){switch(i){case 5126:return Gp;case 35664:return Hp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}},Cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=om(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function hh(i,t){i.seq.push(t),i.map[t.id]=t}function lm(i,t,e){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),a=wl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hh(e,c===void 0?new El(o,i,t):new Cl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Rl(o),hh(e,p)),e=p}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);lm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function uh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cm=37297,hm=0;function um(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var dh=new Ot;function dm(i){Yt._getMatrix(dh,Yt.workingColorSpace,i);let t=`mat3( ${dh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case As:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+um(i.getShaderSource(t),o)}else return r}function fm(i,t){let e=dm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pm={[Zo]:"Linear",[Jo]:"Reinhard",[Ko]:"Cineon",[jo]:"ACESFilmic",[tl]:"AgX",[el]:"Neutral",[Qo]:"Custom"};function mm(i,t){let e=pm[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ja=new k;function gm(){Yt.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function xm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function ph(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(ym,Mm)}var Sm=new Map;function Mm(i,t){let e=Vt[t];if(e===void 0){let n=Sm.get(t);if(n!==void 0)e=Vt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pl(e)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(bm,wm)}function wm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Am={[Si]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function Tm(i){return Am[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Em={[oi]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function Cm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Em[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rm={[bi]:"ENVMAP_MODE_REFRACTION"};function Pm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Im={[oa]:"ENVMAP_BLENDING_MULTIPLY",[Nc]:"ENVMAP_BLENDING_MIX",[Uc]:"ENVMAP_BLENDING_ADD"};function Lm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Im[i.combine]||"ENVMAP_BLENDING_NONE"}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Tm(e),c=Cm(e),u=Pm(e),p=Lm(e),h=Dm(e),g=_m(e),v=xm(r),S=s.createProgram(),m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==dn?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=Pl(a),a=ph(a,e),a=mh(a,e),o=Pl(o),o=ph(o,e),o=mh(o,e),a=gh(a),o=gh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let L=T+m+a,y=T+d+o,b=uh(s,s.VERTEX_SHADER,L),w=uh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,b),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(U){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(S)||"",H=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(w)||"",G=V.trim(),j=H.trim(),$=D.trim(),nt=!0,W=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{let Q=fh(s,b,"vertex"),et=fh(s,w,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Q+`
`+et)}else G!==""?Dt("WebGLProgram: Program Info Log:",G):(j===""||$==="")&&(W=!1);W&&(U.diagnostics={runnable:nt,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(b),s.deleteShader(w),x=new os(s,S),A=vm(s,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(S,cm)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}var Um=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ll(t),e.set(t,n)),n}},Ll=class{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}};function Fm(i){return i===hi||i===Js||i===Ks}function Om(i,t,e,n,s,r){let a=new Cs,o=new Il,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,I,U,V,H){let D=U.fog,G=V.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||j,$),W=nt&&nt.mapping===Ws?nt.image.height:null,Q=g[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,It=et!==void 0?et.length:0,At=0;G.morphAttributes.position!==void 0&&(At=1),G.morphAttributes.normal!==void 0&&(At=2),G.morphAttributes.color!==void 0&&(At=3);let re,Gt,$t,Z;if(Q){let te=Rn[Q];re=te.vertexShader,Gt=te.fragmentShader}else{re=x.vertexShader,Gt=x.fragmentShader;let te=o.getVertexShaderStage(x),Kt=o.getFragmentShaderStage(x);o.update(x,te,Kt),$t=te.id,Z=Kt.id}let J=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Rt=V.isInstancedMesh===!0,xt=V.isBatchedMesh===!0,zt=!!x.map,ge=!!x.matcap,kt=!!nt,Zt=!!x.aoMap,ie=!!x.lightMap,Ht=!!x.bumpMap&&x.wireframe===!1,qt=!!x.normalMap,he=!!x.displacementMap,Me=!!x.emissiveMap,ae=!!x.metalnessMap,ue=!!x.roughnessMap,P=x.anisotropy>0,ve=x.clearcoat>0,Jt=x.dispersion>0,M=x.retroreflectivity>0,f=x.iridescence>0,N=x.sheen>0,B=x.transmission>0,X=P&&!!x.anisotropyMap,at=ve&&!!x.clearcoatMap,st=ve&&!!x.clearcoatNormalMap,Y=ve&&!!x.clearcoatRoughnessMap,K=f&&!!x.iridescenceMap,ut=f&&!!x.iridescenceThicknessMap,Tt=N&&!!x.sheenColorMap,dt=N&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Et=!!x.specularColorMap,Pt=!!x.specularIntensityMap,Ut=B&&!!x.transmissionMap,E=B&&!!x.thicknessMap,it=!!x.gradientMap,q=!!x.alphaMap,ht=x.alphaTest>0,ot=!!x.alphaHash,tt=!!x.extensions,Ct=dn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:Gt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xt,batchingColor:xt&&V._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&V.instanceColor!==null,instancingMorph:Rt&&V.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:ge,envMap:kt,envMapMode:kt&&nt.mapping,envMapCubeUVHeight:W,aoMap:Zt,lightMap:ie,bumpMap:Ht,normalMap:qt,displacementMap:he,emissiveMap:Me,normalMapObjectSpace:qt&&x.normalMapType===Bc,normalMapTangentSpace:qt&&x.normalMapType===$a,packedNormalMap:qt&&x.normalMapType===$a&&Fm(x.normalMap.format),metalnessMap:ae,roughnessMap:ue,anisotropy:P,anisotropyMap:X,clearcoat:ve,clearcoatMap:at,clearcoatNormalMap:st,clearcoatRoughnessMap:Y,dispersion:Jt,retroreflection:M,iridescence:f,iridescenceMap:K,iridescenceThicknessMap:ut,sheen:N,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:lt,specularColorMap:Et,specularIntensityMap:Pt,transmission:B,transmissionMap:Ut,thicknessMap:E,gradientMap:it,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:q,alphaTest:ht,alphaHash:ot,combine:x.combine,mapUv:zt&&v(x.map.channel),aoMapUv:Zt&&v(x.aoMap.channel),lightMapUv:ie&&v(x.lightMap.channel),bumpMapUv:Ht&&v(x.bumpMap.channel),normalMapUv:qt&&v(x.normalMap.channel),displacementMapUv:he&&v(x.displacementMap.channel),emissiveMapUv:Me&&v(x.emissiveMap.channel),metalnessMapUv:ae&&v(x.metalnessMap.channel),roughnessMapUv:ue&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:at&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(x.sheenRoughnessMap.channel),specularMapUv:lt&&v(x.specularMap.channel),specularColorMapUv:Et&&v(x.specularColorMap.channel),specularIntensityMapUv:Pt&&v(x.specularIntensityMap.channel),transmissionMapUv:Ut&&v(x.transmissionMap.channel),thicknessMapUv:E&&v(x.thicknessMap.channel),alphaMapUv:q&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(qt||P),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(zt||q),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===ne,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(d(A,x),T(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){let A=g[x.type],I;if(A){let U=Rn[A];I=jc.clone(U.uniforms)}else I=x.uniforms;return I}function y(x,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new Nm(i,A,x,s),c.push(I),u.set(A,I)),I}function b(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:L,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:R}}function Bm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,v,S,m,d){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[t]=T):(T.id=h.id,T.object=h,T.geometry=g,T.material=v,T.materialVariant=a(h),T.groupOrder=S,T.renderOrder=h.renderOrder,T.z=m,T.group=d),t++,T}function l(h,g,v,S,m,d,T){T.reversedDepth===!0&&(m=-m);let L=o(h,g,v,S,m,d);v.transmission>0?n.push(L):v.transparent===!0?s.push(L):e.push(L)}function c(h,g,v,S,m,d){let T=o(h,g,v,S,m,d);v.transmission>0?n.unshift(T):v.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,g){e.length>1&&e.sort(h||zm),n.length>1&&n.sort(g||xh),s.length>1&&s.sort(g||xh)}function p(){for(let h=t,g=i.length;h<g;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vh,i.set(n,[a])):s>=r.length?(a=new vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Bt};break;case"SpotLight":e={position:new k,direction:new k,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){let t=new Vm,e=Gm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new fe,a=new fe;function o(c){let u=0,p=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,v=0,S=0,m=0,d=0,T=0,L=0,y=0,b=0,w=0,R=0,x=0,A=0,I=0;c.sort(Wm);for(let V=0,H=c.length;V<H;V++){let D=c[V],G=D.color,j=D.intensity,$=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*j,p+=G.g*j,h+=G.b*j;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],j);I++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=et,n.sunShadowMap[v]=nt;let It=Q.getViewportCount();for(let At=0;At<It;At++)n.sunShadowMatrix[S+At]=Q.getMatrix(At),n.sunShadowCascade[S+At]=Q._cascadeData[At];S+=It,v++}n.sun[g]=W,g++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(G).multiplyScalar(j),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[T]=W;let Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[T]=Q.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[T]=et,n.spotShadowMap[T]=nt,R++}T++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(G).multiplyScalar(j),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[L]=W,L++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[d]=et,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=D.shadow.matrix,w++}n.point[d]=W,d++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(j),W.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[y]=W,y++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let U=n.hash;(U.sunLength!==g||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==T||U.rectAreaLength!==L||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==R||U.numSpotMaps!==x||U.numLightProbes!==I)&&(n.sun.length=g,n.directional.length=m,n.spot.length=T,n.rectArea.length=L,n.point.length=d,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,U.sunLength=g,U.directionalLength=m,U.pointLength=d,U.spotLength=T,U.rectAreaLength=L,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=R,U.numSpotMaps=x,U.numLightProbes=I,n.version=Hm++)}function l(c,u){let p=0,h=0,g=0,v=0,S=0,m=0,d=u.matrixWorldInverse;for(let T=0,L=c.length;T<L;T++){let y=c[T];if(y.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){let b=n.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),v++}else if(y.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function yh(i){let t=new Xm(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yh(i),t.set(s,[o])):r>=a.length?(o=new yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`,Zm=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Jm=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Sh=new fe,tr=new k,Al=new k;function Km(i,t,e){let n=new Qi,s=new Xt,r=new Xt,a=new ce,o=new Xr,l=new qr,c={},u=e.maxTextureSize,p={[ai]:Ve,[Ve]:ai,[Tn]:Tn},h=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Ym,fragmentShader:$m}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let v=new An;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new we(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Si;let d=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===mc&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Si);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(En),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=d!==this.type;H&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=w.length;D<G;D++){let j=w[D],$=j.shadow;if($===void 0){Dt("WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let nt=$.getFrameExtents();s.multiply(nt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,$.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=W,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===es){if(j.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new We(s.x,s.y,{format:hi,type:pn,minFilter:Re,magFilter:Re,generateMipmaps:!1}),$.map.texture.name=j.name+".shadowMap",$.map.depthTexture=new ni(s.x,s.y,en),$.map.depthTexture.name=j.name+".shadowMapDepth",$.map.depthTexture.format=Sn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ce,$.map.depthTexture.magFilter=Ce}else j.isPointLight?($.map=new to(s.x),$.map.depthTexture=new Hr(s.x,fn)):($.map=new We(s.x,s.y),$.map.depthTexture=new ni(s.x,s.y,fn)),$.map.depthTexture.name=j.name+".shadowMap",$.map.depthTexture.format=Sn,this.type===Si?($.map.depthTexture.compareFunction=W?Ja:Za,$.map.depthTexture.minFilter=Re,$.map.depthTexture.magFilter=Re):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ce,$.map.depthTexture.magFilter=Ce);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();j.isPointLight!==!0&&$.updateMatrices(j,x);for(let et=0;et<Q;et++){let It=$.getCamera(et);if(j.isPointLight){let At=$.camera,re=$.matrix,Gt=j.distance||At.far;Gt!==At.far&&(At.far=Gt,At.updateProjectionMatrix()),tr.setFromMatrixPosition(j.matrixWorld),At.position.copy(tr),Al.copy(At.position),Al.add(Zm[et]),At.up.copy(Jm[et]),At.lookAt(Al),At.updateMatrixWorld(),re.makeTranslation(-tr.x,-tr.y,-tr.z),Sh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Sh,At.coordinateSystem,At.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,et),i.clear();else{et===0&&(i.setRenderTarget($.map),i.clear());let At=$.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),V.viewport(a)}n=$.getFrustum(et),y(R,x,It,j,this.type)}$.isPointLightShadow!==!0&&this.type===es&&T($,x),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,I,U)};function T(w,R){let x=t.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null?w.mapPass=new We(s.x,s.y,{format:hi,type:pn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,S,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value.set(w.map.width,w.map.height),g.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,g,S,null)}function L(w,R,x,A){let I=null,U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=I.uuid,H=R.uuid,D=c[V];D===void 0&&(D={},c[V]=D);let G=D[H];G===void 0&&(G=I.clone(),D[H]=G,R.addEventListener("dispose",b)),I=G}if(I.visible=R.visible,I.wireframe=R.wireframe,A===es?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:p[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=i.properties.get(I);V.light=x}return I}function y(w,R,x,A,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===es)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let H=t.update(w),D=w.material;if(Array.isArray(D)){let G=H.groups;for(let j=0,$=G.length;j<$;j++){let nt=G[j],W=D[nt.materialIndex];if(W&&W.visible){let Q=L(w,W,A,I);w.onBeforeShadow(i,w,R,x,H,Q,nt),i.renderBufferDirect(x,null,H,Q,w,nt),w.onAfterShadow(i,w,R,x,H,Q,nt)}}}else if(D.visible){let G=L(w,D,A,I);w.onBeforeShadow(i,w,R,x,H,G,null),i.renderBufferDirect(x,null,H,G,w,null),w.onAfterShadow(i,w,R,x,H,G,null)}}let V=w.children;for(let H=0,D=V.length;H<D;H++)y(V[H],R,x,A,I)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let A=c[x],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function jm(i,t){function e(){let E=!1,it=new ce,q=null,ht=new ce(0,0,0,0);return{setMask:function(ot){q!==ot&&!E&&(i.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){E=ot},setClear:function(ot,tt,Ct,bt,te){te===!0&&(ot*=bt,tt*=bt,Ct*=bt),it.set(ot,tt,Ct,bt),ht.equals(it)===!1&&(i.clearColor(ot,tt,Ct,bt),ht.copy(it))},reset:function(){E=!1,q=null,ht.set(-1,0,0,0)}}}function n(){let E=!1,it=!1,q=null,ht=null,ot=null;return{setReversed:function(tt){if(it!==tt){let Ct=t.get("EXT_clip_control");tt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),it=tt;let bt=ot;ot=null,this.setClear(bt)}},getReversed:function(){return it},setTest:function(tt){tt?J(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(tt){q!==tt&&!E&&(i.depthMask(tt),q=tt)},setFunc:function(tt){if(it&&(tt=Jc[tt]),ht!==tt){switch(tt){case Cr:i.depthFunc(i.NEVER);break;case Rr:i.depthFunc(i.ALWAYS);break;case Pr:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Lr:i.depthFunc(i.GEQUAL);break;case Dr:i.depthFunc(i.GREATER);break;case Nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=tt}},setLocked:function(tt){E=tt},setClear:function(tt){ot!==tt&&(ot=tt,it&&(tt=1-tt),i.clearDepth(tt))},reset:function(){E=!1,q=null,ht=null,ot=null,it=!1}}}function s(){let E=!1,it=null,q=null,ht=null,ot=null,tt=null,Ct=null,bt=null,te=null;return{setTest:function(Kt){E||(Kt?J(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!E&&(i.stencilMask(Kt),it=Kt)},setFunc:function(Kt,Fe,Ge){(q!==Kt||ht!==Fe||ot!==Ge)&&(i.stencilFunc(Kt,Fe,Ge),q=Kt,ht=Fe,ot=Ge)},setOp:function(Kt,Fe,Ge){(tt!==Kt||Ct!==Fe||bt!==Ge)&&(i.stencilOp(Kt,Fe,Ge),tt=Kt,Ct=Fe,bt=Ge)},setLocked:function(Kt){E=Kt},setClear:function(Kt){te!==Kt&&(i.clearStencil(Kt),te=Kt)},reset:function(){E=!1,it=null,q=null,ht=null,ot=null,tt=null,Ct=null,bt=null,te=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},p={},h={},g=new WeakMap,v=[],S=null,m=!1,d=null,T=null,L=null,y=null,b=null,w=null,R=null,x=new Bt(0,0,0),A=0,I=!1,U=null,V=null,H=null,D=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=nt>=2);let Q=null,et={},It=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),re=new ce().fromArray(It),Gt=new ce().fromArray(At);function $t(E,it,q,ht){let ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(E,tt),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<q;Ct++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(it+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}let Z={};Z[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc($i),Ht(!1),qt(Ho),J(i.CULL_FACE),Zt(En);function J(E){u[E]!==!0&&(i.enable(E),u[E]=!0)}function gt(E){u[E]!==!1&&(i.disable(E),u[E]=!1)}function Rt(E,it){return h[E]!==it?(i.bindFramebuffer(E,it),h[E]=it,E===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),E===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function xt(E,it){let q=v,ht=!1;if(E){q=g.get(it),q===void 0&&(q=[],g.set(it,q));let ot=E.textures;if(q.length!==ot.length||q[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Ct=ot.length;tt<Ct;tt++)q[tt]=i.COLOR_ATTACHMENT0+tt;q.length=ot.length,ht=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(q)}function zt(E){return S!==E?(i.useProgram(E),S=E,!0):!1}let ge={[Mi]:i.FUNC_ADD,[_c]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};ge[vc]=i.MIN,ge[yc]=i.MAX;let kt={[Sc]:i.ZERO,[Mc]:i.ONE,[bc]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[Rc]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[wc]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Pc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Dc]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(E,it,q,ht,ot,tt,Ct,bt,te,Kt){if(E===En){m===!0&&(gt(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),E!==gc){if(E!==d||Kt!==I){if((T!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),T=Mi,b=Mi),Kt)switch(E){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFunc(i.ONE,i.ONE);break;case Xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",E);break}else switch(E){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xo:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qo:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",E);break}L=null,y=null,w=null,R=null,x.set(0,0,0),A=0,d=E,I=Kt}return}ot=ot||it,tt=tt||q,Ct=Ct||ht,(it!==T||ot!==b)&&(i.blendEquationSeparate(ge[it],ge[ot]),T=it,b=ot),(q!==L||ht!==y||tt!==w||Ct!==R)&&(i.blendFuncSeparate(kt[q],kt[ht],kt[tt],kt[Ct]),L=q,y=ht,w=tt,R=Ct),(bt.equals(x)===!1||te!==A)&&(i.blendColor(bt.r,bt.g,bt.b,te),x.copy(bt),A=te),d=E,I=!1}function ie(E,it){E.side===Tn?gt(i.CULL_FACE):J(i.CULL_FACE);let q=E.side===Ve;it&&(q=!q),Ht(q),E.blending===ns&&E.transparent===!1?Zt(En):Zt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let ht=E.stencilWrite;o.setTest(ht),ht&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Me(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(E){U!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),U=E)}function qt(E){E!==fc?(J(i.CULL_FACE),E!==V&&(E===Ho?i.cullFace(i.BACK):E===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),V=E}function he(E){E!==H&&($&&i.lineWidth(E),H=E)}function Me(E,it,q){E?(J(i.POLYGON_OFFSET_FILL),(D!==it||G!==q)&&(D=it,G=q,a.getReversed()&&(it=-it),i.polygonOffset(it,q))):gt(i.POLYGON_OFFSET_FILL)}function ae(E){E?J(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ue(E){E===void 0&&(E=i.TEXTURE0+j-1),Q!==E&&(i.activeTexture(E),Q=E)}function P(E,it,q){q===void 0&&(Q===null?q=i.TEXTURE0+j-1:q=Q);let ht=et[q];ht===void 0&&(ht={type:void 0,texture:void 0},et[q]=ht),(ht.type!==E||ht.texture!==it)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(E,it||Z[E]),ht.type=E,ht.texture=it)}function ve(){let E=et[Q];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function f(){try{i.texSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function N(){try{i.texSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function at(){try{i.texStorage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function st(){try{i.texStorage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function Y(){try{i.texImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function K(){try{i.texImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function ut(E){return p[E]!==void 0?p[E]:i.getParameter(E)}function Tt(E,it){p[E]!==it&&(i.pixelStorei(E,it),p[E]=it)}function dt(E){re.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),re.copy(E))}function lt(E){Gt.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),Gt.copy(E))}function Et(E,it){let q=c.get(it);q===void 0&&(q=new WeakMap,c.set(it,q));let ht=q.get(E);ht===void 0&&(ht=i.getUniformBlockIndex(it,E.name),q.set(E,ht))}function Pt(E,it){let ht=c.get(it).get(E);l.get(it)!==ht&&(i.uniformBlockBinding(it,ht,E.__bindingPointIndex),l.set(it,ht))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Q=null,et={},h={},g=new WeakMap,v=[],S=null,m=!1,d=null,T=null,L=null,y=null,b=null,w=null,R=null,x=new Bt(0,0,0),A=0,I=!1,U=null,V=null,H=null,D=null,G=null,re.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:gt,bindFramebuffer:Rt,drawBuffers:xt,useProgram:zt,setBlending:Zt,setMaterial:ie,setFlipSided:Ht,setCullFace:qt,setLineWidth:he,setPolygonOffset:Me,setScissorTest:ae,activeTexture:ue,bindTexture:P,unbindTexture:ve,compressedTexImage2D:Jt,compressedTexImage3D:M,texImage2D:Y,texImage3D:K,pixelStorei:Tt,getParameter:ut,updateUBOMapping:Et,uniformBlockBinding:Pt,texStorage2D:at,texStorage3D:st,texSubImage2D:f,texSubImage3D:N,compressedTexSubImage2D:B,compressedTexSubImage3D:X,scissor:dt,viewport:lt,reset:Ut}}function Qm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap,p=new Set,h,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,f){return v?new OffscreenCanvas(M,f):Ts("canvas")}function m(M,f,N){let B=1,X=Jt(M);if((X.width>N||X.height>N)&&(B=N/Math.max(X.width,X.height)),B<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let at=Math.floor(B*X.width),st=Math.floor(B*X.height);h===void 0&&(h=S(at,st));let Y=f?S(at,st):h;return Y.width=at,Y.height=st,Y.getContext("2d").drawImage(M,0,0,at,st),Dt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+at+"x"+st+")."),Y}else return"data"in M&&Dt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),M;return M}function d(M){return M.generateMipmaps}function T(M){i.generateMipmap(M)}function L(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(M,f,N,B,X,at=!1){if(M!==null){if(i[M]!==void 0)return i[M];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let st;B&&(st=t.get("EXT_texture_norm16"),st||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=f;if(f===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8),N===i.UNSIGNED_SHORT&&st&&(Y=st.R16_EXT),N===i.SHORT&&st&&(Y=st.R16_SNORM_EXT)),f===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),f===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8),N===i.UNSIGNED_SHORT&&st&&(Y=st.RG16_EXT),N===i.SHORT&&st&&(Y=st.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),f===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),f===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),f===i.RGB&&(N===i.UNSIGNED_SHORT&&st&&(Y=st.RGB16_EXT),N===i.SHORT&&st&&(Y=st.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),f===i.RGBA){let K=at?As:Yt.getTransfer(X);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=K===ne?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&st&&(Y=st.RGBA16_EXT),N===i.SHORT&&st&&(Y=st.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(M,f){let N;return M?f===null||f===fn||f===ss?N=i.DEPTH24_STENCIL8:f===en?N=i.DEPTH32F_STENCIL8:f===is&&(N=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===fn||f===ss?N=i.DEPTH_COMPONENT24:f===en?N=i.DEPTH_COMPONENT32F:f===is&&(N=i.DEPTH_COMPONENT16),N}function w(M,f){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ce&&M.minFilter!==Re?Math.log2(Math.max(f.width,f.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?f.mipmaps.length:1}function R(M){let f=M.target;f.removeEventListener("dispose",R),A(f),f.isVideoTexture&&u.delete(f),f.isHTMLTexture&&p.delete(f)}function x(M){let f=M.target;f.removeEventListener("dispose",x),U(f)}function A(M){let f=n.get(M);if(f.__webglInit===void 0)return;let N=M.source,B=g.get(N);if(B){let X=B[f.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(M),Object.keys(B).length===0&&g.delete(N)}n.remove(M)}function I(M){let f=n.get(M);i.deleteTexture(f.__webglTexture);let N=M.source,B=g.get(N);delete B[f.__cacheKey],a.memory.textures--}function U(M){let f=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(f.__webglFramebuffer[B]))for(let X=0;X<f.__webglFramebuffer[B].length;X++)i.deleteFramebuffer(f.__webglFramebuffer[B][X]);else i.deleteFramebuffer(f.__webglFramebuffer[B]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[B])}else{if(Array.isArray(f.__webglFramebuffer))for(let B=0;B<f.__webglFramebuffer.length;B++)i.deleteFramebuffer(f.__webglFramebuffer[B]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let B=0;B<f.__webglColorRenderbuffer.length;B++)f.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[B]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let N=M.textures;for(let B=0,X=N.length;B<X;B++){let at=n.get(N[B]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(N[B])}n.remove(M)}let V=0;function H(){V=0}function D(){return V}function G(M){V=M}function j(){let M=V;return M>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,M}function $(M){let f=[];return f.push(M.wrapS),f.push(M.wrapT),f.push(M.wrapR||0),f.push(M.magFilter),f.push(M.minFilter),f.push(M.anisotropy),f.push(M.internalFormat),f.push(M.format),f.push(M.type),f.push(M.generateMipmaps),f.push(M.premultiplyAlpha),f.push(M.flipY),f.push(M.unpackAlignment),f.push(M.colorSpace),f.join()}function nt(M,f){let N=n.get(M);if(M.isVideoTexture&&P(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){let B=M.image;if(B===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(N,M,f);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+f)}function W(M,f){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){gt(N,M,f);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+f)}function Q(M,f){let N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){gt(N,M,f);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+f)}function et(M,f){let N=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Rt(N,M,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+f)}let It={[Ur]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},At={[Ce]:i.NEAREST,[Fc]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Re]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},re={[kc]:i.NEVER,[Xc]:i.ALWAYS,[Vc]:i.LESS,[Za]:i.LEQUAL,[Gc]:i.EQUAL,[Ja]:i.GEQUAL,[Hc]:i.GREATER,[Wc]:i.NOTEQUAL};function Gt(M,f){if(f.type===en&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Re||f.magFilter===ha||f.magFilter===Xs||f.magFilter===li||f.minFilter===Re||f.minFilter===ha||f.minFilter===Xs||f.minFilter===li)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,It[f.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,It[f.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,It[f.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,At[f.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,At[f.minFilter]),f.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,re[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Ce||f.minFilter!==Xs&&f.minFilter!==li||f.type===en&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function $t(M,f){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,f.addEventListener("dispose",R));let B=f.source,X=g.get(B);X===void 0&&(X={},g.set(B,X));let at=$(f);if(at!==M.__cacheKey){X[at]===void 0&&(X[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),X[at].usedTimes++;let st=X[M.__cacheKey];st!==void 0&&(X[M.__cacheKey].usedTimes--,st.usedTimes===0&&I(f)),M.__cacheKey=at,M.__webglTexture=X[at].texture}return N}function Z(M,f,N){return Math.floor(Math.floor(M/N)/f)}function J(M,f,N,B){let at=M.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,N,B,f.data);else{at.sort((Tt,dt)=>Tt.start-dt.start);let st=0;for(let Tt=1;Tt<at.length;Tt++){let dt=at[st],lt=at[Tt],Et=dt.start+dt.count,Pt=Z(lt.start,f.width,4),Ut=Z(dt.start,f.width,4);lt.start<=Et+1&&Pt===Ut&&Z(lt.start+lt.count-1,f.width,4)===Pt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++st,at[st]=lt)}at.length=st+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let Tt=0,dt=at.length;Tt<dt;Tt++){let lt=at[Tt],Et=Math.floor(lt.start/4),Pt=Math.ceil(lt.count/4),Ut=Et%f.width,E=Math.floor(Et/f.width),it=Pt,q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,E),e.texSubImage2D(i.TEXTURE_2D,0,Ut,E,it,q,N,B,f.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function gt(M,f,N){let B=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(B=i.TEXTURE_3D);let X=$t(M,f),at=f.source;e.bindTexture(B,M.__webglTexture,i.TEXTURE0+N);let st=n.get(at);if(at.version!==st.__version||X===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let q=Yt.getPrimaries(Yt.workingColorSpace),ht=f.colorSpace===Vn?null:Yt.getPrimaries(f.colorSpace),ot=f.colorSpace===Vn||q===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let K=m(f.image,!1,s.maxTextureSize);K=ve(f,K);let ut=r.convert(f.format,f.colorSpace),Tt=r.convert(f.type),dt=y(f.internalFormat,ut,Tt,f.normalized,f.colorSpace,f.isVideoTexture);Gt(B,f);let lt,Et=f.mipmaps,Pt=f.isVideoTexture!==!0,Ut=st.__version===void 0||X===!0,E=at.dataReady,it=w(f,K);if(f.isDepthTexture)dt=b(f.format===ci,f.type),Ut&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,dt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ut,Tt,null));else if(f.isDataTexture)if(Et.length>0){Pt&&Ut&&e.texStorage2D(i.TEXTURE_2D,it,dt,Et[0].width,Et[0].height);for(let q=0,ht=Et.length;q<ht;q++)lt=Et[q],Pt?E&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,lt.width,lt.height,ut,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,q,dt,lt.width,lt.height,0,ut,Tt,lt.data);f.generateMipmaps=!1}else Pt?(Ut&&e.texStorage2D(i.TEXTURE_2D,it,dt,K.width,K.height),E&&J(f,K,ut,Tt)):e.texImage2D(i.TEXTURE_2D,0,dt,K.width,K.height,0,ut,Tt,K.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Pt&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,dt,Et[0].width,Et[0].height,K.depth);for(let q=0,ht=Et.length;q<ht;q++)if(lt=Et[q],f.format!==nn)if(ut!==null)if(Pt){if(E)if(f.layerUpdates.size>0){let ot=pl(lt.width,lt.height,f.format,f.type);for(let tt of f.layerUpdates){let Ct=lt.data.subarray(tt*ot/lt.data.BYTES_PER_ELEMENT,(tt+1)*ot/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,tt,lt.width,lt.height,1,ut,Ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,K.depth,ut,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,dt,lt.width,lt.height,K.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?E&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,K.depth,ut,Tt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,dt,lt.width,lt.height,K.depth,0,ut,Tt,lt.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Pt&&Ut&&e.texStorage2D(i.TEXTURE_2D,it,dt,Et[0].width,Et[0].height);for(let q=0,ht=Et.length;q<ht;q++)lt=Et[q],f.format!==nn?ut!==null?Pt?E&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,dt,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?E&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,lt.width,lt.height,ut,Tt,lt.data):e.texImage2D(i.TEXTURE_2D,q,dt,lt.width,lt.height,0,ut,Tt,lt.data)}else if(f.isDataArrayTexture)if(Pt){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,dt,K.width,K.height,K.depth),E)if(f.layerUpdates.size>0){let q=pl(K.width,K.height,f.format,f.type);for(let ht of f.layerUpdates){let ot=K.data.subarray(ht*q/K.data.BYTES_PER_ELEMENT,(ht+1)*q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,K.width,K.height,1,ut,Tt,ot)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,Tt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,K.width,K.height,K.depth,0,ut,Tt,K.data);else if(f.isData3DTexture)Pt?(Ut&&e.texStorage3D(i.TEXTURE_3D,it,dt,K.width,K.height,K.depth),E&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,Tt,K.data)):e.texImage3D(i.TEXTURE_3D,0,dt,K.width,K.height,K.depth,0,ut,Tt,K.data);else if(f.isFramebufferTexture){if(Ut)if(Pt)e.texStorage2D(i.TEXTURE_2D,it,dt,K.width,K.height);else{let q=K.width,ht=K.height;for(let ot=0;ot<it;ot++)e.texImage2D(i.TEXTURE_2D,ot,dt,q,ht,0,ut,Tt,null),q>>=1,ht>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),p.add(f),q.onpaint=ht=>{let ot=ht.changedElements;for(let tt of p)ot.includes(tt.image)&&(tt.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let ot=i.RGBA,tt=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ot,tt,Ct,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Pt&&Ut){let q=Jt(Et[0]);e.texStorage2D(i.TEXTURE_2D,it,dt,q.width,q.height)}for(let q=0,ht=Et.length;q<ht;q++)lt=Et[q],Pt?E&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ut,Tt,lt):e.texImage2D(i.TEXTURE_2D,q,dt,ut,Tt,lt);f.generateMipmaps=!1}else if(Pt){if(Ut){let q=Jt(K);e.texStorage2D(i.TEXTURE_2D,it,dt,q.width,q.height)}E&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Tt,K)}else e.texImage2D(i.TEXTURE_2D,0,dt,ut,Tt,K);d(f)&&T(B),st.__version=at.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function Rt(M,f,N){if(f.image.length!==6)return;let B=$t(M,f),X=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);let at=n.get(X);if(X.version!==at.__version||B===!0){e.activeTexture(i.TEXTURE0+N);let st=Yt.getPrimaries(Yt.workingColorSpace),Y=f.colorSpace===Vn?null:Yt.getPrimaries(f.colorSpace),K=f.colorSpace===Vn||st===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=f.isCompressedTexture||f.image[0].isCompressedTexture,Tt=f.image[0]&&f.image[0].isDataTexture,dt=[];for(let tt=0;tt<6;tt++)!ut&&!Tt?dt[tt]=m(f.image[tt],!0,s.maxCubemapSize):dt[tt]=Tt?f.image[tt].image:f.image[tt],dt[tt]=ve(f,dt[tt]);let lt=dt[0],Et=r.convert(f.format,f.colorSpace),Pt=r.convert(f.type),Ut=y(f.internalFormat,Et,Pt,f.normalized,f.colorSpace),E=f.isVideoTexture!==!0,it=at.__version===void 0||B===!0,q=X.dataReady,ht=w(f,lt);Gt(i.TEXTURE_CUBE_MAP,f);let ot;if(ut){E&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ut,lt.width,lt.height);for(let tt=0;tt<6;tt++){ot=dt[tt].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){let bt=ot[Ct];f.format!==nn?Et!==null?E?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Ut,bt.width,bt.height,0,bt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,0,0,bt.width,bt.height,Et,Pt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct,Ut,bt.width,bt.height,0,Et,Pt,bt.data)}}}else{if(ot=f.mipmaps,E&&it){ot.length>0&&ht++;let tt=Jt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ut,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Tt){E?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,dt[tt].width,dt[tt].height,Et,Pt,dt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,dt[tt].width,dt[tt].height,0,Et,Pt,dt[tt].data);for(let Ct=0;Ct<ot.length;Ct++){let te=ot[Ct].image[tt].image;E?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,te.width,te.height,Et,Pt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Ut,te.width,te.height,0,Et,Pt,te.data)}}else{E?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et,Pt,dt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,Et,Pt,dt[tt]);for(let Ct=0;Ct<ot.length;Ct++){let bt=ot[Ct];E?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,0,0,Et,Pt,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct+1,Ut,Et,Pt,bt.image[tt])}}}d(f)&&T(i.TEXTURE_CUBE_MAP),at.__version=X.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function xt(M,f,N,B,X,at){let st=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),K=y(N.internalFormat,st,Y,N.normalized,N.colorSpace),ut=n.get(f),Tt=n.get(N);if(Tt.__renderTarget=f,!ut.__hasExternalTextures){let dt=Math.max(1,f.width>>at),lt=Math.max(1,f.height>>at);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,at,K,dt,lt,f.depth,0,st,Y,null):e.texImage2D(X,at,K,dt,lt,0,st,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ue(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,X,Tt.__webglTexture,0,ae(f)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,X,Tt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(M,f,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),f.depthBuffer){let B=f.depthTexture,X=B&&B.isDepthTexture?B.type:null,at=b(f.stencilBuffer,X),st=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),at,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),at,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,at,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,M)}else{let B=f.textures;for(let X=0;X<B.length;X++){let at=B[X],st=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),K=y(at.internalFormat,st,Y,at.normalized,at.colorSpace);ue(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),K,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),K,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,K,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(M,f,N){let B=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(f.depthTexture);if(X.__renderTarget=f,(!X.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),B){if(X.__webglInit===void 0&&(X.__webglInit=!0,f.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,f.depthTexture);let ut=r.convert(f.depthTexture.format),Tt=r.convert(f.depthTexture.type),dt;f.depthTexture.format===Sn?dt=i.DEPTH_COMPONENT24:f.depthTexture.format===ci&&(dt=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,f.width,f.height,0,ut,Tt,null)}}else nt(f.depthTexture,0);let at=X.__webglTexture,st=ae(f),Y=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=f.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===Sn)ue(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,at,0);else if(f.depthTexture.format===ci)ue(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(M){let f=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==M.depthTexture){let B=M.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),B){let X=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,B.removeEventListener("dispose",X)};B.addEventListener("dispose",X),f.__depthDisposeCallback=X}f.__boundDepthTexture=B}if(M.depthTexture&&!f.__autoAllocateDepthBuffer)if(N)for(let B=0;B<6;B++)ge(f.__webglFramebuffer[B],M,B);else{let B=M.texture.mipmaps;B&&B.length>0?ge(f.__webglFramebuffer[0],M,0):ge(f.__webglFramebuffer,M,0)}else if(N){f.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[B]),f.__webglDepthbuffer[B]===void 0)f.__webglDepthbuffer[B]=i.createRenderbuffer(),zt(f.__webglDepthbuffer[B],M,!1);else{let X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=f.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,at)}}else{let B=M.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),zt(f.__webglDepthbuffer,M,!1);else{let X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(M,f,N){let B=n.get(M);f!==void 0&&xt(B.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&kt(M)}function ie(M){let f=M.texture,N=n.get(M),B=n.get(f);M.addEventListener("dispose",x);let X=M.textures,at=M.isWebGLCubeRenderTarget===!0,st=X.length>1;if(st||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=f.version,a.memory.textures++),at){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let K=0;K<f.mipmaps.length;K++)N.__webglFramebuffer[Y][K]=i.createFramebuffer()}else N.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<f.mipmaps.length;Y++)N.__webglFramebuffer[Y]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(st)for(let Y=0,K=X.length;Y<K;Y++){let ut=n.get(X[Y]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&ue(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let K=X[Y];N.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let ut=r.convert(K.format,K.colorSpace),Tt=r.convert(K.type),dt=y(K.internalFormat,ut,Tt,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),lt=ae(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,f);for(let Y=0;Y<6;Y++)if(f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)xt(N.__webglFramebuffer[Y][K],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else xt(N.__webglFramebuffer[Y],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(f)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Y=0,K=X.length;Y<K;Y++){let ut=X[Y],Tt=n.get(ut),dt=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(dt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Tt.__webglTexture),Gt(dt,ut),xt(N.__webglFramebuffer,M,ut,i.COLOR_ATTACHMENT0+Y,dt,0),d(ut)&&T(dt)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,B.__webglTexture),Gt(Y,f),f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)xt(N.__webglFramebuffer[K],M,f,i.COLOR_ATTACHMENT0,Y,K);else xt(N.__webglFramebuffer,M,f,i.COLOR_ATTACHMENT0,Y,0);d(f)&&T(Y),e.unbindTexture()}M.depthBuffer&&kt(M)}function Ht(M){let f=M.textures;for(let N=0,B=f.length;N<B;N++){let X=f[N];if(d(X)){let at=L(M),st=n.get(X).__webglTexture;e.bindTexture(at,st),T(at),e.unbindTexture()}}}let qt=[],he=[];function Me(M){if(M.samples>0){if(ue(M)===!1){let f=M.textures,N=M.width,B=M.height,X=i.COLOR_BUFFER_BIT,at=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(M),Y=f.length>1;if(Y)for(let ut=0;ut<f.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let K=M.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let ut=0;ut<f.length;ut++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[ut]);let Tt=n.get(f[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,X,i.NEAREST),l===!0&&(qt.length=0,he.length=0,qt.push(i.COLOR_ATTACHMENT0+ut),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(qt.push(at),he.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ut=0;ut<f.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,st.__webglColorRenderbuffer[ut]);let Tt=n.get(f[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let f=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function ae(M){return Math.min(s.maxSamples,M.samples)}function ue(M){let f=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function P(M){let f=a.render.frame;u.get(M)!==f&&(u.set(M,f),M.update())}function ve(M,f){let N=M.colorSpace,B=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==ws&&N!==Vn&&(Yt.getTransfer(N)===ne?(B!==nn||X!==Xe)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",N)),f}function Jt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tg(i,t){function e(n,s=Vn){let r,a=Yt.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===sl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===ll)return i.RGB;if(n===nn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===pa)return i.RED;if(n===ma)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===ga)return i.RG_INTEGER;if(n===_a)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===$s||n===Zs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===va||n===ya||n===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===ba||n===wa||n===Aa||n===Ta||n===Js||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===ba)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return r.COMPRESSED_R11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return r.COMPRESSED_RG11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Ha||n===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xa||n===qa||n===Ks||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eg=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Os(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,g=null,v=null,S=typeof XRWebGLBinding<"u",m=new Dl,d={},T=e.getContextAttributes(),L=null,y=null,b=[],w=[],R=new Xt,x=null,A=null,I=new De;I.viewport=new ce;let U=new De;U.viewport=new ce;let V=[I,U],H=new ra,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=b[Z];return J===void 0&&(J=new ji,b[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=b[Z];return J===void 0&&(J=new ji,b[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=b[Z];return J===void 0&&(J=new ji,b[Z]=J),J.getHandSpace()};function j(Z){let J=w.indexOf(Z.inputSource);if(J===-1)return;let gt=b[J];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<b.length;Z++){let J=w[Z];J!==null&&(w[Z]=null,b[Z].disconnect(J))}D=null,G=null,m.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(L),g=null,h=null,p=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Rt=null,xt=null;T.depth&&(xt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=T.stencil?ci:Sn,Rt=T.stencil?ss:fn);let zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new We(h.textureWidth,h.textureHeight,{format:nn,type:Xe,depthTexture:new ni(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let gt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new We(g.framebufferWidth,g.framebufferHeight,{format:nn,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let J=0;J<Z.removed.length;J++){let gt=Z.removed[J],Rt=w.indexOf(gt);Rt>=0&&(w[Rt]=null,b[Rt].disconnect(gt))}for(let J=0;J<Z.added.length;J++){let gt=Z.added[J],Rt=w.indexOf(gt);if(Rt===-1){for(let zt=0;zt<b.length;zt++)if(zt>=w.length){w.push(gt),Rt=zt;break}else if(w[zt]===null){w[zt]=gt,Rt=zt;break}if(Rt===-1)break}let xt=b[Rt];xt&&xt.connect(gt)}}let W=new k,Q=new k;function et(Z,J,gt){W.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);let Rt=W.distanceTo(Q),xt=J.projectionMatrix.elements,zt=gt.projectionMatrix.elements,ge=xt[14]/(xt[10]-1),kt=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],ie=(xt[9]-1)/xt[5],Ht=(xt[8]-1)/xt[0],qt=(zt[8]+1)/zt[0],he=ge*Ht,Me=ge*qt,ae=Rt/(-Ht+qt),ue=ae*-Ht;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ue),Z.translateZ(ae),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let P=ge+ae,ve=kt+ae,Jt=he-ue,M=Me+(Rt-ue),f=Zt*kt/ve*P,N=ie*kt/ve*P;Z.projectionMatrix.makePerspective(Jt,M,f,N,P,ve),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function It(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let J=Z.near,gt=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),H.near=U.near=I.near=J,H.far=U.far=I.far=gt,(D!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,G=H.far),H.layers.mask=Z.layers.mask|6,I.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Rt=Z.parent,xt=H.cameras;It(H,Rt);for(let zt=0;zt<xt.length;zt++)It(xt[zt],Rt);xt.length===2?et(H,I,U):H.projectionMatrix.copy(I.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),At(Z,H,Rt)};function At(Z,J,gt){gt===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Br*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return d[Z]};let re=null;function Gt(Z,J){if(u=J.getViewerPose(c||a),v=J,u!==null){let gt=u.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let Rt=!1;gt.length!==H.cameras.length&&(H.cameras.length=0,Rt=!0);for(let kt=0;kt<gt.length;kt++){let Zt=gt[kt],ie=null;if(g!==null)ie=g.getViewport(Zt);else{let qt=p.getViewSubImage(h,Zt);ie=qt.viewport,kt===0&&(t.setRenderTargetTextures(y,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(y))}let Ht=V[kt];Ht===void 0&&(Ht=new De,Ht.layers.enable(kt),Ht.viewport=new ce,V[kt]=Ht),Ht.matrix.fromArray(Zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ie.x,ie.y,ie.width,ie.height),kt===0&&(H.matrix.copy(Ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Rt===!0&&H.cameras.push(Ht)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let kt=p.getDepthInformation(gt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(xt&&xt.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let kt=0;kt<gt.length;kt++){let Zt=gt[kt].camera;if(Zt){let ie=d[Zt];ie||(ie=new Os,d[Zt]=ie);let Ht=p.getCameraImage(Zt);ie.sourceTexture=Ht}}}}for(let gt=0;gt<b.length;gt++){let Rt=w[gt],xt=b[gt];Rt!==null&&xt!==void 0&&xt.update(Rt,J,c||a)}re&&re(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}let $t=new Mh;$t.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}},ig=new fe,Ch=new Ot;Ch.set(-1,0,0,0,1,0,0,0,1);function sg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ul(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,L,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,L):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ve&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ve&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=t.get(d),L=T.envMap,y=T.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(y)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ch),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,L){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=L*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){let T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=s[y.id];w===void 0&&(m(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",T));let R=b.program;n.updateUBOMapping(y,R);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let b=p();y.__bindingPointIndex=b;let w=i.createBuffer(),R=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],w=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,A=w.length;x<A;x++){let I=w[x];if(Array.isArray(I))for(let U=0,V=I.length;U<V;U++)g(I[U],x,U,R);else g(I,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,b,w,R){if(S(y,b,w,R)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let I=0;for(let U=0;U<A.length;U++){let V=A[U],H=d(V);v(V,y.__data,I),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function v(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function S(y,b,w,R){let x=y.value,A=b+"_"+w;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:ArrayBuffer.isView(x)?R[A]=x.slice():R[A]=x.clone(),!0;{let I=R[A];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(y){let b=y.uniforms,w=0,R=16;for(let A=0,I=b.length;A<I;A++){let U=Array.isArray(b[A])?b[A]:[b[A]];for(let V=0,H=U.length;V<H;V++){let D=U[V],G=Array.isArray(D.value)?D.value:[D.value];for(let j=0,$=G.length;j<$;j++){let nt=G[j],W=d(nt),Q=w%R,et=Q%W.boundary,It=Q+et;w+=et,It!==0&&R-It<W.storage&&(w+=R-It),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=W.storage}}}let x=w%R;return x>0&&(w+=R-x),y.__size=w,y.__cache={},this}function d(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",y),b}function T(y){let b=y.target;b.removeEventListener("dispose",T);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function L(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}var ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function og(){return Cn===null&&(Cn=new Ds(ag,16,16,hi,pn),Cn.name="DFG_LUT",Cn.minFilter=Re,Cn.magFilter=Re,Cn.wrapS=vn,Cn.wrapT=vn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var eo=class{constructor(t={}){let{canvas:e=Yc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Xe}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let S=g,m=new Set([_a,ga,ma]),d=new Set([Xe,fn,is,ss,da,fa]),T=new Uint32Array(4),L=new Int32Array(4),y=new k,b=null,w=null,R=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,V=null,H=null,D=null,G=null;this._outputColorSpace=Be;let j=0,$=0,nt=null,W=-1,Q=null,et=new ce,It=new ce,At=null,re=new Bt(0),Gt=0,$t=e.width,Z=e.height,J=1,gt=null,Rt=null,xt=new ce(0,0,$t,Z),zt=new ce(0,0,$t,Z),ge=!1,kt=new Qi,Zt=!1,ie=!1,Ht=new fe,qt=new k,he=new ce,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function ue(){return nt===null?J:1}let P=n;function ve(_,C){return e.getContext(_,C)}let Jt,M,f,N,B,X,at,st,Y,K,ut,Tt,dt,lt,Et,Pt,Ut,E,it,q,ht,ot,tt;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),P===null){let C="webgl2";if(P=ve(C,_),P===null)throw ve(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(_){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),Nt("WebGLRenderer: "+_.message),_}function Ct(){Jt=new pp(P),Jt.init(),ht=new tg(P,Jt),M=new sp(P,Jt,t,ht),f=new jm(P,Jt),M.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),H=P.createFramebuffer(),D=P.createFramebuffer(),G=P.createFramebuffer(),N=new _p(P),B=new Bm,X=new Qm(P,Jt,f,B,M,ht,N),at=new fp(I),st=new xu(P),ot=new np(P,st),Y=new mp(P,st,N,ot),K=new vp(P,Y,st,ot,N),E=new xp(P,M,X),Et=new rp(B),ut=new Om(I,at,Jt,M,ot,Et),Tt=new sg(I,B),dt=new km,lt=new qm(Jt),Ut=new ep(I,at,f,K,v,l),Pt=new Km(I,K,M),tt=new rg(P,N,M,f),it=new ip(P,Jt,N),q=new gp(P,Jt,N),N.programs=ut.programs,I.capabilities=M,I.extensions=Jt,I.properties=B,I.renderLists=dt,I.shadowMap=Pt,I.state=f,I.info=N}S!==Xe&&(A=new Sp(S,e.width,e.height,o,s,r));let bt=new Nl(I,P);this.xr=bt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=Jt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Jt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(_){_!==void 0&&(J=_,this.setSize($t,Z,!1))},this.getSize=function(_){return _.set($t,Z)},this.setSize=function(_,C,z=!0){if(bt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=_,Z=C,e.width=Math.floor(_*J),e.height=Math.floor(C*J),z===!0&&(e.style.width=_+"px",e.style.height=C+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,_,C)},this.getDrawingBufferSize=function(_){return _.set($t*J,Z*J).floor()},this.setDrawingBufferSize=function(_,C,z){$t=_,Z=C,J=z,e.width=Math.floor(_*z),e.height=Math.floor(C*z),this.setViewport(0,0,_,C)},this.setEffects=function(_){if(S===Xe){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let C=0;C<_.length;C++)if(_[C].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(et)},this.getViewport=function(_){return _.copy(xt)},this.setViewport=function(_,C,z,F){_.isVector4?xt.set(_.x,_.y,_.z,_.w):xt.set(_,C,z,F),f.viewport(et.copy(xt).multiplyScalar(J).round())},this.getScissor=function(_){return _.copy(zt)},this.setScissor=function(_,C,z,F){_.isVector4?zt.set(_.x,_.y,_.z,_.w):zt.set(_,C,z,F),f.scissor(It.copy(zt).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(_){f.setScissorTest(ge=_)},this.setOpaqueSort=function(_){gt=_},this.setTransparentSort=function(_){Rt=_},this.getClearColor=function(_){return _.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(_=!0,C=!0,z=!0){let F=0;if(_){let O=!1;if(nt!==null){let pt=nt.texture.format;O=m.has(pt)}if(O){let pt=nt.texture.type,vt=d.has(pt),ft=Ut.getClearColor(),_t=Ut.getClearAlpha(),St=ft.r,Ft=ft.g,Wt=ft.b;vt?(T[0]=St,T[1]=Ft,T[2]=Wt,T[3]=_t,P.clearBufferuiv(P.COLOR,0,T)):(L[0]=St,L[1]=Ft,L[2]=Wt,L[3]=_t,P.clearBufferiv(P.COLOR,0,L))}else F|=P.COLOR_BUFFER_BIT}C&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),V=_},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),Ut.dispose(),dt.dispose(),lt.dispose(),B.dispose(),at.dispose(),K.dispose(),ot.dispose(),tt.dispose(),ut.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ds),bt.removeEventListener("sessionend",rr),gn.stop()};function te(_){_.preventDefault(),hl("WebGLRenderer: Context Lost."),U=!0}function Kt(){hl("WebGLRenderer: Context Restored."),U=!1;let _=N.autoReset,C=Pt.enabled,z=Pt.autoUpdate,F=Pt.needsUpdate,O=Pt.type;Ct(),N.autoReset=_,Pt.enabled=C,Pt.autoUpdate=z,Pt.needsUpdate=F,Pt.type=O}function Fe(_){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ge(_){let C=_.target;C.removeEventListener("dispose",Ge),us(C)}function us(_){sr(_),B.remove(_)}function sr(_){let C=B.get(_).programs;C!==void 0&&(C.forEach(function(z){ut.releaseProgram(z)}),_.isShaderMaterial&&ut.releaseShaderCache(_))}this.renderBufferDirect=function(_,C,z,F,O,pt){C===null&&(C=Me);let vt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ft=rt(_,C,z,F,O);f.setMaterial(F,vt);let _t=z.index,St=1;if(F.wireframe===!0){if(_t=Y.getWireframeAttribute(z),_t===void 0)return;St=2}let Ft=z.drawRange,Wt=z.attributes.position,wt=Ft.start*St,ee=(Ft.start+Ft.count)*St;pt!==null&&(wt=Math.max(wt,pt.start*St),ee=Math.min(ee,(pt.start+pt.count)*St)),_t!==null?(wt=Math.max(wt,0),ee=Math.min(ee,_t.count)):Wt!=null&&(wt=Math.max(wt,0),ee=Math.min(ee,Wt.count));let ye=ee-wt;if(ye<0||ye===1/0)return;ot.setup(O,F,ft,z,_t);let pe,le=it;if(_t!==null&&(pe=st.get(_t),le=q,le.setIndex(pe)),O.isMesh)F.wireframe===!0?(f.setLineWidth(F.wireframeLinewidth*ue()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(O.isLine){let Pe=F.linewidth;Pe===void 0&&(Pe=1),f.setLineWidth(Pe*ue()),O.isLineSegments?le.setMode(P.LINES):O.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else O.isPoints?le.setMode(P.POINTS):O.isSprite&&le.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pe=O._multiDrawStarts,Mt=O._multiDrawCounts,Oe=O._multiDrawCount,Qt=_t?st.get(_t).bytesPerElement:1,Ke=B.get(F).currentProgram.getUniforms();for(let _n=0;_n<Oe;_n++)Ke.setValue(P,"_gl_DrawID",_n),le.render(Pe[_n]/Qt,Mt[_n])}else if(O.isInstancedMesh)le.renderInstances(wt,ye,O.count);else if(z.isInstancedBufferGeometry){let Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Mt=Math.min(z.instanceCount,Pe);le.renderInstances(wt,ye,Mt)}else le.render(wt,ye)};function Xn(_,C,z,F){V!==null&&_.isNodeMaterial&&V.setObject(F,_),Zt===!0&&Et.setState(_,z,!1),_.transparent===!0&&_.side===Tn&&_.forceSinglePass===!1?(_.side=Ve,_.needsUpdate=!0,Je(_,C,F),_.side=ai,_.needsUpdate=!0,Je(_,C,F),_.side=Tn):Je(_,C,F)}this.compile=function(_,C,z=null){z===null&&(z=_),V!==null&&V.renderStart(_,C,z),w=lt.get(z),w.init(C),x.push(w),z.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),_!==z&&_.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),ie=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,ie),Zt===!0&&Et.setGlobalState(this.clippingPlanes,C),V!==null&&Pt.render(w.state.shadowsArray,z,C);let F=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pt=O.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let ft=pt[vt];Xn(ft,z,C,O),F.add(ft)}else Xn(pt,z,C,O),F.add(pt)}),w=x.pop(),V!==null&&V.renderEnd(),F},this.compileAsync=function(_,C,z=null){let F=this.compile(_,C,z);return new Promise(O=>{function pt(){if(F.forEach(function(vt){let _t=B.get(vt).currentProgram;(_t===void 0||_t.isReady())&&F.delete(vt)}),F.size===0){O(_);return}setTimeout(pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let mn=null;function uo(_){mn&&mn(_)}function ds(){gn.stop()}function rr(){gn.start()}let gn=new Mh;gn.setAnimationLoop(uo),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(_){mn=_,bt.setAnimationLoop(_),_===null?gn.stop():gn.start()},bt.addEventListener("sessionstart",ds),bt.addEventListener("sessionend",rr),this.render=function(_,C){if(C!==void 0&&C.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(_,C);let z=bt.enabled===!0&&bt.isPresenting===!0,F=A!==null&&(nt===null||z)&&A.begin(I,nt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(C),C=bt.getCamera()),_.isScene===!0&&_.onBeforeRender(I,_,C,nt),w=lt.get(_,x.length),w.init(C),w.state.textureUnits=X.getTextureUnits(),x.push(w),Ht.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),kt.setFromProjectionMatrix(Ht,un,C.reversedDepth),ie=this.localClippingEnabled,Zt=Et.init(this.clippingPlanes,ie),b=dt.get(_,R.length),b.init(),R.push(b),bt.enabled===!0&&bt.isPresenting===!0){let vt=I.xr.getDepthSensingMesh();vt!==null&&Ei(vt,C,-1/0,I.sortObjects)}Ei(_,C,0,I.sortObjects),b.finish(),V!==null&&V.updateLights(w.state.lightsArray),I.sortObjects===!0&&b.sort(gt,Rt),ae=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ae&&Ut.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Et.beginShadows();let O=w.state.shadowsArray;if(Pt.render(O,_,C),Zt===!0&&Et.endShadows(),(F&&A.hasRenderPass())===!1){let vt=b.opaque,ft=b.transmissive;if(w.setupLights(),C.isArrayCamera){let _t=C.cameras;if(ft.length>0)for(let St=0,Ft=_t.length;St<Ft;St++){let Wt=_t[St];Ci(vt,ft,_,Wt)}ae&&Ut.render(_);for(let St=0,Ft=_t.length;St<Ft;St++){let Wt=_t[St];an(b,_,Wt,Wt.viewport)}}else ft.length>0&&Ci(vt,ft,_,C),ae&&Ut.render(_),an(b,_,C)}nt!==null&&$===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),F&&A.end(I),_.isScene===!0&&_.onAfterRender(I,_,C),ot.resetDefaultState(),W=-1,Q=null,x.pop(),x.length>0?(w=x[x.length-1],X.setTextureUnits(w.state.textureUnits),Zt===!0&&Et.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,V!==null&&V.renderEnd()};function Ei(_,C,z,F){if(_.visible===!1)return;if(_.layers.test(C.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(C);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(kt)){F&&he.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ht);let vt=K.update(_),ft=_.material;ft.visible&&b.push(_,vt,ft,z,he.z,null,C)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(kt))){let vt=K.update(_),ft=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),he.copy(_.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),he.copy(vt.boundingSphere.center)),he.applyMatrix4(_.matrixWorld).applyMatrix4(Ht)),Array.isArray(ft)){let _t=vt.groups;for(let St=0,Ft=_t.length;St<Ft;St++){let Wt=_t[St],wt=ft[Wt.materialIndex];wt&&wt.visible&&b.push(_,vt,wt,z,he.z,Wt,C)}}else ft.visible&&b.push(_,vt,ft,z,he.z,null,C)}}let pt=_.children;for(let vt=0,ft=pt.length;vt<ft;vt++)Ei(pt[vt],C,z,F)}function an(_,C,z,F){let{opaque:O,transmissive:pt,transparent:vt}=_;w.setupLightsView(z),Zt===!0&&Et.setGlobalState(I.clippingPlanes,z),F&&f.viewport(et.copy(F)),O.length>0&&Ri(O,C,z),pt.length>0&&Ri(pt,C,z),vt.length>0&&Ri(vt,C,z),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Ci(_,C,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let wt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new We(1,1,{generateMipmaps:!0,type:wt?pn:Xe,minFilter:li,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let pt=w.state.transmissionRenderTarget[F.id],vt=F.viewport||et;pt.setSize(vt.z*I.transmissionResolutionScale,vt.w*I.transmissionResolutionScale);let ft=I.getRenderTarget(),_t=I.getActiveCubeFace(),St=I.getActiveMipmapLevel();I.setRenderTarget(pt),I.getClearColor(re),Gt=I.getClearAlpha(),Gt<1&&I.setClearColor(16777215,.5),I.clear(),ae&&Ut.render(z);let Ft=I.toneMapping;I.toneMapping=dn;let Wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),w.setupLightsView(F),Zt===!0&&Et.setGlobalState(I.clippingPlanes,F),Ri(_,z,F),X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ee=0,ye=C.length;ee<ye;ee++){let pe=C[ee],{object:le,geometry:Pe,material:Mt,group:Oe}=pe;if(Mt.side===Tn&&le.layers.test(F.layers)){let Qt=Mt.side;Mt.side=Ve,Mt.needsUpdate=!0,Pi(le,z,F,Pe,Mt,Oe),Mt.side=Qt,Mt.needsUpdate=!0,wt=!0}}wt===!0&&(X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt))}I.setRenderTarget(ft,_t,St),I.setClearColor(re,Gt),Wt!==void 0&&(F.viewport=Wt),I.toneMapping=Ft}function Ri(_,C,z){let F=C.isScene===!0?C.overrideMaterial:null;for(let O=0,pt=_.length;O<pt;O++){let vt=_[O],{object:ft,geometry:_t,group:St}=vt,Ft=vt.material;Ft.allowOverride===!0&&F!==null&&(Ft=F),ft.layers.test(z.layers)&&Pi(ft,C,z,_t,Ft,St)}}function Pi(_,C,z,F,O,pt){V!==null&&O.isNodeMaterial&&V.setObject(_,O),_.onBeforeRender(I,C,z,F,O,pt),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(I,C,z,F,_,pt),O.transparent===!0&&O.side===Tn&&O.forceSinglePass===!1?(O.side=Ve,O.needsUpdate=!0,I.renderBufferDirect(z,C,F,O,_,pt),O.side=ai,O.needsUpdate=!0,I.renderBufferDirect(z,C,F,O,_,pt),O.side=Tn):I.renderBufferDirect(z,C,F,O,_,pt),_.onAfterRender(I,C,z,F,O,pt)}function Je(_,C,z){C.isScene!==!0&&(C=Me);let F=B.get(_),O=w.state.lights,pt=w.state.shadowsArray,vt=O.state.version,ft=ut.getParameters(_,O.state,pt,C,z,w.state.lightProbeGridArray),_t=ut.getProgramCacheKey(ft),St=F.programs;F.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;let Ft=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;F.envMap=at.get(_.envMap||F.environment,Ft),F.envMapRotation=F.environment!==null&&_.envMap===null?C.environmentRotation:_.envMapRotation,St===void 0&&(_.addEventListener("dispose",Ge),St=new Map,F.programs=St);let Wt=St.get(_t);if(Wt!==void 0){if(F.currentProgram===Wt&&F.lightsStateVersion===vt)return ps(_,ft),Wt}else ft.uniforms=ut.getUniforms(_),V!==null&&_.isNodeMaterial&&V.build(_,z,ft),_.onBeforeCompile(ft,I),Wt=ut.acquireProgram(ft,_t),St.set(_t,Wt),F.uniforms=ft.uniforms;let wt=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(wt.clippingPlanes=Et.uniform),ps(_,ft),F.needsLights=yt(_),F.lightsStateVersion=vt,F.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.sunLights.value=O.state.sun,wt.sunLightShadows.value=O.state.sunShadow,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.sunShadowMatrix.value=O.state.sunShadowMatrix,wt.sunShadowCascade.value=O.state.sunShadowCascade,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=w.state.lightProbeGridArray.length>0,F.currentProgram=Wt,F.uniformsList=null,Wt}function fs(_){if(_.uniformsList===null){let C=_.currentProgram.getUniforms();_.uniformsList=os.seqWithValue(C.seq,_.uniforms)}return _.uniformsList}function ps(_,C){let z=B.get(_);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function ms(_,C){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let z=0,F=_.length;z<F;z++){let O=_[z];if(O.texture!==null&&O.boundingBox.containsPoint(y))return O}return null}function rt(_,C,z,F,O){C.isScene!==!0&&(C=Me),X.resetTextureUnits();let pt=C.fog,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,ft=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Yt.workingColorSpace,_t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,St=at.get(F.envMap||vt,_t),Ft=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Wt=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!z.morphAttributes.position,ee=!!z.morphAttributes.normal,ye=!!z.morphAttributes.color,pe=dn;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(pe=I.toneMapping);let le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=le!==void 0?le.length:0,Mt=B.get(F),Oe=w.state.lights;if(Zt===!0&&(ie===!0||_!==Q)){let de=_===Q&&F.id===W;Et.setState(F,_,de)}let Qt=!1;F.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Oe.state.version||Mt.outputColorSpace!==ft||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==St||F.fog===!0&&Mt.fog!==pt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Et.numPlanes||Mt.numIntersection!==Et.numIntersection)||Mt.vertexAlphas!==Ft||Mt.vertexTangents!==Wt||Mt.morphTargets!==wt||Mt.morphNormals!==ee||Mt.morphColors!==ye||Mt.toneMapping!==pe||Mt.morphTargetsCount!==Pe||!!Mt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,Mt.__version=F.version);let Ke=Mt.currentProgram;Qt===!0&&(Ke=Je(F,C,O),V&&F.isNodeMaterial&&V.onUpdateProgram(F,Ke,Mt));let _n=!1,qn=!1,Ii=!1,oe=Ke.getUniforms(),xe=Mt.uniforms;if(f.useProgram(Ke.program)&&(_n=!0,qn=!0,Ii=!0),F.id!==W&&(W=F.id,qn=!0),Mt.needsLights){let de=ms(w.state.lightProbeGridArray,O);Mt.lightProbeGrid!==de&&(Mt.lightProbeGrid=de,qn=!0)}if(_n||Q!==_){f.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),oe.setValue(P,"projectionMatrix",_.projectionMatrix),oe.setValue(P,"viewMatrix",_.matrixWorldInverse);let $n=oe.map.cameraPosition;$n!==void 0&&$n.setValue(P,qt.setFromMatrixPosition(_.matrixWorld)),M.logarithmicDepthBuffer&&oe.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&oe.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,qn=!0,Ii=!0)}if(Mt.needsLights&&(Oe.state.sunShadowMap.length>0&&oe.setValue(P,"sunShadowMap",Oe.state.sunShadowMap,X),Oe.state.directionalShadowMap.length>0&&oe.setValue(P,"directionalShadowMap",Oe.state.directionalShadowMap,X),Oe.state.spotShadowMap.length>0&&oe.setValue(P,"spotShadowMap",Oe.state.spotShadowMap,X),Oe.state.pointShadowMap.length>0&&oe.setValue(P,"pointShadowMap",Oe.state.pointShadowMap,X)),O.isSkinnedMesh){oe.setOptional(P,O,"bindMatrix"),oe.setOptional(P,O,"bindMatrixInverse");let de=O.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),oe.setValue(P,"boneTexture",de.boneTexture,X))}O.isBatchedMesh&&(oe.setOptional(P,O,"batchingTexture"),oe.setValue(P,"batchingTexture",O._matricesTexture,X),oe.setOptional(P,O,"batchingIdTexture"),oe.setValue(P,"batchingIdTexture",O._indirectTexture,X),oe.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&oe.setValue(P,"batchingColorTexture",O._colorsTexture,X));let Yn=z.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&E.update(O,z,Ke),(qn||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,oe.setValue(P,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(xe.envMapIntensity.value=C.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=og()),qn){if(oe.setValue(P,"toneMappingExposure",I.toneMappingExposure),Mt.needsLights&&ct(xe,Ii),pt&&F.fog===!0&&Tt.refreshFogUniforms(xe,pt),Tt.refreshMaterialUniforms(xe,F,J,Z,w.state.transmissionRenderTarget[_.id]),Mt.needsLights&&Mt.lightProbeGrid){let de=Mt.lightProbeGrid;xe.probesSH.value=de.texture,xe.probesMin.value.copy(de.boundingBox.min),xe.probesMax.value.copy(de.boundingBox.max),xe.probesResolution.value.copy(de.resolution)}os.upload(P,fs(Mt),xe,X)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(os.upload(P,fs(Mt),xe,X),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&oe.setValue(P,"center",O.center),oe.setValue(P,"modelViewMatrix",O.modelViewMatrix),oe.setValue(P,"normalMatrix",O.normalMatrix),oe.setValue(P,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let de=F.uniformsGroups;for(let $n=0,Li=de.length;$n<Li;$n++){let Hl=de[$n];tt.update(Hl,Ke),tt.bind(Hl,Ke)}}return Ke}function ct(_,C){_.ambientLightColor.needsUpdate=C,_.lightProbe.needsUpdate=C,_.sunLights.needsUpdate=C,_.sunLightShadows.needsUpdate=C,_.directionalLights.needsUpdate=C,_.directionalLightShadows.needsUpdate=C,_.pointLights.needsUpdate=C,_.pointLightShadows.needsUpdate=C,_.spotLights.needsUpdate=C,_.spotLightShadows.needsUpdate=C,_.rectAreaLights.needsUpdate=C,_.hemisphereLights.needsUpdate=C}function yt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(_,C,z){let F=B.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),B.get(_.texture).__webglTexture=C,B.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,C){let z=B.get(_);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(_,C=0,z=0){nt=_,j=C,$=z;let F=null,O=!1,pt=!1;if(_){let ft=B.get(_);if(ft.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(P.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(_.viewport),It.copy(_.scissor),At=_.scissorTest,f.viewport(et),f.scissor(It),f.setScissorTest(At),W=-1;return}else if(ft.__webglFramebuffer===void 0)X.setupRenderTarget(_);else if(ft.__hasExternalTextures)X.rebindTextures(_,B.get(_.texture).__webglTexture,B.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ft=_.depthTexture;if(ft.__boundDepthTexture!==Ft){if(Ft!==null&&B.has(Ft)&&(_.width!==Ft.image.width||_.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(_)}}let _t=_.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(pt=!0);let St=B.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(St[C])?F=St[C][z]:F=St[C],O=!0):_.samples>0&&X.useMultisampledRTT(_)===!1?F=B.get(_).__webglMultisampledFramebuffer:Array.isArray(St)?F=St[z]:F=St,et.copy(_.viewport),It.copy(_.scissor),At=_.scissorTest}else et.copy(xt).multiplyScalar(J).floor(),It.copy(zt).multiplyScalar(J).floor(),At=ge;if(z!==0&&(F=H),f.bindFramebuffer(P.FRAMEBUFFER,F)&&f.drawBuffers(_,F),f.viewport(et),f.scissor(It),f.setScissorTest(At),O){let ft=B.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft.__webglTexture,z)}else if(pt){let ft=C;for(let _t=0;_t<_.textures.length;_t++){let St=B.get(_.textures[_t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+_t,St.__webglTexture,z,ft)}}else if(_!==null&&z!==0){let ft=B.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ft.__webglTexture,z)}W=-1};function Lt(_){let C=B.get(_);return(C.__readFormat!==_.format||C.__readType!==_.type)&&(C.__readFormat=_.format,C.__readType=_.type,C.__formatReadable=M.textureFormatReadable(_.format),C.__typeReadable=M.textureTypeReadable(_.type)),C}this.readRenderTargetPixels=function(_,C,z,F,O,pt,vt,ft=0){if(!(_&&_.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=B.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt]),_t){f.bindFramebuffer(P.FRAMEBUFFER,_t);try{let St=_.textures[ft],Ft=St.format,Wt=St.type;_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ft);let wt=Lt(St);if(wt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=_.width-F&&z>=0&&z<=_.height-O&&P.readPixels(C,z,F,O,ht.convert(Ft),ht.convert(Wt),pt)}finally{let St=nt!==null?B.get(nt).__webglFramebuffer:null;f.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(_,C,z,F,O,pt,vt,ft=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=B.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt]),_t)if(C>=0&&C<=_.width-F&&z>=0&&z<=_.height-O){f.bindFramebuffer(P.FRAMEBUFFER,_t);let St=_.textures[ft],Ft=St.format,Wt=St.type;_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ft);let wt=Lt(St);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.bufferData(P.PIXEL_PACK_BUFFER,pt.byteLength,P.STREAM_READ),P.readPixels(C,z,F,O,ht.convert(Ft),ht.convert(Wt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let ye=nt!==null?B.get(nt).__webglFramebuffer:null;f.bindFramebuffer(P.FRAMEBUFFER,ye);let pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zc(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ee),P.deleteSync(pe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,C=null,z=0){let F=Math.pow(2,-z),O=Math.floor(_.image.width*F),pt=Math.floor(_.image.height*F),vt=C!==null?C.x:0,ft=C!==null?C.y:0;X.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,vt,ft,O,pt),f.unbindTexture()},this.copyTextureToTexture=function(_,C,z=null,F=null,O=0,pt=0){let vt,ft,_t,St,Ft,Wt,wt,ee,ye,pe=_.isCompressedTexture?_.mipmaps[pt]:_.image;if(z!==null)vt=z.max.x-z.min.x,ft=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,St=z.min.x,Ft=z.min.y,Wt=z.isBox3?z.min.z:0;else{let xe=Math.pow(2,-O);vt=Math.floor(pe.width*xe),ft=Math.floor(pe.height*xe),_.isDataArrayTexture?_t=pe.depth:_.isData3DTexture?_t=Math.floor(pe.depth*xe):_t=1,St=0,Ft=0,Wt=0}F!==null?(wt=F.x,ee=F.y,ye=F.z):(wt=0,ee=0,ye=0);let le=ht.convert(C.format),Pe=ht.convert(C.type),Mt;C.isData3DTexture?(X.setTexture3D(C,0),Mt=P.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),Mt=P.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),Mt=P.TEXTURE_2D),f.activeTexture(P.TEXTURE0),f.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,C.flipY),f.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),f.pixelStorei(P.UNPACK_ALIGNMENT,C.unpackAlignment);let Oe=f.getParameter(P.UNPACK_ROW_LENGTH),Qt=f.getParameter(P.UNPACK_IMAGE_HEIGHT),Ke=f.getParameter(P.UNPACK_SKIP_PIXELS),_n=f.getParameter(P.UNPACK_SKIP_ROWS),qn=f.getParameter(P.UNPACK_SKIP_IMAGES);f.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),f.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),f.pixelStorei(P.UNPACK_SKIP_PIXELS,St),f.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),f.pixelStorei(P.UNPACK_SKIP_IMAGES,Wt);let Ii=_.isDataArrayTexture||_.isData3DTexture,oe=C.isDataArrayTexture||C.isData3DTexture;if(_.isDepthTexture){let xe=B.get(_),Yn=B.get(C),de=B.get(xe.__renderTarget),$n=B.get(Yn.__renderTarget);f.bindFramebuffer(P.READ_FRAMEBUFFER,de.__webglFramebuffer),f.bindFramebuffer(P.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Li=0;Li<_t;Li++)Ii&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(_).__webglTexture,O,Wt+Li),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(C).__webglTexture,pt,ye+Li)),P.blitFramebuffer(St,Ft,vt,ft,wt,ee,vt,ft,P.DEPTH_BUFFER_BIT,P.NEAREST);f.bindFramebuffer(P.READ_FRAMEBUFFER,null),f.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||B.has(_)){let xe=B.get(_),Yn=B.get(C);f.bindFramebuffer(P.READ_FRAMEBUFFER,D),f.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let de=0;de<_t;de++)Ii?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,O,Wt+de):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,O),oe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yn.__webglTexture,pt,ye+de):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yn.__webglTexture,pt),O!==0?P.blitFramebuffer(St,Ft,vt,ft,wt,ee,vt,ft,P.COLOR_BUFFER_BIT,P.NEAREST):oe?P.copyTexSubImage3D(Mt,pt,wt,ee,ye+de,St,Ft,vt,ft):P.copyTexSubImage2D(Mt,pt,wt,ee,St,Ft,vt,ft);f.bindFramebuffer(P.READ_FRAMEBUFFER,null),f.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else oe?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(Mt,pt,wt,ee,ye,vt,ft,_t,le,Pe,pe.data):C.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,pt,wt,ee,ye,vt,ft,_t,le,pe.data):P.texSubImage3D(Mt,pt,wt,ee,ye,vt,ft,_t,le,Pe,pe):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pt,wt,ee,vt,ft,le,Pe,pe.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pt,wt,ee,pe.width,pe.height,le,pe.data):P.texSubImage2D(P.TEXTURE_2D,pt,wt,ee,vt,ft,le,Pe,pe);f.pixelStorei(P.UNPACK_ROW_LENGTH,Oe),f.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt),f.pixelStorei(P.UNPACK_SKIP_PIXELS,Ke),f.pixelStorei(P.UNPACK_SKIP_ROWS,_n),f.pixelStorei(P.UNPACK_SKIP_IMAGES,qn),pt===0&&C.generateMipmaps&&P.generateMipmap(Mt),f.unbindTexture()},this.initRenderTarget=function(_){B.get(_).__webglFramebuffer===void 0&&X.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?X.setTextureCube(_,0):_.isData3DTexture?X.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?X.setTexture2DArray(_,0):X.setTexture2D(_,0),f.unbindTexture()},this.resetState=function(){j=0,$=0,nt=null,f.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Rh="data:image/png;base64,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";var nr={cols:159,rows:86,pitchX:.56,pitchZ:1.18,x0:-44.52,z0:-50.74},so=[{id:"hyd",name:"Hyderabad",x:-12.87,z:17.25},{id:"ndb",name:"Nandurbar",x:-25.67,z:4.52},{id:"kgm",name:"Kothagudem",x:-6.44,z:16.73},{id:"jh",name:"Jharkhand",x:8.45,z:-2.97}],Ph=[[],[31,39],[27,42],[25,45],[25,25,27,46,58,58,60,61],[31,50,54,65],[32,65],[33,64],[30,62],[30,61],[30,58],[30,58],[30,60],[32,61],[36,56,58,61],[40,56],[37,57],[35,57],[35,57,59,60],[35,61,63,63],[33,65],[32,69],[29,67],[29,66],[28,65,143,143,149,151],[25,64,141,153],[23,67,136,152],[22,71,134,157],[12,14,20,75,108,111,133,156],[11,78,108,111,127,155],[9,89,108,111,130,150,156,156],[8,92,109,113,120,120,128,148],[12,99,102,102,108,109,111,145],[11,108,114,115,117,145],[12,108,118,145],[14,111,118,143],[16,109,131,143],[17,107,131,142],[13,13,16,109,129,141],[4,111,126,135,137,140],[1,110,125,129,131,136],[3,111,126,127,131,136],[6,10,13,112,131,134],[12,112,132,134],[5,22,25,112,132,135],[7,23,25,107,109,109,112,112],[9,22,25,102],[11,20,25,101],[14,16,26,101],[26,100],[26,98],[26,93],[26,90],[26,89],[27,87],[27,84],[28,82],[28,79],[29,76],[29,76],[29,71],[30,70],[31,65],[32,64],[33,64],[34,65],[35,64],[36,65],[36,66,133,134],[37,65,133,134],[38,65,133,134],[39,63,132,133],[40,63,132,133],[42,63],[22,23,30,31,42,63,131,132],[25,25,30,30,43,63,131,132],[44,60],[45,59],[45,58],[46,55],[47,54],[27,27,49,52],[],[138,138],[138,139],[138,139]];var lo=Math.PI/180,Ih=30,se={w:.5,h:1.1},Ue={back:.008,paper:.004,pocket:.006,flap:.006},ir=Ue.back+Ue.paper+Ue.pocket+Ue.flap,ro=.53,fi=.47,Gn={from:.045,to:.6,width:.86},pi={at:.285,r:.155},Nh="SCM / ",cg=100001,hg=41.3,ug=i=>1e5+(i*617531+4127)%9e5,cs={x0:.15,x1:.85,y0:.17,y1:.66,modules:64},Ul=[11,13,9,6,10,5],dg=14/24,Fl=10,rn={y0:.715,y1:.865,baseline:.82,font:52},fg=106*lo,Wn={from:new k(-1.5,2.7,1.9),intensity:1.75},pg=Math.PI-Wn.intensity*(Wn.from.y/Wn.from.length()),ao={across:.8,at:.74,up:.84,shiftY:0},Lh={across:.86,at:.5,up:.46,shiftY:.2},mg={across:.84,at:.5,up:.86,shiftY:0},Ol=[-2,-1],oo=[{at:"card",aim:-.12,span:1.9,narrow:1.3,tall:1.5,el:33,az:-30,open:1,fog:[.98,1.7],haze:[.66,.96]},{at:"card",aim:-.24,span:1.6,narrow:1,tall:1.52,el:61,az:-24,open:1,fog:[1.2,2.6],haze:[.3,.72]},{at:"card",aim:0,span:9.4,narrow:5.2,tall:0,el:44,az:-13,open:0,fog:[1.25,3.3],haze:Ol},{at:"india",aim:0,span:97,narrow:96,tall:112,el:83,az:0,open:0,fog:[30,40],haze:Ol}],Dh={at:"card",aim:-.2,span:1.02,narrow:1.02,tall:1.34,el:38,az:-24,open:1,fog:[30,40],haze:Ol},_e=(i,t,e)=>Math.min(e,Math.max(t,i)),sn=(i,t,e)=>i+(t-i)*e,Ti=i=>i*i*(3-2*i),Bl=i=>i*i*i*(i*(i*6-15)+10),gg=i=>Bl(_e((i-.07)/.86,0,1));function Vl(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Hn=512,hs=i=>Math.round(i*se.h*(Hn/se.w));function ho(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let a=Vl(s);for(let o=0;o<r;o+=1){let l=a()*t,c=a()*e,u=4+a()*14,p=a()*Math.PI;i.strokeStyle=a()<.5?"rgba(255,255,255,0.6)":"rgba(40,70,40,0.04)",i.lineWidth=1,i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(p)*u,c+Math.sin(p)*u),i.stroke()}}function _g(i,t,e){let n=i.getContext("2d");if(ho(n,i.width,i.height,t.paper,11,500),e){let s=i.width*.9;n.drawImage(e,(i.width-s)/2,(i.height-s)/2-i.height*.01,s,s)}}function xg(i,t){let e=i.width,n=i.getContext("2d");ho(n,e,i.height,"#f5f7f7",5,2600);let s=e/(se.w*Gn.width),r=(pi.at-Gn.from)*se.h*s;n.strokeStyle=t.ink,n.lineWidth=7,n.lineCap="round",n.setLineDash([20,19]),n.beginPath(),n.arc(e/2,r,pi.r*s,0,Math.PI*2),n.stroke(),n.setLineDash([])}function Gl(i,t){i.font=`500 ${t}px "Anek Latin", system-ui, sans-serif`,i.fontStretch="condensed",i.textBaseline="alphabetic"}function vg(i){Gl(i,rn.font);let t=i.measureText(Nh).width,e=0;for(let r=0;r<10;r+=1)e=Math.max(e,i.measureText(String(r)).width);let n=Math.ceil(e)+2,s=(Hn-(t+n*6))/2;return{start:s,digits:s+t,advance:n}}function yg(i,t,e){let n=i.width,s=i.height,r=i.getContext("2d");ho(r,n,s,t.paper,17,450),r.fillStyle=t.ink,Gl(r,rn.font),r.textAlign="left",r.fillText(Nh,e.start,s*rn.baseline)}var co={w:64,h:192};function Sg(i,t){let e=i.getContext("2d"),n=(rn.y1-rn.y0)*hs(fi);e.setTransform(1,0,0,1,0,0),e.fillStyle="#000",e.fillRect(0,0,i.width,i.height),e.setTransform(co.w/t.advance,0,0,co.h/n,0,0),e.fillStyle="#fff",Gl(e,rn.font),e.textAlign="center";let s=(rn.baseline-rn.y0)*hs(fi);for(let r=0;r<10;r+=1)e.fillText(String(r),(r+.5)*t.advance,s);e.setTransform(1,0,0,1,0,0)}function Mg(i,t,e){let n=i.getContext("2d");n.drawImage(t,0,0),n.drawImage(e,0,t.height);let s=n.createLinearGradient(0,t.height,0,t.height+14);s.addColorStop(0,"rgba(30,60,35,0.26)"),s.addColorStop(1,"rgba(30,60,35,0)"),n.fillStyle=s,n.fillRect(0,t.height,i.width,14)}function bg(i,t){ho(i.getContext("2d"),i.width,i.height,t.paper,29,500)}function wg(i,t){let e=i.width,n=i.getContext("2d"),s=n.createImageData(e,e),r=Vl(23),a=[2,3,4,5,7].map(u=>({k:u,amp:.11*r()/u+.006,phase:r()*Math.PI*2})),[o,l,c]=t;for(let u=0;u<e;u+=1)for(let p=0;p<e;p+=1){let h=(p+.5)/e-.5,g=(u+.5)/e-.5,v=Math.hypot(h,g),S=Math.atan2(g,h),m=.4;a.forEach(w=>{m*=1+w.amp*Math.sin(w.k*S+w.phase)});let d=v/m,T=1-.5*d*d+(r()-.5)*.02,y=1.08-.3*Ti(_e((d-.55)/.45,0,1))+(r()-.5)*.05,b=(u*e+p)*4;s.data[b]=_e(o*y,0,255),s.data[b+1]=_e(l*y,0,255),s.data[b+2]=_e(c*y,0,255),s.data[b+3]=_e(T,0,1)*255}n.putImageData(s,0,0)}var zl=.7;function Ag(i){let t=i.width,e=i.getContext("2d"),n=t*zl,s=n*(se.w/se.h),r=(t-s)/2,a=(t-n)/2;e.clearRect(0,0,t,t),e.filter=`blur(${t*.035}px)`,e.fillStyle="#000",e.fillRect(r-t*.02,a-t*.02,s+t*.04,n+t*.04),e.filter="none",e.globalCompositeOperation="destination-out",e.fillRect(r,a,s,n),e.globalCompositeOperation="source-over"}function ui(i,t){return Object.assign(document.createElement("canvas"),{width:i,height:t})}function di(i){let t=new Fs(i);return t.colorSpace=Be,t.anisotropy=8,t}function kl(i){let t=kl.ctx||(kl.ctx=document.createElement("canvas").getContext("2d"));t.fillStyle="#000",t.fillStyle=i.trim();let e=t.fillStyle;return[1,3,5].map(n=>parseInt(e.slice(n,n+2),16))}function Tg(i){let t=i.querySelector("[data-story]"),e=i.querySelector("[data-stage]"),n=[...i.querySelectorAll("[data-step]")],s=i.querySelector("[data-scene]"),r=i.querySelector("[data-scene-blank]"),a=i.querySelector("[data-frame]"),o=[...i.querySelectorAll("[data-rail] a")],l=i.querySelector("[data-rail]"),c=i.querySelector("[data-places]"),u=new Map([...i.querySelectorAll("[data-place]")].map(rt=>[rt.dataset.place,rt])),p=i.querySelector("[data-parts]"),h=new Map([...i.querySelectorAll("[data-part]")].map(rt=>[rt.dataset.part,rt])),g=new eo({antialias:!0,powerPreference:"high-performance"});g.shadowMap.enabled=!0,g.shadowMap.type=Si;let v=g.domElement;v.setAttribute("aria-hidden","true");let S=new Ps,m=new De(Ih,1,.1,100);S.fog=new Rs(16777215,1,10),S.background=new Bt;let d={},T=ui(Hn,hs(ro)),L=ui(Hn,hs(fi)),y=ui(co.w*10,co.h),b=ui(Hn,hs(ro)+hs(fi)),w=ui(Hn,Math.round(Hn*((Gn.to-Gn.from)*se.h)/(se.w*Gn.width))),R=ui(256,300),x=ui(256,256),A=ui(256,256),I={flap:di(T),pocket:di(L),closed:di(b),paper:di(w),inside:di(R),spot:di(x),digits:di(y)};Ag(A);let U=di(A),V=null,H={value:new Xt(-2,-1)},D={value:0},G=(rt,ct)=>(rt.onBeforeCompile=yt=>{yt.uniforms.uHaze=H,yt.uniforms.uSoft=D,yt.fragmentShader=yt.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uHaze;
uniform float uSoft;`).replace("#include <fog_fragment>",`
          float llFar = smoothstep( fogNear, fogFar, vFogDepth );
          float llNear = 1.0 - smoothstep( uHaze.x, uHaze.y, vFogDepth );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, max( uSoft, max( llFar, llNear ) ) );`),ct&&ct(yt)},ct&&(rt.customProgramCacheKey=()=>"field-print"),rt),j={uInk:{value:new Bt},uDigits:{value:I.digits},uBar:{value:new ce(cs.x0,cs.x1,cs.y0,cs.y1)},uCode:{value:new ce(0,1,rn.y0,rn.y1)}},$=rt=>ct=>{Object.assign(ct.uniforms,j),ct.vertexShader=ct.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aCodeA;
        attribute vec3 aCodeB;
        attribute float aSeed;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vCodeA = aCodeA;
        vCodeB = aCodeB;
        vSeed = aSeed;`),ct.fragmentShader=ct.fragmentShader.replace("#include <common>",`#include <common>
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
          float pick = floor( fract( sin( symbol * 12.9898 + vSeed * 78.233 ) * 43758.5453 ) * ${Ul.length}.0 );
          float bits = ${Ul.map((yt,Lt)=>Lt<Ul.length-1?`pick < ${Lt}.5 ? ${yt}.0 : `:`${yt}.0`).join("")};
          return mod( floor( bits / exp2( 3.0 - place ) ), 2.0 );
        }
        // How much ink falls on this point of the face. Derivatives are taken outside any branch,
        // and the result is masked rather than branched, so it is well defined everywhere.
        float llPrint( vec2 uv ) {
          float py = 1.0 - uv.y / ${rt.toFixed(4)}; // 0 at the pocket's top edge, 1 at the card's foot
          float module = ( uv.x - uBar.x ) / ( uBar.y - uBar.x ) * ${cs.modules.toFixed(1)};
          float width = fwidth( module );
          // The bars are averaged under the pixel, weighted toward its centre. While bars are wider
          // than a pixel the average is narrow and their edges stay sharp; as they shrink below one
          // it widens, so a distant barcode greys into soft stripes, as a printed one does, instead
          // of breaking into dashes.
          float reach = width * mix( 0.75, 1.4, smoothstep( 0.35, 1.0, width ) );
          float ink = 0.0;
          float cover = 0.0;
          for ( int i = 0; i < ${Fl}; i ++ ) {
            float t = ( float( i ) + 0.5 ) / ${Fl/2}.0 - 1.0;
            float at = module + t * reach;
            float weight = ( 1.0 - abs( t ) ) * step( 0.0, at ) * step( at, ${cs.modules.toFixed(1)} );
            cover += weight;
            ink += weight * llBar( at );
          }
          // Once a pixel spans whole symbols, the samples are too few: use the barcode's overall tone.
          float soft = fwidth( py ) * 0.5 + 0.00001;
          float rows = smoothstep( uBar.z - soft, uBar.z + soft, py ) * ( 1.0 - smoothstep( uBar.w - soft, uBar.w + soft, py ) );
          float bars = mix( ink, cover * ${dg.toFixed(3)}, smoothstep( 2.0, 4.0, width ) ) / ${Fl/2}.0 * rows;

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
        diffuseColor.rgb = mix( diffuseColor.rgb, uInk, llPrint( vMapUv ) );`)},nt=G(new tn({map:I.closed}),$(fi)),W=G(new tn),Q=new tn,et=new tn({map:I.flap}),It=new tn({map:I.inside}),At=new tn({map:I.pocket});At.onBeforeCompile=$(1),At.customProgramCacheKey=()=>"card-print";let re=new tn({map:I.paper}),Gt=new tn({map:I.spot,alphaTest:1.01,alphaToCoverage:!0}),$t=[];Ph.forEach((rt,ct)=>{for(let yt=0;yt<rt.length;yt+=2)for(let Lt=rt[yt];Lt<=rt[yt+1];Lt+=1)$t.push({x:nr.x0+(Lt+.5)*nr.pitchX,z:nr.z0+(ct+.5)*nr.pitchZ})});let J=(rt=>$t.reduce((ct,yt)=>Math.hypot(yt.x-rt.x,yt.z-rt.z)<Math.hypot(ct.x-rt.x,ct.z-rt.z)?yt:ct))(so.find(rt=>rt.id==="hyd")),gt=$t.filter(rt=>rt!==J),Rt=new Ns(new zn(se.w,ir,se.h),[W,W,nt,W,W,W],gt.length);Rt.frustumCulled=!1,Rt.receiveShadow=!0;let xt=Vl(101),zt=new be,ge=new Float32Array(gt.length),kt=new Float32Array(gt.length*3),Zt=new Float32Array(gt.length*3),ie=new Float32Array(gt.length);gt.forEach((rt,ct)=>{let yt=String(ug(ct)).split("").map(Number);kt.set(yt.slice(0,3),ct*3),Zt.set(yt.slice(3),ct*3),ie[ct]=1+xt()*97,zt.position.set(rt.x+(xt()-.5)*.02,ir/2,rt.z+(xt()-.5)*.024),zt.rotation.set(0,(xt()-.5)*.06,0),zt.updateMatrix(),Rt.setMatrixAt(ct,zt.matrix),ge[ct]=.955+xt()*.045}),Rt.instanceMatrix.needsUpdate=!0,Rt.geometry.setAttribute("aCodeA",new Bn(kt,3)),Rt.geometry.setAttribute("aCodeB",new Bn(Zt,3)),Rt.geometry.setAttribute("aSeed",new Bn(ie,1)),S.add(Rt);let Ht=[];so.forEach(rt=>{gt.forEach((ct,yt)=>{let Lt=Math.hypot(ct.x-rt.x,ct.z-rt.z);Lt<1.9&&Ht.push({index:yt,weight:1-Ti(_e((Lt-.7)/1.2,0,1))*.75})})});let qt=new yn;qt.position.set(J.x,0,J.z),qt.rotation.y=.035;let he=-se.h/2,Me=(rt,ct,yt,Lt,_,C)=>{let z=new we(new zn(rt,ct,yt),C);return z.position.set(0,Lt+ct/2,_+yt/2),z.castShadow=!0,z.receiveShadow=!0,z},ae=(rt,ct=Q)=>[Q,Q,rt,ct,Q,Q];qt.add(Me(se.w,Ue.back,se.h,0,he,ae(Q))),qt.add(Me(se.w*Gn.width,Ue.paper,(Gn.to-Gn.from)*se.h,Ue.back,he+Gn.from*se.h,ae(re)));let ue=Me(se.w,Ue.pocket,fi*se.h,Ue.back+Ue.paper,he+(1-fi)*se.h,ae(At)),P=String(cg).split("").map(Number),ve=rt=>new ze(Float32Array.from({length:ue.geometry.attributes.position.count*rt.length},(ct,yt)=>rt[yt%rt.length]),rt.length);ue.geometry.setAttribute("aCodeA",ve(P.slice(0,3))),ue.geometry.setAttribute("aCodeB",ve(P.slice(3))),ue.geometry.setAttribute("aSeed",ve([hg])),qt.add(ue);let Jt=new yn;Jt.position.set(0,Ue.back+Ue.paper+Ue.pocket,he);let M=Me(se.w,Ue.flap,ro*se.h,0,0,ae(et,It));M.receiveShadow=!1,Jt.add(M),qt.add(Jt);let f=new kn(1,1);f.rotateX(-Math.PI/2);let N=new we(f,Gt);N.position.set(-.012,Ue.back+Ue.paper+8e-4,he+pi.at*se.h+.008),N.rotation.y=.7,N.scale.set(pi.r*2*.9,1,pi.r*2*.84),N.receiveShadow=!0,qt.add(N),S.add(qt);let B=(rt,ct,yt,Lt)=>{let _=new be;return _.position.set(ct,yt,Lt),rt.add(_),_},X={cover:B(Jt,-se.w*.3,0,ro*se.h*.62),circle:B(qt,-pi.r*.72,ir/2,he+pi.at*se.h+pi.r*.7),code:B(qt,-se.w*.36,ir,he+(1-fi*.3)*se.h)},at=new Vs(16777215,16777215,pg),st=new Hs(16777215,Wn.intensity);st.position.set(J.x+Wn.from.x,Wn.from.y,J.z+Wn.from.z),st.target.position.set(J.x,0,J.z),st.castShadow=!0,st.shadow.mapSize.set(2048,2048),st.shadow.radius=5,st.shadow.bias=-4e-4,st.shadow.normalBias=.003,Object.assign(st.shadow.camera,{left:-1.5,right:1.5,top:1.5,bottom:-1.5,near:Wn.from.length()-1.6,far:Wn.from.length()+1.6}),st.shadow.camera.updateProjectionMatrix(),S.add(at,st,st.target);let Y=new we(new kn(8,8).rotateX(-Math.PI/2),new Bs({opacity:.22}));Y.position.set(J.x,5e-4,J.z),Y.receiveShadow=!0,S.add(Y);let K=new we(new kn(1,1).rotateX(-Math.PI/2),new yi({map:U,transparent:!0,depthWrite:!1,opacity:.2}));K.position.set(J.x,ir+.0015,J.z),K.rotation.y=qt.rotation.y,K.scale.set(se.h/zl,1,se.h/zl),K.renderOrder=2,S.add(K);function ut(){let rt=getComputedStyle(document.documentElement),ct=Lt=>rt.getPropertyValue(Lt).trim();d.mist=ct("--mist"),d.paper=ct("--paper"),d.ink=ct("--canopy"),d.sun=ct("--sun"),d.meadow=ct("--meadow"),S.background.set(d.mist),S.fog.color.set(d.mist),at.groundColor.set(d.mist),_g(T,d,V);let yt=vg(L.getContext("2d"));yg(L,d,yt),Mg(b,T,L),Sg(y,yt),j.uInk.value.set(d.ink),j.uCode.value.set(yt.digits/Hn,yt.advance/Hn,rn.y0,rn.y1),xg(w,d),bg(R,d),wg(x,kl(ct("--blood"))),Object.values(I).forEach(Lt=>{Lt.needsUpdate=!0}),Q.color.set(d.paper),W.color.set(d.paper),Y.material.color.set(d.ink),K.material.color.set(d.ink),Ut(Et,Pt,!0)}let Tt=new Bt,dt=new Bt,lt=new Bt,Et=0,Pt=0;function Ut(rt,ct,yt){!yt&&Math.abs(rt-Et)<.004&&Math.abs(ct-Pt)<.004||(Tt.set(d.sun),dt.set(d.meadow),(yt||Math.abs(ct-Pt)>=.004)&&gt.forEach((Lt,_)=>{Rt.setColorAt(_,lt.set(1,1,1).lerp(dt,ct).multiplyScalar(ge[_]))}),Ht.forEach(({index:Lt,weight:_})=>{lt.set(1,1,1).lerp(dt,ct).multiplyScalar(ge[Lt]).lerp(Tt,rt*_),Rt.setColorAt(Lt,lt)}),Rt.instanceColor.needsUpdate=!0,lt.set(1,1,1).lerp(dt,ct).lerp(Tt,rt),et.color.copy(lt),At.color.copy(lt),Et=rt,Pt=ct)}let E={width:0,height:0,aspect:1,layout:ao,across:ao.across,shiftX:0,ratio:Math.min(window.devicePixelRatio||1,2)},it={x:0,y:0,tx:0,ty:0},q=null,ht=0,ot=0,tt=0,Ct=0,bt=!1,te=0,Kt=!1,Fe=0,Ge=0,us=0,sr=new k,Xn=new k,mn=new k,uo=window.matchMedia("(prefers-reduced-motion: reduce)");function ds(rt){let ct=Math.tan(Ih*lo/2),yt=(E.layout===Lh?rt.narrow:rt.span)/(2*ct*E.aspect*E.across),Lt=rt.tall/(2*ct*E.layout.up);return Math.max(yt,Lt)}function rr(rt,ct){ct.getWorldPosition(mn).project(m),rt.style.transform=`translate(${((mn.x*.5+.5)*E.width).toFixed(1)}px, ${((-mn.y*.5+.5)*E.height).toFixed(1)}px)`}function gn(){let rt=q==="blank",ct=rt?0:_e(Math.floor(ot),0,oo.length-2),yt=rt?Dh:oo[ct],Lt=rt?Dh:oo[ct+1],_=rt?0:gg(ot-ct),C=Math.exp(sn(Math.log(ds(yt)),Math.log(ds(Lt)),_)),z=(sn(yt.el,Lt.el,_)+it.y*-1.4)*lo,F=(sn(yt.az,Lt.az,_)+it.x*2.2)*lo,O=sn(yt.open,Lt.open,Bl(_e(_/.55,0,1)))*(rt?1:te);Jt.rotation.x=-fg*O,K.material.opacity=.22*O;let pt=_t=>_t.at==="card"?1:0,vt=sn(pt(yt),pt(Lt),_);Xn.set(J.x*vt,.05*vt,sn(1.2,J.z+sn(yt.aim,Lt.aim,_),vt)),sr.set(Xn.x+C*Math.cos(z)*Math.sin(F),Xn.y+C*Math.sin(z),Xn.z+C*Math.cos(z)*Math.cos(F)),m.position.copy(sr),m.lookAt(Xn),m.near=_e(C*.12,.05,30),m.far=C*3+80,m.setViewOffset(E.width,E.height,-E.shiftX*E.width,E.layout.shiftY*E.height,E.width,E.height),S.fog.near=C*sn(yt.fog[0],Lt.fog[0],_),S.fog.far=C*sn(yt.fog[1],Lt.fog[1],_),H.value.set(C*sn(yt.haze[0],Lt.haze[0],_),C*sn(yt.haze[1],Lt.haze[1],_)),D.value=rt?0:.42*(1-Ti(_e((C-5)/12,0,1))),Rt.visible=!rt,st.castShadow=C<40;let ft=rt?0:Ti(_e((ot-2.5)/.42,0,1));if(Ut(ft,rt?0:Ti(_e((C-40)/110,0,1)),!1),g.render(S,m),c&&(c.style.opacity=String(ft),ft>.01&&(m.updateMatrixWorld(),so.forEach(_t=>{let St=u.get(_t.id);St&&(mn.set(_t.x,0,_t.z).project(m),St.style.transform=`translate(${((mn.x*.5+.5)*E.width).toFixed(1)}px, ${((-mn.y*.5+.5)*E.height).toFixed(1)}px)`)}))),p){let _t=rt?0:Ti(_e((ot-.62)/.3,0,1))*(1-Ti(_e((ot-1.08)/.22,0,1)));p.style.opacity=String(_t),_t>.01&&(m.updateMatrixWorld(),h.forEach((St,Ft)=>{X[Ft]&&rr(St,X[Ft])}))}if(l){l.style.setProperty("--p",String(_e((ot-1)/2,0,1)));let _t=ot<1.5?0:ot<2.5?1:2;o.forEach((St,Ft)=>{Ft===_t?St.setAttribute("aria-current","step"):St.removeAttribute("aria-current")})}}function Ei(rt){if(!q){Kt=!1;return}let ct=(rt-Fe)/1e3,yt=_e(ct,.001,.05);Fe=rt;let Lt=!1,_=42;if(tt+=(_*(ht-ot)-2*Math.sqrt(_)*tt)*yt,ot+=tt*yt,Math.abs(ht-ot)<3e-4&&Math.abs(tt)<.002?(ot=ht,tt=0):Lt=!0,(Math.abs(it.tx-it.x)>5e-4||Math.abs(it.ty-it.y)>5e-4)&&(it.x+=(it.tx-it.x)*(1-Math.exp(-yt*3)),it.y+=(it.ty-it.y)*(1-Math.exp(-yt*3)),Lt=!0),q==="blank")Gt.alphaTest=1.01;else if(bt)te=1,Gt.alphaTest=.5;else{let C=(rt-Ct)/1e3;te=Bl(_e((C-.4)/1.25,0,1));let z=_e((C-1.55)/1.5,0,1);Gt.alphaTest=sn(1.01,.5,1-(1-z)**3),bt=C>3.1,Lt=!0}gn(),Lt&&E.ratio>1&&(us+=1,ct>.024&&(Ge+=1),us>=45&&(Ge>22&&(E.ratio=Math.max(1,E.ratio-.25),g.setPixelRatio(E.ratio),g.setSize(E.width,E.height,!1)),us=0,Ge=0)),Lt?requestAnimationFrame(Ei):Kt=!1}function an(){Kt||!q||(Kt=!0,Fe=performance.now(),requestAnimationFrame(Ei))}function Ci(){let rt=q==="blank"?r:s;if(!rt)return;let ct=rt.clientWidth,yt=rt.clientHeight;if(!ct||!yt)return;E.width=ct,E.height=yt,E.aspect=ct/yt,E.layout=q==="blank"?mg:ct>=900&&E.aspect>1.05?ao:Lh;let Lt=rt.getBoundingClientRect(),_=E.layout===ao&&a?a.getBoundingClientRect():Lt;E.across=_.width*E.layout.across/ct,E.shiftX=(_.left-Lt.left+_.width*E.layout.at)/ct-.5,g.setPixelRatio(E.ratio),g.setSize(ct,yt,!1),m.aspect=E.aspect,an()}function Ri(rt){if(rt===q||(q=rt,!q))return;let ct=q==="blank"?r:s;v.parentNode!==ct&&ct.appendChild(v),q==="story"&&!Ct&&(Ct=performance.now()+250),Ci(),an()}function Pi(){let ct=(parseFloat(getComputedStyle(e).top)||0)-t.getBoundingClientRect().top,yt=n.map(_=>_.offsetTop),Lt=0;for(let _=0;_<yt.length-1;_+=1)ct>=yt[_]&&(Lt=_+_e((ct-yt[_])/Math.max(1,yt[_+1]-yt[_]),0,1));ht=_e(Lt,0,oo.length-1),an()}let Je={story:!1,blank:!1},fs=()=>Ri(Je.blank&&!Je.story?"blank":Je.story?"story":Je.blank?"blank":null),ps=new IntersectionObserver(rt=>{rt.forEach(ct=>{ct.target===e?Je.story=ct.isIntersecting:Je.blank=ct.isIntersecting}),fs()},{rootMargin:"10% 0px"});if(ps.observe(e),r&&ps.observe(r),window.addEventListener("scroll",Pi,{passive:!0}),window.addEventListener("resize",()=>{Ci(),Pi()}),"ResizeObserver"in window){let rt=new ResizeObserver(Ci);rt.observe(s),r&&rt.observe(r)}window.addEventListener("pointermove",rt=>{if(rt.pointerType==="touch"||uo.matches||!q)return;let ct=v.getBoundingClientRect();it.tx=_e((rt.clientX-ct.left)/ct.width*2-1,-1,1),it.ty=_e((rt.clientY-ct.top)/ct.height*2-1,-1,1),an()},{passive:!0}),document.addEventListener("ll:theme",()=>{ut(),an()}),document.addEventListener("visibilitychange",()=>{document.hidden||an()}),document.fonts&&document.fonts.load&&document.fonts.load('500 52px "Anek Latin"').then(()=>{ut(),an()}).catch(()=>{});let ms=new Image;ms.onload=()=>{V=ms,ut(),an()},ms.src=Rh,v.addEventListener("webglcontextlost",rt=>{rt.preventDefault(),document.documentElement.classList.remove("story-live")}),ut(),Pi(),ot=ht,Je.story=!0,fs(),gn(),document.documentElement.classList.add("story-live","scene-ready")}try{Tg(document)}catch(i){document.documentElement.classList.remove("story-live"),console.warn("Scale: 3D scene unavailable, showing still images instead.",i)}})();
