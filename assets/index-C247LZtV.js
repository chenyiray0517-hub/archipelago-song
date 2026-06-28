var Hu=Object.defineProperty;var Gu=(r,e,t)=>e in r?Hu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var w=(r,e,t)=>Gu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="177",Vu=0,fl=1,Wu=2,Nd=1,Ud=2,ui=3,Jn=0,ln=1,jt=2,Di=0,es=1,wn=2,pl=3,ml=4,qu=5,Zi=100,Xu=101,ju=102,$u=103,Yu=104,Ku=200,Zu=201,Ju=202,Qu=203,Fa=204,ka=205,ef=206,tf=207,nf=208,sf=209,rf=210,of=211,af=212,cf=213,lf=214,Ba=0,za=1,Ha=2,Os=3,Ga=4,Va=5,Wa=6,qa=7,Oc=0,hf=1,df=2,Ni=0,uf=1,ff=2,pf=3,mf=4,gf=5,_f=6,xf=7,gl="attached",vf="detached",Od=300,Fs=301,ks=302,Xa=303,ja=304,Do=306,ts=1e3,Pi=1001,So=1002,tn=1003,Fd=1004,dr=1005,Sn=1006,go=1007,mi=1008,Qn=1009,kd=1010,Bd=1011,gr=1012,Fc=1013,ns=1014,zn=1015,Sr=1016,kc=1017,Bc=1018,_r=1020,zd=35902,Hd=1021,Gd=1022,Nn=1023,xr=1026,vr=1027,No=1028,zc=1029,Vd=1030,Hc=1031,Gc=1033,_o=33776,xo=33777,vo=33778,yo=33779,$a=35840,Ya=35841,Ka=35842,Za=35843,Ja=36196,Qa=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,cc=37815,lc=37816,hc=37817,dc=37818,uc=37819,fc=37820,pc=37821,Mo=36492,mc=36494,gc=36495,Wd=36283,_c=36284,xc=36285,vc=36286,Vc=2200,qd=2201,yf=2202,yr=2300,Mr=2301,Ho=2302,Rs=2400,Cs=2401,To=2402,Wc=2500,Mf=2501,bf=0,Xd=1,yc=2,wf=3200,Sf=3201,Uo=0,Tf=1,Ii="",Ht="srgb",_n="srgb-linear",Eo="linear",It="srgb",cs=7680,_l=519,Ef=512,Af=513,Rf=514,jd=515,Cf=516,If=517,Pf=518,Lf=519,Mc=35044,xl="300 es",gi=2e3,Ao=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const fr=Math.PI/180,Bs=180/Math.PI;function Hn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function qc(r,e){return(r%e+e)%e}function Df(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Nf(r,e,t){return r!==e?(t-r)/(e-r):0}function pr(r,e,t){return(1-t)*r+t*e}function Uf(r,e,t,n){return pr(r,e,1-Math.exp(-t*n))}function Of(r,e=1){return e-Math.abs(qc(r,e*2)-e)}function Ff(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zf(r,e){return r+Math.random()*(e-r)}function Hf(r){return r*(.5-Math.random())}function Gf(r){r!==void 0&&(vl=r);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(r){return r*fr}function Wf(r){return r*Bs}function qf(r){return(r&r-1)===0&&r!==0}function Xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $f(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),h=s((e-n)/2),u=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*d,c*h,c*u,a*l);break;case"YZY":r.set(c*u,a*d,c*h,a*l);break;case"ZXZ":r.set(c*h,c*u,a*d,a*l);break;case"XZX":r.set(a*d,c*_,c*p,a*l);break;case"YXY":r.set(c*p,a*d,c*_,a*l);break;case"ZYZ":r.set(c*_,c*p,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zs={DEG2RAD:fr,RAD2DEG:Bs,generateUUID:Hn,clamp:ct,euclideanModulo:qc,mapLinear:Df,inverseLerp:Nf,lerp:pr,damp:Uf,pingpong:Of,smoothstep:Ff,smootherstep:kf,randInt:Bf,randFloat:zf,randFloatSpread:Hf,seededRandom:Gf,degToRad:Vf,radToDeg:Wf,isPowerOfTwo:qf,ceilPowerOfTwo:Xf,floorPowerOfTwo:jf,setQuaternionFromProperEuler:$f,normalize:Ct,denormalize:Bn};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==u||l!==p||d!==_){let m=1-a;const f=c*u+l*p+d*_+h*x,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,f*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(c=c*m+u*y,l=l*m+p*y,d=d*m+_*y,h=h*m+x*y,m===1-a){const R=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=R,l*=R,d*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[o],u=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+d*h+c*p-l*u,e[t+1]=c*_+d*u+l*h-a*p,e[t+2]=l*_+d*p+a*u-c*h,e[t+3]=d*_-a*h-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),h=a(s/2),u=c(n/2),p=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=u*d*h+l*p*_,this._y=l*p*h-u*d*_,this._z=l*d*_+u*p*h,this._w=l*d*h-u*p*_;break;case"YXZ":this._x=u*d*h+l*p*_,this._y=l*p*h-u*d*_,this._z=l*d*_-u*p*h,this._w=l*d*h+u*p*_;break;case"ZXY":this._x=u*d*h-l*p*_,this._y=l*p*h+u*d*_,this._z=l*d*_+u*p*h,this._w=l*d*h-u*p*_;break;case"ZYX":this._x=u*d*h-l*p*_,this._y=l*p*h+u*d*_,this._z=l*d*_-u*p*h,this._w=l*d*h+u*p*_;break;case"YZX":this._x=u*d*h+l*p*_,this._y=l*p*h+u*d*_,this._z=l*d*_-u*p*h,this._w=l*d*h-u*p*_;break;case"XZY":this._x=u*d*h-l*p*_,this._y=l*p*h-u*d*_,this._z=l*d*_+u*p*h,this._w=l*d*h+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),d=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*d,this.y=n+c*d+a*l-s*h,this.z=i+c*h+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Go.copy(this).projectOnVector(e),this.sub(Go)}reflect(e){return this.sub(Go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new I,yl=new Gn;class et{constructor(e,t,n,i,s,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],p=n[5],_=n[8],x=i[0],m=i[3],f=i[6],v=i[1],S=i[4],y=i[7],R=i[2],A=i[5],g=i[8];return s[0]=o*x+a*v+c*R,s[3]=o*m+a*S+c*A,s[6]=o*f+a*y+c*g,s[1]=l*x+d*v+h*R,s[4]=l*m+d*S+h*A,s[7]=l*f+d*y+h*g,s[2]=u*x+p*v+_*R,s[5]=u*m+p*S+_*A,s[8]=u*f+p*y+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=d*o-a*l,u=a*c-d*s,p=l*s-o*c,_=t*h+n*u+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(i*l-d*n)*x,e[2]=(a*n-i*o)*x,e[3]=u*x,e[4]=(d*t-i*c)*x,e[5]=(i*s-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new et;function $d(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function br(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yf(){const r=br("canvas");return r.style.display="block",r}const Ml={};function Ls(r){r in Ml||(Ml[r]=!0,console.warn(r))}function Kf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Zf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){const r={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[_n]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:bl,fromXYZ:wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:It,toXYZ:bl,fromXYZ:wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}const at=Qf();function _i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=br("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wo(i[o].image)):s.push(Wo(i[o]))}else s=Wo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ep.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;const qo=new I;class $t extends ss{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Pi,i=Pi,s=Sn,o=mi,a=Nn,c=Qn,l=$t.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Hn(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Od;$t.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(p+1)/2,R=(f+1)/2,A=(d+u)/4,g=(h+x)/4,L=(_+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=g/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=g/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-x)/v,this.z=(u-d)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new $t(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends ip{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yd extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Or.subVectors(this.max,Qs),hs.subVectors(e.a,Qs),ds.subVectors(e.b,Qs),us.subVectors(e.c,Qs),wi.subVectors(ds,hs),Si.subVectors(us,ds),zi.subVectors(hs,us);let t=[0,-wi.z,wi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,wi.z,0,-wi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-wi.y,wi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!Xo(t,hs,ds,us,Or)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,hs,ds,us,Or))?!1:(Fr.crossVectors(wi,Si),t=[Fr.x,Fr.y,Fr.z],Xo(t,hs,ds,us,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,Ur=new Tn,hs=new I,ds=new I,us=new I,wi=new I,Si=new I,zi=new I,Qs=new I,Or=new I,Fr=new I,Hi=new I;function Xo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Hi.fromArray(r,s);const a=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),d=n.dot(Hi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const rp=new Tn,er=new I,jo=new I;class ei{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(jo)),this.expandByPoint(er.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new I,$o=new I,kr=new I,Ti=new I,Yo=new I,Br=new I,Ko=new I;class Oo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$o.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=Ti.dot(this.direction),c=-Ti.dot(kr),l=Ti.lengthSq(),d=Math.abs(1-o*o);let h,u,p,_;if(d>0)if(h=o*c-a,u=o*a-c,_=s*d,h>=0)if(u>=-_)if(u<=_){const x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*c)+l;else u<=-_?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+u*(u+2*c)+l):u<=_?(h=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+u*(u+2*c)+l);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($o).addScaledVector(kr,u),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,s){Yo.subVectors(t,e),Br.subVectors(n,e),Ko.crossVectors(Yo,Br);let o=this.direction.dot(Ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const c=a*this.direction.dot(Br.crossVectors(Ti,Br));if(c<0)return null;const l=a*this.direction.dot(Yo.cross(Ti));if(l<0||c+l>o)return null;const d=-a*Ti.dot(Ko);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,s,o,a,c,l,d,h,u,p,_,x,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,d,h,u,p,_,x,m)}set(e,t,n,i,s,o,a,c,l,d,h,u,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*h,_=a*d,x=a*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,p=c*h,_=l*d,x=l*h;t[0]=u+x*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-_,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,p=c*h,_=l*d,x=l*h;t[0]=u-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,p=o*h,_=a*d,x=a*h;t[0]=c*d,t[4]=_*l-p,t[8]=u*l+x,t[1]=c*h,t[5]=x*l+u,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=x-u*h,t[8]=_*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*h+_,t[10]=u-x*h}else if(e.order==="XZY"){const u=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+x,t[5]=o*d,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ei.crossVectors(n,Mn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ei.crossVectors(n,Mn)),Ei.normalize(),zr.crossVectors(Mn,Ei),i[0]=Ei.x,i[4]=zr.x,i[8]=Mn.x,i[1]=Ei.y,i[5]=zr.y,i[9]=Mn.y,i[2]=Ei.z,i[6]=zr.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],v=n[3],S=n[7],y=n[11],R=n[15],A=i[0],g=i[4],L=i[8],T=i[12],M=i[1],D=i[5],G=i[9],H=i[13],J=i[2],ie=i[6],Z=i[10],ae=i[14],j=i[3],_e=i[7],Ae=i[11],re=i[15];return s[0]=o*A+a*M+c*J+l*j,s[4]=o*g+a*D+c*ie+l*_e,s[8]=o*L+a*G+c*Z+l*Ae,s[12]=o*T+a*H+c*ae+l*re,s[1]=d*A+h*M+u*J+p*j,s[5]=d*g+h*D+u*ie+p*_e,s[9]=d*L+h*G+u*Z+p*Ae,s[13]=d*T+h*H+u*ae+p*re,s[2]=_*A+x*M+m*J+f*j,s[6]=_*g+x*D+m*ie+f*_e,s[10]=_*L+x*G+m*Z+f*Ae,s[14]=_*T+x*H+m*ae+f*re,s[3]=v*A+S*M+y*J+R*j,s[7]=v*g+S*D+y*ie+R*_e,s[11]=v*L+S*G+y*Z+R*Ae,s[15]=v*T+S*H+y*ae+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+s*c*h-i*l*h-s*a*u+n*l*u+i*a*p-n*c*p)+x*(+t*c*p-t*l*u+s*o*u-i*o*p+i*l*d-s*c*d)+m*(+t*l*h-t*a*p-s*o*h+n*o*p+s*a*d-n*l*d)+f*(-i*a*d-t*c*h+t*a*u+i*o*h-n*o*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],v=h*m*l-x*u*l+x*c*p-a*m*p-h*c*f+a*u*f,S=_*u*l-d*m*l-_*c*p+o*m*p+d*c*f-o*u*f,y=d*x*l-_*h*l+_*a*p-o*x*p-d*a*f+o*h*f,R=_*h*c-d*x*c-_*a*u+o*x*u+d*a*m-o*h*m,A=t*v+n*S+i*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=v*g,e[1]=(x*u*s-h*m*s-x*i*p+n*m*p+h*i*f-n*u*f)*g,e[2]=(a*m*s-x*c*s+x*i*l-n*m*l-a*i*f+n*c*f)*g,e[3]=(h*c*s-a*u*s-h*i*l+n*u*l+a*i*p-n*c*p)*g,e[4]=S*g,e[5]=(d*m*s-_*u*s+_*i*p-t*m*p-d*i*f+t*u*f)*g,e[6]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*f-t*c*f)*g,e[7]=(o*u*s-d*c*s+d*i*l-t*u*l-o*i*p+t*c*p)*g,e[8]=y*g,e[9]=(_*h*s-d*x*s-_*n*p+t*x*p+d*n*f-t*h*f)*g,e[10]=(o*x*s-_*a*s+_*n*l-t*x*l-o*n*f+t*a*f)*g,e[11]=(d*a*s-o*h*s-d*n*l+t*h*l+o*n*p-t*a*p)*g,e[12]=R*g,e[13]=(d*x*i-_*h*i+_*n*u-t*x*u-d*n*m+t*h*m)*g,e[14]=(_*a*i-o*x*i-_*n*c+t*x*c+o*n*m-t*a*m)*g,e[15]=(o*h*i-d*a*i+d*n*c-t*h*c-o*n*u+t*a*u)*g,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,h=a+a,u=s*l,p=s*d,_=s*h,x=o*d,m=o*h,f=a*h,v=c*l,S=c*d,y=c*h,R=n.x,A=n.y,g=n.z;return i[0]=(1-(x+f))*R,i[1]=(p+y)*R,i[2]=(_-S)*R,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(u+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+S)*g,i[9]=(m-v)*g,i[10]=(1-(u+x))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const l=1/s,d=1/o,h=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=gi){const c=this.elements,l=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,_;if(a===gi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ao)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=gi){const c=this.elements,l=1/(t-e),d=1/(n-i),h=1/(o-s),u=(t+e)*l,p=(n+i)*d;let _,x;if(a===gi)_=(o+s)*h,x=-2*h;else if(a===Ao)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new I,Fn=new Je,op=new I(0,0,0),ap=new I(1,1,1),Ei=new I,zr=new I,Mn=new I,Sl=new Je,Tl=new Gn;class Vn{constructor(e=0,t=0,n=0,i=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cp=0;const El=new I,ps=new Gn,ai=new Je,Hr=new I,tr=new I,lp=new I,hp=new Gn,Al=new I(1,0,0),Rl=new I(0,1,0),Cl=new I(0,0,1),Il={type:"added"},dp={type:"removed"},ms={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Ut extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new Vn,n=new Gn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new et}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(tr,Hr,this.up):ai.lookAt(Hr,tr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(ai),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new I,ci=new I,Jo=new I,li=new I,gs=new I,_s=new I,Pl=new I,Qo=new I,ea=new I,ta=new I,na=new St,ia=new St,sa=new St;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kn.subVectors(i,t),ci.subVectors(n,t),Jo.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(ci),c=kn.dot(Jo),l=ci.dot(ci),d=ci.dot(Jo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(l*c-a*d)*u,_=(o*d-a*c)*u;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(na,s.x),o.addScaledVector(ia,s.y),o.addScaledVector(sa,s.z),o}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),ci.subVectors(e,t),kn.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(s,n),Qo.subVectors(e,n);const c=gs.dot(Qo),l=_s.dot(Qo);if(c<=0&&l<=0)return t.copy(n);ea.subVectors(e,i);const d=gs.dot(ea),h=_s.dot(ea);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(gs,o);ta.subVectors(e,s);const p=gs.dot(ta),_=_s.dot(ta);if(_>=0&&p<=_)return t.copy(s);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(_s,a);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Pl.subVectors(s,i),a=(h-d)/(h-d+(p-_)),t.copy(i).addScaledVector(Pl,a);const f=1/(m+x+u);return o=x*f,a=u*f,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ra(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=qc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return at.workingToColorSpace(an.copy(this),e),Math.round(ct(an.r*255,0,255))*65536+Math.round(ct(an.g*255,0,255))*256+Math.round(ct(an.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(an.copy(this),t);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ht){at.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,i=an.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Gr);const n=pr(Ai.h,Gr.h,t),i=pr(Ai.s,Gr.s,t),s=pr(Ai.l,Gr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ue;ue.NAMES=Zd;let up=0;class gn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=es,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=ka,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new I,Vr=new Ge;let fp=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class Jd extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qd extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pp=0;const Cn=new Je,oa=new Ut,xs=new I,bn=new Tn,nr=new Tn,Jt=new I;class Ft extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(bn.min,nr.min),bn.expandByPoint(Jt),Jt.addVectors(bn.max,nr.max),bn.expandByPoint(Jt)):(bn.expandByPoint(nr.min),bn.expandByPoint(nr.max))}bn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Jt.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(e,l),Jt.add(xs)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,d=new I,h=new I,u=new Ge,p=new Ge,_=new Ge,x=new I,m=new I;function f(L,T,M){l.fromBufferAttribute(n,L),d.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,M),d.sub(l),h.sub(l),p.sub(u),_.sub(u);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),a[L].add(x),a[T].add(x),a[M].add(x),c[L].add(m),c[T].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,T=v.length;L<T;++L){const M=v[L],D=M.start,G=M.count;for(let H=D,J=D+G;H<J;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new I,y=new I,R=new I,A=new I;function g(L){R.fromBufferAttribute(i,L),A.copy(R);const T=a[L];S.copy(T),S.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(A,T);const D=y.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,T=v.length;L<T;++L){const M=v[L],D=M.start,G=M.count;for(let H=D,J=D+G;H<J;H+=3)g(e.getX(H+0)),g(e.getX(H+1)),g(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,d=new I,h=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,h=a.normalized,u=new l.constructor(c.length*d);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*d;for(let f=0;f<d;f++)u[_++]=l[p++]}return new nn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,h=l.length;d<h;d++){const u=l[d],p=e(u,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new Je,Gi=new Oo,Wr=new ei,Dl=new I,qr=new I,Xr=new I,jr=new I,aa=new I,$r=new I,Nl=new I,Yr=new I;class Y extends Ut{constructor(e=new Ft,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],h=s[c];d!==0&&(aa.fromBufferAttribute(h,e),o?$r.addScaledVector(aa,d):$r.addScaledVector(aa.sub(t),d))}t.add($r)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Wr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Wr,Dl)===null||Gi.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=S;y<R;y+=3){const A=a.getX(y),g=a.getX(y+1),L=a.getX(y+2);i=Kr(this,f,e,n,l,d,h,A,g,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Kr(this,o,e,n,l,d,h,v,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=S;y<R;y+=3){const A=y,g=y+1,L=y+2;i=Kr(this,f,e,n,l,d,h,A,g,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=m,S=m+1,y=m+2;i=Kr(this,o,e,n,l,d,h,v,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function mp(r,e,t,n,i,s,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Jn,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:r}}function Kr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,qr),r.getVertexPosition(c,Xr),r.getVertexPosition(l,jr);const d=mp(r,e,t,n,qr,Xr,jr,Nl);if(d){const h=new I;Dn.getBarycoord(Nl,qr,Xr,jr,h),i&&(d.uv=Dn.getInterpolatedAttribute(i,a,c,l,h,new Ge)),s&&(d.uv1=Dn.getInterpolatedAttribute(s,a,c,l,h,new Ge)),o&&(d.normal=Dn.getInterpolatedAttribute(o,a,c,l,h,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};Dn.getNormal(qr,Xr,jr,u.normal),d.face=u,d.barycoord=h}return d}class Yt extends Ft{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],h=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(h,2));function _(x,m,f,v,S,y,R,A,g,L,T){const M=y/g,D=R/L,G=y/2,H=R/2,J=A/2,ie=g+1,Z=L+1;let ae=0,j=0;const _e=new I;for(let Ae=0;Ae<Z;Ae++){const re=Ae*D-H;for(let Ee=0;Ee<ie;Ee++){const Rt=Ee*M-G;_e[x]=Rt*v,_e[m]=re*S,_e[f]=J,l.push(_e.x,_e.y,_e.z),_e[x]=0,_e[m]=0,_e[f]=A>0?1:-1,d.push(_e.x,_e.y,_e.z),h.push(Ee/g),h.push(1-Ae/L),ae+=1}}for(let Ae=0;Ae<L;Ae++)for(let re=0;re<g;re++){const Ee=u+re+ie*Ae,Rt=u+re+ie*(Ae+1),ne=u+(re+1)+ie*(Ae+1),fe=u+(re+1)+ie*Ae;c.push(Ee,Rt,fe),c.push(Rt,ne,fe),j+=6}a.addGroup(p,j,T),p+=j,u+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function gp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const _p={clone:Hs,merge:pn};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new I,Ul=new Ge,Ol=new Ge;class mn extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Ol),t.subVectors(Ol,Ul)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,ys=1;class yp extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(vs,ys,e,t);i.layers=this.layers,this.add(i);const s=new mn(vs,ys,e,t);s.layers=this.layers,this.add(s);const o=new mn(vs,ys,e,t);o.layers=this.layers,this.add(o);const a=new mn(vs,ys,e,t);a.layers=this.layers,this.add(a);const c=new mn(vs,ys,e,t);c.layers=this.layers,this.add(c);const l=new mn(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nu extends $t{constructor(e=[],t=Fs,n,i,s,o,a,c,l,d){super(e,t,n,i,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yt(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Di});s.uniforms.tEquirect.value=t;const o=new Y(i,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Sn),new yp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class tt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wp extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new I;class wr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class su extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const ir=new I,bs=new I,ws=new I,Ss=new Ge,sr=new Ge,ru=new Je,Zr=new I,rr=new I,Jr=new I,Fl=new Ge,la=new Ge,kl=new Ge;class ou extends Ut{constructor(e=new su){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iu(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new wr(n,3,0,!1)),Ms.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-ws.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Qr(Zr.set(-.5,-.5,0),ws,o,bs,i,s),Qr(rr.set(.5,-.5,0),ws,o,bs,i,s),Qr(Jr.set(.5,.5,0),ws,o,bs,i,s),Fl.set(0,0),la.set(1,0),kl.set(1,1);let a=e.ray.intersectTriangle(Zr,rr,Jr,!1,ir);if(a===null&&(Qr(rr.set(-.5,.5,0),ws,o,bs,i,s),la.set(0,1),a=e.ray.intersectTriangle(Zr,Jr,rr,!1,ir),a===null))return;const c=e.ray.origin.distanceTo(ir);c<e.near||c>e.far||t.push({distance:c,point:ir.clone(),uv:Dn.getInterpolation(ir,Zr,rr,Jr,Fl,la,kl,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qr(r,e,t,n,i,s){Ss.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(sr.x=s*Ss.x-i*Ss.y,sr.y=i*Ss.x+s*Ss.y):sr.copy(Ss),r.copy(e),r.x+=sr.x,r.y+=sr.y,r.applyMatrix4(ru)}const Bl=new I,zl=new St,Hl=new St,Sp=new I,Gl=new Je,eo=new I,ha=new ei,Vl=new Je,da=new Oo;class bc extends Y{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gl,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1&&(Vl.copy(i).invert(),da.copy(e.ray).applyMatrix4(Vl),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Hl.fromBufferAttribute(i.attributes.skinWeight,e),Bl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hl.getComponent(s);if(o!==0){const a=zl.getComponent(s);Gl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sp.copy(Bl).applyMatrix4(Gl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class au extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $c extends $t{constructor(e=null,t=1,n=1,i,s,o,a,c,l=tn,d=tn,h,u){super(null,o,a,c,l,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Je,Tp=new Je;class Yc{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Tp;Wl.multiplyMatrices(a,t[s]),Wl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $c(t,e,e,Nn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new au),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wc extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new Je,ql=new Je,to=[],Xl=new Tn,Ep=new Je,or=new Y,ar=new ei;class Ap extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Xl.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ar.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ts),ql.multiplyMatrices(n,Ts),or.matrixWorld=ql,or.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const c=to[o];c.instanceId=s,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $c(new Float32Array(i*this.count),i,this.count,No,zn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ua=new I,Rp=new I,Cp=new et;class $i{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ua.subVectors(n,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cp.getNormalMatrix(e),i=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new ei,no=new I;class Kc{constructor(e=new $i,t=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],d=i[5],h=i[6],u=i[7],p=i[8],_=i[9],x=i[10],m=i[11],f=i[12],v=i[13],S=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,m-p,y-f).normalize(),n[1].setComponents(c+s,u+l,m+p,y+f).normalize(),n[2].setComponents(c+o,u+d,m+_,y+v).normalize(),n[3].setComponents(c-o,u-d,m-_,y-v).normalize(),n[4].setComponents(c-a,u-h,m-x,y-S).normalize(),t===gi)n[5].setComponents(c+a,u+h,m+x,y+S).normalize();else if(t===Ao)n[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(no.x=i.normal.x>0?e.max.x:e.min.x,no.y=i.normal.y>0?e.max.y:e.min.y,no.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zn extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new I,Co=new I,jl=new Je,cr=new Oo,io=new ei,fa=new I,$l=new I;class Tr extends Ut{constructor(e=new Ft,t=new Zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ro.fromBufferAttribute(t,i-1),Co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;jl.copy(i).invert(),cr.copy(e.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=d.getX(x),v=d.getX(x+1),S=so(this,e,cr,c,f,v,x);S&&t.push(S)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(p),f=so(this,e,cr,c,x,m,_-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=l){const f=so(this,e,cr,c,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=so(this,e,cr,c,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function so(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ro.fromBufferAttribute(a,i),Co.fromBufferAttribute(a,s),t.distanceSqToSegment(Ro,Co,fa,$l)>n)return;fa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(fa);if(!(l<e.near||l>e.far))return{distance:l,point:$l.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Yl=new I,Kl=new I;class Io extends Tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yl.fromBufferAttribute(t,i),Kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yl.distanceTo(Kl);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ip extends Tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Is extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new Je,Sc=new Oo,ro=new ei,oo=new I;class bo extends Ut{constructor(e=new Ft,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;Zl.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(Zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=u,x=p;_<x;_++){const m=l.getX(_);oo.fromBufferAttribute(h,m),Jl(oo,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,x=p;_<x;_++)oo.fromBufferAttribute(h,_),Jl(oo,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(r,e,t,n,i,s,o){const a=Sc.distanceSqToPoint(r);if(a<t){const c=new I;Sc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pp extends $t{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends $t{constructor(e,t,n=ns,i,s,o,a=tn,c=tn,l,d=xr,h=1){if(d!==xr&&d!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zc extends Ft{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],d=t/2,h=Math.PI/2*e,u=t,p=2*h+u,_=n*2+s,x=i+1,m=new I,f=new I;for(let v=0;v<=_;v++){let S=0,y=0,R=0,A=0;if(v<=n){const T=v/n,M=T*Math.PI/2;y=-d-e*Math.cos(M),R=e*Math.sin(M),A=-e*Math.cos(M),S=T*h}else if(v<=n+s){const T=(v-n)/s;y=-d+T*t,R=e,A=0,S=h+T*u}else{const T=(v-n-s)/n,M=T*Math.PI/2;y=d+e*Math.sin(M),R=e*Math.cos(M),A=e*Math.sin(M),S=h+u+T*h}const g=Math.max(0,Math.min(1,S/p));let L=0;v===0?L=.5/i:v===_&&(L=-.5/i);for(let T=0;T<=i;T++){const M=T/i,D=M*Math.PI*2,G=Math.sin(D),H=Math.cos(D);f.x=-R*H,f.y=y,f.z=R*G,a.push(f.x,f.y,f.z),m.set(-R*H,A,R*G),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+L,g)}if(v>0){const T=(v-1)*x;for(let M=0;M<i;M++){const D=T+M,G=T+M+1,H=v*x+M,J=v*x+M+1;o.push(D,G,H),o.push(G,J,H)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Er extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,d=new Ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends Ft{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],p=[];let _=0;const x=[],m=n/2;let f=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(p,2));function v(){const y=new I,R=new I;let A=0;const g=(t-e)/n;for(let L=0;L<=s;L++){const T=[],M=L/s,D=M*(t-e)+e;for(let G=0;G<=i;G++){const H=G/i,J=H*c+a,ie=Math.sin(J),Z=Math.cos(J);R.x=D*ie,R.y=-M*n+m,R.z=D*Z,h.push(R.x,R.y,R.z),y.set(ie,g,Z).normalize(),u.push(y.x,y.y,y.z),p.push(H,1-M),T.push(_++)}x.push(T)}for(let L=0;L<i;L++)for(let T=0;T<s;T++){const M=x[T][L],D=x[T+1][L],G=x[T+1][L+1],H=x[T][L+1];(e>0||T!==0)&&(d.push(M,D,H),A+=3),(t>0||T!==s-1)&&(d.push(D,G,H),A+=3)}l.addGroup(f,A,0),f+=A}function S(y){const R=_,A=new Ge,g=new I;let L=0;const T=y===!0?e:t,M=y===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),_++;const D=_;for(let G=0;G<=i;G++){const J=G/i*c+a,ie=Math.cos(J),Z=Math.sin(J);g.x=T*Z,g.y=m*M,g.z=T*ie,h.push(g.x,g.y,g.z),u.push(0,M,0),A.x=ie*.5+.5,A.y=Z*.5*M+.5,p.push(A.x,A.y),_++}for(let G=0;G<i;G++){const H=R+G,J=D+G;y===!0?d.push(J,J+1,H):d.push(J+1,J,H),L+=3}l.addGroup(f,L,y===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cn extends Pt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new cn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qs extends Ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),d(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new I,y=new I,R=new I;for(let A=0;A<t.length;A+=3)p(t[A+0],S),p(t[A+1],y),p(t[A+2],R),c(S,y,R,v)}function c(v,S,y,R){const A=R+1,g=[];for(let L=0;L<=A;L++){g[L]=[];const T=v.clone().lerp(y,L/A),M=S.clone().lerp(y,L/A),D=A-L;for(let G=0;G<=D;G++)G===0&&L===A?g[L][G]=T:g[L][G]=T.clone().lerp(M,G/D)}for(let L=0;L<A;L++)for(let T=0;T<2*(A-L)-1;T++){const M=Math.floor(T/2);T%2===0?(u(g[L][M+1]),u(g[L+1][M]),u(g[L][M])):(u(g[L][M+1]),u(g[L+1][M+1]),u(g[L+1][M]))}}function l(v){const S=new I;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(v),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function d(){const v=new I;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const y=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;o.push(y,1-R)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const S=o[v+0],y=o[v+2],R=o[v+4],A=Math.max(S,y,R),g=Math.min(S,y,R);A>.9&&g<.1&&(S<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function p(v,S){const y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function _(){const v=new I,S=new I,y=new I,R=new I,A=new Ge,g=new Ge,L=new Ge;for(let T=0,M=0;T<s.length;T+=9,M+=6){v.set(s[T+0],s[T+1],s[T+2]),S.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),A.set(o[M+0],o[M+1]),g.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),R.copy(v).add(S).add(y).divideScalar(3);const D=m(R);x(A,M+0,v,D),x(g,M+2,S,D),x(L,M+4,y,D)}}function x(v,S,y,R){R<0&&v.x===1&&(o[S]=v.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.vertices,e.indices,e.radius,e.details)}}class Jc extends qs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jc(e.radius,e.detail)}}class Ar extends qs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ar(e.radius,e.detail)}}class Wn extends qs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wn(e.radius,e.detail)}}class vi extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,h=e/a,u=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<d;f++){const v=f*u-o;for(let S=0;S<l;S++){const y=S*h-s;_.push(y,-v,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const S=v+l*f,y=v+l*(f+1),R=v+1+l*(f+1),A=v+1+l*f;p.push(S,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rr extends Ft{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let h=e;const u=(t-e)/i,p=new I,_=new Ge;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}h+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const v=f+m,S=v,y=v+n+1,R=v+n+2,A=v+1;a.push(S,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vt extends Ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new I,u=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const v=[],S=f/n;let y=0;f===0&&o===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(A+y,1-S),v.push(l++)}d.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const S=d[f][v+1],y=d[f][v],R=d[f+1][v],A=d[f+1][v+1];(f!==0||o>0)&&p.push(S,y,A),(f!==n-1||c<Math.PI)&&p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends qs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fo(e.radius,e.detail)}}class qn extends Ft{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],d=new I,h=new I,u=new I;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,v=(i+1)*p+_;o.push(x,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qc extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends Qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lu extends gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hu extends gn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lp extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ao(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Np(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Up(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ql(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function du(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Op extends Cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cs:s=e,a=2*t-n;break;case To:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cs:o=e,c=2*n-t;break;case To:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),x=_*_,m=x*_,f=-u*m+2*u*x-u*_,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*_+1,S=(-1-p)*m+(1.5+p)*x+.5*_,y=p*m-p*x;for(let R=0;R!==a;++R)s[R]=f*o[d+R]+v*o[l+R]+S*o[c+R]+y*o[h+R];return s}}class uu extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)s[u]=o[l+u]*h+o[c+u]*d;return s}}class Fp extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Op(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Np(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,u=h-n,p=h+n;for(let _=0;_!==n;++_){const x=t[h+_];if(x!==t[u+_]||x!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Mr;class Xs extends Xn{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=yr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class fu extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}fu.prototype.ValueTypeName="color";class Gs extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}Gs.prototype.ValueTypeName="number";class kp extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let d=l+a;l!==d;l+=4)Gn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Vs extends Xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kp(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Xn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=yr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Xn{constructor(e,t,n,i){super(e,t,n,i)}}Ws.prototype.ValueTypeName="vector";class Tc{constructor(e="",t=-1,n=[],i=Wc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zp(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const d=Up(c);c=Ql(c,1,d),l=Ql(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Gs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],d=l.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,_,x){if(p.length!==0){const m=[],f=[];du(p,m,f,_),m.length!==0&&x.push(new h(u,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let _;for(_=0;_<u.length;_++)if(u[_].morphTargets)for(let x=0;x<u[_].morphTargets.length;x++)p[u[_].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let v=0;v!==u[_].morphTargets.length;++v){const S=u[_];m.push(S.time),f.push(S.morphTarget===x?1:0)}i.push(new Gs(".morphTargetInfluence["+x+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(Ws,p+".position",u,"pos",i),n(Vs,p+".quaternion",u,"rot",i),n(Ws,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return fu;case"quaternion":return Vs;case"bool":case"boolean":return Xs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bp(r.type);if(r.times===void 0){const t=[],n=[];du(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Li={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const pu=new Hp;class Fi{constructor(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class Gp extends Error{constructor(e,t){super(e),this.response=t}}class ko extends Fi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Li.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=hi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=u?parseInt(u):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:S,value:y})=>{if(S)f.close();else{x+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let A=0,g=d.length;A<g;A++){const L=d[A];L.onProgress&&L.onProgress(R)}f.enqueue(y),v()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Gp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Li.add(e,l);const d=hi[e];delete hi[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const d=hi[e];if(d===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vp extends Fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Li.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=br("img");function c(){d(),Li.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){d(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mu extends Fi{constructor(e){super(e)}load(e,t,n,i){const s=new $t,o=new Vp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ir extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wp extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pa=new Je,eh=new I,th=new I;class el{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qp extends el{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xp extends Ir{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nh=new Je,lr=new I,ma=new I;class jp extends el{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),ma.copy(n.position),ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ma),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}}class $p extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tl extends tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yp extends el{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kp extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ns{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ga=new WeakMap;class Zp extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Li.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(ga.has(o)===!0)i&&i(ga.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ga.set(c,l),Li.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Li.add(e,c),s.manager.itemStart(e)}}class Jp extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ih();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ih(){return performance.now()}class em{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Gn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Gn.multiplyQuaternionsFlat(e,o,e,t,e,n),Gn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const nl="\\[\\]\\.:\\/",tm=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",nm="[^"+nl.replace("\\.","")+"]",im=/((?:WC+[\/:])*)/.source.replace("WC",il),sm=/(WCOD+)?/.source.replace("WCOD",nm),rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),am=new RegExp("^"+im+sm+rm+om+"$"),cm=["material","materials","bones","map"];class lm{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){const t=am.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=lm;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Rs,endingEnd:Rs};for(let l=0;l!==o;++l){const d=s[l].createInterpolant(null);a[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Mf:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(o),l[d].accumulateAdditive(a);break;case Wc:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(o),l[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===yf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Vc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(e?i.endingStart=this.zeroSlopeAtStart?Cs:Rs:i.endingStart=To,t?i.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:i.endingEnd=To)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const dm=new Float32Array(1);class _u extends ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==s;++h){const u=i[h],p=u.name;let _=d[p];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,p));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;_=new em(At.create(n,p,x),u.ValueTypeName,u.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,p),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new uu(new Float32Array(2),new Float32Array(2),1,dm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Tc.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const d=new hm(this,o,t,n);return this._bindAction(d,l),this._addInactiveAction(d,a,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Tc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function sh(r,e,t,n){const i=um(n);switch(t){case Hd:return r*e;case No:return r*e/i.components*i.byteLength;case zc:return r*e/i.components*i.byteLength;case Vd:return r*e*2/i.components*i.byteLength;case Hc:return r*e*2/i.components*i.byteLength;case Gd:return r*e*3/i.components*i.byteLength;case Nn:return r*e*4/i.components*i.byteLength;case Gc:return r*e*4/i.components*i.byteLength;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Za:return Math.max(r,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(r,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Mo:case mc:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wd:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xc:case vc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(r){switch(r){case Qn:case kd:return{byteLength:1,components:1};case gr:case Bd:case Sr:return{byteLength:2,components:1};case kc:case Bc:return{byteLength:2,components:4};case ns:case Fc:case zn:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fm(r){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,h=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const d=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,d);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){const _=h[u],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];r.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,ug=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,O0=`#define PHONG
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
}`,F0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,X0=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:Mm,batching_pars_vertex:bm,batching_vertex:wm,begin_vertex:Sm,beginnormal_vertex:Tm,bsdfs:Em,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Om,common:Fm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:qm,envmap_fragment:Xm,envmap_common_pars_fragment:jm,envmap_pars_fragment:$m,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:og,envmap_vertex:Km,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:cg,lights_phong_fragment:lg,lights_phong_pars_fragment:hg,lights_physical_fragment:dg,lights_physical_pars_fragment:ug,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:bg,map_particle_pars_fragment:wg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Eg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Ig,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:qg,dithering_pars_fragment:Xg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:o0,transmission_fragment:a0,transmission_pars_fragment:c0,uv_pars_fragment:l0,uv_pars_vertex:h0,uv_vertex:d0,worldpos_vertex:u0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:x0,depth_vert:v0,depth_frag:y0,distanceRGBA_vert:M0,distanceRGBA_frag:b0,equirect_vert:w0,equirect_frag:S0,linedashed_vert:T0,linedashed_frag:E0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:I0,meshmatcap_vert:P0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:N0,meshphong_vert:U0,meshphong_frag:O0,meshphysical_vert:F0,meshphysical_frag:k0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:H0,points_frag:G0,shadow_vert:V0,shadow_frag:W0,sprite_vert:q0,sprite_frag:X0},ve={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Kn={basic:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ue(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:pn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:pn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ue(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:pn([ve.points,ve.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:pn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:pn([ve.common,ve.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:pn([ve.sprite,ve.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:pn([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:pn([ve.lights,ve.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Kn.physical={uniforms:pn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const co={r:0,b:0,g:0},Wi=new Vn,j0=new Je;function $0(r,e,t,n,i,s,o){const a=new ue(0);let c=s===!0?0:1,l,d,h=null,u=0,p=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function x(S){let y=!1;const R=_(S);R===null?f(a,c):R&&R.isColor&&(f(R,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const R=_(y);R&&(R.isCubeTexture||R.mapping===Do)?(d===void 0&&(d=new Y(new Yt(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Hs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,g,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Wi)),d.material.toneMapped=at.getTransfer(R.colorSpace)!==It,(h!==R||u!==R.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,h=R,u=R.version,p=r.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Y(new vi(2,2),new Oi({name:"BackgroundMaterial",uniforms:Hs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||u!==R.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,h=R,u=R.version,p=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,y){S.getRGB(co,eu(r)),n.buffers.color.setClear(co.r,co.g,co.b,y,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:x,addToRenderList:m,dispose:v}}function Y0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(M,D,G,H,J){let ie=!1;const Z=h(H,G,D);s!==Z&&(s=Z,l(s.object)),ie=p(M,H,G,J),ie&&_(M,H,G,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,y(M,D,G,H),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function d(M){return r.deleteVertexArray(M)}function h(M,D,G){const H=G.wireframe===!0;let J=n[M.id];J===void 0&&(J={},n[M.id]=J);let ie=J[D.id];ie===void 0&&(ie={},J[D.id]=ie);let Z=ie[H];return Z===void 0&&(Z=u(c()),ie[H]=Z),Z}function u(M){const D=[],G=[],H=[];for(let J=0;J<t;J++)D[J]=0,G[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,D,G,H){const J=s.attributes,ie=D.attributes;let Z=0;const ae=G.getAttributes();for(const j in ae)if(ae[j].location>=0){const Ae=J[j];let re=ie[j];if(re===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),Ae===void 0||Ae.attribute!==re||re&&Ae.data!==re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function _(M,D,G,H){const J={},ie=D.attributes;let Z=0;const ae=G.getAttributes();for(const j in ae)if(ae[j].location>=0){let Ae=ie[j];Ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor));const re={};re.attribute=Ae,Ae&&Ae.data&&(re.data=Ae.data),J[j]=re,Z++}s.attributes=J,s.attributesNum=Z,s.index=H}function x(){const M=s.newAttributes;for(let D=0,G=M.length;D<G;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const G=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;G[M]=1,H[M]===0&&(r.enableVertexAttribArray(M),H[M]=1),J[M]!==D&&(r.vertexAttribDivisor(M,D),J[M]=D)}function v(){const M=s.newAttributes,D=s.enabledAttributes;for(let G=0,H=D.length;G<H;G++)D[G]!==M[G]&&(r.disableVertexAttribArray(G),D[G]=0)}function S(M,D,G,H,J,ie,Z){Z===!0?r.vertexAttribIPointer(M,D,G,J,ie):r.vertexAttribPointer(M,D,G,H,J,ie)}function y(M,D,G,H){x();const J=H.attributes,ie=G.getAttributes(),Z=D.defaultAttributeValues;for(const ae in ie){const j=ie[ae];if(j.location>=0){let _e=J[ae];if(_e===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){const Ae=_e.normalized,re=_e.itemSize,Ee=e.get(_e);if(Ee===void 0)continue;const Rt=Ee.buffer,ne=Ee.type,fe=Ee.bytesPerElement,Ue=ne===r.INT||ne===r.UNSIGNED_INT||_e.gpuType===Fc;if(_e.isInterleavedBufferAttribute){const Me=_e.data,Oe=Me.stride,_t=_e.offset;if(Me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<j.locationSize;Ve++)f(j.location+Ve,Me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)m(j.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Ve=0;Ve<j.locationSize;Ve++)S(j.location+Ve,re/j.locationSize,ne,Ae,Oe*fe,(_t+re/j.locationSize*Ve)*fe,Ue)}else{if(_e.isInstancedBufferAttribute){for(let Me=0;Me<j.locationSize;Me++)f(j.location+Me,_e.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Me=0;Me<j.locationSize;Me++)m(j.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Me=0;Me<j.locationSize;Me++)S(j.location+Me,re/j.locationSize,ne,Ae,re*fe,re/j.locationSize*Me*fe,Ue)}}else if(Z!==void 0){const Ae=Z[ae];if(Ae!==void 0)switch(Ae.length){case 2:r.vertexAttrib2fv(j.location,Ae);break;case 3:r.vertexAttrib3fv(j.location,Ae);break;case 4:r.vertexAttrib4fv(j.location,Ae);break;default:r.vertexAttrib1fv(j.location,Ae)}}}}v()}function R(){L();for(const M in n){const D=n[M];for(const G in D){const H=D[G];for(const J in H)d(H[J].object),delete H[J];delete D[G]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const G in D){const H=D[G];for(const J in H)d(H[J].object),delete H[J];delete D[G]}delete n[M.id]}function g(M){for(const D in n){const G=n[D];if(G[M.id]===void 0)continue;const H=G[M.id];for(const J in H)d(H[J].object),delete H[J];delete G[M.id]}}function L(){T(),o=!0,s!==i&&(s=i,l(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function K0(r,e,t){let n;function i(l){n=l}function s(l,d){r.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,h){h!==0&&(r.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function a(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];t.update(p,n,1)}function c(l,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],d[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x]*u[x];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Z0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==Nn&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){const L=g===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Qn&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==zn&&!L)}function c(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function J0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new $i,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?d(null):l();else{const v=s?0:n,S=v*4;let y=f.clippingState||null;c.value=y,y=d(_,u,S,p);for(let R=0;R!==S;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=p;S!==x;++S,y+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Q0(r){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=Fs:a===ja&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===ja)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ps=4,rh=[.125,.215,.35,.446,.526,.582],Ji=20,_a=new tl,oh=new ue;let xa=null,va=0,ya=0,Ma=!1;const Yi=(1+Math.sqrt(5))/2,Es=1/Yi,ah=[new I(-Yi,Es,0),new I(Yi,Es,0),new I(-Es,0,Yi),new I(Es,0,Yi),new I(0,Yi,-Es),new I(0,Yi,Es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],e_=new I;class ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=e_}=s;xa=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,va,ya),this._renderer.xr.enabled=Ma,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Sr,format:Nn,colorSpace:_n,depthBuffer:!1},i=lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(s)),this._blurMaterial=n_(s,e,t)}return i}_compileMaterial(e){const t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,i,s){const c=new mn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(oh),h.toneMapping=Ni,h.autoClear=!1;const _=new Ot({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Y(new Yt,_);let m=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,m=!0):(_.color.copy(oh),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[v],s.y,s.z)):S===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[v]));const y=this._cubeSize;lo(i,S*y,v>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;lo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ah[(i-s-1)%ah.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Y(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),x=s/_,m=isFinite(s)?1+Math.floor(d*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const f=[];let v=0;for(let g=0;g<Ji;++g){const L=g/x,T=Math.exp(-L*L/2);f.push(T),g===0?v+=T:g<m&&(v+=2*T)}for(let g=0;g<f.length;g++)f[g]=f[g]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;const y=this._sizeLods[i],R=3*y*(i>S-Ps?i-S+Ps:0),A=4*(this._cubeSize-y);lo(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(h,_a)}}function t_(r){const e=[],t=[],n=[];let i=r;const s=r-Ps+1+rh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Ps?c=rh[o-r+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,x=3,m=2,f=1,v=new Float32Array(x*_*p),S=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let A=0;A<p;A++){const g=A%3*2/3-1,L=A>2?0:-1,T=[g,L,0,g+2/3,L,0,g+2/3,L+1,0,g,L,0,g+2/3,L+1,0,g,L+1,0];v.set(T,x*_*A),S.set(u,m*_*A);const M=[A,A,A,A,A,A];y.set(M,f*_*A)}const R=new Ft;R.setAttribute("position",new nn(v,x)),R.setAttribute("uv",new nn(S,m)),R.setAttribute("faceIndex",new nn(y,f)),e.push(R),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lh(r,e,t){const n=new is(r,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function n_(r,e,t){const n=new Float32Array(Ji),i=new I(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function i_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xa||c===ja,d=c===Fs||c===ks;if(l||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ch(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new ch(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r_(r,e,t,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const p in u)e.update(u[p],r.ARRAY_BUFFER)}function l(h){const u=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let S=0,y=v.length;S<y;S+=3){const R=v[S+0],A=v[S+1],g=v[S+2];u.push(R,A,A,g,g,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const R=S+0,A=S+1,g=S+2;u.push(R,A,A,g,g,R)}}else return;const m=new($d(u)?Qd:Jd)(u,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function o_(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,p){r.drawElements(n,p,s,u*o),t.update(p,n,1)}function l(u,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,u*o,_),t.update(p,n,_))}function d(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(u,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*x[v];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function a_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function c_(r,e,t){const n=new WeakMap,i=new St;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const g=new Float32Array(R*A*4*h),L=new Yd(g,R,A,h);L.type=zn,L.needsUpdate=!0;const T=y*4;for(let D=0;D<h;D++){const G=f[D],H=v[D],J=S[D],ie=R*A*4*D;for(let Z=0;Z<G.count;Z++){const ae=Z*T;_===!0&&(i.fromBufferAttribute(G,Z),g[ie+ae+0]=i.x,g[ie+ae+1]=i.y,g[ie+ae+2]=i.z,g[ie+ae+3]=0),x===!0&&(i.fromBufferAttribute(H,Z),g[ie+ae+4]=i.x,g[ie+ae+5]=i.y,g[ie+ae+6]=i.z,g[ie+ae+7]=0),m===!0&&(i.fromBufferAttribute(J,Z),g[ie+ae+8]=i.x,g[ie+ae+9]=i.y,g[ie+ae+10]=i.z,g[ie+ae+11]=J.itemSize===4?i.w:1)}}u={count:h,texture:L,size:new Ge(R,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function l_(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const vu=new $t,uh=new cu(1,1),yu=new Yd,Mu=new sp,bu=new nu,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function $s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fh[i];if(s===void 0&&(s=new Float32Array(i),fh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function h_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function d_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function f_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function p_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;_h.set(n),r.uniformMatrix2fv(this.addr,!1,_h),Zt(t,n)}}function m_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;gh.set(n),r.uniformMatrix3fv(this.addr,!1,gh),Zt(t,n)}}function g_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;mh.set(n),r.uniformMatrix4fv(this.addr,!1,mh),Zt(t,n)}}function __(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function M_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function S_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function T_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(uh.compareFunction=jd,s=uh):s=vu,t.setTexture2D(e||s,i)}function E_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mu,i)}function A_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bu,i)}function R_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yu,i)}function C_(r){switch(r){case 5126:return h_;case 35664:return d_;case 35665:return u_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return b_;case 36295:return w_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(r,e){r.uniform1fv(this.addr,e)}function P_(r,e){const t=$s(e,this.size,2);r.uniform2fv(this.addr,t)}function L_(r,e){const t=$s(e,this.size,3);r.uniform3fv(this.addr,t)}function D_(r,e){const t=$s(e,this.size,4);r.uniform4fv(this.addr,t)}function N_(r,e){const t=$s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function U_(r,e){const t=$s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function O_(r,e){const t=$s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function F_(r,e){r.uniform1iv(this.addr,e)}function k_(r,e){r.uniform2iv(this.addr,e)}function B_(r,e){r.uniform3iv(this.addr,e)}function z_(r,e){r.uniform4iv(this.addr,e)}function H_(r,e){r.uniform1uiv(this.addr,e)}function G_(r,e){r.uniform2uiv(this.addr,e)}function V_(r,e){r.uniform3uiv(this.addr,e)}function W_(r,e){r.uniform4uiv(this.addr,e)}function q_(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vu,s[o])}function X_(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mu,s[o])}function j_(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bu,s[o])}function $_(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yu,s[o])}function Y_(r){switch(r){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return $_}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class Z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function xh(r,e){r.seq.push(e),r.map[e.id]=e}function Q_(r,e,t){const n=r.name,i=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),o=ba.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xh(t,l===void 0?new K_(a,r,e):new Z_(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new J_(a),xh(t,h)),t=h}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Q_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ex=37297;let tx=0;function nx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yh=new et;function ix(r){at._getMatrix(yh,at.workingColorSpace,r);const e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case Eo:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+nx(r.getShaderSource(e),o)}else return i}function sx(r,e){const t=ix(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rx(r,e){let t;switch(e){case uf:t="Linear";break;case ff:t="Reinhard";break;case pf:t="Cineon";break;case mf:t="ACESFilmic";break;case _f:t="AgX";break;case xf:t="Neutral";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new I;function ox(){at.getLuminanceCoefficients(ho);const r=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function cx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ur(r){return r!==""}function bh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(r){return r.replace(hx,ux)}const dx=new Map;function ux(r,e){let t=st[e];if(t===void 0){const n=dx.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(r){return r.replace(fx,px)}function px(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Th(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function gx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function xx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case hf:e="ENVMAP_BLENDING_MIX";break;case df:e="ENVMAP_BLENDING_ADD";break}return e}function vx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mx(t),l=gx(t),d=_x(t),h=xx(t),u=vx(t),p=ax(t),_=cx(s),x=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?st.tonemapping_pars_fragment:"",t.toneMapping!==Ni?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Ec(o),o=bh(o,t),o=wh(o,t),a=Ec(a),a=bh(a,t),a=wh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+m+o,y=v+f+a,R=vh(i,i.VERTEX_SHADER,S),A=vh(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function g(D){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),H=i.getShaderInfoLog(R).trim(),J=i.getShaderInfoLog(A).trim();let ie=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,A);else{const ae=Mh(i,R,"vertex"),j=Mh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ae+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||J==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ie,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:f}})}i.deleteShader(R),i.deleteShader(A),L=new wo(i,x),T=lx(i,x)}let L;this.getUniforms=function(){return L===void 0&&g(this),L};let T;this.getAttributes=function(){return T===void 0&&g(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,ex)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Mx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wx(e),t.set(e,n)),n}}class wx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function Sx(r,e,t,n,i,s,o){const a=new Kd,c=new bx,l=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,G,H){const J=G.fog,ie=H.geometry,Z=T.isMeshStandardMaterial?G.environment:null,ae=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),j=ae&&ae.mapping===Do?ae.image.height:null,_e=_[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Ae=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,re=Ae!==void 0?Ae.length:0;let Ee=0;ie.morphAttributes.position!==void 0&&(Ee=1),ie.morphAttributes.normal!==void 0&&(Ee=2),ie.morphAttributes.color!==void 0&&(Ee=3);let Rt,ne,fe,Ue;if(_e){const bt=Kn[_e];Rt=bt.vertexShader,ne=bt.fragmentShader}else Rt=T.vertexShader,ne=T.fragmentShader,c.update(T),fe=c.getVertexShaderID(T),Ue=c.getFragmentShaderID(T);const Me=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),_t=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,Dt=!!T.map,vt=!!T.matcap,ot=!!ae,U=!!T.aoMap,Wt=!!T.lightMap,pt=!!T.bumpMap,gt=!!T.normalMap,Re=!!T.displacementMap,mt=!!T.emissiveMap,ze=!!T.metalnessMap,Ze=!!T.roughnessMap,kt=T.anisotropy>0,P=T.clearcoat>0,b=T.dispersion>0,V=T.iridescence>0,ee=T.sheen>0,oe=T.transmission>0,K=kt&&!!T.anisotropyMap,Te=P&&!!T.clearcoatMap,pe=P&&!!T.clearcoatNormalMap,Le=P&&!!T.clearcoatRoughnessMap,z=V&&!!T.iridescenceMap,$=V&&!!T.iridescenceThicknessMap,be=ee&&!!T.sheenColorMap,Be=ee&&!!T.sheenRoughnessMap,te=!!T.specularMap,me=!!T.specularColorMap,Xe=!!T.specularIntensityMap,O=oe&&!!T.transmissionMap,xe=oe&&!!T.thicknessMap,he=!!T.gradientMap,Ie=!!T.alphaMap,ce=T.alphaTest>0,se=!!T.alphaHash,we=!!T.extensions;let He=Ni;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(He=r.toneMapping);const Tt={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:ne,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:Ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:_t,instancingColor:_t&&H.instanceColor!==null,instancingMorph:_t&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:_n,alphaToCoverage:!!T.alphaToCoverage,map:Dt,matcap:vt,envMap:ot,envMapMode:ot&&ae.mapping,envMapCubeUVHeight:j,aoMap:U,lightMap:Wt,bumpMap:pt,normalMap:gt,displacementMap:u&&Re,emissiveMap:mt,normalMapObjectSpace:gt&&T.normalMapType===Tf,normalMapTangentSpace:gt&&T.normalMapType===Uo,metalnessMap:ze,roughnessMap:Ze,anisotropy:kt,anisotropyMap:K,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:b,iridescence:V,iridescenceMap:z,iridescenceThicknessMap:$,sheen:ee,sheenColorMap:be,sheenRoughnessMap:Be,specularMap:te,specularColorMap:me,specularIntensityMap:Xe,transmission:oe,transmissionMap:O,thicknessMap:xe,gradientMap:he,opaque:T.transparent===!1&&T.blending===es&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ce,alphaHash:se,combine:T.combine,mapUv:Dt&&x(T.map.channel),aoMapUv:U&&x(T.aoMap.channel),lightMapUv:Wt&&x(T.lightMap.channel),bumpMapUv:pt&&x(T.bumpMap.channel),normalMapUv:gt&&x(T.normalMap.channel),displacementMapUv:Re&&x(T.displacementMap.channel),emissiveMapUv:mt&&x(T.emissiveMap.channel),metalnessMapUv:ze&&x(T.metalnessMap.channel),roughnessMapUv:Ze&&x(T.roughnessMap.channel),anisotropyMapUv:K&&x(T.anisotropyMap.channel),clearcoatMapUv:Te&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(T.sheenRoughnessMap.channel),specularMapUv:te&&x(T.specularMap.channel),specularColorMapUv:me&&x(T.specularColorMap.channel),specularIntensityMapUv:Xe&&x(T.specularIntensityMap.channel),transmissionMapUv:O&&x(T.transmissionMap.channel),thicknessMapUv:xe&&x(T.thicknessMap.channel),alphaMapUv:Ie&&x(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(gt||kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ie.attributes.uv&&(Dt||Ie),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Dt&&T.map.isVideoTexture===!0&&at.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:mt&&T.emissiveMap.isVideoTexture===!0&&at.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jt,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(M,T),S(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function v(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function S(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=_[T.type];let D;if(M){const G=Kn[M];D=_p.clone(G.uniforms)}else D=T.uniforms;return D}function R(T,M){let D;for(let G=0,H=d.length;G<H;G++){const J=d[G];if(J.cacheKey===M){D=J,++D.usedTimes;break}}return D===void 0&&(D=new yx(r,M,T,s),d.push(D)),D}function A(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function g(T){c.remove(T)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:g,programs:d,dispose:L}}function Tx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ex(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Eh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ah(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,p,_,x,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,u,p,_,x,m){const f=o(h,u,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,u,p,_,x,m){const f=o(h,u,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||Ex),n.length>1&&n.sort(u||Eh),i.length>1&&i.sort(u||Eh)}function d(){for(let h=e,u=r.length;h<u;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:d,sort:l}}function Ax(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ah,r.set(n,[o])):i>=s.length?(o=new Ah,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ue};break;case"SpotLight":t={position:new I,direction:new I,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Cx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ix=0;function Px(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Lx(r){const e=new Rx,t=Cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new Je,o=new Je;function a(l){let d=0,h=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,v=0,S=0,y=0,R=0,A=0,g=0;l.sort(Px);for(let T=0,M=l.length;T<M;T++){const D=l[T],G=D.color,H=D.intensity,J=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=G.r*H,h+=G.g*H,u+=G.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],H);g++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ae=D.shadow,j=t.get(D);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=Z,p++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(G).multiplyScalar(H),Z.distance=J,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[x]=Z;const ae=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,ae.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=ae.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=ie,y++}x++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(G).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ae=D.shadow,j=t.get(D);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,j.shadowCameraNear=ae.camera.near,j.shadowCameraFar=ae.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=D.shadow.matrix,S++}n.point[_]=Z,_++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[f]=Z,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==g)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=g,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=g,n.version=Ix++)}function c(l,d){let h=0,u=0,p=0,_=0,x=0;const m=d.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Rh(r){const e=new Lx(r),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Dx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Rh(r),e.set(i,[a])):s>=o.length?(a=new Rh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Ox(r,e,t){let n=new Kc;const i=new Ge,s=new Ge,o=new St,a=new Lp({depthPacking:Sf}),c=new Dp,l={},d=t.maxTextureSize,h={[Jn]:ln,[ln]:Jn,[jt]:jt},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Y(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let f=this.type;this.render=function(A,g,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Di),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=f!==ui&&this.type===ui,J=f===ui&&this.type!==ui;for(let ie=0,Z=A.length;ie<Z;ie++){const ae=A[ie],j=ae.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const _e=j.getFrameExtents();if(i.multiply(_e),s.copy(j.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/_e.x),i.x=s.x*_e.x,j.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/_e.y),i.y=s.y*_e.y,j.mapSize.y=s.y)),j.map===null||H===!0||J===!0){const re=this.type!==ui?{minFilter:tn,magFilter:tn}:{};j.map!==null&&j.map.dispose(),j.map=new is(i.x,i.y,re),j.map.texture.name=ae.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Ae=j.getViewportCount();for(let re=0;re<Ae;re++){const Ee=j.getViewport(re);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(o),j.updateMatrices(ae,re),n=j.getFrustum(),y(g,L,j.camera,ae,this.type)}j.isPointLightShadow!==!0&&this.type===ui&&v(j,L),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(T,M,D)};function v(A,g){const L=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new is(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(g,null,L,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(g,null,L,p,x,null)}function S(A,g,L,T){let M=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?c:a,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=M.uuid,H=g.uuid;let J=l[G];J===void 0&&(J={},l[G]=J);let ie=J[H];ie===void 0&&(ie=M.clone(),J[H]=ie,g.addEventListener("dispose",R)),M=ie}if(M.visible=g.visible,M.wireframe=g.wireframe,T===ui?M.side=g.shadowSide!==null?g.shadowSide:g.side:M.side=g.shadowSide!==null?g.shadowSide:h[g.side],M.alphaMap=g.alphaMap,M.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,M.map=g.map,M.clipShadows=g.clipShadows,M.clippingPlanes=g.clippingPlanes,M.clipIntersection=g.clipIntersection,M.displacementMap=g.displacementMap,M.displacementScale=g.displacementScale,M.displacementBias=g.displacementBias,M.wireframeLinewidth=g.wireframeLinewidth,M.linewidth=g.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=r.properties.get(M);G.light=L}return M}function y(A,g,L,T,M){if(A.visible===!1)return;if(A.layers.test(g.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ui)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),J=A.material;if(Array.isArray(J)){const ie=H.groups;for(let Z=0,ae=ie.length;Z<ae;Z++){const j=ie[Z],_e=J[j.materialIndex];if(_e&&_e.visible){const Ae=S(A,_e,T,M);A.onBeforeShadow(r,A,g,L,H,Ae,j),r.renderBufferDirect(L,null,H,Ae,A,j),A.onAfterShadow(r,A,g,L,H,Ae,j)}}}else if(J.visible){const ie=S(A,J,T,M);A.onBeforeShadow(r,A,g,L,H,ie,null),r.renderBufferDirect(L,null,H,ie,A,null),A.onAfterShadow(r,A,g,L,H,ie,null)}}const G=A.children;for(let H=0,J=G.length;H<J;H++)y(G[H],g,L,T,M)}function R(A){A.target.removeEventListener("dispose",R);for(const L in l){const T=l[L],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Fx={[Ba]:za,[Ha]:Wa,[Ga]:qa,[Os]:Va,[za]:Ba,[Wa]:Ha,[qa]:Ga,[Va]:Os};function kx(r,e){function t(){let O=!1;const xe=new St;let he=null;const Ie=new St(0,0,0,0);return{setMask:function(ce){he!==ce&&!O&&(r.colorMask(ce,ce,ce,ce),he=ce)},setLocked:function(ce){O=ce},setClear:function(ce,se,we,He,Tt){Tt===!0&&(ce*=He,se*=He,we*=He),xe.set(ce,se,we,He),Ie.equals(xe)===!1&&(r.clearColor(ce,se,we,He),Ie.copy(xe))},reset:function(){O=!1,he=null,Ie.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,he=null,Ie=null,ce=null;return{setReversed:function(se){if(xe!==se){const we=e.get("EXT_clip_control");se?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),xe=se;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(se){se?Me(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(se){he!==se&&!O&&(r.depthMask(se),he=se)},setFunc:function(se){if(xe&&(se=Fx[se]),Ie!==se){switch(se){case Ba:r.depthFunc(r.NEVER);break;case za:r.depthFunc(r.ALWAYS);break;case Ha:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case Ga:r.depthFunc(r.EQUAL);break;case Va:r.depthFunc(r.GEQUAL);break;case Wa:r.depthFunc(r.GREATER);break;case qa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=se}},setLocked:function(se){O=se},setClear:function(se){ce!==se&&(xe&&(se=1-se),r.clearDepth(se),ce=se)},reset:function(){O=!1,he=null,Ie=null,ce=null,xe=!1}}}function i(){let O=!1,xe=null,he=null,Ie=null,ce=null,se=null,we=null,He=null,Tt=null;return{setTest:function(bt){O||(bt?Me(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(bt){xe!==bt&&!O&&(r.stencilMask(bt),xe=bt)},setFunc:function(bt,le,En){(he!==bt||Ie!==le||ce!==En)&&(r.stencilFunc(bt,le,En),he=bt,Ie=le,ce=En)},setOp:function(bt,le,En){(se!==bt||we!==le||He!==En)&&(r.stencilOp(bt,le,En),se=bt,we=le,He=En)},setLocked:function(bt){O=bt},setClear:function(bt){Tt!==bt&&(r.clearStencil(bt),Tt=bt)},reset:function(){O=!1,xe=null,he=null,Ie=null,ce=null,se=null,we=null,He=null,Tt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,p=[],_=null,x=!1,m=null,f=null,v=null,S=null,y=null,R=null,A=null,g=new ue(0,0,0),L=0,T=!1,M=null,D=null,G=null,H=null,J=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ae=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=ae>=1):j.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=ae>=2);let _e=null,Ae={};const re=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Rt=new St().fromArray(re),ne=new St().fromArray(Ee);function fe(O,xe,he,Ie){const ce=new Uint8Array(4),se=r.createTexture();r.bindTexture(O,se),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<he;we++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(xe+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return se}const Ue={};Ue[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(r.DEPTH_TEST),o.setFunc(Os),pt(!1),gt(fl),Me(r.CULL_FACE),U(Di);function Me(O){d[O]!==!0&&(r.enable(O),d[O]=!0)}function Oe(O){d[O]!==!1&&(r.disable(O),d[O]=!1)}function _t(O,xe){return h[O]!==xe?(r.bindFramebuffer(O,xe),h[O]=xe,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xe),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ve(O,xe){let he=p,Ie=!1;if(O){he=u.get(xe),he===void 0&&(he=[],u.set(xe,he));const ce=O.textures;if(he.length!==ce.length||he[0]!==r.COLOR_ATTACHMENT0){for(let se=0,we=ce.length;se<we;se++)he[se]=r.COLOR_ATTACHMENT0+se;he.length=ce.length,Ie=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(he)}function Dt(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const vt={[Zi]:r.FUNC_ADD,[Xu]:r.FUNC_SUBTRACT,[ju]:r.FUNC_REVERSE_SUBTRACT};vt[$u]=r.MIN,vt[Yu]=r.MAX;const ot={[Ku]:r.ZERO,[Zu]:r.ONE,[Ju]:r.SRC_COLOR,[Fa]:r.SRC_ALPHA,[rf]:r.SRC_ALPHA_SATURATE,[nf]:r.DST_COLOR,[ef]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[ka]:r.ONE_MINUS_SRC_ALPHA,[sf]:r.ONE_MINUS_DST_COLOR,[tf]:r.ONE_MINUS_DST_ALPHA,[of]:r.CONSTANT_COLOR,[af]:r.ONE_MINUS_CONSTANT_COLOR,[cf]:r.CONSTANT_ALPHA,[lf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(O,xe,he,Ie,ce,se,we,He,Tt,bt){if(O===Di){x===!0&&(Oe(r.BLEND),x=!1);return}if(x===!1&&(Me(r.BLEND),x=!0),O!==qu){if(O!==m||bt!==T){if((f!==Zi||y!==Zi)&&(r.blendEquation(r.FUNC_ADD),f=Zi,y=Zi),bt)switch(O){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFunc(r.ONE,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ml:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ml:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,S=null,R=null,A=null,g.set(0,0,0),L=0,m=O,T=bt}return}ce=ce||xe,se=se||he,we=we||Ie,(xe!==f||ce!==y)&&(r.blendEquationSeparate(vt[xe],vt[ce]),f=xe,y=ce),(he!==v||Ie!==S||se!==R||we!==A)&&(r.blendFuncSeparate(ot[he],ot[Ie],ot[se],ot[we]),v=he,S=Ie,R=se,A=we),(He.equals(g)===!1||Tt!==L)&&(r.blendColor(He.r,He.g,He.b,Tt),g.copy(He),L=Tt),m=O,T=!1}function Wt(O,xe){O.side===jt?Oe(r.CULL_FACE):Me(r.CULL_FACE);let he=O.side===ln;xe&&(he=!he),pt(he),O.blending===es&&O.transparent===!1?U(Di):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),mt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){M!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),M=O)}function gt(O){O!==Vu?(Me(r.CULL_FACE),O!==D&&(O===fl?r.cullFace(r.BACK):O===Wu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),D=O}function Re(O){O!==G&&(Z&&r.lineWidth(O),G=O)}function mt(O,xe,he){O?(Me(r.POLYGON_OFFSET_FILL),(H!==xe||J!==he)&&(r.polygonOffset(xe,he),H=xe,J=he)):Oe(r.POLYGON_OFFSET_FILL)}function ze(O){O?Me(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function Ze(O){O===void 0&&(O=r.TEXTURE0+ie-1),_e!==O&&(r.activeTexture(O),_e=O)}function kt(O,xe,he){he===void 0&&(_e===null?he=r.TEXTURE0+ie-1:he=_e);let Ie=Ae[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},Ae[he]=Ie),(Ie.type!==O||Ie.texture!==xe)&&(_e!==he&&(r.activeTexture(he),_e=he),r.bindTexture(O,xe||Ue[O]),Ie.type=O,Ie.texture=xe)}function P(){const O=Ae[_e];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){Rt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Rt.copy(O))}function Be(O){ne.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function te(O,xe){let he=l.get(xe);he===void 0&&(he=new WeakMap,l.set(xe,he));let Ie=he.get(O);Ie===void 0&&(Ie=r.getUniformBlockIndex(xe,O.name),he.set(O,Ie))}function me(O,xe){const Ie=l.get(xe).get(O);c.get(xe)!==Ie&&(r.uniformBlockBinding(xe,Ie,O.__bindingPointIndex),c.set(xe,Ie))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},_e=null,Ae={},h={},u=new WeakMap,p=[],_=null,x=!1,m=null,f=null,v=null,S=null,y=null,R=null,A=null,g=new ue(0,0,0),L=0,T=!1,M=null,D=null,G=null,H=null,J=null,Rt.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Me,disable:Oe,bindFramebuffer:_t,drawBuffers:Ve,useProgram:Dt,setBlending:U,setMaterial:Wt,setFlipSided:pt,setCullFace:gt,setLineWidth:Re,setPolygonOffset:mt,setScissorTest:ze,activeTexture:Ze,bindTexture:kt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:z,texImage3D:$,updateUBOMapping:te,uniformBlockBinding:me,texStorage2D:pe,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:K,compressedTexSubImage3D:Te,scissor:be,viewport:Be,reset:Xe}}function Bx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return p?new OffscreenCanvas(P,b):br("canvas")}function x(P,b,V){let ee=1;const oe=kt(P);if((oe.width>V||oe.height>V)&&(ee=V/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(ee*oe.width),Te=Math.floor(ee*oe.height);h===void 0&&(h=_(K,Te));const pe=b?_(K,Te):h;return pe.width=K,pe.height=Te,pe.getContext("2d").drawImage(P,0,0,K,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+K+"x"+Te+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,b,V,ee,oe=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=b;if(b===r.RED&&(V===r.FLOAT&&(K=r.R32F),V===r.HALF_FLOAT&&(K=r.R16F),V===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.R8UI),V===r.UNSIGNED_SHORT&&(K=r.R16UI),V===r.UNSIGNED_INT&&(K=r.R32UI),V===r.BYTE&&(K=r.R8I),V===r.SHORT&&(K=r.R16I),V===r.INT&&(K=r.R32I)),b===r.RG&&(V===r.FLOAT&&(K=r.RG32F),V===r.HALF_FLOAT&&(K=r.RG16F),V===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RG8UI),V===r.UNSIGNED_SHORT&&(K=r.RG16UI),V===r.UNSIGNED_INT&&(K=r.RG32UI),V===r.BYTE&&(K=r.RG8I),V===r.SHORT&&(K=r.RG16I),V===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGB8UI),V===r.UNSIGNED_SHORT&&(K=r.RGB16UI),V===r.UNSIGNED_INT&&(K=r.RGB32UI),V===r.BYTE&&(K=r.RGB8I),V===r.SHORT&&(K=r.RGB16I),V===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),V===r.UNSIGNED_INT&&(K=r.RGBA32UI),V===r.BYTE&&(K=r.RGBA8I),V===r.SHORT&&(K=r.RGBA16I),V===r.INT&&(K=r.RGBA32I)),b===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){const Te=oe?Eo:at.getTransfer(ee);V===r.FLOAT&&(K=r.RGBA32F),V===r.HALF_FLOAT&&(K=r.RGBA16F),V===r.UNSIGNED_BYTE&&(K=Te===It?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(P,b){let V;return P?b===null||b===ns||b===_r?V=r.DEPTH24_STENCIL8:b===zn?V=r.DEPTH32F_STENCIL8:b===gr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ns||b===_r?V=r.DEPTH_COMPONENT24:b===zn?V=r.DEPTH_COMPONENT32F:b===gr&&(V=r.DEPTH_COMPONENT16),V}function R(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==Sn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){const b=P.target;b.removeEventListener("dispose",A),L(b),b.isVideoTexture&&d.delete(b)}function g(P){const b=P.target;b.removeEventListener("dispose",g),M(b)}function L(P){const b=n.get(P);if(b.__webglInit===void 0)return;const V=P.source,ee=u.get(V);if(ee){const oe=ee[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(P),Object.keys(ee).length===0&&u.delete(V)}n.remove(P)}function T(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const V=P.source,ee=u.get(V);delete ee[b.__cacheKey],o.memory.textures--}function M(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let oe=0;oe<b.__webglFramebuffer[ee].length;oe++)r.deleteFramebuffer(b.__webglFramebuffer[ee][oe]);else r.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[ee]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=P.textures;for(let ee=0,oe=V.length;ee<oe;ee++){const K=n.get(V[ee]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[ee])}n.remove(P)}let D=0;function G(){D=0}function H(){const P=D;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function J(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ie(P,b){const V=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(V,P,b);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function Z(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function ae(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,b);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function j(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Me(V,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}const _e={[ts]:r.REPEAT,[Pi]:r.CLAMP_TO_EDGE,[So]:r.MIRRORED_REPEAT},Ae={[tn]:r.NEAREST,[Fd]:r.NEAREST_MIPMAP_NEAREST,[dr]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[go]:r.LINEAR_MIPMAP_NEAREST,[mi]:r.LINEAR_MIPMAP_LINEAR},re={[Ef]:r.NEVER,[Lf]:r.ALWAYS,[Af]:r.LESS,[jd]:r.LEQUAL,[Rf]:r.EQUAL,[Pf]:r.GEQUAL,[Cf]:r.GREATER,[If]:r.NOTEQUAL};function Ee(P,b){if(b.type===zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Sn||b.magFilter===go||b.magFilter===dr||b.magFilter===mi||b.minFilter===Sn||b.minFilter===go||b.minFilter===dr||b.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,_e[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,_e[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,_e[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ae[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==dr&&b.minFilter!==mi||b.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(P,b){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));const ee=b.source;let oe=u.get(ee);oe===void 0&&(oe={},u.set(ee,oe));const K=J(b);if(K!==P.__cacheKey){oe[K]===void 0&&(oe[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),oe[K].usedTimes++;const Te=oe[P.__cacheKey];Te!==void 0&&(oe[P.__cacheKey].usedTimes--,Te.usedTimes===0&&T(b)),P.__cacheKey=K,P.__webglTexture=oe[K].texture}return V}function ne(P,b,V){return Math.floor(Math.floor(P/V)/b)}function fe(P,b,V,ee){const K=P.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,V,ee,b.data);else{K.sort(($,be)=>$.start-be.start);let Te=0;for(let $=1;$<K.length;$++){const be=K[Te],Be=K[$],te=be.start+be.count,me=ne(Be.start,b.width,4),Xe=ne(be.start,b.width,4);Be.start<=te+1&&me===Xe&&ne(Be.start+Be.count-1,b.width,4)===me?be.count=Math.max(be.count,Be.start+Be.count-be.start):(++Te,K[Te]=Be)}K.length=Te+1;const pe=r.getParameter(r.UNPACK_ROW_LENGTH),Le=r.getParameter(r.UNPACK_SKIP_PIXELS),z=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let $=0,be=K.length;$<be;$++){const Be=K[$],te=Math.floor(Be.start/4),me=Math.ceil(Be.count/4),Xe=te%b.width,O=Math.floor(te/b.width),xe=me,he=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Xe,O,xe,he,V,ee,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,pe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,z)}}function Ue(P,b,V){let ee=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=r.TEXTURE_3D);const oe=Rt(P,b),K=b.source;t.bindTexture(ee,P.__webglTexture,r.TEXTURE0+V);const Te=n.get(K);if(K.version!==Te.__version||oe===!0){t.activeTexture(r.TEXTURE0+V);const pe=at.getPrimaries(at.workingColorSpace),Le=b.colorSpace===Ii?null:at.getPrimaries(b.colorSpace),z=b.colorSpace===Ii||pe===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let $=x(b.image,!1,i.maxTextureSize);$=Ze(b,$);const be=s.convert(b.format,b.colorSpace),Be=s.convert(b.type);let te=S(b.internalFormat,be,Be,b.colorSpace,b.isVideoTexture);Ee(ee,b);let me;const Xe=b.mipmaps,O=b.isVideoTexture!==!0,xe=Te.__version===void 0||oe===!0,he=K.dataReady,Ie=R(b,$);if(b.isDepthTexture)te=y(b.format===vr,b.type),xe&&(O?t.texStorage2D(r.TEXTURE_2D,1,te,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,te,$.width,$.height,0,be,Be,null));else if(b.isDataTexture)if(Xe.length>0){O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,te,Xe[0].width,Xe[0].height);for(let ce=0,se=Xe.length;ce<se;ce++)me=Xe[ce],O?he&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,me.width,me.height,be,Be,me.data):t.texImage2D(r.TEXTURE_2D,ce,te,me.width,me.height,0,be,Be,me.data);b.generateMipmaps=!1}else O?(xe&&t.texStorage2D(r.TEXTURE_2D,Ie,te,$.width,$.height),he&&fe(b,$,be,Be)):t.texImage2D(r.TEXTURE_2D,0,te,$.width,$.height,0,be,Be,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,te,Xe[0].width,Xe[0].height,$.depth);for(let ce=0,se=Xe.length;ce<se;ce++)if(me=Xe[ce],b.format!==Nn)if(be!==null)if(O){if(he)if(b.layerUpdates.size>0){const we=sh(me.width,me.height,b.format,b.type);for(const He of b.layerUpdates){const Tt=me.data.subarray(He*we/me.data.BYTES_PER_ELEMENT,(He+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,He,me.width,me.height,1,be,Tt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,me.width,me.height,$.depth,be,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,te,me.width,me.height,$.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?he&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,me.width,me.height,$.depth,be,Be,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,te,me.width,me.height,$.depth,0,be,Be,me.data)}else{O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,te,Xe[0].width,Xe[0].height);for(let ce=0,se=Xe.length;ce<se;ce++)me=Xe[ce],b.format!==Nn?be!==null?O?he&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?he&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,me.width,me.height,be,Be,me.data):t.texImage2D(r.TEXTURE_2D,ce,te,me.width,me.height,0,be,Be,me.data)}else if(b.isDataArrayTexture)if(O){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,te,$.width,$.height,$.depth),he)if(b.layerUpdates.size>0){const ce=sh($.width,$.height,b.format,b.type);for(const se of b.layerUpdates){const we=$.data.subarray(se*ce/$.data.BYTES_PER_ELEMENT,(se+1)*ce/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,$.width,$.height,1,be,Be,we)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,be,Be,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,te,$.width,$.height,$.depth,0,be,Be,$.data);else if(b.isData3DTexture)O?(xe&&t.texStorage3D(r.TEXTURE_3D,Ie,te,$.width,$.height,$.depth),he&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,be,Be,$.data)):t.texImage3D(r.TEXTURE_3D,0,te,$.width,$.height,$.depth,0,be,Be,$.data);else if(b.isFramebufferTexture){if(xe)if(O)t.texStorage2D(r.TEXTURE_2D,Ie,te,$.width,$.height);else{let ce=$.width,se=$.height;for(let we=0;we<Ie;we++)t.texImage2D(r.TEXTURE_2D,we,te,ce,se,0,be,Be,null),ce>>=1,se>>=1}}else if(Xe.length>0){if(O&&xe){const ce=kt(Xe[0]);t.texStorage2D(r.TEXTURE_2D,Ie,te,ce.width,ce.height)}for(let ce=0,se=Xe.length;ce<se;ce++)me=Xe[ce],O?he&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,be,Be,me):t.texImage2D(r.TEXTURE_2D,ce,te,be,Be,me);b.generateMipmaps=!1}else if(O){if(xe){const ce=kt($);t.texStorage2D(r.TEXTURE_2D,Ie,te,ce.width,ce.height)}he&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Be,$)}else t.texImage2D(r.TEXTURE_2D,0,te,be,Be,$);m(b)&&f(ee),Te.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Me(P,b,V){if(b.image.length!==6)return;const ee=Rt(P,b),oe=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const K=n.get(oe);if(oe.version!==K.__version||ee===!0){t.activeTexture(r.TEXTURE0+V);const Te=at.getPrimaries(at.workingColorSpace),pe=b.colorSpace===Ii?null:at.getPrimaries(b.colorSpace),Le=b.colorSpace===Ii||Te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const z=b.isCompressedTexture||b.image[0].isCompressedTexture,$=b.image[0]&&b.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!z&&!$?be[se]=x(b.image[se],!0,i.maxCubemapSize):be[se]=$?b.image[se].image:b.image[se],be[se]=Ze(b,be[se]);const Be=be[0],te=s.convert(b.format,b.colorSpace),me=s.convert(b.type),Xe=S(b.internalFormat,te,me,b.colorSpace),O=b.isVideoTexture!==!0,xe=K.__version===void 0||ee===!0,he=oe.dataReady;let Ie=R(b,Be);Ee(r.TEXTURE_CUBE_MAP,b);let ce;if(z){O&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Xe,Be.width,Be.height);for(let se=0;se<6;se++){ce=be[se].mipmaps;for(let we=0;we<ce.length;we++){const He=ce[we];b.format!==Nn?te!==null?O?he&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,He.width,He.height,te,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,He.width,He.height,te,me,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,Xe,He.width,He.height,0,te,me,He.data)}}}else{if(ce=b.mipmaps,O&&xe){ce.length>0&&Ie++;const se=kt(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Xe,se.width,se.height)}for(let se=0;se<6;se++)if($){O?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,te,me,be[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,be[se].width,be[se].height,0,te,me,be[se].data);for(let we=0;we<ce.length;we++){const Tt=ce[we].image[se].image;O?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Tt.width,Tt.height,te,me,Tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,Xe,Tt.width,Tt.height,0,te,me,Tt.data)}}else{O?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,te,me,be[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,te,me,be[se]);for(let we=0;we<ce.length;we++){const He=ce[we];O?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,te,me,He.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,Xe,te,me,He.image[se])}}}m(b)&&f(r.TEXTURE_CUBE_MAP),K.__version=oe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Oe(P,b,V,ee,oe,K){const Te=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),Le=S(V.internalFormat,Te,pe,V.colorSpace),z=n.get(b),$=n.get(V);if($.__renderTarget=b,!z.__hasExternalTextures){const be=Math.max(1,b.width>>K),Be=Math.max(1,b.height>>K);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,K,Le,be,Be,b.depth,0,Te,pe,null):t.texImage2D(oe,K,Le,be,Be,0,Te,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),mt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,oe,$.__webglTexture,0,Re(b)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,oe,$.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(P,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const ee=b.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,K=y(b.stencilBuffer,oe),Te=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=Re(b);mt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,K,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,P)}else{const ee=b.textures;for(let oe=0;oe<ee.length;oe++){const K=ee[oe],Te=s.convert(K.format,K.colorSpace),pe=s.convert(K.type),Le=S(K.internalFormat,Te,pe,K.colorSpace),z=Re(b);V&&mt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,z,Le,b.width,b.height):mt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,Le,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Le,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const oe=ee.__webglTexture,K=Re(b);if(b.depthTexture.format===xr)mt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(b.depthTexture.format===vr)mt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Dt(P){const b=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const ee=P.texture.mipmaps;ee&&ee.length>0?Ve(b.__webglFramebuffer[0],P):Ve(b.__webglFramebuffer,P)}else if(V){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=r.createRenderbuffer(),_t(b.__webglDepthbuffer[ee],P,!1);else{const oe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,K)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),_t(b.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(P,b,V){const ee=n.get(P);b!==void 0&&Oe(ee.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Dt(P)}function ot(P){const b=P.texture,V=n.get(P),ee=n.get(b);P.addEventListener("dispose",g);const oe=P.textures,K=P.isWebGLCubeRenderTarget===!0,Te=oe.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let Le=0;Le<b.mipmaps.length;Le++)V.__webglFramebuffer[pe][Le]=r.createFramebuffer()}else V.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)V.__webglFramebuffer[pe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Te)for(let pe=0,Le=oe.length;pe<Le;pe++){const z=n.get(oe[pe]);z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&mt(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const Le=oe[pe];V.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const z=s.convert(Le.format,Le.colorSpace),$=s.convert(Le.type),be=S(Le.internalFormat,z,$,Le.colorSpace,P.isXRRenderTarget===!0),Be=Re(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,be,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Oe(V.__webglFramebuffer[pe][Le],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le);else Oe(V.__webglFramebuffer[pe],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,Le=oe.length;pe<Le;pe++){const z=oe[pe],$=n.get(z);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),Ee(r.TEXTURE_2D,z),Oe(V.__webglFramebuffer,P,z,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),m(z)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),Ee(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)Oe(V.__webglFramebuffer[Le],P,b,r.COLOR_ATTACHMENT0,pe,Le);else Oe(V.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,pe,0);m(b)&&f(pe),t.unbindTexture()}P.depthBuffer&&Dt(P)}function U(P){const b=P.textures;for(let V=0,ee=b.length;V<ee;V++){const oe=b[V];if(m(oe)){const K=v(P),Te=n.get(oe).__webglTexture;t.bindTexture(K,Te),f(K),t.unbindTexture()}}}const Wt=[],pt=[];function gt(P){if(P.samples>0){if(mt(P)===!1){const b=P.textures,V=P.width,ee=P.height;let oe=r.COLOR_BUFFER_BIT;const K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(P),pe=b.length>1;if(pe)for(let z=0;z<b.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let z=0;z<b.length;z++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[z]);const $=n.get(b[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,V,ee,0,0,V,ee,oe,r.NEAREST),c===!0&&(Wt.length=0,pt.length=0,Wt.push(r.COLOR_ATTACHMENT0+z),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Wt.push(K),pt.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let z=0;z<b.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,Te.__webglColorRenderbuffer[z]);const $=n.get(b[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Re(P){return Math.min(i.maxSamples,P.samples)}function mt(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ze(P){const b=o.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function Ze(P,b){const V=P.colorSpace,ee=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==_n&&V!==Ii&&(at.getTransfer(V)===It?(ee!==Nn||oe!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=vt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=mt}function zx(r,e){function t(n,i=Ii){let s;const o=at.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===kc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return r.BYTE;if(n===Bd)return r.SHORT;if(n===gr)return r.UNSIGNED_SHORT;if(n===Fc)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===Sr)return r.HALF_FLOAT;if(n===Hd)return r.ALPHA;if(n===Gd)return r.RGB;if(n===Nn)return r.RGBA;if(n===xr)return r.DEPTH_COMPONENT;if(n===vr)return r.DEPTH_STENCIL;if(n===No)return r.RED;if(n===zc)return r.RED_INTEGER;if(n===Vd)return r.RG;if(n===Hc)return r.RG_INTEGER;if(n===Gc)return r.RGBA_INTEGER;if(n===_o||n===xo||n===vo||n===yo)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ya||n===Ka||n===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ja||n===Qa)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ec)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===dc||n===uc||n===fc||n===pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===mc||n===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Mo)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===_c||n===xc||n===vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Oi({vertexShader:Hx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends ss{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,u=null,p=null,_=null;const x=new Vx,m=t.getContextAttributes();let f=null,v=null;const S=[],y=[],R=new Ge;let A=null;const g=new mn;g.viewport=new St;const L=new mn;L.viewport=new St;const T=[g,L],M=new Jp;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=S[ne];return fe===void 0&&(fe=new ca,S[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=S[ne];return fe===void 0&&(fe=new ca,S[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=S[ne];return fe===void 0&&(fe=new ca,S[ne]=fe),fe.getHandSpace()};function H(ne){const fe=y.indexOf(ne.inputSource);if(fe===-1)return;const Ue=S[fe];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,l||o),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<S.length;ne++){const fe=y[ne];fe!==null&&(y[ne]=null,S[ne].disconnect(fe))}D=null,G=null,x.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,v=null,Rt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Me=null,Oe=null;m.depth&&(Oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=m.stencil?vr:xr,Me=m.stencil?_r:ns);const _t={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(_t),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new is(u.textureWidth,u.textureHeight,{format:Nn,type:Qn,depthTexture:new cu(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Ue),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new is(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ne){for(let fe=0;fe<ne.removed.length;fe++){const Ue=ne.removed[fe],Me=y.indexOf(Ue);Me>=0&&(y[Me]=null,S[Me].disconnect(Ue))}for(let fe=0;fe<ne.added.length;fe++){const Ue=ne.added[fe];let Me=y.indexOf(Ue);if(Me===-1){for(let _t=0;_t<S.length;_t++)if(_t>=y.length){y.push(Ue),Me=_t;break}else if(y[_t]===null){y[_t]=Ue,Me=_t;break}if(Me===-1)break}const Oe=S[Me];Oe&&Oe.connect(Ue)}}const Z=new I,ae=new I;function j(ne,fe,Ue){Z.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(Ue.matrixWorld);const Me=Z.distanceTo(ae),Oe=fe.projectionMatrix.elements,_t=Ue.projectionMatrix.elements,Ve=Oe[14]/(Oe[10]-1),Dt=Oe[14]/(Oe[10]+1),vt=(Oe[9]+1)/Oe[5],ot=(Oe[9]-1)/Oe[5],U=(Oe[8]-1)/Oe[0],Wt=(_t[8]+1)/_t[0],pt=Ve*U,gt=Ve*Wt,Re=Me/(-U+Wt),mt=Re*-U;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(mt),ne.translateZ(Re),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const ze=Ve+Re,Ze=Dt+Re,kt=pt-mt,P=gt+(Me-mt),b=vt*Dt/Ze*ze,V=ot*Dt/Ze*ze;ne.projectionMatrix.makePerspective(kt,P,b,V,ze,Ze),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function _e(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let fe=ne.near,Ue=ne.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),M.near=L.near=g.near=fe,M.far=L.far=g.far=Ue,(D!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,G=M.far),g.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,M.layers.mask=g.layers.mask|L.layers.mask;const Me=ne.parent,Oe=M.cameras;_e(M,Me);for(let _t=0;_t<Oe.length;_t++)_e(Oe[_t],Me);Oe.length===2?j(M,g,L):M.projectionMatrix.copy(g.projectionMatrix),Ae(ne,M,Me)};function Ae(ne,fe,Ue){Ue===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(ne){c=ne,u!==null&&(u.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let re=null;function Ee(ne,fe){if(d=fe.getViewerPose(l||o),_=fe,d!==null){const Ue=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Me=!1;Ue.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let Ve=0;Ve<Ue.length;Ve++){const Dt=Ue[Ve];let vt=null;if(p!==null)vt=p.getViewport(Dt);else{const U=h.getViewSubImage(u,Dt);vt=U.viewport,Ve===0&&(e.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(v))}let ot=T[Ve];ot===void 0&&(ot=new mn,ot.layers.enable(Ve),ot.viewport=new St,T[Ve]=ot),ot.matrix.fromArray(Dt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Dt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(vt.x,vt.y,vt.width,vt.height),Ve===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(ot)}const Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(Ue[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,i.renderState)}}for(let Ue=0;Ue<S.length;Ue++){const Me=y[Ue],Oe=S[Ue];Me!==null&&Oe!==void 0&&Oe.update(Me,fe,l||o)}re&&re(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Rt=new xu;Rt.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}const qi=new Vn,qx=new Je;function Xx(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,eu(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,qi.copy(y),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(qi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function l(v,S){let y=i[v.id];y===void 0&&(_(v),y=d(v),i[v.id]=y,v.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function d(v){const S=h();v.__bindingPointIndex=S;const y=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=i[v.id],y=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,g=y.length;A<g;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,M=L.length;T<M;T++){const D=L[T];if(p(D,A,T,R)===!0){const G=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let ie=0;ie<H.length;ie++){const Z=H[ie],ae=x(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,G+J,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,J),J+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,S,y,R){const A=v.value,g=S+"_"+y;if(R[g]===void 0)return typeof A=="number"||typeof A=="boolean"?R[g]=A:R[g]=A.clone(),!0;{const L=R[g];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[g]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(v){const S=v.uniforms;let y=0;const R=16;for(let g=0,L=S.length;g<L;g++){const T=Array.isArray(S[g])?S[g]:[S[g]];for(let M=0,D=T.length;M<D;M++){const G=T[M],H=Array.isArray(G.value)?G.value:[G.value];for(let J=0,ie=H.length;J<ie;J++){const Z=H[J],ae=x(Z),j=y%R,_e=j%ae.boundary,Ae=j+_e;y+=_e,Ae!==0&&R-Ae<ae.storage&&(y+=R-Ae),G.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ae.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function x(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class $x{constructor(e={}){const{canvas:t=Yf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Ht;let A=0,g=0,L=null,T=-1,M=null;const D=new St,G=new St;let H=null;const J=new ue(0);let ie=0,Z=t.width,ae=t.height,j=1,_e=null,Ae=null;const re=new St(0,0,Z,ae),Ee=new St(0,0,Z,ae);let Rt=!1;const ne=new Kc;let fe=!1,Ue=!1;const Me=new Je,Oe=new Je,_t=new I,Ve=new St,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ot(){return L===null?j:1}let U=n;function Wt(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const k="webgl2";if(U=Wt(k,E),U===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pt,gt,Re,mt,ze,Ze,kt,P,b,V,ee,oe,K,Te,pe,Le,z,$,be,Be,te,me,Xe,O;function xe(){pt=new s_(U),pt.init(),me=new zx(U,pt),gt=new Z0(U,pt,e,me),Re=new kx(U,pt),gt.reverseDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),mt=new a_(U),ze=new Tx,Ze=new Bx(U,pt,Re,ze,gt,me,mt),kt=new Q0(y),P=new i_(y),b=new fm(U),Xe=new Y0(U,b),V=new r_(U,b,mt,Xe),ee=new l_(U,V,b,mt),be=new c_(U,gt,Ze),Le=new J0(ze),oe=new Sx(y,kt,P,pt,gt,Xe,Le),K=new Xx(y,ze),Te=new Ax,pe=new Dx(pt),$=new $0(y,kt,P,Re,ee,p,c),z=new Ox(y,ee,gt),O=new jx(U,mt,gt,Re),Be=new K0(U,pt,mt),te=new o_(U,pt,mt),mt.programs=oe.programs,y.capabilities=gt,y.extensions=pt,y.properties=ze,y.renderLists=Te,y.shadowMap=z,y.state=Re,y.info=mt}xe();const he=new Wx(y,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=pt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(Z,ae,!1))},this.getSize=function(E){return E.set(Z,ae)},this.setSize=function(E,k,q=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ae=k,t.width=Math.floor(E*j),t.height=Math.floor(k*j),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Z*j,ae*j).floor()},this.setDrawingBufferSize=function(E,k,q){Z=E,ae=k,j=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,k,q,X){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,k,q,X),Re.viewport(D.copy(re).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,k,q,X){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,k,q,X),Re.scissor(G.copy(Ee).multiplyScalar(j).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){Re.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){Ae=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let X=0;if(E){let B=!1;if(L!==null){const de=L.texture.format;B=de===Gc||de===Hc||de===zc}if(B){const de=L.texture.type,ge=de===Qn||de===ns||de===gr||de===_r||de===kc||de===Bc,Pe=$.getClearColor(),Ce=$.getClearAlpha(),We=Pe.r,je=Pe.g,Fe=Pe.b;ge?(_[0]=We,_[1]=je,_[2]=Fe,_[3]=Ce,U.clearBufferuiv(U.COLOR,0,_)):(x[0]=We,x[1]=je,x[2]=Fe,x[3]=Ce,U.clearBufferiv(U.COLOR,0,x))}else X|=U.COLOR_BUFFER_BIT}k&&(X|=U.DEPTH_BUFFER_BIT),q&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",se,!1),$.dispose(),Te.dispose(),pe.dispose(),ze.dispose(),kt.dispose(),P.dispose(),ee.dispose(),Xe.dispose(),O.dispose(),oe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ks),he.removeEventListener("sessionend",ni),jn.stop()};function Ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=mt.autoReset,k=z.enabled,q=z.autoUpdate,X=z.needsUpdate,B=z.type;xe(),mt.autoReset=E,z.enabled=k,z.autoUpdate=q,z.needsUpdate=X,z.type=B}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function we(E){const k=E.target;k.removeEventListener("dispose",we),He(k)}function He(E){Tt(E),ze.remove(E)}function Tt(E){const k=ze.get(E).programs;k!==void 0&&(k.forEach(function(q){oe.releaseProgram(q)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,X,B,de){k===null&&(k=Dt);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Pe=Bi(E,k,q,X,B);Re.setMaterial(X,ge);let Ce=q.index,We=1;if(X.wireframe===!0){if(Ce=V.getWireframeAttribute(q),Ce===void 0)return;We=2}const je=q.drawRange,Fe=q.attributes.position;let rt=je.start*We,yt=(je.start+je.count)*We;de!==null&&(rt=Math.max(rt,de.start*We),yt=Math.min(yt,(de.start+de.count)*We)),Ce!==null?(rt=Math.max(rt,0),yt=Math.min(yt,Ce.count)):Fe!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,Fe.count));const Lt=yt-rt;if(Lt<0||Lt===1/0)return;Xe.setup(B,X,Pe,q,Ce);let Nt,C=Be;if(Ce!==null&&(Nt=b.get(Ce),C=te,C.setIndex(Nt)),B.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*ot()),C.setMode(U.LINES)):C.setMode(U.TRIANGLES);else if(B.isLine){let N=X.linewidth;N===void 0&&(N=1),Re.setLineWidth(N*ot()),B.isLineSegments?C.setMode(U.LINES):B.isLineLoop?C.setMode(U.LINE_LOOP):C.setMode(U.LINE_STRIP)}else B.isPoints?C.setMode(U.POINTS):B.isSprite&&C.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),C.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))C.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const N=B._multiDrawStarts,F=B._multiDrawCounts,Q=B._multiDrawCount,De=Ce?b.get(Ce).bytesPerElement:1,Ye=ze.get(X).currentProgram.getUniforms();for(let dt=0;dt<Q;dt++)Ye.setValue(U,"_gl_DrawID",dt),C.render(N[dt]/De,F[dt])}else if(B.isInstancedMesh)C.renderInstances(rt,Lt,B.count);else if(q.isInstancedBufferGeometry){const N=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,F=Math.min(q.instanceCount,N);C.renderInstances(rt,Lt,F)}else C.render(rt,Lt)};function bt(E,k,q){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,os(E,k,q),E.side=Jn,E.needsUpdate=!0,os(E,k,q),E.side=jt):os(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),f=pe.get(q),f.init(k),S.push(f),q.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Pe=de[ge];bt(Pe,q,B),X.add(Pe)}else bt(de,q,B),X.add(de)}),f=S.pop(),X},this.compileAsync=function(E,k,q=null){const X=this.compile(E,k,q);return new Promise(B=>{function de(){if(X.forEach(function(ge){ze.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){B(E);return}setTimeout(de,10)}pt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let le=null;function En(E){le&&le(E)}function Ks(){jn.stop()}function ni(){jn.start()}const jn=new xu;jn.setAnimationLoop(En),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(E){le=E,he.setAnimationLoop(E),E===null?jn.stop():jn.start()},he.addEventListener("sessionstart",Ks),he.addEventListener("sessionend",ni),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,L),f=pe.get(E,S.length),f.init(k),S.push(f),Oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Oe),Ue=this.localClippingEnabled,fe=Le.init(this.clippingPlanes,Ue),m=Te.get(E,v.length),m.init(),v.push(m),he.enabled===!0&&he.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&ki(de,k,-1/0,y.sortObjects)}ki(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(_e,Ae),vt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,vt&&$.addToRenderList(m,E),this.info.render.frame++,fe===!0&&Le.beginShadows();const q=f.state.shadowsArray;z.render(q,E,k),fe===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(f.setupLights(),k.isArrayCamera){const de=k.cameras;if(B.length>0)for(let ge=0,Pe=de.length;ge<Pe;ge++){const Ce=de[ge];Zs(X,B,E,Ce)}vt&&$.render(E);for(let ge=0,Pe=de.length;ge<Pe;ge++){const Ce=de[ge];An(m,E,Ce,Ce.viewport)}}else B.length>0&&Zs(X,B,E,k),vt&&$.render(E),An(m,E,k);L!==null&&g===0&&(Ze.updateMultisampleRenderTarget(L),Ze.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,k),Xe.resetDefaultState(),T=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],fe===!0&&Le.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ki(E,k,q,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){X&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Oe);const ge=ee.update(E),Pe=E.material;Pe.visible&&m.push(E,ge,Pe,q,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const ge=ee.update(E),Pe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ve.copy(ge.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(Oe)),Array.isArray(Pe)){const Ce=ge.groups;for(let We=0,je=Ce.length;We<je;We++){const Fe=Ce[We],rt=Pe[Fe.materialIndex];rt&&rt.visible&&m.push(E,ge,rt,q,Ve.z,Fe)}}else Pe.visible&&m.push(E,ge,Pe,q,Ve.z,null)}}const de=E.children;for(let ge=0,Pe=de.length;ge<Pe;ge++)ki(de[ge],k,q,X)}function An(E,k,q,X){const B=E.opaque,de=E.transmissive,ge=E.transparent;f.setupLightsView(q),fe===!0&&Le.setGlobalState(y.clippingPlanes,q),X&&Re.viewport(D.copy(X)),B.length>0&&rs(B,k,q),de.length>0&&rs(de,k,q),ge.length>0&&rs(ge,k,q),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Zs(E,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new is(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Sr:Qn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const de=f.state.transmissionRenderTarget[X.id],ge=X.viewport||D;de.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const Pe=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(J),ie=y.getClearAlpha(),ie<1&&y.setClearColor(16777215,.5),y.clear(),vt&&$.render(q);const Ce=y.toneMapping;y.toneMapping=Ni;const We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),fe===!0&&Le.setGlobalState(y.clippingPlanes,X),rs(E,q,X),Ze.updateMultisampleRenderTarget(de),Ze.updateRenderTargetMipmap(de),pt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Fe=0,rt=k.length;Fe<rt;Fe++){const yt=k[Fe],Lt=yt.object,Nt=yt.geometry,C=yt.material,N=yt.group;if(C.side===jt&&Lt.layers.test(X.layers)){const F=C.side;C.side=ln,C.needsUpdate=!0,Un(Lt,q,X,Nt,C,N),C.side=F,C.needsUpdate=!0,je=!0}}je===!0&&(Ze.updateMultisampleRenderTarget(de),Ze.updateRenderTargetMipmap(de))}y.setRenderTarget(Pe),y.setClearColor(J,ie),We!==void 0&&(X.viewport=We),y.toneMapping=Ce}function rs(E,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,de=E.length;B<de;B++){const ge=E[B],Pe=ge.object,Ce=ge.geometry,We=ge.group;let je=ge.material;je.allowOverride===!0&&X!==null&&(je=X),Pe.layers.test(q.layers)&&Un(Pe,k,q,Ce,je,We)}}function Un(E,k,q,X,B,de){E.onBeforeRender(y,k,q,X,B,de),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,k,q,X,E,de),B.transparent===!0&&B.side===jt&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,y.renderBufferDirect(q,k,X,B,E,de),B.side=Jn,B.needsUpdate=!0,y.renderBufferDirect(q,k,X,B,E,de),B.side=jt):y.renderBufferDirect(q,k,X,B,E,de),E.onAfterRender(y,k,q,X,B,de)}function os(E,k,q){k.isScene!==!0&&(k=Dt);const X=ze.get(E),B=f.state.lights,de=f.state.shadowsArray,ge=B.state.version,Pe=oe.getParameters(E,B.state,de,k,q),Ce=oe.getProgramCacheKey(Pe);let We=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?P:kt).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",we),We=new Map,X.programs=We);let je=We.get(Ce);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===ge)return Mi(E,Pe),je}else Pe.uniforms=oe.getUniforms(E),E.onBeforeCompile(Pe,y),je=oe.acquireProgram(Pe,Ce),We.set(Ce,je),X.uniforms=Pe.uniforms;const Fe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Le.uniform),Mi(E,Pe),X.needsLights=Qe(E),X.lightsStateVersion=ge,X.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function Pr(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=wo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Mi(E,k){const q=ze.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Bi(E,k,q,X,B){k.isScene!==!0&&(k=Dt),Ze.resetTextureUnits();const de=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,Pe=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_n,Ce=(X.isMeshStandardMaterial?P:kt).get(X.envMap||ge),We=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color;let Lt=Ni;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const Nt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,C=Nt!==void 0?Nt.length:0,N=ze.get(X),F=f.state.lights;if(fe===!0&&(Ue===!0||E!==M)){const qt=E===M&&X.id===T;Le.setState(X,E,qt)}let Q=!1;X.version===N.__version?(N.needsLights&&N.lightsStateVersion!==F.state.version||N.outputColorSpace!==Pe||B.isBatchedMesh&&N.batching===!1||!B.isBatchedMesh&&N.batching===!0||B.isBatchedMesh&&N.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&N.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&N.instancing===!1||!B.isInstancedMesh&&N.instancing===!0||B.isSkinnedMesh&&N.skinning===!1||!B.isSkinnedMesh&&N.skinning===!0||B.isInstancedMesh&&N.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&N.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&N.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&N.instancingMorph===!1&&B.morphTexture!==null||N.envMap!==Ce||X.fog===!0&&N.fog!==de||N.numClippingPlanes!==void 0&&(N.numClippingPlanes!==Le.numPlanes||N.numIntersection!==Le.numIntersection)||N.vertexAlphas!==We||N.vertexTangents!==je||N.morphTargets!==Fe||N.morphNormals!==rt||N.morphColors!==yt||N.toneMapping!==Lt||N.morphTargetsCount!==C)&&(Q=!0):(Q=!0,N.__version=X.version);let De=N.currentProgram;Q===!0&&(De=os(X,k,B));let Ye=!1,dt=!1,sn=!1;const wt=De.getUniforms(),hn=N.uniforms;if(Re.useProgram(De.program)&&(Ye=!0,dt=!0,sn=!0),X.id!==T&&(T=X.id,dt=!0),Ye||M!==E){Re.buffers.depth.getReversed()?(Me.copy(E.projectionMatrix),Zf(Me),Jf(Me),wt.setValue(U,"projectionMatrix",Me)):wt.setValue(U,"projectionMatrix",E.projectionMatrix),wt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Xt=wt.map.cameraPosition;Xt!==void 0&&Xt.setValue(U,_t.setFromMatrixPosition(E.matrixWorld)),gt.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,dt=!0,sn=!0)}if(B.isSkinnedMesh){wt.setOptional(U,B,"bindMatrix"),wt.setOptional(U,B,"bindMatrixInverse");const qt=B.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),wt.setValue(U,"boneTexture",qt.boneTexture,Ze))}B.isBatchedMesh&&(wt.setOptional(U,B,"batchingTexture"),wt.setValue(U,"batchingTexture",B._matricesTexture,Ze),wt.setOptional(U,B,"batchingIdTexture"),wt.setValue(U,"batchingIdTexture",B._indirectTexture,Ze),wt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",B._colorsTexture,Ze));const dn=q.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&be.update(B,q,De),(dt||N.receiveShadow!==B.receiveShadow)&&(N.receiveShadow=B.receiveShadow,wt.setValue(U,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(hn.envMap.value=Ce,hn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(hn.envMapIntensity.value=k.environmentIntensity),dt&&(wt.setValue(U,"toneMappingExposure",y.toneMappingExposure),N.needsLights&&zo(hn,sn),de&&X.fog===!0&&K.refreshFogUniforms(hn,de),K.refreshMaterialUniforms(hn,X,j,ae,f.state.transmissionRenderTarget[E.id]),wo.upload(U,Pr(N),hn,Ze)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wo.upload(U,Pr(N),hn,Ze),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(U,"center",B.center),wt.setValue(U,"modelViewMatrix",B.modelViewMatrix),wt.setValue(U,"normalMatrix",B.normalMatrix),wt.setValue(U,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let Xt=0,ii=qt.length;Xt<ii;Xt++){const si=qt[Xt];O.update(si,De),O.bind(si,De)}}return De}function zo(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Qe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,k,q){const X=ze.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=k,ze.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const q=ze.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const $e=U.createFramebuffer();this.setRenderTarget=function(E,k=0,q=0){L=E,A=k,g=q;let X=!0,B=null,de=!1,ge=!1;if(E){const Ce=ze.get(E);if(Ce.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Ce.__webglFramebuffer===void 0)Ze.setupRenderTarget(E);else if(Ce.__hasExternalTextures)Ze.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&ze.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ge=!0);const je=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[k])?B=je[k][q]:B=je[k],de=!0):E.samples>0&&Ze.useMultisampledRTT(E)===!1?B=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[q]:B=je,D.copy(E.viewport),G.copy(E.scissor),H=E.scissorTest}else D.copy(re).multiplyScalar(j).floor(),G.copy(Ee).multiplyScalar(j).floor(),H=Rt;if(q!==0&&(B=$e),Re.bindFramebuffer(U.FRAMEBUFFER,B)&&X&&Re.drawBuffers(E,B),Re.viewport(D),Re.scissor(G),Re.setScissorTest(H),de){const Ce=ze.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,q)}else if(ge){const Ce=ze.get(E.texture),We=k;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,q,We)}else if(E!==null&&q!==0){const Ce=ze.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ce.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(E,k,q,X,B,de,ge,Pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){Re.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const We=E.textures[Pe],je=We.format,Fe=We.type;if(!gt.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&q>=0&&q<=E.height-B&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe),U.readPixels(k,q,X,B,me.convert(je),me.convert(Fe),de))}finally{const We=L!==null?ze.get(L).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,X,B,de,ge,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce)if(k>=0&&k<=E.width-X&&q>=0&&q<=E.height-B){Re.bindFramebuffer(U.FRAMEBUFFER,Ce);const We=E.textures[Pe],je=We.format,Fe=We.type;if(!gt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe),U.readPixels(k,q,X,B,me.convert(je),me.convert(Fe),0);const yt=L!==null?ze.get(L).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,yt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kf(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(rt),U.deleteSync(Lt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,q=0){const X=Math.pow(2,-q),B=Math.floor(E.image.width*X),de=Math.floor(E.image.height*X),ge=k!==null?k.x:0,Pe=k!==null?k.y:0;Ze.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ge,Pe,B,de),Re.unbindTexture()};const Lr=U.createFramebuffer(),Js=U.createFramebuffer();this.copyTextureToTexture=function(E,k,q=null,X=null,B=0,de=null){de===null&&(B!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let ge,Pe,Ce,We,je,Fe,rt,yt,Lt;const Nt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(q!==null)ge=q.max.x-q.min.x,Pe=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,je=q.min.y,Fe=q.isBox3?q.min.z:0;else{const dn=Math.pow(2,-B);ge=Math.floor(Nt.width*dn),Pe=Math.floor(Nt.height*dn),E.isDataArrayTexture?Ce=Nt.depth:E.isData3DTexture?Ce=Math.floor(Nt.depth*dn):Ce=1,We=0,je=0,Fe=0}X!==null?(rt=X.x,yt=X.y,Lt=X.z):(rt=0,yt=0,Lt=0);const C=me.convert(k.format),N=me.convert(k.type);let F;k.isData3DTexture?(Ze.setTexture3D(k,0),F=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ze.setTexture2DArray(k,0),F=U.TEXTURE_2D_ARRAY):(Ze.setTexture2D(k,0),F=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Q=U.getParameter(U.UNPACK_ROW_LENGTH),De=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ye=U.getParameter(U.UNPACK_SKIP_PIXELS),dt=U.getParameter(U.UNPACK_SKIP_ROWS),sn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe);const wt=E.isDataArrayTexture||E.isData3DTexture,hn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const dn=ze.get(E),qt=ze.get(k),Xt=ze.get(dn.__renderTarget),ii=ze.get(qt.__renderTarget);Re.bindFramebuffer(U.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Ce;si++)wt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,B,Fe+si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.get(k).__webglTexture,de,Lt+si)),U.blitFramebuffer(We,je,ge,Pe,rt,yt,ge,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);Re.bindFramebuffer(U.READ_FRAMEBUFFER,null),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ze.has(E)){const dn=ze.get(E),qt=ze.get(k);Re.bindFramebuffer(U.READ_FRAMEBUFFER,Lr),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,Js);for(let Xt=0;Xt<Ce;Xt++)wt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,B,Fe+Xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,B),hn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,de,Lt+Xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,de),B!==0?U.blitFramebuffer(We,je,ge,Pe,rt,yt,ge,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):hn?U.copyTexSubImage3D(F,de,rt,yt,Lt+Xt,We,je,ge,Pe):U.copyTexSubImage2D(F,de,rt,yt,We,je,ge,Pe);Re.bindFramebuffer(U.READ_FRAMEBUFFER,null),Re.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else hn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(F,de,rt,yt,Lt,ge,Pe,Ce,C,N,Nt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(F,de,rt,yt,Lt,ge,Pe,Ce,C,Nt.data):U.texSubImage3D(F,de,rt,yt,Lt,ge,Pe,Ce,C,N,Nt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,rt,yt,ge,Pe,C,N,Nt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,rt,yt,Nt.width,Nt.height,C,Nt.data):U.texSubImage2D(U.TEXTURE_2D,de,rt,yt,ge,Pe,C,N,Nt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Q),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,sn),de===0&&k.generateMipmaps&&U.generateMipmap(F),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q=null,X=null,B=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,q,X,B)},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&Ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ze.setTextureCube(E,0):E.isData3DTexture?Ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ze.setTexture2DArray(E,0):Ze.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){A=0,g=0,L=null,Re.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Yx{constructor(e){w(this,"keys",new Set);w(this,"justPressed",new Set);w(this,"leftReleased",!1);w(this,"leftDown",!1);w(this,"rightDown",!1);w(this,"dx",0);w(this,"dy",0);w(this,"wheel",0);w(this,"suspended",!1);window.addEventListener("keydown",t=>{this.suspended||(t.code==="Tab"&&t.preventDefault(),this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code))}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("mousedown",t=>{t.button===0&&(this.leftDown=!0),t.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),t.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",t=>{this.dx+=t.movementX,this.dy+=t.movementY}),e.addEventListener("wheel",t=>{this.wheel+=t.deltaY})}isDown(e){return this.keys.has(e)}wasPressed(e){return this.justPressed.has(e)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}clearKeys(){this.keys.clear(),this.justPressed.clear()}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const xt={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},Kx={day:{barSeconds:3.2,chords:[[xt.C4,xt.E4,xt.G4],[220,xt.C4,xt.E4],[174.61,220,xt.C4],[196,246.94,xt.D4]],style:"melody",melody:[[[xt.E5,0,.5],[xt.G5,.25,.5],[xt.A5,.5,.5],[xt.G5,.75,.45]],[[xt.E5,0,.6],[xt.C5,.5,.85]],[[xt.D5,0,.5],[xt.E5,.25,.5],[xt.F5,.5,.5],[xt.D5,.75,.45]],[[xt.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,xt.C4],[xt.C4,xt.E4,xt.G4],[196,246.94,xt.D4],[220,xt.C4,xt.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,xt.C4,xt.E4],[174.61,220,xt.C4],[130.81,164.81,196],[196,246.94,xt.D4]],style:"melody",melody:[[[xt.A4,0,1.4]],[[xt.C5,0,1],[xt.B4,.5,1.2]],[[xt.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class Zx{constructor(){w(this,"ctx",null);w(this,"sfxBus",null);w(this,"musicBus",null);w(this,"noiseBuffer",null);w(this,"chordIndex",0);w(this,"musicTimer",null);w(this,"volume",1);w(this,"musicEnabled",!0);w(this,"rainGain",null);w(this,"musicMode","day")}unlock(){if(this.ctx)return;const e=new AudioContext;this.ctx=e,this.sfxBus=e.createGain(),this.sfxBus.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(e.destination),this.applyVolume();const t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;this.noiseBuffer=t,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(e){this.musicMode=e}setRain(e){if(!this.ctx||!this.rainGain)return;const t=e?.09:1e-4;this.rainGain.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}setVolume(e){this.volume=e,this.applyVolume()}setMusicEnabled(e){this.musicEnabled=e,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(e){if(this.ctx)switch(e){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((t,n)=>this.tone("triangle",t,t,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((t,n)=>this.tone("triangle",t,t,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((t,n)=>this.tone("sine",t,t,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.25,.2,.18+n*.1));break}}tone(e,t,n,i,s,o=0){if(!this.ctx||!this.sfxBus)return;const a=this.ctx.currentTime+o,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=e,c.frequency.setValueAtTime(t,a),n!==t&&c.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+i),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+i),c.connect(l).connect(this.sfxBus),c.start(a),c.stop(a+i+.05)}noiseBurst(e,t,n,i,s){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type=e,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+i);const l=this.ctx.createGain();l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+i),a.connect(c).connect(l).connect(this.sfxBus),a.start(o),a.stop(o+i+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const i=this.ctx.createOscillator();i.frequency.value=.08;const s=this.ctx.createGain();s.gain.value=.05,i.connect(s).connect(n.gain),e.connect(t).connect(n).connect(this.musicBus),e.start(),i.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=1400,t.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.value=1;const s=this.ctx.createOscillator();s.frequency.value=.13;const o=this.ctx.createGain();o.gain.value=.18,s.connect(o).connect(i.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,e.connect(t).connect(n).connect(i).connect(this.rainGain).connect(this.musicBus),e.start(),s.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const e=Kx[this.musicMode],t=e.barSeconds,n=this.ctx.currentTime+.05,i=this.chordIndex%e.chords.length,s=e.chords[i];this.chordIndex++;for(const c of s){const l=this.ctx.createOscillator(),d=this.ctx.createGain();l.type=e.padType,l.frequency.value=c,d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(e.padVol,n+.7),d.gain.setValueAtTime(e.padVol,n+t-1),d.gain.exponentialRampToValueAtTime(1e-4,n+t+.5),l.connect(d).connect(this.musicBus),l.start(n),l.stop(n+t+.6)}const o=this.ctx.createOscillator(),a=this.ctx.createGain();if(o.type="sine",o.frequency.value=s[0]/2,a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.3),a.gain.exponentialRampToValueAtTime(1e-4,n+t),o.connect(a).connect(this.musicBus),o.start(n),o.stop(n+t+.1),e.style==="melody"){const c=e.melody[i%e.melody.length]??[];for(const[l,d,h]of c)this.melodyNote(l,n+d*t,h)}else{const c=[0,1,2,1,0,1,2,1];for(let l=0;l<c.length;l++)this.melodyNote(s[c[l]]*2,n+l/8*t,t/8-.05)}for(const c of e.hats)this.hatTick(n+c*t);this.musicTimer=setTimeout(()=>this.scheduleBar(),t*1e3)}melodyNote(e,t,n){if(!this.ctx||!this.musicBus)return;const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.value=e,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.09,t+.04),s.gain.exponentialRampToValueAtTime(1e-4,t+n),i.connect(s).connect(this.musicBus),i.start(t),i.stop(t+n+.05)}hatTick(e){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.06),t.connect(n).connect(i).connect(this.musicBus),t.start(e),t.stop(e+.08)}}const Jx=22,Qx=80;class ev{constructor(e){w(this,"hitstopT",0);w(this,"shakeT",0);w(this,"shakeDuration",1);w(this,"shakeIntensity",0);w(this,"particles",[]);this.scene=e}get frozen(){return this.hitstopT>0}hitstop(e){this.hitstopT=Math.max(this.hitstopT,e)}shake(e,t){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeT=Math.max(this.shakeT,t),this.shakeDuration=Math.max(t,.01)}burst(e,t,n=10,i=7){for(let s=0;s<n&&!(this.particles.length>=Qx);s++){const o=.07+Math.random()*.1,a=new Y(new Fo(o),new Ot({color:t}));a.position.copy(e);const c=new I(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),l=.35+Math.random()*.3;this.particles.push({mesh:a,velocity:c.multiplyScalar(i*(.5+Math.random()*.7)),life:l,maxLife:l}),this.scene.add(a)}}update(e){if(this.hitstopT=Math.max(0,this.hitstopT-e),this.particles=this.particles.filter(t=>{if(t.life-=e,t.life<=0)return this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),!1;t.velocity.y-=Jx*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8,t.mesh.rotation.y+=e*6;const n=t.life/t.maxLife;return t.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=e;const t=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*t;return this.shakeT<=0&&(this.shakeIntensity=0),new I((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new I}}let As=null;function tv(){if(!As){const r=new Uint8Array([90,150,210,255]);As=new $c(r,r.length,1,No),As.minFilter=tn,As.magFilter=tn,As.needsUpdate=!0}return As}function ye(r,e={}){const t=new hu({color:r,gradientMap:tv(),transparent:e.transparent??!1,opacity:e.opacity??1,vertexColors:e.vertexColors??!1,map:e.map??null});return e.emissive!==void 0&&(t.emissive.setHex(e.emissive),t.emissiveIntensity=e.emissiveIntensity??1),t}const nv=new Ot({color:1844019,side:ln});function yi(r,e=1.06){var n;const t=[];r.traverse(i=>{i instanceof Y&&!(i instanceof ou)&&t.push(i)});for(const i of t){const s=new Y(i.geometry,nv);s.position.copy(i.position),s.rotation.copy(i.rotation),s.scale.copy(i.scale).multiplyScalar(e),s.raycast=()=>{},(n=i.parent)==null||n.add(s)}}function wu(r,e=.03){var n;const t=[];r.traverse(i=>{i instanceof bc&&t.push(i)});for(const i of t){const s=new Ot({color:1844019,side:ln});s.onBeforeCompile=a=>{a.uniforms.outlineThickness={value:e},a.vertexShader=`uniform float outlineThickness;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  transformed += normalize(objectNormal) * outlineThickness;`)};const o=new bc(i.geometry,s);o.bind(i.skeleton,i.bindMatrix),o.position.copy(i.position),o.quaternion.copy(i.quaternion),o.scale.copy(i.scale),o.castShadow=!1,o.raycast=()=>{},(n=i.parent)==null||n.add(o)}}const iv=.6,Ch=.25;function sv(){const r=new vi(700,700,96,96);r.rotateX(-Math.PI/2);const e=ye(2789320,{transparent:!0,opacity:.92});return new Y(r,e)}function rv(r,e,t=1){const n=r.geometry.getAttribute("position"),i=iv*t;for(let s=0;s<n.count;s++){const o=n.getX(s),a=n.getZ(s),c=Math.sin(o*Ch+e)*Math.cos(a*Ch+e*.8)*i;n.setY(s,c)}n.needsUpdate=!0,r.geometry.computeVertexNormals()}const ov=360,Ih=.65,av=new ue(8900331),cv=new ue(660528),wa=260,Ph=42,lv={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class hv{constructor(e,t,n,i){w(this,"time",.12);w(this,"weather","clear");w(this,"weatherT",50);w(this,"lightningT",6);w(this,"flashT",0);w(this,"rain");w(this,"rainVelocity",[]);this.scene=e,this.sun=t,this.hemi=n,this.ambient=i;const s=new Float32Array(wa*6);for(let a=0;a<wa;a++){const c=(Math.random()-.5)*Ph,l=Math.random()*30,d=(Math.random()-.5)*Ph;s.set([c,l,d,c,l-.9,d],a*6),this.rainVelocity.push(30+Math.random()*14)}const o=new Ft;o.setAttribute("position",new nn(s,3)),this.rain=new Io(o,new Zn({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,e.add(this.rain)}forceWeather(e){this.weather=e,this.weatherT=60}get rainVisible(){return this.rain.visible}update(e,t,n){if(this.time=(this.time+e/ov)%1,this.weatherT-=e,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const i=lv[this.weather],s=this.weather!=="clear",o=this.time/Ih,a=this.time<Ih?Math.sin(Math.PI*o):0,c=Math.PI*(1-o);this.sun.position.set(t.x+Math.cos(c)*120,Math.max(Math.sin(c),.12)*130+15,t.z+40),this.sun.target.position.set(t.x,0,t.z),this.sun.intensity=.15+2.45*a,this.hemi.intensity=.25+.45*a;let l=.12+.23*a,d=!1;if(this.weather==="storm"&&(this.lightningT-=e,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,d=!0)),this.flashT>0&&(this.flashT-=e,l+=1.6),this.ambient.intensity=l,!n){const h=cv.clone().lerp(av,a).multiplyScalar(i.darken);this.flashT>0&&h.lerp(new ue(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=s&&!n,this.rain.visible){this.rain.position.set(t.x,t.y,t.z);const h=this.rain.geometry.getAttribute("position"),u=this.weather==="storm"?1.6:1;for(let p=0;p<wa;p++){let _=h.getY(p*2)-this.rainVelocity[p]*u*e;_<-4&&(_=26+Math.random()*4),h.setY(p*2,_),h.setY(p*2+1,_-.9)}h.needsUpdate=!0}return{isNight:a<.08,weather:this.weather,raining:s,waveScale:i.wave,boatFactor:i.boat,thunder:d}}}const dv=/^[og]\s*(.+)?/,uv=/^mtllib /,fv=/^usemtl /,pv=/^usemap /,Lh=/\s+/,Dh=new I,Sa=new I,Nh=new I,Uh=new I,In=new I,uo=new ue;function mv(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Dh.fromArray(i,e),Sa.fromArray(i,t),Nh.fromArray(i,n),In.subVectors(Nh,Sa),Uh.subVectors(Dh,Sa),In.cross(Uh),In.normalize(),s.push(In.x,In.y,In.z),s.push(In.x,In.y,In.z),s.push(In.x,In.y,In.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,c,l){const d=this.vertices.length;let h=this.parseVertexIndex(e,d),u=this.parseVertexIndex(t,d),p=this.parseVertexIndex(n,d);if(this.addVertex(h,u,p),this.addColor(h,u,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),u=this.parseNormalIndex(c,_),p=this.parseNormalIndex(l,_),this.addNormal(h,u,p)}else this.addFaceNormal(h,u,p);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),u=this.parseUVIndex(s,_),p=this.parseUVIndex(o,_),this.addUV(h,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class gv extends Fi{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new ko(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new mv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const d=l.charAt(0);if(d!=="#")if(d==="v"){const h=l.split(Lh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(uo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Ht),t.colors.push(uo.r,uo.g,uo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(d==="f"){const u=l.slice(1).trim().split(Lh),p=[];for(let x=0,m=u.length;x<m;x++){const f=u[x];if(f.length>0){const v=f.split("/");p.push(v)}}const _=p[0];for(let x=1,m=p.length-1;x<m;x++){const f=p[x],v=p[x+1];t.addFace(_[0],f[0],v[0],_[1],f[1],v[1],_[2],f[2],v[2])}}else if(d==="l"){const h=l.substring(1).trim().split(" ");let u=[];const p=[];if(l.indexOf("/")===-1)u=h;else for(let _=0,x=h.length;_<x;_++){const m=h[_].split("/");m[0]!==""&&u.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(u,p)}else if(d==="p"){const u=l.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((i=dv.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(fv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(uv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(pv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(i=l.split(" "),i.length>1){const u=i[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new tt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],d=l.geometry,h=l.materials,u=d.type==="Line",p=d.type==="Points";let _=!1;if(d.vertices.length===0)continue;const x=new Ft;x.setAttribute("position",new ft(d.vertices,3)),d.normals.length>0&&x.setAttribute("normal",new ft(d.normals,3)),d.colors.length>0&&(_=!0,x.setAttribute("color",new ft(d.colors,3))),d.hasUVIndices===!0&&x.setAttribute("uv",new ft(d.uvs,2));const m=[];for(let v=0,S=h.length;v<S;v++){const y=h[v],R=y.name+"_"+y.smooth+"_"+_;let A=t.materials[R];if(this.materials!==null){if(A=this.materials.create(y.name),u&&A&&!(A instanceof Zn)){const g=new Zn;gn.prototype.copy.call(g,A),g.color.copy(A.color),A=g}else if(p&&A&&!(A instanceof Is)){const g=new Is({size:10,sizeAttenuation:!1});gn.prototype.copy.call(g,A),g.color.copy(A.color),g.map=A.map,A=g}}A===void 0&&(u?A=new Zn:p?A=new Is({size:1,sizeAttenuation:!1}):A=new lu,A.name=y.name,A.flatShading=!y.smooth,A.vertexColors=_,t.materials[R]=A),m.push(A)}let f;if(m.length>1){for(let v=0,S=h.length;v<S;v++){const y=h[v];x.addGroup(y.groupStart,y.groupCount,v)}u?f=new Io(x,m):p?f=new bo(x,m):f=new Y(x,m)}else u?f=new Io(x,m[0]):p?f=new bo(x,m[0]):f=new Y(x,m[0]);f.name=l.name,s.add(f)}else if(t.vertices.length>0){const a=new Is({size:1,sizeAttenuation:!1}),c=new Ft;c.setAttribute("position",new ft(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ft(t.colors,3)),a.vertexColors=!0);const l=new bo(c,a);s.add(l)}return s}}class _v extends Fi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ns.extractUrlBase(e):this.path,a=new ko(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const s=/\s+/,o={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;const d=l.indexOf(" ");let h=d>=0?l.substring(0,d):l;h=h.toLowerCase();let u=d>=0?l.substring(d+1):"";if(u=u.trim(),h==="newmtl")i={name:u},o[u]=i;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const p=u.split(s,3);i[h]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else i[h]=u}const a=new xv(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class xv{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Jn,this.wrap=this.options.wrap!==void 0?this.options.wrap:ts}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],s={};t[n]=s;for(const o in i){let a=!0,c=i[o];const l=o.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(a=!1);break}a&&(s[l]=c)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function s(a,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:a+c}function o(a,c){if(i[a])return;const l=t.getTextureParams(c,i),d=t.loadTexture(s(t.baseUrl,l.url));d.repeat.copy(l.scale),d.offset.copy(l.offset),d.wrapS=t.wrap,d.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(d.colorSpace=Ht),i[a]=d}for(const a in n){const c=n[a];let l;if(c!=="")switch(a.toLowerCase()){case"kd":i.color=at.colorSpaceToWorking(new ue().fromArray(c),Ht);break;case"ks":i.specular=at.colorSpaceToWorking(new ue().fromArray(c),Ht);break;case"ke":i.emissive=at.colorSpaceToWorking(new ue().fromArray(c),Ht);break;case"map_kd":o("map",c);break;case"map_ks":o("specularMap",c);break;case"map_ke":o("emissiveMap",c);break;case"norm":o("normalMap",c);break;case"map_bump":case"bump":o("bumpMap",c);break;case"disp":o("displacementMap",c);break;case"map_d":o("alphaMap",c),i.transparent=!0;break;case"ns":i.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0);break}}return this.materials[e]=new lu(i),this.materials[e]}getTextureParams(e,t){const n={scale:new Ge(1,1),offset:new Ge(0,0)},i=e.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-mm"),s>=0&&(t.displacementBias=parseFloat(i[s+1]),t.displacementScale=parseFloat(i[s+2]),i.splice(s,3)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,s){const o=this.manager!==void 0?this.manager:pu;let a=o.getHandler(e);a===null&&(a=new mu(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const c=a.load(e,n,i,s);return t!==void 0&&(c.mapping=t),c}}const Oh="./models/",Su={common:["CommonTree_1","CommonTree_2","CommonTree_3"],birch:["BirchTree_1","BirchTree_2"],pine:["PineTree_1","PineTree_2"],pine_snow:["PineTree_Snow_1","PineTree_Snow_2","PineTree_Snow_3"],common_snow:["CommonTree_Snow_1","CommonTree_Snow_2"],dead:["CommonTree_Dead_1","CommonTree_Dead_2"],autumn:["CommonTree_Autumn_1","CommonTree_Autumn_2"],palm:["PalmTree_1","PalmTree_2","PalmTree_3"],cactus:["Cactus_1","Cactus_2","Cactus_3"],willow:["Willow_1","Willow_2"],rock:["Rock_1","Rock_2","Rock_3","Rock_4","Rock_5"],rock_snow:["Rock_Snow_1","Rock_Snow_2","Rock_Snow_3"],rock_moss:["Rock_Moss_1","Rock_Moss_2"],grass:["Grass","Grass_2"],grass_short:["Grass_Short"],flowers:["Flowers"],plant:["Plant_1","Plant_2"],bush:["Bush_1","Bush_2"],berries:["BushBerries_1"],log:["WoodLog"],stump:["TreeStump"],wheat:["Wheat"],lily:["Lilypad"]},vv={common:5.2,birch:5.6,pine:5.4,pine_snow:5.4,common_snow:5,dead:4.8,autumn:5.2,palm:6.2,cactus:2.6,willow:5.6,rock:1.7,rock_snow:1.7,rock_moss:1.7,grass:.7,grass_short:.5,flowers:.7,plant:.8,bush:1.1,berries:1.1,log:.7,stump:1,wheat:1.3,lily:.18},Po=new Map;let Ac=!1;function Fh(){return Ac}function yv(r){r.traverse(e=>{if(e instanceof Y){const t=Array.isArray(e.material)?e.material[0]:e.material,n=new ue(8956518);t&&t.color&&n.copy(t.color).convertLinearToSRGB(),e.material=ye(n.getHex()),e.castShadow=!0}})}function Mv(r,e){yv(r),yi(r);const t=new Tn().setFromObject(r),n=t.max.y-t.min.y||1,i=e/n;r.scale.setScalar(i),r.position.y=-t.min.y*i;const s=new tt;s.add(r),s.updateMatrixWorld(!0);const o=new Tn().setFromObject(s);return s.userData.radius=Math.max(o.max.x-o.min.x,o.max.z-o.min.z)/2,s}async function bv(r,e){const t=await new _v().setPath(Oh).loadAsync(`${r}.mtl`);t.preload();const n=await new gv().setMaterials(t).setPath(Oh).loadAsync(`${r}.obj`);Po.set(r,Mv(n,e))}async function wv(){const r=[];for(const[e,t]of Object.entries(Su)){const n=vv[e]??1;for(const i of t)r.push(bv(i,n).catch(s=>console.warn(`[scenery] 模型載入失敗 ${i}:`,s)))}return await Promise.all(r),Ac=Po.has("CommonTree_1")||Po.has("PalmTree_1"),Ac}function Ta(r){const e=Su[r];if(!e||e.length===0)return null;const t=e[Math.floor(Math.random()*e.length)],n=Po.get(t);return n?n.clone():null}function kh(r,e){if(e===bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===yc||e===Xd){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===yc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Tu extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Gv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ns.extractUrlBase(e);o=Ns.resolveURL(l,this.path)}else o=Ns.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ko(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Eu){try{o[ht.KHR_BINARY_GLTF]=new Vv(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ny(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new Ev;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new Wv(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new qv;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new Xv;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Sv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tv{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const d=new ue(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],_n);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gu(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $p(d),l.distance=h;break;case"spot":l=new Xp(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Ev{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}}class Av{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Rv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class Cv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Iv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Pv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Lv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Dv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(a[0],a[1],a[2],_n),Promise.all(s)}}class Nv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Uv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Fv{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class kv{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Bv{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class zv{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Hv{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class Gv{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(d=>(c[l]=d,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,p=[];for(const _ of h){const x=new Je,m=new I,f=new Gn,v=new I(1,1,1),S=new Ap(_.geometry,_.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,x.compose(m,f,v));for(const y in c)if(y==="_COLOR_0"){const R=c[y];S.instanceColor=new wc(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Ut.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),p.push(S)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const Eu="glTF",hr=12,Bh={JSON:1313821514,BIN:5130562};class Vv{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hr,s=new DataView(e,hr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Bh.JSON){const l=new Uint8Array(e,hr+o,a);this.content=n.decode(l)}else if(c===Bh.BIN){const l=hr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const d in o){const h=Rc[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=Rc[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],p=Us[u.componentType];l[h]=p.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=c[_];m!==void 0&&(x.normalized=m)}h(p)},a,l,_n,u)})})}}class qv{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xv{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Au extends Cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,_=e*l,x=_-l,m=-2*p+3*u,f=p-u,v=1-m,S=f-u+h;for(let y=0;y!==a;y++){const R=o[x+y+a],A=o[x+y+c]*d,g=o[_+y+a],L=o[_+y]*d;s[y]=v*R+S*A+m*g+f*L}return s}}const jv=new Gn;class $v extends Au{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return jv.fromArray(s).normalize().toArray(s),s}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zh={9728:tn,9729:Sn,9984:Fd,9985:go,9986:dr,9987:mi},Hh={33071:Pi,33648:So,10497:ts},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yv={CUBICSPLINE:void 0,LINEAR:Mr,STEP:yr},Aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),r.DefaultMaterial}function Xi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function Jv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qv(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ra(t.attributes):e=r.indices+":"+Ra(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ra(r.targets[n]);return e}function Ra(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Cc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ey(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ty=new Je;class ny{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new mu(this.options.manager):this.textureLoader=new Zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ko(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xi(s,a,i),pi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,d]of o.children.entries())s(d,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ns.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ea[i.type],a=Us[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new nn(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ea[i.type],l=Us[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,m;if(p&&p!==h){const f=Math.floor(u/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(v);S||(x=new l(a,f*p,i.count*p/d),S=new iu(x,p/d),t.cache.add(v,S)),m=new wr(S,c,u%p/d,_)}else a===null?x=new l(i.count*c):x=new l(a,u,i.count*c),m=new nn(x,c,_);if(i.sparse!==void 0){const f=Ea.SCALAR,v=Us[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new v(o[1],S,i.sparse.count*f),A=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let g=0,L=R.length;g<L;g++){const T=R[g];if(m.setX(T,A[g*c]),c>=2&&m.setY(T,A[g*c+1]),c>=3&&m.setZ(T,A[g*c+2]),c>=4&&m.setW(T,A[g*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=zh[u.magFilter]||Sn,d.minFilter=zh[u.minFilter]||mi,d.wrapS=Hh[u.wrapS]||ts,d.wrapT=Hh[u.wrapT]||ts,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==tn&&d.minFilter!==Sn,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,p){let _=u;t.isImageBitmapLoader===!0&&(_=function(x){const m=new $t(x);m.needsUpdate=!0,u(m)}),t.load(Ns.resolveURL(h,s.path),_,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),pi(h,o),h.userData.mimeType=o.mimeType||ey(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Is,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Zn,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],_n),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=jt);const d=s.alphaMode||Aa.OPAQUE;if(d===Aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Aa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ot){const h=s.emissiveFactor;a.emissive=new ue().setRGB(h[0],h[1],h[2],_n)}return s.emissiveTexture!==void 0&&o!==Ot&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Xi(i,h,s),h})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],d=Qv(l),h=i[d];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=Gh(new Ft,l,t),i[d]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const d=o[c].material===void 0?Kv(this.cache):this.getDependency("material",o[c].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let p=0,_=d.length;p<_;p++){const x=d[p],m=o[p];let f;const v=l[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new bc(x,v):new Y(x,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?f.geometry=kh(f.geometry,Xd):m.mode===Ln.TRIANGLE_FAN&&(f.geometry=kh(f.geometry,yc));else if(m.mode===Ln.LINES)f=new Io(x,v);else if(m.mode===Ln.LINE_STRIP)f=new Tr(x,v);else if(m.mode===Ln.LINE_LOOP)f=new Ip(x,v);else if(m.mode===Ln.POINTS)f=new bo(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Jv(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),pi(f,s),m.extensions&&Xi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Xi(i,h[0],s),h[0];const u=new tt;s.extensions&&Xi(i,u,s),t.associations.set(u,{meshes:e});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(zs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,d=o.length;l<d;l++){const h=o[l];if(h){a.push(h);const u=new Je;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],_=i.samplers[p.sampler],x=p.target,m=x.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(_),d.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],_=h[2],x=h[3],m=h[4],f=[];for(let v=0,S=u.length;v<S;v++){const y=u[v],R=p[v],A=_[v],g=x[v],L=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,R,A,g,L);if(T)for(let M=0;M<T.length;M++)f.push(T[M])}return new Tc(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,d=a.length;l<d;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,ty)});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let d;if(s.isBone===!0?d=new au:l.length>1?d=new tt:l.length===1?d=l[0]:d=new Ut,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(s.name&&(d.userData.name=s.name,d.name=o),pi(d,s),s.extensions&&Xi(n,d,s),s.matrix!==void 0){const h=new Je;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(d);i.associations.set(d,{...h})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new tt;n.name&&(s.name=i.createUniqueName(n.name)),pi(s,n),n.extensions&&Xi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let d=0,h=c.length;d<h;d++)s.add(c[d]);const l=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof gn||u instanceof $t)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Ci[s.path]===Ci.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Ci[s.path]){case Ci.weights:l=Gs;break;case Ci.rotation:l=Vs;break;case Ci.translation:case Ci.scale:l=Ws;break;default:switch(n.itemSize){case 1:l=Gs;break;case 2:case 3:default:l=Ws;break}break}const d=i.interpolation!==void 0?Yv[i.interpolation]:Mr,h=this._getArrayFromAccessor(n);for(let u=0,p=c.length;u<p;u++){const _=new l(c[u]+"."+Ci[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vs?$v:Au;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iy(r,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const d=Cc(Us[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,c=new I;for(let l=0,d=s.length;l<d;l++){const h=s[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,_=u.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),u.normalized){const x=Cc(Us[u.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Gh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Rc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return at.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),pi(r,e),iy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zv(r,e.targets,t):r})}function Ru(r){const e=new Map,t=new Map,n=r.clone();return Cu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Cu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Cu(r.children[n],e.children[n],t)}const sy="./models/monsters/",ry={GreenBlob:{file:"GreenBlob",targetH:1.7},GreenSpikyBlob:{file:"GreenSpikyBlob",targetH:1.6},Mushnub:{file:"Mushnub",targetH:1.6},Hywirl:{file:"Hywirl",targetH:1.7},Goleling:{file:"Goleling",targetH:1.5},Goleling_Evolved:{file:"Goleling_Evolved",targetH:1.7},Glub:{file:"Glub",targetH:1.5},Yeti:{file:"Yeti",targetH:1.8},Fish:{file:"Fish",targetH:1.5},Ghost:{file:"Ghost",targetH:1.7},BlueDemon:{file:"BlueDemon",targetH:1.9},Cactoro:{file:"Cactoro",targetH:1.6},Demon:{file:"Demon",targetH:1.9},Squidle:{file:"Squidle",targetH:1.6},Glub_Evolved:{file:"Glub_Evolved",targetH:1.7},Mushnub_Evolved:{file:"Mushnub_Evolved",targetH:1.7},MushroomKing:{file:"MushroomKing",targetH:1.9},Frog:{file:"Frog",targetH:1.5},PinkBlob:{file:"PinkBlob",targetH:1.6},Birb:{file:"Birb",targetH:1.7}},rl=new Map;let Vh=!1;function oy(r){r.traverse(e=>{if(e instanceof Y){const t=Array.isArray(e.material)?e.material[0]:e.material,n=t&&t.map?t.map:void 0;e.material=ye(16777215,{map:n}),e.castShadow=!0}})}function ay(r,e){oy(r),wu(r);const t=new Tn().setFromObject(r),n=t.max.y-t.min.y||1,i=e/n;r.scale.setScalar(i),r.position.y=-t.min.y*i,r.position.x=-((t.min.x+t.max.x)/2)*i,r.position.z=-((t.min.z+t.max.z)/2)*i;const s=new tt;return s.add(r),s}async function cy(r,e){const t=await new Tu().setPath(sy).loadAsync(`${e.file}.gltf`),n=t.scene;rl.set(r,{scene:ay(n,e.targetH),clips:t.animations})}async function ly(){const r=[];for(const[e,t]of Object.entries(ry))r.push(cy(e,t).catch(n=>console.warn(`[enemyModels] 模型載入失敗 ${e}:`,n)));return await Promise.all(r),Vh=rl.size>0,Vh}function hy(r){const e=rl.get(r);return e?{scene:Ru(e.scene),clips:e.clips}:null}const dy="./models/characters/",uy={henry:"Characters_Henry",barbarossa:"Characters_Captain_Barbarossa",anne:"Characters_Anne",skeleton:"Characters_Skeleton",skeletonHeadless:"Characters_Skeleton_Headless",mako:"Characters_Mako",sharky:"Characters_Sharky"},fy=1.9,ol=new Map;let Wh=!1;function py(r){r.traverse(e=>{if(e instanceof Y){const t=Array.isArray(e.material)?e.material[0]:e.material,n=t&&t.map?t.map:void 0;e.material=ye(16777215,{map:n}),e.castShadow=!0}})}function my(r){py(r),wu(r);const e=new Tn().setFromObject(r),t=e.max.y-e.min.y||1,n=fy/t;r.scale.setScalar(n),r.position.y=-e.min.y*n,r.position.x=-((e.min.x+e.max.x)/2)*n,r.position.z=-((e.min.z+e.max.z)/2)*n;const i=new tt;return i.add(r),i}async function gy(r,e){const t=await new Tu().setPath(dy).loadAsync(`${e}.gltf`);ol.set(r,{scene:my(t.scene),clips:t.animations})}async function _y(){const r=[];for(const[e,t]of Object.entries(uy))r.push(gy(e,t).catch(n=>console.warn(`[npcModels] 模型載入失敗 ${e}:`,n)));return await Promise.all(r),Wh=ol.size>0,Wh}function xy(r){const e=ol.get(r);return e?{scene:Ru(e.scene),clips:e.clips}:null}const vy={trees:["common","birch"],rock:"rock",decor:["grass","flowers","bush"]},yy=new Set(["曙光嶼","翠風林島","港口鎮","靈脈島"]),My={曙光嶼:{trees:["common","birch"],rock:"rock",decor:["grass","flowers","bush"]},翠風林島:{trees:["palm","common"],rock:"rock_moss",decor:["grass","bush","plant"]},燼岩火山島:{trees:["dead"],rock:"rock",decor:["stump"]},霜雪峰島:{trees:["pine_snow","common_snow"],rock:"rock_snow",decor:[]},虛空之心:{trees:["dead"],rock:"rock",decor:[]},界海之門:{trees:["pine_snow","birch"],rock:"rock_snow",decor:[]},港口鎮:{trees:["common","birch"],rock:"rock",decor:["grass","wheat","flowers"]},熔砂島:{trees:["cactus","palm"],rock:"rock",decor:["grass_short"]},珊瑚礁島:{trees:["palm"],rock:"rock",decor:["grass","bush"]},靈脈島:{trees:["common","willow"],rock:"rock_moss",decor:["grass","flowers","plant","bush"]},迷霧沼島:{trees:["willow","dead"],rock:"rock_moss",decor:["grass","plant"]},鹽晶島:{trees:["cactus"],rock:"rock_snow",decor:[]},烈陽礁:{trees:["palm","cactus"],rock:"rock",decor:["grass_short"]}},by=14,wy=1.2,Sy=5,Iu=2e3,fi={x:Iu,z:0},Ty=1100;function Yn(r){return r>Ty?2:1}function Pu(r,e){for(const t of Ui)if(Math.hypot(r-t.x,e-t.z)<t.r)return t;return null}const Ui=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:Iu,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],qh={x:-60,z:-120},Pn={x:-40,z:230,r:26},Xh={x:60,z:-170},jh={x:0,z:288},Lu=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function Ey(r,e){return Lu.some(t=>Math.hypot(r-t.x,e-t.z)<t.r)}function Ca(r){return r*r*(3-2*r)}function Ay(r,e,t){const n=e-r.x,i=t-r.z,s=Math.hypot(n,i);if(s>=r.r)return 0;const o=Ca(Math.min((r.r-s)/by,1));let a=0;for(const d of r.hills){const h=Math.hypot(n-d.x,i-d.z);h<d.r&&(a+=d.h*Ca(1-h/d.r))}const c=Math.sin(e*.3)*Math.cos(t*.3)*.5;let l=0;if(r.crater){const d=Math.hypot(n-r.crater.x,i-r.crater.z);d<r.crater.r&&(l=r.crater.depth*Ca(1-d/r.crater.r))}return o*(wy+a+c-l)}function lt(r,e){let t=0;for(const n of Ui)t=Math.max(t,Ay(n,r,e));return t}function Ic(r,e){return Ui.some(t=>Math.hypot(r-t.x,e-t.z)<t.r+Sy)}function Du(r,e){return lt(r,e)<.25}const xi=[],Ry=.45;function Cy(r,e,t=Ry){let n=r,i=e;for(const s of xi){const o=n-s.x,a=i-s.z,c=s.r+t,l=o*o+a*a;if(l>=c*c)continue;const d=Math.sqrt(l);if(d>1e-4){const h=(c-d)/d;n+=o*h,i+=a*h}else n+=c}return{x:n,z:i}}function Iy(){xi.length=0;const r=new tt;for(const t of Ui)r.add(Ly(t));for(const t of Lu){const n=new Y(new Er(t.r,24),new Ot({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(t.x,lt(t.x,t.z)+.08,t.z),r.add(n)}const e=ye(10134712);for(let t=0;t<10;t++){const n=t/10*Math.PI*2,i=6+t%3*7,s=2.5+t*7%5,o=new Y(new Pt(.9,1.1,s,10),e);o.position.set(Pn.x+Math.cos(n)*i,s/2-1,Pn.z+Math.sin(n)*i),o.rotation.z=(t%5-2)*.08,o.castShadow=!0,r.add(o),xi.push({x:o.position.x,z:o.position.z,r:1})}return r.add(Py()),r}function Py(){const r=new tt,e=fi.x,t=[{x:e-12,z:-26,body:15260864,roof:12606010},{x:e+12,z:-28,body:14207144,roof:3828378},{x:e-20,z:-12,body:14733488,roof:10119738},{x:e+22,z:-14,body:15260864,roof:4885082},{x:e,z:-18,body:15787208,roof:11552840}];for(const o of t){const a=new tt,c=new Y(new Yt(4.2,3,3.6),ye(o.body));c.position.y=1.5;const l=new Y(new cn(3.4,2,4),ye(o.roof));l.position.y=3.9,l.rotation.y=Math.PI/4;const d=new Y(new Yt(.9,1.5,.15),ye(6964002));d.position.set(0,.75,1.85),a.add(c,l,d),yi(a),a.traverse(h=>{h instanceof Y&&(h.castShadow=!0)}),a.rotation.y=(o.x+o.z)%5*.18,a.position.set(o.x,lt(o.x,o.z),o.z),r.add(a),xi.push({x:o.x,z:o.z,r:2.3})}const n=e+6,i=ye(10516552),s=ye(6964002);for(let o=0;o<8;o++){const a=-48-o*2.2,c=new Y(new Yt(3,.25,2),i);if(c.position.set(n,.85,a),c.castShadow=!0,r.add(c),o%2===0)for(const l of[-1.4,1.4]){const d=new Y(new Pt(.14,.16,1.8,8),s);d.position.set(n+l,0,a),d.castShadow=!0,r.add(d),xi.push({x:n+l,z:a,r:.35})}}return r}function Ly(r){const e=new tt,t=r.r*2+14,n=150,i=new vi(t,t,n,n);i.rotateX(-Math.PI/2);const s=i.getAttribute("position"),o=new Float32Array(s.count*3),a=new ue(r.sand),c=new ue(r.grass),l=new ue(r.dark),d=new ue;for(let x=0;x<s.count;x++){const m=s.getX(x)+r.x,f=s.getZ(x)+r.z,v=lt(m,f);s.setY(x,v),v<.8?d.copy(a):v<1.8?d.lerpColors(a,c,(v-.8)/1):d.lerpColors(c,l,Math.min((v-1.8)/9,1)),o[x*3]=d.r,o[x*3+1]=d.g,o[x*3+2]=d.b}i.setAttribute("color",new nn(o,3)),i.computeVertexNormals();const h=new Y(i,ye(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(r.x,0,r.z),e.add(h);const u=My[r.name]??vy,p=Fh()&&!yy.has(r.name);let _=0;for(let x=0;x<300&&_<r.treeCount;x++){const m=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*(r.r-6),v=r.x+Math.cos(m)*f,S=r.z+Math.sin(m)*f,y=lt(v,S);if(y<=1.8||y>=11)continue;const R=p&&u.trees.length?Ta(u.trees[Math.random()*u.trees.length|0]):null;if(R){const A=.85+Math.random()*.35;R.scale.setScalar(A),R.rotation.y=Math.random()*Math.PI*2,R.position.set(v,y-.1,S),e.add(R),xi.push({x:v,z:S,r:(R.userData.radius||1)*A})}else e.add(Uy(v,y,S,r.treeColor));_++}for(let x=0;x<14;x++){const m=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*(r.r-4),v=r.x+Math.cos(m)*f,S=r.z+Math.sin(m)*f,y=lt(v,S),R=p?Ta(u.rock):null;if(R){const A=.8+Math.random()*.7;R.scale.setScalar(A),R.rotation.y=Math.random()*Math.PI*2,R.position.set(v,y,S),e.add(R),xi.push({x:v,z:S,r:.7*A})}else{const A=.7+Math.random()*.9,g=new Y(new Jc(A),ye(9079434));g.position.set(v,y+.3,S),g.rotation.set(Math.random(),Math.random(),Math.random()),g.castShadow=!0,e.add(g),xi.push({x:v,z:S,r:A*.75})}}if(Fh()&&u.decor.length){const x=Math.round(r.r*1.4);for(let m=0;m<x;m++){const f=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*(r.r-3),S=r.x+Math.cos(f)*v,y=r.z+Math.sin(f)*v,R=lt(S,y);if(R<=1.5||R>=9)continue;const A=Ta(u.decor[Math.random()*u.decor.length|0]);A&&(A.scale.setScalar(.8+Math.random()*.6),A.rotation.y=Math.random()*Math.PI*2,A.position.set(S,R-.05,y),e.add(A))}}return e}const Dy=[{r:1.75,y:3.95,dx:0,dz:0,sy:1.2},{r:1.2,y:4.7,dx:.72,dz:-.42,sy:1},{r:1.15,y:3.65,dx:-.78,dz:.55,sy:1},{r:1.05,y:4.35,dx:-.18,dz:-.82,sy:1}],Ny=1.05;function Uy(r,e,t,n){const i=new tt,s=.8+Math.random()*.6,o=new Y(new Pt(.24,.42,3.3,7),ye(7293480));o.position.y=1.6,o.castShadow=!0,i.add(o);const a=new ue(n);for(const c of Dy){const l=a.clone().offsetHSL(0,(Math.random()-.5)*.05,(Math.random()-.5)*.1),d=new Y(new Ar(c.r,0),ye(l.getHex()));d.position.set(c.dx,c.y,c.dz),d.scale.set(1,c.sy,1),d.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),d.castShadow=!0,i.add(d)}return yi(i),i.scale.setScalar(s),i.rotation.y=Math.random()*Math.PI*2,i.position.set(r,e-.1,t),xi.push({x:r,z:t,r:Ny*s}),i}const $h=16,Yh=10,Kh=1.6,Zh=[4,-63];class Oy{constructor(){w(this,"mesh");w(this,"heading",Math.PI);w(this,"speed",0);w(this,"bobPhase",0);this.mesh=new tt;const e=new Y(new Zc(1.1,2.6,4,10),ye(9067056));e.rotation.x=Math.PI/2,e.scale.set(1,1,.55),e.position.y=.3;const t=new Y(new Yt(1.7,.15,3.6),ye(11567184));t.position.y=.75;const n=new Y(new qn(1.55,.12,8,20),ye(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const i=new Y(new Pt(.09,.11,3.6),ye(6964002));i.position.set(0,2.4,.3);const s=new Y(new vi(1.9,2.4),ye(15788760));s.material.side=jt,s.position.set(0,2.6,.28);const o=new Y(new Pt(.05,.05,2),ye(6964002));o.rotation.z=Math.PI/2,o.position.set(0,1.4,.28),this.mesh.add(e,t,n,i,s,o),yi(this.mesh),this.mesh.traverse(a=>{a instanceof Y&&(a.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(Zh[0],.3,Zh[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(e,t){this.mesh.position.set(e,.3,t)}sail(e,t,n=1){let i=0;t.isDown("KeyW")?i=$h*n:t.isDown("KeyS")&&(i=-5),this.speed+=zs.clamp(i-this.speed,-Yh*e,Yh*e);const s=.4+.6*Math.min(Math.abs(this.speed)/$h,1);t.isDown("KeyA")&&(this.heading+=Kh*s*e),t.isDown("KeyD")&&(this.heading-=Kh*s*e);const o=new I(Math.sin(this.heading),0,Math.cos(this.heading)),a=this.mesh.position.clone().addScaledVector(o,this.speed*e);Du(a.x,a.z)?(this.mesh.position.x=a.x,this.mesh.position.z=a.z):this.speed=0,this.idle(e)}idle(e){this.bobPhase+=e*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let e=2.5;e<=7;e+=1.5)for(let t=0;t<8;t++){const n=t/8*Math.PI*2,i=this.mesh.position.x+Math.sin(n)*e,s=this.mesh.position.z+Math.cos(n)*e;if(lt(i,s)>.3)return new I(i,lt(i,s),s)}return null}}const Fy=100,ky=30,By=10,zy=3;class Hy{constructor(){w(this,"level",1);w(this,"exp",0);w(this,"points",0);w(this,"weaponLevel",0);w(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});w(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return Fy+this.attrs.hp*10+this.equip.hp}get maxMP(){return ky+this.attrs.spirit*5+this.equip.mp}get atk(){return By+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(e){this.exp+=e;let t=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=zy,t++;return t}allocate(e){return this.points<=0?!1:(this.points--,this.attrs[e]++,!0)}}const Nu={small:10,medium:50,large:200};class Gy{constructor(){w(this,"coins",0);w(this,"potions",0);w(this,"crystals",{small:0,medium:0,large:0});w(this,"firstSeaGem",!1);w(this,"secondSeaGem",!1)}useCrystals(e,t){const n=Math.min(t,this.crystals[e]);return this.crystals[e]-=n,n*Nu[e]}}const Mt={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056},Pc=new I(0,1.45,-.46),Vy=new I(.18,1.32,.5);function Jh(r){const e=new tt,t=new Y(new Pt(.14,.12,.36,10),ye(Mt.legs));t.position.y=-.18;const n=new tt;n.position.y=-.36;const i=new Y(new Pt(.12,.1,.32,10),ye(Mt.legs));i.position.y=-.16;const s=new Y(new Yt(.21,.18,.36),ye(Mt.boots));s.position.set(0,-.36,.05);const o=new Y(new Pt(.15,.13,.12,10),ye(Mt.boots));return o.position.y=-.28,n.add(i,s,o),e.add(t,n),e.position.set(r,.72,0),{leg:e,shin:n}}function Qh(r,e){const t=new tt,n=new Y(new Vt(.15,12,10),ye(Mt.guard));n.position.y=.02,n.scale.set(1,.8,1);const i=new Y(new Pt(.1,.085,.34,10),ye(e));i.position.y=-.18;const s=new tt;s.position.y=-.35;const o=new Y(new Pt(.085,.07,.26,10),ye(Mt.skin));o.position.y=-.13;const a=new Y(new qn(.09,.035,8,12),ye(Mt.glove));a.position.y=-.02,a.rotation.x=Math.PI/2;const c=new Y(new Vt(.1,10,8),ye(Mt.glove));return c.position.y=-.25,s.add(o,a,c),t.add(n,i,s),t.position.set(r,1.7,0),{arm:t,forearm:s}}function Wy(){const r=new tt,e=ye(Mt.blade,{emissive:6737151,emissiveIntensity:0}),t=new Y(new Yt(.13,1,.035),e);t.position.y=.62;const n=new Y(new cn(.075,.24,4),e);n.position.y=1.24,n.rotation.y=Math.PI/4;const i=new Y(new Yt(.035,.95,.05),ye(Mt.shieldRim));i.position.y=.6;const s=new Y(new Yt(.4,.09,.09),ye(Mt.guard));s.position.y=.1;const o=new Y(new cn(.06,.16,6),ye(Mt.guard));o.position.set(.2,.16,0);const a=o.clone();a.position.x=-.2;const c=new Y(new Pt(.05,.05,.3,8),ye(Mt.grip));c.position.y=-.1;const l=new Y(new Vt(.08,8,8),ye(Mt.gold));return l.position.y=-.28,r.add(t,n,i,s,o,a,c,l),r.position.y=-.58,r.rotation.x=Math.PI/2,{sword:r,bladeMaterial:e}}function Uu(r=Mt.tunic,e){const t=e??new ue(r).multiplyScalar(.74).getHex(),n=new tt,i=new tt;n.add(i);const s=Jh(.17),o=Jh(-.17);i.add(s.leg,o.leg);const a=ye(r),c=new Y(new Pt(.32,.44,.72,14),a);c.position.y=1.4;const l=new Y(new Pt(.44,.6,.5,14,1,!0),a);l.position.y=.74;const d=new Y(new Pt(.26,.34,.16,14),ye(Mt.collar));d.position.y=1.78;const h=new Y(new Pt(.46,.48,.13,14),ye(Mt.belt));h.position.y=.98;const u=new Y(new Yt(.16,.12,.05),ye(Mt.gold));u.position.set(0,.98,.47);const p=new Y(new Yt(.16,.18,.12),ye(Mt.glove));p.position.set(.34,.9,.18),i.add(c,l,d,h,u,p);const _=new Y(new Pt(.13,.15,.2,10),ye(Mt.skin));_.position.y=1.86,i.add(_);const x=new Y(new Vt(.34,16,14),ye(Mt.skin));x.position.y=2.08;const m=new Y(new Vt(.37,16,14),ye(Mt.hair));m.position.set(0,2.16,-.07),m.scale.set(1,.85,1);const f=new Y(new cn(.32,.66,14),ye(t));f.position.set(0,2.54,-.12),f.rotation.x=-.5;const v=new Y(new cn(.1,.4,10),ye(r));v.position.set(0,2.78,-.5),v.rotation.x=-1.5;const S=new Y(new qn(.31,.05,8,16),ye(Mt.gold));S.position.set(0,2.28,-.04),S.rotation.x=Math.PI/2,i.add(x,m,f,v,S);const y=ye(Mt.skin);for(const H of[-1,1]){const J=new Y(new cn(.09,.26,6),y);J.position.set(.32*H,2.06,-.02),J.rotation.z=H*-1.1,i.add(J);const ie=new Y(new Vt(.12,10,8),ye(Mt.hair));ie.position.set(.28*H,1.96,-.04),ie.scale.set(.7,1.1,.8),i.add(ie);const Z=new Y(new Vt(.075,10,8),ye(16777215));Z.position.set(.13*H,2.1,.29),Z.scale.set(.8,1.1,.6);const ae=new Y(new Vt(.042,8,6),ye(Mt.eye));ae.position.set(.13*H,2.09,.34);const j=new Y(new Yt(.13,.035,.04),ye(Mt.brow));j.position.set(.13*H,2.21,.3),j.rotation.z=H*-.12,i.add(Z,ae,j)}const R=new Y(new cn(.04,.1,6),y);R.position.set(0,2.02,.34),R.rotation.x=Math.PI/2,i.add(R);const A=Qh(.46,r),g=Qh(-.46,r),L=Wy();g.arm.add(L.sword),i.add(A.arm,g.arm);const T=new tt,M=new Y(new Pt(.42,.46,.07,16),ye(Mt.shield));M.rotation.x=Math.PI/2;const D=new Y(new qn(.44,.05,8,16),ye(Mt.shieldRim)),G=new Y(new Wn(.12),ye(Mt.gold));return G.position.z=-.06,G.scale.set(1,1.4,.4),T.add(M,D,G),T.position.copy(Pc),i.add(T),yi(n),n.traverse(H=>{H instanceof Y&&(H.castShadow=!0)}),{group:n,body:i,armL:A.arm,armR:g.arm,forearmL:A.forearm,forearmR:g.forearm,legL:s.leg,legR:o.leg,shinL:s.shin,shinR:o.shin,shield:T,sword:L.sword,bladeMaterial:L.bladeMaterial,tunicMat:a}}const qy=28,ed=11,td=8,Xy=22,jy=.25,$y=.45,nd=25,Yy=22,id=.38,sd=.22,Ky=9,Zy=14,ji=.25,rd=1.25,od=.35,Jy=.35,Qy=.4,ad=10,eM=.15,tM=.26,nM=.5,iM=3.4,sM=Math.cos(75*Math.PI/180),rM=4.5;class oM{constructor(){w(this,"mesh");w(this,"stats",new Hy);w(this,"hp");w(this,"mp");w(this,"stamina",100);w(this,"facing",0);w(this,"blocking",!1);w(this,"hurtT",0);w(this,"hasWindGem",!1);w(this,"windLevel",1);w(this,"hasFrostGem",!1);w(this,"sliding",!1);w(this,"divingZone",null);w(this,"airJumpsUsed",0);w(this,"gliding",!1);w(this,"chillT",0);w(this,"burnT",0);w(this,"burnDps",0);w(this,"burnTickAccum",0);w(this,"knockbackVel",new I);w(this,"velocityY",0);w(this,"grounded",!0);w(this,"attackCd",0);w(this,"swingT",0);w(this,"dodgeT",0);w(this,"invulnT",0);w(this,"lungeT",0);w(this,"spinT",0);w(this,"holdT",0);w(this,"chargeReadyFired",!1);w(this,"walkPhase",0);w(this,"idlePhase",0);w(this,"moveAmount",0);w(this,"renderYaw",0);w(this,"dodgeDir",new I);w(this,"body");w(this,"armL");w(this,"armR");w(this,"forearmL");w(this,"forearmR");w(this,"legL");w(this,"legR");w(this,"shinL");w(this,"shinR");w(this,"shield");w(this,"sword");w(this,"bladeMaterial");w(this,"shieldHomePos",new I(0,1.45,-.46));w(this,"shieldBlockPos",new I(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP;const e=Uu(Mt.tunic,Mt.tunicDark);this.mesh=e.group,this.body=e.body,this.armL=e.armL,this.armR=e.armR,this.forearmL=e.forearmL,this.forearmR=e.forearmR,this.legL=e.legL,this.legR=e.legR,this.shinL=e.shinL,this.shinR=e.shinR,this.shield=e.shield,this.sword=e.sword,this.bladeMaterial=e.bladeMaterial,this.respawn()}get invulnerable(){return this.invulnT>0}get attacking(){return this.swingT>0||this.spinT>0}get airborne(){return!this.grounded}get chargeRatio(){return zs.clamp((this.holdT-ji)/(rd-ji),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,lt(0,-52),-52)}update(e,t,n){this.attackCd=Math.max(0,this.attackCd-e),this.invulnT=Math.max(0,this.invulnT-e),this.swingT=Math.max(0,this.swingT-e),this.dodgeT=Math.max(0,this.dodgeT-e),this.lungeT=Math.max(0,this.lungeT-e),this.spinT=Math.max(0,this.spinT-e),this.chillT=Math.max(0,this.chillT-e),this.hurtT=Math.max(0,this.hurtT-e);const i=this.stats.speedMultiplier,s=new I;let o=!1,a=!1;if(this.blocking=t.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)s.copy(this.dodgeDir).multiplyScalar(Xy*e);else{const x=new I(-Math.sin(n),0,-Math.cos(n)),m=new I(-x.z,0,x.x);if(t.isDown("KeyW")&&s.add(x),t.isDown("KeyS")&&s.sub(x),t.isDown("KeyD")&&s.add(m),t.isDown("KeyA")&&s.sub(m),s.lengthSq()>0){s.normalize(),this.facing=Math.atan2(s.x,s.z);const f=(this.blocking?Jy:this.holdT>ji?Qy:1)*(this.chillT>0?nM:1);s.multiplyScalar(td*i*f*e)}if((t.wasPressed("ShiftLeft")||t.wasPressed("ShiftRight"))&&this.stamina>=nd){a=!0,this.holdT=0,this.chargeReadyFired=!1;const f=s.lengthSq()>0?s.clone().normalize():new I(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(f),this.dodgeT=jy,this.invulnT=$y,this.stamina-=nd}}if(this.lungeT>0&&s.addScaledVector(new I(Math.sin(this.facing),0,Math.cos(this.facing)),Ky*e),this.stamina=Math.min(100,this.stamina+Yy*e),this.moveAmount=s.length()/Math.max(e,1e-6)/td,this.sliding=!1,this.grounded){const x=this.mesh.position.x,m=this.mesh.position.z,f=.6,v=(lt(x+f,m)-lt(x-f,m))/(2*f),S=(lt(x,m+f)-lt(x,m-f))/(2*f),y=Math.hypot(v,S);y>.85&&(this.sliding=!0,s.x+=-v/y*6.5*e,s.z+=-S/y*6.5*e)}this.knockbackVel.lengthSq()>.01?(s.addScaledVector(this.knockbackVel,e),this.knockbackVel.multiplyScalar(Math.max(1-e*6,0))):this.knockbackVel.set(0,0,0);const c=this.mesh.position.clone().add(s),l=Cy(c.x,c.z);c.x=l.x,c.z=l.z,(Ic(c.x,c.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(c.x-this.divingZone.x,c.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=c.x,this.mesh.position.z=c.z),t.wasPressed("Space")&&(this.grounded?(this.velocityY=ed,this.grounded=!1,o=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=ed*.9,o=!0)),this.velocityY-=qy*e,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&t.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*e;const h=lt(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let u=!1,p=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,t.consumeLeftRelease();else if(t.leftDown&&(this.holdT+=e,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),t.consumeLeftRelease()){const x=this.holdT;this.holdT=0,this.chargeReadyFired=!1,x>ji?(p=this.chargeRatioFor(x),this.spinT=od,this.attackCd=id/i):this.attackCd<=0&&(this.attackCd=id/i,this.swingT=sd,this.lungeT=.12,u=!0)}return this.animate(e),{attacked:u,spin:p,chargeReady:_,jumped:o,dodged:a}}chargeRatioFor(e){return zs.clamp((e-ji)/(rd-ji),0,1)}animate(e){let t=this.facing-this.renderYaw;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;this.renderYaw+=t*Math.min(Zy*e,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=e*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=e*11*Math.min(this.moveAmount,1.4));const i=this.dodgeT>0,s=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=i?1.4:s,this.legR.rotation.x=i?1.4:-s,this.shinL.rotation.x=i?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=i?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:i?-1.6:-s*.8,this.forearmL.rotation.x=this.blocking?-.7:i?-1.4:-.25-Math.max(0,-s)*.5;const o=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(o,Math.min(e*14,1));const a=this.holdT>ji;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/sd;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else a?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=s*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||a?0:i?-1.4:-.2-Math.max(0,s)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const c=this.chargeRatio;if(c>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new ue(16777215),h)}else this.bladeMaterial.emissiveIntensity=c*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/od)*Math.PI*2:0;const l=n?Math.abs(Math.sin(this.walkPhase))*.07:0,d=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=l+d,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(e,t){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&t&&this.stamina>=ad){const i=new I().subVectors(t,this.mesh.position).setY(0).normalize(),s=new I(Math.sin(this.facing),0,Math.cos(this.facing));if(i.dot(s)>tM){this.stamina-=ad;const o=Math.max(1,Math.round((e-this.stats.def)*eM));return this.hp=Math.max(0,this.hp-o),this.invulnT=.25,{taken:o,blocked:!0}}}const n=Math.max(1,e-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,this.hurtT=.3,{taken:n,blocked:!1}}applyEnvironmentDamage(e){this.isDead||(this.hp=Math.max(0,this.hp-e))}chill(e){this.isDead||(this.chillT=Math.max(this.chillT,e))}applyBurn(e,t){this.isDead||(this.burnT=Math.max(this.burnT,e),this.burnDps=Math.max(this.burnDps,t))}tickBurn(e){return this.burnT<=0||this.isDead?0:(this.burnT-=e,this.burnTickAccum+=e,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(e,t){if(this.isDead)return;const n=new I().subVectors(this.mesh.position,e).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(t)}blinkTo(e,t){this.mesh.position.set(e,lt(e,t),t),this.invulnT=Math.max(this.invulnT,.3)}}const aM={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},cM=1.5,Ia=.45,cd=12,lM=3.2,hM=20,dM=25,uM=.45,fM=.35,pM=14,mM=1.7,ld=.8,gM=.3,_M=1.1,xM=2.5,vM=2,yM={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}},MM={slime:"GreenBlob",elite:"GreenSpikyBlob",vine:"Mushnub",windGuardian:"Hywirl",ember:"Goleling",earthGuardian:"Goleling_Evolved",frost:"Glub",frostGuardian:"Yeti",deep:"Fish",voidGuardian:"Ghost",voidLord:"BlueDemon",sand:"Cactoro",magmaGuardian:"Demon",reef:"Squidle",coralGuardian:"Glub_Evolved",spore:"Mushnub_Evolved",lifeGuardian:"MushroomKing",marsh:"Frog",brine:"PinkBlob",solar:"Birb"},bM={idle:["Idle","Flying_Idle"],move:["Walk","Run","Fast_Flying","Flying"],attack:["Bite_Front","Punch","Headbutt","Weapon","Attack"],hit:["HitRecieve","HitReact"],death:["Death"]};class Se{constructor(e,t,n){w(this,"mesh");w(this,"kind");w(this,"hp");w(this,"maxHp");w(this,"dmg");w(this,"state","patrol");w(this,"remote",!1);w(this,"netIndex",-1);w(this,"pendingNetDamage",0);w(this,"pendingNetFreeze",0);w(this,"pendingNetStun",0);w(this,"pendingNetBurnSec",0);w(this,"pendingNetBurnDps",0);w(this,"remoteFlag",0);w(this,"remoteRingT",0);w(this,"netTarget",new I);w(this,"netYaw",0);w(this,"netDead",!1);w(this,"config");w(this,"home");w(this,"waypoint");w(this,"attackCd",0);w(this,"stateT",0);w(this,"respawnT",0);w(this,"flashT",0);w(this,"freezeT",0);w(this,"burnT",0);w(this,"burnDps",0);w(this,"burnTickAccum",0);w(this,"stunT",0);w(this,"specialEvent",null);w(this,"specialPhase","");w(this,"hopPhase",Math.random()*Math.PI*2);w(this,"lungeDir",new I);w(this,"lungeHitDone",!1);w(this,"knockback",new I);w(this,"baseColor");w(this,"body");w(this,"blob");w(this,"blobMaterial");w(this,"useModel");w(this,"mixer",null);w(this,"actions",new Map);w(this,"currentAction",null);w(this,"tintMats",[]);w(this,"tintBase",[]);w(this,"dyingTime");w(this,"hpBar");w(this,"hpCanvas");w(this,"hpTexture");w(this,"special");w(this,"specialCd",0);w(this,"specialRing",null);w(this,"specialRingMat",null);w(this,"specialRingT",0);this.kind=e,this.config=yM[e];const i=Yn(t)===2;this.maxHp=Math.round(this.config.hp*(i?xM:1)),this.dmg=Math.round(this.config.dmg*(i?vM:1)),this.hp=this.maxHp,this.home=new I(t,0,n),this.waypoint=this.home.clone(),this.baseColor=new ue(this.config.color),this.special=aM[e]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new tt,this.body=new tt,this.mesh.add(this.body);const s=MM[e],o=s?hy(s):null;if(this.useModel=o!==null,this.dyingTime=this.useModel?_M:gM,o){this.body.add(o.scene),o.scene.traverse(a=>{if(a instanceof Y&&a.material instanceof hu){const c=a.material.clone();a.material=c,this.tintMats.push(c),this.tintBase.push(c.color.clone())}}),this.mixer=new _u(o.scene);for(const[a,c]of Object.entries(bM)){const l=o.clips.find(d=>c.includes(d.name));l&&this.actions.set(a,this.mixer.clipAction(l))}this.play("idle")}else{const a=this.config.scale>=1.8,c=new ue(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=ye(this.config.color,{transparent:!0,opacity:.86}),this.blob=new Y(new Vt(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const l=new Y(new cn(.26,a?.6:.45,10),ye(this.config.color,{transparent:!0,opacity:.86}));if(l.position.y=a?1.42:1.35,l.rotation.z=.12,this.body.add(this.blob,l),a){const f=ye(c);for(const v of[-1,1]){const S=new Y(new cn(.13,.5,8),f);S.position.set(.42*v,1.18,-.05),S.rotation.z=v*-.7,this.body.add(S)}}const d=ye(16777215),h=ye(2105392),u=ye(c),p=a?.2:.17;for(const f of[-1,1]){const v=new Y(new Vt(p,12,10),d);v.position.set(.3*f,.82,.6),v.scale.set(.85,1.05,.7);const S=new Y(new Vt(p*.5,8,6),h);S.position.set(.3*f+.02*f,.8,.74);const y=new Y(new Yt(.26,.07,.07),u);y.position.set(.3*f,1.04,.62),y.rotation.z=f*(a?.5:.15),this.body.add(v,S,y)}const _=new Y(new Vt(a?.22:.12,12,8),ye(3151904));_.position.set(0,a?.5:.54,.66),_.scale.set(1.3,a?.8:.45,.5),this.body.add(_),yi(this.body),this.body.traverse(f=>{f instanceof Y&&(f.castShadow=!0)});const x=new Y(new Vt(.42,12,10),ye(c,{transparent:!0,opacity:.55}));x.position.y=.58,x.raycast=()=>{},this.body.add(x);const m=new Y(new Vt(.22,10,8),new Ot({color:16777215,transparent:!0,opacity:.4}));m.position.set(-.28,.95,.42),m.scale.set(1.2,.7,.6),m.raycast=()=>{},this.body.add(m),this.tintMats.push(this.blobMaterial),this.tintBase.push(this.baseColor.clone())}this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new Pp(this.hpCanvas),this.hpBar=new ou(new su({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(t,lt(t,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}stepMixer(e){var t;(t=this.mixer)==null||t.update(e)}play(e,t=!0,n=.18){if(!this.mixer)return;const i=this.actions.get(e)??this.actions.get("idle");i&&(t&&i===this.currentAction||(i.reset(),i.setLoop(t?qd:Vc,t?1/0:1),i.clampWhenFinished=!t,i.enabled=!0,i.fadeIn(n),i.play(),this.currentAction&&this.currentAction!==i&&this.currentAction.fadeOut(n),this.currentAction=i))}setTint(e,t=1){for(let n=0;n<this.tintMats.length;n++)e?this.tintMats[n].color.lerpColors(this.tintBase[n],e,t):this.tintMats[n].color.copy(this.tintBase[n])}update(e,t,n){if(this.state==="dead")return this.respawnT-=e,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=e;const c=1-Math.max(this.stateT,0)/this.dyingTime;if(this.useModel)this.stepMixer(e),c>.75&&this.body.scale.setScalar(Math.max(1-(c-.75)/.25,.01));else{const l=c<.4?1+c*.9:Math.max(1.36*(1-(c-.4)/.6),.01);this.body.scale.setScalar(l)}return this.stateT<=0&&(this.state="dead",this.respawnT=dM,this.mesh.visible=!1,this.body.scale.setScalar(1)),0}if(this.attackCd=Math.max(0,this.attackCd-e),this.specialCd=Math.max(0,this.specialCd-e),this.flashT=Math.max(0,this.flashT-e),this.freezeT>0)return this.freezeT-=e,this.setTint(new ue(12577535),.75),0;if(this.stunT>0){this.stunT-=e;const c=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.setTint(new ue(16773248),c),0}this.stepMixer(e);const i=this.mesh.position,s=i.distanceTo(t),o=i.distanceTo(this.home);let a=0;switch(this.knockback.lengthSq()>.01&&(i.addScaledVector(this.knockback,e),this.knockback.multiplyScalar(Math.max(1-e*8,0))),this.state){case"windup":{this.stateT-=e,this.useModel?this.play("idle"):(this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25),this.stateT<=0&&(this.lungeDir.subVectors(t,i).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=fM,this.useModel&&this.play("attack",!1));break}case"lunge":{this.stateT-=e,i.addScaledVector(this.lungeDir,pM*e),this.useModel||this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&s<mM&&(this.lungeHitDone=!0,a=this.dmg),this.stateT<=0&&(this.state="recover",this.stateT=ld);break}case"recover":{this.stateT-=e,this.useModel?this.play("idle"):this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const c=this.special;if(this.stateT-=e,this.specialPhase==="telegraph"){const l=1-Math.max(this.stateT,0)/c.telegraph;if(this.useModel||this.body.scale.setScalar(1+l*.25),this.updateRing(l,!0),this.stateT<=0){const d=!n&&s<=c.radius,h=Math.round(this.dmg*c.dmgMul);let u=0;d&&c.effect==="drain"&&(u=Math.min(this.maxHp-this.hp,Math.round(h*cM)),u>0&&(this.hp+=u,this.drawHpBar())),this.specialEvent={name:c.name,sfx:c.sfx,color:c.color,dmg:h,knock:c.knock,effect:c.effect,radius:c.radius,hitPlayer:d,healed:u},this.specialPhase="blast",this.specialRingT=0,this.stateT=Ia,this.useModel?this.play("attack",!1):this.body.scale.setScalar(1)}}else this.specialRingT+=e,this.updateRing(this.specialRingT/Ia,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=ld);break}default:{if(n)this.state="patrol";else if(o>hM)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&s<=cd&&s<=this.special.radius+2){this.startSpecial();break}else if(s<=lM&&this.attackCd<=0){this.state="windup",this.stateT=uM,this.attackCd=1.8;break}else s<=cd?this.state="chase":this.state="patrol";const c=this.state==="chase"?t:this.waypoint;this.state==="patrol"&&i.distanceTo(this.waypoint)<1&&this.pickWaypoint();const l=new I().subVectors(c,i);l.y=0;const d=this.state==="chase"?this.config.speed:this.config.speed*.5,h=l.lengthSq()>.01;if(h&&(l.normalize(),i.addScaledVector(l,d*e),this.mesh.rotation.y=Math.atan2(l.x,l.z)),this.useModel)this.play(h?"move":"idle");else{this.hopPhase+=e*(this.state==="chase"?9:5);const u=Math.abs(Math.sin(this.hopPhase));this.body.position.y=u*.35,this.body.scale.y=.8+u*.3,this.body.scale.x=this.body.scale.z=1.1-u*.15}break}}if(this.flashT>0?this.setTint(new ue(16777215),1):this.state==="windup"?this.setTint(new ue(16733508),.55):this.setTint(null),this.burnT>0&&this.flashT<=0)for(const c of this.tintMats)c.color.lerp(new ue(16738860),.5);return i.y=lt(i.x,i.z),a}freeze(e){if(!this.isDead){if(this.remote){this.pendingNetFreeze=Math.max(this.pendingNetFreeze,e);return}this.freezeT=Math.max(this.freezeT,e)}}burn(e,t){if(!this.isDead){if(this.remote){this.pendingNetBurnSec=Math.max(this.pendingNetBurnSec,e),this.pendingNetBurnDps=Math.max(this.pendingNetBurnDps,t);return}this.burnT=Math.max(this.burnT,e),this.burnDps=Math.max(this.burnDps,t)}}stun(e){if(!this.isDead){if(this.remote){this.pendingNetStun=Math.max(this.pendingNetStun,e);return}this.stunT=Math.max(this.stunT,e)}}get statusFlag(){return this.specialPhase==="telegraph"?1:this.specialPhase==="blast"?2:this.freezeT>0?3:this.stunT>0?4:this.burnT>0?5:0}get specialSkill(){var e;return((e=this.special)==null?void 0:e.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const e=new Ot({color:this.special.color,transparent:!0,opacity:.4,side:jt,depthWrite:!1}),t=new Y(new Rr(.62,1,48),e);t.rotation.x=-Math.PI/2,t.position.y=.12,t.raycast=()=>{},this.mesh.add(t),this.specialRing=t,this.specialRingMat=e}updateRing(e,t){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(t)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(e*Math.PI*6));else{const i=(.15+.95*Math.min(e,1))*n;this.specialRing.scale.set(i,i,i),this.specialRingMat.opacity=.7*(1-Math.min(e,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(e){return this.burnT<=0||this.isDead?0:(this.burnT-=e,this.burnTickAccum+=e,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(e,t){return this.isDead?!1:this.remote?(this.pendingNetDamage+=e,this.flashT=.12,!1):(this.hp=Math.max(0,this.hp-e),this.flashT=.12,t&&this.knockback.copy(t).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=this.dyingTime,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),this.useModel&&this.play("death",!1),!0):!1)}refreshHpBar(){this.drawHpBar()}get remoteStatusFlag(){return this.remoteFlag}becomeAuthoritative(){if(this.remote=!1,!this.isDead){switch(this.remoteFlag){case 3:this.freezeT=Math.max(this.freezeT,1.5);break;case 4:this.stunT=Math.max(this.stunT,1.5);break;case 5:this.burnT=Math.max(this.burnT,1.5),this.burnDps=Math.max(this.burnDps,4);break}this.attackCd=Math.max(this.attackCd,.8),this.specialCd=Math.max(this.specialCd,1.5),this.waypoint.copy(this.mesh.position).setY(0),this.state="patrol"}}updateRemote(e){if(!this.mesh.visible)return;const t=1-Math.exp(-12*e);this.mesh.position.lerp(this.netTarget,t);let n=this.netYaw-this.mesh.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.mesh.rotation.y+=n*t,this.flashT=Math.max(0,this.flashT-e),this.useModel?(this.stepMixer(e),this.play("move")):(this.hopPhase+=e*6,this.body.position.y=Math.abs(Math.sin(this.hopPhase))*.12),this.flashT>0?this.setTint(new ue(16777215),.7):this.setTint(null),this.renderRemoteStatus(e)}renderRemoteStatus(e){const t=this.remoteFlag;if(t===1?(this.ensureRing(),this.remoteRingT+=e,this.updateRing(this.remoteRingT,!0)):t===2?(this.ensureRing(),this.remoteRingT+=e,this.updateRing(this.remoteRingT/Ia,!1)):this.hideRing(),!(this.flashT>0)){if(t===3)this.setTint(new ue(12577535),.75);else if(t===4){const n=.4+.4*Math.abs(Math.sin(this.hopPhase*5));this.setTint(new ue(16773248),n)}else if(t===5)for(const n of this.tintMats)n.color.lerp(new ue(16738860),.5)}}applyNetSnapshot(e,t,n,i,s,o,a){const c=!this.netDead;return this.netDead=s,this.hp=o,this.state=s?"dead":"patrol",a!==this.remoteFlag&&(this.remoteFlag=a,this.remoteRingT=0),s?(this.remoteFlag=0,this.hideRing(),this.mesh.visible&&(this.mesh.visible=!1,this.hpBar.visible=!1),c):(this.mesh.visible||(this.mesh.visible=!0,this.hpBar.visible=!0,this.mesh.position.set(e,t,n)),this.netTarget.set(e,t,n),this.netYaw=i,this.drawHpBar(),!1)}revive(){this.hp=this.maxHp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,lt(this.home.x,this.home.z),this.home.z),this.drawHpBar(),this.useModel&&(this.currentAction=null,this.play("idle",!0,0)),this.setTint(null)}pickWaypoint(){const e=Math.random()*Math.PI*2,t=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(e)*t,0,this.home.z+Math.sin(e)*t)}drawHpBar(){const e=this.hpCanvas.getContext("2d");e&&(e.clearRect(0,0,96,18),e.fillStyle="rgba(0,0,0,0.65)",e.fillRect(0,0,96,18),e.fillStyle="#e74c3c",e.fillRect(1,1,94*(this.hp/this.maxHp),16),e.font="bold 12px sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.8)",e.strokeText(`${this.hp}/${this.maxHp}`,48,10),e.fillStyle="#fff",e.fillText(`${this.hp}/${this.maxHp}`,48,10),this.hpTexture.needsUpdate=!0)}}const wM=3.5;class di{constructor(e,t,n,i,s,o="talk",a){w(this,"mesh");w(this,"idlePhase",Math.random()*Math.PI*2);w(this,"body");w(this,"mixer",null);w(this,"idleAction",null);w(this,"waveAction",null);w(this,"waveTimer",0);w(this,"wasInRange",!1);this.name=e,this.linesProvider=s,this.role=o,this.mesh=new tt,this.body=new tt,this.mesh.add(this.body);const c=a?xy(a):null;if(c){this.body.add(c.scene),this.mixer=new _u(c.scene);const l=c.clips.find(h=>h.name==="Idle"),d=c.clips.find(h=>h.name==="Wave");l&&(this.idleAction=this.mixer.clipAction(l),this.idleAction.play()),d&&(this.waveAction=this.mixer.clipAction(d),this.waveAction.setLoop(Vc,1),this.waveAction.clampWhenFinished=!0)}else{const l=new Y(new Pt(.28,.52,1.5,12),ye(i));l.position.y=.78;const d=new Y(new Vt(.32,14,12),ye(15911328));d.position.y=1.85;const h=new Y(new cn(.62,.3,14),ye(14202976));h.position.y=2.12,this.body.add(l,d,h),yi(this.body)}this.body.traverse(l=>{l instanceof Y&&(l.castShadow=!0)}),this.mesh.position.set(t,lt(t,n),n)}getLines(){return this.linesProvider()}update(e,t){const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z,s=Math.hypot(n,i);s<6&&(this.mesh.rotation.y=Math.atan2(n,i));const o=s<wM;return this.mixer?(this.mixer.update(e),o&&!this.wasInRange&&this.waveAction&&this.idleAction&&(this.waveAction.reset().play(),this.waveAction.crossFadeFrom(this.idleAction,.2,!1),this.waveTimer=this.waveAction.getClip().duration),this.waveTimer>0&&(this.waveTimer-=e,this.waveTimer<=0&&this.idleAction&&this.waveAction&&(this.idleAction.reset().play(),this.idleAction.crossFadeFrom(this.waveAction,.3,!1)))):(this.idlePhase+=e*2,this.body.position.y=Math.sin(this.idlePhase)*.025),this.wasInRange=o,o}}const SM=6,TM=.9,EM=9,AM={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class Ne{constructor(e,t,n){w(this,"mesh");w(this,"kind");w(this,"bobPhase",Math.random()*Math.PI*2);w(this,"baseY");if(this.kind=e,e==="coin")this.mesh=new Y(new Pt(.22,.22,.06,12),ye(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(e==="gem-flame"||e==="gem-wind"||e==="gem-earth"||e==="gem-frost"||e==="gem-tide"||e==="gem-void"||e==="gem-lava"||e==="gem-aqua"||e==="gem-life"){const a={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[e];this.mesh=new Y(new Wn(.75),ye(a,{emissive:a,emissiveIntensity:.9}))}else if(e==="fruit-thunder"||e==="fruit-gravity"){const a={"fruit-thunder":16773216,"fruit-gravity":11559167}[e];this.mesh=new Y(new Vt(.6,16,14),ye(a,{emissive:a,emissiveIntensity:.9}))}else{const o=AM[e];this.mesh=new Y(new Wn(o.size),ye(o.color,{emissive:o.color,emissiveIntensity:.5}))}const i=t+(Math.random()-.5)*1.6,s=n+(Math.random()-.5)*1.6;this.baseY=lt(i,s)+.7,this.mesh.position.set(i,this.baseY,s)}update(e,t){this.bobPhase+=e*3,this.mesh.rotation.y+=e*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z,s=Math.hypot(n,i);if(s<SM&&s>.01){const o=Math.min(EM*e/s,1);this.mesh.position.x+=n*o,this.mesh.position.z+=i*o}return s<TM}}const RM=1.8;class Pa{constructor(e,t,n,i={}){w(this,"mesh");w(this,"damage");w(this,"freezes");w(this,"burns");w(this,"leech");w(this,"life");w(this,"lifetime");w(this,"speed");w(this,"direction");w(this,"glowMat");w(this,"coreMat");w(this,"bodyMat");w(this,"sparkMat");w(this,"sparks",[]);w(this,"geometries",[]);w(this,"hitEnemies",new Set);this.damage=n,this.freezes=i.freezes??!1,this.burns=i.burns??!1,this.leech=i.leech??0,this.lifetime=i.lifetime??.9,this.speed=i.speed??22,this.life=this.lifetime,this.direction=new I(Math.sin(t),0,Math.cos(t));const s=i.color??8382719,o=new ue(s).lerp(new ue(16777215),.65),a=(h,u)=>new Ot({color:h,transparent:!0,opacity:u,blending:wn,depthWrite:!1,side:jt});this.glowMat=a(s,.32),this.coreMat=a(o,.95),this.bodyMat=a(s,.7),this.sparkMat=a(o,.9);const c=Math.PI*.95;this.mesh=new tt;const l=(h,u)=>{const p=new qn(1.2,h,8,24,c);this.geometries.push(p),this.mesh.add(new Y(p,u))};l(.4,this.glowMat),l(.2,this.bodyMat),l(.09,this.coreMat);const d=new Ar(.26,0);this.geometries.push(d);for(const h of[0,c]){const u=new Y(d,this.sparkMat);u.position.set(Math.cos(h)*1.2,Math.sin(h)*1.2,0),this.sparks.push(u),this.mesh.add(u)}this.mesh.position.copy(e),this.mesh.position.y=lt(e.x,e.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,t,-Math.PI/2-c/2)}get expired(){return this.life<=0}update(e,t){if(this.life-=e,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*e),this.mesh.position.y=lt(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9);const i=1-n*.7;this.glowMat.opacity=.32*i,this.bodyMat.opacity=.7*i,this.coreMat.opacity=.95*i;const s=.55+Math.random()*.45;this.sparkMat.opacity=.9*i*s;for(const a of this.sparks)a.scale.setScalar(.7+.5*s);const o=[];for(const a of t){if(a.isDead||this.hitEnemies.has(a))continue;const c=a.mesh.position.x-this.mesh.position.x,l=a.mesh.position.z-this.mesh.position.z;Math.hypot(c,l)<RM*this.mesh.scale.x&&(this.hitEnemies.add(a),o.push(a))}return o}dispose(){for(const e of this.geometries)e.dispose();this.glowMat.dispose(),this.coreMat.dispose(),this.bodyMat.dispose(),this.sparkMat.dispose()}}const hd=16,dd=18,CM=16,IM=9,PM=.7,ud=8,fd=.3,al=2,LM=["thunder","gravity"],pd=[500,1100],md=3;function Ou(r){return 1+.5*(r-1)}function DM(r,e=1){return Math.round((20+r*2)*Ou(e))}function NM(r=1){return 2+r}function UM(r=1){return .3+.3*r}function OM(r,e=1){return Math.round((10+r)*Ou(e))}function FM(r=1){return 5+r}function kM(r=1){return 1+.5*r}class BM{constructor(){w(this,"thunderOwned",!1);w(this,"gravityOwned",!1);w(this,"levels",{thunder:1,gravity:1});w(this,"equipped",[])}ownedOf(e){return e==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(e){return this.equipped.includes(e)}hasFreeSlot(){return this.equipped.length<al}equip(e){return!this.ownedOf(e)||this.isEquipped(e)||!this.hasFreeSlot()?!1:(this.equipped.push(e),!0)}unequip(e){this.equipped=this.equipped.filter(t=>t!==e)}}const zM=6,HM=18,GM=.22;class VM{constructor(e,t,n,i,s){w(this,"mesh");w(this,"damage");w(this,"center");w(this,"radius");w(this,"life");w(this,"tickT",0);w(this,"spin",0);w(this,"age",0);w(this,"swirl");w(this,"groundRing");w(this,"core");w(this,"innerRings",[]);w(this,"motes",[]);w(this,"materials",[]);w(this,"geometries",[]);w(this,"groundMat");w(this,"funnelMat");w(this,"armMat");w(this,"ringMat");w(this,"coreMat");w(this,"haloMat");w(this,"moteMat");this.center=new I(e,lt(e,t)+.4,t),this.radius=n,this.life=i,this.damage=s;const o=n*.9+1.6;this.mesh=new tt,this.mesh.position.copy(this.center),this.swirl=new tt,this.mesh.add(this.swirl);const a=(m,f)=>{const v=new Ot({color:m,transparent:!0,opacity:f,blending:wn,depthWrite:!1,side:jt});return this.materials.push(v),v};this.groundMat=a(10119912,.45);const c=new qn(n,.22,8,48);this.geometries.push(c),this.groundRing=new Y(c,this.groundMat),this.groundRing.rotation.x=-Math.PI/2,this.groundRing.position.y=-.3,this.mesh.add(this.groundRing),this.funnelMat=a(8014544,.14);const l=new cn(n*.85,o,32,1,!0);this.geometries.push(l);const d=new Y(l,this.funnelMat);d.rotation.x=Math.PI,d.position.y=o/2-.2,this.swirl.add(d),this.armMat=new Zn({color:14729471,transparent:!0,opacity:.7,blending:wn,depthWrite:!1}),this.materials.push(this.armMat);for(let m=0;m<3;m++){const f=[],v=m/3*Math.PI*2,S=2.4;for(let R=0;R<=48;R++){const A=R/48,g=v+A*S*Math.PI*2,L=n*.85*(1-A)+.2,T=(1-A)*(o-.4);f.push(new I(Math.cos(g)*L,T,Math.sin(g)*L))}const y=new Ft().setFromPoints(f);this.geometries.push(y),this.swirl.add(new Tr(y,this.armMat))}this.ringMat=a(12093183,.5);const h=[{r:n*.85,y:.2},{r:n*.55,y:o*.45},{r:n*.32,y:o*.8}];for(const m of h){const f=new qn(m.r,.16,8,32);this.geometries.push(f);const v=new Y(f,this.ringMat);v.rotation.x=-Math.PI/2,v.position.y=m.y,this.innerRings.push(v),this.mesh.add(v)}this.moteMat=a(15784191,.9);const u=new Wn(.13,0);this.geometries.push(u);for(let m=0;m<HM;m++){const f=new Y(u,this.moteMat);this.motes.push({mesh:f,angle:Math.random()*Math.PI*2,radius:.6+Math.random()*(n-.6),height:Math.random()*o,angSpeed:3+Math.random()*2.5}),this.mesh.add(f)}this.coreMat=a(15255807,.85);const p=new Vt(.7,16,12);this.geometries.push(p),this.core=new Y(p,this.coreMat),this.core.position.y=.3,this.mesh.add(this.core),this.haloMat=a(12089599,.28);const _=new Vt(1.4,16,12);this.geometries.push(_);const x=new Y(_,this.haloMat);x.position.y=.3,this.mesh.add(x),this.mesh.scale.setScalar(.01)}get expired(){return this.life<=0}update(e,t){this.life-=e,this.age+=e,this.spin+=e*6;const n=Math.min(this.age/GM,1),i=Math.min(this.life/.3,1),s=Math.min(n,Math.max(i,0));this.mesh.scale.setScalar(s),this.swirl.rotation.y=this.spin;for(let l=0;l<this.innerRings.length;l++){const d=l%2===0?1:-1.4;this.innerRings[l].rotation.z=this.spin*d*(1+l*.3)}const o=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(o);const a=this.radius*.9+1.6;for(const l of this.motes)l.angle+=l.angSpeed*e,l.radius-=e*2.4,l.height-=e*(a/1.6),(l.radius<.4||l.height<0)&&(l.radius=.8+Math.random()*(this.radius-.8),l.height=a*(.6+Math.random()*.4)),l.mesh.position.set(Math.cos(l.angle)*l.radius,l.height,Math.sin(l.angle)*l.radius),l.mesh.rotation.x+=e*6,l.mesh.rotation.y+=e*5;const c=Math.min(this.life,1);this.groundMat.opacity=.45*c,this.funnelMat.opacity=.14*c,this.armMat.opacity=.7*c,this.ringMat.opacity=.5*c,this.coreMat.opacity=.85*c,this.haloMat.opacity=.28*c*o,this.moteMat.opacity=.9*c;for(const l of t){if(l.isDead)continue;const d=this.center.x-l.mesh.position.x,h=this.center.z-l.mesh.position.z,u=Math.hypot(d,h);if(u>this.radius||u<.6)continue;const p=Math.min(zM*e,u-.5);l.mesh.position.x+=d/u*p,l.mesh.position.z+=h/u*p}if(this.tickT+=e,this.tickT>=fd){this.tickT-=fd;const l=[];for(const d of t){if(d.isDead)continue;Math.hypot(this.center.x-d.mesh.position.x,this.center.z-d.mesh.position.z)<=this.radius&&l.push(d)}return l}return[]}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class WM{constructor(e){w(this,"group");w(this,"life");w(this,"lifetime",.34);w(this,"coreMat");w(this,"glowMat");w(this,"branchMat");w(this,"nodeMat");w(this,"nodes",[]);w(this,"geometries",[]);this.life=this.lifetime,this.group=new tt,this.glowMat=new Zn({color:4892927,transparent:!0,opacity:.45,blending:wn,depthWrite:!1}),this.coreMat=new Zn({color:15398655,transparent:!0,opacity:1,blending:wn,depthWrite:!1}),this.branchMat=new Zn({color:8834303,transparent:!0,opacity:.6,blending:wn,depthWrite:!1}),this.nodeMat=new Ot({color:13495039,transparent:!0,opacity:.9,blending:wn,depthWrite:!1});for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1],s=Lc(n,i,1.6),o=Lc(n,i,.9);this.addLine(s,this.glowMat),this.addLine(s,this.glowMat),this.addLine(o,this.coreMat);for(const a of qM(o))this.addLine(a,this.branchMat)}for(let t=0;t<e.length;t++){const n=t===0?.45:.32,i=new Ar(n,0),s=new Y(i,this.nodeMat);s.position.copy(e[t]),this.geometries.push(i),this.nodes.push(s),this.group.add(s)}}addLine(e,t){const n=new Ft().setFromPoints(e);this.geometries.push(n),this.group.add(new Tr(n,t))}get expired(){return this.life<=0}update(e){this.life-=e;const t=Math.max(this.life/this.lifetime,0),n=t>.32?.5+Math.random()*.5:t/.32;this.coreMat.opacity=n,this.glowMat.opacity=.45*n,this.branchMat.opacity=.6*n*(.4+Math.random()*.6),this.nodeMat.opacity=.9*n;const i=.6+.4*n;for(const s of this.nodes)s.scale.setScalar(i)}dispose(){for(const e of this.geometries)e.dispose();this.coreMat.dispose(),this.glowMat.dispose(),this.branchMat.dispose(),this.nodeMat.dispose()}}function Lc(r,e,t){const n=[],i=new I().subVectors(e,r),s=i.length(),o=Math.max(5,Math.min(14,Math.round(s*1.6))),a=new I(-i.z,0,i.x).normalize();for(let c=0;c<=o;c++){const l=new I().lerpVectors(r,e,c/o);c>0&&c<o&&(l.addScaledVector(a,(Math.random()-.5)*t),l.y+=(Math.random()-.5)*t*.7),n.push(l)}return n}function qM(r){const e=[],t=new I(0,1,0);for(let n=2;n<r.length-1;n++){if(Math.random()>.35)continue;const i=r[n],s=new I().subVectors(i,r[n-1]).normalize();s.applyAxisAngle(t,(Math.random()-.5)*1.8),s.y+=(Math.random()-.5)*.8;const o=.8+Math.random()*1.4,a=i.clone().addScaledVector(s.normalize(),o);e.push(Lc(i,a,.5))}return e}const XM=1.3;class jM{constructor(e,t,n,i){w(this,"mesh");w(this,"damage");w(this,"freezeSec");w(this,"life");w(this,"lifetime",.7);w(this,"speed",32);w(this,"direction");w(this,"glowMat");w(this,"trailMat");w(this,"trail");w(this,"materials",[]);w(this,"geometries",[]);w(this,"hitEnemies",new Set);this.damage=n,this.freezeSec=i,this.life=this.lifetime,this.direction=new I(Math.sin(t),0,Math.cos(t)),this.mesh=new tt,this.mesh.position.copy(e),this.mesh.position.y=lt(e.x,e.z)+1,this.mesh.rotation.y=t;const s=(d,h,u=!0)=>{const p=new Ot({color:d,transparent:!0,opacity:h,blending:u?wn:es,depthWrite:!1,side:jt});return this.materials.push(p),p},o=(d,h,u=0,p=0)=>{this.geometries.push(d);const _=new Y(d,h);_.rotation.x=u,_.position.z=p,this.mesh.add(_)},a=s(15399679,.95),c=s(9099007,.9,!1);this.glowMat=s(5945599,.4),o(new Pt(.05,.05,1.3,6),c,Math.PI/2,0),o(new cn(.2,.5,7),a,Math.PI/2,.85),o(new vi(.5,.34),c,0,-.55),o(new vi(.34,.5),c,Math.PI/2,-.55),o(new cn(.34,1.9,7),this.glowMat,Math.PI/2,.2),this.trailMat=s(12577535,.55);const l=new cn(.3,1.2,7,1,!0);this.geometries.push(l),this.trail=new Y(l,this.trailMat),this.trail.rotation.x=-Math.PI/2,this.trail.position.z=-1.1,this.mesh.add(this.trail)}get expired(){return this.life<=0}update(e,t){if(this.life-=e,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*e),this.mesh.position.y=lt(this.mesh.position.x,this.mesh.position.z)+1;const n=this.life/this.lifetime,i=.5+Math.random()*.5;this.trailMat.opacity=.55*n*i,this.trail.scale.set(i,1,i),this.glowMat.opacity=.4*(.6+.4*i);const s=[];for(const o of t){if(o.isDead||this.hitEnemies.has(o))continue;const a=o.mesh.position.x-this.mesh.position.x,c=o.mesh.position.z-this.mesh.position.z;Math.hypot(a,c)<XM&&(this.hitEnemies.add(o),s.push(o))}return s}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class gd{constructor(e,t,n){w(this,"object");w(this,"life");w(this,"lifetime");w(this,"radius");w(this,"grav");w(this,"rings",[]);w(this,"flash");w(this,"shards",[]);w(this,"materials",[]);w(this,"geometries",[]);w(this,"ringMat");w(this,"flashMat");w(this,"shardMat");const i=lt(e,t);this.radius=n.radius,this.lifetime=n.lifetime??.75,this.life=this.lifetime,this.grav=n.shardKind==="drop"?16:22,this.object=new tt,this.object.position.set(e,i+.08,t);const s=(l,d)=>{const h=new Ot({color:l,transparent:!0,opacity:d,blending:wn,depthWrite:!1,side:jt});return this.materials.push(h),h};this.ringMat=s(n.ringColor,.7);for(let l=0;l<2;l++){const d=new qn(1,.14,8,40);this.geometries.push(d);const h=new Y(d,this.ringMat);h.rotation.x=-Math.PI/2,this.rings.push(h),this.object.add(h)}this.flashMat=s(n.ringColor,.5);const o=new Rr(.2,this.radius*.9,40);this.geometries.push(o),this.flash=new Y(o,this.flashMat),this.flash.rotation.x=-Math.PI/2,this.object.add(this.flash),this.shardMat=s(n.shardColor,.95);const a=n.shardCount??14,c=n.shardKind==="drop"?new Wn(.16,0):new Fo(.22,0);this.geometries.push(c);for(let l=0;l<a;l++){const d=new Y(c,this.shardMat),h=l/a*Math.PI*2+Math.random()*.5,u=this.radius*(.3+Math.random()*.5);d.position.set(Math.cos(h)*.4,.2,Math.sin(h)*.4),this.shards.push({mesh:d,vel:new I(Math.cos(h)*u,6+Math.random()*5,Math.sin(h)*u),spin:new I((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}),this.object.add(d)}}get expired(){return this.life<=0}update(e){this.life-=e;const t=1-Math.max(this.life,0)/this.lifetime,n=1-t;for(let i=0;i<this.rings.length;i++){const s=i*.18,o=Math.min(Math.max((t-s)/(1-s),0),1),a=.3+(this.radius-.3)*(1-(1-o)*(1-o));this.rings[i].scale.set(a,a,1),this.rings[i].visible=o>0}this.ringMat.opacity=.7*n,this.flashMat.opacity=.5*Math.max(1-t/.3,0);for(const i of this.shards)i.vel.y-=this.grav*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=i.spin.x*e,i.mesh.rotation.y+=i.spin.y*e,i.mesh.rotation.z+=i.spin.z*e;this.shardMat.opacity=.95*n}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class $M{constructor(e,t){w(this,"object");w(this,"life");w(this,"lifetime",.34);w(this,"length");w(this,"flow",0);w(this,"motes",[]);w(this,"materials",[]);w(this,"geometries",[]);w(this,"glowMat");w(this,"coreMat");w(this,"moteMat");this.life=this.lifetime,this.object=new tt,this.object.position.copy(e);const n=new I().subVectors(t,e);this.length=n.length(),this.object.quaternion.setFromUnitVectors(new I(0,0,1),n.clone().normalize());const i=(a,c)=>{const l=new Ot({color:a,transparent:!0,opacity:c,blending:wn,depthWrite:!1,side:jt});return this.materials.push(l),l},s=(a,c)=>{const l=new Pt(a,a,this.length,10,1,!0);this.geometries.push(l);const d=new Y(l,c);d.rotation.x=Math.PI/2,d.position.z=this.length/2,this.object.add(d)};this.glowMat=i(4909162,.4),this.coreMat=i(13172688,.95),s(.34,this.glowMat),s(.12,this.coreMat),this.moteMat=i(11075512,.95);const o=new Wn(.16,0);this.geometries.push(o);for(let a=0;a<6;a++){const c=new Y(o,this.moteMat);this.motes.push(c),this.object.add(c)}}get expired(){return this.life<=0}update(e){this.life-=e,this.flow+=e;const t=Math.max(this.life,0)/this.lifetime;this.glowMat.opacity=.4*t,this.coreMat.opacity=.95*t,this.moteMat.opacity=.95*t;for(let n=0;n<this.motes.length;n++){const i=1-(this.flow*2.2+n/this.motes.length)%1;this.motes[n].position.z=i*this.length,this.motes[n].rotation.x+=e*8,this.motes[n].rotation.y+=e*6}}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class _d{constructor(e,t,n,i,s){w(this,"object");w(this,"life");w(this,"lifetime",.42);w(this,"mode");w(this,"ring");w(this,"coreMesh");w(this,"motes",[]);w(this,"moteAng",[]);w(this,"spin",0);w(this,"materials",[]);w(this,"geometries",[]);w(this,"ringMat");w(this,"coreMat");w(this,"moteMat");this.mode=s,this.life=this.lifetime,this.object=new tt,this.object.position.set(e,t,n),this.object.rotation.y=i;const o=(d,h)=>{const u=new Ot({color:d,transparent:!0,opacity:h,blending:wn,depthWrite:!1,side:jt});return this.materials.push(u),u};this.ringMat=o(11563263,.85);const a=new qn(1.1,.16,8,32);this.geometries.push(a),this.ring=new Y(a,this.ringMat),this.object.add(this.ring),this.coreMat=o(6959296,.5);const c=new Er(1.05,32);this.geometries.push(c),this.coreMesh=new Y(c,this.coreMat),this.object.add(this.coreMesh),this.moteMat=o(14729471,.95);const l=new Wn(.16,0);this.geometries.push(l);for(let d=0;d<10;d++){const h=new Y(l,this.moteMat);this.motes.push(h),this.moteAng.push(d/10*Math.PI*2),this.object.add(h)}this.object.scale.setScalar(s==="explode"?.01:1)}get expired(){return this.life<=0}update(e){this.life-=e,this.spin+=e*10;const t=Math.max(this.life,0)/this.lifetime,n=1-t,i=this.mode==="implode"?t:Math.min(n/.3,1)*(.6+.4*t);this.object.scale.setScalar(Math.max(i,.01)),this.ring.rotation.z=this.spin;const s=t;this.ringMat.opacity=.85*s,this.coreMat.opacity=.5*s,this.moteMat.opacity=.95*s;const o=this.mode==="implode"?1.1*t:1.1*(.4+.6*n);for(let a=0;a<this.motes.length;a++){const c=this.moteAng[a]+this.spin*(this.mode==="implode"?-1:1);this.motes[a].position.set(Math.cos(c)*o,Math.sin(c)*o,0),this.motes[a].rotation.x+=e*8,this.motes[a].rotation.y+=e*6}}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}function YM(r){const t="wss://archipelago-song.onrender.com",n=new URL(t);return n.searchParams.set("room",r),n.toString()}const KM=800,ZM=8e3,JM=3e3,QM=12e3;class eb{constructor(e){w(this,"ws",null);w(this,"cb");w(this,"localId",null);w(this,"room",null);w(this,"hostId",null);w(this,"wantConnect",!1);w(this,"reconnecting",!1);w(this,"reconnectAttempts",0);w(this,"reconnectTimer",null);w(this,"lastRecvAt",0);w(this,"watchdogTimer",null);this.cb=e}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}get isHost(){return this.connected&&this.hostId!==null&&this.hostId===this.localId}connect(e){this.room=e,this.wantConnect=!0,this.reconnectAttempts=0,this.openSocket()}leave(){this.wantConnect=!1,this.reconnecting=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.stopWatchdog();const e=this.ws;this.ws=null,this.localId=null,this.hostId=null,e==null||e.close()}_debugDrop(){var e;(e=this.ws)==null||e.close()}openSocket(){let e;try{e=new WebSocket(YM(this.room??"lobby"))}catch(n){console.warn("[net] 無法建立連線,稍後重試:",n),this.scheduleReconnect();return}this.ws=e,e.addEventListener("open",()=>{var n,i,s,o;this.reconnectAttempts=0,this.lastRecvAt=Date.now(),this.startWatchdog(),this.reconnecting&&(this.reconnecting=!1,(i=(n=this.cb).onReconnecting)==null||i.call(n,!1)),(o=(s=this.cb).onStatus)==null||o.call(s,!0)}),e.addEventListener("message",n=>{var s,o,a,c,l,d,h,u,p,_,x,m,f,v,S,y;this.lastRecvAt=Date.now();let i;try{i=JSON.parse(n.data)}catch{return}switch(i.t){case"ping":break;case"welcome":this.localId=i.id,this.room=i.room,this.hostId=i.host;for(const R of i.others)this.cb.onState(R.id,R.state);(o=(s=this.cb).onHostChange)==null||o.call(s,this.isHost);break;case"state":this.cb.onState(i.id,i.state);break;case"join":break;case"leave":this.cb.onLeave(i.id);break;case"host":this.hostId=i.id,(c=(a=this.cb).onHostChange)==null||c.call(a,this.isHost);break;case"enemies":(d=(l=this.cb).onEnemies)==null||d.call(l,i.e);break;case"hit":(u=(h=this.cb).onHit)==null||u.call(h,i.i,i.dmg,i.id);break;case"kill":(_=(p=this.cb).onKill)==null||_.call(p,i.i,i.by);break;case"pdmg":i.to===this.localId&&((m=(x=this.cb).onPlayerDamage)==null||m.call(x,i.dmg,i.sx,i.sy,i.sz,i.knock,i.eff));break;case"cc":(v=(f=this.cb).onCc)==null||v.call(f,i.i,i.kind,i.sec,i.dps);break;case"chat":(y=(S=this.cb).onChat)==null||y.call(S,i.id,i.text);break}});const t=()=>{var n,i,s,o;this.ws===e&&(this.ws=null,this.localId=null,this.hostId=null,this.stopWatchdog(),(i=(n=this.cb).onStatus)==null||i.call(n,!1),(o=(s=this.cb).onHostChange)==null||o.call(s,!1),this.wantConnect&&this.scheduleReconnect())};e.addEventListener("close",t),e.addEventListener("error",t)}scheduleReconnect(){var n,i;if(!this.wantConnect||this.reconnectTimer)return;this.reconnecting||(this.reconnecting=!0,(i=(n=this.cb).onReconnecting)==null||i.call(n,!0));const e=Math.min(KM*2**this.reconnectAttempts,ZM);this.reconnectAttempts++;const t=Math.random()*.3*e;this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.wantConnect&&this.openSocket()},e+t)}startWatchdog(){this.stopWatchdog(),this.watchdogTimer=setInterval(()=>{var e;this.connected&&Date.now()-this.lastRecvAt>QM&&((e=this.ws)==null||e.close())},JM)}stopWatchdog(){this.watchdogTimer&&clearInterval(this.watchdogTimer),this.watchdogTimer=null}sendState(e){this.connected&&this.ws.send(JSON.stringify({t:"state",state:e}))}sendEnemies(e){this.connected&&this.ws.send(JSON.stringify({t:"enemies",e}))}sendHit(e,t){this.connected&&this.ws.send(JSON.stringify({t:"hit",i:e,dmg:t}))}sendKill(e,t){this.connected&&this.ws.send(JSON.stringify({t:"kill",i:e,by:t}))}sendPlayerDamage(e,t,n,i,s,o,a){this.connected&&this.ws.send(JSON.stringify({t:"pdmg",to:e,dmg:t,sx:n,sy:i,sz:s,knock:o,eff:a}))}sendCc(e,t,n,i){this.connected&&this.ws.send(JSON.stringify({t:"cc",i:e,kind:t,sec:n,dps:i}))}sendChat(e){this.connected&&this.ws.send(JSON.stringify({t:"chat",text:e}))}}const tb=1,nb=2,ib=4,sb=8,xd=.3,rb=.3,ob=.11,ab=1;function La(){return performance.now()/1e3}const vd=[4891647,16747068,12086271,16765500,3985568,16739229];function Fu(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)|0;return vd[Math.abs(e)%vd.length]}class cb{constructor(e,t){w(this,"mesh");w(this,"rig");w(this,"tunicColor");w(this,"buffer",[]);w(this,"moving",!1);w(this,"walkPhase",0);w(this,"renderYaw",0);w(this,"act",0);w(this,"swingT",0);w(this,"hurtT",0);w(this,"dead",!1);w(this,"deathLean",0);const n=Fu(e);this.tunicColor=new ue(n),this.rig=Uu(n),this.mesh=this.rig.group,this.renderYaw=t.facing,this.moving=t.moving,this.act=t.act??0,this.buffer.push({t:La(),x:t.x,y:t.y,z:t.z,facing:t.facing,moving:t.moving}),this.mesh.position.set(t.x,t.y,t.z),this.mesh.rotation.y=this.renderYaw}sampleBuffer(e){const t=this.buffer,n=t[t.length-1];if(t.length===1||e>=n.t)return n;if(e<=t[0].t)return t[0];for(let i=t.length-2;i>=0;i--){const s=t[i];if(s.t<=e){const o=t[i+1],a=o.t-s.t,c=a>1e-6?(e-s.t)/a:0;return{x:s.x+(o.x-s.x)*c,y:s.y+(o.y-s.y)*c,z:s.z+(o.z-s.z)*c,facing:o.facing,moving:o.moving}}}return t[0]}setState(e){const t=La();this.buffer.push({t,x:e.x,y:e.y,z:e.z,facing:e.facing,moving:e.moving});const n=t-ab;for(;this.buffer.length>2&&this.buffer[0].t<n;)this.buffer.shift();const i=e.act??0;i&tb&&(this.swingT=xd),i&sb&&(this.hurtT=rb),this.act=i,this.dead=e.dead??!1}update(e){const t=1-Math.exp(-12*e),n=this.sampleBuffer(La()-ob);this.mesh.position.set(n.x,n.y,n.z),this.moving=n.moving;let i=n.facing-this.renderYaw;i=Math.atan2(Math.sin(i),Math.cos(i)),this.renderYaw+=i*t,this.mesh.rotation.y=this.renderYaw;const{legL:s,legR:o,armL:a,armR:c,shield:l,tunicMat:d}=this.rig;if(this.deathLean+=((this.dead?1:0)-this.deathLean)*Math.min(1,t*1.2),this.mesh.rotation.x=this.deathLean*1.45,this.dead){s.rotation.x+=(0-s.rotation.x)*t,o.rotation.x+=(0-o.rotation.x)*t,c.rotation.x+=(0-c.rotation.x)*t,l.position.lerp(Pc,t),d.color.lerpColors(this.tunicColor,new ue(5593696),.6);return}this.swingT=Math.max(0,this.swingT-e),this.hurtT=Math.max(0,this.hurtT-e);const h=(this.act&ib)!==0,u=(this.act&nb)!==0;if(h)s.rotation.x+=(.7-s.rotation.x)*t,o.rotation.x+=(.5-o.rotation.x)*t;else if(this.moving){this.walkPhase+=e*9;const x=Math.sin(this.walkPhase)*.5;s.rotation.x=x,o.rotation.x=-x}else s.rotation.x*=1-t,o.rotation.x*=1-t;let p;this.swingT>0?p=-2.4+(1-this.swingT/xd)*2.9:h?p=-.5:this.moving?p=Math.sin(this.walkPhase)*.3:p=0,c.rotation.x+=(p-c.rotation.x)*Math.min(1,t*2.5);const _=u?-.5:this.moving&&!h?-Math.sin(this.walkPhase)*.3:0;a.rotation.x+=(_-a.rotation.x)*Math.min(1,t*2.5),l.position.lerp(u?Vy:Pc,Math.min(e*14,1)),this.hurtT>0?d.color.lerpColors(this.tunicColor,new ue(16731469),.6):d.color.copy(this.tunicColor)}get actBits(){return this.act}get swinging(){return this.swingT>0}dispose(){var e;(e=this.mesh.parent)==null||e.remove(this.mesh),this.mesh.traverse(t=>{t instanceof Y&&t.geometry.dispose()})}}const yd=10,Md=15,lb=6,bd=12,hb=4,Da=8,db=8,wd=14,ub=3,Sd=16,fb=7,Td=14,cl=4,pb=["flame","earth","frost","void","lava","aqua","life"];function mr(r){return pb.includes(r)}const Lo=6,mb=["flame","wind","earth","frost","tide","void","lava","aqua","life"],Ed=[400,900],Ad=3;function Ys(r){return 1+.5*(r-1)}function gb(r,e=1){return Math.round((18+r*2)*Ys(e)*1.4)}function _b(r,e=1){return Math.round((25+r*2)*Ys(e))}function xb(r=1){return lb+(r-1)}function vb(r,e=1){return Math.round((20+r*2)*Ys(e))}function Rd(r=1){return 1.5+r}function yb(r=1){return db+3*(r-1)}function Mb(r,e=1){return Math.round((22+r*2)*Ys(e)*1.4)}function bb(r=1){return 8+4*(r-1)}function wb(r,e=1){return Math.round((20+r*2)*Ys(e)*1.35)}function Sb(r=1){return 2+.7*(r-1)}function Tb(r=1){return fb+(r-1)}function Eb(r,e=1){return Math.round((18+r*2)*Ys(e)*1.5)}function Ab(r=1){return .4+.1*(r-1)}class Rb{constructor(){w(this,"flameOwned",!1);w(this,"windOwned",!1);w(this,"earthOwned",!1);w(this,"frostOwned",!1);w(this,"tideOwned",!1);w(this,"voidOwned",!1);w(this,"lavaOwned",!1);w(this,"aquaOwned",!1);w(this,"lifeOwned",!1);w(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});w(this,"equipped",[]);w(this,"slots",new Array(Lo).fill(null))}ownedOf(e){switch(e){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(e){return this.equipped.includes(e)}hasFreeSlot(){return this.equipped.length<cl}equip(e){return!this.ownedOf(e)||this.isEquipped(e)||!this.hasFreeSlot()?!1:(this.equipped.push(e),this.ensureSlots(),!0)}unequip(e){const t=this.slotOf(e);t>=0&&(this.slots[t]=null),this.equipped=this.equipped.filter(n=>n!==e)}slotOf(e){return this.slots.indexOf(e)}gemAt(e){return this.slots[e]??null}assignSlot(e,t){if(!mr(e)||!this.isEquipped(e)||t<0||t>=Lo)return!1;const n=this.slotOf(e),i=this.slots[t];return this.slots[t]=e,n>=0&&(this.slots[n]=i),this.ensureSlots(),!0}ensureSlots(){for(let e=0;e<this.slots.length;e++){const t=this.slots[e];t&&(!this.isEquipped(t)||!mr(t))&&(this.slots[e]=null)}for(const e of this.equipped){if(!mr(e)||this.slotOf(e)>=0)continue;const t=this.slots.indexOf(null);t>=0&&(this.slots[t]=e)}}}const Dc=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function Nc(r){return Dc.find(e=>e.id===r)}class Cb{constructor(){w(this,"owned",[]);w(this,"equipped",{})}has(e){return this.owned.includes(e)}equip(e){const t=Nc(e);if(!(!t||!this.has(e)))if(t.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=e}else this.equipped[t.slot]=e}unequip(e){delete this.equipped[e]}slotOf(e){for(const[t,n]of Object.entries(this.equipped))if(n===e)return t;return null}totalBonus(){const e={atk:0,def:0,hp:0,mp:0,agi:0};for(const t of Object.values(this.equipped)){const n=Nc(t);n&&(e.atk+=n.bonus.atk??0,e.def+=n.bonus.def??0,e.hp+=n.bonus.hp??0,e.mp+=n.bonus.mp??0,e.agi+=n.bonus.agi??0)}return e}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(e){this.owned=[...e.owned],this.equipped={...e.equipped}}}const Ki=5,Qi={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class Ib{constructor(){w(this,"states",{});w(this,"slimeKills",0);w(this,"jellyBaseline",0);w(this,"huntKills",{});w(this,"huntBaselines",{})}get(e){return this.states[e]??null}accept(e){if(this.states[e]||(this.states[e]="active"),e==="jelly"&&(this.jellyBaseline=this.slimeKills),e in Qi){const t=e;this.huntBaselines[t]=this.huntKills[Qi[t].kind]??0}}complete(e){this.states[e]="done"}addKill(e){this.huntKills[e]=(this.huntKills[e]??0)+1}killsOf(e){return this.huntKills[e]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,Ki)}huntProgress(e){const t=(this.huntKills[Qi[e].kind]??0)-(this.huntBaselines[e]??0);return Math.min(t,Qi[e].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(e){this.states={...e.states},this.slimeKills=e.kills,this.jellyBaseline=e.base,this.huntKills={...e.huntKills??{}},this.huntBaselines={...e.huntBases??{}}}}const ku="archipelago-save-v1";function Pb(r){try{localStorage.setItem(ku,JSON.stringify(r))}catch{}}function Lb(){try{const r=localStorage.getItem(ku);if(!r)return null;const e=JSON.parse(r);return e.v!==1?null:e}catch{return null}}const Db=`
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
#hud .island-title { position: absolute; top: 24%; left: 50%; transform: translateX(-50%) translateY(-10px); text-align: center; opacity: 0; transition: opacity 0.55s ease, transform 0.55s ease; text-shadow: 0 2px 12px rgba(0,0,0,0.75); }
#hud .island-title.show { opacity: 1; transform: translateX(-50%) translateY(0); }
#hud .island-title .name { font-size: 40px; font-weight: 800; letter-spacing: 6px; }
#hud .island-title .sub { font-size: 14px; opacity: 0.85; margin-top: 6px; letter-spacing: 3px; }
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
`;class Nb{constructor(e){w(this,"hpFill");w(this,"mpFill");w(this,"stFill");w(this,"xpFill");w(this,"levelText");w(this,"coinText");w(this,"crystalText");w(this,"toast");w(this,"islandTitle");w(this,"deathOverlay");w(this,"toastTimer",null);w(this,"islandTimer",null);this.onRespawn=e;const t=document.createElement("style");t.textContent=Db,document.head.appendChild(t);const n=document.createElement("div");n.id="hud",n.innerHTML=`
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
      <div class="hint">WASD 移動｜空白鍵 跳躍｜Shift 閃避｜左鍵 攻擊(按住集氣)｜Q 舉盾｜1–6 寶石技能(背包設定鍵位)｜R 藥水<br/>右鍵拖曳 轉視角｜滾輪 縮放｜Tab 背包｜M 地圖｜F 對話/上下船｜Enter 聊天｜小船在南灘,可出海前往其他島</div>
      <div class="island-title" id="hud-island"></div>
      <div class="toast" id="hud-toast"></div>
      <div id="hud-net" style="position:fixed;top:8px;right:12px;font:600 13px/1.4 system-ui,sans-serif;color:#cfe8ff;text-shadow:0 1px 2px #000;pointer-events:none;"></div>
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast"),this.islandTitle=this.byId("hud-island")}update(e,t){const n=e.stats;this.hpFill.style.width=`${e.hp/n.maxHP*100}%`,this.mpFill.style.width=`${e.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(e.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(e.mp)} / ${n.maxMP}`,this.stFill.style.width=`${e.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${t.coins}`;const i=t.crystals.small+t.crystals.medium+t.crystals.large;this.crystalText.textContent=`💎 ${i}`,this.byId("hud-potion").textContent=String(t.potions)}setGems(e){const t=["①","②","③","④","⑤","⑥"],n={flame:"🔥 火焰斬(10 靈力)",earth:"🪨 地震波(15 靈力)",frost:"❄️ 冰箭(12 靈力)／海上可行走",void:"🌀 瞬移(8 靈力)",lava:"🌋 熔岩噴發(14 靈力,灼燒)",aqua:"💧 碧波震盪(16 靈力,凍結)",life:"🌿 生命汲取(14 靈力,吸血)"},i=[];for(let o=0;o<e.slots.length;o++){const a=e.slots[o],c=a?n[a]:void 0;c&&i.push(`${t[o]??`[${o+1}]`} ${c}`)}e.isEquipped("wind")&&i.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔(被動)"),e.isEquipped("tide")&&i.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)");const s=this.byId("hud-gem");s.classList.toggle("show",i.length>0),s.innerHTML=i.join("<br/>")}setFruits(e){const t=[];e.isEquipped("thunder")&&t.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),e.isEquipped("gravity")&&t.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",t.length>0),n.innerHTML=t.join("<br/>")}setTalkPrompt(e,t="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",e),e&&(n.textContent=t)}setEnv(e){const t=this.byId("hud-env");t.textContent!==e&&(t.textContent=e)}setOnline(e,t,n){const i=this.byId("hud-net");if(!e){i.textContent="";return}const s=n&&n!=="lobby"?` · 房間 ${n}`:"";i.textContent=`🌐 連線中${s} · 同行 ${t} 人`}setReconnecting(e,t){if(!e)return;const n=this.byId("hud-net"),i=t&&t!=="lobby"?` · 房間 ${t}`:"";n.textContent=`🔄 重新連線中…${i}`}setQuests(e){this.byId("hud-quests").classList.toggle("show",e.length>0),this.byId("hud-quest-list").innerHTML=e.map(t=>`<div>${t}</div>`).join("")}showIslandTitle(e,t=""){this.islandTitle.innerHTML=`<div class="name">${e}</div>`+(t?`<div class="sub">${t}</div>`:""),this.islandTitle.classList.add("show"),this.islandTimer&&clearTimeout(this.islandTimer),this.islandTimer=setTimeout(()=>this.islandTitle.classList.remove("show"),3200)}showToast(e){this.toast.textContent=e,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(e,t=[]){if(e){const n=this.byId("death-options");n.innerHTML="";const i=[{id:"beach",label:"在曙光嶼海灘重生"},...t];for(const s of i){const o=document.createElement("button");o.textContent=s.label,o.dataset.respawn=s.id,s.id!=="beach"&&o.classList.add("shrine"),o.addEventListener("click",()=>this.onRespawn(s.id)),n.appendChild(o)}}this.deathOverlay.classList.toggle("show",e)}byId(e){const t=document.getElementById(e);if(!t)throw new Error(`HUD 元素遺失: ${e}`);return t}}const Ub=`
#map { position: fixed; inset: 0; display: none; align-items: center; justify-content: center;
  background: rgba(6, 16, 28, 0.78); z-index: 50; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; color: #eaf4ff; }
#map.show { display: flex; }
#map .frame { background: rgba(10, 26, 42, 0.92); border: 1px solid rgba(120, 190, 240, 0.4);
  border-radius: 14px; padding: 18px 20px; display: flex; gap: 18px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
#map .left { display: flex; flex-direction: column; gap: 10px; }
#map .head { display: flex; justify-content: space-between; align-items: baseline; }
#map .head .t { font-size: 20px; font-weight: 800; letter-spacing: 3px; }
#map .head .sea { font-size: 13px; opacity: 0.8; }
#map canvas { background: linear-gradient(160deg, #14385c, #0e2740); border-radius: 10px; display: block; }
#map .foot { font-size: 12px; opacity: 0.7; text-align: center; }
#map .legend { min-width: 150px; display: flex; flex-direction: column; gap: 6px; padding-top: 30px; }
#map .legend .lg-t { font-size: 13px; font-weight: 700; opacity: 0.8; margin-bottom: 2px; }
#map .legend .item { font-size: 14px; display: flex; align-items: center; gap: 8px; opacity: 0.92; }
#map .legend .item.here { color: #ffd24a; font-weight: 700; }
#map .legend .dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.6); flex: 0 0 auto; }
`,fo=460,po=460;class Ob{constructor(){w(this,"root");w(this,"canvas");w(this,"ctx");w(this,"seaLabel");w(this,"legend");w(this,"isOpen",!1);const e=document.createElement("style");e.textContent=Ub,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="map",this.root.innerHTML=`
      <div class="frame">
        <div class="left">
          <div class="head"><span class="t">群島地圖</span><span class="sea" id="map-sea"></span></div>
          <canvas id="map-canvas" width="${fo}" height="${po}"></canvas>
          <div class="foot">上 = 北　按 M 關閉</div>
        </div>
        <div class="legend"><div class="lg-t">島嶼</div><div id="map-legend"></div></div>
      </div>`,document.body.appendChild(this.root),this.canvas=this.root.querySelector("#map-canvas"),this.ctx=this.canvas.getContext("2d"),this.seaLabel=this.root.querySelector("#map-sea"),this.legend=this.root.querySelector("#map-legend")}toggle(){return this.isOpen=!this.isOpen,this.root.classList.toggle("show",this.isOpen),this.isOpen}close(){this.isOpen&&(this.isOpen=!1,this.root.classList.remove("show"))}render(e,t){if(!this.isOpen)return;const n=Yn(e),i=Ui.filter(R=>Yn(R.x)===n),s=Pu(e,t);this.seaLabel.textContent=n===2?"第二海":"第一海";const o=46,a=Math.min(e,...i.map(R=>R.x-R.r)),c=Math.max(e,...i.map(R=>R.x+R.r)),l=Math.min(t,...i.map(R=>R.z-R.r)),d=Math.max(t,...i.map(R=>R.z+R.r)),h=c-a||1,u=d-l||1,p=Math.min((fo-2*o)/h,(po-2*o)/u),_=(fo-h*p)/2-a*p,x=(po-u*p)/2-l*p,m=R=>R*p+_,f=R=>R*p+x,v=this.ctx;v.clearRect(0,0,fo,po);for(const R of i){const A=m(R.x),g=f(R.z),L=Math.max(6,R.r*p),T=s===R;v.beginPath(),v.arc(A,g,L,0,Math.PI*2),v.fillStyle=`#${R.grass.toString(16).padStart(6,"0")}`,v.globalAlpha=.92,v.fill(),v.globalAlpha=1,v.lineWidth=T?3:1.5,v.strokeStyle=T?"#ffd24a":"rgba(255,255,255,0.7)",v.stroke(),v.fillStyle=T?"#ffe9a8":"#eaf4ff",v.font=`${T?"bold ":""}13px "PingFang TC", sans-serif`,v.textAlign="center",v.fillText(R.name,A,g+L+14)}const S=m(e),y=f(t);v.beginPath(),v.arc(S,y,6,0,Math.PI*2),v.fillStyle="#ff4d4d",v.fill(),v.lineWidth=2,v.strokeStyle="#fff",v.stroke(),this.legend.innerHTML=i.map(R=>{const A=s===R?"item here":"item",g=`#${R.grass.toString(16).padStart(6,"0")}`;return`<div class="${A}"><span class="dot" style="background:${g}"></span>${s===R?"📍 ":""}${R.name}</div>`}).join("")}}const Fb=`
#bag { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 920px; max-width: 94vw; max-height: 84vh; overflow-y: auto; overscroll-behavior: contain; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 20px 24px; display: none; z-index: 10; }
#bag::-webkit-scrollbar { width: 8px; }
#bag::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 4px; }
#bag.show { display: block; }
#bag h3 { margin: 0 0 12px; font-size: 18px; }
#bag h4 { margin: 0 0 8px; font-size: 14px; opacity: 0.9; }
#bag .section { margin-bottom: 14px; }
#bag .item { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; font-size: 14px; }
#bag button { border: none; border-radius: 6px; padding: 4px 12px; margin-left: 6px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#bag button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#bag .alloc button { background: #8e6fe8; }
#bag .muted { opacity: 0.7; font-size: 12px; }
#bag .top { display: grid; grid-template-columns: 320px 1fr; gap: 20px; margin-bottom: 18px; align-items: stretch; }
#bag .portrait { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; padding: 14px 12px; text-align: center; }
/* 角色展示台:之後 3D 模型的 canvas 放進這裡(目前先放 emoji) */
#bag .model-stage { height: 240px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: radial-gradient(ellipse at 50% 70%, rgba(90,209,255,0.18), rgba(0,0,0,0.35)); margin-bottom: 10px; overflow: hidden; }
#bag .model-stage canvas { width: 100%; height: 100%; display: block; }
#bag .avatar { font-size: 130px; line-height: 1; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.55)); }
#bag .pname { font-size: 17px; font-weight: 700; }
#bag .plv { font-size: 13px; opacity: 0.8; margin-bottom: 8px; }
#bag .expbar { height: 9px; border-radius: 5px; background: rgba(0,0,0,0.4); overflow: hidden; margin: 0 4px 5px; }
#bag .expbar > i { display: block; height: 100%; background: linear-gradient(90deg,#5ad1ff,#3a6fd8); }
#bag .pstats { font-size: 16px; line-height: 1.8; margin-top: 8px; }
#bag .alloc-box { display: flex; flex-direction: column; justify-content: center; }
#bag .alloc-box h4 { font-size: 16px; }
#bag .arow { display: flex; align-items: center; justify-content: space-between; padding: 7px 0; font-size: 16px; }
#bag .arow .pts { font-size: 13px; opacity: 0.8; margin-bottom: 6px; }
#bag .eq-icon { display: inline-block; width: 1.5em; font-size: 16px; }
#bag .gems { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
#bag .gem-slot { border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 6px 4px; text-align: center; font-size: 12px; line-height: 1.5; }
#bag .gem-slot.off { opacity: 0.35; filter: grayscale(1); }
#bag .gem-slot.eq { border-color: #f0c040; background: rgba(240,192,64,0.14); }
#bag .gembtn { margin: 4px 0 0; padding: 2px 8px; font-size: 11px; }
#bag .gembtn.on { background: #c8902c; }
#bag .keybinds { display: flex; gap: 2px; justify-content: center; margin-top: 4px; }
#bag .kb { padding: 1px 0; width: 16px; margin: 0; font-size: 10px; line-height: 1.4; background: #3a4760; border-radius: 4px; }
#bag .kb.on { background: #f0c040; color: #1a1a22; font-weight: 700; }
`,Cd={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},kb={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"},Bb={cap:"🧢",helm:"⛑️",crown:"👑",vest:"🦺",plate:"🛡️",scalemail:"🐉",sandals:"👡",greaves:"🥾",windboots:"🌬️",badge:"🎖️",locket:"💗",ring:"💍",gauntlet:"🥊",amulet:"🔱",treepend:"🌳"},Id={hp:["❤️","生命"],str:["⚔️","力量"],spirit:["✨","靈能"],agi:["💨","敏捷"],vit:["🛡️","體魄"]};class zb{constructor(e,t,n,i,s,o,a,c,l,d,h,u){w(this,"root");w(this,"visible",!1);w(this,"teleportOpen",!1);this.inventory=e,this.stats=t,this.gems=n,this.fruits=i,this.equipment=s,this.onUseCrystal=o,this.onAllocate=a,this.onEquipChange=c,this.onUseSeaGem=l,this.getShrineTargets=d,this.onTeleportShrine=h,this.onLoadoutChange=u;const p=document.createElement("style");p.textContent=Fb,document.head.appendChild(p),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var m;if(!this.visible)return;this.gems.ensureSlots();const e=this.stats,t=Object.keys(Cd).map(f=>{const v=this.inventory.crystals[f];return`<div class="item">
          <span>${Cd[f]} ×${v} <span class="muted">(${Nu[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${v===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${v===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=e.points<=0,i=Object.keys(Id).map(f=>{const[v,S]=Id[f];return`<div class="arow">
          <span title="${kb[f]}">${v} ${S} <span class="muted">${e.attrs[f]}</span></span>
          <button data-alloc="${f}" ${n?"disabled":""}>+1</button>
        </div>`}).join(""),s=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],o=!this.gems.hasFreeSlot(),a=s.map(([f,v,S])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${v}<br/>${S}<br/><span class='muted'>未取得</span></div>`;const R=this.gems.isEquipped(f),A=!R&&o;let g="";if(R&&mr(f)){const L=this.gems.slotOf(f);g=`<div class="keybinds">${Array.from({length:Lo},(M,D)=>`<button class="kb ${L===D?"on":""}" data-bind="${f}" data-slot="${D}">${D+1}</button>`).join("")}</div>`}return`<div class="gem-slot ${R?"eq":""}">${v}<br/>${S}<br/>
          <button class="gembtn ${R?"on":""}" data-gemtoggle="${f}" ${A?"disabled":""}>${R?"✅ 出戰":"裝備"}</button>${g}</div>`}).join(""),c=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],l=!this.fruits.hasFreeSlot(),d=c.map(([f,v,S])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${v}<br/>${S}<br/><span class='muted'>未取得</span></div>`;const R=this.fruits.isEquipped(f);return`<div class="gem-slot ${R?"eq":""}">${v}<br/>${S}<br/>
          <button class="gembtn ${R?"on":""}" data-fruittoggle="${f}" ${!R&&l?"disabled":""}>${R?"✅ 出戰":"裝備"}</button></div>`}).join(""),h=[];this.inventory.firstSeaGem&&h.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&h.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const u=this.equipment.owned.map(f=>{const v=Nc(f);if(!v)return"";const S=this.equipment.slotOf(f);return`<div class="item">
          <span><span class="eq-icon">${Bb[f]??"🎽"}</span>${S?"✅ ":""}${v.name} <span class="muted">(${v.desc})</span></span>
          ${S?`<button data-unequip="${S}">卸下</button>`:`<button data-equip="${f}">裝備</button>`}
        </div>`}).join(""),p=e.expToNext(),_=p>0?Math.min(100,Math.round(e.exp/p*100)):0,x=`${t}${h.join("")}`;this.root.innerHTML=`
      <h3>背包</h3>
      <div class="top">
        <div class="portrait">
          <div class="model-stage"><div class="avatar">🧝</div></div>
          <div class="pname">海島旅人</div>
          <div class="plv">Lv.${e.level}</div>
          <div class="expbar"><i style="width:${_}%"></i></div>
          <div class="muted">EXP ${e.exp} / ${p}</div>
          <div class="pstats">⚔️ ${e.atk}　🛡️ ${e.def}<br/>❤️ ${e.maxHP}　✨ ${e.maxMP}</div>
        </div>
        <div class="alloc-box alloc">
          <h4>能力分配</h4>
          <div class="pts">可分配點數 <b>${e.points}</b></div>
          ${i}
        </div>
      </div>
      <div class="section"><h3>裝備</h3>${u||'<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${cl})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石(只有出戰中的技能與被動才生效);出戰的主動寶石點下方數字 1–6 指定快捷鍵位</div>
        <div class="gems">${a}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${al})</h3><div class="gems">${d}</div></div>
      <div class="section"><h3>重要道具</h3>${x||'<div class="muted">尚無重要道具</div>'}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const v=f.dataset.use;this.onUseCrystal(v,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(m=this.root.querySelector("button[data-tp-open]"))==null||m.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const v=f.dataset.gemtoggle;this.gems.isEquipped(v)?this.gems.unequip(v):this.gems.equip(v),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-bind]").forEach(f=>{f.addEventListener("click",()=>{const v=f.dataset.bind,S=Number(f.dataset.slot);this.gems.assignSlot(v,S),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const v=f.dataset.fruittoggle;this.fruits.isEquipped(v)?this.fruits.unequip(v):this.fruits.equip(v),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const e=this.getShrineTargets();return`${e.length>0?e.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const Hb=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class Gb{constructor(){w(this,"root");w(this,"nameEl");w(this,"textEl");w(this,"lines",[]);w(this,"index",0);w(this,"visible",!1);const e=document.createElement("style");e.textContent=Hb,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(e,t){t.length!==0&&(this.lines=t,this.index=0,this.visible=!0,this.nameEl.textContent=e,this.textEl.textContent=t[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const Vb=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Pd=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class Wb{constructor(e,t,n){w(this,"root");w(this,"visible",!1);this.inventory=e,this.equipment=t,this.onBuy=n;const i=document.createElement("style");i.textContent=Vb,document.head.appendChild(i),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const e=Pd.map(n=>{const i=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${i?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),t=Dc.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${e}
      <h3 style="margin-top:14px;">裝備</h3>
      ${t||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const i=Pd.find(s=>s.id===n.dataset.buy);!i||this.inventory.coins<i.price||(this.inventory.coins-=i.price,i.id==="potion"?this.inventory.potions++:this.inventory.crystals[i.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const i=Dc.find(s=>s.id===n.dataset.buyequip);!i||this.equipment.has(i.id)||this.inventory.coins<i.price||(this.inventory.coins-=i.price,this.equipment.owned.push(i.id),this.onBuy(),this.render())})})}}const qb=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Ld=[100,250,500,800,1200];class Xb{constructor(e,t,n,i,s,o,a){w(this,"root");w(this,"visible",!1);this.inventory=e,this.stats=t,this.gems=n,this.fruits=i,this.onUpgrade=s,this.onGemUpgrade=o,this.onFruitUpgrade=a;const c=document.createElement("style");c.textContent=qb,document.head.appendChild(c),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const e=this.stats.weaponLevel,t=e>=Ld.length,n=t?0:Ld[e],s=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,l])=>l).map(([l,d])=>{const h=this.gems.levels[l],u=h>=Ad,p=u?0:Ed[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-gemup="${l}" ${u||this.inventory.coins<p?"disabled":""}>
            ${u?"已滿階":`升階(🪙 ${p})`}
          </button>
        </div>`}).join(""),a=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,l])=>l).map(([l,d])=>{const h=this.fruits.levels[l],u=h>=md,p=u?0:pd[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-fruitup="${l}" ${u||this.inventory.coins<p?"disabled":""}>
            ${u?"已滿階":`升階(🪙 ${p})`}
          </button>
        </div>`}).join("");this.root.innerHTML=`
      <h3>爐婆的鍛造坊</h3>
      <div class="info">
        武器:勇者之劍 +${e}${t?"(已達最高強化)":""}<br/>
        目前攻擊力:${this.stats.atk}${t?"":` → 強化後 ${this.stats.atk+3}`}<br/>
        持有 🪙 ${this.inventory.coins}
      </div>
      <button id="forge-btn" ${t||this.inventory.coins<n?"disabled":""}>
        ${t?"已滿級":`強化(🪙 ${n})`}
      </button>
      <h3 style="margin-top:16px;">寶石升階</h3>
      ${s||'<div class="info" style="opacity:0.6;">取得靈紋寶石後可在此升階</div>'}
      ${a?`<h3 style="margin-top:16px;">果實升階</h3>${a}`:""}
      <div class="muted">按 F 關閉</div>
    `;const c=this.root.querySelector("#forge-btn");c==null||c.addEventListener("click",()=>{t||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.gemup,h=this.gems.levels[d];if(h>=Ad)return;const u=Ed[h-1];this.inventory.coins<u||(this.inventory.coins-=u,this.gems.levels[d]++,this.onGemUpgrade(d),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.fruitup,h=this.fruits.levels[d];if(h>=md)return;const u=pd[h-1];this.inventory.coins<u||(this.inventory.coins-=u,this.fruits.levels[d]++,this.onFruitUpgrade(d),this.render())})})}}const Bu="archipelago-settings-v1",Na={volume:1,music:!0,deathDrop:!0};function Ua(){var t;const r=new URLSearchParams(location.search),e=(t=r.get("room"))==null?void 0:t.trim();return e||(r.has("mp")?"lobby":null)}function Oa(r){return`${location.origin}${location.pathname}?room=${encodeURIComponent(r)}`}function jb(){return Math.random().toString(36).slice(2,8)}function $b(){try{const r=localStorage.getItem(Bu);return r?{...Na,...JSON.parse(r)}:{...Na}}catch{return{...Na}}}const Yb=`
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
`;class Kb{constructor(e){w(this,"settings");w(this,"root");w(this,"visible",!1);this.audio=e,this.settings=$b();const t=document.createElement("style");t.textContent=Yb,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(Bu,JSON.stringify(this.settings))}catch{}}render(){var e,t,n,i;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,this.wireMultiplayer(),(e=this.root.querySelector("#set-vol"))==null||e.addEventListener("input",s=>{this.settings.volume=Number(s.target.value)/100,this.apply(),this.persist()}),(t=this.root.querySelector("#set-music"))==null||t.addEventListener("change",s=>{this.settings.music=s.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",s=>{this.settings.deathDrop=s.target.checked,this.persist()}),(i=this.root.querySelector("#set-reset"))==null||i.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}multiplayerSection(){const e=Ua();return e?`
      <div class="row"><span>多人房間</span><span class="mp-room">${e==="lobby"?"預設房間 lobby":e}</span></div>
      <div class="row"><span>邀請碼</span><span class="mp-code">${e}</span></div>
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
      `}wireMultiplayer(){var n,i,s,o,a;const e=c=>{const l=c.trim();l&&(location.href=Oa(l))},t=this.root.querySelector("#set-mp-code");t==null||t.addEventListener("keydown",c=>{c.stopPropagation(),c.key==="Enter"&&e(t.value)}),(n=this.root.querySelector("#set-mp-join"))==null||n.addEventListener("click",()=>{t&&e(t.value)}),(i=this.root.querySelector("#set-mp-create"))==null||i.addEventListener("click",()=>{location.href=Oa(jb())}),(s=this.root.querySelector("#set-mp-leave"))==null||s.addEventListener("click",()=>{location.href=location.pathname}),(o=this.root.querySelector("#set-mp-copy-code"))==null||o.addEventListener("click",async()=>{const c=Ua();if(!c)return;const l=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(c),l&&(l.textContent="已複製邀請碼!")}catch{l&&(l.textContent=`邀請碼:${c}`)}}),(a=this.root.querySelector("#set-mp-copy"))==null||a.addEventListener("click",async()=>{const c=Ua();if(!c)return;const l=Oa(c),d=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(l),d&&(d.textContent="已複製邀請連結!")}catch{d&&(d.textContent=l)}})}}const Zb=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,Jb=.9;class Qb{constructor(){w(this,"totalSpawned",0);w(this,"items",[]);const e=document.createElement("style");e.textContent=Zb,document.head.appendChild(e)}spawn(e,t,n){const i=document.createElement("div");i.className="float-dmg",i.textContent=t,i.style.color=n,document.body.appendChild(i),this.items.push({el:i,pos:e.clone(),life:Jb}),this.totalSpawned++}update(e,t){this.items=this.items.filter(n=>{if(n.life-=e,n.life<=0)return n.el.remove(),!1;n.pos.y+=e*1.6;const i=n.pos.clone().project(t);return i.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(i.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-i.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class e1{constructor(){w(this,"totalSpawned",0);w(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(e){var n;const t=document.createElement("div");for(t.textContent=e,this.root.appendChild(t),this.totalSpawned++,setTimeout(()=>t.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const t1=8,n1=9e3,Dd=200;function i1(r){return"#"+r.toString(16).padStart(6,"0")}class s1{constructor(e){w(this,"log");w(this,"input");w(this,"isTyping",!1);this.onSend=e;const t=document.createElement("style");t.textContent=`
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
    `,document.head.appendChild(t);const n=document.createElement("div");n.id="chat",n.innerHTML=`<div id="chat-log"></div><input id="chat-input" maxlength="${Dd}" placeholder="輸入訊息…Enter 送出、Esc 取消" />`,document.body.appendChild(n),this.log=n.querySelector("#chat-log"),this.input=n.querySelector("#chat-input"),this.input.addEventListener("keydown",i=>{if(i.stopPropagation(),i.key==="Enter"){const s=this.input.value.trim().slice(0,Dd);s&&this.onSend(s),this.stopTyping()}else i.key==="Escape"&&this.stopTyping()})}startTyping(){this.isTyping=!0,this.input.classList.add("show"),this.input.value="",this.input.focus()}stopTyping(){this.isTyping=!1,this.input.classList.remove("show"),this.input.value="",this.input.blur()}push(e,t,n){var a;const i=document.createElement("div");i.className="line";const s=document.createElement("span");s.className="who",s.style.color=i1(n),s.textContent=e;const o=document.createElement("span");for(o.textContent=t,i.append(s,o),this.log.appendChild(i);this.log.childElementCount>t1;)(a=this.log.firstElementChild)==null||a.remove();setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),600)},n1)}}const r1=4;class o1{constructor(e,t){w(this,"mesh");w(this,"respawnT",0);w(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new tt;const n=new Y(new Yt(1.2,.7,.85),ye(9067056));n.position.y=.35;const i=new Y(new Pt(.45,.45,1.2,10,1,!1,0,Math.PI),ye(10119738));i.rotation.z=Math.PI/2,i.position.y=.72;const s=new Y(new Yt(1.26,.16,.9),ye(15777856));s.position.y=.45;const o=new Y(new Wn(.18),new Ot({color:16769152}));o.position.y=1.25,this.mesh.add(n,i,s,o),yi(this.mesh),this.place(e,t)}get active(){return this.mesh.visible}place(e,t){this.mesh.position.set(e,0,t),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(e,t,n){if(!this.active||(this.bobPhase+=e*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=e*.2,!n))return!1;const i=t.x-this.mesh.position.x,s=t.z-this.mesh.position.z;return Math.hypot(i,s)<r1}}const a1=3.5,mo=2,c1=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class l1{constructor(e){w(this,"mesh");w(this,"active",!1);w(this,"crystalGroup");w(this,"crystalMat");w(this,"ring");w(this,"phase",Math.random()*Math.PI*2);this.def=e,this.mesh=new tt;const t=new tt,n=new Y(new Pt(1.1,1.4,.5,8),ye(8028820));n.position.y=.25;const i=new Y(new Pt(.35,.5,2.2,8),ye(9081508));i.position.y=1.6,t.add(n,i),this.crystalMat=ye(6978186);const s=new Y(new Wn(.45),this.crystalMat);this.crystalGroup=new tt,this.crystalGroup.add(s),this.crystalGroup.position.y=3.2,t.add(this.crystalGroup),yi(t),t.traverse(o=>{o instanceof Y&&(o.castShadow=!0)}),this.mesh.add(t),this.ring=new Y(new Rr(1.5,1.9,28),new Ot({color:8382696,transparent:!0,opacity:.55,side:jt})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(e.x,lt(e.x,e.z),e.z)}setActive(e){this.active=e,this.ring.visible=e,e?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(e,t){this.phase+=e,this.crystalGroup.rotation.y+=e*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.hypot(n,i)<a1}}const h1=.3;function d1(){var yt,Lt,Nt;const r=document.getElementById("app");if(!r)throw new Error("找不到 #app 容器");const e=new $x({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Ud,r.appendChild(e.domElement);const t=new wp;t.background=new ue(8900331),t.fog=new jc(8900331,150,650);const n=new mn(60,window.innerWidth/window.innerHeight,.1,1e3),i=new Zx,s=()=>i.unlock();window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0});const o=new Kb(i),a=new gu(16774368,2.6);a.position.set(60,100,40),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-80,a.shadow.camera.right=80,a.shadow.camera.top=80,a.shadow.camera.bottom=-80,a.shadow.camera.far=250,a.shadow.bias=-8e-4;const c=new Wp(12574719,15258784,.7),l=new Kp(16777215,.35);t.add(a,a.target,c,l);const d=new hv(t,a,c,l),h=new ev(t),u=new Qb,p=new e1;let _=0;const x=sv();x.position.set(75,0,55),t.add(x,Iy());const m=new Oy;t.add(m.mesh);let f=!1;const v=new Y(new Er(1.5,20),new Ot({color:13626111,transparent:!0,opacity:.75}));v.rotation.x=-Math.PI/2,v.visible=!1,t.add(v);function S(){for(let C=0;C<100;C++){const N=-210+Math.random()*440,F=-240+Math.random()*580;if(Du(N,F)&&!Ui.some(Q=>Math.hypot(N-Q.x,F-Q.z)<Q.r+12)&&!(Math.hypot(N-Pn.x,F-Pn.z)<Pn.r+8))return{x:N,z:F}}return{x:-100,z:-40}}const y=[];for(let C=0;C<6;C++){const N=S(),F=new o1(N.x,N.z);y.push(F),t.add(F.mesh)}function R(C,N){let F=Ui[0],Q=1/0;for(const dt of Ui){const sn=Math.hypot(C-dt.x,N-dt.z);sn<Q&&(Q=sn,F=dt)}const De=Math.max(Math.hypot(C-F.x,N-F.z),.001),Ye=(F.r-8)/De;return{x:F.x+(C-F.x)*Ye,z:F.z+(N-F.z)*Ye}}const A=new Yx(e.domElement),g=new oM;t.add(g.mesh);const L=new Map;let T=!1;const M=new eb({onState(C,N){let F=L.get(C);F?F.setState(N):(F=new cb(C,N),L.set(C,F),t.add(F.mesh),le.setOnline(M.connected,L.size,M.room))},onLeave(C){const N=L.get(C);N&&(N.dispose(),L.delete(C),le.setOnline(M.connected,L.size,M.room))},onStatus(C){if(!C){for(const N of L.values())N.dispose();L.clear()}le.setOnline(C,L.size,M.room)},onReconnecting(C){le.setReconnecting(C,M.room)},onHostChange(C){if(C&&!T)for(const N of Ee)N.becomeAuthoritative();T=C},onEnemies(C){Pe(C)},onHit(C,N,F){Ce(C,N,F)},onKill(C,N){const F=Ee[C];N===M.localId&&F&&ge(F)},onPlayerDamage(C,N,F,Q,De,Ye){Fe(C,N,F,Q,De,Ye)},onCc(C,N,F,Q){We(C,N,F,Q)},onChat(C,N){G.push(D(C),N,Fu(C))}}),D=C=>`玩家·${C.slice(-2)}`,G=new s1(C=>{M.sendChat(C),G.push("你",C,10216298)}),H=new URLSearchParams(location.search),J=(yt=H.get("room"))==null?void 0:yt.trim(),ie=J||(H.has("mp")?"lobby":null);ie&&M.connect(ie);let Z=0;const ae=g.mesh.position.clone();let j=0;const _e=C=>Math.round(C*100)/100,Ae=7,re=new Gy,Ee=[new Se("slime",14,-39),new Se("slime",-14,-40),new Se("slime",6,-32),new Se("slime",22,-18),new Se("slime",-24,-12),new Se("slime",16,6),new Se("slime",-14,20),new Se("slime",36,4),new Se("slime",-32,16),new Se("slime",4,40),new Se("slime",26,30),new Se("slime",-18,-30),new Se("elite",0,14),new Se("elite",-30,-22),new Se("vine",148,75),new Se("vine",162,88),new Se("vine",133,96),new Se("vine",167,116),new Se("vine",140,127),new Se("vine",155,142),new Se("windGuardian",150,110),new Se("ember",-148,88),new Se("ember",-135,100),new Se("ember",-165,105),new Se("ember",-138,132),new Se("ember",-162,138),new Se("earthGuardian",-150,112),new Se("frost",78,-162),new Se("frost",42,-155),new Se("frost",60,-198),new Se("frost",85,-180),new Se("frost",38,-185),new Se("frostGuardian",60,-170),new Se("deep",-48,222),new Se("deep",-30,238),new Se("deep",-44,242),new Se("voidGuardian",-40,230),new Se("voidLord",0,300),new Se("sand",2180,130),new Se("sand",2222,134),new Se("sand",2166,158),new Se("sand",2234,166),new Se("sand",2196,190),new Se("magmaGuardian",2200,144),new Se("reef",1770,-138),new Se("reef",1812,-134),new Se("reef",1756,-110),new Se("reef",1824,-102),new Se("reef",1786,-82),new Se("coralGuardian",1790,-124),new Se("spore",2100,-208),new Se("spore",2142,-204),new Se("spore",2086,-180),new Se("spore",2154,-172),new Se("spore",2116,-152),new Se("lifeGuardian",2120,-194),new Se("marsh",1722,135),new Se("marsh",1758,138),new Se("marsh",1712,160),new Se("marsh",1768,162),new Se("marsh",1740,188),new Se("brine",1962,228),new Se("brine",1998,230),new Se("brine",1952,252),new Se("brine",2008,252),new Se("brine",1980,278),new Se("solar",2242,-62),new Se("solar",2278,-60),new Se("solar",2232,-38),new Se("solar",2288,-38),new Se("solar",2260,-14)];for(const C of Ee)t.add(C.mesh);Ee.forEach((C,N)=>C.netIndex=N);const Rt=Ee[12],ne=Ee.find(C=>C.kind==="windGuardian"),fe=Ee.find(C=>C.kind==="earthGuardian"),Ue=Ee.find(C=>C.kind==="frostGuardian"),Me=Ee.find(C=>C.kind==="voidGuardian"),Oe=Ee.find(C=>C.kind==="voidLord"),_t=Ee.find(C=>C.kind==="magmaGuardian"),Ve=Ee.find(C=>C.kind==="coralGuardian"),Dt=Ee.find(C=>C.kind==="lifeGuardian");let vt=[],ot=[],U=[],Wt=[],pt=[],gt=[],Re=null,mt=!1,ze=!1,Ze=!1,kt=!1,P=!1,b=!1,V=!1,ee=!1,oe=!1,K=0,Te=!1,pe=!1,Le=!1;const z=new Rb,$=new BM,be=new Cb,Be=new Gb,te=new Ib,me=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],Xe=25,O=()=>[z.flameOwned,z.windOwned,z.earthOwned,z.frostOwned,z.tideOwned,z.voidOwned].filter(Boolean).length,xe=()=>me.filter(C=>te.killsOf(C)>0).length,he=()=>O()===6&&xe()===me.length&&g.stats.level>=Xe,Ie=C=>C==="small"?"小型":C==="medium"?"中型":"大型",ce=C=>new di(C.name,C.x,C.z,C.color,()=>{const N=te.get(C.quest),F=Qi[C.quest].target;return N==="done"?C.doneLines:N==="active"&&te.huntProgress(C.quest)>=F?(te.complete(C.quest),re.coins+=C.coins,re.crystals[C.crystalSize]+=C.crystalCount,i.sfx("gem"),le.showToast(`任務完成:${C.title}!獲得 ${C.coins} 貝拉幣 + ${Ie(C.crystalSize)}結晶×${C.crystalCount}`),Qe(),[`你把${C.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${C.coins} 貝拉幣和${Ie(C.crystalSize)}經驗結晶 ×${C.crystalCount}。`]):N===null?(te.accept(C.quest),le.showToast(`接受任務:${C.title}(0/${F})`),C.intro):[`還剩 ${F-te.huntProgress(C.quest)} 隻${C.enemyLabel},加油!`,"打完回來找我領賞!"]},"talk",C.model),se=[new di("村長阿海",2.5,-49.5,9067146,()=>{const C=te.get("gem"),N=te.get("wind"),F=te.get("earth"),Q=te.get("frost"),De=te.get("tide"),Ye=te.get("depth"),dt=te.get("final");return dt==="done"?re.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:dt==="active"&&pe?(te.complete("final"),re.coins+=1e3,i.sfx("victory"),le.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Qe(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):dt==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:Ye==="done"?(te.accept("final"),le.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):Ye==="active"&&z.voidOwned?(te.complete("depth"),re.coins+=500,re.crystals.large+=3,i.sfx("gem"),le.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Qe(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","用技能鍵(數字 1–6)就能短距離瞬移,連虛空的力量都為你所用了。"]):Ye==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:De==="done"?(te.accept("depth"),le.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):De==="active"&&z.tideOwned?(te.complete("tide"),re.coins+=300,i.sfx("gem"),le.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Qe(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):De==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:Q==="done"?(te.accept("tide"),le.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):Q==="active"&&z.frostOwned?(te.complete("frost"),re.coins+=400,re.crystals.large+=2,i.sfx("gem"),le.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Qe(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):Q==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:F==="done"?(te.accept("frost"),le.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):F==="active"&&z.earthOwned?(te.complete("earth"),re.coins+=300,re.crystals.large+=2,i.sfx("gem"),le.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Qe(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)放出地震波,震飛身邊所有敵人!"]):F==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:N==="done"?(te.accept("earth"),le.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):N==="active"&&z.windOwned?(te.complete("wind"),re.coins+=200,re.crystals.large+=1,i.sfx("gem"),le.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Qe(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):N==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:C==="done"?(te.accept("wind"),le.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):C==="active"&&z.flameOwned?(te.complete("gem"),re.coins+=100,re.crystals.medium+=1,i.sfx("gem"),le.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Qe(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","裝備焰心石後,用技能列的數字鍵(1–6)就能施放火焰斬,去試試吧!"]):C===null?(te.accept("gem"),le.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]},"talk","barbarossa"),new di("漁夫小蝦",-4,-48,4881050,()=>{const C=te.get("jelly");return C==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:C==="active"&&te.jellyProgress()>=Ki?(te.complete("jelly"),re.coins+=50,re.crystals.small+=2,i.sfx("gem"),le.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Qe(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):C===null?(te.accept("jelly"),le.showToast(`接受任務:果凍清理(0/${Ki})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${Ki} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${Ki-te.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]},"talk","henry"),new di("商人圓圓",7,-46,13142090,()=>[],"shop","anne"),new di("鍛造大師爐婆",-150,78,9062954,()=>[],"forge","sharky"),ce({name:"獵人小藤",model:"henry",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),ce({name:"礦工岩叔",model:"skeleton",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),ce({name:"嚮導阿凜",model:"barbarossa",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),ce({name:"觀星者星嵐",model:"anne",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new di("領航者汐音",230,-95,4889272,()=>re.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:he()?(te.get("sea2")===null&&te.accept("sea2"),te.complete("sea2"),re.firstSeaGem=!0,re.secondSeaGem=!0,i.sfx("gem"),p.push("🔱 獲得重要道具【第一海寶石】"),p.push("🌐 獲得重要道具【第二海寶石】"),le.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Qe(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):(te.get("sea2")===null&&(te.accept("sea2"),le.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${O()}/6)`,`・擊敗所有種類的敵人(${xe()}/${me.length} 種)`,`・修煉至 Lv.${Xe}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"]),"talk","mako"),new di("鎮長波叔",fi.x,fi.z-36,13148234,()=>{const C=te.get("lava");return C==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:C==="active"&&z.lavaOwned?(te.complete("lava"),re.coins+=600,re.crystals.large+=2,i.sfx("gem"),le.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Qe(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):C==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:(te.accept("lava"),le.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])},"talk","barbarossa"),new di("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const C=te.get("aqua");return C==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:C==="active"&&z.aquaOwned?(te.complete("aqua"),re.coins+=700,re.crystals.large+=2,i.sfx("gem"),le.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Qe(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):C==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:(te.accept("aqua"),le.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])},"talk","mako"),new di("靈脈守林人葉羅",2098,-162,3846240,()=>{const C=te.get("life");return C==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:C==="active"&&z.lifeOwned?(te.complete("life"),re.coins+=700,re.crystals.large+=2,i.sfx("gem"),le.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Qe(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):C==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:(te.accept("life"),le.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])},"talk","anne"),ce({name:"拓荒者沙吉",model:"mako",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),ce({name:"潛水夫阿蚌",model:"sharky",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),ce({name:"採集者藤吉",model:"skeletonHeadless",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),ce({name:"沼澤嚮導苔翁",model:"henry",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),ce({name:"鹽工鹵伯",model:"skeleton",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),ce({name:"拾光人焰娃",model:"barbarossa",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const C of se)t.add(C.mesh);const we=c1.map(C=>new l1(C));for(const C of we)t.add(C.mesh);const He=[],Tt=C=>{const N=we.find(F=>F.def.id===C);return N?Yn(N.def.x):1},bt=C=>{const N=Yn(C.def.x),F=He.filter(De=>Tt(De)===N);let Q=`(本海 ${Math.min(F.length+1,mo)}/${mo})`;if(F.length>=mo){const De=F[0];He.splice(He.indexOf(De),1);const Ye=we.find(dt=>dt.def.id===De);Ye&&(Ye.setActive(!1),Q=`(已替換本海【${Ye.def.island}】)`)}He.push(C.def.id),C.setActive(!0),i.sfx("shrine"),h.burst(C.mesh.position.clone().setY(C.mesh.position.y+3),8382696,14,6),le.showToast(`重生點已設置:【${C.def.island}】${Q}`),Qe()},le=new Nb(C=>{const N=we.find(Q=>Q.active&&Q.def.id===C),F=N?`【${N.def.island}】重生點`:"海灘";if(o.settings.deathDrop){for(const Q of Object.keys(re.crystals))re.crystals[Q]-=Math.floor(re.crystals[Q]*h1);le.showToast(`你在${F}醒來,遺失了部分未使用的結晶……`)}else le.showToast(`你在${F}醒來……(死亡掉落已關閉)`);if(g.respawn(),N){const{x:Q,z:De}=N.def;g.mesh.position.set(Q,lt(Q,De+2),De+2),m.place(N.def.boat.x,N.def.boat.z)}else m.resetToDock();f=!1,Te&&q(!1),le.setDead(!1)}),En=new Ob;let Ks=null;const ni=()=>{const C=[],N=Yn(g.mesh.position.x);for(const F of He){if(Tt(F)!==N)continue;const Q=we.find(De=>De.def.id===F);Q&&C.push({id:F,label:`在【${Q.def.island}】重生點重生`})}le.setDead(!0,C)},jn=()=>{g.stats.equip=be.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},ki=()=>{g.hasWindGem=z.isEquipped("wind"),g.hasFrostGem=z.isEquipped("frost"),g.windLevel=z.levels.wind},An=C=>{z.hasFreeSlot()&&z.equip(C),ki()},Zs=C=>{$.hasFreeSlot()&&$.equip(C)},rs=()=>{ki(),le.setGems(z),le.setFruits($),i.sfx("ui"),Qe()},Un=new zb(re,g.stats,z,$,be,(C,N)=>{const F=re.useCrystals(C,N);if(F<=0)return;const Q=g.stats.addExp(F);Q>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,i.sfx("levelup"),le.showToast(`升級!Lv.${g.stats.level},獲得 ${Q*3} 點能力點數`),Qe()):(i.sfx("crystal"),le.showToast(`注入 ${F} EXP`))},C=>{g.stats.allocate(C),Qe()},()=>{jn(),i.sfx("ui"),Qe()},C=>Pr(C),()=>He.filter(C=>Tt(C)===Yn(g.mesh.position.x)).map(C=>{var N;return{id:C,island:((N=we.find(F=>F.def.id===C))==null?void 0:N.def.island)??C}}),C=>os(C),rs);function os(C){const N=we.find(De=>De.active&&De.def.id===C);if(!N||g.isDead)return;Te&&q(!1),f=!1;const{x:F,z:Q}=N.def;g.mesh.position.set(F,lt(F,Q+2),Q+2),m.place(N.def.boat.x,N.def.boat.z),i.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),le.showToast(`傳送至【${N.def.island}】重生點`),Un.isOpen&&Un.toggle(),Qe()}function Pr(C){if(!g.isDead){if(Te&&q(!1),f=!1,C===2){const N=fi.x,F=fi.z-44;g.mesh.position.set(N,lt(N,F),F),m.place(fi.x+2,fi.z-58),le.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,lt(2.5,-52),-52),m.resetToDock(),le.showToast("海流湧動……回到第一海【曙光嶼】");i.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),Un.isOpen&&Un.toggle(),Qe()}}const Mi=new Wb(re,be,()=>{i.sfx("coin"),Qe()}),Bi=new Xb(re,g.stats,z,$,()=>{i.sfx("anvil"),le.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Qe()},C=>{i.sfx("anvil"),C==="wind"&&(g.windLevel=z.levels.wind),le.showToast(`寶石升階成功!(Lv.${z.levels[C]})`),Qe()},C=>{i.sfx("anvil"),le.showToast(`果實升階成功!(Lv.${$.levels[C]})`),Qe()}),zo=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:re.coins,crystals:{...re.crystals},flameOwned:z.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:re.potions,quests:te.serialize(),windOwned:z.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:f,earthOwned:z.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:z.frostOwned,tideOwned:z.tideOwned,voidOwned:z.voidOwned,voidDefeated:pe,gemLevels:{...z.levels},equipment:be.serialize(),shrines:[...He],seaGems:{first:re.firstSeaGem,second:re.secondSeaGem},lavaOwned:z.lavaOwned,aquaOwned:z.aquaOwned,lifeOwned:z.lifeOwned,fruits:{thunderOwned:$.thunderOwned,gravityOwned:$.gravityOwned,levels:{...$.levels}},gemsEquipped:[...z.equipped],gemSlots:[...z.slots],fruitsEquipped:[...$.equipped]}),Qe=()=>Pb(zo());setInterval(Qe,12e3);const $e=Lb();if($e){g.stats.level=$e.level,g.stats.exp=$e.exp,g.stats.points=$e.points,Object.assign(g.stats.attrs,$e.attrs),re.coins=$e.coins,Object.assign(re.crystals,$e.crystals),re.potions=$e.potions??0,$e.quests&&te.restore($e.quests),z.flameOwned=$e.flameOwned,z.windOwned=$e.windOwned??!1,z.earthOwned=$e.earthOwned??!1,z.frostOwned=$e.frostOwned??!1,z.tideOwned=$e.tideOwned??!1,z.voidOwned=$e.voidOwned??!1,z.lavaOwned=$e.lavaOwned??!1,z.aquaOwned=$e.aquaOwned??!1,z.lifeOwned=$e.lifeOwned??!1,$e.fruits&&($.thunderOwned=$e.fruits.thunderOwned,$.gravityOwned=$e.fruits.gravityOwned,Object.assign($.levels,$e.fruits.levels)),z.equipped=($e.gemsEquipped??mb).filter(C=>z.ownedOf(C)).slice(0,cl),z.slots=Array.from({length:Lo},(C,N)=>{var Q;const F=((Q=$e.gemSlots)==null?void 0:Q[N])??null;return F&&z.isEquipped(F)&&mr(F)?F:null}),z.ensureSlots(),$.equipped=($e.fruitsEquipped??LM).filter(C=>$.ownedOf(C)).slice(0,al),pe=$e.voidDefeated??!1,re.firstSeaGem=((Lt=$e.seaGems)==null?void 0:Lt.first)??!1,re.secondSeaGem=((Nt=$e.seaGems)==null?void 0:Nt.second)??!1,g.stats.weaponLevel=$e.weaponLevel??0,$e.gemLevels&&Object.assign(z.levels,$e.gemLevels),$e.equipment&&be.restore($e.equipment);for(const C of $e.shrines??[]){const N=we.find(De=>De.def.id===C);if(!N||N.active)continue;const F=Yn(N.def.x);He.filter(De=>Tt(De)===F).length<mo&&(N.setActive(!0),He.push(C))}jn(),ki(),le.setGems(z),le.setFruits($),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set($e.pos[0],lt($e.pos[0],$e.pos[1]),$e.pos[1]),$e.boatPos&&m.place($e.boatPos[0],$e.boatPos[1]),$e.sailing&&(f=!0),le.showToast("讀取存檔完成")}if(!z.tideOwned){const C=new Ne("gem-tide",qh.x,qh.z);t.add(C.mesh),vt.push(C)}const Lr=()=>{if(mt||$.gravityOwned)return;mt=!0;const C=new Ne("fruit-gravity",jh.x,jh.z);t.add(C.mesh),vt.push(C)};pe&&!$.gravityOwned&&Lr();const Js=document.createElement("div");Js.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(Js);const E=document.createElement("div");E.id="ending",E.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",E.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const k=document.createElement("button");k.textContent="回去找村長阿海領賞",k.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",k.addEventListener("click",()=>{E.style.display="none"}),E.appendChild(k),document.body.appendChild(E);const q=C=>{Te=C,g.divingZone=C?Pn:null,Js.style.display=C?"block":"none";const N=t.fog;C?(N.color.setHex(1723002),N.near=20,N.far=110,t.background=new ue(1723002)):(N.color.setHex(8900331),N.near=150,N.far=650,t.background=new ue(8900331))};let X=Math.PI,B=.35,de=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});function ge(C){const{x:N,z:F}=C.mesh.position,Q=[];C===Rt&&!z.flameOwned&&!ze&&(ze=!0,Q.push(new Ne("gem-flame",N,F))),C===ne&&!z.windOwned&&!Ze&&(Ze=!0,Q.push(new Ne("gem-wind",N,F))),C===fe&&!z.earthOwned&&!kt&&(kt=!0,Q.push(new Ne("gem-earth",N,F))),C===Ue&&!z.frostOwned&&!P&&(P=!0,Q.push(new Ne("gem-frost",N,F))),C===Me&&!z.voidOwned&&!b&&(b=!0,Q.push(new Ne("gem-void",N,F))),C===_t&&!z.lavaOwned&&!V&&(V=!0,Q.push(new Ne("gem-lava",N,F))),C===Ve&&!z.aquaOwned&&!ee&&(ee=!0,Q.push(new Ne("gem-aqua",N,F))),C===Dt&&!z.lifeOwned&&!oe&&(oe=!0,Q.push(new Ne("gem-life",N,F))),C.kind==="slime"&&te.slimeKills++,te.addKill(C.kind),C.kind==="voidLord"||C.kind==="voidGuardian"?Q.push(new Ne("large",N,F),new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="deep"?Q.push(new Ne("medium",N,F),new Ne("medium",N,F),new Ne("coin",N,F)):C.kind==="frostGuardian"?Q.push(new Ne("large",N,F),new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="frost"?Q.push(new Ne("medium",N,F),new Ne("coin",N,F)):C.kind==="earthGuardian"?Q.push(new Ne("large",N,F),new Ne("medium",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="ember"?Q.push(new Ne("medium",N,F),new Ne("coin",N,F)):C.kind==="magmaGuardian"?Q.push(new Ne("large",N,F),new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="sand"?Q.push(new Ne("medium",N,F),new Ne("coin",N,F)):C.kind==="coralGuardian"?Q.push(new Ne("large",N,F),new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="lifeGuardian"?Q.push(new Ne("large",N,F),new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="reef"||C.kind==="spore"?Q.push(new Ne("medium",N,F),new Ne("coin",N,F)):C.kind==="windGuardian"?Q.push(new Ne("large",N,F),new Ne("coin",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="elite"?Q.push(new Ne("medium",N,F),new Ne("small",N,F),new Ne("coin",N,F),new Ne("coin",N,F)):C.kind==="vine"?Q.push(new Ne("small",N,F),new Ne("small",N,F),new Ne("coin",N,F)):(Q.push(new Ne("small",N,F),new Ne("coin",N,F)),Math.random()<.35&&Q.push(new Ne("small",N,F)));for(const De of Q)t.add(De.mesh),vt.push(De)}function Pe(C){if(!M.isHost)for(let N=0;N<Ee.length;N++){const F=N*Ae;if(F+Ae-1>=C.length)break;const Q=Ee[N];if(Q.applyNetSnapshot(C[F],C[F+1],C[F+2],C[F+3],C[F+4]===1,C[F+5],C[F+6])){const Ye=Q.mesh.position;i.sfx("enemyDie"),h.burst(Ye.clone().setY(Ye.y+1),10217627,16)}}}function Ce(C,N,F){if(!M.isHost)return;const Q=Ee[C];if(!Q||Q.isDead)return;const De=Q.takeDamage(N),Ye=Q.mesh.position.clone().setY(Q.mesh.position.y+2.4);u.spawn(Ye,`-${Math.round(N)}`,"#ffd27a"),De&&(i.sfx("enemyDie"),h.burst(Q.mesh.position.clone().setY(Q.mesh.position.y+1),10217627,16),M.sendKill(C,F))}function We(C,N,F,Q){if(!M.isHost)return;const De=Ee[C];!De||De.isDead||(N==="freeze"?De.freeze(F):N==="burn"?De.burn(F,Q):De.stun(F))}function je(C){let N=g.mesh.position,F=null,Q=g.isDead?1/0:C.distanceToSquared(g.mesh.position);for(const[De,Ye]of L){if(Ye.dead)continue;const dt=C.distanceToSquared(Ye.mesh.position);dt<Q&&(Q=dt,N=Ye.mesh.position,F=De)}return{pos:N,remoteId:F}}function Fe(C,N,F,Q,De,Ye){if(g.isDead)return;const dt=new I(N,F,Q),sn=g.takeDamage(C,dt),wt=g.mesh.position.clone().setY(g.mesh.position.y+2.6);sn.blocked?(u.spawn(wt,`格擋 -${sn.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):sn.taken>0&&(u.spawn(wt,`-${sn.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10),De>0&&g.shove(dt,De),Ye==="chill"?g.chill(3):Ye==="burn"&&g.applyBurn(4,Math.max(2,Math.round(C*.15)))),g.isDead&&ni()}const rt=new Qp;e.setAnimationLoop(()=>{const C=Math.min(rt.getDelta(),.05),N=rt.getElapsedTime(),F=h.frozen?0:C,Q=M.connected&&!M.isHost;for(const W of Ee)W.remote=Q;const De=d.update(C,g.mesh.position,Te);Yn(g.mesh.position.x)===2?x.position.set(fi.x,0,fi.z):x.position.set(75,0,55),rv(x,N,De.waveScale),i.setRain(De.raining&&!Te),De.thunder&&(i.sfx("thunder"),h.shake(.15,.3)),i.setMusicMode(Te?"night":f?"sail":De.isNight?"night":"day"),le.setEnv(`${De.isNight?"🌙":"☀️"}${De.weather==="clear"?"":De.weather==="rain"?" 🌧️":" ⛈️"}`),!G.isTyping&&A.wasPressed("Enter")&&G.startTyping(),A.suspended=G.isTyping,G.isTyping&&A.clearKeys(),A.wasPressed("Tab")&&(i.sfx("ui"),Un.toggle()),A.wasPressed("Escape")&&(i.sfx("ui"),o.toggle()),A.wasPressed("KeyM")&&(i.sfx("ui"),En.toggle());{const W=Pu(g.mesh.position.x,g.mesh.position.z),Ke=(W==null?void 0:W.name)??null;Ke!==Ks&&(Ks=Ke,Ke&&le.showIslandTitle(Ke,Yn(g.mesh.position.x)===2?"第二海":"第一海")),En.render(g.mesh.position.x,g.mesh.position.z)}let Ye=null;for(const W of se)W.update(C,g.mesh.position)&&(Ye=W);let dt=null;for(const W of we)W.update(C,g.mesh.position)&&(dt=W);const sn=!f&&!Te&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,wt=f?m.findLandingSpot():null,hn=f&&z.isEquipped("tide")&&Math.hypot(m.mesh.position.x-Pn.x,m.mesh.position.z-Pn.z)<Pn.r;if(Te?le.setTalkPrompt(!0,"按 F 浮上水面"):hn?le.setTalkPrompt(!0,"按 F 潛入沉沒古城"):f&&wt?le.setTalkPrompt(!0,"按 F 上岸"):sn?le.setTalkPrompt(!0,"按 F 出海"):dt&&!dt.active&&!f&&!g.isDead&&!Be.isOpen?le.setTalkPrompt(!0,"按 F 設置重生點"):le.setTalkPrompt(Ye!==null&&!Be.isOpen&&!Mi.isOpen&&!Bi.isOpen&&!g.isDead&&!f,(Ye==null?void 0:Ye.role)==="shop"?"按 F 交易":(Ye==null?void 0:Ye.role)==="forge"?"按 F 鍛造":"按 F 對話"),A.wasPressed("KeyF")&&(Mi.isOpen?Mi.close():Bi.isOpen?Bi.close():Be.isOpen?Be.advance():Te?(q(!1),f=!0,i.sfx("dive"),Qe()):f?hn?(f=!1,q(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),i.sfx("dive"),le.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):wt&&(f=!1,g.mesh.position.copy(wt),i.sfx("ui"),Qe()):sn?(f=!0,g.blocking=!1,i.sfx("ui"),le.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):dt&&!dt.active&&!g.isDead?bt(dt):Ye&&!g.isDead&&(i.sfx("ui"),Ye.role==="shop"?Mi.open():Ye.role==="forge"?Bi.open():Be.open(Ye.name,Ye.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*F),f?(m.sail(F,A,De.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(F),!f&&!g.isDead&&!Un.isOpen&&!Be.isOpen&&!Mi.isOpen&&!Bi.isOpen&&!o.isOpen){const{attacked:W,spin:Ke,chargeReady:nt,jumped:un,dodged:Bt}=g.update(F,A,X);un&&i.sfx("jump"),Bt&&i.sfx("dodge"),nt&&i.sfx("chargeReady");const rn=(qe,ke,it)=>{const ut=qe.takeDamage(ke,it),Et=qe.mesh.position.clone().setY(qe.mesh.position.y+1);u.spawn(Et.clone().setY(Et.y+1.2),String(ke),"#ffd23c"),h.burst(Et,ut?10217627:16769162,ut?16:8),h.hitstop(ut?.1:.05),h.shake(ut?.28:.12,.18),i.sfx(ut?"enemyDie":"hit"),ut&&ge(qe)};if(W){i.sfx("swing");const qe=new I(Math.sin(g.facing),0,Math.cos(g.facing));for(const ke of Ee){if(ke.isDead)continue;const it=new I().subVectors(ke.mesh.position,g.mesh.position);it.y=0;const ut=it.length();ut>iM||ut>.5&&it.clone().normalize().dot(qe)<sM||rn(ke,g.stats.atk,it)}}if(Ke!==null){i.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const qe=Math.round(g.stats.atk*(1+1.5*Ke));for(const ke of Ee){if(ke.isDead)continue;const it=new I().subVectors(ke.mesh.position,g.mesh.position);it.y=0,!(it.length()>rM)&&rn(ke,qe,it)}if(Ke>=1){i.sfx("wave");const ke=new Pa(g.mesh.position,g.facing,qe);t.add(ke.mesh),ot.push(ke)}}z.ensureSlots();const vn=qe=>{const ke=z.slotOf(qe);return ke>=0&&A.wasPressed(`Digit${ke+1}`)};if(vn("flame")&&z.isEquipped("flame")&&!g.blocking&&g.mp>=yd){g.mp-=yd,i.sfx("fire");const qe=new Pa(g.mesh.position,g.facing,gb(g.stats.attrs.spirit,z.levels.flame),{color:16742972,lifetime:.45,speed:18});t.add(qe.mesh),ot.push(qe);const ke=g.mesh.position.clone().add(new I(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(ke,16742972,12,6)}if(A.wasPressed("KeyR")&&re.potions>0&&g.hp<g.stats.maxHP&&(re.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),u.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),i.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),vn("earth")&&z.isEquipped("earth")&&!g.blocking&&g.mp>=Md){g.mp-=Md,i.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const qe=_b(g.stats.attrs.spirit,z.levels.earth),ke=xb(z.levels.earth),it=new gd(g.mesh.position.x,g.mesh.position.z,{ringColor:14194492,shardColor:13140028,radius:ke,shardKind:"rock"});t.add(it.object),gt.push(it);for(const ut of Ee){if(ut.isDead)continue;const Et=new I().subVectors(ut.mesh.position,g.mesh.position);Et.y=0,!(Et.length()>ke)&&rn(ut,qe,Et)}}if(vn("frost")&&z.isEquipped("frost")&&!g.blocking&&g.mp>=bd){g.mp-=bd,i.sfx("ice");const qe=new jM(g.mesh.position,g.facing,vb(g.stats.attrs.spirit,z.levels.frost),Rd(z.levels.frost));t.add(qe.mesh),U.push(qe)}if(vn("void")&&z.isEquipped("void")&&g.mp>=Da){const qe=Math.sin(g.facing),ke=Math.cos(g.facing),it=g.mesh.position.clone();for(let ut=yb(z.levels.void);ut>=2;ut-=2){const Et=it.x+qe*ut,zt=it.z+ke*ut;if(Ic(Et,zt)||z.isEquipped("frost")&&g.mp>Da||Te&&Math.hypot(Et-Pn.x,zt-Pn.z)<Pn.r){g.mp-=Da,i.sfx("blink"),h.burst(it.clone().setY(it.y+1),9063144,10,5);const Qt=new _d(it.x,it.y+1.2,it.z,g.facing,"implode");t.add(Qt.object),gt.push(Qt),g.blinkTo(Et,zt);const en=g.mesh.position;h.burst(en.clone().setY(en.y+1),9063144,10,5);const Rn=new _d(en.x,en.y+1.2,en.z,g.facing,"explode");t.add(Rn.object),gt.push(Rn);break}}}if(vn("lava")&&z.isEquipped("lava")&&!g.blocking&&g.mp>=wd){g.mp-=wd,i.sfx("lava");const qe=new Pa(g.mesh.position,g.facing,Mb(g.stats.attrs.spirit,z.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});t.add(qe.mesh),ot.push(qe);const ke=g.mesh.position.clone().add(new I(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(ke,16730652,16,7)}if(vn("aqua")&&z.isEquipped("aqua")&&!g.blocking&&g.mp>=Sd){g.mp-=Sd,i.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const qe=wb(g.stats.attrs.spirit,z.levels.aqua),ke=Tb(z.levels.aqua),it=new gd(g.mesh.position.x,g.mesh.position.z,{ringColor:4905192,shardColor:10154239,radius:ke,shardKind:"drop",shardCount:18});t.add(it.object),gt.push(it);const ut=Sb(z.levels.aqua);for(const Et of Ee){if(Et.isDead)continue;const zt=new I().subVectors(Et.mesh.position,g.mesh.position);zt.y=0,!(zt.length()>ke)&&(rn(Et,qe,zt),Et.isDead||Et.freeze(ut))}}if(vn("life")&&z.isEquipped("life")&&!g.blocking&&g.mp>=Td){g.mp-=Td,i.sfx("life");const qe=Eb(g.stats.attrs.spirit,z.levels.life),ke=Ab(z.levels.life),it=15,ut=2.2,Et=new I(Math.sin(g.facing),0,Math.cos(g.facing)),zt=g.mesh.position.clone();for(const Rn of Ee){if(Rn.isDead)continue;const yn=new I().subVectors(Rn.mesh.position,zt);yn.y=0;const as=yn.dot(Et);if(!(as<0||as>it||yn.clone().addScaledVector(Et,-as).length()>ut)&&(rn(Rn,qe,yn),g.hp<g.stats.maxHP)){const bi=Math.max(1,Math.round(qe*ke));g.hp=Math.min(g.stats.maxHP,g.hp+bi),u.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${bi}`,"#7be87b")}}const $n=zt.clone().setY(zt.y+1.4).addScaledVector(Et,.4),Qt=zt.clone().setY(zt.y+1.4).addScaledVector(Et,it),en=new $M($n,Qt);t.add(en.object),gt.push(en)}if(A.wasPressed("KeyZ")&&$.isEquipped("thunder")&&!g.blocking&&g.mp>=hd){let qe=null,ke=CM;for(const it of Ee){if(it.isDead)continue;const ut=it.mesh.position.distanceTo(g.mesh.position);ut<ke&&(ke=ut,qe=it)}if(qe){g.mp-=hd,i.sfx("thunder");const it=NM($.levels.thunder),ut=UM($.levels.thunder),Et=DM(g.stats.attrs.spirit,$.levels.thunder),zt=new Set,$n=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let Qt=qe,en=Et;for(;Qt&&zt.size<it;){const yn=Qt;zt.add(yn);const as=Math.round(en),ll=new I().subVectors(yn.mesh.position,g.mesh.position),bi=yn.takeDamage(as,ll);bi||yn.stun(ut);const Dr=yn.mesh.position.clone().setY(yn.mesh.position.y+1);$n.push(Dr.clone()),u.spawn(Dr.clone().setY(Dr.y+1.4),String(as),"#bfe8ff"),h.burst(Dr,bi?10217627:12577023,bi?16:8),i.sfx(bi?"enemyDie":"hit"),bi&&ge(yn);let hl=null,dl=IM;for(const Nr of Ee){if(Nr.isDead||zt.has(Nr))continue;const ul=Nr.mesh.position.distanceTo(yn.mesh.position);ul<dl&&(dl=ul,hl=Nr)}Qt=hl,en*=PM}const Rn=new WM($n);t.add(Rn.group),pt.push(Rn),h.shake(.2,.16)}}if(A.wasPressed("KeyT")&&$.isEquipped("gravity")&&!g.blocking&&g.mp>=dd){g.mp-=dd,i.sfx("vortex");const qe=g.mesh.position.x+Math.sin(g.facing)*ud,ke=g.mesh.position.z+Math.cos(g.facing)*ud,it=new VM(qe,ke,FM($.levels.gravity),kM($.levels.gravity),OM(g.stats.attrs.spirit,$.levels.gravity));t.add(it.mesh),Wt.push(it),h.burst(new I(qe,lt(qe,ke)+1,ke),11559167,14,6)}}!f&&!g.isDead&&Ey(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-lt(g.mesh.position.x,g.mesh.position.z)<.5?(K+=F,K>=.8&&(K=0,g.applyEnvironmentDamage(6),u.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),i.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&ni())):K=0;const dn=!f&&!Te&&!g.isDead&&z.isEquipped("frost")&&!Ic(g.mesh.position.x,g.mesh.position.z);if(v.visible=dn,dn&&(v.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=hb*F,g.mp<=0)){g.mp=0,i.sfx("shatter"),le.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const W=R(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(W.x,lt(W.x,W.z),W.z),g.isDead&&ni()}for(const W of Ee){if(Q){W.updateRemote(F);continue}const Ke=(W.kind==="deep"||W.kind==="voidGuardian")&&!Te,nt=M.isHost&&L.size>0?je(W.mesh.position):null,un=nt?nt.pos:g.mesh.position,Bt=nt?nt.remoteId:null,rn=Ke||(Bt===null?g.isDead:!1),vn=W.update(F,un,rn),qe=W.mesh.position;if(vn>0&&!rn)if(Bt!==null)M.sendPlayerDamage(Bt,vn,qe.x,qe.y,qe.z,0,"");else{const ut=g.takeDamage(vn,qe),Et=g.mesh.position.clone().setY(g.mesh.position.y+2.6);ut.blocked?(u.spawn(Et,`格擋 -${ut.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):ut.taken>0&&(u.spawn(Et,`-${ut.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&ni()}const ke=W.specialEvent;if(ke){W.specialEvent=null;const ut=W.mesh.position.clone().setY(W.mesh.position.y+3.2);u.spawn(ut,`⚡${ke.name}`,"#ffd23c"),i.sfx(ke.sfx),h.shake(.3,.25),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+.6),ke.color,24,9),ke.healed>0&&u.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),`+${ke.healed}`,"#7be87b");const Et=ke.radius*ke.radius;if(!g.isDead){const zt=g.mesh.position.x-qe.x,$n=g.mesh.position.z-qe.z;if(zt*zt+$n*$n<=Et){const Qt=g.takeDamage(ke.dmg,W.mesh.position),en=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Qt.blocked?(u.spawn(en,`格擋 -${Qt.taken}`,"#cfd8e8"),i.sfx("block")):Qt.taken>0&&(u.spawn(en,`-${Qt.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),ke.color,12),g.shove(W.mesh.position,ke.knock),ke.effect==="chill"?g.chill(3):ke.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(ke.dmg*.15)))),g.isDead&&ni()}}if(M.isHost){const zt=ke.effect==="chill"?"chill":ke.effect==="burn"?"burn":"";for(const[$n,Qt]of L){if(Qt.dead)continue;const en=Qt.mesh.position.x-qe.x,Rn=Qt.mesh.position.z-qe.z;en*en+Rn*Rn<=Et&&M.sendPlayerDamage($n,ke.dmg,qe.x,qe.y,qe.z,ke.knock,zt)}}}const it=W.tickBurn(F);if(it>0&&!W.isDead){const ut=W.takeDamage(it);u.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),String(it),"#ff7a3c"),ut&&(i.sfx("enemyDie"),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+1),10217627,16),ge(W))}}const qt=g.tickBurn(F);qt>0&&!g.isDead&&(g.applyEnvironmentDamage(qt),u.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${qt}`,"#ff7a3c"),g.isDead&&ni());for(const W of y){if(!W.active){if(W.respawnT-=F,W.respawnT<=0){const Ke=S();W.place(Ke.x,Ke.z)}continue}if(W.update(F,m.mesh.position,f)){W.collect(),i.sfx("gem");const Ke=Math.random();if(Ke<.5){const nt=20+Math.floor(Math.random()*41);re.coins+=nt,le.showToast(`漂流寶箱:獲得 ${nt} 貝拉幣!`)}else if(Ke<.75){const nt=2+Math.floor(Math.random()*2);re.crystals.small+=nt,le.showToast(`漂流寶箱:獲得小型經驗結晶 ×${nt}!`)}else Ke<.9?(re.crystals.medium+=1,le.showToast("漂流寶箱:獲得中型經驗結晶!")):(re.potions+=1,le.showToast("漂流寶箱:獲得回復藥水!"));h.burst(W.mesh.position.clone().setY(1.2),16769152,14,6),Un.render()}}if(ot=ot.filter(W=>{const Ke=W.update(F,Ee);for(const nt of Ke){const un=new I().subVectors(nt.mesh.position,g.mesh.position);un.y=0;const Bt=nt.takeDamage(W.damage,un);if(W.freezes&&!Bt&&nt.freeze(Rd(z.levels.frost)),W.burns&&!Bt&&nt.burn(ub,bb(z.levels.lava)),W.leech>0&&g.hp<g.stats.maxHP){const vn=Math.max(1,Math.round(W.damage*W.leech));g.hp=Math.min(g.stats.maxHP,g.hp+vn),u.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${vn}`,"#7be87b")}const rn=nt.mesh.position.clone().setY(nt.mesh.position.y+1);u.spawn(rn.clone().setY(rn.y+1.2),String(W.damage),"#7fe8ff"),h.burst(rn,Bt?10217627:8382719,Bt?16:8),i.sfx(Bt?"enemyDie":"hit"),Bt&&ge(nt)}return W.expired?(t.remove(W.mesh),W.dispose(),!1):!0}),U=U.filter(W=>{const Ke=W.update(F,Ee);for(const nt of Ke){const un=new I().subVectors(nt.mesh.position,g.mesh.position);un.y=0;const Bt=nt.takeDamage(W.damage,un);Bt||nt.freeze(W.freezeSec);const rn=nt.mesh.position.clone().setY(nt.mesh.position.y+1);u.spawn(rn.clone().setY(rn.y+1.2),String(W.damage),"#9adcff"),h.burst(rn,Bt?10217627:10149119,Bt?16:8),i.sfx(Bt?"enemyDie":"hit"),Bt&&ge(nt)}return W.expired?(t.remove(W.mesh),W.dispose(),!1):!0}),Wt=Wt.filter(W=>{const Ke=W.update(F,Ee);for(const nt of Ke){const un=nt.takeDamage(W.damage),Bt=nt.mesh.position.clone().setY(nt.mesh.position.y+1);u.spawn(Bt.clone().setY(Bt.y+1.2),String(W.damage),"#d8b0ff"),h.burst(Bt,un?10217627:11559167,un?16:6),un&&(i.sfx("enemyDie"),ge(nt))}return W.expired?(t.remove(W.mesh),W.dispose(),!1):!0}),gt=gt.filter(W=>(W.update(F),W.expired?(t.remove(W.object),W.dispose(),!1):!0)),pt=pt.filter(W=>(W.update(F),W.expired?(t.remove(W.group),W.dispose(),!1):!0)),!$.thunderOwned){const W=d.weather==="storm";W&&!Re?(Re=new Ne("fruit-thunder",Xh.x,Xh.z),t.add(Re.mesh),vt.push(Re)):!W&&Re&&(t.remove(Re.mesh),vt=vt.filter(Ke=>Ke!==Re),Re=null)}vt=vt.filter(W=>{if(g.isDead)return!0;const Ke=W.update(F,g.mesh.position);if(Ke){if(W.kind==="coin")re.coins+=8,p.push("🪙 獲得 8 貝拉幣"),i.sfx("coin");else if(W.kind==="gem-flame")p.push("🔥 獲得靈紋寶石【焰心石】"),z.flameOwned=!0,An("flame"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Qe();else if(W.kind==="gem-wind")p.push("🌪️ 獲得靈紋寶石【風語石】"),z.windOwned=!0,An("wind"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Qe();else if(W.kind==="gem-earth")p.push("🪨 獲得靈紋寶石【地殼石】"),z.earthOwned=!0,An("earth"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Qe();else if(W.kind==="gem-frost")p.push("❄️ 獲得靈紋寶石【霜語晶】"),z.frostOwned=!0,An("frost"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Qe();else if(W.kind==="gem-tide")p.push("🌊 獲得靈紋寶石【潮汐石】"),z.tideOwned=!0,An("tide"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Qe();else if(W.kind==="gem-void")p.push("🌀 獲得靈紋寶石【虛空石】"),z.voidOwned=!0,An("void"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Qe();else if(W.kind==="gem-lava")p.push("🌋 獲得靈紋寶石【溶岩石】"),z.lavaOwned=!0,An("lava"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Qe();else if(W.kind==="gem-aqua")p.push("💧 獲得靈紋寶石【碧波石】"),z.aquaOwned=!0,An("aqua"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Qe();else if(W.kind==="gem-life")p.push("🌿 獲得靈紋寶石【翠生石】"),z.lifeOwned=!0,An("life"),le.setGems(z),i.sfx("gem"),le.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Qe();else if(W.kind==="fruit-thunder")p.push("⚡ 獲得靈樹果實【雷光果】"),$.thunderOwned=!0,Zs("thunder"),Re=null,le.setFruits($),i.sfx("gem"),le.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Qe();else if(W.kind==="fruit-gravity")p.push("🌀 獲得靈樹果實【引力果】"),$.gravityOwned=!0,Zs("gravity"),le.setFruits($),i.sfx("gem"),le.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Qe();else{re.crystals[W.kind]++;const nt=W.kind==="small"?"小型":W.kind==="medium"?"中型":"大型";p.push(`💎 獲得${nt}經驗結晶`),i.sfx("crystal")}t.remove(W.mesh),Un.render()}return!Ke}),A.rightDown&&(X-=A.dx*.005,B=zs.clamp(B+A.dy*.004,.05,1.2)),de=zs.clamp(de+A.wheel*.01,6,18);const Xt=g.mesh.position.clone().add(new I(0,2,0)),ii=new I(Xt.x+Math.sin(X)*Math.cos(B)*de,Xt.y+Math.sin(B)*de,Xt.z+Math.cos(X)*Math.cos(B)*de);ii.y=Math.max(ii.y,lt(ii.x,ii.z)+.6);const si=1-Math.exp(-12*C);n.position.lerp(ii,si),n.position.add(h.update(C)),n.lookAt(Xt);const xn=[];if(te.get("gem")==="active"&&xn.push(z.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),te.get("jelly")==="active"){const W=te.jellyProgress();xn.push(W>=Ki?"果凍清理:回報漁夫小蝦":`果凍清理:${W}/${Ki}`)}te.get("wind")==="active"&&xn.push(z.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),te.get("earth")==="active"&&xn.push(z.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),te.get("frost")==="active"&&xn.push(z.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),te.get("tide")==="active"&&xn.push(z.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),te.get("depth")==="active"&&xn.push(z.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),te.get("final")==="active"&&xn.push(pe?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),te.get("sea2")==="active"&&xn.push(he()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${O()}/6・圖鑑${xe()}/${me.length}・Lv.${g.stats.level}/${Xe}`),te.get("lava")==="active"&&xn.push(z.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),te.get("aqua")==="active"&&xn.push(z.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),te.get("life")==="active"&&xn.push(z.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const zu=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const W of zu){if(te.get(W.id)!=="active")continue;const Ke=te.huntProgress(W.id);xn.push(Ke>=Qi[W.id].target?`${W.title}:回報${W.npc}`:`${W.title}:${Ke}/${Qi[W.id].target}`)}if(le.setQuests(xn),!Le&&Oe.isDead&&(Le=!0,pe=!0,Lr(),i.sfx("victory"),E.style.display="flex",Qe()),a.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),a.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!f&&!g.isDead&&g.chargeRatio>=1){if(_+=C,_>=.16){_=0;const W=g.mesh.position.clone().add(new I(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(W,13625599,3,2.5)}}else _=0;for(const W of L.values())W.update(C);if(Z+=C,Z>=.05){Z=0;const W=g.mesh.position,Ke=(W.x-ae.x)**2+(W.z-ae.z)**2;ae.copy(W);const nt=(g.attacking?1:0)|(g.blocking?2:0)|(g.airborne?4:0)|(g.hurtT>0?8:0),un={x:W.x,y:W.y,z:W.z,facing:g.facing,moving:Ke>1e-5,act:nt,dead:g.isDead};M.sendState(un)}if(Q)for(const W of Ee){const Ke=W.netIndex;W.pendingNetDamage>0&&(M.sendHit(Ke,Math.round(W.pendingNetDamage)),W.pendingNetDamage=0),W.pendingNetFreeze>0&&(M.sendCc(Ke,"freeze",W.pendingNetFreeze,0),W.pendingNetFreeze=0),W.pendingNetStun>0&&(M.sendCc(Ke,"stun",W.pendingNetStun,0),W.pendingNetStun=0),W.pendingNetBurnSec>0&&(M.sendCc(Ke,"burn",W.pendingNetBurnSec,W.pendingNetBurnDps),W.pendingNetBurnSec=0,W.pendingNetBurnDps=0)}else if(M.isHost&&L.size>0&&(j+=C,j>=.08)){j=0;const W=[];for(const Ke of Ee){const nt=Ke.mesh.position;W.push(_e(nt.x),_e(nt.y),_e(nt.z),_e(Ke.mesh.rotation.y),Ke.isDead?1:0,Ke.hp,Ke.statusFlag)}M.sendEnemies(W)}u.update(C,n),le.update(g,re),A.endFrame(),e.render(t,n)})}Promise.all([wv().catch(()=>!1),ly().catch(()=>!1),_y().catch(()=>!1)]).catch(()=>{}).finally(()=>d1());
