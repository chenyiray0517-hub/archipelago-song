var ph=Object.defineProperty;var mh=(s,t,e)=>t in s?ph(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>mh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="177",gh=0,Lo=1,_h=2,Tc=1,Ac=2,Fn=3,ii=0,Ze=1,en=2,ti=0,Qi=1,Io=2,Uo=3,No=4,xh=5,xi=100,vh=101,Mh=102,yh=103,Sh=104,bh=200,wh=201,Eh=202,Th=203,ga=204,_a=205,Ah=206,Rh=207,Ch=208,Ph=209,Dh=210,Lh=211,Ih=212,Uh=213,Nh=214,xa=0,va=1,Ma=2,is=3,ya=4,Sa=5,ba=6,wa=7,Rc=0,Fh=1,Oh=2,ei=0,zh=1,Bh=2,kh=3,Gh=4,Hh=5,Vh=6,Wh=7,Cc=300,ss=301,rs=302,Ea=303,Ta=304,Rr=306,Aa=1e3,Mi=1001,Ra=1002,Je=1003,qh=1004,Vs=1005,Tn=1006,Ir=1007,yi=1008,An=1009,Pc=1010,Dc=1011,Cs=1012,lo=1013,wi=1014,zn=1015,Ns=1016,co=1017,ho=1018,Ps=1020,Lc=35902,Ic=1021,Uc=1022,Sn=1023,Ds=1026,Ls=1027,uo=1028,fo=1029,Nc=1030,po=1031,mo=1033,gr=33776,_r=33777,xr=33778,vr=33779,Ca=35840,Pa=35841,Da=35842,La=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,za=37810,Ba=37811,ka=37812,Ga=37813,Ha=37814,Va=37815,Wa=37816,qa=37817,Xa=37818,Ya=37819,$a=37820,Ka=37821,Mr=36492,ja=36494,Za=36495,Fc=36283,Ja=36284,Qa=36285,to=36286,Xh=3200,Yh=3201,Oc=0,$h=1,Qn="",un="srgb",as="srgb-linear",Sr="linear",we="srgb",Li=7680,Fo=519,Kh=512,jh=513,Zh=514,zc=515,Jh=516,Qh=517,tu=518,eu=519,eo=35044,Oo="300 es",Bn=2e3,br=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const As=Math.PI/180,Is=180/Math.PI;function kn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function go(s,t){return(s%t+t)%t}function nu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function iu(s,t,e){return s!==t?(e-s)/(t-s):0}function Rs(s,t,e){return(1-e)*s+e*t}function su(s,t,e,n){return Rs(s,t,1-Math.exp(-e*n))}function ru(s,t=1){return t-Math.abs(go(s,t*2)-t)}function au(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ou(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function lu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function cu(s,t){return s+Math.random()*(t-s)}function hu(s){return s*(.5-Math.random())}function uu(s){s!==void 0&&(zo=s);let t=zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function du(s){return s*As}function fu(s){return s*Is}function pu(s){return(s&s-1)===0&&s!==0}function mu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _u(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*d,l*h,l*p,o*c);break;case"YZY":s.set(l*p,o*d,l*h,o*c);break;case"ZXZ":s.set(l*h,l*p,o*d,o*c);break;case"XZX":s.set(o*d,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*d,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:As,RAD2DEG:Is,generateUUID:kn,clamp:ie,euclideanModulo:go,mapLinear:nu,inverseLerp:iu,lerp:Rs,damp:su,pingpong:ru,smoothstep:au,smootherstep:ou,randInt:lu,randFloat:cu,randFloatSpread:hu,seededRandom:uu,degToRad:du,radToDeg:fu,isPowerOfTwo:pu,ceilPowerOfTwo:mu,floorPowerOfTwo:gu,setQuaternionFromProperEuler:_u,normalize:Se,denormalize:yn};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const p=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==p||c!==f||d!==_){let m=1-o;const u=l*p+c*f+d*_+h*x,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const U=Math.sqrt(T),R=Math.atan2(U,u*w);m=Math.sin(m*R)/U,o=Math.sin(o*R)/U}const S=o*w;if(l=l*m+p*S,c=c*m+f*S,d=d*m+_*S,h=h*m+x*S,m===1-o){const U=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=U,c*=U,d*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*f-c*p,t[e+1]=l*_+d*p+c*h-o*f,t[e+2]=c*_+d*f+o*p-l*h,t[e+3]=d*_-o*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(r/2),p=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"YXZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"ZXY":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"ZYX":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"YZX":this._x=p*d*h+c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h-p*f*_;break;case"XZY":this._x=p*d*h-c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),d=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=i+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new P,Bo=new Fs;class Qt{constructor(t,e,n,i,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],f=n[5],_=n[8],x=i[0],m=i[3],u=i[6],w=i[1],T=i[4],S=i[7],U=i[2],R=i[5],g=i[8];return r[0]=a*x+o*w+l*U,r[3]=a*m+o*T+l*R,r[6]=a*u+o*S+l*g,r[1]=c*x+d*w+h*U,r[4]=c*m+d*T+h*R,r[7]=c*u+d*S+h*g,r[2]=p*x+f*w+_*U,r[5]=p*m+f*T+_*R,r[8]=p*u+f*S+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,p=o*l-d*r,f=c*r-a*l,_=e*h+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(i*c-d*n)*x,t[2]=(o*n-i*a)*x,t[3]=p*x,t[4]=(d*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Qt;function Bc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xu(){const s=wr("canvas");return s.style.display="block",s}const ko={};function ts(s){s in ko||(ko[s]=!0,console.warn(s))}function vu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Go=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const s={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===we&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[as]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),s}const ge=Su();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ii;class bu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=wr("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wu=0;class _o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;const Or=new P;class Ye extends ls{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Mi,i=Mi,r=Tn,a=yi,o=Sn,l=An,c=Ye.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=kn(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Cc;Ye.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(f+1)/2,U=(u+1)/2,R=(d+p)/4,g=(h+x)/4,D=(_+m)/4;return T>S&&T>U?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=g/n):S>U?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=D/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=g/r,i=D/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(p-d)/w,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tu extends ls{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ye(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new _o(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Tu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kc extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),qs.subVectors(this.max,_s),Ui.subVectors(t.a,_s),Ni.subVectors(t.b,_s),Fi.subVectors(t.c,_s),Yn.subVectors(Ni,Ui),$n.subVectors(Fi,Ni),li.subVectors(Ui,Fi);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-li.z,li.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,li.z,0,-li.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-li.y,li.x,0];return!zr(e,Ui,Ni,Fi,qs)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,Ui,Ni,Fi,qs))?!1:(Xs.crossVectors(Yn,$n),e=[Xs.x,Xs.y,Xs.z],zr(e,Ui,Ni,Fi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Ws=new Os,Ui=new P,Ni=new P,Fi=new P,Yn=new P,$n=new P,li=new P,_s=new P,qs=new P,Xs=new P,ci=new P;function zr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),d=n.dot(ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ru=new Os,xs=new P,Br=new P;class Cr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ru.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Br)),this.expandByPoint(xs.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dn=new P,kr=new P,Ys=new P,Kn=new P,Gr=new P,$s=new P,Hr=new P;class Gc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=Kn.dot(this.direction),l=-Kn.dot(Ys),c=Kn.lengthSq(),d=Math.abs(1-a*a);let h,p,f,_;if(d>0)if(h=a*l-o,p=a*o-l,_=r*d,h>=0)if(p>=-_)if(p<=_){const x=1/d;h*=x,p*=x,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kr).addScaledVector(Ys,p),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){Gr.subVectors(e,t),$s.subVectors(n,t),Hr.crossVectors(Gr,$s);let a=this.direction.dot(Hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(Kn,$s));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(Kn));if(c<0||l+c>a)return null;const d=-o*Kn.dot(Hr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,r,a,o,l,c,d,h,p,f,_,x,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,d,h,p,f,_,x,m)}set(t,e,n,i,r,a,o,l,c,d,h,p,f,_,x,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p+x*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=f*o-_,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p-x*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*d,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=_*c-f,e[8]=p*c+x,e[1]=l*h,e[5]=x*c+p,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=x-p*h,e[8]=_*h+f,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*h+_,e[10]=p-x*h}else if(t.order==="XZY"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+x,e[5]=a*d,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*d,e[10]=x*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cu,t,Pu)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),jn.crossVectors(n,sn),jn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),jn.crossVectors(n,sn)),jn.normalize(),Ks.crossVectors(sn,jn),i[0]=jn.x,i[4]=Ks.x,i[8]=sn.x,i[1]=jn.y,i[5]=Ks.y,i[9]=sn.y,i[2]=jn.z,i[6]=Ks.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],f=n[13],_=n[2],x=n[6],m=n[10],u=n[14],w=n[3],T=n[7],S=n[11],U=n[15],R=i[0],g=i[4],D=i[8],y=i[12],M=i[1],L=i[5],q=i[9],V=i[13],Q=i[2],st=i[6],J=i[10],ct=i[14],$=i[3],xt=i[7],tt=i[11],ft=i[15];return r[0]=a*R+o*M+l*Q+c*$,r[4]=a*g+o*L+l*st+c*xt,r[8]=a*D+o*q+l*J+c*tt,r[12]=a*y+o*V+l*ct+c*ft,r[1]=d*R+h*M+p*Q+f*$,r[5]=d*g+h*L+p*st+f*xt,r[9]=d*D+h*q+p*J+f*tt,r[13]=d*y+h*V+p*ct+f*ft,r[2]=_*R+x*M+m*Q+u*$,r[6]=_*g+x*L+m*st+u*xt,r[10]=_*D+x*q+m*J+u*tt,r[14]=_*y+x*V+m*ct+u*ft,r[3]=w*R+T*M+S*Q+U*$,r[7]=w*g+T*L+S*st+U*xt,r[11]=w*D+T*q+S*J+U*tt,r[15]=w*y+T*V+S*ct+U*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],f=t[14],_=t[3],x=t[7],m=t[11],u=t[15];return _*(+r*l*h-i*c*h-r*o*p+n*c*p+i*o*f-n*l*f)+x*(+e*l*f-e*c*p+r*a*p-i*a*f+i*c*d-r*l*d)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*d-n*c*d)+u*(-i*o*d-e*l*h+e*o*p+i*a*h-n*a*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],f=t[11],_=t[12],x=t[13],m=t[14],u=t[15],w=h*m*c-x*p*c+x*l*f-o*m*f-h*l*u+o*p*u,T=_*p*c-d*m*c-_*l*f+a*m*f+d*l*u-a*p*u,S=d*x*c-_*h*c+_*o*f-a*x*f-d*o*u+a*h*u,U=_*h*l-d*x*l-_*o*p+a*x*p+d*o*m-a*h*m,R=e*w+n*T+i*S+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/R;return t[0]=w*g,t[1]=(x*p*r-h*m*r-x*i*f+n*m*f+h*i*u-n*p*u)*g,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*u+n*l*u)*g,t[3]=(h*l*r-o*p*r-h*i*c+n*p*c+o*i*f-n*l*f)*g,t[4]=T*g,t[5]=(d*m*r-_*p*r+_*i*f-e*m*f-d*i*u+e*p*u)*g,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*u-e*l*u)*g,t[7]=(a*p*r-d*l*r+d*i*c-e*p*c-a*i*f+e*l*f)*g,t[8]=S*g,t[9]=(_*h*r-d*x*r-_*n*f+e*x*f+d*n*u-e*h*u)*g,t[10]=(a*x*r-_*o*r+_*n*c-e*x*c-a*n*u+e*o*u)*g,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*f-e*o*f)*g,t[12]=U*g,t[13]=(d*x*i-_*h*i+_*n*p-e*x*p-d*n*m+e*h*m)*g,t[14]=(_*o*i-a*x*i-_*n*l+e*x*l+a*n*m-e*o*m)*g,t[15]=(a*h*i-d*o*i+d*n*l-e*h*l-a*n*p+e*o*p)*g,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,p=r*c,f=r*d,_=r*h,x=a*d,m=a*h,u=o*h,w=l*c,T=l*d,S=l*h,U=n.x,R=n.y,g=n.z;return i[0]=(1-(x+u))*U,i[1]=(f+S)*U,i[2]=(_-T)*U,i[3]=0,i[4]=(f-S)*R,i[5]=(1-(p+u))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(_+T)*g,i[9]=(m-w)*g,i[10]=(1-(p+x))*g,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const a=Oi.set(i[4],i[5],i[6]).length(),o=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/r,d=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Bn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-i),h=(e+t)/(e-t),p=(n+i)/(n-i);let f,_;if(o===Bn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===br)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Bn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(a-r),p=(e+t)*c,f=(n+i)*d;let _,x;if(o===Bn)_=(a+r)*h,x=-2*h;else if(o===br)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new P,vn=new Re,Cu=new P(0,0,0),Pu=new P(1,1,1),jn=new P,Ks=new P,sn=new P,Vo=new Re,Wo=new Fs;class Hn{constructor(t=0,e=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Du=0;const qo=new P,zi=new Fs,Ln=new Re,js=new P,vs=new P,Lu=new P,Iu=new Fs,Xo=new P(1,0,0),Yo=new P(0,1,0),$o=new P(0,0,1),Ko={type:"added"},Uu={type:"removed"},Bi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Fe extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new P,e=new Hn,n=new Fs,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Qt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(vs,js,this.up):Ln.lookAt(js,vs,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Ln),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new P,In=new P,Wr=new P,Un=new P,ki=new P,Gi=new P,jo=new P,qr=new P,Xr=new P,Yr=new P,$r=new Le,Kr=new Le,jr=new Le;class pn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),In.subVectors(n,e),Wr.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(In),l=Mn.dot(Wr),c=In.dot(In),d=In.dot(Wr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,f=(c*l-o*d)*p,_=(a*d-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return $r.setScalar(0),Kr.setScalar(0),jr.setScalar(0),$r.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector($r,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(jr,r.z),a}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),In.subVectors(t,e),Mn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Mn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ki.subVectors(i,n),Gi.subVectors(r,n),qr.subVectors(t,n);const l=ki.dot(qr),c=Gi.dot(qr);if(l<=0&&c<=0)return e.copy(n);Xr.subVectors(t,i);const d=ki.dot(Xr),h=Gi.dot(Xr);if(d>=0&&h<=d)return e.copy(i);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ki,a);Yr.subVectors(t,r);const f=ki.dot(Yr),_=Gi.dot(Yr);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Gi,o);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return jo.subVectors(r,i),o=(h-d)/(h-d+(f-_)),e.copy(i).addScaledVector(jo,o);const u=1/(m+x+p);return a=x*u,o=p*u,e.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=go(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zr(a,r,t+1/3),this.g=Zr(a,r,t),this.b=Zr(a,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return ge.workingToColorSpace(Xe.copy(this),t),Math.round(ie(Xe.r*255,0,255))*65536+Math.round(ie(Xe.g*255,0,255))*256+Math.round(ie(Xe.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=un){ge.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Zs);const n=Rs(Zn.h,Zs.h,e),i=Rs(Zn.s,Zs.s,e),r=Rs(Zn.l,Zs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Ut;Ut.NAMES=Vc;let Nu=0;class Ri extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Qi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class on extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new P,Js=new $t;let Fu=0;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eo,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eo&&(t.usage=this.usage),t}}class Wc extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qc extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ou=0;const cn=new Re,Jr=new Fe,Hi=new P,rn=new Os,Ms=new Os,Be=new P;class ke extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?qc:Wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(rn.min,Ms.min),rn.expandByPoint(Be),Be.addVectors(rn.max,Ms.max),rn.expandByPoint(Be)):(rn.expandByPoint(Ms.min),rn.expandByPoint(Ms.max))}rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Be.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(t,c),Be.add(Hi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,d=new P,h=new P,p=new $t,f=new $t,_=new $t,x=new P,m=new P;function u(D,y,M){c.fromBufferAttribute(n,D),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),d.sub(c),h.sub(c),f.sub(p),_.sub(p);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(L),o[D].add(x),o[y].add(x),o[M].add(x),l[D].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,y=w.length;D<y;++D){const M=w[D],L=M.start,q=M.count;for(let V=L,Q=L+q;V<Q;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new P,S=new P,U=new P,R=new P;function g(D){U.fromBufferAttribute(i,D),R.copy(U);const y=o[D];T.copy(y),T.sub(U.multiplyScalar(U.dot(y))).normalize(),S.crossVectors(R,y);const L=S.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,L)}for(let D=0,y=w.length;D<y;++D){const M=w[D],L=M.start,q=M.count;for(let V=L,Q=L+q;V<Q;V+=3)g(t.getX(V+0)),g(t.getX(V+1)),g(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let u=0;u<d;u++)p[_++]=c[f++]}return new an(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new Re,hi=new Gc,Qs=new Cr,Jo=new P,tr=new P,er=new P,nr=new P,Qr=new P,ir=new P,Qo=new P,sr=new P;class it extends Fe{constructor(t=new ke,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Qr.fromBufferAttribute(h,t),a?ir.addScaledVector(Qr,d):ir.addScaledVector(Qr.sub(e),d))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(Qs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Qs,Jo)===null||hi.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Zo.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,U=T;S<U;S+=3){const R=o.getX(S),g=o.getX(S+1),D=o.getX(S+2);i=rr(this,u,t,n,c,d,h,R,g,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const w=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);i=rr(this,a,t,n,c,d,h,w,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,U=T;S<U;S+=3){const R=S,g=S+1,D=S+2;i=rr(this,u,t,n,c,d,h,R,g,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const w=m,T=m+1,S=m+2;i=rr(this,a,t,n,c,d,h,w,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zu(s,t,e,n,i,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ii,o),l===null)return null;sr.copy(o),sr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,tr),s.getVertexPosition(l,er),s.getVertexPosition(c,nr);const d=zu(s,t,e,n,tr,er,nr,Qo);if(d){const h=new P;pn.getBarycoord(Qo,tr,er,nr,h),i&&(d.uv=pn.getInterpolatedAttribute(i,o,l,c,h,new $t)),r&&(d.uv1=pn.getInterpolatedAttribute(r,o,l,c,h,new $t)),a&&(d.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new P,materialIndex:0};pn.getNormal(tr,er,nr,p.normal),d.face=p,d.barycoord=h}return d}class De extends ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(h,2));function _(x,m,u,w,T,S,U,R,g,D,y){const M=S/g,L=U/D,q=S/2,V=U/2,Q=R/2,st=g+1,J=D+1;let ct=0,$=0;const xt=new P;for(let tt=0;tt<J;tt++){const ft=tt*L-V;for(let ee=0;ee<st;ee++){const Me=ee*M-q;xt[x]=Me*w,xt[m]=ft*T,xt[u]=Q,c.push(xt.x,xt.y,xt.z),xt[x]=0,xt[m]=0,xt[u]=R>0?1:-1,d.push(xt.x,xt.y,xt.z),h.push(ee/g),h.push(1-tt/D),ct+=1}}for(let tt=0;tt<D;tt++)for(let ft=0;ft<g;ft++){const ee=p+ft+st*tt,Me=p+ft+st*(tt+1),et=p+(ft+1)+st*(tt+1),pt=p+(ft+1)+st*tt;l.push(ee,Me,pt),l.push(Me,et,pt),$+=6}o.addGroup(f,$,y),f+=$,p+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const n=os(s[e]);for(const i in n)t[i]=n[i]}return t}function Bu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const ku={clone:os,merge:je};var Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new P,tl=new $t,el=new $t;class dn extends Yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class Vu extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Vi,Wi,t,e);i.layers=this.layers,this.add(i);const r=new dn(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new dn(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new dn(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new dn(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new dn(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $c extends Ye{constructor(t=[],e=ss,n,i,r,a,o,l,c,d){super(t,e,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wu extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $c(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new De(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ti});r.uniforms.tEquirect.value=e;const a=new it(i,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Tn),new Vu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class de extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qu={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xu extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eo,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new P;class Er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kc extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const ys=new P,Xi=new P,Yi=new P,$i=new $t,Ss=new $t,jc=new Re,ar=new P,bs=new P,or=new P,nl=new $t,ea=new $t,il=new $t;class Zc extends Fe{constructor(t=new Kc){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yu(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Er(n,3,0,!1)),qi.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new $t(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;lr(ar.set(-.5,-.5,0),Yi,a,Xi,i,r),lr(bs.set(.5,-.5,0),Yi,a,Xi,i,r),lr(or.set(.5,.5,0),Yi,a,Xi,i,r),nl.set(0,0),ea.set(1,0),il.set(1,1);let o=t.ray.intersectTriangle(ar,bs,or,!1,ys);if(o===null&&(lr(bs.set(-.5,.5,0),Yi,a,Xi,i,r),ea.set(0,1),o=t.ray.intersectTriangle(ar,or,bs,!1,ys),o===null))return;const l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:pn.getInterpolation(ys,ar,bs,or,nl,ea,il,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lr(s,t,e,n,i,r){$i.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ss.x=r*$i.x-i*$i.y,Ss.y=i*$i.x+r*$i.y):Ss.copy($i),s.copy(t),s.x+=Ss.x,s.y+=Ss.y,s.applyMatrix4(jc)}class $u extends Ye{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Je,d=Je,h,p){super(null,a,o,l,c,d,i,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const na=new P,Ku=new P,ju=new Qt;class mi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=na.subVectors(n,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ju.getNormalMatrix(t),i=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Cr,cr=new P;class vo{constructor(t=new mi,e=new mi,n=new mi,i=new mi,r=new mi,a=new mi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],p=i[7],f=i[8],_=i[9],x=i[10],m=i[11],u=i[12],w=i[13],T=i[14],S=i[15];if(n[0].setComponents(l-r,p-c,m-f,S-u).normalize(),n[1].setComponents(l+r,p+c,m+f,S+u).normalize(),n[2].setComponents(l+a,p+d,m+_,S+w).normalize(),n[3].setComponents(l-a,p-d,m-_,S-w).normalize(),n[4].setComponents(l-o,p-h,m-x,S-T).normalize(),e===Bn)n[5].setComponents(l+o,p+h,m+x,S+T).normalize();else if(e===br)n[5].setComponents(o,h,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cr.x=i.normal.x>0?t.max.x:t.min.x,cr.y=i.normal.y>0?t.max.y:t.min.y,cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mo extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new P,Ar=new P,sl=new Re,ws=new Gc,hr=new Cr,ia=new P,rl=new P;class no extends Fe{constructor(t=new ke,e=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Tr.fromBufferAttribute(e,i-1),Ar.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;sl.copy(i).invert(),ws.copy(t.ray).applyMatrix4(sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=d.getX(x),w=d.getX(x+1),T=ur(this,t,ws,l,u,w,x);T&&e.push(T)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(f),u=ur(this,t,ws,l,x,m,_-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=ur(this,t,ws,l,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=ur(this,t,ws,l,_-1,f,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Tr.fromBufferAttribute(o,i),Ar.fromBufferAttribute(o,r),e.distanceSqToSegment(Tr,Ar,ia,rl)>n)return;ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ia);if(!(c<t.near||c>t.far))return{distance:c,point:rl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const al=new P,ol=new P;class Zu extends no{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)al.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+al.distanceTo(ol);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ju extends Ye{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jc extends Ye{constructor(t,e,n=wi,i,r,a,o=Je,l=Je,c,d=Ds,h=1){if(d!==Ds&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Si extends ke{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=e/2,h=Math.PI/2*t,p=e,f=2*h+p,_=n*2+r,x=i+1,m=new P,u=new P;for(let w=0;w<=_;w++){let T=0,S=0,U=0,R=0;if(w<=n){const y=w/n,M=y*Math.PI/2;S=-d-t*Math.cos(M),U=t*Math.sin(M),R=-t*Math.cos(M),T=y*h}else if(w<=n+r){const y=(w-n)/r;S=-d+y*e,U=t,R=0,T=h+y*p}else{const y=(w-n-r)/n,M=y*Math.PI/2;S=d+t*Math.sin(M),U=t*Math.cos(M),R=t*Math.sin(M),T=h+p+y*h}const g=Math.max(0,Math.min(1,T/f));let D=0;w===0?D=.5/i:w===_&&(D=-.5/i);for(let y=0;y<=i;y++){const M=y/i,L=M*Math.PI*2,q=Math.sin(L),V=Math.cos(L);u.x=-U*V,u.y=S,u.z=U*q,o.push(u.x,u.y,u.z),m.set(-U*V,R,U*q),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+D,g)}if(w>0){const y=(w-1)*x;for(let M=0;M<i;M++){const L=y+M,q=y+M+1,V=w*x+M,Q=w*x+M+1;a.push(L,q,V),a.push(q,Q,V)}}}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Pr extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,d=new $t;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[p]/t+1)/2,d.y=(a[p+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Te extends ke{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],p=[],f=[];let _=0;const x=[],m=n/2;let u=0;w(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(p,3)),this.setAttribute("uv",new ve(f,2));function w(){const S=new P,U=new P;let R=0;const g=(e-t)/n;for(let D=0;D<=r;D++){const y=[],M=D/r,L=M*(e-t)+t;for(let q=0;q<=i;q++){const V=q/i,Q=V*l+o,st=Math.sin(Q),J=Math.cos(Q);U.x=L*st,U.y=-M*n+m,U.z=L*J,h.push(U.x,U.y,U.z),S.set(st,g,J).normalize(),p.push(S.x,S.y,S.z),f.push(V,1-M),y.push(_++)}x.push(y)}for(let D=0;D<i;D++)for(let y=0;y<r;y++){const M=x[y][D],L=x[y+1][D],q=x[y+1][D+1],V=x[y][D+1];(t>0||y!==0)&&(d.push(M,L,V),R+=3),(e>0||y!==r-1)&&(d.push(L,q,V),R+=3)}c.addGroup(u,R,0),u+=R}function T(S){const U=_,R=new $t,g=new P;let D=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let q=1;q<=i;q++)h.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),_++;const L=_;for(let q=0;q<=i;q++){const Q=q/i*l+o,st=Math.cos(Q),J=Math.sin(Q);g.x=y*J,g.y=m*M,g.z=y*st,h.push(g.x,g.y,g.z),p.push(0,M,0),R.x=st*.5+.5,R.y=J*.5*M+.5,f.push(R.x,R.y),_++}for(let q=0;q<i;q++){const V=U+q,Q=L+q;S===!0?d.push(Q,Q+1,V):d.push(Q+1,Q,V),D+=3}c.addGroup(u,D,S===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fn extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends ke{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),d(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const T=new P,S=new P,U=new P;for(let R=0;R<e.length;R+=3)f(e[R+0],T),f(e[R+1],S),f(e[R+2],U),l(T,S,U,w)}function l(w,T,S,U){const R=U+1,g=[];for(let D=0;D<=R;D++){g[D]=[];const y=w.clone().lerp(S,D/R),M=T.clone().lerp(S,D/R),L=R-D;for(let q=0;q<=L;q++)q===0&&D===R?g[D][q]=y:g[D][q]=y.clone().lerp(M,q/L)}for(let D=0;D<R;D++)for(let y=0;y<2*(R-D)-1;y++){const M=Math.floor(y/2);y%2===0?(p(g[D][M+1]),p(g[D+1][M]),p(g[D][M])):(p(g[D][M+1]),p(g[D+1][M+1]),p(g[D+1][M]))}}function c(w){const T=new P;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(w),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function d(){const w=new P;for(let T=0;T<r.length;T+=3){w.x=r[T+0],w.y=r[T+1],w.z=r[T+2];const S=m(w)/2/Math.PI+.5,U=u(w)/Math.PI+.5;a.push(S,1-U)}_(),h()}function h(){for(let w=0;w<a.length;w+=6){const T=a[w+0],S=a[w+2],U=a[w+4],R=Math.max(T,S,U),g=Math.min(T,S,U);R>.9&&g<.1&&(T<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),U<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function f(w,T){const S=w*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function _(){const w=new P,T=new P,S=new P,U=new P,R=new $t,g=new $t,D=new $t;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),R.set(a[M+0],a[M+1]),g.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),U.copy(w).add(T).add(S).divideScalar(3);const L=m(U);x(R,M+0,w,L),x(g,M+2,T,L),x(D,M+4,S,L)}}function x(w,T,S,U){U<0&&w.x===1&&(a[T]=w.x-1),S.x===0&&S.z===0&&(a[T]=U/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.vertices,t.indices,t.radius,t.details)}}class yo extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yo(t.radius,t.detail)}}class So extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new So(t.radius,t.detail)}}class Ti extends cs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ti(t.radius,t.detail)}}class Ci extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=t/o,p=e/l,f=[],_=[],x=[],m=[];for(let u=0;u<d;u++){const w=u*p-a;for(let T=0;T<c;T++){const S=T*h-r;_.push(S,-w,0),x.push(0,0,1),m.push(T/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const T=w+c*u,S=w+c*(u+1),U=w+1+c*(u+1),R=w+1+c*u;f.push(T,S,R),f.push(S,U,R)}this.setIndex(f),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dr extends ke{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let h=t;const p=(e-t)/i,f=new P,_=new $t;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const u=r+m/n*a;f.x=h*Math.cos(u),f.y=h*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,d.push(_.x,_.y)}h+=p}for(let x=0;x<i;x++){const m=x*(n+1);for(let u=0;u<n;u++){const w=u+m,T=w,S=w+n+1,U=w+n+2,R=w+1;o.push(T,S,R),o.push(S,U,R)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ue extends ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new P,p=new P,f=[],_=[],x=[],m=[];for(let u=0;u<=n;u++){const w=[],T=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let U=0;U<=e;U++){const R=U/e;h.x=-t*Math.cos(i+R*r)*Math.sin(a+T*o),h.y=t*Math.cos(a+T*o),h.z=t*Math.sin(i+R*r)*Math.sin(a+T*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(R+S,1-T),w.push(c++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const T=d[u][w+1],S=d[u][w],U=d[u+1][w],R=d[u+1][w+1];(u!==0||a>0)&&f.push(T,S,R),(u!==n-1||l<Math.PI)&&f.push(S,U,R)}this.setIndex(f),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bo extends cs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class ni extends ke{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],d=new P,h=new P,p=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const x=_/i*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const x=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,u=(i+1)*(f-1)+_,w=(i+1)*f+_;a.push(x,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qu extends Ri{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class td extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ed extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wo extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nd extends wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sa=new Re,ll=new P,cl=new P;class id{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qc extends Yc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sd extends id{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rd extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new sd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ad extends wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class od extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ld{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hl(){return performance.now()}function ul(s,t,e,n){const i=cd(n);switch(e){case Ic:return s*t;case uo:return s*t/i.components*i.byteLength;case fo:return s*t/i.components*i.byteLength;case Nc:return s*t*2/i.components*i.byteLength;case po:return s*t*2/i.components*i.byteLength;case Uc:return s*t*3/i.components*i.byteLength;case Sn:return s*t*4/i.components*i.byteLength;case mo:return s*t*4/i.components*i.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:case La:return Math.max(s,16)*Math.max(t,8)/4;case Ca:case Da:return Math.max(s,8)*Math.max(t,8)/2;case Ia:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mr:case ja:case Za:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Fc:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cd(s){switch(s){case An:case Pc:return{byteLength:1,components:1};case Cs:case Dc:case Ns:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case wi:case lo:case zn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function th(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function hd(s){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,h[p]=x)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];s.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
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
#endif`,hf=`struct PhysicalMaterial {
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
}`,uf=`
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jf=`float getShadowMask() {
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
}`,Zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,zp=`#define TOON
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
}`,Bp=`uniform float size;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Hp=`uniform vec3 color;
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
}`,Vp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:Md,begin_vertex:yd,beginnormal_vertex:Sd,bsdfs:bd,iridescence_fragment:wd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Dd,color_pars_vertex:Ld,color_vertex:Id,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:zd,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:Gd,colorspace_pars_fragment:Hd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:qd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:sf,envmap_vertex:Yd,fog_vertex:$d,fog_pars_vertex:Kd,fog_fragment:jd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:af,lights_phong_fragment:of,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:yf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:bf,morphinstance_vertex:wf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:Df,normal_pars_vertex:Lf,normal_vertex:If,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:zf,opaque_fragment:Bf,packing:kf,premultiplied_alpha_fragment:Gf,project_vertex:Hf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Kf,shadowmask_pars_fragment:jf,skinbase_vertex:Zf,skinning_pars_vertex:Jf,skinning_vertex:Qf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:up,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:Mp,equirect_vert:yp,equirect_frag:Sp,linedashed_vert:bp,linedashed_frag:wp,meshbasic_vert:Ep,meshbasic_frag:Tp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:zp,points_vert:Bp,points_frag:kp,shadow_vert:Gp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Wp},_t={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},En={basic:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:je([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:je([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:je([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:je([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:je([_t.lights,_t.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};En.physical={uniforms:je([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const dr={r:0,b:0,g:0},di=new Hn,qp=new Re;function Xp(s,t,e,n,i,r,a){const o=new Ut(0);let l=r===!0?0:1,c,d,h=null,p=0,f=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const U=_(T);U===null?u(o,l):U&&U.isColor&&(u(U,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,S){const U=_(S);U&&(U.isCubeTexture||U.mapping===Rr)?(d===void 0&&(d=new it(new De(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:os(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,g,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),di.copy(S.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(di)),d.material.toneMapped=ge.getTransfer(U.colorSpace)!==we,(h!==U||p!==U.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=U,p=U.version,f=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new it(new Ci(2,2),new si({name:"BackgroundMaterial",uniforms:os(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ge.getTransfer(U.colorSpace)!==we,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||p!==U.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=U,p=U.version,f=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,S){T.getRGB(dr,Xc(s)),n.buffers.color.setClear(dr.r,dr.g,dr.b,S,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:x,addToRenderList:m,dispose:w}}function Yp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,a=!1;function o(M,L,q,V,Q){let st=!1;const J=h(V,q,L);r!==J&&(r=J,c(r.object)),st=f(M,V,q,Q),st&&_(M,V,q,Q),Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,S(M,L,q,V),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function h(M,L,q){const V=q.wireframe===!0;let Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let st=Q[L.id];st===void 0&&(st={},Q[L.id]=st);let J=st[V];return J===void 0&&(J=p(l()),st[V]=J),J}function p(M){const L=[],q=[],V=[];for(let Q=0;Q<e;Q++)L[Q]=0,q[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,L,q,V){const Q=r.attributes,st=L.attributes;let J=0;const ct=q.getAttributes();for(const $ in ct)if(ct[$].location>=0){const tt=Q[$];let ft=st[$];if(ft===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;J++}return r.attributesNum!==J||r.index!==V}function _(M,L,q,V){const Q={},st=L.attributes;let J=0;const ct=q.getAttributes();for(const $ in ct)if(ct[$].location>=0){let tt=st[$];tt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));const ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),Q[$]=ft,J++}r.attributes=Q,r.attributesNum=J,r.index=V}function x(){const M=r.newAttributes;for(let L=0,q=M.length;L<q;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const q=r.newAttributes,V=r.enabledAttributes,Q=r.attributeDivisors;q[M]=1,V[M]===0&&(s.enableVertexAttribArray(M),V[M]=1),Q[M]!==L&&(s.vertexAttribDivisor(M,L),Q[M]=L)}function w(){const M=r.newAttributes,L=r.enabledAttributes;for(let q=0,V=L.length;q<V;q++)L[q]!==M[q]&&(s.disableVertexAttribArray(q),L[q]=0)}function T(M,L,q,V,Q,st,J){J===!0?s.vertexAttribIPointer(M,L,q,Q,st):s.vertexAttribPointer(M,L,q,V,Q,st)}function S(M,L,q,V){x();const Q=V.attributes,st=q.getAttributes(),J=L.defaultAttributeValues;for(const ct in st){const $=st[ct];if($.location>=0){let xt=Q[ct];if(xt===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),xt!==void 0){const tt=xt.normalized,ft=xt.itemSize,ee=t.get(xt);if(ee===void 0)continue;const Me=ee.buffer,et=ee.type,pt=ee.bytesPerElement,Nt=et===s.INT||et===s.UNSIGNED_INT||xt.gpuType===lo;if(xt.isInterleavedBufferAttribute){const bt=xt.data,Ft=bt.stride,oe=xt.offset;if(bt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<$.locationSize;Gt++)u($.location+Gt,bt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Gt=0;Gt<$.locationSize;Gt++)m($.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Gt=0;Gt<$.locationSize;Gt++)T($.location+Gt,ft/$.locationSize,et,tt,Ft*pt,(oe+ft/$.locationSize*Gt)*pt,Nt)}else{if(xt.isInstancedBufferAttribute){for(let bt=0;bt<$.locationSize;bt++)u($.location+bt,xt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let bt=0;bt<$.locationSize;bt++)m($.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let bt=0;bt<$.locationSize;bt++)T($.location+bt,ft/$.locationSize,et,tt,ft*pt,ft/$.locationSize*bt*pt,Nt)}}else if(J!==void 0){const tt=J[ct];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv($.location,tt);break;case 3:s.vertexAttrib3fv($.location,tt);break;case 4:s.vertexAttrib4fv($.location,tt);break;default:s.vertexAttrib1fv($.location,tt)}}}}w()}function U(){D();for(const M in n){const L=n[M];for(const q in L){const V=L[q];for(const Q in V)d(V[Q].object),delete V[Q];delete L[q]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const q in L){const V=L[q];for(const Q in V)d(V[Q].object),delete V[Q];delete L[q]}delete n[M.id]}function g(M){for(const L in n){const q=n[L];if(q[M.id]===void 0)continue;const V=q[M.id];for(const Q in V)d(V[Q].object),delete V[Q];delete q[M.id]}}function D(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function $p(s,t,e){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];e.update(f,n,1)}function l(c,d,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x]*p[x];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==Sn&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const D=g===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==An&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==zn&&!D)}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:U,maxSamples:R}}function jp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new mi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||i;return i=p,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?d(null):c();else{const w=r?0:n,T=w*4;let S=u.clippingState||null;l.value=S,S=d(_,p,T,f);for(let U=0;U!==T;++U)S[U]=e[U];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=f+x*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,S=f;T!==x;++T,S+=4)a.copy(h[T]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Zp(s){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=ss:o===Ta&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===Ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ji=4,dl=[.125,.215,.35,.446,.526,.582],vi=20,ra=new Qc,fl=new Ut;let aa=null,oa=0,la=0,ca=!1;const gi=(1+Math.sqrt(5))/2,Ki=1/gi,pl=[new P(-gi,Ki,0),new P(gi,Ki,0),new P(-Ki,0,gi),new P(Ki,0,gi),new P(0,gi,-Ki),new P(0,gi,Ki),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Jp=new P;class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Jp}=r;aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ns,format:Sn,colorSpace:as,depthBuffer:!1},i=gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=tm(r,t,e)}return i}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,i,r){const l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(fl),h.toneMapping=ei,h.autoClear=!1;const _=new on({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),x=new it(new De,_);let m=!1;const u=t.background;u?u.isColor&&(_.color.copy(u),t.background=null,m=!0):(_.color.copy(fl),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const S=this._cubeSize;fr(i,T*S,w>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pl[(i-r-1)%pl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new it(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),x=r/_,m=isFinite(r)?1+Math.floor(d*x):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const u=[];let w=0;for(let g=0;g<vi;++g){const D=g/x,y=Math.exp(-D*D/2);u.push(y),g===0?w+=y:g<m&&(w+=2*y)}for(let g=0;g<u.length;g++)u[g]=u[g]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=_,p.mipInt.value=T-n;const S=this._sizeLods[i],U=3*S*(i>T-Ji?i-T+Ji:0),R=4*(this._cubeSize-S);fr(e,U,R,3*S,2*S),l.setRenderTarget(e),l.render(h,ra)}}function Qp(s){const t=[],e=[],n=[];let i=s;const r=s-Ji+1+dl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ji?l=dl[a-s+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,x=3,m=2,u=1,w=new Float32Array(x*_*f),T=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let R=0;R<f;R++){const g=R%3*2/3-1,D=R>2?0:-1,y=[g,D,0,g+2/3,D,0,g+2/3,D+1,0,g,D,0,g+2/3,D+1,0,g,D+1,0];w.set(y,x*_*R),T.set(p,m*_*R);const M=[R,R,R,R,R,R];S.set(M,u*_*R)}const U=new ke;U.setAttribute("position",new an(w,x)),U.setAttribute("uv",new an(T,m)),U.setAttribute("faceIndex",new an(S,u)),t.push(U),i>Ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gl(s,t,e){const n=new Ei(s,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tm(s,t,e){const n=new Float32Array(vi),i=new P(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _l(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function xl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Eo(){return`

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
	`}function em(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===Ta,d=l===ss||l===rs;if(c||d){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new ml(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new ml(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function im(s,t,e,n){const i={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete i[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)t.update(p[f],s.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let T=0,S=w.length;T<S;T+=3){const U=w[T+0],R=w[T+1],g=w[T+2];p.push(U,R,R,g,g,U)}}else if(_!==void 0){const w=_.array;x=_.version;for(let T=0,S=w.length/3-1;T<S;T+=3){const U=T+0,R=T+1,g=T+2;p.push(U,R,R,g,g,U)}}else return;const m=new(Bc(p)?qc:Wc)(p,1);m.version=x;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const p=r.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function sm(s,t,e){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){s.drawElements(n,f,r,p*a),e.update(f,n,1)}function c(p,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,p*a,_),e.update(f,n,_))}function d(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function h(p,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,_);let u=0;for(let w=0;w<_;w++)u+=f[w]*x[w];e.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function rm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function am(s,t,e){const n=new WeakMap,i=new Le;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let U=o.attributes.position.count*S,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const g=new Float32Array(U*R*4*h),D=new kc(g,U,R,h);D.type=zn,D.needsUpdate=!0;const y=S*4;for(let L=0;L<h;L++){const q=u[L],V=w[L],Q=T[L],st=U*R*4*L;for(let J=0;J<q.count;J++){const ct=J*y;_===!0&&(i.fromBufferAttribute(q,J),g[st+ct+0]=i.x,g[st+ct+1]=i.y,g[st+ct+2]=i.z,g[st+ct+3]=0),x===!0&&(i.fromBufferAttribute(V,J),g[st+ct+4]=i.x,g[st+ct+5]=i.y,g[st+ct+6]=i.z,g[st+ct+7]=0),m===!0&&(i.fromBufferAttribute(Q,J),g[st+ct+8]=i.x,g[st+ct+9]=i.y,g[st+ct+10]=i.z,g[st+ct+11]=Q.itemSize===4?i.w:1)}}p={count:h,texture:D,size:new $t(U,R)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function om(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const eh=new Ye,vl=new Jc(1,1),nh=new kc,ih=new Au,sh=new $c,Ml=[],yl=[],Sl=new Float32Array(16),bl=new Float32Array(9),wl=new Float32Array(4);function hs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lr(s,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;wl.set(n),s.uniformMatrix2fv(this.addr,!1,wl),ze(e,n)}}function fm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;bl.set(n),s.uniformMatrix3fv(this.addr,!1,bl),ze(e,n)}}function pm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Sl.set(n),s.uniformMatrix4fv(this.addr,!1,Sl),ze(e,n)}}function mm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function vm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vl.compareFunction=zc,r=vl):r=eh,e.setTexture2D(t||r,i)}function wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ih,i)}function Em(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sh,i)}function Tm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nh,i)}function Am(s){switch(s){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return vm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}function Rm(s,t){s.uniform1fv(this.addr,t)}function Cm(s,t){const e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function Pm(s,t){const e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function Dm(s,t){const e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function Lm(s,t){const e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Im(s,t){const e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Um(s,t){const e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Nm(s,t){s.uniform1iv(this.addr,t)}function Fm(s,t){s.uniform2iv(this.addr,t)}function Om(s,t){s.uniform3iv(this.addr,t)}function zm(s,t){s.uniform4iv(this.addr,t)}function Bm(s,t){s.uniform1uiv(this.addr,t)}function km(s,t){s.uniform2uiv(this.addr,t)}function Gm(s,t){s.uniform3uiv(this.addr,t)}function Hm(s,t){s.uniform4uiv(this.addr,t)}function Vm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||eh,r[a])}function Wm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ih,r[a])}function qm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||sh,r[a])}function Xm(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||nh,r[a])}function Ym(s){switch(s){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return zm;case 5125:return Bm;case 36294:return km;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Am(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function El(s,t){s.seq.push(t),s.map[t.id]=t}function Zm(s,t,e){const n=s.name,i=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),a=ha.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){El(e,c===void 0?new $m(o,s,t):new Km(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new jm(o),El(e,h)),e=h}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Zm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jm=37297;let Qm=0;function t0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Al=new Qt;function e0(s){ge._getMatrix(Al,ge.workingColorSpace,s);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Sr:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+t0(s.getShaderSource(t),a)}else return i}function n0(s,t){const e=e0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(s,t){let e;switch(t){case zh:e="Linear";break;case Bh:e="Reinhard";break;case kh:e="Cineon";break;case Gh:e="ACESFilmic";break;case Vh:e="AgX";break;case Wh:e="Neutral";break;case Hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new P;function s0(){ge.getLuminanceCoefficients(pr);const s=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function a0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function Cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(s){return s.replace(l0,h0)}const c0=new Map;function h0(s,t){let e=te[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(s){return s.replace(u0,d0)}function d0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ll(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function f0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function _0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=f0(e),c=p0(e),d=m0(e),h=g0(e),p=_0(e),f=r0(e),_=a0(r),x=i.createProgram();let m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),u.length>0&&(u+=`
`)):(m=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),u=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?te.tonemapping_pars_fragment:"",e.toneMapping!==ei?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=io(a),a=Cl(a,e),a=Pl(a,e),o=io(o),o=Cl(o,e),o=Pl(o,e),a=Dl(a),o=Dl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+m+a,S=w+u+o,U=Tl(i,i.VERTEX_SHADER,T),R=Tl(i,i.FRAGMENT_SHADER,S);i.attachShader(x,U),i.attachShader(x,R),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function g(L){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(x).trim(),V=i.getShaderInfoLog(U).trim(),Q=i.getShaderInfoLog(R).trim();let st=!0,J=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,U,R);else{const ct=Rl(i,U,"vertex"),$=Rl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+ct+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||Q==="")&&(J=!1);J&&(L.diagnostics={runnable:st,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:Q,prefix:u}})}i.deleteShader(U),i.deleteShader(R),D=new yr(i,x),y=o0(i,x)}let D;this.getUniforms=function(){return D===void 0&&g(this),D};let y;this.getAttributes=function(){return y===void 0&&g(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Jm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=R,this}let v0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new y0(t),e.set(t,n)),n}}class y0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function S0(s,t,e,n,i,r,a){const o=new Hc,l=new M0,c=new Set,d=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,q,V){const Q=q.fog,st=V.geometry,J=y.isMeshStandardMaterial?q.environment:null,ct=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),$=ct&&ct.mapping===Rr?ct.image.height:null,xt=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const tt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ft=tt!==void 0?tt.length:0;let ee=0;st.morphAttributes.position!==void 0&&(ee=1),st.morphAttributes.normal!==void 0&&(ee=2),st.morphAttributes.color!==void 0&&(ee=3);let Me,et,pt,Nt;if(xt){const me=En[xt];Me=me.vertexShader,et=me.fragmentShader}else Me=y.vertexShader,et=y.fragmentShader,l.update(y),pt=l.getVertexShaderID(y),Nt=l.getFragmentShaderID(y);const bt=s.getRenderTarget(),Ft=s.state.buffers.depth.getReversed(),oe=V.isInstancedMesh===!0,Gt=V.isBatchedMesh===!0,fe=!!y.map,_e=!!y.matcap,se=!!ct,I=!!y.aoMap,Ae=!!y.lightMap,ae=!!y.bumpMap,ye=!!y.normalMap,It=!!y.displacementMap,re=!!y.emissiveMap,Ot=!!y.metalnessMap,Yt=!!y.roughnessMap,Ce=y.anisotropy>0,C=y.clearcoat>0,v=y.dispersion>0,H=y.iridescence>0,j=y.sheen>0,rt=y.transmission>0,Z=Ce&&!!y.anisotropyMap,k=C&&!!y.clearcoatMap,ot=C&&!!y.clearcoatNormalMap,Rt=C&&!!y.clearcoatRoughnessMap,Pt=H&&!!y.iridescenceMap,G=H&&!!y.iridescenceThicknessMap,Tt=j&&!!y.sheenColorMap,Bt=j&&!!y.sheenRoughnessMap,zt=!!y.specularMap,mt=!!y.specularColorMap,Wt=!!y.specularIntensityMap,N=rt&&!!y.transmissionMap,dt=rt&&!!y.thicknessMap,ht=!!y.gradientMap,yt=!!y.alphaMap,lt=y.alphaTest>0,nt=!!y.alphaHash,Dt=!!y.extensions;let K=ei;y.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(K=s.toneMapping);const pe={shaderID:xt,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:et,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:Nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&V._colorsTexture!==null,instancing:oe,instancingColor:oe&&V.instanceColor!==null,instancingMorph:oe&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:as,alphaToCoverage:!!y.alphaToCoverage,map:fe,matcap:_e,envMap:se,envMapMode:se&&ct.mapping,envMapCubeUVHeight:$,aoMap:I,lightMap:Ae,bumpMap:ae,normalMap:ye,displacementMap:p&&It,emissiveMap:re,normalMapObjectSpace:ye&&y.normalMapType===$h,normalMapTangentSpace:ye&&y.normalMapType===Oc,metalnessMap:Ot,roughnessMap:Yt,anisotropy:Ce,anisotropyMap:Z,clearcoat:C,clearcoatMap:k,clearcoatNormalMap:ot,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:H,iridescenceMap:Pt,iridescenceThicknessMap:G,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:mt,specularIntensityMap:Wt,transmission:rt,transmissionMap:N,thicknessMap:dt,gradientMap:ht,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:lt,alphaHash:nt,combine:y.combine,mapUv:fe&&x(y.map.channel),aoMapUv:I&&x(y.aoMap.channel),lightMapUv:Ae&&x(y.lightMap.channel),bumpMapUv:ae&&x(y.bumpMap.channel),normalMapUv:ye&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:re&&x(y.emissiveMap.channel),metalnessMapUv:Ot&&x(y.metalnessMap.channel),roughnessMapUv:Yt&&x(y.roughnessMap.channel),anisotropyMapUv:Z&&x(y.anisotropyMap.channel),clearcoatMapUv:k&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:G&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(y.sheenRoughnessMap.channel),specularMapUv:zt&&x(y.specularMap.channel),specularColorMapUv:mt&&x(y.specularColorMap.channel),specularIntensityMapUv:Wt&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:dt&&x(y.thicknessMap.channel),alphaMapUv:yt&&x(y.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(ye||Ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!st.attributes.uv&&(fe||yt),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ft,skinning:V.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:K,decodeVideoTexture:fe&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&ge.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(w(M,y),T(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=_[y.type];let L;if(M){const q=En[M];L=ku.clone(q.uniforms)}else L=y.uniforms;return L}function U(y,M){let L;for(let q=0,V=d.length;q<V;q++){const Q=d[q];if(Q.cacheKey===M){L=Q,++L.usedTimes;break}}return L===void 0&&(L=new x0(s,M,y,r),d.push(L)),L}function R(y){if(--y.usedTimes===0){const M=d.indexOf(y);d[M]=d[d.length-1],d.pop(),y.destroy()}}function g(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:U,releaseProgram:R,releaseShaderCache:g,programs:d,dispose:D}}function b0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function w0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Il(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ul(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,p,f,_,x,m){let u=s[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},s[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),t++,u}function o(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):e.push(u)}function l(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):e.unshift(u)}function c(h,p){e.length>1&&e.sort(h||w0),n.length>1&&n.sort(p||Il),i.length>1&&i.sort(p||Il)}function d(){for(let h=t,p=s.length;h<p;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function E0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ul,s.set(n,[a])):i>=r.length?(a=new Ul,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function T0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ut};break;case"SpotLight":e={position:new P,direction:new P,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function A0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let R0=0;function C0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function P0(s){const t=new T0,e=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Re,a=new Re;function o(c){let d=0,h=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,x=0,m=0,u=0,w=0,T=0,S=0,U=0,R=0,g=0;c.sort(C0);for(let y=0,M=c.length;y<M;y++){const L=c[y],q=L.color,V=L.intensity,Q=L.distance,st=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=q.r*V,h+=q.g*V,p+=q.b*V;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],V);g++}else if(L.isDirectionalLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ct=L.shadow,$=e.get(L);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=st,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=J,f++}else if(L.isSpotLight){const J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(q).multiplyScalar(V),J.distance=Q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[x]=J;const ct=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,ct.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=ct.matrix,L.castShadow){const $=e.get(L);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=st,S++}x++}else if(L.isRectAreaLight){const J=t.get(L);J.color.copy(q).multiplyScalar(V),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=J,m++}else if(L.isPointLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ct=L.shadow,$=e.get(L);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,$.shadowCameraNear=ct.camera.near,$.shadowCameraFar=ct.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=st,n.pointShadowMatrix[_]=L.shadow.matrix,T++}n.point[_]=J,_++}else if(L.isHemisphereLight){const J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(V),J.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[u]=J,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==S||D.numSpotMaps!==U||D.numLightProbes!==g)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=g,D.directionalLength=f,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=S,D.numSpotMaps=U,D.numLightProbes=g,n.version=R0++)}function l(c,d){let h=0,p=0,f=0,_=0,x=0;const m=d.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const T=c[u];if(T.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(T.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Nl(s){const t=new P0(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Nl(s),t.set(i,[o])):r>=a.length?(o=new Nl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function U0(s,t,e){let n=new vo;const i=new $t,r=new $t,a=new Le,o=new td({depthPacking:Yh}),l=new ed,c={},d=e.maxTextureSize,h={[ii]:Ze,[Ze]:ii,[en]:en},p=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:L0,fragmentShader:I0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new it(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let u=this.type;this.render=function(R,g,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ti),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=u!==Fn&&this.type===Fn,Q=u===Fn&&this.type!==Fn;for(let st=0,J=R.length;st<J;st++){const ct=R[st],$=ct.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const xt=$.getFrameExtents();if(i.multiply(xt),r.copy($.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/xt.x),i.x=r.x*xt.x,$.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/xt.y),i.y=r.y*xt.y,$.mapSize.y=r.y)),$.map===null||V===!0||Q===!0){const ft=this.type!==Fn?{minFilter:Je,magFilter:Je}:{};$.map!==null&&$.map.dispose(),$.map=new Ei(i.x,i.y,ft),$.map.texture.name=ct.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const tt=$.getViewportCount();for(let ft=0;ft<tt;ft++){const ee=$.getViewport(ft);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),q.viewport(a),$.updateMatrices(ct,ft),n=$.getFrustum(),S(g,D,$.camera,ct,this.type)}$.isPointLightShadow!==!0&&this.type===Fn&&w($,D),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,L)};function w(R,g){const D=t.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(i.x,i.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(g,null,D,p,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(g,null,D,f,x,null)}function T(R,g,D,y){let M=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const q=M.uuid,V=g.uuid;let Q=c[q];Q===void 0&&(Q={},c[q]=Q);let st=Q[V];st===void 0&&(st=M.clone(),Q[V]=st,g.addEventListener("dispose",U)),M=st}if(M.visible=g.visible,M.wireframe=g.wireframe,y===Fn?M.side=g.shadowSide!==null?g.shadowSide:g.side:M.side=g.shadowSide!==null?g.shadowSide:h[g.side],M.alphaMap=g.alphaMap,M.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,M.map=g.map,M.clipShadows=g.clipShadows,M.clippingPlanes=g.clippingPlanes,M.clipIntersection=g.clipIntersection,M.displacementMap=g.displacementMap,M.displacementScale=g.displacementScale,M.displacementBias=g.displacementBias,M.wireframeLinewidth=g.wireframeLinewidth,M.linewidth=g.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=s.properties.get(M);q.light=D}return M}function S(R,g,D,y,M){if(R.visible===!1)return;if(R.layers.test(g.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Fn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const V=t.update(R),Q=R.material;if(Array.isArray(Q)){const st=V.groups;for(let J=0,ct=st.length;J<ct;J++){const $=st[J],xt=Q[$.materialIndex];if(xt&&xt.visible){const tt=T(R,xt,y,M);R.onBeforeShadow(s,R,g,D,V,tt,$),s.renderBufferDirect(D,null,V,tt,R,$),R.onAfterShadow(s,R,g,D,V,tt,$)}}}else if(Q.visible){const st=T(R,Q,y,M);R.onBeforeShadow(s,R,g,D,V,st,null),s.renderBufferDirect(D,null,V,st,R,null),R.onAfterShadow(s,R,g,D,V,st,null)}}const q=R.children;for(let V=0,Q=q.length;V<Q;V++)S(q[V],g,D,y,M)}function U(R){R.target.removeEventListener("dispose",U);for(const D in c){const y=c[D],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const N0={[xa]:va,[Ma]:ba,[ya]:wa,[is]:Sa,[va]:xa,[ba]:Ma,[wa]:ya,[Sa]:is};function F0(s,t){function e(){let N=!1;const dt=new Le;let ht=null;const yt=new Le(0,0,0,0);return{setMask:function(lt){ht!==lt&&!N&&(s.colorMask(lt,lt,lt,lt),ht=lt)},setLocked:function(lt){N=lt},setClear:function(lt,nt,Dt,K,pe){pe===!0&&(lt*=K,nt*=K,Dt*=K),dt.set(lt,nt,Dt,K),yt.equals(dt)===!1&&(s.clearColor(lt,nt,Dt,K),yt.copy(dt))},reset:function(){N=!1,ht=null,yt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,ht=null,yt=null,lt=null;return{setReversed:function(nt){if(dt!==nt){const Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=nt;const K=lt;lt=null,this.setClear(K)}},getReversed:function(){return dt},setTest:function(nt){nt?bt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(nt){ht!==nt&&!N&&(s.depthMask(nt),ht=nt)},setFunc:function(nt){if(dt&&(nt=N0[nt]),yt!==nt){switch(nt){case xa:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case Ma:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case ya:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=nt}},setLocked:function(nt){N=nt},setClear:function(nt){lt!==nt&&(dt&&(nt=1-nt),s.clearDepth(nt),lt=nt)},reset:function(){N=!1,ht=null,yt=null,lt=null,dt=!1}}}function i(){let N=!1,dt=null,ht=null,yt=null,lt=null,nt=null,Dt=null,K=null,pe=null;return{setTest:function(me){N||(me?bt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(me){dt!==me&&!N&&(s.stencilMask(me),dt=me)},setFunc:function(me,$e,Ne){(ht!==me||yt!==$e||lt!==Ne)&&(s.stencilFunc(me,$e,Ne),ht=me,yt=$e,lt=Ne)},setOp:function(me,$e,Ne){(nt!==me||Dt!==$e||K!==Ne)&&(s.stencilOp(me,$e,Ne),nt=me,Dt=$e,K=Ne)},setLocked:function(me){N=me},setClear:function(me){pe!==me&&(s.clearStencil(me),pe=me)},reset:function(){N=!1,dt=null,ht=null,yt=null,lt=null,nt=null,Dt=null,K=null,pe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,w=null,T=null,S=null,U=null,R=null,g=new Ut(0,0,0),D=0,y=!1,M=null,L=null,q=null,V=null,Q=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ct=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec($)[1]),J=ct>=1):$.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=ct>=2);let xt=null,tt={};const ft=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Me=new Le().fromArray(ft),et=new Le().fromArray(ee);function pt(N,dt,ht,yt){const lt=new Uint8Array(4),nt=s.createTexture();s.bindTexture(N,nt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<ht;Dt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(dt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return nt}const Nt={};Nt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(s.DEPTH_TEST),a.setFunc(is),ae(!1),ye(Lo),bt(s.CULL_FACE),I(ti);function bt(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Ft(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function oe(N,dt){return h[N]!==dt?(s.bindFramebuffer(N,dt),h[N]=dt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=dt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Gt(N,dt){let ht=f,yt=!1;if(N){ht=p.get(dt),ht===void 0&&(ht=[],p.set(dt,ht));const lt=N.textures;if(ht.length!==lt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,Dt=lt.length;nt<Dt;nt++)ht[nt]=s.COLOR_ATTACHMENT0+nt;ht.length=lt.length,yt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ht)}function fe(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const _e={[xi]:s.FUNC_ADD,[vh]:s.FUNC_SUBTRACT,[Mh]:s.FUNC_REVERSE_SUBTRACT};_e[yh]=s.MIN,_e[Sh]=s.MAX;const se={[bh]:s.ZERO,[wh]:s.ONE,[Eh]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[Dh]:s.SRC_ALPHA_SATURATE,[Ch]:s.DST_COLOR,[Ah]:s.DST_ALPHA,[Th]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[Ph]:s.ONE_MINUS_DST_COLOR,[Rh]:s.ONE_MINUS_DST_ALPHA,[Lh]:s.CONSTANT_COLOR,[Ih]:s.ONE_MINUS_CONSTANT_COLOR,[Uh]:s.CONSTANT_ALPHA,[Nh]:s.ONE_MINUS_CONSTANT_ALPHA};function I(N,dt,ht,yt,lt,nt,Dt,K,pe,me){if(N===ti){x===!0&&(Ft(s.BLEND),x=!1);return}if(x===!1&&(bt(s.BLEND),x=!0),N!==xh){if(N!==m||me!==y){if((u!==xi||S!==xi)&&(s.blendEquation(s.FUNC_ADD),u=xi,S=xi),me)switch(N){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Io:s.blendFunc(s.ONE,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case No:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Io:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case No:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,T=null,U=null,R=null,g.set(0,0,0),D=0,m=N,y=me}return}lt=lt||dt,nt=nt||ht,Dt=Dt||yt,(dt!==u||lt!==S)&&(s.blendEquationSeparate(_e[dt],_e[lt]),u=dt,S=lt),(ht!==w||yt!==T||nt!==U||Dt!==R)&&(s.blendFuncSeparate(se[ht],se[yt],se[nt],se[Dt]),w=ht,T=yt,U=nt,R=Dt),(K.equals(g)===!1||pe!==D)&&(s.blendColor(K.r,K.g,K.b,pe),g.copy(K),D=pe),m=N,y=!1}function Ae(N,dt){N.side===en?Ft(s.CULL_FACE):bt(s.CULL_FACE);let ht=N.side===Ze;dt&&(ht=!ht),ae(ht),N.blending===Qi&&N.transparent===!1?I(ti):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const yt=N.stencilWrite;o.setTest(yt),yt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function ye(N){N!==gh?(bt(s.CULL_FACE),N!==L&&(N===Lo?s.cullFace(s.BACK):N===_h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),L=N}function It(N){N!==q&&(J&&s.lineWidth(N),q=N)}function re(N,dt,ht){N?(bt(s.POLYGON_OFFSET_FILL),(V!==dt||Q!==ht)&&(s.polygonOffset(dt,ht),V=dt,Q=ht)):Ft(s.POLYGON_OFFSET_FILL)}function Ot(N){N?bt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function Yt(N){N===void 0&&(N=s.TEXTURE0+st-1),xt!==N&&(s.activeTexture(N),xt=N)}function Ce(N,dt,ht){ht===void 0&&(xt===null?ht=s.TEXTURE0+st-1:ht=xt);let yt=tt[ht];yt===void 0&&(yt={type:void 0,texture:void 0},tt[ht]=yt),(yt.type!==N||yt.texture!==dt)&&(xt!==ht&&(s.activeTexture(ht),xt=ht),s.bindTexture(N,dt||Nt[N]),yt.type=N,yt.texture=dt)}function C(){const N=tt[xt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(N){Me.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function Bt(N){et.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function zt(N,dt){let ht=c.get(dt);ht===void 0&&(ht=new WeakMap,c.set(dt,ht));let yt=ht.get(N);yt===void 0&&(yt=s.getUniformBlockIndex(dt,N.name),ht.set(N,yt))}function mt(N,dt){const yt=c.get(dt).get(N);l.get(dt)!==yt&&(s.uniformBlockBinding(dt,yt,N.__bindingPointIndex),l.set(dt,yt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},xt=null,tt={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,w=null,T=null,S=null,U=null,R=null,g=new Ut(0,0,0),D=0,y=!1,M=null,L=null,q=null,V=null,Q=null,Me.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Ft,bindFramebuffer:oe,drawBuffers:Gt,useProgram:fe,setBlending:I,setMaterial:Ae,setFlipSided:ae,setCullFace:ye,setLineWidth:It,setPolygonOffset:re,setScissorTest:Ot,activeTexture:Yt,bindTexture:Ce,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Pt,texImage3D:G,updateUBOMapping:zt,uniformBlockBinding:mt,texStorage2D:ot,texStorage3D:Rt,texSubImage2D:j,texSubImage3D:rt,compressedTexSubImage2D:Z,compressedTexSubImage3D:k,scissor:Tt,viewport:Bt,reset:Wt}}function O0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return f?new OffscreenCanvas(C,v):wr("canvas")}function x(C,v,H){let j=1;const rt=Ce(C);if((rt.width>H||rt.height>H)&&(j=H/Math.max(rt.width,rt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(j*rt.width),k=Math.floor(j*rt.height);h===void 0&&(h=_(Z,k));const ot=v?_(Z,k):h;return ot.width=Z,ot.height=k,ot.getContext("2d").drawImage(C,0,0,Z,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Z+"x"+k+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,v,H,j,rt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=v;if(v===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),v===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RG8UI),H===s.UNSIGNED_SHORT&&(Z=s.RG16UI),H===s.UNSIGNED_INT&&(Z=s.RG32UI),H===s.BYTE&&(Z=s.RG8I),H===s.SHORT&&(Z=s.RG16I),H===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),H===s.UNSIGNED_INT&&(Z=s.RGB32UI),H===s.BYTE&&(Z=s.RGB8I),H===s.SHORT&&(Z=s.RGB16I),H===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),H===s.UNSIGNED_INT&&(Z=s.RGBA32UI),H===s.BYTE&&(Z=s.RGBA8I),H===s.SHORT&&(Z=s.RGBA16I),H===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),v===s.RGBA){const k=rt?Sr:ge.getTransfer(j);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=k===we?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(C,v){let H;return C?v===null||v===wi||v===Ps?H=s.DEPTH24_STENCIL8:v===zn?H=s.DEPTH32F_STENCIL8:v===Cs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wi||v===Ps?H=s.DEPTH_COMPONENT24:v===zn?H=s.DEPTH_COMPONENT32F:v===Cs&&(H=s.DEPTH_COMPONENT16),H}function U(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){const v=C.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&d.delete(v)}function g(C){const v=C.target;v.removeEventListener("dispose",g),M(v)}function D(C){const v=n.get(C);if(v.__webglInit===void 0)return;const H=C.source,j=p.get(H);if(j){const rt=j[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(C),Object.keys(j).length===0&&p.delete(H)}n.remove(C)}function y(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const H=C.source,j=p.get(H);delete j[v.__cacheKey],a.memory.textures--}function M(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let rt=0;rt<v.__webglFramebuffer[j].length;rt++)s.deleteFramebuffer(v.__webglFramebuffer[j][rt]);else s.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)s.deleteFramebuffer(v.__webglFramebuffer[j]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,rt=H.length;j<rt;j++){const Z=n.get(H[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(C)}let L=0;function q(){L=0}function V(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function Q(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function st(C,v){const H=n.get(C);if(C.isVideoTexture&&Ot(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(H,C,v);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function J(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Nt(H,C,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function ct(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Nt(H,C,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function $(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){bt(H,C,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const xt={[Aa]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[Ra]:s.MIRRORED_REPEAT},tt={[Je]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Ir]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},ft={[Kh]:s.NEVER,[eu]:s.ALWAYS,[jh]:s.LESS,[zc]:s.LEQUAL,[Zh]:s.EQUAL,[tu]:s.GEQUAL,[Jh]:s.GREATER,[Qh]:s.NOTEQUAL};function ee(C,v){if(v.type===zn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===Ir||v.magFilter===Vs||v.magFilter===yi||v.minFilter===Tn||v.minFilter===Ir||v.minFilter===Vs||v.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,xt[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,xt[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,xt[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,tt[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==Vs&&v.minFilter!==yi||v.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Me(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));const j=v.source;let rt=p.get(j);rt===void 0&&(rt={},p.set(j,rt));const Z=Q(v);if(Z!==C.__cacheKey){rt[Z]===void 0&&(rt[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),rt[Z].usedTimes++;const k=rt[C.__cacheKey];k!==void 0&&(rt[C.__cacheKey].usedTimes--,k.usedTimes===0&&y(v)),C.__cacheKey=Z,C.__webglTexture=rt[Z].texture}return H}function et(C,v,H){return Math.floor(Math.floor(C/H)/v)}function pt(C,v,H,j){const Z=C.updateRanges;if(Z.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,H,j,v.data);else{Z.sort((G,Tt)=>G.start-Tt.start);let k=0;for(let G=1;G<Z.length;G++){const Tt=Z[k],Bt=Z[G],zt=Tt.start+Tt.count,mt=et(Bt.start,v.width,4),Wt=et(Tt.start,v.width,4);Bt.start<=zt+1&&mt===Wt&&et(Bt.start+Bt.count-1,v.width,4)===mt?Tt.count=Math.max(Tt.count,Bt.start+Bt.count-Tt.start):(++k,Z[k]=Bt)}Z.length=k+1;const ot=s.getParameter(s.UNPACK_ROW_LENGTH),Rt=s.getParameter(s.UNPACK_SKIP_PIXELS),Pt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let G=0,Tt=Z.length;G<Tt;G++){const Bt=Z[G],zt=Math.floor(Bt.start/4),mt=Math.ceil(Bt.count/4),Wt=zt%v.width,N=Math.floor(zt/v.width),dt=mt,ht=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Wt,N,dt,ht,H,j,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function Nt(C,v,H){let j=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=s.TEXTURE_3D);const rt=Me(C,v),Z=v.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+H);const k=n.get(Z);if(Z.version!==k.__version||rt===!0){e.activeTexture(s.TEXTURE0+H);const ot=ge.getPrimaries(ge.workingColorSpace),Rt=v.colorSpace===Qn?null:ge.getPrimaries(v.colorSpace),Pt=v.colorSpace===Qn||ot===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let G=x(v.image,!1,i.maxTextureSize);G=Yt(v,G);const Tt=r.convert(v.format,v.colorSpace),Bt=r.convert(v.type);let zt=T(v.internalFormat,Tt,Bt,v.colorSpace,v.isVideoTexture);ee(j,v);let mt;const Wt=v.mipmaps,N=v.isVideoTexture!==!0,dt=k.__version===void 0||rt===!0,ht=Z.dataReady,yt=U(v,G);if(v.isDepthTexture)zt=S(v.format===Ls,v.type),dt&&(N?e.texStorage2D(s.TEXTURE_2D,1,zt,G.width,G.height):e.texImage2D(s.TEXTURE_2D,0,zt,G.width,G.height,0,Tt,Bt,null));else if(v.isDataTexture)if(Wt.length>0){N&&dt&&e.texStorage2D(s.TEXTURE_2D,yt,zt,Wt[0].width,Wt[0].height);for(let lt=0,nt=Wt.length;lt<nt;lt++)mt=Wt[lt],N?ht&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,mt.width,mt.height,Tt,Bt,mt.data):e.texImage2D(s.TEXTURE_2D,lt,zt,mt.width,mt.height,0,Tt,Bt,mt.data);v.generateMipmaps=!1}else N?(dt&&e.texStorage2D(s.TEXTURE_2D,yt,zt,G.width,G.height),ht&&pt(v,G,Tt,Bt)):e.texImage2D(s.TEXTURE_2D,0,zt,G.width,G.height,0,Tt,Bt,G.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,zt,Wt[0].width,Wt[0].height,G.depth);for(let lt=0,nt=Wt.length;lt<nt;lt++)if(mt=Wt[lt],v.format!==Sn)if(Tt!==null)if(N){if(ht)if(v.layerUpdates.size>0){const Dt=ul(mt.width,mt.height,v.format,v.type);for(const K of v.layerUpdates){const pe=mt.data.subarray(K*Dt/mt.data.BYTES_PER_ELEMENT,(K+1)*Dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,K,mt.width,mt.height,1,Tt,pe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,G.depth,Tt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,zt,mt.width,mt.height,G.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,G.depth,Tt,Bt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,zt,mt.width,mt.height,G.depth,0,Tt,Bt,mt.data)}else{N&&dt&&e.texStorage2D(s.TEXTURE_2D,yt,zt,Wt[0].width,Wt[0].height);for(let lt=0,nt=Wt.length;lt<nt;lt++)mt=Wt[lt],v.format!==Sn?Tt!==null?N?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,mt.width,mt.height,Tt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ht&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,mt.width,mt.height,Tt,Bt,mt.data):e.texImage2D(s.TEXTURE_2D,lt,zt,mt.width,mt.height,0,Tt,Bt,mt.data)}else if(v.isDataArrayTexture)if(N){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,zt,G.width,G.height,G.depth),ht)if(v.layerUpdates.size>0){const lt=ul(G.width,G.height,v.format,v.type);for(const nt of v.layerUpdates){const Dt=G.data.subarray(nt*lt/G.data.BYTES_PER_ELEMENT,(nt+1)*lt/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,G.width,G.height,1,Tt,Bt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Tt,Bt,G.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,G.width,G.height,G.depth,0,Tt,Bt,G.data);else if(v.isData3DTexture)N?(dt&&e.texStorage3D(s.TEXTURE_3D,yt,zt,G.width,G.height,G.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Tt,Bt,G.data)):e.texImage3D(s.TEXTURE_3D,0,zt,G.width,G.height,G.depth,0,Tt,Bt,G.data);else if(v.isFramebufferTexture){if(dt)if(N)e.texStorage2D(s.TEXTURE_2D,yt,zt,G.width,G.height);else{let lt=G.width,nt=G.height;for(let Dt=0;Dt<yt;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,zt,lt,nt,0,Tt,Bt,null),lt>>=1,nt>>=1}}else if(Wt.length>0){if(N&&dt){const lt=Ce(Wt[0]);e.texStorage2D(s.TEXTURE_2D,yt,zt,lt.width,lt.height)}for(let lt=0,nt=Wt.length;lt<nt;lt++)mt=Wt[lt],N?ht&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Tt,Bt,mt):e.texImage2D(s.TEXTURE_2D,lt,zt,Tt,Bt,mt);v.generateMipmaps=!1}else if(N){if(dt){const lt=Ce(G);e.texStorage2D(s.TEXTURE_2D,yt,zt,lt.width,lt.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Bt,G)}else e.texImage2D(s.TEXTURE_2D,0,zt,Tt,Bt,G);m(v)&&u(j),k.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function bt(C,v,H){if(v.image.length!==6)return;const j=Me(C,v),rt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const Z=n.get(rt);if(rt.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+H);const k=ge.getPrimaries(ge.workingColorSpace),ot=v.colorSpace===Qn?null:ge.getPrimaries(v.colorSpace),Rt=v.colorSpace===Qn||k===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,G=v.image[0]&&v.image[0].isDataTexture,Tt=[];for(let nt=0;nt<6;nt++)!Pt&&!G?Tt[nt]=x(v.image[nt],!0,i.maxCubemapSize):Tt[nt]=G?v.image[nt].image:v.image[nt],Tt[nt]=Yt(v,Tt[nt]);const Bt=Tt[0],zt=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Wt=T(v.internalFormat,zt,mt,v.colorSpace),N=v.isVideoTexture!==!0,dt=Z.__version===void 0||j===!0,ht=rt.dataReady;let yt=U(v,Bt);ee(s.TEXTURE_CUBE_MAP,v);let lt;if(Pt){N&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Wt,Bt.width,Bt.height);for(let nt=0;nt<6;nt++){lt=Tt[nt].mipmaps;for(let Dt=0;Dt<lt.length;Dt++){const K=lt[Dt];v.format!==Sn?zt!==null?N?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,K.width,K.height,zt,K.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Wt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,K.width,K.height,zt,mt,K.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Wt,K.width,K.height,0,zt,mt,K.data)}}}else{if(lt=v.mipmaps,N&&dt){lt.length>0&&yt++;const nt=Ce(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Wt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(G){N?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt[nt].width,Tt[nt].height,zt,mt,Tt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Wt,Tt[nt].width,Tt[nt].height,0,zt,mt,Tt[nt].data);for(let Dt=0;Dt<lt.length;Dt++){const pe=lt[Dt].image[nt].image;N?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,pe.width,pe.height,zt,mt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Wt,pe.width,pe.height,0,zt,mt,pe.data)}}else{N?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,zt,mt,Tt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Wt,zt,mt,Tt[nt]);for(let Dt=0;Dt<lt.length;Dt++){const K=lt[Dt];N?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,zt,mt,K.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Wt,zt,mt,K.image[nt])}}}m(v)&&u(s.TEXTURE_CUBE_MAP),Z.__version=rt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ft(C,v,H,j,rt,Z){const k=r.convert(H.format,H.colorSpace),ot=r.convert(H.type),Rt=T(H.internalFormat,k,ot,H.colorSpace),Pt=n.get(v),G=n.get(H);if(G.__renderTarget=v,!Pt.__hasExternalTextures){const Tt=Math.max(1,v.width>>Z),Bt=Math.max(1,v.height>>Z);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,Z,Rt,Tt,Bt,v.depth,0,k,ot,null):e.texImage2D(rt,Z,Rt,Tt,Bt,0,k,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),re(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,rt,G.__webglTexture,0,It(v)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,rt,G.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const j=v.depthTexture,rt=j&&j.isDepthTexture?j.type:null,Z=S(v.stencilBuffer,rt),k=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=It(v);re(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Z,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,C)}else{const j=v.textures;for(let rt=0;rt<j.length;rt++){const Z=j[rt],k=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),Rt=T(Z.internalFormat,k,ot,Z.colorSpace),Pt=It(v);H&&re(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Rt,v.width,v.height):re(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,Rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st(v.depthTexture,0);const rt=j.__webglTexture,Z=It(v);if(v.depthTexture.format===Ds)re(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(v.depthTexture.format===Ls)re(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function fe(C){const v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",rt)};j.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=j}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const j=C.texture.mipmaps;j&&j.length>0?Gt(v.__webglFramebuffer[0],C):Gt(v.__webglFramebuffer,C)}else if(H){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=s.createRenderbuffer(),oe(v.__webglDepthbuffer[j],C,!1);else{const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Z)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),oe(v.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Z)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(C,v,H){const j=n.get(C);v!==void 0&&Ft(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&fe(C)}function se(C){const v=C.texture,H=n.get(C),j=n.get(v);C.addEventListener("dispose",g);const rt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,k=rt.length>1;if(k||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=v.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)H.__webglFramebuffer[ot][Rt]=s.createFramebuffer()}else H.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)H.__webglFramebuffer[ot]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(k)for(let ot=0,Rt=rt.length;ot<Rt;ot++){const Pt=n.get(rt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&re(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){const Rt=rt[ot];H.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);const Pt=r.convert(Rt.format,Rt.colorSpace),G=r.convert(Rt.type),Tt=T(Rt.internalFormat,Pt,G,Rt.colorSpace,C.isXRRenderTarget===!0),Bt=It(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,Tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ee(s.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)Ft(H.__webglFramebuffer[ot][Rt],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt);else Ft(H.__webglFramebuffer[ot],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(v)&&u(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(k){for(let ot=0,Rt=rt.length;ot<Rt;ot++){const Pt=rt[ot],G=n.get(Pt);e.bindTexture(s.TEXTURE_2D,G.__webglTexture),ee(s.TEXTURE_2D,Pt),Ft(H.__webglFramebuffer,C,Pt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Pt)&&u(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),ee(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)Ft(H.__webglFramebuffer[Rt],C,v,s.COLOR_ATTACHMENT0,ot,Rt);else Ft(H.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,ot,0);m(v)&&u(ot),e.unbindTexture()}C.depthBuffer&&fe(C)}function I(C){const v=C.textures;for(let H=0,j=v.length;H<j;H++){const rt=v[H];if(m(rt)){const Z=w(C),k=n.get(rt).__webglTexture;e.bindTexture(Z,k),u(Z),e.unbindTexture()}}}const Ae=[],ae=[];function ye(C){if(C.samples>0){if(re(C)===!1){const v=C.textures,H=C.width,j=C.height;let rt=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=n.get(C),ot=v.length>1;if(ot)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer);const Rt=C.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,k.__webglColorRenderbuffer[Pt]);const G=n.get(v[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,G,0)}s.blitFramebuffer(0,0,H,j,0,0,H,j,rt,s.NEAREST),l===!0&&(Ae.length=0,ae.length=0,Ae.push(s.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ae.push(Z),ae.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,k.__webglColorRenderbuffer[Pt]);const G=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,G,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function It(C){return Math.min(i.maxSamples,C.samples)}function re(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ot(C){const v=a.render.frame;d.get(C)!==v&&(d.set(C,v),C.update())}function Yt(C,v){const H=C.colorSpace,j=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==as&&H!==Qn&&(ge.getTransfer(H)===we?(j!==Sn||rt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=st,this.setTexture2DArray=J,this.setTexture3D=ct,this.setTextureCube=$,this.rebindTextures=_e,this.setupRenderTarget=se,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=re}function z0(s,t){function e(n,i=Qn){let r;const a=ge.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return s.BYTE;if(n===Dc)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===lo)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Ns)return s.HALF_FLOAT;if(n===Ic)return s.ALPHA;if(n===Uc)return s.RGB;if(n===Sn)return s.RGBA;if(n===Ds)return s.DEPTH_COMPONENT;if(n===Ls)return s.DEPTH_STENCIL;if(n===uo)return s.RED;if(n===fo)return s.RED_INTEGER;if(n===Nc)return s.RG;if(n===po)return s.RG_INTEGER;if(n===mo)return s.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===vr)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===Da||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ua)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===qa||n===Xa||n===Ya||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===ja||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mr)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Ja||n===Qa||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:B0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends ls{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,_=null;const x=new G0,m=e.getContextAttributes();let u=null,w=null;const T=[],S=[],U=new $t;let R=null;const g=new dn;g.viewport=new Le;const D=new dn;D.viewport=new Le;const y=[g,D],M=new od;let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=T[et];return pt===void 0&&(pt=new ta,T[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=T[et];return pt===void 0&&(pt=new ta,T[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=T[et];return pt===void 0&&(pt=new ta,T[et]=pt),pt.getHandSpace()};function V(et){const pt=S.indexOf(et.inputSource);if(pt===-1)return;const Nt=T[pt];Nt!==void 0&&(Nt.update(et.inputSource,et.frame,c||a),Nt.dispatchEvent({type:et.type,data:et.inputSource}))}function Q(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",st);for(let et=0;et<T.length;et++){const pt=S[et];pt!==null&&(S[et]=null,T[et].disconnect(pt))}L=null,q=null,x.reset(),t.setRenderTarget(u),f=null,p=null,h=null,i=null,w=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(u=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,bt=null,Ft=null;m.depth&&(Ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=m.stencil?Ls:Ds,bt=m.stencil?Ps:wi);const oe={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};h=new XRWebGLBinding(i,e),p=h.createProjectionLayer(oe),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new Ei(p.textureWidth,p.textureHeight,{format:Sn,type:An,depthTexture:new Jc(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ei(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(et){for(let pt=0;pt<et.removed.length;pt++){const Nt=et.removed[pt],bt=S.indexOf(Nt);bt>=0&&(S[bt]=null,T[bt].disconnect(Nt))}for(let pt=0;pt<et.added.length;pt++){const Nt=et.added[pt];let bt=S.indexOf(Nt);if(bt===-1){for(let oe=0;oe<T.length;oe++)if(oe>=S.length){S.push(Nt),bt=oe;break}else if(S[oe]===null){S[oe]=Nt,bt=oe;break}if(bt===-1)break}const Ft=T[bt];Ft&&Ft.connect(Nt)}}const J=new P,ct=new P;function $(et,pt,Nt){J.setFromMatrixPosition(pt.matrixWorld),ct.setFromMatrixPosition(Nt.matrixWorld);const bt=J.distanceTo(ct),Ft=pt.projectionMatrix.elements,oe=Nt.projectionMatrix.elements,Gt=Ft[14]/(Ft[10]-1),fe=Ft[14]/(Ft[10]+1),_e=(Ft[9]+1)/Ft[5],se=(Ft[9]-1)/Ft[5],I=(Ft[8]-1)/Ft[0],Ae=(oe[8]+1)/oe[0],ae=Gt*I,ye=Gt*Ae,It=bt/(-I+Ae),re=It*-I;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(re),et.translateZ(It),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ot=Gt+It,Yt=fe+It,Ce=ae-re,C=ye+(bt-re),v=_e*fe/Yt*Ot,H=se*fe/Yt*Ot;et.projectionMatrix.makePerspective(Ce,C,v,H,Ot,Yt),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function xt(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let pt=et.near,Nt=et.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Nt=x.depthFar)),M.near=D.near=g.near=pt,M.far=D.far=g.far=Nt,(L!==M.near||q!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,q=M.far),g.layers.mask=et.layers.mask|2,D.layers.mask=et.layers.mask|4,M.layers.mask=g.layers.mask|D.layers.mask;const bt=et.parent,Ft=M.cameras;xt(M,bt);for(let oe=0;oe<Ft.length;oe++)xt(Ft[oe],bt);Ft.length===2?$(M,g,D):M.projectionMatrix.copy(g.projectionMatrix),tt(et,M,bt)};function tt(et,pt,Nt){Nt===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(Nt.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Is*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(et){l=et,p!==null&&(p.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ft=null;function ee(et,pt){if(d=pt.getViewerPose(c||a),_=pt,d!==null){const Nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let bt=!1;Nt.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let Gt=0;Gt<Nt.length;Gt++){const fe=Nt[Gt];let _e=null;if(f!==null)_e=f.getViewport(fe);else{const I=h.getViewSubImage(p,fe);_e=I.viewport,Gt===0&&(t.setRenderTargetTextures(w,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(w))}let se=y[Gt];se===void 0&&(se=new dn,se.layers.enable(Gt),se.viewport=new Le,y[Gt]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(_e.x,_e.y,_e.width,_e.height),Gt===0&&(M.matrix.copy(se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(se)}const Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Gt=h.getDepthInformation(Nt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,i.renderState)}}for(let Nt=0;Nt<T.length;Nt++){const bt=S[Nt],Ft=T[Nt];bt!==null&&Ft!==void 0&&Ft.update(bt,pt,c||a)}ft&&ft(et,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),_=null}const Me=new th;Me.setAnimationLoop(ee),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const fi=new Hn,V0=new Re;function W0(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Xc(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,w,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,T):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ze&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ze&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u),T=w.envMap,S=w.envMapRotation;T&&(m.envMap.value=T,fi.copy(S),fi.x*=-1,fi.y*=-1,fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(fi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=T*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ze&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function q0(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const S=T.program;n.uniformBlockBinding(w,S)}function c(w,T){let S=i[w.id];S===void 0&&(_(w),S=d(w),i[w.id]=S,w.addEventListener("dispose",m));const U=T.program;n.updateUBOMapping(w,U);const R=t.render.frame;r[w.id]!==R&&(p(w),r[w.id]=R)}function d(w){const T=h();w.__bindingPointIndex=T;const S=s.createBuffer(),U=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,U,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const T=i[w.id],S=w.uniforms,U=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,g=S.length;R<g;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,M=D.length;y<M;y++){const L=D[y];if(f(L,R,y,U)===!0){const q=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Q=0;for(let st=0;st<V.length;st++){const J=V[st],ct=x(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,q+Q,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,Q),Q+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,T,S,U){const R=w.value,g=T+"_"+S;if(U[g]===void 0)return typeof R=="number"||typeof R=="boolean"?U[g]=R:U[g]=R.clone(),!0;{const D=U[g];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return U[g]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(w){const T=w.uniforms;let S=0;const U=16;for(let g=0,D=T.length;g<D;g++){const y=Array.isArray(T[g])?T[g]:[T[g]];for(let M=0,L=y.length;M<L;M++){const q=y[M],V=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,st=V.length;Q<st;Q++){const J=V[Q],ct=x(J),$=S%U,xt=$%ct.boundary,tt=$+xt;S+=xt,tt!==0&&U-tt<ct.storage&&(S+=U-tt),q.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=ct.storage}}}const R=S%U;return R>0&&(S+=U-R),w.__size=S,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function u(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class X0{constructor(t={}){const{canvas:e=xu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let U=!1;this._outputColorSpace=un;let R=0,g=0,D=null,y=-1,M=null;const L=new Le,q=new Le;let V=null;const Q=new Ut(0);let st=0,J=e.width,ct=e.height,$=1,xt=null,tt=null;const ft=new Le(0,0,J,ct),ee=new Le(0,0,J,ct);let Me=!1;const et=new vo;let pt=!1,Nt=!1;const bt=new Re,Ft=new Re,oe=new P,Gt=new Le,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function se(){return D===null?$:1}let I=n;function Ae(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),I===null){const z="webgl2";if(I=Ae(z,b),I===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,ye,It,re,Ot,Yt,Ce,C,v,H,j,rt,Z,k,ot,Rt,Pt,G,Tt,Bt,zt,mt,Wt,N;function dt(){ae=new nm(I),ae.init(),mt=new z0(I,ae),ye=new Kp(I,ae,t,mt),It=new F0(I,ae),ye.reverseDepthBuffer&&p&&It.buffers.depth.setReversed(!0),re=new rm(I),Ot=new b0,Yt=new O0(I,ae,It,Ot,ye,mt,re),Ce=new Zp(S),C=new em(S),v=new hd(I),Wt=new Yp(I,v),H=new im(I,v,re,Wt),j=new om(I,H,v,re),Tt=new am(I,ye,Yt),Rt=new jp(Ot),rt=new S0(S,Ce,C,ae,ye,Wt,Rt),Z=new W0(S,Ot),k=new E0,ot=new D0(ae),G=new Xp(S,Ce,C,It,j,f,l),Pt=new U0(S,j,ye),N=new q0(I,re,ye,It),Bt=new $p(I,ae,re),zt=new sm(I,ae,re),re.programs=rt.programs,S.capabilities=ye,S.extensions=ae,S.properties=Ot,S.renderLists=k,S.shadowMap=Pt,S.state=It,S.info=re}dt();const ht=new H0(S,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(J,ct,!1))},this.getSize=function(b){return b.set(J,ct)},this.setSize=function(b,z,X=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ct=z,e.width=Math.floor(b*$),e.height=Math.floor(z*$),X===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(J*$,ct*$).floor()},this.setDrawingBufferSize=function(b,z,X){J=b,ct=z,$=X,e.width=Math.floor(b*X),e.height=Math.floor(z*X),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,z,X,Y){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,z,X,Y),It.viewport(L.copy(ft).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,z,X,Y){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,z,X,Y),It.scissor(q.copy(ee).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){It.setScissorTest(Me=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,X=!0){let Y=0;if(b){let B=!1;if(D!==null){const ut=D.texture.format;B=ut===mo||ut===po||ut===fo}if(B){const ut=D.texture.type,vt=ut===An||ut===wi||ut===Cs||ut===Ps||ut===co||ut===ho,Ct=G.getClearColor(),At=G.getClearAlpha(),kt=Ct.r,Ht=Ct.g,E=Ct.b;vt?(_[0]=kt,_[1]=Ht,_[2]=E,_[3]=At,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=kt,x[1]=Ht,x[2]=E,x[3]=At,I.clearBufferiv(I.COLOR,0,x))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),G.dispose(),k.dispose(),ot.dispose(),Ot.dispose(),Ce.dispose(),C.dispose(),j.dispose(),Wt.dispose(),N.dispose(),rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ds),ht.removeEventListener("sessionend",zs),Ve.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=re.autoReset,z=Pt.enabled,X=Pt.autoUpdate,Y=Pt.needsUpdate,B=Pt.type;dt(),re.autoReset=b,Pt.enabled=z,Pt.autoUpdate=X,Pt.needsUpdate=Y,Pt.type=B}function nt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dt(b){const z=b.target;z.removeEventListener("dispose",Dt),K(z)}function K(b){pe(b),Ot.remove(b)}function pe(b){const z=Ot.get(b).programs;z!==void 0&&(z.forEach(function(X){rt.releaseProgram(X)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,X,Y,B,ut){z===null&&(z=fe);const vt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=ms(b,z,X,Y,B);It.setMaterial(Y,vt);let At=X.index,kt=1;if(Y.wireframe===!0){if(At=H.getWireframeAttribute(X),At===void 0)return;kt=2}const Ht=X.drawRange,E=X.attributes.position;let O=Ht.start*kt,F=(Ht.start+Ht.count)*kt;ut!==null&&(O=Math.max(O,ut.start*kt),F=Math.min(F,(ut.start+ut.count)*kt)),At!==null?(O=Math.max(O,0),F=Math.min(F,At.count)):E!=null&&(O=Math.max(O,0),F=Math.min(F,E.count));const at=F-O;if(at<0||at===1/0)return;Wt.setup(B,Y,Ct,X,At);let St,wt=Bt;if(At!==null&&(St=v.get(At),wt=zt,wt.setIndex(St)),B.isMesh)Y.wireframe===!0?(It.setLineWidth(Y.wireframeLinewidth*se()),wt.setMode(I.LINES)):wt.setMode(I.TRIANGLES);else if(B.isLine){let Mt=Y.linewidth;Mt===void 0&&(Mt=1),It.setLineWidth(Mt*se()),B.isLineSegments?wt.setMode(I.LINES):B.isLineLoop?wt.setMode(I.LINE_LOOP):wt.setMode(I.LINE_STRIP)}else B.isPoints?wt.setMode(I.POINTS):B.isSprite&&wt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))wt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Mt=B._multiDrawStarts,be=B._multiDrawCounts,ne=B._multiDrawCount,Qe=At?v.get(At).bytesPerElement:1,Cn=Ot.get(Y).currentProgram.getUniforms();for(let Ge=0;Ge<ne;Ge++)Cn.setValue(I,"_gl_DrawID",Ge),wt.render(Mt[Ge]/Qe,be[Ge])}else if(B.isInstancedMesh)wt.renderInstances(O,at,B.count);else if(X.isInstancedBufferGeometry){const Mt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Mt);wt.renderInstances(O,at,be)}else wt.render(O,at)};function me(b,z,X){b.transparent===!0&&b.side===en&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,Xt(b,z,X),b.side=ii,b.needsUpdate=!0,Xt(b,z,X),b.side=en):Xt(b,z,X)}this.compile=function(b,z,X=null){X===null&&(X=b),u=ot.get(X),u.init(z),T.push(u),X.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),b!==X&&b.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const Y=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const Ct=ut[vt];me(Ct,X,B),Y.add(Ct)}else me(ut,X,B),Y.add(ut)}),u=T.pop(),Y},this.compileAsync=function(b,z,X=null){const Y=this.compile(b,z,X);return new Promise(B=>{function ut(){if(Y.forEach(function(vt){Ot.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){B(b);return}setTimeout(ut,10)}ae.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let $e=null;function Ne(b){$e&&$e(b)}function ds(){Ve.stop()}function zs(){Ve.start()}const Ve=new th;Ve.setAnimationLoop(Ne),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(b){$e=b,ht.setAnimationLoop(b),b===null?Ve.stop():Ve.start()},ht.addEventListener("sessionstart",ds),ht.addEventListener("sessionend",zs),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(z),z=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,z,D),u=ot.get(b,T.length),u.init(z),T.push(u),Ft.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(Ft),Nt=this.localClippingEnabled,pt=Rt.init(this.clippingPlanes,Nt),m=k.get(b,w.length),m.init(),w.push(m),ht.enabled===!0&&ht.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&fs(ut,z,-1/0,S.sortObjects)}fs(b,z,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(xt,tt),_e=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,_e&&G.addToRenderList(m,b),this.info.render.frame++,pt===!0&&Rt.beginShadows();const X=u.state.shadowsArray;Pt.render(X,b,z),pt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(u.setupLights(),z.isArrayCamera){const ut=z.cameras;if(B.length>0)for(let vt=0,Ct=ut.length;vt<Ct;vt++){const At=ut[vt];Vn(Y,B,b,At)}_e&&G.render(b);for(let vt=0,Ct=ut.length;vt<Ct;vt++){const At=ut[vt];Bs(m,b,At,At.viewport)}}else B.length>0&&Vn(Y,B,b,z),_e&&G.render(b),Bs(m,b,z);D!==null&&g===0&&(Yt.updateMultisampleRenderTarget(D),Yt.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(S,b,z),Wt.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],pt===!0&&Rt.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function fs(b,z,X,Y){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){Y&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);const vt=j.update(b),Ct=b.material;Ct.visible&&m.push(b,vt,Ct,X,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const vt=j.update(b),Ct=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Gt.copy(vt.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ct)){const At=vt.groups;for(let kt=0,Ht=At.length;kt<Ht;kt++){const E=At[kt],O=Ct[E.materialIndex];O&&O.visible&&m.push(b,vt,O,X,Gt.z,E)}}else Ct.visible&&m.push(b,vt,Ct,X,Gt.z,null)}}const ut=b.children;for(let vt=0,Ct=ut.length;vt<Ct;vt++)fs(ut[vt],z,X,Y)}function Bs(b,z,X,Y){const B=b.opaque,ut=b.transmissive,vt=b.transparent;u.setupLightsView(X),pt===!0&&Rt.setGlobalState(S.clippingPlanes,X),Y&&It.viewport(L.copy(Y)),B.length>0&&bn(B,z,X),ut.length>0&&bn(ut,z,X),vt.length>0&&bn(vt,z,X),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Vn(b,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new Ei(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ns:An,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const ut=u.state.transmissionRenderTarget[Y.id],vt=Y.viewport||L;ut.setSize(vt.z*S.transmissionResolutionScale,vt.w*S.transmissionResolutionScale);const Ct=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(Q),st=S.getClearAlpha(),st<1&&S.setClearColor(16777215,.5),S.clear(),_e&&G.render(X);const At=S.toneMapping;S.toneMapping=ei;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),pt===!0&&Rt.setGlobalState(S.clippingPlanes,Y),bn(b,X,Y),Yt.updateMultisampleRenderTarget(ut),Yt.updateRenderTargetMipmap(ut),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let E=0,O=z.length;E<O;E++){const F=z[E],at=F.object,St=F.geometry,wt=F.material,Mt=F.group;if(wt.side===en&&at.layers.test(Y.layers)){const be=wt.side;wt.side=Ze,wt.needsUpdate=!0,ks(at,X,Y,St,wt,Mt),wt.side=be,wt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Yt.updateMultisampleRenderTarget(ut),Yt.updateRenderTargetMipmap(ut))}S.setRenderTarget(Ct),S.setClearColor(Q,st),kt!==void 0&&(Y.viewport=kt),S.toneMapping=At}function bn(b,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ut=b.length;B<ut;B++){const vt=b[B],Ct=vt.object,At=vt.geometry,kt=vt.group;let Ht=vt.material;Ht.allowOverride===!0&&Y!==null&&(Ht=Y),Ct.layers.test(X.layers)&&ks(Ct,z,X,At,Ht,kt)}}function ks(b,z,X,Y,B,ut){b.onBeforeRender(S,z,X,Y,B,ut),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(S,z,X,Y,b,ut),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=Ze,B.needsUpdate=!0,S.renderBufferDirect(X,z,Y,B,b,ut),B.side=ii,B.needsUpdate=!0,S.renderBufferDirect(X,z,Y,B,b,ut),B.side=en):S.renderBufferDirect(X,z,Y,B,b,ut),b.onAfterRender(S,z,X,Y,B,ut)}function Xt(b,z,X){z.isScene!==!0&&(z=fe);const Y=Ot.get(b),B=u.state.lights,ut=u.state.shadowsArray,vt=B.state.version,Ct=rt.getParameters(b,B.state,ut,z,X),At=rt.getProgramCacheKey(Ct);let kt=Y.programs;Y.environment=b.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(b.isMeshStandardMaterial?C:Ce).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Dt),kt=new Map,Y.programs=kt);let Ht=kt.get(At);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===vt)return ps(b,Ct),Ht}else Ct.uniforms=rt.getUniforms(b),b.onBeforeCompile(Ct,S),Ht=rt.acquireProgram(Ct,At),kt.set(At,Ht),Y.uniforms=Ct.uniforms;const E=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(E.clippingPlanes=Rt.uniform),ps(b,Ct),Y.needsLights=Pi(b),Y.lightsStateVersion=vt,Y.needsLights&&(E.ambientLightColor.value=B.state.ambient,E.lightProbe.value=B.state.probe,E.directionalLights.value=B.state.directional,E.directionalLightShadows.value=B.state.directionalShadow,E.spotLights.value=B.state.spot,E.spotLightShadows.value=B.state.spotShadow,E.rectAreaLights.value=B.state.rectArea,E.ltc_1.value=B.state.rectAreaLTC1,E.ltc_2.value=B.state.rectAreaLTC2,E.pointLights.value=B.state.point,E.pointLightShadows.value=B.state.pointShadow,E.hemisphereLights.value=B.state.hemi,E.directionalShadowMap.value=B.state.directionalShadowMap,E.directionalShadowMatrix.value=B.state.directionalShadowMatrix,E.spotShadowMap.value=B.state.spotShadowMap,E.spotLightMatrix.value=B.state.spotLightMatrix,E.spotLightMap.value=B.state.spotLightMap,E.pointShadowMap.value=B.state.pointShadowMap,E.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function qt(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=yr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function ps(b,z){const X=Ot.get(b);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function ms(b,z,X,Y,B){z.isScene!==!0&&(z=fe),Yt.resetTextureUnits();const ut=z.fog,vt=Y.isMeshStandardMaterial?z.environment:null,Ct=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:as,At=(Y.isMeshStandardMaterial?C:Ce).get(Y.envMap||vt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),E=!!X.morphAttributes.position,O=!!X.morphAttributes.normal,F=!!X.morphAttributes.color;let at=ei;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(at=S.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=St!==void 0?St.length:0,Mt=Ot.get(Y),be=u.state.lights;if(pt===!0&&(Nt===!0||b!==M)){const He=b===M&&Y.id===y;Rt.setState(Y,b,He)}let ne=!1;Y.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==be.state.version||Mt.outputColorSpace!==Ct||B.isBatchedMesh&&Mt.batching===!1||!B.isBatchedMesh&&Mt.batching===!0||B.isBatchedMesh&&Mt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Mt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Mt.instancing===!1||!B.isInstancedMesh&&Mt.instancing===!0||B.isSkinnedMesh&&Mt.skinning===!1||!B.isSkinnedMesh&&Mt.skinning===!0||B.isInstancedMesh&&Mt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Mt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Mt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Mt.instancingMorph===!1&&B.morphTexture!==null||Mt.envMap!==At||Y.fog===!0&&Mt.fog!==ut||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Rt.numPlanes||Mt.numIntersection!==Rt.numIntersection)||Mt.vertexAlphas!==kt||Mt.vertexTangents!==Ht||Mt.morphTargets!==E||Mt.morphNormals!==O||Mt.morphColors!==F||Mt.toneMapping!==at||Mt.morphTargetsCount!==wt)&&(ne=!0):(ne=!0,Mt.__version=Y.version);let Qe=Mt.currentProgram;ne===!0&&(Qe=Xt(Y,z,B));let Cn=!1,Ge=!1,wn=!1;const xe=Qe.getUniforms(),tn=Mt.uniforms;if(It.useProgram(Qe.program)&&(Cn=!0,Ge=!0,wn=!0),Y.id!==y&&(y=Y.id,Ge=!0),Cn||M!==b){It.buffers.depth.getReversed()?(bt.copy(b.projectionMatrix),Mu(bt),yu(bt),xe.setValue(I,"projectionMatrix",bt)):xe.setValue(I,"projectionMatrix",b.projectionMatrix),xe.setValue(I,"viewMatrix",b.matrixWorldInverse);const W=xe.map.cameraPosition;W!==void 0&&W.setValue(I,oe.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ge=!0,wn=!0)}if(B.isSkinnedMesh){xe.setOptional(I,B,"bindMatrix"),xe.setOptional(I,B,"bindMatrixInverse");const He=B.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),xe.setValue(I,"boneTexture",He.boneTexture,Yt))}B.isBatchedMesh&&(xe.setOptional(I,B,"batchingTexture"),xe.setValue(I,"batchingTexture",B._matricesTexture,Yt),xe.setOptional(I,B,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",B._indirectTexture,Yt),xe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",B._colorsTexture,Yt));const Ee=X.morphAttributes;if((Ee.position!==void 0||Ee.normal!==void 0||Ee.color!==void 0)&&Tt.update(B,X,Qe),(Ge||Mt.receiveShadow!==B.receiveShadow)&&(Mt.receiveShadow=B.receiveShadow,xe.setValue(I,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tn.envMap.value=At,tn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),Ge&&(xe.setValue(I,"toneMappingExposure",S.toneMappingExposure),Mt.needsLights&&Rn(tn,wn),ut&&Y.fog===!0&&Z.refreshFogUniforms(tn,ut),Z.refreshMaterialUniforms(tn,Y,$,ct,u.state.transmissionRenderTarget[b.id]),yr.upload(I,qt(Mt),tn,Yt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(yr.upload(I,qt(Mt),tn,Yt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(I,"center",B.center),xe.setValue(I,"modelViewMatrix",B.modelViewMatrix),xe.setValue(I,"normalMatrix",B.normalMatrix),xe.setValue(I,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const He=Y.uniformsGroups;for(let W=0,Zt=He.length;W<Zt;W++){const Jt=He[W];N.update(Jt,Qe),N.bind(Jt,Qe)}}return Qe}function Rn(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Pi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,z,X){const Y=Ot.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ot.get(b.texture).__webglTexture=z,Ot.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const X=Ot.get(b);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const ai=I.createFramebuffer();this.setRenderTarget=function(b,z=0,X=0){D=b,R=z,g=X;let Y=!0,B=null,ut=!1,vt=!1;if(b){const At=Ot.get(b);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)Yt.setupRenderTarget(b);else if(At.__hasExternalTextures)Yt.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const E=b.depthTexture;if(At.__boundDepthTexture!==E){if(E!==null&&Ot.has(E)&&(b.width!==E.image.width||b.height!==E.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const Ht=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?B=Ht[z][X]:B=Ht[z],ut=!0):b.samples>0&&Yt.useMultisampledRTT(b)===!1?B=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[X]:B=Ht,L.copy(b.viewport),q.copy(b.scissor),V=b.scissorTest}else L.copy(ft).multiplyScalar($).floor(),q.copy(ee).multiplyScalar($).floor(),V=Me;if(X!==0&&(B=ai),It.bindFramebuffer(I.FRAMEBUFFER,B)&&Y&&It.drawBuffers(b,B),It.viewport(L),It.scissor(q),It.setScissorTest(V),ut){const At=Ot.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,X)}else if(vt){const At=Ot.get(b.texture),kt=z;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,X,kt)}else if(b!==null&&X!==0){const At=Ot.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(b,z,X,Y,B,ut,vt,Ct=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){It.bindFramebuffer(I.FRAMEBUFFER,At);try{const kt=b.textures[Ct],Ht=kt.format,E=kt.type;if(!ye.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(E)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Y&&X>=0&&X<=b.height-B&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(z,X,Y,B,mt.convert(Ht),mt.convert(E),ut))}finally{const kt=D!==null?Ot.get(D).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,z,X,Y,B,ut,vt,Ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At)if(z>=0&&z<=b.width-Y&&X>=0&&X<=b.height-B){It.bindFramebuffer(I.FRAMEBUFFER,At);const kt=b.textures[Ct],Ht=kt.format,E=kt.type;if(!ye.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(E))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const O=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,O),I.bufferData(I.PIXEL_PACK_BUFFER,ut.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(z,X,Y,B,mt.convert(Ht),mt.convert(E),0);const F=D!==null?Ot.get(D).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,F);const at=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vu(I,at,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,O),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ut),I.deleteBuffer(O),I.deleteSync(at),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,X=0){const Y=Math.pow(2,-X),B=Math.floor(b.image.width*Y),ut=Math.floor(b.image.height*Y),vt=z!==null?z.x:0,Ct=z!==null?z.y:0;Yt.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,vt,Ct,B,ut),It.unbindTexture()};const Di=I.createFramebuffer(),oi=I.createFramebuffer();this.copyTextureToTexture=function(b,z,X=null,Y=null,B=0,ut=null){ut===null&&(B!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=B,B=0):ut=0);let vt,Ct,At,kt,Ht,E,O,F,at;const St=b.isCompressedTexture?b.mipmaps[ut]:b.image;if(X!==null)vt=X.max.x-X.min.x,Ct=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,Ht=X.min.y,E=X.isBox3?X.min.z:0;else{const Ee=Math.pow(2,-B);vt=Math.floor(St.width*Ee),Ct=Math.floor(St.height*Ee),b.isDataArrayTexture?At=St.depth:b.isData3DTexture?At=Math.floor(St.depth*Ee):At=1,kt=0,Ht=0,E=0}Y!==null?(O=Y.x,F=Y.y,at=Y.z):(O=0,F=0,at=0);const wt=mt.convert(z.format),Mt=mt.convert(z.type);let be;z.isData3DTexture?(Yt.setTexture3D(z,0),be=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Yt.setTexture2DArray(z,0),be=I.TEXTURE_2D_ARRAY):(Yt.setTexture2D(z,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),wn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E);const xe=b.isDataArrayTexture||b.isData3DTexture,tn=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Ee=Ot.get(b),He=Ot.get(z),W=Ot.get(Ee.__renderTarget),Zt=Ot.get(He.__renderTarget);It.bindFramebuffer(I.READ_FRAMEBUFFER,W.__webglFramebuffer),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Jt=0;Jt<At;Jt++)xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.get(b).__webglTexture,B,E+Jt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.get(z).__webglTexture,ut,at+Jt)),I.blitFramebuffer(kt,Ht,vt,Ct,O,F,vt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Ot.has(b)){const Ee=Ot.get(b),He=Ot.get(z);It.bindFramebuffer(I.READ_FRAMEBUFFER,Di),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,oi);for(let W=0;W<At;W++)xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,B,E+W):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,B),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,ut,at+W):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,ut),B!==0?I.blitFramebuffer(kt,Ht,vt,Ct,O,F,vt,Ct,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(be,ut,O,F,at+W,kt,Ht,vt,Ct):I.copyTexSubImage2D(be,ut,O,F,kt,Ht,vt,Ct);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(be,ut,O,F,at,vt,Ct,At,wt,Mt,St.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(be,ut,O,F,at,vt,Ct,At,wt,St.data):I.texSubImage3D(be,ut,O,F,at,vt,Ct,At,wt,Mt,St):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ut,O,F,vt,Ct,wt,Mt,St.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ut,O,F,St.width,St.height,wt,St.data):I.texSubImage2D(I.TEXTURE_2D,ut,O,F,vt,Ct,wt,Mt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wn),ut===0&&z.generateMipmaps&&I.generateMipmap(be),It.unbindTexture()},this.copyTextureToTexture3D=function(b,z,X=null,Y=null,B=0){return ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,X,Y,B)},this.initRenderTarget=function(b){Ot.get(b).__webglFramebuffer===void 0&&Yt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Yt.setTextureCube(b,0):b.isData3DTexture?Yt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Yt.setTexture2DArray(b,0):Yt.setTexture2D(b,0),It.unbindTexture()},this.resetState=function(){R=0,g=0,D=null,It.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class Y0{constructor(t){A(this,"keys",new Set);A(this,"justPressed",new Set);A(this,"leftReleased",!1);A(this,"leftDown",!1);A(this,"rightDown",!1);A(this,"dx",0);A(this,"dy",0);A(this,"wheel",0);A(this,"suspended",!1);window.addEventListener("keydown",e=>{this.suspended||(e.code==="Tab"&&e.preventDefault(),this.keys.has(e.code)||this.justPressed.add(e.code),this.keys.add(e.code))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{e.button===0&&(this.leftDown=!0),e.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),e.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",e=>{this.dx+=e.movementX,this.dy+=e.movementY}),t.addEventListener("wheel",e=>{this.wheel+=e.deltaY})}isDown(t){return this.keys.has(t)}wasPressed(t){return this.justPressed.has(t)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}clearKeys(){this.keys.clear(),this.justPressed.clear()}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const ce={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},$0={day:{barSeconds:3.2,chords:[[ce.C4,ce.E4,ce.G4],[220,ce.C4,ce.E4],[174.61,220,ce.C4],[196,246.94,ce.D4]],style:"melody",melody:[[[ce.E5,0,.5],[ce.G5,.25,.5],[ce.A5,.5,.5],[ce.G5,.75,.45]],[[ce.E5,0,.6],[ce.C5,.5,.85]],[[ce.D5,0,.5],[ce.E5,.25,.5],[ce.F5,.5,.5],[ce.D5,.75,.45]],[[ce.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,ce.C4],[ce.C4,ce.E4,ce.G4],[196,246.94,ce.D4],[220,ce.C4,ce.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,ce.C4,ce.E4],[174.61,220,ce.C4],[130.81,164.81,196],[196,246.94,ce.D4]],style:"melody",melody:[[[ce.A4,0,1.4]],[[ce.C5,0,1],[ce.B4,.5,1.2]],[[ce.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class K0{constructor(){A(this,"ctx",null);A(this,"sfxBus",null);A(this,"musicBus",null);A(this,"noiseBuffer",null);A(this,"chordIndex",0);A(this,"musicTimer",null);A(this,"volume",1);A(this,"musicEnabled",!0);A(this,"rainGain",null);A(this,"musicMode","day")}unlock(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.sfxBus=t.createGain(),this.sfxBus.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.connect(t.destination),this.applyVolume();const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;this.noiseBuffer=e,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(t){this.musicMode=t}setRain(t){if(!this.ctx||!this.rainGain)return;const e=t?.09:1e-4;this.rainGain.gain.setTargetAtTime(e,this.ctx.currentTime,1.2)}setVolume(t){this.volume=t,this.applyVolume()}setMusicEnabled(t){this.musicEnabled=t,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(t){if(this.ctx)switch(t){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((e,n)=>this.tone("sine",e,e,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.25,.2,.18+n*.1));break}}tone(t,e,n,i,r,a=0){if(!this.ctx||!this.sfxBus)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),n!==e&&l.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+i),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+i),l.connect(c).connect(this.sfxBus),l.start(o),l.stop(o+i+.05)}noiseBurst(t,e,n,i,r){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const a=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=t,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+i);const c=this.ctx.createGain();c.gain.setValueAtTime(r,a),c.gain.exponentialRampToValueAtTime(.001,a+i),o.connect(l).connect(c).connect(this.sfxBus),o.start(a),o.stop(a+i+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const i=this.ctx.createOscillator();i.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=.05,i.connect(r).connect(n.gain),t.connect(e).connect(n).connect(this.musicBus),t.start(),i.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=1400,e.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.value=1;const r=this.ctx.createOscillator();r.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=.18,r.connect(a).connect(i.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,t.connect(e).connect(n).connect(i).connect(this.rainGain).connect(this.musicBus),t.start(),r.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const t=$0[this.musicMode],e=t.barSeconds,n=this.ctx.currentTime+.05,i=this.chordIndex%t.chords.length,r=t.chords[i];this.chordIndex++;for(const l of r){const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type=t.padType,c.frequency.value=l,d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(t.padVol,n+.7),d.gain.setValueAtTime(t.padVol,n+e-1),d.gain.exponentialRampToValueAtTime(1e-4,n+e+.5),c.connect(d).connect(this.musicBus),c.start(n),c.stop(n+e+.6)}const a=this.ctx.createOscillator(),o=this.ctx.createGain();if(a.type="sine",a.frequency.value=r[0]/2,o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.07,n+.3),o.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(o).connect(this.musicBus),a.start(n),a.stop(n+e+.1),t.style==="melody"){const l=t.melody[i%t.melody.length]??[];for(const[c,d,h]of l)this.melodyNote(c,n+d*e,h)}else{const l=[0,1,2,1,0,1,2,1];for(let c=0;c<l.length;c++)this.melodyNote(r[l[c]]*2,n+c/8*e,e/8-.05)}for(const l of t.hats)this.hatTick(n+l*e);this.musicTimer=setTimeout(()=>this.scheduleBar(),e*1e3)}melodyNote(t,e,n){if(!this.ctx||!this.musicBus)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(r).connect(this.musicBus),i.start(e),i.stop(e+n+.05)}hatTick(t){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.05,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n).connect(i).connect(this.musicBus),e.start(t),e.stop(t+.08)}}const j0=22,Z0=80;class J0{constructor(t){A(this,"hitstopT",0);A(this,"shakeT",0);A(this,"shakeDuration",1);A(this,"shakeIntensity",0);A(this,"particles",[]);this.scene=t}get frozen(){return this.hitstopT>0}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t,e){this.shakeIntensity=Math.max(this.shakeIntensity,t),this.shakeT=Math.max(this.shakeT,e),this.shakeDuration=Math.max(e,.01)}burst(t,e,n=10,i=7){for(let r=0;r<n&&!(this.particles.length>=Z0);r++){const a=.07+Math.random()*.1,o=new it(new bo(a),new on({color:e}));o.position.copy(t);const l=new P(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),c=.35+Math.random()*.3;this.particles.push({mesh:o,velocity:l.multiplyScalar(i*(.5+Math.random()*.7)),life:c,maxLife:c}),this.scene.add(o)}}update(t){if(this.hitstopT=Math.max(0,this.hitstopT-t),this.particles=this.particles.filter(e=>{if(e.life-=t,e.life<=0)return this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),!1;e.velocity.y-=j0*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=t*8,e.mesh.rotation.y+=t*6;const n=e.life/e.maxLife;return e.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=t;const e=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*e;return this.shakeT<=0&&(this.shakeIntensity=0),new P((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new P}}let ji=null;function Q0(){if(!ji){const s=new Uint8Array([90,150,210,255]);ji=new $u(s,s.length,1,uo),ji.minFilter=Je,ji.magFilter=Je,ji.needsUpdate=!0}return ji}function gt(s,t={}){const e=new Qu({color:s,gradientMap:Q0(),transparent:t.transparent??!1,opacity:t.opacity??1,vertexColors:t.vertexColors??!1});return t.emissive!==void 0&&(e.emissive.setHex(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1),e}const tg=new on({color:1844019,side:Ze});function ri(s,t=1.06){var n;const e=[];s.traverse(i=>{i instanceof it&&!(i instanceof Zc)&&e.push(i)});for(const i of e){const r=new it(i.geometry,tg);r.position.copy(i.position),r.rotation.copy(i.rotation),r.scale.copy(i.scale).multiplyScalar(t),r.raycast=()=>{},(n=i.parent)==null||n.add(r)}}const eg=.6,Fl=.25;function ng(){const s=new Ci(700,700,96,96);s.rotateX(-Math.PI/2);const t=gt(2789320,{transparent:!0,opacity:.92});return new it(s,t)}function ig(s,t,e=1){const n=s.geometry.getAttribute("position"),i=eg*e;for(let r=0;r<n.count;r++){const a=n.getX(r),o=n.getZ(r),l=Math.sin(a*Fl+t)*Math.cos(o*Fl+t*.8)*i;n.setY(r,l)}n.needsUpdate=!0,s.geometry.computeVertexNormals()}const sg=360,Ol=.65,rg=new Ut(8900331),ag=new Ut(660528),ua=260,zl=42,og={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class lg{constructor(t,e,n,i){A(this,"time",.12);A(this,"weather","clear");A(this,"weatherT",50);A(this,"lightningT",6);A(this,"flashT",0);A(this,"rain");A(this,"rainVelocity",[]);this.scene=t,this.sun=e,this.hemi=n,this.ambient=i;const r=new Float32Array(ua*6);for(let o=0;o<ua;o++){const l=(Math.random()-.5)*zl,c=Math.random()*30,d=(Math.random()-.5)*zl;r.set([l,c,d,l,c-.9,d],o*6),this.rainVelocity.push(30+Math.random()*14)}const a=new ke;a.setAttribute("position",new an(r,3)),this.rain=new Zu(a,new Mo({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,t.add(this.rain)}forceWeather(t){this.weather=t,this.weatherT=60}get rainVisible(){return this.rain.visible}update(t,e,n){if(this.time=(this.time+t/sg)%1,this.weatherT-=t,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const i=og[this.weather],r=this.weather!=="clear",a=this.time/Ol,o=this.time<Ol?Math.sin(Math.PI*a):0,l=Math.PI*(1-a);this.sun.position.set(e.x+Math.cos(l)*120,Math.max(Math.sin(l),.12)*130+15,e.z+40),this.sun.target.position.set(e.x,0,e.z),this.sun.intensity=.15+2.45*o,this.hemi.intensity=.25+.45*o;let c=.12+.23*o,d=!1;if(this.weather==="storm"&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,d=!0)),this.flashT>0&&(this.flashT-=t,c+=1.6),this.ambient.intensity=c,!n){const h=ag.clone().lerp(rg,o).multiplyScalar(i.darken);this.flashT>0&&h.lerp(new Ut(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=r&&!n,this.rain.visible){this.rain.position.set(e.x,e.y,e.z);const h=this.rain.geometry.getAttribute("position"),p=this.weather==="storm"?1.6:1;for(let f=0;f<ua;f++){let _=h.getY(f*2)-this.rainVelocity[f]*p*t;_<-4&&(_=26+Math.random()*4),h.setY(f*2,_),h.setY(f*2+1,_-.9)}h.needsUpdate=!0}return{isNight:o<.08,weather:this.weather,raining:r,waveScale:i.wave,boatFactor:i.boat,thunder:d}}}const cg=14,hg=1.2,ug=5,rh=2e3,On={x:rh,z:0},dg=1100;function Zi(s){return s>dg?2:1}const ns=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:rh,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],Bl={x:-60,z:-120},hn={x:-40,z:230,r:26},kl={x:60,z:-170},Gl={x:0,z:288},ah=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function fg(s,t){return ah.some(e=>Math.hypot(s-e.x,t-e.z)<e.r)}function da(s){return s*s*(3-2*s)}function pg(s,t,e){const n=t-s.x,i=e-s.z,r=Math.hypot(n,i);if(r>=s.r)return 0;const a=da(Math.min((s.r-r)/cg,1));let o=0;for(const d of s.hills){const h=Math.hypot(n-d.x,i-d.z);h<d.r&&(o+=d.h*da(1-h/d.r))}const l=Math.sin(t*.3)*Math.cos(e*.3)*.5;let c=0;if(s.crater){const d=Math.hypot(n-s.crater.x,i-s.crater.z);d<s.crater.r&&(c=s.crater.depth*da(1-d/s.crater.r))}return a*(hg+o+l-c)}function ue(s,t){let e=0;for(const n of ns)e=Math.max(e,pg(n,s,t));return e}function so(s,t){return ns.some(e=>Math.hypot(s-e.x,t-e.z)<e.r+ug)}function oh(s,t){return ue(s,t)<.25}const Ai=[],mg=.45;function gg(s,t,e=mg){let n=s,i=t;for(const r of Ai){const a=n-r.x,o=i-r.z,l=r.r+e,c=a*a+o*o;if(c>=l*l)continue;const d=Math.sqrt(c);if(d>1e-4){const h=(l-d)/d;n+=a*h,i+=o*h}else n+=l}return{x:n,z:i}}function _g(){Ai.length=0;const s=new de;for(const e of ns)s.add(vg(e));for(const e of ah){const n=new it(new Pr(e.r,24),new on({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(e.x,ue(e.x,e.z)+.08,e.z),s.add(n)}const t=gt(10134712);for(let e=0;e<10;e++){const n=e/10*Math.PI*2,i=6+e%3*7,r=2.5+e*7%5,a=new it(new Te(.9,1.1,r,10),t);a.position.set(hn.x+Math.cos(n)*i,r/2-1,hn.z+Math.sin(n)*i),a.rotation.z=(e%5-2)*.08,a.castShadow=!0,s.add(a),Ai.push({x:a.position.x,z:a.position.z,r:1})}return s.add(xg()),s}function xg(){const s=new de,t=On.x,e=[{x:t-12,z:-26,body:15260864,roof:12606010},{x:t+12,z:-28,body:14207144,roof:3828378},{x:t-20,z:-12,body:14733488,roof:10119738},{x:t+22,z:-14,body:15260864,roof:4885082},{x:t,z:-18,body:15787208,roof:11552840}];for(const a of e){const o=new de,l=new it(new De(4.2,3,3.6),gt(a.body));l.position.y=1.5;const c=new it(new fn(3.4,2,4),gt(a.roof));c.position.y=3.9,c.rotation.y=Math.PI/4;const d=new it(new De(.9,1.5,.15),gt(6964002));d.position.set(0,.75,1.85),o.add(l,c,d),ri(o),o.traverse(h=>{h instanceof it&&(h.castShadow=!0)}),o.rotation.y=(a.x+a.z)%5*.18,o.position.set(a.x,ue(a.x,a.z),a.z),s.add(o),Ai.push({x:a.x,z:a.z,r:2.3})}const n=t+6,i=gt(10516552),r=gt(6964002);for(let a=0;a<8;a++){const o=-48-a*2.2,l=new it(new De(3,.25,2),i);if(l.position.set(n,.85,o),l.castShadow=!0,s.add(l),a%2===0)for(const c of[-1.4,1.4]){const d=new it(new Te(.14,.16,1.8,8),r);d.position.set(n+c,0,o),d.castShadow=!0,s.add(d),Ai.push({x:n+c,z:o,r:.35})}}return s}function vg(s){const t=new de,e=s.r*2+14,n=150,i=new Ci(e,e,n,n);i.rotateX(-Math.PI/2);const r=i.getAttribute("position"),a=new Float32Array(r.count*3),o=new Ut(s.sand),l=new Ut(s.grass),c=new Ut(s.dark),d=new Ut;for(let f=0;f<r.count;f++){const _=r.getX(f)+s.x,x=r.getZ(f)+s.z,m=ue(_,x);r.setY(f,m),m<.8?d.copy(o):m<1.8?d.lerpColors(o,l,(m-.8)/1):d.lerpColors(l,c,Math.min((m-1.8)/9,1)),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}i.setAttribute("color",new an(a,3)),i.computeVertexNormals();const h=new it(i,gt(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(s.x,0,s.z),t.add(h);let p=0;for(let f=0;f<300&&p<s.treeCount;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(s.r-6),m=s.x+Math.cos(_)*x,u=s.z+Math.sin(_)*x,w=ue(m,u);w>1.8&&w<11&&(t.add(Mg(m,w,u,s.treeColor)),p++)}for(let f=0;f<14;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(s.r-4),m=s.x+Math.cos(_)*x,u=s.z+Math.sin(_)*x,w=.7+Math.random()*.9,T=new it(new yo(w),gt(9079434));T.position.set(m,ue(m,u)+.3,u),T.rotation.set(Math.random(),Math.random(),Math.random()),T.castShadow=!0,t.add(T),Ai.push({x:m,z:u,r:w*.75})}return t}function Mg(s,t,e,n){const i=new de,r=.8+Math.random()*.6,a=new it(new Te(.3,.45,3),gt(8016432));a.position.y=1.5;const o=new it(new So(1.8,1),gt(n));return o.position.y=3.9,o.scale.y=1.15,a.castShadow=!0,o.castShadow=!0,i.add(a,o),i.scale.setScalar(r),i.position.set(s,t-.1,e),Ai.push({x:s,z:e,r:.45*r}),i}const Hl=16,Vl=10,Wl=1.6,ql=[4,-63];class yg{constructor(){A(this,"mesh");A(this,"heading",Math.PI);A(this,"speed",0);A(this,"bobPhase",0);this.mesh=new de;const t=new it(new Si(1.1,2.6,4,10),gt(9067056));t.rotation.x=Math.PI/2,t.scale.set(1,1,.55),t.position.y=.3;const e=new it(new De(1.7,.15,3.6),gt(11567184));e.position.y=.75;const n=new it(new ni(1.55,.12,8,20),gt(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const i=new it(new Te(.09,.11,3.6),gt(6964002));i.position.set(0,2.4,.3);const r=new it(new Ci(1.9,2.4),gt(15788760));r.material.side=en,r.position.set(0,2.6,.28);const a=new it(new Te(.05,.05,2),gt(6964002));a.rotation.z=Math.PI/2,a.position.set(0,1.4,.28),this.mesh.add(t,e,n,i,r,a),ri(this.mesh),this.mesh.traverse(o=>{o instanceof it&&(o.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(ql[0],.3,ql[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(t,e){this.mesh.position.set(t,.3,e)}sail(t,e,n=1){let i=0;e.isDown("KeyW")?i=Hl*n:e.isDown("KeyS")&&(i=-5),this.speed+=Us.clamp(i-this.speed,-Vl*t,Vl*t);const r=.4+.6*Math.min(Math.abs(this.speed)/Hl,1);e.isDown("KeyA")&&(this.heading+=Wl*r*t),e.isDown("KeyD")&&(this.heading-=Wl*r*t);const a=new P(Math.sin(this.heading),0,Math.cos(this.heading)),o=this.mesh.position.clone().addScaledVector(a,this.speed*t);oh(o.x,o.z)?(this.mesh.position.x=o.x,this.mesh.position.z=o.z):this.speed=0,this.idle(t)}idle(t){this.bobPhase+=t*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let t=2.5;t<=7;t+=1.5)for(let e=0;e<8;e++){const n=e/8*Math.PI*2,i=this.mesh.position.x+Math.sin(n)*t,r=this.mesh.position.z+Math.cos(n)*t;if(ue(i,r)>.3)return new P(i,ue(i,r),r)}return null}}const Sg=100,bg=30,wg=10,Eg=3;class Tg{constructor(){A(this,"level",1);A(this,"exp",0);A(this,"points",0);A(this,"weaponLevel",0);A(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});A(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return Sg+this.attrs.hp*10+this.equip.hp}get maxMP(){return bg+this.attrs.spirit*5+this.equip.mp}get atk(){return wg+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(t){this.exp+=t;let e=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=Eg,e++;return e}allocate(t){return this.points<=0?!1:(this.points--,this.attrs[t]++,!0)}}const lh={small:10,medium:50,large:200};class Ag{constructor(){A(this,"coins",0);A(this,"potions",0);A(this,"crystals",{small:0,medium:0,large:0});A(this,"firstSeaGem",!1);A(this,"secondSeaGem",!1)}useCrystals(t,e){const n=Math.min(e,this.crystals[t]);return this.crystals[t]-=n,n*lh[t]}}const Rg=28,Xl=11,Yl=8,Cg=22,Pg=.25,Dg=.45,$l=25,Lg=22,Kl=.38,jl=.22,Ig=9,Ug=14,pi=.25,Zl=1.25,Jl=.35,Ng=.35,Fg=.4,Ql=10,Og=.15,zg=.26,Bg=.5,kg=3.4,Gg=Math.cos(75*Math.PI/180),Hg=4.5,he={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056};class Vg{constructor(){A(this,"mesh");A(this,"stats",new Tg);A(this,"hp");A(this,"mp");A(this,"stamina",100);A(this,"facing",0);A(this,"blocking",!1);A(this,"hurtT",0);A(this,"hasWindGem",!1);A(this,"windLevel",1);A(this,"hasFrostGem",!1);A(this,"sliding",!1);A(this,"divingZone",null);A(this,"airJumpsUsed",0);A(this,"gliding",!1);A(this,"chillT",0);A(this,"burnT",0);A(this,"burnDps",0);A(this,"burnTickAccum",0);A(this,"knockbackVel",new P);A(this,"velocityY",0);A(this,"grounded",!0);A(this,"attackCd",0);A(this,"swingT",0);A(this,"dodgeT",0);A(this,"invulnT",0);A(this,"lungeT",0);A(this,"spinT",0);A(this,"holdT",0);A(this,"chargeReadyFired",!1);A(this,"walkPhase",0);A(this,"idlePhase",0);A(this,"moveAmount",0);A(this,"renderYaw",0);A(this,"dodgeDir",new P);A(this,"body");A(this,"armL");A(this,"armR");A(this,"forearmL");A(this,"forearmR");A(this,"legL");A(this,"legR");A(this,"shinL");A(this,"shinR");A(this,"shield");A(this,"sword");A(this,"bladeMaterial");A(this,"shieldHomePos",new P(0,1.45,-.46));A(this,"shieldBlockPos",new P(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.mesh=new de,this.body=new de,this.mesh.add(this.body),this.legL=this.buildLeg(.17,"L"),this.legR=this.buildLeg(-.17,"R"),this.body.add(this.legL,this.legR);const t=gt(he.tunic),e=new it(new Te(.32,.44,.72,14),t);e.position.y=1.4;const n=new it(new Te(.44,.6,.5,14,1,!0),t);n.position.y=.74;const i=new it(new Te(.26,.34,.16,14),gt(he.collar));i.position.y=1.78;const r=new it(new Te(.46,.48,.13,14),gt(he.belt));r.position.y=.98;const a=new it(new De(.16,.12,.05),gt(he.gold));a.position.set(0,.98,.47);const o=new it(new De(.16,.18,.12),gt(he.glove));o.position.set(.34,.9,.18),this.body.add(e,n,i,r,a,o);const l=new it(new Te(.13,.15,.2,10),gt(he.skin));l.position.y=1.86,this.body.add(l);const c=new it(new Ue(.34,16,14),gt(he.skin));c.position.y=2.08;const d=new it(new Ue(.37,16,14),gt(he.hair));d.position.set(0,2.16,-.07),d.scale.set(1,.85,1);const h=new it(new fn(.32,.66,14),gt(he.tunicDark));h.position.set(0,2.54,-.12),h.rotation.x=-.5;const p=new it(new fn(.1,.4,10),gt(he.tunic));p.position.set(0,2.78,-.5),p.rotation.x=-1.5;const f=new it(new ni(.31,.05,8,16),gt(he.gold));f.position.set(0,2.28,-.04),f.rotation.x=Math.PI/2,this.body.add(c,d,h,p,f);const _=gt(he.skin);for(const S of[-1,1]){const U=new it(new fn(.09,.26,6),_);U.position.set(.32*S,2.06,-.02),U.rotation.z=S*-1.1,this.body.add(U);const R=new it(new Ue(.12,10,8),gt(he.hair));R.position.set(.28*S,1.96,-.04),R.scale.set(.7,1.1,.8),this.body.add(R);const g=new it(new Ue(.075,10,8),gt(16777215));g.position.set(.13*S,2.1,.29),g.scale.set(.8,1.1,.6);const D=new it(new Ue(.042,8,6),gt(he.eye));D.position.set(.13*S,2.09,.34);const y=new it(new De(.13,.035,.04),gt(he.brow));y.position.set(.13*S,2.21,.3),y.rotation.z=S*-.12,this.body.add(g,D,y)}const x=new it(new fn(.04,.1,6),_);x.position.set(0,2.02,.34),x.rotation.x=Math.PI/2,this.body.add(x),this.armL=this.buildArm(.46,"L"),this.armR=this.buildArm(-.46,"R"),this.armR.add(this.buildSword()),this.body.add(this.armL,this.armR);const m=new de,u=new it(new Te(.42,.46,.07,16),gt(he.shield));u.rotation.x=Math.PI/2;const w=new it(new ni(.44,.05,8,16),gt(he.shieldRim)),T=new it(new Ti(.12),gt(he.gold));T.position.z=-.06,T.scale.set(1,1.4,.4),m.add(u,w,T),m.position.copy(this.shieldHomePos),this.shield=m,this.body.add(m),ri(this.mesh),this.mesh.traverse(S=>{S instanceof it&&(S.castShadow=!0)}),this.respawn()}buildLeg(t,e){const n=new de,i=new it(new Te(.14,.12,.36,10),gt(he.legs));i.position.y=-.18;const r=new de;r.position.y=-.36;const a=new it(new Te(.12,.1,.32,10),gt(he.legs));a.position.y=-.16;const o=new it(new De(.21,.18,.36),gt(he.boots));o.position.set(0,-.36,.05);const l=new it(new Te(.15,.13,.12,10),gt(he.boots));return l.position.y=-.28,r.add(a,o,l),n.add(i,r),n.position.set(t,.72,0),e==="L"?this.shinL=r:this.shinR=r,n}buildArm(t,e){const n=new de,i=new it(new Ue(.15,12,10),gt(he.guard));i.position.y=.02,i.scale.set(1,.8,1);const r=new it(new Te(.1,.085,.34,10),gt(he.tunic));r.position.y=-.18;const a=new de;a.position.y=-.35;const o=new it(new Te(.085,.07,.26,10),gt(he.skin));o.position.y=-.13;const l=new it(new ni(.09,.035,8,12),gt(he.glove));l.position.y=-.02,l.rotation.x=Math.PI/2;const c=new it(new Ue(.1,10,8),gt(he.glove));return c.position.y=-.25,a.add(o,l,c),n.add(i,r,a),n.position.set(t,1.7,0),e==="L"?this.forearmL=a:this.forearmR=a,n}buildSword(){const t=new de;this.bladeMaterial=gt(he.blade,{emissive:6737151,emissiveIntensity:0});const e=new it(new De(.13,1,.035),this.bladeMaterial);e.position.y=.62;const n=new it(new fn(.075,.24,4),this.bladeMaterial);n.position.y=1.24,n.rotation.y=Math.PI/4;const i=new it(new De(.035,.95,.05),gt(he.shieldRim));i.position.y=.6;const r=new it(new De(.4,.09,.09),gt(he.guard));r.position.y=.1;const a=new it(new fn(.06,.16,6),gt(he.guard));a.position.set(.2,.16,0);const o=a.clone();o.position.x=-.2;const l=new it(new Te(.05,.05,.3,8),gt(he.grip));l.position.y=-.1;const c=new it(new Ue(.08,8,8),gt(he.gold));return c.position.y=-.28,t.add(e,n,i,r,a,o,l,c),t.position.y=-.58,t.rotation.x=Math.PI/2,this.sword=t,t}get invulnerable(){return this.invulnT>0}get attacking(){return this.swingT>0||this.spinT>0}get airborne(){return!this.grounded}get chargeRatio(){return Us.clamp((this.holdT-pi)/(Zl-pi),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,ue(0,-52),-52)}update(t,e,n){this.attackCd=Math.max(0,this.attackCd-t),this.invulnT=Math.max(0,this.invulnT-t),this.swingT=Math.max(0,this.swingT-t),this.dodgeT=Math.max(0,this.dodgeT-t),this.lungeT=Math.max(0,this.lungeT-t),this.spinT=Math.max(0,this.spinT-t),this.chillT=Math.max(0,this.chillT-t),this.hurtT=Math.max(0,this.hurtT-t);const i=this.stats.speedMultiplier,r=new P;let a=!1,o=!1;if(this.blocking=e.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)r.copy(this.dodgeDir).multiplyScalar(Cg*t);else{const x=new P(-Math.sin(n),0,-Math.cos(n)),m=new P(-x.z,0,x.x);if(e.isDown("KeyW")&&r.add(x),e.isDown("KeyS")&&r.sub(x),e.isDown("KeyD")&&r.add(m),e.isDown("KeyA")&&r.sub(m),r.lengthSq()>0){r.normalize(),this.facing=Math.atan2(r.x,r.z);const u=(this.blocking?Ng:this.holdT>pi?Fg:1)*(this.chillT>0?Bg:1);r.multiplyScalar(Yl*i*u*t)}if((e.wasPressed("ShiftLeft")||e.wasPressed("ShiftRight"))&&this.stamina>=$l){o=!0,this.holdT=0,this.chargeReadyFired=!1;const u=r.lengthSq()>0?r.clone().normalize():new P(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(u),this.dodgeT=Pg,this.invulnT=Dg,this.stamina-=$l}}if(this.lungeT>0&&r.addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),Ig*t),this.stamina=Math.min(100,this.stamina+Lg*t),this.moveAmount=r.length()/Math.max(t,1e-6)/Yl,this.sliding=!1,this.grounded){const x=this.mesh.position.x,m=this.mesh.position.z,u=.6,w=(ue(x+u,m)-ue(x-u,m))/(2*u),T=(ue(x,m+u)-ue(x,m-u))/(2*u),S=Math.hypot(w,T);S>.85&&(this.sliding=!0,r.x+=-w/S*6.5*t,r.z+=-T/S*6.5*t)}this.knockbackVel.lengthSq()>.01?(r.addScaledVector(this.knockbackVel,t),this.knockbackVel.multiplyScalar(Math.max(1-t*6,0))):this.knockbackVel.set(0,0,0);const l=this.mesh.position.clone().add(r),c=gg(l.x,l.z);l.x=c.x,l.z=c.z,(so(l.x,l.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(l.x-this.divingZone.x,l.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=l.x,this.mesh.position.z=l.z),e.wasPressed("Space")&&(this.grounded?(this.velocityY=Xl,this.grounded=!1,a=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=Xl*.9,a=!0)),this.velocityY-=Rg*t,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&e.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*t;const h=ue(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let p=!1,f=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,e.consumeLeftRelease();else if(e.leftDown&&(this.holdT+=t,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),e.consumeLeftRelease()){const x=this.holdT;this.holdT=0,this.chargeReadyFired=!1,x>pi?(f=this.chargeRatioFor(x),this.spinT=Jl,this.attackCd=Kl/i):this.attackCd<=0&&(this.attackCd=Kl/i,this.swingT=jl,this.lungeT=.12,p=!0)}return this.animate(t),{attacked:p,spin:f,chargeReady:_,jumped:a,dodged:o}}chargeRatioFor(t){return Us.clamp((t-pi)/(Zl-pi),0,1)}animate(t){let e=this.facing-this.renderYaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;this.renderYaw+=e*Math.min(Ug*t,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=t*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=t*11*Math.min(this.moveAmount,1.4));const i=this.dodgeT>0,r=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=i?1.4:r,this.legR.rotation.x=i?1.4:-r,this.shinL.rotation.x=i?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=i?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:i?-1.6:-r*.8,this.forearmL.rotation.x=this.blocking?-.7:i?-1.4:-.25-Math.max(0,-r)*.5;const a=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(a,Math.min(t*14,1));const o=this.holdT>pi;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/jl;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else o?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=r*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||o?0:i?-1.4:-.2-Math.max(0,r)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const l=this.chargeRatio;if(l>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new Ut(16777215),h)}else this.bladeMaterial.emissiveIntensity=l*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/Jl)*Math.PI*2:0;const c=n?Math.abs(Math.sin(this.walkPhase))*.07:0,d=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=c+d,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(t,e){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&e&&this.stamina>=Ql){const i=new P().subVectors(e,this.mesh.position).setY(0).normalize(),r=new P(Math.sin(this.facing),0,Math.cos(this.facing));if(i.dot(r)>zg){this.stamina-=Ql;const a=Math.max(1,Math.round((t-this.stats.def)*Og));return this.hp=Math.max(0,this.hp-a),this.invulnT=.25,{taken:a,blocked:!0}}}const n=Math.max(1,t-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,this.hurtT=.3,{taken:n,blocked:!1}}applyEnvironmentDamage(t){this.isDead||(this.hp=Math.max(0,this.hp-t))}chill(t){this.isDead||(this.chillT=Math.max(this.chillT,t))}applyBurn(t,e){this.isDead||(this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e))}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(t,e){if(this.isDead)return;const n=new P().subVectors(this.mesh.position,t).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(e)}blinkTo(t,e){this.mesh.position.set(t,ue(t,e),e),this.invulnT=Math.max(this.invulnT,.3)}}const Wg={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},qg=1.5,fa=.45,tc=12,Xg=3.2,Yg=20,$g=25,Kg=.45,jg=.35,Zg=14,Jg=1.7,ec=.8,nc=.3,Qg={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}};class Et{constructor(t,e,n){A(this,"mesh");A(this,"kind");A(this,"hp");A(this,"state","patrol");A(this,"remote",!1);A(this,"netIndex",-1);A(this,"pendingNetDamage",0);A(this,"pendingNetFreeze",0);A(this,"pendingNetStun",0);A(this,"pendingNetBurnSec",0);A(this,"pendingNetBurnDps",0);A(this,"remoteFlag",0);A(this,"remoteRingT",0);A(this,"netTarget",new P);A(this,"netYaw",0);A(this,"netDead",!1);A(this,"config");A(this,"home");A(this,"waypoint");A(this,"attackCd",0);A(this,"stateT",0);A(this,"respawnT",0);A(this,"flashT",0);A(this,"freezeT",0);A(this,"burnT",0);A(this,"burnDps",0);A(this,"burnTickAccum",0);A(this,"stunT",0);A(this,"specialEvent",null);A(this,"specialPhase","");A(this,"hopPhase",Math.random()*Math.PI*2);A(this,"lungeDir",new P);A(this,"lungeHitDone",!1);A(this,"knockback",new P);A(this,"baseColor");A(this,"body");A(this,"blob");A(this,"blobMaterial");A(this,"hpBar");A(this,"hpCanvas");A(this,"hpTexture");A(this,"special");A(this,"specialCd",0);A(this,"specialRing",null);A(this,"specialRingMat",null);A(this,"specialRingT",0);this.kind=t,this.config=Qg[t],this.hp=this.config.hp,this.home=new P(e,0,n),this.waypoint=this.home.clone(),this.baseColor=new Ut(this.config.color),this.special=Wg[t]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new de,this.body=new de,this.mesh.add(this.body);const i=this.config.scale>=1.8,r=new Ut(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=gt(this.config.color,{transparent:!0,opacity:.86}),this.blob=new it(new Ue(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const a=new it(new fn(.26,i?.6:.45,10),gt(this.config.color,{transparent:!0,opacity:.86}));if(a.position.y=i?1.42:1.35,a.rotation.z=.12,this.body.add(this.blob,a),i){const _=gt(r);for(const x of[-1,1]){const m=new it(new fn(.13,.5,8),_);m.position.set(.42*x,1.18,-.05),m.rotation.z=x*-.7,this.body.add(m)}}const o=gt(16777215),l=gt(2105392),c=gt(r),d=i?.2:.17;for(const _ of[-1,1]){const x=new it(new Ue(d,12,10),o);x.position.set(.3*_,.82,.6),x.scale.set(.85,1.05,.7);const m=new it(new Ue(d*.5,8,6),l);m.position.set(.3*_+.02*_,.8,.74);const u=new it(new De(.26,.07,.07),c);u.position.set(.3*_,1.04,.62),u.rotation.z=_*(i?.5:.15),this.body.add(x,m,u)}const h=new it(new Ue(i?.22:.12,12,8),gt(3151904));h.position.set(0,i?.5:.54,.66),h.scale.set(1.3,i?.8:.45,.5),this.body.add(h),ri(this.body),this.body.traverse(_=>{_ instanceof it&&(_.castShadow=!0)});const p=new it(new Ue(.42,12,10),gt(r,{transparent:!0,opacity:.55}));p.position.y=.58,p.raycast=()=>{},this.body.add(p);const f=new it(new Ue(.22,10,8),new on({color:16777215,transparent:!0,opacity:.4}));f.position.set(-.28,.95,.42),f.scale.set(1.2,.7,.6),f.raycast=()=>{},this.body.add(f),this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new Ju(this.hpCanvas),this.hpBar=new Zc(new Kc({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(e,ue(e,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}update(t,e,n){if(this.state==="dead")return this.respawnT-=t,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=t;const l=1-Math.max(this.stateT,0)/nc,c=l<.4?1+l*.9:Math.max(1.36*(1-(l-.4)/.6),.01);return this.body.scale.setScalar(c),this.stateT<=0&&(this.state="dead",this.respawnT=$g,this.mesh.visible=!1),0}if(this.attackCd=Math.max(0,this.attackCd-t),this.specialCd=Math.max(0,this.specialCd-t),this.flashT=Math.max(0,this.flashT-t),this.freezeT>0)return this.freezeT-=t,this.blobMaterial.color.lerpColors(this.baseColor,new Ut(12577535),.75),0;if(this.stunT>0){this.stunT-=t;const l=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16773248),l),0}const i=this.mesh.position,r=i.distanceTo(e),a=i.distanceTo(this.home);let o=0;switch(this.knockback.lengthSq()>.01&&(i.addScaledVector(this.knockback,t),this.knockback.multiplyScalar(Math.max(1-t*8,0))),this.state){case"windup":{this.stateT-=t,this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25,this.stateT<=0&&(this.lungeDir.subVectors(e,i).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=jg);break}case"lunge":{this.stateT-=t,i.addScaledVector(this.lungeDir,Zg*t),this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&r<Jg&&(this.lungeHitDone=!0,o=this.config.dmg),this.stateT<=0&&(this.state="recover",this.stateT=ec);break}case"recover":{this.stateT-=t,this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const l=this.special;if(this.stateT-=t,this.specialPhase==="telegraph"){const c=1-Math.max(this.stateT,0)/l.telegraph;if(this.body.scale.setScalar(1+c*.25),this.updateRing(c,!0),this.stateT<=0){const d=!n&&r<=l.radius,h=Math.round(this.config.dmg*l.dmgMul);let p=0;d&&l.effect==="drain"&&(p=Math.min(this.config.hp-this.hp,Math.round(h*qg)),p>0&&(this.hp+=p,this.drawHpBar())),this.specialEvent={name:l.name,sfx:l.sfx,color:l.color,dmg:h,knock:l.knock,effect:l.effect,radius:l.radius,hitPlayer:d,healed:p},this.specialPhase="blast",this.specialRingT=0,this.stateT=fa,this.body.scale.setScalar(1)}}else this.specialRingT+=t,this.updateRing(this.specialRingT/fa,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=ec);break}default:{if(n)this.state="patrol";else if(a>Yg)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&r<=tc&&r<=this.special.radius+2){this.startSpecial();break}else if(r<=Xg&&this.attackCd<=0){this.state="windup",this.stateT=Kg,this.attackCd=1.8;break}else r<=tc?this.state="chase":this.state="patrol";const l=this.state==="chase"?e:this.waypoint;this.state==="patrol"&&i.distanceTo(this.waypoint)<1&&this.pickWaypoint();const c=new P().subVectors(l,i);c.y=0;const d=this.state==="chase"?this.config.speed:this.config.speed*.5;c.lengthSq()>.01&&(c.normalize(),i.addScaledVector(c,d*t),this.mesh.rotation.y=Math.atan2(c.x,c.z)),this.hopPhase+=t*(this.state==="chase"?9:5);const h=Math.abs(Math.sin(this.hopPhase));this.body.position.y=h*.35,this.body.scale.y=.8+h*.3,this.body.scale.x=this.body.scale.z=1.1-h*.15;break}}return this.flashT>0?this.blobMaterial.color.setHex(16777215):this.state==="windup"?this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16733508),.55):this.blobMaterial.color.copy(this.baseColor),this.burnT>0&&this.flashT<=0&&this.blobMaterial.color.lerp(new Ut(16738860),.5),i.y=ue(i.x,i.z),o}freeze(t){if(!this.isDead){if(this.remote){this.pendingNetFreeze=Math.max(this.pendingNetFreeze,t);return}this.freezeT=Math.max(this.freezeT,t)}}burn(t,e){if(!this.isDead){if(this.remote){this.pendingNetBurnSec=Math.max(this.pendingNetBurnSec,t),this.pendingNetBurnDps=Math.max(this.pendingNetBurnDps,e);return}this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e)}}stun(t){if(!this.isDead){if(this.remote){this.pendingNetStun=Math.max(this.pendingNetStun,t);return}this.stunT=Math.max(this.stunT,t)}}get statusFlag(){return this.specialPhase==="telegraph"?1:this.specialPhase==="blast"?2:this.freezeT>0?3:this.stunT>0?4:this.burnT>0?5:0}get specialSkill(){var t;return((t=this.special)==null?void 0:t.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const t=new on({color:this.special.color,transparent:!0,opacity:.4,side:en,depthWrite:!1}),e=new it(new Dr(.62,1,48),t);e.rotation.x=-Math.PI/2,e.position.y=.12,e.raycast=()=>{},this.mesh.add(e),this.specialRing=e,this.specialRingMat=t}updateRing(t,e){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(e)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(t*Math.PI*6));else{const i=(.15+.95*Math.min(t,1))*n;this.specialRing.scale.set(i,i,i),this.specialRingMat.opacity=.7*(1-Math.min(t,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(t,e){return this.isDead?!1:this.remote?(this.pendingNetDamage+=t,this.flashT=.12,!1):(this.hp=Math.max(0,this.hp-t),this.flashT=.12,e&&this.knockback.copy(e).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=nc,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),!0):!1)}refreshHpBar(){this.drawHpBar()}get remoteStatusFlag(){return this.remoteFlag}updateRemote(t){if(!this.mesh.visible)return;const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.netTarget,e);let n=this.netYaw-this.mesh.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.mesh.rotation.y+=n*e,this.flashT=Math.max(0,this.flashT-t),this.hopPhase+=t*6,this.body.position.y=Math.abs(Math.sin(this.hopPhase))*.12,this.flashT>0?this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16777215),.7):this.blobMaterial.color.copy(this.baseColor),this.renderRemoteStatus(t)}renderRemoteStatus(t){const e=this.remoteFlag;if(e===1?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT,!0)):e===2?(this.ensureRing(),this.remoteRingT+=t,this.updateRing(this.remoteRingT/fa,!1)):this.hideRing(),!(this.flashT>0))if(e===3)this.blobMaterial.color.lerpColors(this.baseColor,new Ut(12577535),.75);else if(e===4){const n=.4+.4*Math.abs(Math.sin(this.hopPhase*5));this.blobMaterial.color.lerpColors(this.baseColor,new Ut(16773248),n)}else e===5&&this.blobMaterial.color.lerp(new Ut(16738860),.5)}applyNetSnapshot(t,e,n,i,r,a,o){const l=!this.netDead;return this.netDead=r,this.hp=a,this.state=r?"dead":"patrol",o!==this.remoteFlag&&(this.remoteFlag=o,this.remoteRingT=0),r?(this.remoteFlag=0,this.hideRing(),this.mesh.visible&&(this.mesh.visible=!1,this.hpBar.visible=!1),l):(this.mesh.visible||(this.mesh.visible=!0,this.hpBar.visible=!0,this.mesh.position.set(t,e,n)),this.netTarget.set(t,e,n),this.netYaw=i,this.drawHpBar(),!1)}revive(){this.hp=this.config.hp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,ue(this.home.x,this.home.z),this.home.z),this.drawHpBar()}pickWaypoint(){const t=Math.random()*Math.PI*2,e=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(t)*e,0,this.home.z+Math.sin(t)*e)}drawHpBar(){const t=this.hpCanvas.getContext("2d");t&&(t.clearRect(0,0,96,18),t.fillStyle="rgba(0,0,0,0.65)",t.fillRect(0,0,96,18),t.fillStyle="#e74c3c",t.fillRect(1,1,94*(this.hp/this.config.hp),16),t.font="bold 12px sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=3,t.strokeStyle="rgba(0,0,0,0.8)",t.strokeText(`${this.hp}/${this.config.hp}`,48,10),t.fillStyle="#fff",t.fillText(`${this.hp}/${this.config.hp}`,48,10),this.hpTexture.needsUpdate=!0)}}const t_=3.5;class Nn{constructor(t,e,n,i,r,a="talk"){A(this,"mesh");A(this,"idlePhase",Math.random()*Math.PI*2);A(this,"body");this.name=t,this.linesProvider=r,this.role=a,this.mesh=new de,this.body=new de,this.mesh.add(this.body);const o=new it(new Te(.28,.52,1.5,12),gt(i));o.position.y=.78;const l=new it(new Ue(.32,14,12),gt(15911328));l.position.y=1.85;const c=new it(new fn(.62,.3,14),gt(14202976));c.position.y=2.12,this.body.add(o,l,c),ri(this.body),this.body.traverse(d=>{d instanceof it&&(d.castShadow=!0)}),this.mesh.position.set(e,ue(e,n),n)}getLines(){return this.linesProvider()}update(t,e){this.idlePhase+=t*2,this.body.position.y=Math.sin(this.idlePhase)*.025;const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z,r=Math.hypot(n,i);return r<6&&(this.mesh.rotation.y=Math.atan2(n,i)),r<t_}}const e_=6,n_=.9,i_=9,s_={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class Lt{constructor(t,e,n){A(this,"mesh");A(this,"kind");A(this,"bobPhase",Math.random()*Math.PI*2);A(this,"baseY");if(this.kind=t,t==="coin")this.mesh=new it(new Te(.22,.22,.06,12),gt(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(t==="gem-flame"||t==="gem-wind"||t==="gem-earth"||t==="gem-frost"||t==="gem-tide"||t==="gem-void"||t==="gem-lava"||t==="gem-aqua"||t==="gem-life"){const o={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[t];this.mesh=new it(new Ti(.75),gt(o,{emissive:o,emissiveIntensity:.9}))}else if(t==="fruit-thunder"||t==="fruit-gravity"){const o={"fruit-thunder":16773216,"fruit-gravity":11559167}[t];this.mesh=new it(new Ue(.6,16,14),gt(o,{emissive:o,emissiveIntensity:.9}))}else{const a=s_[t];this.mesh=new it(new Ti(a.size),gt(a.color,{emissive:a.color,emissiveIntensity:.5}))}const i=e+(Math.random()-.5)*1.6,r=n+(Math.random()-.5)*1.6;this.baseY=ue(i,r)+.7,this.mesh.position.set(i,this.baseY,r)}update(t,e){this.bobPhase+=t*3,this.mesh.rotation.y+=t*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z,r=Math.hypot(n,i);if(r<e_&&r>.01){const a=Math.min(i_*t/r,1);this.mesh.position.x+=n*a,this.mesh.position.z+=i*a}return r<n_}}const r_=1.8;class Es{constructor(t,e,n,i={}){A(this,"mesh");A(this,"damage");A(this,"freezes");A(this,"burns");A(this,"leech");A(this,"life");A(this,"lifetime");A(this,"speed");A(this,"direction");A(this,"material");A(this,"hitEnemies",new Set);this.damage=n,this.freezes=i.freezes??!1,this.burns=i.burns??!1,this.leech=i.leech??0,this.lifetime=i.lifetime??.9,this.speed=i.speed??22,this.life=this.lifetime,this.direction=new P(Math.sin(e),0,Math.cos(e)),this.material=new on({color:i.color??8382719,transparent:!0,opacity:.85,side:en});const r=Math.PI*.95;this.mesh=new it(new ni(1.2,.16,8,20,r),this.material),this.mesh.position.copy(t),this.mesh.position.y=ue(t.x,t.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,e,-Math.PI/2-r/2)}get expired(){return this.life<=0}update(t,e){if(this.life-=t,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*t),this.mesh.position.y=ue(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9),this.material.opacity=.85*(1-n*.7);const i=[];for(const r of e){if(r.isDead||this.hitEnemies.has(r))continue;const a=r.mesh.position.x-this.mesh.position.x,o=r.mesh.position.z-this.mesh.position.z;Math.hypot(a,o)<r_*this.mesh.scale.x&&(this.hitEnemies.add(r),i.push(r))}return i}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const ic=16,sc=18,a_=16,o_=9,l_=.7,rc=8,ac=.3,To=2,c_=["thunder","gravity"],oc=[500,1100],lc=3;function ch(s){return 1+.5*(s-1)}function h_(s,t=1){return Math.round((20+s*2)*ch(t))}function u_(s=1){return 2+s}function d_(s=1){return .3+.3*s}function f_(s,t=1){return Math.round((10+s)*ch(t))}function p_(s=1){return 5+s}function m_(s=1){return 1+.5*s}class g_{constructor(){A(this,"thunderOwned",!1);A(this,"gravityOwned",!1);A(this,"levels",{thunder:1,gravity:1});A(this,"equipped",[])}ownedOf(t){return t==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<To}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const __=6;class x_{constructor(t,e,n,i,r){A(this,"mesh");A(this,"damage");A(this,"center");A(this,"radius");A(this,"life");A(this,"tickT",0);A(this,"spin",0);A(this,"ring");A(this,"core");A(this,"ringMaterial");A(this,"coreMaterial");this.center=new P(t,ue(t,e)+.4,e),this.radius=n,this.life=i,this.damage=r,this.mesh=new de,this.ringMaterial=new on({color:10119912,transparent:!0,opacity:.5,side:en}),this.ring=new it(new ni(n,.4,8,32),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.coreMaterial=new on({color:14201087,transparent:!0,opacity:.8}),this.core=new it(new Ue(.8,12,10),this.coreMaterial),this.mesh.add(this.ring,this.core),this.mesh.position.copy(this.center)}get expired(){return this.life<=0}update(t,e){this.life-=t,this.spin+=t*6,this.mesh.rotation.y=this.spin;const n=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(n);const i=Math.min(this.life,1);this.ringMaterial.opacity=.5*i,this.coreMaterial.opacity=.8*i;for(const r of e){if(r.isDead)continue;const a=this.center.x-r.mesh.position.x,o=this.center.z-r.mesh.position.z,l=Math.hypot(a,o);if(l>this.radius||l<.6)continue;const c=Math.min(__*t,l-.5);r.mesh.position.x+=a/l*c,r.mesh.position.z+=o/l*c}if(this.tickT+=t,this.tickT>=ac){this.tickT-=ac;const r=[];for(const a of e){if(a.isDead)continue;Math.hypot(this.center.x-a.mesh.position.x,this.center.z-a.mesh.position.z)<=this.radius&&r.push(a)}return r}return[]}dispose(){this.ring.geometry.dispose(),this.core.geometry.dispose(),this.ringMaterial.dispose(),this.coreMaterial.dispose()}}class v_{constructor(t){A(this,"group");A(this,"life");A(this,"lifetime",.28);A(this,"material");this.life=this.lifetime,this.group=new de,this.material=new Mo({color:12577023,transparent:!0,opacity:.95});for(let e=0;e<t.length-1;e++){const n=new ke().setFromPoints(M_(t[e],t[e+1]));this.group.add(new no(n,this.material))}}get expired(){return this.life<=0}update(t){this.life-=t,this.material.opacity=.95*Math.max(this.life/this.lifetime,0)}dispose(){this.group.traverse(t=>{t instanceof no&&t.geometry.dispose()}),this.material.dispose()}}function M_(s,t){const e=[],i=new P().subVectors(t,s),r=new P(-i.z,0,i.x).normalize();for(let a=0;a<=6;a++){const o=new P().lerpVectors(s,t,a/6);a>0&&a<6&&(o.addScaledVector(r,(Math.random()-.5)*1.2),o.y+=(Math.random()-.5)*.8),e.push(o)}return e}function y_(s){const t=`${location.protocol==="https:"?"wss:":"ws:"}//${location.hostname}:8787`,e=new URL(t);return e.searchParams.set("room",s),e.toString()}class S_{constructor(t){A(this,"ws",null);A(this,"cb");A(this,"localId",null);A(this,"room",null);A(this,"hostId",null);this.cb=t}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}get isHost(){return this.connected&&this.hostId!==null&&this.hostId===this.localId}connect(t){this.room=t;let e;try{e=new WebSocket(y_(t))}catch(i){console.warn("[net] 無法建立連線,維持單機:",i);return}this.ws=e,e.addEventListener("open",()=>{var i,r;(r=(i=this.cb).onStatus)==null||r.call(i,!0)}),e.addEventListener("message",i=>{var a,o,l,c,d,h,p,f,_,x,m,u,w,T,S,U;let r;try{r=JSON.parse(i.data)}catch{return}switch(r.t){case"welcome":this.localId=r.id,this.room=r.room,this.hostId=r.host;for(const R of r.others)this.cb.onState(R.id,R.state);(o=(a=this.cb).onHostChange)==null||o.call(a,this.isHost);break;case"state":this.cb.onState(r.id,r.state);break;case"join":break;case"leave":this.cb.onLeave(r.id);break;case"host":this.hostId=r.id,(c=(l=this.cb).onHostChange)==null||c.call(l,this.isHost);break;case"enemies":(h=(d=this.cb).onEnemies)==null||h.call(d,r.e);break;case"hit":(f=(p=this.cb).onHit)==null||f.call(p,r.i,r.dmg,r.id);break;case"kill":(x=(_=this.cb).onKill)==null||x.call(_,r.i,r.by);break;case"pdmg":r.to===this.localId&&((u=(m=this.cb).onPlayerDamage)==null||u.call(m,r.dmg,r.sx,r.sy,r.sz,r.knock,r.eff));break;case"cc":(T=(w=this.cb).onCc)==null||T.call(w,r.i,r.kind,r.sec,r.dps);break;case"chat":(U=(S=this.cb).onChat)==null||U.call(S,r.id,r.text);break}});const n=()=>{var i,r,a,o;this.ws===e&&(this.ws=null,this.localId=null,this.hostId=null,(r=(i=this.cb).onStatus)==null||r.call(i,!1),(o=(a=this.cb).onHostChange)==null||o.call(a,!1))};e.addEventListener("close",n),e.addEventListener("error",n)}sendState(t){this.connected&&this.ws.send(JSON.stringify({t:"state",state:t}))}sendEnemies(t){this.connected&&this.ws.send(JSON.stringify({t:"enemies",e:t}))}sendHit(t,e){this.connected&&this.ws.send(JSON.stringify({t:"hit",i:t,dmg:e}))}sendKill(t,e){this.connected&&this.ws.send(JSON.stringify({t:"kill",i:t,by:e}))}sendPlayerDamage(t,e,n,i,r,a,o){this.connected&&this.ws.send(JSON.stringify({t:"pdmg",to:t,dmg:e,sx:n,sy:i,sz:r,knock:a,eff:o}))}sendCc(t,e,n,i){this.connected&&this.ws.send(JSON.stringify({t:"cc",i:t,kind:e,sec:n,dps:i}))}sendChat(t){this.connected&&this.ws.send(JSON.stringify({t:"chat",text:t}))}}const b_=1,w_=2,E_=4,T_=8,cc=.3,A_=.3,hc=[4891647,16747068,12086271,16765500,3985568,16739229];function hh(s){let t=0;for(let e=0;e<s.length;e++)t=t*31+s.charCodeAt(e)|0;return hc[Math.abs(t)%hc.length]}class R_{constructor(t,e){A(this,"mesh");A(this,"legL");A(this,"legR");A(this,"armL");A(this,"armR");A(this,"bodyMat");A(this,"baseColor");A(this,"targetPos",new P);A(this,"targetFacing",0);A(this,"moving",!1);A(this,"walkPhase",0);A(this,"renderYaw",0);A(this,"act",0);A(this,"swingT",0);A(this,"hurtT",0);A(this,"dead",!1);A(this,"deathLean",0);const n=hh(t);this.baseColor=new Ut(n),this.mesh=new de;const i=gt(n);this.bodyMat=i;const r=gt(15910810),a=gt(13226716),o=new it(new Te(.3,.42,.8,12),i);o.position.y=1.35;const l=new it(new Ue(.26,14,12),r);l.position.y=1.95,this.armL=new de,this.armL.position.set(.42,1.62,0);const c=new it(new Si(.1,.5,4,8),i);c.position.y=-.28;const d=new it(new De(.5,.5,.08),a);d.position.set(.04,-.4,.18),this.armL.add(c,d),this.armR=new de,this.armR.position.set(-.42,1.62,0);const h=new it(new Si(.1,.5,4,8),i);h.position.y=-.28;const p=new it(new De(.07,.7,.07),a);p.position.y=-.85;const f=new it(new De(.28,.07,.1),gt(9071162));f.position.y=-.5,this.armR.add(h,p,f),this.legL=new de,this.legL.position.set(.16,.9,0);const _=new it(new Si(.12,.7,4,8),i);_.position.y=-.4,this.legL.add(_),this.legR=new de,this.legR.position.set(-.16,.9,0);const x=new it(new Si(.12,.7,4,8),i);x.position.y=-.4,this.legR.add(x),this.mesh.add(o,l,this.armL,this.armR,this.legL,this.legR),this.mesh.traverse(m=>{m instanceof it&&(m.castShadow=!0)}),ri(this.mesh),this.targetPos.set(e.x,e.y,e.z),this.targetFacing=e.facing,this.renderYaw=e.facing,this.moving=e.moving,this.act=e.act??0,this.mesh.position.copy(this.targetPos),this.mesh.rotation.y=this.renderYaw}setState(t){this.targetPos.set(t.x,t.y,t.z),this.targetFacing=t.facing,this.moving=t.moving;const e=t.act??0;e&b_&&(this.swingT=cc),e&T_&&(this.hurtT=A_),this.act=e,this.dead=t.dead??!1}update(t){const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.targetPos,e);let n=this.targetFacing-this.renderYaw;if(n=Math.atan2(Math.sin(n),Math.cos(n)),this.renderYaw+=n*e,this.mesh.rotation.y=this.renderYaw,this.deathLean+=((this.dead?1:0)-this.deathLean)*Math.min(1,e*1.2),this.mesh.rotation.x=this.deathLean*1.45,this.dead){this.legL.rotation.x+=(0-this.legL.rotation.x)*e,this.legR.rotation.x+=(0-this.legR.rotation.x)*e,this.armL.rotation.x+=(0-this.armL.rotation.x)*e,this.armR.rotation.x+=(0-this.armR.rotation.x)*e,this.bodyMat.color.lerpColors(this.baseColor,new Ut(5593696),.6);return}this.swingT=Math.max(0,this.swingT-t),this.hurtT=Math.max(0,this.hurtT-t);const i=(this.act&E_)!==0,r=(this.act&w_)!==0;if(i)this.legL.rotation.x+=(.7-this.legL.rotation.x)*e,this.legR.rotation.x+=(.5-this.legR.rotation.x)*e;else if(this.moving){this.walkPhase+=t*9;const l=Math.sin(this.walkPhase)*.5;this.legL.rotation.x=l,this.legR.rotation.x=-l}else this.legL.rotation.x*=1-e,this.legR.rotation.x*=1-e;let a;this.swingT>0?a=-2.4+(1-this.swingT/cc)*2.9:i?a=-.5:this.moving?a=Math.sin(this.walkPhase)*.35:a=0,this.armR.rotation.x+=(a-this.armR.rotation.x)*Math.min(1,e*2.5);const o=r?-1.4:this.moving&&!i?-Math.sin(this.walkPhase)*.35:i?-.4:0;this.armL.rotation.x+=(o-this.armL.rotation.x)*Math.min(1,e*2.5),this.hurtT>0?this.bodyMat.color.lerpColors(this.baseColor,new Ut(16731469),.6):this.bodyMat.color.copy(this.baseColor)}get actBits(){return this.act}get swinging(){return this.swingT>0}dispose(){var t;(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh.traverse(e=>{e instanceof it&&e.geometry.dispose()})}}const uc=10,dc=15,C_=6,fc=12,P_=4,pa=8,D_=8,pc=14,L_=3,mc=16,I_=7,gc=14,Ao=4,U_=["flame","wind","earth","frost","tide","void","lava","aqua","life"],_c=[400,900],xc=3;function us(s){return 1+.5*(s-1)}function N_(s,t=1){return Math.round((18+s*2)*us(t)*1.4)}function F_(s,t=1){return Math.round((25+s*2)*us(t))}function O_(s=1){return C_+(s-1)}function z_(s,t=1){return Math.round((20+s*2)*us(t))}function B_(s=1){return 1.5+s}function k_(s=1){return D_+3*(s-1)}function G_(s,t=1){return Math.round((22+s*2)*us(t)*1.4)}function H_(s=1){return 8+4*(s-1)}function V_(s,t=1){return Math.round((20+s*2)*us(t)*1.35)}function W_(s=1){return 2+.7*(s-1)}function q_(s=1){return I_+(s-1)}function X_(s,t=1){return Math.round((18+s*2)*us(t)*1.5)}function Y_(s=1){return .4+.1*(s-1)}class $_{constructor(){A(this,"flameOwned",!1);A(this,"windOwned",!1);A(this,"earthOwned",!1);A(this,"frostOwned",!1);A(this,"tideOwned",!1);A(this,"voidOwned",!1);A(this,"lavaOwned",!1);A(this,"aquaOwned",!1);A(this,"lifeOwned",!1);A(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});A(this,"equipped",[])}ownedOf(t){switch(t){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<Ao}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const ro=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function ao(s){return ro.find(t=>t.id===s)}class K_{constructor(){A(this,"owned",[]);A(this,"equipped",{})}has(t){return this.owned.includes(t)}equip(t){const e=ao(t);if(!(!e||!this.has(t)))if(e.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=t}else this.equipped[e.slot]=t}unequip(t){delete this.equipped[t]}slotOf(t){for(const[e,n]of Object.entries(this.equipped))if(n===t)return e;return null}totalBonus(){const t={atk:0,def:0,hp:0,mp:0,agi:0};for(const e of Object.values(this.equipped)){const n=ao(e);n&&(t.atk+=n.bonus.atk??0,t.def+=n.bonus.def??0,t.hp+=n.bonus.hp??0,t.mp+=n.bonus.mp??0,t.agi+=n.bonus.agi??0)}return t}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(t){this.owned=[...t.owned],this.equipped={...t.equipped}}}const _i=5,bi={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class j_{constructor(){A(this,"states",{});A(this,"slimeKills",0);A(this,"jellyBaseline",0);A(this,"huntKills",{});A(this,"huntBaselines",{})}get(t){return this.states[t]??null}accept(t){if(this.states[t]||(this.states[t]="active"),t==="jelly"&&(this.jellyBaseline=this.slimeKills),t in bi){const e=t;this.huntBaselines[e]=this.huntKills[bi[e].kind]??0}}complete(t){this.states[t]="done"}addKill(t){this.huntKills[t]=(this.huntKills[t]??0)+1}killsOf(t){return this.huntKills[t]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,_i)}huntProgress(t){const e=(this.huntKills[bi[t].kind]??0)-(this.huntBaselines[t]??0);return Math.min(e,bi[t].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(t){this.states={...t.states},this.slimeKills=t.kills,this.jellyBaseline=t.base,this.huntKills={...t.huntKills??{}},this.huntBaselines={...t.huntBases??{}}}}const uh="archipelago-save-v1";function Z_(s){try{localStorage.setItem(uh,JSON.stringify(s))}catch{}}function J_(){try{const s=localStorage.getItem(uh);if(!s)return null;const t=JSON.parse(s);return t.v!==1?null:t}catch{return null}}const Q_=`
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
`;class tx{constructor(t){A(this,"hpFill");A(this,"mpFill");A(this,"stFill");A(this,"xpFill");A(this,"levelText");A(this,"coinText");A(this,"crystalText");A(this,"toast");A(this,"deathOverlay");A(this,"toastTimer",null);this.onRespawn=t;const e=document.createElement("style");e.textContent=Q_,document.head.appendChild(e);const n=document.createElement("div");n.id="hud",n.innerHTML=`
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
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast")}update(t,e){const n=t.stats;this.hpFill.style.width=`${t.hp/n.maxHP*100}%`,this.mpFill.style.width=`${t.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(t.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(t.mp)} / ${n.maxMP}`,this.stFill.style.width=`${t.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${e.coins}`;const i=e.crystals.small+e.crystals.medium+e.crystals.large;this.crystalText.textContent=`💎 ${i}`,this.byId("hud-potion").textContent=String(e.potions)}setGems(t){const e=[];t.isEquipped("flame")&&e.push("🔥 焰心石｜E 火焰斬(10 靈力)"),t.isEquipped("wind")&&e.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔"),t.isEquipped("earth")&&e.push("🪨 地殼石｜C 地震波(15 靈力)"),t.isEquipped("frost")&&e.push("❄️ 霜語晶｜V 冰箭(12 靈力)/海上行走耗靈力"),t.isEquipped("tide")&&e.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)"),t.isEquipped("void")&&e.push("🌀 虛空石｜X 瞬移(8 靈力)"),t.isEquipped("lava")&&e.push("🌋 溶岩石｜G 熔岩噴發(14 靈力,灼燒)"),t.isEquipped("aqua")&&e.push("💧 碧波石｜B 碧波震盪(16 靈力,凍結周圍)"),t.isEquipped("life")&&e.push("🌿 翠生石｜H 生命汲取(14 靈力,吸血)");const n=this.byId("hud-gem");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setFruits(t){const e=[];t.isEquipped("thunder")&&e.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),t.isEquipped("gravity")&&e.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setTalkPrompt(t,e="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",t),t&&(n.textContent=e)}setEnv(t){const e=this.byId("hud-env");e.textContent!==t&&(e.textContent=t)}setOnline(t,e,n){const i=this.byId("hud-net");if(!t){i.textContent="";return}const r=n&&n!=="lobby"?` · 房間 ${n}`:"";i.textContent=`🌐 連線中${r} · 同行 ${e} 人`}setQuests(t){this.byId("hud-quests").classList.toggle("show",t.length>0),this.byId("hud-quest-list").innerHTML=t.map(e=>`<div>${e}</div>`).join("")}showToast(t){this.toast.textContent=t,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(t,e=[]){if(t){const n=this.byId("death-options");n.innerHTML="";const i=[{id:"beach",label:"在曙光嶼海灘重生"},...e];for(const r of i){const a=document.createElement("button");a.textContent=r.label,a.dataset.respawn=r.id,r.id!=="beach"&&a.classList.add("shrine"),a.addEventListener("click",()=>this.onRespawn(r.id)),n.appendChild(a)}}this.deathOverlay.classList.toggle("show",t)}byId(t){const e=document.getElementById(t);if(!e)throw new Error(`HUD 元素遺失: ${t}`);return e}}const ex=`
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
`,vc={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},Mc={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"};class nx{constructor(t,e,n,i,r,a,o,l,c,d,h,p){A(this,"root");A(this,"visible",!1);A(this,"teleportOpen",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=i,this.equipment=r,this.onUseCrystal=a,this.onAllocate=o,this.onEquipChange=l,this.onUseSeaGem=c,this.getShrineTargets=d,this.onTeleportShrine=h,this.onLoadoutChange=p;const f=document.createElement("style");f.textContent=ex,document.head.appendChild(f),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var p;if(!this.visible)return;const t=this.stats,e=Object.keys(vc).map(f=>{const _=this.inventory.crystals[f];return`<div class="item">
          <span>${vc[f]} ×${_} <span class="muted">(${lh[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${_===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${_===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=t.points>0?Object.keys(Mc).map(f=>`<div class="item">
                <span>${Mc[f]} <span class="muted">目前 ${t.attrs[f]}</span></span>
                <button data-alloc="${f}">+1</button>
              </div>`).join(""):'<div class="muted">升級後可在此分配能力點數</div>',i=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],r=!this.gems.hasFreeSlot(),a=i.map(([f,_,x])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.gems.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-gemtoggle="${f}" ${!u&&r?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),o=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],l=!this.fruits.hasFreeSlot(),c=o.map(([f,_,x])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.fruits.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-fruittoggle="${f}" ${!u&&l?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),d=[];this.inventory.firstSeaGem&&d.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&d.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const h=this.equipment.owned.map(f=>{const _=ao(f);if(!_)return"";const x=this.equipment.slotOf(f);return`<div class="item">
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
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${Ao})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石,只有出戰中的技能與被動才生效</div>
        <div class="gems">${a}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${To})</h3><div class="gems">${c}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${n}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.use;this.onUseCrystal(_,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(p=this.root.querySelector("button[data-tp-open]"))==null||p.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.gemtoggle;this.gems.isEquipped(_)?this.gems.unequip(_):this.gems.equip(_),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.fruittoggle;this.fruits.isEquipped(_)?this.fruits.unequip(_):this.fruits.equip(_),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const t=this.getShrineTargets();return`${t.length>0?t.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const ix=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class sx{constructor(){A(this,"root");A(this,"nameEl");A(this,"textEl");A(this,"lines",[]);A(this,"index",0);A(this,"visible",!1);const t=document.createElement("style");t.textContent=ix,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(t,e){e.length!==0&&(this.lines=e,this.index=0,this.visible=!0,this.nameEl.textContent=t,this.textEl.textContent=e[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const rx=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,yc=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class ax{constructor(t,e,n){A(this,"root");A(this,"visible",!1);this.inventory=t,this.equipment=e,this.onBuy=n;const i=document.createElement("style");i.textContent=rx,document.head.appendChild(i),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=yc.map(n=>{const i=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${i?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),e=ro.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${t}
      <h3 style="margin-top:14px;">裝備</h3>
      ${e||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const i=yc.find(r=>r.id===n.dataset.buy);!i||this.inventory.coins<i.price||(this.inventory.coins-=i.price,i.id==="potion"?this.inventory.potions++:this.inventory.crystals[i.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const i=ro.find(r=>r.id===n.dataset.buyequip);!i||this.equipment.has(i.id)||this.inventory.coins<i.price||(this.inventory.coins-=i.price,this.equipment.owned.push(i.id),this.onBuy(),this.render())})})}}const ox=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Sc=[100,250,500,800,1200];class lx{constructor(t,e,n,i,r,a,o){A(this,"root");A(this,"visible",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=i,this.onUpgrade=r,this.onGemUpgrade=a,this.onFruitUpgrade=o;const l=document.createElement("style");l.textContent=ox,document.head.appendChild(l),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=this.stats.weaponLevel,e=t>=Sc.length,n=e?0:Sc[t],r=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.gems.levels[c],p=h>=xc,f=p?0:_c[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-gemup="${c}" ${p||this.inventory.coins<f?"disabled":""}>
            ${p?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join(""),o=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.fruits.levels[c],p=h>=lc,f=p?0:oc[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
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
    `;const l=this.root.querySelector("#forge-btn");l==null||l.addEventListener("click",()=>{e||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.gemup,h=this.gems.levels[d];if(h>=xc)return;const p=_c[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.gems.levels[d]++,this.onGemUpgrade(d),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.fruitup,h=this.fruits.levels[d];if(h>=lc)return;const p=oc[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.fruits.levels[d]++,this.onFruitUpgrade(d),this.render())})})}}const dh="archipelago-settings-v1",ma={volume:1,music:!0,deathDrop:!0};function bc(){var e;const s=new URLSearchParams(location.search),t=(e=s.get("room"))==null?void 0:e.trim();return t||(s.has("mp")?"lobby":null)}function wc(s){return`${location.origin}${location.pathname}?room=${encodeURIComponent(s)}`}function cx(){return Math.random().toString(36).slice(2,8)}function hx(){try{const s=localStorage.getItem(dh);return s?{...ma,...JSON.parse(s)}:{...ma}}catch{return{...ma}}}const ux=`
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
`;class dx{constructor(t){A(this,"settings");A(this,"root");A(this,"visible",!1);this.audio=t,this.settings=hx();const e=document.createElement("style");e.textContent=ux,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(dh,JSON.stringify(this.settings))}catch{}}render(){var t,e,n,i;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,this.wireMultiplayer(),(t=this.root.querySelector("#set-vol"))==null||t.addEventListener("input",r=>{this.settings.volume=Number(r.target.value)/100,this.apply(),this.persist()}),(e=this.root.querySelector("#set-music"))==null||e.addEventListener("change",r=>{this.settings.music=r.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",r=>{this.settings.deathDrop=r.target.checked,this.persist()}),(i=this.root.querySelector("#set-reset"))==null||i.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}multiplayerSection(){const t=bc();return t?`
      <div class="row"><span>多人房間</span><span class="mp-room">${t==="lobby"?"預設房間 lobby":t}</span></div>
      <button class="mp-btn" id="set-mp-copy">複製邀請連結</button>
      <button class="mp-btn ghost" id="set-mp-leave">離開房間(回單機)</button>
      <div class="muted" id="set-mp-hint">把連結傳給家人朋友,開同一條連結就會在同一間</div>
    `:`
        <div class="row"><span>多人房間</span><span>單機遊玩</span></div>
        <button class="mp-btn" id="set-mp-create">建立多人房間(產生邀請連結)</button>
        <div class="muted" id="set-mp-hint">建立後把網址列連結傳給家人朋友,即可進同一座群島</div>
      `}wireMultiplayer(){var t,e,n;(t=this.root.querySelector("#set-mp-create"))==null||t.addEventListener("click",()=>{location.href=wc(cx())}),(e=this.root.querySelector("#set-mp-leave"))==null||e.addEventListener("click",()=>{location.href=location.pathname}),(n=this.root.querySelector("#set-mp-copy"))==null||n.addEventListener("click",async()=>{const i=bc();if(!i)return;const r=wc(i),a=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(r),a&&(a.textContent="已複製邀請連結!")}catch{a&&(a.textContent=r)}})}}const fx=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,px=.9;class mx{constructor(){A(this,"totalSpawned",0);A(this,"items",[]);const t=document.createElement("style");t.textContent=fx,document.head.appendChild(t)}spawn(t,e,n){const i=document.createElement("div");i.className="float-dmg",i.textContent=e,i.style.color=n,document.body.appendChild(i),this.items.push({el:i,pos:t.clone(),life:px}),this.totalSpawned++}update(t,e){this.items=this.items.filter(n=>{if(n.life-=t,n.life<=0)return n.el.remove(),!1;n.pos.y+=t*1.6;const i=n.pos.clone().project(e);return i.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(i.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-i.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class gx{constructor(){A(this,"totalSpawned",0);A(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(t){var n;const e=document.createElement("div");for(e.textContent=t,this.root.appendChild(e),this.totalSpawned++,setTimeout(()=>e.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const _x=8,xx=9e3,Ec=200;function vx(s){return"#"+s.toString(16).padStart(6,"0")}class Mx{constructor(t){A(this,"log");A(this,"input");A(this,"isTyping",!1);this.onSend=t;const e=document.createElement("style");e.textContent=`
      #chat { position: fixed; left: 12px; bottom: 92px; width: 340px; z-index: 50;
        font: 13px/1.4 system-ui, sans-serif; pointer-events: none; }
      #chat-log { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
      #chat-log .line { background: rgba(0,0,0,0.42); color: #f4f4f4; padding: 2px 8px;
        border-radius: 8px; width: fit-content; max-width: 100%; word-break: break-word;
        transition: opacity 0.6s; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
      #chat-log .line .who { font-weight: 700; margin-right: 6px; }
      #chat-input { display: none; width: 100%; box-sizing: border-box; pointer-events: auto;
        background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.35); border-radius: 8px;
        color: #fff; padding: 6px 10px; font: 14px system-ui, sans-serif; outline: none; }
      #chat-input.show { display: block; }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="chat",n.innerHTML=`<div id="chat-log"></div><input id="chat-input" maxlength="${Ec}" placeholder="輸入訊息…Enter 送出、Esc 取消" />`,document.body.appendChild(n),this.log=n.querySelector("#chat-log"),this.input=n.querySelector("#chat-input"),this.input.addEventListener("keydown",i=>{if(i.stopPropagation(),i.key==="Enter"){const r=this.input.value.trim().slice(0,Ec);r&&this.onSend(r),this.stopTyping()}else i.key==="Escape"&&this.stopTyping()})}startTyping(){this.isTyping=!0,this.input.classList.add("show"),this.input.value="",this.input.focus()}stopTyping(){this.isTyping=!1,this.input.classList.remove("show"),this.input.value="",this.input.blur()}push(t,e,n){var o;const i=document.createElement("div");i.className="line";const r=document.createElement("span");r.className="who",r.style.color=vx(n),r.textContent=t;const a=document.createElement("span");for(a.textContent=e,i.append(r,a),this.log.appendChild(i);this.log.childElementCount>_x;)(o=this.log.firstElementChild)==null||o.remove();setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),600)},xx)}}const yx=4;class Sx{constructor(t,e){A(this,"mesh");A(this,"respawnT",0);A(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new de;const n=new it(new De(1.2,.7,.85),gt(9067056));n.position.y=.35;const i=new it(new Te(.45,.45,1.2,10,1,!1,0,Math.PI),gt(10119738));i.rotation.z=Math.PI/2,i.position.y=.72;const r=new it(new De(1.26,.16,.9),gt(15777856));r.position.y=.45;const a=new it(new Ti(.18),new on({color:16769152}));a.position.y=1.25,this.mesh.add(n,i,r,a),ri(this.mesh),this.place(t,e)}get active(){return this.mesh.visible}place(t,e){this.mesh.position.set(t,0,e),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(t,e,n){if(!this.active||(this.bobPhase+=t*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=t*.2,!n))return!1;const i=e.x-this.mesh.position.x,r=e.z-this.mesh.position.z;return Math.hypot(i,r)<yx}}const bx=3.5,mr=2,wx=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class Ex{constructor(t){A(this,"mesh");A(this,"active",!1);A(this,"crystalGroup");A(this,"crystalMat");A(this,"ring");A(this,"phase",Math.random()*Math.PI*2);this.def=t,this.mesh=new de;const e=new de,n=new it(new Te(1.1,1.4,.5,8),gt(8028820));n.position.y=.25;const i=new it(new Te(.35,.5,2.2,8),gt(9081508));i.position.y=1.6,e.add(n,i),this.crystalMat=gt(6978186);const r=new it(new Ti(.45),this.crystalMat);this.crystalGroup=new de,this.crystalGroup.add(r),this.crystalGroup.position.y=3.2,e.add(this.crystalGroup),ri(e),e.traverse(a=>{a instanceof it&&(a.castShadow=!0)}),this.mesh.add(e),this.ring=new it(new Dr(1.5,1.9,28),new on({color:8382696,transparent:!0,opacity:.55,side:en})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(t.x,ue(t.x,t.z),t.z)}setActive(t){this.active=t,this.ring.visible=t,t?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(t,e){this.phase+=t,this.crystalGroup.rotation.y+=t*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=e.x-this.mesh.position.x,i=e.z-this.mesh.position.z;return Math.hypot(n,i)<bx}}const Tx=.3;function Ax(){var At,kt,Ht;const s=document.getElementById("app");if(!s)throw new Error("找不到 #app 容器");const t=new X0({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Ac,s.appendChild(t.domElement);const e=new Xu;e.background=new Ut(8900331),e.fog=new xo(8900331,150,650);const n=new dn(60,window.innerWidth/window.innerHeight,.1,1e3),i=new K0,r=()=>i.unlock();window.addEventListener("pointerdown",r,{once:!0}),window.addEventListener("keydown",r,{once:!0});const a=new dx(i),o=new rd(16774368,2.6);o.position.set(60,100,40),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-80,o.shadow.camera.right=80,o.shadow.camera.top=80,o.shadow.camera.bottom=-80,o.shadow.camera.far=250,o.shadow.bias=-8e-4;const l=new nd(12574719,15258784,.7),c=new ad(16777215,.35);e.add(o,o.target,l,c);const d=new lg(e,o,l,c),h=new J0(e),p=new mx,f=new gx;let _=0;const x=ng();x.position.set(75,0,55),e.add(x,_g());const m=new yg;e.add(m.mesh);let u=!1;const w=new it(new Pr(1.5,20),new on({color:13626111,transparent:!0,opacity:.75}));w.rotation.x=-Math.PI/2,w.visible=!1,e.add(w);function T(){for(let E=0;E<100;E++){const O=-210+Math.random()*440,F=-240+Math.random()*580;if(oh(O,F)&&!ns.some(at=>Math.hypot(O-at.x,F-at.z)<at.r+12)&&!(Math.hypot(O-hn.x,F-hn.z)<hn.r+8))return{x:O,z:F}}return{x:-100,z:-40}}const S=[];for(let E=0;E<6;E++){const O=T(),F=new Sx(O.x,O.z);S.push(F),e.add(F.mesh)}function U(E,O){let F=ns[0],at=1/0;for(const Mt of ns){const be=Math.hypot(E-Mt.x,O-Mt.z);be<at&&(at=be,F=Mt)}const St=Math.max(Math.hypot(E-F.x,O-F.z),.001),wt=(F.r-8)/St;return{x:F.x+(E-F.x)*wt,z:F.z+(O-F.z)*wt}}const R=new Y0(t.domElement),g=new Vg;e.add(g.mesh);const D=new Map,y=new S_({onState(E,O){let F=D.get(E);F?F.setState(O):(F=new R_(E,O),D.set(E,F),e.add(F.mesh),K.setOnline(y.connected,D.size,y.room))},onLeave(E){const O=D.get(E);O&&(O.dispose(),D.delete(E),K.setOnline(y.connected,D.size,y.room))},onStatus(E){K.setOnline(E,D.size,y.room)},onEnemies(E){X(E)},onHit(E,O,F){Y(E,O,F)},onKill(E,O){const F=ft[E];O===y.localId&&F&&z(F)},onPlayerDamage(E,O,F,at,St,wt){vt(E,O,F,at,St,wt)},onCc(E,O,F,at){B(E,O,F,at)},onChat(E,O){L.push(M(E),O,hh(E))}}),M=E=>`玩家·${E.slice(-2)}`,L=new Mx(E=>{y.sendChat(E),L.push("你",E,10216298)}),q=new URLSearchParams(location.search),V=(At=q.get("room"))==null?void 0:At.trim(),Q=V||(q.has("mp")?"lobby":null);Q&&y.connect(Q);let st=0;const J=g.mesh.position.clone();let ct=0;const $=E=>Math.round(E*100)/100,xt=7,tt=new Ag,ft=[new Et("slime",14,-39),new Et("slime",-14,-40),new Et("slime",6,-32),new Et("slime",22,-18),new Et("slime",-24,-12),new Et("slime",16,6),new Et("slime",-14,20),new Et("slime",36,4),new Et("slime",-32,16),new Et("slime",4,40),new Et("slime",26,30),new Et("slime",-18,-30),new Et("elite",0,14),new Et("elite",-30,-22),new Et("vine",148,75),new Et("vine",162,88),new Et("vine",133,96),new Et("vine",167,116),new Et("vine",140,127),new Et("vine",155,142),new Et("windGuardian",150,110),new Et("ember",-148,88),new Et("ember",-135,100),new Et("ember",-165,105),new Et("ember",-138,132),new Et("ember",-162,138),new Et("earthGuardian",-150,112),new Et("frost",78,-162),new Et("frost",42,-155),new Et("frost",60,-198),new Et("frost",85,-180),new Et("frost",38,-185),new Et("frostGuardian",60,-170),new Et("deep",-48,222),new Et("deep",-30,238),new Et("deep",-44,242),new Et("voidGuardian",-40,230),new Et("voidLord",0,300),new Et("sand",2180,130),new Et("sand",2222,134),new Et("sand",2166,158),new Et("sand",2234,166),new Et("sand",2196,190),new Et("magmaGuardian",2200,144),new Et("reef",1770,-138),new Et("reef",1812,-134),new Et("reef",1756,-110),new Et("reef",1824,-102),new Et("reef",1786,-82),new Et("coralGuardian",1790,-124),new Et("spore",2100,-208),new Et("spore",2142,-204),new Et("spore",2086,-180),new Et("spore",2154,-172),new Et("spore",2116,-152),new Et("lifeGuardian",2120,-194),new Et("marsh",1722,135),new Et("marsh",1758,138),new Et("marsh",1712,160),new Et("marsh",1768,162),new Et("marsh",1740,188),new Et("brine",1962,228),new Et("brine",1998,230),new Et("brine",1952,252),new Et("brine",2008,252),new Et("brine",1980,278),new Et("solar",2242,-62),new Et("solar",2278,-60),new Et("solar",2232,-38),new Et("solar",2288,-38),new Et("solar",2260,-14)];for(const E of ft)e.add(E.mesh);ft.forEach((E,O)=>E.netIndex=O);const ee=ft[12],Me=ft.find(E=>E.kind==="windGuardian"),et=ft.find(E=>E.kind==="earthGuardian"),pt=ft.find(E=>E.kind==="frostGuardian"),Nt=ft.find(E=>E.kind==="voidGuardian"),bt=ft.find(E=>E.kind==="voidLord"),Ft=ft.find(E=>E.kind==="magmaGuardian"),oe=ft.find(E=>E.kind==="coralGuardian"),Gt=ft.find(E=>E.kind==="lifeGuardian");let fe=[],_e=[],se=[],I=[],Ae=null,ae=!1,ye=!1,It=!1,re=!1,Ot=!1,Yt=!1,Ce=!1,C=!1,v=!1,H=0,j=!1,rt=!1,Z=!1;const k=new $_,ot=new g_,Rt=new K_,Pt=new sx,G=new j_,Tt=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],Bt=25,zt=()=>[k.flameOwned,k.windOwned,k.earthOwned,k.frostOwned,k.tideOwned,k.voidOwned].filter(Boolean).length,mt=()=>Tt.filter(E=>G.killsOf(E)>0).length,Wt=()=>zt()===6&&mt()===Tt.length&&g.stats.level>=Bt,N=E=>E==="small"?"小型":E==="medium"?"中型":"大型",dt=E=>new Nn(E.name,E.x,E.z,E.color,()=>{const O=G.get(E.quest),F=bi[E.quest].target;return O==="done"?E.doneLines:O==="active"&&G.huntProgress(E.quest)>=F?(G.complete(E.quest),tt.coins+=E.coins,tt.crystals[E.crystalSize]+=E.crystalCount,i.sfx("gem"),K.showToast(`任務完成:${E.title}!獲得 ${E.coins} 貝拉幣 + ${N(E.crystalSize)}結晶×${E.crystalCount}`),Xt(),[`你把${E.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${E.coins} 貝拉幣和${N(E.crystalSize)}經驗結晶 ×${E.crystalCount}。`]):O===null?(G.accept(E.quest),K.showToast(`接受任務:${E.title}(0/${F})`),E.intro):[`還剩 ${F-G.huntProgress(E.quest)} 隻${E.enemyLabel},加油!`,"打完回來找我領賞!"]}),ht=[new Nn("村長阿海",2.5,-49.5,9067146,()=>{const E=G.get("gem"),O=G.get("wind"),F=G.get("earth"),at=G.get("frost"),St=G.get("tide"),wt=G.get("depth"),Mt=G.get("final");return Mt==="done"?tt.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:Mt==="active"&&rt?(G.complete("final"),tt.coins+=1e3,i.sfx("victory"),K.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Xt(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):Mt==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:wt==="done"?(G.accept("final"),K.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):wt==="active"&&k.voidOwned?(G.complete("depth"),tt.coins+=500,tt.crystals.large+=3,i.sfx("gem"),K.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Xt(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","按 X 可以短距離瞬移,連虛空的力量都為你所用了。"]):wt==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:St==="done"?(G.accept("depth"),K.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):St==="active"&&k.tideOwned?(G.complete("tide"),tt.coins+=300,i.sfx("gem"),K.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Xt(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):St==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:at==="done"?(G.accept("tide"),K.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):at==="active"&&k.frostOwned?(G.complete("frost"),tt.coins+=400,tt.crystals.large+=2,i.sfx("gem"),K.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Xt(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","按 V 射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):at==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:F==="done"?(G.accept("frost"),K.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):F==="active"&&k.earthOwned?(G.complete("earth"),tt.coins+=300,tt.crystals.large+=2,i.sfx("gem"),K.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Xt(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","按 C 可以放出地震波,震飛身邊所有敵人!"]):F==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:O==="done"?(G.accept("earth"),K.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):O==="active"&&k.windOwned?(G.complete("wind"),tt.coins+=200,tt.crystals.large+=1,i.sfx("gem"),K.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Xt(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):O==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:E==="done"?(G.accept("wind"),K.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):E==="active"&&k.flameOwned?(G.complete("gem"),tt.coins+=100,tt.crystals.medium+=1,i.sfx("gem"),K.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Xt(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","按 E 就能施放火焰斬,去試試吧!"]):E===null?(G.accept("gem"),K.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]}),new Nn("漁夫小蝦",-4,-48,4881050,()=>{const E=G.get("jelly");return E==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:E==="active"&&G.jellyProgress()>=_i?(G.complete("jelly"),tt.coins+=50,tt.crystals.small+=2,i.sfx("gem"),K.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Xt(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):E===null?(G.accept("jelly"),K.showToast(`接受任務:果凍清理(0/${_i})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${_i} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${_i-G.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]}),new Nn("商人圓圓",7,-46,13142090,()=>[],"shop"),new Nn("鍛造大師爐婆",-150,78,9062954,()=>[],"forge"),dt({name:"獵人小藤",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),dt({name:"礦工岩叔",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),dt({name:"嚮導阿凜",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),dt({name:"觀星者星嵐",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new Nn("領航者汐音",230,-95,4889272,()=>tt.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:Wt()?(G.get("sea2")===null&&G.accept("sea2"),G.complete("sea2"),tt.firstSeaGem=!0,tt.secondSeaGem=!0,i.sfx("gem"),f.push("🔱 獲得重要道具【第一海寶石】"),f.push("🌐 獲得重要道具【第二海寶石】"),K.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Xt(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):(G.get("sea2")===null&&(G.accept("sea2"),K.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${zt()}/6)`,`・擊敗所有種類的敵人(${mt()}/${Tt.length} 種)`,`・修煉至 Lv.${Bt}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"])),new Nn("鎮長波叔",On.x,On.z-36,13148234,()=>{const E=G.get("lava");return E==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:E==="active"&&k.lavaOwned?(G.complete("lava"),tt.coins+=600,tt.crystals.large+=2,i.sfx("gem"),K.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Xt(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):E==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:(G.accept("lava"),K.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])}),new Nn("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const E=G.get("aqua");return E==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:E==="active"&&k.aquaOwned?(G.complete("aqua"),tt.coins+=700,tt.crystals.large+=2,i.sfx("gem"),K.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Xt(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 B 就能震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):E==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:(G.accept("aqua"),K.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])}),new Nn("靈脈守林人葉羅",2098,-162,3846240,()=>{const E=G.get("life");return E==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:E==="active"&&k.lifeOwned?(G.complete("life"),tt.coins+=700,tt.crystals.large+=2,i.sfx("gem"),K.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Xt(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):E==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:(G.accept("life"),K.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])}),dt({name:"拓荒者沙吉",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),dt({name:"潛水夫阿蚌",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),dt({name:"採集者藤吉",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),dt({name:"沼澤嚮導苔翁",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),dt({name:"鹽工鹵伯",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),dt({name:"拾光人焰娃",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const E of ht)e.add(E.mesh);const yt=wx.map(E=>new Ex(E));for(const E of yt)e.add(E.mesh);const lt=[],nt=E=>{const O=yt.find(F=>F.def.id===E);return O?Zi(O.def.x):1},Dt=E=>{const O=Zi(E.def.x),F=lt.filter(St=>nt(St)===O);let at=`(本海 ${Math.min(F.length+1,mr)}/${mr})`;if(F.length>=mr){const St=F[0];lt.splice(lt.indexOf(St),1);const wt=yt.find(Mt=>Mt.def.id===St);wt&&(wt.setActive(!1),at=`(已替換本海【${wt.def.island}】)`)}lt.push(E.def.id),E.setActive(!0),i.sfx("shrine"),h.burst(E.mesh.position.clone().setY(E.mesh.position.y+3),8382696,14,6),K.showToast(`重生點已設置:【${E.def.island}】${at}`),Xt()},K=new tx(E=>{const O=yt.find(at=>at.active&&at.def.id===E),F=O?`【${O.def.island}】重生點`:"海灘";if(a.settings.deathDrop){for(const at of Object.keys(tt.crystals))tt.crystals[at]-=Math.floor(tt.crystals[at]*Tx);K.showToast(`你在${F}醒來,遺失了部分未使用的結晶……`)}else K.showToast(`你在${F}醒來……(死亡掉落已關閉)`);if(g.respawn(),O){const{x:at,z:St}=O.def;g.mesh.position.set(at,ue(at,St+2),St+2),m.place(O.def.boat.x,O.def.boat.z)}else m.resetToDock();u=!1,j&&ai(!1),K.setDead(!1)}),pe=()=>{const E=[],O=Zi(g.mesh.position.x);for(const F of lt){if(nt(F)!==O)continue;const at=yt.find(St=>St.def.id===F);at&&E.push({id:F,label:`在【${at.def.island}】重生點重生`})}K.setDead(!0,E)},me=()=>{g.stats.equip=Rt.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},$e=()=>{g.hasWindGem=k.isEquipped("wind"),g.hasFrostGem=k.isEquipped("frost"),g.windLevel=k.levels.wind},Ne=E=>{k.hasFreeSlot()&&k.equip(E),$e()},ds=E=>{ot.hasFreeSlot()&&ot.equip(E)},zs=()=>{$e(),K.setGems(k),K.setFruits(ot),i.sfx("ui"),Xt()},Ve=new nx(tt,g.stats,k,ot,Rt,(E,O)=>{const F=tt.useCrystals(E,O);if(F<=0)return;const at=g.stats.addExp(F);at>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,i.sfx("levelup"),K.showToast(`升級!Lv.${g.stats.level},獲得 ${at*3} 點能力點數`),Xt()):(i.sfx("crystal"),K.showToast(`注入 ${F} EXP`))},E=>{g.stats.allocate(E),Xt()},()=>{me(),i.sfx("ui"),Xt()},E=>Bs(E),()=>lt.filter(E=>nt(E)===Zi(g.mesh.position.x)).map(E=>{var O;return{id:E,island:((O=yt.find(F=>F.def.id===E))==null?void 0:O.def.island)??E}}),E=>fs(E),zs);function fs(E){const O=yt.find(St=>St.active&&St.def.id===E);if(!O||g.isDead)return;j&&ai(!1),u=!1;const{x:F,z:at}=O.def;g.mesh.position.set(F,ue(F,at+2),at+2),m.place(O.def.boat.x,O.def.boat.z),i.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),K.showToast(`傳送至【${O.def.island}】重生點`),Ve.isOpen&&Ve.toggle(),Xt()}function Bs(E){if(!g.isDead){if(j&&ai(!1),u=!1,E===2){const O=On.x,F=On.z-44;g.mesh.position.set(O,ue(O,F),F),m.place(On.x+2,On.z-58),K.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,ue(2.5,-52),-52),m.resetToDock(),K.showToast("海流湧動……回到第一海【曙光嶼】");i.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),Ve.isOpen&&Ve.toggle(),Xt()}}const Vn=new ax(tt,Rt,()=>{i.sfx("coin"),Xt()}),bn=new lx(tt,g.stats,k,ot,()=>{i.sfx("anvil"),K.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Xt()},E=>{i.sfx("anvil"),E==="wind"&&(g.windLevel=k.levels.wind),K.showToast(`寶石升階成功!(Lv.${k.levels[E]})`),Xt()},E=>{i.sfx("anvil"),K.showToast(`果實升階成功!(Lv.${ot.levels[E]})`),Xt()}),ks=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:tt.coins,crystals:{...tt.crystals},flameOwned:k.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:tt.potions,quests:G.serialize(),windOwned:k.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:u,earthOwned:k.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:k.frostOwned,tideOwned:k.tideOwned,voidOwned:k.voidOwned,voidDefeated:rt,gemLevels:{...k.levels},equipment:Rt.serialize(),shrines:[...lt],seaGems:{first:tt.firstSeaGem,second:tt.secondSeaGem},lavaOwned:k.lavaOwned,aquaOwned:k.aquaOwned,lifeOwned:k.lifeOwned,fruits:{thunderOwned:ot.thunderOwned,gravityOwned:ot.gravityOwned,levels:{...ot.levels}},gemsEquipped:[...k.equipped],fruitsEquipped:[...ot.equipped]}),Xt=()=>Z_(ks());setInterval(Xt,12e3);const qt=J_();if(qt){g.stats.level=qt.level,g.stats.exp=qt.exp,g.stats.points=qt.points,Object.assign(g.stats.attrs,qt.attrs),tt.coins=qt.coins,Object.assign(tt.crystals,qt.crystals),tt.potions=qt.potions??0,qt.quests&&G.restore(qt.quests),k.flameOwned=qt.flameOwned,k.windOwned=qt.windOwned??!1,k.earthOwned=qt.earthOwned??!1,k.frostOwned=qt.frostOwned??!1,k.tideOwned=qt.tideOwned??!1,k.voidOwned=qt.voidOwned??!1,k.lavaOwned=qt.lavaOwned??!1,k.aquaOwned=qt.aquaOwned??!1,k.lifeOwned=qt.lifeOwned??!1,qt.fruits&&(ot.thunderOwned=qt.fruits.thunderOwned,ot.gravityOwned=qt.fruits.gravityOwned,Object.assign(ot.levels,qt.fruits.levels)),k.equipped=(qt.gemsEquipped??U_).filter(E=>k.ownedOf(E)).slice(0,Ao),ot.equipped=(qt.fruitsEquipped??c_).filter(E=>ot.ownedOf(E)).slice(0,To),rt=qt.voidDefeated??!1,tt.firstSeaGem=((kt=qt.seaGems)==null?void 0:kt.first)??!1,tt.secondSeaGem=((Ht=qt.seaGems)==null?void 0:Ht.second)??!1,g.stats.weaponLevel=qt.weaponLevel??0,qt.gemLevels&&Object.assign(k.levels,qt.gemLevels),qt.equipment&&Rt.restore(qt.equipment);for(const E of qt.shrines??[]){const O=yt.find(St=>St.def.id===E);if(!O||O.active)continue;const F=Zi(O.def.x);lt.filter(St=>nt(St)===F).length<mr&&(O.setActive(!0),lt.push(E))}me(),$e(),K.setGems(k),K.setFruits(ot),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set(qt.pos[0],ue(qt.pos[0],qt.pos[1]),qt.pos[1]),qt.boatPos&&m.place(qt.boatPos[0],qt.boatPos[1]),qt.sailing&&(u=!0),K.showToast("讀取存檔完成")}if(!k.tideOwned){const E=new Lt("gem-tide",Bl.x,Bl.z);e.add(E.mesh),fe.push(E)}const ps=()=>{if(ae||ot.gravityOwned)return;ae=!0;const E=new Lt("fruit-gravity",Gl.x,Gl.z);e.add(E.mesh),fe.push(E)};rt&&!ot.gravityOwned&&ps();const ms=document.createElement("div");ms.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(ms);const Rn=document.createElement("div");Rn.id="ending",Rn.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",Rn.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const Pi=document.createElement("button");Pi.textContent="回去找村長阿海領賞",Pi.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",Pi.addEventListener("click",()=>{Rn.style.display="none"}),Rn.appendChild(Pi),document.body.appendChild(Rn);const ai=E=>{j=E,g.divingZone=E?hn:null,ms.style.display=E?"block":"none";const O=e.fog;E?(O.color.setHex(1723002),O.near=20,O.far=110,e.background=new Ut(1723002)):(O.color.setHex(8900331),O.near=150,O.far=650,e.background=new Ut(8900331))};let Di=Math.PI,oi=.35,b=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});function z(E){const{x:O,z:F}=E.mesh.position,at=[];E===ee&&!k.flameOwned&&!ye&&(ye=!0,at.push(new Lt("gem-flame",O,F))),E===Me&&!k.windOwned&&!It&&(It=!0,at.push(new Lt("gem-wind",O,F))),E===et&&!k.earthOwned&&!re&&(re=!0,at.push(new Lt("gem-earth",O,F))),E===pt&&!k.frostOwned&&!Ot&&(Ot=!0,at.push(new Lt("gem-frost",O,F))),E===Nt&&!k.voidOwned&&!Yt&&(Yt=!0,at.push(new Lt("gem-void",O,F))),E===Ft&&!k.lavaOwned&&!Ce&&(Ce=!0,at.push(new Lt("gem-lava",O,F))),E===oe&&!k.aquaOwned&&!C&&(C=!0,at.push(new Lt("gem-aqua",O,F))),E===Gt&&!k.lifeOwned&&!v&&(v=!0,at.push(new Lt("gem-life",O,F))),E.kind==="slime"&&G.slimeKills++,G.addKill(E.kind),E.kind==="voidLord"||E.kind==="voidGuardian"?at.push(new Lt("large",O,F),new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="deep"?at.push(new Lt("medium",O,F),new Lt("medium",O,F),new Lt("coin",O,F)):E.kind==="frostGuardian"?at.push(new Lt("large",O,F),new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="frost"?at.push(new Lt("medium",O,F),new Lt("coin",O,F)):E.kind==="earthGuardian"?at.push(new Lt("large",O,F),new Lt("medium",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="ember"?at.push(new Lt("medium",O,F),new Lt("coin",O,F)):E.kind==="magmaGuardian"?at.push(new Lt("large",O,F),new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="sand"?at.push(new Lt("medium",O,F),new Lt("coin",O,F)):E.kind==="coralGuardian"?at.push(new Lt("large",O,F),new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="lifeGuardian"?at.push(new Lt("large",O,F),new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="reef"||E.kind==="spore"?at.push(new Lt("medium",O,F),new Lt("coin",O,F)):E.kind==="windGuardian"?at.push(new Lt("large",O,F),new Lt("coin",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="elite"?at.push(new Lt("medium",O,F),new Lt("small",O,F),new Lt("coin",O,F),new Lt("coin",O,F)):E.kind==="vine"?at.push(new Lt("small",O,F),new Lt("small",O,F),new Lt("coin",O,F)):(at.push(new Lt("small",O,F),new Lt("coin",O,F)),Math.random()<.35&&at.push(new Lt("small",O,F)));for(const St of at)e.add(St.mesh),fe.push(St)}function X(E){if(!y.isHost)for(let O=0;O<ft.length;O++){const F=O*xt;if(F+xt-1>=E.length)break;const at=ft[O];if(at.applyNetSnapshot(E[F],E[F+1],E[F+2],E[F+3],E[F+4]===1,E[F+5],E[F+6])){const wt=at.mesh.position;i.sfx("enemyDie"),h.burst(wt.clone().setY(wt.y+1),10217627,16)}}}function Y(E,O,F){if(!y.isHost)return;const at=ft[E];if(!at||at.isDead)return;const St=at.takeDamage(O),wt=at.mesh.position.clone().setY(at.mesh.position.y+2.4);p.spawn(wt,`-${Math.round(O)}`,"#ffd27a"),St&&(i.sfx("enemyDie"),h.burst(at.mesh.position.clone().setY(at.mesh.position.y+1),10217627,16),y.sendKill(E,F))}function B(E,O,F,at){if(!y.isHost)return;const St=ft[E];!St||St.isDead||(O==="freeze"?St.freeze(F):O==="burn"?St.burn(F,at):St.stun(F))}function ut(E){let O=g.mesh.position,F=null,at=g.isDead?1/0:E.distanceToSquared(g.mesh.position);for(const[St,wt]of D){if(wt.dead)continue;const Mt=E.distanceToSquared(wt.mesh.position);Mt<at&&(at=Mt,O=wt.mesh.position,F=St)}return{pos:O,remoteId:F}}function vt(E,O,F,at,St,wt){if(g.isDead)return;const Mt=new P(O,F,at),be=g.takeDamage(E,Mt),ne=g.mesh.position.clone().setY(g.mesh.position.y+2.6);be.blocked?(p.spawn(ne,`格擋 -${be.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):be.taken>0&&(p.spawn(ne,`-${be.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10),St>0&&g.shove(Mt,St),wt==="chill"?g.chill(3):wt==="burn"&&g.applyBurn(4,Math.max(2,Math.round(E*.15)))),g.isDead&&pe()}const Ct=new ld;t.setAnimationLoop(()=>{const E=Math.min(Ct.getDelta(),.05),O=Ct.getElapsedTime(),F=h.frozen?0:E,at=y.connected&&!y.isHost;for(const W of ft)W.remote=at;const St=d.update(E,g.mesh.position,j);Zi(g.mesh.position.x)===2?x.position.set(On.x,0,On.z):x.position.set(75,0,55),ig(x,O,St.waveScale),i.setRain(St.raining&&!j),St.thunder&&(i.sfx("thunder"),h.shake(.15,.3)),i.setMusicMode(j?"night":u?"sail":St.isNight?"night":"day"),K.setEnv(`${St.isNight?"🌙":"☀️"}${St.weather==="clear"?"":St.weather==="rain"?" 🌧️":" ⛈️"}`),!L.isTyping&&y.connected&&R.wasPressed("Enter")&&L.startTyping(),R.suspended=L.isTyping,L.isTyping&&R.clearKeys(),R.wasPressed("Tab")&&(i.sfx("ui"),Ve.toggle()),R.wasPressed("Escape")&&(i.sfx("ui"),a.toggle());let wt=null;for(const W of ht)W.update(E,g.mesh.position)&&(wt=W);let Mt=null;for(const W of yt)W.update(E,g.mesh.position)&&(Mt=W);const be=!u&&!j&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,ne=u?m.findLandingSpot():null,Qe=u&&k.isEquipped("tide")&&Math.hypot(m.mesh.position.x-hn.x,m.mesh.position.z-hn.z)<hn.r;if(j?K.setTalkPrompt(!0,"按 F 浮上水面"):Qe?K.setTalkPrompt(!0,"按 F 潛入沉沒古城"):u&&ne?K.setTalkPrompt(!0,"按 F 上岸"):be?K.setTalkPrompt(!0,"按 F 出海"):Mt&&!Mt.active&&!u&&!g.isDead&&!Pt.isOpen?K.setTalkPrompt(!0,"按 F 設置重生點"):K.setTalkPrompt(wt!==null&&!Pt.isOpen&&!Vn.isOpen&&!bn.isOpen&&!g.isDead&&!u,(wt==null?void 0:wt.role)==="shop"?"按 F 交易":(wt==null?void 0:wt.role)==="forge"?"按 F 鍛造":"按 F 對話"),R.wasPressed("KeyF")&&(Vn.isOpen?Vn.close():bn.isOpen?bn.close():Pt.isOpen?Pt.advance():j?(ai(!1),u=!0,i.sfx("dive"),Xt()):u?Qe?(u=!1,ai(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),i.sfx("dive"),K.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):ne&&(u=!1,g.mesh.position.copy(ne),i.sfx("ui"),Xt()):be?(u=!0,g.blocking=!1,i.sfx("ui"),K.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):Mt&&!Mt.active&&!g.isDead?Dt(Mt):wt&&!g.isDead&&(i.sfx("ui"),wt.role==="shop"?Vn.open():wt.role==="forge"?bn.open():Pt.open(wt.name,wt.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*F),u?(m.sail(F,R,St.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(F),!u&&!g.isDead&&!Ve.isOpen&&!Pt.isOpen&&!Vn.isOpen&&!bn.isOpen&&!a.isOpen){const{attacked:W,spin:Zt,chargeReady:Jt,jumped:ln,dodged:We}=g.update(F,R,Di);ln&&i.sfx("jump"),We&&i.sfx("dodge"),Jt&&i.sfx("chargeReady");const mn=(Kt,jt,Vt)=>{const le=Kt.takeDamage(jt,Vt),Pe=Kt.mesh.position.clone().setY(Kt.mesh.position.y+1);p.spawn(Pe.clone().setY(Pe.y+1.2),String(jt),"#ffd23c"),h.burst(Pe,le?10217627:16769162,le?16:8),h.hitstop(le?.1:.05),h.shake(le?.28:.12,.18),i.sfx(le?"enemyDie":"hit"),le&&z(Kt)};if(W){i.sfx("swing");const Kt=new P(Math.sin(g.facing),0,Math.cos(g.facing));for(const jt of ft){if(jt.isDead)continue;const Vt=new P().subVectors(jt.mesh.position,g.mesh.position);Vt.y=0;const le=Vt.length();le>kg||le>.5&&Vt.clone().normalize().dot(Kt)<Gg||mn(jt,g.stats.atk,Vt)}}if(Zt!==null){i.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const Kt=Math.round(g.stats.atk*(1+1.5*Zt));for(const jt of ft){if(jt.isDead)continue;const Vt=new P().subVectors(jt.mesh.position,g.mesh.position);Vt.y=0,!(Vt.length()>Hg)&&mn(jt,Kt,Vt)}if(Zt>=1){i.sfx("wave");const jt=new Es(g.mesh.position,g.facing,Kt);e.add(jt.mesh),_e.push(jt)}}if(R.wasPressed("KeyE")&&k.isEquipped("flame")&&!g.blocking&&g.mp>=uc){g.mp-=uc,i.sfx("fire");const Kt=new Es(g.mesh.position,g.facing,N_(g.stats.attrs.spirit,k.levels.flame),{color:16742972,lifetime:.45,speed:18});e.add(Kt.mesh),_e.push(Kt);const jt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(jt,16742972,12,6)}if(R.wasPressed("KeyR")&&tt.potions>0&&g.hp<g.stats.maxHP&&(tt.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),i.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),R.wasPressed("KeyC")&&k.isEquipped("earth")&&!g.blocking&&g.mp>=dc){g.mp-=dc,i.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const Kt=F_(g.stats.attrs.spirit,k.levels.earth),jt=O_(k.levels.earth);for(const Vt of ft){if(Vt.isDead)continue;const le=new P().subVectors(Vt.mesh.position,g.mesh.position);le.y=0,!(le.length()>jt)&&mn(Vt,Kt,le)}}if(R.wasPressed("KeyV")&&k.isEquipped("frost")&&!g.blocking&&g.mp>=fc){g.mp-=fc,i.sfx("ice");const Kt=new Es(g.mesh.position,g.facing,z_(g.stats.attrs.spirit,k.levels.frost),{color:10149119,lifetime:.7,speed:26,freezes:!0});e.add(Kt.mesh),_e.push(Kt)}if(R.wasPressed("KeyX")&&k.isEquipped("void")&&g.mp>=pa){const Kt=Math.sin(g.facing),jt=Math.cos(g.facing),Vt=g.mesh.position.clone();for(let le=k_(k.levels.void);le>=2;le-=2){const Pe=Vt.x+Kt*le,nn=Vt.z+jt*le;if(so(Pe,nn)||k.isEquipped("frost")&&g.mp>pa||j&&Math.hypot(Pe-hn.x,nn-hn.z)<hn.r){g.mp-=pa,i.sfx("blink"),h.burst(Vt.clone().setY(Vt.y+1),9063144,10,5),g.blinkTo(Pe,nn),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),9063144,10,5);break}}}if(R.wasPressed("KeyG")&&k.isEquipped("lava")&&!g.blocking&&g.mp>=pc){g.mp-=pc,i.sfx("lava");const Kt=new Es(g.mesh.position,g.facing,G_(g.stats.attrs.spirit,k.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});e.add(Kt.mesh),_e.push(Kt);const jt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(jt,16730652,16,7)}if(R.wasPressed("KeyB")&&k.isEquipped("aqua")&&!g.blocking&&g.mp>=mc){g.mp-=mc,i.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const Kt=V_(g.stats.attrs.spirit,k.levels.aqua),jt=q_(k.levels.aqua),Vt=W_(k.levels.aqua);for(const le of ft){if(le.isDead)continue;const Pe=new P().subVectors(le.mesh.position,g.mesh.position);Pe.y=0,!(Pe.length()>jt)&&(mn(le,Kt,Pe),le.isDead||le.freeze(Vt))}}if(R.wasPressed("KeyH")&&k.isEquipped("life")&&!g.blocking&&g.mp>=gc){g.mp-=gc,i.sfx("life");const Kt=new Es(g.mesh.position,g.facing,X_(g.stats.attrs.spirit,k.levels.life),{color:5957722,lifetime:.7,speed:22,leech:Y_(k.levels.life)});e.add(Kt.mesh),_e.push(Kt)}if(R.wasPressed("KeyZ")&&ot.isEquipped("thunder")&&!g.blocking&&g.mp>=ic){let Kt=null,jt=a_;for(const Vt of ft){if(Vt.isDead)continue;const le=Vt.mesh.position.distanceTo(g.mesh.position);le<jt&&(jt=le,Kt=Vt)}if(Kt){g.mp-=ic,i.sfx("thunder");const Vt=u_(ot.levels.thunder),le=d_(ot.levels.thunder),Pe=h_(g.stats.attrs.spirit,ot.levels.thunder),nn=new Set,Wn=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let qn=Kt,gn=Pe;for(;qn&&nn.size<Vt;){const _n=qn;nn.add(_n);const Ro=Math.round(gn),fh=new P().subVectors(_n.mesh.position,g.mesh.position),gs=_n.takeDamage(Ro,fh);gs||_n.stun(le);const Gs=_n.mesh.position.clone().setY(_n.mesh.position.y+1);Wn.push(Gs.clone()),p.spawn(Gs.clone().setY(Gs.y+1.4),String(Ro),"#bfe8ff"),h.burst(Gs,gs?10217627:12577023,gs?16:8),i.sfx(gs?"enemyDie":"hit"),gs&&z(_n);let Co=null,Po=o_;for(const Hs of ft){if(Hs.isDead||nn.has(Hs))continue;const Do=Hs.mesh.position.distanceTo(_n.mesh.position);Do<Po&&(Po=Do,Co=Hs)}qn=Co,gn*=l_}const Xn=new v_(Wn);e.add(Xn.group),I.push(Xn),h.shake(.2,.16)}}if(R.wasPressed("KeyT")&&ot.isEquipped("gravity")&&!g.blocking&&g.mp>=sc){g.mp-=sc,i.sfx("vortex");const Kt=g.mesh.position.x+Math.sin(g.facing)*rc,jt=g.mesh.position.z+Math.cos(g.facing)*rc,Vt=new x_(Kt,jt,p_(ot.levels.gravity),m_(ot.levels.gravity),f_(g.stats.attrs.spirit,ot.levels.gravity));e.add(Vt.mesh),se.push(Vt),h.burst(new P(Kt,ue(Kt,jt)+1,jt),11559167,14,6)}}!u&&!g.isDead&&fg(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-ue(g.mesh.position.x,g.mesh.position.z)<.5?(H+=F,H>=.8&&(H=0,g.applyEnvironmentDamage(6),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),i.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&pe())):H=0;const Cn=!u&&!j&&!g.isDead&&k.isEquipped("frost")&&!so(g.mesh.position.x,g.mesh.position.z);if(w.visible=Cn,Cn&&(w.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=P_*F,g.mp<=0)){g.mp=0,i.sfx("shatter"),K.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const W=U(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(W.x,ue(W.x,W.z),W.z),g.isDead&&pe()}for(const W of ft){if(at){W.updateRemote(F);continue}const Zt=(W.kind==="deep"||W.kind==="voidGuardian")&&!j,Jt=y.isHost&&D.size>0?ut(W.mesh.position):null,ln=Jt?Jt.pos:g.mesh.position,We=Jt?Jt.remoteId:null,mn=Zt||(We===null?g.isDead:!1),Kt=W.update(F,ln,mn),jt=W.mesh.position;if(Kt>0&&!mn)if(We!==null)y.sendPlayerDamage(We,Kt,jt.x,jt.y,jt.z,0,"");else{const Pe=g.takeDamage(Kt,jt),nn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Pe.blocked?(p.spawn(nn,`格擋 -${Pe.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):Pe.taken>0&&(p.spawn(nn,`-${Pe.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&pe()}const Vt=W.specialEvent;if(Vt){W.specialEvent=null;const Pe=W.mesh.position.clone().setY(W.mesh.position.y+3.2);p.spawn(Pe,`⚡${Vt.name}`,"#ffd23c"),i.sfx(Vt.sfx),h.shake(.3,.25),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+.6),Vt.color,24,9),Vt.healed>0&&p.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),`+${Vt.healed}`,"#7be87b");const nn=Vt.radius*Vt.radius;if(!g.isDead){const Wn=g.mesh.position.x-jt.x,qn=g.mesh.position.z-jt.z;if(Wn*Wn+qn*qn<=nn){const gn=g.takeDamage(Vt.dmg,W.mesh.position),Xn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);gn.blocked?(p.spawn(Xn,`格擋 -${gn.taken}`,"#cfd8e8"),i.sfx("block")):gn.taken>0&&(p.spawn(Xn,`-${gn.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),Vt.color,12),g.shove(W.mesh.position,Vt.knock),Vt.effect==="chill"?g.chill(3):Vt.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(Vt.dmg*.15)))),g.isDead&&pe()}}if(y.isHost){const Wn=Vt.effect==="chill"?"chill":Vt.effect==="burn"?"burn":"";for(const[qn,gn]of D){if(gn.dead)continue;const Xn=gn.mesh.position.x-jt.x,_n=gn.mesh.position.z-jt.z;Xn*Xn+_n*_n<=nn&&y.sendPlayerDamage(qn,Vt.dmg,jt.x,jt.y,jt.z,Vt.knock,Wn)}}}const le=W.tickBurn(F);if(le>0&&!W.isDead){const Pe=W.takeDamage(le);p.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),String(le),"#ff7a3c"),Pe&&(i.sfx("enemyDie"),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+1),10217627,16),z(W))}}const Ge=g.tickBurn(F);Ge>0&&!g.isDead&&(g.applyEnvironmentDamage(Ge),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${Ge}`,"#ff7a3c"),g.isDead&&pe());for(const W of S){if(!W.active){if(W.respawnT-=F,W.respawnT<=0){const Zt=T();W.place(Zt.x,Zt.z)}continue}if(W.update(F,m.mesh.position,u)){W.collect(),i.sfx("gem");const Zt=Math.random();if(Zt<.5){const Jt=20+Math.floor(Math.random()*41);tt.coins+=Jt,K.showToast(`漂流寶箱:獲得 ${Jt} 貝拉幣!`)}else if(Zt<.75){const Jt=2+Math.floor(Math.random()*2);tt.crystals.small+=Jt,K.showToast(`漂流寶箱:獲得小型經驗結晶 ×${Jt}!`)}else Zt<.9?(tt.crystals.medium+=1,K.showToast("漂流寶箱:獲得中型經驗結晶!")):(tt.potions+=1,K.showToast("漂流寶箱:獲得回復藥水!"));h.burst(W.mesh.position.clone().setY(1.2),16769152,14,6),Ve.render()}}if(_e=_e.filter(W=>{const Zt=W.update(F,ft);for(const Jt of Zt){const ln=new P().subVectors(Jt.mesh.position,g.mesh.position);ln.y=0;const We=Jt.takeDamage(W.damage,ln);if(W.freezes&&!We&&Jt.freeze(B_(k.levels.frost)),W.burns&&!We&&Jt.burn(L_,H_(k.levels.lava)),W.leech>0&&g.hp<g.stats.maxHP){const Kt=Math.max(1,Math.round(W.damage*W.leech));g.hp=Math.min(g.stats.maxHP,g.hp+Kt),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${Kt}`,"#7be87b")}const mn=Jt.mesh.position.clone().setY(Jt.mesh.position.y+1);p.spawn(mn.clone().setY(mn.y+1.2),String(W.damage),"#7fe8ff"),h.burst(mn,We?10217627:8382719,We?16:8),i.sfx(We?"enemyDie":"hit"),We&&z(Jt)}return W.expired?(e.remove(W.mesh),W.dispose(),!1):!0}),se=se.filter(W=>{const Zt=W.update(F,ft);for(const Jt of Zt){const ln=Jt.takeDamage(W.damage),We=Jt.mesh.position.clone().setY(Jt.mesh.position.y+1);p.spawn(We.clone().setY(We.y+1.2),String(W.damage),"#d8b0ff"),h.burst(We,ln?10217627:11559167,ln?16:6),ln&&(i.sfx("enemyDie"),z(Jt))}return W.expired?(e.remove(W.mesh),W.dispose(),!1):!0}),I=I.filter(W=>(W.update(F),W.expired?(e.remove(W.group),W.dispose(),!1):!0)),!ot.thunderOwned){const W=d.weather==="storm";W&&!Ae?(Ae=new Lt("fruit-thunder",kl.x,kl.z),e.add(Ae.mesh),fe.push(Ae)):!W&&Ae&&(e.remove(Ae.mesh),fe=fe.filter(Zt=>Zt!==Ae),Ae=null)}fe=fe.filter(W=>{if(g.isDead)return!0;const Zt=W.update(F,g.mesh.position);if(Zt){if(W.kind==="coin")tt.coins+=8,f.push("🪙 獲得 8 貝拉幣"),i.sfx("coin");else if(W.kind==="gem-flame")f.push("🔥 獲得靈紋寶石【焰心石】"),k.flameOwned=!0,Ne("flame"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Xt();else if(W.kind==="gem-wind")f.push("🌪️ 獲得靈紋寶石【風語石】"),k.windOwned=!0,Ne("wind"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Xt();else if(W.kind==="gem-earth")f.push("🪨 獲得靈紋寶石【地殼石】"),k.earthOwned=!0,Ne("earth"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Xt();else if(W.kind==="gem-frost")f.push("❄️ 獲得靈紋寶石【霜語晶】"),k.frostOwned=!0,Ne("frost"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Xt();else if(W.kind==="gem-tide")f.push("🌊 獲得靈紋寶石【潮汐石】"),k.tideOwned=!0,Ne("tide"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Xt();else if(W.kind==="gem-void")f.push("🌀 獲得靈紋寶石【虛空石】"),k.voidOwned=!0,Ne("void"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Xt();else if(W.kind==="gem-lava")f.push("🌋 獲得靈紋寶石【溶岩石】"),k.lavaOwned=!0,Ne("lava"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Xt();else if(W.kind==="gem-aqua")f.push("💧 獲得靈紋寶石【碧波石】"),k.aquaOwned=!0,Ne("aqua"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Xt();else if(W.kind==="gem-life")f.push("🌿 獲得靈紋寶石【翠生石】"),k.lifeOwned=!0,Ne("life"),K.setGems(k),i.sfx("gem"),K.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Xt();else if(W.kind==="fruit-thunder")f.push("⚡ 獲得靈樹果實【雷光果】"),ot.thunderOwned=!0,ds("thunder"),Ae=null,K.setFruits(ot),i.sfx("gem"),K.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Xt();else if(W.kind==="fruit-gravity")f.push("🌀 獲得靈樹果實【引力果】"),ot.gravityOwned=!0,ds("gravity"),K.setFruits(ot),i.sfx("gem"),K.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Xt();else{tt.crystals[W.kind]++;const Jt=W.kind==="small"?"小型":W.kind==="medium"?"中型":"大型";f.push(`💎 獲得${Jt}經驗結晶`),i.sfx("crystal")}e.remove(W.mesh),Ve.render()}return!Zt}),R.rightDown&&(Di-=R.dx*.005,oi=Us.clamp(oi+R.dy*.004,.05,1.2)),b=Us.clamp(b+R.wheel*.01,6,18);const wn=g.mesh.position.clone().add(new P(0,2,0)),xe=new P(wn.x+Math.sin(Di)*Math.cos(oi)*b,wn.y+Math.sin(oi)*b,wn.z+Math.cos(Di)*Math.cos(oi)*b);xe.y=Math.max(xe.y,ue(xe.x,xe.z)+.6);const tn=1-Math.exp(-12*E);n.position.lerp(xe,tn),n.position.add(h.update(E)),n.lookAt(wn);const Ee=[];if(G.get("gem")==="active"&&Ee.push(k.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),G.get("jelly")==="active"){const W=G.jellyProgress();Ee.push(W>=_i?"果凍清理:回報漁夫小蝦":`果凍清理:${W}/${_i}`)}G.get("wind")==="active"&&Ee.push(k.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),G.get("earth")==="active"&&Ee.push(k.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),G.get("frost")==="active"&&Ee.push(k.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),G.get("tide")==="active"&&Ee.push(k.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),G.get("depth")==="active"&&Ee.push(k.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),G.get("final")==="active"&&Ee.push(rt?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),G.get("sea2")==="active"&&Ee.push(Wt()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${zt()}/6・圖鑑${mt()}/${Tt.length}・Lv.${g.stats.level}/${Bt}`),G.get("lava")==="active"&&Ee.push(k.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),G.get("aqua")==="active"&&Ee.push(k.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),G.get("life")==="active"&&Ee.push(k.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const He=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const W of He){if(G.get(W.id)!=="active")continue;const Zt=G.huntProgress(W.id);Ee.push(Zt>=bi[W.id].target?`${W.title}:回報${W.npc}`:`${W.title}:${Zt}/${bi[W.id].target}`)}if(K.setQuests(Ee),!Z&&bt.isDead&&(Z=!0,rt=!0,ps(),i.sfx("victory"),Rn.style.display="flex",Xt()),o.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),o.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!u&&!g.isDead&&g.chargeRatio>=1){if(_+=E,_>=.16){_=0;const W=g.mesh.position.clone().add(new P(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(W,13625599,3,2.5)}}else _=0;for(const W of D.values())W.update(E);if(st+=E,st>=.05){st=0;const W=g.mesh.position,Zt=(W.x-J.x)**2+(W.z-J.z)**2;J.copy(W);const Jt=(g.attacking?1:0)|(g.blocking?2:0)|(g.airborne?4:0)|(g.hurtT>0?8:0),ln={x:W.x,y:W.y,z:W.z,facing:g.facing,moving:Zt>1e-5,act:Jt,dead:g.isDead};y.sendState(ln)}if(at)for(const W of ft){const Zt=W.netIndex;W.pendingNetDamage>0&&(y.sendHit(Zt,Math.round(W.pendingNetDamage)),W.pendingNetDamage=0),W.pendingNetFreeze>0&&(y.sendCc(Zt,"freeze",W.pendingNetFreeze,0),W.pendingNetFreeze=0),W.pendingNetStun>0&&(y.sendCc(Zt,"stun",W.pendingNetStun,0),W.pendingNetStun=0),W.pendingNetBurnSec>0&&(y.sendCc(Zt,"burn",W.pendingNetBurnSec,W.pendingNetBurnDps),W.pendingNetBurnSec=0,W.pendingNetBurnDps=0)}else if(y.isHost&&D.size>0&&(ct+=E,ct>=.08)){ct=0;const W=[];for(const Zt of ft){const Jt=Zt.mesh.position;W.push($(Jt.x),$(Jt.y),$(Jt.z),$(Zt.mesh.rotation.y),Zt.isDead?1:0,Zt.hp,Zt.statusFlag)}y.sendEnemies(W)}p.update(E,n),K.update(g,tt),R.endFrame(),t.render(e,n)})}Ax();
