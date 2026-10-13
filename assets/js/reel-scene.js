(()=>{var gc=0,qo=1,_c=2;var Si=1,xc=2,ts=3,si=0,Be=1,wn=2,An=0,es=1,Yo=2,$o=3,Zo=4,vc=5;var Mi=100,yc=101,Sc=102,Mc=103,bc=104,wc=200,Ac=201,Tc=202,Ec=203,Jo=204,Ko=205,Cc=206,Rc=207,Pc=208,Ic=209,Lc=210,Dc=211,Nc=212,Uc=213,Fc=214,Lr=0,Dr=1,Nr=2,Yi=3,Ur=4,Fr=5,Or=6,Br=7,Ws=0,Oc=1,Bc=2,un=0,jo=1,Qo=2,tl=3,el=4,nl=5,il=6,sl=7;var rl=300,ri=301,bi=302,ua=303,da=304,Xs=306,zr=1e3,gn=1001,kr=1002,be=1003,zc=1004;var qs=1005;var Ee=1006,fa=1007;var ai=1008;var Ve=1009,al=1010,ol=1011,ns=1012,pa=1013,dn=1014,en=1015,fn=1016,ma=1017,ga=1018,is=1020,ll=35902,cl=35899,hl=1021,ul=1022,nn=1023,xn=1026,oi=1027,_a=1028,xa=1029,li=1030,va=1031;var ya=1033,Ys=33776,$s=33777,Zs=33778,Js=33779,Sa=35840,Ma=35841,ba=35842,wa=35843,Aa=36196,Ta=37492,Ea=37496,Ca=37488,Ra=37489,Ks=37490,Pa=37491,Ia=37808,La=37809,Da=37810,Na=37811,Ua=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Va=37818,Ga=37819,Ha=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,$a=36283,Za=36284,js=36285,Ja=36286;var Ms=2300,Vr=2301,Pr=2302,zo=2303,ko=2400,Vo=2401,Go=2402;var kc=3200;var Qs=0,Vc=1,zn="",Fe="srgb",bs="srgb-linear",ws="linear",te="srgb";var Ir=7680;var Gc=519,Hc=512,Wc=513,Xc=514,Ka=515,qc=516,Yc=517,ja=518,$c=519,Zc=35044;var dl="300 es",hn=2e3,$i=2001;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jc(){let i=As("canvas");return i.style.display="block",i}var Yl={},Zi=null;function fl(...i){let t="THREE."+i.shift();Zi?Zi("log",t,...i):console.log(t,...i)}function Kc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=Kc(i);let t="THREE."+i.shift();if(Zi)Zi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=Kc(i);let t="THREE."+i.shift();if(Zi)Zi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vi(...i){let t=i.join(" ");t in Yl||(Yl[t]=!0,Pt(...i))}function jc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Qc={[Lr]:Dr,[Nr]:Or,[Ur]:Br,[Yi]:Fr,[Dr]:Lr,[Or]:Nr,[Br]:Ur,[Fr]:Yi},vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var go=Math.PI/180,Gr=180/Math.PI;function tr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Wh(i,t){return(i%t+t)%t}function _o(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xl=class xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xl.prototype.isVector2=!0;var Gt=xl,yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],p=n[s+3],h=r[a+0],_=r[a+1],v=r[a+2],w=r[a+3];if(p!==w||l!==h||c!==_||d!==v){let g=l*h+c*_+d*v+p*w;g<0&&(h=-h,_=-_,v=-v,w=-w,g=-g);let f=1-o;if(g<.9995){let E=Math.acos(g),N=Math.sin(E);f=Math.sin(f*E)/N,o=Math.sin(o*E)/N,l=l*f+h*o,c=c*f+_*o,d=d*f+v*o,p=p*f+w*o}else{l=l*f+h*o,c=c*f+_*o,d=d*f+v*o,p=p*f+w*o;let E=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=E,c*=E,d*=E,p*=E}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],p=r[a],h=r[a+1],_=r[a+2],v=r[a+3];return t[e]=o*v+d*p+l*_-c*h,t[e+1]=l*v+d*h+c*p-o*_,t[e+2]=c*v+d*_+o*h-l*p,t[e+3]=d*v-o*p-l*h-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),p=o(r/2),h=l(n/2),_=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*p+c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p-h*_*v;break;case"YXZ":this._x=h*d*p+c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p+h*_*v;break;case"ZXY":this._x=h*d*p-c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p-h*_*v;break;case"ZYX":this._x=h*d*p-c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p+h*_*v;break;case"YZX":this._x=h*d*p+c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p-h*_*v;break;case"XZY":this._x=h*d*p-c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p+h*_*v;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],h=n+o+p;if(h>0){let _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(d-l)*_,this._y=(r-c)*_,this._z=(a-s)*_}else if(n>o&&n>p){let _=2*Math.sqrt(1+n-o-p);this._w=(d-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+c)/_}else if(o>p){let _=2*Math.sqrt(1+o-n-p);this._w=(r-c)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+d)/_}else{let _=2*Math.sqrt(1+p-n-o);this._w=(a-s)/_,this._x=(r+c)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vl=class vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*d,this.y=n+l*d+o*c-r*p,this.z=s+l*p+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vl.prototype.isVector3=!0;var k=vl,xo=new k,$l=new yn,yl=class yl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],_=n[5],v=n[8],w=s[0],g=s[3],f=s[6],E=s[1],N=s[4],S=s[7],b=s[2],A=s[5],P=s[8];return r[0]=a*w+o*E+l*b,r[3]=a*g+o*N+l*A,r[6]=a*f+o*S+l*P,r[1]=c*w+d*E+p*b,r[4]=c*g+d*N+p*A,r[7]=c*f+d*S+p*P,r[2]=h*w+_*E+v*b,r[5]=h*g+_*N+v*A,r[8]=h*f+_*S+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,h=o*l-d*r,_=c*r-a*l,v=e*p+n*h+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=p*w,t[1]=(s*c-d*n)*w,t[2]=(o*n-s*a)*w,t[3]=h*w,t[4]=(d*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=_*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(t,e)),this}rotate(t){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yl.prototype.isMatrix3=!0;var Ft=yl,vo=new Ft,Zl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var qt=Xh();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Li,Hr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Li===void 0&&(Li=As("canvas")),Li.width=t.width,Li.height=t.height;let s=Li.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=As("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qh=0,Ji=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Yh=0,So=new k,Oe=class i extends vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ee,a=ai,o=nn,l=Ve,c=i.DEFAULT_ANISOTROPY,d=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=tr(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=rl;Oe.DEFAULT_ANISOTROPY=1;var Sl=class Sl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],p=l[8],h=l[1],_=l[5],v=l[9],w=l[2],g=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-w)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+w)<.1&&Math.abs(v+g)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(c+1)/2,S=(_+1)/2,b=(f+1)/2,A=(d+h)/4,P=(p+w)/4,x=(v+g)/4;return N>S&&N>b?N<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(N),s=A/n,r=P/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-v)*(g-v)+(p-w)*(p-w)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(p-w)/E,this.z=(h-d)/E,this.w=Math.acos((c+_+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sl.prototype.isVector4=!0;var se=Sl,Wr=class extends vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ji(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends Wr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ha=class ha{constructor(t,e,n,s,r,a,o,l,c,d,p,h,_,v,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,p,h,_,v,w,g)}set(t,e,n,s,r,a,o,l,c,d,p,h,_,v,w,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=h,f[3]=_,f[7]=v,f[11]=w,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*d,_=a*p,v=o*d,w=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=h-w*c,e[9]=-o*l,e[2]=w-h*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*d,_=l*p,v=c*d,w=c*p;e[0]=h+w*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=_*o-v,e[6]=w+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*d,_=l*p,v=c*d,w=c*p;e[0]=h-w*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*d,e[9]=w-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*d,_=a*p,v=o*d,w=o*p;e[0]=l*d,e[4]=v*c-_,e[8]=h*c+w,e[1]=l*p,e[5]=w*c+h,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,_=a*c,v=o*l,w=o*c;e[0]=l*d,e[4]=w-h*p,e[8]=v*p+_,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=_*p+v,e[10]=h-w*p}else if(t.order==="XZY"){let h=a*l,_=a*c,v=o*l,w=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=h*p+w,e[5]=a*d,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*d,e[10]=w*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Zh)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Yn.crossVectors(n,We),Yn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Yn.crossVectors(n,We)),Yn.normalize(),hr.crossVectors(We,Yn),s[0]=Yn.x,s[4]=hr.x,s[8]=We.x,s[1]=Yn.y,s[5]=hr.y,s[9]=We.y,s[2]=Yn.z,s[6]=hr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],_=n[13],v=n[2],w=n[6],g=n[10],f=n[14],E=n[3],N=n[7],S=n[11],b=n[15],A=s[0],P=s[4],x=s[8],T=s[12],U=s[1],B=s[5],V=s[9],H=s[13],D=s[2],G=s[6],J=s[10],Z=s[14],it=s[3],$=s[7],Q=s[11],nt=s[15];return r[0]=a*A+o*U+l*D+c*it,r[4]=a*P+o*B+l*G+c*$,r[8]=a*x+o*V+l*J+c*Q,r[12]=a*T+o*H+l*Z+c*nt,r[1]=d*A+p*U+h*D+_*it,r[5]=d*P+p*B+h*G+_*$,r[9]=d*x+p*V+h*J+_*Q,r[13]=d*T+p*H+h*Z+_*nt,r[2]=v*A+w*U+g*D+f*it,r[6]=v*P+w*B+g*G+f*$,r[10]=v*x+w*V+g*J+f*Q,r[14]=v*T+w*H+g*Z+f*nt,r[3]=E*A+N*U+S*D+b*it,r[7]=E*P+N*B+S*G+b*$,r[11]=E*x+N*V+S*J+b*Q,r[15]=E*T+N*H+S*Z+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],h=t[10],_=t[14],v=t[3],w=t[7],g=t[11],f=t[15],E=l*_-c*h,N=o*_-c*p,S=o*h-l*p,b=a*_-c*d,A=a*h-l*d,P=a*p-o*d;return e*(w*E-g*N+f*S)-n*(v*E-g*b+f*A)+s*(v*N-w*b+f*P)-r*(v*S-w*A+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],h=t[10],_=t[11],v=t[12],w=t[13],g=t[14],f=t[15],E=e*o-n*a,N=e*l-s*a,S=e*c-r*a,b=n*l-s*o,A=n*c-r*o,P=s*c-r*l,x=d*w-p*v,T=d*g-h*v,U=d*f-_*v,B=p*g-h*w,V=p*f-_*w,H=h*f-_*g,D=E*H-N*V+S*B+b*U-A*T+P*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(o*H-l*V+c*B)*G,t[1]=(s*V-n*H-r*B)*G,t[2]=(w*P-g*A+f*b)*G,t[3]=(h*A-p*P-_*b)*G,t[4]=(l*U-a*H-c*T)*G,t[5]=(e*H-s*U+r*T)*G,t[6]=(g*S-v*P-f*N)*G,t[7]=(d*P-h*S+_*N)*G,t[8]=(a*V-o*U+c*x)*G,t[9]=(n*U-e*V-r*x)*G,t[10]=(v*A-w*S+f*E)*G,t[11]=(p*S-d*A-_*E)*G,t[12]=(o*T-a*B-l*x)*G,t[13]=(e*B-n*T+s*x)*G,t[14]=(w*N-v*b-g*E)*G,t[15]=(d*b-p*N+h*E)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,p=o+o,h=r*c,_=r*d,v=r*p,w=a*d,g=a*p,f=o*p,E=l*c,N=l*d,S=l*p,b=n.x,A=n.y,P=n.z;return s[0]=(1-(w+f))*b,s[1]=(_+S)*b,s[2]=(v-N)*b,s[3]=0,s[4]=(_-S)*A,s[5]=(1-(h+f))*A,s[6]=(g+E)*A,s[7]=0,s[8]=(v+N)*P,s[9]=(g-E)*P,s[10]=(1-(h+w))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Di.set(s[0],s[1],s[2]).length(),o=Di.set(s[4],s[5],s[6]).length(),l=Di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,d=1/o,p=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=p,an.elements[9]*=p,an.elements[10]*=p,e.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=hn,l=!1){let c=this.elements,d=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),_=(n+s)/(n-s),v,w;if(l)v=r/(a-r),w=a*r/(a-r);else if(o===hn)v=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===$i)v=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn,l=!1){let c=this.elements,d=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),_=-(n+s)/(n-s),v,w;if(l)v=1/(a-r),w=a/(a-r);else if(o===hn)v=-2/(a-r),w=-(a+r)/(a-r);else if(o===$i)v=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ha.prototype.isMatrix4=!0;var oe=ha,Di=new k,an=new oe,$h=new k(0,0,0),Zh=new k(1,1,1),Yn=new k,hr=new k,We=new k,Kl=new oe,jl=new yn,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],h=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,_),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jh=0,Ql=new k,Ni=new yn,Pn=new oe,ur=new k,gs=new k,Kh=new k,jh=new yn,tc=new k(1,0,0),ec=new k(0,1,0),nc=new k(0,0,1),ic={type:"added"},Qh={type:"removed"},Ui={type:"childadded",child:null},Mo={type:"childremoved",child:null},we=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Sn,n=new yn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(gs,ur,this.up):Pn.lookAt(ur,gs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),h=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new k(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},tu={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,n),f=this._getHandJoint(c,w);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&h>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},dr={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Wh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bo(a,r,t+1/3),this.g=bo(a,r,t),this.b=bo(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return qt.workingToColorSpace(Ie.copy(this),t),Math.round(Yt(Ie.r*255,0,255))*65536+Math.round(Yt(Ie.g*255,0,255))*256+Math.round(Yt(Ie.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Fe){qt.workingToColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(dr);let n=_o($n.h,dr.h,e),s=_o($n.s,dr.s,e),r=_o($n.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Lt;Lt.NAMES=th;var Cs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},on=new k,In=new k,wo=new k,Ln=new k,Fi=new k,Oi=new k,sc=new k,Ao=new k,To=new k,Eo=new k,Co=new se,Ro=new se,Po=new se,jn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),In.subVectors(n,e),wo.subVectors(t,e);let a=on.dot(on),o=on.dot(In),l=on.dot(wo),c=In.dot(In),d=In.dot(wo),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,_=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-_-v,v,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Ro.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Ro,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),In.subVectors(t,e),on.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),In.subVectors(this.a,this.b),on.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),Ao.subVectors(t,n);let l=Fi.dot(Ao),c=Oi.dot(Ao);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,s);let d=Fi.dot(To),p=Oi.dot(To);if(d>=0&&p<=d)return e.copy(s);let h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Fi,a);Eo.subVectors(t,r);let _=Fi.dot(Eo),v=Oi.dot(Eo);if(v>=0&&_<=v)return e.copy(r);let w=_*c-l*v;if(w<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Oi,o);let g=d*v-_*p;if(g<=0&&p-d>=0&&_-v>=0)return sc.subVectors(r,s),o=(p-d)/(p-d+(_-v)),e.copy(s).addScaledVector(sc,o);let f=1/(g+w+h);return a=w*f,o=h*f,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),pr.subVectors(this.max,_s),Bi.subVectors(t.a,_s),zi.subVectors(t.b,_s),ki.subVectors(t.c,_s),Zn.subVectors(zi,Bi),Jn.subVectors(ki,zi),mi.subVectors(Bi,ki);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-mi.z,mi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,mi.z,0,-mi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-mi.y,mi.x,0];return!Io(e,Bi,zi,ki,pr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,Bi,zi,ki,pr))?!1:(mr.crossVectors(Zn,Jn),e=[mr.x,mr.y,mr.z],Io(e,Bi,zi,ki,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new k,new k,new k,new k,new k,new k,new k,new k],ln=new k,fr=new Mn,Bi=new k,zi=new k,ki=new k,Zn=new k,Jn=new k,mi=new k,_s=new k,pr=new k,mr=new k,gi=new k;function Io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),d=n.dot(gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var ge=new k,gr=new Gt,eu=0,Te=class extends vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ps=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var je=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},nu=new Mn,xs=new k,Lo=new k,Qn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Lo)),this.expandByPoint(xs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},iu=0,Ke=new oe,Do=new we,Vi=new k,Xe=new Mn,vs=new Mn,Me=new k,Qe=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Is:Ps)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Xe.min,vs.min),Xe.expandByPoint(Me),Me.addVectors(Xe.max,vs.max),Xe.expandByPoint(Me)):(Xe.expandByPoint(vs.min),Xe.expandByPoint(vs.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Me.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Me.add(Vi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new k,l[x]=new k;let c=new k,d=new k,p=new k,h=new Gt,_=new Gt,v=new Gt,w=new k,g=new k;function f(x,T,U){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,T),p.fromBufferAttribute(n,U),h.fromBufferAttribute(r,x),_.fromBufferAttribute(r,T),v.fromBufferAttribute(r,U),d.sub(c),p.sub(c),_.sub(h),v.sub(h);let B=1/(_.x*v.y-v.x*_.y);isFinite(B)&&(w.copy(d).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(B),g.copy(p).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(B),o[x].add(w),o[T].add(w),o[U].add(w),l[x].add(g),l[T].add(g),l[U].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){let U=E[x],B=U.start,V=U.count;for(let H=B,D=B+V;H<D;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let N=new k,S=new k,b=new k,A=new k;function P(x){b.fromBufferAttribute(s,x),A.copy(b);let T=o[x];N.copy(T),N.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(A,T);let B=S.dot(l[x])<0?-1:1;a.setXYZW(x,N.x,N.y,N.z,B)}for(let x=0,T=E.length;x<T;++x){let U=E[x],B=U.start,V=U.count;for(let H=B,D=B+V;H<D;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,_=n.count;h<_;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,d=new k,p=new k;if(t)for(let h=0,_=t.count;h<_;h+=3){let v=t.getX(h+0),w=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,g),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,_=e.count;h<_;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d),_=0,v=0;for(let w=0,g=l.length;w<g;w++){o.isInterleavedBufferAttribute?_=l[w]*o.data.stride+o.offset:_=l[w]*d;for(let f=0;f<d;f++)h[v++]=c[_++]}return new Te(h,d,p)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let h=c[d],_=t(h,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){let _=c[p];d.push(_.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],p=r[c];for(let h=0,_=p.length;h<_;h++)d.push(p[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var No=new k,su=new k,ru=new Ft,cn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(No),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ru.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},au=0,bn=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=es,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new k,Uo=new k,_r=new k,xr=new k,qr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(Uo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=xr.dot(this.direction),l=-xr.dot(_r),c=xr.lengthSq(),d=Math.abs(1-a*a),p,h,_,v;if(d>0)if(p=a*l-o,h=a*o-l,v=r*d,p>=0)if(h>=-v)if(h<=v){let w=1/d;p*=w,h*=w,_=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),_=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-r,-l),r),_=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),_=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Uo).addScaledVector(_r,h),_}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=t.x-a.x,h=t.y-a.y,_=t.z-a.z,v=e.x-a.x,w=e.y-a.y,g=e.z-a.z,f=n.x-a.x,E=n.y-a.y,N=n.z-a.z,S=Math.abs(l),b=Math.abs(c),A=Math.abs(d),P,x,T,U,B,V,H,D,G,J,Z,it;if(S>=b&&S>=A?(T=l,V=p,G=v,it=f,l>=0?(P=c,x=d,U=h,B=_,H=w,D=g,J=E,Z=N):(P=d,x=c,U=_,B=h,H=g,D=w,J=N,Z=E)):b>=A?(T=c,V=h,G=w,it=E,c>=0?(P=d,x=l,U=_,B=p,H=g,D=v,J=N,Z=f):(P=l,x=d,U=p,B=_,H=v,D=g,J=f,Z=N)):(T=d,V=_,G=g,it=N,d>=0?(P=l,x=c,U=p,B=h,H=v,D=w,J=f,Z=E):(P=c,x=l,U=h,B=p,H=w,D=v,J=E,Z=f)),T===0)return null;let $=P/T,Q=x/T,nt=1/T,Ct=U-$*V,_t=B-Q*V,Ht=H-$*G,Dt=D-Q*G,Wt=J-$*it,q=Z-Q*it,j=Wt*Dt-q*Ht,St=Ct*q-_t*Wt,Nt=Ht*_t-Dt*Ct;if(s){if(j<0||St<0||Nt<0)return null}else if((j<0||St<0||Nt<0)&&(j>0||St>0||Nt>0))return null;let vt=j+St+Nt;if(vt===0)return null;let Ot=nt*(j*V+St*G+Nt*it);return(vt>0?Ot<0:Ot>0)?null:this.at(Ot/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rc=new oe,_i=new qr,vr=new Qn,ac=new k,yr=new k,Sr=new k,Mr=new k,Fo=new k,br=new k,oc=new k,wr=new k,_e=class extends we{constructor(t=new Qe,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&(Fo.fromBufferAttribute(p,t),a?br.addScaledVector(Fo,d):br.addScaledVector(Fo.sub(e),d))}e.add(br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(vr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(vr,ac)===null||_i.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=h.length;v<w;v++){let g=h[v],f=a[g.materialIndex],E=Math.max(g.start,_.start),N=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let S=E,b=N;S<b;S+=3){let A=o.getX(S),P=o.getX(S+1),x=o.getX(S+2);s=Ar(this,f,t,n,c,d,p,A,P,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),w=Math.min(o.count,_.start+_.count);for(let g=v,f=w;g<f;g+=3){let E=o.getX(g),N=o.getX(g+1),S=o.getX(g+2);s=Ar(this,a,t,n,c,d,p,E,N,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,w=h.length;v<w;v++){let g=h[v],f=a[g.materialIndex],E=Math.max(g.start,_.start),N=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let S=E,b=N;S<b;S+=3){let A=S,P=S+1,x=S+2;s=Ar(this,f,t,n,c,d,p,A,P,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,_.start),w=Math.min(l.count,_.start+_.count);for(let g=v,f=w;g<f;g+=3){let E=g,N=g+1,S=g+2;s=Ar(this,a,t,n,c,d,p,E,N,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ou(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,yr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,Mr);let d=ou(i,t,e,n,yr,Sr,Mr,oc);if(d){let p=new k;jn.getBarycoord(oc,yr,Sr,Mr,p),s&&(d.uv=jn.getInterpolatedAttribute(s,o,l,c,p,new Gt)),r&&(d.uv1=jn.getInterpolatedAttribute(r,o,l,c,p,new Gt)),a&&(d.normal=jn.getInterpolatedAttribute(a,o,l,c,p,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new k,materialIndex:0};jn.getNormal(yr,Sr,Mr,h.normal),d.face=h,d.barycoord=p}return d}var Ls=class extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=be,d=be,p,h){super(null,a,o,l,c,d,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new oe,lc=new oe,Tr=[],cc=new Mn,lu=new oe,ys=new _e,Ss=new Qn,Ds=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),cc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(cc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Ss.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),lc.multiplyMatrices(n,Gi),ys.matrixWorld=lc,ys.raycast(t,Tr);for(let a=0,o=Tr.length;a<o;a++){let l=Tr[a];l.instanceId=r,l.object=this,e.push(l)}Tr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,_a,en));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Qn,cu=new Gt(.5,.5),Er=new k,ji=class{constructor(t=new cn,e=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],_=r[7],v=r[8],w=r[9],g=r[10],f=r[11],E=r[12],N=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-a,_-d,f-v,b-E).normalize(),s[1].setComponents(c+a,_+d,f+v,b+E).normalize(),s[2].setComponents(c+o,_+p,f+w,b+N).normalize(),s[3].setComponents(c-o,_-p,f-w,b-N).normalize(),n)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,_-h,f-g,b-S).normalize();else if(s[4].setComponents(c-l,_-h,f-g,b-S).normalize(),e===hn)s[5].setComponents(c+l,_+h,f+g,b+S).normalize();else if(e===$i)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=cu.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ns=class extends Oe{constructor(t=[],e=ri,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Us=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends Oe{constructor(t,e,n=dn,s,r,a,o=be,l=be,c,d=xn,p=1){if(d!==xn&&d!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yr=class extends ti{constructor(t,e=dn,n=ri,s,r,a=be,o=be,l,c=xn){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fs=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},On=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],p=[],h=0,_=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(p,2));function v(w,g,f,E,N,S,b,A,P,x,T){let U=S/P,B=b/x,V=S/2,H=b/2,D=A/2,G=P+1,J=x+1,Z=0,it=0,$=new k;for(let Q=0;Q<J;Q++){let nt=Q*B-H;for(let Ct=0;Ct<G;Ct++){let _t=Ct*U-V;$[w]=_t*E,$[g]=nt*N,$[f]=D,c.push($.x,$.y,$.z),$[w]=0,$[g]=0,$[f]=A>0?1:-1,d.push($.x,$.y,$.z),p.push(Ct/P),p.push(1-Q/x),Z+=1}}for(let Q=0;Q<x;Q++)for(let nt=0;nt<P;nt++){let Ct=h+nt+G*Q,_t=h+nt+G*(Q+1),Ht=h+(nt+1)+G*(Q+1),Dt=h+(nt+1)+G*Q;l.push(Ct,_t,Dt),l.push(_t,Ht,Dt),it+=6}o.addGroup(_,it,T),_+=it,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bn=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,p=t/o,h=e/l,_=[],v=[],w=[],g=[];for(let f=0;f<d;f++){let E=f*h-a;for(let N=0;N<c;N++){let S=N*p-r;v.push(S,-E,0),w.push(0,0,1),g.push(N/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let N=E+c*f,S=E+c*(f+1),b=E+1+c*(f+1),A=E+1+c*f;_.push(N,S,A),_.push(S,b,A)}this.setIndex(_),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(w,3)),this.setAttribute("uv",new je(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Os=class extends bn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Lt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hc(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function De(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var eh={clone:wi,merge:De},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$r=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bs=class extends bn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ws,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var tn=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ws,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zr=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jr=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Oo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kr=class extends ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ko,endingEnd:ko}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vo:r=t,o=2*e-n;break;case Go:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:a=t,l=2*n-e;break;case Go:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,_=this._weightNext,v=(n-e)/(s-e),w=v*v,g=w*v,f=-h*g+2*h*w-h*v,E=(1+h)*g+(-1.5-2*h)*w+(-.5+h)*v+1,N=(-1-_)*g+(1.5+_)*w+.5*v,S=_*g-_*w;for(let b=0;b!==o;++b)r[b]=f*a[d+b]+E*a[c+b]+N*a[l+b]+S*a[p+b];return r}},jr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),p=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*p+a[l+h]*d;return r}},Qr=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ta=class extends ei{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let v=(n-e)/(s-e),w=1-v;for(let g=0;g!==o;++g)r[g]=a[c+g]*w+a[l+g]*v;return r}let h=o*2,_=t-1;for(let v=0;v!==o;++v){let w=a[c+v],g=a[l+v],f=_*h+v*2,E=p[f],N=p[f+1],S=t*h+v*2,b=d[S],A=d[S+1],P=pu(n,e,E,b,s);r[v]=nh(P,w,N,A,g)}return r}};function nh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=nh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=fu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hi(e,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hi(t.times,Array),values:Hi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Oo(t.settings)&&(n.settings={inTangents:Hi(t.settings.inTangents,Array),outTangents:Hi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Pr:e=this.InterpolantFactoryMethodSmooth;break;case zo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Pr;case this.InterpolantFactoryMethodBezier:return zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Oo(this.settings)&&(uc(this.settings.inTangents,t),uc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,h=p-n,_=p+n;for(let v=0;v!==n;++v){let w=e[p+v];if(w!==e[h+v]||w!==e[_+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let _=0;_!==n;++_)e[h+_]=e[p+_]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Vr;var ni=class extends Ye{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ms;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="color";var na=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="number";var ia=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ia(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Ye{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ms;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Ye{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="vector";var ra=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=c.length;p<h;p+=2){let _=c[p],v=c[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ih=new ra,aa=class{constructor(t){this.manager=t!==void 0?t:ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vs=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bo=new oe,dc=new k,fc=new k,oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Ve,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$i||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Cr=new k,Rr=new yn,mn=new k,Gs=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cr,Rr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Rr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cr,Rr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Rr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new k,pc=new Gt,mc=new Gt,Le=class extends Gs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qi=class extends Gs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ho=class extends oa{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ho}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Wi=-90,Xi=1,la=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Wi,Xi,t,e);s.layers=this.layers,this.add(s);let r=new Le(Wi,Xi,t,e);r.layers=this.layers,this.add(r);let a=new Le(Wi,Xi,t,e);a.layers=this.layers,this.add(a);let o=new Le(Wi,Xi,t,e);o.layers=this.layers,this.add(o);let l=new Le(Wi,Xi,t,e);l.layers=this.layers,this.add(l);let c=new Le(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,h,_),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ca=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ml="\\[\\]\\.:\\/",mu=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",gu="[^"+ml.replace("\\.","")+"]",_u=/((?:WC+[\/:])*)/.source.replace("WC",gl),xu=/(WCOD+)?/.source.replace("WCOD",gu),vu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),yu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),Su=new RegExp("^"+_u+xu+vu+yu+"$"),Mu=["material","materials","bones","map"],Wo=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mu,"")}static parseTrackName(t){let e=Su.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Wo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lg=new Float32Array(1);var Ml=class Ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ml.prototype.isMatrix2=!0;var Xo=Ml;function _l(i,t,e,n){let s=bu(n);switch(e){case hl:return i*t;case _a:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case va:return i*t*2/s.components*s.byteLength;case ul:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ta:case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ks:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case js:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bu(i){switch(i){case Ve:case al:return{byteLength:1,components:1};case ns:case ol:case fn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case dn:case pa:case en:return{byteLength:4,components:1};case ll:case cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ah(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((_,v)=>_.start-v.start);let h=0;for(let _=1;_<p.length;_++){let v=p[h],w=p[_];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++h,p[h]=w)}p.length=h+1;for(let _=0,v=p.length;_<v;_++){let w=p[_];i.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
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
#endif`,wd=`uniform sampler2D dfgLUT;
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
}`,Ad=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Uf=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define PHONG
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
}`,Kf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,tp=`#define TOON
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
}`,ep=`uniform float size;
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#include <common>
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
}`,sp=`uniform vec3 color;
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
}`,rp=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Tu,alphahash_pars_fragment:Eu,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Pu,alphatest_pars_fragment:Iu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Nu,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:$u,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Ku,displacementmap_pars_vertex:ju,displacementmap_vertex:Qu,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:dd,gradientmap_pars_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:vd,lights_toon_pars_fragment:yd,lights_phong_fragment:Sd,lights_phong_pars_fragment:Md,lights_physical_fragment:bd,lights_physical_pars_fragment:wd,lights_fragment_begin:Ad,lights_fragment_maps:Td,lights_fragment_end:Ed,lightprobes_pars_fragment:Cd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Ld,map_fragment:Dd,map_pars_fragment:Nd,map_particle_fragment:Ud,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:zd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Hd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:$d,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:yf,transmission_fragment:Sf,transmission_pars_fragment:Mf,uv_pars_fragment:bf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Tf,background_vert:Ef,background_frag:Cf,backgroundCube_vert:Rf,backgroundCube_frag:Pf,cube_vert:If,cube_frag:Lf,depth_vert:Df,depth_frag:Nf,distance_vert:Uf,distance_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Vf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:$f,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:Kf,meshphysical_frag:jf,meshtoon_vert:Qf,meshtoon_frag:tp,points_vert:ep,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:ap},gt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},En={basic:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:De([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:De([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:De([gt.points,gt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:De([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:De([gt.common,gt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:De([gt.sprite,gt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:De([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:De([gt.lights,gt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};En.physical={uniforms:De([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Qa={r:0,b:0,g:0},op=new oe,Th=new Ft;Th.set(-1,0,0,0,1,0,0,0,1);function lp(i,t,e,n,s,r){let a=new Lt(0),o=s===!0?0:1,l,c,d=null,p=0,h=null;function _(E){let N=E.isScene===!0?E.background:null;if(N&&N.isTexture){let S=E.backgroundBlurriness>0;N=t.get(N,S)}return N}function v(E){let N=!1,S=_(E);S===null?g(a,o):S&&S.isColor&&(g(S,1),N=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(E,N){let S=_(N);S&&(S.isCubeTexture||S.mapping===Xs)?(c===void 0&&(c=new _e(new On(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:wi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(N.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Th),c.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,(d!==S||p!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _e(new Bn(2,2),new qe({name:"BackgroundMaterial",uniforms:wi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,N){E.getRGB(Qa,pl(i)),e.buffers.color.setClear(Qa.r,Qa.g,Qa.b,N,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,N=1){a.set(E),o=N,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:v,addToRenderList:w,dispose:f}}function cp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(B,V,H,D,G){let J=!1,Z=p(B,D,H,V);r!==Z&&(r=Z,c(r.object)),J=_(B,D,H,G),J&&v(B,D,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(B,V,H,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function d(B){return i.deleteVertexArray(B)}function p(B,V,H,D){let G=D.wireframe===!0,J=n[V.id];J===void 0&&(J={},n[V.id]=J);let Z=B.isInstancedMesh===!0?B.id:0,it=J[Z];it===void 0&&(it={},J[Z]=it);let $=it[H.id];$===void 0&&($={},it[H.id]=$);let Q=$[G];return Q===void 0&&(Q=h(l()),$[G]=Q),Q}function h(B){let V=[],H=[],D=[];for(let G=0;G<e;G++)V[G]=0,H[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:D,object:B,attributes:{},index:null}}function _(B,V,H,D){let G=r.attributes,J=V.attributes,Z=0,it=H.getAttributes();for(let $ in it)if(it[$].location>=0){let nt=G[$],Ct=J[$];if(Ct===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(Ct=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(Ct=B.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function v(B,V,H,D){let G={},J=V.attributes,Z=0,it=H.getAttributes();for(let $ in it)if(it[$].location>=0){let nt=J[$];nt===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor));let Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),G[$]=Ct,Z++}r.attributes=G,r.attributesNum=Z,r.index=D}function w(){let B=r.newAttributes;for(let V=0,H=B.length;V<H;V++)B[V]=0}function g(B){f(B,0)}function f(B,V){let H=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;H[B]=1,D[B]===0&&(i.enableVertexAttribArray(B),D[B]=1),G[B]!==V&&(i.vertexAttribDivisor(B,V),G[B]=V)}function E(){let B=r.newAttributes,V=r.enabledAttributes;for(let H=0,D=V.length;H<D;H++)V[H]!==B[H]&&(i.disableVertexAttribArray(H),V[H]=0)}function N(B,V,H,D,G,J,Z){Z===!0?i.vertexAttribIPointer(B,V,H,G,J):i.vertexAttribPointer(B,V,H,D,G,J)}function S(B,V,H,D){w();let G=D.attributes,J=H.getAttributes(),Z=V.defaultAttributeValues;for(let it in J){let $=J[it];if($.location>=0){let Q=G[it];if(Q===void 0&&(it==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),it==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){let nt=Q.normalized,Ct=Q.itemSize,_t=t.get(Q);if(_t===void 0)continue;let Ht=_t.buffer,Dt=_t.type,Wt=_t.bytesPerElement,q=Dt===i.INT||Dt===i.UNSIGNED_INT||Q.gpuType===pa;if(Q.isInterleavedBufferAttribute){let j=Q.data,St=j.stride,Nt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let vt=0;vt<$.locationSize;vt++)f($.location+vt,j.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let vt=0;vt<$.locationSize;vt++)g($.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let vt=0;vt<$.locationSize;vt++)N($.location+vt,Ct/$.locationSize,Dt,nt,St*Wt,(Nt+Ct/$.locationSize*vt)*Wt,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)f($.location+j,Q.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<$.locationSize;j++)g($.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let j=0;j<$.locationSize;j++)N($.location+j,Ct/$.locationSize,Dt,nt,Ct*Wt,Ct/$.locationSize*j*Wt,q)}}else if(Z!==void 0){let nt=Z[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv($.location,nt);break;case 3:i.vertexAttrib3fv($.location,nt);break;case 4:i.vertexAttrib4fv($.location,nt);break;default:i.vertexAttrib1fv($.location,nt)}}}}E()}function b(){T();for(let B in n){let V=n[B];for(let H in V){let D=V[H];for(let G in D){let J=D[G];for(let Z in J)d(J[Z].object),delete J[Z];delete D[G]}}delete n[B]}}function A(B){if(n[B.id]===void 0)return;let V=n[B.id];for(let H in V){let D=V[H];for(let G in D){let J=D[G];for(let Z in J)d(J[Z].object),delete J[Z];delete D[G]}}delete n[B.id]}function P(B){for(let V in n){let H=n[V];for(let D in H){let G=H[D];if(G[B.id]===void 0)continue;let J=G[B.id];for(let Z in J)d(J[Z].object),delete J[Z];delete G[B.id]}}}function x(B){for(let V in n){let H=n[V],D=B.isInstancedMesh===!0?B.id:0,G=H[D];if(G!==void 0){for(let J in G){let Z=G[J];for(let it in Z)d(Z[it].object),delete Z[it];delete G[J]}delete H[D],Object.keys(H).length===0&&delete n[V]}}}function T(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:g,disableUnusedAttributes:E}}function hp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let _=0;_<d;_++)h+=c[_];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let x=P===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ve&&P!==en&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Pt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:_,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:E,maxVaryings:N,maxFragmentUniforms:S,maxSamples:b,samples:A}}function dp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new cn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let _=p.length!==0||h||n!==0||s;return s=h,n=p.length,_},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=d(p,h,0)},this.setState=function(p,h,_){let v=p.clippingPlanes,w=p.clipIntersection,g=p.clipShadows,f=i.get(p);if(!s||v===null||v.length===0||r&&!g)r?d(null):c();else{let E=r?0:n,N=E*4,S=f.clippingState||null;l.value=S,S=d(v,h,N,_);for(let b=0;b!==N;++b)S[b]=e[b];f.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,h,_,v){let w=p!==null?p.length:0,g=null;if(w!==0){if(g=l.value,v!==!0||g===null){let f=_+w*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let N=0,S=_;N!==w;++N,S+=4)a.copy(p[N]).applyMatrix4(E,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var rs=4,fp=6,pp=20,mp=256,er=new Qi,sh=new Lt,bl=null,wl=0,Al=0,Tl=!1,gp=new k,Ai=new k,eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=gp}=r;bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,wl,Al),this._renderer.xr.enabled=Tl,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:fn,format:nn,colorSpace:bs,depthBuffer:!1},s=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_p(r)),this._blurMaterial=vp(r,t,e),this._ggxMaterial=xp(r,t,e)}return s}_compileMaterial(t){let e=new _e(new Qe,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s,r){let l=new Le(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,_=p.toneMapping;p.getClearColor(sh),p.toneMapping=un,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new On,new yi({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,g=w.material,f=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,f=!0):(g.color.copy(sh),f=!0);for(let N=0;N<6;N++){let S=N%3;S===0?(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[N],r.y,r.z)):S===1?(l.up.set(0,0,c[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[N],r.z)):(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[N]));let b=this._cubeSize;ss(s,S*b,N>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(w,l),p.render(t,l)}p.toneMapping=_,p.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ri||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=c*1.25,_=p*h,{_lodMax:v}=this,w=this._sizeLods[n],g=3*w*(n>v-rs?n-v+rs:0),f=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,ss(r,g,f,3*w,2*w),s.setRenderTarget(r),s.render(o,er),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,ss(t,g,f,3*w,2*w),s.setRenderTarget(t),s.render(o,er)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-rs?s-this._lodMax+rs:0),h=4*(this._cubeSize-d);ss(e,p,h,3*d,2*d),a.setRenderTarget(e),a.render(l,er)}};function _p(i){let t=[],e=[],n=i,s=i-rs+1+fp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,_=3,v=new Float32Array(_*h*p),w=new Float32Array(_*h*p);for(let f=0;f<p;f++){let E=f%3*2/3-1,N=f>2?0:-1,S=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];v.set(S,_*h*f);for(let b=0;b<h;b++){let A=d[b*2]*2-1,P=d[b*2+1]*2-1;f===0?Ai.set(1,P,A):f===1?Ai.set(-A,1,-P):f===2?Ai.set(-A,P,1):f===3?Ai.set(-1,P,-A):f===4?Ai.set(-A,-1,P):Ai.set(A,P,-1),Ai.toArray(w,(f*h+b)*_)}}let g=new Qe;g.setAttribute("position",new Te(v,_)),g.setAttribute("outputDirection",new Te(w,_)),e.push(new _e(g,null)),n>rs&&n--}return{lodMeshes:e,sizeLods:t}}function rh(i,t,e){let n=new ke(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xp(i,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function vp(i,t,e){return new qe({name:"SphericalGaussianBlur",defines:{SAMPLES:pp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ah(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function oh(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var no=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ns(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:An});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Ee),new la(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function yp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,_=!1){return h==null?null:_?a(h):r(h)}function r(h){if(h&&h.isTexture){let _=h.mapping;if(_===ua||_===da)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let w=new no(v.height);return w.fromEquirectangularTexture(i,h),t.set(h,w),h.addEventListener("dispose",c),o(w.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let _=h.mapping,v=_===ua||_===da,w=_===ri||_===bi;if(v||w){let g=e.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new eo(i)),g=v?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return v&&E&&E.height>0||w&&E&&l(E)?(n===null&&(n=new eo(i)),g=v?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,_){return _===ua?h.mapping=ri:_===da&&(h.mapping=bi),h}function l(h){let _=0,v=6;for(let w=0;w<v;w++)h[w]!==void 0&&_++;return _===v}function c(h){let _=h.target;_.removeEventListener("dispose",c);let v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function d(h){let _=h.target;_.removeEventListener("dispose",d);let v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Sp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let _=r.get(h);_&&(t.remove(_),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(p){let h=p.attributes;for(let _ in h)t.update(h[_],i.ARRAY_BUFFER)}function c(p){let h=[],_=p.index,v=p.attributes.position,w=0;if(v===void 0)return;if(_!==null){let E=_.array;w=_.version;for(let N=0,S=E.length;N<S;N+=3){let b=E[N+0],A=E[N+1],P=E[N+2];h.push(b,A,A,P,P,b)}}else{let E=v.array;w=v.version;for(let N=0,S=E.length/3-1;N<S;N+=3){let b=N+0,A=N+1,P=N+2;h.push(b,A,A,P,P,b)}}let g=new(v.count>=65535?Is:Ps)(h,1);g.version=w;let f=r.get(p);f&&t.remove(f),r.set(p,g)}function d(p){let h=r.get(p);if(h){let _=p.index;_!==null&&h.version<_.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function bp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function c(p,h,_){_!==0&&(i.drawElementsInstanced(n,h,r,p*a,_),e.update(h,n,_))}function d(p,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,_);let w=0;for(let g=0;g<_;g++)w+=h[g];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ap(i,t,e){let n=new WeakMap,s=new se;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],N=0;_===!0&&(N=1),v===!0&&(N=2),w===!0&&(N=3);let S=o.attributes.position.count*N,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*b*4*p),P=new Ts(A,S,b,p);P.type=en,P.needsUpdate=!0;let x=N*4;for(let U=0;U<p;U++){let B=g[U],V=f[U],H=E[U],D=S*b*4*U;for(let G=0;G<B.count;G++){let J=G*x;_===!0&&(s.fromBufferAttribute(B,G),A[D+J+0]=s.x,A[D+J+1]=s.y,A[D+J+2]=s.z,A[D+J+3]=0),v===!0&&(s.fromBufferAttribute(V,G),A[D+J+4]=s.x,A[D+J+5]=s.y,A[D+J+6]=s.z,A[D+J+7]=0),w===!0&&(s.fromBufferAttribute(H,G),A[D+J+8]=s.x,A[D+J+9]=s.y,A[D+J+10]=s.z,A[D+J+11]=H.itemSize===4?s.w:1)}}h={count:p,texture:P,size:new Gt(S,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let w=0;w<c.length;w++)_+=c[w];let v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Tp(i,t,e,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,p=c.geometry,h=t.get(c,p);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let _=c.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var Ep={[jo]:"LINEAR_TONE_MAPPING",[Qo]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Cp(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qe;c.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new je([0,2,0,0,2,0],2));let d=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _e(c,d),h=new Qi(-1,1,1,-1,0,1),_=null,v=null,w=!1,g,f=null,E=[],N=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let A=0;A<E.length;A++){let P=E[A];P.setSize&&P.setSize(S,b)}},this.setEffects=function(S){E=S,N=E.length>0&&E[0].isRenderPass===!0;let b=a.width,A=a.height;E.length>0&&o===null&&(o=new ke(b,A,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new ke(b,A,{type:fn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let x=E[P];x.setSize&&x.setSize(b,A)}},this.begin=function(S,b){if(w||S.toneMapping===un&&E.length===0)return!1;if(f=b,b!==null){let A=b.width,P=b.height;(a.width!==A||a.height!==P)&&this.setSize(A,P)}return N===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=un,!0},this.hasRenderPass=function(){return N},this.end=function(S,b){S.toneMapping=g,w=!0;let A=a,P=o;for(let x=0;x<E.length;x++){let T=E[x];T.enabled!==!1&&(T.render(S,P,A,b),T.needsSwap!==!1&&(A=P,P=P===o?l:o))}if(_!==S.outputColorSpace||v!==S.toneMapping){_=S.outputColorSpace,v=S.toneMapping,d.defines={},qt.getTransfer(_)===te&&(d.defines.SRGB_TRANSFER="");let x=Ep[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(f),S.render(p,h),f=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Eh=new Oe,Rl=new ti(1,1),Ch=new Ts,Rh=new Xr,Ph=new Ns,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),ye(e,n)}}function Np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),ye(e,n)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),ye(e,n)}}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rl.compareFunction=e.isReversedDepthBuffer()?ja:Ka,r=Rl):r=Eh,e.setTexture2D(t||r,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ph,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function $p(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Ip;case 35666:return Lp;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Vp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Jp(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rl:a=Eh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rh,r[a])}function dm(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ph,r[a])}function fm(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ch,r[a])}function pm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var Pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},Ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},El=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function mm(i,t,e){let n=i.name,s=n.length;for(El.lastIndex=0;;){let r=El.exec(n),a=El.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fh(e,c===void 0?new Pl(o,i,t):new Il(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Ll(o),fh(e,p)),e=p}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gm=37297,_m=0;function xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mh=new Ft;function vm(i){qt._getMatrix(mh,qt.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xm(i.getShaderSource(t),o)}else return r}function ym(i,t){let e=vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sm={[jo]:"Linear",[Qo]:"Reinhard",[tl]:"Cineon",[el]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function Mm(i,t){let e=Sm[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var to=new k;function bm(){qt.getLuminanceCoefficients(to);let i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Am(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function _h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(Em,Rm)}var Cm=new Map;function Rm(i,t){let e=kt[t];if(e===void 0){let n=Cm.get(t);if(n!==void 0)e=kt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dl(e)}var Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(Pm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Lm={[Si]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function Dm(i){return Lm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nm={[ri]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE_UV"};function Um(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fm={[bi]:"ENVMAP_MODE_REFRACTION"};function Om(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bm={[Ws]:"ENVMAP_BLENDING_MULTIPLY",[Oc]:"ENVMAP_BLENDING_MIX",[Bc]:"ENVMAP_BLENDING_ADD"};function zm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bm[i.combine]||"ENVMAP_BLENDING_NONE"}function km(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dm(e),c=Um(e),d=Om(e),p=zm(e),h=km(e),_=wm(e),v=Am(r),w=s.createProgram(),g,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ir).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(g=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?kt.tonemapping_pars_fragment:"",e.toneMapping!==un?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=Dl(a),a=_h(a,e),a=xh(a,e),o=Dl(o),o=_h(o,e),o=xh(o,e),a=vh(a),o=vh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let N=E+g+a,S=E+f+o,b=ph(s,s.VERTEX_SHADER,N),A=ph(s,s.FRAGMENT_SHADER,S);s.attachShader(w,b),s.attachShader(w,A),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function P(B){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(w)||"",H=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(A)||"",G=V.trim(),J=H.trim(),Z=D.trim(),it=!0,$=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,b,A);else{let Q=gh(s,b,"vertex"),nt=gh(s,A,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+Q+`
`+nt)}else G!==""?Pt("WebGLProgram: Program Info Log:",G):(J===""||Z==="")&&($=!1);$&&(B.diagnostics={runnable:it,programLog:G,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(b),s.deleteShader(A),x=new as(s,w),T=Tm(s,w)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(w,gm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_m++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=A,this}var Gm=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ul(t),e.set(t,n)),n}},Ul=class{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}};function Hm(i){return i===li||i===Ks||i===js}function Wm(i,t,e,n,s,r){let a=new Es,o=new Nl,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function w(x,T,U,B,V,H){let D=B.fog,G=V.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||J,Z),$=it&&it.mapping===Xs?it.image.height:null,Q=_[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ct=nt!==void 0?nt.length:0,_t=0;G.morphAttributes.position!==void 0&&(_t=1),G.morphAttributes.normal!==void 0&&(_t=2),G.morphAttributes.color!==void 0&&(_t=3);let Ht,Dt,Wt,q;if(Q){let Qt=En[Q];Ht=Qt.vertexShader,Dt=Qt.fragmentShader}else{Ht=x.vertexShader,Dt=x.fragmentShader;let Qt=o.getVertexShaderStage(x),$t=o.getFragmentShaderStage(x);o.update(x,Qt,$t),Wt=Qt.id,q=$t.id}let j=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Nt=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,Ot=!!x.map,jt=!!x.matcap,Bt=!!it,Xt=!!x.aoMap,Kt=!!x.lightMap,zt=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,de=!!x.displacementMap,xe=!!x.emissiveMap,re=!!x.metalnessMap,ue=!!x.roughnessMap,L=x.anisotropy>0,fe=x.clearcoat>0,Vt=x.dispersion>0,M=x.retroreflectivity>0,m=x.iridescence>0,O=x.sheen>0,z=x.transmission>0,X=L&&!!x.anisotropyMap,rt=fe&&!!x.clearcoatMap,ct=fe&&!!x.clearcoatNormalMap,Y=fe&&!!x.clearcoatRoughnessMap,W=m&&!!x.iridescenceMap,dt=m&&!!x.iridescenceThicknessMap,xt=O&&!!x.sheenColorMap,ft=O&&!!x.sheenRoughnessMap,lt=!!x.specularMap,wt=!!x.specularColorMap,Et=!!x.specularIntensityMap,Ut=z&&!!x.transmissionMap,I=z&&!!x.thicknessMap,ht=!!x.gradientMap,K=!!x.alphaMap,et=x.alphaTest>0,st=!!x.alphaHash,tt=!!x.extensions,At=un;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=i.toneMapping);let bt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ht,fragmentShader:Dt,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&V.instanceColor!==null,instancingMorph:Nt&&V.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:jt,envMap:Bt,envMapMode:Bt&&it.mapping,envMapCubeUVHeight:$,aoMap:Xt,lightMap:Kt,bumpMap:zt,normalMap:ne,displacementMap:de,emissiveMap:xe,normalMapObjectSpace:ne&&x.normalMapType===Vc,normalMapTangentSpace:ne&&x.normalMapType===Qs,packedNormalMap:ne&&x.normalMapType===Qs&&Hm(x.normalMap.format),metalnessMap:re,roughnessMap:ue,anisotropy:L,anisotropyMap:X,clearcoat:fe,clearcoatMap:rt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Y,dispersion:Vt,retroreflection:M,iridescence:m,iridescenceMap:W,iridescenceThicknessMap:dt,sheen:O,sheenColorMap:xt,sheenRoughnessMap:ft,specularMap:lt,specularColorMap:wt,specularIntensityMap:Et,transmission:z,transmissionMap:Ut,thicknessMap:I,gradientMap:ht,opaque:x.transparent===!1&&x.blending===es&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:et,alphaHash:st,combine:x.combine,mapUv:Ot&&v(x.map.channel),aoMapUv:Xt&&v(x.aoMap.channel),lightMapUv:Kt&&v(x.lightMap.channel),bumpMapUv:zt&&v(x.bumpMap.channel),normalMapUv:ne&&v(x.normalMap.channel),displacementMapUv:de&&v(x.displacementMap.channel),emissiveMapUv:xe&&v(x.emissiveMap.channel),metalnessMapUv:re&&v(x.metalnessMap.channel),roughnessMapUv:ue&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:rt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(x.sheenRoughnessMap.channel),specularMapUv:lt&&v(x.specularMap.channel),specularColorMapUv:wt&&v(x.specularColorMap.channel),specularIntensityMapUv:Et&&v(x.specularIntensityMap.channel),transmissionMapUv:Ut&&v(x.transmissionMap.channel),thicknessMapUv:I&&v(x.thicknessMap.channel),alphaMapUv:K&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ne||L),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ot||K),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:St,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:_t,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(T,x),E(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function N(x){let T=_[x.type],U;if(T){let B=En[T];U=eh.clone(B.uniforms)}else U=x.uniforms;return U}function S(x,T){let U=d.get(T);return U!==void 0?++U.usedTimes:(U=new Vm(i,T,x,s),c.push(U),d.set(T,U)),U}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function P(){o.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:N,acquireProgram:S,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:P}}function Xm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,v,w,g,f){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:_,material:v,materialVariant:a(h),groupOrder:w,renderOrder:h.renderOrder,z:g,group:f},i[t]=E):(E.id=h.id,E.object=h,E.geometry=_,E.material=v,E.materialVariant=a(h),E.groupOrder=w,E.renderOrder=h.renderOrder,E.z=g,E.group=f),t++,E}function l(h,_,v,w,g,f,E){E.reversedDepth===!0&&(g=-g);let N=o(h,_,v,w,g,f);v.transmission>0?n.push(N):v.transparent===!0?s.push(N):e.push(N)}function c(h,_,v,w,g,f){let E=o(h,_,v,w,g,f);v.transmission>0?n.unshift(E):v.transparent===!0?s.unshift(E):e.unshift(E)}function d(h,_){e.length>1&&e.sort(h||qm),n.length>1&&n.sort(_||Sh),s.length>1&&s.sort(_||Sh)}function p(){for(let h=t,_=i.length;h<_;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function Ym(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mh,i.set(n,[a])):s>=r.length?(a=new Mh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Lt};break;case"SpotLight":e={position:new k,direction:new k,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jm=0;function Km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jm(i){let t=new $m,e=Zm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new oe,a=new oe;function o(c){let d=0,p=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let _=0,v=0,w=0,g=0,f=0,E=0,N=0,S=0,b=0,A=0,P=0,x=0,T=0,U=0;c.sort(Km);for(let V=0,H=c.length;V<H;V++){let D=c[V],G=D.color,J=D.intensity,Z=D.distance,it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===li?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=G.r*J,p+=G.g*J,h+=G.b*J;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],J);U++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=nt,n.sunShadowMap[v]=it;let Ct=Q.getViewportCount();for(let _t=0;_t<Ct;_t++)n.sunShadowMatrix[w+_t]=Q.getMatrix(_t),n.sunShadowCascade[w+_t]=Q._cascadeData[_t];w+=Ct,v++}n.sun[_]=$,_++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=$,g++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(G).multiplyScalar(J),$.distance=Z,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[E]=$;let Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[E]=Q.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[E]=nt,n.spotShadowMap[E]=it,P++}E++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(G).multiplyScalar(J),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[N]=$,N++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[f]=nt,n.pointShadowMap[f]=it,n.pointShadowMatrix[f]=D.shadow.matrix,A++}n.point[f]=$,f++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(J),$.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[S]=$,S++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let B=n.hash;(B.sunLength!==_||B.directionalLength!==g||B.pointLength!==f||B.spotLength!==E||B.rectAreaLength!==N||B.hemiLength!==S||B.numSunShadows!==v||B.numDirectionalShadows!==b||B.numPointShadows!==A||B.numSpotShadows!==P||B.numSpotMaps!==x||B.numLightProbes!==U)&&(n.sun.length=_,n.directional.length=g,n.spot.length=E,n.rectArea.length=N,n.point.length=f,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=U,B.sunLength=_,B.directionalLength=g,B.pointLength=f,B.spotLength=E,B.rectAreaLength=N,B.hemiLength=S,B.numSunShadows=v,B.numDirectionalShadows=b,B.numPointShadows=A,B.numSpotShadows=P,B.numSpotMaps=x,B.numLightProbes=U,n.version=Jm++)}function l(c,d){let p=0,h=0,_=0,v=0,w=0,g=0,f=d.matrixWorldInverse;for(let E=0,N=c.length;E<N;E++){let S=c[E];if(S.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),p++}else if(S.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(S.isSpotLight){let b=n.spot[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),v++}else if(S.isRectAreaLight){let b=n.rectArea[w];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),w++}else if(S.isPointLight){let b=n.point[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),_++}else if(S.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function bh(i){let t=new jm(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function d(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bh(i),t.set(s,[o])):r>=a.length?(o=new bh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`,ng=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ig=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],wh=new oe,nr=new k,Cl=new k;function sg(i,t,e){let n=new ji,s=new Gt,r=new Gt,a=new se,o=new Zr,l=new Jr,c={},d=e.maxTextureSize,p={[si]:Be,[Be]:si,[wn]:wn},h=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),_=h.clone();_.defines.HORIZONTAL_PASS=1;let v=new Qe;v.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new _e(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Si;let f=this.type;this.render=function(A,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===xc&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Si);let T=i.getRenderTarget(),U=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),V=i.state;V.setBlending(An),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=f!==this.type;H&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=A.length;D<G;D++){let J=A[D],Z=J.shadow;if(Z===void 0){Pt("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let it=Z.getFrameExtents();s.multiply(it),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,Z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ts){if(J.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ke(s.x,s.y,{format:li,type:fn,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new ti(s.x,s.y,en),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=xn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=be,Z.map.depthTexture.magFilter=be}else J.isPointLight?(Z.map=new no(s.x),Z.map.depthTexture=new Yr(s.x,dn)):(Z.map=new ke(s.x,s.y),Z.map.depthTexture=new ti(s.x,s.y,dn)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=xn,this.type===Si?(Z.map.depthTexture.compareFunction=$?ja:Ka,Z.map.depthTexture.minFilter=Ee,Z.map.depthTexture.magFilter=Ee):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=be,Z.map.depthTexture.magFilter=be);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let nt=0;nt<Q;nt++){let Ct=Z.getCamera(nt);if(J.isPointLight){let _t=Z.camera,Ht=Z.matrix,Dt=J.distance||_t.far;Dt!==_t.far&&(_t.far=Dt,_t.updateProjectionMatrix()),nr.setFromMatrixPosition(J.matrixWorld),_t.position.copy(nr),Cl.copy(_t.position),Cl.add(ng[nt]),_t.up.copy(ig[nt]),_t.lookAt(Cl),_t.updateMatrixWorld(),Ht.makeTranslation(-nr.x,-nr.y,-nr.z),wh.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(wh,_t.coordinateSystem,_t.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(Z.map),i.clear());let _t=Z.getViewport(nt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),V.viewport(a)}n=Z.getFrustum(nt),S(P,x,Ct,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ts&&E(Z,x),Z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(T,U,B)};function E(A,P){let x=t.update(w);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null?A.mapPass=new ke(s.x,s.y,{format:li,type:fn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,x,h,w,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value.set(A.map.width,A.map.height),_.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,x,_,w,null)}function N(A,P,x,T){let U=null,B=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)U=B;else if(U=x.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let V=U.uuid,H=P.uuid,D=c[V];D===void 0&&(D={},c[V]=D);let G=D[H];G===void 0&&(G=U.clone(),D[H]=G,P.addEventListener("dispose",b)),U=G}if(U.visible=P.visible,U.wireframe=P.wireframe,T===ts?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:p[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let V=i.properties.get(U);V.light=x}return U}function S(A,P,x,T,U){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===ts)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let H=t.update(A),D=A.material;if(Array.isArray(D)){let G=H.groups;for(let J=0,Z=G.length;J<Z;J++){let it=G[J],$=D[it.materialIndex];if($&&$.visible){let Q=N(A,$,T,U);A.onBeforeShadow(i,A,P,x,H,Q,it),i.renderBufferDirect(x,null,H,Q,A,it),A.onAfterShadow(i,A,P,x,H,Q,it)}}}else if(D.visible){let G=N(A,D,T,U);A.onBeforeShadow(i,A,P,x,H,G,null),i.renderBufferDirect(x,null,H,G,A,null),A.onAfterShadow(i,A,P,x,H,G,null)}}let V=A.children;for(let H=0,D=V.length;H<D;H++)S(V[H],P,x,T,U)}function b(A){A.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],U=A.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function rg(i,t){function e(){let I=!1,ht=new se,K=null,et=new se(0,0,0,0);return{setMask:function(st){K!==st&&!I&&(i.colorMask(st,st,st,st),K=st)},setLocked:function(st){I=st},setClear:function(st,tt,At,bt,Qt){Qt===!0&&(st*=bt,tt*=bt,At*=bt),ht.set(st,tt,At,bt),et.equals(ht)===!1&&(i.clearColor(st,tt,At,bt),et.copy(ht))},reset:function(){I=!1,K=null,et.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,K=null,et=null,st=null;return{setReversed:function(tt){if(ht!==tt){let At=t.get("EXT_clip_control");tt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ht=tt;let bt=st;st=null,this.setClear(bt)}},getReversed:function(){return ht},setTest:function(tt){tt?j(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(tt){K!==tt&&!I&&(i.depthMask(tt),K=tt)},setFunc:function(tt){if(ht&&(tt=Qc[tt]),et!==tt){switch(tt){case Lr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Nr:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Ur:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=tt}},setLocked:function(tt){I=tt},setClear:function(tt){st!==tt&&(st=tt,ht&&(tt=1-tt),i.clearDepth(tt))},reset:function(){I=!1,K=null,et=null,st=null,ht=!1}}}function s(){let I=!1,ht=null,K=null,et=null,st=null,tt=null,At=null,bt=null,Qt=null;return{setTest:function($t){I||($t?j(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!I&&(i.stencilMask($t),ht=$t)},setFunc:function($t,Ne,Ge){(K!==$t||et!==Ne||st!==Ge)&&(i.stencilFunc($t,Ne,Ge),K=$t,et=Ne,st=Ge)},setOp:function($t,Ne,Ge){(tt!==$t||At!==Ne||bt!==Ge)&&(i.stencilOp($t,Ne,Ge),tt=$t,At=Ne,bt=Ge)},setLocked:function($t){I=$t},setClear:function($t){Qt!==$t&&(i.clearStencil($t),Qt=$t)},reset:function(){I=!1,ht=null,K=null,et=null,st=null,tt=null,At=null,bt=null,Qt=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},p={},h={},_=new WeakMap,v=[],w=null,g=!1,f=null,E=null,N=null,S=null,b=null,A=null,P=null,x=new Lt(0,0,0),T=0,U=!1,B=null,V=null,H=null,D=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,it=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=it>=1):$.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=it>=2);let Q=null,nt={},Ct=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Ht=new se().fromArray(Ct),Dt=new se().fromArray(_t);function Wt(I,ht,K,et){let st=new Uint8Array(4),tt=i.createTexture();i.bindTexture(I,tt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<K;At++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ht+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return tt}let q={};q[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Yi),zt(!1),ne(qo),j(i.CULL_FACE),Xt(An);function j(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function St(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Nt(I,ht){return h[I]!==ht?(i.bindFramebuffer(I,ht),h[I]=ht,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function vt(I,ht){let K=v,et=!1;if(I){K=_.get(ht),K===void 0&&(K=[],_.set(ht,K));let st=I.textures;if(K.length!==st.length||K[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,At=st.length;tt<At;tt++)K[tt]=i.COLOR_ATTACHMENT0+tt;K.length=st.length,et=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,et=!0);et&&i.drawBuffers(K)}function Ot(I){return w!==I?(i.useProgram(I),w=I,!0):!1}let jt={[Mi]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};jt[Mc]=i.MIN,jt[bc]=i.MAX;let Bt={[wc]:i.ZERO,[Ac]:i.ONE,[Tc]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Lc]:i.SRC_ALPHA_SATURATE,[Pc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Ec]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Ic]:i.ONE_MINUS_DST_COLOR,[Rc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Nc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Fc]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(I,ht,K,et,st,tt,At,bt,Qt,$t){if(I===An){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),I!==vc){if(I!==f||$t!==U){if((E!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),E=Mi,b=Mi),$t)switch(I){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",I);break}else switch(I){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $o:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",I);break}N=null,S=null,A=null,P=null,x.set(0,0,0),T=0,f=I,U=$t}return}st=st||ht,tt=tt||K,At=At||et,(ht!==E||st!==b)&&(i.blendEquationSeparate(jt[ht],jt[st]),E=ht,b=st),(K!==N||et!==S||tt!==A||At!==P)&&(i.blendFuncSeparate(Bt[K],Bt[et],Bt[tt],Bt[At]),N=K,S=et,A=tt,P=At),(bt.equals(x)===!1||Qt!==T)&&(i.blendColor(bt.r,bt.g,bt.b,Qt),x.copy(bt),T=Qt),f=I,U=!1}function Kt(I,ht){I.side===wn?St(i.CULL_FACE):j(i.CULL_FACE);let K=I.side===Be;ht&&(K=!K),zt(K),I.blending===es&&I.transparent===!1?Xt(An):Xt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let et=I.stencilWrite;o.setTest(et),et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){B!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),B=I)}function ne(I){I!==gc?(j(i.CULL_FACE),I!==V&&(I===qo?i.cullFace(i.BACK):I===_c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),V=I}function de(I){I!==H&&(Z&&i.lineWidth(I),H=I)}function xe(I,ht,K){I?(j(i.POLYGON_OFFSET_FILL),(D!==ht||G!==K)&&(D=ht,G=K,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,K))):St(i.POLYGON_OFFSET_FILL)}function re(I){I?j(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ue(I){I===void 0&&(I=i.TEXTURE0+J-1),Q!==I&&(i.activeTexture(I),Q=I)}function L(I,ht,K){K===void 0&&(Q===null?K=i.TEXTURE0+J-1:K=Q);let et=nt[K];et===void 0&&(et={type:void 0,texture:void 0},nt[K]=et),(et.type!==I||et.texture!==ht)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(I,ht||q[I]),et.type=I,et.texture=ht)}function fe(){let I=nt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function m(){try{i.texSubImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function rt(){try{i.texStorage2D(...arguments)}catch(I){It("WebGLState:",I)}}function ct(){try{i.texStorage3D(...arguments)}catch(I){It("WebGLState:",I)}}function Y(){try{i.texImage2D(...arguments)}catch(I){It("WebGLState:",I)}}function W(){try{i.texImage3D(...arguments)}catch(I){It("WebGLState:",I)}}function dt(I){return p[I]!==void 0?p[I]:i.getParameter(I)}function xt(I,ht){p[I]!==ht&&(i.pixelStorei(I,ht),p[I]=ht)}function ft(I){Ht.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ht.copy(I))}function lt(I){Dt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Dt.copy(I))}function wt(I,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let et=K.get(I);et===void 0&&(et=i.getUniformBlockIndex(ht,I.name),K.set(I,et))}function Et(I,ht){let et=c.get(ht).get(I);l.get(ht)!==et&&(i.uniformBlockBinding(ht,et,I.__bindingPointIndex),l.set(ht,et))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},Q=null,nt={},h={},_=new WeakMap,v=[],w=null,g=!1,f=null,E=null,N=null,S=null,b=null,A=null,P=null,x=new Lt(0,0,0),T=0,U=!1,B=null,V=null,H=null,D=null,G=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:St,bindFramebuffer:Nt,drawBuffers:vt,useProgram:Ot,setBlending:Xt,setMaterial:Kt,setFlipSided:zt,setCullFace:ne,setLineWidth:de,setPolygonOffset:xe,setScissorTest:re,activeTexture:ue,bindTexture:L,unbindTexture:fe,compressedTexImage2D:Vt,compressedTexImage3D:M,texImage2D:Y,texImage3D:W,pixelStorei:xt,getParameter:dt,updateUBOMapping:wt,uniformBlockBinding:Et,texStorage2D:rt,texStorage3D:ct,texSubImage2D:m,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:ft,viewport:lt,reset:Ut}}function ag(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,d=new WeakMap,p=new Set,h,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,m){return v?new OffscreenCanvas(M,m):As("canvas")}function g(M,m,O){let z=1,X=Vt(M);if((X.width>O||X.height>O)&&(z=O/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let rt=Math.floor(z*X.width),ct=Math.floor(z*X.height);h===void 0&&(h=w(rt,ct));let Y=m?w(rt,ct):h;return Y.width=rt,Y.height=ct,Y.getContext("2d").drawImage(M,0,0,rt,ct),Pt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+rt+"x"+ct+")."),Y}else return"data"in M&&Pt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),M;return M}function f(M){return M.generateMipmaps}function E(M){i.generateMipmap(M)}function N(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(M,m,O,z,X,rt=!1){if(M!==null){if(i[M]!==void 0)return i[M];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ct;z&&(ct=t.get("EXT_texture_norm16"),ct||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=m;if(m===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),O===i.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),m===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),m===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),O===i.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),m===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),m===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),m===i.RGB&&(O===i.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),O===i.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),m===i.RGBA){let W=rt?ws:qt.getTransfer(X);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=W===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),O===i.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(M,m){let O;return M?m===null||m===dn||m===is?O=i.DEPTH24_STENCIL8:m===en?O=i.DEPTH32F_STENCIL8:m===ns&&(O=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===dn||m===is?O=i.DEPTH_COMPONENT24:m===en?O=i.DEPTH_COMPONENT32F:m===ns&&(O=i.DEPTH_COMPONENT16),O}function A(M,m){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==be&&M.minFilter!==Ee?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function P(M){let m=M.target;m.removeEventListener("dispose",P),T(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&p.delete(m)}function x(M){let m=M.target;m.removeEventListener("dispose",x),B(m)}function T(M){let m=n.get(M);if(m.__webglInit===void 0)return;let O=M.source,z=_.get(O);if(z){let X=z[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&U(M),Object.keys(z).length===0&&_.delete(O)}n.remove(M)}function U(M){let m=n.get(M);i.deleteTexture(m.__webglTexture);let O=M.source,z=_.get(O);delete z[m.__cacheKey],a.memory.textures--}function B(M){let m=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(m.__webglFramebuffer[z]))for(let X=0;X<m.__webglFramebuffer[z].length;X++)i.deleteFramebuffer(m.__webglFramebuffer[z][X]);else i.deleteFramebuffer(m.__webglFramebuffer[z]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[z])}else{if(Array.isArray(m.__webglFramebuffer))for(let z=0;z<m.__webglFramebuffer.length;z++)i.deleteFramebuffer(m.__webglFramebuffer[z]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let z=0;z<m.__webglColorRenderbuffer.length;z++)m.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[z]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let O=M.textures;for(let z=0,X=O.length;z<X;z++){let rt=n.get(O[z]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(O[z])}n.remove(M)}let V=0;function H(){V=0}function D(){return V}function G(M){V=M}function J(){let M=V;return M>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,M}function Z(M){let m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function it(M,m){let O=n.get(M);if(M.isVideoTexture&&L(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){let z=M.image;if(z===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(O,M,m);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+m)}function $(M,m){let O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){St(O,M,m);return}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+m)}function Q(M,m){let O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){St(O,M,m);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+m)}function nt(M,m){let O=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&O.__version!==M.version){Nt(O,M,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+m)}let Ct={[zr]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},_t={[be]:i.NEAREST,[zc]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Ht={[Hc]:i.NEVER,[$c]:i.ALWAYS,[Wc]:i.LESS,[Ka]:i.LEQUAL,[Xc]:i.EQUAL,[ja]:i.GEQUAL,[qc]:i.GREATER,[Yc]:i.NOTEQUAL};function Dt(M,m){if(m.type===en&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Ee||m.magFilter===fa||m.magFilter===qs||m.magFilter===ai||m.minFilter===Ee||m.minFilter===fa||m.minFilter===qs||m.minFilter===ai)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,Ct[m.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Ct[m.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Ct[m.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,_t[m.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,_t[m.minFilter]),m.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ht[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===be||m.minFilter!==qs&&m.minFilter!==ai||m.type===en&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Wt(M,m){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",P));let z=m.source,X=_.get(z);X===void 0&&(X={},_.set(z,X));let rt=Z(m);if(rt!==M.__cacheKey){X[rt]===void 0&&(X[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[rt].usedTimes++;let ct=X[M.__cacheKey];ct!==void 0&&(X[M.__cacheKey].usedTimes--,ct.usedTimes===0&&U(m)),M.__cacheKey=rt,M.__webglTexture=X[rt].texture}return O}function q(M,m,O){return Math.floor(Math.floor(M/O)/m)}function j(M,m,O,z){let rt=M.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,O,z,m.data);else{rt.sort((xt,ft)=>xt.start-ft.start);let ct=0;for(let xt=1;xt<rt.length;xt++){let ft=rt[ct],lt=rt[xt],wt=ft.start+ft.count,Et=q(lt.start,m.width,4),Ut=q(ft.start,m.width,4);lt.start<=wt+1&&Et===Ut&&q(lt.start+lt.count-1,m.width,4)===Et?ft.count=Math.max(ft.count,lt.start+lt.count-ft.start):(++ct,rt[ct]=lt)}rt.length=ct+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),W=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let xt=0,ft=rt.length;xt<ft;xt++){let lt=rt[xt],wt=Math.floor(lt.start/4),Et=Math.ceil(lt.count/4),Ut=wt%m.width,I=Math.floor(wt/m.width),ht=Et,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ut,I,ht,K,O,z,m.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,W),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function St(M,m,O){let z=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(z=i.TEXTURE_3D);let X=Wt(M,m),rt=m.source;e.bindTexture(z,M.__webglTexture,i.TEXTURE0+O);let ct=n.get(rt);if(rt.version!==ct.__version||X===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let K=qt.getPrimaries(qt.workingColorSpace),et=m.colorSpace===zn?null:qt.getPrimaries(m.colorSpace),st=m.colorSpace===zn||K===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let W=g(m.image,!1,s.maxTextureSize);W=fe(m,W);let dt=r.convert(m.format,m.colorSpace),xt=r.convert(m.type),ft=S(m.internalFormat,dt,xt,m.normalized,m.colorSpace,m.isVideoTexture);Dt(z,m);let lt,wt=m.mipmaps,Et=m.isVideoTexture!==!0,Ut=ct.__version===void 0||X===!0,I=rt.dataReady,ht=A(m,W);if(m.isDepthTexture)ft=b(m.format===oi,m.type),Ut&&(Et?e.texStorage2D(i.TEXTURE_2D,1,ft,W.width,W.height):e.texImage2D(i.TEXTURE_2D,0,ft,W.width,W.height,0,dt,xt,null));else if(m.isDataTexture)if(wt.length>0){Et&&Ut&&e.texStorage2D(i.TEXTURE_2D,ht,ft,wt[0].width,wt[0].height);for(let K=0,et=wt.length;K<et;K++)lt=wt[K],Et?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,lt.width,lt.height,dt,xt,lt.data):e.texImage2D(i.TEXTURE_2D,K,ft,lt.width,lt.height,0,dt,xt,lt.data);m.generateMipmaps=!1}else Et?(Ut&&e.texStorage2D(i.TEXTURE_2D,ht,ft,W.width,W.height),I&&j(m,W,dt,xt)):e.texImage2D(i.TEXTURE_2D,0,ft,W.width,W.height,0,dt,xt,W.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Et&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,wt[0].width,wt[0].height,W.depth);for(let K=0,et=wt.length;K<et;K++)if(lt=wt[K],m.format!==nn)if(dt!==null)if(Et){if(I)if(m.layerUpdates.size>0){let st=_l(lt.width,lt.height,m.format,m.type);for(let tt of m.layerUpdates){let At=lt.data.subarray(tt*st/lt.data.BYTES_PER_ELEMENT,(tt+1)*st/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,tt,lt.width,lt.height,1,dt,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,W.depth,dt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ft,lt.width,lt.height,W.depth,0,lt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,W.depth,dt,xt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ft,lt.width,lt.height,W.depth,0,dt,xt,lt.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Et&&Ut&&e.texStorage2D(i.TEXTURE_2D,ht,ft,wt[0].width,wt[0].height);for(let K=0,et=wt.length;K<et;K++)lt=wt[K],m.format!==nn?dt!==null?Et?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,lt.width,lt.height,dt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ft,lt.width,lt.height,0,lt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,lt.width,lt.height,dt,xt,lt.data):e.texImage2D(i.TEXTURE_2D,K,ft,lt.width,lt.height,0,dt,xt,lt.data)}else if(m.isDataArrayTexture)if(Et){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,W.width,W.height,W.depth),I)if(m.layerUpdates.size>0){let K=_l(W.width,W.height,m.format,m.type);for(let et of m.layerUpdates){let st=W.data.subarray(et*K/W.data.BYTES_PER_ELEMENT,(et+1)*K/W.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,W.width,W.height,1,dt,xt,st)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,dt,xt,W.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,W.width,W.height,W.depth,0,dt,xt,W.data);else if(m.isData3DTexture)Et?(Ut&&e.texStorage3D(i.TEXTURE_3D,ht,ft,W.width,W.height,W.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,dt,xt,W.data)):e.texImage3D(i.TEXTURE_3D,0,ft,W.width,W.height,W.depth,0,dt,xt,W.data);else if(m.isFramebufferTexture){if(Ut)if(Et)e.texStorage2D(i.TEXTURE_2D,ht,ft,W.width,W.height);else{let K=W.width,et=W.height;for(let st=0;st<ht;st++)e.texImage2D(i.TEXTURE_2D,st,ft,K,et,0,dt,xt,null),K>>=1,et>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),W.parentNode!==K){K.appendChild(W),p.add(m),K.onpaint=et=>{let st=et.changedElements;for(let tt of p)st.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,W);else{let st=i.RGBA,tt=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,tt,At,W)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Et&&Ut){let K=Vt(wt[0]);e.texStorage2D(i.TEXTURE_2D,ht,ft,K.width,K.height)}for(let K=0,et=wt.length;K<et;K++)lt=wt[K],Et?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,dt,xt,lt):e.texImage2D(i.TEXTURE_2D,K,ft,dt,xt,lt);m.generateMipmaps=!1}else if(Et){if(Ut){let K=Vt(W);e.texStorage2D(i.TEXTURE_2D,ht,ft,K.width,K.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,xt,W)}else e.texImage2D(i.TEXTURE_2D,0,ft,dt,xt,W);f(m)&&E(z),ct.__version=rt.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function Nt(M,m,O){if(m.image.length!==6)return;let z=Wt(M,m),X=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);let rt=n.get(X);if(X.version!==rt.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let ct=qt.getPrimaries(qt.workingColorSpace),Y=m.colorSpace===zn?null:qt.getPrimaries(m.colorSpace),W=m.colorSpace===zn||ct===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let dt=m.isCompressedTexture||m.image[0].isCompressedTexture,xt=m.image[0]&&m.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!dt&&!xt?ft[tt]=g(m.image[tt],!0,s.maxCubemapSize):ft[tt]=xt?m.image[tt].image:m.image[tt],ft[tt]=fe(m,ft[tt]);let lt=ft[0],wt=r.convert(m.format,m.colorSpace),Et=r.convert(m.type),Ut=S(m.internalFormat,wt,Et,m.normalized,m.colorSpace),I=m.isVideoTexture!==!0,ht=rt.__version===void 0||z===!0,K=X.dataReady,et=A(m,lt);Dt(i.TEXTURE_CUBE_MAP,m);let st;if(dt){I&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,Ut,lt.width,lt.height);for(let tt=0;tt<6;tt++){st=ft[tt].mipmaps;for(let At=0;At<st.length;At++){let bt=st[At];m.format!==nn?wt!==null?I?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,Ut,bt.width,bt.height,0,bt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,bt.width,bt.height,wt,Et,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,Ut,bt.width,bt.height,0,wt,Et,bt.data)}}}else{if(st=m.mipmaps,I&&ht){st.length>0&&et++;let tt=Vt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,Ut,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(xt){I?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,wt,Et,ft[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,ft[tt].width,ft[tt].height,0,wt,Et,ft[tt].data);for(let At=0;At<st.length;At++){let Qt=st[At].image[tt].image;I?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,Qt.width,Qt.height,wt,Et,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,Ut,Qt.width,Qt.height,0,wt,Et,Qt.data)}}else{I?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,Et,ft[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,wt,Et,ft[tt]);for(let At=0;At<st.length;At++){let bt=st[At];I?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,wt,Et,bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,Ut,wt,Et,bt.image[tt])}}}f(m)&&E(i.TEXTURE_CUBE_MAP),rt.__version=X.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function vt(M,m,O,z,X,rt){let ct=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),W=S(O.internalFormat,ct,Y,O.normalized,O.colorSpace),dt=n.get(m),xt=n.get(O);if(xt.__renderTarget=m,!dt.__hasExternalTextures){let ft=Math.max(1,m.width>>rt),lt=Math.max(1,m.height>>rt);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,rt,W,ft,lt,m.depth,0,ct,Y,null):e.texImage2D(X,rt,W,ft,lt,0,ct,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ue(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,X,xt.__webglTexture,0,re(m)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,X,xt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(M,m,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),m.depthBuffer){let z=m.depthTexture,X=z&&z.isDepthTexture?z.type:null,rt=b(m.stencilBuffer,X),ct=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(m),rt,m.width,m.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(m),rt,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,rt,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,M)}else{let z=m.textures;for(let X=0;X<z.length;X++){let rt=z[X],ct=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),W=S(rt.internalFormat,ct,Y,rt.normalized,rt.colorSpace);ue(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(m),W,m.width,m.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(m),W,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,W,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(M,m,O){let z=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(m.depthTexture);if(X.__renderTarget=m,(!X.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,m.depthTexture.addEventListener("dispose",P)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,m.depthTexture);let dt=r.convert(m.depthTexture.format),xt=r.convert(m.depthTexture.type),ft;m.depthTexture.format===xn?ft=i.DEPTH_COMPONENT24:m.depthTexture.format===oi&&(ft=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ft,m.width,m.height,0,dt,xt,null)}}else it(m.depthTexture,0);let rt=X.__webglTexture,ct=re(m),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,W=m.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===xn)ue(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,rt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,rt,0);else if(m.depthTexture.format===oi)ue(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,rt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(M){let m=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){let z=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),z){let X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=z}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)jt(m.__webglFramebuffer[z],M,z);else{let z=M.texture.mipmaps;z&&z.length>0?jt(m.__webglFramebuffer[0],M,0):jt(m.__webglFramebuffer,M,0)}else if(O){m.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[z]),m.__webglDepthbuffer[z]===void 0)m.__webglDepthbuffer[z]=i.createRenderbuffer(),Ot(m.__webglDepthbuffer[z],M,!1);else{let X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=m.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,rt)}}else{let z=M.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ot(m.__webglDepthbuffer,M,!1);else{let X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(M,m,O){let z=n.get(M);m!==void 0&&vt(z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Bt(M)}function Kt(M){let m=M.texture,O=n.get(M),z=n.get(m);M.addEventListener("dispose",x);let X=M.textures,rt=M.isWebGLCubeRenderTarget===!0,ct=X.length>1;if(ct||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=m.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let W=0;W<m.mipmaps.length;W++)O.__webglFramebuffer[Y][W]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<m.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Y=0,W=X.length;Y<W;Y++){let dt=n.get(X[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&ue(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let W=X[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let dt=r.convert(W.format,W.colorSpace),xt=r.convert(W.type),ft=S(W.internalFormat,dt,xt,W.normalized,W.colorSpace,M.isXRRenderTarget===!0),lt=re(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,m);for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0)for(let W=0;W<m.mipmaps.length;W++)vt(O.__webglFramebuffer[Y][W],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,W);else vt(O.__webglFramebuffer[Y],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(m)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,W=X.length;Y<W;Y++){let dt=X[Y],xt=n.get(dt),ft=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ft=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,xt.__webglTexture),Dt(ft,dt),vt(O.__webglFramebuffer,M,dt,i.COLOR_ATTACHMENT0+Y,ft,0),f(dt)&&E(ft)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,z.__webglTexture),Dt(Y,m),m.mipmaps&&m.mipmaps.length>0)for(let W=0;W<m.mipmaps.length;W++)vt(O.__webglFramebuffer[W],M,m,i.COLOR_ATTACHMENT0,Y,W);else vt(O.__webglFramebuffer,M,m,i.COLOR_ATTACHMENT0,Y,0);f(m)&&E(Y),e.unbindTexture()}M.depthBuffer&&Bt(M)}function zt(M){let m=M.textures;for(let O=0,z=m.length;O<z;O++){let X=m[O];if(f(X)){let rt=N(M),ct=n.get(X).__webglTexture;e.bindTexture(rt,ct),E(rt),e.unbindTexture()}}}let ne=[],de=[];function xe(M){if(M.samples>0){if(ue(M)===!1){let m=M.textures,O=M.width,z=M.height,X=i.COLOR_BUFFER_BIT,rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(M),Y=m.length>1;if(Y)for(let dt=0;dt<m.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let W=M.texture.mipmaps;W&&W.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let dt=0;dt<m.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let xt=n.get(m[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,X,i.NEAREST),l===!0&&(ne.length=0,de.length=0,ne.push(i.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(ne.push(rt),de.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<m.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let xt=n.get(m[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let m=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function re(M){return Math.min(s.maxSamples,M.samples)}function ue(M){let m=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function L(M){let m=a.render.frame;d.get(M)!==m&&(d.set(M,m),M.update())}function fe(M,m){let O=M.colorSpace,z=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==bs&&O!==zn&&(qt.getTransfer(O)===te?(z!==nn||X!==Ve)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",O)),m}function Vt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=Xt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function og(i,t){function e(n,s=zn){let r,a=qt.getTransfer(s);if(n===Ve)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===al)return i.BYTE;if(n===ol)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===hl)return i.ALPHA;if(n===ul)return i.RGB;if(n===nn)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===_a)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===li)return i.RG;if(n===va)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Ys||n===$s||n===Zs||n===Js)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ma||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ta||n===Ea||n===Ca||n===Ra||n===Ks||n===Pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ta)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ca)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Za||n===js||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:lg,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,_=null,v=null,w=typeof XRWebGLBinding<"u",g=new Fl,f={},E=e.getContextAttributes(),N=null,S=null,b=[],A=[],P=new Gt,x=null,T=null,U=new Le;U.viewport=new se;let B=new Le;B.viewport=new se;let V=[U,B],H=new ca,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=b[q];return j===void 0&&(j=new Ki,b[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=b[q];return j===void 0&&(j=new Ki,b[q]=j),j.getGripSpace()},this.getHand=function(q){let j=b[q];return j===void 0&&(j=new Ki,b[q]=j),j.getHandSpace()};function J(q){let j=A.indexOf(q.inputSource);if(j===-1)return;let St=b[j];St!==void 0&&(St.update(q.inputSource,q.frame,c||a),St.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",it);for(let q=0;q<b.length;q++){let j=A[q];j!==null&&(A[q]=null,b[q].disconnect(j))}D=null,G=null,g.reset();for(let q in f)delete f[q];if(t.setRenderTarget(N),_=null,h=null,p=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",it),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Nt=null,vt=null;E.depth&&(vt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=E.stencil?oi:xn,Nt=E.stencil?is:dn);let Ot={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new ke(h.textureWidth,h.textureHeight,{format:nn,type:Ve,depthTexture:new ti(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),S=new ke(_.framebufferWidth,_.framebufferHeight,{format:nn,type:Ve,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(q){for(let j=0;j<q.removed.length;j++){let St=q.removed[j],Nt=A.indexOf(St);Nt>=0&&(A[Nt]=null,b[Nt].disconnect(St))}for(let j=0;j<q.added.length;j++){let St=q.added[j],Nt=A.indexOf(St);if(Nt===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=A.length){A.push(St),Nt=Ot;break}else if(A[Ot]===null){A[Ot]=St,Nt=Ot;break}if(Nt===-1)break}let vt=b[Nt];vt&&vt.connect(St)}}let $=new k,Q=new k;function nt(q,j,St){$.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);let Nt=$.distanceTo(Q),vt=j.projectionMatrix.elements,Ot=St.projectionMatrix.elements,jt=vt[14]/(vt[10]-1),Bt=vt[14]/(vt[10]+1),Xt=(vt[9]+1)/vt[5],Kt=(vt[9]-1)/vt[5],zt=(vt[8]-1)/vt[0],ne=(Ot[8]+1)/Ot[0],de=jt*zt,xe=jt*ne,re=Nt/(-zt+ne),ue=re*-zt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ue),q.translateZ(re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let L=jt+re,fe=Bt+re,Vt=de-ue,M=xe+(Nt-ue),m=Xt*Bt/fe*L,O=Kt*Bt/fe*L;q.projectionMatrix.makePerspective(Vt,M,m,O,L,fe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ct(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,St=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(St=g.depthFar)),H.near=B.near=U.near=j,H.far=B.far=U.far=St,(D!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,G=H.far),H.layers.mask=q.layers.mask|6,U.layers.mask=H.layers.mask&-5,B.layers.mask=H.layers.mask&-3;let Nt=q.parent,vt=H.cameras;Ct(H,Nt);for(let Ot=0;Ot<vt.length;Ot++)Ct(vt[Ot],Nt);vt.length===2?nt(H,U,B):H.projectionMatrix.copy(U.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),_t(q,H,Nt)};function _t(q,j,St){St===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(q){return f[q]};let Ht=null;function Dt(q,j){if(d=j.getViewerPose(c||a),v=j,d!==null){let St=d.views;_!==null&&(t.setRenderTargetFramebuffer(S,_.framebuffer),t.setRenderTarget(S));let Nt=!1;St.length!==H.cameras.length&&(H.cameras.length=0,Nt=!0);for(let Bt=0;Bt<St.length;Bt++){let Xt=St[Bt],Kt=null;if(_!==null)Kt=_.getViewport(Xt);else{let ne=p.getViewSubImage(h,Xt);Kt=ne.viewport,Bt===0&&(t.setRenderTargetTextures(S,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(S))}let zt=V[Bt];zt===void 0&&(zt=new Le,zt.layers.enable(Bt),zt.viewport=new se,V[Bt]=zt),zt.matrix.fromArray(Xt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Xt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Bt===0&&(H.matrix.copy(zt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Nt===!0&&H.cameras.push(zt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=n.getBinding();let Bt=p.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(vt&&vt.includes("camera-access")&&w){t.state.unbindTexture(),p=n.getBinding();for(let Bt=0;Bt<St.length;Bt++){let Xt=St[Bt].camera;if(Xt){let Kt=f[Xt];Kt||(Kt=new Fs,f[Xt]=Kt);let zt=p.getCameraImage(Xt);Kt.sourceTexture=zt}}}}for(let St=0;St<b.length;St++){let Nt=A[St],vt=b[St];Nt!==null&&vt!==void 0&&vt.update(Nt,j,c||a)}Ht&&Ht(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}let Wt=new Ah;Wt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){Ht=q},this.dispose=function(){}}},hg=new oe,Ih=new Ft;Ih.set(-1,0,0,0,1,0,0,0,1);function ug(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,pl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,E,N,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&_(g,f,S)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),w(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,E,N):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Be&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Be&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let E=t.get(f),N=E.envMap,S=E.envMapRotation;N&&(g.envMap.value=N,g.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(S)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ih),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,E,N){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=N*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function _(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function w(g,f){let E=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let A=b.program;n.uniformBlockBinding(S,A)}function c(S,b){let A=s[S.id];A===void 0&&(g(S),A=d(S),s[S.id]=A,S.addEventListener("dispose",E));let P=b.program;n.updateUBOMapping(S,P);let x=t.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function d(S){let b=p();S.__bindingPointIndex=b;let A=i.createBuffer(),P=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let b=s[S.id],A=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=A.length;x<T;x++){let U=A[x];if(Array.isArray(U))for(let B=0,V=U.length;B<V;B++)_(U[B],x,B,P);else _(U,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(S,b,A,P){if(w(S,b,A,P)===!0){let x=S.__offset,T=S.value;if(Array.isArray(T)){let U=0;for(let B=0;B<T.length;B++){let V=T[B],H=f(V);v(V,S.__data,U),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function v(S,b,A){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,A)}function w(S,b,A,P){let x=S.value,T=b+"_"+A;if(P[T]===void 0)return typeof x=="number"||typeof x=="boolean"?P[T]=x:ArrayBuffer.isView(x)?P[T]=x.slice():P[T]=x.clone(),!0;{let U=P[T];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return P[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function g(S){let b=S.uniforms,A=0,P=16;for(let T=0,U=b.length;T<U;T++){let B=Array.isArray(b[T])?b[T]:[b[T]];for(let V=0,H=B.length;V<H;V++){let D=B[V],G=Array.isArray(D.value)?D.value:[D.value];for(let J=0,Z=G.length;J<Z;J++){let it=G[J],$=f(it),Q=A%P,nt=Q%$.boundary,Ct=Q+nt;A+=nt,Ct!==0&&P-Ct<$.storage&&(A+=P-Ct),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=$.storage}}}let x=A%P;return x>0&&(A+=P-x),S.__size=A,S.__cache={},this}function f(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",S),b}function E(S){let b=S.target;b.removeEventListener("dispose",E);let A=a.indexOf(b.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function N(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:N}}var fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function pg(){return Tn===null&&(Tn=new Ls(fg,16,16,li,fn),Tn.name="DFG_LUT",Tn.minFilter=Ee,Tn.magFilter=Ee,Tn.wrapS=gn,Tn.wrapT=gn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var io=class{constructor(t={}){let{canvas:e=Jc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:_=Ve}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let w=_,g=new Set([ya,va,xa]),f=new Set([Ve,dn,ns,is,ma,ga]),E=new Uint32Array(4),N=new Int32Array(4),S=new k,b=null,A=null,P=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,B=!1,V=null,H=null,D=null,G=null;this._outputColorSpace=Fe;let J=0,Z=0,it=null,$=-1,Q=null,nt=new se,Ct=new se,_t=null,Ht=new Lt(0),Dt=0,Wt=e.width,q=e.height,j=1,St=null,Nt=null,vt=new se(0,0,Wt,q),Ot=new se(0,0,Wt,q),jt=!1,Bt=new ji,Xt=!1,Kt=!1,zt=new oe,ne=new k,de=new se,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ue(){return it===null?j:1}let L=n;function fe(u,y){return e.getContext(u,y)}let Vt,M,m,O,z,X,rt,ct,Y,W,dt,xt,ft,lt,wt,Et,Ut,I,ht,K,et,st,tt;try{let u={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),L===null){let y="webgl2";if(L=fe(y,u),L===null)throw fe(y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(u){throw e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),It("WebGLRenderer: "+u.message),u}function At(){Vt=new Sp(L),Vt.init(),et=new og(L,Vt),M=new up(L,Vt,t,et),m=new rg(L,Vt),M.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),H=L.createFramebuffer(),D=L.createFramebuffer(),G=L.createFramebuffer(),O=new wp(L),z=new Xm,X=new ag(L,Vt,m,z,M,et,O),rt=new yp(U),ct=new Au(L),st=new cp(L,ct),Y=new Mp(L,ct,O,st),W=new Tp(L,Y,ct,st,O),I=new Ap(L,M,X),wt=new dp(z),dt=new Wm(U,rt,Vt,M,st,wt),xt=new ug(U,z),ft=new Ym,lt=new Qm(Vt),Ut=new lp(U,rt,m,W,v,l),Et=new sg(U,W,M),tt=new dg(L,O,M,m),ht=new hp(L,Vt,O),K=new bp(L,Vt,O),O.programs=dt.programs,U.capabilities=M,U.extensions=Vt,U.properties=z,U.renderLists=ft,U.shadowMap=Et,U.state=m,U.info=O}w!==Ve&&(T=new Cp(w,e.width,e.height,o,s,r));let bt=new Ol(U,L);this.xr=bt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let u=Vt.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=Vt.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(u){u!==void 0&&(j=u,this.setSize(Wt,q,!1))},this.getSize=function(u){return u.set(Wt,q)},this.setSize=function(u,y,C=!0){if(bt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=u,q=y,e.width=Math.floor(u*j),e.height=Math.floor(y*j),C===!0&&(e.style.width=u+"px",e.style.height=y+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,u,y)},this.getDrawingBufferSize=function(u){return u.set(Wt*j,q*j).floor()},this.setDrawingBufferSize=function(u,y,C){Wt=u,q=y,j=C,e.width=Math.floor(u*C),e.height=Math.floor(y*C),this.setViewport(0,0,u,y)},this.setEffects=function(u){if(w===Ve){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let y=0;y<u.length;y++)if(u[y].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(nt)},this.getViewport=function(u){return u.copy(vt)},this.setViewport=function(u,y,C,R){u.isVector4?vt.set(u.x,u.y,u.z,u.w):vt.set(u,y,C,R),m.viewport(nt.copy(vt).multiplyScalar(j).round())},this.getScissor=function(u){return u.copy(Ot)},this.setScissor=function(u,y,C,R){u.isVector4?Ot.set(u.x,u.y,u.z,u.w):Ot.set(u,y,C,R),m.scissor(Ct.copy(Ot).multiplyScalar(j).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(u){m.setScissorTest(jt=u)},this.setOpaqueSort=function(u){St=u},this.setTransparentSort=function(u){Nt=u},this.getClearColor=function(u){return u.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(u=!0,y=!0,C=!0){let R=0;if(u){let F=!1;if(it!==null){let at=it.texture.format;F=g.has(at)}if(F){let at=it.texture.type,ot=f.has(at),ut=Ut.getClearColor(),pt=Ut.getClearAlpha(),mt=ut.r,Tt=ut.g,Rt=ut.b;ot?(E[0]=mt,E[1]=Tt,E[2]=Rt,E[3]=pt,L.clearBufferuiv(L.COLOR,0,E)):(N[0]=mt,N[1]=Tt,N[2]=Rt,N[3]=pt,L.clearBufferiv(L.COLOR,0,N))}else R|=L.COLOR_BUFFER_BIT}y&&(R|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),C&&(R|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&L.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),V=u},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Ut.dispose(),ft.dispose(),lt.dispose(),z.dispose(),rt.dispose(),W.dispose(),st.dispose(),tt.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ar),bt.removeEventListener("sessionend",or),Cn.stop()};function Qt(u){u.preventDefault(),fl("WebGLRenderer: Context Lost."),B=!0}function $t(){fl("WebGLRenderer: Context Restored."),B=!1;let u=O.autoReset,y=Et.enabled,C=Et.autoUpdate,R=Et.needsUpdate,F=Et.type;At(),O.autoReset=u,Et.enabled=y,Et.autoUpdate=C,Et.needsUpdate=R,Et.type=F}function Ne(u){It("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Ge(u){let y=u.target;y.removeEventListener("dispose",Ge),ui(y)}function ui(u){hs(u),z.remove(u)}function hs(u){let y=z.get(u).programs;y!==void 0&&(y.forEach(function(C){dt.releaseProgram(C)}),u.isShaderMaterial&&dt.releaseShaderCache(u))}this.renderBufferDirect=function(u,y,C,R,F,at){y===null&&(y=xe);let ot=F.isMesh&&F.matrixWorld.determinantAffine()<0,ut=mo(u,y,C,R,F);m.setMaterial(R,ot);let pt=C.index,mt=1;if(R.wireframe===!0){if(pt=Y.getWireframeAttribute(C),pt===void 0)return;mt=2}let Tt=C.drawRange,Rt=C.attributes.position,yt=Tt.start*mt,Zt=(Tt.start+Tt.count)*mt;at!==null&&(yt=Math.max(yt,at.start*mt),Zt=Math.min(Zt,(at.start+at.count)*mt)),pt!==null?(yt=Math.max(yt,0),Zt=Math.min(Zt,pt.count)):Rt!=null&&(yt=Math.max(yt,0),Zt=Math.min(Zt,Rt.count));let me=Zt-yt;if(me<0||me===1/0)return;st.setup(F,R,ut,C,pt);let le,ie=ht;if(pt!==null&&(le=ct.get(pt),ie=K,ie.setIndex(le)),F.isMesh)R.wireframe===!0?(m.setLineWidth(R.wireframeLinewidth*ue()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(F.isLine){let Re=R.linewidth;Re===void 0&&(Re=1),m.setLineWidth(Re*ue()),F.isLineSegments?ie.setMode(L.LINES):F.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else F.isPoints?ie.setMode(L.POINTS):F.isSprite&&ie.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Re=F._multiDrawStarts,Mt=F._multiDrawCounts,Ue=F._multiDrawCount,Jt=pt?ct.get(pt).bytesPerElement:1,Je=z.get(R).currentProgram.getUniforms();for(let pn=0;pn<Ue;pn++)Je.setValue(L,"_gl_DrawID",pn),ie.render(Re[pn]/Jt,Mt[pn])}else if(F.isInstancedMesh)ie.renderInstances(yt,me,F.count);else if(C.isInstancedBufferGeometry){let Re=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,Mt=Math.min(C.instanceCount,Re);ie.renderInstances(yt,me,Mt)}else ie.render(yt,me)};function us(u,y,C,R){V!==null&&u.isNodeMaterial&&V.setObject(R,u),Xt===!0&&wt.setState(u,C,!1),u.transparent===!0&&u.side===wn&&u.forceSinglePass===!1?(u.side=Be,u.needsUpdate=!0,Rn(u,y,R),u.side=si,u.needsUpdate=!0,Rn(u,y,R),u.side=wn):Rn(u,y,R)}this.compile=function(u,y,C=null){C===null&&(C=u),V!==null&&V.renderStart(u,y,C),A=lt.get(C),A.init(y),x.push(A),C.traverseVisible(function(F){F.isLight&&F.layers.test(y.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),u!==C&&u.traverseVisible(function(F){F.isLight&&F.layers.test(y.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights(),V!==null&&V.updateLights(A.state.lightsArray),Kt=this.localClippingEnabled,Xt=wt.init(this.clippingPlanes,Kt),Xt===!0&&wt.setGlobalState(this.clippingPlanes,y),V!==null&&Et.render(A.state.shadowsArray,C,y);let R=new Set;return u.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let at=F.material;if(at)if(Array.isArray(at))for(let ot=0;ot<at.length;ot++){let ut=at[ot];us(ut,C,y,F),R.add(ut)}else us(at,C,y,F),R.add(at)}),A=x.pop(),V!==null&&V.renderEnd(),R},this.compileAsync=function(u,y,C=null){let R=this.compile(u,y,C);return new Promise(F=>{function at(){if(R.forEach(function(ot){let pt=z.get(ot).currentProgram;(pt===void 0||pt.isReady())&&R.delete(ot)}),R.size===0){F(u);return}setTimeout(at,10)}Vt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let He=null;function Ce(u){He&&He(u)}function ar(){Cn.stop()}function or(){Cn.start()}let Cn=new Ah;Cn.setAnimationLoop(Ce),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(u){He=u,bt.setAnimationLoop(u),u===null?Cn.stop():Cn.start()},bt.addEventListener("sessionstart",ar),bt.addEventListener("sessionend",or),this.render=function(u,y){if(y!==void 0&&y.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(u,y);let C=bt.enabled===!0&&bt.isPresenting===!0,R=T!==null&&(it===null||C)&&T.begin(U,it);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(y),y=bt.getCamera()),u.isScene===!0&&u.onBeforeRender(U,u,y,it),A=lt.get(u,x.length),A.init(y),A.state.textureUnits=X.getTextureUnits(),x.push(A),zt.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Bt.setFromProjectionMatrix(zt,hn,y.reversedDepth),Kt=this.localClippingEnabled,Xt=wt.init(this.clippingPlanes,Kt),b=ft.get(u,P.length),b.init(),P.push(b),bt.enabled===!0&&bt.isPresenting===!0){let ot=U.xr.getDepthSensingMesh();ot!==null&&di(ot,y,-1/0,U.sortObjects)}di(u,y,0,U.sortObjects),b.finish(),V!==null&&V.updateLights(A.state.lightsArray),U.sortObjects===!0&&b.sort(St,Nt),re=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,re&&Ut.addToRenderList(b,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&wt.beginShadows();let F=A.state.shadowsArray;if(Et.render(F,u,y),Xt===!0&&wt.endShadows(),(R&&T.hasRenderPass())===!1){let ot=b.opaque,ut=b.transmissive;if(A.setupLights(),y.isArrayCamera){let pt=y.cameras;if(ut.length>0)for(let mt=0,Tt=pt.length;mt<Tt;mt++){let Rt=pt[mt];ds(ot,ut,u,Rt)}re&&Ut.render(u);for(let mt=0,Tt=pt.length;mt<Tt;mt++){let Rt=pt[mt];fi(b,u,Rt,Rt.viewport)}}else ut.length>0&&ds(ot,ut,u,y),re&&Ut.render(u),fi(b,u,y)}it!==null&&Z===0&&(X.updateMultisampleRenderTarget(it),X.updateRenderTargetMipmap(it)),R&&T.end(U),u.isScene===!0&&u.onAfterRender(U,u,y),st.resetDefaultState(),$=-1,Q=null,x.pop(),x.length>0?(A=x[x.length-1],X.setTextureUnits(A.state.textureUnits),Xt===!0&&wt.setGlobalState(U.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,V!==null&&V.renderEnd()};function di(u,y,C,R){if(u.visible===!1)return;if(u.layers.test(y.layers)){if(u.isGroup)C=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(y);else if(u.isLightProbeGrid)A.pushLightProbeGrid(u);else if(u.isLight)A.pushLight(u),u.castShadow&&A.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||u.intersectsFrustum(Bt)){R&&de.setFromMatrixPosition(u.matrixWorld).applyMatrix4(zt);let ot=W.update(u),ut=u.material;ut.visible&&b.push(u,ot,ut,C,de.z,null,y)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||u.intersectsFrustum(Bt))){let ot=W.update(u),ut=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),de.copy(u.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),de.copy(ot.boundingSphere.center)),de.applyMatrix4(u.matrixWorld).applyMatrix4(zt)),Array.isArray(ut)){let pt=ot.groups;for(let mt=0,Tt=pt.length;mt<Tt;mt++){let Rt=pt[mt],yt=ut[Rt.materialIndex];yt&&yt.visible&&b.push(u,ot,yt,C,de.z,Rt,y)}}else ut.visible&&b.push(u,ot,ut,C,de.z,null,y)}}let at=u.children;for(let ot=0,ut=at.length;ot<ut;ot++)di(at[ot],y,C,R)}function fi(u,y,C,R){let{opaque:F,transmissive:at,transparent:ot}=u;A.setupLightsView(C),Xt===!0&&wt.setGlobalState(U.clippingPlanes,C),R&&m.viewport(nt.copy(R)),F.length>0&&pi(F,y,C),at.length>0&&pi(at,y,C),ot.length>0&&pi(ot,y,C),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function ds(u,y,C,R){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[R.id]===void 0){let yt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[R.id]=new ke(1,1,{generateMipmaps:!0,type:yt?fn:Ve,minFilter:ai,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let at=A.state.transmissionRenderTarget[R.id],ot=R.viewport||nt;at.setSize(ot.z*U.transmissionResolutionScale,ot.w*U.transmissionResolutionScale);let ut=U.getRenderTarget(),pt=U.getActiveCubeFace(),mt=U.getActiveMipmapLevel();U.setRenderTarget(at),U.getClearColor(Ht),Dt=U.getClearAlpha(),Dt<1&&U.setClearColor(16777215,.5),U.clear(),re&&Ut.render(C);let Tt=U.toneMapping;U.toneMapping=un;let Rt=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),A.setupLightsView(R),Xt===!0&&wt.setGlobalState(U.clippingPlanes,R),pi(u,C,R),X.updateMultisampleRenderTarget(at),X.updateRenderTargetMipmap(at),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Zt=0,me=y.length;Zt<me;Zt++){let le=y[Zt],{object:ie,geometry:Re,material:Mt,group:Ue}=le;if(Mt.side===wn&&ie.layers.test(R.layers)){let Jt=Mt.side;Mt.side=Be,Mt.needsUpdate=!0,Ze(ie,C,R,Re,Mt,Ue),Mt.side=Jt,Mt.needsUpdate=!0,yt=!0}}yt===!0&&(X.updateMultisampleRenderTarget(at),X.updateRenderTargetMipmap(at))}U.setRenderTarget(ut,pt,mt),U.setClearColor(Ht,Dt),Rt!==void 0&&(R.viewport=Rt),U.toneMapping=Tt}function pi(u,y,C){let R=y.isScene===!0?y.overrideMaterial:null;for(let F=0,at=u.length;F<at;F++){let ot=u[F],{object:ut,geometry:pt,group:mt}=ot,Tt=ot.material;Tt.allowOverride===!0&&R!==null&&(Tt=R),ut.layers.test(C.layers)&&Ze(ut,y,C,pt,Tt,mt)}}function Ze(u,y,C,R,F,at){V!==null&&F.isNodeMaterial&&V.setObject(u,F),u.onBeforeRender(U,y,C,R,F,at),u.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),F.onBeforeRender(U,y,C,R,u,at),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,U.renderBufferDirect(C,y,R,F,u,at),F.side=si,F.needsUpdate=!0,U.renderBufferDirect(C,y,R,F,u,at),F.side=wn):U.renderBufferDirect(C,y,R,F,u,at),u.onAfterRender(U,y,C,R,F,at)}function Rn(u,y,C){y.isScene!==!0&&(y=xe);let R=z.get(u),F=A.state.lights,at=A.state.shadowsArray,ot=F.state.version,ut=dt.getParameters(u,F.state,at,y,C,A.state.lightProbeGridArray),pt=dt.getProgramCacheKey(ut),mt=R.programs;R.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?y.environment:null,R.fog=y.fog;let Tt=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;R.envMap=rt.get(u.envMap||R.environment,Tt),R.envMapRotation=R.environment!==null&&u.envMap===null?y.environmentRotation:u.envMapRotation,mt===void 0&&(u.addEventListener("dispose",Ge),mt=new Map,R.programs=mt);let Rt=mt.get(pt);if(Rt!==void 0){if(R.currentProgram===Rt&&R.lightsStateVersion===ot)return fs(u,ut),Rt}else ut.uniforms=dt.getUniforms(u),V!==null&&u.isNodeMaterial&&V.build(u,C,ut),u.onBeforeCompile(ut,U),Rt=dt.acquireProgram(ut,pt),mt.set(pt,Rt),R.uniforms=ut.uniforms;let yt=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(yt.clippingPlanes=wt.uniform),fs(u,ut),R.needsLights=Ri(u),R.lightsStateVersion=ot,R.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.sunLights.value=F.state.sun,yt.sunLightShadows.value=F.state.sunShadow,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.sunShadowMatrix.value=F.state.sunShadowMatrix,yt.sunShadowCascade.value=F.state.sunShadowCascade,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),R.lightProbeGrid=A.state.lightProbeGridArray.length>0,R.currentProgram=Rt,R.uniformsList=null,Rt}function Ci(u){if(u.uniformsList===null){let y=u.currentProgram.getUniforms();u.uniformsList=as.seqWithValue(y.seq,u.uniforms)}return u.uniformsList}function fs(u,y){let C=z.get(u);C.outputColorSpace=y.outputColorSpace,C.batching=y.batching,C.batchingColor=y.batchingColor,C.instancing=y.instancing,C.instancingColor=y.instancingColor,C.instancingMorph=y.instancingMorph,C.skinning=y.skinning,C.morphTargets=y.morphTargets,C.morphNormals=y.morphNormals,C.morphColors=y.morphColors,C.morphTargetsCount=y.morphTargetsCount,C.numClippingPlanes=y.numClippingPlanes,C.numIntersection=y.numClipIntersection,C.vertexAlphas=y.vertexAlphas,C.vertexTangents=y.vertexTangents,C.toneMapping=y.toneMapping}function lr(u,y){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;S.setFromMatrixPosition(y.matrixWorld);for(let C=0,R=u.length;C<R;C++){let F=u[C];if(F.texture!==null&&F.boundingBox.containsPoint(S))return F}return null}function mo(u,y,C,R,F){y.isScene!==!0&&(y=xe),X.resetTextureUnits();let at=y.fog,ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?y.environment:null,ut=it===null?U.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qt.workingColorSpace,pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,mt=rt.get(R.envMap||ot,pt),Tt=R.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,Rt=!!C.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),yt=!!C.morphAttributes.position,Zt=!!C.morphAttributes.normal,me=!!C.morphAttributes.color,le=un;R.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(le=U.toneMapping);let ie=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Re=ie!==void 0?ie.length:0,Mt=z.get(R),Ue=A.state.lights;if(Xt===!0&&(Kt===!0||u!==Q)){let ae=u===Q&&R.id===$;wt.setState(R,u,ae)}let Jt=!1;R.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ue.state.version||Mt.outputColorSpace!==ut||F.isBatchedMesh&&Mt.batching===!1||!F.isBatchedMesh&&Mt.batching===!0||F.isBatchedMesh&&Mt.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&Mt.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&Mt.instancing===!1||!F.isInstancedMesh&&Mt.instancing===!0||F.isSkinnedMesh&&Mt.skinning===!1||!F.isSkinnedMesh&&Mt.skinning===!0||F.isInstancedMesh&&Mt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Mt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Mt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Mt.instancingMorph===!1&&F.morphTexture!==null||Mt.envMap!==mt||R.fog===!0&&Mt.fog!==at||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==wt.numPlanes||Mt.numIntersection!==wt.numIntersection)||Mt.vertexAlphas!==Tt||Mt.vertexTangents!==Rt||Mt.morphTargets!==yt||Mt.morphNormals!==Zt||Mt.morphColors!==me||Mt.toneMapping!==le||Mt.morphTargetsCount!==Re||!!Mt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,Mt.__version=R.version);let Je=Mt.currentProgram;Jt===!0&&(Je=Rn(R,y,F),V&&R.isNodeMaterial&&V.onUpdateProgram(R,Je,Mt));let pn=!1,Wn=!1,Pi=!1,ee=Je.getUniforms(),pe=Mt.uniforms;if(m.useProgram(Je.program)&&(pn=!0,Wn=!0,Pi=!0),R.id!==$&&($=R.id,Wn=!0),Mt.needsLights){let ae=lr(A.state.lightProbeGridArray,F);Mt.lightProbeGrid!==ae&&(Mt.lightProbeGrid=ae,Wn=!0)}if(pn||Q!==u){m.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),ee.setValue(L,"projectionMatrix",u.projectionMatrix),ee.setValue(L,"viewMatrix",u.matrixWorldInverse);let qn=ee.map.cameraPosition;qn!==void 0&&qn.setValue(L,ne.setFromMatrixPosition(u.matrixWorld)),M.logarithmicDepthBuffer&&ee.setValue(L,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ee.setValue(L,"isOrthographic",u.isOrthographicCamera===!0),Q!==u&&(Q=u,Wn=!0,Pi=!0)}if(Mt.needsLights&&(Ue.state.sunShadowMap.length>0&&ee.setValue(L,"sunShadowMap",Ue.state.sunShadowMap,X),Ue.state.directionalShadowMap.length>0&&ee.setValue(L,"directionalShadowMap",Ue.state.directionalShadowMap,X),Ue.state.spotShadowMap.length>0&&ee.setValue(L,"spotShadowMap",Ue.state.spotShadowMap,X),Ue.state.pointShadowMap.length>0&&ee.setValue(L,"pointShadowMap",Ue.state.pointShadowMap,X)),F.isSkinnedMesh){ee.setOptional(L,F,"bindMatrix"),ee.setOptional(L,F,"bindMatrixInverse");let ae=F.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),ee.setValue(L,"boneTexture",ae.boneTexture,X))}F.isBatchedMesh&&(ee.setOptional(L,F,"batchingTexture"),ee.setValue(L,"batchingTexture",F._matricesTexture,X),ee.setOptional(L,F,"batchingIdTexture"),ee.setValue(L,"batchingIdTexture",F._indirectTexture,X),ee.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ee.setValue(L,"batchingColorTexture",F._colorsTexture,X));let Xn=C.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&I.update(F,C,Je),(Wn||Mt.receiveShadow!==F.receiveShadow)&&(Mt.receiveShadow=F.receiveShadow,ee.setValue(L,"receiveShadow",F.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&y.environment!==null&&(pe.envMapIntensity.value=y.environmentIntensity),pe.dfgLUT!==void 0&&(pe.dfgLUT.value=pg()),Wn){if(ee.setValue(L,"toneMappingExposure",U.toneMappingExposure),Mt.needsLights&&cr(pe,Pi),at&&R.fog===!0&&xt.refreshFogUniforms(pe,at),xt.refreshMaterialUniforms(pe,R,j,q,A.state.transmissionRenderTarget[u.id]),Mt.needsLights&&Mt.lightProbeGrid){let ae=Mt.lightProbeGrid;pe.probesSH.value=ae.texture,pe.probesMin.value.copy(ae.boundingBox.min),pe.probesMax.value.copy(ae.boundingBox.max),pe.probesResolution.value.copy(ae.resolution)}as.upload(L,Ci(Mt),pe,X)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(as.upload(L,Ci(Mt),pe,X),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ee.setValue(L,"center",F.center),ee.setValue(L,"modelViewMatrix",F.modelViewMatrix),ee.setValue(L,"normalMatrix",F.normalMatrix),ee.setValue(L,"modelMatrix",F.matrixWorld),R.uniformsGroups!==void 0){let ae=R.uniformsGroups;for(let qn=0,Ii=ae.length;qn<Ii;qn++){let ql=ae[qn];tt.update(ql,Je),tt.bind(ql,Je)}}return Je}function cr(u,y){u.ambientLightColor.needsUpdate=y,u.lightProbe.needsUpdate=y,u.sunLights.needsUpdate=y,u.sunLightShadows.needsUpdate=y,u.directionalLights.needsUpdate=y,u.directionalLightShadows.needsUpdate=y,u.pointLights.needsUpdate=y,u.pointLightShadows.needsUpdate=y,u.spotLights.needsUpdate=y,u.spotLightShadows.needsUpdate=y,u.rectAreaLights.needsUpdate=y,u.hemisphereLights.needsUpdate=y}function Ri(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(u,y,C){let R=z.get(u);R.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),z.get(u.texture).__webglTexture=y,z.get(u.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:C,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,y){let C=z.get(u);C.__webglFramebuffer=y,C.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(u,y=0,C=0){it=u,J=y,Z=C;let R=null,F=!1,at=!1;if(u){let ut=z.get(u);if(ut.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),nt.copy(u.viewport),Ct.copy(u.scissor),_t=u.scissorTest,m.viewport(nt),m.scissor(Ct),m.setScissorTest(_t),$=-1;return}else if(ut.__webglFramebuffer===void 0)X.setupRenderTarget(u);else if(ut.__hasExternalTextures)X.rebindTextures(u,z.get(u.texture).__webglTexture,z.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){let Tt=u.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&z.has(Tt)&&(u.width!==Tt.image.width||u.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(u)}}let pt=u.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(at=!0);let mt=z.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(mt[y])?R=mt[y][C]:R=mt[y],F=!0):u.samples>0&&X.useMultisampledRTT(u)===!1?R=z.get(u).__webglMultisampledFramebuffer:Array.isArray(mt)?R=mt[C]:R=mt,nt.copy(u.viewport),Ct.copy(u.scissor),_t=u.scissorTest}else nt.copy(vt).multiplyScalar(j).floor(),Ct.copy(Ot).multiplyScalar(j).floor(),_t=jt;if(C!==0&&(R=H),m.bindFramebuffer(L.FRAMEBUFFER,R)&&m.drawBuffers(u,R),m.viewport(nt),m.scissor(Ct),m.setScissorTest(_t),F){let ut=z.get(u.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+y,ut.__webglTexture,C)}else if(at){let ut=y;for(let pt=0;pt<u.textures.length;pt++){let mt=z.get(u.textures[pt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+pt,mt.__webglTexture,C,ut)}}else if(u!==null&&C!==0){let ut=z.get(u.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,C)}$=-1};function ps(u){let y=z.get(u);return(y.__readFormat!==u.format||y.__readType!==u.type)&&(y.__readFormat=u.format,y.__readType=u.type,y.__formatReadable=M.textureFormatReadable(u.format),y.__typeReadable=M.textureTypeReadable(u.type)),y}this.readRenderTargetPixels=function(u,y,C,R,F,at,ot,ut=0){if(!(u&&u.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=z.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){m.bindFramebuffer(L.FRAMEBUFFER,pt);try{let mt=u.textures[ut],Tt=mt.format,Rt=mt.type;u.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let yt=ps(mt);if(yt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=u.width-R&&C>=0&&C<=u.height-F&&L.readPixels(y,C,R,F,et.convert(Tt),et.convert(Rt),at)}finally{let mt=it!==null?z.get(it).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(u,y,C,R,F,at,ot,ut=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=z.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt)if(y>=0&&y<=u.width-R&&C>=0&&C<=u.height-F){m.bindFramebuffer(L.FRAMEBUFFER,pt);let mt=u.textures[ut],Tt=mt.format,Rt=mt.type;u.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let yt=ps(mt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(y,C,R,F,et.convert(Tt),et.convert(Rt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let me=it!==null?z.get(it).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,me);let le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jc(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Zt),L.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,y=null,C=0){let R=Math.pow(2,-C),F=Math.floor(u.image.width*R),at=Math.floor(u.image.height*R),ot=y!==null?y.x:0,ut=y!==null?y.y:0;X.setTexture2D(u,0),L.copyTexSubImage2D(L.TEXTURE_2D,C,0,0,ot,ut,F,at),m.unbindTexture()},this.copyTextureToTexture=function(u,y,C=null,R=null,F=0,at=0){let ot,ut,pt,mt,Tt,Rt,yt,Zt,me,le=u.isCompressedTexture?u.mipmaps[at]:u.image;if(C!==null)ot=C.max.x-C.min.x,ut=C.max.y-C.min.y,pt=C.isBox3?C.max.z-C.min.z:1,mt=C.min.x,Tt=C.min.y,Rt=C.isBox3?C.min.z:0;else{let pe=Math.pow(2,-F);ot=Math.floor(le.width*pe),ut=Math.floor(le.height*pe),u.isDataArrayTexture?pt=le.depth:u.isData3DTexture?pt=Math.floor(le.depth*pe):pt=1,mt=0,Tt=0,Rt=0}R!==null?(yt=R.x,Zt=R.y,me=R.z):(yt=0,Zt=0,me=0);let ie=et.convert(y.format),Re=et.convert(y.type),Mt;y.isData3DTexture?(X.setTexture3D(y,0),Mt=L.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(X.setTexture2DArray(y,0),Mt=L.TEXTURE_2D_ARRAY):(X.setTexture2D(y,0),Mt=L.TEXTURE_2D),m.activeTexture(L.TEXTURE0),m.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,y.flipY),m.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),m.pixelStorei(L.UNPACK_ALIGNMENT,y.unpackAlignment);let Ue=m.getParameter(L.UNPACK_ROW_LENGTH),Jt=m.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=m.getParameter(L.UNPACK_SKIP_PIXELS),pn=m.getParameter(L.UNPACK_SKIP_ROWS),Wn=m.getParameter(L.UNPACK_SKIP_IMAGES);m.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),m.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),m.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt);let Pi=u.isDataArrayTexture||u.isData3DTexture,ee=y.isDataArrayTexture||y.isData3DTexture;if(u.isDepthTexture){let pe=z.get(u),Xn=z.get(y),ae=z.get(pe.__renderTarget),qn=z.get(Xn.__renderTarget);m.bindFramebuffer(L.READ_FRAMEBUFFER,ae.__webglFramebuffer),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ii=0;Ii<pt;Ii++)Pi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(u).__webglTexture,F,Rt+Ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(y).__webglTexture,at,me+Ii)),L.blitFramebuffer(mt,Tt,ot,ut,yt,Zt,ot,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||u.isRenderTargetTexture||z.has(u)){let pe=z.get(u),Xn=z.get(y);m.bindFramebuffer(L.READ_FRAMEBUFFER,D),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let ae=0;ae<pt;ae++)Pi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,F,Rt+ae):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,F),ee?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xn.__webglTexture,at,me+ae):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xn.__webglTexture,at),F!==0?L.blitFramebuffer(mt,Tt,ot,ut,yt,Zt,ot,ut,L.COLOR_BUFFER_BIT,L.NEAREST):ee?L.copyTexSubImage3D(Mt,at,yt,Zt,me+ae,mt,Tt,ot,ut):L.copyTexSubImage2D(Mt,at,yt,Zt,mt,Tt,ot,ut);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ee?u.isDataTexture||u.isData3DTexture?L.texSubImage3D(Mt,at,yt,Zt,me,ot,ut,pt,ie,Re,le.data):y.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,at,yt,Zt,me,ot,ut,pt,ie,le.data):L.texSubImage3D(Mt,at,yt,Zt,me,ot,ut,pt,ie,Re,le):u.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,at,yt,Zt,ot,ut,ie,Re,le.data):u.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,at,yt,Zt,le.width,le.height,ie,le.data):L.texSubImage2D(L.TEXTURE_2D,at,yt,Zt,ot,ut,ie,Re,le);m.pixelStorei(L.UNPACK_ROW_LENGTH,Ue),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt),m.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),m.pixelStorei(L.UNPACK_SKIP_ROWS,pn),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Wn),at===0&&y.generateMipmaps&&L.generateMipmap(Mt),m.unbindTexture()},this.initRenderTarget=function(u){z.get(u).__webglFramebuffer===void 0&&X.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?X.setTextureCube(u,0):u.isData3DTexture?X.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?X.setTexture2DArray(u,0):X.setTexture2D(u,0),m.unbindTexture()},this.resetState=function(){J=0,Z=0,it=null,m.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Lh="data:image/png;base64,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";var sr={cols:159,rows:86,pitchX:.56,pitchZ:1.18,x0:-44.52,z0:-50.74},ao=[{id:"hyd",name:"Hyderabad",x:-12.87,z:17.25},{id:"ndb",name:"Nandurbar",x:-25.67,z:4.52},{id:"kgm",name:"Kothagudem",x:-6.44,z:16.73},{id:"jh",name:"Jharkhand",x:8.45,z:-2.97}],Dh=[[],[31,39,17],[27,42,17],[25,45,17],[25,25,17,27,46,17,58,58,17,60,61,17],[31,50,17,54,65,17],[32,65,17],[33,35,13,36,64,17],[30,38,13,39,62,17],[30,39,13,40,61,17],[30,43,13,44,58,17],[30,44,13,45,58,17],[30,46,13,47,60,17],[32,42,13,43,48,12,49,51,17,52,52,12,53,61,17],[36,42,13,43,55,12,56,56,17,58,61,17],[40,41,27,42,56,12],[37,42,27,43,57,12],[35,42,27,43,57,12],[35,45,27,46,57,12,59,60,34],[35,46,27,47,52,12,53,61,34,63,63,34],[33,47,27,48,48,11,49,52,12,53,65,34],[32,46,27,47,51,11,52,52,33,53,69,34],[29,34,28,35,35,27,36,36,11,37,43,27,44,49,11,50,51,33,52,67,34],[29,35,28,36,48,11,49,56,33,57,66,34],[28,37,28,38,38,11,39,39,28,40,48,11,49,57,33,58,65,34,143,143,2,149,151,2],[25,39,28,40,49,11,50,61,33,62,64,34,141,153,2],[23,40,28,41,47,11,48,49,8,50,67,33,136,152,2],[22,42,28,43,50,11,51,71,33,134,157,2],[12,14,28,20,42,28,43,43,11,44,47,28,48,50,11,51,75,33,108,111,29,133,147,2,148,149,3,150,156,2],[11,49,28,50,78,33,108,111,29,127,140,2,141,149,3,150,155,2],[9,51,28,52,85,33,86,89,4,108,111,29,130,138,2,139,147,3,148,150,2,156,156,2],[8,54,28,55,55,19,56,86,33,87,92,4,109,113,35,120,120,3,128,143,3,144,146,24,147,148,2],[12,51,28,52,58,19,59,85,33,86,99,4,102,102,4,108,108,4,109,109,35,111,117,35,118,141,3,142,145,24],[11,48,28,49,58,19,59,86,33,87,107,4,108,108,35,114,115,35,117,139,3,140,145,24],[12,45,28,46,57,19,58,89,33,90,106,4,107,108,35,118,129,22,130,137,3,138,145,24],[14,45,28,46,55,19,56,57,33,58,58,19,59,84,33,85,106,4,107,111,35,118,132,22,133,136,3,137,138,24,139,143,21],[16,48,28,49,55,19,56,56,33,57,66,19,67,67,33,68,68,19,69,71,33,72,72,19,73,82,33,83,103,4,104,106,14,107,109,35,131,131,22,132,135,3,136,143,21],[17,37,28,38,38,19,39,47,28,48,54,19,55,57,33,58,76,19,77,82,33,83,94,4,95,96,14,97,102,4,103,106,14,107,107,35,131,134,3,135,142,21],[13,13,10,16,25,10,26,26,28,27,27,10,28,36,28,37,41,19,42,47,28,48,55,19,56,58,33,59,78,19,79,82,33,83,87,14,88,88,4,89,106,14,107,109,35,129,130,32,131,132,3,133,134,23,135,141,21],[4,28,10,29,37,28,38,41,19,42,42,28,43,79,19,80,81,33,82,83,6,84,104,14,105,111,35,126,130,32,131,135,23,137,140,21],[1,29,10,30,36,28,37,72,19,73,84,6,85,99,14,100,110,35,125,129,32,131,136,23],[3,32,10,33,34,28,35,75,19,76,86,6,87,95,14,96,111,35,126,127,32,131,136,23],[6,10,10,13,33,10,34,74,19,75,87,6,88,99,14,100,112,35,131,134,23],[12,32,10,33,72,19,73,85,6,86,99,14,100,112,35,132,134,23],[5,22,10,25,32,10,33,69,19,70,83,6,84,91,25,92,96,14,97,100,25,101,112,35,132,135,23],[7,23,10,25,31,10,32,34,20,35,68,19,69,83,6,84,103,25,104,107,35,109,109,35,112,112,35],[9,22,10,25,33,10,34,37,20,38,46,19,47,50,20,51,54,19,55,56,20,57,57,19,58,66,20,67,68,19,69,82,6,83,102,25],[11,20,10,25,30,10,31,43,20,44,45,19,46,66,20,67,78,6,79,80,25,81,81,6,82,101,25],[14,16,10,26,31,10,32,67,20,68,76,6,77,101,25],[26,28,10,29,67,20,68,77,6,78,100,25],[26,67,20,68,74,6,75,75,25,76,77,6,78,98,25],[26,55,20,56,58,31,59,67,20,68,75,6,76,93,25],[26,52,20,53,53,31,54,54,20,55,63,31,64,66,20,67,67,6,68,68,20,69,75,6,76,90,25],[26,52,20,53,63,31,64,65,20,66,76,6,77,82,25,83,84,1,85,87,25,88,89,1],[27,51,20,52,67,31,68,74,6,75,80,25,81,87,1],[27,48,20,49,51,15,52,68,31,69,72,6,73,76,25,77,84,1],[28,46,20,47,50,15,51,69,31,70,70,6,71,82,1],[28,40,20,41,41,15,42,44,20,45,50,15,51,70,31,71,79,1],[29,40,20,41,50,15,51,66,31,67,76,1],[29,35,20,36,50,15,51,62,31,63,63,1,64,64,31,65,76,1],[29,33,20,34,50,15,51,60,31,61,71,1],[30,34,20,35,48,15,49,50,1,51,54,31,55,70,1],[31,33,9,34,48,15,49,65,1],[32,33,9,34,48,15,49,64,1],[33,47,15,48,64,1],[34,47,15,48,65,1],[35,49,15,50,64,1],[36,53,15,54,65,1],[36,56,15,57,60,1,61,66,30,133,134,0],[37,55,15,56,56,1,57,65,30,133,134,0],[38,38,16,39,51,15,52,65,30,133,134,0],[39,40,16,41,52,15,53,63,30,132,133,0],[40,44,16,45,47,15,48,63,30,132,133,0],[42,45,16,46,63,30],[22,23,18,30,31,18,42,46,16,47,62,30,63,63,26,131,132,0],[25,25,18,30,30,18,43,47,16,48,63,30,131,132,0],[44,49,16,50,60,30],[45,49,16,50,59,30],[45,49,16,50,58,30],[46,49,16,50,55,30],[47,49,16,50,54,30],[27,27,18,49,52,30],[],[138,138,0],[138,139,0],[138,139,0]];var Nh=[{id:"AN",n:"Andaman and Nicobar Islands",x:30.41,z:32.21},{id:"AP",n:"Andhra Pradesh",x:-12.03,z:25.28},{id:"AR",n:"Arunachal Pradesh",x:36.2,z:-19.06},{id:"AS",n:"Assam",x:30.79,z:-11.48},{id:"BR",n:"Bihar",x:10.2,z:-9.63},{id:"CH",n:"Chandigarh",x:-18.07,z:-26.91},{id:"CG",n:"Chhattisgarh",x:-.7,z:2.04},{id:"DH",n:"Dadra and Nagar Haveli and Daman and Diu",x:-29.37,z:8.22},{id:"DL",n:"Delhi",x:-16.92,z:-19.77},{id:"GA",n:"Goa",x:-26.17,z:23.4},{id:"GJ",n:"Gujarat",x:-32.64,z:-1.97},{id:"HR",n:"Haryana",x:-19.52,z:-21.36},{id:"HP",n:"Himachal Pradesh",x:-16.43,z:-31.18},{id:"JK",n:"Jammu and Kashmir",x:-24.14,z:-37.25},{id:"JH",n:"Jharkhand",x:6.61,z:-2.57},{id:"KA",n:"Karnataka",x:-21.51,z:23.13},{id:"KL",n:"Kerala",x:-18.04,z:40.8},{id:"LA",n:"Ladakh",x:-15.94,z:-39.77},{id:"LD",n:"Lakshadweep",x:-27.39,z:37.69},{id:"MP",n:"Madhya Pradesh",x:-9.06,z:-1.09},{id:"MH",n:"Maharashtra",x:-22.17,z:10.82},{id:"MN",n:"Manipur",x:33.24,z:-6.09},{id:"ML",n:"Meghalaya",x:27.12,z:-9.28},{id:"MZ",n:"Mizoram",x:30.43,z:-2.86},{id:"NL",n:"Nagaland",x:35.68,z:-11.05},{id:"OD",n:"Odisha",x:5.99,z:6.4},{id:"PY",n:"Puducherry",x:-8.84,z:37.34},{id:"PB",n:"Punjab",x:-21.87,z:-26.84},{id:"RJ",n:"Rajasthan",x:-26.76,z:-13.79},{id:"SK",n:"Sikkim",x:17.05,z:-15.71},{id:"TN",n:"Tamil Nadu",x:-13.39,z:37.34},{id:"TS",n:"Telangana",x:-11.3,z:15.59},{id:"TR",n:"Tripura",x:26.53,z:-3.04},{id:"UP",n:"Uttar Pradesh",x:-6.09,z:-13.48},{id:"UK",n:"Uttarakhand",x:-10.28,z:-24.95},{id:"WB",n:"West Bengal",x:14.85,z:-.77}];var Uh={TS:"Our laboratory and office, in Hyderabad. Field work in Kothagudem.",MH:"Field work in Nandurbar.",JH:"Field work."};var ho=Math.PI/180,Fh=30,he={w:.5,h:1.1},Ae={back:.008,paper:.004,pocket:.006,flap:.006},Bl=Ae.back+Ae.paper+Ae.pocket+Ae.flap,zl=.53,Ei=.47,Vn={from:.045,to:.6,width:.86},rr={at:.285,r:.155},Vh="SCM / ",gg=100001,_g=41.3,xg=i=>1e5+(i*617531+4127)%9e5,ls={x0:.15,x1:.85,y0:.17,y1:.66,modules:64},kl=[11,13,9,6,10,5],vg=14/24,Vl=10,rn={y0:.715,y1:.865,baseline:.82,font:52},yg=106*ho,sn={radius:.036,hang:.6},Hn={from:new k(-1.5,2.7,1.9),intensity:1.75},Sg=Math.PI-Hn.intensity*(Hn.from.y/Hn.from.length()),oo={across:.8,at:.74,up:.79,shiftY:-.032},Oh={across:.9,at:.5,up:.86,shiftY:0},Bh=[-2,-1],lo=[{at:0,span:1.76,narrow:1.54,tall:1.5,el:22,az:-38,aim:-.2,lift:.2,out:0,fog:[.98,1.7],haze:[.66,.96]},{at:1.6,span:1.6,narrow:1.4,tall:1.36,el:28,az:-29,aim:-.2,lift:.2,out:0,fog:[.98,1.7],haze:[.66,.96]},{at:2.88,span:2.1,narrow:1.5,tall:1.9,el:46,az:-21,aim:-.12,lift:.1,out:0,fog:[1.2,2.6],haze:[.3,.72]},{at:4.16,span:9.4,narrow:5.2,tall:4.6,el:64,az:-11,aim:0,lift:.04,out:0,fog:[1.25,3.3],haze:Bh},{at:6.4,span:97,narrow:96,tall:112,el:89.6,az:0,aim:0,lift:0,out:1,fog:[30,40],haze:Bh}],$e={open:[0,.48],swell:[.24,.88],release:1.04,fall:.56,land:.16,soak:.96,shut:[2.72,3.52],marked:[5.2,6],pinned:[5.92,6.4],captions:[0,2.6,5],end:6.56},Se=(i,t,e)=>Math.min(e,Math.max(t,i)),Ti=(i,t,e)=>i+(t-i)*e,kn=i=>i*i*(3-2*i),zh=i=>i*i*i*(i*(i*6-15)+10),co=(i,[t,e])=>Se((i-t)/(e-t),0,1);function kh(i,t){let e=i.length-1,n=a=>i[a+1]-i[a],s=a=>(t[a+1]-t[a])/n(a),r=t.map((a,o)=>{if(o===0)return s(0);if(o===e)return 0;let l=s(o-1),c=s(o);if(l*c<=0)return 0;let d=2*n(o)+n(o-1),p=n(o)+2*n(o-1);return(d+p)/(d/l+p/c)});return a=>{if(a<=i[0])return t[0];if(a>=i[e])return t[e];let o=0;for(;a>i[o+1];)o+=1;let l=n(o),c=(a-i[o])/l,d=c*c,p=d*c;return(2*p-3*d+1)*t[o]+(p-2*d+c)*l*r[o]+(3*d-2*p)*t[o+1]+(p-d)*l*r[o+1]}}function Wl(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Gn=512,cs=i=>Math.round(i*he.h*(Gn/he.w));function po(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let a=Wl(s);for(let o=0;o<r;o+=1){let l=a()*t,c=a()*e,d=4+a()*14,p=a()*Math.PI;i.strokeStyle=a()<.5?"rgba(255,255,255,0.6)":"rgba(40,70,40,0.04)",i.lineWidth=1,i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(p)*d,c+Math.sin(p)*d),i.stroke()}}function Mg(i,t,e){let n=i.getContext("2d");if(po(n,i.width,i.height,t.paper,11,500),e){let s=i.width*.9;n.drawImage(e,(i.width-s)/2,(i.height-s)/2-i.height*.01,s,s)}}function bg(i,t){let e=i.width,n=i.getContext("2d");po(n,e,i.height,"#f5f7f7",5,2600);let s=e/(he.w*Vn.width),r=(rr.at-Vn.from)*he.h*s;n.strokeStyle=t.ink,n.lineWidth=7,n.lineCap="round",n.setLineDash([20,19]),n.beginPath(),n.arc(e/2,r,rr.r*s,0,Math.PI*2),n.stroke(),n.setLineDash([])}var uo='"Nunito"';function Xl(i,t){i.font=`700 ${t}px ${uo}, system-ui, sans-serif`,i.textBaseline="alphabetic"}function wg(i){Xl(i,rn.font);let t=i.measureText(Vh).width,e=0;for(let r=0;r<10;r+=1)e=Math.max(e,i.measureText(String(r)).width);let n=Math.ceil(e)+2,s=(Gn-(t+n*6))/2;return{start:s,digits:s+t,advance:n}}function Ag(i,t,e){let n=i.width,s=i.height,r=i.getContext("2d");po(r,n,s,t.paper,17,450),r.fillStyle=t.ink,Xl(r,rn.font),r.textAlign="left",r.fillText(Vh,e.start,s*rn.baseline)}var fo={w:64,h:192};function Tg(i,t){let e=i.getContext("2d"),n=(rn.y1-rn.y0)*cs(Ei);e.setTransform(1,0,0,1,0,0),e.fillStyle="#000",e.fillRect(0,0,i.width,i.height),e.setTransform(fo.w/t.advance,0,0,fo.h/n,0,0),e.fillStyle="#fff",Xl(e,rn.font),e.textAlign="center";let s=(rn.baseline-rn.y0)*cs(Ei);for(let r=0;r<10;r+=1)e.fillText(String(r),(r+.5)*t.advance,s);e.setTransform(1,0,0,1,0,0)}function Eg(i,t,e){let n=i.getContext("2d");n.drawImage(t,0,0),n.drawImage(e,0,t.height);let s=n.createLinearGradient(0,t.height,0,t.height+14);s.addColorStop(0,"rgba(30,60,35,0.26)"),s.addColorStop(1,"rgba(30,60,35,0)"),n.fillStyle=s,n.fillRect(0,t.height,i.width,14)}function Cg(i,t){po(i.getContext("2d"),i.width,i.height,t.paper,29,500)}function Rg(i,t){let e=i.width,n=i.getContext("2d"),s=n.createImageData(e,e),r=Wl(23),a=[2,3,4,5,7].map(d=>({k:d,amp:.11*r()/d+.006,phase:r()*Math.PI*2})),[o,l,c]=t;for(let d=0;d<e;d+=1)for(let p=0;p<e;p+=1){let h=(p+.5)/e-.5,_=(d+.5)/e-.5,v=Math.hypot(h,_),w=Math.atan2(_,h),g=.4;a.forEach(A=>{g*=1+A.amp*Math.sin(A.k*w+A.phase)});let f=v/g,E=1-.5*f*f+(r()-.5)*.02,S=1.08-.3*kn(Se((f-.55)/.45,0,1))+(r()-.5)*.05,b=(d*e+p)*4;s.data[b]=Se(o*S,0,255),s.data[b+1]=Se(l*S,0,255),s.data[b+2]=Se(c*S,0,255),s.data[b+3]=Se(E,0,1)*255}n.putImageData(s,0,0)}var Gl=.7;function Pg(i){let t=i.width,e=i.getContext("2d"),n=t*Gl,s=n*(he.w/he.h),r=(t-s)/2,a=(t-n)/2;e.clearRect(0,0,t,t),e.filter=`blur(${t*.035}px)`,e.fillStyle="#000",e.fillRect(r-t*.02,a-t*.02,s+t*.04,n+t*.04),e.filter="none",e.globalCompositeOperation="destination-out",e.fillRect(r,a,s,n),e.globalCompositeOperation="source-over"}function ci(i,t){return Object.assign(document.createElement("canvas"),{width:i,height:t})}function hi(i){let t=new Us(i);return t.colorSpace=Fe,t.anisotropy=8,t}function Hl(i){let t=Hl.ctx||(Hl.ctx=document.createElement("canvas").getContext("2d"));t.fillStyle="#000",t.fillStyle=i.trim();let e=t.fillStyle;return[1,3,5].map(n=>parseInt(e.slice(n,n+2),16))}function Ig(i){let t=i.querySelector("[data-film]"),e=i.querySelector("[data-film-screen]"),n=i.querySelector("[data-frame]"),s=i.querySelector("[data-places]"),r=new Map([...i.querySelectorAll("[data-place]")].map(u=>[u.dataset.place,u])),a=i.querySelector("[data-film-toggle]"),o=[...i.querySelectorAll("[data-film-caption]")],l=new io({antialias:!0,powerPreference:"high-performance"});l.shadowMap.enabled=!0,l.shadowMap.type=Si;let c=l.domElement;c.setAttribute("aria-hidden","true");let d=new Rs,p=new Le(Fh,1,.1,100);d.fog=new Cs(16777215,1,10),d.background=new Lt;let h={},_=ci(Gn,cs(zl)),v=ci(Gn,cs(Ei)),w=ci(fo.w*10,fo.h),g=ci(Gn,cs(zl)+cs(Ei)),f=ci(Gn,Math.round(Gn*((Vn.to-Vn.from)*he.h)/(he.w*Vn.width))),E=ci(256,300),N=ci(256,256),S=ci(256,256),b={flap:hi(_),pocket:hi(v),closed:hi(g),paper:hi(f),inside:hi(E),spot:hi(N),digits:hi(w)};Pg(S);let A=hi(S),P=null,x={value:new Gt(-2,-1)},T={value:0},U=(u,y)=>(u.onBeforeCompile=C=>{C.uniforms.uHaze=x,C.uniforms.uSoft=T,C.fragmentShader=C.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uHaze;
uniform float uSoft;`).replace("#include <fog_fragment>",`
          float llFar = smoothstep( fogNear, fogFar, vFogDepth );
          float llNear = 1.0 - smoothstep( uHaze.x, uHaze.y, vFogDepth );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, max( uSoft, max( llFar, llNear ) ) );`),y&&y(C)},y&&(u.customProgramCacheKey=()=>"field-print"),u),B={uInk:{value:new Lt},uDigits:{value:b.digits},uBar:{value:new se(ls.x0,ls.x1,ls.y0,ls.y1)},uCode:{value:new se(0,1,rn.y0,rn.y1)}},V=u=>y=>{Object.assign(y.uniforms,B),y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aCodeA;
        attribute vec3 aCodeB;
        attribute float aSeed;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vCodeA = aCodeA;
        vCodeB = aCodeB;
        vSeed = aSeed;`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
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
          float pick = floor( fract( sin( symbol * 12.9898 + vSeed * 78.233 ) * 43758.5453 ) * ${kl.length}.0 );
          float bits = ${kl.map((C,R)=>R<kl.length-1?`pick < ${R}.5 ? ${C}.0 : `:`${C}.0`).join("")};
          return mod( floor( bits / exp2( 3.0 - place ) ), 2.0 );
        }
        // How much ink falls on this point of the face. Derivatives are taken outside any branch,
        // and the result is masked rather than branched, so it is well defined everywhere.
        float llPrint( vec2 uv ) {
          float py = 1.0 - uv.y / ${u.toFixed(4)}; // 0 at the pocket's top edge, 1 at the card's foot
          float module = ( uv.x - uBar.x ) / ( uBar.y - uBar.x ) * ${ls.modules.toFixed(1)};
          float width = fwidth( module );
          // The bars are averaged under the pixel, weighted toward its centre. While bars are wider
          // than a pixel the average is narrow and their edges stay sharp; as they shrink below one
          // it widens, so a distant barcode greys into soft stripes, as a printed one does, instead
          // of breaking into dashes.
          float reach = width * mix( 0.75, 1.4, smoothstep( 0.35, 1.0, width ) );
          float ink = 0.0;
          float cover = 0.0;
          for ( int i = 0; i < ${Vl}; i ++ ) {
            float t = ( float( i ) + 0.5 ) / ${Vl/2}.0 - 1.0;
            float at = module + t * reach;
            float weight = ( 1.0 - abs( t ) ) * step( 0.0, at ) * step( at, ${ls.modules.toFixed(1)} );
            cover += weight;
            ink += weight * llBar( at );
          }
          // Once a pixel spans whole symbols, the samples are too few: use the barcode's overall tone.
          float soft = fwidth( py ) * 0.5 + 0.00001;
          float rows = smoothstep( uBar.z - soft, uBar.z + soft, py ) * ( 1.0 - smoothstep( uBar.w - soft, uBar.w + soft, py ) );
          float bars = mix( ink, cover * ${vg.toFixed(3)}, smoothstep( 2.0, 4.0, width ) ) / ${Vl/2}.0 * rows;

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
        diffuseColor.rgb = mix( diffuseColor.rgb, uInk, llPrint( vMapUv ) );`)},H=U(new tn({map:b.closed}),V(Ei)),D=U(new tn),G=new tn,J=new tn({map:b.flap}),Z=new tn({map:b.inside}),it=new tn({map:b.pocket});it.onBeforeCompile=V(1),it.customProgramCacheKey=()=>"card-print";let $=new tn({map:b.paper}),Q=new tn({map:b.spot,alphaTest:1.01,alphaToCoverage:!0}),nt=[];Dh.forEach((u,y)=>{for(let C=0;C<u.length;C+=3)for(let R=u[C];R<=u[C+1];R+=1)nt.push({x:sr.x0+(R+.5)*sr.pitchX,z:sr.z0+(y+.5)*sr.pitchZ,state:u[C+2]})});let _t=(u=>nt.reduce((y,C)=>Math.hypot(C.x-u.x,C.z-u.z)<Math.hypot(y.x-u.x,y.z-u.z)?C:y))(ao.find(u=>u.id==="hyd")),Ht=nt.filter(u=>u!==_t),Dt=new Ds(new On(he.w,Bl,he.h),[D,D,H,D,D,D],Ht.length);Dt.frustumCulled=!1,Dt.receiveShadow=!0;let Wt=Wl(101),q=new we,j=new Float32Array(Ht.length),St=new Float32Array(Ht.length*3),Nt=new Float32Array(Ht.length*3),vt=new Float32Array(Ht.length);Ht.forEach((u,y)=>{let C=String(xg(y)).split("").map(Number);St.set(C.slice(0,3),y*3),Nt.set(C.slice(3),y*3),vt[y]=1+Wt()*97,q.position.set(u.x+(Wt()-.5)*.02,Bl/2,u.z+(Wt()-.5)*.024),q.rotation.set(0,(Wt()-.5)*.06,0),q.updateMatrix(),Dt.setMatrixAt(y,q.matrix),j[y]=.955+Wt()*.045}),Dt.instanceMatrix.needsUpdate=!0,Dt.geometry.setAttribute("aCodeA",new Fn(St,3)),Dt.geometry.setAttribute("aCodeB",new Fn(Nt,3)),Dt.geometry.setAttribute("aSeed",new Fn(vt,1)),d.add(Dt);let Ot=new Float32Array(Ht.length);Ht.forEach((u,y)=>{Ot[y]=Uh[Nh[u.state].id]?.27:0}),ao.forEach(u=>{Ht.forEach((y,C)=>{let R=Math.hypot(y.x-u.x,y.z-u.z);R<1.9&&(Ot[C]=Math.max(Ot[C],1-kn(Se((R-.7)/1.2,0,1))*.75))})});let jt=new _n;jt.position.set(_t.x,0,_t.z),jt.rotation.y=.035;let Bt=-he.h/2,Xt=(u,y,C,R,F,at)=>{let ot=new _e(new On(u,y,C),at);return ot.position.set(0,R+y/2,F+C/2),ot.castShadow=!0,ot.receiveShadow=!0,ot},Kt=(u,y=G)=>[G,G,u,y,G,G];jt.add(Xt(he.w,Ae.back,he.h,0,Bt,Kt(G))),jt.add(Xt(he.w*Vn.width,Ae.paper,(Vn.to-Vn.from)*he.h,Ae.back,Bt+Vn.from*he.h,Kt($)));let zt=Xt(he.w,Ae.pocket,Ei*he.h,Ae.back+Ae.paper,Bt+(1-Ei)*he.h,Kt(it)),ne=String(gg).split("").map(Number),de=u=>new Te(Float32Array.from({length:zt.geometry.attributes.position.count*u.length},(y,C)=>u[C%u.length]),u.length);zt.geometry.setAttribute("aCodeA",de(ne.slice(0,3))),zt.geometry.setAttribute("aCodeB",de(ne.slice(3))),zt.geometry.setAttribute("aSeed",de([_g])),jt.add(zt);let xe=new _n;xe.position.set(0,Ae.back+Ae.paper+Ae.pocket,Bt);let re=Xt(he.w,Ae.flap,zl*he.h,0,0,Kt(J,Z));re.receiveShadow=!1,xe.add(re),jt.add(xe);let ue=new Bn(1,1);ue.rotateX(-Math.PI/2);let L=new _e(ue,Q);L.position.set(-.012,Ae.back+Ae.paper+8e-4,Bt+rr.at*he.h+.008),L.rotation.y=.7,L.scale.set(rr.r*2*.9,1,rr.r*2*.84),L.receiveShadow=!0,jt.add(L);let fe=Ae.back+Ae.paper,Vt=32,M=40,m=new Qe,O=new Float32Array((Vt+1)*(M+1)*3),z=new Float32Array(O.length),X=[];for(let u=0;u<Vt;u+=1)for(let y=0;y<M;y+=1){let C=u*(M+1)+y,R=C+M+1;X.push(C,R,C+1,C+1,R,R+1)}m.setIndex(X),m.setAttribute("position",new Te(O,3)),m.setAttribute("normal",new Te(z,3));let rt=new Float32Array((Vt+1)*2),ct={point:-1,neck:-1};function Y(u,y){if(!(Math.abs(u-ct.point)<.002&&Math.abs(y-ct.neck)<.002)){ct.point=u,ct.neck=y;for(let C=0;C<=Vt;C+=1){let R=C/Vt*Math.PI,F=Math.cos(R);rt[C*2]=sn.radius*Math.sin(R)*(u>0?Math.sin(R/2)**u:1),rt[C*2+1]=sn.radius*F*(1+y*Math.max(0,F))}for(let C=0;C<=Vt;C+=1){let R=Math.max(C-1,0),F=Math.min(C+1,Vt),at=-(rt[F*2+1]-rt[R*2+1]),ot=rt[F*2]-rt[R*2];C===0&&(at=0,ot=1),C===Vt&&(at=0,ot=-1);let ut=Math.hypot(at,ot)||1;at/=ut,ot/=ut;for(let pt=0;pt<=M;pt+=1){let mt=pt/M*Math.PI*2,Tt=(C*(M+1)+pt)*3;O[Tt]=rt[C*2]*Math.sin(mt),O[Tt+1]=rt[C*2+1],O[Tt+2]=rt[C*2]*Math.cos(mt),z[Tt]=at*Math.sin(mt),z[Tt+1]=ot,z[Tt+2]=at*Math.cos(mt)}}m.attributes.position.needsUpdate=!0,m.attributes.normal.needsUpdate=!0}}Y(0,0);let W=new _e(m,new Bs({shininess:64,specular:15127245,transparent:!0}));W.position.set(L.position.x,fe+sn.radius,L.position.z),W.castShadow=!0,W.frustumCulled=!1,W.visible=!1,jt.add(W),d.add(jt);let dt=new Vs(16777215,16777215,Sg),xt=new Hs(16777215,Hn.intensity);xt.position.set(_t.x+Hn.from.x,Hn.from.y,_t.z+Hn.from.z),xt.target.position.set(_t.x,0,_t.z),xt.castShadow=!0,xt.shadow.mapSize.set(2048,2048),xt.shadow.radius=5,xt.shadow.bias=-4e-4,xt.shadow.normalBias=.003,Object.assign(xt.shadow.camera,{left:-1.5,right:1.5,top:1.5,bottom:-1.5,near:Hn.from.length()-1.6,far:Hn.from.length()+1.6}),xt.shadow.camera.updateProjectionMatrix(),d.add(dt,xt,xt.target);let ft=new _e(new Bn(8,8).rotateX(-Math.PI/2),new Os({opacity:.22}));ft.position.set(_t.x,5e-4,_t.z),ft.receiveShadow=!0,d.add(ft);let lt=new _e(new Bn(1,1).rotateX(-Math.PI/2),new yi({map:A,transparent:!0,depthWrite:!1,opacity:.2}));lt.position.set(_t.x,Bl+.0015,_t.z),lt.rotation.y=jt.rotation.y,lt.scale.set(he.h/Gl,1,he.h/Gl),lt.renderOrder=2,d.add(lt);function wt(){let u=getComputedStyle(document.documentElement),y=R=>u.getPropertyValue(R).trim();h.mist=y("--mist"),h.paper=y("--paper"),h.ink=y("--canopy"),h.sun=y("--sun"),h.meadow=y("--meadow"),uo=y("--ff-body")||uo,W.material.color.set(y("--drop")||y("--blood")),d.background.set(h.mist),d.fog.color.set(h.mist),dt.groundColor.set(h.mist),Mg(_,h,P);let C=wg(v.getContext("2d"));Ag(v,h,C),Eg(g,_,v),Tg(w,C),B.uInk.value.set(h.ink),B.uCode.value.set(C.digits/Gn,C.advance/Gn,rn.y0,rn.y1),bg(f,h),Cg(E,h),Rg(N,Hl(y("--blood"))),Object.values(b).forEach(R=>{R.needsUpdate=!0}),G.color.set(h.paper),D.color.set(h.paper),ft.material.color.set(h.ink),lt.material.color.set(h.ink),ht.glow=-1}let Et=new Lt,Ut=new Lt,I=new Lt,ht={glow:-1,far:-1};function K(u,y,C){if(!C&&Math.abs(u-ht.glow)<.004&&Math.abs(y-ht.far)<.004)return;Et.set(h.sun),Ut.set(h.meadow);let R=I.set(1,1,1).lerp(Ut,y),F=R.r,at=R.g,ot=R.b,ut=Et.r,pt=Et.g,mt=Et.b;Dt.instanceColor||Dt.setColorAt(0,I);let Tt=Dt.instanceColor.array;for(let Rt=0;Rt<Ht.length;Rt+=1){let yt=Ot[Rt]*u,Zt=j[Rt];Tt[Rt*3]=(F+(ut-F)*yt)*Zt,Tt[Rt*3+1]=(at+(pt-at)*yt)*Zt,Tt[Rt*3+2]=(ot+(mt-ot)*yt)*Zt}Dt.instanceColor.needsUpdate=!0,I.set(1,1,1).lerp(Ut,y).lerp(Et,u),J.color.copy(I),it.color.copy(I),ht.glow=u,ht.far=y}let et={width:0,height:0,aspect:1,layout:oo,across:oo.across,shiftX:0,ratio:Math.min(window.devicePixelRatio||1,2)},st={time:0,held:!1,ended:!1,away:!1,started:!1},tt=1,At=()=>st.started&&!st.held&&!st.ended&&!document.hidden,bt=!1,Qt=0,$t=0,Ne=0,Ge=new k,ui=new k,hs=new k,us=lo.map(u=>u.at),He=u=>kh(us,lo.map(u)),Ce={elevation:He(u=>u.el),azimuth:He(u=>u.az),aim:He(u=>u.aim),lift:He(u=>u.lift),out:He(u=>u.out),fogNear:He(u=>u.fog[0]),fogFar:He(u=>u.fog[1]),hazeNear:He(u=>u.haze[0]),hazeFar:He(u=>u.haze[1]),distance:null,furthest:1};function ar(u){let y=Math.tan(Fh*ho/2),C=(et.layout===Oh?u.narrow:u.span)/(2*y*et.aspect*et.across),R=u.tall/(2*y*et.layout.up);return Math.max(C,R)}function or(){let u=lo.map(ar);for(let y=2;y<u.length;y+=1)u[y]=Math.max(u[y],u[y-1]);Ce.distance=kh(us,u.map(Math.log)),Ce.furthest=u[u.length-1]}function Cn(u){let y=fe+sn.hang,{swell:C,release:R,fall:F,land:at}=$e,ot=R+F;if(u<C[0]||u>=ot+at){W.visible=!1;return}W.visible=!0,W.material.opacity=1;let ut=mt=>y-sn.radius*(1+mt);if(u<R){let mt=kn(Se((u-C[0])/(C[1]-C[0]),0,1)),Tt=kn(Se((u-C[1])/(R-C[1]),0,1)),Rt=.16+.84*mt,yt=.25+.55*mt+.5*Tt;Y(.5+.7*mt+.25*Tt,yt),W.scale.setScalar(Rt),W.position.y=y-sn.radius*Rt*(1+yt);return}if(u<ot){let mt=(u-R)/F,Tt=kn(Se(mt/.7,0,1)),Rt=Ti(1.3,.42,Tt);Y(Ti(1.45,.95,Tt),Rt),W.scale.setScalar(1),W.position.y=Ti(ut(1.3),fe+sn.radius*.94,mt*mt);return}let pt=Se((u-ot)/at,0,1);Y(Ti(.95,0,pt),Ti(.42,0,pt)),W.scale.set(1+1.25*pt,1-.86*pt,1+1.25*pt),W.position.y=fe+sn.radius*.94*(1-.86*pt),W.material.opacity=1-pt*pt}function di(){if(!Ce.distance)return;let u=st.time,y=Math.exp(Ce.distance(u)),C=Ce.elevation(u)*ho,R=Ce.azimuth(u)*ho,F=zh(co(u,$e.open))*(1-zh(co(u,$e.shut)));xe.rotation.x=-yg*F,lt.material.opacity=.22*F,Cn(u);let at=1-(1-Se((u-$e.release-$e.fall)/$e.soak,0,1))**3;Q.alphaTest=Ti(1.01,.5,at);let ot=Ce.out(u)*(y/Ce.furthest);ui.set(_t.x*(1-ot),Ce.lift(u),Ti(_t.z+Ce.aim(u),1.2,ot)),Ge.set(ui.x+y*Math.cos(C)*Math.sin(R),ui.y+y*Math.sin(C),ui.z+y*Math.cos(C)*Math.cos(R)),p.position.copy(Ge),p.lookAt(ui),p.near=Se(y*.12,.05,30),p.far=y*3+80,p.setViewOffset(et.width,et.height,-et.shiftX*et.width,et.layout.shiftY*et.height,et.width,et.height),p.updateProjectionMatrix(),d.fog.near=y*Ce.fogNear(u),d.fog.far=y*Ce.fogFar(u),x.value.set(y*Ce.hazeNear(u),y*Ce.hazeFar(u)),T.value=.42*(1-kn(Se((y-5)/12,0,1))),xt.castShadow=y<40;let ut=kn(co(u,$e.marked)),pt=kn(Se((y-40)/110,0,1));if(K(ut,pt,!1),l.render(d,p),s){let mt=kn(co(u,$e.pinned));s.style.opacity=mt.toFixed(3),mt>.01&&(p.updateMatrixWorld(),ao.forEach(Tt=>{let Rt=r.get(Tt.id);Rt&&(hs.set(Tt.x,0,Tt.z).project(p),Rt.style.transform=`translate(${((hs.x*.5+.5)*et.width).toFixed(1)}px, ${((-hs.y*.5+.5)*et.height).toFixed(1)}px)`)}))}ds()}let fi={caption:-1,state:""};function ds(){let u=0;$e.captions.forEach((C,R)=>{st.time>=C&&(u=R)}),u!==fi.caption&&(fi.caption=u,o.forEach((C,R)=>C.classList.toggle("is-on",R===u)));let y=st.ended?"ended":At()||!st.started?"playing":"paused";y!==fi.state&&(fi.state=y,t&&(t.dataset.filmState=y),a&&a.setAttribute("aria-label",y==="ended"?"Replay the film":y==="playing"?"Pause the film":"Play the film"))}function pi(u){let y=(u-Qt)/1e3;Qt=u;let C=At();C&&(st.time+=Se(y,.001,.125)/tt,st.time>=$e.end&&(st.time=$e.end,st.ended=!0)),st.away?ds():di(),C&&!st.away&&et.ratio>1&&(Ne+=1,y>.024&&($t+=1),Ne>=45&&($t>22&&(et.ratio=Math.max(1,et.ratio-.25),l.setPixelRatio(et.ratio),l.setSize(et.width,et.height,!1)),Ne=0,$t=0)),At()?requestAnimationFrame(pi):bt=!1}function Ze(){bt||(bt=!0,Qt=performance.now(),requestAnimationFrame(pi))}function Rn(u){st.time=Se(u,0,$e.end),st.ended=!1,st.held=!1,st.started=!0,Ze()}a&&a.addEventListener("click",()=>{st.ended?Rn(0):(st.held=At(),st.started=!0,Ze())});function Ci(){let u=e.clientWidth,y=e.clientHeight;if(!u||!y)return;et.width=u,et.height=y,et.aspect=u/y;let C=e.getBoundingClientRect(),R=n?n.getBoundingClientRect():C;et.layout=n&&R.width>0?oo:Oh;let F=et.layout===oo?R:C;et.across=F.width*et.layout.across/u,et.shiftX=(F.left-C.left+F.width*et.layout.at)/u-.5,l.setPixelRatio(et.ratio),l.setSize(u,y,!1),p.aspect=et.aspect,or(),Ze()}e.appendChild(c),window.addEventListener("resize",Ci),"ResizeObserver"in window&&new ResizeObserver(Ci).observe(e),"IntersectionObserver"in window&&new IntersectionObserver(u=>{st.away=!u[u.length-1].isIntersecting,Ze()},{rootMargin:"80px 0px"}).observe(e),document.addEventListener("visibilitychange",Ze);let fs=()=>{let u=getComputedStyle(document.documentElement).getPropertyValue("--ff-body").trim()||uo;document.fonts&&document.fonts.load&&document.fonts.load(`700 52px ${u}`).then(()=>{wt(),Ze()}).catch(()=>{})},lr=()=>Se(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--film-pace"))||1,.4,2.5);tt=lr();let mo=sn.radius,cr=()=>mo*Se(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--film-drop"))||1,.5,2);sn.radius=cr(),document.addEventListener("ll:theme",()=>{wt(),fs();let u=lr(),y=cr(),C=!1;u!==tt&&(tt=u,C=!0),y!==sn.radius&&(sn.radius=y,C=!0),C&&st.started&&Rn(0),Ze()}),fs();let Ri=new Image;Ri.onload=()=>{P=Ri,wt(),Ze()},Ri.src=Lh,c.addEventListener("webglcontextlost",u=>{u.preventDefault(),document.documentElement.classList.remove("film-live","film-ready")}),wt(),Ci(),di(),document.documentElement.classList.add("film-live","film-ready");let ps=()=>{st.started||(st.started=!0,Ze())};Ri.addEventListener("load",()=>setTimeout(ps,150)),setTimeout(ps,1400),window.llFilm={show(u){Rn(u),st.held=!0,di()},play:()=>Rn(st.time),timing:$e,take:lo}}try{Ig(document)}catch(i){document.documentElement.classList.remove("film-live","film-ready"),console.warn("Reel: the film is unavailable, showing a still image instead.",i)}})();
