var ch=Object.defineProperty;var hh=(i,t,e)=>t in i?ch(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var R=(i,t,e)=>hh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="177",uh=0,Po=1,dh=2,Sc=1,bc=2,Ln=3,Jn=0,$e=1,Qe=2,Kn=0,Qi=1,Do=2,Lo=3,Io=4,fh=5,gi=100,ph=101,mh=102,gh=103,_h=104,xh=200,vh=201,Mh=202,yh=203,da=204,fa=205,Sh=206,bh=207,wh=208,Eh=209,Th=210,Ah=211,Rh=212,Ch=213,Ph=214,pa=0,ma=1,ga=2,is=3,_a=4,xa=5,va=6,Ma=7,wc=0,Dh=1,Lh=2,jn=0,Ih=1,Uh=2,Nh=3,Fh=4,Oh=5,zh=6,Bh=7,Ec=300,ss=301,rs=302,ya=303,Sa=304,br=306,ba=1e3,xi=1001,wa=1002,Ke=1003,kh=1004,zs=1005,Sn=1006,Cr=1007,vi=1008,bn=1009,Tc=1010,Ac=1011,Es=1012,so=1013,Si=1014,Un=1015,Ds=1016,ro=1017,ao=1018,Ts=1020,Rc=35902,Cc=1021,Pc=1022,vn=1023,As=1026,Rs=1027,oo=1028,lo=1029,Dc=1030,co=1031,ho=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ea=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,za=37814,Ba=37815,ka=37816,Ga=37817,Ha=37818,Va=37819,Wa=37820,qa=37821,mr=36492,Xa=36494,Ya=36495,Lc=36283,$a=36284,Ka=36285,ja=36286,Gh=3200,Hh=3201,Ic=0,Vh=1,$n="",on="srgb",as="srgb-linear",_r="linear",ye="srgb",Li=7680,Uo=519,Wh=512,qh=513,Xh=514,Uc=515,Yh=516,$h=517,Kh=518,jh=519,Za=35044,No="300 es",Nn=2e3,xr=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const bs=Math.PI/180,Cs=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function uo(i,t){return(i%t+t)%t}function Zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function tu(i,t=1){return t-Math.abs(uo(i,t*2)-t)}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function su(i,t){return i+Math.random()*(t-i)}function ru(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(Fo=i);let t=Fo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(i){return i*bs}function lu(i){return i*Cs}function cu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ps={DEG2RAD:bs,RAD2DEG:Cs,generateUUID:Fn,clamp:ae,euclideanModulo:uo,mapLinear:Zh,inverseLerp:Jh,lerp:ws,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Me,denormalize:xn};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const p=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==p||c!==f||d!==_){let m=1-o;const u=l*p+c*f+d*_+h*x,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const F=Math.sqrt(E),C=Math.atan2(F,u*w);m=Math.sin(m*C)/F,o=Math.sin(o*C)/F}const S=o*w;if(l=l*m+p*S,c=c*m+f*S,d=d*m+_*S,h=h*m+x*S,m===1-o){const F=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=F,c*=F,d*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*f-c*p,t[e+1]=l*_+d*p+c*h-o*f,t[e+2]=c*_+d*f+o*p-l*h,t[e+3]=d*_-o*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),p=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"YXZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"ZXY":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"ZYX":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"YZX":this._x=p*d*h+c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h-p*f*_;break;case"XZY":this._x=p*d*h-c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pr.copy(this).projectOnVector(t),this.sub(Pr)}reflect(t){return this.sub(Pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new D,Oo=new Ls;class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],f=n[5],_=n[8],x=s[0],m=s[3],u=s[6],w=s[1],E=s[4],S=s[7],F=s[2],C=s[5],g=s[8];return r[0]=a*x+o*w+l*F,r[3]=a*m+o*E+l*C,r[6]=a*u+o*S+l*g,r[1]=c*x+d*w+h*F,r[4]=c*m+d*E+h*C,r[7]=c*u+d*S+h*g,r[2]=p*x+f*w+_*F,r[5]=p*m+f*E+_*C,r[8]=p*u+f*S+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,p=o*l-d*r,f=c*r-a*l,_=e*h+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(o*n-s*a)*x,t[3]=p*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new Qt;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=vr("canvas");return i.style.display="block",i}const zo={};function ts(i){i in zo||(zo[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bo=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){const i={enabled:!0,workingColorSpace:as,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?_r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[as]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:Bo,fromXYZ:ko,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Bo,fromXYZ:ko,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const pe=_u();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class xu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=vr("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vu=0;class fo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mu=0;const Ir=new D;class We extends ls{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=xi,s=xi,r=Sn,a=vi,o=vn,l=bn,c=We.DEFAULT_ANISOTROPY,d=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Fn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ir).x}get height(){return this.source.getSize(Ir).y}get depth(){return this.source.getSize(Ir).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Ec;We.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(f+1)/2,F=(u+1)/2,C=(d+p)/4,g=(h+x)/4,L=(_+m)/4;return E>S&&E>F?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=g/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=L/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=g/r,s=L/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(p-d)/w,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends ls{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new fo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fc extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ks.subVectors(this.max,fs),Ui.subVectors(t.a,fs),Ni.subVectors(t.b,fs),Fi.subVectors(t.c,fs),Hn.subVectors(Ni,Ui),Vn.subVectors(Fi,Ni),ai.subVectors(Ui,Fi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!Ur(e,Ui,Ni,Fi,ks)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,Ui,Ni,Fi,ks))?!1:(Gs.crossVectors(Hn,Vn),e=[Gs.x,Gs.y,Gs.z],Ur(e,Ui,Ni,Fi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Bs=new Is,Ui=new D,Ni=new D,Fi=new D,Hn=new D,Vn=new D,ai=new D,fs=new D,ks=new D,Gs=new D,oi=new D;function Ur(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),d=n.dot(oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const bu=new Is,ps=new D,Nr=new D;class wr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Nr)),this.expandByPoint(ps.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const An=new D,Fr=new D,Hs=new D,Wn=new D,Or=new D,Vs=new D,zr=new D;class Oc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fr.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=Wn.dot(this.direction),l=-Wn.dot(Hs),c=Wn.lengthSq(),d=Math.abs(1-a*a);let h,p,f,_;if(d>0)if(h=a*l-o,p=a*o-l,_=r*d,h>=0)if(p>=-_)if(p<=_){const x=1/d;h*=x,p*=x,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fr).addScaledVector(Hs,p),f}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){Or.subVectors(e,t),Vs.subVectors(n,t),zr.crossVectors(Or,Vs);let a=this.direction.dot(zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);const l=o*this.direction.dot(Vs.crossVectors(Wn,Vs));if(l<0)return null;const c=o*this.direction.dot(Or.cross(Wn));if(c<0||l+c>a)return null;const d=-o*Wn.dot(zr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m)}set(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p+x*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=f*o-_,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p-x*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*d,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=_*c-f,e[8]=p*c+x,e[1]=l*h,e[5]=x*c+p,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=x-p*h,e[8]=_*h+f,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*h+_,e[10]=p-x*h}else if(t.order==="XZY"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+x,e[5]=a*d,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*d,e[10]=x*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Eu)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),qn.crossVectors(n,tn),qn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),qn.crossVectors(n,tn)),qn.normalize(),Ws.crossVectors(tn,qn),s[0]=qn.x,s[4]=Ws.x,s[8]=tn.x,s[1]=qn.y,s[5]=Ws.y,s[9]=tn.y,s[2]=qn.z,s[6]=Ws.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],f=n[13],_=n[2],x=n[6],m=n[10],u=n[14],w=n[3],E=n[7],S=n[11],F=n[15],C=s[0],g=s[4],L=s[8],y=s[12],M=s[1],U=s[5],Y=s[9],q=s[13],Q=s[2],it=s[6],J=s[10],ot=s[14],k=s[3],at=s[7],wt=s[11],Nt=s[15];return r[0]=a*C+o*M+l*Q+c*k,r[4]=a*g+o*U+l*it+c*at,r[8]=a*L+o*Y+l*J+c*wt,r[12]=a*y+o*q+l*ot+c*Nt,r[1]=d*C+h*M+p*Q+f*k,r[5]=d*g+h*U+p*it+f*at,r[9]=d*L+h*Y+p*J+f*wt,r[13]=d*y+h*q+p*ot+f*Nt,r[2]=_*C+x*M+m*Q+u*k,r[6]=_*g+x*U+m*it+u*at,r[10]=_*L+x*Y+m*J+u*wt,r[14]=_*y+x*q+m*ot+u*Nt,r[3]=w*C+E*M+S*Q+F*k,r[7]=w*g+E*U+S*it+F*at,r[11]=w*L+E*Y+S*J+F*wt,r[15]=w*y+E*q+S*ot+F*Nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],f=t[14],_=t[3],x=t[7],m=t[11],u=t[15];return _*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*f-n*l*f)+x*(+e*l*f-e*c*p+r*a*p-s*a*f+s*c*d-r*l*d)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*p+s*a*h-n*a*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],f=t[11],_=t[12],x=t[13],m=t[14],u=t[15],w=h*m*c-x*p*c+x*l*f-o*m*f-h*l*u+o*p*u,E=_*p*c-d*m*c-_*l*f+a*m*f+d*l*u-a*p*u,S=d*x*c-_*h*c+_*o*f-a*x*f-d*o*u+a*h*u,F=_*h*l-d*x*l-_*o*p+a*x*p+d*o*m-a*h*m,C=e*w+n*E+s*S+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/C;return t[0]=w*g,t[1]=(x*p*r-h*m*r-x*s*f+n*m*f+h*s*u-n*p*u)*g,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*u+n*l*u)*g,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*f-n*l*f)*g,t[4]=E*g,t[5]=(d*m*r-_*p*r+_*s*f-e*m*f-d*s*u+e*p*u)*g,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*u-e*l*u)*g,t[7]=(a*p*r-d*l*r+d*s*c-e*p*c-a*s*f+e*l*f)*g,t[8]=S*g,t[9]=(_*h*r-d*x*r-_*n*f+e*x*f+d*n*u-e*h*u)*g,t[10]=(a*x*r-_*o*r+_*n*c-e*x*c-a*n*u+e*o*u)*g,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*f-e*o*f)*g,t[12]=F*g,t[13]=(d*x*s-_*h*s+_*n*p-e*x*p-d*n*m+e*h*m)*g,t[14]=(_*o*s-a*x*s-_*n*l+e*x*l+a*n*m-e*o*m)*g,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*p+e*o*p)*g,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,p=r*c,f=r*d,_=r*h,x=a*d,m=a*h,u=o*h,w=l*c,E=l*d,S=l*h,F=n.x,C=n.y,g=n.z;return s[0]=(1-(x+u))*F,s[1]=(f+S)*F,s[2]=(_-E)*F,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(p+u))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(_+E)*g,s[9]=(m-w)*g,s[10]=(1-(p+x))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/r,d=1/a,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=d,gn.elements[5]*=d,gn.elements[6]*=d,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let f,_;if(o===Nn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===xr)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),p=(e+t)*c,f=(n+s)*d;let _,x;if(o===Nn)_=(a+r)*h,x=-2*h;else if(o===xr)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new D,gn=new Te,wu=new D(0,0,0),Eu=new D(1,1,1),qn=new D,Ws=new D,tn=new D,Go=new Te,Ho=new Ls;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tu=0;const Vo=new D,zi=new Ls,Rn=new Te,qs=new D,ms=new D,Au=new D,Ru=new Ls,Wo=new D(1,0,0),qo=new D(0,1,0),Xo=new D(0,0,1),Yo={type:"added"},Cu={type:"removed"},Bi={type:"childadded",child:null},Br={type:"childremoved",child:null};class Ne extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new D,e=new zn,n=new Ls,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,e){return Vo.copy(t).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ms,qs,this.up):Rn.lookAt(qs,ms,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Rn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yo),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yo),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new D,Cn=new D,kr=new D,Pn=new D,ki=new D,Gi=new D,$o=new D,Gr=new D,Hr=new D,Vr=new D,Wr=new Ce,qr=new Ce,Xr=new Ce;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Cn.subVectors(n,e),kr.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(Cn),l=_n.dot(kr),c=Cn.dot(Cn),d=Cn.dot(kr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,f=(c*l-o*d)*p,_=(a*d-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wr.setScalar(0),qr.setScalar(0),Xr.setScalar(0),Wr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Cn.subVectors(t,e),_n.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),_n.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),Gi.subVectors(r,n),Gr.subVectors(t,n);const l=ki.dot(Gr),c=Gi.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,s);const d=ki.dot(Hr),h=Gi.dot(Hr);if(d>=0&&h<=d)return e.copy(s);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ki,a);Vr.subVectors(t,r);const f=ki.dot(Vr),_=Gi.dot(Vr);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Gi,o);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return $o.subVectors(r,s),o=(h-d)/(h-d+(f-_)),e.copy(s).addScaledVector($o,o);const u=1/(m+x+p);return a=x*u,o=p*u,e.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=uo(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yr(a,r,t+1/3),this.g=Yr(a,r,t),this.b=Yr(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return pe.workingToColorSpace(Ve.copy(this),t),Math.round(ae(Ve.r*255,0,255))*65536+Math.round(ae(Ve.g*255,0,255))*256+Math.round(ae(Ve.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=on){pe.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Xs);const n=ws(Xn.h,Xs.h,e),s=ws(Xn.s,Xs.s,e),r=ws(Xn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Ut;Ut.NAMES=Bc;let Pu=0;class Ti extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sn extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new D,Ys=new jt;let Du=0;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class kc extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gc extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lu=0;const rn=new Te,$r=new Ne,Hi=new D,en=new Is,gs=new Is,Be=new D;class ke extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Gc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(en.min,gs.min),en.expandByPoint(Be),Be.addVectors(en.max,gs.max),en.expandByPoint(Be)):(en.expandByPoint(gs.min),en.expandByPoint(gs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Be.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(t,c),Be.add(Hi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const c=new D,d=new D,h=new D,p=new jt,f=new jt,_=new jt,x=new D,m=new D;function u(L,y,M){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),d.sub(c),h.sub(c),f.sub(p),_.sub(p);const U=1/(f.x*_.y-_.x*f.y);isFinite(U)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(U),o[L].add(x),o[y].add(x),o[M].add(x),l[L].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,y=w.length;L<y;++L){const M=w[L],U=M.start,Y=M.count;for(let q=U,Q=U+Y;q<Q;q+=3)u(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const E=new D,S=new D,F=new D,C=new D;function g(L){F.fromBufferAttribute(s,L),C.copy(F);const y=o[L];E.copy(y),E.sub(F.multiplyScalar(F.dot(y))).normalize(),S.crossVectors(C,y);const U=S.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,U)}for(let L=0,y=w.length;L<y;++L){const M=w[L],U=M.start,Y=M.count;for(let q=U,Q=U+Y;q<Q;q+=3)g(t.getX(q+0)),g(t.getX(q+1)),g(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,h=new D;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let u=0;u<d;u++)p[_++]=c[f++]}return new nn(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new Te,li=new Oc,$s=new wr,jo=new D,Ks=new D,js=new D,Zs=new D,Kr=new D,Js=new D,Zo=new D,Qs=new D;class nt extends Ne{constructor(t=new ke,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Kr.fromBufferAttribute(h,t),a?Js.addScaledVector(Kr,d):Js.addScaledVector(Kr.sub(e),d))}e.add(Js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),li.copy(t.ray).recast(t.near),!($s.containsPoint(li.origin)===!1&&(li.intersectSphere($s,jo)===null||li.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),li.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,F=E;S<F;S+=3){const C=o.getX(S),g=o.getX(S+1),L=o.getX(S+2);s=tr(this,u,t,n,c,d,h,C,g,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const w=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=tr(this,a,t,n,c,d,h,w,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,F=E;S<F;S+=3){const C=S,g=S+1,L=S+2;s=tr(this,u,t,n,c,d,h,C,g,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const w=m,E=m+1,S=m+2;s=tr(this,a,t,n,c,d,h,w,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Iu(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qs);return c<e.near||c>e.far?null:{distance:c,point:Qs.clone(),object:i}}function tr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,js),i.getVertexPosition(c,Zs);const d=Iu(i,t,e,n,Ks,js,Zs,Zo);if(d){const h=new D;hn.getBarycoord(Zo,Ks,js,Zs,h),s&&(d.uv=hn.getInterpolatedAttribute(s,o,l,c,h,new jt)),r&&(d.uv1=hn.getInterpolatedAttribute(r,o,l,c,h,new jt)),a&&(d.normal=hn.getInterpolatedAttribute(a,o,l,c,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Ks,js,Zs,p.normal),d.face=p,d.barycoord=h}return d}class Ue extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(h,2));function _(x,m,u,w,E,S,F,C,g,L,y){const M=S/g,U=F/L,Y=S/2,q=F/2,Q=C/2,it=g+1,J=L+1;let ot=0,k=0;const at=new D;for(let wt=0;wt<J;wt++){const Nt=wt*U-q;for(let ne=0;ne<it;ne++){const _e=ne*M-Y;at[x]=_e*w,at[m]=Nt*E,at[u]=Q,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[u]=C>0?1:-1,d.push(at.x,at.y,at.z),h.push(ne/g),h.push(1-wt/L),ot+=1}}for(let wt=0;wt<L;wt++)for(let Nt=0;Nt<g;Nt++){const ne=p+Nt+it*wt,_e=p+Nt+it*(wt+1),et=p+(Nt+1)+it*(wt+1),ut=p+(Nt+1)+it*wt;l.push(ne,_e,ut),l.push(_e,et,ut),k+=6}o.addGroup(f,k,y),f+=k,p+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Uu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Nu={clone:os,merge:Ye};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vc extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,Jo=new jt,Qo=new jt;class ln extends Vc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Jo,Qo),e.subVectors(Qo,Jo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class zu extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new ln(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new ln(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new ln(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new ln(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new ln(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wc extends We{constructor(t=[],e=ss,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bu extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Kn});r.uniforms.tEquirect.value=e;const a=new nt(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Sn),new zu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class me extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ku={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class po{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gu extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new D;class Mr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qc extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const _s=new D,Xi=new D,Yi=new D,$i=new jt,xs=new jt,Xc=new Te,er=new D,vs=new D,nr=new D,tl=new jt,Zr=new jt,el=new jt;class Yc extends Ne{constructor(t=new qc){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hu(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Mr(n,3,0,!1)),qi.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new jt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Xc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ir(er.set(-.5,-.5,0),Yi,a,Xi,s,r),ir(vs.set(.5,-.5,0),Yi,a,Xi,s,r),ir(nr.set(.5,.5,0),Yi,a,Xi,s,r),tl.set(0,0),Zr.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(er,vs,nr,!1,_s);if(o===null&&(ir(vs.set(-.5,.5,0),Yi,a,Xi,s,r),Zr.set(0,1),o=t.ray.intersectTriangle(er,nr,vs,!1,_s),o===null))return;const l=t.ray.origin.distanceTo(_s);l<t.near||l>t.far||e.push({distance:l,point:_s.clone(),uv:hn.getInterpolation(_s,er,vs,nr,tl,Zr,el,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ir(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(xs.x=r*$i.x-s*$i.y,xs.y=s*$i.x+r*$i.y):xs.copy($i),i.copy(t),i.x+=xs.x,i.y+=xs.y,i.applyMatrix4(Xc)}class Vu extends We{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ke,d=Ke,h,p){super(null,a,o,l,c,d,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new D,Wu=new D,qu=new Qt;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Jr.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qu.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new wr,sr=new D;class mo{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],p=s[7],f=s[8],_=s[9],x=s[10],m=s[11],u=s[12],w=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,p-c,m-f,S-u).normalize(),n[1].setComponents(l+r,p+c,m+f,S+u).normalize(),n[2].setComponents(l+a,p+d,m+_,S+w).normalize(),n[3].setComponents(l-a,p-d,m-_,S-w).normalize(),n[4].setComponents(l-o,p-h,m-x,S-E).normalize(),e===Nn)n[5].setComponents(l+o,p+h,m+x,S+E).normalize();else if(e===xr)n[5].setComponents(o,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class go extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yr=new D,Sr=new D,nl=new Te,Ms=new Oc,rr=new wr,Qr=new D,il=new D;class Ja extends Ne{constructor(t=new ke,e=new go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yr.fromBufferAttribute(e,s-1),Sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yr.distanceTo(Sr);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;nl.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=d.getX(x),w=d.getX(x+1),E=ar(this,t,Ms,l,u,w,x);E&&e.push(E)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(f),u=ar(this,t,Ms,l,x,m,_-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=ar(this,t,Ms,l,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=ar(this,t,Ms,l,_-1,f,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(yr.fromBufferAttribute(o,s),Sr.fromBufferAttribute(o,r),e.distanceSqToSegment(yr,Sr,Qr,il)>n)return;Qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qr);if(!(c<t.near||c>t.far))return{distance:c,point:il.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const sl=new D,rl=new D;class Xu extends Ja{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sl.fromBufferAttribute(e,s),rl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sl.distanceTo(rl);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yu extends We{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $c extends We{constructor(t,e,n=Si,s,r,a,o=Ke,l=Ke,c,d=As,h=1){if(d!==As&&d!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mi extends ke{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=e/2,h=Math.PI/2*t,p=e,f=2*h+p,_=n*2+r,x=s+1,m=new D,u=new D;for(let w=0;w<=_;w++){let E=0,S=0,F=0,C=0;if(w<=n){const y=w/n,M=y*Math.PI/2;S=-d-t*Math.cos(M),F=t*Math.sin(M),C=-t*Math.cos(M),E=y*h}else if(w<=n+r){const y=(w-n)/r;S=-d+y*e,F=t,C=0,E=h+y*p}else{const y=(w-n-r)/n,M=y*Math.PI/2;S=d+t*Math.sin(M),F=t*Math.cos(M),C=t*Math.sin(M),E=h+p+y*h}const g=Math.max(0,Math.min(1,E/f));let L=0;w===0?L=.5/s:w===_&&(L=-.5/s);for(let y=0;y<=s;y++){const M=y/s,U=M*Math.PI*2,Y=Math.sin(U),q=Math.cos(U);u.x=-F*q,u.y=S,u.z=F*Y,o.push(u.x,u.y,u.z),m.set(-F*q,C,F*Y),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+L,g)}if(w>0){const y=(w-1)*x;for(let M=0;M<s;M++){const U=y+M,Y=y+M+1,q=w*x+M,Q=w*x+M+1;a.push(U,Y,q),a.push(Y,Q,q)}}}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Er extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,d=new jt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[p]/t+1)/2,d.y=(a[p+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ee extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],p=[],f=[];let _=0;const x=[],m=n/2;let u=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(f,2));function w(){const S=new D,F=new D;let C=0;const g=(e-t)/n;for(let L=0;L<=r;L++){const y=[],M=L/r,U=M*(e-t)+t;for(let Y=0;Y<=s;Y++){const q=Y/s,Q=q*l+o,it=Math.sin(Q),J=Math.cos(Q);F.x=U*it,F.y=-M*n+m,F.z=U*J,h.push(F.x,F.y,F.z),S.set(it,g,J).normalize(),p.push(S.x,S.y,S.z),f.push(q,1-M),y.push(_++)}x.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const M=x[y][L],U=x[y+1][L],Y=x[y+1][L+1],q=x[y][L+1];(t>0||y!==0)&&(d.push(M,U,q),C+=3),(e>0||y!==r-1)&&(d.push(U,Y,q),C+=3)}c.addGroup(u,C,0),u+=C}function E(S){const F=_,C=new jt,g=new D;let L=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let Y=1;Y<=s;Y++)h.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),_++;const U=_;for(let Y=0;Y<=s;Y++){const Q=Y/s*l+o,it=Math.cos(Q),J=Math.sin(Q);g.x=y*J,g.y=m*M,g.z=y*it,h.push(g.x,g.y,g.z),p.push(0,M,0),C.x=it*.5+.5,C.y=J*.5*M+.5,f.push(C.x,C.y),_++}for(let Y=0;Y<s;Y++){const q=F+Y,Q=U+Y;S===!0?d.push(Q,Q+1,q):d.push(Q+1,Q,q),L+=3}c.addGroup(u,L,S===!0?1:2),u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cn extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const E=new D,S=new D,F=new D;for(let C=0;C<e.length;C+=3)f(e[C+0],E),f(e[C+1],S),f(e[C+2],F),l(E,S,F,w)}function l(w,E,S,F){const C=F+1,g=[];for(let L=0;L<=C;L++){g[L]=[];const y=w.clone().lerp(S,L/C),M=E.clone().lerp(S,L/C),U=C-L;for(let Y=0;Y<=U;Y++)Y===0&&L===C?g[L][Y]=y:g[L][Y]=y.clone().lerp(M,Y/U)}for(let L=0;L<C;L++)for(let y=0;y<2*(C-L)-1;y++){const M=Math.floor(y/2);y%2===0?(p(g[L][M+1]),p(g[L+1][M]),p(g[L][M])):(p(g[L][M+1]),p(g[L+1][M+1]),p(g[L+1][M]))}}function c(w){const E=new D;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(w),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function d(){const w=new D;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const S=m(w)/2/Math.PI+.5,F=u(w)/Math.PI+.5;a.push(S,1-F)}_(),h()}function h(){for(let w=0;w<a.length;w+=6){const E=a[w+0],S=a[w+2],F=a[w+4],C=Math.max(E,S,F),g=Math.min(E,S,F);C>.9&&g<.1&&(E<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),F<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function f(w,E){const S=w*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function _(){const w=new D,E=new D,S=new D,F=new D,C=new jt,g=new jt,L=new jt;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),C.set(a[M+0],a[M+1]),g.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),F.copy(w).add(E).add(S).divideScalar(3);const U=m(F);x(C,M+0,w,U),x(g,M+2,E,U),x(L,M+4,S,U)}}function x(w,E,S,F){F<0&&w.x===1&&(a[E]=w.x-1),S.x===0&&S.z===0&&(a[E]=F/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.vertices,t.indices,t.radius,t.details)}}class _o extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class xo extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xo(t.radius,t.detail)}}class wi extends cs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class Ai extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,p=e/l,f=[],_=[],x=[],m=[];for(let u=0;u<d;u++){const w=u*p-a;for(let E=0;E<c;E++){const S=E*h-r;_.push(S,-w,0),x.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const E=w+c*u,S=w+c*(u+1),F=w+1+c*(u+1),C=w+1+c*u;f.push(E,S,C),f.push(S,F,C)}this.setIndex(f),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tr extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=t;const p=(e-t)/s,f=new D,_=new jt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const u=r+m/n*a;f.x=h*Math.cos(u),f.y=h*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,d.push(_.x,_.y)}h+=p}for(let x=0;x<s;x++){const m=x*(n+1);for(let u=0;u<n;u++){const w=u+m,E=w,S=w+n+1,F=w+n+2,C=w+1;o.push(E,S,C),o.push(S,F,C)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Le extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new D,p=new D,f=[],_=[],x=[],m=[];for(let u=0;u<=n;u++){const w=[],E=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const C=F/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+E*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(C+S,1-E),w.push(c++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const E=d[u][w+1],S=d[u][w],F=d[u+1][w],C=d[u+1][w+1];(u!==0||a>0)&&f.push(E,S,C),(u!==n-1||l<Math.PI)&&f.push(S,F,C)}this.setIndex(f),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vo extends cs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class Zn extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new D,h=new D,p=new D;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const x=_/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,u=(s+1)*(f-1)+_,w=(s+1)*f+_;a.push(x,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $u extends Ti{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ku extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ju extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mo extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Zu extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new Te,al=new D,ol=new D;class Ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;al.setFromMatrixPosition(t.matrixWorld),e.position.copy(al),ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ol),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kc extends Vc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qu extends Ju{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Qu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ed extends Mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nd extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ll();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ll(){return performance.now()}function cl(i,t,e,n){const s=sd(n);switch(e){case Cc:return i*t;case oo:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case Pc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case ho:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sd(i){switch(i){case bn:case Tc:return{byteLength:1,components:1};case Es:case Ac:case Ds:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case Si:case so:case Un:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,h[p]=x)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
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
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,af=`
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:xd,iridescence_fragment:vd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:wd,color_fragment:Ed,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:zd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:kd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:Jd,envmap_vertex:Hd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:qd,fog_pars_fragment:Xd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:jd,lights_pars_begin:Zd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphinstance_vertex:vf,morphcolor_vertex:Mf,morphnormal_vertex:yf,morphtarget_pars_vertex:Sf,morphtarget_vertex:bf,normal_fragment_begin:wf,normal_fragment_maps:Ef,normal_pars_fragment:Tf,normal_pars_vertex:Af,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:If,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:zf,dithering_pars_fragment:Bf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Wf,shadowmask_pars_fragment:qf,skinbase_vertex:Xf,skinning_pars_vertex:Yf,skinning_vertex:$f,skinnormal_vertex:Kf,specularmap_fragment:jf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:Mp,meshbasic_frag:yp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:wp,meshmatcap_frag:Ep,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Pp,meshphysical_frag:Dp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:zp,sprite_frag:Bp},gt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},yn={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};yn.physical={uniforms:Ye([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const or={r:0,b:0,g:0},hi=new zn,kp=new Te;function Gp(i,t,e,n,s,r,a){const o=new Ut(0);let l=r===!0?0:1,c,d,h=null,p=0,f=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1;const F=_(E);F===null?u(o,l):F&&F.isColor&&(u(F,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const F=_(S);F&&(F.isCubeTexture||F.mapping===br)?(d===void 0&&(d=new nt(new Ue(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:os(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,g,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),hi.copy(S.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=F,d.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(hi)),d.material.toneMapped=pe.getTransfer(F.colorSpace)!==ye,(h!==F||p!==F.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=F,p=F.version,f=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new nt(new Ai(2,2),new Qn({name:"BackgroundMaterial",uniforms:os(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pe.getTransfer(F.colorSpace)!==ye,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(h!==F||p!==F.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=F,p=F.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,S){E.getRGB(or,Hc(i)),n.buffers.color.setClear(or.r,or.g,or.b,S,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:x,addToRenderList:m,dispose:w}}function Hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(M,U,Y,q,Q){let it=!1;const J=h(q,Y,U);r!==J&&(r=J,c(r.object)),it=f(M,q,Y,Q),it&&_(M,q,Y,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,S(M,U,Y,q),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,U,Y){const q=Y.wireframe===!0;let Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let it=Q[U.id];it===void 0&&(it={},Q[U.id]=it);let J=it[q];return J===void 0&&(J=p(l()),it[q]=J),J}function p(M){const U=[],Y=[],q=[];for(let Q=0;Q<e;Q++)U[Q]=0,Y[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:q,object:M,attributes:{},index:null}}function f(M,U,Y,q){const Q=r.attributes,it=U.attributes;let J=0;const ot=Y.getAttributes();for(const k in ot)if(ot[k].location>=0){const wt=Q[k];let Nt=it[k];if(Nt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Nt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Nt=M.instanceColor)),wt===void 0||wt.attribute!==Nt||Nt&&wt.data!==Nt.data)return!0;J++}return r.attributesNum!==J||r.index!==q}function _(M,U,Y,q){const Q={},it=U.attributes;let J=0;const ot=Y.getAttributes();for(const k in ot)if(ot[k].location>=0){let wt=it[k];wt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor));const Nt={};Nt.attribute=wt,wt&&wt.data&&(Nt.data=wt.data),Q[k]=Nt,J++}r.attributes=Q,r.attributesNum=J,r.index=q}function x(){const M=r.newAttributes;for(let U=0,Y=M.length;U<Y;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){const Y=r.newAttributes,q=r.enabledAttributes,Q=r.attributeDivisors;Y[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),Q[M]!==U&&(i.vertexAttribDivisor(M,U),Q[M]=U)}function w(){const M=r.newAttributes,U=r.enabledAttributes;for(let Y=0,q=U.length;Y<q;Y++)U[Y]!==M[Y]&&(i.disableVertexAttribArray(Y),U[Y]=0)}function E(M,U,Y,q,Q,it,J){J===!0?i.vertexAttribIPointer(M,U,Y,Q,it):i.vertexAttribPointer(M,U,Y,q,Q,it)}function S(M,U,Y,q){x();const Q=q.attributes,it=Y.getAttributes(),J=U.defaultAttributeValues;for(const ot in it){const k=it[ot];if(k.location>=0){let at=Q[ot];if(at===void 0&&(ot==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),ot==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const wt=at.normalized,Nt=at.itemSize,ne=t.get(at);if(ne===void 0)continue;const _e=ne.buffer,et=ne.type,ut=ne.bytesPerElement,Lt=et===i.INT||et===i.UNSIGNED_INT||at.gpuType===so;if(at.isInterleavedBufferAttribute){const xt=at.data,It=xt.stride,te=at.offset;if(xt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)u(k.location+Ft,xt.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ft=0;Ft<k.locationSize;Ft++)E(k.location+Ft,Nt/k.locationSize,et,wt,It*ut,(te+Nt/k.locationSize*Ft)*ut,Lt)}else{if(at.isInstancedBufferAttribute){for(let xt=0;xt<k.locationSize;xt++)u(k.location+xt,at.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<k.locationSize;xt++)m(k.location+xt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let xt=0;xt<k.locationSize;xt++)E(k.location+xt,Nt/k.locationSize,et,wt,Nt*ut,Nt/k.locationSize*xt*ut,Lt)}}else if(J!==void 0){const wt=J[ot];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(k.location,wt);break;case 3:i.vertexAttrib3fv(k.location,wt);break;case 4:i.vertexAttrib4fv(k.location,wt);break;default:i.vertexAttrib1fv(k.location,wt)}}}}w()}function F(){L();for(const M in n){const U=n[M];for(const Y in U){const q=U[Y];for(const Q in q)d(q[Q].object),delete q[Q];delete U[Y]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const Y in U){const q=U[Y];for(const Q in q)d(q[Q].object),delete q[Q];delete U[Y]}delete n[M.id]}function g(M){for(const U in n){const Y=n[U];if(Y[M.id]===void 0)continue;const q=Y[M.id];for(const Q in q)d(q[Q].object),delete q[Q];delete Y[M.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Vp(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];e.update(f,n,1)}function l(c,d,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x]*p[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const L=g===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==bn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==Un&&!L)}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:F,maxSamples:C}}function qp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const w=r?0:n,E=w*4;let S=u.clippingState||null;l.value=S,S=d(_,p,E,f);for(let F=0;F!==E;++F)S[F]=e[F];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=f+x*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,S=f;E!==x;++E,S+=4)a.copy(h[E]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xp(i){let t=new WeakMap;function e(a,o){return o===ya?a.mapping=ss:o===Sa&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===Sa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ji=4,hl=[.125,.215,.35,.446,.526,.582],_i=20,ea=new Kc,ul=new Ut;let na=null,ia=0,sa=0,ra=!1;const pi=(1+Math.sqrt(5))/2,Ki=1/pi,dl=[new D(-pi,Ki,0),new D(pi,Ki,0),new D(-Ki,0,pi),new D(Ki,0,pi),new D(0,pi,-Ki),new D(0,pi,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Yp=new D;class fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Yp}=r;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ds,format:vn,colorSpace:as,depthBuffer:!1},s=pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Kp(r,t,e)}return s}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s,r){const l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(ul),h.toneMapping=jn,h.autoClear=!1;const _=new sn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),x=new nt(new Ue,_);let m=!1;const u=t.background;u?u.isColor&&(_.color.copy(u),t.background=null,m=!0):(_.color.copy(ul),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const S=this._cubeSize;lr(s,E*S,w>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dl[(s-r-1)%dl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new nt(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),x=r/_,m=isFinite(r)?1+Math.floor(d*x):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const u=[];let w=0;for(let g=0;g<_i;++g){const L=g/x,y=Math.exp(-L*L/2);u.push(y),g===0?w+=y:g<m&&(w+=2*y)}for(let g=0;g<u.length;g++)u[g]=u[g]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const S=this._sizeLods[s],F=3*S*(s>E-Ji?s-E+Ji:0),C=4*(this._cubeSize-S);lr(e,F,C,3*S,2*S),l.setRenderTarget(e),l.render(h,ea)}}function $p(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+hl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ji?l=hl[a-i+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,x=3,m=2,u=1,w=new Float32Array(x*_*f),E=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let C=0;C<f;C++){const g=C%3*2/3-1,L=C>2?0:-1,y=[g,L,0,g+2/3,L,0,g+2/3,L+1,0,g,L,0,g+2/3,L+1,0,g,L+1,0];w.set(y,x*_*C),E.set(p,m*_*C);const M=[C,C,C,C,C,C];S.set(M,u*_*C)}const F=new ke;F.setAttribute("position",new nn(w,x)),F.setAttribute("uv",new nn(E,m)),F.setAttribute("faceIndex",new nn(S,u)),t.push(F),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pl(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kp(i,t,e){const n=new Float32Array(_i),s=new D(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ml(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function gl(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}function jp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ya||l===Sa,d=l===ss||l===rs;if(c||d){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new fl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&s(f)?(e===null&&(e=new fl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let E=0,S=w.length;E<S;E+=3){const F=w[E+0],C=w[E+1],g=w[E+2];p.push(F,C,C,g,g,F)}}else if(_!==void 0){const w=_.array;x=_.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const F=E+0,C=E+1,g=E+2;p.push(F,C,C,g,g,F)}}else return;const m=new(Nc(p)?Gc:kc)(p,1);m.version=x;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const p=r.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Qp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function c(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*a,_),e.update(f,n,_))}function d(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function h(p,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,_);let u=0;for(let w=0;w<_;w++)u+=f[w]*x[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function em(i,t,e){const n=new WeakMap,s=new Ce;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let F=o.attributes.position.count*S,C=1;F>t.maxTextureSize&&(C=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const g=new Float32Array(F*C*4*h),L=new Fc(g,F,C,h);L.type=Un,L.needsUpdate=!0;const y=S*4;for(let U=0;U<h;U++){const Y=u[U],q=w[U],Q=E[U],it=F*C*4*U;for(let J=0;J<Y.count;J++){const ot=J*y;_===!0&&(s.fromBufferAttribute(Y,J),g[it+ot+0]=s.x,g[it+ot+1]=s.y,g[it+ot+2]=s.z,g[it+ot+3]=0),x===!0&&(s.fromBufferAttribute(q,J),g[it+ot+4]=s.x,g[it+ot+5]=s.y,g[it+ot+6]=s.z,g[it+ot+7]=0),m===!0&&(s.fromBufferAttribute(Q,J),g[it+ot+8]=s.x,g[it+ot+9]=s.y,g[it+ot+10]=s.z,g[it+ot+11]=Q.itemSize===4?s.w:1)}}p={count:h,texture:L,size:new jt(F,C)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function nm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Zc=new We,_l=new $c(1,1),Jc=new Fc,Qc=new Su,th=new Wc,xl=[],vl=[],Ml=new Float32Array(16),yl=new Float32Array(9),Sl=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),Oe(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),Oe(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ml.set(n),i.uniformMatrix4fv(this.addr,!1,Ml),Oe(e,n)}}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=Uc,r=_l):r=Zc,e.setTexture2D(t||r,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qc,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jc,s)}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}function bm(i,t){i.uniform1fv(this.addr,t)}function wm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function zm(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function Bm(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qc,r[a])}function km(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function Gm(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jc,r[a])}function Hm(i){switch(i){case 5126:return bm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function bl(i,t){i.seq.push(t),i.map[t.id]=t}function Xm(i,t,e){const n=i.name,s=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bl(e,c===void 0?new Vm(o,i,t):new Wm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new qm(o),bl(e,h)),e=h}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Xm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function wl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ym=37297;let $m=0;function Km(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const El=new Qt;function jm(i){pe._getMatrix(El,pe.workingColorSpace,i);const t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Km(i.getShaderSource(t),a)}else return s}function Zm(i,t){const e=jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(i,t){let e;switch(t){case Ih:e="Linear";break;case Uh:e="Reinhard";break;case Nh:e="Cineon";break;case Fh:e="ACESFilmic";break;case zh:e="AgX";break;case Bh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new D;function Qm(){pe.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function e0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ss(i){return i!==""}function Al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(i0,r0)}const s0=new Map;function r0(i,t){let e=ee[t];if(e===void 0){const n=s0.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(a0,o0)}function o0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function l0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function c0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Dh:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function d0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=l0(e),c=c0(e),d=h0(e),h=u0(e),p=d0(e),f=t0(e),_=e0(r),x=s.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),u.length>0&&(u+=`
`)):(m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),u=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?ee.tonemapping_pars_fragment:"",e.toneMapping!==jn?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Qa(a),a=Al(a,e),a=Rl(a,e),o=Qa(o),o=Al(o,e),o=Rl(o,e),a=Cl(a),o=Cl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+m+a,S=w+u+o,F=wl(s,s.VERTEX_SHADER,E),C=wl(s,s.FRAGMENT_SHADER,S);s.attachShader(x,F),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function g(U){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(x).trim(),q=s.getShaderInfoLog(F).trim(),Q=s.getShaderInfoLog(C).trim();let it=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,F,C);else{const ot=Tl(s,F,"vertex"),k=Tl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+ot+`
`+k)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||Q==="")&&(J=!1);J&&(U.diagnostics={runnable:it,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(F),s.deleteShader(C),L=new gr(s,x),y=n0(s,x)}let L;this.getUniforms=function(){return L===void 0&&g(this),L};let y;this.getAttributes=function(){return y===void 0&&g(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ym)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function _0(i,t,e,n,s,r,a){const o=new zc,l=new m0,c=new Set,d=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,U,Y,q){const Q=Y.fog,it=q.geometry,J=y.isMeshStandardMaterial?Y.environment:null,ot=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),k=ot&&ot.mapping===br?ot.image.height:null,at=_[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const wt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Nt=wt!==void 0?wt.length:0;let ne=0;it.morphAttributes.position!==void 0&&(ne=1),it.morphAttributes.normal!==void 0&&(ne=2),it.morphAttributes.color!==void 0&&(ne=3);let _e,et,ut,Lt;if(at){const ie=yn[at];_e=ie.vertexShader,et=ie.fragmentShader}else _e=y.vertexShader,et=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),Lt=l.getFragmentShaderID(y);const xt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),te=q.isInstancedMesh===!0,Ft=q.isBatchedMesh===!0,Se=!!y.map,be=!!y.matcap,Jt=!!ot,N=!!y.aoMap,ze=!!y.lightMap,le=!!y.bumpMap,xe=!!y.normalMap,Pt=!!y.displacementMap,oe=!!y.emissiveMap,zt=!!y.metalnessMap,$t=!!y.roughnessMap,Ae=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,V=y.iridescence>0,tt=y.sheen>0,I=y.transmission>0,W=Ae&&!!y.anisotropyMap,Tt=A&&!!y.clearcoatMap,dt=A&&!!y.clearcoatNormalMap,j=A&&!!y.clearcoatRoughnessMap,At=V&&!!y.iridescenceMap,rt=V&&!!y.iridescenceThicknessMap,Mt=tt&&!!y.sheenColorMap,Gt=tt&&!!y.sheenRoughnessMap,Bt=!!y.specularMap,pt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,z=I&&!!y.transmissionMap,ht=I&&!!y.thicknessMap,st=!!y.gradientMap,yt=!!y.alphaMap,lt=y.alphaTest>0,B=!!y.alphaHash,St=!!y.extensions;let Wt=jn;y.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ve={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:et,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:Lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&q._colorsTexture!==null,instancing:te,instancingColor:te&&q.instanceColor!==null,instancingMorph:te&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:as,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:be,envMap:Jt,envMapMode:Jt&&ot.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:ze,bumpMap:le,normalMap:xe,displacementMap:p&&Pt,emissiveMap:oe,normalMapObjectSpace:xe&&y.normalMapType===Vh,normalMapTangentSpace:xe&&y.normalMapType===Ic,metalnessMap:zt,roughnessMap:$t,anisotropy:Ae,anisotropyMap:W,clearcoat:A,clearcoatMap:Tt,clearcoatNormalMap:dt,clearcoatRoughnessMap:j,dispersion:v,iridescence:V,iridescenceMap:At,iridescenceThicknessMap:rt,sheen:tt,sheenColorMap:Mt,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:pt,specularIntensityMap:Ot,transmission:I,transmissionMap:z,thicknessMap:ht,gradientMap:st,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:lt,alphaHash:B,combine:y.combine,mapUv:Se&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:ze&&x(y.lightMap.channel),bumpMapUv:le&&x(y.bumpMap.channel),normalMapUv:xe&&x(y.normalMap.channel),displacementMapUv:Pt&&x(y.displacementMap.channel),emissiveMapUv:oe&&x(y.emissiveMap.channel),metalnessMapUv:zt&&x(y.metalnessMap.channel),roughnessMapUv:$t&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(y.sheenRoughnessMap.channel),specularMapUv:Bt&&x(y.specularMap.channel),specularColorMapUv:pt&&x(y.specularColorMap.channel),specularIntensityMapUv:Ot&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:ht&&x(y.thicknessMap.channel),alphaMapUv:yt&&x(y.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(xe||Ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!it.attributes.uv&&(Se||yt),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:q.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===$e,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:St&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&y.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)M.push(U),M.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(w(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=_[y.type];let U;if(M){const Y=yn[M];U=Nu.clone(Y.uniforms)}else U=y.uniforms;return U}function F(y,M){let U;for(let Y=0,q=d.length;Y<q;Y++){const Q=d[Y];if(Q.cacheKey===M){U=Q,++U.usedTimes;break}}return U===void 0&&(U=new f0(i,M,y,r),d.push(U)),U}function C(y){if(--y.usedTimes===0){const M=d.indexOf(y);d[M]=d[d.length-1],d.pop(),y.destroy()}}function g(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:F,releaseProgram:C,releaseShaderCache:g,programs:d,dispose:L}}function x0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ll(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,f,_,x,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),t++,u}function o(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,p){e.length>1&&e.sort(h||v0),n.length>1&&n.sort(p||Dl),s.length>1&&s.sort(p||Dl)}function d(){for(let h=t,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function M0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ll,i.set(n,[a])):s>=r.length?(a=new Ll,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function S0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b0=0;function w0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E0(i){const t=new y0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Te,a=new Te;function o(c){let d=0,h=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,x=0,m=0,u=0,w=0,E=0,S=0,F=0,C=0,g=0;c.sort(w0);for(let y=0,M=c.length;y<M;y++){const U=c[y],Y=U.color,q=U.intensity,Q=U.distance,it=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=Y.r*q,h+=Y.g*q,p+=Y.b*q;else if(U.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(U.sh.coefficients[J],q);g++}else if(U.isDirectionalLight){const J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ot=U.shadow,k=e.get(U);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=it,n.directionalShadowMatrix[f]=U.shadow.matrix,w++}n.directional[f]=J,f++}else if(U.isSpotLight){const J=t.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(Y).multiplyScalar(q),J.distance=Q,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,n.spot[x]=J;const ot=U.shadow;if(U.map&&(n.spotLightMap[F]=U.map,F++,ot.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[x]=ot.matrix,U.castShadow){const k=e.get(U);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=it,S++}x++}else if(U.isRectAreaLight){const J=t.get(U);J.color.copy(Y).multiplyScalar(q),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=J,m++}else if(U.isPointLight){const J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){const ot=U.shadow,k=e.get(U);k.shadowIntensity=ot.intensity,k.shadowBias=ot.bias,k.shadowNormalBias=ot.normalBias,k.shadowRadius=ot.radius,k.shadowMapSize=ot.mapSize,k.shadowCameraNear=ot.camera.near,k.shadowCameraFar=ot.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=it,n.pointShadowMatrix[_]=U.shadow.matrix,E++}n.point[_]=J,_++}else if(U.isHemisphereLight){const J=t.get(U);J.skyColor.copy(U.color).multiplyScalar(q),J.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[u]=J,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==F||L.numLightProbes!==g)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=g,L.directionalLength=f,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=F,L.numLightProbes=g,n.version=b0++)}function l(c,d){let h=0,p=0,f=0,_=0,x=0;const m=d.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const E=c[u];if(E.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Il(i){const t=new E0(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function T0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Il(i),t.set(s,[o])):r>=a.length?(o=new Il(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`;function C0(i,t,e){let n=new mo;const s=new jt,r=new jt,a=new Ce,o=new Ku({depthPacking:Hh}),l=new ju,c={},d=e.maxTextureSize,h={[Jn]:$e,[$e]:Jn,[Qe]:Qe},p=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:A0,fragmentShader:R0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let u=this.type;this.render=function(C,g,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Kn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=u!==Ln&&this.type===Ln,Q=u===Ln&&this.type!==Ln;for(let it=0,J=C.length;it<J;it++){const ot=C[it],k=ot.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/at.x),s.x=r.x*at.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/at.y),s.y=r.y*at.y,k.mapSize.y=r.y)),k.map===null||q===!0||Q===!0){const Nt=this.type!==Ln?{minFilter:Ke,magFilter:Ke}:{};k.map!==null&&k.map.dispose(),k.map=new bi(s.x,s.y,Nt),k.map.texture.name=ot.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const wt=k.getViewportCount();for(let Nt=0;Nt<wt;Nt++){const ne=k.getViewport(Nt);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),Y.viewport(a),k.updateMatrices(ot,Nt),n=k.getFrustum(),S(g,L,k.camera,ot,this.type)}k.isPointLightShadow!==!0&&this.type===Ln&&w(k,L),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,U)};function w(C,g){const L=t.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bi(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(g,null,L,p,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(g,null,L,f,x,null)}function E(C,g,L,y){let M=null;const U=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const Y=M.uuid,q=g.uuid;let Q=c[Y];Q===void 0&&(Q={},c[Y]=Q);let it=Q[q];it===void 0&&(it=M.clone(),Q[q]=it,g.addEventListener("dispose",F)),M=it}if(M.visible=g.visible,M.wireframe=g.wireframe,y===Ln?M.side=g.shadowSide!==null?g.shadowSide:g.side:M.side=g.shadowSide!==null?g.shadowSide:h[g.side],M.alphaMap=g.alphaMap,M.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,M.map=g.map,M.clipShadows=g.clipShadows,M.clippingPlanes=g.clippingPlanes,M.clipIntersection=g.clipIntersection,M.displacementMap=g.displacementMap,M.displacementScale=g.displacementScale,M.displacementBias=g.displacementBias,M.wireframeLinewidth=g.wireframeLinewidth,M.linewidth=g.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=i.properties.get(M);Y.light=L}return M}function S(C,g,L,y,M){if(C.visible===!1)return;if(C.layers.test(g.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const q=t.update(C),Q=C.material;if(Array.isArray(Q)){const it=q.groups;for(let J=0,ot=it.length;J<ot;J++){const k=it[J],at=Q[k.materialIndex];if(at&&at.visible){const wt=E(C,at,y,M);C.onBeforeShadow(i,C,g,L,q,wt,k),i.renderBufferDirect(L,null,q,wt,C,k),C.onAfterShadow(i,C,g,L,q,wt,k)}}}else if(Q.visible){const it=E(C,Q,y,M);C.onBeforeShadow(i,C,g,L,q,it,null),i.renderBufferDirect(L,null,q,it,C,null),C.onAfterShadow(i,C,g,L,q,it,null)}}const Y=C.children;for(let q=0,Q=Y.length;q<Q;q++)S(Y[q],g,L,y,M)}function F(C){C.target.removeEventListener("dispose",F);for(const L in c){const y=c[L],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const P0={[pa]:ma,[ga]:va,[_a]:Ma,[is]:xa,[ma]:pa,[va]:ga,[Ma]:_a,[xa]:is};function D0(i,t){function e(){let z=!1;const ht=new Ce;let st=null;const yt=new Ce(0,0,0,0);return{setMask:function(lt){st!==lt&&!z&&(i.colorMask(lt,lt,lt,lt),st=lt)},setLocked:function(lt){z=lt},setClear:function(lt,B,St,Wt,ve){ve===!0&&(lt*=Wt,B*=Wt,St*=Wt),ht.set(lt,B,St,Wt),yt.equals(ht)===!1&&(i.clearColor(lt,B,St,Wt),yt.copy(ht))},reset:function(){z=!1,st=null,yt.set(-1,0,0,0)}}}function n(){let z=!1,ht=!1,st=null,yt=null,lt=null;return{setReversed:function(B){if(ht!==B){const St=t.get("EXT_clip_control");B?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ht=B;const Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return ht},setTest:function(B){B?xt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(B){st!==B&&!z&&(i.depthMask(B),st=B)},setFunc:function(B){if(ht&&(B=P0[B]),yt!==B){switch(B){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=B}},setLocked:function(B){z=B},setClear:function(B){lt!==B&&(ht&&(B=1-B),i.clearDepth(B),lt=B)},reset:function(){z=!1,st=null,yt=null,lt=null,ht=!1}}}function s(){let z=!1,ht=null,st=null,yt=null,lt=null,B=null,St=null,Wt=null,ve=null;return{setTest:function(ie){z||(ie?xt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!z&&(i.stencilMask(ie),ht=ie)},setFunc:function(ie,je,un){(st!==ie||yt!==je||lt!==un)&&(i.stencilFunc(ie,je,un),st=ie,yt=je,lt=un)},setOp:function(ie,je,un){(B!==ie||St!==je||Wt!==un)&&(i.stencilOp(ie,je,un),B=ie,St=je,Wt=un)},setLocked:function(ie){z=ie},setClear:function(ie){ve!==ie&&(i.clearStencil(ie),ve=ie)},reset:function(){z=!1,ht=null,st=null,yt=null,lt=null,B=null,St=null,Wt=null,ve=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,w=null,E=null,S=null,F=null,C=null,g=new Ut(0,0,0),L=0,y=!1,M=null,U=null,Y=null,q=null,Q=null;const it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ot=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=ot>=1):k.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=ot>=2);let at=null,wt={};const Nt=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),_e=new Ce().fromArray(Nt),et=new Ce().fromArray(ne);function ut(z,ht,st,yt){const lt=new Uint8Array(4),B=i.createTexture();i.bindTexture(z,B),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<st;St++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ht+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return B}const Lt={};Lt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(is),le(!1),xe(Po),xt(i.CULL_FACE),N(Kn);function xt(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function It(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function te(z,ht){return h[z]!==ht?(i.bindFramebuffer(z,ht),h[z]=ht,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ft(z,ht){let st=f,yt=!1;if(z){st=p.get(ht),st===void 0&&(st=[],p.set(ht,st));const lt=z.textures;if(st.length!==lt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let B=0,St=lt.length;B<St;B++)st[B]=i.COLOR_ATTACHMENT0+B;st.length=lt.length,yt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,yt=!0);yt&&i.drawBuffers(st)}function Se(z){return _!==z?(i.useProgram(z),_=z,!0):!1}const be={[gi]:i.FUNC_ADD,[ph]:i.FUNC_SUBTRACT,[mh]:i.FUNC_REVERSE_SUBTRACT};be[gh]=i.MIN,be[_h]=i.MAX;const Jt={[xh]:i.ZERO,[vh]:i.ONE,[Mh]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[wh]:i.DST_COLOR,[Sh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[bh]:i.ONE_MINUS_DST_ALPHA,[Ah]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ch]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function N(z,ht,st,yt,lt,B,St,Wt,ve,ie){if(z===Kn){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(xt(i.BLEND),x=!0),z!==fh){if(z!==m||ie!==y){if((u!==gi||S!==gi)&&(i.blendEquation(i.FUNC_ADD),u=gi,S=gi),ie)switch(z){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,E=null,F=null,C=null,g.set(0,0,0),L=0,m=z,y=ie}return}lt=lt||ht,B=B||st,St=St||yt,(ht!==u||lt!==S)&&(i.blendEquationSeparate(be[ht],be[lt]),u=ht,S=lt),(st!==w||yt!==E||B!==F||St!==C)&&(i.blendFuncSeparate(Jt[st],Jt[yt],Jt[B],Jt[St]),w=st,E=yt,F=B,C=St),(Wt.equals(g)===!1||ve!==L)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ve),g.copy(Wt),L=ve),m=z,y=!1}function ze(z,ht){z.side===Qe?It(i.CULL_FACE):xt(i.CULL_FACE);let st=z.side===$e;ht&&(st=!st),le(st),z.blending===Qi&&z.transparent===!1?N(Kn):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const yt=z.stencilWrite;o.setTest(yt),yt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function xe(z){z!==uh?(xt(i.CULL_FACE),z!==U&&(z===Po?i.cullFace(i.BACK):z===dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),U=z}function Pt(z){z!==Y&&(J&&i.lineWidth(z),Y=z)}function oe(z,ht,st){z?(xt(i.POLYGON_OFFSET_FILL),(q!==ht||Q!==st)&&(i.polygonOffset(ht,st),q=ht,Q=st)):It(i.POLYGON_OFFSET_FILL)}function zt(z){z?xt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function $t(z){z===void 0&&(z=i.TEXTURE0+it-1),at!==z&&(i.activeTexture(z),at=z)}function Ae(z,ht,st){st===void 0&&(at===null?st=i.TEXTURE0+it-1:st=at);let yt=wt[st];yt===void 0&&(yt={type:void 0,texture:void 0},wt[st]=yt),(yt.type!==z||yt.texture!==ht)&&(at!==st&&(i.activeTexture(st),at=st),i.bindTexture(z,ht||Lt[z]),yt.type=z,yt.texture=ht)}function A(){const z=wt[at];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(z){_e.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),_e.copy(z))}function Gt(z){et.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Bt(z,ht){let st=c.get(ht);st===void 0&&(st=new WeakMap,c.set(ht,st));let yt=st.get(z);yt===void 0&&(yt=i.getUniformBlockIndex(ht,z.name),st.set(z,yt))}function pt(z,ht){const yt=c.get(ht).get(z);l.get(ht)!==yt&&(i.uniformBlockBinding(ht,yt,z.__bindingPointIndex),l.set(ht,yt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},at=null,wt={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,w=null,E=null,S=null,F=null,C=null,g=new Ut(0,0,0),L=0,y=!1,M=null,U=null,Y=null,q=null,Q=null,_e.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:It,bindFramebuffer:te,drawBuffers:Ft,useProgram:Se,setBlending:N,setMaterial:ze,setFlipSided:le,setCullFace:xe,setLineWidth:Pt,setPolygonOffset:oe,setScissorTest:zt,activeTexture:$t,bindTexture:Ae,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:V,texImage2D:At,texImage3D:rt,updateUBOMapping:Bt,uniformBlockBinding:pt,texStorage2D:dt,texStorage3D:j,texSubImage2D:tt,texSubImage3D:I,compressedTexSubImage2D:W,compressedTexSubImage3D:Tt,scissor:Mt,viewport:Gt,reset:Ot}}function L0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return f?new OffscreenCanvas(A,v):vr("canvas")}function x(A,v,V){let tt=1;const I=Ae(A);if((I.width>V||I.height>V)&&(tt=V/Math.max(I.width,I.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(tt*I.width),Tt=Math.floor(tt*I.height);h===void 0&&(h=_(W,Tt));const dt=v?_(W,Tt):h;return dt.width=W,dt.height=Tt,dt.getContext("2d").drawImage(A,0,0,W,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+W+"x"+Tt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,V,tt,I=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=v;if(v===i.RED&&(V===i.FLOAT&&(W=i.R32F),V===i.HALF_FLOAT&&(W=i.R16F),V===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.R8UI),V===i.UNSIGNED_SHORT&&(W=i.R16UI),V===i.UNSIGNED_INT&&(W=i.R32UI),V===i.BYTE&&(W=i.R8I),V===i.SHORT&&(W=i.R16I),V===i.INT&&(W=i.R32I)),v===i.RG&&(V===i.FLOAT&&(W=i.RG32F),V===i.HALF_FLOAT&&(W=i.RG16F),V===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RG8UI),V===i.UNSIGNED_SHORT&&(W=i.RG16UI),V===i.UNSIGNED_INT&&(W=i.RG32UI),V===i.BYTE&&(W=i.RG8I),V===i.SHORT&&(W=i.RG16I),V===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGB8UI),V===i.UNSIGNED_SHORT&&(W=i.RGB16UI),V===i.UNSIGNED_INT&&(W=i.RGB32UI),V===i.BYTE&&(W=i.RGB8I),V===i.SHORT&&(W=i.RGB16I),V===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),V===i.UNSIGNED_INT&&(W=i.RGBA32UI),V===i.BYTE&&(W=i.RGBA8I),V===i.SHORT&&(W=i.RGBA16I),V===i.INT&&(W=i.RGBA32I)),v===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){const Tt=I?_r:pe.getTransfer(tt);V===i.FLOAT&&(W=i.RGBA32F),V===i.HALF_FLOAT&&(W=i.RGBA16F),V===i.UNSIGNED_BYTE&&(W=Tt===ye?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(A,v){let V;return A?v===null||v===Si||v===Ts?V=i.DEPTH24_STENCIL8:v===Un?V=i.DEPTH32F_STENCIL8:v===Es&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===Ts?V=i.DEPTH_COMPONENT24:v===Un?V=i.DEPTH_COMPONENT32F:v===Es&&(V=i.DEPTH_COMPONENT16),V}function F(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&d.delete(v)}function g(A){const v=A.target;v.removeEventListener("dispose",g),M(v)}function L(A){const v=n.get(A);if(v.__webglInit===void 0)return;const V=A.source,tt=p.get(V);if(tt){const I=tt[v.__cacheKey];I.usedTimes--,I.usedTimes===0&&y(A),Object.keys(tt).length===0&&p.delete(V)}n.remove(A)}function y(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const V=A.source,tt=p.get(V);delete tt[v.__cacheKey],a.memory.textures--}function M(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let I=0;I<v.__webglFramebuffer[tt].length;I++)i.deleteFramebuffer(v.__webglFramebuffer[tt][I]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=A.textures;for(let tt=0,I=V.length;tt<I;tt++){const W=n.get(V[tt]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(V[tt])}n.remove(A)}let U=0;function Y(){U=0}function q(){const A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function Q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function it(A,v){const V=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(V,A,v);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function J(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Lt(V,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function ot(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Lt(V,A,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function k(A,v){const V=n.get(A);if(A.version>0&&V.__version!==A.version){xt(V,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}const at={[ba]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},wt={[Ke]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},Nt={[Wh]:i.NEVER,[jh]:i.ALWAYS,[qh]:i.LESS,[Uc]:i.LEQUAL,[Xh]:i.EQUAL,[Kh]:i.GEQUAL,[Yh]:i.GREATER,[$h]:i.NOTEQUAL};function ne(A,v){if(v.type===Un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Cr||v.magFilter===zs||v.magFilter===vi||v.minFilter===Sn||v.minFilter===Cr||v.minFilter===zs||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,at[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,wt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,wt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ke||v.minFilter!==zs&&v.minFilter!==vi||v.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _e(A,v){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const tt=v.source;let I=p.get(tt);I===void 0&&(I={},p.set(tt,I));const W=Q(v);if(W!==A.__cacheKey){I[W]===void 0&&(I[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),I[W].usedTimes++;const Tt=I[A.__cacheKey];Tt!==void 0&&(I[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(v)),A.__cacheKey=W,A.__webglTexture=I[W].texture}return V}function et(A,v,V){return Math.floor(Math.floor(A/V)/v)}function ut(A,v,V,tt){const W=A.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,tt,v.data);else{W.sort((rt,Mt)=>rt.start-Mt.start);let Tt=0;for(let rt=1;rt<W.length;rt++){const Mt=W[Tt],Gt=W[rt],Bt=Mt.start+Mt.count,pt=et(Gt.start,v.width,4),Ot=et(Mt.start,v.width,4);Gt.start<=Bt+1&&pt===Ot&&et(Gt.start+Gt.count-1,v.width,4)===pt?Mt.count=Math.max(Mt.count,Gt.start+Gt.count-Mt.start):(++Tt,W[Tt]=Gt)}W.length=Tt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),j=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let rt=0,Mt=W.length;rt<Mt;rt++){const Gt=W[rt],Bt=Math.floor(Gt.start/4),pt=Math.ceil(Gt.count/4),Ot=Bt%v.width,z=Math.floor(Bt/v.width),ht=pt,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Ot,z,ht,st,V,tt,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,j),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Lt(A,v,V){let tt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=i.TEXTURE_3D);const I=_e(A,v),W=v.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+V);const Tt=n.get(W);if(W.version!==Tt.__version||I===!0){e.activeTexture(i.TEXTURE0+V);const dt=pe.getPrimaries(pe.workingColorSpace),j=v.colorSpace===$n?null:pe.getPrimaries(v.colorSpace),At=v.colorSpace===$n||dt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=x(v.image,!1,s.maxTextureSize);rt=$t(v,rt);const Mt=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type);let Bt=E(v.internalFormat,Mt,Gt,v.colorSpace,v.isVideoTexture);ne(tt,v);let pt;const Ot=v.mipmaps,z=v.isVideoTexture!==!0,ht=Tt.__version===void 0||I===!0,st=W.dataReady,yt=F(v,rt);if(v.isDepthTexture)Bt=S(v.format===Rs,v.type),ht&&(z?e.texStorage2D(i.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,Mt,Gt,null));else if(v.isDataTexture)if(Ot.length>0){z&&ht&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,Ot[0].width,Ot[0].height);for(let lt=0,B=Ot.length;lt<B;lt++)pt=Ot[lt],z?st&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,Mt,Gt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,Bt,pt.width,pt.height,0,Mt,Gt,pt.data);v.generateMipmaps=!1}else z?(ht&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,rt.width,rt.height),st&&ut(v,rt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,Mt,Gt,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){z&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Bt,Ot[0].width,Ot[0].height,rt.depth);for(let lt=0,B=Ot.length;lt<B;lt++)if(pt=Ot[lt],v.format!==vn)if(Mt!==null)if(z){if(st)if(v.layerUpdates.size>0){const St=cl(pt.width,pt.height,v.format,v.type);for(const Wt of v.layerUpdates){const ve=pt.data.subarray(Wt*St/pt.data.BYTES_PER_ELEMENT,(Wt+1)*St/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Wt,pt.width,pt.height,1,Mt,ve)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,rt.depth,Mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Bt,pt.width,pt.height,rt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,rt.depth,Mt,Gt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Bt,pt.width,pt.height,rt.depth,0,Mt,Gt,pt.data)}else{z&&ht&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,Ot[0].width,Ot[0].height);for(let lt=0,B=Ot.length;lt<B;lt++)pt=Ot[lt],v.format!==vn?Mt!==null?z?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,Mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?st&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,Mt,Gt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,Bt,pt.width,pt.height,0,Mt,Gt,pt.data)}else if(v.isDataArrayTexture)if(z){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Bt,rt.width,rt.height,rt.depth),st)if(v.layerUpdates.size>0){const lt=cl(rt.width,rt.height,v.format,v.type);for(const B of v.layerUpdates){const St=rt.data.subarray(B*lt/rt.data.BYTES_PER_ELEMENT,(B+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,B,rt.width,rt.height,1,Mt,Gt,St)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,Mt,Gt,rt.data);else if(v.isData3DTexture)z?(ht&&e.texStorage3D(i.TEXTURE_3D,yt,Bt,rt.width,rt.height,rt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,Mt,Gt,rt.data);else if(v.isFramebufferTexture){if(ht)if(z)e.texStorage2D(i.TEXTURE_2D,yt,Bt,rt.width,rt.height);else{let lt=rt.width,B=rt.height;for(let St=0;St<yt;St++)e.texImage2D(i.TEXTURE_2D,St,Bt,lt,B,0,Mt,Gt,null),lt>>=1,B>>=1}}else if(Ot.length>0){if(z&&ht){const lt=Ae(Ot[0]);e.texStorage2D(i.TEXTURE_2D,yt,Bt,lt.width,lt.height)}for(let lt=0,B=Ot.length;lt<B;lt++)pt=Ot[lt],z?st&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Mt,Gt,pt):e.texImage2D(i.TEXTURE_2D,lt,Bt,Mt,Gt,pt);v.generateMipmaps=!1}else if(z){if(ht){const lt=Ae(rt);e.texStorage2D(i.TEXTURE_2D,yt,Bt,lt.width,lt.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Mt,Gt,rt);m(v)&&u(tt),Tt.__version=W.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xt(A,v,V){if(v.image.length!==6)return;const tt=_e(A,v),I=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const W=n.get(I);if(I.version!==W.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const Tt=pe.getPrimaries(pe.workingColorSpace),dt=v.colorSpace===$n?null:pe.getPrimaries(v.colorSpace),j=v.colorSpace===$n||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let B=0;B<6;B++)!At&&!rt?Mt[B]=x(v.image[B],!0,s.maxCubemapSize):Mt[B]=rt?v.image[B].image:v.image[B],Mt[B]=$t(v,Mt[B]);const Gt=Mt[0],Bt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Ot=E(v.internalFormat,Bt,pt,v.colorSpace),z=v.isVideoTexture!==!0,ht=W.__version===void 0||tt===!0,st=I.dataReady;let yt=F(v,Gt);ne(i.TEXTURE_CUBE_MAP,v);let lt;if(At){z&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ot,Gt.width,Gt.height);for(let B=0;B<6;B++){lt=Mt[B].mipmaps;for(let St=0;St<lt.length;St++){const Wt=lt[St];v.format!==vn?Bt!==null?z?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St,0,0,Wt.width,Wt.height,Bt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St,Ot,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St,0,0,Wt.width,Wt.height,Bt,pt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St,Ot,Wt.width,Wt.height,0,Bt,pt,Wt.data)}}}else{if(lt=v.mipmaps,z&&ht){lt.length>0&&yt++;const B=Ae(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ot,B.width,B.height)}for(let B=0;B<6;B++)if(rt){z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Mt[B].width,Mt[B].height,Bt,pt,Mt[B].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ot,Mt[B].width,Mt[B].height,0,Bt,pt,Mt[B].data);for(let St=0;St<lt.length;St++){const ve=lt[St].image[B].image;z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St+1,0,0,ve.width,ve.height,Bt,pt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St+1,Ot,ve.width,ve.height,0,Bt,pt,ve.data)}}else{z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Bt,pt,Mt[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ot,Bt,pt,Mt[B]);for(let St=0;St<lt.length;St++){const Wt=lt[St];z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St+1,0,0,Bt,pt,Wt.image[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,St+1,Ot,Bt,pt,Wt.image[B])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),W.__version=I.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function It(A,v,V,tt,I,W){const Tt=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),j=E(V.internalFormat,Tt,dt,V.colorSpace),At=n.get(v),rt=n.get(V);if(rt.__renderTarget=v,!At.__hasExternalTextures){const Mt=Math.max(1,v.width>>W),Gt=Math.max(1,v.height>>W);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?e.texImage3D(I,W,j,Mt,Gt,v.depth,0,Tt,dt,null):e.texImage2D(I,W,j,Mt,Gt,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,I,rt.__webglTexture,0,Pt(v)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,I,rt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const tt=v.depthTexture,I=tt&&tt.isDepthTexture?tt.type:null,W=S(v.stencilBuffer,I),Tt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Pt(v);oe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,W,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,A)}else{const tt=v.textures;for(let I=0;I<tt.length;I++){const W=tt[I],Tt=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),j=E(W.internalFormat,Tt,dt,W.colorSpace),At=Pt(v);V&&oe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,j,v.width,v.height):oe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(v.depthTexture);tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),it(v.depthTexture,0);const I=tt.__webglTexture,W=Pt(v);if(v.depthTexture.format===As)oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(v.depthTexture.format===Rs)oe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Se(A){const v=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){const I=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",I)};tt.addEventListener("dispose",I),v.__depthDisposeCallback=I}v.__boundDepthTexture=tt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const tt=A.texture.mipmaps;tt&&tt.length>0?Ft(v.__webglFramebuffer[0],A):Ft(v.__webglFramebuffer,A)}else if(V){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=i.createRenderbuffer(),te(v.__webglDepthbuffer[tt],A,!1);else{const I=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,W)}}else{const tt=A.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),te(v.__webglDepthbuffer,A,!1);else{const I=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,v,V){const tt=n.get(A);v!==void 0&&It(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Se(A)}function Jt(A){const v=A.texture,V=n.get(A),tt=n.get(v);A.addEventListener("dispose",g);const I=A.textures,W=A.isWebGLCubeRenderTarget===!0,Tt=I.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=v.version,a.memory.textures++),W){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let j=0;j<v.mipmaps.length;j++)V.__webglFramebuffer[dt][j]=i.createFramebuffer()}else V.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)V.__webglFramebuffer[dt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,j=I.length;dt<j;dt++){const At=n.get(I[dt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&oe(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<I.length;dt++){const j=I[dt];V.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const At=r.convert(j.format,j.colorSpace),rt=r.convert(j.type),Mt=E(j.internalFormat,At,rt,j.colorSpace,A.isXRRenderTarget===!0),Gt=Pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),te(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)It(V.__webglFramebuffer[dt][j],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,j);else It(V.__webglFramebuffer[dt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,j=I.length;dt<j;dt++){const At=I[dt],rt=n.get(At);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),ne(i.TEXTURE_2D,At),It(V.__webglFramebuffer,A,At,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(At)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),ne(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)It(V.__webglFramebuffer[j],A,v,i.COLOR_ATTACHMENT0,dt,j);else It(V.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&u(dt),e.unbindTexture()}A.depthBuffer&&Se(A)}function N(A){const v=A.textures;for(let V=0,tt=v.length;V<tt;V++){const I=v[V];if(m(I)){const W=w(A),Tt=n.get(I).__webglTexture;e.bindTexture(W,Tt),u(W),e.unbindTexture()}}}const ze=[],le=[];function xe(A){if(A.samples>0){if(oe(A)===!1){const v=A.textures,V=A.width,tt=A.height;let I=i.COLOR_BUFFER_BIT;const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(A),dt=v.length>1;if(dt)for(let At=0;At<v.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const j=A.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const rt=n.get(v[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,I,i.NEAREST),l===!0&&(ze.length=0,le.length=0,ze.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ze.push(W),le.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<v.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const rt=n.get(v[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function oe(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function zt(A){const v=a.render.frame;d.get(A)!==v&&(d.set(A,v),A.update())}function $t(A,v){const V=A.colorSpace,tt=A.format,I=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==as&&V!==$n&&(pe.getTransfer(V)===ye?(tt!==vn||I!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=it,this.setTexture2DArray=J,this.setTexture3D=ot,this.setTextureCube=k,this.rebindTextures=be,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=It,this.useMultisampledRTT=oe}function I0(i,t){function e(n,s=$n){let r;const a=pe.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===vn)return i.RGBA;if(n===As)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===Dc)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Xa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===$a||n===Ka||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O0 extends ls{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,_=null;const x=new F0,m=e.getContextAttributes();let u=null,w=null;const E=[],S=[],F=new jt;let C=null;const g=new ln;g.viewport=new Ce;const L=new ln;L.viewport=new Ce;const y=[g,L],M=new nd;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=E[et];return ut===void 0&&(ut=new jr,E[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=E[et];return ut===void 0&&(ut=new jr,E[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=E[et];return ut===void 0&&(ut=new jr,E[et]=ut),ut.getHandSpace()};function q(et){const ut=S.indexOf(et.inputSource);if(ut===-1)return;const Lt=E[ut];Lt!==void 0&&(Lt.update(et.inputSource,et.frame,c||a),Lt.dispatchEvent({type:et.type,data:et.inputSource}))}function Q(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",it);for(let et=0;et<E.length;et++){const ut=S[et];ut!==null&&(S[et]=null,E[et].disconnect(ut))}U=null,Y=null,x.reset(),t.setRenderTarget(u),f=null,p=null,h=null,s=null,w=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,xt=null,It=null;m.depth&&(It=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=m.stencil?Rs:As,xt=m.stencil?Ts:Si);const te={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(te),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new bi(p.textureWidth,p.textureHeight,{format:vn,type:bn,depthTexture:new $c(p.textureWidth,p.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new bi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(et){for(let ut=0;ut<et.removed.length;ut++){const Lt=et.removed[ut],xt=S.indexOf(Lt);xt>=0&&(S[xt]=null,E[xt].disconnect(Lt))}for(let ut=0;ut<et.added.length;ut++){const Lt=et.added[ut];let xt=S.indexOf(Lt);if(xt===-1){for(let te=0;te<E.length;te++)if(te>=S.length){S.push(Lt),xt=te;break}else if(S[te]===null){S[te]=Lt,xt=te;break}if(xt===-1)break}const It=E[xt];It&&It.connect(Lt)}}const J=new D,ot=new D;function k(et,ut,Lt){J.setFromMatrixPosition(ut.matrixWorld),ot.setFromMatrixPosition(Lt.matrixWorld);const xt=J.distanceTo(ot),It=ut.projectionMatrix.elements,te=Lt.projectionMatrix.elements,Ft=It[14]/(It[10]-1),Se=It[14]/(It[10]+1),be=(It[9]+1)/It[5],Jt=(It[9]-1)/It[5],N=(It[8]-1)/It[0],ze=(te[8]+1)/te[0],le=Ft*N,xe=Ft*ze,Pt=xt/(-N+ze),oe=Pt*-N;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(oe),et.translateZ(Pt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const zt=Ft+Pt,$t=Se+Pt,Ae=le-oe,A=xe+(xt-oe),v=be*Se/$t*zt,V=Jt*Se/$t*zt;et.projectionMatrix.makePerspective(Ae,A,v,V,zt,$t),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function at(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,Lt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(Lt=x.depthFar)),M.near=L.near=g.near=ut,M.far=L.far=g.far=Lt,(U!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,Y=M.far),g.layers.mask=et.layers.mask|2,L.layers.mask=et.layers.mask|4,M.layers.mask=g.layers.mask|L.layers.mask;const xt=et.parent,It=M.cameras;at(M,xt);for(let te=0;te<It.length;te++)at(It[te],xt);It.length===2?k(M,g,L):M.projectionMatrix.copy(g.projectionMatrix),wt(et,M,xt)};function wt(et,ut,Lt){Lt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(Lt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Cs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(et){l=et,p!==null&&(p.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Nt=null;function ne(et,ut){if(d=ut.getViewerPose(c||a),_=ut,d!==null){const Lt=d.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let xt=!1;Lt.length!==M.cameras.length&&(M.cameras.length=0,xt=!0);for(let Ft=0;Ft<Lt.length;Ft++){const Se=Lt[Ft];let be=null;if(f!==null)be=f.getViewport(Se);else{const N=h.getViewSubImage(p,Se);be=N.viewport,Ft===0&&(t.setRenderTargetTextures(w,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(w))}let Jt=y[Ft];Jt===void 0&&(Jt=new ln,Jt.layers.enable(Ft),Jt.viewport=new Ce,y[Ft]=Jt),Jt.matrix.fromArray(Se.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Se.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(be.x,be.y,be.width,be.height),Ft===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xt===!0&&M.cameras.push(Jt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ft=h.getDepthInformation(Lt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,s.renderState)}}for(let Lt=0;Lt<E.length;Lt++){const xt=S[Lt],It=E[Lt];xt!==null&&It!==void 0&&It.update(xt,ut,c||a)}Nt&&Nt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),_=null}const _e=new jc;_e.setAnimationLoop(ne),this.setAnimationLoop=function(et){Nt=et},this.dispose=function(){}}}const ui=new zn,z0=new Te;function B0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Hc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$e&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$e&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,ui.copy(S),ui.x*=-1,ui.y*=-1,ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$e&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const S=E.program;n.uniformBlockBinding(w,S)}function c(w,E){let S=s[w.id];S===void 0&&(_(w),S=d(w),s[w.id]=S,w.addEventListener("dispose",m));const F=E.program;n.updateUBOMapping(w,F);const C=t.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function d(w){const E=h();w.__bindingPointIndex=E;const S=i.createBuffer(),F=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const E=s[w.id],S=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,g=S.length;C<g;C++){const L=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,M=L.length;y<M;y++){const U=L[y];if(f(U,C,y,F)===!0){const Y=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let it=0;it<q.length;it++){const J=q[it],ot=x(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,Y+Q,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,Q),Q+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,E,S,F){const C=w.value,g=E+"_"+S;if(F[g]===void 0)return typeof C=="number"||typeof C=="boolean"?F[g]=C:F[g]=C.clone(),!0;{const L=F[g];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return F[g]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(w){const E=w.uniforms;let S=0;const F=16;for(let g=0,L=E.length;g<L;g++){const y=Array.isArray(E[g])?E[g]:[E[g]];for(let M=0,U=y.length;M<U;M++){const Y=y[M],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Q=0,it=q.length;Q<it;Q++){const J=q[Q],ot=x(J),k=S%F,at=k%ot.boundary,wt=k+at;S+=at,wt!==0&&F-wt<ot.storage&&(S+=F-wt),Y.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ot.storage}}}const C=S%F;return C>0&&(S+=F-C),w.__size=S,w.__cache={},this}function x(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class G0{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let F=!1;this._outputColorSpace=on;let C=0,g=0,L=null,y=-1,M=null;const U=new Ce,Y=new Ce;let q=null;const Q=new Ut(0);let it=0,J=e.width,ot=e.height,k=1,at=null,wt=null;const Nt=new Ce(0,0,J,ot),ne=new Ce(0,0,J,ot);let _e=!1;const et=new mo;let ut=!1,Lt=!1;const xt=new Te,It=new Te,te=new D,Ft=new Ce,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Jt(){return L===null?k:1}let N=n;function ze(b,G){return e.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",B,!1),N===null){const G="webgl2";if(N=ze(G,b),N===null)throw ze(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,xe,Pt,oe,zt,$t,Ae,A,v,V,tt,I,W,Tt,dt,j,At,rt,Mt,Gt,Bt,pt,Ot,z;function ht(){le=new Zp(N),le.init(),pt=new I0(N,le),xe=new Wp(N,le,t,pt),Pt=new D0(N,le),xe.reverseDepthBuffer&&p&&Pt.buffers.depth.setReversed(!0),oe=new tm(N),zt=new x0,$t=new L0(N,le,Pt,zt,xe,pt,oe),Ae=new Xp(S),A=new jp(S),v=new rd(N),Ot=new Hp(N,v),V=new Jp(N,v,oe,Ot),tt=new nm(N,V,v,oe),Mt=new em(N,xe,$t),j=new qp(zt),I=new _0(S,Ae,A,le,xe,Ot,j),W=new B0(S,zt),Tt=new M0,dt=new T0(le),rt=new Gp(S,Ae,A,Pt,tt,f,l),At=new C0(S,tt,xe),z=new k0(N,oe,xe,Pt),Gt=new Vp(N,le,oe),Bt=new Qp(N,le,oe),oe.programs=I.programs,S.capabilities=xe,S.extensions=le,S.properties=zt,S.renderLists=Tt,S.shadowMap=At,S.state=Pt,S.info=oe}ht();const st=new O0(S,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(J,ot,!1))},this.getSize=function(b){return b.set(J,ot)},this.setSize=function(b,G,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ot=G,e.width=Math.floor(b*k),e.height=Math.floor(G*k),$===!0&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(J*k,ot*k).floor()},this.setDrawingBufferSize=function(b,G,$){J=b,ot=G,k=$,e.width=Math.floor(b*$),e.height=Math.floor(G*$),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Nt)},this.setViewport=function(b,G,$,K){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,G,$,K),Pt.viewport(U.copy(Nt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,G,$,K){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,G,$,K),Pt.scissor(Y.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){Pt.setScissorTest(_e=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){wt=b},this.getClearColor=function(b){return b.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,$=!0){let K=0;if(b){let H=!1;if(L!==null){const ct=L.texture.format;H=ct===ho||ct===co||ct===lo}if(H){const ct=L.texture.type,mt=ct===bn||ct===Si||ct===Es||ct===Ts||ct===ro||ct===ao,Et=rt.getClearColor(),bt=rt.getClearAlpha(),T=Et.r,O=Et.g,P=Et.b;mt?(_[0]=T,_[1]=O,_[2]=P,_[3]=bt,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=T,x[1]=O,x[2]=P,x[3]=bt,N.clearBufferiv(N.COLOR,0,x))}else K|=N.COLOR_BUFFER_BIT}G&&(K|=N.DEPTH_BUFFER_BIT),$&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",B,!1),rt.dispose(),Tt.dispose(),dt.dispose(),zt.dispose(),Ae.dispose(),A.dispose(),tt.dispose(),Ot.dispose(),z.dispose(),I.dispose(),st.dispose(),st.removeEventListener("sessionstart",dn),st.removeEventListener("sessionend",Us),wn.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=oe.autoReset,G=At.enabled,$=At.autoUpdate,K=At.needsUpdate,H=At.type;ht(),oe.autoReset=b,At.enabled=G,At.autoUpdate=$,At.needsUpdate=K,At.type=H}function B(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function St(b){const G=b.target;G.removeEventListener("dispose",St),Wt(G)}function Wt(b){ve(b),zt.remove(b)}function ve(b){const G=zt.get(b).programs;G!==void 0&&(G.forEach(function($){I.releaseProgram($)}),b.isShaderMaterial&&I.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,$,K,H,ct){G===null&&(G=Se);const mt=H.isMesh&&H.matrixWorld.determinant()<0,Et=Ci(b,G,$,K,H);Pt.setMaterial(K,mt);let bt=$.index,T=1;if(K.wireframe===!0){if(bt=V.getWireframeAttribute($),bt===void 0)return;T=2}const O=$.drawRange,P=$.attributes.position;let Z=O.start*T,ft=(O.start+O.count)*T;ct!==null&&(Z=Math.max(Z,ct.start*T),ft=Math.min(ft,(ct.start+ct.count)*T)),bt!==null?(Z=Math.max(Z,0),ft=Math.min(ft,bt.count)):P!=null&&(Z=Math.max(Z,0),ft=Math.min(ft,P.count));const Rt=ft-Z;if(Rt<0||Rt===1/0)return;Ot.setup(H,K,Et,$,bt);let Xt,Kt=Gt;if(bt!==null&&(Xt=v.get(bt),Kt=Bt,Kt.setIndex(Xt)),H.isMesh)K.wireframe===!0?(Pt.setLineWidth(K.wireframeLinewidth*Jt()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(H.isLine){let Dt=K.linewidth;Dt===void 0&&(Dt=1),Pt.setLineWidth(Dt*Jt()),H.isLineSegments?Kt.setMode(N.LINES):H.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else H.isPoints?Kt.setMode(N.POINTS):H.isSprite&&Kt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Kt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Dt=H._multiDrawStarts,Pe=H._multiDrawCounts,ce=H._multiDrawCount,qe=bt?v.get(bt).bytesPerElement:1,fn=zt.get(K).currentProgram.getUniforms();for(let Ie=0;Ie<ce;Ie++)fn.setValue(N,"_gl_DrawID",Ie),Kt.render(Dt[Ie]/qe,Pe[Ie])}else if(H.isInstancedMesh)Kt.renderInstances(Z,Rt,H.count);else if($.isInstancedBufferGeometry){const Dt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,Dt);Kt.renderInstances(Z,Rt,Pe)}else Kt.render(Z,Rt)};function ie(b,G,$){b.transparent===!0&&b.side===Qe&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,ei(b,G,$),b.side=Jn,b.needsUpdate=!0,ei(b,G,$),b.side=Qe):ei(b,G,$)}this.compile=function(b,G,$=null){$===null&&($=b),u=dt.get($),u.init(G),E.push(u),$.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),b!==$&&b.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const K=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ct=H.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const Et=ct[mt];ie(Et,$,H),K.add(Et)}else ie(ct,$,H),K.add(ct)}),u=E.pop(),K},this.compileAsync=function(b,G,$=null){const K=this.compile(b,G,$);return new Promise(H=>{function ct(){if(K.forEach(function(mt){zt.get(mt).currentProgram.isReady()&&K.delete(mt)}),K.size===0){H(b);return}setTimeout(ct,10)}le.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let je=null;function un(b){je&&je(b)}function dn(){wn.stop()}function Us(){wn.start()}const wn=new jc;wn.setAnimationLoop(un),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){je=b,st.setAnimationLoop(b),b===null?wn.stop():wn.start()},st.addEventListener("sessionstart",dn),st.addEventListener("sessionend",Us),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(G),G=st.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,G,L),u=dt.get(b,E.length),u.init(G),E.push(u),It.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(It),Lt=this.localClippingEnabled,ut=j.init(this.clippingPlanes,Lt),m=Tt.get(b,w.length),m.init(),w.push(m),st.enabled===!0&&st.isPresenting===!0){const ct=S.xr.getDepthSensingMesh();ct!==null&&En(ct,G,-1/0,S.sortObjects)}En(b,G,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(at,wt),be=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,be&&rt.addToRenderList(m,b),this.info.render.frame++,ut===!0&&j.beginShadows();const $=u.state.shadowsArray;At.render($,b,G),ut===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(u.setupLights(),G.isArrayCamera){const ct=G.cameras;if(H.length>0)for(let mt=0,Et=ct.length;mt<Et;mt++){const bt=ct[mt];Ns(K,H,b,bt)}be&&rt.render(b);for(let mt=0,Et=ct.length;mt<Et;mt++){const bt=ct[mt];Bn(m,b,bt,bt.viewport)}}else H.length>0&&Ns(K,H,b,G),be&&rt.render(b),Bn(m,b,G);L!==null&&g===0&&($t.updateMultisampleRenderTarget(L),$t.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(S,b,G),Ot.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(u=E[E.length-1],ut===!0&&j.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function En(b,G,$,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){K&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(It);const mt=tt.update(b),Et=b.material;Et.visible&&m.push(b,mt,Et,$,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const mt=tt.update(b),Et=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ft.copy(mt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(It)),Array.isArray(Et)){const bt=mt.groups;for(let T=0,O=bt.length;T<O;T++){const P=bt[T],Z=Et[P.materialIndex];Z&&Z.visible&&m.push(b,mt,Z,$,Ft.z,P)}}else Et.visible&&m.push(b,mt,Et,$,Ft.z,null)}}const ct=b.children;for(let mt=0,Et=ct.length;mt<Et;mt++)En(ct[mt],G,$,K)}function Bn(b,G,$,K){const H=b.opaque,ct=b.transmissive,mt=b.transparent;u.setupLightsView($),ut===!0&&j.setGlobalState(S.clippingPlanes,$),K&&Pt.viewport(U.copy(K)),H.length>0&&Yt(H,G,$),ct.length>0&&Yt(ct,G,$),mt.length>0&&Yt(mt,G,$),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ns(b,G,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new bi(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Ds:bn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ct=u.state.transmissionRenderTarget[K.id],mt=K.viewport||U;ct.setSize(mt.z*S.transmissionResolutionScale,mt.w*S.transmissionResolutionScale);const Et=S.getRenderTarget();S.setRenderTarget(ct),S.getClearColor(Q),it=S.getClearAlpha(),it<1&&S.setClearColor(16777215,.5),S.clear(),be&&rt.render($);const bt=S.toneMapping;S.toneMapping=jn;const T=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),ut===!0&&j.setGlobalState(S.clippingPlanes,K),Yt(b,$,K),$t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct),le.has("WEBGL_multisampled_render_to_texture")===!1){let O=!1;for(let P=0,Z=G.length;P<Z;P++){const ft=G[P],Rt=ft.object,Xt=ft.geometry,Kt=ft.material,Dt=ft.group;if(Kt.side===Qe&&Rt.layers.test(K.layers)){const Pe=Kt.side;Kt.side=$e,Kt.needsUpdate=!0,qt(Rt,$,K,Xt,Kt,Dt),Kt.side=Pe,Kt.needsUpdate=!0,O=!0}}O===!0&&($t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct))}S.setRenderTarget(Et),S.setClearColor(Q,it),T!==void 0&&(K.viewport=T),S.toneMapping=bt}function Yt(b,G,$){const K=G.isScene===!0?G.overrideMaterial:null;for(let H=0,ct=b.length;H<ct;H++){const mt=b[H],Et=mt.object,bt=mt.geometry,T=mt.group;let O=mt.material;O.allowOverride===!0&&K!==null&&(O=K),Et.layers.test($.layers)&&qt(Et,G,$,bt,O,T)}}function qt(b,G,$,K,H,ct){b.onBeforeRender(S,G,$,K,H,ct),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(S,G,$,K,b,ct),H.transparent===!0&&H.side===Qe&&H.forceSinglePass===!1?(H.side=$e,H.needsUpdate=!0,S.renderBufferDirect($,G,K,H,b,ct),H.side=Jn,H.needsUpdate=!0,S.renderBufferDirect($,G,K,H,b,ct),H.side=Qe):S.renderBufferDirect($,G,K,H,b,ct),b.onAfterRender(S,G,$,K,H,ct)}function ei(b,G,$){G.isScene!==!0&&(G=Se);const K=zt.get(b),H=u.state.lights,ct=u.state.shadowsArray,mt=H.state.version,Et=I.getParameters(b,H.state,ct,G,$),bt=I.getProgramCacheKey(Et);let T=K.programs;K.environment=b.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(b.isMeshStandardMaterial?A:Ae).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,T===void 0&&(b.addEventListener("dispose",St),T=new Map,K.programs=T);let O=T.get(bt);if(O!==void 0){if(K.currentProgram===O&&K.lightsStateVersion===mt)return Mn(b,Et),O}else Et.uniforms=I.getUniforms(b),b.onBeforeCompile(Et,S),O=I.acquireProgram(Et,bt),T.set(bt,O),K.uniforms=Et.uniforms;const P=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(P.clippingPlanes=j.uniform),Mn(b,Et),K.needsLights=Pi(b),K.lightsStateVersion=mt,K.needsLights&&(P.ambientLightColor.value=H.state.ambient,P.lightProbe.value=H.state.probe,P.directionalLights.value=H.state.directional,P.directionalLightShadows.value=H.state.directionalShadow,P.spotLights.value=H.state.spot,P.spotLightShadows.value=H.state.spotShadow,P.rectAreaLights.value=H.state.rectArea,P.ltc_1.value=H.state.rectAreaLTC1,P.ltc_2.value=H.state.rectAreaLTC2,P.pointLights.value=H.state.point,P.pointLightShadows.value=H.state.pointShadow,P.hemisphereLights.value=H.state.hemi,P.directionalShadowMap.value=H.state.directionalShadowMap,P.directionalShadowMatrix.value=H.state.directionalShadowMatrix,P.spotShadowMap.value=H.state.spotShadowMap,P.spotLightMatrix.value=H.state.spotLightMatrix,P.spotLightMap.value=H.state.spotLightMap,P.pointShadowMap.value=H.state.pointShadowMap,P.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=O,K.uniformsList=null,O}function Ri(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=gr.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Mn(b,G){const $=zt.get(b);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Ci(b,G,$,K,H){G.isScene!==!0&&(G=Se),$t.resetTextureUnits();const ct=G.fog,mt=K.isMeshStandardMaterial?G.environment:null,Et=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:as,bt=(K.isMeshStandardMaterial?A:Ae).get(K.envMap||mt),T=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,O=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),P=!!$.morphAttributes.position,Z=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let Rt=jn;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=S.toneMapping);const Xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=Xt!==void 0?Xt.length:0,Dt=zt.get(K),Pe=u.state.lights;if(ut===!0&&(Lt===!0||b!==M)){const kt=b===M&&K.id===y;j.setState(K,b,kt)}let ce=!1;K.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Pe.state.version||Dt.outputColorSpace!==Et||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isBatchedMesh&&Dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==bt||K.fog===!0&&Dt.fog!==ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==j.numPlanes||Dt.numIntersection!==j.numIntersection)||Dt.vertexAlphas!==T||Dt.vertexTangents!==O||Dt.morphTargets!==P||Dt.morphNormals!==Z||Dt.morphColors!==ft||Dt.toneMapping!==Rt||Dt.morphTargetsCount!==Kt)&&(ce=!0):(ce=!0,Dt.__version=K.version);let qe=Dt.currentProgram;ce===!0&&(qe=ei(K,G,H));let fn=!1,Ie=!1,ri=!1;const se=qe.getUniforms(),Ze=Dt.uniforms;if(Pt.useProgram(qe.program)&&(fn=!0,Ie=!0,ri=!0),K.id!==y&&(y=K.id,Ie=!0),fn||M!==b){Pt.buffers.depth.getReversed()?(xt.copy(b.projectionMatrix),mu(xt),gu(xt),se.setValue(N,"projectionMatrix",xt)):se.setValue(N,"projectionMatrix",b.projectionMatrix),se.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ht=se.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,te.setFromMatrixPosition(b.matrixWorld)),xe.logarithmicDepthBuffer&&se.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&se.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ie=!0,ri=!0)}if(H.isSkinnedMesh){se.setOptional(N,H,"bindMatrix"),se.setOptional(N,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),se.setValue(N,"boneTexture",kt.boneTexture,$t))}H.isBatchedMesh&&(se.setOptional(N,H,"batchingTexture"),se.setValue(N,"batchingTexture",H._matricesTexture,$t),se.setOptional(N,H,"batchingIdTexture"),se.setValue(N,"batchingIdTexture",H._indirectTexture,$t),se.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&se.setValue(N,"batchingColorTexture",H._colorsTexture,$t));const X=$.morphAttributes;if((X.position!==void 0||X.normal!==void 0||X.color!==void 0)&&Mt.update(H,$,qe),(Ie||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,se.setValue(N,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ze.envMap.value=bt,Ze.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Ze.envMapIntensity.value=G.environmentIntensity),Ie&&(se.setValue(N,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&ni(Ze,ri),ct&&K.fog===!0&&W.refreshFogUniforms(Ze,ct),W.refreshMaterialUniforms(Ze,K,k,ot,u.state.transmissionRenderTarget[b.id]),gr.upload(N,Ri(Dt),Ze,$t)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gr.upload(N,Ri(Dt),Ze,$t),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&se.setValue(N,"center",H.center),se.setValue(N,"modelViewMatrix",H.modelViewMatrix),se.setValue(N,"normalMatrix",H.normalMatrix),se.setValue(N,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const kt=K.uniformsGroups;for(let Ht=0,Je=kt.length;Ht<Je;Ht++){const we=kt[Ht];z.update(we,qe),z.bind(we,qe)}}return qe}function ni(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Pi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,G,$){const K=zt.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),zt.get(b.texture).__webglTexture=G,zt.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const $=zt.get(b);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const ii=N.createFramebuffer();this.setRenderTarget=function(b,G=0,$=0){L=b,C=G,g=$;let K=!0,H=null,ct=!1,mt=!1;if(b){const bt=zt.get(b);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(N.FRAMEBUFFER,null),K=!1;else if(bt.__webglFramebuffer===void 0)$t.setupRenderTarget(b);else if(bt.__hasExternalTextures)$t.rebindTextures(b,zt.get(b.texture).__webglTexture,zt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const P=b.depthTexture;if(bt.__boundDepthTexture!==P){if(P!==null&&zt.has(P)&&(b.width!==P.image.width||b.height!==P.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(b)}}const T=b.texture;(T.isData3DTexture||T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=!0);const O=zt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(O[G])?H=O[G][$]:H=O[G],ct=!0):b.samples>0&&$t.useMultisampledRTT(b)===!1?H=zt.get(b).__webglMultisampledFramebuffer:Array.isArray(O)?H=O[$]:H=O,U.copy(b.viewport),Y.copy(b.scissor),q=b.scissorTest}else U.copy(Nt).multiplyScalar(k).floor(),Y.copy(ne).multiplyScalar(k).floor(),q=_e;if($!==0&&(H=ii),Pt.bindFramebuffer(N.FRAMEBUFFER,H)&&K&&Pt.drawBuffers(b,H),Pt.viewport(U),Pt.scissor(Y),Pt.setScissorTest(q),ct){const bt=zt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,bt.__webglTexture,$)}else if(mt){const bt=zt.get(b.texture),T=G;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,$,T)}else if(b!==null&&$!==0){const bt=zt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,$)}y=-1},this.readRenderTargetPixels=function(b,G,$,K,H,ct,mt,Et=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=zt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){Pt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const T=b.textures[Et],O=T.format,P=T.type;if(!xe.textureFormatReadable(O)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(P)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&$>=0&&$<=b.height-H&&(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et),N.readPixels(G,$,K,H,pt.convert(O),pt.convert(P),ct))}finally{const T=L!==null?zt.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,T)}}},this.readRenderTargetPixelsAsync=async function(b,G,$,K,H,ct,mt,Et=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=zt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt)if(G>=0&&G<=b.width-K&&$>=0&&$<=b.height-H){Pt.bindFramebuffer(N.FRAMEBUFFER,bt);const T=b.textures[Et],O=T.format,P=T.type;if(!xe.textureFormatReadable(O))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(P))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Z=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Z),N.bufferData(N.PIXEL_PACK_BUFFER,ct.byteLength,N.STREAM_READ),b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et),N.readPixels(G,$,K,H,pt.convert(O),pt.convert(P),0);const ft=L!==null?zt.get(L).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,ft);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await pu(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Z),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ct),N.deleteBuffer(Z),N.deleteSync(Rt),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,$=0){const K=Math.pow(2,-$),H=Math.floor(b.image.width*K),ct=Math.floor(b.image.height*K),mt=G!==null?G.x:0,Et=G!==null?G.y:0;$t.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,mt,Et,H,ct),Pt.unbindTexture()};const si=N.createFramebuffer(),kn=N.createFramebuffer();this.copyTextureToTexture=function(b,G,$=null,K=null,H=0,ct=null){ct===null&&(H!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=H,H=0):ct=0);let mt,Et,bt,T,O,P,Z,ft,Rt;const Xt=b.isCompressedTexture?b.mipmaps[ct]:b.image;if($!==null)mt=$.max.x-$.min.x,Et=$.max.y-$.min.y,bt=$.isBox3?$.max.z-$.min.z:1,T=$.min.x,O=$.min.y,P=$.isBox3?$.min.z:0;else{const X=Math.pow(2,-H);mt=Math.floor(Xt.width*X),Et=Math.floor(Xt.height*X),b.isDataArrayTexture?bt=Xt.depth:b.isData3DTexture?bt=Math.floor(Xt.depth*X):bt=1,T=0,O=0,P=0}K!==null?(Z=K.x,ft=K.y,Rt=K.z):(Z=0,ft=0,Rt=0);const Kt=pt.convert(G.format),Dt=pt.convert(G.type);let Pe;G.isData3DTexture?($t.setTexture3D(G,0),Pe=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?($t.setTexture2DArray(G,0),Pe=N.TEXTURE_2D_ARRAY):($t.setTexture2D(G,0),Pe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const ce=N.getParameter(N.UNPACK_ROW_LENGTH),qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ie=N.getParameter(N.UNPACK_SKIP_ROWS),ri=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T),N.pixelStorei(N.UNPACK_SKIP_ROWS,O),N.pixelStorei(N.UNPACK_SKIP_IMAGES,P);const se=b.isDataArrayTexture||b.isData3DTexture,Ze=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const X=zt.get(b),kt=zt.get(G),Ht=zt.get(X.__renderTarget),Je=zt.get(kt.__renderTarget);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let we=0;we<bt;we++)se&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(b).__webglTexture,H,P+we),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(G).__webglTexture,ct,Rt+we)),N.blitFramebuffer(T,O,mt,Et,Z,ft,mt,Et,N.DEPTH_BUFFER_BIT,N.NEAREST);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||zt.has(b)){const X=zt.get(b),kt=zt.get(G);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,si),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,kn);for(let Ht=0;Ht<bt;Ht++)se?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.__webglTexture,H,P+Ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,X.__webglTexture,H),Ze?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,kt.__webglTexture,ct,Rt+Ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,kt.__webglTexture,ct),H!==0?N.blitFramebuffer(T,O,mt,Et,Z,ft,mt,Et,N.COLOR_BUFFER_BIT,N.NEAREST):Ze?N.copyTexSubImage3D(Pe,ct,Z,ft,Rt+Ht,T,O,mt,Et):N.copyTexSubImage2D(Pe,ct,Z,ft,T,O,mt,Et);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ze?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Pe,ct,Z,ft,Rt,mt,Et,bt,Kt,Dt,Xt.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,ct,Z,ft,Rt,mt,Et,bt,Kt,Xt.data):N.texSubImage3D(Pe,ct,Z,ft,Rt,mt,Et,bt,Kt,Dt,Xt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ct,Z,ft,mt,Et,Kt,Dt,Xt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ct,Z,ft,Xt.width,Xt.height,Kt,Xt.data):N.texSubImage2D(N.TEXTURE_2D,ct,Z,ft,mt,Et,Kt,Dt,Xt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ri),ct===0&&G.generateMipmaps&&N.generateMipmap(Pe),Pt.unbindTexture()},this.copyTextureToTexture3D=function(b,G,$=null,K=null,H=0){return ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,$,K,H)},this.initRenderTarget=function(b){zt.get(b).__webglFramebuffer===void 0&&$t.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$t.setTextureCube(b,0):b.isData3DTexture?$t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$t.setTexture2DArray(b,0):$t.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){C=0,g=0,L=null,Pt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class H0{constructor(t){R(this,"keys",new Set);R(this,"justPressed",new Set);R(this,"leftReleased",!1);R(this,"leftDown",!1);R(this,"rightDown",!1);R(this,"dx",0);R(this,"dy",0);R(this,"wheel",0);window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),this.keys.has(e.code)||this.justPressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{e.button===0&&(this.leftDown=!0),e.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),e.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",e=>{this.dx+=e.movementX,this.dy+=e.movementY}),t.addEventListener("wheel",e=>{this.wheel+=e.deltaY})}isDown(t){return this.keys.has(t)}wasPressed(t){return this.justPressed.has(t)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const ue={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},V0={day:{barSeconds:3.2,chords:[[ue.C4,ue.E4,ue.G4],[220,ue.C4,ue.E4],[174.61,220,ue.C4],[196,246.94,ue.D4]],style:"melody",melody:[[[ue.E5,0,.5],[ue.G5,.25,.5],[ue.A5,.5,.5],[ue.G5,.75,.45]],[[ue.E5,0,.6],[ue.C5,.5,.85]],[[ue.D5,0,.5],[ue.E5,.25,.5],[ue.F5,.5,.5],[ue.D5,.75,.45]],[[ue.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,ue.C4],[ue.C4,ue.E4,ue.G4],[196,246.94,ue.D4],[220,ue.C4,ue.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,ue.C4,ue.E4],[174.61,220,ue.C4],[130.81,164.81,196],[196,246.94,ue.D4]],style:"melody",melody:[[[ue.A4,0,1.4]],[[ue.C5,0,1],[ue.B4,.5,1.2]],[[ue.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class W0{constructor(){R(this,"ctx",null);R(this,"sfxBus",null);R(this,"musicBus",null);R(this,"noiseBuffer",null);R(this,"chordIndex",0);R(this,"musicTimer",null);R(this,"volume",1);R(this,"musicEnabled",!0);R(this,"rainGain",null);R(this,"musicMode","day")}unlock(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.sfxBus=t.createGain(),this.sfxBus.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.connect(t.destination),this.applyVolume();const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;this.noiseBuffer=e,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(t){this.musicMode=t}setRain(t){if(!this.ctx||!this.rainGain)return;const e=t?.09:1e-4;this.rainGain.gain.setTargetAtTime(e,this.ctx.currentTime,1.2)}setVolume(t){this.volume=t,this.applyVolume()}setMusicEnabled(t){this.musicEnabled=t,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(t){if(this.ctx)switch(t){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((e,n)=>this.tone("sine",e,e,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.25,.2,.18+n*.1));break}}tone(t,e,n,s,r,a=0){if(!this.ctx||!this.sfxBus)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),n!==e&&l.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+s),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+s),l.connect(c).connect(this.sfxBus),l.start(o),l.stop(o+s+.05)}noiseBurst(t,e,n,s,r){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const a=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=t,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+s);const c=this.ctx.createGain();c.gain.setValueAtTime(r,a),c.gain.exponentialRampToValueAtTime(.001,a+s),o.connect(l).connect(c).connect(this.sfxBus),o.start(a),o.stop(a+s+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const s=this.ctx.createOscillator();s.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=.05,s.connect(r).connect(n.gain),t.connect(e).connect(n).connect(this.musicBus),t.start(),s.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=1400,e.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const s=this.ctx.createGain();s.gain.value=1;const r=this.ctx.createOscillator();r.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=.18,r.connect(a).connect(s.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,t.connect(e).connect(n).connect(s).connect(this.rainGain).connect(this.musicBus),t.start(),r.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const t=V0[this.musicMode],e=t.barSeconds,n=this.ctx.currentTime+.05,s=this.chordIndex%t.chords.length,r=t.chords[s];this.chordIndex++;for(const l of r){const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type=t.padType,c.frequency.value=l,d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(t.padVol,n+.7),d.gain.setValueAtTime(t.padVol,n+e-1),d.gain.exponentialRampToValueAtTime(1e-4,n+e+.5),c.connect(d).connect(this.musicBus),c.start(n),c.stop(n+e+.6)}const a=this.ctx.createOscillator(),o=this.ctx.createGain();if(a.type="sine",a.frequency.value=r[0]/2,o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.07,n+.3),o.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(o).connect(this.musicBus),a.start(n),a.stop(n+e+.1),t.style==="melody"){const l=t.melody[s%t.melody.length]??[];for(const[c,d,h]of l)this.melodyNote(c,n+d*e,h)}else{const l=[0,1,2,1,0,1,2,1];for(let c=0;c<l.length;c++)this.melodyNote(r[l[c]]*2,n+c/8*e,e/8-.05)}for(const l of t.hats)this.hatTick(n+l*e);this.musicTimer=setTimeout(()=>this.scheduleBar(),e*1e3)}melodyNote(t,e,n){if(!this.ctx||!this.musicBus)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+n),s.connect(r).connect(this.musicBus),s.start(e),s.stop(e+n+.05)}hatTick(t){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const s=this.ctx.createGain();s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n).connect(s).connect(this.musicBus),e.start(t),e.stop(t+.08)}}const q0=22,X0=80;class Y0{constructor(t){R(this,"hitstopT",0);R(this,"shakeT",0);R(this,"shakeDuration",1);R(this,"shakeIntensity",0);R(this,"particles",[]);this.scene=t}get frozen(){return this.hitstopT>0}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t,e){this.shakeIntensity=Math.max(this.shakeIntensity,t),this.shakeT=Math.max(this.shakeT,e),this.shakeDuration=Math.max(e,.01)}burst(t,e,n=10,s=7){for(let r=0;r<n&&!(this.particles.length>=X0);r++){const a=.07+Math.random()*.1,o=new nt(new vo(a),new sn({color:e}));o.position.copy(t);const l=new D(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),c=.35+Math.random()*.3;this.particles.push({mesh:o,velocity:l.multiplyScalar(s*(.5+Math.random()*.7)),life:c,maxLife:c}),this.scene.add(o)}}update(t){if(this.hitstopT=Math.max(0,this.hitstopT-t),this.particles=this.particles.filter(e=>{if(e.life-=t,e.life<=0)return this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),!1;e.velocity.y-=q0*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=t*8,e.mesh.rotation.y+=t*6;const n=e.life/e.maxLife;return e.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=t;const e=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*e;return this.shakeT<=0&&(this.shakeIntensity=0),new D((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new D}}let ji=null;function $0(){if(!ji){const i=new Uint8Array([90,150,210,255]);ji=new Vu(i,i.length,1,oo),ji.minFilter=Ke,ji.magFilter=Ke,ji.needsUpdate=!0}return ji}function _t(i,t={}){const e=new $u({color:i,gradientMap:$0(),transparent:t.transparent??!1,opacity:t.opacity??1,vertexColors:t.vertexColors??!1});return t.emissive!==void 0&&(e.emissive.setHex(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1),e}const K0=new sn({color:1844019,side:$e});function ti(i,t=1.06){var n;const e=[];i.traverse(s=>{s instanceof nt&&!(s instanceof Yc)&&e.push(s)});for(const s of e){const r=new nt(s.geometry,K0);r.position.copy(s.position),r.rotation.copy(s.rotation),r.scale.copy(s.scale).multiplyScalar(t),r.raycast=()=>{},(n=s.parent)==null||n.add(r)}}const j0=.6,Ul=.25;function Z0(){const i=new Ai(700,700,96,96);i.rotateX(-Math.PI/2);const t=_t(2789320,{transparent:!0,opacity:.92});return new nt(i,t)}function J0(i,t,e=1){const n=i.geometry.getAttribute("position"),s=j0*e;for(let r=0;r<n.count;r++){const a=n.getX(r),o=n.getZ(r),l=Math.sin(a*Ul+t)*Math.cos(o*Ul+t*.8)*s;n.setY(r,l)}n.needsUpdate=!0,i.geometry.computeVertexNormals()}const Q0=360,Nl=.65,tg=new Ut(8900331),eg=new Ut(660528),oa=260,Fl=42,ng={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class ig{constructor(t,e,n,s){R(this,"time",.12);R(this,"weather","clear");R(this,"weatherT",50);R(this,"lightningT",6);R(this,"flashT",0);R(this,"rain");R(this,"rainVelocity",[]);this.scene=t,this.sun=e,this.hemi=n,this.ambient=s;const r=new Float32Array(oa*6);for(let o=0;o<oa;o++){const l=(Math.random()-.5)*Fl,c=Math.random()*30,d=(Math.random()-.5)*Fl;r.set([l,c,d,l,c-.9,d],o*6),this.rainVelocity.push(30+Math.random()*14)}const a=new ke;a.setAttribute("position",new nn(r,3)),this.rain=new Xu(a,new go({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,t.add(this.rain)}forceWeather(t){this.weather=t,this.weatherT=60}get rainVisible(){return this.rain.visible}update(t,e,n){if(this.time=(this.time+t/Q0)%1,this.weatherT-=t,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const s=ng[this.weather],r=this.weather!=="clear",a=this.time/Nl,o=this.time<Nl?Math.sin(Math.PI*a):0,l=Math.PI*(1-a);this.sun.position.set(e.x+Math.cos(l)*120,Math.max(Math.sin(l),.12)*130+15,e.z+40),this.sun.target.position.set(e.x,0,e.z),this.sun.intensity=.15+2.45*o,this.hemi.intensity=.25+.45*o;let c=.12+.23*o,d=!1;if(this.weather==="storm"&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,d=!0)),this.flashT>0&&(this.flashT-=t,c+=1.6),this.ambient.intensity=c,!n){const h=eg.clone().lerp(tg,o).multiplyScalar(s.darken);this.flashT>0&&h.lerp(new Ut(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=r&&!n,this.rain.visible){this.rain.position.set(e.x,e.y,e.z);const h=this.rain.geometry.getAttribute("position"),p=this.weather==="storm"?1.6:1;for(let f=0;f<oa;f++){let _=h.getY(f*2)-this.rainVelocity[f]*p*t;_<-4&&(_=26+Math.random()*4),h.setY(f*2,_),h.setY(f*2+1,_-.9)}h.needsUpdate=!0}return{isNight:o<.08,weather:this.weather,raining:r,waveScale:s.wave,boatFactor:s.boat,thunder:d}}}const sg=14,rg=1.2,ag=5,eh=2e3,In={x:eh,z:0},og=1100;function Zi(i){return i>og?2:1}const ns=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:eh,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],Ol={x:-60,z:-120},an={x:-40,z:230,r:26},zl={x:60,z:-170},Bl={x:0,z:288},nh=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function lg(i,t){return nh.some(e=>Math.hypot(i-e.x,t-e.z)<e.r)}function la(i){return i*i*(3-2*i)}function cg(i,t,e){const n=t-i.x,s=e-i.z,r=Math.hypot(n,s);if(r>=i.r)return 0;const a=la(Math.min((i.r-r)/sg,1));let o=0;for(const d of i.hills){const h=Math.hypot(n-d.x,s-d.z);h<d.r&&(o+=d.h*la(1-h/d.r))}const l=Math.sin(t*.3)*Math.cos(e*.3)*.5;let c=0;if(i.crater){const d=Math.hypot(n-i.crater.x,s-i.crater.z);d<i.crater.r&&(c=i.crater.depth*la(1-d/i.crater.r))}return a*(rg+o+l-c)}function fe(i,t){let e=0;for(const n of ns)e=Math.max(e,cg(n,i,t));return e}function to(i,t){return ns.some(e=>Math.hypot(i-e.x,t-e.z)<e.r+ag)}function ih(i,t){return fe(i,t)<.25}const Ei=[],hg=.45;function ug(i,t,e=hg){let n=i,s=t;for(const r of Ei){const a=n-r.x,o=s-r.z,l=r.r+e,c=a*a+o*o;if(c>=l*l)continue;const d=Math.sqrt(c);if(d>1e-4){const h=(l-d)/d;n+=a*h,s+=o*h}else n+=l}return{x:n,z:s}}function dg(){Ei.length=0;const i=new me;for(const e of ns)i.add(pg(e));for(const e of nh){const n=new nt(new Er(e.r,24),new sn({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(e.x,fe(e.x,e.z)+.08,e.z),i.add(n)}const t=_t(10134712);for(let e=0;e<10;e++){const n=e/10*Math.PI*2,s=6+e%3*7,r=2.5+e*7%5,a=new nt(new Ee(.9,1.1,r,10),t);a.position.set(an.x+Math.cos(n)*s,r/2-1,an.z+Math.sin(n)*s),a.rotation.z=(e%5-2)*.08,a.castShadow=!0,i.add(a),Ei.push({x:a.position.x,z:a.position.z,r:1})}return i.add(fg()),i}function fg(){const i=new me,t=In.x,e=[{x:t-12,z:-26,body:15260864,roof:12606010},{x:t+12,z:-28,body:14207144,roof:3828378},{x:t-20,z:-12,body:14733488,roof:10119738},{x:t+22,z:-14,body:15260864,roof:4885082},{x:t,z:-18,body:15787208,roof:11552840}];for(const a of e){const o=new me,l=new nt(new Ue(4.2,3,3.6),_t(a.body));l.position.y=1.5;const c=new nt(new cn(3.4,2,4),_t(a.roof));c.position.y=3.9,c.rotation.y=Math.PI/4;const d=new nt(new Ue(.9,1.5,.15),_t(6964002));d.position.set(0,.75,1.85),o.add(l,c,d),ti(o),o.traverse(h=>{h instanceof nt&&(h.castShadow=!0)}),o.rotation.y=(a.x+a.z)%5*.18,o.position.set(a.x,fe(a.x,a.z),a.z),i.add(o),Ei.push({x:a.x,z:a.z,r:2.3})}const n=t+6,s=_t(10516552),r=_t(6964002);for(let a=0;a<8;a++){const o=-48-a*2.2,l=new nt(new Ue(3,.25,2),s);if(l.position.set(n,.85,o),l.castShadow=!0,i.add(l),a%2===0)for(const c of[-1.4,1.4]){const d=new nt(new Ee(.14,.16,1.8,8),r);d.position.set(n+c,0,o),d.castShadow=!0,i.add(d),Ei.push({x:n+c,z:o,r:.35})}}return i}function pg(i){const t=new me,e=i.r*2+14,n=150,s=new Ai(e,e,n,n);s.rotateX(-Math.PI/2);const r=s.getAttribute("position"),a=new Float32Array(r.count*3),o=new Ut(i.sand),l=new Ut(i.grass),c=new Ut(i.dark),d=new Ut;for(let f=0;f<r.count;f++){const _=r.getX(f)+i.x,x=r.getZ(f)+i.z,m=fe(_,x);r.setY(f,m),m<.8?d.copy(o):m<1.8?d.lerpColors(o,l,(m-.8)/1):d.lerpColors(l,c,Math.min((m-1.8)/9,1)),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}s.setAttribute("color",new nn(a,3)),s.computeVertexNormals();const h=new nt(s,_t(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(i.x,0,i.z),t.add(h);let p=0;for(let f=0;f<300&&p<i.treeCount;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(i.r-6),m=i.x+Math.cos(_)*x,u=i.z+Math.sin(_)*x,w=fe(m,u);w>1.8&&w<11&&(t.add(mg(m,w,u,i.treeColor)),p++)}for(let f=0;f<14;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(i.r-4),m=i.x+Math.cos(_)*x,u=i.z+Math.sin(_)*x,w=.7+Math.random()*.9,E=new nt(new _o(w),_t(9079434));E.position.set(m,fe(m,u)+.3,u),E.rotation.set(Math.random(),Math.random(),Math.random()),E.castShadow=!0,t.add(E),Ei.push({x:m,z:u,r:w*.75})}return t}function mg(i,t,e,n){const s=new me,r=.8+Math.random()*.6,a=new nt(new Ee(.3,.45,3),_t(8016432));a.position.y=1.5;const o=new nt(new xo(1.8,1),_t(n));return o.position.y=3.9,o.scale.y=1.15,a.castShadow=!0,o.castShadow=!0,s.add(a,o),s.scale.setScalar(r),s.position.set(i,t-.1,e),Ei.push({x:i,z:e,r:.45*r}),s}const kl=16,Gl=10,Hl=1.6,Vl=[4,-63];class gg{constructor(){R(this,"mesh");R(this,"heading",Math.PI);R(this,"speed",0);R(this,"bobPhase",0);this.mesh=new me;const t=new nt(new Mi(1.1,2.6,4,10),_t(9067056));t.rotation.x=Math.PI/2,t.scale.set(1,1,.55),t.position.y=.3;const e=new nt(new Ue(1.7,.15,3.6),_t(11567184));e.position.y=.75;const n=new nt(new Zn(1.55,.12,8,20),_t(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const s=new nt(new Ee(.09,.11,3.6),_t(6964002));s.position.set(0,2.4,.3);const r=new nt(new Ai(1.9,2.4),_t(15788760));r.material.side=Qe,r.position.set(0,2.6,.28);const a=new nt(new Ee(.05,.05,2),_t(6964002));a.rotation.z=Math.PI/2,a.position.set(0,1.4,.28),this.mesh.add(t,e,n,s,r,a),ti(this.mesh),this.mesh.traverse(o=>{o instanceof nt&&(o.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(Vl[0],.3,Vl[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(t,e){this.mesh.position.set(t,.3,e)}sail(t,e,n=1){let s=0;e.isDown("KeyW")?s=kl*n:e.isDown("KeyS")&&(s=-5),this.speed+=Ps.clamp(s-this.speed,-Gl*t,Gl*t);const r=.4+.6*Math.min(Math.abs(this.speed)/kl,1);e.isDown("KeyA")&&(this.heading+=Hl*r*t),e.isDown("KeyD")&&(this.heading-=Hl*r*t);const a=new D(Math.sin(this.heading),0,Math.cos(this.heading)),o=this.mesh.position.clone().addScaledVector(a,this.speed*t);ih(o.x,o.z)?(this.mesh.position.x=o.x,this.mesh.position.z=o.z):this.speed=0,this.idle(t)}idle(t){this.bobPhase+=t*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let t=2.5;t<=7;t+=1.5)for(let e=0;e<8;e++){const n=e/8*Math.PI*2,s=this.mesh.position.x+Math.sin(n)*t,r=this.mesh.position.z+Math.cos(n)*t;if(fe(s,r)>.3)return new D(s,fe(s,r),r)}return null}}const _g=100,xg=30,vg=10,Mg=3;class yg{constructor(){R(this,"level",1);R(this,"exp",0);R(this,"points",0);R(this,"weaponLevel",0);R(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});R(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return _g+this.attrs.hp*10+this.equip.hp}get maxMP(){return xg+this.attrs.spirit*5+this.equip.mp}get atk(){return vg+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(t){this.exp+=t;let e=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=Mg,e++;return e}allocate(t){return this.points<=0?!1:(this.points--,this.attrs[t]++,!0)}}const sh={small:10,medium:50,large:200};class Sg{constructor(){R(this,"coins",0);R(this,"potions",0);R(this,"crystals",{small:0,medium:0,large:0});R(this,"firstSeaGem",!1);R(this,"secondSeaGem",!1)}useCrystals(t,e){const n=Math.min(e,this.crystals[t]);return this.crystals[t]-=n,n*sh[t]}}const bg=28,Wl=11,ql=8,wg=22,Eg=.25,Tg=.45,Xl=25,Ag=22,Yl=.38,$l=.22,Rg=9,Cg=14,di=.25,Kl=1.25,jl=.35,Pg=.35,Dg=.4,Zl=10,Lg=.15,Ig=.26,Ug=.5,Ng=3.4,Fg=Math.cos(75*Math.PI/180),Og=4.5,de={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056};class zg{constructor(){R(this,"mesh");R(this,"stats",new yg);R(this,"hp");R(this,"mp");R(this,"stamina",100);R(this,"facing",0);R(this,"blocking",!1);R(this,"hasWindGem",!1);R(this,"windLevel",1);R(this,"hasFrostGem",!1);R(this,"sliding",!1);R(this,"divingZone",null);R(this,"airJumpsUsed",0);R(this,"gliding",!1);R(this,"chillT",0);R(this,"burnT",0);R(this,"burnDps",0);R(this,"burnTickAccum",0);R(this,"knockbackVel",new D);R(this,"velocityY",0);R(this,"grounded",!0);R(this,"attackCd",0);R(this,"swingT",0);R(this,"dodgeT",0);R(this,"invulnT",0);R(this,"lungeT",0);R(this,"spinT",0);R(this,"holdT",0);R(this,"chargeReadyFired",!1);R(this,"walkPhase",0);R(this,"idlePhase",0);R(this,"moveAmount",0);R(this,"renderYaw",0);R(this,"dodgeDir",new D);R(this,"body");R(this,"armL");R(this,"armR");R(this,"forearmL");R(this,"forearmR");R(this,"legL");R(this,"legR");R(this,"shinL");R(this,"shinR");R(this,"shield");R(this,"sword");R(this,"bladeMaterial");R(this,"shieldHomePos",new D(0,1.45,-.46));R(this,"shieldBlockPos",new D(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.mesh=new me,this.body=new me,this.mesh.add(this.body),this.legL=this.buildLeg(.17,"L"),this.legR=this.buildLeg(-.17,"R"),this.body.add(this.legL,this.legR);const t=_t(de.tunic),e=new nt(new Ee(.32,.44,.72,14),t);e.position.y=1.4;const n=new nt(new Ee(.44,.6,.5,14,1,!0),t);n.position.y=.74;const s=new nt(new Ee(.26,.34,.16,14),_t(de.collar));s.position.y=1.78;const r=new nt(new Ee(.46,.48,.13,14),_t(de.belt));r.position.y=.98;const a=new nt(new Ue(.16,.12,.05),_t(de.gold));a.position.set(0,.98,.47);const o=new nt(new Ue(.16,.18,.12),_t(de.glove));o.position.set(.34,.9,.18),this.body.add(e,n,s,r,a,o);const l=new nt(new Ee(.13,.15,.2,10),_t(de.skin));l.position.y=1.86,this.body.add(l);const c=new nt(new Le(.34,16,14),_t(de.skin));c.position.y=2.08;const d=new nt(new Le(.37,16,14),_t(de.hair));d.position.set(0,2.16,-.07),d.scale.set(1,.85,1);const h=new nt(new cn(.32,.66,14),_t(de.tunicDark));h.position.set(0,2.54,-.12),h.rotation.x=-.5;const p=new nt(new cn(.1,.4,10),_t(de.tunic));p.position.set(0,2.78,-.5),p.rotation.x=-1.5;const f=new nt(new Zn(.31,.05,8,16),_t(de.gold));f.position.set(0,2.28,-.04),f.rotation.x=Math.PI/2,this.body.add(c,d,h,p,f);const _=_t(de.skin);for(const S of[-1,1]){const F=new nt(new cn(.09,.26,6),_);F.position.set(.32*S,2.06,-.02),F.rotation.z=S*-1.1,this.body.add(F);const C=new nt(new Le(.12,10,8),_t(de.hair));C.position.set(.28*S,1.96,-.04),C.scale.set(.7,1.1,.8),this.body.add(C);const g=new nt(new Le(.075,10,8),_t(16777215));g.position.set(.13*S,2.1,.29),g.scale.set(.8,1.1,.6);const L=new nt(new Le(.042,8,6),_t(de.eye));L.position.set(.13*S,2.09,.34);const y=new nt(new Ue(.13,.035,.04),_t(de.brow));y.position.set(.13*S,2.21,.3),y.rotation.z=S*-.12,this.body.add(g,L,y)}const x=new nt(new cn(.04,.1,6),_);x.position.set(0,2.02,.34),x.rotation.x=Math.PI/2,this.body.add(x),this.armL=this.buildArm(.46,"L"),this.armR=this.buildArm(-.46,"R"),this.armR.add(this.buildSword()),this.body.add(this.armL,this.armR);const m=new me,u=new nt(new Ee(.42,.46,.07,16),_t(de.shield));u.rotation.x=Math.PI/2;const w=new nt(new Zn(.44,.05,8,16),_t(de.shieldRim)),E=new nt(new wi(.12),_t(de.gold));E.position.z=-.06,E.scale.set(1,1.4,.4),m.add(u,w,E),m.position.copy(this.shieldHomePos),this.shield=m,this.body.add(m),ti(this.mesh),this.mesh.traverse(S=>{S instanceof nt&&(S.castShadow=!0)}),this.respawn()}buildLeg(t,e){const n=new me,s=new nt(new Ee(.14,.12,.36,10),_t(de.legs));s.position.y=-.18;const r=new me;r.position.y=-.36;const a=new nt(new Ee(.12,.1,.32,10),_t(de.legs));a.position.y=-.16;const o=new nt(new Ue(.21,.18,.36),_t(de.boots));o.position.set(0,-.36,.05);const l=new nt(new Ee(.15,.13,.12,10),_t(de.boots));return l.position.y=-.28,r.add(a,o,l),n.add(s,r),n.position.set(t,.72,0),e==="L"?this.shinL=r:this.shinR=r,n}buildArm(t,e){const n=new me,s=new nt(new Le(.15,12,10),_t(de.guard));s.position.y=.02,s.scale.set(1,.8,1);const r=new nt(new Ee(.1,.085,.34,10),_t(de.tunic));r.position.y=-.18;const a=new me;a.position.y=-.35;const o=new nt(new Ee(.085,.07,.26,10),_t(de.skin));o.position.y=-.13;const l=new nt(new Zn(.09,.035,8,12),_t(de.glove));l.position.y=-.02,l.rotation.x=Math.PI/2;const c=new nt(new Le(.1,10,8),_t(de.glove));return c.position.y=-.25,a.add(o,l,c),n.add(s,r,a),n.position.set(t,1.7,0),e==="L"?this.forearmL=a:this.forearmR=a,n}buildSword(){const t=new me;this.bladeMaterial=_t(de.blade,{emissive:6737151,emissiveIntensity:0});const e=new nt(new Ue(.13,1,.035),this.bladeMaterial);e.position.y=.62;const n=new nt(new cn(.075,.24,4),this.bladeMaterial);n.position.y=1.24,n.rotation.y=Math.PI/4;const s=new nt(new Ue(.035,.95,.05),_t(de.shieldRim));s.position.y=.6;const r=new nt(new Ue(.4,.09,.09),_t(de.guard));r.position.y=.1;const a=new nt(new cn(.06,.16,6),_t(de.guard));a.position.set(.2,.16,0);const o=a.clone();o.position.x=-.2;const l=new nt(new Ee(.05,.05,.3,8),_t(de.grip));l.position.y=-.1;const c=new nt(new Le(.08,8,8),_t(de.gold));return c.position.y=-.28,t.add(e,n,s,r,a,o,l,c),t.position.y=-.58,t.rotation.x=Math.PI/2,this.sword=t,t}get invulnerable(){return this.invulnT>0}get chargeRatio(){return Ps.clamp((this.holdT-di)/(Kl-di),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,fe(0,-52),-52)}update(t,e,n){this.attackCd=Math.max(0,this.attackCd-t),this.invulnT=Math.max(0,this.invulnT-t),this.swingT=Math.max(0,this.swingT-t),this.dodgeT=Math.max(0,this.dodgeT-t),this.lungeT=Math.max(0,this.lungeT-t),this.spinT=Math.max(0,this.spinT-t),this.chillT=Math.max(0,this.chillT-t);const s=this.stats.speedMultiplier,r=new D;let a=!1,o=!1;if(this.blocking=e.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)r.copy(this.dodgeDir).multiplyScalar(wg*t);else{const x=new D(-Math.sin(n),0,-Math.cos(n)),m=new D(-x.z,0,x.x);if(e.isDown("KeyW")&&r.add(x),e.isDown("KeyS")&&r.sub(x),e.isDown("KeyD")&&r.add(m),e.isDown("KeyA")&&r.sub(m),r.lengthSq()>0){r.normalize(),this.facing=Math.atan2(r.x,r.z);const u=(this.blocking?Pg:this.holdT>di?Dg:1)*(this.chillT>0?Ug:1);r.multiplyScalar(ql*s*u*t)}if((e.wasPressed("ShiftLeft")||e.wasPressed("ShiftRight"))&&this.stamina>=Xl){o=!0,this.holdT=0,this.chargeReadyFired=!1;const u=r.lengthSq()>0?r.clone().normalize():new D(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(u),this.dodgeT=Eg,this.invulnT=Tg,this.stamina-=Xl}}if(this.lungeT>0&&r.addScaledVector(new D(Math.sin(this.facing),0,Math.cos(this.facing)),Rg*t),this.stamina=Math.min(100,this.stamina+Ag*t),this.moveAmount=r.length()/Math.max(t,1e-6)/ql,this.sliding=!1,this.grounded){const x=this.mesh.position.x,m=this.mesh.position.z,u=.6,w=(fe(x+u,m)-fe(x-u,m))/(2*u),E=(fe(x,m+u)-fe(x,m-u))/(2*u),S=Math.hypot(w,E);S>.85&&(this.sliding=!0,r.x+=-w/S*6.5*t,r.z+=-E/S*6.5*t)}this.knockbackVel.lengthSq()>.01?(r.addScaledVector(this.knockbackVel,t),this.knockbackVel.multiplyScalar(Math.max(1-t*6,0))):this.knockbackVel.set(0,0,0);const l=this.mesh.position.clone().add(r),c=ug(l.x,l.z);l.x=c.x,l.z=c.z,(to(l.x,l.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(l.x-this.divingZone.x,l.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=l.x,this.mesh.position.z=l.z),e.wasPressed("Space")&&(this.grounded?(this.velocityY=Wl,this.grounded=!1,a=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=Wl*.9,a=!0)),this.velocityY-=bg*t,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&e.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*t;const h=fe(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let p=!1,f=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,e.consumeLeftRelease();else if(e.leftDown&&(this.holdT+=t,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),e.consumeLeftRelease()){const x=this.holdT;this.holdT=0,this.chargeReadyFired=!1,x>di?(f=this.chargeRatioFor(x),this.spinT=jl,this.attackCd=Yl/s):this.attackCd<=0&&(this.attackCd=Yl/s,this.swingT=$l,this.lungeT=.12,p=!0)}return this.animate(t),{attacked:p,spin:f,chargeReady:_,jumped:a,dodged:o}}chargeRatioFor(t){return Ps.clamp((t-di)/(Kl-di),0,1)}animate(t){let e=this.facing-this.renderYaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;this.renderYaw+=e*Math.min(Cg*t,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=t*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=t*11*Math.min(this.moveAmount,1.4));const s=this.dodgeT>0,r=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=s?1.4:r,this.legR.rotation.x=s?1.4:-r,this.shinL.rotation.x=s?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=s?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:s?-1.6:-r*.8,this.forearmL.rotation.x=this.blocking?-.7:s?-1.4:-.25-Math.max(0,-r)*.5;const a=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(a,Math.min(t*14,1));const o=this.holdT>di;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/$l;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else o?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=r*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||o?0:s?-1.4:-.2-Math.max(0,r)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const l=this.chargeRatio;if(l>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new Ut(16777215),h)}else this.bladeMaterial.emissiveIntensity=l*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/jl)*Math.PI*2:0;const c=n?Math.abs(Math.sin(this.walkPhase))*.07:0,d=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=c+d,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(t,e){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&e&&this.stamina>=Zl){const s=new D().subVectors(e,this.mesh.position).setY(0).normalize(),r=new D(Math.sin(this.facing),0,Math.cos(this.facing));if(s.dot(r)>Ig){this.stamina-=Zl;const a=Math.max(1,Math.round((t-this.stats.def)*Lg));return this.hp=Math.max(0,this.hp-a),this.invulnT=.25,{taken:a,blocked:!0}}}const n=Math.max(1,t-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,{taken:n,blocked:!1}}applyEnvironmentDamage(t){this.isDead||(this.hp=Math.max(0,this.hp-t))}chill(t){this.isDead||(this.chillT=Math.max(this.chillT,t))}applyBurn(t,e){this.isDead||(this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e))}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(t,e){if(this.isDead)return;const n=new D().subVectors(this.mesh.position,t).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(e)}blinkTo(t,e){this.mesh.position.set(t,fe(t,e),e),this.invulnT=Math.max(this.invulnT,.3)}}const Bg={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},kg=1.5,ca=.45,Jl=12,Gg=3.2,Hg=20,Vg=25,Wg=.45,qg=.35,Xg=14,Yg=1.7,Ql=.8,tc=.3,$g={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}};class vt{constructor(t,e,n){R(this,"mesh");R(this,"kind");R(this,"hp");R(this,"state","patrol");R(this,"remote",!1);R(this,"netIndex",-1);R(this,"pendingNetDamage",0);R(this,"pendingNetFreeze",0);R(this,"pendingNetStun",0);R(this,"pendingNetBurnSec",0);R(this,"pendingNetBurnDps",0);R(this,"remoteFlag",0);R(this,"remoteRingT",0);R(this,"netTarget",new D);R(this,"netYaw",0);R(this,"netDead",!1);R(this,"config");R(this,"home");R(this,"waypoint");R(this,"attackCd",0);R(this,"stateT",0);R(this,"respawnT",0);R(this,"flashT",0);R(this,"freezeT",0);R(this,"burnT",0);R(this,"burnDps",0);R(this,"burnTickAccum",0);R(this,"stunT",0);R(this,"specialEvent",null);R(this,"specialPhase","");R(this,"hopPhase",Math.random()*Math.PI*2);R(this,"lungeDir",new D);R(this,"lungeHitDone",!1);R(this,"knockback",new D);R(this,"baseColor");R(this,"body");R(this,"blob");R(this,"blobMaterial");R(this,"hpBar");R(this,"hpCanvas");R(this,"hpTexture");R(this,"special");R(this,"specialCd",0);R(this,"specialRing",null);R(this,"specialRingMat",null);R(this,"specialRingT",0);this.kind=t,this.config=$g[t],this.hp=this.config.hp,this.home=new D(e,0,n),this.waypoint=this.home.clone(),this.baseColor=new Ut(this.config.color),this.special=Bg[t]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new me,this.body=new me,this.mesh.add(this.body);const s=this.config.scale>=1.8,r=new Ut(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=_t(this.config.color,{transparent:!0,opacity:.86}),this.blob=new nt(new Le(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const a=new nt(new cn(.26,s?.6:.45,10),_t(this.config.color,{transparent:!0,opacity:.86}));if(a.position.y=s?1.42:1.35,a.rotation.z=.12,this.body.add(this.blob,a),s){const _=_t(r);for(const x of[-1,1]){const m=new nt(new cn(.13,.5,8),_);m.position.set(.42*x,1.18,-.05),m.rotation.z=x*-.7,this.body.add(m)}}const o=_t(16777215),l=_t(2105392),c=_t(r),d=s?.2:.17;for(const _ of[-1,1]){const x=new nt(new Le(d,12,10),o);x.position.set(.3*_,.82,.6),x.scale.set(.85,1.05,.7);const m=new nt(new Le(d*.5,8,6),l);m.position.set(.3*_+.02*_,.8,.74);const u=new nt(new Ue(.26,.07,.07),c);u.position.set(.3*_,1.04,.62),u.rotation.z=_*(s?.5:.15),this.body.add(x,m,u)}const h=new nt(new Le(s?.22:.12,12,8),_t(3151904));h.position.set(0,s?.5:.54,.66),h.scale.set(1.3,s?.8:.45,.5),this.body.add(h),ti(this.body),this.body.traverse(_=>{_ instanceof nt&&(_.castShadow=!0)});const p=new nt(new Le(.42,12,10),_t(r,{transparent:!0,opacity:.55}));p.position.y=.58,p.raycast=()=>{},this.body.add(p);const f=new nt(new Le(.22,10,8),new sn({color:16777215,transparent:!0,opacity:.4}));f.position.set(-.28,.95,.42),f.scale.set(1.2,.7,.6),f.raycast=()=>{},this.body.add(f),this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new Yu(this.hpCanvas),this.hpBar=new Yc(new qc({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(e,fe(e,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}update(t,e,n){if(this.state==="dead")return this.respawnT-=t,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=t;const l=1-Math.max(this.stateT,0)/tc,c=l<.4?1+l*.9:Math.max(1.36*(1-(l-.4)/.6),.01);return this.body.scale.setScalar(c),this.stateT<=0&&(this.state="dead",this.respawnT=Vg,this.mesh.visible=!1),0}if(this.attackCd=Math.max(0,this.attackCd-t),this.specialCd=Math.max(0,this.specialCd-t),this.flashT=Math.max(0,this.flashT-t),this.freezeT>0)return this.freezeT-=t,this.blobMaterial.color.lerpColors(this.baseColor,new Ut(12577535),.75),0;if(this.stunT>0){this.stunT-=t;const l=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16773248),l),0}const s=this.mesh.position,r=s.distanceTo(e),a=s.distanceTo(this.home);let o=0;switch(this.knockback.lengthSq()>.01&&(s.addScaledVector(this.knockback,t),this.knockback.multiplyScalar(Math.max(1-t*8,0))),this.state){case"windup":{this.stateT-=t,this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25,this.stateT<=0&&(this.lungeDir.subVectors(e,s).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=qg);break}case"lunge":{this.stateT-=t,s.addScaledVector(this.lungeDir,Xg*t),this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&r<Yg&&(this.lungeHitDone=!0,o=this.config.dmg),this.stateT<=0&&(this.state="recover",this.stateT=Ql);break}case"recover":{this.stateT-=t,this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const l=this.special;if(this.stateT-=t,this.specialPhase==="telegraph"){const c=1-Math.max(this.stateT,0)/l.telegraph;if(this.body.scale.setScalar(1+c*.25),this.updateRing(c,!0),this.stateT<=0){const d=!n&&r<=l.radius,h=Math.round(this.config.dmg*l.dmgMul);let p=0;d&&l.effect==="drain"&&(p=Math.min(this.config.hp-this.hp,Math.round(h*kg)),p>0&&(this.hp+=p,this.drawHpBar())),this.specialEvent={name:l.name,sfx:l.sfx,color:l.color,dmg:h,knock:l.knock,effect:l.effect,hitPlayer:d,healed:p},this.specialPhase="blast",this.specialRingT=0,this.stateT=ca,this.body.scale.setScalar(1)}}else this.specialRingT+=t,this.updateRing(this.specialRingT/ca,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=Ql);break}default:{if(n)this.state="patrol";else if(a>Hg)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&r<=Jl&&r<=this.special.radius+2){this.startSpecial();break}else if(r<=Gg&&this.attackCd<=0){this.state="windup",this.stateT=Wg,this.attackCd=1.8;break}else r<=Jl?this.state="chase":this.state="patrol";const l=this.state==="chase"?e:this.waypoint;this.state==="patrol"&&s.distanceTo(this.waypoint)<1&&this.pickWaypoint();const c=new D().subVectors(l,s);c.y=0;const d=this.state==="chase"?this.config.speed:this.config.speed*.5;c.lengthSq()>.01&&(c.normalize(),s.addScaledVector(c,d*t),this.mesh.rotation.y=Math.atan2(c.x,c.z)),this.hopPhase+=t*(this.state==="chase"?9:5);const h=Math.abs(Math.sin(this.hopPhase));this.body.position.y=h*.35,this.body.scale.y=.8+h*.3,this.body.scale.x=this.body.scale.z=1.1-h*.15;break}}return this.flashT>0?this.blobMaterial.color.setHex(16777215):this.state==="windup"?this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16733508),.55):this.blobMaterial.color.copy(this.baseColor),this.burnT>0&&this.flashT<=0&&this.blobMaterial.color.lerp(new Ut(16738860),.5),s.y=fe(s.x,s.z),o}freeze(t){if(!this.isDead){if(this.remote){this.pendingNetFreeze=Math.max(this.pendingNetFreeze,t);return}this.freezeT=Math.max(this.freezeT,t)}}burn(t,e){if(!this.isDead){if(this.remote){this.pendingNetBurnSec=Math.max(this.pendingNetBurnSec,t),this.pendingNetBurnDps=Math.max(this.pendingNetBurnDps,e);return}this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e)}}stun(t){if(!this.isDead){if(this.remote){this.pendingNetStun=Math.max(this.pendingNetStun,t);return}this.stunT=Math.max(this.stunT,t)}}get statusFlag(){return this.specialPhase==="telegraph"?1:this.specialPhase==="blast"?2:this.freezeT>0?3:this.stunT>0?4:this.burnT>0?5:0}get specialSkill(){var t;return((t=this.special)==null?void 0:t.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const t=new sn({color:this.special.color,transparent:!0,opacity:.4,side:Qe,depthWrite:!1}),e=new nt(new Tr(.62,1,48),t);e.rotation.x=-Math.PI/2,e.position.y=.12,e.raycast=()=>{},this.mesh.add(e),this.specialRing=e,this.specialRingMat=t}updateRing(t,e){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(e)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(t*Math.PI*6));else{const s=(.15+.95*Math.min(t,1))*n;this.specialRing.scale.set(s,s,s),this.specialRingMat.opacity=.7*(1-Math.min(t,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(t,e){return this.isDead?!1:this.remote?(this.pendingNetDamage+=t,this.flashT=.12,!1):(this.hp=Math.max(0,this.hp-t),this.flashT=.12,e&&this.knockback.copy(e).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=tc,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),!0):!1)}refreshHpBar(){this.drawHpBar()}get remoteStatusFlag(){return this.remoteFlag}updateRemote(t){if(!this.mesh.visible)return;const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.netTarget,e);let n=this.netYaw-this.mesh.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.mesh.rotation.y+=n*e,this.flashT=Math.max(0,this.flashT-t),this.hopPhase+=t*6,this.body.position.y=Math.abs(Math.sin(this.hopPhase))*.12,this.flashT>0?this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16777215),.7):this.blobMaterial.color.copy(this.baseColor),this.renderRemoteStatus(t)}renderRemoteStatus(t){const e=this.remoteFlag;if(e===1?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT,!0)):e===2?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT/ca,!1)):this.hideRing(),!(this.flashT>0))if(e===3)this.blobMaterial.color.lerpColors(this.baseColor,new Ut(12577535),.75);else if(e===4){const n=.4+.4*Math.abs(Math.sin(this.hopPhase*5));this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16773248),n)}else e===5&&this.blobMaterial.color.lerp(new Ut(16738860),.5)}applyNetSnapshot(t,e,n,s,r,a,o){const l=!this.netDead;return this.netDead=r,this.hp=a,this.state=r?"dead":"patrol",o!==this.remoteFlag&&(this.remoteFlag=o,this.remoteRingT=0),r?(this.remoteFlag=0,this.hideRing(),this.mesh.visible&&(this.mesh.visible=!1,this.hpBar.visible=!1),l):(this.mesh.visible||(this.mesh.visible=!0,this.hpBar.visible=!0,this.mesh.position.set(t,e,n)),this.netTarget.set(t,e,n),this.netYaw=s,this.drawHpBar(),!1)}revive(){this.hp=this.config.hp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,fe(this.home.x,this.home.z),this.home.z),this.drawHpBar()}pickWaypoint(){const t=Math.random()*Math.PI*2,e=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(t)*e,0,this.home.z+Math.sin(t)*e)}drawHpBar(){const t=this.hpCanvas.getContext("2d");t&&(t.clearRect(0,0,96,18),t.fillStyle="rgba(0,0,0,0.65)",t.fillRect(0,0,96,18),t.fillStyle="#e74c3c",t.fillRect(1,1,94*(this.hp/this.config.hp),16),t.font="bold 12px sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=3,t.strokeStyle="rgba(0,0,0,0.8)",t.strokeText(`${this.hp}/${this.config.hp}`,48,10),t.fillStyle="#fff",t.fillText(`${this.hp}/${this.config.hp}`,48,10),this.hpTexture.needsUpdate=!0)}}const Kg=3.5;class Dn{constructor(t,e,n,s,r,a="talk"){R(this,"mesh");R(this,"idlePhase",Math.random()*Math.PI*2);R(this,"body");this.name=t,this.linesProvider=r,this.role=a,this.mesh=new me,this.body=new me,this.mesh.add(this.body);const o=new nt(new Ee(.28,.52,1.5,12),_t(s));o.position.y=.78;const l=new nt(new Le(.32,14,12),_t(15911328));l.position.y=1.85;const c=new nt(new cn(.62,.3,14),_t(14202976));c.position.y=2.12,this.body.add(o,l,c),ti(this.body),this.body.traverse(d=>{d instanceof nt&&(d.castShadow=!0)}),this.mesh.position.set(e,fe(e,n),n)}getLines(){return this.linesProvider()}update(t,e){this.idlePhase+=t*2,this.body.position.y=Math.sin(this.idlePhase)*.025;const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z,r=Math.hypot(n,s);return r<6&&(this.mesh.rotation.y=Math.atan2(n,s)),r<Kg}}const jg=6,Zg=.9,Jg=9,Qg={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class Ct{constructor(t,e,n){R(this,"mesh");R(this,"kind");R(this,"bobPhase",Math.random()*Math.PI*2);R(this,"baseY");if(this.kind=t,t==="coin")this.mesh=new nt(new Ee(.22,.22,.06,12),_t(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(t==="gem-flame"||t==="gem-wind"||t==="gem-earth"||t==="gem-frost"||t==="gem-tide"||t==="gem-void"||t==="gem-lava"||t==="gem-aqua"||t==="gem-life"){const o={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[t];this.mesh=new nt(new wi(.75),_t(o,{emissive:o,emissiveIntensity:.9}))}else if(t==="fruit-thunder"||t==="fruit-gravity"){const o={"fruit-thunder":16773216,"fruit-gravity":11559167}[t];this.mesh=new nt(new Le(.6,16,14),_t(o,{emissive:o,emissiveIntensity:.9}))}else{const a=Qg[t];this.mesh=new nt(new wi(a.size),_t(a.color,{emissive:a.color,emissiveIntensity:.5}))}const s=e+(Math.random()-.5)*1.6,r=n+(Math.random()-.5)*1.6;this.baseY=fe(s,r)+.7,this.mesh.position.set(s,this.baseY,r)}update(t,e){this.bobPhase+=t*3,this.mesh.rotation.y+=t*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z,r=Math.hypot(n,s);if(r<jg&&r>.01){const a=Math.min(Jg*t/r,1);this.mesh.position.x+=n*a,this.mesh.position.z+=s*a}return r<Zg}}const t_=1.8;class ys{constructor(t,e,n,s={}){R(this,"mesh");R(this,"damage");R(this,"freezes");R(this,"burns");R(this,"leech");R(this,"life");R(this,"lifetime");R(this,"speed");R(this,"direction");R(this,"material");R(this,"hitEnemies",new Set);this.damage=n,this.freezes=s.freezes??!1,this.burns=s.burns??!1,this.leech=s.leech??0,this.lifetime=s.lifetime??.9,this.speed=s.speed??22,this.life=this.lifetime,this.direction=new D(Math.sin(e),0,Math.cos(e)),this.material=new sn({color:s.color??8382719,transparent:!0,opacity:.85,side:Qe});const r=Math.PI*.95;this.mesh=new nt(new Zn(1.2,.16,8,20,r),this.material),this.mesh.position.copy(t),this.mesh.position.y=fe(t.x,t.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,e,-Math.PI/2-r/2)}get expired(){return this.life<=0}update(t,e){if(this.life-=t,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*t),this.mesh.position.y=fe(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9),this.material.opacity=.85*(1-n*.7);const s=[];for(const r of e){if(r.isDead||this.hitEnemies.has(r))continue;const a=r.mesh.position.x-this.mesh.position.x,o=r.mesh.position.z-this.mesh.position.z;Math.hypot(a,o)<t_*this.mesh.scale.x&&(this.hitEnemies.add(r),s.push(r))}return s}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const ec=16,nc=18,e_=16,n_=9,i_=.7,ic=8,sc=.3,So=2,s_=["thunder","gravity"],rc=[500,1100],ac=3;function rh(i){return 1+.5*(i-1)}function r_(i,t=1){return Math.round((20+i*2)*rh(t))}function a_(i=1){return 2+i}function o_(i=1){return .3+.3*i}function l_(i,t=1){return Math.round((10+i)*rh(t))}function c_(i=1){return 5+i}function h_(i=1){return 1+.5*i}class u_{constructor(){R(this,"thunderOwned",!1);R(this,"gravityOwned",!1);R(this,"levels",{thunder:1,gravity:1});R(this,"equipped",[])}ownedOf(t){return t==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<So}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const d_=6;class f_{constructor(t,e,n,s,r){R(this,"mesh");R(this,"damage");R(this,"center");R(this,"radius");R(this,"life");R(this,"tickT",0);R(this,"spin",0);R(this,"ring");R(this,"core");R(this,"ringMaterial");R(this,"coreMaterial");this.center=new D(t,fe(t,e)+.4,e),this.radius=n,this.life=s,this.damage=r,this.mesh=new me,this.ringMaterial=new sn({color:10119912,transparent:!0,opacity:.5,side:Qe}),this.ring=new nt(new Zn(n,.4,8,32),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.coreMaterial=new sn({color:14201087,transparent:!0,opacity:.8}),this.core=new nt(new Le(.8,12,10),this.coreMaterial),this.mesh.add(this.ring,this.core),this.mesh.position.copy(this.center)}get expired(){return this.life<=0}update(t,e){this.life-=t,this.spin+=t*6,this.mesh.rotation.y=this.spin;const n=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(n);const s=Math.min(this.life,1);this.ringMaterial.opacity=.5*s,this.coreMaterial.opacity=.8*s;for(const r of e){if(r.isDead)continue;const a=this.center.x-r.mesh.position.x,o=this.center.z-r.mesh.position.z,l=Math.hypot(a,o);if(l>this.radius||l<.6)continue;const c=Math.min(d_*t,l-.5);r.mesh.position.x+=a/l*c,r.mesh.position.z+=o/l*c}if(this.tickT+=t,this.tickT>=sc){this.tickT-=sc;const r=[];for(const a of e){if(a.isDead)continue;Math.hypot(this.center.x-a.mesh.position.x,this.center.z-a.mesh.position.z)<=this.radius&&r.push(a)}return r}return[]}dispose(){this.ring.geometry.dispose(),this.core.geometry.dispose(),this.ringMaterial.dispose(),this.coreMaterial.dispose()}}class p_{constructor(t){R(this,"group");R(this,"life");R(this,"lifetime",.28);R(this,"material");this.life=this.lifetime,this.group=new me,this.material=new go({color:12577023,transparent:!0,opacity:.95});for(let e=0;e<t.length-1;e++){const n=new ke().setFromPoints(m_(t[e],t[e+1]));this.group.add(new Ja(n,this.material))}}get expired(){return this.life<=0}update(t){this.life-=t,this.material.opacity=.95*Math.max(this.life/this.lifetime,0)}dispose(){this.group.traverse(t=>{t instanceof Ja&&t.geometry.dispose()}),this.material.dispose()}}function m_(i,t){const e=[],s=new D().subVectors(t,i),r=new D(-s.z,0,s.x).normalize();for(let a=0;a<=6;a++){const o=new D().lerpVectors(i,t,a/6);a>0&&a<6&&(o.addScaledVector(r,(Math.random()-.5)*1.2),o.y+=(Math.random()-.5)*.8),e.push(o)}return e}function g_(i){const t=`${location.protocol==="https:"?"wss:":"ws:"}//${location.hostname}:8787`,e=new URL(t);return e.searchParams.set("room",i),e.toString()}class __{constructor(t){R(this,"ws",null);R(this,"cb");R(this,"localId",null);R(this,"room",null);R(this,"hostId",null);this.cb=t}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}get isHost(){return this.connected&&this.hostId!==null&&this.hostId===this.localId}connect(t){this.room=t;let e;try{e=new WebSocket(g_(t))}catch(s){console.warn("[net] 無法建立連線,維持單機:",s);return}this.ws=e,e.addEventListener("open",()=>{var s,r;(r=(s=this.cb).onStatus)==null||r.call(s,!0)}),e.addEventListener("message",s=>{var a,o,l,c,d,h,p,f,_,x,m,u,w,E;let r;try{r=JSON.parse(s.data)}catch{return}switch(r.t){case"welcome":this.localId=r.id,this.room=r.room,this.hostId=r.host;for(const S of r.others)this.cb.onState(S.id,S.state);(o=(a=this.cb).onHostChange)==null||o.call(a,this.isHost);break;case"state":this.cb.onState(r.id,r.state);break;case"join":break;case"leave":this.cb.onLeave(r.id);break;case"host":this.hostId=r.id,(c=(l=this.cb).onHostChange)==null||c.call(l,this.isHost);break;case"enemies":(h=(d=this.cb).onEnemies)==null||h.call(d,r.e);break;case"hit":(f=(p=this.cb).onHit)==null||f.call(p,r.i,r.dmg,r.id);break;case"kill":(x=(_=this.cb).onKill)==null||x.call(_,r.i,r.by);break;case"pdmg":r.to===this.localId&&((u=(m=this.cb).onPlayerDamage)==null||u.call(m,r.dmg,r.sx,r.sy,r.sz,r.knock,r.eff));break;case"cc":(E=(w=this.cb).onCc)==null||E.call(w,r.i,r.kind,r.sec,r.dps);break}});const n=()=>{var s,r,a,o;this.ws===e&&(this.ws=null,this.localId=null,this.hostId=null,(r=(s=this.cb).onStatus)==null||r.call(s,!1),(o=(a=this.cb).onHostChange)==null||o.call(a,!1))};e.addEventListener("close",n),e.addEventListener("error",n)}sendState(t){this.connected&&this.ws.send(JSON.stringify({t:"state",state:t}))}sendEnemies(t){this.connected&&this.ws.send(JSON.stringify({t:"enemies",e:t}))}sendHit(t,e){this.connected&&this.ws.send(JSON.stringify({t:"hit",i:t,dmg:e}))}sendKill(t,e){this.connected&&this.ws.send(JSON.stringify({t:"kill",i:t,by:e}))}sendPlayerDamage(t,e,n,s,r,a,o){this.connected&&this.ws.send(JSON.stringify({t:"pdmg",to:t,dmg:e,sx:n,sy:s,sz:r,knock:a,eff:o}))}sendCc(t,e,n,s){this.connected&&this.ws.send(JSON.stringify({t:"cc",i:t,kind:e,sec:n,dps:s}))}}const oc=[4891647,16747068,12086271,16765500,3985568,16739229];function x_(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return oc[Math.abs(t)%oc.length]}class v_{constructor(t,e){R(this,"mesh");R(this,"legL");R(this,"legR");R(this,"targetPos",new D);R(this,"targetFacing",0);R(this,"moving",!1);R(this,"walkPhase",0);R(this,"renderYaw",0);const n=x_(t);this.mesh=new me;const s=_t(n),r=_t(15910810),a=new nt(new Ee(.3,.42,.8,12),s);a.position.y=1.35;const o=new nt(new Le(.26,14,12),r);o.position.y=1.95;const l=new nt(new Mi(.1,.5,4,8),s);l.position.set(.42,1.4,0);const c=new nt(new Mi(.1,.5,4,8),s);c.position.set(-.42,1.4,0),this.legL=new me,this.legL.position.set(.16,.9,0);const d=new nt(new Mi(.12,.7,4,8),s);d.position.y=-.4,this.legL.add(d),this.legR=new me,this.legR.position.set(-.16,.9,0);const h=new nt(new Mi(.12,.7,4,8),s);h.position.y=-.4,this.legR.add(h),this.mesh.add(a,o,l,c,this.legL,this.legR),this.mesh.traverse(p=>{p instanceof nt&&(p.castShadow=!0)}),ti(this.mesh),this.targetPos.set(e.x,e.y,e.z),this.targetFacing=e.facing,this.renderYaw=e.facing,this.moving=e.moving,this.mesh.position.copy(this.targetPos),this.mesh.rotation.y=this.renderYaw}setState(t){this.targetPos.set(t.x,t.y,t.z),this.targetFacing=t.facing,this.moving=t.moving}update(t){const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.targetPos,e);let n=this.targetFacing-this.renderYaw;if(n=Math.atan2(Math.sin(n),Math.cos(n)),this.renderYaw+=n*e,this.mesh.rotation.y=this.renderYaw,this.moving){this.walkPhase+=t*9;const s=Math.sin(this.walkPhase)*.5;this.legL.rotation.x=s,this.legR.rotation.x=-s}else this.legL.rotation.x*=1-e,this.legR.rotation.x*=1-e}dispose(){var t;(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh.traverse(e=>{e instanceof nt&&e.geometry.dispose()})}}const lc=10,cc=15,M_=6,hc=12,y_=4,ha=8,S_=8,uc=14,b_=3,dc=16,w_=7,fc=14,bo=4,E_=["flame","wind","earth","frost","tide","void","lava","aqua","life"],pc=[400,900],mc=3;function us(i){return 1+.5*(i-1)}function T_(i,t=1){return Math.round((18+i*2)*us(t)*1.4)}function A_(i,t=1){return Math.round((25+i*2)*us(t))}function R_(i=1){return M_+(i-1)}function C_(i,t=1){return Math.round((20+i*2)*us(t))}function P_(i=1){return 1.5+i}function D_(i=1){return S_+3*(i-1)}function L_(i,t=1){return Math.round((22+i*2)*us(t)*1.4)}function I_(i=1){return 8+4*(i-1)}function U_(i,t=1){return Math.round((20+i*2)*us(t)*1.35)}function N_(i=1){return 2+.7*(i-1)}function F_(i=1){return w_+(i-1)}function O_(i,t=1){return Math.round((18+i*2)*us(t)*1.5)}function z_(i=1){return .4+.1*(i-1)}class B_{constructor(){R(this,"flameOwned",!1);R(this,"windOwned",!1);R(this,"earthOwned",!1);R(this,"frostOwned",!1);R(this,"tideOwned",!1);R(this,"voidOwned",!1);R(this,"lavaOwned",!1);R(this,"aquaOwned",!1);R(this,"lifeOwned",!1);R(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});R(this,"equipped",[])}ownedOf(t){switch(t){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<bo}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const eo=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function no(i){return eo.find(t=>t.id===i)}class k_{constructor(){R(this,"owned",[]);R(this,"equipped",{})}has(t){return this.owned.includes(t)}equip(t){const e=no(t);if(!(!e||!this.has(t)))if(e.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=t}else this.equipped[e.slot]=t}unequip(t){delete this.equipped[t]}slotOf(t){for(const[e,n]of Object.entries(this.equipped))if(n===t)return e;return null}totalBonus(){const t={atk:0,def:0,hp:0,mp:0,agi:0};for(const e of Object.values(this.equipped)){const n=no(e);n&&(t.atk+=n.bonus.atk??0,t.def+=n.bonus.def??0,t.hp+=n.bonus.hp??0,t.mp+=n.bonus.mp??0,t.agi+=n.bonus.agi??0)}return t}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(t){this.owned=[...t.owned],this.equipped={...t.equipped}}}const mi=5,yi={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class G_{constructor(){R(this,"states",{});R(this,"slimeKills",0);R(this,"jellyBaseline",0);R(this,"huntKills",{});R(this,"huntBaselines",{})}get(t){return this.states[t]??null}accept(t){if(this.states[t]||(this.states[t]="active"),t==="jelly"&&(this.jellyBaseline=this.slimeKills),t in yi){const e=t;this.huntBaselines[e]=this.huntKills[yi[e].kind]??0}}complete(t){this.states[t]="done"}addKill(t){this.huntKills[t]=(this.huntKills[t]??0)+1}killsOf(t){return this.huntKills[t]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,mi)}huntProgress(t){const e=(this.huntKills[yi[t].kind]??0)-(this.huntBaselines[t]??0);return Math.min(e,yi[t].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(t){this.states={...t.states},this.slimeKills=t.kills,this.jellyBaseline=t.base,this.huntKills={...t.huntKills??{}},this.huntBaselines={...t.huntBases??{}}}}const ah="archipelago-save-v1";function H_(i){try{localStorage.setItem(ah,JSON.stringify(i))}catch{}}function V_(){try{const i=localStorage.getItem(ah);if(!i)return null;const t=JSON.parse(i);return t.v!==1?null:t}catch{return null}}const W_=`
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
`;class q_{constructor(t){R(this,"hpFill");R(this,"mpFill");R(this,"stFill");R(this,"xpFill");R(this,"levelText");R(this,"coinText");R(this,"crystalText");R(this,"toast");R(this,"deathOverlay");R(this,"toastTimer",null);this.onRespawn=t;const e=document.createElement("style");e.textContent=W_,document.head.appendChild(e);const n=document.createElement("div");n.id="hud",n.innerHTML=`
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
      <div class="hint">WASD 移動｜空白鍵 跳躍｜Shift 閃避｜左鍵 攻擊(按住集氣)｜Q 舉盾｜E 火焰斬｜R 藥水<br/>右鍵拖曳 轉視角｜滾輪 縮放｜Tab 背包｜F 對話/上下船｜小船在南灘,可出海前往其他島</div>
      <div class="toast" id="hud-toast"></div>
      <div id="hud-net" style="position:fixed;top:8px;right:12px;font:600 13px/1.4 system-ui,sans-serif;color:#cfe8ff;text-shadow:0 1px 2px #000;pointer-events:none;"></div>
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast")}update(t,e){const n=t.stats;this.hpFill.style.width=`${t.hp/n.maxHP*100}%`,this.mpFill.style.width=`${t.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(t.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(t.mp)} / ${n.maxMP}`,this.stFill.style.width=`${t.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${e.coins}`;const s=e.crystals.small+e.crystals.medium+e.crystals.large;this.crystalText.textContent=`💎 ${s}`,this.byId("hud-potion").textContent=String(e.potions)}setGems(t){const e=[];t.isEquipped("flame")&&e.push("🔥 焰心石｜E 火焰斬(10 靈力)"),t.isEquipped("wind")&&e.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔"),t.isEquipped("earth")&&e.push("🪨 地殼石｜C 地震波(15 靈力)"),t.isEquipped("frost")&&e.push("❄️ 霜語晶｜V 冰箭(12 靈力)/海上行走耗靈力"),t.isEquipped("tide")&&e.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)"),t.isEquipped("void")&&e.push("🌀 虛空石｜X 瞬移(8 靈力)"),t.isEquipped("lava")&&e.push("🌋 溶岩石｜G 熔岩噴發(14 靈力,灼燒)"),t.isEquipped("aqua")&&e.push("💧 碧波石｜B 碧波震盪(16 靈力,凍結周圍)"),t.isEquipped("life")&&e.push("🌿 翠生石｜H 生命汲取(14 靈力,吸血)");const n=this.byId("hud-gem");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setFruits(t){const e=[];t.isEquipped("thunder")&&e.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),t.isEquipped("gravity")&&e.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setTalkPrompt(t,e="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",t),t&&(n.textContent=e)}setEnv(t){const e=this.byId("hud-env");e.textContent!==t&&(e.textContent=t)}setOnline(t,e,n){const s=this.byId("hud-net");if(!t){s.textContent="";return}const r=n&&n!=="lobby"?` · 房間 ${n}`:"";s.textContent=`🌐 連線中${r} · 同行 ${e} 人`}setQuests(t){this.byId("hud-quests").classList.toggle("show",t.length>0),this.byId("hud-quest-list").innerHTML=t.map(e=>`<div>${e}</div>`).join("")}showToast(t){this.toast.textContent=t,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(t,e=[]){if(t){const n=this.byId("death-options");n.innerHTML="";const s=[{id:"beach",label:"在曙光嶼海灘重生"},...e];for(const r of s){const a=document.createElement("button");a.textContent=r.label,a.dataset.respawn=r.id,r.id!=="beach"&&a.classList.add("shrine"),a.addEventListener("click",()=>this.onRespawn(r.id)),n.appendChild(a)}}this.deathOverlay.classList.toggle("show",t)}byId(t){const e=document.getElementById(t);if(!e)throw new Error(`HUD 元素遺失: ${t}`);return e}}const X_=`
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
`,gc={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},_c={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"};class Y_{constructor(t,e,n,s,r,a,o,l,c,d,h,p){R(this,"root");R(this,"visible",!1);R(this,"teleportOpen",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=s,this.equipment=r,this.onUseCrystal=a,this.onAllocate=o,this.onEquipChange=l,this.onUseSeaGem=c,this.getShrineTargets=d,this.onTeleportShrine=h,this.onLoadoutChange=p;const f=document.createElement("style");f.textContent=X_,document.head.appendChild(f),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var p;if(!this.visible)return;const t=this.stats,e=Object.keys(gc).map(f=>{const _=this.inventory.crystals[f];return`<div class="item">
          <span>${gc[f]} ×${_} <span class="muted">(${sh[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${_===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${_===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=t.points>0?Object.keys(_c).map(f=>`<div class="item">
                <span>${_c[f]} <span class="muted">目前 ${t.attrs[f]}</span></span>
                <button data-alloc="${f}">+1</button>
              </div>`).join(""):'<div class="muted">升級後可在此分配能力點數</div>',s=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],r=!this.gems.hasFreeSlot(),a=s.map(([f,_,x])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.gems.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-gemtoggle="${f}" ${!u&&r?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),o=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],l=!this.fruits.hasFreeSlot(),c=o.map(([f,_,x])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.fruits.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-fruittoggle="${f}" ${!u&&l?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),d=[];this.inventory.firstSeaGem&&d.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&d.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const h=this.equipment.owned.map(f=>{const _=no(f);if(!_)return"";const x=this.equipment.slotOf(f);return`<div class="item">
          <span>${x?"✅ ":""}${_.name} <span class="muted">(${_.desc})</span></span>
          ${x?`<button data-unequip="${x}">卸下</button>`:`<button data-equip="${f}">裝備</button>`}
        </div>`}).join("");this.root.innerHTML=`
      <h3>背包</h3>
      <div class="section">
        <div class="muted">Lv.${t.level}｜EXP ${t.exp} / ${t.expToNext()}｜可分配點數 ${t.points}<br/>
        攻擊 ${t.atk}｜防禦 ${t.def}｜生命上限 ${t.maxHP}｜靈力上限 ${t.maxMP}</div>
      </div>
      <div class="section">${e}</div>
      ${d.length>0?`<div class="section"><h3>重要道具</h3>${d.join("")}</div>`:""}
      <div class="section"><h3>裝備</h3>${h||'<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${bo})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石,只有出戰中的技能與被動才生效</div>
        <div class="gems">${a}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${So})</h3><div class="gems">${c}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${n}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.use;this.onUseCrystal(_,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(p=this.root.querySelector("button[data-tp-open]"))==null||p.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.gemtoggle;this.gems.isEquipped(_)?this.gems.unequip(_):this.gems.equip(_),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.fruittoggle;this.fruits.isEquipped(_)?this.fruits.unequip(_):this.fruits.equip(_),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const t=this.getShrineTargets();return`${t.length>0?t.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const $_=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class K_{constructor(){R(this,"root");R(this,"nameEl");R(this,"textEl");R(this,"lines",[]);R(this,"index",0);R(this,"visible",!1);const t=document.createElement("style");t.textContent=$_,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(t,e){e.length!==0&&(this.lines=e,this.index=0,this.visible=!0,this.nameEl.textContent=t,this.textEl.textContent=e[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const j_=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,xc=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class Z_{constructor(t,e,n){R(this,"root");R(this,"visible",!1);this.inventory=t,this.equipment=e,this.onBuy=n;const s=document.createElement("style");s.textContent=j_,document.head.appendChild(s),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=xc.map(n=>{const s=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${s?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),e=eo.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${t}
      <h3 style="margin-top:14px;">裝備</h3>
      ${e||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const s=xc.find(r=>r.id===n.dataset.buy);!s||this.inventory.coins<s.price||(this.inventory.coins-=s.price,s.id==="potion"?this.inventory.potions++:this.inventory.crystals[s.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const s=eo.find(r=>r.id===n.dataset.buyequip);!s||this.equipment.has(s.id)||this.inventory.coins<s.price||(this.inventory.coins-=s.price,this.equipment.owned.push(s.id),this.onBuy(),this.render())})})}}const J_=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,vc=[100,250,500,800,1200];class Q_{constructor(t,e,n,s,r,a,o){R(this,"root");R(this,"visible",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=s,this.onUpgrade=r,this.onGemUpgrade=a,this.onFruitUpgrade=o;const l=document.createElement("style");l.textContent=J_,document.head.appendChild(l),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=this.stats.weaponLevel,e=t>=vc.length,n=e?0:vc[t],r=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.gems.levels[c],p=h>=mc,f=p?0:pc[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-gemup="${c}" ${p||this.inventory.coins<f?"disabled":""}>
            ${p?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join(""),o=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.fruits.levels[c],p=h>=ac,f=p?0:rc[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-fruitup="${c}" ${p||this.inventory.coins<f?"disabled":""}>
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
      ${o?`<h3 style="margin-top:16px;">果實升階</h3>${o}`:""}
      <div class="muted">按 F 關閉</div>
    `;const l=this.root.querySelector("#forge-btn");l==null||l.addEventListener("click",()=>{e||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.gemup,h=this.gems.levels[d];if(h>=mc)return;const p=pc[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.gems.levels[d]++,this.onGemUpgrade(d),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.fruitup,h=this.fruits.levels[d];if(h>=ac)return;const p=rc[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.fruits.levels[d]++,this.onFruitUpgrade(d),this.render())})})}}const oh="archipelago-settings-v1",ua={volume:1,music:!0,deathDrop:!0};function Mc(){var e;const i=new URLSearchParams(location.search),t=(e=i.get("room"))==null?void 0:e.trim();return t||(i.has("mp")?"lobby":null)}function yc(i){return`${location.origin}${location.pathname}?room=${encodeURIComponent(i)}`}function tx(){return Math.random().toString(36).slice(2,8)}function ex(){try{const i=localStorage.getItem(oh);return i?{...ua,...JSON.parse(i)}:{...ua}}catch{return{...ua}}}const nx=`
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
`;class ix{constructor(t){R(this,"settings");R(this,"root");R(this,"visible",!1);this.audio=t,this.settings=ex();const e=document.createElement("style");e.textContent=nx,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(oh,JSON.stringify(this.settings))}catch{}}render(){var t,e,n,s;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,this.wireMultiplayer(),(t=this.root.querySelector("#set-vol"))==null||t.addEventListener("input",r=>{this.settings.volume=Number(r.target.value)/100,this.apply(),this.persist()}),(e=this.root.querySelector("#set-music"))==null||e.addEventListener("change",r=>{this.settings.music=r.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",r=>{this.settings.deathDrop=r.target.checked,this.persist()}),(s=this.root.querySelector("#set-reset"))==null||s.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}multiplayerSection(){const t=Mc();return t?`
      <div class="row"><span>多人房間</span><span class="mp-room">${t==="lobby"?"預設房間 lobby":t}</span></div>
      <button class="mp-btn" id="set-mp-copy">複製邀請連結</button>
      <button class="mp-btn ghost" id="set-mp-leave">離開房間(回單機)</button>
      <div class="muted" id="set-mp-hint">把連結傳給家人朋友,開同一條連結就會在同一間</div>
    `:`
        <div class="row"><span>多人房間</span><span>單機遊玩</span></div>
        <button class="mp-btn" id="set-mp-create">建立多人房間(產生邀請連結)</button>
        <div class="muted" id="set-mp-hint">建立後把網址列連結傳給家人朋友,即可進同一座群島</div>
      `}wireMultiplayer(){var t,e,n;(t=this.root.querySelector("#set-mp-create"))==null||t.addEventListener("click",()=>{location.href=yc(tx())}),(e=this.root.querySelector("#set-mp-leave"))==null||e.addEventListener("click",()=>{location.href=location.pathname}),(n=this.root.querySelector("#set-mp-copy"))==null||n.addEventListener("click",async()=>{const s=Mc();if(!s)return;const r=yc(s),a=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(r),a&&(a.textContent="已複製邀請連結!")}catch{a&&(a.textContent=r)}})}}const sx=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,rx=.9;class ax{constructor(){R(this,"totalSpawned",0);R(this,"items",[]);const t=document.createElement("style");t.textContent=sx,document.head.appendChild(t)}spawn(t,e,n){const s=document.createElement("div");s.className="float-dmg",s.textContent=e,s.style.color=n,document.body.appendChild(s),this.items.push({el:s,pos:t.clone(),life:rx}),this.totalSpawned++}update(t,e){this.items=this.items.filter(n=>{if(n.life-=t,n.life<=0)return n.el.remove(),!1;n.pos.y+=t*1.6;const s=n.pos.clone().project(e);return s.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(s.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-s.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class ox{constructor(){R(this,"totalSpawned",0);R(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(t){var n;const e=document.createElement("div");for(e.textContent=t,this.root.appendChild(e),this.totalSpawned++,setTimeout(()=>e.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const lx=4;class cx{constructor(t,e){R(this,"mesh");R(this,"respawnT",0);R(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new me;const n=new nt(new Ue(1.2,.7,.85),_t(9067056));n.position.y=.35;const s=new nt(new Ee(.45,.45,1.2,10,1,!1,0,Math.PI),_t(10119738));s.rotation.z=Math.PI/2,s.position.y=.72;const r=new nt(new Ue(1.26,.16,.9),_t(15777856));r.position.y=.45;const a=new nt(new wi(.18),new sn({color:16769152}));a.position.y=1.25,this.mesh.add(n,s,r,a),ti(this.mesh),this.place(t,e)}get active(){return this.mesh.visible}place(t,e){this.mesh.position.set(t,0,e),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(t,e,n){if(!this.active||(this.bobPhase+=t*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=t*.2,!n))return!1;const s=e.x-this.mesh.position.x,r=e.z-this.mesh.position.z;return Math.hypot(s,r)<lx}}const hx=3.5,hr=2,ux=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class dx{constructor(t){R(this,"mesh");R(this,"active",!1);R(this,"crystalGroup");R(this,"crystalMat");R(this,"ring");R(this,"phase",Math.random()*Math.PI*2);this.def=t,this.mesh=new me;const e=new me,n=new nt(new Ee(1.1,1.4,.5,8),_t(8028820));n.position.y=.25;const s=new nt(new Ee(.35,.5,2.2,8),_t(9081508));s.position.y=1.6,e.add(n,s),this.crystalMat=_t(6978186);const r=new nt(new wi(.45),this.crystalMat);this.crystalGroup=new me,this.crystalGroup.add(r),this.crystalGroup.position.y=3.2,e.add(this.crystalGroup),ti(e),e.traverse(a=>{a instanceof nt&&(a.castShadow=!0)}),this.mesh.add(e),this.ring=new nt(new Tr(1.5,1.9,28),new sn({color:8382696,transparent:!0,opacity:.55,side:Qe})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(t.x,fe(t.x,t.z),t.z)}setActive(t){this.active=t,this.ring.visible=t,t?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(t,e){this.phase+=t,this.crystalGroup.rotation.y+=t*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z;return Math.hypot(n,s)<hx}}const fx=.3;function px(){var mt,Et,bt;const i=document.getElementById("app");if(!i)throw new Error("找不到 #app 容器");const t=new G0({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=bc,i.appendChild(t.domElement);const e=new Gu;e.background=new Ut(8900331),e.fog=new po(8900331,150,650);const n=new ln(60,window.innerWidth/window.innerHeight,.1,1e3),s=new W0,r=()=>s.unlock();window.addEventListener("pointerdown",r,{once:!0}),window.addEventListener("keydown",r,{once:!0});const a=new ix(s),o=new td(16774368,2.6);o.position.set(60,100,40),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-80,o.shadow.camera.right=80,o.shadow.camera.top=80,o.shadow.camera.bottom=-80,o.shadow.camera.far=250,o.shadow.bias=-8e-4;const l=new Zu(12574719,15258784,.7),c=new ed(16777215,.35);e.add(o,o.target,l,c);const d=new ig(e,o,l,c),h=new Y0(e),p=new ax,f=new ox;let _=0;const x=Z0();x.position.set(75,0,55),e.add(x,dg());const m=new gg;e.add(m.mesh);let u=!1;const w=new nt(new Er(1.5,20),new sn({color:13626111,transparent:!0,opacity:.75}));w.rotation.x=-Math.PI/2,w.visible=!1,e.add(w);function E(){for(let T=0;T<100;T++){const O=-210+Math.random()*440,P=-240+Math.random()*580;if(ih(O,P)&&!ns.some(Z=>Math.hypot(O-Z.x,P-Z.z)<Z.r+12)&&!(Math.hypot(O-an.x,P-an.z)<an.r+8))return{x:O,z:P}}return{x:-100,z:-40}}const S=[];for(let T=0;T<6;T++){const O=E(),P=new cx(O.x,O.z);S.push(P),e.add(P.mesh)}function F(T,O){let P=ns[0],Z=1/0;for(const Xt of ns){const Kt=Math.hypot(T-Xt.x,O-Xt.z);Kt<Z&&(Z=Kt,P=Xt)}const ft=Math.max(Math.hypot(T-P.x,O-P.z),.001),Rt=(P.r-8)/ft;return{x:P.x+(T-P.x)*Rt,z:P.z+(O-P.z)*Rt}}const C=new H0(t.domElement),g=new zg;e.add(g.mesh);const L=new Map,y=new __({onState(T,O){let P=L.get(T);P?P.setState(O):(P=new v_(T,O),L.set(T,P),e.add(P.mesh),B.setOnline(y.connected,L.size,y.room))},onLeave(T){const O=L.get(T);O&&(O.dispose(),L.delete(T),B.setOnline(y.connected,L.size,y.room))},onStatus(T){B.setOnline(T,L.size,y.room)},onEnemies(T){b(T)},onHit(T,O,P){G(T,O,P)},onKill(T,O){const P=at[T];O===y.localId&&P&&kn(P)},onPlayerDamage(T,O,P,Z,ft,Rt){H(T,O,P,Z,ft,Rt)},onCc(T,O,P,Z){$(T,O,P,Z)}}),M=new URLSearchParams(location.search),U=(mt=M.get("room"))==null?void 0:mt.trim(),Y=U||(M.has("mp")?"lobby":null);Y&&y.connect(Y);let q=0;const Q=g.mesh.position.clone();let it=0;const J=T=>Math.round(T*100)/100,ot=7,k=new Sg,at=[new vt("slime",14,-39),new vt("slime",-14,-40),new vt("slime",6,-32),new vt("slime",22,-18),new vt("slime",-24,-12),new vt("slime",16,6),new vt("slime",-14,20),new vt("slime",36,4),new vt("slime",-32,16),new vt("slime",4,40),new vt("slime",26,30),new vt("slime",-18,-30),new vt("elite",0,14),new vt("elite",-30,-22),new vt("vine",148,75),new vt("vine",162,88),new vt("vine",133,96),new vt("vine",167,116),new vt("vine",140,127),new vt("vine",155,142),new vt("windGuardian",150,110),new vt("ember",-148,88),new vt("ember",-135,100),new vt("ember",-165,105),new vt("ember",-138,132),new vt("ember",-162,138),new vt("earthGuardian",-150,112),new vt("frost",78,-162),new vt("frost",42,-155),new vt("frost",60,-198),new vt("frost",85,-180),new vt("frost",38,-185),new vt("frostGuardian",60,-170),new vt("deep",-48,222),new vt("deep",-30,238),new vt("deep",-44,242),new vt("voidGuardian",-40,230),new vt("voidLord",0,300),new vt("sand",2180,130),new vt("sand",2222,134),new vt("sand",2166,158),new vt("sand",2234,166),new vt("sand",2196,190),new vt("magmaGuardian",2200,144),new vt("reef",1770,-138),new vt("reef",1812,-134),new vt("reef",1756,-110),new vt("reef",1824,-102),new vt("reef",1786,-82),new vt("coralGuardian",1790,-124),new vt("spore",2100,-208),new vt("spore",2142,-204),new vt("spore",2086,-180),new vt("spore",2154,-172),new vt("spore",2116,-152),new vt("lifeGuardian",2120,-194),new vt("marsh",1722,135),new vt("marsh",1758,138),new vt("marsh",1712,160),new vt("marsh",1768,162),new vt("marsh",1740,188),new vt("brine",1962,228),new vt("brine",1998,230),new vt("brine",1952,252),new vt("brine",2008,252),new vt("brine",1980,278),new vt("solar",2242,-62),new vt("solar",2278,-60),new vt("solar",2232,-38),new vt("solar",2288,-38),new vt("solar",2260,-14)];for(const T of at)e.add(T.mesh);at.forEach((T,O)=>T.netIndex=O);const wt=at[12],Nt=at.find(T=>T.kind==="windGuardian"),ne=at.find(T=>T.kind==="earthGuardian"),_e=at.find(T=>T.kind==="frostGuardian"),et=at.find(T=>T.kind==="voidGuardian"),ut=at.find(T=>T.kind==="voidLord"),Lt=at.find(T=>T.kind==="magmaGuardian"),xt=at.find(T=>T.kind==="coralGuardian"),It=at.find(T=>T.kind==="lifeGuardian");let te=[],Ft=[],Se=[],be=[],Jt=null,N=!1,ze=!1,le=!1,xe=!1,Pt=!1,oe=!1,zt=!1,$t=!1,Ae=!1,A=0,v=!1,V=!1,tt=!1;const I=new B_,W=new u_,Tt=new k_,dt=new K_,j=new G_,At=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],rt=25,Mt=()=>[I.flameOwned,I.windOwned,I.earthOwned,I.frostOwned,I.tideOwned,I.voidOwned].filter(Boolean).length,Gt=()=>At.filter(T=>j.killsOf(T)>0).length,Bt=()=>Mt()===6&&Gt()===At.length&&g.stats.level>=rt,pt=T=>T==="small"?"小型":T==="medium"?"中型":"大型",Ot=T=>new Dn(T.name,T.x,T.z,T.color,()=>{const O=j.get(T.quest),P=yi[T.quest].target;return O==="done"?T.doneLines:O==="active"&&j.huntProgress(T.quest)>=P?(j.complete(T.quest),k.coins+=T.coins,k.crystals[T.crystalSize]+=T.crystalCount,s.sfx("gem"),B.showToast(`任務完成:${T.title}!獲得 ${T.coins} 貝拉幣 + ${pt(T.crystalSize)}結晶×${T.crystalCount}`),Yt(),[`你把${T.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${T.coins} 貝拉幣和${pt(T.crystalSize)}經驗結晶 ×${T.crystalCount}。`]):O===null?(j.accept(T.quest),B.showToast(`接受任務:${T.title}(0/${P})`),T.intro):[`還剩 ${P-j.huntProgress(T.quest)} 隻${T.enemyLabel},加油!`,"打完回來找我領賞!"]}),z=[new Dn("村長阿海",2.5,-49.5,9067146,()=>{const T=j.get("gem"),O=j.get("wind"),P=j.get("earth"),Z=j.get("frost"),ft=j.get("tide"),Rt=j.get("depth"),Xt=j.get("final");return Xt==="done"?k.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:Xt==="active"&&V?(j.complete("final"),k.coins+=1e3,s.sfx("victory"),B.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Yt(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):Xt==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:Rt==="done"?(j.accept("final"),B.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):Rt==="active"&&I.voidOwned?(j.complete("depth"),k.coins+=500,k.crystals.large+=3,s.sfx("gem"),B.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Yt(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","按 X 可以短距離瞬移,連虛空的力量都為你所用了。"]):Rt==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:ft==="done"?(j.accept("depth"),B.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):ft==="active"&&I.tideOwned?(j.complete("tide"),k.coins+=300,s.sfx("gem"),B.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Yt(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):ft==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:Z==="done"?(j.accept("tide"),B.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):Z==="active"&&I.frostOwned?(j.complete("frost"),k.coins+=400,k.crystals.large+=2,s.sfx("gem"),B.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Yt(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","按 V 射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):Z==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:P==="done"?(j.accept("frost"),B.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):P==="active"&&I.earthOwned?(j.complete("earth"),k.coins+=300,k.crystals.large+=2,s.sfx("gem"),B.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Yt(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","按 C 可以放出地震波,震飛身邊所有敵人!"]):P==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:O==="done"?(j.accept("earth"),B.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):O==="active"&&I.windOwned?(j.complete("wind"),k.coins+=200,k.crystals.large+=1,s.sfx("gem"),B.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Yt(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):O==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:T==="done"?(j.accept("wind"),B.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):T==="active"&&I.flameOwned?(j.complete("gem"),k.coins+=100,k.crystals.medium+=1,s.sfx("gem"),B.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Yt(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","按 E 就能施放火焰斬,去試試吧!"]):T===null?(j.accept("gem"),B.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]}),new Dn("漁夫小蝦",-4,-48,4881050,()=>{const T=j.get("jelly");return T==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:T==="active"&&j.jellyProgress()>=mi?(j.complete("jelly"),k.coins+=50,k.crystals.small+=2,s.sfx("gem"),B.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Yt(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):T===null?(j.accept("jelly"),B.showToast(`接受任務:果凍清理(0/${mi})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${mi} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${mi-j.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]}),new Dn("商人圓圓",7,-46,13142090,()=>[],"shop"),new Dn("鍛造大師爐婆",-150,78,9062954,()=>[],"forge"),Ot({name:"獵人小藤",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),Ot({name:"礦工岩叔",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),Ot({name:"嚮導阿凜",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),Ot({name:"觀星者星嵐",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new Dn("領航者汐音",230,-95,4889272,()=>k.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:Bt()?(j.get("sea2")===null&&j.accept("sea2"),j.complete("sea2"),k.firstSeaGem=!0,k.secondSeaGem=!0,s.sfx("gem"),f.push("🔱 獲得重要道具【第一海寶石】"),f.push("🌐 獲得重要道具【第二海寶石】"),B.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Yt(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):(j.get("sea2")===null&&(j.accept("sea2"),B.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${Mt()}/6)`,`・擊敗所有種類的敵人(${Gt()}/${At.length} 種)`,`・修煉至 Lv.${rt}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"])),new Dn("鎮長波叔",In.x,In.z-36,13148234,()=>{const T=j.get("lava");return T==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:T==="active"&&I.lavaOwned?(j.complete("lava"),k.coins+=600,k.crystals.large+=2,s.sfx("gem"),B.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Yt(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):T==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:(j.accept("lava"),B.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])}),new Dn("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const T=j.get("aqua");return T==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:T==="active"&&I.aquaOwned?(j.complete("aqua"),k.coins+=700,k.crystals.large+=2,s.sfx("gem"),B.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Yt(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 B 就能震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):T==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:(j.accept("aqua"),B.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])}),new Dn("靈脈守林人葉羅",2098,-162,3846240,()=>{const T=j.get("life");return T==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:T==="active"&&I.lifeOwned?(j.complete("life"),k.coins+=700,k.crystals.large+=2,s.sfx("gem"),B.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Yt(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):T==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:(j.accept("life"),B.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])}),Ot({name:"拓荒者沙吉",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),Ot({name:"潛水夫阿蚌",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),Ot({name:"採集者藤吉",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),Ot({name:"沼澤嚮導苔翁",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),Ot({name:"鹽工鹵伯",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),Ot({name:"拾光人焰娃",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const T of z)e.add(T.mesh);const ht=ux.map(T=>new dx(T));for(const T of ht)e.add(T.mesh);const st=[],yt=T=>{const O=ht.find(P=>P.def.id===T);return O?Zi(O.def.x):1},lt=T=>{const O=Zi(T.def.x),P=st.filter(ft=>yt(ft)===O);let Z=`(本海 ${Math.min(P.length+1,hr)}/${hr})`;if(P.length>=hr){const ft=P[0];st.splice(st.indexOf(ft),1);const Rt=ht.find(Xt=>Xt.def.id===ft);Rt&&(Rt.setActive(!1),Z=`(已替換本海【${Rt.def.island}】)`)}st.push(T.def.id),T.setActive(!0),s.sfx("shrine"),h.burst(T.mesh.position.clone().setY(T.mesh.position.y+3),8382696,14,6),B.showToast(`重生點已設置:【${T.def.island}】${Z}`),Yt()},B=new q_(T=>{const O=ht.find(Z=>Z.active&&Z.def.id===T),P=O?`【${O.def.island}】重生點`:"海灘";if(a.settings.deathDrop){for(const Z of Object.keys(k.crystals))k.crystals[Z]-=Math.floor(k.crystals[Z]*fx);B.showToast(`你在${P}醒來,遺失了部分未使用的結晶……`)}else B.showToast(`你在${P}醒來……(死亡掉落已關閉)`);if(g.respawn(),O){const{x:Z,z:ft}=O.def;g.mesh.position.set(Z,fe(Z,ft+2),ft+2),m.place(O.def.boat.x,O.def.boat.z)}else m.resetToDock();u=!1,v&&ni(!1),B.setDead(!1)}),St=()=>{const T=[],O=Zi(g.mesh.position.x);for(const P of st){if(yt(P)!==O)continue;const Z=ht.find(ft=>ft.def.id===P);Z&&T.push({id:P,label:`在【${Z.def.island}】重生點重生`})}B.setDead(!0,T)},Wt=()=>{g.stats.equip=Tt.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},ve=()=>{g.hasWindGem=I.isEquipped("wind"),g.hasFrostGem=I.isEquipped("frost"),g.windLevel=I.levels.wind},ie=T=>{I.hasFreeSlot()&&I.equip(T),ve()},je=T=>{W.hasFreeSlot()&&W.equip(T)},un=()=>{ve(),B.setGems(I),B.setFruits(W),s.sfx("ui"),Yt()},dn=new Y_(k,g.stats,I,W,Tt,(T,O)=>{const P=k.useCrystals(T,O);if(P<=0)return;const Z=g.stats.addExp(P);Z>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,s.sfx("levelup"),B.showToast(`升級!Lv.${g.stats.level},獲得 ${Z*3} 點能力點數`),Yt()):(s.sfx("crystal"),B.showToast(`注入 ${P} EXP`))},T=>{g.stats.allocate(T),Yt()},()=>{Wt(),s.sfx("ui"),Yt()},T=>wn(T),()=>st.filter(T=>yt(T)===Zi(g.mesh.position.x)).map(T=>{var O;return{id:T,island:((O=ht.find(P=>P.def.id===T))==null?void 0:O.def.island)??T}}),T=>Us(T),un);function Us(T){const O=ht.find(ft=>ft.active&&ft.def.id===T);if(!O||g.isDead)return;v&&ni(!1),u=!1;const{x:P,z:Z}=O.def;g.mesh.position.set(P,fe(P,Z+2),Z+2),m.place(O.def.boat.x,O.def.boat.z),s.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),B.showToast(`傳送至【${O.def.island}】重生點`),dn.isOpen&&dn.toggle(),Yt()}function wn(T){if(!g.isDead){if(v&&ni(!1),u=!1,T===2){const O=In.x,P=In.z-44;g.mesh.position.set(O,fe(O,P),P),m.place(In.x+2,In.z-58),B.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,fe(2.5,-52),-52),m.resetToDock(),B.showToast("海流湧動……回到第一海【曙光嶼】");s.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),dn.isOpen&&dn.toggle(),Yt()}}const En=new Z_(k,Tt,()=>{s.sfx("coin"),Yt()}),Bn=new Q_(k,g.stats,I,W,()=>{s.sfx("anvil"),B.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Yt()},T=>{s.sfx("anvil"),T==="wind"&&(g.windLevel=I.levels.wind),B.showToast(`寶石升階成功!(Lv.${I.levels[T]})`),Yt()},T=>{s.sfx("anvil"),B.showToast(`果實升階成功!(Lv.${W.levels[T]})`),Yt()}),Ns=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:k.coins,crystals:{...k.crystals},flameOwned:I.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:k.potions,quests:j.serialize(),windOwned:I.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:u,earthOwned:I.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:I.frostOwned,tideOwned:I.tideOwned,voidOwned:I.voidOwned,voidDefeated:V,gemLevels:{...I.levels},equipment:Tt.serialize(),shrines:[...st],seaGems:{first:k.firstSeaGem,second:k.secondSeaGem},lavaOwned:I.lavaOwned,aquaOwned:I.aquaOwned,lifeOwned:I.lifeOwned,fruits:{thunderOwned:W.thunderOwned,gravityOwned:W.gravityOwned,levels:{...W.levels}},gemsEquipped:[...I.equipped],fruitsEquipped:[...W.equipped]}),Yt=()=>H_(Ns());setInterval(Yt,12e3);const qt=V_();if(qt){g.stats.level=qt.level,g.stats.exp=qt.exp,g.stats.points=qt.points,Object.assign(g.stats.attrs,qt.attrs),k.coins=qt.coins,Object.assign(k.crystals,qt.crystals),k.potions=qt.potions??0,qt.quests&&j.restore(qt.quests),I.flameOwned=qt.flameOwned,I.windOwned=qt.windOwned??!1,I.earthOwned=qt.earthOwned??!1,I.frostOwned=qt.frostOwned??!1,I.tideOwned=qt.tideOwned??!1,I.voidOwned=qt.voidOwned??!1,I.lavaOwned=qt.lavaOwned??!1,I.aquaOwned=qt.aquaOwned??!1,I.lifeOwned=qt.lifeOwned??!1,qt.fruits&&(W.thunderOwned=qt.fruits.thunderOwned,W.gravityOwned=qt.fruits.gravityOwned,Object.assign(W.levels,qt.fruits.levels)),I.equipped=(qt.gemsEquipped??E_).filter(T=>I.ownedOf(T)).slice(0,bo),W.equipped=(qt.fruitsEquipped??s_).filter(T=>W.ownedOf(T)).slice(0,So),V=qt.voidDefeated??!1,k.firstSeaGem=((Et=qt.seaGems)==null?void 0:Et.first)??!1,k.secondSeaGem=((bt=qt.seaGems)==null?void 0:bt.second)??!1,g.stats.weaponLevel=qt.weaponLevel??0,qt.gemLevels&&Object.assign(I.levels,qt.gemLevels),qt.equipment&&Tt.restore(qt.equipment);for(const T of qt.shrines??[]){const O=ht.find(ft=>ft.def.id===T);if(!O||O.active)continue;const P=Zi(O.def.x);st.filter(ft=>yt(ft)===P).length<hr&&(O.setActive(!0),st.push(T))}Wt(),ve(),B.setGems(I),B.setFruits(W),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set(qt.pos[0],fe(qt.pos[0],qt.pos[1]),qt.pos[1]),qt.boatPos&&m.place(qt.boatPos[0],qt.boatPos[1]),qt.sailing&&(u=!0),B.showToast("讀取存檔完成")}if(!I.tideOwned){const T=new Ct("gem-tide",Ol.x,Ol.z);e.add(T.mesh),te.push(T)}const ei=()=>{if(N||W.gravityOwned)return;N=!0;const T=new Ct("fruit-gravity",Bl.x,Bl.z);e.add(T.mesh),te.push(T)};V&&!W.gravityOwned&&ei();const Ri=document.createElement("div");Ri.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(Ri);const Mn=document.createElement("div");Mn.id="ending",Mn.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",Mn.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const Ci=document.createElement("button");Ci.textContent="回去找村長阿海領賞",Ci.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",Ci.addEventListener("click",()=>{Mn.style.display="none"}),Mn.appendChild(Ci),document.body.appendChild(Mn);const ni=T=>{v=T,g.divingZone=T?an:null,Ri.style.display=T?"block":"none";const O=e.fog;T?(O.color.setHex(1723002),O.near=20,O.far=110,e.background=new Ut(1723002)):(O.color.setHex(8900331),O.near=150,O.far=650,e.background=new Ut(8900331))};let Pi=Math.PI,ii=.35,si=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});function kn(T){const{x:O,z:P}=T.mesh.position,Z=[];T===wt&&!I.flameOwned&&!ze&&(ze=!0,Z.push(new Ct("gem-flame",O,P))),T===Nt&&!I.windOwned&&!le&&(le=!0,Z.push(new Ct("gem-wind",O,P))),T===ne&&!I.earthOwned&&!xe&&(xe=!0,Z.push(new Ct("gem-earth",O,P))),T===_e&&!I.frostOwned&&!Pt&&(Pt=!0,Z.push(new Ct("gem-frost",O,P))),T===et&&!I.voidOwned&&!oe&&(oe=!0,Z.push(new Ct("gem-void",O,P))),T===Lt&&!I.lavaOwned&&!zt&&(zt=!0,Z.push(new Ct("gem-lava",O,P))),T===xt&&!I.aquaOwned&&!$t&&($t=!0,Z.push(new Ct("gem-aqua",O,P))),T===It&&!I.lifeOwned&&!Ae&&(Ae=!0,Z.push(new Ct("gem-life",O,P))),T.kind==="slime"&&j.slimeKills++,j.addKill(T.kind),T.kind==="voidLord"||T.kind==="voidGuardian"?Z.push(new Ct("large",O,P),new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="deep"?Z.push(new Ct("medium",O,P),new Ct("medium",O,P),new Ct("coin",O,P)):T.kind==="frostGuardian"?Z.push(new Ct("large",O,P),new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="frost"?Z.push(new Ct("medium",O,P),new Ct("coin",O,P)):T.kind==="earthGuardian"?Z.push(new Ct("large",O,P),new Ct("medium",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="ember"?Z.push(new Ct("medium",O,P),new Ct("coin",O,P)):T.kind==="magmaGuardian"?Z.push(new Ct("large",O,P),new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="sand"?Z.push(new Ct("medium",O,P),new Ct("coin",O,P)):T.kind==="coralGuardian"?Z.push(new Ct("large",O,P),new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="lifeGuardian"?Z.push(new Ct("large",O,P),new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="reef"||T.kind==="spore"?Z.push(new Ct("medium",O,P),new Ct("coin",O,P)):T.kind==="windGuardian"?Z.push(new Ct("large",O,P),new Ct("coin",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="elite"?Z.push(new Ct("medium",O,P),new Ct("small",O,P),new Ct("coin",O,P),new Ct("coin",O,P)):T.kind==="vine"?Z.push(new Ct("small",O,P),new Ct("small",O,P),new Ct("coin",O,P)):(Z.push(new Ct("small",O,P),new Ct("coin",O,P)),Math.random()<.35&&Z.push(new Ct("small",O,P)));for(const ft of Z)e.add(ft.mesh),te.push(ft)}function b(T){if(!y.isHost)for(let O=0;O<at.length;O++){const P=O*ot;if(P+ot-1>=T.length)break;const Z=at[O];if(Z.applyNetSnapshot(T[P],T[P+1],T[P+2],T[P+3],T[P+4]===1,T[P+5],T[P+6])){const Rt=Z.mesh.position;s.sfx("enemyDie"),h.burst(Rt.clone().setY(Rt.y+1),10217627,16)}}}function G(T,O,P){if(!y.isHost)return;const Z=at[T];if(!Z||Z.isDead)return;const ft=Z.takeDamage(O),Rt=Z.mesh.position.clone().setY(Z.mesh.position.y+2.4);p.spawn(Rt,`-${Math.round(O)}`,"#ffd27a"),ft&&(s.sfx("enemyDie"),h.burst(Z.mesh.position.clone().setY(Z.mesh.position.y+1),10217627,16),y.sendKill(T,P))}function $(T,O,P,Z){if(!y.isHost)return;const ft=at[T];!ft||ft.isDead||(O==="freeze"?ft.freeze(P):O==="burn"?ft.burn(P,Z):ft.stun(P))}function K(T){let O=g.mesh.position,P=null,Z=g.isDead?1/0:T.distanceToSquared(g.mesh.position);for(const[ft,Rt]of L){const Xt=T.distanceToSquared(Rt.mesh.position);Xt<Z&&(Z=Xt,O=Rt.mesh.position,P=ft)}return{pos:O,remoteId:P}}function H(T,O,P,Z,ft,Rt){if(g.isDead)return;const Xt=new D(O,P,Z),Kt=g.takeDamage(T,Xt),Dt=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Kt.blocked?(p.spawn(Dt,`格擋 -${Kt.taken}`,"#cfd8e8"),s.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):Kt.taken>0&&(p.spawn(Dt,`-${Kt.taken}`,"#ff5544"),s.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10),ft>0&&g.shove(Xt,ft),Rt==="chill"?g.chill(3):Rt==="burn"&&g.applyBurn(4,Math.max(2,Math.round(T*.15)))),g.isDead&&St()}const ct=new id;t.setAnimationLoop(()=>{const T=Math.min(ct.getDelta(),.05),O=ct.getElapsedTime(),P=h.frozen?0:T,Z=y.connected&&!y.isHost;for(const X of at)X.remote=Z;const ft=d.update(T,g.mesh.position,v);Zi(g.mesh.position.x)===2?x.position.set(In.x,0,In.z):x.position.set(75,0,55),J0(x,O,ft.waveScale),s.setRain(ft.raining&&!v),ft.thunder&&(s.sfx("thunder"),h.shake(.15,.3)),s.setMusicMode(v?"night":u?"sail":ft.isNight?"night":"day"),B.setEnv(`${ft.isNight?"🌙":"☀️"}${ft.weather==="clear"?"":ft.weather==="rain"?" 🌧️":" ⛈️"}`),C.wasPressed("Tab")&&(s.sfx("ui"),dn.toggle()),C.wasPressed("Escape")&&(s.sfx("ui"),a.toggle());let Rt=null;for(const X of z)X.update(T,g.mesh.position)&&(Rt=X);let Xt=null;for(const X of ht)X.update(T,g.mesh.position)&&(Xt=X);const Kt=!u&&!v&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,Dt=u?m.findLandingSpot():null,Pe=u&&I.isEquipped("tide")&&Math.hypot(m.mesh.position.x-an.x,m.mesh.position.z-an.z)<an.r;if(v?B.setTalkPrompt(!0,"按 F 浮上水面"):Pe?B.setTalkPrompt(!0,"按 F 潛入沉沒古城"):u&&Dt?B.setTalkPrompt(!0,"按 F 上岸"):Kt?B.setTalkPrompt(!0,"按 F 出海"):Xt&&!Xt.active&&!u&&!g.isDead&&!dt.isOpen?B.setTalkPrompt(!0,"按 F 設置重生點"):B.setTalkPrompt(Rt!==null&&!dt.isOpen&&!En.isOpen&&!Bn.isOpen&&!g.isDead&&!u,(Rt==null?void 0:Rt.role)==="shop"?"按 F 交易":(Rt==null?void 0:Rt.role)==="forge"?"按 F 鍛造":"按 F 對話"),C.wasPressed("KeyF")&&(En.isOpen?En.close():Bn.isOpen?Bn.close():dt.isOpen?dt.advance():v?(ni(!1),u=!0,s.sfx("dive"),Yt()):u?Pe?(u=!1,ni(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),s.sfx("dive"),B.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):Dt&&(u=!1,g.mesh.position.copy(Dt),s.sfx("ui"),Yt()):Kt?(u=!0,g.blocking=!1,s.sfx("ui"),B.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):Xt&&!Xt.active&&!g.isDead?lt(Xt):Rt&&!g.isDead&&(s.sfx("ui"),Rt.role==="shop"?En.open():Rt.role==="forge"?Bn.open():dt.open(Rt.name,Rt.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*P),u?(m.sail(P,C,ft.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(P),!u&&!g.isDead&&!dn.isOpen&&!dt.isOpen&&!En.isOpen&&!Bn.isOpen&&!a.isOpen){const{attacked:X,spin:kt,chargeReady:Ht,jumped:Je,dodged:we}=g.update(P,C,Pi);Je&&s.sfx("jump"),we&&s.sfx("dodge"),Ht&&s.sfx("chargeReady");const pn=(Zt,re,Vt)=>{const he=Zt.takeDamage(re,Vt),Re=Zt.mesh.position.clone().setY(Zt.mesh.position.y+1);p.spawn(Re.clone().setY(Re.y+1.2),String(re),"#ffd23c"),h.burst(Re,he?10217627:16769162,he?16:8),h.hitstop(he?.1:.05),h.shake(he?.28:.12,.18),s.sfx(he?"enemyDie":"hit"),he&&kn(Zt)};if(X){s.sfx("swing");const Zt=new D(Math.sin(g.facing),0,Math.cos(g.facing));for(const re of at){if(re.isDead)continue;const Vt=new D().subVectors(re.mesh.position,g.mesh.position);Vt.y=0;const he=Vt.length();he>Ng||he>.5&&Vt.clone().normalize().dot(Zt)<Fg||pn(re,g.stats.atk,Vt)}}if(kt!==null){s.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const Zt=Math.round(g.stats.atk*(1+1.5*kt));for(const re of at){if(re.isDead)continue;const Vt=new D().subVectors(re.mesh.position,g.mesh.position);Vt.y=0,!(Vt.length()>Og)&&pn(re,Zt,Vt)}if(kt>=1){s.sfx("wave");const re=new ys(g.mesh.position,g.facing,Zt);e.add(re.mesh),Ft.push(re)}}if(C.wasPressed("KeyE")&&I.isEquipped("flame")&&!g.blocking&&g.mp>=lc){g.mp-=lc,s.sfx("fire");const Zt=new ys(g.mesh.position,g.facing,T_(g.stats.attrs.spirit,I.levels.flame),{color:16742972,lifetime:.45,speed:18});e.add(Zt.mesh),Ft.push(Zt);const re=g.mesh.position.clone().add(new D(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(re,16742972,12,6)}if(C.wasPressed("KeyR")&&k.potions>0&&g.hp<g.stats.maxHP&&(k.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),s.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),C.wasPressed("KeyC")&&I.isEquipped("earth")&&!g.blocking&&g.mp>=cc){g.mp-=cc,s.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const Zt=A_(g.stats.attrs.spirit,I.levels.earth),re=R_(I.levels.earth);for(const Vt of at){if(Vt.isDead)continue;const he=new D().subVectors(Vt.mesh.position,g.mesh.position);he.y=0,!(he.length()>re)&&pn(Vt,Zt,he)}}if(C.wasPressed("KeyV")&&I.isEquipped("frost")&&!g.blocking&&g.mp>=hc){g.mp-=hc,s.sfx("ice");const Zt=new ys(g.mesh.position,g.facing,C_(g.stats.attrs.spirit,I.levels.frost),{color:10149119,lifetime:.7,speed:26,freezes:!0});e.add(Zt.mesh),Ft.push(Zt)}if(C.wasPressed("KeyX")&&I.isEquipped("void")&&g.mp>=ha){const Zt=Math.sin(g.facing),re=Math.cos(g.facing),Vt=g.mesh.position.clone();for(let he=D_(I.levels.void);he>=2;he-=2){const Re=Vt.x+Zt*he,Ge=Vt.z+re*he;if(to(Re,Ge)||I.isEquipped("frost")&&g.mp>ha||v&&Math.hypot(Re-an.x,Ge-an.z)<an.r){g.mp-=ha,s.sfx("blink"),h.burst(Vt.clone().setY(Vt.y+1),9063144,10,5),g.blinkTo(Re,Ge),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),9063144,10,5);break}}}if(C.wasPressed("KeyG")&&I.isEquipped("lava")&&!g.blocking&&g.mp>=uc){g.mp-=uc,s.sfx("lava");const Zt=new ys(g.mesh.position,g.facing,L_(g.stats.attrs.spirit,I.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});e.add(Zt.mesh),Ft.push(Zt);const re=g.mesh.position.clone().add(new D(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(re,16730652,16,7)}if(C.wasPressed("KeyB")&&I.isEquipped("aqua")&&!g.blocking&&g.mp>=dc){g.mp-=dc,s.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const Zt=U_(g.stats.attrs.spirit,I.levels.aqua),re=F_(I.levels.aqua),Vt=N_(I.levels.aqua);for(const he of at){if(he.isDead)continue;const Re=new D().subVectors(he.mesh.position,g.mesh.position);Re.y=0,!(Re.length()>re)&&(pn(he,Zt,Re),he.isDead||he.freeze(Vt))}}if(C.wasPressed("KeyH")&&I.isEquipped("life")&&!g.blocking&&g.mp>=fc){g.mp-=fc,s.sfx("life");const Zt=new ys(g.mesh.position,g.facing,O_(g.stats.attrs.spirit,I.levels.life),{color:5957722,lifetime:.7,speed:22,leech:z_(I.levels.life)});e.add(Zt.mesh),Ft.push(Zt)}if(C.wasPressed("KeyZ")&&W.isEquipped("thunder")&&!g.blocking&&g.mp>=ec){let Zt=null,re=e_;for(const Vt of at){if(Vt.isDead)continue;const he=Vt.mesh.position.distanceTo(g.mesh.position);he<re&&(re=he,Zt=Vt)}if(Zt){g.mp-=ec,s.sfx("thunder");const Vt=a_(W.levels.thunder),he=o_(W.levels.thunder),Re=r_(g.stats.attrs.spirit,W.levels.thunder),Ge=new Set,Di=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let Rr=Zt,wo=Re;for(;Rr&&Ge.size<Vt;){const Gn=Rr;Ge.add(Gn);const To=Math.round(wo),lh=new D().subVectors(Gn.mesh.position,g.mesh.position),ds=Gn.takeDamage(To,lh);ds||Gn.stun(he);const Fs=Gn.mesh.position.clone().setY(Gn.mesh.position.y+1);Di.push(Fs.clone()),p.spawn(Fs.clone().setY(Fs.y+1.4),String(To),"#bfe8ff"),h.burst(Fs,ds?10217627:12577023,ds?16:8),s.sfx(ds?"enemyDie":"hit"),ds&&kn(Gn);let Ao=null,Ro=n_;for(const Os of at){if(Os.isDead||Ge.has(Os))continue;const Co=Os.mesh.position.distanceTo(Gn.mesh.position);Co<Ro&&(Ro=Co,Ao=Os)}Rr=Ao,wo*=i_}const Eo=new p_(Di);e.add(Eo.group),be.push(Eo),h.shake(.2,.16)}}if(C.wasPressed("KeyT")&&W.isEquipped("gravity")&&!g.blocking&&g.mp>=nc){g.mp-=nc,s.sfx("vortex");const Zt=g.mesh.position.x+Math.sin(g.facing)*ic,re=g.mesh.position.z+Math.cos(g.facing)*ic,Vt=new f_(Zt,re,c_(W.levels.gravity),h_(W.levels.gravity),l_(g.stats.attrs.spirit,W.levels.gravity));e.add(Vt.mesh),Se.push(Vt),h.burst(new D(Zt,fe(Zt,re)+1,re),11559167,14,6)}}!u&&!g.isDead&&lg(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-fe(g.mesh.position.x,g.mesh.position.z)<.5?(A+=P,A>=.8&&(A=0,g.applyEnvironmentDamage(6),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),s.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&St())):A=0;const ce=!u&&!v&&!g.isDead&&I.isEquipped("frost")&&!to(g.mesh.position.x,g.mesh.position.z);if(w.visible=ce,ce&&(w.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=y_*P,g.mp<=0)){g.mp=0,s.sfx("shatter"),B.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const X=F(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(X.x,fe(X.x,X.z),X.z),g.isDead&&St()}for(const X of at){if(Z){X.updateRemote(P);continue}const kt=(X.kind==="deep"||X.kind==="voidGuardian")&&!v,Ht=y.isHost&&L.size>0?K(X.mesh.position):null,Je=Ht?Ht.pos:g.mesh.position,we=Ht?Ht.remoteId:null,pn=kt||(we===null?g.isDead:!1),Zt=X.update(P,Je,pn),re=X.mesh.position;if(Zt>0&&!pn)if(we!==null)y.sendPlayerDamage(we,Zt,re.x,re.y,re.z,0,"");else{const Re=g.takeDamage(Zt,re),Ge=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Re.blocked?(p.spawn(Ge,`格擋 -${Re.taken}`,"#cfd8e8"),s.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):Re.taken>0&&(p.spawn(Ge,`-${Re.taken}`,"#ff5544"),s.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&St()}const Vt=X.specialEvent;if(Vt){X.specialEvent=null;const Re=X.mesh.position.clone().setY(X.mesh.position.y+3.2);if(p.spawn(Re,`⚡${Vt.name}`,"#ffd23c"),s.sfx(Vt.sfx),h.shake(.3,.25),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+.6),Vt.color,24,9),Vt.healed>0&&p.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),`+${Vt.healed}`,"#7be87b"),Vt.hitPlayer){if(we!==null){const Ge=Vt.effect==="chill"?"chill":Vt.effect==="burn"?"burn":"";y.sendPlayerDamage(we,Vt.dmg,re.x,re.y,re.z,Vt.knock,Ge)}else if(!g.isDead){const Ge=g.takeDamage(Vt.dmg,X.mesh.position),Di=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Ge.blocked?(p.spawn(Di,`格擋 -${Ge.taken}`,"#cfd8e8"),s.sfx("block")):Ge.taken>0&&(p.spawn(Di,`-${Ge.taken}`,"#ff5544"),s.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),Vt.color,12),g.shove(X.mesh.position,Vt.knock),Vt.effect==="chill"?g.chill(3):Vt.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(Vt.dmg*.15)))),g.isDead&&St()}}}const he=X.tickBurn(P);if(he>0&&!X.isDead){const Re=X.takeDamage(he);p.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),String(he),"#ff7a3c"),Re&&(s.sfx("enemyDie"),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+1),10217627,16),kn(X))}}const qe=g.tickBurn(P);qe>0&&!g.isDead&&(g.applyEnvironmentDamage(qe),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${qe}`,"#ff7a3c"),g.isDead&&St());for(const X of S){if(!X.active){if(X.respawnT-=P,X.respawnT<=0){const kt=E();X.place(kt.x,kt.z)}continue}if(X.update(P,m.mesh.position,u)){X.collect(),s.sfx("gem");const kt=Math.random();if(kt<.5){const Ht=20+Math.floor(Math.random()*41);k.coins+=Ht,B.showToast(`漂流寶箱:獲得 ${Ht} 貝拉幣!`)}else if(kt<.75){const Ht=2+Math.floor(Math.random()*2);k.crystals.small+=Ht,B.showToast(`漂流寶箱:獲得小型經驗結晶 ×${Ht}!`)}else kt<.9?(k.crystals.medium+=1,B.showToast("漂流寶箱:獲得中型經驗結晶!")):(k.potions+=1,B.showToast("漂流寶箱:獲得回復藥水!"));h.burst(X.mesh.position.clone().setY(1.2),16769152,14,6),dn.render()}}if(Ft=Ft.filter(X=>{const kt=X.update(P,at);for(const Ht of kt){const Je=new D().subVectors(Ht.mesh.position,g.mesh.position);Je.y=0;const we=Ht.takeDamage(X.damage,Je);if(X.freezes&&!we&&Ht.freeze(P_(I.levels.frost)),X.burns&&!we&&Ht.burn(b_,I_(I.levels.lava)),X.leech>0&&g.hp<g.stats.maxHP){const Zt=Math.max(1,Math.round(X.damage*X.leech));g.hp=Math.min(g.stats.maxHP,g.hp+Zt),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${Zt}`,"#7be87b")}const pn=Ht.mesh.position.clone().setY(Ht.mesh.position.y+1);p.spawn(pn.clone().setY(pn.y+1.2),String(X.damage),"#7fe8ff"),h.burst(pn,we?10217627:8382719,we?16:8),s.sfx(we?"enemyDie":"hit"),we&&kn(Ht)}return X.expired?(e.remove(X.mesh),X.dispose(),!1):!0}),Se=Se.filter(X=>{const kt=X.update(P,at);for(const Ht of kt){const Je=Ht.takeDamage(X.damage),we=Ht.mesh.position.clone().setY(Ht.mesh.position.y+1);p.spawn(we.clone().setY(we.y+1.2),String(X.damage),"#d8b0ff"),h.burst(we,Je?10217627:11559167,Je?16:6),Je&&(s.sfx("enemyDie"),kn(Ht))}return X.expired?(e.remove(X.mesh),X.dispose(),!1):!0}),be=be.filter(X=>(X.update(P),X.expired?(e.remove(X.group),X.dispose(),!1):!0)),!W.thunderOwned){const X=d.weather==="storm";X&&!Jt?(Jt=new Ct("fruit-thunder",zl.x,zl.z),e.add(Jt.mesh),te.push(Jt)):!X&&Jt&&(e.remove(Jt.mesh),te=te.filter(kt=>kt!==Jt),Jt=null)}te=te.filter(X=>{if(g.isDead)return!0;const kt=X.update(P,g.mesh.position);if(kt){if(X.kind==="coin")k.coins+=8,f.push("🪙 獲得 8 貝拉幣"),s.sfx("coin");else if(X.kind==="gem-flame")f.push("🔥 獲得靈紋寶石【焰心石】"),I.flameOwned=!0,ie("flame"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Yt();else if(X.kind==="gem-wind")f.push("🌪️ 獲得靈紋寶石【風語石】"),I.windOwned=!0,ie("wind"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Yt();else if(X.kind==="gem-earth")f.push("🪨 獲得靈紋寶石【地殼石】"),I.earthOwned=!0,ie("earth"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Yt();else if(X.kind==="gem-frost")f.push("❄️ 獲得靈紋寶石【霜語晶】"),I.frostOwned=!0,ie("frost"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Yt();else if(X.kind==="gem-tide")f.push("🌊 獲得靈紋寶石【潮汐石】"),I.tideOwned=!0,ie("tide"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Yt();else if(X.kind==="gem-void")f.push("🌀 獲得靈紋寶石【虛空石】"),I.voidOwned=!0,ie("void"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Yt();else if(X.kind==="gem-lava")f.push("🌋 獲得靈紋寶石【溶岩石】"),I.lavaOwned=!0,ie("lava"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Yt();else if(X.kind==="gem-aqua")f.push("💧 獲得靈紋寶石【碧波石】"),I.aquaOwned=!0,ie("aqua"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Yt();else if(X.kind==="gem-life")f.push("🌿 獲得靈紋寶石【翠生石】"),I.lifeOwned=!0,ie("life"),B.setGems(I),s.sfx("gem"),B.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Yt();else if(X.kind==="fruit-thunder")f.push("⚡ 獲得靈樹果實【雷光果】"),W.thunderOwned=!0,je("thunder"),Jt=null,B.setFruits(W),s.sfx("gem"),B.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Yt();else if(X.kind==="fruit-gravity")f.push("🌀 獲得靈樹果實【引力果】"),W.gravityOwned=!0,je("gravity"),B.setFruits(W),s.sfx("gem"),B.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Yt();else{k.crystals[X.kind]++;const Ht=X.kind==="small"?"小型":X.kind==="medium"?"中型":"大型";f.push(`💎 獲得${Ht}經驗結晶`),s.sfx("crystal")}e.remove(X.mesh),dn.render()}return!kt}),C.rightDown&&(Pi-=C.dx*.005,ii=Ps.clamp(ii+C.dy*.004,.05,1.2)),si=Ps.clamp(si+C.wheel*.01,6,18);const fn=g.mesh.position.clone().add(new D(0,2,0)),Ie=new D(fn.x+Math.sin(Pi)*Math.cos(ii)*si,fn.y+Math.sin(ii)*si,fn.z+Math.cos(Pi)*Math.cos(ii)*si);Ie.y=Math.max(Ie.y,fe(Ie.x,Ie.z)+.6);const ri=1-Math.exp(-12*T);n.position.lerp(Ie,ri),n.position.add(h.update(T)),n.lookAt(fn);const se=[];if(j.get("gem")==="active"&&se.push(I.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),j.get("jelly")==="active"){const X=j.jellyProgress();se.push(X>=mi?"果凍清理:回報漁夫小蝦":`果凍清理:${X}/${mi}`)}j.get("wind")==="active"&&se.push(I.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),j.get("earth")==="active"&&se.push(I.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),j.get("frost")==="active"&&se.push(I.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),j.get("tide")==="active"&&se.push(I.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),j.get("depth")==="active"&&se.push(I.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),j.get("final")==="active"&&se.push(V?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),j.get("sea2")==="active"&&se.push(Bt()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${Mt()}/6・圖鑑${Gt()}/${At.length}・Lv.${g.stats.level}/${rt}`),j.get("lava")==="active"&&se.push(I.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),j.get("aqua")==="active"&&se.push(I.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),j.get("life")==="active"&&se.push(I.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const Ze=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const X of Ze){if(j.get(X.id)!=="active")continue;const kt=j.huntProgress(X.id);se.push(kt>=yi[X.id].target?`${X.title}:回報${X.npc}`:`${X.title}:${kt}/${yi[X.id].target}`)}if(B.setQuests(se),!tt&&ut.isDead&&(tt=!0,V=!0,ei(),s.sfx("victory"),Mn.style.display="flex",Yt()),o.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),o.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!u&&!g.isDead&&g.chargeRatio>=1){if(_+=T,_>=.16){_=0;const X=g.mesh.position.clone().add(new D(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(X,13625599,3,2.5)}}else _=0;for(const X of L.values())X.update(T);if(q+=T,q>=.05){q=0;const X=g.mesh.position,kt=(X.x-Q.x)**2+(X.z-Q.z)**2;Q.copy(X);const Ht={x:X.x,y:X.y,z:X.z,facing:g.facing,moving:kt>1e-5};y.sendState(Ht)}if(Z)for(const X of at){const kt=X.netIndex;X.pendingNetDamage>0&&(y.sendHit(kt,Math.round(X.pendingNetDamage)),X.pendingNetDamage=0),X.pendingNetFreeze>0&&(y.sendCc(kt,"freeze",X.pendingNetFreeze,0),X.pendingNetFreeze=0),X.pendingNetStun>0&&(y.sendCc(kt,"stun",X.pendingNetStun,0),X.pendingNetStun=0),X.pendingNetBurnSec>0&&(y.sendCc(kt,"burn",X.pendingNetBurnSec,X.pendingNetBurnDps),X.pendingNetBurnSec=0,X.pendingNetBurnDps=0)}else if(y.isHost&&L.size>0&&(it+=T,it>=.08)){it=0;const X=[];for(const kt of at){const Ht=kt.mesh.position;X.push(J(Ht.x),J(Ht.y),J(Ht.z),J(kt.mesh.rotation.y),kt.isDead?1:0,kt.hp,kt.statusFlag)}y.sendEnemies(X)}p.update(T,n),B.update(g,k),C.endFrame(),t.render(e,n)})}px();
