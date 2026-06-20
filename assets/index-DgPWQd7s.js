var Mh=Object.defineProperty;var yh=(s,t,e)=>t in s?Mh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>yh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="177",Sh=0,Fa=1,bh=2,Dl=1,Ll=2,Bn=3,ri=0,je=1,tn=2,ii=0,es=1,za=2,Ba=3,ka=4,wh=5,vi=100,Eh=101,Th=102,Ah=103,Rh=104,Ch=200,Ph=201,Dh=202,Lh=203,Mo=204,yo=205,Ih=206,Uh=207,Nh=208,Oh=209,Fh=210,zh=211,Bh=212,kh=213,Gh=214,So=0,bo=1,wo=2,rs=3,Eo=4,To=5,Ao=6,Ro=7,Il=0,Hh=1,Vh=2,si=0,Wh=1,qh=2,Xh=3,Yh=4,$h=5,Kh=6,jh=7,Ul=300,os=301,as=302,Co=303,Po=304,Rr=306,Do=1e3,yi=1001,Lo=1002,Ze=1003,Zh=1004,Vs=1005,An=1006,Ir=1007,Si=1008,Rn=1009,Nl=1010,Ol=1011,Cs=1012,fa=1013,wi=1014,Gn=1015,Ns=1016,pa=1017,ma=1018,Ps=1020,Fl=35902,zl=1021,Bl=1022,wn=1023,Ds=1026,Ls=1027,ga=1028,_a=1029,kl=1030,xa=1031,va=1033,gr=33776,_r=33777,xr=33778,vr=33779,Io=35840,Uo=35841,No=35842,Oo=35843,Fo=36196,zo=37492,Bo=37496,ko=37808,Go=37809,Ho=37810,Vo=37811,Wo=37812,qo=37813,Xo=37814,Yo=37815,$o=37816,Ko=37817,jo=37818,Zo=37819,Jo=37820,Qo=37821,Mr=36492,ta=36494,ea=36495,Gl=36283,na=36284,ia=36285,sa=36286,Jh=3200,Qh=3201,Hl=0,tu=1,ni="",fn="srgb",cs="srgb-linear",Sr="linear",be="srgb",Ui=7680,Ga=519,eu=512,nu=513,iu=514,Vl=515,su=516,ru=517,ou=518,au=519,ra=35044,Ha="300 es",Hn=2e3,br=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Va=1234567;const As=Math.PI/180,Is=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Ma(s,t){return(s%t+t)%t}function cu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lu(s,t,e){return s!==t?(e-s)/(t-s):0}function Rs(s,t,e){return(1-e)*s+e*t}function hu(s,t,e,n){return Rs(s,t,1-Math.exp(-e*n))}function uu(s,t=1){return t-Math.abs(Ma(s,t*2)-t)}function du(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function pu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mu(s,t){return s+Math.random()*(t-s)}function gu(s){return s*(.5-Math.random())}function _u(s){s!==void 0&&(Va=s);let t=Va+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xu(s){return s*As}function vu(s){return s*Is}function Mu(s){return(s&s-1)===0&&s!==0}function yu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Su(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bu(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),h=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*d,c*h,c*p,a*l);break;case"YZY":s.set(c*p,a*d,c*h,a*l);break;case"ZXZ":s.set(c*h,c*p,a*d,a*l);break;case"XZX":s.set(a*d,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*d,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:As,RAD2DEG:Is,generateUUID:Vn,clamp:ae,euclideanModulo:Ma,mapLinear:cu,inverseLerp:lu,lerp:Rs,damp:hu,pingpong:uu,smoothstep:du,smootherstep:fu,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:_u,degToRad:xu,radToDeg:vu,isPowerOfTwo:Mu,ceilPowerOfTwo:yu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:bu,normalize:Se,denormalize:bn};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const p=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(h!==v||c!==p||l!==f||d!==_){let m=1-a;const u=c*p+l*f+d*_+h*v,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const U=Math.sqrt(E),C=Math.atan2(U,u*w);m=Math.sin(m*C)/U,a=Math.sin(a*C)/U}const S=a*w;if(c=c*m+p*S,l=l*m+f*S,d=d*m+_*S,h=h*m+v*S,m===1-a){const U=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=U,l*=U,d*=U,h*=U}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=r[o],p=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+d*h+c*f-l*p,t[e+1]=c*_+d*p+l*h-a*f,t[e+2]=l*_+d*f+a*p-c*h,t[e+3]=d*_-a*h-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),h=a(r/2),p=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=p*d*h+l*f*_,this._y=l*f*h-p*d*_,this._z=l*d*_+p*f*h,this._w=l*d*h-p*f*_;break;case"YXZ":this._x=p*d*h+l*f*_,this._y=l*f*h-p*d*_,this._z=l*d*_-p*f*h,this._w=l*d*h+p*f*_;break;case"ZXY":this._x=p*d*h-l*f*_,this._y=l*f*h+p*d*_,this._z=l*d*_+p*f*h,this._w=l*d*h-p*f*_;break;case"ZYX":this._x=p*d*h-l*f*_,this._y=l*f*h+p*d*_,this._z=l*d*_-p*f*h,this._w=l*d*h+p*f*_;break;case"YZX":this._x=p*d*h+l*f*_,this._y=l*f*h+p*d*_,this._z=l*d*_-p*f*h,this._w=l*d*h-p*f*_;break;case"XZY":this._x=p*d*h-l*f*_,this._y=l*f*h-p*d*_,this._z=l*d*_+p*f*h,this._w=l*d*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],h=e[10],p=n+a+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+i*l-r*c,this._y=i*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),d=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*d,this.y=n+c*d+a*l-r*h,this.z=i+c*h+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new P,Wa=new Os;class ne{constructor(t,e,n,i,r,o,a,c,l){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],p=n[2],f=n[5],_=n[8],v=i[0],m=i[3],u=i[6],w=i[1],E=i[4],S=i[7],U=i[2],C=i[5],g=i[8];return r[0]=o*v+a*w+c*U,r[3]=o*m+a*E+c*C,r[6]=o*u+a*S+c*g,r[1]=l*v+d*w+h*U,r[4]=l*m+d*E+h*C,r[7]=l*u+d*S+h*g,r[2]=p*v+f*w+_*U,r[5]=p*m+f*E+_*C,r[8]=p*u+f*S+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=d*o-a*l,p=a*c-d*r,f=l*r-o*c,_=e*h+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(i*l-d*n)*v,t[2]=(a*n-i*o)*v,t[3]=p*v,t[4]=(d*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new ne;function Wl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wu(){const s=wr("canvas");return s.style.display="block",s}const qa={};function ns(s){s in qa||(qa[s]=!0,console.warn(s))}function Eu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Au(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xa=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ru(){const s={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cs]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:Xa,fromXYZ:Ya,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Xa,fromXYZ:Ya,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),s}const ge=Ru();function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class Cu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=wr("canvas")),Ni.width=t.width,Ni.height=t.height;const i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pu=0;class ya{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Or(i[o].image)):r.push(Or(i[o]))}else r=Or(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Or(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Du=0;const Fr=new P;class Ye extends hs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=yi,i=yi,r=An,o=Si,a=wn,c=Rn,l=Ye.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Vn(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ul;Ye.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,i=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],d=c[4],h=c[8],p=c[1],f=c[5],_=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(d-p)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,S=(f+1)/2,U=(u+1)/2,C=(d+p)/4,g=(h+v)/4,D=(_+m)/4;return E>S&&E>U?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=C/n,r=g/n):S>U?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=D/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=g/r,i=D/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-v)/w,this.z=(p-d)/w,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lu extends hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ye(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ya(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Lu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ql extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iu extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),qs.subVectors(this.max,_s),Oi.subVectors(t.a,_s),Fi.subVectors(t.b,_s),zi.subVectors(t.c,_s),jn.subVectors(Fi,Oi),Zn.subVectors(zi,Fi),li.subVectors(Oi,zi);let e=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-li.z,li.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,li.z,0,-li.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-li.y,li.x,0];return!zr(e,Oi,Fi,zi,qs)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,Oi,Fi,zi,qs))?!1:(Xs.crossVectors(jn,Zn),e=[Xs.x,Xs.y,Xs.z],zr(e,Oi,Fi,zi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,Ws=new Fs,Oi=new P,Fi=new P,zi=new P,jn=new P,Zn=new P,li=new P,_s=new P,qs=new P,Xs=new P,hi=new P;function zr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),d=n.dot(hi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Uu=new Fs,xs=new P,Br=new P;class Cr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Br)),this.expandByPoint(xs.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Un=new P,kr=new P,Ys=new P,Jn=new P,Gr=new P,$s=new P,Hr=new P;class Xl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=Jn.dot(this.direction),c=-Jn.dot(Ys),l=Jn.lengthSq(),d=Math.abs(1-o*o);let h,p,f,_;if(d>0)if(h=o*c-a,p=o*a-c,_=r*d,h>=0)if(p>=-_)if(p<=_){const v=1/d;h*=v,p*=v,f=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+p*(p+2*c)+l);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kr).addScaledVector(Ys,p),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),d>=0?(r=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-p.z)*h,c=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,c=(t.min.z-p.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){Gr.subVectors(e,t),$s.subVectors(n,t),Hr.crossVectors(Gr,$s);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);const c=a*this.direction.dot($s.crossVectors(Jn,$s));if(c<0)return null;const l=a*this.direction.dot(Gr.cross(Jn));if(l<0||c+l>o)return null;const d=-a*Jn.dot(Hr);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,r,o,a,c,l,d,h,p,f,_,v,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,d,h,p,f,_,v,m)}set(t,e,n,i,r,o,a,c,l,d,h,p,f,_,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=o*d,f=o*h,_=a*d,v=a*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=f+_*l,e[5]=p-v*l,e[9]=-a*c,e[2]=v-p*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*d,f=c*h,_=l*d,v=l*h;e[0]=p+v*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-_,e[6]=v+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*d,f=c*h,_=l*d,v=l*h;e[0]=p-v*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*d,e[9]=v-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*d,f=o*h,_=a*d,v=a*h;e[0]=c*d,e[4]=_*l-f,e[8]=p*l+v,e[1]=c*h,e[5]=v*l+p,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*d,e[4]=v-p*h,e[8]=_*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*h+_,e[10]=p-v*h}else if(t.order==="XZY"){const p=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=p*h+v,e[5]=o*d,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*d,e[10]=v*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Ou)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Qn.crossVectors(n,sn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Qn.crossVectors(n,sn)),Qn.normalize(),Ks.crossVectors(sn,Qn),i[0]=Qn.x,i[4]=Ks.x,i[8]=sn.x,i[1]=Qn.y,i[5]=Ks.y,i[9]=sn.y,i[2]=Qn.z,i[6]=Ks.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],p=n[9],f=n[13],_=n[2],v=n[6],m=n[10],u=n[14],w=n[3],E=n[7],S=n[11],U=n[15],C=i[0],g=i[4],D=i[8],b=i[12],x=i[1],L=i[5],H=i[9],G=i[13],Z=i[2],nt=i[6],j=i[10],ct=i[14],Y=i[3],_t=i[7],Et=i[11],rt=i[15];return r[0]=o*C+a*x+c*Z+l*Y,r[4]=o*g+a*L+c*nt+l*_t,r[8]=o*D+a*H+c*j+l*Et,r[12]=o*b+a*G+c*ct+l*rt,r[1]=d*C+h*x+p*Z+f*Y,r[5]=d*g+h*L+p*nt+f*_t,r[9]=d*D+h*H+p*j+f*Et,r[13]=d*b+h*G+p*ct+f*rt,r[2]=_*C+v*x+m*Z+u*Y,r[6]=_*g+v*L+m*nt+u*_t,r[10]=_*D+v*H+m*j+u*Et,r[14]=_*b+v*G+m*ct+u*rt,r[3]=w*C+E*x+S*Z+U*Y,r[7]=w*g+E*L+S*nt+U*_t,r[11]=w*D+E*H+S*j+U*Et,r[15]=w*b+E*G+S*ct+U*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],h=t[6],p=t[10],f=t[14],_=t[3],v=t[7],m=t[11],u=t[15];return _*(+r*c*h-i*l*h-r*a*p+n*l*p+i*a*f-n*c*f)+v*(+e*c*f-e*l*p+r*o*p-i*o*f+i*l*d-r*c*d)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*d-n*l*d)+u*(-i*a*d-e*c*h+e*a*p+i*o*h-n*o*p+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=t[9],p=t[10],f=t[11],_=t[12],v=t[13],m=t[14],u=t[15],w=h*m*l-v*p*l+v*c*f-a*m*f-h*c*u+a*p*u,E=_*p*l-d*m*l-_*c*f+o*m*f+d*c*u-o*p*u,S=d*v*l-_*h*l+_*a*f-o*v*f-d*a*u+o*h*u,U=_*h*c-d*v*c-_*a*p+o*v*p+d*a*m-o*h*m,C=e*w+n*E+i*S+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/C;return t[0]=w*g,t[1]=(v*p*r-h*m*r-v*i*f+n*m*f+h*i*u-n*p*u)*g,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*u+n*c*u)*g,t[3]=(h*c*r-a*p*r-h*i*l+n*p*l+a*i*f-n*c*f)*g,t[4]=E*g,t[5]=(d*m*r-_*p*r+_*i*f-e*m*f-d*i*u+e*p*u)*g,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*u-e*c*u)*g,t[7]=(o*p*r-d*c*r+d*i*l-e*p*l-o*i*f+e*c*f)*g,t[8]=S*g,t[9]=(_*h*r-d*v*r-_*n*f+e*v*f+d*n*u-e*h*u)*g,t[10]=(o*v*r-_*a*r+_*n*l-e*v*l-o*n*u+e*a*u)*g,t[11]=(d*a*r-o*h*r-d*n*l+e*h*l+o*n*f-e*a*f)*g,t[12]=U*g,t[13]=(d*v*i-_*h*i+_*n*p-e*v*p-d*n*m+e*h*m)*g,t[14]=(_*a*i-o*v*i-_*n*c+e*v*c+o*n*m-e*a*m)*g,t[15]=(o*h*i-d*a*i+d*n*c-e*h*c-o*n*p+e*a*p)*g,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,h=a+a,p=r*l,f=r*d,_=r*h,v=o*d,m=o*h,u=a*h,w=c*l,E=c*d,S=c*h,U=n.x,C=n.y,g=n.z;return i[0]=(1-(v+u))*U,i[1]=(f+S)*U,i[2]=(_-E)*U,i[3]=0,i[4]=(f-S)*C,i[5]=(1-(p+u))*C,i[6]=(m+w)*C,i[7]=0,i[8]=(_+E)*g,i[9]=(m-w)*g,i[10]=(1-(p+v))*g,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),a=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const l=1/r,d=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Hn){const c=this.elements,l=2*r/(e-t),d=2*r/(n-i),h=(e+t)/(e-t),p=(n+i)/(n-i);let f,_;if(a===Hn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Hn){const c=this.elements,l=1/(e-t),d=1/(n-i),h=1/(o-r),p=(e+t)*l,f=(n+i)*d;let _,v;if(a===Hn)_=(o+r)*h,v=-2*h;else if(a===br)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new P,yn=new Ae,Nu=new P(0,0,0),Ou=new P(1,1,1),Qn=new P,Ks=new P,sn=new P,$a=new Ae,Ka=new Os;class qn{constructor(t=0,e=0,n=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],h=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fu=0;const ja=new P,ki=new Os,Nn=new Ae,js=new P,vs=new P,zu=new P,Bu=new Os,Za=new P(1,0,0),Ja=new P(0,1,0),Qa=new P(0,0,1),tc={type:"added"},ku={type:"removed"},Gi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Ue extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new P,e=new qn,n=new Os,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ne}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(vs,js,this.up):Nn.lookAt(js,vs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),h=o(t.shapes),p=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ue.DEFAULT_UP=new P(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new P,On=new P,Wr=new P,Fn=new P,Hi=new P,Vi=new P,ec=new P,qr=new P,Xr=new P,Yr=new P,$r=new Pe,Kr=new Pe,jr=new Pe;class mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),On.subVectors(n,e),Wr.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(On),c=Sn.dot(Wr),l=On.dot(On),d=On.dot(Wr),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,f=(l*c-a*d)*p,_=(o*d-a*c)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return $r.setScalar(0),Kr.setScalar(0),jr.setScalar(0),$r.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($r,r.x),o.addScaledVector(Kr,r.y),o.addScaledVector(jr,r.z),o}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),On.subVectors(t,e),Sn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Hi.subVectors(i,n),Vi.subVectors(r,n),qr.subVectors(t,n);const c=Hi.dot(qr),l=Vi.dot(qr);if(c<=0&&l<=0)return e.copy(n);Xr.subVectors(t,i);const d=Hi.dot(Xr),h=Vi.dot(Xr);if(d>=0&&h<=d)return e.copy(i);const p=c*h-d*l;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Hi,o);Yr.subVectors(t,r);const f=Hi.dot(Yr),_=Vi.dot(Yr);if(_>=0&&f<=_)return e.copy(r);const v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Vi,a);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return ec.subVectors(r,i),a=(h-d)/(h-d+(f-_)),e.copy(i).addScaledVector(ec,a);const u=1/(m+v+p);return o=v*u,a=p*u,e.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Ma(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ge.workingToColorSpace(Xe.copy(this),t),Math.round(ae(Xe.r*255,0,255))*65536+Math.round(ae(Xe.g*255,0,255))*256+Math.round(ae(Xe.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=fn){ge.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);const n=Rs(ti.h,Zs.h,e),i=Rs(ti.s,Zs.s,e),r=Rs(ti.l,Zs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new It;It.NAMES=$l;let Gu=0;class Ri extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=es,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=yo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class an extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new P,Js=new jt;let Hu=0;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ra,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ra&&(t.usage=this.usage),t}}class Kl extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jl extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vu=0;const un=new Ae,Jr=new Ue,Wi=new P,rn=new Fs,Ms=new Fs,ke=new P;class Ge extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wl(t)?jl:Kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(rn.min,Ms.min),rn.expandByPoint(ke),ke.addVectors(rn.max,Ms.max),rn.expandByPoint(ke)):(rn.expandByPoint(Ms.min),rn.expandByPoint(Ms.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)ke.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),ke.add(Wi)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;const l=new P,d=new P,h=new P,p=new jt,f=new jt,_=new jt,v=new P,m=new P;function u(D,b,x){l.fromBufferAttribute(n,D),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,x),d.sub(l),h.sub(l),f.sub(p),_.sub(p);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(L),a[D].add(v),a[b].add(v),a[x].add(v),c[D].add(m),c[b].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,b=w.length;D<b;++D){const x=w[D],L=x.start,H=x.count;for(let G=L,Z=L+H;G<Z;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const E=new P,S=new P,U=new P,C=new P;function g(D){U.fromBufferAttribute(i,D),C.copy(U);const b=a[D];E.copy(b),E.sub(U.multiplyScalar(U.dot(b))).normalize(),S.crossVectors(C,b);const L=S.dot(c[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,b=w.length;D<b;++D){const x=w[D],L=x.start,H=x.count;for(let G=L,Z=L+H;G<Z;G+=3)g(t.getX(G+0)),g(t.getX(G+1)),g(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,d=new P,h=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,h=a.normalized,p=new l.constructor(c.length*d);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*d;for(let u=0;u<d;u++)p[_++]=l[f++]}return new on(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,h=l.length;d<h;d++){const p=l[d],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,p=l.length;h<p;h++){const f=l[h];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],h=r[l];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new Ae,ui=new Xl,Qs=new Cr,ic=new P,tr=new P,er=new P,nr=new P,Qr=new P,ir=new P,sc=new P,sr=new P;class lt extends Ue{constructor(t=new Ge,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],h=r[c];d!==0&&(Qr.fromBufferAttribute(h,t),o?ir.addScaledVector(Qr,d):ir.addScaledVector(Qr.sub(e),d))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(Qs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Qs,ic)===null||ui.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=o[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,U=E;S<U;S+=3){const C=a.getX(S),g=a.getX(S+1),D=a.getX(S+2);i=rr(this,u,t,n,l,d,h,C,g,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const w=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);i=rr(this,o,t,n,l,d,h,w,E,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=o[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,U=E;S<U;S+=3){const C=S,g=S+1,D=S+2;i=rr(this,u,t,n,l,d,h,C,g,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const w=m,E=m+1,S=m+2;i=rr(this,o,t,n,l,d,h,w,E,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Wu(s,t,e,n,i,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ri,a),c===null)return null;sr.copy(a),sr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:s}}function rr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,tr),s.getVertexPosition(c,er),s.getVertexPosition(l,nr);const d=Wu(s,t,e,n,tr,er,nr,sc);if(d){const h=new P;mn.getBarycoord(sc,tr,er,nr,h),i&&(d.uv=mn.getInterpolatedAttribute(i,a,c,l,h,new jt)),r&&(d.uv1=mn.getInterpolatedAttribute(r,a,c,l,h,new jt)),o&&(d.normal=mn.getInterpolatedAttribute(o,a,c,l,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new P,materialIndex:0};mn.getNormal(tr,er,nr,p.normal),d.face=p,d.barycoord=h}return d}class Ne extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(h,2));function _(v,m,u,w,E,S,U,C,g,D,b){const x=S/g,L=U/D,H=S/2,G=U/2,Z=C/2,nt=g+1,j=D+1;let ct=0,Y=0;const _t=new P;for(let Et=0;Et<j;Et++){const rt=Et*L-G;for(let Tt=0;Tt<nt;Tt++){const ve=Tt*x-H;_t[v]=ve*w,_t[m]=rt*E,_t[u]=Z,l.push(_t.x,_t.y,_t.z),_t[v]=0,_t[m]=0,_t[u]=C>0?1:-1,d.push(_t.x,_t.y,_t.z),h.push(Tt/g),h.push(1-Et/D),ct+=1}}for(let Et=0;Et<D;Et++)for(let rt=0;rt<g;rt++){const Tt=p+rt+nt*Et,ve=p+rt+nt*(Et+1),et=p+(rt+1)+nt*(Et+1),mt=p+(rt+1)+nt*Et;c.push(Tt,ve,mt),c.push(ve,et,mt),Y+=6}a.addGroup(f,Y,b),f+=Y,p+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=ls(s[e]);for(const i in n)t[i]=n[i]}return t}function qu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Xu={clone:ls,merge:Ke};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jl extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new P,rc=new jt,oc=new jt;class pn extends Jl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Xi=1;class Ku extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(qi,Xi,t,e);i.layers=this.layers,this.add(i);const r=new pn(qi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new pn(qi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new pn(qi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new pn(qi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new pn(qi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ql extends Ye{constructor(t=[],e=os,n,i,r,o,a,c,l,d){super(t,e,n,i,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ju extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ql(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ne(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ii});r.uniforms.tEquirect.value=e;const o=new lt(i,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=An),new Ku(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class we extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zu={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ju extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ra,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new P;class Er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class th extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const ys=new P,$i=new P,Ki=new P,ji=new jt,Ss=new jt,eh=new Ae,or=new P,bs=new P,ar=new P,ac=new jt,eo=new jt,cc=new jt;class nh extends Ue{constructor(t=new th){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qu(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Er(n,3,0,!1)),Yi.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new jt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;cr(or.set(-.5,-.5,0),Ki,o,$i,i,r),cr(bs.set(.5,-.5,0),Ki,o,$i,i,r),cr(ar.set(.5,.5,0),Ki,o,$i,i,r),ac.set(0,0),eo.set(1,0),cc.set(1,1);let a=t.ray.intersectTriangle(or,bs,ar,!1,ys);if(a===null&&(cr(bs.set(-.5,.5,0),Ki,o,$i,i,r),eo.set(0,1),a=t.ray.intersectTriangle(or,ar,bs,!1,ys),a===null))return;const c=t.ray.origin.distanceTo(ys);c<t.near||c>t.far||e.push({distance:c,point:ys.clone(),uv:mn.getInterpolation(ys,or,bs,ar,ac,eo,cc,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cr(s,t,e,n,i,r){ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ss.x=r*ji.x-i*ji.y,Ss.y=i*ji.x+r*ji.y):Ss.copy(ji),s.copy(t),s.x+=Ss.x,s.y+=Ss.y,s.applyMatrix4(eh)}class td extends Ye{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ze,d=Ze,h,p){super(null,o,a,c,l,d,i,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const no=new P,ed=new P,nd=new ne;class gi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=no.subVectors(n,e).cross(ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nd.getNormalMatrix(t),i=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Cr,lr=new P;class ba{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],d=i[5],h=i[6],p=i[7],f=i[8],_=i[9],v=i[10],m=i[11],u=i[12],w=i[13],E=i[14],S=i[15];if(n[0].setComponents(c-r,p-l,m-f,S-u).normalize(),n[1].setComponents(c+r,p+l,m+f,S+u).normalize(),n[2].setComponents(c+o,p+d,m+_,S+w).normalize(),n[3].setComponents(c-o,p-d,m-_,S-w).normalize(),n[4].setComponents(c-a,p-h,m-v,S-E).normalize(),e===Hn)n[5].setComponents(c+a,p+h,m+v,S+E).normalize();else if(e===br)n[5].setComponents(a,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(lr.x=i.normal.x>0?t.max.x:t.min.x,lr.y=i.normal.y>0?t.max.y:t.min.y,lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wa extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new P,Ar=new P,lc=new Ae,ws=new Xl,hr=new Cr,io=new P,hc=new P;class oa extends Ue{constructor(t=new Ge,e=new wa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Tr.fromBufferAttribute(e,i-1),Ar.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;lc.copy(i).invert(),ws.copy(t.ray).applyMatrix4(lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,m=_-1;v<m;v+=l){const u=d.getX(v),w=d.getX(v+1),E=ur(this,t,ws,c,u,w,v);E&&e.push(E)}if(this.isLineLoop){const v=d.getX(_-1),m=d.getX(f),u=ur(this,t,ws,c,v,m,_-1);u&&e.push(u)}}else{const f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=f,m=_-1;v<m;v+=l){const u=ur(this,t,ws,c,v,v+1,v);u&&e.push(u)}if(this.isLineLoop){const v=ur(this,t,ws,c,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ur(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Tr.fromBufferAttribute(a,i),Ar.fromBufferAttribute(a,r),e.distanceSqToSegment(Tr,Ar,io,hc)>n)return;io.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(io);if(!(l<t.near||l>t.far))return{distance:l,point:hc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const uc=new P,dc=new P;class id extends oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)uc.fromBufferAttribute(e,i),dc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uc.distanceTo(dc);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends Ye{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ih extends Ye{constructor(t,e,n=wi,i,r,o,a=Ze,c=Ze,l,d=Ds,h=1){if(d!==Ds&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,i,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ya(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ea extends Ge{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],d=e/2,h=Math.PI/2*t,p=e,f=2*h+p,_=n*2+r,v=i+1,m=new P,u=new P;for(let w=0;w<=_;w++){let E=0,S=0,U=0,C=0;if(w<=n){const b=w/n,x=b*Math.PI/2;S=-d-t*Math.cos(x),U=t*Math.sin(x),C=-t*Math.cos(x),E=b*h}else if(w<=n+r){const b=(w-n)/r;S=-d+b*e,U=t,C=0,E=h+b*p}else{const b=(w-n-r)/n,x=b*Math.PI/2;S=d+t*Math.sin(x),U=t*Math.cos(x),C=t*Math.sin(x),E=h+p+b*h}const g=Math.max(0,Math.min(1,E/f));let D=0;w===0?D=.5/i:w===_&&(D=-.5/i);for(let b=0;b<=i;b++){const x=b/i,L=x*Math.PI*2,H=Math.sin(L),G=Math.cos(L);u.x=-U*G,u.y=S,u.z=U*H,a.push(u.x,u.y,u.z),m.set(-U*G,C,U*H),m.normalize(),c.push(m.x,m.y,m.z),l.push(x+D,g)}if(w>0){const b=(w-1)*v;for(let x=0;x<i;x++){const L=b+x,H=b+x+1,G=w*v+x,Z=w*v+x+1;o.push(L,H,G),o.push(H,Z,G)}}}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Pr extends Ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,d=new jt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const f=n+h/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[p]/t+1)/2,d.y=(o[p+1]/t+1)/2,c.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends Ge{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],p=[],f=[];let _=0;const v=[],m=n/2;let u=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(f,2));function w(){const S=new P,U=new P;let C=0;const g=(e-t)/n;for(let D=0;D<=r;D++){const b=[],x=D/r,L=x*(e-t)+t;for(let H=0;H<=i;H++){const G=H/i,Z=G*c+a,nt=Math.sin(Z),j=Math.cos(Z);U.x=L*nt,U.y=-x*n+m,U.z=L*j,h.push(U.x,U.y,U.z),S.set(nt,g,j).normalize(),p.push(S.x,S.y,S.z),f.push(G,1-x),b.push(_++)}v.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){const x=v[b][D],L=v[b+1][D],H=v[b+1][D+1],G=v[b][D+1];(t>0||b!==0)&&(d.push(x,L,G),C+=3),(e>0||b!==r-1)&&(d.push(L,H,G),C+=3)}l.addGroup(u,C,0),u+=C}function E(S){const U=_,C=new jt,g=new P;let D=0;const b=S===!0?t:e,x=S===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),_++;const L=_;for(let H=0;H<=i;H++){const Z=H/i*c+a,nt=Math.cos(Z),j=Math.sin(Z);g.x=b*j,g.y=m*x,g.z=b*nt,h.push(g.x,g.y,g.z),p.push(0,x,0),C.x=nt*.5+.5,C.y=j*.5*x+.5,f.push(C.x,C.y),_++}for(let H=0;H<i;H++){const G=U+H,Z=L+H;S===!0?d.push(Z,Z+1,G):d.push(Z+1,Z,G),D+=3}l.addGroup(u,D,S===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gn extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends Ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),d(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const E=new P,S=new P,U=new P;for(let C=0;C<e.length;C+=3)f(e[C+0],E),f(e[C+1],S),f(e[C+2],U),c(E,S,U,w)}function c(w,E,S,U){const C=U+1,g=[];for(let D=0;D<=C;D++){g[D]=[];const b=w.clone().lerp(S,D/C),x=E.clone().lerp(S,D/C),L=C-D;for(let H=0;H<=L;H++)H===0&&D===C?g[D][H]=b:g[D][H]=b.clone().lerp(x,H/L)}for(let D=0;D<C;D++)for(let b=0;b<2*(C-D)-1;b++){const x=Math.floor(b/2);b%2===0?(p(g[D][x+1]),p(g[D+1][x]),p(g[D][x])):(p(g[D][x+1]),p(g[D+1][x+1]),p(g[D+1][x]))}}function l(w){const E=new P;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(w),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function d(){const w=new P;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const S=m(w)/2/Math.PI+.5,U=u(w)/Math.PI+.5;o.push(S,1-U)}_(),h()}function h(){for(let w=0;w<o.length;w+=6){const E=o[w+0],S=o[w+2],U=o[w+4],C=Math.max(E,S,U),g=Math.min(E,S,U);C>.9&&g<.1&&(E<.2&&(o[w+0]+=1),S<.2&&(o[w+2]+=1),U<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function f(w,E){const S=w*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function _(){const w=new P,E=new P,S=new P,U=new P,C=new jt,g=new jt,D=new jt;for(let b=0,x=0;b<r.length;b+=9,x+=6){w.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),C.set(o[x+0],o[x+1]),g.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),U.copy(w).add(E).add(S).divideScalar(3);const L=m(U);v(C,x+0,w,L),v(g,x+2,E,L),v(D,x+4,S,L)}}function v(w,E,S,U){U<0&&w.x===1&&(o[E]=w.x-1),S.x===0&&S.z===0&&(o[E]=U/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.vertices,t.indices,t.radius,t.details)}}class Ta extends us{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ta(t.radius,t.detail)}}class Aa extends us{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Ti extends us{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ti(t.radius,t.detail)}}class Ci extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,h=t/a,p=e/c,f=[],_=[],v=[],m=[];for(let u=0;u<d;u++){const w=u*p-o;for(let E=0;E<l;E++){const S=E*h-r;_.push(S,-w,0),v.push(0,0,1),m.push(E/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<a;w++){const E=w+l*u,S=w+l*(u+1),U=w+1+l*(u+1),C=w+1+l*u;f.push(E,S,C),f.push(S,U,C)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dr extends Ge{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let h=t;const p=(e-t)/i,f=new P,_=new jt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const u=r+m/n*o;f.x=h*Math.cos(u),f.y=h*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,d.push(_.x,_.y)}h+=p}for(let v=0;v<i;v++){const m=v*(n+1);for(let u=0;u<n;u++){const w=u+m,E=w,S=w+n+1,U=w+n+2,C=w+1;a.push(E,S,C),a.push(S,U,C)}}this.setIndex(a),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ie extends Ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new P,p=new P,f=[],_=[],v=[],m=[];for(let u=0;u<=n;u++){const w=[],E=u/n;let S=0;u===0&&o===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let U=0;U<=e;U++){const C=U/e;h.x=-t*Math.cos(i+C*r)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(i+C*r)*Math.sin(o+E*a),_.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(C+S,1-E),w.push(l++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const E=d[u][w+1],S=d[u][w],U=d[u+1][w],C=d[u+1][w+1];(u!==0||o>0)&&f.push(E,S,C),(u!==n-1||c<Math.PI)&&f.push(S,U,C)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ra extends us{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class ai extends Ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],d=new P,h=new P,p=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const v=_/i*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(h,d).normalize(),c.push(p.x,p.y,p.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const v=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,u=(i+1)*(f-1)+_,w=(i+1)*f+_;o.push(v,m,w),o.push(m,u,w)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rd extends Ri{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new It(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class od extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ad extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ca extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cd extends Ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new Ae,fc=new P,pc=new P;class ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sh extends Jl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hd extends ld{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new hd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dd extends Ca{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fd extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(){return performance.now()}function gc(s,t,e,n){const i=md(n);switch(e){case zl:return s*t;case ga:return s*t/i.components*i.byteLength;case _a:return s*t/i.components*i.byteLength;case kl:return s*t*2/i.components*i.byteLength;case xa:return s*t*2/i.components*i.byteLength;case Bl:return s*t*3/i.components*i.byteLength;case wn:return s*t*4/i.components*i.byteLength;case va:return s*t*4/i.components*i.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Oo:return Math.max(s,16)*Math.max(t,8)/4;case Io:case No:return Math.max(s,8)*Math.max(t,8)/2;case Fo:case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mr:case ta:case ea:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gl:case na:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ia:case sa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function md(s){switch(s){case Rn:case Nl:return{byteLength:1,components:1};case Cs:case Ol:case Ns:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case wi:case fa:case Gn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gd(s){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,h=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const d=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,d);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,h[p]=v)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];s.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_f=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Af=`#if defined( USE_POINTS_UV )
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
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ep=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Np=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bp=`#define PHONG
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
}`,kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Vp=`#define TOON
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
}`,Wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Kp=`uniform float rotation;
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
}`,jp=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:_d,alphahash_pars_fragment:xd,alphamap_fragment:vd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:bd,aomap_pars_fragment:wd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Od,color_pars_fragment:Fd,color_pars_vertex:zd,color_vertex:Bd,common:kd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:qd,emissivemap_pars_fragment:Xd,colorspace_fragment:Yd,colorspace_pars_fragment:$d,envmap_fragment:Kd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:hf,envmap_vertex:Qd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:of,lights_lambert_fragment:af,lights_lambert_pars_fragment:cf,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:xf,lights_fragment_end:vf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:bf,map_fragment:wf,map_pars_fragment:Ef,map_particle_fragment:Tf,map_particle_pars_fragment:Af,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:Df,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Of,normal_pars_fragment:Ff,normal_pars_vertex:zf,normal_vertex:Bf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Wf,opaque_fragment:qf,packing:Xf,premultiplied_alpha_fragment:Yf,project_vertex:$f,dithering_fragment:Kf,dithering_pars_fragment:jf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:op,specularmap_fragment:ap,specularmap_pars_fragment:cp,tonemapping_fragment:lp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:yp,cube_frag:Sp,depth_vert:bp,depth_frag:wp,distanceRGBA_vert:Ep,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Dp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Op,meshnormal_vert:Fp,meshnormal_frag:zp,meshphong_vert:Bp,meshphong_frag:kp,meshphysical_vert:Gp,meshphysical_frag:Hp,meshtoon_vert:Vp,meshtoon_frag:Wp,points_vert:qp,points_frag:Xp,shadow_vert:Yp,shadow_frag:$p,sprite_vert:Kp,sprite_frag:jp},vt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Tn={basic:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ke([vt.points,vt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ke([vt.common,vt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ke([vt.sprite,vt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ke([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ke([vt.lights,vt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Tn.physical={uniforms:Ke([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const dr={r:0,b:0,g:0},fi=new qn,Zp=new Ae;function Jp(s,t,e,n,i,r,o){const a=new It(0);let c=r===!0?0:1,l,d,h=null,p=0,f=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function v(E){let S=!1;const U=_(E);U===null?u(a,c):U&&U.isColor&&(u(U,1),S=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,S){const U=_(S);U&&(U.isCubeTexture||U.mapping===Rr)?(d===void 0&&(d=new lt(new Ne(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ls(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,g,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),fi.copy(S.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(fi)),d.material.toneMapped=ge.getTransfer(U.colorSpace)!==be,(h!==U||p!==U.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=U,p=U.version,f=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new lt(new Ci(2,2),new oi({name:"BackgroundMaterial",uniforms:ls(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ge.getTransfer(U.colorSpace)!==be,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||p!==U.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=U,p=U.version,f=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(dr,Zl(s)),n.buffers.color.setClear(dr.r,dr.g,dr.b,S,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:v,addToRenderList:m,dispose:w}}function Qp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,o=!1;function a(x,L,H,G,Z){let nt=!1;const j=h(G,H,L);r!==j&&(r=j,l(r.object)),nt=f(x,G,H,Z),nt&&_(x,G,H,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,S(x,L,H,G),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function h(x,L,H){const G=H.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let nt=Z[L.id];nt===void 0&&(nt={},Z[L.id]=nt);let j=nt[G];return j===void 0&&(j=p(c()),nt[G]=j),j}function p(x){const L=[],H=[],G=[];for(let Z=0;Z<e;Z++)L[Z]=0,H[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:G,object:x,attributes:{},index:null}}function f(x,L,H,G){const Z=r.attributes,nt=L.attributes;let j=0;const ct=H.getAttributes();for(const Y in ct)if(ct[Y].location>=0){const Et=Z[Y];let rt=nt[Y];if(rt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),Et===void 0||Et.attribute!==rt||rt&&Et.data!==rt.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function _(x,L,H,G){const Z={},nt=L.attributes;let j=0;const ct=H.getAttributes();for(const Y in ct)if(ct[Y].location>=0){let Et=nt[Y];Et===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Et=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Et=x.instanceColor));const rt={};rt.attribute=Et,Et&&Et.data&&(rt.data=Et.data),Z[Y]=rt,j++}r.attributes=Z,r.attributesNum=j,r.index=G}function v(){const x=r.newAttributes;for(let L=0,H=x.length;L<H;L++)x[L]=0}function m(x){u(x,0)}function u(x,L){const H=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;H[x]=1,G[x]===0&&(s.enableVertexAttribArray(x),G[x]=1),Z[x]!==L&&(s.vertexAttribDivisor(x,L),Z[x]=L)}function w(){const x=r.newAttributes,L=r.enabledAttributes;for(let H=0,G=L.length;H<G;H++)L[H]!==x[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function E(x,L,H,G,Z,nt,j){j===!0?s.vertexAttribIPointer(x,L,H,Z,nt):s.vertexAttribPointer(x,L,H,G,Z,nt)}function S(x,L,H,G){v();const Z=G.attributes,nt=H.getAttributes(),j=L.defaultAttributeValues;for(const ct in nt){const Y=nt[ct];if(Y.location>=0){let _t=Z[ct];if(_t===void 0&&(ct==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),ct==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),_t!==void 0){const Et=_t.normalized,rt=_t.itemSize,Tt=t.get(_t);if(Tt===void 0)continue;const ve=Tt.buffer,et=Tt.type,mt=Tt.bytesPerElement,Nt=et===s.INT||et===s.UNSIGNED_INT||_t.gpuType===fa;if(_t.isInterleavedBufferAttribute){const St=_t.data,Ft=St.stride,le=_t.offset;if(St.isInstancedInterleavedBuffer){for(let Ht=0;Ht<Y.locationSize;Ht++)u(Y.location+Ht,St.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ht=0;Ht<Y.locationSize;Ht++)m(Y.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ht=0;Ht<Y.locationSize;Ht++)E(Y.location+Ht,rt/Y.locationSize,et,Et,Ft*mt,(le+rt/Y.locationSize*Ht)*mt,Nt)}else{if(_t.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)u(Y.location+St,_t.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let St=0;St<Y.locationSize;St++)m(Y.location+St);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let St=0;St<Y.locationSize;St++)E(Y.location+St,rt/Y.locationSize,et,Et,rt*mt,rt/Y.locationSize*St*mt,Nt)}}else if(j!==void 0){const Et=j[ct];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv(Y.location,Et);break;case 3:s.vertexAttrib3fv(Y.location,Et);break;case 4:s.vertexAttrib4fv(Y.location,Et);break;default:s.vertexAttrib1fv(Y.location,Et)}}}}w()}function U(){D();for(const x in n){const L=n[x];for(const H in L){const G=L[H];for(const Z in G)d(G[Z].object),delete G[Z];delete L[H]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const H in L){const G=L[H];for(const Z in G)d(G[Z].object),delete G[Z];delete L[H]}delete n[x.id]}function g(x){for(const L in n){const H=n[L];if(H[x.id]===void 0)continue;const G=H[x.id];for(const Z in G)d(G[Z].object),delete G[Z];delete H[x.id]}}function D(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function tm(s,t,e){let n;function i(l){n=l}function r(l,d){s.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,h){h!==0&&(s.drawArraysInstanced(n,l,d,h),e.update(d,n,h))}function a(l,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];e.update(f,n,1)}function c(l,d,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],d[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,p,0,h);let _=0;for(let v=0;v<h;v++)_+=d[v]*p[v];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function em(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==wn&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){const D=g===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Rn&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==Gn&&!D)}function c(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:U,maxSamples:C}}function nm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gi,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||i;return i=p,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?d(null):l();else{const w=r?0:n,E=w*4;let S=u.clippingState||null;c.value=S,S=d(_,p,E,f);for(let U=0;U!==E;++U)S[U]=e[U];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,f,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const u=f+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,S=f;E!==v;++E,S+=4)o.copy(h[E]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function im(s){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=os:a===Po&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Po)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ju(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ts=4,_c=[.125,.215,.35,.446,.526,.582],Mi=20,ro=new sh,xc=new It;let oo=null,ao=0,co=0,lo=!1;const _i=(1+Math.sqrt(5))/2,Zi=1/_i,vc=[new P(-_i,Zi,0),new P(_i,Zi,0),new P(-Zi,0,_i),new P(Zi,0,_i),new P(0,_i,-Zi),new P(0,_i,Zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],sm=new P;class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=sm}=r;oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,co),this._renderer.xr.enabled=lo,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ns,format:wn,colorSpace:cs,depthBuffer:!1},i=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=om(r,t,e)}return i}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,i,r){const c=new pn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(xc),h.toneMapping=si,h.autoClear=!1;const _=new an({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),v=new lt(new Ne,_);let m=!1;const u=t.background;u?u.isColor&&(_.color.copy(u),t.background=null,m=!0):(_.color.copy(xc),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const S=this._cubeSize;fr(i,E*S,w>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(v,c),h.render(t,c)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===os||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vc[(i-r-1)%vc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new lt(this._lodPlanes[i],l),p=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),v=r/_,m=isFinite(r)?1+Math.floor(d*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const u=[];let w=0;for(let g=0;g<Mi;++g){const D=g/v,b=Math.exp(-D*D/2);u.push(b),g===0?w+=b:g<m&&(w+=2*b)}for(let g=0;g<u.length;g++)u[g]=u[g]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const S=this._sizeLods[i],U=3*S*(i>E-ts?i-E+ts:0),C=4*(this._cubeSize-S);fr(e,U,C,3*S,2*S),c.setRenderTarget(e),c.render(h,ro)}}function rm(s){const t=[],e=[],n=[];let i=s;const r=s-ts+1+_c.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ts?c=_c[o-s+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,v=3,m=2,u=1,w=new Float32Array(v*_*f),E=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let C=0;C<f;C++){const g=C%3*2/3-1,D=C>2?0:-1,b=[g,D,0,g+2/3,D,0,g+2/3,D+1,0,g,D,0,g+2/3,D+1,0,g,D+1,0];w.set(b,v*_*C),E.set(p,m*_*C);const x=[C,C,C,C,C,C];S.set(x,u*_*C)}const U=new Ge;U.setAttribute("position",new on(w,v)),U.setAttribute("uv",new on(E,m)),U.setAttribute("faceIndex",new on(S,u)),t.push(U),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yc(s,t,e){const n=new Ei(s,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function om(s,t,e){const n=new Float32Array(Mi),i=new P(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Sc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function bc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function am(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Co||c===Po,d=c===os||c===as;if(l||d){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Mc(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new Mc(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(s,t,e,n){const i={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete i[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function c(h){const p=h.attributes;for(const f in p)t.update(p[f],s.ARRAY_BUFFER)}function l(h){const p=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let E=0,S=w.length;E<S;E+=3){const U=w[E+0],C=w[E+1],g=w[E+2];p.push(U,C,C,g,g,U)}}else if(_!==void 0){const w=_.array;v=_.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const U=E+0,C=E+1,g=E+2;p.push(U,C,C,g,g,U)}}else return;const m=new(Wl(p)?jl:Kl)(p,1);m.version=v;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const p=r.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function hm(s,t,e){let n;function i(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){s.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,p*o,_),e.update(f,n,_))}function d(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function h(p,f,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,v,0,_);let u=0;for(let w=0;w<_;w++)u+=f[w]*v[w];e.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function um(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dm(s,t,e){const n=new WeakMap,i=new Pe;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let U=a.attributes.position.count*S,C=1;U>t.maxTextureSize&&(C=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const g=new Float32Array(U*C*4*h),D=new ql(g,U,C,h);D.type=Gn,D.needsUpdate=!0;const b=S*4;for(let L=0;L<h;L++){const H=u[L],G=w[L],Z=E[L],nt=U*C*4*L;for(let j=0;j<H.count;j++){const ct=j*b;_===!0&&(i.fromBufferAttribute(H,j),g[nt+ct+0]=i.x,g[nt+ct+1]=i.y,g[nt+ct+2]=i.z,g[nt+ct+3]=0),v===!0&&(i.fromBufferAttribute(G,j),g[nt+ct+4]=i.x,g[nt+ct+5]=i.y,g[nt+ct+6]=i.z,g[nt+ct+7]=0),m===!0&&(i.fromBufferAttribute(Z,j),g[nt+ct+8]=i.x,g[nt+ct+9]=i.y,g[nt+ct+10]=i.z,g[nt+ct+11]=Z.itemSize===4?i.w:1)}}p={count:h,texture:D,size:new jt(U,C)},n.set(a,p),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function fm(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=t.get(c,d);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const oh=new Ye,wc=new ih(1,1),ah=new ql,ch=new Iu,lh=new Ql,Ec=[],Tc=[],Ac=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function ds(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ec[i];if(r===void 0&&(r=new Float32Array(i),Ec[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lr(s,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function xm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Cc.set(n),s.uniformMatrix2fv(this.addr,!1,Cc),Fe(e,n)}}function vm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Rc.set(n),s.uniformMatrix3fv(this.addr,!1,Rc),Fe(e,n)}}function Mm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Ac.set(n),s.uniformMatrix4fv(this.addr,!1,Ac),Fe(e,n)}}function ym(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Em(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function Am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function Cm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wc.compareFunction=Vl,r=wc):r=oh,e.setTexture2D(t||r,i)}function Pm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ch,i)}function Dm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lh,i)}function Lm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ah,i)}function Im(s){switch(s){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return ym;case 35667:case 35671:return Sm;case 35668:case 35672:return bm;case 35669:case 35673:return wm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(s,t){s.uniform1fv(this.addr,t)}function Nm(s,t){const e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function Om(s,t){const e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function Fm(s,t){const e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function zm(s,t){const e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bm(s,t){const e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function km(s,t){const e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gm(s,t){s.uniform1iv(this.addr,t)}function Hm(s,t){s.uniform2iv(this.addr,t)}function Vm(s,t){s.uniform3iv(this.addr,t)}function Wm(s,t){s.uniform4iv(this.addr,t)}function qm(s,t){s.uniform1uiv(this.addr,t)}function Xm(s,t){s.uniform2uiv(this.addr,t)}function Ym(s,t){s.uniform3uiv(this.addr,t)}function $m(s,t){s.uniform4uiv(this.addr,t)}function Km(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||oh,r[o])}function jm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ch,r[o])}function Zm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lh,r[o])}function Jm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ah,r[o])}function Qm(s){switch(s){case 5126:return Um;case 35664:return Nm;case 35665:return Om;case 35666:return Fm;case 35674:return zm;case 35675:return Bm;case 35676:return km;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return qm;case 36294:return Xm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}}class n0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Pc(s,t){s.seq.push(t),s.map[t.id]=t}function i0(s,t,e){const n=s.name,i=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Pc(e,l===void 0?new t0(a,s,t):new e0(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new n0(a),Pc(e,h)),e=h}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);i0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Dc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const s0=37297;let r0=0;function o0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lc=new ne;function a0(s){ge._getMatrix(Lc,ge.workingColorSpace,s);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Sr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ic(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+o0(s.getShaderSource(t),o)}else return i}function c0(s,t){const e=a0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l0(s,t){let e;switch(t){case Wh:e="Linear";break;case qh:e="Reinhard";break;case Xh:e="Cineon";break;case Yh:e="ACESFilmic";break;case Kh:e="AgX";break;case jh:e="Neutral";break;case $h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new P;function h0(){ge.getLuminanceCoefficients(pr);const s=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function d0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ts(s){return s!==""}function Uc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(s){return s.replace(p0,g0)}const m0=new Map;function g0(s,t){let e=se[t];if(e===void 0){const n=m0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(s){return s.replace(_0,x0)}function x0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function M0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function S0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Il:t="ENVMAP_BLENDING_MULTIPLY";break;case Hh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function b0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=v0(e),l=M0(e),d=y0(e),h=S0(e),p=b0(e),f=u0(e),_=d0(r),v=i.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),u.length>0&&(u+=`
`)):(m=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),u=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?se.tonemapping_pars_fragment:"",e.toneMapping!==si?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,c0("linearToOutputTexel",e.outputColorSpace),h0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=aa(o),o=Uc(o,e),o=Nc(o,e),a=aa(a),a=Uc(a,e),a=Nc(a,e),o=Oc(o),a=Oc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+m+o,S=w+u+a,U=Dc(i,i.VERTEX_SHADER,E),C=Dc(i,i.FRAGMENT_SHADER,S);i.attachShader(v,U),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function g(L){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(v).trim(),G=i.getShaderInfoLog(U).trim(),Z=i.getShaderInfoLog(C).trim();let nt=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,U,C);else{const ct=Ic(i,U,"vertex"),Y=Ic(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ct+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||Z==="")&&(j=!1);j&&(L.diagnostics={runnable:nt,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:u}})}i.deleteShader(U),i.deleteShader(C),D=new yr(i,v),b=f0(i,v)}let D;this.getUniforms=function(){return D===void 0&&g(this),D};let b;this.getAttributes=function(){return b===void 0&&g(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,s0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=C,this}let E0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A0(t),e.set(t,n)),n}}class A0{constructor(t){this.id=E0++,this.code=t,this.usedTimes=0}}function R0(s,t,e,n,i,r,o){const a=new Yl,c=new T0,l=new Set,d=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,L,H,G){const Z=H.fog,nt=G.geometry,j=b.isMeshStandardMaterial?H.environment:null,ct=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),Y=ct&&ct.mapping===Rr?ct.image.height:null,_t=_[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Et=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,rt=Et!==void 0?Et.length:0;let Tt=0;nt.morphAttributes.position!==void 0&&(Tt=1),nt.morphAttributes.normal!==void 0&&(Tt=2),nt.morphAttributes.color!==void 0&&(Tt=3);let ve,et,mt,Nt;if(_t){const oe=Tn[_t];ve=oe.vertexShader,et=oe.fragmentShader}else ve=b.vertexShader,et=b.fragmentShader,c.update(b),mt=c.getVertexShaderID(b),Nt=c.getFragmentShaderID(b);const St=s.getRenderTarget(),Ft=s.state.buffers.depth.getReversed(),le=G.isInstancedMesh===!0,Ht=G.isBatchedMesh===!0,Ee=!!b.map,pe=!!b.matcap,re=!!ct,I=!!b.aoMap,Le=!!b.lightMap,te=!!b.bumpMap,Me=!!b.normalMap,Lt=!!b.displacementMap,ce=!!b.emissiveMap,zt=!!b.metalnessMap,Kt=!!b.roughnessMap,Re=b.anisotropy>0,R=b.clearcoat>0,M=b.dispersion>0,V=b.iridescence>0,J=b.sheen>0,tt=b.transmission>0,K=Re&&!!b.anisotropyMap,Ut=R&&!!b.clearcoatMap,z=R&&!!b.clearcoatNormalMap,dt=R&&!!b.clearcoatRoughnessMap,Pt=V&&!!b.iridescenceMap,at=V&&!!b.iridescenceThicknessMap,$=J&&!!b.sheenColorMap,kt=J&&!!b.sheenRoughnessMap,Bt=!!b.specularMap,gt=!!b.specularColorMap,qt=!!b.specularIntensityMap,N=tt&&!!b.transmissionMap,xt=tt&&!!b.thicknessMap,ot=!!b.gradientMap,At=!!b.alphaMap,ht=b.alphaTest>0,Q=!!b.alphaHash,Rt=!!b.extensions;let Xt=si;b.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const it={shaderID:_t,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:et,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:Nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&G._colorsTexture!==null,instancing:le,instancingColor:le&&G.instanceColor!==null,instancingMorph:le&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:cs,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:pe,envMap:re,envMapMode:re&&ct.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:Le,bumpMap:te,normalMap:Me,displacementMap:p&&Lt,emissiveMap:ce,normalMapObjectSpace:Me&&b.normalMapType===tu,normalMapTangentSpace:Me&&b.normalMapType===Hl,metalnessMap:zt,roughnessMap:Kt,anisotropy:Re,anisotropyMap:K,clearcoat:R,clearcoatMap:Ut,clearcoatNormalMap:z,clearcoatRoughnessMap:dt,dispersion:M,iridescence:V,iridescenceMap:Pt,iridescenceThicknessMap:at,sheen:J,sheenColorMap:$,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:gt,specularIntensityMap:qt,transmission:tt,transmissionMap:N,thicknessMap:xt,gradientMap:ot,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:At,alphaTest:ht,alphaHash:Q,combine:b.combine,mapUv:Ee&&v(b.map.channel),aoMapUv:I&&v(b.aoMap.channel),lightMapUv:Le&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:Me&&v(b.normalMap.channel),displacementMapUv:Lt&&v(b.displacementMap.channel),emissiveMapUv:ce&&v(b.emissiveMap.channel),metalnessMapUv:zt&&v(b.metalnessMap.channel),roughnessMapUv:Kt&&v(b.roughnessMap.channel),anisotropyMapUv:K&&v(b.anisotropyMap.channel),clearcoatMapUv:Ut&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:z&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:$&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(b.sheenRoughnessMap.channel),specularMapUv:Bt&&v(b.specularMap.channel),specularColorMapUv:gt&&v(b.specularColorMap.channel),specularIntensityMapUv:qt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:xt&&v(b.thicknessMap.channel),alphaMapUv:At&&v(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Me||Re),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!nt.attributes.uv&&(Ee||At),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ft,skinning:G.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&ge.getTransfer(b.map.colorSpace)===be,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&ge.getTransfer(b.emissiveMap.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function u(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)x.push(L),x.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(w(x,b),E(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function w(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function E(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const x=_[b.type];let L;if(x){const H=Tn[x];L=Xu.clone(H.uniforms)}else L=b.uniforms;return L}function U(b,x){let L;for(let H=0,G=d.length;H<G;H++){const Z=d[H];if(Z.cacheKey===x){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new w0(s,x,b,r),d.push(L)),L}function C(b){if(--b.usedTimes===0){const x=d.indexOf(b);d[x]=d[d.length-1],d.pop(),b.destroy()}}function g(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:U,releaseProgram:C,releaseShaderCache:g,programs:d,dispose:D}}function C0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function P0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,p,f,_,v,m){let u=s[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},s[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=v,u.group=m),t++,u}function a(h,p,f,_,v,m){const u=o(h,p,f,_,v,m);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):e.push(u)}function c(h,p,f,_,v,m){const u=o(h,p,f,_,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):e.unshift(u)}function l(h,p){e.length>1&&e.sort(h||P0),n.length>1&&n.sort(p||zc),i.length>1&&i.sort(p||zc)}function d(){for(let h=t,p=s.length;h<p;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:l}}function D0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Bc,s.set(n,[o])):i>=r.length?(o=new Bc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function L0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function I0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let U0=0;function N0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function O0(s){const t=new L0,e=I0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Ae,o=new Ae;function a(l){let d=0,h=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,v=0,m=0,u=0,w=0,E=0,S=0,U=0,C=0,g=0;l.sort(N0);for(let b=0,x=l.length;b<x;b++){const L=l[b],H=L.color,G=L.intensity,Z=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*G,h+=H.g*G,p+=H.b*G;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],G);g++}else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ct=L.shadow,Y=e.get(L);Y.shadowIntensity=ct.intensity,Y.shadowBias=ct.bias,Y.shadowNormalBias=ct.normalBias,Y.shadowRadius=ct.radius,Y.shadowMapSize=ct.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=j,f++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(H).multiplyScalar(G),j.distance=Z,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[v]=j;const ct=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,ct.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=ct.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=ct.intensity,Y.shadowBias=ct.bias,Y.shadowNormalBias=ct.normalBias,Y.shadowRadius=ct.radius,Y.shadowMapSize=ct.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=nt,S++}v++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(H).multiplyScalar(G),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const ct=L.shadow,Y=e.get(L);Y.shadowIntensity=ct.intensity,Y.shadowBias=ct.bias,Y.shadowNormalBias=ct.normalBias,Y.shadowRadius=ct.radius,Y.shadowMapSize=ct.mapSize,Y.shadowCameraNear=ct.camera.near,Y.shadowCameraFar=ct.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=nt,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=j,_++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(G),j.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[u]=j,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==U||D.numLightProbes!==g)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=g,D.directionalLength=f,D.pointLength=_,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=U,D.numLightProbes=g,n.version=U0++)}function c(l,d){let h=0,p=0,f=0,_=0,v=0;const m=d.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const E=l[u];if(E.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function kc(s){const t=new O0(s),e=[],n=[];function i(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function F0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new kc(s),t.set(i,[a])):r>=o.length?(a=new kc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(s,t,e){let n=new ba;const i=new jt,r=new jt,o=new Pe,a=new od({depthPacking:Qh}),c=new ad,l={},d=e.maxTextureSize,h={[ri]:je,[je]:ri,[tn]:tn},p=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:z0,fragmentShader:B0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ge;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let u=this.type;this.render=function(C,g,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ii),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=u!==Bn&&this.type===Bn,Z=u===Bn&&this.type!==Bn;for(let nt=0,j=C.length;nt<j;nt++){const ct=C[nt],Y=ct.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const _t=Y.getFrameExtents();if(i.multiply(_t),r.copy(Y.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/_t.x),i.x=r.x*_t.x,Y.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/_t.y),i.y=r.y*_t.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||Z===!0){const rt=this.type!==Bn?{minFilter:Ze,magFilter:Ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ei(i.x,i.y,rt),Y.map.texture.name=ct.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Et=Y.getViewportCount();for(let rt=0;rt<Et;rt++){const Tt=Y.getViewport(rt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),H.viewport(o),Y.updateMatrices(ct,rt),n=Y.getFrustum(),S(g,D,Y.camera,ct,this.type)}Y.isPointLightShadow!==!0&&this.type===Bn&&w(Y,D),Y.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,L)};function w(C,g){const D=t.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(g,null,D,p,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(g,null,D,f,v,null)}function E(C,g,D,b){let x=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)x=L;else if(x=D.isPointLight===!0?c:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const H=x.uuid,G=g.uuid;let Z=l[H];Z===void 0&&(Z={},l[H]=Z);let nt=Z[G];nt===void 0&&(nt=x.clone(),Z[G]=nt,g.addEventListener("dispose",U)),x=nt}if(x.visible=g.visible,x.wireframe=g.wireframe,b===Bn?x.side=g.shadowSide!==null?g.shadowSide:g.side:x.side=g.shadowSide!==null?g.shadowSide:h[g.side],x.alphaMap=g.alphaMap,x.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,x.map=g.map,x.clipShadows=g.clipShadows,x.clippingPlanes=g.clippingPlanes,x.clipIntersection=g.clipIntersection,x.displacementMap=g.displacementMap,x.displacementScale=g.displacementScale,x.displacementBias=g.displacementBias,x.wireframeLinewidth=g.wireframeLinewidth,x.linewidth=g.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=s.properties.get(x);H.light=D}return x}function S(C,g,D,b,x){if(C.visible===!1)return;if(C.layers.test(g.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const G=t.update(C),Z=C.material;if(Array.isArray(Z)){const nt=G.groups;for(let j=0,ct=nt.length;j<ct;j++){const Y=nt[j],_t=Z[Y.materialIndex];if(_t&&_t.visible){const Et=E(C,_t,b,x);C.onBeforeShadow(s,C,g,D,G,Et,Y),s.renderBufferDirect(D,null,G,Et,C,Y),C.onAfterShadow(s,C,g,D,G,Et,Y)}}}else if(Z.visible){const nt=E(C,Z,b,x);C.onBeforeShadow(s,C,g,D,G,nt,null),s.renderBufferDirect(D,null,G,nt,C,null),C.onAfterShadow(s,C,g,D,G,nt,null)}}const H=C.children;for(let G=0,Z=H.length;G<Z;G++)S(H[G],g,D,b,x)}function U(C){C.target.removeEventListener("dispose",U);for(const D in l){const b=l[D],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const G0={[So]:bo,[wo]:Ao,[Eo]:Ro,[rs]:To,[bo]:So,[Ao]:wo,[Ro]:Eo,[To]:rs};function H0(s,t){function e(){let N=!1;const xt=new Pe;let ot=null;const At=new Pe(0,0,0,0);return{setMask:function(ht){ot!==ht&&!N&&(s.colorMask(ht,ht,ht,ht),ot=ht)},setLocked:function(ht){N=ht},setClear:function(ht,Q,Rt,Xt,it){it===!0&&(ht*=Xt,Q*=Xt,Rt*=Xt),xt.set(ht,Q,Rt,Xt),At.equals(xt)===!1&&(s.clearColor(ht,Q,Rt,Xt),At.copy(xt))},reset:function(){N=!1,ot=null,At.set(-1,0,0,0)}}}function n(){let N=!1,xt=!1,ot=null,At=null,ht=null;return{setReversed:function(Q){if(xt!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),xt=Q;const Xt=ht;ht=null,this.setClear(Xt)}},getReversed:function(){return xt},setTest:function(Q){Q?St(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(Q){ot!==Q&&!N&&(s.depthMask(Q),ot=Q)},setFunc:function(Q){if(xt&&(Q=G0[Q]),At!==Q){switch(Q){case So:s.depthFunc(s.NEVER);break;case bo:s.depthFunc(s.ALWAYS);break;case wo:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case Eo:s.depthFunc(s.EQUAL);break;case To:s.depthFunc(s.GEQUAL);break;case Ao:s.depthFunc(s.GREATER);break;case Ro:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ht!==Q&&(xt&&(Q=1-Q),s.clearDepth(Q),ht=Q)},reset:function(){N=!1,ot=null,At=null,ht=null,xt=!1}}}function i(){let N=!1,xt=null,ot=null,At=null,ht=null,Q=null,Rt=null,Xt=null,it=null;return{setTest:function(oe){N||(oe?St(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(oe){xt!==oe&&!N&&(s.stencilMask(oe),xt=oe)},setFunc:function(oe,Je,en){(ot!==oe||At!==Je||ht!==en)&&(s.stencilFunc(oe,Je,en),ot=oe,At=Je,ht=en)},setOp:function(oe,Je,en){(Q!==oe||Rt!==Je||Xt!==en)&&(s.stencilOp(oe,Je,en),Q=oe,Rt=Je,Xt=en)},setLocked:function(oe){N=oe},setClear:function(oe){it!==oe&&(s.clearStencil(oe),it=oe)},reset:function(){N=!1,xt=null,ot=null,At=null,ht=null,Q=null,Rt=null,Xt=null,it=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},h={},p=new WeakMap,f=[],_=null,v=!1,m=null,u=null,w=null,E=null,S=null,U=null,C=null,g=new It(0,0,0),D=0,b=!1,x=null,L=null,H=null,G=null,Z=null;const nt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ct=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=ct>=1):Y.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=ct>=2);let _t=null,Et={};const rt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),ve=new Pe().fromArray(rt),et=new Pe().fromArray(Tt);function mt(N,xt,ot,At){const ht=new Uint8Array(4),Q=s.createTexture();s.bindTexture(N,Q),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<ot;Rt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(xt+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return Q}const Nt={};Nt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(s.DEPTH_TEST),o.setFunc(rs),te(!1),Me(Fa),St(s.CULL_FACE),I(ii);function St(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Ft(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function le(N,xt){return h[N]!==xt?(s.bindFramebuffer(N,xt),h[N]=xt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ht(N,xt){let ot=f,At=!1;if(N){ot=p.get(xt),ot===void 0&&(ot=[],p.set(xt,ot));const ht=N.textures;if(ot.length!==ht.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Rt=ht.length;Q<Rt;Q++)ot[Q]=s.COLOR_ATTACHMENT0+Q;ot.length=ht.length,At=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,At=!0);At&&s.drawBuffers(ot)}function Ee(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const pe={[vi]:s.FUNC_ADD,[Eh]:s.FUNC_SUBTRACT,[Th]:s.FUNC_REVERSE_SUBTRACT};pe[Ah]=s.MIN,pe[Rh]=s.MAX;const re={[Ch]:s.ZERO,[Ph]:s.ONE,[Dh]:s.SRC_COLOR,[Mo]:s.SRC_ALPHA,[Fh]:s.SRC_ALPHA_SATURATE,[Nh]:s.DST_COLOR,[Ih]:s.DST_ALPHA,[Lh]:s.ONE_MINUS_SRC_COLOR,[yo]:s.ONE_MINUS_SRC_ALPHA,[Oh]:s.ONE_MINUS_DST_COLOR,[Uh]:s.ONE_MINUS_DST_ALPHA,[zh]:s.CONSTANT_COLOR,[Bh]:s.ONE_MINUS_CONSTANT_COLOR,[kh]:s.CONSTANT_ALPHA,[Gh]:s.ONE_MINUS_CONSTANT_ALPHA};function I(N,xt,ot,At,ht,Q,Rt,Xt,it,oe){if(N===ii){v===!0&&(Ft(s.BLEND),v=!1);return}if(v===!1&&(St(s.BLEND),v=!0),N!==wh){if(N!==m||oe!==b){if((u!==vi||S!==vi)&&(s.blendEquation(s.FUNC_ADD),u=vi,S=vi),oe)switch(N){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.ONE,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,E=null,U=null,C=null,g.set(0,0,0),D=0,m=N,b=oe}return}ht=ht||xt,Q=Q||ot,Rt=Rt||At,(xt!==u||ht!==S)&&(s.blendEquationSeparate(pe[xt],pe[ht]),u=xt,S=ht),(ot!==w||At!==E||Q!==U||Rt!==C)&&(s.blendFuncSeparate(re[ot],re[At],re[Q],re[Rt]),w=ot,E=At,U=Q,C=Rt),(Xt.equals(g)===!1||it!==D)&&(s.blendColor(Xt.r,Xt.g,Xt.b,it),g.copy(Xt),D=it),m=N,b=!1}function Le(N,xt){N.side===tn?Ft(s.CULL_FACE):St(s.CULL_FACE);let ot=N.side===je;xt&&(ot=!ot),te(ot),N.blending===es&&N.transparent===!1?I(ii):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const At=N.stencilWrite;a.setTest(At),At&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){x!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),x=N)}function Me(N){N!==Sh?(St(s.CULL_FACE),N!==L&&(N===Fa?s.cullFace(s.BACK):N===bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),L=N}function Lt(N){N!==H&&(j&&s.lineWidth(N),H=N)}function ce(N,xt,ot){N?(St(s.POLYGON_OFFSET_FILL),(G!==xt||Z!==ot)&&(s.polygonOffset(xt,ot),G=xt,Z=ot)):Ft(s.POLYGON_OFFSET_FILL)}function zt(N){N?St(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function Kt(N){N===void 0&&(N=s.TEXTURE0+nt-1),_t!==N&&(s.activeTexture(N),_t=N)}function Re(N,xt,ot){ot===void 0&&(_t===null?ot=s.TEXTURE0+nt-1:ot=_t);let At=Et[ot];At===void 0&&(At={type:void 0,texture:void 0},Et[ot]=At),(At.type!==N||At.texture!==xt)&&(_t!==ot&&(s.activeTexture(ot),_t=ot),s.bindTexture(N,xt||Nt[N]),At.type=N,At.texture=xt)}function R(){const N=Et[_t];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(N){ve.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ve.copy(N))}function kt(N){et.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function Bt(N,xt){let ot=l.get(xt);ot===void 0&&(ot=new WeakMap,l.set(xt,ot));let At=ot.get(N);At===void 0&&(At=s.getUniformBlockIndex(xt,N.name),ot.set(N,At))}function gt(N,xt){const At=l.get(xt).get(N);c.get(xt)!==At&&(s.uniformBlockBinding(xt,At,N.__bindingPointIndex),c.set(xt,At))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},_t=null,Et={},h={},p=new WeakMap,f=[],_=null,v=!1,m=null,u=null,w=null,E=null,S=null,U=null,C=null,g=new It(0,0,0),D=0,b=!1,x=null,L=null,H=null,G=null,Z=null,ve.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:Ft,bindFramebuffer:le,drawBuffers:Ht,useProgram:Ee,setBlending:I,setMaterial:Le,setFlipSided:te,setCullFace:Me,setLineWidth:Lt,setPolygonOffset:ce,setScissorTest:zt,activeTexture:Kt,bindTexture:Re,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Pt,texImage3D:at,updateUBOMapping:Bt,uniformBlockBinding:gt,texStorage2D:z,texStorage3D:dt,texSubImage2D:J,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:Ut,scissor:$,viewport:kt,reset:qt}}function V0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return f?new OffscreenCanvas(R,M):wr("canvas")}function v(R,M,V){let J=1;const tt=Re(R);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(J*tt.width),Ut=Math.floor(J*tt.height);h===void 0&&(h=_(K,Ut));const z=M?_(K,Ut):h;return z.width=K,z.height=Ut,z.getContext("2d").drawImage(R,0,0,K,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Ut+")."),z}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,M,V,J,tt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===s.RED&&(V===s.FLOAT&&(K=s.R32F),V===s.HALF_FLOAT&&(K=s.R16F),V===s.UNSIGNED_BYTE&&(K=s.R8)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.R8UI),V===s.UNSIGNED_SHORT&&(K=s.R16UI),V===s.UNSIGNED_INT&&(K=s.R32UI),V===s.BYTE&&(K=s.R8I),V===s.SHORT&&(K=s.R16I),V===s.INT&&(K=s.R32I)),M===s.RG&&(V===s.FLOAT&&(K=s.RG32F),V===s.HALF_FLOAT&&(K=s.RG16F),V===s.UNSIGNED_BYTE&&(K=s.RG8)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RG8UI),V===s.UNSIGNED_SHORT&&(K=s.RG16UI),V===s.UNSIGNED_INT&&(K=s.RG32UI),V===s.BYTE&&(K=s.RG8I),V===s.SHORT&&(K=s.RG16I),V===s.INT&&(K=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RGB8UI),V===s.UNSIGNED_SHORT&&(K=s.RGB16UI),V===s.UNSIGNED_INT&&(K=s.RGB32UI),V===s.BYTE&&(K=s.RGB8I),V===s.SHORT&&(K=s.RGB16I),V===s.INT&&(K=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),V===s.UNSIGNED_INT&&(K=s.RGBA32UI),V===s.BYTE&&(K=s.RGBA8I),V===s.SHORT&&(K=s.RGBA16I),V===s.INT&&(K=s.RGBA32I)),M===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),M===s.RGBA){const Ut=tt?Sr:ge.getTransfer(J);V===s.FLOAT&&(K=s.RGBA32F),V===s.HALF_FLOAT&&(K=s.RGBA16F),V===s.UNSIGNED_BYTE&&(K=Ut===be?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(R,M){let V;return R?M===null||M===wi||M===Ps?V=s.DEPTH24_STENCIL8:M===Gn?V=s.DEPTH32F_STENCIL8:M===Cs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===Ps?V=s.DEPTH_COMPONENT24:M===Gn?V=s.DEPTH_COMPONENT32F:M===Cs&&(V=s.DEPTH_COMPONENT16),V}function U(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),D(M),M.isVideoTexture&&d.delete(M)}function g(R){const M=R.target;M.removeEventListener("dispose",g),x(M)}function D(R){const M=n.get(R);if(M.__webglInit===void 0)return;const V=R.source,J=p.get(V);if(J){const tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(R),Object.keys(J).length===0&&p.delete(V)}n.remove(R)}function b(R){const M=n.get(R);s.deleteTexture(M.__webglTexture);const V=R.source,J=p.get(V);delete J[M.__cacheKey],o.memory.textures--}function x(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,tt=V.length;J<tt;J++){const K=n.get(V[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(R)}let L=0;function H(){L=0}function G(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function Z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function nt(R,M){const V=n.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(V,R,M);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function j(R,M){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Nt(V,R,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function ct(R,M){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Nt(V,R,M);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function Y(R,M){const V=n.get(R);if(R.version>0&&V.__version!==R.version){St(V,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}const _t={[Do]:s.REPEAT,[yi]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},Et={[Ze]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Ir]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},rt={[eu]:s.NEVER,[au]:s.ALWAYS,[nu]:s.LESS,[Vl]:s.LEQUAL,[iu]:s.EQUAL,[ou]:s.GEQUAL,[su]:s.GREATER,[ru]:s.NOTEQUAL};function Tt(R,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===Ir||M.magFilter===Vs||M.magFilter===Si||M.minFilter===An||M.minFilter===Ir||M.minFilter===Vs||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,_t[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,_t[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,_t[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Et[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ze||M.minFilter!==Vs&&M.minFilter!==Si||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ve(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let tt=p.get(J);tt===void 0&&(tt={},p.set(J,tt));const K=Z(M);if(K!==R.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[K].usedTimes++;const Ut=tt[R.__cacheKey];Ut!==void 0&&(tt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&b(M)),R.__cacheKey=K,R.__webglTexture=tt[K].texture}return V}function et(R,M,V){return Math.floor(Math.floor(R/V)/M)}function mt(R,M,V,J){const K=R.updateRanges;if(K.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,V,J,M.data);else{K.sort((at,$)=>at.start-$.start);let Ut=0;for(let at=1;at<K.length;at++){const $=K[Ut],kt=K[at],Bt=$.start+$.count,gt=et(kt.start,M.width,4),qt=et($.start,M.width,4);kt.start<=Bt+1&&gt===qt&&et(kt.start+kt.count-1,M.width,4)===gt?$.count=Math.max($.count,kt.start+kt.count-$.start):(++Ut,K[Ut]=kt)}K.length=Ut+1;const z=s.getParameter(s.UNPACK_ROW_LENGTH),dt=s.getParameter(s.UNPACK_SKIP_PIXELS),Pt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let at=0,$=K.length;at<$;at++){const kt=K[at],Bt=Math.floor(kt.start/4),gt=Math.ceil(kt.count/4),qt=Bt%M.width,N=Math.floor(Bt/M.width),xt=gt,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,qt,N,xt,ot,V,J,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,z),s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function Nt(R,M,V){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const tt=ve(R,M),K=M.source;e.bindTexture(J,R.__webglTexture,s.TEXTURE0+V);const Ut=n.get(K);if(K.version!==Ut.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);const z=ge.getPrimaries(ge.workingColorSpace),dt=M.colorSpace===ni?null:ge.getPrimaries(M.colorSpace),Pt=M.colorSpace===ni||z===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let at=v(M.image,!1,i.maxTextureSize);at=Kt(M,at);const $=r.convert(M.format,M.colorSpace),kt=r.convert(M.type);let Bt=E(M.internalFormat,$,kt,M.colorSpace,M.isVideoTexture);Tt(J,M);let gt;const qt=M.mipmaps,N=M.isVideoTexture!==!0,xt=Ut.__version===void 0||tt===!0,ot=K.dataReady,At=U(M,at);if(M.isDepthTexture)Bt=S(M.format===Ls,M.type),xt&&(N?e.texStorage2D(s.TEXTURE_2D,1,Bt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Bt,at.width,at.height,0,$,kt,null));else if(M.isDataTexture)if(qt.length>0){N&&xt&&e.texStorage2D(s.TEXTURE_2D,At,Bt,qt[0].width,qt[0].height);for(let ht=0,Q=qt.length;ht<Q;ht++)gt=qt[ht],N?ot&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,gt.width,gt.height,$,kt,gt.data):e.texImage2D(s.TEXTURE_2D,ht,Bt,gt.width,gt.height,0,$,kt,gt.data);M.generateMipmaps=!1}else N?(xt&&e.texStorage2D(s.TEXTURE_2D,At,Bt,at.width,at.height),ot&&mt(M,at,$,kt)):e.texImage2D(s.TEXTURE_2D,0,Bt,at.width,at.height,0,$,kt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Bt,qt[0].width,qt[0].height,at.depth);for(let ht=0,Q=qt.length;ht<Q;ht++)if(gt=qt[ht],M.format!==wn)if($!==null)if(N){if(ot)if(M.layerUpdates.size>0){const Rt=gc(gt.width,gt.height,M.format,M.type);for(const Xt of M.layerUpdates){const it=gt.data.subarray(Xt*Rt/gt.data.BYTES_PER_ELEMENT,(Xt+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Xt,gt.width,gt.height,1,$,it)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,gt.width,gt.height,at.depth,$,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Bt,gt.width,gt.height,at.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,gt.width,gt.height,at.depth,$,kt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Bt,gt.width,gt.height,at.depth,0,$,kt,gt.data)}else{N&&xt&&e.texStorage2D(s.TEXTURE_2D,At,Bt,qt[0].width,qt[0].height);for(let ht=0,Q=qt.length;ht<Q;ht++)gt=qt[ht],M.format!==wn?$!==null?N?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,gt.width,gt.height,$,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ot&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,gt.width,gt.height,$,kt,gt.data):e.texImage2D(s.TEXTURE_2D,ht,Bt,gt.width,gt.height,0,$,kt,gt.data)}else if(M.isDataArrayTexture)if(N){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Bt,at.width,at.height,at.depth),ot)if(M.layerUpdates.size>0){const ht=gc(at.width,at.height,M.format,M.type);for(const Q of M.layerUpdates){const Rt=at.data.subarray(Q*ht/at.data.BYTES_PER_ELEMENT,(Q+1)*ht/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,$,kt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,$,kt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,at.width,at.height,at.depth,0,$,kt,at.data);else if(M.isData3DTexture)N?(xt&&e.texStorage3D(s.TEXTURE_3D,At,Bt,at.width,at.height,at.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,$,kt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,at.width,at.height,at.depth,0,$,kt,at.data);else if(M.isFramebufferTexture){if(xt)if(N)e.texStorage2D(s.TEXTURE_2D,At,Bt,at.width,at.height);else{let ht=at.width,Q=at.height;for(let Rt=0;Rt<At;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Bt,ht,Q,0,$,kt,null),ht>>=1,Q>>=1}}else if(qt.length>0){if(N&&xt){const ht=Re(qt[0]);e.texStorage2D(s.TEXTURE_2D,At,Bt,ht.width,ht.height)}for(let ht=0,Q=qt.length;ht<Q;ht++)gt=qt[ht],N?ot&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,$,kt,gt):e.texImage2D(s.TEXTURE_2D,ht,Bt,$,kt,gt);M.generateMipmaps=!1}else if(N){if(xt){const ht=Re(at);e.texStorage2D(s.TEXTURE_2D,At,Bt,ht.width,ht.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,$,kt,at)}else e.texImage2D(s.TEXTURE_2D,0,Bt,$,kt,at);m(M)&&u(J),Ut.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function St(R,M,V){if(M.image.length!==6)return;const J=ve(R,M),tt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);const K=n.get(tt);if(tt.version!==K.__version||J===!0){e.activeTexture(s.TEXTURE0+V);const Ut=ge.getPrimaries(ge.workingColorSpace),z=M.colorSpace===ni?null:ge.getPrimaries(M.colorSpace),dt=M.colorSpace===ni||Ut===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,$=[];for(let Q=0;Q<6;Q++)!Pt&&!at?$[Q]=v(M.image[Q],!0,i.maxCubemapSize):$[Q]=at?M.image[Q].image:M.image[Q],$[Q]=Kt(M,$[Q]);const kt=$[0],Bt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),qt=E(M.internalFormat,Bt,gt,M.colorSpace),N=M.isVideoTexture!==!0,xt=K.__version===void 0||J===!0,ot=tt.dataReady;let At=U(M,kt);Tt(s.TEXTURE_CUBE_MAP,M);let ht;if(Pt){N&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,qt,kt.width,kt.height);for(let Q=0;Q<6;Q++){ht=$[Q].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const Xt=ht[Rt];M.format!==wn?Bt!==null?N?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Xt.width,Xt.height,Bt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,qt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,Xt.width,Xt.height,Bt,gt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,qt,Xt.width,Xt.height,0,Bt,gt,Xt.data)}}}else{if(ht=M.mipmaps,N&&xt){ht.length>0&&At++;const Q=Re($[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,qt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,$[Q].width,$[Q].height,Bt,gt,$[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qt,$[Q].width,$[Q].height,0,Bt,gt,$[Q].data);for(let Rt=0;Rt<ht.length;Rt++){const it=ht[Rt].image[Q].image;N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,it.width,it.height,Bt,gt,it.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,qt,it.width,it.height,0,Bt,gt,it.data)}}else{N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,gt,$[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qt,Bt,gt,$[Q]);for(let Rt=0;Rt<ht.length;Rt++){const Xt=ht[Rt];N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Bt,gt,Xt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,qt,Bt,gt,Xt.image[Q])}}}m(M)&&u(s.TEXTURE_CUBE_MAP),K.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ft(R,M,V,J,tt,K){const Ut=r.convert(V.format,V.colorSpace),z=r.convert(V.type),dt=E(V.internalFormat,Ut,z,V.colorSpace),Pt=n.get(M),at=n.get(V);if(at.__renderTarget=M,!Pt.__hasExternalTextures){const $=Math.max(1,M.width>>K),kt=Math.max(1,M.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,dt,$,kt,M.depth,0,Ut,z,null):e.texImage2D(tt,K,dt,$,kt,0,Ut,z,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ce(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,at.__webglTexture,0,Lt(M)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,at.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function le(R,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,K=S(M.stencilBuffer,tt),Ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=Lt(M);ce(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,K,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,z,K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,R)}else{const J=M.textures;for(let tt=0;tt<J.length;tt++){const K=J[tt],Ut=r.convert(K.format,K.colorSpace),z=r.convert(K.type),dt=E(K.internalFormat,Ut,z,K.colorSpace),Pt=Lt(M);V&&ce(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,dt,M.width,M.height):ce(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);const tt=J.__webglTexture,K=Lt(M);if(M.depthTexture.format===Ds)ce(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ls)ce(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ee(R){const M=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?Ht(M.__webglFramebuffer[0],R):Ht(M.__webglFramebuffer,R)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),le(M.__webglDepthbuffer[J],R,!1);else{const tt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),le(M.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(R,M,V){const J=n.get(R);M!==void 0&&Ft(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ee(R)}function re(R){const M=R.texture,V=n.get(R),J=n.get(M);R.addEventListener("dispose",g);const tt=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ut=tt.length>1;if(Ut||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[z]=[];for(let dt=0;dt<M.mipmaps.length;dt++)V.__webglFramebuffer[z][dt]=s.createFramebuffer()}else V.__webglFramebuffer[z]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let z=0;z<M.mipmaps.length;z++)V.__webglFramebuffer[z]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Ut)for(let z=0,dt=tt.length;z<dt;z++){const Pt=n.get(tt[z]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let z=0;z<tt.length;z++){const dt=tt[z];V.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[z]);const Pt=r.convert(dt.format,dt.colorSpace),at=r.convert(dt.type),$=E(dt.internalFormat,Pt,at,dt.colorSpace,R.isXRRenderTarget===!0),kt=Lt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,$,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,V.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),le(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,M);for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Ft(V.__webglFramebuffer[z][dt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,dt);else Ft(V.__webglFramebuffer[z],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);m(M)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let z=0,dt=tt.length;z<dt;z++){const Pt=tt[z],at=n.get(Pt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),Tt(s.TEXTURE_2D,Pt),Ft(V.__webglFramebuffer,R,Pt,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,0),m(Pt)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let z=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(z,J.__webglTexture),Tt(z,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Ft(V.__webglFramebuffer[dt],R,M,s.COLOR_ATTACHMENT0,z,dt);else Ft(V.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,z,0);m(M)&&u(z),e.unbindTexture()}R.depthBuffer&&Ee(R)}function I(R){const M=R.textures;for(let V=0,J=M.length;V<J;V++){const tt=M[V];if(m(tt)){const K=w(R),Ut=n.get(tt).__webglTexture;e.bindTexture(K,Ut),u(K),e.unbindTexture()}}}const Le=[],te=[];function Me(R){if(R.samples>0){if(ce(R)===!1){const M=R.textures,V=R.width,J=R.height;let tt=s.COLOR_BUFFER_BIT;const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=n.get(R),z=M.length>1;if(z)for(let Pt=0;Pt<M.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const dt=R.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<M.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const at=n.get(M[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,V,J,0,0,V,J,tt,s.NEAREST),c===!0&&(Le.length=0,te.length=0,Le.push(s.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Le.push(K),te.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let Pt=0;Pt<M.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const at=n.get(M[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,at,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Lt(R){return Math.min(i.maxSamples,R.samples)}function ce(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Kt(R,M){const V=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==cs&&V!==ni&&(ge.getTransfer(V)===be?(J!==wn||tt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=nt,this.setTexture2DArray=j,this.setTexture3D=ct,this.setTextureCube=Y,this.rebindTextures=pe,this.setupRenderTarget=re,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ce}function W0(s,t){function e(n,i=ni){let r;const o=ge.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===pa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return s.BYTE;if(n===Ol)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===fa)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Ns)return s.HALF_FLOAT;if(n===zl)return s.ALPHA;if(n===Bl)return s.RGB;if(n===wn)return s.RGBA;if(n===Ds)return s.DEPTH_COMPONENT;if(n===Ls)return s.DEPTH_STENCIL;if(n===ga)return s.RED;if(n===_a)return s.RED_INTEGER;if(n===kl)return s.RG;if(n===xa)return s.RG_INTEGER;if(n===va)return s.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===vr)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Uo||n===No||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===zo||n===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===zo)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===qo||n===Xo||n===Yo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===ta||n===ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===na||n===ia||n===sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
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

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:q0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends hs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,p=null,f=null,_=null;const v=new Y0,m=e.getContextAttributes();let u=null,w=null;const E=[],S=[],U=new jt;let C=null;const g=new pn;g.viewport=new Pe;const D=new pn;D.viewport=new Pe;const b=[g,D],x=new fd;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let mt=E[et];return mt===void 0&&(mt=new to,E[et]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(et){let mt=E[et];return mt===void 0&&(mt=new to,E[et]=mt),mt.getGripSpace()},this.getHand=function(et){let mt=E[et];return mt===void 0&&(mt=new to,E[et]=mt),mt.getHandSpace()};function G(et){const mt=S.indexOf(et.inputSource);if(mt===-1)return;const Nt=E[mt];Nt!==void 0&&(Nt.update(et.inputSource,et.frame,l||o),Nt.dispatchEvent({type:et.type,data:et.inputSource}))}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",nt);for(let et=0;et<E.length;et++){const mt=S[et];mt!==null&&(S[et]=null,E[et].disconnect(mt))}L=null,H=null,v.reset(),t.setRenderTarget(u),f=null,p=null,h=null,i=null,w=null,ve.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,St=null,Ft=null;m.depth&&(Ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=m.stencil?Ls:Ds,St=m.stencil?Ps:wi);const le={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};h=new XRWebGLBinding(i,e),p=h.createProjectionLayer(le),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new Ei(p.textureWidth,p.textureHeight,{format:wn,type:Rn,depthTexture:new ih(p.textureWidth,p.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ei(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(et){for(let mt=0;mt<et.removed.length;mt++){const Nt=et.removed[mt],St=S.indexOf(Nt);St>=0&&(S[St]=null,E[St].disconnect(Nt))}for(let mt=0;mt<et.added.length;mt++){const Nt=et.added[mt];let St=S.indexOf(Nt);if(St===-1){for(let le=0;le<E.length;le++)if(le>=S.length){S.push(Nt),St=le;break}else if(S[le]===null){S[le]=Nt,St=le;break}if(St===-1)break}const Ft=E[St];Ft&&Ft.connect(Nt)}}const j=new P,ct=new P;function Y(et,mt,Nt){j.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(Nt.matrixWorld);const St=j.distanceTo(ct),Ft=mt.projectionMatrix.elements,le=Nt.projectionMatrix.elements,Ht=Ft[14]/(Ft[10]-1),Ee=Ft[14]/(Ft[10]+1),pe=(Ft[9]+1)/Ft[5],re=(Ft[9]-1)/Ft[5],I=(Ft[8]-1)/Ft[0],Le=(le[8]+1)/le[0],te=Ht*I,Me=Ht*Le,Lt=St/(-I+Le),ce=Lt*-I;if(mt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ce),et.translateZ(Lt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const zt=Ht+Lt,Kt=Ee+Lt,Re=te-ce,R=Me+(St-ce),M=pe*Ee/Kt*zt,V=re*Ee/Kt*zt;et.projectionMatrix.makePerspective(Re,R,M,V,zt,Kt),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function _t(et,mt){mt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(mt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let mt=et.near,Nt=et.far;v.texture!==null&&(v.depthNear>0&&(mt=v.depthNear),v.depthFar>0&&(Nt=v.depthFar)),x.near=D.near=g.near=mt,x.far=D.far=g.far=Nt,(L!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,H=x.far),g.layers.mask=et.layers.mask|2,D.layers.mask=et.layers.mask|4,x.layers.mask=g.layers.mask|D.layers.mask;const St=et.parent,Ft=x.cameras;_t(x,St);for(let le=0;le<Ft.length;le++)_t(Ft[le],St);Ft.length===2?Y(x,g,D):x.projectionMatrix.copy(g.projectionMatrix),Et(et,x,St)};function Et(et,mt,Nt){Nt===null?et.matrix.copy(mt.matrixWorld):(et.matrix.copy(Nt.matrixWorld),et.matrix.invert(),et.matrix.multiply(mt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Is*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(et){c=et,p!==null&&(p.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let rt=null;function Tt(et,mt){if(d=mt.getViewerPose(l||o),_=mt,d!==null){const Nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let St=!1;Nt.length!==x.cameras.length&&(x.cameras.length=0,St=!0);for(let Ht=0;Ht<Nt.length;Ht++){const Ee=Nt[Ht];let pe=null;if(f!==null)pe=f.getViewport(Ee);else{const I=h.getViewSubImage(p,Ee);pe=I.viewport,Ht===0&&(t.setRenderTargetTextures(w,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(w))}let re=b[Ht];re===void 0&&(re=new pn,re.layers.enable(Ht),re.viewport=new Pe,b[Ht]=re),re.matrix.fromArray(Ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(pe.x,pe.y,pe.width,pe.height),Ht===0&&(x.matrix.copy(re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),St===!0&&x.cameras.push(re)}const Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ht=h.getDepthInformation(Nt[0]);Ht&&Ht.isValid&&Ht.texture&&v.init(t,Ht,i.renderState)}}for(let Nt=0;Nt<E.length;Nt++){const St=S[Nt],Ft=E[Nt];St!==null&&Ft!==void 0&&Ft.update(St,mt,l||o)}rt&&rt(et,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),_=null}const ve=new rh;ve.setAnimationLoop(Tt),this.setAnimationLoop=function(et){rt=et},this.dispose=function(){}}}const pi=new qn,K0=new Ae;function j0(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Zl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,w,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,w,E):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===je&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===je&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,pi.copy(S),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(pi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===je&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Z0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const S=E.program;n.uniformBlockBinding(w,S)}function l(w,E){let S=i[w.id];S===void 0&&(_(w),S=d(w),i[w.id]=S,w.addEventListener("dispose",m));const U=E.program;n.updateUBOMapping(w,U);const C=t.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function d(w){const E=h();w.__bindingPointIndex=E;const S=s.createBuffer(),U=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,U,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const E=i[w.id],S=w.uniforms,U=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let C=0,g=S.length;C<g;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,x=D.length;b<x;b++){const L=D[b];if(f(L,C,b,U)===!0){const H=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let nt=0;nt<G.length;nt++){const j=G[nt],ct=v(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,H+Z,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,Z),Z+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,E,S,U){const C=w.value,g=E+"_"+S;if(U[g]===void 0)return typeof C=="number"||typeof C=="boolean"?U[g]=C:U[g]=C.clone(),!0;{const D=U[g];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[g]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(w){const E=w.uniforms;let S=0;const U=16;for(let g=0,D=E.length;g<D;g++){const b=Array.isArray(E[g])?E[g]:[E[g]];for(let x=0,L=b.length;x<L;x++){const H=b[x],G=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,nt=G.length;Z<nt;Z++){const j=G[Z],ct=v(j),Y=S%U,_t=Y%ct.boundary,Et=Y+_t;S+=_t,Et!==0&&U-Et<ct.storage&&(S+=U-Et),H.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ct.storage}}}const C=S%U;return C>0&&(S+=U-C),w.__size=S,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function u(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:u}}class J0{constructor(t={}){const{canvas:e=wu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let U=!1;this._outputColorSpace=fn;let C=0,g=0,D=null,b=-1,x=null;const L=new Pe,H=new Pe;let G=null;const Z=new It(0);let nt=0,j=e.width,ct=e.height,Y=1,_t=null,Et=null;const rt=new Pe(0,0,j,ct),Tt=new Pe(0,0,j,ct);let ve=!1;const et=new ba;let mt=!1,Nt=!1;const St=new Ae,Ft=new Ae,le=new P,Ht=new Pe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function re(){return D===null?Y:1}let I=n;function Le(y,B){return e.getContext(y,B)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",Q,!1),I===null){const B="webgl2";if(I=Le(B,y),I===null)throw Le(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,Me,Lt,ce,zt,Kt,Re,R,M,V,J,tt,K,Ut,z,dt,Pt,at,$,kt,Bt,gt,qt,N;function xt(){te=new cm(I),te.init(),gt=new W0(I,te),Me=new em(I,te,t,gt),Lt=new H0(I,te),Me.reverseDepthBuffer&&p&&Lt.buffers.depth.setReversed(!0),ce=new um(I),zt=new C0,Kt=new V0(I,te,Lt,zt,Me,gt,ce),Re=new im(S),R=new am(S),M=new gd(I),qt=new Qp(I,M),V=new lm(I,M,ce,qt),J=new fm(I,V,M,ce),$=new dm(I,Me,Kt),dt=new nm(zt),tt=new R0(S,Re,R,te,Me,qt,dt),K=new j0(S,zt),Ut=new D0,z=new F0(te),at=new Jp(S,Re,R,Lt,J,f,c),Pt=new k0(S,J,Me),N=new Z0(I,ce,Me,Lt),kt=new tm(I,te,ce),Bt=new hm(I,te,ce),ce.programs=tt.programs,S.capabilities=Me,S.extensions=te,S.properties=zt,S.renderLists=Ut,S.shadowMap=Pt,S.state=Lt,S.info=ce}xt();const ot=new $0(S,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(j,ct,!1))},this.getSize=function(y){return y.set(j,ct)},this.setSize=function(y,B,W=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,ct=B,e.width=Math.floor(y*Y),e.height=Math.floor(B*Y),W===!0&&(e.style.width=y+"px",e.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(j*Y,ct*Y).floor()},this.setDrawingBufferSize=function(y,B,W){j=y,ct=B,Y=W,e.width=Math.floor(y*W),e.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(rt)},this.setViewport=function(y,B,W,q){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,B,W,q),Lt.viewport(L.copy(rt).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(Tt)},this.setScissor=function(y,B,W,q){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,B,W,q),Lt.scissor(H.copy(Tt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(y){Lt.setScissorTest(ve=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){Et=y},this.getClearColor=function(y){return y.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,W=!0){let q=0;if(y){let k=!1;if(D!==null){const ut=D.texture.format;k=ut===va||ut===xa||ut===_a}if(k){const ut=D.texture.type,Mt=ut===Rn||ut===wi||ut===Cs||ut===Ps||ut===pa||ut===ma,Ct=at.getClearColor(),wt=at.getClearAlpha(),Gt=Ct.r,Vt=Ct.g,Ot=Ct.b;Mt?(_[0]=Gt,_[1]=Vt,_[2]=Ot,_[3]=wt,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=Gt,v[1]=Vt,v[2]=Ot,v[3]=wt,I.clearBufferiv(I.COLOR,0,v))}else q|=I.COLOR_BUFFER_BIT}B&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),at.dispose(),Ut.dispose(),z.dispose(),zt.dispose(),Re.dispose(),R.dispose(),J.dispose(),qt.dispose(),N.dispose(),tt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",cn),ot.removeEventListener("sessionend",ps),Cn.stop()};function At(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=ce.autoReset,B=Pt.enabled,W=Pt.autoUpdate,q=Pt.needsUpdate,k=Pt.type;xt(),ce.autoReset=y,Pt.enabled=B,Pt.autoUpdate=W,Pt.needsUpdate=q,Pt.type=k}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Rt(y){const B=y.target;B.removeEventListener("dispose",Rt),Xt(B)}function Xt(y){it(y),zt.remove(y)}function it(y){const B=zt.get(y).programs;B!==void 0&&(B.forEach(function(W){tt.releaseProgram(W)}),y.isShaderMaterial&&tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,q,k,ut){B===null&&(B=Ee);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=ks(y,B,W,q,k);Lt.setMaterial(q,Mt);let wt=W.index,Gt=1;if(q.wireframe===!0){if(wt=V.getWireframeAttribute(W),wt===void 0)return;Gt=2}const Vt=W.drawRange,Ot=W.attributes.position;let T=Vt.start*Gt,O=(Vt.start+Vt.count)*Gt;ut!==null&&(T=Math.max(T,ut.start*Gt),O=Math.min(O,(ut.start+ut.count)*Gt)),wt!==null?(T=Math.max(T,0),O=Math.min(O,wt.count)):Ot!=null&&(T=Math.max(T,0),O=Math.min(O,Ot.count));const F=O-T;if(F<0||F===1/0)return;qt.setup(k,q,Ct,W,wt);let st,pt=kt;if(wt!==null&&(st=M.get(wt),pt=Bt,pt.setIndex(st)),k.isMesh)q.wireframe===!0?(Lt.setLineWidth(q.wireframeLinewidth*re()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(k.isLine){let ft=q.linewidth;ft===void 0&&(ft=1),Lt.setLineWidth(ft*re()),k.isLineSegments?pt.setMode(I.LINES):k.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else k.isPoints?pt.setMode(I.POINTS):k.isSprite&&pt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ft=k._multiDrawStarts,ie=k._multiDrawCounts,ee=k._multiDrawCount,ze=wt?M.get(wt).bytesPerElement:1,Dn=zt.get(q).currentProgram.getUniforms();for(let He=0;He<ee;He++)Dn.setValue(I,"_gl_DrawID",He),pt.render(ft[He]/ze,ie[He])}else if(k.isInstancedMesh)pt.renderInstances(T,F,k.count);else if(W.isInstancedBufferGeometry){const ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ie=Math.min(W.instanceCount,ft);pt.renderInstances(T,F,ie)}else pt.render(T,F)};function oe(y,B,W){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=je,y.needsUpdate=!0,Di(y,B,W),y.side=ri,y.needsUpdate=!0,Di(y,B,W),y.side=tn):Di(y,B,W)}this.compile=function(y,B,W=null){W===null&&(W=y),u=z.get(W),u.init(B),E.push(u),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const q=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){const Ct=ut[Mt];oe(Ct,W,k),q.add(Ct)}else oe(ut,W,k),q.add(ut)}),u=E.pop(),q},this.compileAsync=function(y,B,W=null){const q=this.compile(y,B,W);return new Promise(k=>{function ut(){if(q.forEach(function(Mt){zt.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){k(y);return}setTimeout(ut,10)}te.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Je=null;function en(y){Je&&Je(y)}function cn(){Cn.stop()}function ps(){Cn.start()}const Cn=new rh;Cn.setAnimationLoop(en),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(y){Je=y,ot.setAnimationLoop(y),y===null?Cn.stop():Cn.start()},ot.addEventListener("sessionstart",cn),ot.addEventListener("sessionend",ps),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,B,D),u=z.get(y,E.length),u.init(B),E.push(u),Ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(Ft),Nt=this.localClippingEnabled,mt=dt.init(this.clippingPlanes,Nt),m=Ut.get(y,w.length),m.init(),w.push(m),ot.enabled===!0&&ot.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&ln(ut,B,-1/0,S.sortObjects)}ln(y,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(_t,Et),pe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,pe&&at.addToRenderList(m,y),this.info.render.frame++,mt===!0&&dt.beginShadows();const W=u.state.shadowsArray;Pt.render(W,y,B),mt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(u.setupLights(),B.isArrayCamera){const ut=B.cameras;if(k.length>0)for(let Mt=0,Ct=ut.length;Mt<Ct;Mt++){const wt=ut[Mt];Bs(q,k,y,wt)}pe&&at.render(y);for(let Mt=0,Ct=ut.length;Mt<Ct;Mt++){const wt=ut[Mt];zs(m,y,wt,wt.viewport)}}else k.length>0&&Bs(q,k,y,B),pe&&at.render(y),zs(m,y,B);D!==null&&g===0&&(Kt.updateMultisampleRenderTarget(D),Kt.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(S,y,B),qt.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?(u=E[E.length-1],mt===!0&&dt.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ln(y,B,W,q){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||et.intersectsSprite(y)){q&&Ht.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ft);const Mt=J.update(y),Ct=y.material;Ct.visible&&m.push(y,Mt,Ct,W,Ht.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||et.intersectsObject(y))){const Mt=J.update(y),Ct=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ht.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ht.copy(Mt.boundingSphere.center)),Ht.applyMatrix4(y.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ct)){const wt=Mt.groups;for(let Gt=0,Vt=wt.length;Gt<Vt;Gt++){const Ot=wt[Gt],T=Ct[Ot.materialIndex];T&&T.visible&&m.push(y,Mt,T,W,Ht.z,Ot)}}else Ct.visible&&m.push(y,Mt,Ct,W,Ht.z,null)}}const ut=y.children;for(let Mt=0,Ct=ut.length;Mt<Ct;Mt++)ln(ut[Mt],B,W,q)}function zs(y,B,W,q){const k=y.opaque,ut=y.transmissive,Mt=y.transparent;u.setupLightsView(W),mt===!0&&dt.setGlobalState(S.clippingPlanes,W),q&&Lt.viewport(L.copy(q)),k.length>0&&En(k,B,W),ut.length>0&&En(ut,B,W),Mt.length>0&&En(Mt,B,W),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Bs(y,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Ei(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ns:Rn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const ut=u.state.transmissionRenderTarget[q.id],Mt=q.viewport||L;ut.setSize(Mt.z*S.transmissionResolutionScale,Mt.w*S.transmissionResolutionScale);const Ct=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(Z),nt=S.getClearAlpha(),nt<1&&S.setClearColor(16777215,.5),S.clear(),pe&&at.render(W);const wt=S.toneMapping;S.toneMapping=si;const Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),mt===!0&&dt.setGlobalState(S.clippingPlanes,q),En(y,W,q),Kt.updateMultisampleRenderTarget(ut),Kt.updateRenderTargetMipmap(ut),te.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ot=0,T=B.length;Ot<T;Ot++){const O=B[Ot],F=O.object,st=O.geometry,pt=O.material,ft=O.group;if(pt.side===tn&&F.layers.test(q.layers)){const ie=pt.side;pt.side=je,pt.needsUpdate=!0,Xn(F,W,q,st,pt,ft),pt.side=ie,pt.needsUpdate=!0,Vt=!0}}Vt===!0&&(Kt.updateMultisampleRenderTarget(ut),Kt.updateRenderTargetMipmap(ut))}S.setRenderTarget(Ct),S.setClearColor(Z,nt),Gt!==void 0&&(q.viewport=Gt),S.toneMapping=wt}function En(y,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ut=y.length;k<ut;k++){const Mt=y[k],Ct=Mt.object,wt=Mt.geometry,Gt=Mt.group;let Vt=Mt.material;Vt.allowOverride===!0&&q!==null&&(Vt=q),Ct.layers.test(W.layers)&&Xn(Ct,B,W,wt,Vt,Gt)}}function Xn(y,B,W,q,k,ut){y.onBeforeRender(S,B,W,q,k,ut),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(S,B,W,q,y,ut),k.transparent===!0&&k.side===tn&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,S.renderBufferDirect(W,B,q,k,y,ut),k.side=ri,k.needsUpdate=!0,S.renderBufferDirect(W,B,q,k,y,ut),k.side=tn):S.renderBufferDirect(W,B,q,k,y,ut),y.onAfterRender(S,B,W,q,k,ut)}function Di(y,B,W){B.isScene!==!0&&(B=Ee);const q=zt.get(y),k=u.state.lights,ut=u.state.shadowsArray,Mt=k.state.version,Ct=tt.getParameters(y,k.state,ut,B,W),wt=tt.getProgramCacheKey(Ct);let Gt=q.programs;q.environment=y.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(y.isMeshStandardMaterial?R:Re).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",Rt),Gt=new Map,q.programs=Gt);let Vt=Gt.get(wt);if(Vt!==void 0){if(q.currentProgram===Vt&&q.lightsStateVersion===Mt)return Yt(y,Ct),Vt}else Ct.uniforms=tt.getUniforms(y),y.onBeforeCompile(Ct,S),Vt=tt.acquireProgram(Ct,wt),Gt.set(wt,Vt),q.uniforms=Ct.uniforms;const Ot=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),Yt(y,Ct),q.needsLights=Pn(y),q.lightsStateVersion=Mt,q.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Vt,q.uniformsList=null,Vt}function Zt(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=yr.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Yt(y,B){const W=zt.get(y);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function ks(y,B,W,q,k){B.isScene!==!0&&(B=Ee),Kt.resetTextureUnits();const ut=B.fog,Mt=q.isMeshStandardMaterial?B.environment:null,Ct=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:cs,wt=(q.isMeshStandardMaterial?R:Re).get(q.envMap||Mt),Gt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!W.morphAttributes.position,T=!!W.morphAttributes.normal,O=!!W.morphAttributes.color;let F=si;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(F=S.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=st!==void 0?st.length:0,ft=zt.get(q),ie=u.state.lights;if(mt===!0&&(Nt===!0||y!==x)){const _e=y===x&&q.id===b;dt.setState(q,y,_e)}let ee=!1;q.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==ie.state.version||ft.outputColorSpace!==Ct||k.isBatchedMesh&&ft.batching===!1||!k.isBatchedMesh&&ft.batching===!0||k.isBatchedMesh&&ft.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ft.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ft.instancing===!1||!k.isInstancedMesh&&ft.instancing===!0||k.isSkinnedMesh&&ft.skinning===!1||!k.isSkinnedMesh&&ft.skinning===!0||k.isInstancedMesh&&ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ft.instancingMorph===!1&&k.morphTexture!==null||ft.envMap!==wt||q.fog===!0&&ft.fog!==ut||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==dt.numPlanes||ft.numIntersection!==dt.numIntersection)||ft.vertexAlphas!==Gt||ft.vertexTangents!==Vt||ft.morphTargets!==Ot||ft.morphNormals!==T||ft.morphColors!==O||ft.toneMapping!==F||ft.morphTargetsCount!==pt)&&(ee=!0):(ee=!0,ft.__version=q.version);let ze=ft.currentProgram;ee===!0&&(ze=Di(q,B,k));let Dn=!1,He=!1,Ln=!1;const ye=ze.getUniforms(),Be=ft.uniforms;if(Lt.useProgram(ze.program)&&(Dn=!0,He=!0,Ln=!0),q.id!==b&&(b=q.id,He=!0),Dn||x!==y){Lt.buffers.depth.getReversed()?(St.copy(y.projectionMatrix),Tu(St),Au(St),ye.setValue(I,"projectionMatrix",St)):ye.setValue(I,"projectionMatrix",y.projectionMatrix),ye.setValue(I,"viewMatrix",y.matrixWorldInverse);const Ve=ye.map.cameraPosition;Ve!==void 0&&Ve.setValue(I,le.setFromMatrixPosition(y.matrixWorld)),Me.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,He=!0,Ln=!0)}if(k.isSkinnedMesh){ye.setOptional(I,k,"bindMatrix"),ye.setOptional(I,k,"bindMatrixInverse");const _e=k.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ye.setValue(I,"boneTexture",_e.boneTexture,Kt))}k.isBatchedMesh&&(ye.setOptional(I,k,"batchingTexture"),ye.setValue(I,"batchingTexture",k._matricesTexture,Kt),ye.setOptional(I,k,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",k._indirectTexture,Kt),ye.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",k._colorsTexture,Kt));const Qe=W.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&$.update(k,W,ze),(He||ft.receiveShadow!==k.receiveShadow)&&(ft.receiveShadow=k.receiveShadow,ye.setValue(I,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Be.envMap.value=wt,Be.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Be.envMapIntensity.value=B.environmentIntensity),He&&(ye.setValue(I,"toneMappingExposure",S.toneMappingExposure),ft.needsLights&&ms(Be,Ln),ut&&q.fog===!0&&K.refreshFogUniforms(Be,ut),K.refreshMaterialUniforms(Be,q,Y,ct,u.state.transmissionRenderTarget[y.id]),yr.upload(I,Zt(ft),Be,Kt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(yr.upload(I,Zt(ft),Be,Kt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(I,"center",k.center),ye.setValue(I,"modelViewMatrix",k.modelViewMatrix),ye.setValue(I,"normalMatrix",k.normalMatrix),ye.setValue(I,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const _e=q.uniformsGroups;for(let Ve=0,X=_e.length;Ve<X;Ve++){const $t=_e[Ve];N.update($t,ze),N.bind($t,ze)}}return ze}function ms(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Pn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,B,W){const q=zt.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),zt.get(y.texture).__webglTexture=B,zt.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const W=zt.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Li=I.createFramebuffer();this.setRenderTarget=function(y,B=0,W=0){D=y,C=B,g=W;let q=!0,k=null,ut=!1,Mt=!1;if(y){const wt=zt.get(y);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)Kt.setupRenderTarget(y);else if(wt.__hasExternalTextures)Kt.rebindTextures(y,zt.get(y.texture).__webglTexture,zt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ot=y.depthTexture;if(wt.__boundDepthTexture!==Ot){if(Ot!==null&&zt.has(Ot)&&(y.width!==Ot.image.width||y.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(y)}}const Gt=y.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const Vt=zt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][W]:k=Vt[B],ut=!0):y.samples>0&&Kt.useMultisampledRTT(y)===!1?k=zt.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[W]:k=Vt,L.copy(y.viewport),H.copy(y.scissor),G=y.scissorTest}else L.copy(rt).multiplyScalar(Y).floor(),H.copy(Tt).multiplyScalar(Y).floor(),G=ve;if(W!==0&&(k=Li),Lt.bindFramebuffer(I.FRAMEBUFFER,k)&&q&&Lt.drawBuffers(y,k),Lt.viewport(L),Lt.scissor(H),Lt.setScissorTest(G),ut){const wt=zt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,W)}else if(Mt){const wt=zt.get(y.texture),Gt=B;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,W,Gt)}else if(y!==null&&W!==0){const wt=zt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(y,B,W,q,k,ut,Mt,Ct=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const Gt=y.textures[Ct],Vt=Gt.format,Ot=Gt.type;if(!Me.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-q&&W>=0&&W<=y.height-k&&(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(B,W,q,k,gt.convert(Vt),gt.convert(Ot),ut))}finally{const Gt=D!==null?zt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,B,W,q,k,ut,Mt,Ct=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt)if(B>=0&&B<=y.width-q&&W>=0&&W<=y.height-k){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);const Gt=y.textures[Ct],Vt=Gt.format,Ot=Gt.type;if(!Me.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const T=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,T),I.bufferData(I.PIXEL_PACK_BUFFER,ut.byteLength,I.STREAM_READ),y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(B,W,q,k,gt.convert(Vt),gt.convert(Ot),0);const O=D!==null?zt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,O);const F=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Eu(I,F,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,T),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ut),I.deleteBuffer(T),I.deleteSync(F),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,W=0){const q=Math.pow(2,-W),k=Math.floor(y.image.width*q),ut=Math.floor(y.image.height*q),Mt=B!==null?B.x:0,Ct=B!==null?B.y:0;Kt.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Mt,Ct,k,ut),Lt.unbindTexture()};const ci=I.createFramebuffer(),Ii=I.createFramebuffer();this.copyTextureToTexture=function(y,B,W=null,q=null,k=0,ut=null){ut===null&&(k!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=k,k=0):ut=0);let Mt,Ct,wt,Gt,Vt,Ot,T,O,F;const st=y.isCompressedTexture?y.mipmaps[ut]:y.image;if(W!==null)Mt=W.max.x-W.min.x,Ct=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Gt=W.min.x,Vt=W.min.y,Ot=W.isBox3?W.min.z:0;else{const Qe=Math.pow(2,-k);Mt=Math.floor(st.width*Qe),Ct=Math.floor(st.height*Qe),y.isDataArrayTexture?wt=st.depth:y.isData3DTexture?wt=Math.floor(st.depth*Qe):wt=1,Gt=0,Vt=0,Ot=0}q!==null?(T=q.x,O=q.y,F=q.z):(T=0,O=0,F=0);const pt=gt.convert(B.format),ft=gt.convert(B.type);let ie;B.isData3DTexture?(Kt.setTexture3D(B,0),ie=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Kt.setTexture2DArray(B,0),ie=I.TEXTURE_2D_ARRAY):(Kt.setTexture2D(B,0),ie=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ee=I.getParameter(I.UNPACK_ROW_LENGTH),ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dn=I.getParameter(I.UNPACK_SKIP_PIXELS),He=I.getParameter(I.UNPACK_SKIP_ROWS),Ln=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const ye=y.isDataArrayTexture||y.isData3DTexture,Be=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const Qe=zt.get(y),_e=zt.get(B),Ve=zt.get(Qe.__renderTarget),X=zt.get(_e.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let $t=0;$t<wt;$t++)ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(y).__webglTexture,k,Ot+$t),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(B).__webglTexture,ut,F+$t)),I.blitFramebuffer(Gt,Vt,Mt,Ct,T,O,Mt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||zt.has(y)){const Qe=zt.get(y),_e=zt.get(B);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,ci),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ii);for(let Ve=0;Ve<wt;Ve++)ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,k,Ot+Ve):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,k),Be?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,ut,F+Ve):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,ut),k!==0?I.blitFramebuffer(Gt,Vt,Mt,Ct,T,O,Mt,Ct,I.COLOR_BUFFER_BIT,I.NEAREST):Be?I.copyTexSubImage3D(ie,ut,T,O,F+Ve,Gt,Vt,Mt,Ct):I.copyTexSubImage2D(ie,ut,T,O,Gt,Vt,Mt,Ct);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Be?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(ie,ut,T,O,F,Mt,Ct,wt,pt,ft,st.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ie,ut,T,O,F,Mt,Ct,wt,pt,st.data):I.texSubImage3D(ie,ut,T,O,F,Mt,Ct,wt,pt,ft,st):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ut,T,O,Mt,Ct,pt,ft,st.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ut,T,O,st.width,st.height,pt,st.data):I.texSubImage2D(I.TEXTURE_2D,ut,T,O,Mt,Ct,pt,ft,st);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ln),ut===0&&B.generateMipmaps&&I.generateMipmap(ie),Lt.unbindTexture()},this.copyTextureToTexture3D=function(y,B,W=null,q=null,k=0){return ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,W,q,k)},this.initRenderTarget=function(y){zt.get(y).__webglFramebuffer===void 0&&Kt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Kt.setTextureCube(y,0):y.isData3DTexture?Kt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Kt.setTexture2DArray(y,0):Kt.setTexture2D(y,0),Lt.unbindTexture()},this.resetState=function(){C=0,g=0,D=null,Lt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class Q0{constructor(t){A(this,"keys",new Set);A(this,"justPressed",new Set);A(this,"leftReleased",!1);A(this,"leftDown",!1);A(this,"rightDown",!1);A(this,"dx",0);A(this,"dy",0);A(this,"wheel",0);A(this,"suspended",!1);window.addEventListener("keydown",e=>{this.suspended||(e.code==="Tab"&&e.preventDefault(),this.keys.has(e.code)||this.justPressed.add(e.code),this.keys.add(e.code))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{e.button===0&&(this.leftDown=!0),e.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),e.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",e=>{this.dx+=e.movementX,this.dy+=e.movementY}),t.addEventListener("wheel",e=>{this.wheel+=e.deltaY})}isDown(t){return this.keys.has(t)}wasPressed(t){return this.justPressed.has(t)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}clearKeys(){this.keys.clear(),this.justPressed.clear()}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const de={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},tg={day:{barSeconds:3.2,chords:[[de.C4,de.E4,de.G4],[220,de.C4,de.E4],[174.61,220,de.C4],[196,246.94,de.D4]],style:"melody",melody:[[[de.E5,0,.5],[de.G5,.25,.5],[de.A5,.5,.5],[de.G5,.75,.45]],[[de.E5,0,.6],[de.C5,.5,.85]],[[de.D5,0,.5],[de.E5,.25,.5],[de.F5,.5,.5],[de.D5,.75,.45]],[[de.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,de.C4],[de.C4,de.E4,de.G4],[196,246.94,de.D4],[220,de.C4,de.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,de.C4,de.E4],[174.61,220,de.C4],[130.81,164.81,196],[196,246.94,de.D4]],style:"melody",melody:[[[de.A4,0,1.4]],[[de.C5,0,1],[de.B4,.5,1.2]],[[de.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class eg{constructor(){A(this,"ctx",null);A(this,"sfxBus",null);A(this,"musicBus",null);A(this,"noiseBuffer",null);A(this,"chordIndex",0);A(this,"musicTimer",null);A(this,"volume",1);A(this,"musicEnabled",!0);A(this,"rainGain",null);A(this,"musicMode","day")}unlock(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.sfxBus=t.createGain(),this.sfxBus.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.connect(t.destination),this.applyVolume();const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;this.noiseBuffer=e,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(t){this.musicMode=t}setRain(t){if(!this.ctx||!this.rainGain)return;const e=t?.09:1e-4;this.rainGain.gain.setTargetAtTime(e,this.ctx.currentTime,1.2)}setVolume(t){this.volume=t,this.applyVolume()}setMusicEnabled(t){this.musicEnabled=t,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(t){if(this.ctx)switch(t){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((e,n)=>this.tone("sine",e,e,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.25,.2,.18+n*.1));break}}tone(t,e,n,i,r,o=0){if(!this.ctx||!this.sfxBus)return;const a=this.ctx.currentTime+o,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=t,c.frequency.setValueAtTime(e,a),n!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+i),l.gain.setValueAtTime(r,a),l.gain.exponentialRampToValueAtTime(.001,a+i),c.connect(l).connect(this.sfxBus),c.start(a),c.stop(a+i+.05)}noiseBurst(t,e,n,i,r){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type=t,c.frequency.setValueAtTime(e,o),c.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+i);const l=this.ctx.createGain();l.gain.setValueAtTime(r,o),l.gain.exponentialRampToValueAtTime(.001,o+i),a.connect(c).connect(l).connect(this.sfxBus),a.start(o),a.stop(o+i+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const i=this.ctx.createOscillator();i.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=.05,i.connect(r).connect(n.gain),t.connect(e).connect(n).connect(this.musicBus),t.start(),i.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=1400,e.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.value=1;const r=this.ctx.createOscillator();r.frequency.value=.13;const o=this.ctx.createGain();o.gain.value=.18,r.connect(o).connect(i.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,t.connect(e).connect(n).connect(i).connect(this.rainGain).connect(this.musicBus),t.start(),r.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const t=tg[this.musicMode],e=t.barSeconds,n=this.ctx.currentTime+.05,i=this.chordIndex%t.chords.length,r=t.chords[i];this.chordIndex++;for(const c of r){const l=this.ctx.createOscillator(),d=this.ctx.createGain();l.type=t.padType,l.frequency.value=c,d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(t.padVol,n+.7),d.gain.setValueAtTime(t.padVol,n+e-1),d.gain.exponentialRampToValueAtTime(1e-4,n+e+.5),l.connect(d).connect(this.musicBus),l.start(n),l.stop(n+e+.6)}const o=this.ctx.createOscillator(),a=this.ctx.createGain();if(o.type="sine",o.frequency.value=r[0]/2,a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.3),a.gain.exponentialRampToValueAtTime(1e-4,n+e),o.connect(a).connect(this.musicBus),o.start(n),o.stop(n+e+.1),t.style==="melody"){const c=t.melody[i%t.melody.length]??[];for(const[l,d,h]of c)this.melodyNote(l,n+d*e,h)}else{const c=[0,1,2,1,0,1,2,1];for(let l=0;l<c.length;l++)this.melodyNote(r[c[l]]*2,n+l/8*e,e/8-.05)}for(const c of t.hats)this.hatTick(n+c*e);this.musicTimer=setTimeout(()=>this.scheduleBar(),e*1e3)}melodyNote(t,e,n){if(!this.ctx||!this.musicBus)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(r).connect(this.musicBus),i.start(e),i.stop(e+n+.05)}hatTick(t){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.05,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n).connect(i).connect(this.musicBus),e.start(t),e.stop(t+.08)}}const ng=22,ig=80;class sg{constructor(t){A(this,"hitstopT",0);A(this,"shakeT",0);A(this,"shakeDuration",1);A(this,"shakeIntensity",0);A(this,"particles",[]);this.scene=t}get frozen(){return this.hitstopT>0}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t,e){this.shakeIntensity=Math.max(this.shakeIntensity,t),this.shakeT=Math.max(this.shakeT,e),this.shakeDuration=Math.max(e,.01)}burst(t,e,n=10,i=7){for(let r=0;r<n&&!(this.particles.length>=ig);r++){const o=.07+Math.random()*.1,a=new lt(new Ra(o),new an({color:e}));a.position.copy(t);const c=new P(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),l=.35+Math.random()*.3;this.particles.push({mesh:a,velocity:c.multiplyScalar(i*(.5+Math.random()*.7)),life:l,maxLife:l}),this.scene.add(a)}}update(t){if(this.hitstopT=Math.max(0,this.hitstopT-t),this.particles=this.particles.filter(e=>{if(e.life-=t,e.life<=0)return this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),!1;e.velocity.y-=ng*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=t*8,e.mesh.rotation.y+=t*6;const n=e.life/e.maxLife;return e.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=t;const e=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*e;return this.shakeT<=0&&(this.shakeIntensity=0),new P((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new P}}let Ji=null;function rg(){if(!Ji){const s=new Uint8Array([90,150,210,255]);Ji=new td(s,s.length,1,ga),Ji.minFilter=Ze,Ji.magFilter=Ze,Ji.needsUpdate=!0}return Ji}function yt(s,t={}){const e=new rd({color:s,gradientMap:rg(),transparent:t.transparent??!1,opacity:t.opacity??1,vertexColors:t.vertexColors??!1});return t.emissive!==void 0&&(e.emissive.setHex(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1),e}const og=new an({color:1844019,side:je});function Pi(s,t=1.06){var n;const e=[];s.traverse(i=>{i instanceof lt&&!(i instanceof nh)&&e.push(i)});for(const i of e){const r=new lt(i.geometry,og);r.position.copy(i.position),r.rotation.copy(i.rotation),r.scale.copy(i.scale).multiplyScalar(t),r.raycast=()=>{},(n=i.parent)==null||n.add(r)}}const ag=.6,Gc=.25;function cg(){const s=new Ci(700,700,96,96);s.rotateX(-Math.PI/2);const t=yt(2789320,{transparent:!0,opacity:.92});return new lt(s,t)}function lg(s,t,e=1){const n=s.geometry.getAttribute("position"),i=ag*e;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getZ(r),c=Math.sin(o*Gc+t)*Math.cos(a*Gc+t*.8)*i;n.setY(r,c)}n.needsUpdate=!0,s.geometry.computeVertexNormals()}const hg=360,Hc=.65,ug=new It(8900331),dg=new It(660528),uo=260,Vc=42,fg={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class pg{constructor(t,e,n,i){A(this,"time",.12);A(this,"weather","clear");A(this,"weatherT",50);A(this,"lightningT",6);A(this,"flashT",0);A(this,"rain");A(this,"rainVelocity",[]);this.scene=t,this.sun=e,this.hemi=n,this.ambient=i;const r=new Float32Array(uo*6);for(let a=0;a<uo;a++){const c=(Math.random()-.5)*Vc,l=Math.random()*30,d=(Math.random()-.5)*Vc;r.set([c,l,d,c,l-.9,d],a*6),this.rainVelocity.push(30+Math.random()*14)}const o=new Ge;o.setAttribute("position",new on(r,3)),this.rain=new id(o,new wa({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,t.add(this.rain)}forceWeather(t){this.weather=t,this.weatherT=60}get rainVisible(){return this.rain.visible}update(t,e,n){if(this.time=(this.time+t/hg)%1,this.weatherT-=t,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const i=fg[this.weather],r=this.weather!=="clear",o=this.time/Hc,a=this.time<Hc?Math.sin(Math.PI*o):0,c=Math.PI*(1-o);this.sun.position.set(e.x+Math.cos(c)*120,Math.max(Math.sin(c),.12)*130+15,e.z+40),this.sun.target.position.set(e.x,0,e.z),this.sun.intensity=.15+2.45*a,this.hemi.intensity=.25+.45*a;let l=.12+.23*a,d=!1;if(this.weather==="storm"&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,d=!0)),this.flashT>0&&(this.flashT-=t,l+=1.6),this.ambient.intensity=l,!n){const h=dg.clone().lerp(ug,a).multiplyScalar(i.darken);this.flashT>0&&h.lerp(new It(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=r&&!n,this.rain.visible){this.rain.position.set(e.x,e.y,e.z);const h=this.rain.geometry.getAttribute("position"),p=this.weather==="storm"?1.6:1;for(let f=0;f<uo;f++){let _=h.getY(f*2)-this.rainVelocity[f]*p*t;_<-4&&(_=26+Math.random()*4),h.setY(f*2,_),h.setY(f*2+1,_-.9)}h.needsUpdate=!0}return{isNight:a<.08,weather:this.weather,raining:r,waveScale:i.wave,boatFactor:i.boat,thunder:d}}}const mg=14,gg=1.2,_g=5,hh=2e3,kn={x:hh,z:0},xg=1100;function Qi(s){return s>xg?2:1}const ss=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:hh,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],Wc={x:-60,z:-120},dn={x:-40,z:230,r:26},qc={x:60,z:-170},Xc={x:0,z:288},uh=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function vg(s,t){return uh.some(e=>Math.hypot(s-e.x,t-e.z)<e.r)}function fo(s){return s*s*(3-2*s)}function Mg(s,t,e){const n=t-s.x,i=e-s.z,r=Math.hypot(n,i);if(r>=s.r)return 0;const o=fo(Math.min((s.r-r)/mg,1));let a=0;for(const d of s.hills){const h=Math.hypot(n-d.x,i-d.z);h<d.r&&(a+=d.h*fo(1-h/d.r))}const c=Math.sin(t*.3)*Math.cos(e*.3)*.5;let l=0;if(s.crater){const d=Math.hypot(n-s.crater.x,i-s.crater.z);d<s.crater.r&&(l=s.crater.depth*fo(1-d/s.crater.r))}return o*(gg+a+c-l)}function fe(s,t){let e=0;for(const n of ss)e=Math.max(e,Mg(n,s,t));return e}function ca(s,t){return ss.some(e=>Math.hypot(s-e.x,t-e.z)<e.r+_g)}function dh(s,t){return fe(s,t)<.25}const Ai=[],yg=.45;function Sg(s,t,e=yg){let n=s,i=t;for(const r of Ai){const o=n-r.x,a=i-r.z,c=r.r+e,l=o*o+a*a;if(l>=c*c)continue;const d=Math.sqrt(l);if(d>1e-4){const h=(c-d)/d;n+=o*h,i+=a*h}else n+=c}return{x:n,z:i}}function bg(){Ai.length=0;const s=new we;for(const e of ss)s.add(Eg(e));for(const e of uh){const n=new lt(new Pr(e.r,24),new an({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(e.x,fe(e.x,e.z)+.08,e.z),s.add(n)}const t=yt(10134712);for(let e=0;e<10;e++){const n=e/10*Math.PI*2,i=6+e%3*7,r=2.5+e*7%5,o=new lt(new Te(.9,1.1,r,10),t);o.position.set(dn.x+Math.cos(n)*i,r/2-1,dn.z+Math.sin(n)*i),o.rotation.z=(e%5-2)*.08,o.castShadow=!0,s.add(o),Ai.push({x:o.position.x,z:o.position.z,r:1})}return s.add(wg()),s}function wg(){const s=new we,t=kn.x,e=[{x:t-12,z:-26,body:15260864,roof:12606010},{x:t+12,z:-28,body:14207144,roof:3828378},{x:t-20,z:-12,body:14733488,roof:10119738},{x:t+22,z:-14,body:15260864,roof:4885082},{x:t,z:-18,body:15787208,roof:11552840}];for(const o of e){const a=new we,c=new lt(new Ne(4.2,3,3.6),yt(o.body));c.position.y=1.5;const l=new lt(new gn(3.4,2,4),yt(o.roof));l.position.y=3.9,l.rotation.y=Math.PI/4;const d=new lt(new Ne(.9,1.5,.15),yt(6964002));d.position.set(0,.75,1.85),a.add(c,l,d),Pi(a),a.traverse(h=>{h instanceof lt&&(h.castShadow=!0)}),a.rotation.y=(o.x+o.z)%5*.18,a.position.set(o.x,fe(o.x,o.z),o.z),s.add(a),Ai.push({x:o.x,z:o.z,r:2.3})}const n=t+6,i=yt(10516552),r=yt(6964002);for(let o=0;o<8;o++){const a=-48-o*2.2,c=new lt(new Ne(3,.25,2),i);if(c.position.set(n,.85,a),c.castShadow=!0,s.add(c),o%2===0)for(const l of[-1.4,1.4]){const d=new lt(new Te(.14,.16,1.8,8),r);d.position.set(n+l,0,a),d.castShadow=!0,s.add(d),Ai.push({x:n+l,z:a,r:.35})}}return s}function Eg(s){const t=new we,e=s.r*2+14,n=150,i=new Ci(e,e,n,n);i.rotateX(-Math.PI/2);const r=i.getAttribute("position"),o=new Float32Array(r.count*3),a=new It(s.sand),c=new It(s.grass),l=new It(s.dark),d=new It;for(let f=0;f<r.count;f++){const _=r.getX(f)+s.x,v=r.getZ(f)+s.z,m=fe(_,v);r.setY(f,m),m<.8?d.copy(a):m<1.8?d.lerpColors(a,c,(m-.8)/1):d.lerpColors(c,l,Math.min((m-1.8)/9,1)),o[f*3]=d.r,o[f*3+1]=d.g,o[f*3+2]=d.b}i.setAttribute("color",new on(o,3)),i.computeVertexNormals();const h=new lt(i,yt(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(s.x,0,s.z),t.add(h);let p=0;for(let f=0;f<300&&p<s.treeCount;f++){const _=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*(s.r-6),m=s.x+Math.cos(_)*v,u=s.z+Math.sin(_)*v,w=fe(m,u);w>1.8&&w<11&&(t.add(Tg(m,w,u,s.treeColor)),p++)}for(let f=0;f<14;f++){const _=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*(s.r-4),m=s.x+Math.cos(_)*v,u=s.z+Math.sin(_)*v,w=.7+Math.random()*.9,E=new lt(new Ta(w),yt(9079434));E.position.set(m,fe(m,u)+.3,u),E.rotation.set(Math.random(),Math.random(),Math.random()),E.castShadow=!0,t.add(E),Ai.push({x:m,z:u,r:w*.75})}return t}function Tg(s,t,e,n){const i=new we,r=.8+Math.random()*.6,o=new lt(new Te(.3,.45,3),yt(8016432));o.position.y=1.5;const a=new lt(new Aa(1.8,1),yt(n));return a.position.y=3.9,a.scale.y=1.15,o.castShadow=!0,a.castShadow=!0,i.add(o,a),i.scale.setScalar(r),i.position.set(s,t-.1,e),Ai.push({x:s,z:e,r:.45*r}),i}const Yc=16,$c=10,Kc=1.6,jc=[4,-63];class Ag{constructor(){A(this,"mesh");A(this,"heading",Math.PI);A(this,"speed",0);A(this,"bobPhase",0);this.mesh=new we;const t=new lt(new Ea(1.1,2.6,4,10),yt(9067056));t.rotation.x=Math.PI/2,t.scale.set(1,1,.55),t.position.y=.3;const e=new lt(new Ne(1.7,.15,3.6),yt(11567184));e.position.y=.75;const n=new lt(new ai(1.55,.12,8,20),yt(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const i=new lt(new Te(.09,.11,3.6),yt(6964002));i.position.set(0,2.4,.3);const r=new lt(new Ci(1.9,2.4),yt(15788760));r.material.side=tn,r.position.set(0,2.6,.28);const o=new lt(new Te(.05,.05,2),yt(6964002));o.rotation.z=Math.PI/2,o.position.set(0,1.4,.28),this.mesh.add(t,e,n,i,r,o),Pi(this.mesh),this.mesh.traverse(a=>{a instanceof lt&&(a.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(jc[0],.3,jc[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(t,e){this.mesh.position.set(t,.3,e)}sail(t,e,n=1){let i=0;e.isDown("KeyW")?i=Yc*n:e.isDown("KeyS")&&(i=-5),this.speed+=Us.clamp(i-this.speed,-$c*t,$c*t);const r=.4+.6*Math.min(Math.abs(this.speed)/Yc,1);e.isDown("KeyA")&&(this.heading+=Kc*r*t),e.isDown("KeyD")&&(this.heading-=Kc*r*t);const o=new P(Math.sin(this.heading),0,Math.cos(this.heading)),a=this.mesh.position.clone().addScaledVector(o,this.speed*t);dh(a.x,a.z)?(this.mesh.position.x=a.x,this.mesh.position.z=a.z):this.speed=0,this.idle(t)}idle(t){this.bobPhase+=t*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let t=2.5;t<=7;t+=1.5)for(let e=0;e<8;e++){const n=e/8*Math.PI*2,i=this.mesh.position.x+Math.sin(n)*t,r=this.mesh.position.z+Math.cos(n)*t;if(fe(i,r)>.3)return new P(i,fe(i,r),r)}return null}}const Rg=100,Cg=30,Pg=10,Dg=3;class Lg{constructor(){A(this,"level",1);A(this,"exp",0);A(this,"points",0);A(this,"weaponLevel",0);A(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});A(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return Rg+this.attrs.hp*10+this.equip.hp}get maxMP(){return Cg+this.attrs.spirit*5+this.equip.mp}get atk(){return Pg+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(t){this.exp+=t;let e=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=Dg,e++;return e}allocate(t){return this.points<=0?!1:(this.points--,this.attrs[t]++,!0)}}const fh={small:10,medium:50,large:200};class Ig{constructor(){A(this,"coins",0);A(this,"potions",0);A(this,"crystals",{small:0,medium:0,large:0});A(this,"firstSeaGem",!1);A(this,"secondSeaGem",!1)}useCrystals(t,e){const n=Math.min(e,this.crystals[t]);return this.crystals[t]-=n,n*fh[t]}}const me={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056},la=new P(0,1.45,-.46),Ug=new P(.18,1.32,.5);function Zc(s){const t=new we,e=new lt(new Te(.14,.12,.36,10),yt(me.legs));e.position.y=-.18;const n=new we;n.position.y=-.36;const i=new lt(new Te(.12,.1,.32,10),yt(me.legs));i.position.y=-.16;const r=new lt(new Ne(.21,.18,.36),yt(me.boots));r.position.set(0,-.36,.05);const o=new lt(new Te(.15,.13,.12,10),yt(me.boots));return o.position.y=-.28,n.add(i,r,o),t.add(e,n),t.position.set(s,.72,0),{leg:t,shin:n}}function Jc(s,t){const e=new we,n=new lt(new Ie(.15,12,10),yt(me.guard));n.position.y=.02,n.scale.set(1,.8,1);const i=new lt(new Te(.1,.085,.34,10),yt(t));i.position.y=-.18;const r=new we;r.position.y=-.35;const o=new lt(new Te(.085,.07,.26,10),yt(me.skin));o.position.y=-.13;const a=new lt(new ai(.09,.035,8,12),yt(me.glove));a.position.y=-.02,a.rotation.x=Math.PI/2;const c=new lt(new Ie(.1,10,8),yt(me.glove));return c.position.y=-.25,r.add(o,a,c),e.add(n,i,r),e.position.set(s,1.7,0),{arm:e,forearm:r}}function Ng(){const s=new we,t=yt(me.blade,{emissive:6737151,emissiveIntensity:0}),e=new lt(new Ne(.13,1,.035),t);e.position.y=.62;const n=new lt(new gn(.075,.24,4),t);n.position.y=1.24,n.rotation.y=Math.PI/4;const i=new lt(new Ne(.035,.95,.05),yt(me.shieldRim));i.position.y=.6;const r=new lt(new Ne(.4,.09,.09),yt(me.guard));r.position.y=.1;const o=new lt(new gn(.06,.16,6),yt(me.guard));o.position.set(.2,.16,0);const a=o.clone();a.position.x=-.2;const c=new lt(new Te(.05,.05,.3,8),yt(me.grip));c.position.y=-.1;const l=new lt(new Ie(.08,8,8),yt(me.gold));return l.position.y=-.28,s.add(e,n,i,r,o,a,c,l),s.position.y=-.58,s.rotation.x=Math.PI/2,{sword:s,bladeMaterial:t}}function ph(s=me.tunic,t){const e=t??new It(s).multiplyScalar(.74).getHex(),n=new we,i=new we;n.add(i);const r=Zc(.17),o=Zc(-.17);i.add(r.leg,o.leg);const a=yt(s),c=new lt(new Te(.32,.44,.72,14),a);c.position.y=1.4;const l=new lt(new Te(.44,.6,.5,14,1,!0),a);l.position.y=.74;const d=new lt(new Te(.26,.34,.16,14),yt(me.collar));d.position.y=1.78;const h=new lt(new Te(.46,.48,.13,14),yt(me.belt));h.position.y=.98;const p=new lt(new Ne(.16,.12,.05),yt(me.gold));p.position.set(0,.98,.47);const f=new lt(new Ne(.16,.18,.12),yt(me.glove));f.position.set(.34,.9,.18),i.add(c,l,d,h,p,f);const _=new lt(new Te(.13,.15,.2,10),yt(me.skin));_.position.y=1.86,i.add(_);const v=new lt(new Ie(.34,16,14),yt(me.skin));v.position.y=2.08;const m=new lt(new Ie(.37,16,14),yt(me.hair));m.position.set(0,2.16,-.07),m.scale.set(1,.85,1);const u=new lt(new gn(.32,.66,14),yt(e));u.position.set(0,2.54,-.12),u.rotation.x=-.5;const w=new lt(new gn(.1,.4,10),yt(s));w.position.set(0,2.78,-.5),w.rotation.x=-1.5;const E=new lt(new ai(.31,.05,8,16),yt(me.gold));E.position.set(0,2.28,-.04),E.rotation.x=Math.PI/2,i.add(v,m,u,w,E);const S=yt(me.skin);for(const G of[-1,1]){const Z=new lt(new gn(.09,.26,6),S);Z.position.set(.32*G,2.06,-.02),Z.rotation.z=G*-1.1,i.add(Z);const nt=new lt(new Ie(.12,10,8),yt(me.hair));nt.position.set(.28*G,1.96,-.04),nt.scale.set(.7,1.1,.8),i.add(nt);const j=new lt(new Ie(.075,10,8),yt(16777215));j.position.set(.13*G,2.1,.29),j.scale.set(.8,1.1,.6);const ct=new lt(new Ie(.042,8,6),yt(me.eye));ct.position.set(.13*G,2.09,.34);const Y=new lt(new Ne(.13,.035,.04),yt(me.brow));Y.position.set(.13*G,2.21,.3),Y.rotation.z=G*-.12,i.add(j,ct,Y)}const U=new lt(new gn(.04,.1,6),S);U.position.set(0,2.02,.34),U.rotation.x=Math.PI/2,i.add(U);const C=Jc(.46,s),g=Jc(-.46,s),D=Ng();g.arm.add(D.sword),i.add(C.arm,g.arm);const b=new we,x=new lt(new Te(.42,.46,.07,16),yt(me.shield));x.rotation.x=Math.PI/2;const L=new lt(new ai(.44,.05,8,16),yt(me.shieldRim)),H=new lt(new Ti(.12),yt(me.gold));return H.position.z=-.06,H.scale.set(1,1.4,.4),b.add(x,L,H),b.position.copy(la),i.add(b),Pi(n),n.traverse(G=>{G instanceof lt&&(G.castShadow=!0)}),{group:n,body:i,armL:C.arm,armR:g.arm,forearmL:C.forearm,forearmR:g.forearm,legL:r.leg,legR:o.leg,shinL:r.shin,shinR:o.shin,shield:b,sword:D.sword,bladeMaterial:D.bladeMaterial,tunicMat:a}}const Og=28,Qc=11,tl=8,Fg=22,zg=.25,Bg=.45,el=25,kg=22,nl=.38,il=.22,Gg=9,Hg=14,mi=.25,sl=1.25,rl=.35,Vg=.35,Wg=.4,ol=10,qg=.15,Xg=.26,Yg=.5,$g=3.4,Kg=Math.cos(75*Math.PI/180),jg=4.5;class Zg{constructor(){A(this,"mesh");A(this,"stats",new Lg);A(this,"hp");A(this,"mp");A(this,"stamina",100);A(this,"facing",0);A(this,"blocking",!1);A(this,"hurtT",0);A(this,"hasWindGem",!1);A(this,"windLevel",1);A(this,"hasFrostGem",!1);A(this,"sliding",!1);A(this,"divingZone",null);A(this,"airJumpsUsed",0);A(this,"gliding",!1);A(this,"chillT",0);A(this,"burnT",0);A(this,"burnDps",0);A(this,"burnTickAccum",0);A(this,"knockbackVel",new P);A(this,"velocityY",0);A(this,"grounded",!0);A(this,"attackCd",0);A(this,"swingT",0);A(this,"dodgeT",0);A(this,"invulnT",0);A(this,"lungeT",0);A(this,"spinT",0);A(this,"holdT",0);A(this,"chargeReadyFired",!1);A(this,"walkPhase",0);A(this,"idlePhase",0);A(this,"moveAmount",0);A(this,"renderYaw",0);A(this,"dodgeDir",new P);A(this,"body");A(this,"armL");A(this,"armR");A(this,"forearmL");A(this,"forearmR");A(this,"legL");A(this,"legR");A(this,"shinL");A(this,"shinR");A(this,"shield");A(this,"sword");A(this,"bladeMaterial");A(this,"shieldHomePos",new P(0,1.45,-.46));A(this,"shieldBlockPos",new P(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP;const t=ph(me.tunic,me.tunicDark);this.mesh=t.group,this.body=t.body,this.armL=t.armL,this.armR=t.armR,this.forearmL=t.forearmL,this.forearmR=t.forearmR,this.legL=t.legL,this.legR=t.legR,this.shinL=t.shinL,this.shinR=t.shinR,this.shield=t.shield,this.sword=t.sword,this.bladeMaterial=t.bladeMaterial,this.respawn()}get invulnerable(){return this.invulnT>0}get attacking(){return this.swingT>0||this.spinT>0}get airborne(){return!this.grounded}get chargeRatio(){return Us.clamp((this.holdT-mi)/(sl-mi),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,fe(0,-52),-52)}update(t,e,n){this.attackCd=Math.max(0,this.attackCd-t),this.invulnT=Math.max(0,this.invulnT-t),this.swingT=Math.max(0,this.swingT-t),this.dodgeT=Math.max(0,this.dodgeT-t),this.lungeT=Math.max(0,this.lungeT-t),this.spinT=Math.max(0,this.spinT-t),this.chillT=Math.max(0,this.chillT-t),this.hurtT=Math.max(0,this.hurtT-t);const i=this.stats.speedMultiplier,r=new P;let o=!1,a=!1;if(this.blocking=e.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)r.copy(this.dodgeDir).multiplyScalar(Fg*t);else{const v=new P(-Math.sin(n),0,-Math.cos(n)),m=new P(-v.z,0,v.x);if(e.isDown("KeyW")&&r.add(v),e.isDown("KeyS")&&r.sub(v),e.isDown("KeyD")&&r.add(m),e.isDown("KeyA")&&r.sub(m),r.lengthSq()>0){r.normalize(),this.facing=Math.atan2(r.x,r.z);const u=(this.blocking?Vg:this.holdT>mi?Wg:1)*(this.chillT>0?Yg:1);r.multiplyScalar(tl*i*u*t)}if((e.wasPressed("ShiftLeft")||e.wasPressed("ShiftRight"))&&this.stamina>=el){a=!0,this.holdT=0,this.chargeReadyFired=!1;const u=r.lengthSq()>0?r.clone().normalize():new P(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(u),this.dodgeT=zg,this.invulnT=Bg,this.stamina-=el}}if(this.lungeT>0&&r.addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),Gg*t),this.stamina=Math.min(100,this.stamina+kg*t),this.moveAmount=r.length()/Math.max(t,1e-6)/tl,this.sliding=!1,this.grounded){const v=this.mesh.position.x,m=this.mesh.position.z,u=.6,w=(fe(v+u,m)-fe(v-u,m))/(2*u),E=(fe(v,m+u)-fe(v,m-u))/(2*u),S=Math.hypot(w,E);S>.85&&(this.sliding=!0,r.x+=-w/S*6.5*t,r.z+=-E/S*6.5*t)}this.knockbackVel.lengthSq()>.01?(r.addScaledVector(this.knockbackVel,t),this.knockbackVel.multiplyScalar(Math.max(1-t*6,0))):this.knockbackVel.set(0,0,0);const c=this.mesh.position.clone().add(r),l=Sg(c.x,c.z);c.x=l.x,c.z=l.z,(ca(c.x,c.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(c.x-this.divingZone.x,c.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=c.x,this.mesh.position.z=c.z),e.wasPressed("Space")&&(this.grounded?(this.velocityY=Qc,this.grounded=!1,o=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=Qc*.9,o=!0)),this.velocityY-=Og*t,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&e.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*t;const h=fe(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let p=!1,f=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,e.consumeLeftRelease();else if(e.leftDown&&(this.holdT+=t,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),e.consumeLeftRelease()){const v=this.holdT;this.holdT=0,this.chargeReadyFired=!1,v>mi?(f=this.chargeRatioFor(v),this.spinT=rl,this.attackCd=nl/i):this.attackCd<=0&&(this.attackCd=nl/i,this.swingT=il,this.lungeT=.12,p=!0)}return this.animate(t),{attacked:p,spin:f,chargeReady:_,jumped:o,dodged:a}}chargeRatioFor(t){return Us.clamp((t-mi)/(sl-mi),0,1)}animate(t){let e=this.facing-this.renderYaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;this.renderYaw+=e*Math.min(Hg*t,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=t*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=t*11*Math.min(this.moveAmount,1.4));const i=this.dodgeT>0,r=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=i?1.4:r,this.legR.rotation.x=i?1.4:-r,this.shinL.rotation.x=i?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=i?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:i?-1.6:-r*.8,this.forearmL.rotation.x=this.blocking?-.7:i?-1.4:-.25-Math.max(0,-r)*.5;const o=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(o,Math.min(t*14,1));const a=this.holdT>mi;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/il;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else a?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=r*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||a?0:i?-1.4:-.2-Math.max(0,r)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const c=this.chargeRatio;if(c>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new It(16777215),h)}else this.bladeMaterial.emissiveIntensity=c*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/rl)*Math.PI*2:0;const l=n?Math.abs(Math.sin(this.walkPhase))*.07:0,d=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=l+d,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(t,e){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&e&&this.stamina>=ol){const i=new P().subVectors(e,this.mesh.position).setY(0).normalize(),r=new P(Math.sin(this.facing),0,Math.cos(this.facing));if(i.dot(r)>Xg){this.stamina-=ol;const o=Math.max(1,Math.round((t-this.stats.def)*qg));return this.hp=Math.max(0,this.hp-o),this.invulnT=.25,{taken:o,blocked:!0}}}const n=Math.max(1,t-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,this.hurtT=.3,{taken:n,blocked:!1}}applyEnvironmentDamage(t){this.isDead||(this.hp=Math.max(0,this.hp-t))}chill(t){this.isDead||(this.chillT=Math.max(this.chillT,t))}applyBurn(t,e){this.isDead||(this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e))}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(t,e){if(this.isDead)return;const n=new P().subVectors(this.mesh.position,t).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(e)}blinkTo(t,e){this.mesh.position.set(t,fe(t,e),e),this.invulnT=Math.max(this.invulnT,.3)}}const Jg={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},Qg=1.5,po=.45,al=12,t_=3.2,e_=20,n_=25,i_=.45,s_=.35,r_=14,o_=1.7,cl=.8,ll=.3,a_={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}};class bt{constructor(t,e,n){A(this,"mesh");A(this,"kind");A(this,"hp");A(this,"state","patrol");A(this,"remote",!1);A(this,"netIndex",-1);A(this,"pendingNetDamage",0);A(this,"pendingNetFreeze",0);A(this,"pendingNetStun",0);A(this,"pendingNetBurnSec",0);A(this,"pendingNetBurnDps",0);A(this,"remoteFlag",0);A(this,"remoteRingT",0);A(this,"netTarget",new P);A(this,"netYaw",0);A(this,"netDead",!1);A(this,"config");A(this,"home");A(this,"waypoint");A(this,"attackCd",0);A(this,"stateT",0);A(this,"respawnT",0);A(this,"flashT",0);A(this,"freezeT",0);A(this,"burnT",0);A(this,"burnDps",0);A(this,"burnTickAccum",0);A(this,"stunT",0);A(this,"specialEvent",null);A(this,"specialPhase","");A(this,"hopPhase",Math.random()*Math.PI*2);A(this,"lungeDir",new P);A(this,"lungeHitDone",!1);A(this,"knockback",new P);A(this,"baseColor");A(this,"body");A(this,"blob");A(this,"blobMaterial");A(this,"hpBar");A(this,"hpCanvas");A(this,"hpTexture");A(this,"special");A(this,"specialCd",0);A(this,"specialRing",null);A(this,"specialRingMat",null);A(this,"specialRingT",0);this.kind=t,this.config=a_[t],this.hp=this.config.hp,this.home=new P(e,0,n),this.waypoint=this.home.clone(),this.baseColor=new It(this.config.color),this.special=Jg[t]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new we,this.body=new we,this.mesh.add(this.body);const i=this.config.scale>=1.8,r=new It(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=yt(this.config.color,{transparent:!0,opacity:.86}),this.blob=new lt(new Ie(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const o=new lt(new gn(.26,i?.6:.45,10),yt(this.config.color,{transparent:!0,opacity:.86}));if(o.position.y=i?1.42:1.35,o.rotation.z=.12,this.body.add(this.blob,o),i){const _=yt(r);for(const v of[-1,1]){const m=new lt(new gn(.13,.5,8),_);m.position.set(.42*v,1.18,-.05),m.rotation.z=v*-.7,this.body.add(m)}}const a=yt(16777215),c=yt(2105392),l=yt(r),d=i?.2:.17;for(const _ of[-1,1]){const v=new lt(new Ie(d,12,10),a);v.position.set(.3*_,.82,.6),v.scale.set(.85,1.05,.7);const m=new lt(new Ie(d*.5,8,6),c);m.position.set(.3*_+.02*_,.8,.74);const u=new lt(new Ne(.26,.07,.07),l);u.position.set(.3*_,1.04,.62),u.rotation.z=_*(i?.5:.15),this.body.add(v,m,u)}const h=new lt(new Ie(i?.22:.12,12,8),yt(3151904));h.position.set(0,i?.5:.54,.66),h.scale.set(1.3,i?.8:.45,.5),this.body.add(h),Pi(this.body),this.body.traverse(_=>{_ instanceof lt&&(_.castShadow=!0)});const p=new lt(new Ie(.42,12,10),yt(r,{transparent:!0,opacity:.55}));p.position.y=.58,p.raycast=()=>{},this.body.add(p);const f=new lt(new Ie(.22,10,8),new an({color:16777215,transparent:!0,opacity:.4}));f.position.set(-.28,.95,.42),f.scale.set(1.2,.7,.6),f.raycast=()=>{},this.body.add(f),this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new sd(this.hpCanvas),this.hpBar=new nh(new th({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(e,fe(e,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}update(t,e,n){if(this.state==="dead")return this.respawnT-=t,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=t;const c=1-Math.max(this.stateT,0)/ll,l=c<.4?1+c*.9:Math.max(1.36*(1-(c-.4)/.6),.01);return this.body.scale.setScalar(l),this.stateT<=0&&(this.state="dead",this.respawnT=n_,this.mesh.visible=!1),0}if(this.attackCd=Math.max(0,this.attackCd-t),this.specialCd=Math.max(0,this.specialCd-t),this.flashT=Math.max(0,this.flashT-t),this.freezeT>0)return this.freezeT-=t,this.blobMaterial.color.lerpColors(this.baseColor,new It(12577535),.75),0;if(this.stunT>0){this.stunT-=t;const c=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.blobMaterial.color.lerpColors(this.baseColor,new It(16773248),c),0}const i=this.mesh.position,r=i.distanceTo(e),o=i.distanceTo(this.home);let a=0;switch(this.knockback.lengthSq()>.01&&(i.addScaledVector(this.knockback,t),this.knockback.multiplyScalar(Math.max(1-t*8,0))),this.state){case"windup":{this.stateT-=t,this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25,this.stateT<=0&&(this.lungeDir.subVectors(e,i).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=s_);break}case"lunge":{this.stateT-=t,i.addScaledVector(this.lungeDir,r_*t),this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&r<o_&&(this.lungeHitDone=!0,a=this.config.dmg),this.stateT<=0&&(this.state="recover",this.stateT=cl);break}case"recover":{this.stateT-=t,this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const c=this.special;if(this.stateT-=t,this.specialPhase==="telegraph"){const l=1-Math.max(this.stateT,0)/c.telegraph;if(this.body.scale.setScalar(1+l*.25),this.updateRing(l,!0),this.stateT<=0){const d=!n&&r<=c.radius,h=Math.round(this.config.dmg*c.dmgMul);let p=0;d&&c.effect==="drain"&&(p=Math.min(this.config.hp-this.hp,Math.round(h*Qg)),p>0&&(this.hp+=p,this.drawHpBar())),this.specialEvent={name:c.name,sfx:c.sfx,color:c.color,dmg:h,knock:c.knock,effect:c.effect,radius:c.radius,hitPlayer:d,healed:p},this.specialPhase="blast",this.specialRingT=0,this.stateT=po,this.body.scale.setScalar(1)}}else this.specialRingT+=t,this.updateRing(this.specialRingT/po,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=cl);break}default:{if(n)this.state="patrol";else if(o>e_)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&r<=al&&r<=this.special.radius+2){this.startSpecial();break}else if(r<=t_&&this.attackCd<=0){this.state="windup",this.stateT=i_,this.attackCd=1.8;break}else r<=al?this.state="chase":this.state="patrol";const c=this.state==="chase"?e:this.waypoint;this.state==="patrol"&&i.distanceTo(this.waypoint)<1&&this.pickWaypoint();const l=new P().subVectors(c,i);l.y=0;const d=this.state==="chase"?this.config.speed:this.config.speed*.5;l.lengthSq()>.01&&(l.normalize(),i.addScaledVector(l,d*t),this.mesh.rotation.y=Math.atan2(l.x,l.z)),this.hopPhase+=t*(this.state==="chase"?9:5);const h=Math.abs(Math.sin(this.hopPhase));this.body.position.y=h*.35,this.body.scale.y=.8+h*.3,this.body.scale.x=this.body.scale.z=1.1-h*.15;break}}return this.flashT>0?this.blobMaterial.color.setHex(16777215):this.state==="windup"?this.blobMaterial.color.lerpColors(this.baseColor,new It(16733508),.55):this.blobMaterial.color.copy(this.baseColor),this.burnT>0&&this.flashT<=0&&this.blobMaterial.color.lerp(new It(16738860),.5),i.y=fe(i.x,i.z),a}freeze(t){if(!this.isDead){if(this.remote){this.pendingNetFreeze=Math.max(this.pendingNetFreeze,t);return}this.freezeT=Math.max(this.freezeT,t)}}burn(t,e){if(!this.isDead){if(this.remote){this.pendingNetBurnSec=Math.max(this.pendingNetBurnSec,t),this.pendingNetBurnDps=Math.max(this.pendingNetBurnDps,e);return}this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e)}}stun(t){if(!this.isDead){if(this.remote){this.pendingNetStun=Math.max(this.pendingNetStun,t);return}this.stunT=Math.max(this.stunT,t)}}get statusFlag(){return this.specialPhase==="telegraph"?1:this.specialPhase==="blast"?2:this.freezeT>0?3:this.stunT>0?4:this.burnT>0?5:0}get specialSkill(){var t;return((t=this.special)==null?void 0:t.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const t=new an({color:this.special.color,transparent:!0,opacity:.4,side:tn,depthWrite:!1}),e=new lt(new Dr(.62,1,48),t);e.rotation.x=-Math.PI/2,e.position.y=.12,e.raycast=()=>{},this.mesh.add(e),this.specialRing=e,this.specialRingMat=t}updateRing(t,e){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(e)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(t*Math.PI*6));else{const i=(.15+.95*Math.min(t,1))*n;this.specialRing.scale.set(i,i,i),this.specialRingMat.opacity=.7*(1-Math.min(t,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(t,e){return this.isDead?!1:this.remote?(this.pendingNetDamage+=t,this.flashT=.12,!1):(this.hp=Math.max(0,this.hp-t),this.flashT=.12,e&&this.knockback.copy(e).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=ll,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),!0):!1)}refreshHpBar(){this.drawHpBar()}get remoteStatusFlag(){return this.remoteFlag}becomeAuthoritative(){if(this.remote=!1,!this.isDead){switch(this.remoteFlag){case 3:this.freezeT=Math.max(this.freezeT,1.5);break;case 4:this.stunT=Math.max(this.stunT,1.5);break;case 5:this.burnT=Math.max(this.burnT,1.5),this.burnDps=Math.max(this.burnDps,4);break}this.attackCd=Math.max(this.attackCd,.8),this.specialCd=Math.max(this.specialCd,1.5),this.waypoint.copy(this.mesh.position).setY(0),this.state="patrol"}}updateRemote(t){if(!this.mesh.visible)return;const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.netTarget,e);let n=this.netYaw-this.mesh.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.mesh.rotation.y+=n*e,this.flashT=Math.max(0,this.flashT-t),this.hopPhase+=t*6,this.body.position.y=Math.abs(Math.sin(this.hopPhase))*.12,this.flashT>0?this.blobMaterial.color.lerpColors(this.baseColor,new It(16777215),.7):this.blobMaterial.color.copy(this.baseColor),this.renderRemoteStatus(t)}renderRemoteStatus(t){const e=this.remoteFlag;if(e===1?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT,!0)):e===2?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT/po,!1)):this.hideRing(),!(this.flashT>0))if(e===3)this.blobMaterial.color.lerpColors(this.baseColor,new It(12577535),.75);else if(e===4){const n=.4+.4*Math.abs(Math.sin(this.hopPhase*5));this.blobMaterial.color.lerpColors(this.baseColor,new It(16773248),n)}else e===5&&this.blobMaterial.color.lerp(new It(16738860),.5)}applyNetSnapshot(t,e,n,i,r,o,a){const c=!this.netDead;return this.netDead=r,this.hp=o,this.state=r?"dead":"patrol",a!==this.remoteFlag&&(this.remoteFlag=a,this.remoteRingT=0),r?(this.remoteFlag=0,this.hideRing(),this.mesh.visible&&(this.mesh.visible=!1,this.hpBar.visible=!1),c):(this.mesh.visible||(this.mesh.visible=!0,this.hpBar.visible=!0,this.mesh.position.set(t,e,n)),this.netTarget.set(t,e,n),this.netYaw=i,this.drawHpBar(),!1)}revive(){this.hp=this.config.hp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,fe(this.home.x,this.home.z),this.home.z),this.drawHpBar()}pickWaypoint(){const t=Math.random()*Math.PI*2,e=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(t)*e,0,this.home.z+Math.sin(t)*e)}drawHpBar(){const t=this.hpCanvas.getContext("2d");t&&(t.clearRect(0,0,96,18),t.fillStyle="rgba(0,0,0,0.65)",t.fillRect(0,0,96,18),t.fillStyle="#e74c3c",t.fillRect(1,1,94*(this.hp/this.config.hp),16),t.font="bold 12px sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=3,t.strokeStyle="rgba(0,0,0,0.8)",t.strokeText(`${this.hp}/${this.config.hp}`,48,10),t.fillStyle="#fff",t.fillText(`${this.hp}/${this.config.hp}`,48,10),this.hpTexture.needsUpdate=!0)}}const c_=3.5;class zn{constructor(t,e,n,i,r,o="talk"){A(this,"mesh");A(this,"idlePhase",Math.random()*Math.PI*2);A(this,"body");this.name=t,this.linesProvider=r,this.role=o,this.mesh=new we,this.body=new we,this.mesh.add(this.body);const a=new lt(new Te(.28,.52,1.5,12),yt(i));a.position.y=.78;const c=new lt(new Ie(.32,14,12),yt(15911328));c.position.y=1.85;const l=new lt(new gn(.62,.3,14),yt(14202976));l.position.y=2.12,this.body.add(a,c,l),Pi(this.body),this.body.traverse(d=>{d instanceof lt&&(d.castShadow=!0)}),this.mesh.position.set(e,fe(e,n),n)}getLines(){return this.linesProvider()}update(t,e){this.idlePhase+=t*2,this.body.position.y=Math.sin(this.idlePhase)*.025;const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z,r=Math.hypot(n,i);return r<6&&(this.mesh.rotation.y=Math.atan2(n,i)),r<c_}}const l_=6,h_=.9,u_=9,d_={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class Dt{constructor(t,e,n){A(this,"mesh");A(this,"kind");A(this,"bobPhase",Math.random()*Math.PI*2);A(this,"baseY");if(this.kind=t,t==="coin")this.mesh=new lt(new Te(.22,.22,.06,12),yt(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(t==="gem-flame"||t==="gem-wind"||t==="gem-earth"||t==="gem-frost"||t==="gem-tide"||t==="gem-void"||t==="gem-lava"||t==="gem-aqua"||t==="gem-life"){const a={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[t];this.mesh=new lt(new Ti(.75),yt(a,{emissive:a,emissiveIntensity:.9}))}else if(t==="fruit-thunder"||t==="fruit-gravity"){const a={"fruit-thunder":16773216,"fruit-gravity":11559167}[t];this.mesh=new lt(new Ie(.6,16,14),yt(a,{emissive:a,emissiveIntensity:.9}))}else{const o=d_[t];this.mesh=new lt(new Ti(o.size),yt(o.color,{emissive:o.color,emissiveIntensity:.5}))}const i=e+(Math.random()-.5)*1.6,r=n+(Math.random()-.5)*1.6;this.baseY=fe(i,r)+.7,this.mesh.position.set(i,this.baseY,r)}update(t,e){this.bobPhase+=t*3,this.mesh.rotation.y+=t*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z,r=Math.hypot(n,i);if(r<l_&&r>.01){const o=Math.min(u_*t/r,1);this.mesh.position.x+=n*o,this.mesh.position.z+=i*o}return r<h_}}const f_=1.8;class Es{constructor(t,e,n,i={}){A(this,"mesh");A(this,"damage");A(this,"freezes");A(this,"burns");A(this,"leech");A(this,"life");A(this,"lifetime");A(this,"speed");A(this,"direction");A(this,"material");A(this,"hitEnemies",new Set);this.damage=n,this.freezes=i.freezes??!1,this.burns=i.burns??!1,this.leech=i.leech??0,this.lifetime=i.lifetime??.9,this.speed=i.speed??22,this.life=this.lifetime,this.direction=new P(Math.sin(e),0,Math.cos(e)),this.material=new an({color:i.color??8382719,transparent:!0,opacity:.85,side:tn});const r=Math.PI*.95;this.mesh=new lt(new ai(1.2,.16,8,20,r),this.material),this.mesh.position.copy(t),this.mesh.position.y=fe(t.x,t.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,e,-Math.PI/2-r/2)}get expired(){return this.life<=0}update(t,e){if(this.life-=t,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*t),this.mesh.position.y=fe(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9),this.material.opacity=.85*(1-n*.7);const i=[];for(const r of e){if(r.isDead||this.hitEnemies.has(r))continue;const o=r.mesh.position.x-this.mesh.position.x,a=r.mesh.position.z-this.mesh.position.z;Math.hypot(o,a)<f_*this.mesh.scale.x&&(this.hitEnemies.add(r),i.push(r))}return i}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const hl=16,ul=18,p_=16,m_=9,g_=.7,dl=8,fl=.3,Da=2,__=["thunder","gravity"],pl=[500,1100],ml=3;function mh(s){return 1+.5*(s-1)}function x_(s,t=1){return Math.round((20+s*2)*mh(t))}function v_(s=1){return 2+s}function M_(s=1){return .3+.3*s}function y_(s,t=1){return Math.round((10+s)*mh(t))}function S_(s=1){return 5+s}function b_(s=1){return 1+.5*s}class w_{constructor(){A(this,"thunderOwned",!1);A(this,"gravityOwned",!1);A(this,"levels",{thunder:1,gravity:1});A(this,"equipped",[])}ownedOf(t){return t==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<Da}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const E_=6;class T_{constructor(t,e,n,i,r){A(this,"mesh");A(this,"damage");A(this,"center");A(this,"radius");A(this,"life");A(this,"tickT",0);A(this,"spin",0);A(this,"ring");A(this,"core");A(this,"ringMaterial");A(this,"coreMaterial");this.center=new P(t,fe(t,e)+.4,e),this.radius=n,this.life=i,this.damage=r,this.mesh=new we,this.ringMaterial=new an({color:10119912,transparent:!0,opacity:.5,side:tn}),this.ring=new lt(new ai(n,.4,8,32),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.coreMaterial=new an({color:14201087,transparent:!0,opacity:.8}),this.core=new lt(new Ie(.8,12,10),this.coreMaterial),this.mesh.add(this.ring,this.core),this.mesh.position.copy(this.center)}get expired(){return this.life<=0}update(t,e){this.life-=t,this.spin+=t*6,this.mesh.rotation.y=this.spin;const n=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(n);const i=Math.min(this.life,1);this.ringMaterial.opacity=.5*i,this.coreMaterial.opacity=.8*i;for(const r of e){if(r.isDead)continue;const o=this.center.x-r.mesh.position.x,a=this.center.z-r.mesh.position.z,c=Math.hypot(o,a);if(c>this.radius||c<.6)continue;const l=Math.min(E_*t,c-.5);r.mesh.position.x+=o/c*l,r.mesh.position.z+=a/c*l}if(this.tickT+=t,this.tickT>=fl){this.tickT-=fl;const r=[];for(const o of e){if(o.isDead)continue;Math.hypot(this.center.x-o.mesh.position.x,this.center.z-o.mesh.position.z)<=this.radius&&r.push(o)}return r}return[]}dispose(){this.ring.geometry.dispose(),this.core.geometry.dispose(),this.ringMaterial.dispose(),this.coreMaterial.dispose()}}class A_{constructor(t){A(this,"group");A(this,"life");A(this,"lifetime",.28);A(this,"material");this.life=this.lifetime,this.group=new we,this.material=new wa({color:12577023,transparent:!0,opacity:.95});for(let e=0;e<t.length-1;e++){const n=new Ge().setFromPoints(R_(t[e],t[e+1]));this.group.add(new oa(n,this.material))}}get expired(){return this.life<=0}update(t){this.life-=t,this.material.opacity=.95*Math.max(this.life/this.lifetime,0)}dispose(){this.group.traverse(t=>{t instanceof oa&&t.geometry.dispose()}),this.material.dispose()}}function R_(s,t){const e=[],i=new P().subVectors(t,s),r=new P(-i.z,0,i.x).normalize();for(let o=0;o<=6;o++){const a=new P().lerpVectors(s,t,o/6);o>0&&o<6&&(a.addScaledVector(r,(Math.random()-.5)*1.2),a.y+=(Math.random()-.5)*.8),e.push(a)}return e}function C_(s){const e="wss://archipelago-song.onrender.com",n=new URL(e);return n.searchParams.set("room",s),n.toString()}const P_=800,D_=8e3,L_=3e3,I_=12e3;class U_{constructor(t){A(this,"ws",null);A(this,"cb");A(this,"localId",null);A(this,"room",null);A(this,"hostId",null);A(this,"wantConnect",!1);A(this,"reconnecting",!1);A(this,"reconnectAttempts",0);A(this,"reconnectTimer",null);A(this,"lastRecvAt",0);A(this,"watchdogTimer",null);this.cb=t}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}get isHost(){return this.connected&&this.hostId!==null&&this.hostId===this.localId}connect(t){this.room=t,this.wantConnect=!0,this.reconnectAttempts=0,this.openSocket()}leave(){this.wantConnect=!1,this.reconnecting=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.stopWatchdog();const t=this.ws;this.ws=null,this.localId=null,this.hostId=null,t==null||t.close()}_debugDrop(){var t;(t=this.ws)==null||t.close()}openSocket(){let t;try{t=new WebSocket(C_(this.room??"lobby"))}catch(n){console.warn("[net] 無法建立連線,稍後重試:",n),this.scheduleReconnect();return}this.ws=t,t.addEventListener("open",()=>{var n,i,r,o;this.reconnectAttempts=0,this.lastRecvAt=Date.now(),this.startWatchdog(),this.reconnecting&&(this.reconnecting=!1,(i=(n=this.cb).onReconnecting)==null||i.call(n,!1)),(o=(r=this.cb).onStatus)==null||o.call(r,!0)}),t.addEventListener("message",n=>{var r,o,a,c,l,d,h,p,f,_,v,m,u,w,E,S;this.lastRecvAt=Date.now();let i;try{i=JSON.parse(n.data)}catch{return}switch(i.t){case"ping":break;case"welcome":this.localId=i.id,this.room=i.room,this.hostId=i.host;for(const U of i.others)this.cb.onState(U.id,U.state);(o=(r=this.cb).onHostChange)==null||o.call(r,this.isHost);break;case"state":this.cb.onState(i.id,i.state);break;case"join":break;case"leave":this.cb.onLeave(i.id);break;case"host":this.hostId=i.id,(c=(a=this.cb).onHostChange)==null||c.call(a,this.isHost);break;case"enemies":(d=(l=this.cb).onEnemies)==null||d.call(l,i.e);break;case"hit":(p=(h=this.cb).onHit)==null||p.call(h,i.i,i.dmg,i.id);break;case"kill":(_=(f=this.cb).onKill)==null||_.call(f,i.i,i.by);break;case"pdmg":i.to===this.localId&&((m=(v=this.cb).onPlayerDamage)==null||m.call(v,i.dmg,i.sx,i.sy,i.sz,i.knock,i.eff));break;case"cc":(w=(u=this.cb).onCc)==null||w.call(u,i.i,i.kind,i.sec,i.dps);break;case"chat":(S=(E=this.cb).onChat)==null||S.call(E,i.id,i.text);break}});const e=()=>{var n,i,r,o;this.ws===t&&(this.ws=null,this.localId=null,this.hostId=null,this.stopWatchdog(),(i=(n=this.cb).onStatus)==null||i.call(n,!1),(o=(r=this.cb).onHostChange)==null||o.call(r,!1),this.wantConnect&&this.scheduleReconnect())};t.addEventListener("close",e),t.addEventListener("error",e)}scheduleReconnect(){var n,i;if(!this.wantConnect||this.reconnectTimer)return;this.reconnecting||(this.reconnecting=!0,(i=(n=this.cb).onReconnecting)==null||i.call(n,!0));const t=Math.min(P_*2**this.reconnectAttempts,D_);this.reconnectAttempts++;const e=Math.random()*.3*t;this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.wantConnect&&this.openSocket()},t+e)}startWatchdog(){this.stopWatchdog(),this.watchdogTimer=setInterval(()=>{var t;this.connected&&Date.now()-this.lastRecvAt>I_&&((t=this.ws)==null||t.close())},L_)}stopWatchdog(){this.watchdogTimer&&clearInterval(this.watchdogTimer),this.watchdogTimer=null}sendState(t){this.connected&&this.ws.send(JSON.stringify({t:"state",state:t}))}sendEnemies(t){this.connected&&this.ws.send(JSON.stringify({t:"enemies",e:t}))}sendHit(t,e){this.connected&&this.ws.send(JSON.stringify({t:"hit",i:t,dmg:e}))}sendKill(t,e){this.connected&&this.ws.send(JSON.stringify({t:"kill",i:t,by:e}))}sendPlayerDamage(t,e,n,i,r,o,a){this.connected&&this.ws.send(JSON.stringify({t:"pdmg",to:t,dmg:e,sx:n,sy:i,sz:r,knock:o,eff:a}))}sendCc(t,e,n,i){this.connected&&this.ws.send(JSON.stringify({t:"cc",i:t,kind:e,sec:n,dps:i}))}sendChat(t){this.connected&&this.ws.send(JSON.stringify({t:"chat",text:t}))}}const N_=1,O_=2,F_=4,z_=8,gl=.3,B_=.3,k_=.11,G_=1;function mo(){return performance.now()/1e3}const _l=[4891647,16747068,12086271,16765500,3985568,16739229];function gh(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)|0;return _l[Math.abs(t)%_l.length]}class H_{constructor(t,e){A(this,"mesh");A(this,"rig");A(this,"tunicColor");A(this,"buffer",[]);A(this,"moving",!1);A(this,"walkPhase",0);A(this,"renderYaw",0);A(this,"act",0);A(this,"swingT",0);A(this,"hurtT",0);A(this,"dead",!1);A(this,"deathLean",0);const n=gh(t);this.tunicColor=new It(n),this.rig=ph(n),this.mesh=this.rig.group,this.renderYaw=e.facing,this.moving=e.moving,this.act=e.act??0,this.buffer.push({t:mo(),x:e.x,y:e.y,z:e.z,facing:e.facing,moving:e.moving}),this.mesh.position.set(e.x,e.y,e.z),this.mesh.rotation.y=this.renderYaw}sampleBuffer(t){const e=this.buffer,n=e[e.length-1];if(e.length===1||t>=n.t)return n;if(t<=e[0].t)return e[0];for(let i=e.length-2;i>=0;i--){const r=e[i];if(r.t<=t){const o=e[i+1],a=o.t-r.t,c=a>1e-6?(t-r.t)/a:0;return{x:r.x+(o.x-r.x)*c,y:r.y+(o.y-r.y)*c,z:r.z+(o.z-r.z)*c,facing:o.facing,moving:o.moving}}}return e[0]}setState(t){const e=mo();this.buffer.push({t:e,x:t.x,y:t.y,z:t.z,facing:t.facing,moving:t.moving});const n=e-G_;for(;this.buffer.length>2&&this.buffer[0].t<n;)this.buffer.shift();const i=t.act??0;i&N_&&(this.swingT=gl),i&z_&&(this.hurtT=B_),this.act=i,this.dead=t.dead??!1}update(t){const e=1-Math.exp(-12*t),n=this.sampleBuffer(mo()-k_);this.mesh.position.set(n.x,n.y,n.z),this.moving=n.moving;let i=n.facing-this.renderYaw;i=Math.atan2(Math.sin(i),Math.cos(i)),this.renderYaw+=i*e,this.mesh.rotation.y=this.renderYaw;const{legL:r,legR:o,armL:a,armR:c,shield:l,tunicMat:d}=this.rig;if(this.deathLean+=((this.dead?1:0)-this.deathLean)*Math.min(1,e*1.2),this.mesh.rotation.x=this.deathLean*1.45,this.dead){r.rotation.x+=(0-r.rotation.x)*e,o.rotation.x+=(0-o.rotation.x)*e,c.rotation.x+=(0-c.rotation.x)*e,l.position.lerp(la,e),d.color.lerpColors(this.tunicColor,new It(5593696),.6);return}this.swingT=Math.max(0,this.swingT-t),this.hurtT=Math.max(0,this.hurtT-t);const h=(this.act&F_)!==0,p=(this.act&O_)!==0;if(h)r.rotation.x+=(.7-r.rotation.x)*e,o.rotation.x+=(.5-o.rotation.x)*e;else if(this.moving){this.walkPhase+=t*9;const v=Math.sin(this.walkPhase)*.5;r.rotation.x=v,o.rotation.x=-v}else r.rotation.x*=1-e,o.rotation.x*=1-e;let f;this.swingT>0?f=-2.4+(1-this.swingT/gl)*2.9:h?f=-.5:this.moving?f=Math.sin(this.walkPhase)*.3:f=0,c.rotation.x+=(f-c.rotation.x)*Math.min(1,e*2.5);const _=p?-.5:this.moving&&!h?-Math.sin(this.walkPhase)*.3:0;a.rotation.x+=(_-a.rotation.x)*Math.min(1,e*2.5),l.position.lerp(p?Ug:la,Math.min(t*14,1)),this.hurtT>0?d.color.lerpColors(this.tunicColor,new It(16731469),.6):d.color.copy(this.tunicColor)}get actBits(){return this.act}get swinging(){return this.swingT>0}dispose(){var t;(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh.traverse(e=>{e instanceof lt&&e.geometry.dispose()})}}const xl=10,vl=15,V_=6,Ml=12,W_=4,go=8,q_=8,yl=14,X_=3,Sl=16,Y_=7,bl=14,La=4,$_=["flame","wind","earth","frost","tide","void","lava","aqua","life"],wl=[400,900],El=3;function fs(s){return 1+.5*(s-1)}function K_(s,t=1){return Math.round((18+s*2)*fs(t)*1.4)}function j_(s,t=1){return Math.round((25+s*2)*fs(t))}function Z_(s=1){return V_+(s-1)}function J_(s,t=1){return Math.round((20+s*2)*fs(t))}function Q_(s=1){return 1.5+s}function tx(s=1){return q_+3*(s-1)}function ex(s,t=1){return Math.round((22+s*2)*fs(t)*1.4)}function nx(s=1){return 8+4*(s-1)}function ix(s,t=1){return Math.round((20+s*2)*fs(t)*1.35)}function sx(s=1){return 2+.7*(s-1)}function rx(s=1){return Y_+(s-1)}function ox(s,t=1){return Math.round((18+s*2)*fs(t)*1.5)}function ax(s=1){return .4+.1*(s-1)}class cx{constructor(){A(this,"flameOwned",!1);A(this,"windOwned",!1);A(this,"earthOwned",!1);A(this,"frostOwned",!1);A(this,"tideOwned",!1);A(this,"voidOwned",!1);A(this,"lavaOwned",!1);A(this,"aquaOwned",!1);A(this,"lifeOwned",!1);A(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});A(this,"equipped",[])}ownedOf(t){switch(t){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<La}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const ha=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function ua(s){return ha.find(t=>t.id===s)}class lx{constructor(){A(this,"owned",[]);A(this,"equipped",{})}has(t){return this.owned.includes(t)}equip(t){const e=ua(t);if(!(!e||!this.has(t)))if(e.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=t}else this.equipped[e.slot]=t}unequip(t){delete this.equipped[t]}slotOf(t){for(const[e,n]of Object.entries(this.equipped))if(n===t)return e;return null}totalBonus(){const t={atk:0,def:0,hp:0,mp:0,agi:0};for(const e of Object.values(this.equipped)){const n=ua(e);n&&(t.atk+=n.bonus.atk??0,t.def+=n.bonus.def??0,t.hp+=n.bonus.hp??0,t.mp+=n.bonus.mp??0,t.agi+=n.bonus.agi??0)}return t}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(t){this.owned=[...t.owned],this.equipped={...t.equipped}}}const xi=5,bi={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class hx{constructor(){A(this,"states",{});A(this,"slimeKills",0);A(this,"jellyBaseline",0);A(this,"huntKills",{});A(this,"huntBaselines",{})}get(t){return this.states[t]??null}accept(t){if(this.states[t]||(this.states[t]="active"),t==="jelly"&&(this.jellyBaseline=this.slimeKills),t in bi){const e=t;this.huntBaselines[e]=this.huntKills[bi[e].kind]??0}}complete(t){this.states[t]="done"}addKill(t){this.huntKills[t]=(this.huntKills[t]??0)+1}killsOf(t){return this.huntKills[t]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,xi)}huntProgress(t){const e=(this.huntKills[bi[t].kind]??0)-(this.huntBaselines[t]??0);return Math.min(e,bi[t].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(t){this.states={...t.states},this.slimeKills=t.kills,this.jellyBaseline=t.base,this.huntKills={...t.huntKills??{}},this.huntBaselines={...t.huntBases??{}}}}const _h="archipelago-save-v1";function ux(s){try{localStorage.setItem(_h,JSON.stringify(s))}catch{}}function dx(){try{const s=localStorage.getItem(_h);if(!s)return null;const t=JSON.parse(s);return t.v!==1?null:t}catch{return null}}const fx=`
#hud { position: fixed; inset: 0; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; color: #fff; }
#hud .panel { position: absolute; top: 14px; left: 14px; background: rgba(10, 26, 42, 0.72); border-radius: 10px; padding: 10px 14px; min-width: 220px; }
#hud .bar { height: 13px; border-radius: 6px; background: rgba(255,255,255,0.15); margin: 4px 0 8px; overflow: hidden; position: relative; }
#hud .bar > div { height: 100%; border-radius: 6px; transition: width 0.15s; }
#hud .bar .num { position: absolute; inset: 0; text-align: center; font-size: 10px; line-height: 13px; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
#hud .hp > div { background: #e74c3c; }
#hud .mp > div { background: #3a8fe8; }
#hud .st > div { background: #f0c040; }
#hud .xp > div { background: #8e6fe8; }
#hud .row { display: flex; justify-content: space-between; font-size: 13px; opacity: 0.95; }
#hud .hint { position: absolute; bottom: 14px; left: 14px; font-size: 12px; background: rgba(10,26,42,0.6); padding: 8px 12px; border-radius: 8px; line-height: 1.7; }
#hud .toast { position: absolute; top: 18%; left: 50%; transform: translateX(-50%); font-size: 20px; font-weight: 700; text-shadow: 0 2px 6px rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s; }
#hud .toast.show { opacity: 1; }
#hud .gem-row { font-size: 13px; margin-top: 6px; display: none; color: #ffb08a; }
#hud .gem-row.show { display: block; }
#hud .fruit-row { font-size: 13px; margin-top: 4px; display: none; color: #cfa8ff; }
#hud .fruit-row.show { display: block; }
#hud .quests { position: absolute; top: 14px; right: 14px; background: rgba(10,26,42,0.72); border-radius: 10px; padding: 10px 14px; font-size: 13px; line-height: 1.8; max-width: 260px; display: none; }
#hud .quests.show { display: block; }
#hud .quests .title { font-weight: 700; font-size: 13px; opacity: 0.8; margin-bottom: 2px; }
#hud .talk { position: absolute; bottom: 110px; left: 50%; transform: translateX(-50%); font-size: 15px; background: rgba(10,26,42,0.8); padding: 6px 16px; border-radius: 8px; display: none; }
#hud .talk.show { display: block; }
#death { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; flex-direction: column; gap: 18px; background: rgba(20, 0, 0, 0.55); color: #fff; font-family: inherit; }
#death.show { display: flex; }
#death h2 { font-size: 34px; margin: 0; }
#death button { pointer-events: auto; font-size: 16px; padding: 10px 28px; border: none; border-radius: 8px; background: #e74c3c; color: #fff; cursor: pointer; }
#death button.shrine { background: #3a8fe8; }
#death .options { display: flex; flex-direction: column; gap: 10px; align-items: center; }
`;class px{constructor(t){A(this,"hpFill");A(this,"mpFill");A(this,"stFill");A(this,"xpFill");A(this,"levelText");A(this,"coinText");A(this,"crystalText");A(this,"toast");A(this,"deathOverlay");A(this,"toastTimer",null);this.onRespawn=t;const e=document.createElement("style");e.textContent=fx,document.head.appendChild(e);const n=document.createElement("div");n.id="hud",n.innerHTML=`
      <div class="panel">
        <div class="row"><span id="hud-level">Lv.1</span><span id="hud-coin">🪙 0</span></div>
        <div class="bar hp"><div id="hud-hp"></div><span class="num" id="hud-hp-num"></span></div>
        <div class="bar mp"><div id="hud-mp"></div><span class="num" id="hud-mp-num"></span></div>
        <div class="bar st"><div id="hud-st"></div></div>
        <div class="row"><span>EXP</span><span id="hud-crystal">💎 0</span></div>
        <div class="bar xp"><div id="hud-xp"></div></div>
        <div class="row"><span>🧪 <span id="hud-potion">0</span>(R 使用)</span><span id="hud-env">☀️</span></div>
        <div class="gem-row" id="hud-gem">🔥 焰心石｜E 火焰斬(10 靈力)</div>
        <div class="fruit-row" id="hud-fruit"></div>
      </div>
      <div class="quests" id="hud-quests"><div class="title">任務</div><div id="hud-quest-list"></div></div>
      <div class="talk" id="hud-talk">按 F 對話</div>
      <div class="hint">WASD 移動｜空白鍵 跳躍｜Shift 閃避｜左鍵 攻擊(按住集氣)｜Q 舉盾｜E 火焰斬｜R 藥水<br/>右鍵拖曳 轉視角｜滾輪 縮放｜Tab 背包｜F 對話/上下船｜Enter 聊天｜小船在南灘,可出海前往其他島</div>
      <div class="toast" id="hud-toast"></div>
      <div id="hud-net" style="position:fixed;top:8px;right:12px;font:600 13px/1.4 system-ui,sans-serif;color:#cfe8ff;text-shadow:0 1px 2px #000;pointer-events:none;"></div>
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast")}update(t,e){const n=t.stats;this.hpFill.style.width=`${t.hp/n.maxHP*100}%`,this.mpFill.style.width=`${t.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(t.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(t.mp)} / ${n.maxMP}`,this.stFill.style.width=`${t.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${e.coins}`;const i=e.crystals.small+e.crystals.medium+e.crystals.large;this.crystalText.textContent=`💎 ${i}`,this.byId("hud-potion").textContent=String(e.potions)}setGems(t){const e=[];t.isEquipped("flame")&&e.push("🔥 焰心石｜E 火焰斬(10 靈力)"),t.isEquipped("wind")&&e.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔"),t.isEquipped("earth")&&e.push("🪨 地殼石｜C 地震波(15 靈力)"),t.isEquipped("frost")&&e.push("❄️ 霜語晶｜V 冰箭(12 靈力)/海上行走耗靈力"),t.isEquipped("tide")&&e.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)"),t.isEquipped("void")&&e.push("🌀 虛空石｜X 瞬移(8 靈力)"),t.isEquipped("lava")&&e.push("🌋 溶岩石｜G 熔岩噴發(14 靈力,灼燒)"),t.isEquipped("aqua")&&e.push("💧 碧波石｜B 碧波震盪(16 靈力,凍結周圍)"),t.isEquipped("life")&&e.push("🌿 翠生石｜H 生命汲取(14 靈力,吸血)");const n=this.byId("hud-gem");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setFruits(t){const e=[];t.isEquipped("thunder")&&e.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),t.isEquipped("gravity")&&e.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setTalkPrompt(t,e="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",t),t&&(n.textContent=e)}setEnv(t){const e=this.byId("hud-env");e.textContent!==t&&(e.textContent=t)}setOnline(t,e,n){const i=this.byId("hud-net");if(!t){i.textContent="";return}const r=n&&n!=="lobby"?` · 房間 ${n}`:"";i.textContent=`🌐 連線中${r} · 同行 ${e} 人`}setReconnecting(t,e){if(!t)return;const n=this.byId("hud-net"),i=e&&e!=="lobby"?` · 房間 ${e}`:"";n.textContent=`🔄 重新連線中…${i}`}setQuests(t){this.byId("hud-quests").classList.toggle("show",t.length>0),this.byId("hud-quest-list").innerHTML=t.map(e=>`<div>${e}</div>`).join("")}showToast(t){this.toast.textContent=t,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(t,e=[]){if(t){const n=this.byId("death-options");n.innerHTML="";const i=[{id:"beach",label:"在曙光嶼海灘重生"},...e];for(const r of i){const o=document.createElement("button");o.textContent=r.label,o.dataset.respawn=r.id,r.id!=="beach"&&o.classList.add("shrine"),o.addEventListener("click",()=>this.onRespawn(r.id)),n.appendChild(o)}}this.deathOverlay.classList.toggle("show",t)}byId(t){const e=document.getElementById(t);if(!e)throw new Error(`HUD 元素遺失: ${t}`);return e}}const mx=`
#bag { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; max-height: 72vh; overflow-y: auto; overscroll-behavior: contain; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#bag::-webkit-scrollbar { width: 8px; }
#bag::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 4px; }
#bag.show { display: block; }
#bag h3 { margin: 0 0 12px; font-size: 18px; }
#bag .section { margin-bottom: 14px; }
#bag .item { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 14px; }
#bag button { border: none; border-radius: 6px; padding: 4px 12px; margin-left: 6px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#bag button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#bag .alloc button { background: #8e6fe8; }
#bag .muted { opacity: 0.7; font-size: 12px; }
#bag .gems { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
#bag .gem-slot { border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 6px 4px; text-align: center; font-size: 12px; line-height: 1.5; }
#bag .gem-slot.off { opacity: 0.35; filter: grayscale(1); }
#bag .gem-slot.eq { border-color: #f0c040; background: rgba(240,192,64,0.14); }
#bag .gembtn { margin: 4px 0 0; padding: 2px 8px; font-size: 11px; }
#bag .gembtn.on { background: #c8902c; }
`,Tl={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},Al={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"};class gx{constructor(t,e,n,i,r,o,a,c,l,d,h,p){A(this,"root");A(this,"visible",!1);A(this,"teleportOpen",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=i,this.equipment=r,this.onUseCrystal=o,this.onAllocate=a,this.onEquipChange=c,this.onUseSeaGem=l,this.getShrineTargets=d,this.onTeleportShrine=h,this.onLoadoutChange=p;const f=document.createElement("style");f.textContent=mx,document.head.appendChild(f),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var p;if(!this.visible)return;const t=this.stats,e=Object.keys(Tl).map(f=>{const _=this.inventory.crystals[f];return`<div class="item">
          <span>${Tl[f]} ×${_} <span class="muted">(${fh[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${_===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${_===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=t.points>0?Object.keys(Al).map(f=>`<div class="item">
                <span>${Al[f]} <span class="muted">目前 ${t.attrs[f]}</span></span>
                <button data-alloc="${f}">+1</button>
              </div>`).join(""):'<div class="muted">升級後可在此分配能力點數</div>',i=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],r=!this.gems.hasFreeSlot(),o=i.map(([f,_,v])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${v}<br/><span class='muted'>未取得</span></div>`;const u=this.gems.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${v}<br/>
          <button class="gembtn ${u?"on":""}" data-gemtoggle="${f}" ${!u&&r?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),a=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],c=!this.fruits.hasFreeSlot(),l=a.map(([f,_,v])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${v}<br/><span class='muted'>未取得</span></div>`;const u=this.fruits.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${v}<br/>
          <button class="gembtn ${u?"on":""}" data-fruittoggle="${f}" ${!u&&c?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),d=[];this.inventory.firstSeaGem&&d.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&d.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const h=this.equipment.owned.map(f=>{const _=ua(f);if(!_)return"";const v=this.equipment.slotOf(f);return`<div class="item">
          <span>${v?"✅ ":""}${_.name} <span class="muted">(${_.desc})</span></span>
          ${v?`<button data-unequip="${v}">卸下</button>`:`<button data-equip="${f}">裝備</button>`}
        </div>`}).join("");this.root.innerHTML=`
      <h3>背包</h3>
      <div class="section">
        <div class="muted">Lv.${t.level}｜EXP ${t.exp} / ${t.expToNext()}｜可分配點數 ${t.points}<br/>
        攻擊 ${t.atk}｜防禦 ${t.def}｜生命上限 ${t.maxHP}｜靈力上限 ${t.maxMP}</div>
      </div>
      <div class="section">${e}</div>
      ${d.length>0?`<div class="section"><h3>重要道具</h3>${d.join("")}</div>`:""}
      <div class="section"><h3>裝備</h3>${h||'<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${La})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石,只有出戰中的技能與被動才生效</div>
        <div class="gems">${o}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${Da})</h3><div class="gems">${l}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${n}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.use;this.onUseCrystal(_,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(p=this.root.querySelector("button[data-tp-open]"))==null||p.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.gemtoggle;this.gems.isEquipped(_)?this.gems.unequip(_):this.gems.equip(_),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.fruittoggle;this.fruits.isEquipped(_)?this.fruits.unequip(_):this.fruits.equip(_),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const t=this.getShrineTargets();return`${t.length>0?t.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const _x=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class xx{constructor(){A(this,"root");A(this,"nameEl");A(this,"textEl");A(this,"lines",[]);A(this,"index",0);A(this,"visible",!1);const t=document.createElement("style");t.textContent=_x,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(t,e){e.length!==0&&(this.lines=e,this.index=0,this.visible=!0,this.nameEl.textContent=t,this.textEl.textContent=e[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const vx=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Rl=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class Mx{constructor(t,e,n){A(this,"root");A(this,"visible",!1);this.inventory=t,this.equipment=e,this.onBuy=n;const i=document.createElement("style");i.textContent=vx,document.head.appendChild(i),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=Rl.map(n=>{const i=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${i?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),e=ha.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${t}
      <h3 style="margin-top:14px;">裝備</h3>
      ${e||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const i=Rl.find(r=>r.id===n.dataset.buy);!i||this.inventory.coins<i.price||(this.inventory.coins-=i.price,i.id==="potion"?this.inventory.potions++:this.inventory.crystals[i.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const i=ha.find(r=>r.id===n.dataset.buyequip);!i||this.equipment.has(i.id)||this.inventory.coins<i.price||(this.inventory.coins-=i.price,this.equipment.owned.push(i.id),this.onBuy(),this.render())})})}}const yx=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Cl=[100,250,500,800,1200];class Sx{constructor(t,e,n,i,r,o,a){A(this,"root");A(this,"visible",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=i,this.onUpgrade=r,this.onGemUpgrade=o,this.onFruitUpgrade=a;const c=document.createElement("style");c.textContent=yx,document.head.appendChild(c),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=this.stats.weaponLevel,e=t>=Cl.length,n=e?0:Cl[t],r=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,l])=>l).map(([l,d])=>{const h=this.gems.levels[l],p=h>=El,f=p?0:wl[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-gemup="${l}" ${p||this.inventory.coins<f?"disabled":""}>
            ${p?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join(""),a=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,l])=>l).map(([l,d])=>{const h=this.fruits.levels[l],p=h>=ml,f=p?0:pl[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-fruitup="${l}" ${p||this.inventory.coins<f?"disabled":""}>
            ${p?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join("");this.root.innerHTML=`
      <h3>爐婆的鍛造坊</h3>
      <div class="info">
        武器:勇者之劍 +${t}${e?"(已達最高強化)":""}<br/>
        目前攻擊力:${this.stats.atk}${e?"":` → 強化後 ${this.stats.atk+3}`}<br/>
        持有 🪙 ${this.inventory.coins}
      </div>
      <button id="forge-btn" ${e||this.inventory.coins<n?"disabled":""}>
        ${e?"已滿級":`強化(🪙 ${n})`}
      </button>
      <h3 style="margin-top:16px;">寶石升階</h3>
      ${r||'<div class="info" style="opacity:0.6;">取得靈紋寶石後可在此升階</div>'}
      ${a?`<h3 style="margin-top:16px;">果實升階</h3>${a}`:""}
      <div class="muted">按 F 關閉</div>
    `;const c=this.root.querySelector("#forge-btn");c==null||c.addEventListener("click",()=>{e||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.gemup,h=this.gems.levels[d];if(h>=El)return;const p=wl[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.gems.levels[d]++,this.onGemUpgrade(d),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.fruitup,h=this.fruits.levels[d];if(h>=ml)return;const p=pl[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.fruits.levels[d]++,this.onFruitUpgrade(d),this.render())})})}}const xh="archipelago-settings-v1",_o={volume:1,music:!0,deathDrop:!0};function xo(){var e;const s=new URLSearchParams(location.search),t=(e=s.get("room"))==null?void 0:e.trim();return t||(s.has("mp")?"lobby":null)}function vo(s){return`${location.origin}${location.pathname}?room=${encodeURIComponent(s)}`}function bx(){return Math.random().toString(36).slice(2,8)}function wx(){try{const s=localStorage.getItem(xh);return s?{..._o,...JSON.parse(s)}:{..._o}}catch{return{..._o}}}const Ex=`
#settings { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 360px; background: rgba(10, 26, 42, 0.95); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 22px; display: none; z-index: 25; }
#settings.show { display: block; }
#settings h3 { margin: 0 0 14px; font-size: 18px; }
#settings .row { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; font-size: 14px; }
#settings input[type="range"] { width: 150px; }
#settings input[type="checkbox"] { width: 18px; height: 18px; }
#settings .danger { margin-top: 14px; width: 100%; padding: 8px; border: none; border-radius: 8px; background: #b03030; color: #fff; cursor: pointer; font-size: 14px; }
#settings .muted { opacity: 0.6; font-size: 12px; margin-top: 10px; text-align: center; }
#settings hr { border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 12px 0; }
#settings .mp-btn { width: 100%; padding: 8px; border: none; border-radius: 8px; background: #2f6fb0; color: #fff; cursor: pointer; font-size: 14px; margin-top: 6px; }
#settings .mp-btn.ghost { background: rgba(255,255,255,0.12); }
#settings .mp-room { font-weight: 600; color: #7fd0ff; }
#settings .mp-code { font-weight: 600; color: #7fd0ff; letter-spacing: 1px; }
#settings .mp-or { text-align: center; opacity: 0.5; font-size: 12px; margin: 10px 0 0; }
#settings .mp-join { display: flex; gap: 6px; margin-top: 6px; }
#settings .mp-join input { flex: 1; min-width: 0; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.25); color: #fff; font-size: 14px; }
#settings .mp-join .mp-btn { width: auto; margin-top: 0; padding: 8px 16px; }
`;class Tx{constructor(t){A(this,"settings");A(this,"root");A(this,"visible",!1);this.audio=t,this.settings=wx();const e=document.createElement("style");e.textContent=Ex,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(xh,JSON.stringify(this.settings))}catch{}}render(){var t,e,n,i;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,this.wireMultiplayer(),(t=this.root.querySelector("#set-vol"))==null||t.addEventListener("input",r=>{this.settings.volume=Number(r.target.value)/100,this.apply(),this.persist()}),(e=this.root.querySelector("#set-music"))==null||e.addEventListener("change",r=>{this.settings.music=r.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",r=>{this.settings.deathDrop=r.target.checked,this.persist()}),(i=this.root.querySelector("#set-reset"))==null||i.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}multiplayerSection(){const t=xo();return t?`
      <div class="row"><span>多人房間</span><span class="mp-room">${t==="lobby"?"預設房間 lobby":t}</span></div>
      <div class="row"><span>邀請碼</span><span class="mp-code">${t}</span></div>
      <button class="mp-btn" id="set-mp-copy-code">複製邀請碼</button>
      <button class="mp-btn ghost" id="set-mp-copy">複製邀請連結</button>
      <button class="mp-btn ghost" id="set-mp-leave">離開房間(回單機)</button>
      <div class="muted" id="set-mp-hint">把邀請碼或連結傳給家人朋友,即可進同一座群島</div>
    `:`
        <div class="row"><span>多人房間</span><span>單機遊玩</span></div>
        <button class="mp-btn" id="set-mp-create">建立多人房間(產生邀請碼)</button>
        <div class="mp-or">— 或加入朋友的群島 —</div>
        <div class="mp-join">
          <input id="set-mp-code" type="text" placeholder="輸入邀請碼" maxlength="64" autocomplete="off" spellcheck="false" />
          <button class="mp-btn" id="set-mp-join">加入</button>
        </div>
        <div class="muted" id="set-mp-hint">跟朋友拿到邀請碼後輸入即可進他的群島</div>
      `}wireMultiplayer(){var n,i,r,o,a;const t=c=>{const l=c.trim();l&&(location.href=vo(l))},e=this.root.querySelector("#set-mp-code");e==null||e.addEventListener("keydown",c=>{c.stopPropagation(),c.key==="Enter"&&t(e.value)}),(n=this.root.querySelector("#set-mp-join"))==null||n.addEventListener("click",()=>{e&&t(e.value)}),(i=this.root.querySelector("#set-mp-create"))==null||i.addEventListener("click",()=>{location.href=vo(bx())}),(r=this.root.querySelector("#set-mp-leave"))==null||r.addEventListener("click",()=>{location.href=location.pathname}),(o=this.root.querySelector("#set-mp-copy-code"))==null||o.addEventListener("click",async()=>{const c=xo();if(!c)return;const l=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(c),l&&(l.textContent="已複製邀請碼!")}catch{l&&(l.textContent=`邀請碼:${c}`)}}),(a=this.root.querySelector("#set-mp-copy"))==null||a.addEventListener("click",async()=>{const c=xo();if(!c)return;const l=vo(c),d=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(l),d&&(d.textContent="已複製邀請連結!")}catch{d&&(d.textContent=l)}})}}const Ax=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,Rx=.9;class Cx{constructor(){A(this,"totalSpawned",0);A(this,"items",[]);const t=document.createElement("style");t.textContent=Ax,document.head.appendChild(t)}spawn(t,e,n){const i=document.createElement("div");i.className="float-dmg",i.textContent=e,i.style.color=n,document.body.appendChild(i),this.items.push({el:i,pos:t.clone(),life:Rx}),this.totalSpawned++}update(t,e){this.items=this.items.filter(n=>{if(n.life-=t,n.life<=0)return n.el.remove(),!1;n.pos.y+=t*1.6;const i=n.pos.clone().project(e);return i.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(i.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-i.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class Px{constructor(){A(this,"totalSpawned",0);A(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(t){var n;const e=document.createElement("div");for(e.textContent=t,this.root.appendChild(e),this.totalSpawned++,setTimeout(()=>e.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const Dx=8,Lx=9e3,Pl=200;function Ix(s){return"#"+s.toString(16).padStart(6,"0")}class Ux{constructor(t){A(this,"log");A(this,"input");A(this,"isTyping",!1);this.onSend=t;const e=document.createElement("style");e.textContent=`
      #chat { position: fixed; right: 12px; bottom: 92px; width: 340px; z-index: 50;
        font: 13px/1.4 system-ui, sans-serif; pointer-events: none; }
      #chat-log { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; margin-bottom: 6px; }
      #chat-log .line { background: rgba(0,0,0,0.42); color: #f4f4f4; padding: 2px 8px;
        border-radius: 8px; width: fit-content; max-width: 100%; word-break: break-word;
        transition: opacity 0.6s; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
      #chat-log .line .who { font-weight: 700; margin-right: 6px; }
      #chat-input { display: none; width: 100%; box-sizing: border-box; pointer-events: auto;
        background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.35); border-radius: 8px;
        color: #fff; padding: 6px 10px; font: 14px system-ui, sans-serif; outline: none; }
      #chat-input.show { display: block; }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="chat",n.innerHTML=`<div id="chat-log"></div><input id="chat-input" maxlength="${Pl}" placeholder="輸入訊息…Enter 送出、Esc 取消" />`,document.body.appendChild(n),this.log=n.querySelector("#chat-log"),this.input=n.querySelector("#chat-input"),this.input.addEventListener("keydown",i=>{if(i.stopPropagation(),i.key==="Enter"){const r=this.input.value.trim().slice(0,Pl);r&&this.onSend(r),this.stopTyping()}else i.key==="Escape"&&this.stopTyping()})}startTyping(){this.isTyping=!0,this.input.classList.add("show"),this.input.value="",this.input.focus()}stopTyping(){this.isTyping=!1,this.input.classList.remove("show"),this.input.value="",this.input.blur()}push(t,e,n){var a;const i=document.createElement("div");i.className="line";const r=document.createElement("span");r.className="who",r.style.color=Ix(n),r.textContent=t;const o=document.createElement("span");for(o.textContent=e,i.append(r,o),this.log.appendChild(i);this.log.childElementCount>Dx;)(a=this.log.firstElementChild)==null||a.remove();setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),600)},Lx)}}const Nx=4;class Ox{constructor(t,e){A(this,"mesh");A(this,"respawnT",0);A(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new we;const n=new lt(new Ne(1.2,.7,.85),yt(9067056));n.position.y=.35;const i=new lt(new Te(.45,.45,1.2,10,1,!1,0,Math.PI),yt(10119738));i.rotation.z=Math.PI/2,i.position.y=.72;const r=new lt(new Ne(1.26,.16,.9),yt(15777856));r.position.y=.45;const o=new lt(new Ti(.18),new an({color:16769152}));o.position.y=1.25,this.mesh.add(n,i,r,o),Pi(this.mesh),this.place(t,e)}get active(){return this.mesh.visible}place(t,e){this.mesh.position.set(t,0,e),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(t,e,n){if(!this.active||(this.bobPhase+=t*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=t*.2,!n))return!1;const i=e.x-this.mesh.position.x,r=e.z-this.mesh.position.z;return Math.hypot(i,r)<Nx}}const Fx=3.5,mr=2,zx=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class Bx{constructor(t){A(this,"mesh");A(this,"active",!1);A(this,"crystalGroup");A(this,"crystalMat");A(this,"ring");A(this,"phase",Math.random()*Math.PI*2);this.def=t,this.mesh=new we;const e=new we,n=new lt(new Te(1.1,1.4,.5,8),yt(8028820));n.position.y=.25;const i=new lt(new Te(.35,.5,2.2,8),yt(9081508));i.position.y=1.6,e.add(n,i),this.crystalMat=yt(6978186);const r=new lt(new Ti(.45),this.crystalMat);this.crystalGroup=new we,this.crystalGroup.add(r),this.crystalGroup.position.y=3.2,e.add(this.crystalGroup),Pi(e),e.traverse(o=>{o instanceof lt&&(o.castShadow=!0)}),this.mesh.add(e),this.ring=new lt(new Dr(1.5,1.9,28),new an({color:8382696,transparent:!0,opacity:.55,side:tn})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(t.x,fe(t.x,t.z),t.z)}setActive(t){this.active=t,this.ring.visible=t,t?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(t,e){this.phase+=t,this.crystalGroup.rotation.y+=t*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z;return Math.hypot(n,i)<Fx}}const kx=.3;function Gx(){var Gt,Vt,Ot;const s=document.getElementById("app");if(!s)throw new Error("找不到 #app 容器");const t=new J0({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Ll,s.appendChild(t.domElement);const e=new Ju;e.background=new It(8900331),e.fog=new Sa(8900331,150,650);const n=new pn(60,window.innerWidth/window.innerHeight,.1,1e3),i=new eg,r=()=>i.unlock();window.addEventListener("pointerdown",r,{once:!0}),window.addEventListener("keydown",r,{once:!0});const o=new Tx(i),a=new ud(16774368,2.6);a.position.set(60,100,40),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-80,a.shadow.camera.right=80,a.shadow.camera.top=80,a.shadow.camera.bottom=-80,a.shadow.camera.far=250,a.shadow.bias=-8e-4;const c=new cd(12574719,15258784,.7),l=new dd(16777215,.35);e.add(a,a.target,c,l);const d=new pg(e,a,c,l),h=new sg(e),p=new Cx,f=new Px;let _=0;const v=cg();v.position.set(75,0,55),e.add(v,bg());const m=new Ag;e.add(m.mesh);let u=!1;const w=new lt(new Pr(1.5,20),new an({color:13626111,transparent:!0,opacity:.75}));w.rotation.x=-Math.PI/2,w.visible=!1,e.add(w);function E(){for(let T=0;T<100;T++){const O=-210+Math.random()*440,F=-240+Math.random()*580;if(dh(O,F)&&!ss.some(st=>Math.hypot(O-st.x,F-st.z)<st.r+12)&&!(Math.hypot(O-dn.x,F-dn.z)<dn.r+8))return{x:O,z:F}}return{x:-100,z:-40}}const S=[];for(let T=0;T<6;T++){const O=E(),F=new Ox(O.x,O.z);S.push(F),e.add(F.mesh)}function U(T,O){let F=ss[0],st=1/0;for(const ie of ss){const ee=Math.hypot(T-ie.x,O-ie.z);ee<st&&(st=ee,F=ie)}const pt=Math.max(Math.hypot(T-F.x,O-F.z),.001),ft=(F.r-8)/pt;return{x:F.x+(T-F.x)*ft,z:F.z+(O-F.z)*ft}}const C=new Q0(t.domElement),g=new Zg;e.add(g.mesh);const D=new Map;let b=!1;const x=new U_({onState(T,O){let F=D.get(T);F?F.setState(O):(F=new H_(T,O),D.set(T,F),e.add(F.mesh),it.setOnline(x.connected,D.size,x.room))},onLeave(T){const O=D.get(T);O&&(O.dispose(),D.delete(T),it.setOnline(x.connected,D.size,x.room))},onStatus(T){if(!T){for(const O of D.values())O.dispose();D.clear()}it.setOnline(T,D.size,x.room)},onReconnecting(T){it.setReconnecting(T,x.room)},onHostChange(T){if(T&&!b)for(const O of Tt)O.becomeAuthoritative();b=T},onEnemies(T){q(T)},onHit(T,O,F){k(T,O,F)},onKill(T,O){const F=Tt[T];O===x.localId&&F&&W(F)},onPlayerDamage(T,O,F,st,pt,ft){Ct(T,O,F,st,pt,ft)},onCc(T,O,F,st){ut(T,O,F,st)},onChat(T,O){H.push(L(T),O,gh(T))}}),L=T=>`玩家·${T.slice(-2)}`,H=new Ux(T=>{x.sendChat(T),H.push("你",T,10216298)}),G=new URLSearchParams(location.search),Z=(Gt=G.get("room"))==null?void 0:Gt.trim(),nt=Z||(G.has("mp")?"lobby":null);nt&&x.connect(nt);let j=0;const ct=g.mesh.position.clone();let Y=0;const _t=T=>Math.round(T*100)/100,Et=7,rt=new Ig,Tt=[new bt("slime",14,-39),new bt("slime",-14,-40),new bt("slime",6,-32),new bt("slime",22,-18),new bt("slime",-24,-12),new bt("slime",16,6),new bt("slime",-14,20),new bt("slime",36,4),new bt("slime",-32,16),new bt("slime",4,40),new bt("slime",26,30),new bt("slime",-18,-30),new bt("elite",0,14),new bt("elite",-30,-22),new bt("vine",148,75),new bt("vine",162,88),new bt("vine",133,96),new bt("vine",167,116),new bt("vine",140,127),new bt("vine",155,142),new bt("windGuardian",150,110),new bt("ember",-148,88),new bt("ember",-135,100),new bt("ember",-165,105),new bt("ember",-138,132),new bt("ember",-162,138),new bt("earthGuardian",-150,112),new bt("frost",78,-162),new bt("frost",42,-155),new bt("frost",60,-198),new bt("frost",85,-180),new bt("frost",38,-185),new bt("frostGuardian",60,-170),new bt("deep",-48,222),new bt("deep",-30,238),new bt("deep",-44,242),new bt("voidGuardian",-40,230),new bt("voidLord",0,300),new bt("sand",2180,130),new bt("sand",2222,134),new bt("sand",2166,158),new bt("sand",2234,166),new bt("sand",2196,190),new bt("magmaGuardian",2200,144),new bt("reef",1770,-138),new bt("reef",1812,-134),new bt("reef",1756,-110),new bt("reef",1824,-102),new bt("reef",1786,-82),new bt("coralGuardian",1790,-124),new bt("spore",2100,-208),new bt("spore",2142,-204),new bt("spore",2086,-180),new bt("spore",2154,-172),new bt("spore",2116,-152),new bt("lifeGuardian",2120,-194),new bt("marsh",1722,135),new bt("marsh",1758,138),new bt("marsh",1712,160),new bt("marsh",1768,162),new bt("marsh",1740,188),new bt("brine",1962,228),new bt("brine",1998,230),new bt("brine",1952,252),new bt("brine",2008,252),new bt("brine",1980,278),new bt("solar",2242,-62),new bt("solar",2278,-60),new bt("solar",2232,-38),new bt("solar",2288,-38),new bt("solar",2260,-14)];for(const T of Tt)e.add(T.mesh);Tt.forEach((T,O)=>T.netIndex=O);const ve=Tt[12],et=Tt.find(T=>T.kind==="windGuardian"),mt=Tt.find(T=>T.kind==="earthGuardian"),Nt=Tt.find(T=>T.kind==="frostGuardian"),St=Tt.find(T=>T.kind==="voidGuardian"),Ft=Tt.find(T=>T.kind==="voidLord"),le=Tt.find(T=>T.kind==="magmaGuardian"),Ht=Tt.find(T=>T.kind==="coralGuardian"),Ee=Tt.find(T=>T.kind==="lifeGuardian");let pe=[],re=[],I=[],Le=[],te=null,Me=!1,Lt=!1,ce=!1,zt=!1,Kt=!1,Re=!1,R=!1,M=!1,V=!1,J=0,tt=!1,K=!1,Ut=!1;const z=new cx,dt=new w_,Pt=new lx,at=new xx,$=new hx,kt=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],Bt=25,gt=()=>[z.flameOwned,z.windOwned,z.earthOwned,z.frostOwned,z.tideOwned,z.voidOwned].filter(Boolean).length,qt=()=>kt.filter(T=>$.killsOf(T)>0).length,N=()=>gt()===6&&qt()===kt.length&&g.stats.level>=Bt,xt=T=>T==="small"?"小型":T==="medium"?"中型":"大型",ot=T=>new zn(T.name,T.x,T.z,T.color,()=>{const O=$.get(T.quest),F=bi[T.quest].target;return O==="done"?T.doneLines:O==="active"&&$.huntProgress(T.quest)>=F?($.complete(T.quest),rt.coins+=T.coins,rt.crystals[T.crystalSize]+=T.crystalCount,i.sfx("gem"),it.showToast(`任務完成:${T.title}!獲得 ${T.coins} 貝拉幣 + ${xt(T.crystalSize)}結晶×${T.crystalCount}`),Zt(),[`你把${T.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${T.coins} 貝拉幣和${xt(T.crystalSize)}經驗結晶 ×${T.crystalCount}。`]):O===null?($.accept(T.quest),it.showToast(`接受任務:${T.title}(0/${F})`),T.intro):[`還剩 ${F-$.huntProgress(T.quest)} 隻${T.enemyLabel},加油!`,"打完回來找我領賞!"]}),At=[new zn("村長阿海",2.5,-49.5,9067146,()=>{const T=$.get("gem"),O=$.get("wind"),F=$.get("earth"),st=$.get("frost"),pt=$.get("tide"),ft=$.get("depth"),ie=$.get("final");return ie==="done"?rt.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:ie==="active"&&K?($.complete("final"),rt.coins+=1e3,i.sfx("victory"),it.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Zt(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):ie==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:ft==="done"?($.accept("final"),it.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):ft==="active"&&z.voidOwned?($.complete("depth"),rt.coins+=500,rt.crystals.large+=3,i.sfx("gem"),it.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Zt(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","按 X 可以短距離瞬移,連虛空的力量都為你所用了。"]):ft==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:pt==="done"?($.accept("depth"),it.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):pt==="active"&&z.tideOwned?($.complete("tide"),rt.coins+=300,i.sfx("gem"),it.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Zt(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):pt==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:st==="done"?($.accept("tide"),it.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):st==="active"&&z.frostOwned?($.complete("frost"),rt.coins+=400,rt.crystals.large+=2,i.sfx("gem"),it.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Zt(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","按 V 射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):st==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:F==="done"?($.accept("frost"),it.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):F==="active"&&z.earthOwned?($.complete("earth"),rt.coins+=300,rt.crystals.large+=2,i.sfx("gem"),it.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Zt(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","按 C 可以放出地震波,震飛身邊所有敵人!"]):F==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:O==="done"?($.accept("earth"),it.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):O==="active"&&z.windOwned?($.complete("wind"),rt.coins+=200,rt.crystals.large+=1,i.sfx("gem"),it.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Zt(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):O==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:T==="done"?($.accept("wind"),it.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):T==="active"&&z.flameOwned?($.complete("gem"),rt.coins+=100,rt.crystals.medium+=1,i.sfx("gem"),it.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Zt(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","按 E 就能施放火焰斬,去試試吧!"]):T===null?($.accept("gem"),it.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]}),new zn("漁夫小蝦",-4,-48,4881050,()=>{const T=$.get("jelly");return T==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:T==="active"&&$.jellyProgress()>=xi?($.complete("jelly"),rt.coins+=50,rt.crystals.small+=2,i.sfx("gem"),it.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Zt(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):T===null?($.accept("jelly"),it.showToast(`接受任務:果凍清理(0/${xi})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${xi} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${xi-$.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]}),new zn("商人圓圓",7,-46,13142090,()=>[],"shop"),new zn("鍛造大師爐婆",-150,78,9062954,()=>[],"forge"),ot({name:"獵人小藤",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),ot({name:"礦工岩叔",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),ot({name:"嚮導阿凜",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),ot({name:"觀星者星嵐",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new zn("領航者汐音",230,-95,4889272,()=>rt.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:N()?($.get("sea2")===null&&$.accept("sea2"),$.complete("sea2"),rt.firstSeaGem=!0,rt.secondSeaGem=!0,i.sfx("gem"),f.push("🔱 獲得重要道具【第一海寶石】"),f.push("🌐 獲得重要道具【第二海寶石】"),it.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Zt(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):($.get("sea2")===null&&($.accept("sea2"),it.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${gt()}/6)`,`・擊敗所有種類的敵人(${qt()}/${kt.length} 種)`,`・修煉至 Lv.${Bt}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"])),new zn("鎮長波叔",kn.x,kn.z-36,13148234,()=>{const T=$.get("lava");return T==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:T==="active"&&z.lavaOwned?($.complete("lava"),rt.coins+=600,rt.crystals.large+=2,i.sfx("gem"),it.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Zt(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):T==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:($.accept("lava"),it.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])}),new zn("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const T=$.get("aqua");return T==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:T==="active"&&z.aquaOwned?($.complete("aqua"),rt.coins+=700,rt.crystals.large+=2,i.sfx("gem"),it.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Zt(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 B 就能震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):T==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:($.accept("aqua"),it.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])}),new zn("靈脈守林人葉羅",2098,-162,3846240,()=>{const T=$.get("life");return T==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:T==="active"&&z.lifeOwned?($.complete("life"),rt.coins+=700,rt.crystals.large+=2,i.sfx("gem"),it.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Zt(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):T==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:($.accept("life"),it.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])}),ot({name:"拓荒者沙吉",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),ot({name:"潛水夫阿蚌",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),ot({name:"採集者藤吉",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),ot({name:"沼澤嚮導苔翁",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),ot({name:"鹽工鹵伯",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),ot({name:"拾光人焰娃",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const T of At)e.add(T.mesh);const ht=zx.map(T=>new Bx(T));for(const T of ht)e.add(T.mesh);const Q=[],Rt=T=>{const O=ht.find(F=>F.def.id===T);return O?Qi(O.def.x):1},Xt=T=>{const O=Qi(T.def.x),F=Q.filter(pt=>Rt(pt)===O);let st=`(本海 ${Math.min(F.length+1,mr)}/${mr})`;if(F.length>=mr){const pt=F[0];Q.splice(Q.indexOf(pt),1);const ft=ht.find(ie=>ie.def.id===pt);ft&&(ft.setActive(!1),st=`(已替換本海【${ft.def.island}】)`)}Q.push(T.def.id),T.setActive(!0),i.sfx("shrine"),h.burst(T.mesh.position.clone().setY(T.mesh.position.y+3),8382696,14,6),it.showToast(`重生點已設置:【${T.def.island}】${st}`),Zt()},it=new px(T=>{const O=ht.find(st=>st.active&&st.def.id===T),F=O?`【${O.def.island}】重生點`:"海灘";if(o.settings.deathDrop){for(const st of Object.keys(rt.crystals))rt.crystals[st]-=Math.floor(rt.crystals[st]*kx);it.showToast(`你在${F}醒來,遺失了部分未使用的結晶……`)}else it.showToast(`你在${F}醒來……(死亡掉落已關閉)`);if(g.respawn(),O){const{x:st,z:pt}=O.def;g.mesh.position.set(st,fe(st,pt+2),pt+2),m.place(O.def.boat.x,O.def.boat.z)}else m.resetToDock();u=!1,tt&&ci(!1),it.setDead(!1)}),oe=()=>{const T=[],O=Qi(g.mesh.position.x);for(const F of Q){if(Rt(F)!==O)continue;const st=ht.find(pt=>pt.def.id===F);st&&T.push({id:F,label:`在【${st.def.island}】重生點重生`})}it.setDead(!0,T)},Je=()=>{g.stats.equip=Pt.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},en=()=>{g.hasWindGem=z.isEquipped("wind"),g.hasFrostGem=z.isEquipped("frost"),g.windLevel=z.levels.wind},cn=T=>{z.hasFreeSlot()&&z.equip(T),en()},ps=T=>{dt.hasFreeSlot()&&dt.equip(T)},Cn=()=>{en(),it.setGems(z),it.setFruits(dt),i.sfx("ui"),Zt()},ln=new gx(rt,g.stats,z,dt,Pt,(T,O)=>{const F=rt.useCrystals(T,O);if(F<=0)return;const st=g.stats.addExp(F);st>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,i.sfx("levelup"),it.showToast(`升級!Lv.${g.stats.level},獲得 ${st*3} 點能力點數`),Zt()):(i.sfx("crystal"),it.showToast(`注入 ${F} EXP`))},T=>{g.stats.allocate(T),Zt()},()=>{Je(),i.sfx("ui"),Zt()},T=>Bs(T),()=>Q.filter(T=>Rt(T)===Qi(g.mesh.position.x)).map(T=>{var O;return{id:T,island:((O=ht.find(F=>F.def.id===T))==null?void 0:O.def.island)??T}}),T=>zs(T),Cn);function zs(T){const O=ht.find(pt=>pt.active&&pt.def.id===T);if(!O||g.isDead)return;tt&&ci(!1),u=!1;const{x:F,z:st}=O.def;g.mesh.position.set(F,fe(F,st+2),st+2),m.place(O.def.boat.x,O.def.boat.z),i.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),it.showToast(`傳送至【${O.def.island}】重生點`),ln.isOpen&&ln.toggle(),Zt()}function Bs(T){if(!g.isDead){if(tt&&ci(!1),u=!1,T===2){const O=kn.x,F=kn.z-44;g.mesh.position.set(O,fe(O,F),F),m.place(kn.x+2,kn.z-58),it.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,fe(2.5,-52),-52),m.resetToDock(),it.showToast("海流湧動……回到第一海【曙光嶼】");i.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),ln.isOpen&&ln.toggle(),Zt()}}const En=new Mx(rt,Pt,()=>{i.sfx("coin"),Zt()}),Xn=new Sx(rt,g.stats,z,dt,()=>{i.sfx("anvil"),it.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Zt()},T=>{i.sfx("anvil"),T==="wind"&&(g.windLevel=z.levels.wind),it.showToast(`寶石升階成功!(Lv.${z.levels[T]})`),Zt()},T=>{i.sfx("anvil"),it.showToast(`果實升階成功!(Lv.${dt.levels[T]})`),Zt()}),Di=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:rt.coins,crystals:{...rt.crystals},flameOwned:z.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:rt.potions,quests:$.serialize(),windOwned:z.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:u,earthOwned:z.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:z.frostOwned,tideOwned:z.tideOwned,voidOwned:z.voidOwned,voidDefeated:K,gemLevels:{...z.levels},equipment:Pt.serialize(),shrines:[...Q],seaGems:{first:rt.firstSeaGem,second:rt.secondSeaGem},lavaOwned:z.lavaOwned,aquaOwned:z.aquaOwned,lifeOwned:z.lifeOwned,fruits:{thunderOwned:dt.thunderOwned,gravityOwned:dt.gravityOwned,levels:{...dt.levels}},gemsEquipped:[...z.equipped],fruitsEquipped:[...dt.equipped]}),Zt=()=>ux(Di());setInterval(Zt,12e3);const Yt=dx();if(Yt){g.stats.level=Yt.level,g.stats.exp=Yt.exp,g.stats.points=Yt.points,Object.assign(g.stats.attrs,Yt.attrs),rt.coins=Yt.coins,Object.assign(rt.crystals,Yt.crystals),rt.potions=Yt.potions??0,Yt.quests&&$.restore(Yt.quests),z.flameOwned=Yt.flameOwned,z.windOwned=Yt.windOwned??!1,z.earthOwned=Yt.earthOwned??!1,z.frostOwned=Yt.frostOwned??!1,z.tideOwned=Yt.tideOwned??!1,z.voidOwned=Yt.voidOwned??!1,z.lavaOwned=Yt.lavaOwned??!1,z.aquaOwned=Yt.aquaOwned??!1,z.lifeOwned=Yt.lifeOwned??!1,Yt.fruits&&(dt.thunderOwned=Yt.fruits.thunderOwned,dt.gravityOwned=Yt.fruits.gravityOwned,Object.assign(dt.levels,Yt.fruits.levels)),z.equipped=(Yt.gemsEquipped??$_).filter(T=>z.ownedOf(T)).slice(0,La),dt.equipped=(Yt.fruitsEquipped??__).filter(T=>dt.ownedOf(T)).slice(0,Da),K=Yt.voidDefeated??!1,rt.firstSeaGem=((Vt=Yt.seaGems)==null?void 0:Vt.first)??!1,rt.secondSeaGem=((Ot=Yt.seaGems)==null?void 0:Ot.second)??!1,g.stats.weaponLevel=Yt.weaponLevel??0,Yt.gemLevels&&Object.assign(z.levels,Yt.gemLevels),Yt.equipment&&Pt.restore(Yt.equipment);for(const T of Yt.shrines??[]){const O=ht.find(pt=>pt.def.id===T);if(!O||O.active)continue;const F=Qi(O.def.x);Q.filter(pt=>Rt(pt)===F).length<mr&&(O.setActive(!0),Q.push(T))}Je(),en(),it.setGems(z),it.setFruits(dt),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set(Yt.pos[0],fe(Yt.pos[0],Yt.pos[1]),Yt.pos[1]),Yt.boatPos&&m.place(Yt.boatPos[0],Yt.boatPos[1]),Yt.sailing&&(u=!0),it.showToast("讀取存檔完成")}if(!z.tideOwned){const T=new Dt("gem-tide",Wc.x,Wc.z);e.add(T.mesh),pe.push(T)}const ks=()=>{if(Me||dt.gravityOwned)return;Me=!0;const T=new Dt("fruit-gravity",Xc.x,Xc.z);e.add(T.mesh),pe.push(T)};K&&!dt.gravityOwned&&ks();const ms=document.createElement("div");ms.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(ms);const Pn=document.createElement("div");Pn.id="ending",Pn.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",Pn.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const Li=document.createElement("button");Li.textContent="回去找村長阿海領賞",Li.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",Li.addEventListener("click",()=>{Pn.style.display="none"}),Pn.appendChild(Li),document.body.appendChild(Pn);const ci=T=>{tt=T,g.divingZone=T?dn:null,ms.style.display=T?"block":"none";const O=e.fog;T?(O.color.setHex(1723002),O.near=20,O.far=110,e.background=new It(1723002)):(O.color.setHex(8900331),O.near=150,O.far=650,e.background=new It(8900331))};let Ii=Math.PI,y=.35,B=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});function W(T){const{x:O,z:F}=T.mesh.position,st=[];T===ve&&!z.flameOwned&&!Lt&&(Lt=!0,st.push(new Dt("gem-flame",O,F))),T===et&&!z.windOwned&&!ce&&(ce=!0,st.push(new Dt("gem-wind",O,F))),T===mt&&!z.earthOwned&&!zt&&(zt=!0,st.push(new Dt("gem-earth",O,F))),T===Nt&&!z.frostOwned&&!Kt&&(Kt=!0,st.push(new Dt("gem-frost",O,F))),T===St&&!z.voidOwned&&!Re&&(Re=!0,st.push(new Dt("gem-void",O,F))),T===le&&!z.lavaOwned&&!R&&(R=!0,st.push(new Dt("gem-lava",O,F))),T===Ht&&!z.aquaOwned&&!M&&(M=!0,st.push(new Dt("gem-aqua",O,F))),T===Ee&&!z.lifeOwned&&!V&&(V=!0,st.push(new Dt("gem-life",O,F))),T.kind==="slime"&&$.slimeKills++,$.addKill(T.kind),T.kind==="voidLord"||T.kind==="voidGuardian"?st.push(new Dt("large",O,F),new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="deep"?st.push(new Dt("medium",O,F),new Dt("medium",O,F),new Dt("coin",O,F)):T.kind==="frostGuardian"?st.push(new Dt("large",O,F),new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="frost"?st.push(new Dt("medium",O,F),new Dt("coin",O,F)):T.kind==="earthGuardian"?st.push(new Dt("large",O,F),new Dt("medium",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="ember"?st.push(new Dt("medium",O,F),new Dt("coin",O,F)):T.kind==="magmaGuardian"?st.push(new Dt("large",O,F),new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="sand"?st.push(new Dt("medium",O,F),new Dt("coin",O,F)):T.kind==="coralGuardian"?st.push(new Dt("large",O,F),new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="lifeGuardian"?st.push(new Dt("large",O,F),new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="reef"||T.kind==="spore"?st.push(new Dt("medium",O,F),new Dt("coin",O,F)):T.kind==="windGuardian"?st.push(new Dt("large",O,F),new Dt("coin",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="elite"?st.push(new Dt("medium",O,F),new Dt("small",O,F),new Dt("coin",O,F),new Dt("coin",O,F)):T.kind==="vine"?st.push(new Dt("small",O,F),new Dt("small",O,F),new Dt("coin",O,F)):(st.push(new Dt("small",O,F),new Dt("coin",O,F)),Math.random()<.35&&st.push(new Dt("small",O,F)));for(const pt of st)e.add(pt.mesh),pe.push(pt)}function q(T){if(!x.isHost)for(let O=0;O<Tt.length;O++){const F=O*Et;if(F+Et-1>=T.length)break;const st=Tt[O];if(st.applyNetSnapshot(T[F],T[F+1],T[F+2],T[F+3],T[F+4]===1,T[F+5],T[F+6])){const ft=st.mesh.position;i.sfx("enemyDie"),h.burst(ft.clone().setY(ft.y+1),10217627,16)}}}function k(T,O,F){if(!x.isHost)return;const st=Tt[T];if(!st||st.isDead)return;const pt=st.takeDamage(O),ft=st.mesh.position.clone().setY(st.mesh.position.y+2.4);p.spawn(ft,`-${Math.round(O)}`,"#ffd27a"),pt&&(i.sfx("enemyDie"),h.burst(st.mesh.position.clone().setY(st.mesh.position.y+1),10217627,16),x.sendKill(T,F))}function ut(T,O,F,st){if(!x.isHost)return;const pt=Tt[T];!pt||pt.isDead||(O==="freeze"?pt.freeze(F):O==="burn"?pt.burn(F,st):pt.stun(F))}function Mt(T){let O=g.mesh.position,F=null,st=g.isDead?1/0:T.distanceToSquared(g.mesh.position);for(const[pt,ft]of D){if(ft.dead)continue;const ie=T.distanceToSquared(ft.mesh.position);ie<st&&(st=ie,O=ft.mesh.position,F=pt)}return{pos:O,remoteId:F}}function Ct(T,O,F,st,pt,ft){if(g.isDead)return;const ie=new P(O,F,st),ee=g.takeDamage(T,ie),ze=g.mesh.position.clone().setY(g.mesh.position.y+2.6);ee.blocked?(p.spawn(ze,`格擋 -${ee.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):ee.taken>0&&(p.spawn(ze,`-${ee.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10),pt>0&&g.shove(ie,pt),ft==="chill"?g.chill(3):ft==="burn"&&g.applyBurn(4,Math.max(2,Math.round(T*.15)))),g.isDead&&oe()}const wt=new pd;t.setAnimationLoop(()=>{const T=Math.min(wt.getDelta(),.05),O=wt.getElapsedTime(),F=h.frozen?0:T,st=x.connected&&!x.isHost;for(const X of Tt)X.remote=st;const pt=d.update(T,g.mesh.position,tt);Qi(g.mesh.position.x)===2?v.position.set(kn.x,0,kn.z):v.position.set(75,0,55),lg(v,O,pt.waveScale),i.setRain(pt.raining&&!tt),pt.thunder&&(i.sfx("thunder"),h.shake(.15,.3)),i.setMusicMode(tt?"night":u?"sail":pt.isNight?"night":"day"),it.setEnv(`${pt.isNight?"🌙":"☀️"}${pt.weather==="clear"?"":pt.weather==="rain"?" 🌧️":" ⛈️"}`),!H.isTyping&&C.wasPressed("Enter")&&H.startTyping(),C.suspended=H.isTyping,H.isTyping&&C.clearKeys(),C.wasPressed("Tab")&&(i.sfx("ui"),ln.toggle()),C.wasPressed("Escape")&&(i.sfx("ui"),o.toggle());let ft=null;for(const X of At)X.update(T,g.mesh.position)&&(ft=X);let ie=null;for(const X of ht)X.update(T,g.mesh.position)&&(ie=X);const ee=!u&&!tt&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,ze=u?m.findLandingSpot():null,Dn=u&&z.isEquipped("tide")&&Math.hypot(m.mesh.position.x-dn.x,m.mesh.position.z-dn.z)<dn.r;if(tt?it.setTalkPrompt(!0,"按 F 浮上水面"):Dn?it.setTalkPrompt(!0,"按 F 潛入沉沒古城"):u&&ze?it.setTalkPrompt(!0,"按 F 上岸"):ee?it.setTalkPrompt(!0,"按 F 出海"):ie&&!ie.active&&!u&&!g.isDead&&!at.isOpen?it.setTalkPrompt(!0,"按 F 設置重生點"):it.setTalkPrompt(ft!==null&&!at.isOpen&&!En.isOpen&&!Xn.isOpen&&!g.isDead&&!u,(ft==null?void 0:ft.role)==="shop"?"按 F 交易":(ft==null?void 0:ft.role)==="forge"?"按 F 鍛造":"按 F 對話"),C.wasPressed("KeyF")&&(En.isOpen?En.close():Xn.isOpen?Xn.close():at.isOpen?at.advance():tt?(ci(!1),u=!0,i.sfx("dive"),Zt()):u?Dn?(u=!1,ci(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),i.sfx("dive"),it.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):ze&&(u=!1,g.mesh.position.copy(ze),i.sfx("ui"),Zt()):ee?(u=!0,g.blocking=!1,i.sfx("ui"),it.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):ie&&!ie.active&&!g.isDead?Xt(ie):ft&&!g.isDead&&(i.sfx("ui"),ft.role==="shop"?En.open():ft.role==="forge"?Xn.open():at.open(ft.name,ft.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*F),u?(m.sail(F,C,pt.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(F),!u&&!g.isDead&&!ln.isOpen&&!at.isOpen&&!En.isOpen&&!Xn.isOpen&&!o.isOpen){const{attacked:X,spin:$t,chargeReady:he,jumped:hn,dodged:We}=g.update(F,C,Ii);hn&&i.sfx("jump"),We&&i.sfx("dodge"),he&&i.sfx("chargeReady");const _n=(Jt,Qt,Wt)=>{const ue=Jt.takeDamage(Qt,Wt),Ce=Jt.mesh.position.clone().setY(Jt.mesh.position.y+1);p.spawn(Ce.clone().setY(Ce.y+1.2),String(Qt),"#ffd23c"),h.burst(Ce,ue?10217627:16769162,ue?16:8),h.hitstop(ue?.1:.05),h.shake(ue?.28:.12,.18),i.sfx(ue?"enemyDie":"hit"),ue&&W(Jt)};if(X){i.sfx("swing");const Jt=new P(Math.sin(g.facing),0,Math.cos(g.facing));for(const Qt of Tt){if(Qt.isDead)continue;const Wt=new P().subVectors(Qt.mesh.position,g.mesh.position);Wt.y=0;const ue=Wt.length();ue>$g||ue>.5&&Wt.clone().normalize().dot(Jt)<Kg||_n(Qt,g.stats.atk,Wt)}}if($t!==null){i.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const Jt=Math.round(g.stats.atk*(1+1.5*$t));for(const Qt of Tt){if(Qt.isDead)continue;const Wt=new P().subVectors(Qt.mesh.position,g.mesh.position);Wt.y=0,!(Wt.length()>jg)&&_n(Qt,Jt,Wt)}if($t>=1){i.sfx("wave");const Qt=new Es(g.mesh.position,g.facing,Jt);e.add(Qt.mesh),re.push(Qt)}}if(C.wasPressed("KeyE")&&z.isEquipped("flame")&&!g.blocking&&g.mp>=xl){g.mp-=xl,i.sfx("fire");const Jt=new Es(g.mesh.position,g.facing,K_(g.stats.attrs.spirit,z.levels.flame),{color:16742972,lifetime:.45,speed:18});e.add(Jt.mesh),re.push(Jt);const Qt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(Qt,16742972,12,6)}if(C.wasPressed("KeyR")&&rt.potions>0&&g.hp<g.stats.maxHP&&(rt.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),i.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),C.wasPressed("KeyC")&&z.isEquipped("earth")&&!g.blocking&&g.mp>=vl){g.mp-=vl,i.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const Jt=j_(g.stats.attrs.spirit,z.levels.earth),Qt=Z_(z.levels.earth);for(const Wt of Tt){if(Wt.isDead)continue;const ue=new P().subVectors(Wt.mesh.position,g.mesh.position);ue.y=0,!(ue.length()>Qt)&&_n(Wt,Jt,ue)}}if(C.wasPressed("KeyV")&&z.isEquipped("frost")&&!g.blocking&&g.mp>=Ml){g.mp-=Ml,i.sfx("ice");const Jt=new Es(g.mesh.position,g.facing,J_(g.stats.attrs.spirit,z.levels.frost),{color:10149119,lifetime:.7,speed:26,freezes:!0});e.add(Jt.mesh),re.push(Jt)}if(C.wasPressed("KeyX")&&z.isEquipped("void")&&g.mp>=go){const Jt=Math.sin(g.facing),Qt=Math.cos(g.facing),Wt=g.mesh.position.clone();for(let ue=tx(z.levels.void);ue>=2;ue-=2){const Ce=Wt.x+Jt*ue,nn=Wt.z+Qt*ue;if(ca(Ce,nn)||z.isEquipped("frost")&&g.mp>go||tt&&Math.hypot(Ce-dn.x,nn-dn.z)<dn.r){g.mp-=go,i.sfx("blink"),h.burst(Wt.clone().setY(Wt.y+1),9063144,10,5),g.blinkTo(Ce,nn),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),9063144,10,5);break}}}if(C.wasPressed("KeyG")&&z.isEquipped("lava")&&!g.blocking&&g.mp>=yl){g.mp-=yl,i.sfx("lava");const Jt=new Es(g.mesh.position,g.facing,ex(g.stats.attrs.spirit,z.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});e.add(Jt.mesh),re.push(Jt);const Qt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(Qt,16730652,16,7)}if(C.wasPressed("KeyB")&&z.isEquipped("aqua")&&!g.blocking&&g.mp>=Sl){g.mp-=Sl,i.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const Jt=ix(g.stats.attrs.spirit,z.levels.aqua),Qt=rx(z.levels.aqua),Wt=sx(z.levels.aqua);for(const ue of Tt){if(ue.isDead)continue;const Ce=new P().subVectors(ue.mesh.position,g.mesh.position);Ce.y=0,!(Ce.length()>Qt)&&(_n(ue,Jt,Ce),ue.isDead||ue.freeze(Wt))}}if(C.wasPressed("KeyH")&&z.isEquipped("life")&&!g.blocking&&g.mp>=bl){g.mp-=bl,i.sfx("life");const Jt=new Es(g.mesh.position,g.facing,ox(g.stats.attrs.spirit,z.levels.life),{color:5957722,lifetime:.7,speed:22,leech:ax(z.levels.life)});e.add(Jt.mesh),re.push(Jt)}if(C.wasPressed("KeyZ")&&dt.isEquipped("thunder")&&!g.blocking&&g.mp>=hl){let Jt=null,Qt=p_;for(const Wt of Tt){if(Wt.isDead)continue;const ue=Wt.mesh.position.distanceTo(g.mesh.position);ue<Qt&&(Qt=ue,Jt=Wt)}if(Jt){g.mp-=hl,i.sfx("thunder");const Wt=v_(dt.levels.thunder),ue=M_(dt.levels.thunder),Ce=x_(g.stats.attrs.spirit,dt.levels.thunder),nn=new Set,Yn=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let $n=Jt,xn=Ce;for(;$n&&nn.size<Wt;){const vn=$n;nn.add(vn);const Ia=Math.round(xn),vh=new P().subVectors(vn.mesh.position,g.mesh.position),gs=vn.takeDamage(Ia,vh);gs||vn.stun(ue);const Gs=vn.mesh.position.clone().setY(vn.mesh.position.y+1);Yn.push(Gs.clone()),p.spawn(Gs.clone().setY(Gs.y+1.4),String(Ia),"#bfe8ff"),h.burst(Gs,gs?10217627:12577023,gs?16:8),i.sfx(gs?"enemyDie":"hit"),gs&&W(vn);let Ua=null,Na=m_;for(const Hs of Tt){if(Hs.isDead||nn.has(Hs))continue;const Oa=Hs.mesh.position.distanceTo(vn.mesh.position);Oa<Na&&(Na=Oa,Ua=Hs)}$n=Ua,xn*=g_}const Kn=new A_(Yn);e.add(Kn.group),Le.push(Kn),h.shake(.2,.16)}}if(C.wasPressed("KeyT")&&dt.isEquipped("gravity")&&!g.blocking&&g.mp>=ul){g.mp-=ul,i.sfx("vortex");const Jt=g.mesh.position.x+Math.sin(g.facing)*dl,Qt=g.mesh.position.z+Math.cos(g.facing)*dl,Wt=new T_(Jt,Qt,S_(dt.levels.gravity),b_(dt.levels.gravity),y_(g.stats.attrs.spirit,dt.levels.gravity));e.add(Wt.mesh),I.push(Wt),h.burst(new P(Jt,fe(Jt,Qt)+1,Qt),11559167,14,6)}}!u&&!g.isDead&&vg(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-fe(g.mesh.position.x,g.mesh.position.z)<.5?(J+=F,J>=.8&&(J=0,g.applyEnvironmentDamage(6),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),i.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&oe())):J=0;const He=!u&&!tt&&!g.isDead&&z.isEquipped("frost")&&!ca(g.mesh.position.x,g.mesh.position.z);if(w.visible=He,He&&(w.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=W_*F,g.mp<=0)){g.mp=0,i.sfx("shatter"),it.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const X=U(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(X.x,fe(X.x,X.z),X.z),g.isDead&&oe()}for(const X of Tt){if(st){X.updateRemote(F);continue}const $t=(X.kind==="deep"||X.kind==="voidGuardian")&&!tt,he=x.isHost&&D.size>0?Mt(X.mesh.position):null,hn=he?he.pos:g.mesh.position,We=he?he.remoteId:null,_n=$t||(We===null?g.isDead:!1),Jt=X.update(F,hn,_n),Qt=X.mesh.position;if(Jt>0&&!_n)if(We!==null)x.sendPlayerDamage(We,Jt,Qt.x,Qt.y,Qt.z,0,"");else{const Ce=g.takeDamage(Jt,Qt),nn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Ce.blocked?(p.spawn(nn,`格擋 -${Ce.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):Ce.taken>0&&(p.spawn(nn,`-${Ce.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&oe()}const Wt=X.specialEvent;if(Wt){X.specialEvent=null;const Ce=X.mesh.position.clone().setY(X.mesh.position.y+3.2);p.spawn(Ce,`⚡${Wt.name}`,"#ffd23c"),i.sfx(Wt.sfx),h.shake(.3,.25),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+.6),Wt.color,24,9),Wt.healed>0&&p.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),`+${Wt.healed}`,"#7be87b");const nn=Wt.radius*Wt.radius;if(!g.isDead){const Yn=g.mesh.position.x-Qt.x,$n=g.mesh.position.z-Qt.z;if(Yn*Yn+$n*$n<=nn){const xn=g.takeDamage(Wt.dmg,X.mesh.position),Kn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);xn.blocked?(p.spawn(Kn,`格擋 -${xn.taken}`,"#cfd8e8"),i.sfx("block")):xn.taken>0&&(p.spawn(Kn,`-${xn.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),Wt.color,12),g.shove(X.mesh.position,Wt.knock),Wt.effect==="chill"?g.chill(3):Wt.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(Wt.dmg*.15)))),g.isDead&&oe()}}if(x.isHost){const Yn=Wt.effect==="chill"?"chill":Wt.effect==="burn"?"burn":"";for(const[$n,xn]of D){if(xn.dead)continue;const Kn=xn.mesh.position.x-Qt.x,vn=xn.mesh.position.z-Qt.z;Kn*Kn+vn*vn<=nn&&x.sendPlayerDamage($n,Wt.dmg,Qt.x,Qt.y,Qt.z,Wt.knock,Yn)}}}const ue=X.tickBurn(F);if(ue>0&&!X.isDead){const Ce=X.takeDamage(ue);p.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),String(ue),"#ff7a3c"),Ce&&(i.sfx("enemyDie"),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+1),10217627,16),W(X))}}const Ln=g.tickBurn(F);Ln>0&&!g.isDead&&(g.applyEnvironmentDamage(Ln),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${Ln}`,"#ff7a3c"),g.isDead&&oe());for(const X of S){if(!X.active){if(X.respawnT-=F,X.respawnT<=0){const $t=E();X.place($t.x,$t.z)}continue}if(X.update(F,m.mesh.position,u)){X.collect(),i.sfx("gem");const $t=Math.random();if($t<.5){const he=20+Math.floor(Math.random()*41);rt.coins+=he,it.showToast(`漂流寶箱:獲得 ${he} 貝拉幣!`)}else if($t<.75){const he=2+Math.floor(Math.random()*2);rt.crystals.small+=he,it.showToast(`漂流寶箱:獲得小型經驗結晶 ×${he}!`)}else $t<.9?(rt.crystals.medium+=1,it.showToast("漂流寶箱:獲得中型經驗結晶!")):(rt.potions+=1,it.showToast("漂流寶箱:獲得回復藥水!"));h.burst(X.mesh.position.clone().setY(1.2),16769152,14,6),ln.render()}}if(re=re.filter(X=>{const $t=X.update(F,Tt);for(const he of $t){const hn=new P().subVectors(he.mesh.position,g.mesh.position);hn.y=0;const We=he.takeDamage(X.damage,hn);if(X.freezes&&!We&&he.freeze(Q_(z.levels.frost)),X.burns&&!We&&he.burn(X_,nx(z.levels.lava)),X.leech>0&&g.hp<g.stats.maxHP){const Jt=Math.max(1,Math.round(X.damage*X.leech));g.hp=Math.min(g.stats.maxHP,g.hp+Jt),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${Jt}`,"#7be87b")}const _n=he.mesh.position.clone().setY(he.mesh.position.y+1);p.spawn(_n.clone().setY(_n.y+1.2),String(X.damage),"#7fe8ff"),h.burst(_n,We?10217627:8382719,We?16:8),i.sfx(We?"enemyDie":"hit"),We&&W(he)}return X.expired?(e.remove(X.mesh),X.dispose(),!1):!0}),I=I.filter(X=>{const $t=X.update(F,Tt);for(const he of $t){const hn=he.takeDamage(X.damage),We=he.mesh.position.clone().setY(he.mesh.position.y+1);p.spawn(We.clone().setY(We.y+1.2),String(X.damage),"#d8b0ff"),h.burst(We,hn?10217627:11559167,hn?16:6),hn&&(i.sfx("enemyDie"),W(he))}return X.expired?(e.remove(X.mesh),X.dispose(),!1):!0}),Le=Le.filter(X=>(X.update(F),X.expired?(e.remove(X.group),X.dispose(),!1):!0)),!dt.thunderOwned){const X=d.weather==="storm";X&&!te?(te=new Dt("fruit-thunder",qc.x,qc.z),e.add(te.mesh),pe.push(te)):!X&&te&&(e.remove(te.mesh),pe=pe.filter($t=>$t!==te),te=null)}pe=pe.filter(X=>{if(g.isDead)return!0;const $t=X.update(F,g.mesh.position);if($t){if(X.kind==="coin")rt.coins+=8,f.push("🪙 獲得 8 貝拉幣"),i.sfx("coin");else if(X.kind==="gem-flame")f.push("🔥 獲得靈紋寶石【焰心石】"),z.flameOwned=!0,cn("flame"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Zt();else if(X.kind==="gem-wind")f.push("🌪️ 獲得靈紋寶石【風語石】"),z.windOwned=!0,cn("wind"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Zt();else if(X.kind==="gem-earth")f.push("🪨 獲得靈紋寶石【地殼石】"),z.earthOwned=!0,cn("earth"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Zt();else if(X.kind==="gem-frost")f.push("❄️ 獲得靈紋寶石【霜語晶】"),z.frostOwned=!0,cn("frost"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Zt();else if(X.kind==="gem-tide")f.push("🌊 獲得靈紋寶石【潮汐石】"),z.tideOwned=!0,cn("tide"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Zt();else if(X.kind==="gem-void")f.push("🌀 獲得靈紋寶石【虛空石】"),z.voidOwned=!0,cn("void"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Zt();else if(X.kind==="gem-lava")f.push("🌋 獲得靈紋寶石【溶岩石】"),z.lavaOwned=!0,cn("lava"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Zt();else if(X.kind==="gem-aqua")f.push("💧 獲得靈紋寶石【碧波石】"),z.aquaOwned=!0,cn("aqua"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Zt();else if(X.kind==="gem-life")f.push("🌿 獲得靈紋寶石【翠生石】"),z.lifeOwned=!0,cn("life"),it.setGems(z),i.sfx("gem"),it.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Zt();else if(X.kind==="fruit-thunder")f.push("⚡ 獲得靈樹果實【雷光果】"),dt.thunderOwned=!0,ps("thunder"),te=null,it.setFruits(dt),i.sfx("gem"),it.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Zt();else if(X.kind==="fruit-gravity")f.push("🌀 獲得靈樹果實【引力果】"),dt.gravityOwned=!0,ps("gravity"),it.setFruits(dt),i.sfx("gem"),it.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Zt();else{rt.crystals[X.kind]++;const he=X.kind==="small"?"小型":X.kind==="medium"?"中型":"大型";f.push(`💎 獲得${he}經驗結晶`),i.sfx("crystal")}e.remove(X.mesh),ln.render()}return!$t}),C.rightDown&&(Ii-=C.dx*.005,y=Us.clamp(y+C.dy*.004,.05,1.2)),B=Us.clamp(B+C.wheel*.01,6,18);const ye=g.mesh.position.clone().add(new P(0,2,0)),Be=new P(ye.x+Math.sin(Ii)*Math.cos(y)*B,ye.y+Math.sin(y)*B,ye.z+Math.cos(Ii)*Math.cos(y)*B);Be.y=Math.max(Be.y,fe(Be.x,Be.z)+.6);const Qe=1-Math.exp(-12*T);n.position.lerp(Be,Qe),n.position.add(h.update(T)),n.lookAt(ye);const _e=[];if($.get("gem")==="active"&&_e.push(z.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),$.get("jelly")==="active"){const X=$.jellyProgress();_e.push(X>=xi?"果凍清理:回報漁夫小蝦":`果凍清理:${X}/${xi}`)}$.get("wind")==="active"&&_e.push(z.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),$.get("earth")==="active"&&_e.push(z.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),$.get("frost")==="active"&&_e.push(z.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),$.get("tide")==="active"&&_e.push(z.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),$.get("depth")==="active"&&_e.push(z.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),$.get("final")==="active"&&_e.push(K?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),$.get("sea2")==="active"&&_e.push(N()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${gt()}/6・圖鑑${qt()}/${kt.length}・Lv.${g.stats.level}/${Bt}`),$.get("lava")==="active"&&_e.push(z.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),$.get("aqua")==="active"&&_e.push(z.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),$.get("life")==="active"&&_e.push(z.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const Ve=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const X of Ve){if($.get(X.id)!=="active")continue;const $t=$.huntProgress(X.id);_e.push($t>=bi[X.id].target?`${X.title}:回報${X.npc}`:`${X.title}:${$t}/${bi[X.id].target}`)}if(it.setQuests(_e),!Ut&&Ft.isDead&&(Ut=!0,K=!0,ks(),i.sfx("victory"),Pn.style.display="flex",Zt()),a.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),a.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!u&&!g.isDead&&g.chargeRatio>=1){if(_+=T,_>=.16){_=0;const X=g.mesh.position.clone().add(new P(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(X,13625599,3,2.5)}}else _=0;for(const X of D.values())X.update(T);if(j+=T,j>=.05){j=0;const X=g.mesh.position,$t=(X.x-ct.x)**2+(X.z-ct.z)**2;ct.copy(X);const he=(g.attacking?1:0)|(g.blocking?2:0)|(g.airborne?4:0)|(g.hurtT>0?8:0),hn={x:X.x,y:X.y,z:X.z,facing:g.facing,moving:$t>1e-5,act:he,dead:g.isDead};x.sendState(hn)}if(st)for(const X of Tt){const $t=X.netIndex;X.pendingNetDamage>0&&(x.sendHit($t,Math.round(X.pendingNetDamage)),X.pendingNetDamage=0),X.pendingNetFreeze>0&&(x.sendCc($t,"freeze",X.pendingNetFreeze,0),X.pendingNetFreeze=0),X.pendingNetStun>0&&(x.sendCc($t,"stun",X.pendingNetStun,0),X.pendingNetStun=0),X.pendingNetBurnSec>0&&(x.sendCc($t,"burn",X.pendingNetBurnSec,X.pendingNetBurnDps),X.pendingNetBurnSec=0,X.pendingNetBurnDps=0)}else if(x.isHost&&D.size>0&&(Y+=T,Y>=.08)){Y=0;const X=[];for(const $t of Tt){const he=$t.mesh.position;X.push(_t(he.x),_t(he.y),_t(he.z),_t($t.mesh.rotation.y),$t.isDead?1:0,$t.hp,$t.statusFlag)}x.sendEnemies(X)}p.update(T,n),it.update(g,rt),C.endFrame(),t.render(e,n)})}Gx();
