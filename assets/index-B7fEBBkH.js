var $c=Object.defineProperty;var Kc=(i,t,e)=>t in i?$c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var R=(i,t,e)=>Kc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="177",jc=0,go=1,Zc=2,oc=1,lc=2,Cn=3,$n=0,$e=1,je=2,qn=0,Vi=1,_o=2,vo=3,xo=4,Jc=5,hi=100,Qc=101,th=102,eh=103,nh=104,ih=200,sh=201,rh=202,ah=203,ea=204,na=205,oh=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,ia=0,sa=1,ra=2,Yi=3,aa=4,oa=5,la=6,ca=7,cc=0,gh=1,_h=2,Xn=0,vh=1,xh=2,Mh=3,yh=4,Sh=5,wh=6,Eh=7,hc=300,$i=301,Ki=302,ha=303,ua=304,pr=306,da=1e3,di=1001,fa=1002,Ke=1003,bh=1004,Cs=1005,yn=1006,xr=1007,fi=1008,Sn=1009,uc=1010,dc=1011,ms=1012,Ya=1013,gi=1014,Ln=1015,ys=1016,$a=1017,Ka=1018,gs=1020,fc=35902,pc=1021,mc=1022,pn=1023,_s=1026,vs=1027,ja=1028,Za=1029,gc=1030,Ja=1031,Qa=1033,nr=33776,ir=33777,sr=33778,rr=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Ma=37496,ya=37808,Sa=37809,wa=37810,Ea=37811,ba=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,ar=36492,Na=36494,Oa=36495,_c=36283,Fa=36284,za=36285,Ba=36286,Th=3200,Ah=3201,vc=0,Rh=1,Wn="",rn="srgb",ji="srgb-linear",lr="linear",ye="srgb",Si=7680,Mo=519,Ch=512,Ph=513,Lh=514,xc=515,Dh=516,Ih=517,Uh=518,Nh=519,ka=35044,yo="300 es",Dn=2e3,cr=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let So=1234567;const fs=Math.PI/180,xs=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function to(i,t){return(i%t+t)%t}function Oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fh(i,t,e){return i!==t?(e-i)/(t-i):0}function ps(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return ps(i,t,1-Math.exp(-e*n))}function Bh(i,t=1){return t-Math.abs(to(i,t*2)-t)}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vh(i,t){return i+Math.random()*(t-i)}function Wh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(So=i);let t=So+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xh(i){return i*fs}function Yh(i){return i*xs}function $h(i){return(i&i-1)===0&&i!==0}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:fs,RAD2DEG:xs,generateUUID:In,clamp:ae,euclideanModulo:to,mapLinear:Oh,inverseLerp:Fh,lerp:ps,damp:zh,pingpong:Bh,smoothstep:kh,smootherstep:Gh,randInt:Hh,randFloat:Vh,randFloatSpread:Wh,seededRandom:qh,degToRad:Xh,radToDeg:Yh,isPowerOfTwo:$h,ceilPowerOfTwo:Kh,floorPowerOfTwo:jh,setQuaternionFromProperEuler:Zh,normalize:Me,denormalize:fn};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const p=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==p||c!==f||d!==_){let m=1-o;const u=l*p+c*f+d*_+h*x,E=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const N=Math.sqrt(b),A=Math.atan2(N,u*E);m=Math.sin(m*A)/N,o=Math.sin(o*A)/N}const S=o*E;if(l=l*m+p*S,c=c*m+f*S,d=d*m+_*S,h=h*m+x*S,m===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=N,c*=N,d*=N,h*=N}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*f-c*p,t[e+1]=l*_+d*p+c*h-o*f,t[e+2]=c*_+d*f+o*p-l*h,t[e+3]=d*_-o*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),p=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"YXZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"ZXY":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"ZYX":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"YZX":this._x=p*d*h+c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h-p*f*_;break;case"XZY":this._x=p*d*h-c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new P,wo=new Ss;class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],f=n[5],_=n[8],x=s[0],m=s[3],u=s[6],E=s[1],b=s[4],S=s[7],N=s[2],A=s[5],g=s[8];return r[0]=a*x+o*E+l*N,r[3]=a*m+o*b+l*A,r[6]=a*u+o*S+l*g,r[1]=c*x+d*E+h*N,r[4]=c*m+d*b+h*A,r[7]=c*u+d*S+h*g,r[2]=p*x+f*E+_*N,r[5]=p*m+f*b+_*A,r[8]=p*u+f*S+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,p=o*l-d*r,f=c*r-a*l,_=e*h+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(o*n-s*a)*x,t[3]=p*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Qt;function Mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){const i=hr("canvas");return i.style.display="block",i}const Eo={};function Wi(i){i in Eo||(Eo[i]=!0,console.warn(i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bo=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nu(){const i={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?lr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ji]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:bo,fromXYZ:To,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:bo,fromXYZ:To,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ge=nu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class iu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=hr("canvas")),wi.width=t.width,wi.height=t.height;const s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sr(s[a].image)):r.push(Sr(s[a]))}else r=Sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;const wr=new P;class qe extends Ji{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=di,s=di,r=yn,a=fi,o=pn,l=Sn,c=qe.DEFAULT_ANISOTROPY,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=In(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=hc;qe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(f+1)/2,N=(u+1)/2,A=(d+p)/4,g=(h+x)/4,I=(_+m)/4;return b>S&&b>N?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=g/n):S>N?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=I/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=g/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-x)/E,this.z=(p-d)/E,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new qe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new eo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Ls.subVectors(this.max,is),Ei.subVectors(t.a,is),bi.subVectors(t.b,is),Ti.subVectors(t.c,is),zn.subVectors(bi,Ei),Bn.subVectors(Ti,bi),ti.subVectors(Ei,Ti);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!Er(e,Ei,bi,Ti,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,Ei,bi,Ti,Ls))?!1:(Ds.crossVectors(zn,Bn),e=[Ds.x,Ds.y,Ds.z],Er(e,Ei,bi,Ti,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,Ps=new ws,Ei=new P,bi=new P,Ti=new P,zn=new P,Bn=new P,ti=new P,is=new P,Ls=new P,Ds=new P,ei=new P;function Er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),d=n.dot(ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const lu=new ws,ss=new P,br=new P;class mr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(br)),this.expandByPoint(ss.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const En=new P,Tr=new P,Is=new P,kn=new P,Ar=new P,Us=new P,Rr=new P;class Sc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Tr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=kn.dot(this.direction),l=-kn.dot(Is),c=kn.lengthSq(),d=Math.abs(1-a*a);let h,p,f,_;if(d>0)if(h=a*l-o,p=a*o-l,_=r*d,h>=0)if(p>=-_)if(p<=_){const x=1/d;h*=x,p*=x,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Tr).addScaledVector(Is,p),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Ar.subVectors(e,t),Us.subVectors(n,t),Rr.crossVectors(Ar,Us);let a=this.direction.dot(Rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(kn,Us));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(kn));if(c<0||l+c>a)return null;const d=-o*kn.dot(Rr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m)}set(t,e,n,s,r,a,o,l,c,d,h,p,f,_,x,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p+x*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=f*o-_,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,f=l*h,_=c*d,x=c*h;e[0]=p-x*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*d,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,f=a*h,_=o*d,x=o*h;e[0]=l*d,e[4]=_*c-f,e[8]=p*c+x,e[1]=l*h,e[5]=x*c+p,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=x-p*h,e[8]=_*h+f,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*h+_,e[10]=p-x*h}else if(t.order==="XZY"){const p=a*l,f=a*c,_=o*l,x=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+x,e[5]=a*d,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*d,e[10]=x*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,hu)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gn.crossVectors(n,Ze),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gn.crossVectors(n,Ze)),Gn.normalize(),Ns.crossVectors(Ze,Gn),s[0]=Gn.x,s[4]=Ns.x,s[8]=Ze.x,s[1]=Gn.y,s[5]=Ns.y,s[9]=Ze.y,s[2]=Gn.z,s[6]=Ns.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],f=n[13],_=n[2],x=n[6],m=n[10],u=n[14],E=n[3],b=n[7],S=n[11],N=n[15],A=s[0],g=s[4],I=s[8],w=s[12],y=s[1],D=s[5],F=s[9],k=s[13],J=s[2],nt=s[6],Q=s[10],at=s[14],$=s[3],xt=s[7],Rt=s[11],Ot=s[15];return r[0]=a*A+o*y+l*J+c*$,r[4]=a*g+o*D+l*nt+c*xt,r[8]=a*I+o*F+l*Q+c*Rt,r[12]=a*w+o*k+l*at+c*Ot,r[1]=d*A+h*y+p*J+f*$,r[5]=d*g+h*D+p*nt+f*xt,r[9]=d*I+h*F+p*Q+f*Rt,r[13]=d*w+h*k+p*at+f*Ot,r[2]=_*A+x*y+m*J+u*$,r[6]=_*g+x*D+m*nt+u*xt,r[10]=_*I+x*F+m*Q+u*Rt,r[14]=_*w+x*k+m*at+u*Ot,r[3]=E*A+b*y+S*J+N*$,r[7]=E*g+b*D+S*nt+N*xt,r[11]=E*I+b*F+S*Q+N*Rt,r[15]=E*w+b*k+S*at+N*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],f=t[14],_=t[3],x=t[7],m=t[11],u=t[15];return _*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*f-n*l*f)+x*(+e*l*f-e*c*p+r*a*p-s*a*f+s*c*d-r*l*d)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*p+s*a*h-n*a*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],f=t[11],_=t[12],x=t[13],m=t[14],u=t[15],E=h*m*c-x*p*c+x*l*f-o*m*f-h*l*u+o*p*u,b=_*p*c-d*m*c-_*l*f+a*m*f+d*l*u-a*p*u,S=d*x*c-_*h*c+_*o*f-a*x*f-d*o*u+a*h*u,N=_*h*l-d*x*l-_*o*p+a*x*p+d*o*m-a*h*m,A=e*E+n*b+s*S+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/A;return t[0]=E*g,t[1]=(x*p*r-h*m*r-x*s*f+n*m*f+h*s*u-n*p*u)*g,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*u+n*l*u)*g,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*f-n*l*f)*g,t[4]=b*g,t[5]=(d*m*r-_*p*r+_*s*f-e*m*f-d*s*u+e*p*u)*g,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*u-e*l*u)*g,t[7]=(a*p*r-d*l*r+d*s*c-e*p*c-a*s*f+e*l*f)*g,t[8]=S*g,t[9]=(_*h*r-d*x*r-_*n*f+e*x*f+d*n*u-e*h*u)*g,t[10]=(a*x*r-_*o*r+_*n*c-e*x*c-a*n*u+e*o*u)*g,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*f-e*o*f)*g,t[12]=N*g,t[13]=(d*x*s-_*h*s+_*n*p-e*x*p-d*n*m+e*h*m)*g,t[14]=(_*o*s-a*x*s-_*n*l+e*x*l+a*n*m-e*o*m)*g,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*p+e*o*p)*g,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,p=r*c,f=r*d,_=r*h,x=a*d,m=a*h,u=o*h,E=l*c,b=l*d,S=l*h,N=n.x,A=n.y,g=n.z;return s[0]=(1-(x+u))*N,s[1]=(f+S)*N,s[2]=(_-b)*N,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(p+u))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(_+b)*g,s[9]=(m-E)*g,s[10]=(1-(p+x))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const c=1/r,d=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let f,_;if(o===Dn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===cr)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),p=(e+t)*c,f=(n+s)*d;let _,x;if(o===Dn)_=(a+r)*h,x=-2*h;else if(o===cr)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new P,un=new Te,cu=new P(0,0,0),hu=new P(1,1,1),Gn=new P,Ns=new P,Ze=new P,Ao=new Te,Ro=new Ss;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ao,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uu=0;const Co=new P,Ri=new Ss,bn=new Te,Os=new P,rs=new P,du=new P,fu=new Ss,Po=new P(1,0,0),Lo=new P(0,1,0),Do=new P(0,0,1),Io={type:"added"},pu={type:"removed"},Ci={type:"childadded",child:null},Cr={type:"childremoved",child:null};class De extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new P,e=new Nn,n=new Ss,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Po,t)}rotateY(t){return this.rotateOnAxis(Lo,t)}rotateZ(t){return this.rotateOnAxis(Do,t)}translateOnAxis(t,e){return Co.copy(t).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Po,t)}translateY(t){return this.translateOnAxis(Lo,t)}translateZ(t){return this.translateOnAxis(Do,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(rs,Os,this.up):bn.lookAt(Os,rs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Io),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Io),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new P(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new P,Tn=new P,Pr=new P,An=new P,Pi=new P,Li=new P,Uo=new P,Lr=new P,Dr=new P,Ir=new P,Ur=new Ae,Nr=new Ae,Or=new Ae;class ln{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Tn.subVectors(n,e),Pr.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Tn),l=dn.dot(Pr),c=Tn.dot(Tn),d=Tn.dot(Pr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,f=(c*l-o*d)*p,_=(a*d-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ur.setScalar(0),Nr.setScalar(0),Or.setScalar(0),Ur.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Nr,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Tn.subVectors(t,e),dn.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),dn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Li.subVectors(r,n),Lr.subVectors(t,n);const l=Pi.dot(Lr),c=Li.dot(Lr);if(l<=0&&c<=0)return e.copy(n);Dr.subVectors(t,s);const d=Pi.dot(Dr),h=Li.dot(Dr);if(d>=0&&h<=d)return e.copy(s);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Pi,a);Ir.subVectors(t,r);const f=Pi.dot(Ir),_=Li.dot(Ir);if(_>=0&&f<=_)return e.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Li,o);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return Uo.subVectors(r,s),o=(h-d)/(h-d+(f-_)),e.copy(s).addScaledVector(Uo,o);const u=1/(m+x+p);return a=x*u,o=p*u,e.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Fr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=to(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fr(a,r,t+1/3),this.g=Fr(a,r,t),this.b=Fr(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ge.workingToColorSpace(We.copy(this),t),Math.round(ae(We.r*255,0,255))*65536+Math.round(ae(We.g*255,0,255))*256+Math.round(ae(We.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=rn){ge.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Fs);const n=ps(Hn.h,Fs.h,e),s=ps(Hn.s,Fs.s,e),r=ps(Hn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Gt;Gt.NAMES=Ec;let mu=0;class Mi extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Vi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tn extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new P,zs=new Zt;let gu=0;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}}class bc extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _u=0;const nn=new Te,zr=new De,Di=new P,Je=new ws,as=new ws,Fe=new P;class ze extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Tc:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(Je.min,as.min),Je.expandByPoint(Fe),Fe.addVectors(Je.max,as.max),Je.expandByPoint(Fe)):(Je.expandByPoint(as.min),Je.expandByPoint(as.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Fe.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Fe.add(Di)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;const c=new P,d=new P,h=new P,p=new Zt,f=new Zt,_=new Zt,x=new P,m=new P;function u(I,w,y){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),_.fromBufferAttribute(r,y),d.sub(c),h.sub(c),f.sub(p),_.sub(p);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(D),o[I].add(x),o[w].add(x),o[y].add(x),l[I].add(m),l[w].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,w=E.length;I<w;++I){const y=E[I],D=y.start,F=y.count;for(let k=D,J=D+F;k<J;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new P,S=new P,N=new P,A=new P;function g(I){N.fromBufferAttribute(s,I),A.copy(N);const w=o[I];b.copy(w),b.sub(N.multiplyScalar(N.dot(w))).normalize(),S.crossVectors(A,w);const D=S.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,w=E.length;I<w;++I){const y=E[I],D=y.start,F=y.count;for(let k=D,J=D+F;k<J;k+=3)g(t.getX(k+0)),g(t.getX(k+1)),g(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let u=0;u<d;u++)p[_++]=c[f++]}return new Qe(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const No=new Te,ni=new Sc,Bs=new mr,Oo=new P,ks=new P,Gs=new P,Hs=new P,Br=new P,Vs=new P,Fo=new P,Ws=new P;class et extends De{constructor(t=new ze,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Br.fromBufferAttribute(h,t),a?Vs.addScaledVector(Br,d):Vs.addScaledVector(Br.sub(e),d))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Bs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Bs,Oo)===null||ni.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(No.copy(r).invert(),ni.copy(t.ray).applyMatrix4(No),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,N=b;S<N;S+=3){const A=o.getX(S),g=o.getX(S+1),I=o.getX(S+2);s=qs(this,u,t,n,c,d,h,A,g,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=qs(this,a,t,n,c,d,h,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const m=p[_],u=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,N=b;S<N;S+=3){const A=S,g=S+1,I=S+2;s=qs(this,u,t,n,c,d,h,A,g,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,u=x;m<u;m+=3){const E=m,b=m+1,S=m+2;s=qs(this,a,t,n,c,d,h,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vu(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ks),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Hs);const d=vu(i,t,e,n,ks,Gs,Hs,Fo);if(d){const h=new P;ln.getBarycoord(Fo,ks,Gs,Hs,h),s&&(d.uv=ln.getInterpolatedAttribute(s,o,l,c,h,new Zt)),r&&(d.uv1=ln.getInterpolatedAttribute(r,o,l,c,h,new Zt)),a&&(d.normal=ln.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new P,materialIndex:0};ln.getNormal(ks,Gs,Hs,p.normal),d.face=p,d.barycoord=h}return d}class Le extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(h,2));function _(x,m,u,E,b,S,N,A,g,I,w){const y=S/g,D=N/I,F=S/2,k=N/2,J=A/2,nt=g+1,Q=I+1;let at=0,$=0;const xt=new P;for(let Rt=0;Rt<Q;Rt++){const Ot=Rt*D-k;for(let ee=0;ee<nt;ee++){const re=ee*y-F;xt[x]=re*E,xt[m]=Ot*b,xt[u]=J,c.push(xt.x,xt.y,xt.z),xt[x]=0,xt[m]=0,xt[u]=A>0?1:-1,d.push(xt.x,xt.y,xt.z),h.push(ee/g),h.push(1-Rt/I),at+=1}}for(let Rt=0;Rt<I;Rt++)for(let Ot=0;Ot<g;Ot++){const ee=p+Ot+nt*Rt,re=p+Ot+nt*(Rt+1),j=p+(Ot+1)+nt*(Rt+1),ct=p+(Ot+1)+nt*Rt;l.push(ee,re,ct),l.push(re,j,ct),$+=6}o.addGroup(f,$,w),f+=$,p+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function xu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Mu={clone:Zi,merge:Ye};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rc extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new P,zo=new Zt,Bo=new Zt;class an extends Rc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,zo,Bo),e.subVectors(Bo,zo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Ui=1;class wu extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ii,Ui,t,e);s.layers=this.layers,this.add(s);const r=new an(Ii,Ui,t,e);r.layers=this.layers,this.add(r);const a=new an(Ii,Ui,t,e);a.layers=this.layers,this.add(a);const o=new an(Ii,Ui,t,e);o.layers=this.layers,this.add(o);const l=new an(Ii,Ui,t,e);l.layers=this.layers,this.add(l);const c=new an(Ii,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cc extends qe{constructor(t=[],e=$i,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eu extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:qn});r.uniforms.tEquirect.value=e;const a=new et(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=yn),new wu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ve extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bu={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class no{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new no(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tu extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Au{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new P;class ur{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ur(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ni;const os=new P,Oi=new P,Fi=new P,zi=new Zt,ls=new Zt,Lc=new Te,Xs=new P,cs=new P,Ys=new P,ko=new Zt,Gr=new Zt,Go=new Zt;class Dc extends De{constructor(t=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Au(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new ur(n,3,0,!1)),Ni.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new Zt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Lc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Fi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;$s(Xs.set(-.5,-.5,0),Fi,a,Oi,s,r),$s(cs.set(.5,-.5,0),Fi,a,Oi,s,r),$s(Ys.set(.5,.5,0),Fi,a,Oi,s,r),ko.set(0,0),Gr.set(1,0),Go.set(1,1);let o=t.ray.intersectTriangle(Xs,cs,Ys,!1,os);if(o===null&&($s(cs.set(-.5,.5,0),Fi,a,Oi,s,r),Gr.set(0,1),o=t.ray.intersectTriangle(Xs,Ys,cs,!1,os),o===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:ln.getInterpolation(os,Xs,cs,Ys,ko,Gr,Go,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $s(i,t,e,n,s,r){zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ls.x=r*zi.x-s*zi.y,ls.y=s*zi.x+r*zi.y):ls.copy(zi),i.copy(t),i.x+=ls.x,i.y+=ls.y,i.applyMatrix4(Lc)}class Ru extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ke,d=Ke,h,p){super(null,a,o,l,c,d,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new P,Cu=new P,Pu=new Qt;class oi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hr.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new mr,Ks=new P;class io{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],p=s[7],f=s[8],_=s[9],x=s[10],m=s[11],u=s[12],E=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,p-c,m-f,S-u).normalize(),n[1].setComponents(l+r,p+c,m+f,S+u).normalize(),n[2].setComponents(l+a,p+d,m+_,S+E).normalize(),n[3].setComponents(l-a,p-d,m-_,S-E).normalize(),n[4].setComponents(l-o,p-h,m-x,S-b).normalize(),e===Dn)n[5].setComponents(l+o,p+h,m+x,S+b).normalize();else if(e===cr)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ks.x=s.normal.x>0?t.max.x:t.min.x,Ks.y=s.normal.y>0?t.max.y:t.min.y,Ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class so extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dr=new P,fr=new P,Ho=new Te,hs=new Sc,js=new mr,Vr=new P,Vo=new P;class Ga extends De{constructor(t=new ze,e=new so){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)dr.fromBufferAttribute(e,s-1),fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=dr.distanceTo(fr);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;Ho.copy(s).invert(),hs.copy(t.ray).applyMatrix4(Ho);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=d.getX(x),E=d.getX(x+1),b=Zs(this,t,hs,l,u,E,x);b&&e.push(b)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(f),u=Zs(this,t,hs,l,x,m,_-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){const u=Zs(this,t,hs,l,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=Zs(this,t,hs,l,_-1,f,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(dr.fromBufferAttribute(o,s),fr.fromBufferAttribute(o,r),e.distanceSqToSegment(dr,fr,Vr,Vo)>n)return;Vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vr);if(!(c<t.near||c>t.far))return{distance:c,point:Vo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Wo=new P,qo=new P;class Lu extends Ga{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Wo.fromBufferAttribute(e,s),qo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wo.distanceTo(qo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Du extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ic extends qe{constructor(t,e,n=gi,s,r,a,o=Ke,l=Ke,c,d=_s,h=1){if(d!==_s&&d!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pi extends ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=e/2,h=Math.PI/2*t,p=e,f=2*h+p,_=n*2+r,x=s+1,m=new P,u=new P;for(let E=0;E<=_;E++){let b=0,S=0,N=0,A=0;if(E<=n){const w=E/n,y=w*Math.PI/2;S=-d-t*Math.cos(y),N=t*Math.sin(y),A=-t*Math.cos(y),b=w*h}else if(E<=n+r){const w=(E-n)/r;S=-d+w*e,N=t,A=0,b=h+w*p}else{const w=(E-n-r)/n,y=w*Math.PI/2;S=d+t*Math.sin(y),N=t*Math.cos(y),A=t*Math.sin(y),b=h+p+w*h}const g=Math.max(0,Math.min(1,b/f));let I=0;E===0?I=.5/s:E===_&&(I=-.5/s);for(let w=0;w<=s;w++){const y=w/s,D=y*Math.PI*2,F=Math.sin(D),k=Math.cos(D);u.x=-N*k,u.y=S,u.z=N*F,o.push(u.x,u.y,u.z),m.set(-N*k,A,N*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+I,g)}if(E>0){const w=(E-1)*x;for(let y=0;y<s;y++){const D=w+y,F=w+y+1,k=E*x+y,J=E*x+y+1;a.push(D,F,k),a.push(F,J,k)}}}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class gr extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,d=new Zt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[p]/t+1)/2,d.y=(a[p+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],p=[],f=[];let _=0;const x=[],m=n/2;let u=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(f,2));function E(){const S=new P,N=new P;let A=0;const g=(e-t)/n;for(let I=0;I<=r;I++){const w=[],y=I/r,D=y*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,J=k*l+o,nt=Math.sin(J),Q=Math.cos(J);N.x=D*nt,N.y=-y*n+m,N.z=D*Q,h.push(N.x,N.y,N.z),S.set(nt,g,Q).normalize(),p.push(S.x,S.y,S.z),f.push(k,1-y),w.push(_++)}x.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const y=x[w][I],D=x[w+1][I],F=x[w+1][I+1],k=x[w][I+1];(t>0||w!==0)&&(d.push(y,D,k),A+=3),(e>0||w!==r-1)&&(d.push(D,F,k),A+=3)}c.addGroup(u,A,0),u+=A}function b(S){const N=_,A=new Zt,g=new P;let I=0;const w=S===!0?t:e,y=S===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),_++;const D=_;for(let F=0;F<=s;F++){const J=F/s*l+o,nt=Math.cos(J),Q=Math.sin(J);g.x=w*Q,g.y=m*y,g.z=w*nt,h.push(g.x,g.y,g.z),p.push(0,y,0),A.x=nt*.5+.5,A.y=Q*.5*y+.5,f.push(A.x,A.y),_++}for(let F=0;F<s;F++){const k=N+F,J=D+F;S===!0?d.push(J,J+1,k):d.push(J+1,J,k),I+=3}c.addGroup(u,I,S===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class on extends be{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new on(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qi extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new P,S=new P,N=new P;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],S),f(e[A+2],N),l(b,S,N,E)}function l(E,b,S,N){const A=N+1,g=[];for(let I=0;I<=A;I++){g[I]=[];const w=E.clone().lerp(S,I/A),y=b.clone().lerp(S,I/A),D=A-I;for(let F=0;F<=D;F++)F===0&&I===A?g[I][F]=w:g[I][F]=w.clone().lerp(y,F/D)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const y=Math.floor(w/2);w%2===0?(p(g[I][y+1]),p(g[I+1][y]),p(g[I][y])):(p(g[I][y+1]),p(g[I+1][y+1]),p(g[I+1][y]))}}function c(E){const b=new P;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(E),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function d(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const S=m(E)/2/Math.PI+.5,N=u(E)/Math.PI+.5;a.push(S,1-N)}_(),h()}function h(){for(let E=0;E<a.length;E+=6){const b=a[E+0],S=a[E+2],N=a[E+4],A=Math.max(b,S,N),g=Math.min(b,S,N);A>.9&&g<.1&&(b<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),N<.2&&(a[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function f(E,b){const S=E*3;b.x=t[S+0],b.y=t[S+1],b.z=t[S+2]}function _(){const E=new P,b=new P,S=new P,N=new P,A=new Zt,g=new Zt,I=new Zt;for(let w=0,y=0;w<r.length;w+=9,y+=6){E.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),A.set(a[y+0],a[y+1]),g.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),N.copy(E).add(b).add(S).divideScalar(3);const D=m(N);x(A,y+0,E,D),x(g,y+2,b,D),x(I,y+4,S,D)}}function x(E,b,S,N){N<0&&E.x===1&&(a[b]=E.x-1),S.x===0&&S.z===0&&(a[b]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.vertices,t.indices,t.radius,t.details)}}class ro extends Qi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class ao extends Qi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class vi extends Qi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vi(t.radius,t.detail)}}class yi extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,p=e/l,f=[],_=[],x=[],m=[];for(let u=0;u<d;u++){const E=u*p-a;for(let b=0;b<c;b++){const S=b*h-r;_.push(S,-E,0),x.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const b=E+c*u,S=E+c*(u+1),N=E+1+c*(u+1),A=E+1+c*u;f.push(b,S,A),f.push(S,N,A)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class _r extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=t;const p=(e-t)/s,f=new P,_=new Zt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const u=r+m/n*a;f.x=h*Math.cos(u),f.y=h*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,d.push(_.x,_.y)}h+=p}for(let x=0;x<s;x++){const m=x*(n+1);for(let u=0;u<n;u++){const E=u+m,b=E,S=E+n+1,N=E+n+2,A=E+1;o.push(b,S,A),o.push(S,N,A)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ce extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new P,p=new P,f=[],_=[],x=[],m=[];for(let u=0;u<=n;u++){const E=[],b=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const A=N/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(A+S,1-b),E.push(c++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const b=d[u][E+1],S=d[u][E],N=d[u+1][E],A=d[u+1][E+1];(u!==0||a>0)&&f.push(b,S,A),(u!==n-1||l<Math.PI)&&f.push(S,N,A)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oo extends Qi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class Yn extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new P,h=new P,p=new P;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const x=_/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,u=(s+1)*(f-1)+_,E=(s+1)*f+_;a.push(x,m,E),a.push(m,u,E)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Iu extends Mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Uu extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nu extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lo extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ou extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wr=new Te,Xo=new P,Yo=new P;class Fu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xo),Yo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yo),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Uc extends Rc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zu extends Fu{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bu extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ku extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gu extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$o();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $o(){return performance.now()}function Ko(i,t,e,n){const s=Vu(n);switch(e){case pc:return i*t;case ja:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case gc:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case va:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case Na:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vu(i){switch(i){case Sn:case uc:return{byteLength:1,components:1};case ms:case dc:case ys:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case gi:case Ya:case Ln:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wu(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,h[p]=x)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Wd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,Jf=`#if DEPTH_PACKING == 3200
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
}`,Qf=`#define DISTANCE
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
}`,tp=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,hp=`#define MATCAP
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
}`,up=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,vp=`#define TOON
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
}`,xp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,wp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:qu,alphahash_pars_fragment:Xu,alphamap_fragment:Yu,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:ju,aomap_fragment:Zu,aomap_pars_fragment:Ju,batching_pars_vertex:Qu,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:ad,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:ud,color_pars_vertex:dd,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:yd,colorspace_pars_fragment:Sd,envmap_fragment:wd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Nd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Bd,lights_phong_fragment:kd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:qd,lights_fragment_end:Xd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:jd,map_fragment:Zd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:vf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:yf,project_vertex:Sf,dithering_fragment:wf,dithering_pars_fragment:Ef,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:If,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Of,tonemapping_fragment:Ff,tonemapping_pars_fragment:zf,transmission_fragment:Bf,transmission_pars_fragment:kf,uv_pars_fragment:Gf,uv_pars_vertex:Hf,uv_vertex:Vf,worldpos_vertex:Wf,background_vert:qf,background_frag:Xf,backgroundCube_vert:Yf,backgroundCube_frag:$f,cube_vert:Kf,cube_frag:jf,depth_vert:Zf,depth_frag:Jf,distanceRGBA_vert:Qf,distanceRGBA_frag:tp,equirect_vert:ep,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:hp,meshnormal_vert:up,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:vp,points_vert:xp,points_frag:Mp,shadow_vert:yp,shadow_frag:Sp,sprite_vert:wp,sprite_frag:Ep},_t={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ye([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ye([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ye([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ye([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ye([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ye([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ye([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ye([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ye([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ye([_t.lights,_t.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Mn.physical={uniforms:Ye([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Js={r:0,b:0,g:0},si=new Nn,bp=new Te;function Tp(i,t,e,n,s,r,a){const o=new Gt(0);let l=r===!0?0:1,c,d,h=null,p=0,f=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const N=_(b);N===null?u(o,l):N&&N.isColor&&(u(N,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const N=_(S);N&&(N.isCubeTexture||N.mapping===pr)?(d===void 0&&(d=new et(new Le(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Zi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,g,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),si.copy(S.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(si)),d.material.toneMapped=ge.getTransfer(N.colorSpace)!==ye,(h!==N||p!==N.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=N,p=N.version,f=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new et(new yi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Zi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ge.getTransfer(N.colorSpace)!==ye,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(h!==N||p!==N.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=N,p=N.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,S){b.getRGB(Js,Ac(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,S,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:x,addToRenderList:m,dispose:E}}function Ap(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(y,D,F,k,J){let nt=!1;const Q=h(k,F,D);r!==Q&&(r=Q,c(r.object)),nt=f(y,k,F,J),nt&&_(y,k,F,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,S(y,D,F,k),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function h(y,D,F){const k=F.wireframe===!0;let J=n[y.id];J===void 0&&(J={},n[y.id]=J);let nt=J[D.id];nt===void 0&&(nt={},J[D.id]=nt);let Q=nt[k];return Q===void 0&&(Q=p(l()),nt[k]=Q),Q}function p(y){const D=[],F=[],k=[];for(let J=0;J<e;J++)D[J]=0,F[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,D,F,k){const J=r.attributes,nt=D.attributes;let Q=0;const at=F.getAttributes();for(const $ in at)if(at[$].location>=0){const Rt=J[$];let Ot=nt[$];if(Ot===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Ot=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Ot=y.instanceColor)),Rt===void 0||Rt.attribute!==Ot||Ot&&Rt.data!==Ot.data)return!0;Q++}return r.attributesNum!==Q||r.index!==k}function _(y,D,F,k){const J={},nt=D.attributes;let Q=0;const at=F.getAttributes();for(const $ in at)if(at[$].location>=0){let Rt=nt[$];Rt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor));const Ot={};Ot.attribute=Rt,Rt&&Rt.data&&(Ot.data=Rt.data),J[$]=Ot,Q++}r.attributes=J,r.attributesNum=Q,r.index=k}function x(){const y=r.newAttributes;for(let D=0,F=y.length;D<F;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const F=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;F[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),J[y]!==D&&(i.vertexAttribDivisor(y,D),J[y]=D)}function E(){const y=r.newAttributes,D=r.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==y[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function b(y,D,F,k,J,nt,Q){Q===!0?i.vertexAttribIPointer(y,D,F,J,nt):i.vertexAttribPointer(y,D,F,k,J,nt)}function S(y,D,F,k){x();const J=k.attributes,nt=F.getAttributes(),Q=D.defaultAttributeValues;for(const at in nt){const $=nt[at];if($.location>=0){let xt=J[at];if(xt===void 0&&(at==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),at==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),xt!==void 0){const Rt=xt.normalized,Ot=xt.itemSize,ee=t.get(xt);if(ee===void 0)continue;const re=ee.buffer,j=ee.type,ct=ee.bytesPerElement,It=j===i.INT||j===i.UNSIGNED_INT||xt.gpuType===Ya;if(xt.isInterleavedBufferAttribute){const ht=xt.data,Nt=ht.stride,ce=xt.offset;if(ht.isInstancedInterleavedBuffer){for(let Vt=0;Vt<$.locationSize;Vt++)u($.location+Vt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Vt=0;Vt<$.locationSize;Vt++)m($.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Vt=0;Vt<$.locationSize;Vt++)b($.location+Vt,Ot/$.locationSize,j,Rt,Nt*ct,(ce+Ot/$.locationSize*Vt)*ct,It)}else{if(xt.isInstancedBufferAttribute){for(let ht=0;ht<$.locationSize;ht++)u($.location+ht,xt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ht=0;ht<$.locationSize;ht++)m($.location+ht);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ht=0;ht<$.locationSize;ht++)b($.location+ht,Ot/$.locationSize,j,Rt,Ot*ct,Ot/$.locationSize*ht*ct,It)}}else if(Q!==void 0){const Rt=Q[at];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv($.location,Rt);break;case 3:i.vertexAttrib3fv($.location,Rt);break;case 4:i.vertexAttrib4fv($.location,Rt);break;default:i.vertexAttrib1fv($.location,Rt)}}}}E()}function N(){I();for(const y in n){const D=n[y];for(const F in D){const k=D[F];for(const J in k)d(k[J].object),delete k[J];delete D[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const F in D){const k=D[F];for(const J in k)d(k[J].object),delete k[J];delete D[F]}delete n[y.id]}function g(y){for(const D in n){const F=n[D];if(F[y.id]===void 0)continue;const k=F[y.id];for(const J in k)d(k[J].object),delete k[J];delete F[y.id]}}function I(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Rp(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];e.update(f,n,1)}function l(c,d,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x]*p[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==pn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const I=g===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Sn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==Ln&&!I)}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:N,maxSamples:A}}function Pp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const E=r?0:n,b=E*4;let S=u.clippingState||null;l.value=S,S=d(_,p,b,f);for(let N=0;N!==b;++N)S[N]=e[N];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=f+x*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,S=f;b!==x;++b,S+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Lp(i){let t=new WeakMap;function e(a,o){return o===ha?a.mapping=$i:o===ua&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ha||o===ua)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Eu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Hi=4,jo=[.125,.215,.35,.446,.526,.582],ui=20,qr=new Uc,Zo=new Gt;let Xr=null,Yr=0,$r=0,Kr=!1;const li=(1+Math.sqrt(5))/2,Bi=1/li,Jo=[new P(-li,Bi,0),new P(li,Bi,0),new P(-Bi,0,li),new P(Bi,0,li),new P(0,li,-Bi),new P(0,li,Bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Dp=new P;class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Dp}=r;Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,Yr,$r),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ys,format:pn,colorSpace:ji,depthBuffer:!1},s=tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(r)),this._blurMaterial=Up(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,s,r){const l=new an(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Zo),h.toneMapping=Xn,h.autoClear=!1;const _=new tn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),x=new et(new Le,_);let m=!1;const u=t.background;u?u.isColor&&(_.color.copy(u),t.background=null,m=!0):(_.color.copy(Zo),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[E]));const S=this._cubeSize;Qs(s,b*S,E>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(x,l),h.render(t,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$i||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jo[(s-r-1)%Jo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new et(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),x=r/_,m=isFinite(r)?1+Math.floor(d*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const u=[];let E=0;for(let g=0;g<ui;++g){const I=g/x,w=Math.exp(-I*I/2);u.push(w),g===0?E+=w:g<m&&(E+=2*w)}for(let g=0;g<u.length;g++)u[g]=u[g]/E;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=_,p.mipInt.value=b-n;const S=this._sizeLods[s],N=3*S*(s>b-Hi?s-b+Hi:0),A=4*(this._cubeSize-S);Qs(e,N,A,3*S,2*S),l.setRenderTarget(e),l.render(h,qr)}}function Ip(i){const t=[],e=[],n=[];let s=i;const r=i-Hi+1+jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Hi?l=jo[a-i+Hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,x=3,m=2,u=1,E=new Float32Array(x*_*f),b=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let A=0;A<f;A++){const g=A%3*2/3-1,I=A>2?0:-1,w=[g,I,0,g+2/3,I,0,g+2/3,I+1,0,g,I,0,g+2/3,I+1,0,g,I+1,0];E.set(w,x*_*A),b.set(p,m*_*A);const y=[A,A,A,A,A,A];S.set(y,u*_*A)}const N=new ze;N.setAttribute("position",new Qe(E,x)),N.setAttribute("uv",new Qe(b,m)),N.setAttribute("faceIndex",new Qe(S,u)),t.push(N),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tl(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Up(i,t,e){const n=new Float32Array(ui),s=new P(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function el(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function nl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function Np(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ha||l===ua,d=l===$i||l===Ki;if(c||d){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Qo(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&s(f)?(e===null&&(e=new Qo(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fp(i,t,e,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const E=f.array;x=f.version;for(let b=0,S=E.length;b<S;b+=3){const N=E[b+0],A=E[b+1],g=E[b+2];p.push(N,A,A,g,g,N)}}else if(_!==void 0){const E=_.array;x=_.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const N=b+0,A=b+1,g=b+2;p.push(N,A,A,g,g,N)}}else return;const m=new(Mc(p)?Tc:bc)(p,1);m.version=x;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const p=r.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function zp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function c(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*a,_),e.update(f,n,_))}function d(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function h(p,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,_);let u=0;for(let E=0;E<_;E++)u+=f[E]*x[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Bp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,t,e){const n=new WeakMap,s=new Ae;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let N=o.attributes.position.count*S,A=1;N>t.maxTextureSize&&(A=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const g=new Float32Array(N*A*4*h),I=new yc(g,N,A,h);I.type=Ln,I.needsUpdate=!0;const w=S*4;for(let D=0;D<h;D++){const F=u[D],k=E[D],J=b[D],nt=N*A*4*D;for(let Q=0;Q<F.count;Q++){const at=Q*w;_===!0&&(s.fromBufferAttribute(F,Q),g[nt+at+0]=s.x,g[nt+at+1]=s.y,g[nt+at+2]=s.z,g[nt+at+3]=0),x===!0&&(s.fromBufferAttribute(k,Q),g[nt+at+4]=s.x,g[nt+at+5]=s.y,g[nt+at+6]=s.z,g[nt+at+7]=0),m===!0&&(s.fromBufferAttribute(J,Q),g[nt+at+8]=s.x,g[nt+at+9]=s.y,g[nt+at+10]=s.z,g[nt+at+11]=J.itemSize===4?s.w:1)}}p={count:h,texture:I,size:new Zt(N,A)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Gp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Oc=new qe,il=new Ic(1,1),Fc=new yc,zc=new ou,Bc=new Cc,sl=[],rl=[],al=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sl[s];if(r===void 0&&(r=new Float32Array(s),sl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;ll.set(n),i.uniformMatrix2fv(this.addr,!1,ll),Ue(e,n)}}function Yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;ol.set(n),i.uniformMatrix3fv(this.addr,!1,ol),Ue(e,n)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Ue(e,n)}}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(il.compareFunction=xc,r=il):r=Oc,e.setTexture2D(t||r,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bc,s)}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fc,s)}function om(i){switch(i){case 5126:return Hp;case 35664:return Vp;case 35665:return Wp;case 35666:return qp;case 35674:return Xp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return jp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return am}}function lm(i,t){i.uniform1fv(this.addr,t)}function cm(i,t){const e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function hm(i,t){const e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function um(i,t){const e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function dm(i,t){const e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fm(i,t){const e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pm(i,t){const e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mm(i,t){i.uniform1iv(this.addr,t)}function gm(i,t){i.uniform2iv(this.addr,t)}function _m(i,t){i.uniform3iv(this.addr,t)}function vm(i,t){i.uniform4iv(this.addr,t)}function xm(i,t){i.uniform1uiv(this.addr,t)}function Mm(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function Sm(i,t){i.uniform4uiv(this.addr,t)}function wm(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Oc,r[a])}function Em(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zc,r[a])}function bm(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bc,r[a])}function Tm(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fc,r[a])}function Am(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Tm}}class Rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=om(e.type)}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Am(e.type)}}class Pm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function cl(i,t){i.seq.push(t),i.map[t.id]=t}function Lm(i,t,e){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cl(e,c===void 0?new Rm(o,i,t):new Cm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Pm(o),cl(e,h)),e=h}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dm=37297;let Im=0;function Um(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ul=new Qt;function Nm(i){ge._getMatrix(ul,ge.workingColorSpace,i);const t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Um(i.getShaderSource(t),a)}else return s}function Om(i,t){const e=Nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fm(i,t){let e;switch(t){case vh:e="Linear";break;case xh:e="Reinhard";break;case Mh:e="Cineon";break;case yh:e="ACESFilmic";break;case wh:e="AgX";break;case Eh:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new P;function zm(){ge.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function km(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ds(i){return i!==""}function fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(Hm,Wm)}const Vm=new Map;function Wm(i,t){let e=te[t];if(e===void 0){const n=Vm.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace(qm,Xm)}function Xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ym(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Ki:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Km(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function jm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ym(e),c=$m(e),d=Km(e),h=jm(e),p=Zm(e),f=Bm(e),_=km(r),x=s.createProgram();let m,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),u.length>0&&(u+=`
`)):(m=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),u=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?te.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Om("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=Ha(a),a=fl(a,e),a=pl(a,e),o=Ha(o),o=fl(o,e),o=pl(o,e),a=ml(a),o=ml(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=E+m+a,S=E+u+o,N=hl(s,s.VERTEX_SHADER,b),A=hl(s,s.FRAGMENT_SHADER,S);s.attachShader(x,N),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function g(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(N).trim(),J=s.getShaderInfoLog(A).trim();let nt=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,A);else{const at=dl(s,N,"vertex"),$=dl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+at+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||J==="")&&(Q=!1);Q&&(D.diagnostics={runnable:nt,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:u}})}s.deleteShader(N),s.deleteShader(A),I=new or(s,x),w=Gm(s,x)}let I;this.getUniforms=function(){return I===void 0&&g(this),I};let w;this.getAttributes=function(){return w===void 0&&g(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Dm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=A,this}let Qm=0;class t0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e0(t),e.set(t,n)),n}}class e0{constructor(t){this.id=Qm++,this.code=t,this.usedTimes=0}}function n0(i,t,e,n,s,r,a){const o=new wc,l=new t0,c=new Set,d=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,D,F,k){const J=F.fog,nt=k.geometry,Q=w.isMeshStandardMaterial?F.environment:null,at=(w.isMeshStandardMaterial?e:t).get(w.envMap||Q),$=at&&at.mapping===pr?at.image.height:null,xt=_[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Rt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ot=Rt!==void 0?Rt.length:0;let ee=0;nt.morphAttributes.position!==void 0&&(ee=1),nt.morphAttributes.normal!==void 0&&(ee=2),nt.morphAttributes.color!==void 0&&(ee=3);let re,j,ct,It;if(xt){const oe=Mn[xt];re=oe.vertexShader,j=oe.fragmentShader}else re=w.vertexShader,j=w.fragmentShader,l.update(w),ct=l.getVertexShaderID(w),It=l.getFragmentShaderID(w);const ht=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),ce=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,we=!!w.map,Ee=!!w.matcap,he=!!at,U=!!w.aoMap,Ne=!!w.lightMap,ue=!!w.bumpMap,_e=!!w.normalMap,yt=!!w.displacementMap,ne=!!w.emissiveMap,Bt=!!w.metalnessMap,V=!!w.roughnessMap,Ht=w.anisotropy>0,T=w.clearcoat>0,M=w.dispersion>0,C=w.iridescence>0,Z=w.sheen>0,it=w.transmission>0,K=Ht&&!!w.anisotropyMap,Dt=T&&!!w.clearcoatMap,ut=T&&!!w.clearcoatNormalMap,Pt=T&&!!w.clearcoatRoughnessMap,At=C&&!!w.iridescenceMap,st=C&&!!w.iridescenceThicknessMap,pt=Z&&!!w.sheenColorMap,Ut=Z&&!!w.sheenRoughnessMap,Ft=!!w.specularMap,dt=!!w.specularColorMap,X=!!w.specularIntensityMap,O=it&&!!w.transmissionMap,mt=it&&!!w.thicknessMap,rt=!!w.gradientMap,Mt=!!w.alphaMap,ot=w.alphaTest>0,tt=!!w.alphaHash,wt=!!w.extensions;let Yt=Xn;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const Se={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:re,fragmentShader:j,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:It,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:ce,instancingColor:ce&&k.instanceColor!==null,instancingMorph:ce&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ji,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:Ee,envMap:he,envMapMode:he&&at.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:Ne,bumpMap:ue,normalMap:_e,displacementMap:p&&yt,emissiveMap:ne,normalMapObjectSpace:_e&&w.normalMapType===Rh,normalMapTangentSpace:_e&&w.normalMapType===vc,metalnessMap:Bt,roughnessMap:V,anisotropy:Ht,anisotropyMap:K,clearcoat:T,clearcoatMap:Dt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Pt,dispersion:M,iridescence:C,iridescenceMap:At,iridescenceThicknessMap:st,sheen:Z,sheenColorMap:pt,sheenRoughnessMap:Ut,specularMap:Ft,specularColorMap:dt,specularIntensityMap:X,transmission:it,transmissionMap:O,thicknessMap:mt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===Vi&&w.alphaToCoverage===!1,alphaMap:Mt,alphaTest:ot,alphaHash:tt,combine:w.combine,mapUv:we&&x(w.map.channel),aoMapUv:U&&x(w.aoMap.channel),lightMapUv:Ne&&x(w.lightMap.channel),bumpMapUv:ue&&x(w.bumpMap.channel),normalMapUv:_e&&x(w.normalMap.channel),displacementMapUv:yt&&x(w.displacementMap.channel),emissiveMapUv:ne&&x(w.emissiveMap.channel),metalnessMapUv:Bt&&x(w.metalnessMap.channel),roughnessMapUv:V&&x(w.roughnessMap.channel),anisotropyMapUv:K&&x(w.anisotropyMap.channel),clearcoatMapUv:Dt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ut&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(w.sheenRoughnessMap.channel),specularMapUv:Ft&&x(w.specularMap.channel),specularColorMapUv:dt&&x(w.specularColorMap.channel),specularIntensityMapUv:X&&x(w.specularIntensityMap.channel),transmissionMapUv:O&&x(w.transmissionMap.channel),thicknessMapUv:mt&&x(w.thicknessMap.channel),alphaMapUv:Mt&&x(w.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(_e||Ht),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!nt.attributes.uv&&(we||Mt),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Nt,skinning:k.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&ge.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&ge.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===je,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:wt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function u(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)y.push(D),y.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(E(y,w),b(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function b(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const y=_[w.type];let D;if(y){const F=Mn[y];D=Mu.clone(F.uniforms)}else D=w.uniforms;return D}function N(w,y){let D;for(let F=0,k=d.length;F<k;F++){const J=d[F];if(J.cacheKey===y){D=J,++D.usedTimes;break}}return D===void 0&&(D=new Jm(i,y,w,r),d.push(D)),D}function A(w){if(--w.usedTimes===0){const y=d.indexOf(w);d[y]=d[d.length-1],d.pop(),w.destroy()}}function g(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:N,releaseProgram:A,releaseShaderCache:g,programs:d,dispose:I}}function i0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,f,_,x,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),t++,u}function o(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(h,p,f,_,x,m){const u=a(h,p,f,_,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,p){e.length>1&&e.sort(h||s0),n.length>1&&n.sort(p||_l),s.length>1&&s.sort(p||_l)}function d(){for(let h=t,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function r0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vl,i.set(n,[a])):s>=r.length?(a=new vl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function o0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let l0=0;function c0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h0(i){const t=new a0,e=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Te,a=new Te;function o(c){let d=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,_=0,x=0,m=0,u=0,E=0,b=0,S=0,N=0,A=0,g=0;c.sort(c0);for(let w=0,y=c.length;w<y;w++){const D=c[w],F=D.color,k=D.intensity,J=D.distance,nt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*k,h+=F.g*k,p+=F.b*k;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],k);g++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const at=D.shadow,$=e.get(D);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=Q,f++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(F).multiplyScalar(k),Q.distance=J,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[x]=Q;const at=D.shadow;if(D.map&&(n.spotLightMap[N]=D.map,N++,at.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=at.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=nt,S++}x++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(F).multiplyScalar(k),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Q,m++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const at=D.shadow,$=e.get(D);$.shadowIntensity=at.intensity,$.shadowBias=at.bias,$.shadowNormalBias=at.normalBias,$.shadowRadius=at.radius,$.shadowMapSize=at.mapSize,$.shadowCameraNear=at.camera.near,$.shadowCameraFar=at.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=nt,n.pointShadowMatrix[_]=D.shadow.matrix,b++}n.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(k),Q.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[u]=Q,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==g)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=g,I.directionalLength=f,I.pointLength=_,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=g,n.version=l0++)}function l(c,d){let h=0,p=0,f=0,_=0,x=0;const m=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const b=c[u];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function xl(i){const t=new h0(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function u0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new xl(i),t.set(s,[o])):r>=a.length?(o=new xl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function p0(i,t,e){let n=new io;const s=new Zt,r=new Zt,a=new Ae,o=new Uu({depthPacking:Ah}),l=new Nu,c={},d=e.maxTextureSize,h={[$n]:$e,[$e]:$n,[je]:je},p=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new et(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let u=this.type;this.render=function(A,g,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==Cn&&this.type===Cn,J=u===Cn&&this.type!==Cn;for(let nt=0,Q=A.length;nt<Q;nt++){const at=A[nt],$=at.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const xt=$.getFrameExtents();if(s.multiply(xt),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/xt.x),s.x=r.x*xt.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/xt.y),s.y=r.y*xt.y,$.mapSize.y=r.y)),$.map===null||k===!0||J===!0){const Ot=this.type!==Cn?{minFilter:Ke,magFilter:Ke}:{};$.map!==null&&$.map.dispose(),$.map=new _i(s.x,s.y,Ot),$.map.texture.name=at.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Rt=$.getViewportCount();for(let Ot=0;Ot<Rt;Ot++){const ee=$.getViewport(Ot);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),F.viewport(a),$.updateMatrices(at,Ot),n=$.getFrustum(),S(g,I,$.camera,at,this.type)}$.isPointLightShadow!==!0&&this.type===Cn&&E($,I),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,D)};function E(A,g){const I=t.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _i(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,I,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,I,f,x,null)}function b(A,g,I,w){let y=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=y.uuid,k=g.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let nt=J[k];nt===void 0&&(nt=y.clone(),J[k]=nt,g.addEventListener("dispose",N)),y=nt}if(y.visible=g.visible,y.wireframe=g.wireframe,w===Cn?y.side=g.shadowSide!==null?g.shadowSide:g.side:y.side=g.shadowSide!==null?g.shadowSide:h[g.side],y.alphaMap=g.alphaMap,y.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,y.map=g.map,y.clipShadows=g.clipShadows,y.clippingPlanes=g.clippingPlanes,y.clipIntersection=g.clipIntersection,y.displacementMap=g.displacementMap,y.displacementScale=g.displacementScale,y.displacementBias=g.displacementBias,y.wireframeLinewidth=g.wireframeLinewidth,y.linewidth=g.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=I}return y}function S(A,g,I,w,y){if(A.visible===!1)return;if(A.layers.test(g.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=t.update(A),J=A.material;if(Array.isArray(J)){const nt=k.groups;for(let Q=0,at=nt.length;Q<at;Q++){const $=nt[Q],xt=J[$.materialIndex];if(xt&&xt.visible){const Rt=b(A,xt,w,y);A.onBeforeShadow(i,A,g,I,k,Rt,$),i.renderBufferDirect(I,null,k,Rt,A,$),A.onAfterShadow(i,A,g,I,k,Rt,$)}}}else if(J.visible){const nt=b(A,J,w,y);A.onBeforeShadow(i,A,g,I,k,nt,null),i.renderBufferDirect(I,null,k,nt,A,null),A.onAfterShadow(i,A,g,I,k,nt,null)}}const F=A.children;for(let k=0,J=F.length;k<J;k++)S(F[k],g,I,w,y)}function N(A){A.target.removeEventListener("dispose",N);for(const I in c){const w=c[I],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const m0={[ia]:sa,[ra]:la,[aa]:ca,[Yi]:oa,[sa]:ia,[la]:ra,[ca]:aa,[oa]:Yi};function g0(i,t){function e(){let O=!1;const mt=new Ae;let rt=null;const Mt=new Ae(0,0,0,0);return{setMask:function(ot){rt!==ot&&!O&&(i.colorMask(ot,ot,ot,ot),rt=ot)},setLocked:function(ot){O=ot},setClear:function(ot,tt,wt,Yt,Se){Se===!0&&(ot*=Yt,tt*=Yt,wt*=Yt),mt.set(ot,tt,wt,Yt),Mt.equals(mt)===!1&&(i.clearColor(ot,tt,wt,Yt),Mt.copy(mt))},reset:function(){O=!1,rt=null,Mt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,rt=null,Mt=null,ot=null;return{setReversed:function(tt){if(mt!==tt){const wt=t.get("EXT_clip_control");tt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),mt=tt;const Yt=ot;ot=null,this.setClear(Yt)}},getReversed:function(){return mt},setTest:function(tt){tt?ht(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!O&&(i.depthMask(tt),rt=tt)},setFunc:function(tt){if(mt&&(tt=m0[tt]),Mt!==tt){switch(tt){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=tt}},setLocked:function(tt){O=tt},setClear:function(tt){ot!==tt&&(mt&&(tt=1-tt),i.clearDepth(tt),ot=tt)},reset:function(){O=!1,rt=null,Mt=null,ot=null,mt=!1}}}function s(){let O=!1,mt=null,rt=null,Mt=null,ot=null,tt=null,wt=null,Yt=null,Se=null;return{setTest:function(oe){O||(oe?ht(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!O&&(i.stencilMask(oe),mt=oe)},setFunc:function(oe,Be,cn){(rt!==oe||Mt!==Be||ot!==cn)&&(i.stencilFunc(oe,Be,cn),rt=oe,Mt=Be,ot=cn)},setOp:function(oe,Be,cn){(tt!==oe||wt!==Be||Yt!==cn)&&(i.stencilOp(oe,Be,cn),tt=oe,wt=Be,Yt=cn)},setLocked:function(oe){O=oe},setClear:function(oe){Se!==oe&&(i.clearStencil(oe),Se=oe)},reset:function(){O=!1,mt=null,rt=null,Mt=null,ot=null,tt=null,wt=null,Yt=null,Se=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,E=null,b=null,S=null,N=null,A=null,g=new Gt(0,0,0),I=0,w=!1,y=null,D=null,F=null,k=null,J=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,at=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=at>=1):$.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=at>=2);let xt=null,Rt={};const Ot=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),re=new Ae().fromArray(Ot),j=new Ae().fromArray(ee);function ct(O,mt,rt,Mt){const ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(O,tt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<rt;wt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(mt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}const It={};It[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(Yi),ue(!1),_e(go),ht(i.CULL_FACE),U(qn);function ht(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Nt(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function ce(O,mt){return h[O]!==mt?(i.bindFramebuffer(O,mt),h[O]=mt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Vt(O,mt){let rt=f,Mt=!1;if(O){rt=p.get(mt),rt===void 0&&(rt=[],p.set(mt,rt));const ot=O.textures;if(rt.length!==ot.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,wt=ot.length;tt<wt;tt++)rt[tt]=i.COLOR_ATTACHMENT0+tt;rt.length=ot.length,Mt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(rt)}function we(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const Ee={[hi]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[th]:i.FUNC_REVERSE_SUBTRACT};Ee[eh]=i.MIN,Ee[nh]=i.MAX;const he={[ih]:i.ZERO,[sh]:i.ONE,[rh]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[oh]:i.DST_ALPHA,[ah]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,mt,rt,Mt,ot,tt,wt,Yt,Se,oe){if(O===qn){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(ht(i.BLEND),x=!0),O!==Jc){if(O!==m||oe!==w){if((u!==hi||S!==hi)&&(i.blendEquation(i.FUNC_ADD),u=hi,S=hi),oe)switch(O){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,b=null,N=null,A=null,g.set(0,0,0),I=0,m=O,w=oe}return}ot=ot||mt,tt=tt||rt,wt=wt||Mt,(mt!==u||ot!==S)&&(i.blendEquationSeparate(Ee[mt],Ee[ot]),u=mt,S=ot),(rt!==E||Mt!==b||tt!==N||wt!==A)&&(i.blendFuncSeparate(he[rt],he[Mt],he[tt],he[wt]),E=rt,b=Mt,N=tt,A=wt),(Yt.equals(g)===!1||Se!==I)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Se),g.copy(Yt),I=Se),m=O,w=!1}function Ne(O,mt){O.side===je?Nt(i.CULL_FACE):ht(i.CULL_FACE);let rt=O.side===$e;mt&&(rt=!rt),ue(rt),O.blending===Vi&&O.transparent===!1?U(qn):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Mt=O.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function _e(O){O!==jc?(ht(i.CULL_FACE),O!==D&&(O===go?i.cullFace(i.BACK):O===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),D=O}function yt(O){O!==F&&(Q&&i.lineWidth(O),F=O)}function ne(O,mt,rt){O?(ht(i.POLYGON_OFFSET_FILL),(k!==mt||J!==rt)&&(i.polygonOffset(mt,rt),k=mt,J=rt)):Nt(i.POLYGON_OFFSET_FILL)}function Bt(O){O?ht(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function V(O){O===void 0&&(O=i.TEXTURE0+nt-1),xt!==O&&(i.activeTexture(O),xt=O)}function Ht(O,mt,rt){rt===void 0&&(xt===null?rt=i.TEXTURE0+nt-1:rt=xt);let Mt=Rt[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},Rt[rt]=Mt),(Mt.type!==O||Mt.texture!==mt)&&(xt!==rt&&(i.activeTexture(rt),xt=rt),i.bindTexture(O,mt||It[O]),Mt.type=O,Mt.texture=mt)}function T(){const O=Rt[xt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(O){re.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function Ut(O){j.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function Ft(O,mt){let rt=c.get(mt);rt===void 0&&(rt=new WeakMap,c.set(mt,rt));let Mt=rt.get(O);Mt===void 0&&(Mt=i.getUniformBlockIndex(mt,O.name),rt.set(O,Mt))}function dt(O,mt){const Mt=c.get(mt).get(O);l.get(mt)!==Mt&&(i.uniformBlockBinding(mt,Mt,O.__bindingPointIndex),l.set(mt,Mt))}function X(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},xt=null,Rt={},h={},p=new WeakMap,f=[],_=null,x=!1,m=null,u=null,E=null,b=null,S=null,N=null,A=null,g=new Gt(0,0,0),I=0,w=!1,y=null,D=null,F=null,k=null,J=null,re.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Nt,bindFramebuffer:ce,drawBuffers:Vt,useProgram:we,setBlending:U,setMaterial:Ne,setFlipSided:ue,setCullFace:_e,setLineWidth:yt,setPolygonOffset:ne,setScissorTest:Bt,activeTexture:V,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:C,texImage2D:At,texImage3D:st,updateUBOMapping:Ft,uniformBlockBinding:dt,texStorage2D:ut,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:it,compressedTexSubImage2D:K,compressedTexSubImage3D:Dt,scissor:pt,viewport:Ut,reset:X}}function _0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return f?new OffscreenCanvas(T,M):hr("canvas")}function x(T,M,C){let Z=1;const it=Ht(T);if((it.width>C||it.height>C)&&(Z=C/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Z*it.width),Dt=Math.floor(Z*it.height);h===void 0&&(h=_(K,Dt));const ut=M?_(K,Dt):h;return ut.width=K,ut.height=Dt,ut.getContext("2d").drawImage(T,0,0,K,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+Dt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,M,C,Z,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===i.RED&&(C===i.FLOAT&&(K=i.R32F),C===i.HALF_FLOAT&&(K=i.R16F),C===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(K=i.R8UI),C===i.UNSIGNED_SHORT&&(K=i.R16UI),C===i.UNSIGNED_INT&&(K=i.R32UI),C===i.BYTE&&(K=i.R8I),C===i.SHORT&&(K=i.R16I),C===i.INT&&(K=i.R32I)),M===i.RG&&(C===i.FLOAT&&(K=i.RG32F),C===i.HALF_FLOAT&&(K=i.RG16F),C===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(K=i.RG8UI),C===i.UNSIGNED_SHORT&&(K=i.RG16UI),C===i.UNSIGNED_INT&&(K=i.RG32UI),C===i.BYTE&&(K=i.RG8I),C===i.SHORT&&(K=i.RG16I),C===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(K=i.RGB8UI),C===i.UNSIGNED_SHORT&&(K=i.RGB16UI),C===i.UNSIGNED_INT&&(K=i.RGB32UI),C===i.BYTE&&(K=i.RGB8I),C===i.SHORT&&(K=i.RGB16I),C===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),C===i.UNSIGNED_INT&&(K=i.RGBA32UI),C===i.BYTE&&(K=i.RGBA8I),C===i.SHORT&&(K=i.RGBA16I),C===i.INT&&(K=i.RGBA32I)),M===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const Dt=it?lr:ge.getTransfer(Z);C===i.FLOAT&&(K=i.RGBA32F),C===i.HALF_FLOAT&&(K=i.RGBA16F),C===i.UNSIGNED_BYTE&&(K=Dt===ye?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(T,M){let C;return T?M===null||M===gi||M===gs?C=i.DEPTH24_STENCIL8:M===Ln?C=i.DEPTH32F_STENCIL8:M===ms&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gi||M===gs?C=i.DEPTH_COMPONENT24:M===Ln?C=i.DEPTH_COMPONENT32F:M===ms&&(C=i.DEPTH_COMPONENT16),C}function N(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&d.delete(M)}function g(T){const M=T.target;M.removeEventListener("dispose",g),y(M)}function I(T){const M=n.get(T);if(M.__webglInit===void 0)return;const C=T.source,Z=p.get(C);if(Z){const it=Z[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(T),Object.keys(Z).length===0&&p.delete(C)}n.remove(T)}function w(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const C=T.source,Z=p.get(C);delete Z[M.__cacheKey],a.memory.textures--}function y(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let it=0;it<M.__webglFramebuffer[Z].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[Z][it]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const C=T.textures;for(let Z=0,it=C.length;Z<it;Z++){const K=n.get(C[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(C[Z])}n.remove(T)}let D=0;function F(){D=0}function k(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function J(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function nt(T,M){const C=n.get(T);if(T.isVideoTexture&&Bt(T),T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(C,T,M);return}}e.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+M)}function Q(T,M){const C=n.get(T);if(T.version>0&&C.__version!==T.version){It(C,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+M)}function at(T,M){const C=n.get(T);if(T.version>0&&C.__version!==T.version){It(C,T,M);return}e.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+M)}function $(T,M){const C=n.get(T);if(T.version>0&&C.__version!==T.version){ht(C,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+M)}const xt={[da]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},Rt={[Ke]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Ot={[Ch]:i.NEVER,[Nh]:i.ALWAYS,[Ph]:i.LESS,[xc]:i.LEQUAL,[Lh]:i.EQUAL,[Uh]:i.GEQUAL,[Dh]:i.GREATER,[Ih]:i.NOTEQUAL};function ee(T,M){if(M.type===Ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===xr||M.magFilter===Cs||M.magFilter===fi||M.minFilter===yn||M.minFilter===xr||M.minFilter===Cs||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,xt[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,xt[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,xt[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Rt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Rt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ke||M.minFilter!==Cs&&M.minFilter!==fi||M.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function re(T,M){let C=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Z=M.source;let it=p.get(Z);it===void 0&&(it={},p.set(Z,it));const K=J(M);if(K!==T.__cacheKey){it[K]===void 0&&(it[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),it[K].usedTimes++;const Dt=it[T.__cacheKey];Dt!==void 0&&(it[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&w(M)),T.__cacheKey=K,T.__webglTexture=it[K].texture}return C}function j(T,M,C){return Math.floor(Math.floor(T/C)/M)}function ct(T,M,C,Z){const K=T.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,C,Z,M.data);else{K.sort((st,pt)=>st.start-pt.start);let Dt=0;for(let st=1;st<K.length;st++){const pt=K[Dt],Ut=K[st],Ft=pt.start+pt.count,dt=j(Ut.start,M.width,4),X=j(pt.start,M.width,4);Ut.start<=Ft+1&&dt===X&&j(Ut.start+Ut.count-1,M.width,4)===dt?pt.count=Math.max(pt.count,Ut.start+Ut.count-pt.start):(++Dt,K[Dt]=Ut)}K.length=Dt+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let st=0,pt=K.length;st<pt;st++){const Ut=K[st],Ft=Math.floor(Ut.start/4),dt=Math.ceil(Ut.count/4),X=Ft%M.width,O=Math.floor(Ft/M.width),mt=dt,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,X),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,X,O,mt,rt,C,Z,M.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function It(T,M,C){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const it=re(T,M),K=M.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+C);const Dt=n.get(K);if(K.version!==Dt.__version||it===!0){e.activeTexture(i.TEXTURE0+C);const ut=ge.getPrimaries(ge.workingColorSpace),Pt=M.colorSpace===Wn?null:ge.getPrimaries(M.colorSpace),At=M.colorSpace===Wn||ut===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let st=x(M.image,!1,s.maxTextureSize);st=V(M,st);const pt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type);let Ft=b(M.internalFormat,pt,Ut,M.colorSpace,M.isVideoTexture);ee(Z,M);let dt;const X=M.mipmaps,O=M.isVideoTexture!==!0,mt=Dt.__version===void 0||it===!0,rt=K.dataReady,Mt=N(M,st);if(M.isDepthTexture)Ft=S(M.format===vs,M.type),mt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,pt,Ut,null));else if(M.isDataTexture)if(X.length>0){O&&mt&&e.texStorage2D(i.TEXTURE_2D,Mt,Ft,X[0].width,X[0].height);for(let ot=0,tt=X.length;ot<tt;ot++)dt=X[ot],O?rt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,dt.width,dt.height,pt,Ut,dt.data):e.texImage2D(i.TEXTURE_2D,ot,Ft,dt.width,dt.height,0,pt,Ut,dt.data);M.generateMipmaps=!1}else O?(mt&&e.texStorage2D(i.TEXTURE_2D,Mt,Ft,st.width,st.height),rt&&ct(M,st,pt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,pt,Ut,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ft,X[0].width,X[0].height,st.depth);for(let ot=0,tt=X.length;ot<tt;ot++)if(dt=X[ot],M.format!==pn)if(pt!==null)if(O){if(rt)if(M.layerUpdates.size>0){const wt=Ko(dt.width,dt.height,M.format,M.type);for(const Yt of M.layerUpdates){const Se=dt.data.subarray(Yt*wt/dt.data.BYTES_PER_ELEMENT,(Yt+1)*wt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Yt,dt.width,dt.height,1,pt,Se)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,dt.width,dt.height,st.depth,pt,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Ft,dt.width,dt.height,st.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,dt.width,dt.height,st.depth,pt,Ut,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Ft,dt.width,dt.height,st.depth,0,pt,Ut,dt.data)}else{O&&mt&&e.texStorage2D(i.TEXTURE_2D,Mt,Ft,X[0].width,X[0].height);for(let ot=0,tt=X.length;ot<tt;ot++)dt=X[ot],M.format!==pn?pt!==null?O?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,dt.width,dt.height,pt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?rt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,dt.width,dt.height,pt,Ut,dt.data):e.texImage2D(i.TEXTURE_2D,ot,Ft,dt.width,dt.height,0,pt,Ut,dt.data)}else if(M.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ft,st.width,st.height,st.depth),rt)if(M.layerUpdates.size>0){const ot=Ko(st.width,st.height,M.format,M.type);for(const tt of M.layerUpdates){const wt=st.data.subarray(tt*ot/st.data.BYTES_PER_ELEMENT,(tt+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,pt,Ut,wt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,pt,Ut,st.data);else if(M.isData3DTexture)O?(mt&&e.texStorage3D(i.TEXTURE_3D,Mt,Ft,st.width,st.height,st.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,pt,Ut,st.data);else if(M.isFramebufferTexture){if(mt)if(O)e.texStorage2D(i.TEXTURE_2D,Mt,Ft,st.width,st.height);else{let ot=st.width,tt=st.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Ft,ot,tt,0,pt,Ut,null),ot>>=1,tt>>=1}}else if(X.length>0){if(O&&mt){const ot=Ht(X[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ft,ot.width,ot.height)}for(let ot=0,tt=X.length;ot<tt;ot++)dt=X[ot],O?rt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,pt,Ut,dt):e.texImage2D(i.TEXTURE_2D,ot,Ft,pt,Ut,dt);M.generateMipmaps=!1}else if(O){if(mt){const ot=Ht(st);e.texStorage2D(i.TEXTURE_2D,Mt,Ft,ot.width,ot.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,Ft,pt,Ut,st);m(M)&&u(Z),Dt.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ht(T,M,C){if(M.image.length!==6)return;const Z=re(T,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+C);const K=n.get(it);if(it.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+C);const Dt=ge.getPrimaries(ge.workingColorSpace),ut=M.colorSpace===Wn?null:ge.getPrimaries(M.colorSpace),Pt=M.colorSpace===Wn||Dt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const At=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!At&&!st?pt[tt]=x(M.image[tt],!0,s.maxCubemapSize):pt[tt]=st?M.image[tt].image:M.image[tt],pt[tt]=V(M,pt[tt]);const Ut=pt[0],Ft=r.convert(M.format,M.colorSpace),dt=r.convert(M.type),X=b(M.internalFormat,Ft,dt,M.colorSpace),O=M.isVideoTexture!==!0,mt=K.__version===void 0||Z===!0,rt=it.dataReady;let Mt=N(M,Ut);ee(i.TEXTURE_CUBE_MAP,M);let ot;if(At){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,X,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){ot=pt[tt].mipmaps;for(let wt=0;wt<ot.length;wt++){const Yt=ot[wt];M.format!==pn?Ft!==null?O?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Yt.width,Yt.height,Ft,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,X,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,0,0,Yt.width,Yt.height,Ft,dt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt,X,Yt.width,Yt.height,0,Ft,dt,Yt.data)}}}else{if(ot=M.mipmaps,O&&mt){ot.length>0&&Mt++;const tt=Ht(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,X,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){O?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Ft,dt,pt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,X,pt[tt].width,pt[tt].height,0,Ft,dt,pt[tt].data);for(let wt=0;wt<ot.length;wt++){const Se=ot[wt].image[tt].image;O?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Se.width,Se.height,Ft,dt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,X,Se.width,Se.height,0,Ft,dt,Se.data)}}else{O?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,dt,pt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,X,Ft,dt,pt[tt]);for(let wt=0;wt<ot.length;wt++){const Yt=ot[wt];O?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,0,0,Ft,dt,Yt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,wt+1,X,Ft,dt,Yt.image[tt])}}}m(M)&&u(i.TEXTURE_CUBE_MAP),K.__version=it.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Nt(T,M,C,Z,it,K){const Dt=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),Pt=b(C.internalFormat,Dt,ut,C.colorSpace),At=n.get(M),st=n.get(C);if(st.__renderTarget=M,!At.__hasExternalTextures){const pt=Math.max(1,M.width>>K),Ut=Math.max(1,M.height>>K);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,K,Pt,pt,Ut,M.depth,0,Dt,ut,null):e.texImage2D(it,K,Pt,pt,Ut,0,Dt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,it,st.__webglTexture,0,yt(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,it,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(T,M,C){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const Z=M.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,K=S(M.stencilBuffer,it),Dt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=yt(M);ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,M.width,M.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,T)}else{const Z=M.textures;for(let it=0;it<Z.length;it++){const K=Z[it],Dt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),Pt=b(K.internalFormat,Dt,ut,K.colorSpace),At=yt(M);C&&ne(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Pt,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);const it=Z.__webglTexture,K=yt(M);if(M.depthTexture.format===_s)ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===vs)ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function we(T){const M=n.get(T),C=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=Z}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?Vt(M.__webglFramebuffer[0],T):Vt(M.__webglFramebuffer,T)}else if(C){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[Z],T,!1);else{const it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,T,!1);else{const it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(T,M,C){const Z=n.get(T);M!==void 0&&Nt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&we(T)}function he(T){const M=T.texture,C=n.get(T),Z=n.get(M);T.addEventListener("dispose",g);const it=T.textures,K=T.isWebGLCubeRenderTarget===!0,Dt=it.length>1;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,a.memory.textures++),K){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)C.__webglFramebuffer[ut][Pt]=i.createFramebuffer()}else C.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)C.__webglFramebuffer[ut]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let ut=0,Pt=it.length;ut<Pt;ut++){const At=n.get(it[ut]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ne(T)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const Pt=it[ut];C.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const At=r.convert(Pt.format,Pt.colorSpace),st=r.convert(Pt.type),pt=b(Pt.internalFormat,At,st,Pt.colorSpace,T.isXRRenderTarget===!0),Ut=yt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(C.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Nt(C.__webglFramebuffer[ut][Pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt);else Nt(C.__webglFramebuffer[ut],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ut=0,Pt=it.length;ut<Pt;ut++){const At=it[ut],st=n.get(At);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),ee(i.TEXTURE_2D,At),Nt(C.__webglFramebuffer,T,At,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(At)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),ee(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)Nt(C.__webglFramebuffer[Pt],T,M,i.COLOR_ATTACHMENT0,ut,Pt);else Nt(C.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ut,0);m(M)&&u(ut),e.unbindTexture()}T.depthBuffer&&we(T)}function U(T){const M=T.textures;for(let C=0,Z=M.length;C<Z;C++){const it=M[C];if(m(it)){const K=E(T),Dt=n.get(it).__webglTexture;e.bindTexture(K,Dt),u(K),e.unbindTexture()}}}const Ne=[],ue=[];function _e(T){if(T.samples>0){if(ne(T)===!1){const M=T.textures,C=T.width,Z=T.height;let it=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(T),ut=M.length>1;if(ut)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Pt=T.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<M.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const st=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,C,Z,0,0,C,Z,it,i.NEAREST),l===!0&&(Ne.length=0,ue.length=0,Ne.push(i.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ne.push(K),ue.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const st=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function yt(T){return Math.min(s.maxSamples,T.samples)}function ne(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(T){const M=a.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}function V(T,M){const C=T.colorSpace,Z=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||C!==ji&&C!==Wn&&(ge.getTransfer(C)===ye?(Z!==pn||it!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),M}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=nt,this.setTexture2DArray=Q,this.setTexture3D=at,this.setTextureCube=$,this.rebindTextures=Ee,this.setupRenderTarget=he,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ne}function v0(i,t){function e(n,s=Wn){let r;const a=ge.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===pn)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===gc)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===xa||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===xa)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Sa||n===wa||n===Ea||n===ba||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===Na||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===Fa||n===za||n===Ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:x0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,_=null;const x=new y0,m=e.getContextAttributes();let u=null,E=null;const b=[],S=[],N=new Zt;let A=null;const g=new an;g.viewport=new Ae;const I=new an;I.viewport=new Ae;const w=[g,I],y=new Gu;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=b[j];return ct===void 0&&(ct=new kr,b[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=b[j];return ct===void 0&&(ct=new kr,b[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=b[j];return ct===void 0&&(ct=new kr,b[j]=ct),ct.getHandSpace()};function k(j){const ct=S.indexOf(j.inputSource);if(ct===-1)return;const It=b[ct];It!==void 0&&(It.update(j.inputSource,j.frame,c||a),It.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",nt);for(let j=0;j<b.length;j++){const ct=S[j];ct!==null&&(S[j]=null,b[j].disconnect(ct))}D=null,F=null,x.reset(),t.setRenderTarget(u),f=null,p=null,h=null,s=null,E=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,ht=null,Nt=null;m.depth&&(Nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=m.stencil?vs:_s,ht=m.stencil?gs:gi);const ce={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(ce),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new _i(p.textureWidth,p.textureHeight,{format:pn,type:Sn,depthTexture:new Ic(p.textureWidth,p.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const It={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new _i(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(j){for(let ct=0;ct<j.removed.length;ct++){const It=j.removed[ct],ht=S.indexOf(It);ht>=0&&(S[ht]=null,b[ht].disconnect(It))}for(let ct=0;ct<j.added.length;ct++){const It=j.added[ct];let ht=S.indexOf(It);if(ht===-1){for(let ce=0;ce<b.length;ce++)if(ce>=S.length){S.push(It),ht=ce;break}else if(S[ce]===null){S[ce]=It,ht=ce;break}if(ht===-1)break}const Nt=b[ht];Nt&&Nt.connect(It)}}const Q=new P,at=new P;function $(j,ct,It){Q.setFromMatrixPosition(ct.matrixWorld),at.setFromMatrixPosition(It.matrixWorld);const ht=Q.distanceTo(at),Nt=ct.projectionMatrix.elements,ce=It.projectionMatrix.elements,Vt=Nt[14]/(Nt[10]-1),we=Nt[14]/(Nt[10]+1),Ee=(Nt[9]+1)/Nt[5],he=(Nt[9]-1)/Nt[5],U=(Nt[8]-1)/Nt[0],Ne=(ce[8]+1)/ce[0],ue=Vt*U,_e=Vt*Ne,yt=ht/(-U+Ne),ne=yt*-U;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ne),j.translateZ(yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Bt=Vt+yt,V=we+yt,Ht=ue-ne,T=_e+(ht-ne),M=Ee*we/V*Bt,C=he*we/V*Bt;j.projectionMatrix.makePerspective(Ht,T,M,C,Bt,V),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ct=j.near,It=j.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(It=x.depthFar)),y.near=I.near=g.near=ct,y.far=I.far=g.far=It,(D!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,F=y.far),g.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,y.layers.mask=g.layers.mask|I.layers.mask;const ht=j.parent,Nt=y.cameras;xt(y,ht);for(let ce=0;ce<Nt.length;ce++)xt(Nt[ce],ht);Nt.length===2?$(y,g,I):y.projectionMatrix.copy(g.projectionMatrix),Rt(j,y,ht)};function Rt(j,ct,It){It===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(It.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ot=null;function ee(j,ct){if(d=ct.getViewerPose(c||a),_=ct,d!==null){const It=d.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ht=!1;It.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Vt=0;Vt<It.length;Vt++){const we=It[Vt];let Ee=null;if(f!==null)Ee=f.getViewport(we);else{const U=h.getViewSubImage(p,we);Ee=U.viewport,Vt===0&&(t.setRenderTargetTextures(E,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(E))}let he=w[Vt];he===void 0&&(he=new an,he.layers.enable(Vt),he.viewport=new Ae,w[Vt]=he),he.matrix.fromArray(we.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(we.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Vt===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(he)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Vt=h.getDepthInformation(It[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,s.renderState)}}for(let It=0;It<b.length;It++){const ht=S[It],Nt=b[It];ht!==null&&Nt!==void 0&&Nt.update(ht,ct,c||a)}Ot&&Ot(j,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),_=null}const re=new Nc;re.setAnimationLoop(ee),this.setAnimationLoop=function(j){Ot=j},this.dispose=function(){}}}const ri=new Nn,w0=new Te;function E0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ac(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,b,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$e&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$e&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=t.get(u),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,ri.copy(S),ri.x*=-1,ri.y*=-1,ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(ri)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=b*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$e&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const E=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function c(E,b){let S=s[E.id];S===void 0&&(_(E),S=d(E),s[E.id]=S,E.addEventListener("dispose",m));const N=b.program;n.updateUBOMapping(E,N);const A=t.render.frame;r[E.id]!==A&&(p(E),r[E.id]=A)}function d(E){const b=h();E.__bindingPointIndex=b;const S=i.createBuffer(),N=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=s[E.id],S=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,g=S.length;A<g;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,y=I.length;w<y;w++){const D=I[w];if(f(D,A,w,N)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let nt=0;nt<k.length;nt++){const Q=k[nt],at=x(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,F+J,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,J),J+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,b,S,N){const A=E.value,g=b+"_"+S;if(N[g]===void 0)return typeof A=="number"||typeof A=="boolean"?N[g]=A:N[g]=A.clone(),!0;{const I=N[g];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return N[g]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(E){const b=E.uniforms;let S=0;const N=16;for(let g=0,I=b.length;g<I;g++){const w=Array.isArray(b[g])?b[g]:[b[g]];for(let y=0,D=w.length;y<D;y++){const F=w[y],k=Array.isArray(F.value)?F.value:[F.value];for(let J=0,nt=k.length;J<nt;J++){const Q=k[J],at=x(Q),$=S%N,xt=$%at.boundary,Rt=$+xt;S+=xt,Rt!==0&&N-Rt<at.storage&&(S+=N-Rt),F.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=at.storage}}}const A=S%N;return A>0&&(S+=N-A),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class T0{constructor(t={}){const{canvas:e=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let N=!1;this._outputColorSpace=rn;let A=0,g=0,I=null,w=-1,y=null;const D=new Ae,F=new Ae;let k=null;const J=new Gt(0);let nt=0,Q=e.width,at=e.height,$=1,xt=null,Rt=null;const Ot=new Ae(0,0,Q,at),ee=new Ae(0,0,Q,at);let re=!1;const j=new io;let ct=!1,It=!1;const ht=new Te,Nt=new Te,ce=new P,Vt=new Ae,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function he(){return I===null?$:1}let U=n;function Ne(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",tt,!1),U===null){const L="webgl2";if(U=Ne(L,v),U===null)throw Ne(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ue,_e,yt,ne,Bt,V,Ht,T,M,C,Z,it,K,Dt,ut,Pt,At,st,pt,Ut,Ft,dt,X,O;function mt(){ue=new Op(U),ue.init(),dt=new v0(U,ue),_e=new Cp(U,ue,t,dt),yt=new g0(U,ue),_e.reverseDepthBuffer&&p&&yt.buffers.depth.setReversed(!0),ne=new Bp(U),Bt=new i0,V=new _0(U,ue,yt,Bt,_e,dt,ne),Ht=new Lp(S),T=new Np(S),M=new Wu(U),X=new Ap(U,M),C=new Fp(U,M,ne,X),Z=new Gp(U,C,M,ne),pt=new kp(U,_e,V),Pt=new Pp(Bt),it=new n0(S,Ht,T,ue,_e,X,Pt),K=new E0(S,Bt),Dt=new r0,ut=new u0(ue),st=new Tp(S,Ht,T,yt,Z,f,l),At=new p0(S,Z,_e),O=new b0(U,ne,_e,yt),Ut=new Rp(U,ue,ne),Ft=new zp(U,ue,ne),ne.programs=it.programs,S.capabilities=_e,S.extensions=ue,S.properties=Bt,S.renderLists=Dt,S.shadowMap=At,S.state=yt,S.info=ne}mt();const rt=new S0(S,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(Q,at,!1))},this.getSize=function(v){return v.set(Q,at)},this.setSize=function(v,L,G=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=v,at=L,e.width=Math.floor(v*$),e.height=Math.floor(L*$),G===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Q*$,at*$).floor()},this.setDrawingBufferSize=function(v,L,G){Q=v,at=L,$=G,e.width=Math.floor(v*G),e.height=Math.floor(L*G),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Ot)},this.setViewport=function(v,L,G,H){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,L,G,H),yt.viewport(D.copy(Ot).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(ee)},this.setScissor=function(v,L,G,H){v.isVector4?ee.set(v.x,v.y,v.z,v.w):ee.set(v,L,G,H),yt.scissor(F.copy(ee).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(v){yt.setScissorTest(re=v)},this.setOpaqueSort=function(v){xt=v},this.setTransparentSort=function(v){Rt=v},this.getClearColor=function(v){return v.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,G=!0){let H=0;if(v){let B=!1;if(I!==null){const lt=I.texture.format;B=lt===Qa||lt===Ja||lt===Za}if(B){const lt=I.texture.type,gt=lt===Sn||lt===gi||lt===ms||lt===gs||lt===$a||lt===Ka,Ct=st.getClearColor(),Et=st.getClearAlpha(),kt=Ct.r,Xt=Ct.g,bt=Ct.b;gt?(_[0]=kt,_[1]=Xt,_[2]=bt,_[3]=Et,U.clearBufferuiv(U.COLOR,0,_)):(x[0]=kt,x[1]=Xt,x[2]=bt,x[3]=Et,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT),G&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),st.dispose(),Dt.dispose(),ut.dispose(),Bt.dispose(),Ht.dispose(),T.dispose(),Z.dispose(),X.dispose(),O.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Jt),rt.removeEventListener("sessionend",$t),mn.stop()};function Mt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const v=ne.autoReset,L=At.enabled,G=At.autoUpdate,H=At.needsUpdate,B=At.type;mt(),ne.autoReset=v,At.enabled=L,At.autoUpdate=G,At.needsUpdate=H,At.type=B}function tt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function wt(v){const L=v.target;L.removeEventListener("dispose",wt),Yt(L)}function Yt(v){Se(v),Bt.remove(v)}function Se(v){const L=Bt.get(v).programs;L!==void 0&&(L.forEach(function(G){it.releaseProgram(G)}),v.isShaderMaterial&&it.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,G,H,B,lt){L===null&&(L=we);const gt=B.isMesh&&B.matrixWorld.determinant()<0,Ct=Es(v,L,G,H,B);yt.setMaterial(H,gt);let Et=G.index,kt=1;if(H.wireframe===!0){if(Et=C.getWireframeAttribute(G),Et===void 0)return;kt=2}const Xt=G.drawRange,bt=G.attributes.position;let ie=Xt.start*kt,W=(Xt.start+Xt.count)*kt;lt!==null&&(ie=Math.max(ie,lt.start*kt),W=Math.min(W,(lt.start+lt.count)*kt)),Et!==null?(ie=Math.max(ie,0),W=Math.min(W,Et.count)):bt!=null&&(ie=Math.max(ie,0),W=Math.min(W,bt.count));const Wt=W-ie;if(Wt<0||Wt===1/0)return;X.setup(B,H,Ct,G,Et);let qt,zt=Ut;if(Et!==null&&(qt=M.get(Et),zt=Ft,zt.setIndex(qt)),B.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*he()),zt.setMode(U.LINES)):zt.setMode(U.TRIANGLES);else if(B.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),yt.setLineWidth(Tt*he()),B.isLineSegments?zt.setMode(U.LINES):B.isLineLoop?zt.setMode(U.LINE_LOOP):zt.setMode(U.LINE_STRIP)}else B.isPoints?zt.setMode(U.POINTS):B.isSprite&&zt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Tt=B._multiDrawStarts,le=B._multiDrawCounts,ft=B._multiDrawCount,Kt=Et?M.get(Et).bytesPerElement:1,se=Bt.get(H).currentProgram.getUniforms();for(let jt=0;jt<ft;jt++)se.setValue(U,"_gl_DrawID",jt),zt.render(Tt[jt]/Kt,le[jt])}else if(B.isInstancedMesh)zt.renderInstances(ie,Wt,B.count);else if(G.isInstancedBufferGeometry){const Tt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,le=Math.min(G.instanceCount,Tt);zt.renderInstances(ie,Wt,le)}else zt.render(ie,Wt)};function oe(v,L,G){v.transparent===!0&&v.side===je&&v.forceSinglePass===!1?(v.side=$e,v.needsUpdate=!0,vn(v,L,G),v.side=$n,v.needsUpdate=!0,vn(v,L,G),v.side=je):vn(v,L,G)}this.compile=function(v,L,G=null){G===null&&(G=v),u=ut.get(G),u.init(L),b.push(u),G.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),v!==G&&v.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const H=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){const Ct=lt[gt];oe(Ct,G,B),H.add(Ct)}else oe(lt,G,B),H.add(lt)}),u=b.pop(),H},this.compileAsync=function(v,L,G=null){const H=this.compile(v,L,G);return new Promise(B=>{function lt(){if(H.forEach(function(gt){Bt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){B(v);return}setTimeout(lt,10)}ue.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Be=null;function cn(v){Be&&Be(v)}function Jt(){mn.stop()}function $t(){mn.start()}const mn=new Nc;mn.setAnimationLoop(cn),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(v){Be=v,rt.setAnimationLoop(v),v===null?mn.stop():mn.start()},rt.addEventListener("sessionstart",Jt),rt.addEventListener("sessionend",$t),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(L),L=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,I),u=ut.get(v,b.length),u.init(L),b.push(u),Nt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(Nt),It=this.localClippingEnabled,ct=Pt.init(this.clippingPlanes,It),m=Dt.get(v,E.length),m.init(),E.push(m),rt.enabled===!0&&rt.isPresenting===!0){const lt=S.xr.getDepthSensingMesh();lt!==null&&Zn(lt,L,-1/0,S.sortObjects)}Zn(v,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(xt,Rt),Ee=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ee&&st.addToRenderList(m,v),this.info.render.frame++,ct===!0&&Pt.beginShadows();const G=u.state.shadowsArray;At.render(G,v,L),ct===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,B=m.transmissive;if(u.setupLights(),L.isArrayCamera){const lt=L.cameras;if(B.length>0)for(let gt=0,Ct=lt.length;gt<Ct;gt++){const Et=lt[gt];Jn(H,B,v,Et)}Ee&&st.render(v);for(let gt=0,Ct=lt.length;gt<Ct;gt++){const Et=lt[gt];gn(m,v,Et,Et.viewport)}}else B.length>0&&Jn(H,B,v,L),Ee&&st.render(v),gn(m,v,L);I!==null&&g===0&&(V.updateMultisampleRenderTarget(I),V.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,L),X.resetDefaultState(),w=-1,y=null,b.pop(),b.length>0?(u=b[b.length-1],ct===!0&&Pt.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Zn(v,L,G,H){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){H&&Vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Nt);const gt=Z.update(v),Ct=v.material;Ct.visible&&m.push(v,gt,Ct,G,Vt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const gt=Z.update(v),Ct=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Vt.copy(v.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Vt.copy(gt.boundingSphere.center)),Vt.applyMatrix4(v.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){const Et=gt.groups;for(let kt=0,Xt=Et.length;kt<Xt;kt++){const bt=Et[kt],ie=Ct[bt.materialIndex];ie&&ie.visible&&m.push(v,gt,ie,G,Vt.z,bt)}}else Ct.visible&&m.push(v,gt,Ct,G,Vt.z,null)}}const lt=v.children;for(let gt=0,Ct=lt.length;gt<Ct;gt++)Zn(lt[gt],L,G,H)}function gn(v,L,G,H){const B=v.opaque,lt=v.transmissive,gt=v.transparent;u.setupLightsView(G),ct===!0&&Pt.setGlobalState(S.clippingPlanes,G),H&&yt.viewport(D.copy(H)),B.length>0&&_n(B,L,G),lt.length>0&&_n(lt,L,G),gt.length>0&&_n(gt,L,G),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Jn(v,L,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new _i(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ys:Sn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const lt=u.state.transmissionRenderTarget[H.id],gt=H.viewport||D;lt.setSize(gt.z*S.transmissionResolutionScale,gt.w*S.transmissionResolutionScale);const Ct=S.getRenderTarget();S.setRenderTarget(lt),S.getClearColor(J),nt=S.getClearAlpha(),nt<1&&S.setClearColor(16777215,.5),S.clear(),Ee&&st.render(G);const Et=S.toneMapping;S.toneMapping=Xn;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),ct===!0&&Pt.setGlobalState(S.clippingPlanes,H),_n(v,G,H),V.updateMultisampleRenderTarget(lt),V.updateRenderTargetMipmap(lt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let bt=0,ie=L.length;bt<ie;bt++){const W=L[bt],Wt=W.object,qt=W.geometry,zt=W.material,Tt=W.group;if(zt.side===je&&Wt.layers.test(H.layers)){const le=zt.side;zt.side=$e,zt.needsUpdate=!0,Qn(Wt,G,H,qt,zt,Tt),zt.side=le,zt.needsUpdate=!0,Xt=!0}}Xt===!0&&(V.updateMultisampleRenderTarget(lt),V.updateRenderTargetMipmap(lt))}S.setRenderTarget(Ct),S.setClearColor(J,nt),kt!==void 0&&(H.viewport=kt),S.toneMapping=Et}function _n(v,L,G){const H=L.isScene===!0?L.overrideMaterial:null;for(let B=0,lt=v.length;B<lt;B++){const gt=v[B],Ct=gt.object,Et=gt.geometry,kt=gt.group;let Xt=gt.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),Ct.layers.test(G.layers)&&Qn(Ct,L,G,Et,Xt,kt)}}function Qn(v,L,G,H,B,lt){v.onBeforeRender(S,L,G,H,B,lt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(S,L,G,H,v,lt),B.transparent===!0&&B.side===je&&B.forceSinglePass===!1?(B.side=$e,B.needsUpdate=!0,S.renderBufferDirect(G,L,H,B,v,lt),B.side=$n,B.needsUpdate=!0,S.renderBufferDirect(G,L,H,B,v,lt),B.side=je):S.renderBufferDirect(G,L,H,B,v,lt),v.onAfterRender(S,L,G,H,B,lt)}function vn(v,L,G){L.isScene!==!0&&(L=we);const H=Bt.get(v),B=u.state.lights,lt=u.state.shadowsArray,gt=B.state.version,Ct=it.getParameters(v,B.state,lt,L,G),Et=it.getProgramCacheKey(Ct);let kt=H.programs;H.environment=v.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(v.isMeshStandardMaterial?T:Ht).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,kt===void 0&&(v.addEventListener("dispose",wt),kt=new Map,H.programs=kt);let Xt=kt.get(Et);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===gt)return Fn(v,Ct),Xt}else Ct.uniforms=it.getUniforms(v),v.onBeforeCompile(Ct,S),Xt=it.acquireProgram(Ct,Et),kt.set(Et,Xt),H.uniforms=Ct.uniforms;const bt=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=Pt.uniform),Fn(v,Ct),H.needsLights=Ts(v),H.lightsStateVersion=gt,H.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Xt,H.uniformsList=null,Xt}function On(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=or.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Fn(v,L){const G=Bt.get(v);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function Es(v,L,G,H,B){L.isScene!==!0&&(L=we),V.resetTextureUnits();const lt=L.fog,gt=H.isMeshStandardMaterial?L.environment:null,Ct=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ji,Et=(H.isMeshStandardMaterial?T:Ht).get(H.envMap||gt),kt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,W=!!G.morphAttributes.color;let Wt=Xn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Wt=S.toneMapping);const qt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,zt=qt!==void 0?qt.length:0,Tt=Bt.get(H),le=u.state.lights;if(ct===!0&&(It===!0||v!==y)){const Oe=v===y&&H.id===w;Pt.setState(H,v,Oe)}let ft=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==le.state.version||Tt.outputColorSpace!==Ct||B.isBatchedMesh&&Tt.batching===!1||!B.isBatchedMesh&&Tt.batching===!0||B.isBatchedMesh&&Tt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Tt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Tt.instancing===!1||!B.isInstancedMesh&&Tt.instancing===!0||B.isSkinnedMesh&&Tt.skinning===!1||!B.isSkinnedMesh&&Tt.skinning===!0||B.isInstancedMesh&&Tt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Tt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Tt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Tt.instancingMorph===!1&&B.morphTexture!==null||Tt.envMap!==Et||H.fog===!0&&Tt.fog!==lt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Pt.numPlanes||Tt.numIntersection!==Pt.numIntersection)||Tt.vertexAlphas!==kt||Tt.vertexTangents!==Xt||Tt.morphTargets!==bt||Tt.morphNormals!==ie||Tt.morphColors!==W||Tt.toneMapping!==Wt||Tt.morphTargetsCount!==zt)&&(ft=!0):(ft=!0,Tt.__version=H.version);let Kt=Tt.currentProgram;ft===!0&&(Kt=vn(H,L,B));let se=!1,jt=!1,Pe=!1;const me=Kt.getUniforms(),Ge=Tt.uniforms;if(yt.useProgram(Kt.program)&&(se=!0,jt=!0,Pe=!0),H.id!==w&&(w=H.id,jt=!0),se||y!==v){yt.buffers.depth.getReversed()?(ht.copy(v.projectionMatrix),tu(ht),eu(ht),me.setValue(U,"projectionMatrix",ht)):me.setValue(U,"projectionMatrix",v.projectionMatrix),me.setValue(U,"viewMatrix",v.matrixWorldInverse);const ke=me.map.cameraPosition;ke!==void 0&&ke.setValue(U,ce.setFromMatrixPosition(v.matrixWorld)),_e.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,jt=!0,Pe=!0)}if(B.isSkinnedMesh){me.setOptional(U,B,"bindMatrix"),me.setOptional(U,B,"bindMatrixInverse");const Oe=B.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),me.setValue(U,"boneTexture",Oe.boneTexture,V))}B.isBatchedMesh&&(me.setOptional(U,B,"batchingTexture"),me.setValue(U,"batchingTexture",B._matricesTexture,V),me.setOptional(U,B,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",B._indirectTexture,V),me.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",B._colorsTexture,V));const He=G.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&pt.update(B,G,Kt),(jt||Tt.receiveShadow!==B.receiveShadow)&&(Tt.receiveShadow=B.receiveShadow,me.setValue(U,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ge.envMap.value=Et,Ge.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Ge.envMapIntensity.value=L.environmentIntensity),jt&&(me.setValue(U,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&bs(Ge,Pe),lt&&H.fog===!0&&K.refreshFogUniforms(Ge,lt),K.refreshMaterialUniforms(Ge,H,$,at,u.state.transmissionRenderTarget[v.id]),or.upload(U,On(Tt),Ge,V)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(or.upload(U,On(Tt),Ge,V),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(U,"center",B.center),me.setValue(U,"modelViewMatrix",B.modelViewMatrix),me.setValue(U,"normalMatrix",B.normalMatrix),me.setValue(U,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Oe=H.uniformsGroups;for(let ke=0,en=Oe.length;ke<en;ke++){const xn=Oe[ke];O.update(xn,Kt),O.bind(xn,Kt)}}return Kt}function bs(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Ts(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,L,G){const H=Bt.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Bt.get(v.texture).__webglTexture=L,Bt.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const G=Bt.get(v);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0};const z=U.createFramebuffer();this.setRenderTarget=function(v,L=0,G=0){I=v,A=L,g=G;let H=!0,B=null,lt=!1,gt=!1;if(v){const Et=Bt.get(v);if(Et.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)V.setupRenderTarget(v);else if(Et.__hasExternalTextures)V.rebindTextures(v,Bt.get(v.texture).__webglTexture,Bt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const bt=v.depthTexture;if(Et.__boundDepthTexture!==bt){if(bt!==null&&Bt.has(bt)&&(v.width!==bt.image.width||v.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(v)}}const kt=v.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);const Xt=Bt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Xt[L])?B=Xt[L][G]:B=Xt[L],lt=!0):v.samples>0&&V.useMultisampledRTT(v)===!1?B=Bt.get(v).__webglMultisampledFramebuffer:Array.isArray(Xt)?B=Xt[G]:B=Xt,D.copy(v.viewport),F.copy(v.scissor),k=v.scissorTest}else D.copy(Ot).multiplyScalar($).floor(),F.copy(ee).multiplyScalar($).floor(),k=re;if(G!==0&&(B=z),yt.bindFramebuffer(U.FRAMEBUFFER,B)&&H&&yt.drawBuffers(v,B),yt.viewport(D),yt.scissor(F),yt.setScissorTest(k),lt){const Et=Bt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Et.__webglTexture,G)}else if(gt){const Et=Bt.get(v.texture),kt=L;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,G,kt)}else if(v!==null&&G!==0){const Et=Bt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,G)}w=-1},this.readRenderTargetPixels=function(v,L,G,H,B,lt,gt,Ct=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){yt.bindFramebuffer(U.FRAMEBUFFER,Et);try{const kt=v.textures[Ct],Xt=kt.format,bt=kt.type;if(!_e.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-H&&G>=0&&G<=v.height-B&&(v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(L,G,H,B,dt.convert(Xt),dt.convert(bt),lt))}finally{const kt=I!==null?Bt.get(I).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(v,L,G,H,B,lt,gt,Ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et)if(L>=0&&L<=v.width-H&&G>=0&&G<=v.height-B){yt.bindFramebuffer(U.FRAMEBUFFER,Et);const kt=v.textures[Ct],Xt=kt.format,bt=kt.type;if(!_e.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(L,G,H,B,dt.convert(Xt),dt.convert(bt),0);const W=I!==null?Bt.get(I).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,W);const Wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qh(U,Wt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt),U.deleteBuffer(ie),U.deleteSync(Wt),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,G=0){const H=Math.pow(2,-G),B=Math.floor(v.image.width*H),lt=Math.floor(v.image.height*H),gt=L!==null?L.x:0,Ct=L!==null?L.y:0;V.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,gt,Ct,B,lt),yt.unbindTexture()};const Y=U.createFramebuffer(),q=U.createFramebuffer();this.copyTextureToTexture=function(v,L,G=null,H=null,B=0,lt=null){lt===null&&(B!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=B,B=0):lt=0);let gt,Ct,Et,kt,Xt,bt,ie,W,Wt;const qt=v.isCompressedTexture?v.mipmaps[lt]:v.image;if(G!==null)gt=G.max.x-G.min.x,Ct=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,kt=G.min.x,Xt=G.min.y,bt=G.isBox3?G.min.z:0;else{const He=Math.pow(2,-B);gt=Math.floor(qt.width*He),Ct=Math.floor(qt.height*He),v.isDataArrayTexture?Et=qt.depth:v.isData3DTexture?Et=Math.floor(qt.depth*He):Et=1,kt=0,Xt=0,bt=0}H!==null?(ie=H.x,W=H.y,Wt=H.z):(ie=0,W=0,Wt=0);const zt=dt.convert(L.format),Tt=dt.convert(L.type);let le;L.isData3DTexture?(V.setTexture3D(L,0),le=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(V.setTexture2DArray(L,0),le=U.TEXTURE_2D_ARRAY):(V.setTexture2D(L,0),le=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const ft=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),se=U.getParameter(U.UNPACK_SKIP_PIXELS),jt=U.getParameter(U.UNPACK_SKIP_ROWS),Pe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,qt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bt);const me=v.isDataArrayTexture||v.isData3DTexture,Ge=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const He=Bt.get(v),Oe=Bt.get(L),ke=Bt.get(He.__renderTarget),en=Bt.get(Oe.__renderTarget);yt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let xn=0;xn<Et;xn++)me&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.get(v).__webglTexture,B,bt+xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.get(L).__webglTexture,lt,Wt+xn)),U.blitFramebuffer(kt,Xt,gt,Ct,ie,W,gt,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Bt.has(v)){const He=Bt.get(v),Oe=Bt.get(L);yt.bindFramebuffer(U.READ_FRAMEBUFFER,Y),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let ke=0;ke<Et;ke++)me?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,B,bt+ke):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,B),Ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,lt,Wt+ke):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Oe.__webglTexture,lt),B!==0?U.blitFramebuffer(kt,Xt,gt,Ct,ie,W,gt,Ct,U.COLOR_BUFFER_BIT,U.NEAREST):Ge?U.copyTexSubImage3D(le,lt,ie,W,Wt+ke,kt,Xt,gt,Ct):U.copyTexSubImage2D(le,lt,ie,W,kt,Xt,gt,Ct);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ge?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(le,lt,ie,W,Wt,gt,Ct,Et,zt,Tt,qt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(le,lt,ie,W,Wt,gt,Ct,Et,zt,qt.data):U.texSubImage3D(le,lt,ie,W,Wt,gt,Ct,Et,zt,Tt,qt):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,lt,ie,W,gt,Ct,zt,Tt,qt.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,lt,ie,W,qt.width,qt.height,zt,qt.data):U.texSubImage2D(U.TEXTURE_2D,lt,ie,W,gt,Ct,zt,Tt,qt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,se),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe),lt===0&&L.generateMipmaps&&U.generateMipmap(le),yt.unbindTexture()},this.copyTextureToTexture3D=function(v,L,G=null,H=null,B=0){return Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,G,H,B)},this.initRenderTarget=function(v){Bt.get(v).__webglFramebuffer===void 0&&V.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?V.setTextureCube(v,0):v.isData3DTexture?V.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?V.setTexture2DArray(v,0):V.setTexture2D(v,0),yt.unbindTexture()},this.resetState=function(){A=0,g=0,I=null,yt.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class A0{constructor(t){R(this,"keys",new Set);R(this,"justPressed",new Set);R(this,"leftReleased",!1);R(this,"leftDown",!1);R(this,"rightDown",!1);R(this,"dx",0);R(this,"dy",0);R(this,"wheel",0);window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),this.keys.has(e.code)||this.justPressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("mousedown",e=>{e.button===0&&(this.leftDown=!0),e.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),e.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",e=>{this.dx+=e.movementX,this.dy+=e.movementY}),t.addEventListener("wheel",e=>{this.wheel+=e.deltaY})}isDown(t){return this.keys.has(t)}wasPressed(t){return this.justPressed.has(t)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const de={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},R0={day:{barSeconds:3.2,chords:[[de.C4,de.E4,de.G4],[220,de.C4,de.E4],[174.61,220,de.C4],[196,246.94,de.D4]],style:"melody",melody:[[[de.E5,0,.5],[de.G5,.25,.5],[de.A5,.5,.5],[de.G5,.75,.45]],[[de.E5,0,.6],[de.C5,.5,.85]],[[de.D5,0,.5],[de.E5,.25,.5],[de.F5,.5,.5],[de.D5,.75,.45]],[[de.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,de.C4],[de.C4,de.E4,de.G4],[196,246.94,de.D4],[220,de.C4,de.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,de.C4,de.E4],[174.61,220,de.C4],[130.81,164.81,196],[196,246.94,de.D4]],style:"melody",melody:[[[de.A4,0,1.4]],[[de.C5,0,1],[de.B4,.5,1.2]],[[de.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class C0{constructor(){R(this,"ctx",null);R(this,"sfxBus",null);R(this,"musicBus",null);R(this,"noiseBuffer",null);R(this,"chordIndex",0);R(this,"musicTimer",null);R(this,"volume",1);R(this,"musicEnabled",!0);R(this,"rainGain",null);R(this,"musicMode","day")}unlock(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.sfxBus=t.createGain(),this.sfxBus.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.connect(t.destination),this.applyVolume();const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;this.noiseBuffer=e,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(t){this.musicMode=t}setRain(t){if(!this.ctx||!this.rainGain)return;const e=t?.09:1e-4;this.rainGain.gain.setTargetAtTime(e,this.ctx.currentTime,1.2)}setVolume(t){this.volume=t,this.applyVolume()}setMusicEnabled(t){this.musicEnabled=t,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(t){if(this.ctx)switch(t){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((e,n)=>this.tone("triangle",e,e,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((e,n)=>this.tone("sine",e,e,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((e,n)=>this.tone("sine",e,e,.25,.2,.18+n*.1));break}}tone(t,e,n,s,r,a=0){if(!this.ctx||!this.sfxBus)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),n!==e&&l.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+s),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+s),l.connect(c).connect(this.sfxBus),l.start(o),l.stop(o+s+.05)}noiseBurst(t,e,n,s,r){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const a=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=t,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+s);const c=this.ctx.createGain();c.gain.setValueAtTime(r,a),c.gain.exponentialRampToValueAtTime(.001,a+s),o.connect(l).connect(c).connect(this.sfxBus),o.start(a),o.stop(a+s+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const s=this.ctx.createOscillator();s.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=.05,s.connect(r).connect(n.gain),t.connect(e).connect(n).connect(this.musicBus),t.start(),s.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=1400,e.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const s=this.ctx.createGain();s.gain.value=1;const r=this.ctx.createOscillator();r.frequency.value=.13;const a=this.ctx.createGain();a.gain.value=.18,r.connect(a).connect(s.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,t.connect(e).connect(n).connect(s).connect(this.rainGain).connect(this.musicBus),t.start(),r.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const t=R0[this.musicMode],e=t.barSeconds,n=this.ctx.currentTime+.05,s=this.chordIndex%t.chords.length,r=t.chords[s];this.chordIndex++;for(const l of r){const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type=t.padType,c.frequency.value=l,d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(t.padVol,n+.7),d.gain.setValueAtTime(t.padVol,n+e-1),d.gain.exponentialRampToValueAtTime(1e-4,n+e+.5),c.connect(d).connect(this.musicBus),c.start(n),c.stop(n+e+.6)}const a=this.ctx.createOscillator(),o=this.ctx.createGain();if(a.type="sine",a.frequency.value=r[0]/2,o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.07,n+.3),o.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(o).connect(this.musicBus),a.start(n),a.stop(n+e+.1),t.style==="melody"){const l=t.melody[s%t.melody.length]??[];for(const[c,d,h]of l)this.melodyNote(c,n+d*e,h)}else{const l=[0,1,2,1,0,1,2,1];for(let c=0;c<l.length;c++)this.melodyNote(r[l[c]]*2,n+c/8*e,e/8-.05)}for(const l of t.hats)this.hatTick(n+l*e);this.musicTimer=setTimeout(()=>this.scheduleBar(),e*1e3)}melodyNote(t,e,n){if(!this.ctx||!this.musicBus)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+n),s.connect(r).connect(this.musicBus),s.start(e),s.stop(e+n+.05)}hatTick(t){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const s=this.ctx.createGain();s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n).connect(s).connect(this.musicBus),e.start(t),e.stop(t+.08)}}const P0=22,L0=80;class D0{constructor(t){R(this,"hitstopT",0);R(this,"shakeT",0);R(this,"shakeDuration",1);R(this,"shakeIntensity",0);R(this,"particles",[]);this.scene=t}get frozen(){return this.hitstopT>0}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t,e){this.shakeIntensity=Math.max(this.shakeIntensity,t),this.shakeT=Math.max(this.shakeT,e),this.shakeDuration=Math.max(e,.01)}burst(t,e,n=10,s=7){for(let r=0;r<n&&!(this.particles.length>=L0);r++){const a=.07+Math.random()*.1,o=new et(new oo(a),new tn({color:e}));o.position.copy(t);const l=new P(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),c=.35+Math.random()*.3;this.particles.push({mesh:o,velocity:l.multiplyScalar(s*(.5+Math.random()*.7)),life:c,maxLife:c}),this.scene.add(o)}}update(t){if(this.hitstopT=Math.max(0,this.hitstopT-t),this.particles=this.particles.filter(e=>{if(e.life-=t,e.life<=0)return this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),!1;e.velocity.y-=P0*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=t*8,e.mesh.rotation.y+=t*6;const n=e.life/e.maxLife;return e.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=t;const e=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*e;return this.shakeT<=0&&(this.shakeIntensity=0),new P((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new P}}let ki=null;function I0(){if(!ki){const i=new Uint8Array([90,150,210,255]);ki=new Ru(i,i.length,1,ja),ki.minFilter=Ke,ki.magFilter=Ke,ki.needsUpdate=!0}return ki}function vt(i,t={}){const e=new Iu({color:i,gradientMap:I0(),transparent:t.transparent??!1,opacity:t.opacity??1,vertexColors:t.vertexColors??!1});return t.emissive!==void 0&&(e.emissive.setHex(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1),e}const U0=new tn({color:1844019,side:$e});function jn(i,t=1.06){var n;const e=[];i.traverse(s=>{s instanceof et&&!(s instanceof Dc)&&e.push(s)});for(const s of e){const r=new et(s.geometry,U0);r.position.copy(s.position),r.rotation.copy(s.rotation),r.scale.copy(s.scale).multiplyScalar(t),r.raycast=()=>{},(n=s.parent)==null||n.add(r)}}const N0=.6,Ml=.25;function O0(){const i=new yi(700,700,96,96);i.rotateX(-Math.PI/2);const t=vt(2789320,{transparent:!0,opacity:.92});return new et(i,t)}function F0(i,t,e=1){const n=i.geometry.getAttribute("position"),s=N0*e;for(let r=0;r<n.count;r++){const a=n.getX(r),o=n.getZ(r),l=Math.sin(a*Ml+t)*Math.cos(o*Ml+t*.8)*s;n.setY(r,l)}n.needsUpdate=!0,i.geometry.computeVertexNormals()}const z0=360,yl=.65,B0=new Gt(8900331),k0=new Gt(660528),Zr=260,Sl=42,G0={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class H0{constructor(t,e,n,s){R(this,"time",.12);R(this,"weather","clear");R(this,"weatherT",50);R(this,"lightningT",6);R(this,"flashT",0);R(this,"rain");R(this,"rainVelocity",[]);this.scene=t,this.sun=e,this.hemi=n,this.ambient=s;const r=new Float32Array(Zr*6);for(let o=0;o<Zr;o++){const l=(Math.random()-.5)*Sl,c=Math.random()*30,d=(Math.random()-.5)*Sl;r.set([l,c,d,l,c-.9,d],o*6),this.rainVelocity.push(30+Math.random()*14)}const a=new ze;a.setAttribute("position",new Qe(r,3)),this.rain=new Lu(a,new so({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,t.add(this.rain)}forceWeather(t){this.weather=t,this.weatherT=60}get rainVisible(){return this.rain.visible}update(t,e,n){if(this.time=(this.time+t/z0)%1,this.weatherT-=t,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const s=G0[this.weather],r=this.weather!=="clear",a=this.time/yl,o=this.time<yl?Math.sin(Math.PI*a):0,l=Math.PI*(1-a);this.sun.position.set(e.x+Math.cos(l)*120,Math.max(Math.sin(l),.12)*130+15,e.z+40),this.sun.target.position.set(e.x,0,e.z),this.sun.intensity=.15+2.45*o,this.hemi.intensity=.25+.45*o;let c=.12+.23*o,d=!1;if(this.weather==="storm"&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,d=!0)),this.flashT>0&&(this.flashT-=t,c+=1.6),this.ambient.intensity=c,!n){const h=k0.clone().lerp(B0,o).multiplyScalar(s.darken);this.flashT>0&&h.lerp(new Gt(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=r&&!n,this.rain.visible){this.rain.position.set(e.x,e.y,e.z);const h=this.rain.geometry.getAttribute("position"),p=this.weather==="storm"?1.6:1;for(let f=0;f<Zr;f++){let _=h.getY(f*2)-this.rainVelocity[f]*p*t;_<-4&&(_=26+Math.random()*4),h.setY(f*2,_),h.setY(f*2+1,_-.9)}h.needsUpdate=!0}return{isNight:o<.08,weather:this.weather,raining:r,waveScale:s.wave,boatFactor:s.boat,thunder:d}}}const V0=14,W0=1.2,q0=5,kc=2e3,Pn={x:kc,z:0},X0=1100;function Gi(i){return i>X0?2:1}const Xi=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:kc,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],wl={x:-60,z:-120},sn={x:-40,z:230,r:26},El={x:60,z:-170},bl={x:0,z:288},Gc=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function Y0(i,t){return Gc.some(e=>Math.hypot(i-e.x,t-e.z)<e.r)}function Jr(i){return i*i*(3-2*i)}function $0(i,t,e){const n=t-i.x,s=e-i.z,r=Math.hypot(n,s);if(r>=i.r)return 0;const a=Jr(Math.min((i.r-r)/V0,1));let o=0;for(const d of i.hills){const h=Math.hypot(n-d.x,s-d.z);h<d.r&&(o+=d.h*Jr(1-h/d.r))}const l=Math.sin(t*.3)*Math.cos(e*.3)*.5;let c=0;if(i.crater){const d=Math.hypot(n-i.crater.x,s-i.crater.z);d<i.crater.r&&(c=i.crater.depth*Jr(1-d/i.crater.r))}return a*(W0+o+l-c)}function pe(i,t){let e=0;for(const n of Xi)e=Math.max(e,$0(n,i,t));return e}function Va(i,t){return Xi.some(e=>Math.hypot(i-e.x,t-e.z)<e.r+q0)}function Hc(i,t){return pe(i,t)<.25}const xi=[],K0=.45;function j0(i,t,e=K0){let n=i,s=t;for(const r of xi){const a=n-r.x,o=s-r.z,l=r.r+e,c=a*a+o*o;if(c>=l*l)continue;const d=Math.sqrt(c);if(d>1e-4){const h=(l-d)/d;n+=a*h,s+=o*h}else n+=l}return{x:n,z:s}}function Z0(){xi.length=0;const i=new ve;for(const e of Xi)i.add(Q0(e));for(const e of Gc){const n=new et(new gr(e.r,24),new tn({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(e.x,pe(e.x,e.z)+.08,e.z),i.add(n)}const t=vt(10134712);for(let e=0;e<10;e++){const n=e/10*Math.PI*2,s=6+e%3*7,r=2.5+e*7%5,a=new et(new be(.9,1.1,r,10),t);a.position.set(sn.x+Math.cos(n)*s,r/2-1,sn.z+Math.sin(n)*s),a.rotation.z=(e%5-2)*.08,a.castShadow=!0,i.add(a),xi.push({x:a.position.x,z:a.position.z,r:1})}return i.add(J0()),i}function J0(){const i=new ve,t=Pn.x,e=[{x:t-12,z:-26,body:15260864,roof:12606010},{x:t+12,z:-28,body:14207144,roof:3828378},{x:t-20,z:-12,body:14733488,roof:10119738},{x:t+22,z:-14,body:15260864,roof:4885082},{x:t,z:-18,body:15787208,roof:11552840}];for(const a of e){const o=new ve,l=new et(new Le(4.2,3,3.6),vt(a.body));l.position.y=1.5;const c=new et(new on(3.4,2,4),vt(a.roof));c.position.y=3.9,c.rotation.y=Math.PI/4;const d=new et(new Le(.9,1.5,.15),vt(6964002));d.position.set(0,.75,1.85),o.add(l,c,d),jn(o),o.traverse(h=>{h instanceof et&&(h.castShadow=!0)}),o.rotation.y=(a.x+a.z)%5*.18,o.position.set(a.x,pe(a.x,a.z),a.z),i.add(o),xi.push({x:a.x,z:a.z,r:2.3})}const n=t+6,s=vt(10516552),r=vt(6964002);for(let a=0;a<8;a++){const o=-48-a*2.2,l=new et(new Le(3,.25,2),s);if(l.position.set(n,.85,o),l.castShadow=!0,i.add(l),a%2===0)for(const c of[-1.4,1.4]){const d=new et(new be(.14,.16,1.8,8),r);d.position.set(n+c,0,o),d.castShadow=!0,i.add(d),xi.push({x:n+c,z:o,r:.35})}}return i}function Q0(i){const t=new ve,e=i.r*2+14,n=150,s=new yi(e,e,n,n);s.rotateX(-Math.PI/2);const r=s.getAttribute("position"),a=new Float32Array(r.count*3),o=new Gt(i.sand),l=new Gt(i.grass),c=new Gt(i.dark),d=new Gt;for(let f=0;f<r.count;f++){const _=r.getX(f)+i.x,x=r.getZ(f)+i.z,m=pe(_,x);r.setY(f,m),m<.8?d.copy(o):m<1.8?d.lerpColors(o,l,(m-.8)/1):d.lerpColors(l,c,Math.min((m-1.8)/9,1)),a[f*3]=d.r,a[f*3+1]=d.g,a[f*3+2]=d.b}s.setAttribute("color",new Qe(a,3)),s.computeVertexNormals();const h=new et(s,vt(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(i.x,0,i.z),t.add(h);let p=0;for(let f=0;f<300&&p<i.treeCount;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(i.r-6),m=i.x+Math.cos(_)*x,u=i.z+Math.sin(_)*x,E=pe(m,u);E>1.8&&E<11&&(t.add(tg(m,E,u,i.treeColor)),p++)}for(let f=0;f<14;f++){const _=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*(i.r-4),m=i.x+Math.cos(_)*x,u=i.z+Math.sin(_)*x,E=.7+Math.random()*.9,b=new et(new ro(E),vt(9079434));b.position.set(m,pe(m,u)+.3,u),b.rotation.set(Math.random(),Math.random(),Math.random()),b.castShadow=!0,t.add(b),xi.push({x:m,z:u,r:E*.75})}return t}function tg(i,t,e,n){const s=new ve,r=.8+Math.random()*.6,a=new et(new be(.3,.45,3),vt(8016432));a.position.y=1.5;const o=new et(new ao(1.8,1),vt(n));return o.position.y=3.9,o.scale.y=1.15,a.castShadow=!0,o.castShadow=!0,s.add(a,o),s.scale.setScalar(r),s.position.set(i,t-.1,e),xi.push({x:i,z:e,r:.45*r}),s}const Tl=16,Al=10,Rl=1.6,Cl=[4,-63];class eg{constructor(){R(this,"mesh");R(this,"heading",Math.PI);R(this,"speed",0);R(this,"bobPhase",0);this.mesh=new ve;const t=new et(new pi(1.1,2.6,4,10),vt(9067056));t.rotation.x=Math.PI/2,t.scale.set(1,1,.55),t.position.y=.3;const e=new et(new Le(1.7,.15,3.6),vt(11567184));e.position.y=.75;const n=new et(new Yn(1.55,.12,8,20),vt(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const s=new et(new be(.09,.11,3.6),vt(6964002));s.position.set(0,2.4,.3);const r=new et(new yi(1.9,2.4),vt(15788760));r.material.side=je,r.position.set(0,2.6,.28);const a=new et(new be(.05,.05,2),vt(6964002));a.rotation.z=Math.PI/2,a.position.set(0,1.4,.28),this.mesh.add(t,e,n,s,r,a),jn(this.mesh),this.mesh.traverse(o=>{o instanceof et&&(o.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(Cl[0],.3,Cl[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(t,e){this.mesh.position.set(t,.3,e)}sail(t,e,n=1){let s=0;e.isDown("KeyW")?s=Tl*n:e.isDown("KeyS")&&(s=-5),this.speed+=Ms.clamp(s-this.speed,-Al*t,Al*t);const r=.4+.6*Math.min(Math.abs(this.speed)/Tl,1);e.isDown("KeyA")&&(this.heading+=Rl*r*t),e.isDown("KeyD")&&(this.heading-=Rl*r*t);const a=new P(Math.sin(this.heading),0,Math.cos(this.heading)),o=this.mesh.position.clone().addScaledVector(a,this.speed*t);Hc(o.x,o.z)?(this.mesh.position.x=o.x,this.mesh.position.z=o.z):this.speed=0,this.idle(t)}idle(t){this.bobPhase+=t*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let t=2.5;t<=7;t+=1.5)for(let e=0;e<8;e++){const n=e/8*Math.PI*2,s=this.mesh.position.x+Math.sin(n)*t,r=this.mesh.position.z+Math.cos(n)*t;if(pe(s,r)>.3)return new P(s,pe(s,r),r)}return null}}const ng=100,ig=30,sg=10,rg=3;class ag{constructor(){R(this,"level",1);R(this,"exp",0);R(this,"points",0);R(this,"weaponLevel",0);R(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});R(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return ng+this.attrs.hp*10+this.equip.hp}get maxMP(){return ig+this.attrs.spirit*5+this.equip.mp}get atk(){return sg+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(t){this.exp+=t;let e=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=rg,e++;return e}allocate(t){return this.points<=0?!1:(this.points--,this.attrs[t]++,!0)}}const Vc={small:10,medium:50,large:200};class og{constructor(){R(this,"coins",0);R(this,"potions",0);R(this,"crystals",{small:0,medium:0,large:0});R(this,"firstSeaGem",!1);R(this,"secondSeaGem",!1)}useCrystals(t,e){const n=Math.min(e,this.crystals[t]);return this.crystals[t]-=n,n*Vc[t]}}const lg=28,Pl=11,Ll=8,cg=22,hg=.25,ug=.45,Dl=25,dg=22,Il=.38,Ul=.22,fg=9,pg=14,ai=.25,Nl=1.25,Ol=.35,mg=.35,gg=.4,Fl=10,_g=.15,vg=.26,xg=.5,Mg=3.4,yg=Math.cos(75*Math.PI/180),Sg=4.5,fe={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056};class wg{constructor(){R(this,"mesh");R(this,"stats",new ag);R(this,"hp");R(this,"mp");R(this,"stamina",100);R(this,"facing",0);R(this,"blocking",!1);R(this,"hasWindGem",!1);R(this,"windLevel",1);R(this,"hasFrostGem",!1);R(this,"sliding",!1);R(this,"divingZone",null);R(this,"airJumpsUsed",0);R(this,"gliding",!1);R(this,"chillT",0);R(this,"burnT",0);R(this,"burnDps",0);R(this,"burnTickAccum",0);R(this,"knockbackVel",new P);R(this,"velocityY",0);R(this,"grounded",!0);R(this,"attackCd",0);R(this,"swingT",0);R(this,"dodgeT",0);R(this,"invulnT",0);R(this,"lungeT",0);R(this,"spinT",0);R(this,"holdT",0);R(this,"chargeReadyFired",!1);R(this,"walkPhase",0);R(this,"idlePhase",0);R(this,"moveAmount",0);R(this,"renderYaw",0);R(this,"dodgeDir",new P);R(this,"body");R(this,"armL");R(this,"armR");R(this,"forearmL");R(this,"forearmR");R(this,"legL");R(this,"legR");R(this,"shinL");R(this,"shinR");R(this,"shield");R(this,"sword");R(this,"bladeMaterial");R(this,"shieldHomePos",new P(0,1.45,-.46));R(this,"shieldBlockPos",new P(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.mesh=new ve,this.body=new ve,this.mesh.add(this.body),this.legL=this.buildLeg(.17,"L"),this.legR=this.buildLeg(-.17,"R"),this.body.add(this.legL,this.legR);const t=vt(fe.tunic),e=new et(new be(.32,.44,.72,14),t);e.position.y=1.4;const n=new et(new be(.44,.6,.5,14,1,!0),t);n.position.y=.74;const s=new et(new be(.26,.34,.16,14),vt(fe.collar));s.position.y=1.78;const r=new et(new be(.46,.48,.13,14),vt(fe.belt));r.position.y=.98;const a=new et(new Le(.16,.12,.05),vt(fe.gold));a.position.set(0,.98,.47);const o=new et(new Le(.16,.18,.12),vt(fe.glove));o.position.set(.34,.9,.18),this.body.add(e,n,s,r,a,o);const l=new et(new be(.13,.15,.2,10),vt(fe.skin));l.position.y=1.86,this.body.add(l);const c=new et(new Ce(.34,16,14),vt(fe.skin));c.position.y=2.08;const d=new et(new Ce(.37,16,14),vt(fe.hair));d.position.set(0,2.16,-.07),d.scale.set(1,.85,1);const h=new et(new on(.32,.66,14),vt(fe.tunicDark));h.position.set(0,2.54,-.12),h.rotation.x=-.5;const p=new et(new on(.1,.4,10),vt(fe.tunic));p.position.set(0,2.78,-.5),p.rotation.x=-1.5;const f=new et(new Yn(.31,.05,8,16),vt(fe.gold));f.position.set(0,2.28,-.04),f.rotation.x=Math.PI/2,this.body.add(c,d,h,p,f);const _=vt(fe.skin);for(const S of[-1,1]){const N=new et(new on(.09,.26,6),_);N.position.set(.32*S,2.06,-.02),N.rotation.z=S*-1.1,this.body.add(N);const A=new et(new Ce(.12,10,8),vt(fe.hair));A.position.set(.28*S,1.96,-.04),A.scale.set(.7,1.1,.8),this.body.add(A);const g=new et(new Ce(.075,10,8),vt(16777215));g.position.set(.13*S,2.1,.29),g.scale.set(.8,1.1,.6);const I=new et(new Ce(.042,8,6),vt(fe.eye));I.position.set(.13*S,2.09,.34);const w=new et(new Le(.13,.035,.04),vt(fe.brow));w.position.set(.13*S,2.21,.3),w.rotation.z=S*-.12,this.body.add(g,I,w)}const x=new et(new on(.04,.1,6),_);x.position.set(0,2.02,.34),x.rotation.x=Math.PI/2,this.body.add(x),this.armL=this.buildArm(.46,"L"),this.armR=this.buildArm(-.46,"R"),this.armR.add(this.buildSword()),this.body.add(this.armL,this.armR);const m=new ve,u=new et(new be(.42,.46,.07,16),vt(fe.shield));u.rotation.x=Math.PI/2;const E=new et(new Yn(.44,.05,8,16),vt(fe.shieldRim)),b=new et(new vi(.12),vt(fe.gold));b.position.z=-.06,b.scale.set(1,1.4,.4),m.add(u,E,b),m.position.copy(this.shieldHomePos),this.shield=m,this.body.add(m),jn(this.mesh),this.mesh.traverse(S=>{S instanceof et&&(S.castShadow=!0)}),this.respawn()}buildLeg(t,e){const n=new ve,s=new et(new be(.14,.12,.36,10),vt(fe.legs));s.position.y=-.18;const r=new ve;r.position.y=-.36;const a=new et(new be(.12,.1,.32,10),vt(fe.legs));a.position.y=-.16;const o=new et(new Le(.21,.18,.36),vt(fe.boots));o.position.set(0,-.36,.05);const l=new et(new be(.15,.13,.12,10),vt(fe.boots));return l.position.y=-.28,r.add(a,o,l),n.add(s,r),n.position.set(t,.72,0),e==="L"?this.shinL=r:this.shinR=r,n}buildArm(t,e){const n=new ve,s=new et(new Ce(.15,12,10),vt(fe.guard));s.position.y=.02,s.scale.set(1,.8,1);const r=new et(new be(.1,.085,.34,10),vt(fe.tunic));r.position.y=-.18;const a=new ve;a.position.y=-.35;const o=new et(new be(.085,.07,.26,10),vt(fe.skin));o.position.y=-.13;const l=new et(new Yn(.09,.035,8,12),vt(fe.glove));l.position.y=-.02,l.rotation.x=Math.PI/2;const c=new et(new Ce(.1,10,8),vt(fe.glove));return c.position.y=-.25,a.add(o,l,c),n.add(s,r,a),n.position.set(t,1.7,0),e==="L"?this.forearmL=a:this.forearmR=a,n}buildSword(){const t=new ve;this.bladeMaterial=vt(fe.blade,{emissive:6737151,emissiveIntensity:0});const e=new et(new Le(.13,1,.035),this.bladeMaterial);e.position.y=.62;const n=new et(new on(.075,.24,4),this.bladeMaterial);n.position.y=1.24,n.rotation.y=Math.PI/4;const s=new et(new Le(.035,.95,.05),vt(fe.shieldRim));s.position.y=.6;const r=new et(new Le(.4,.09,.09),vt(fe.guard));r.position.y=.1;const a=new et(new on(.06,.16,6),vt(fe.guard));a.position.set(.2,.16,0);const o=a.clone();o.position.x=-.2;const l=new et(new be(.05,.05,.3,8),vt(fe.grip));l.position.y=-.1;const c=new et(new Ce(.08,8,8),vt(fe.gold));return c.position.y=-.28,t.add(e,n,s,r,a,o,l,c),t.position.y=-.58,t.rotation.x=Math.PI/2,this.sword=t,t}get invulnerable(){return this.invulnT>0}get chargeRatio(){return Ms.clamp((this.holdT-ai)/(Nl-ai),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,pe(0,-52),-52)}update(t,e,n){this.attackCd=Math.max(0,this.attackCd-t),this.invulnT=Math.max(0,this.invulnT-t),this.swingT=Math.max(0,this.swingT-t),this.dodgeT=Math.max(0,this.dodgeT-t),this.lungeT=Math.max(0,this.lungeT-t),this.spinT=Math.max(0,this.spinT-t),this.chillT=Math.max(0,this.chillT-t);const s=this.stats.speedMultiplier,r=new P;let a=!1,o=!1;if(this.blocking=e.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)r.copy(this.dodgeDir).multiplyScalar(cg*t);else{const x=new P(-Math.sin(n),0,-Math.cos(n)),m=new P(-x.z,0,x.x);if(e.isDown("KeyW")&&r.add(x),e.isDown("KeyS")&&r.sub(x),e.isDown("KeyD")&&r.add(m),e.isDown("KeyA")&&r.sub(m),r.lengthSq()>0){r.normalize(),this.facing=Math.atan2(r.x,r.z);const u=(this.blocking?mg:this.holdT>ai?gg:1)*(this.chillT>0?xg:1);r.multiplyScalar(Ll*s*u*t)}if((e.wasPressed("ShiftLeft")||e.wasPressed("ShiftRight"))&&this.stamina>=Dl){o=!0,this.holdT=0,this.chargeReadyFired=!1;const u=r.lengthSq()>0?r.clone().normalize():new P(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(u),this.dodgeT=hg,this.invulnT=ug,this.stamina-=Dl}}if(this.lungeT>0&&r.addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),fg*t),this.stamina=Math.min(100,this.stamina+dg*t),this.moveAmount=r.length()/Math.max(t,1e-6)/Ll,this.sliding=!1,this.grounded){const x=this.mesh.position.x,m=this.mesh.position.z,u=.6,E=(pe(x+u,m)-pe(x-u,m))/(2*u),b=(pe(x,m+u)-pe(x,m-u))/(2*u),S=Math.hypot(E,b);S>.85&&(this.sliding=!0,r.x+=-E/S*6.5*t,r.z+=-b/S*6.5*t)}this.knockbackVel.lengthSq()>.01?(r.addScaledVector(this.knockbackVel,t),this.knockbackVel.multiplyScalar(Math.max(1-t*6,0))):this.knockbackVel.set(0,0,0);const l=this.mesh.position.clone().add(r),c=j0(l.x,l.z);l.x=c.x,l.z=c.z,(Va(l.x,l.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(l.x-this.divingZone.x,l.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=l.x,this.mesh.position.z=l.z),e.wasPressed("Space")&&(this.grounded?(this.velocityY=Pl,this.grounded=!1,a=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=Pl*.9,a=!0)),this.velocityY-=lg*t,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&e.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*t;const h=pe(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let p=!1,f=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,e.consumeLeftRelease();else if(e.leftDown&&(this.holdT+=t,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),e.consumeLeftRelease()){const x=this.holdT;this.holdT=0,this.chargeReadyFired=!1,x>ai?(f=this.chargeRatioFor(x),this.spinT=Ol,this.attackCd=Il/s):this.attackCd<=0&&(this.attackCd=Il/s,this.swingT=Ul,this.lungeT=.12,p=!0)}return this.animate(t),{attacked:p,spin:f,chargeReady:_,jumped:a,dodged:o}}chargeRatioFor(t){return Ms.clamp((t-ai)/(Nl-ai),0,1)}animate(t){let e=this.facing-this.renderYaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;this.renderYaw+=e*Math.min(pg*t,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=t*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=t*11*Math.min(this.moveAmount,1.4));const s=this.dodgeT>0,r=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=s?1.4:r,this.legR.rotation.x=s?1.4:-r,this.shinL.rotation.x=s?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=s?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:s?-1.6:-r*.8,this.forearmL.rotation.x=this.blocking?-.7:s?-1.4:-.25-Math.max(0,-r)*.5;const a=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(a,Math.min(t*14,1));const o=this.holdT>ai;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/Ul;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else o?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=r*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||o?0:s?-1.4:-.2-Math.max(0,r)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const l=this.chargeRatio;if(l>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new Gt(16777215),h)}else this.bladeMaterial.emissiveIntensity=l*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/Ol)*Math.PI*2:0;const c=n?Math.abs(Math.sin(this.walkPhase))*.07:0,d=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=c+d,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(t,e){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&e&&this.stamina>=Fl){const s=new P().subVectors(e,this.mesh.position).setY(0).normalize(),r=new P(Math.sin(this.facing),0,Math.cos(this.facing));if(s.dot(r)>vg){this.stamina-=Fl;const a=Math.max(1,Math.round((t-this.stats.def)*_g));return this.hp=Math.max(0,this.hp-a),this.invulnT=.25,{taken:a,blocked:!0}}}const n=Math.max(1,t-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,{taken:n,blocked:!1}}applyEnvironmentDamage(t){this.isDead||(this.hp=Math.max(0,this.hp-t))}chill(t){this.isDead||(this.chillT=Math.max(this.chillT,t))}applyBurn(t,e){this.isDead||(this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e))}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(t,e){if(this.isDead)return;const n=new P().subVectors(this.mesh.position,t).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(e)}blinkTo(t,e){this.mesh.position.set(t,pe(t,e),e),this.invulnT=Math.max(this.invulnT,.3)}}const Eg={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},bg=1.5,zl=.45,Bl=12,Tg=3.2,Ag=20,Rg=25,Cg=.45,Pg=.35,Lg=14,Dg=1.7,kl=.8,Gl=.3,Ig={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}};class St{constructor(t,e,n){R(this,"mesh");R(this,"kind");R(this,"hp");R(this,"state","patrol");R(this,"config");R(this,"home");R(this,"waypoint");R(this,"attackCd",0);R(this,"stateT",0);R(this,"respawnT",0);R(this,"flashT",0);R(this,"freezeT",0);R(this,"burnT",0);R(this,"burnDps",0);R(this,"burnTickAccum",0);R(this,"stunT",0);R(this,"specialEvent",null);R(this,"specialPhase","");R(this,"hopPhase",Math.random()*Math.PI*2);R(this,"lungeDir",new P);R(this,"lungeHitDone",!1);R(this,"knockback",new P);R(this,"baseColor");R(this,"body");R(this,"blob");R(this,"blobMaterial");R(this,"hpBar");R(this,"hpCanvas");R(this,"hpTexture");R(this,"special");R(this,"specialCd",0);R(this,"specialRing",null);R(this,"specialRingMat",null);R(this,"specialRingT",0);this.kind=t,this.config=Ig[t],this.hp=this.config.hp,this.home=new P(e,0,n),this.waypoint=this.home.clone(),this.baseColor=new Gt(this.config.color),this.special=Eg[t]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new ve,this.body=new ve,this.mesh.add(this.body);const s=this.config.scale>=1.8,r=new Gt(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=vt(this.config.color,{transparent:!0,opacity:.86}),this.blob=new et(new Ce(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const a=new et(new on(.26,s?.6:.45,10),vt(this.config.color,{transparent:!0,opacity:.86}));if(a.position.y=s?1.42:1.35,a.rotation.z=.12,this.body.add(this.blob,a),s){const _=vt(r);for(const x of[-1,1]){const m=new et(new on(.13,.5,8),_);m.position.set(.42*x,1.18,-.05),m.rotation.z=x*-.7,this.body.add(m)}}const o=vt(16777215),l=vt(2105392),c=vt(r),d=s?.2:.17;for(const _ of[-1,1]){const x=new et(new Ce(d,12,10),o);x.position.set(.3*_,.82,.6),x.scale.set(.85,1.05,.7);const m=new et(new Ce(d*.5,8,6),l);m.position.set(.3*_+.02*_,.8,.74);const u=new et(new Le(.26,.07,.07),c);u.position.set(.3*_,1.04,.62),u.rotation.z=_*(s?.5:.15),this.body.add(x,m,u)}const h=new et(new Ce(s?.22:.12,12,8),vt(3151904));h.position.set(0,s?.5:.54,.66),h.scale.set(1.3,s?.8:.45,.5),this.body.add(h),jn(this.body),this.body.traverse(_=>{_ instanceof et&&(_.castShadow=!0)});const p=new et(new Ce(.42,12,10),vt(r,{transparent:!0,opacity:.55}));p.position.y=.58,p.raycast=()=>{},this.body.add(p);const f=new et(new Ce(.22,10,8),new tn({color:16777215,transparent:!0,opacity:.4}));f.position.set(-.28,.95,.42),f.scale.set(1.2,.7,.6),f.raycast=()=>{},this.body.add(f),this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new Du(this.hpCanvas),this.hpBar=new Dc(new Pc({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(e,pe(e,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}update(t,e,n){if(this.state==="dead")return this.respawnT-=t,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=t;const l=1-Math.max(this.stateT,0)/Gl,c=l<.4?1+l*.9:Math.max(1.36*(1-(l-.4)/.6),.01);return this.body.scale.setScalar(c),this.stateT<=0&&(this.state="dead",this.respawnT=Rg,this.mesh.visible=!1),0}if(this.attackCd=Math.max(0,this.attackCd-t),this.specialCd=Math.max(0,this.specialCd-t),this.flashT=Math.max(0,this.flashT-t),this.freezeT>0)return this.freezeT-=t,this.blobMaterial.color.lerpColors(this.baseColor,new Gt(12577535),.75),0;if(this.stunT>0){this.stunT-=t;const l=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.blobMaterial.color.lerpColors(this.baseColor,new Gt(16773248),l),0}const s=this.mesh.position,r=s.distanceTo(e),a=s.distanceTo(this.home);let o=0;switch(this.knockback.lengthSq()>.01&&(s.addScaledVector(this.knockback,t),this.knockback.multiplyScalar(Math.max(1-t*8,0))),this.state){case"windup":{this.stateT-=t,this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25,this.stateT<=0&&(this.lungeDir.subVectors(e,s).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=Pg);break}case"lunge":{this.stateT-=t,s.addScaledVector(this.lungeDir,Lg*t),this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&r<Dg&&(this.lungeHitDone=!0,o=this.config.dmg),this.stateT<=0&&(this.state="recover",this.stateT=kl);break}case"recover":{this.stateT-=t,this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const l=this.special;if(this.stateT-=t,this.specialPhase==="telegraph"){const c=1-Math.max(this.stateT,0)/l.telegraph;if(this.body.scale.setScalar(1+c*.25),this.updateRing(c,!0),this.stateT<=0){const d=!n&&r<=l.radius,h=Math.round(this.config.dmg*l.dmgMul);let p=0;d&&l.effect==="drain"&&(p=Math.min(this.config.hp-this.hp,Math.round(h*bg)),p>0&&(this.hp+=p,this.drawHpBar())),this.specialEvent={name:l.name,sfx:l.sfx,color:l.color,dmg:h,knock:l.knock,effect:l.effect,hitPlayer:d,healed:p},this.specialPhase="blast",this.specialRingT=0,this.stateT=zl,this.body.scale.setScalar(1)}}else this.specialRingT+=t,this.updateRing(this.specialRingT/zl,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=kl);break}default:{if(n)this.state="patrol";else if(a>Ag)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&r<=Bl&&r<=this.special.radius+2){this.startSpecial();break}else if(r<=Tg&&this.attackCd<=0){this.state="windup",this.stateT=Cg,this.attackCd=1.8;break}else r<=Bl?this.state="chase":this.state="patrol";const l=this.state==="chase"?e:this.waypoint;this.state==="patrol"&&s.distanceTo(this.waypoint)<1&&this.pickWaypoint();const c=new P().subVectors(l,s);c.y=0;const d=this.state==="chase"?this.config.speed:this.config.speed*.5;c.lengthSq()>.01&&(c.normalize(),s.addScaledVector(c,d*t),this.mesh.rotation.y=Math.atan2(c.x,c.z)),this.hopPhase+=t*(this.state==="chase"?9:5);const h=Math.abs(Math.sin(this.hopPhase));this.body.position.y=h*.35,this.body.scale.y=.8+h*.3,this.body.scale.x=this.body.scale.z=1.1-h*.15;break}}return this.flashT>0?this.blobMaterial.color.setHex(16777215):this.state==="windup"?this.blobMaterial.color.lerpColors(this.baseColor,new Gt(16733508),.55):this.blobMaterial.color.copy(this.baseColor),this.burnT>0&&this.flashT<=0&&this.blobMaterial.color.lerp(new Gt(16738860),.5),s.y=pe(s.x,s.z),o}freeze(t){this.isDead||(this.freezeT=Math.max(this.freezeT,t))}burn(t,e){this.isDead||(this.burnT=Math.max(this.burnT,t),this.burnDps=Math.max(this.burnDps,e))}stun(t){this.isDead||(this.stunT=Math.max(this.stunT,t))}get specialSkill(){var t;return((t=this.special)==null?void 0:t.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const t=new tn({color:this.special.color,transparent:!0,opacity:.4,side:je,depthWrite:!1}),e=new et(new _r(.62,1,48),t);e.rotation.x=-Math.PI/2,e.position.y=.12,e.raycast=()=>{},this.mesh.add(e),this.specialRing=e,this.specialRingMat=t}updateRing(t,e){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(e)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(t*Math.PI*6));else{const s=(.15+.95*Math.min(t,1))*n;this.specialRing.scale.set(s,s,s),this.specialRingMat.opacity=.7*(1-Math.min(t,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(t){return this.burnT<=0||this.isDead?0:(this.burnT-=t,this.burnTickAccum+=t,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(t,e){return this.isDead?!1:(this.hp=Math.max(0,this.hp-t),this.flashT=.12,e&&this.knockback.copy(e).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=Gl,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),!0):!1)}revive(){this.hp=this.config.hp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,pe(this.home.x,this.home.z),this.home.z),this.drawHpBar()}pickWaypoint(){const t=Math.random()*Math.PI*2,e=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(t)*e,0,this.home.z+Math.sin(t)*e)}drawHpBar(){const t=this.hpCanvas.getContext("2d");t&&(t.clearRect(0,0,96,18),t.fillStyle="rgba(0,0,0,0.65)",t.fillRect(0,0,96,18),t.fillStyle="#e74c3c",t.fillRect(1,1,94*(this.hp/this.config.hp),16),t.font="bold 12px sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=3,t.strokeStyle="rgba(0,0,0,0.8)",t.strokeText(`${this.hp}/${this.config.hp}`,48,10),t.fillStyle="#fff",t.fillText(`${this.hp}/${this.config.hp}`,48,10),this.hpTexture.needsUpdate=!0)}}const Ug=3.5;class Rn{constructor(t,e,n,s,r,a="talk"){R(this,"mesh");R(this,"idlePhase",Math.random()*Math.PI*2);R(this,"body");this.name=t,this.linesProvider=r,this.role=a,this.mesh=new ve,this.body=new ve,this.mesh.add(this.body);const o=new et(new be(.28,.52,1.5,12),vt(s));o.position.y=.78;const l=new et(new Ce(.32,14,12),vt(15911328));l.position.y=1.85;const c=new et(new on(.62,.3,14),vt(14202976));c.position.y=2.12,this.body.add(o,l,c),jn(this.body),this.body.traverse(d=>{d instanceof et&&(d.castShadow=!0)}),this.mesh.position.set(e,pe(e,n),n)}getLines(){return this.linesProvider()}update(t,e){this.idlePhase+=t*2,this.body.position.y=Math.sin(this.idlePhase)*.025;const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z,r=Math.hypot(n,s);return r<6&&(this.mesh.rotation.y=Math.atan2(n,s)),r<Ug}}const Ng=6,Og=.9,Fg=9,zg={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class Lt{constructor(t,e,n){R(this,"mesh");R(this,"kind");R(this,"bobPhase",Math.random()*Math.PI*2);R(this,"baseY");if(this.kind=t,t==="coin")this.mesh=new et(new be(.22,.22,.06,12),vt(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(t==="gem-flame"||t==="gem-wind"||t==="gem-earth"||t==="gem-frost"||t==="gem-tide"||t==="gem-void"||t==="gem-lava"||t==="gem-aqua"||t==="gem-life"){const o={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[t];this.mesh=new et(new vi(.75),vt(o,{emissive:o,emissiveIntensity:.9}))}else if(t==="fruit-thunder"||t==="fruit-gravity"){const o={"fruit-thunder":16773216,"fruit-gravity":11559167}[t];this.mesh=new et(new Ce(.6,16,14),vt(o,{emissive:o,emissiveIntensity:.9}))}else{const a=zg[t];this.mesh=new et(new vi(a.size),vt(a.color,{emissive:a.color,emissiveIntensity:.5}))}const s=e+(Math.random()-.5)*1.6,r=n+(Math.random()-.5)*1.6;this.baseY=pe(s,r)+.7,this.mesh.position.set(s,this.baseY,r)}update(t,e){this.bobPhase+=t*3,this.mesh.rotation.y+=t*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z,r=Math.hypot(n,s);if(r<Ng&&r>.01){const a=Math.min(Fg*t/r,1);this.mesh.position.x+=n*a,this.mesh.position.z+=s*a}return r<Og}}const Bg=1.8;class us{constructor(t,e,n,s={}){R(this,"mesh");R(this,"damage");R(this,"freezes");R(this,"burns");R(this,"leech");R(this,"life");R(this,"lifetime");R(this,"speed");R(this,"direction");R(this,"material");R(this,"hitEnemies",new Set);this.damage=n,this.freezes=s.freezes??!1,this.burns=s.burns??!1,this.leech=s.leech??0,this.lifetime=s.lifetime??.9,this.speed=s.speed??22,this.life=this.lifetime,this.direction=new P(Math.sin(e),0,Math.cos(e)),this.material=new tn({color:s.color??8382719,transparent:!0,opacity:.85,side:je});const r=Math.PI*.95;this.mesh=new et(new Yn(1.2,.16,8,20,r),this.material),this.mesh.position.copy(t),this.mesh.position.y=pe(t.x,t.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,e,-Math.PI/2-r/2)}get expired(){return this.life<=0}update(t,e){if(this.life-=t,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*t),this.mesh.position.y=pe(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9),this.material.opacity=.85*(1-n*.7);const s=[];for(const r of e){if(r.isDead||this.hitEnemies.has(r))continue;const a=r.mesh.position.x-this.mesh.position.x,o=r.mesh.position.z-this.mesh.position.z;Math.hypot(a,o)<Bg*this.mesh.scale.x&&(this.hitEnemies.add(r),s.push(r))}return s}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const Hl=16,Vl=18,kg=16,Gg=9,Hg=.7,Wl=8,ql=.3,ho=2,Vg=["thunder","gravity"],Xl=[500,1100],Yl=3;function Wc(i){return 1+.5*(i-1)}function Wg(i,t=1){return Math.round((20+i*2)*Wc(t))}function qg(i=1){return 2+i}function Xg(i=1){return .3+.3*i}function Yg(i,t=1){return Math.round((10+i)*Wc(t))}function $g(i=1){return 5+i}function Kg(i=1){return 1+.5*i}class jg{constructor(){R(this,"thunderOwned",!1);R(this,"gravityOwned",!1);R(this,"levels",{thunder:1,gravity:1});R(this,"equipped",[])}ownedOf(t){return t==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<ho}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const Zg=6;class Jg{constructor(t,e,n,s,r){R(this,"mesh");R(this,"damage");R(this,"center");R(this,"radius");R(this,"life");R(this,"tickT",0);R(this,"spin",0);R(this,"ring");R(this,"core");R(this,"ringMaterial");R(this,"coreMaterial");this.center=new P(t,pe(t,e)+.4,e),this.radius=n,this.life=s,this.damage=r,this.mesh=new ve,this.ringMaterial=new tn({color:10119912,transparent:!0,opacity:.5,side:je}),this.ring=new et(new Yn(n,.4,8,32),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.coreMaterial=new tn({color:14201087,transparent:!0,opacity:.8}),this.core=new et(new Ce(.8,12,10),this.coreMaterial),this.mesh.add(this.ring,this.core),this.mesh.position.copy(this.center)}get expired(){return this.life<=0}update(t,e){this.life-=t,this.spin+=t*6,this.mesh.rotation.y=this.spin;const n=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(n);const s=Math.min(this.life,1);this.ringMaterial.opacity=.5*s,this.coreMaterial.opacity=.8*s;for(const r of e){if(r.isDead)continue;const a=this.center.x-r.mesh.position.x,o=this.center.z-r.mesh.position.z,l=Math.hypot(a,o);if(l>this.radius||l<.6)continue;const c=Math.min(Zg*t,l-.5);r.mesh.position.x+=a/l*c,r.mesh.position.z+=o/l*c}if(this.tickT+=t,this.tickT>=ql){this.tickT-=ql;const r=[];for(const a of e){if(a.isDead)continue;Math.hypot(this.center.x-a.mesh.position.x,this.center.z-a.mesh.position.z)<=this.radius&&r.push(a)}return r}return[]}dispose(){this.ring.geometry.dispose(),this.core.geometry.dispose(),this.ringMaterial.dispose(),this.coreMaterial.dispose()}}class Qg{constructor(t){R(this,"group");R(this,"life");R(this,"lifetime",.28);R(this,"material");this.life=this.lifetime,this.group=new ve,this.material=new so({color:12577023,transparent:!0,opacity:.95});for(let e=0;e<t.length-1;e++){const n=new ze().setFromPoints(t_(t[e],t[e+1]));this.group.add(new Ga(n,this.material))}}get expired(){return this.life<=0}update(t){this.life-=t,this.material.opacity=.95*Math.max(this.life/this.lifetime,0)}dispose(){this.group.traverse(t=>{t instanceof Ga&&t.geometry.dispose()}),this.material.dispose()}}function t_(i,t){const e=[],s=new P().subVectors(t,i),r=new P(-s.z,0,s.x).normalize();for(let a=0;a<=6;a++){const o=new P().lerpVectors(i,t,a/6);a>0&&a<6&&(o.addScaledVector(r,(Math.random()-.5)*1.2),o.y+=(Math.random()-.5)*.8),e.push(o)}return e}function e_(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.hostname}:8787`}class n_{constructor(t){R(this,"ws",null);R(this,"cb");R(this,"localId",null);this.cb=t}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}connect(){let t;try{t=new WebSocket(e_())}catch(n){console.warn("[net] 無法建立連線,維持單機:",n);return}this.ws=t,t.addEventListener("open",()=>{var n,s;(s=(n=this.cb).onStatus)==null||s.call(n,!0)}),t.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}switch(s.t){case"welcome":this.localId=s.id;for(const r of s.others)this.cb.onState(r.id,r.state);break;case"state":this.cb.onState(s.id,s.state);break;case"join":break;case"leave":this.cb.onLeave(s.id);break}});const e=()=>{var n,s;this.ws===t&&(this.ws=null,this.localId=null,(s=(n=this.cb).onStatus)==null||s.call(n,!1))};t.addEventListener("close",e),t.addEventListener("error",e)}sendState(t){this.connected&&this.ws.send(JSON.stringify({t:"state",state:t}))}}const $l=[4891647,16747068,12086271,16765500,3985568,16739229];function i_(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return $l[Math.abs(t)%$l.length]}class s_{constructor(t,e){R(this,"mesh");R(this,"legL");R(this,"legR");R(this,"targetPos",new P);R(this,"targetFacing",0);R(this,"moving",!1);R(this,"walkPhase",0);R(this,"renderYaw",0);const n=i_(t);this.mesh=new ve;const s=vt(n),r=vt(15910810),a=new et(new be(.3,.42,.8,12),s);a.position.y=1.35;const o=new et(new Ce(.26,14,12),r);o.position.y=1.95;const l=new et(new pi(.1,.5,4,8),s);l.position.set(.42,1.4,0);const c=new et(new pi(.1,.5,4,8),s);c.position.set(-.42,1.4,0),this.legL=new ve,this.legL.position.set(.16,.9,0);const d=new et(new pi(.12,.7,4,8),s);d.position.y=-.4,this.legL.add(d),this.legR=new ve,this.legR.position.set(-.16,.9,0);const h=new et(new pi(.12,.7,4,8),s);h.position.y=-.4,this.legR.add(h),this.mesh.add(a,o,l,c,this.legL,this.legR),this.mesh.traverse(p=>{p instanceof et&&(p.castShadow=!0)}),jn(this.mesh),this.targetPos.set(e.x,e.y,e.z),this.targetFacing=e.facing,this.renderYaw=e.facing,this.moving=e.moving,this.mesh.position.copy(this.targetPos),this.mesh.rotation.y=this.renderYaw}setState(t){this.targetPos.set(t.x,t.y,t.z),this.targetFacing=t.facing,this.moving=t.moving}update(t){const e=1-Math.exp(-12*t);this.mesh.position.lerp(this.targetPos,e);let n=this.targetFacing-this.renderYaw;if(n=Math.atan2(Math.sin(n),Math.cos(n)),this.renderYaw+=n*e,this.mesh.rotation.y=this.renderYaw,this.moving){this.walkPhase+=t*9;const s=Math.sin(this.walkPhase)*.5;this.legL.rotation.x=s,this.legR.rotation.x=-s}else this.legL.rotation.x*=1-e,this.legR.rotation.x*=1-e}dispose(){var t;(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh.traverse(e=>{e instanceof et&&e.geometry.dispose()})}}const Kl=10,jl=15,r_=6,Zl=12,a_=4,Qr=8,o_=8,Jl=14,l_=3,Ql=16,c_=7,tc=14,uo=4,h_=["flame","wind","earth","frost","tide","void","lava","aqua","life"],ec=[400,900],nc=3;function es(i){return 1+.5*(i-1)}function u_(i,t=1){return Math.round((18+i*2)*es(t)*1.4)}function d_(i,t=1){return Math.round((25+i*2)*es(t))}function f_(i=1){return r_+(i-1)}function p_(i,t=1){return Math.round((20+i*2)*es(t))}function m_(i=1){return 1.5+i}function g_(i=1){return o_+3*(i-1)}function __(i,t=1){return Math.round((22+i*2)*es(t)*1.4)}function v_(i=1){return 8+4*(i-1)}function x_(i,t=1){return Math.round((20+i*2)*es(t)*1.35)}function M_(i=1){return 2+.7*(i-1)}function y_(i=1){return c_+(i-1)}function S_(i,t=1){return Math.round((18+i*2)*es(t)*1.5)}function w_(i=1){return .4+.1*(i-1)}class E_{constructor(){R(this,"flameOwned",!1);R(this,"windOwned",!1);R(this,"earthOwned",!1);R(this,"frostOwned",!1);R(this,"tideOwned",!1);R(this,"voidOwned",!1);R(this,"lavaOwned",!1);R(this,"aquaOwned",!1);R(this,"lifeOwned",!1);R(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});R(this,"equipped",[])}ownedOf(t){switch(t){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(t){return this.equipped.includes(t)}hasFreeSlot(){return this.equipped.length<uo}equip(t){return!this.ownedOf(t)||this.isEquipped(t)||!this.hasFreeSlot()?!1:(this.equipped.push(t),!0)}unequip(t){this.equipped=this.equipped.filter(e=>e!==t)}}const Wa=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function qa(i){return Wa.find(t=>t.id===i)}class b_{constructor(){R(this,"owned",[]);R(this,"equipped",{})}has(t){return this.owned.includes(t)}equip(t){const e=qa(t);if(!(!e||!this.has(t)))if(e.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=t}else this.equipped[e.slot]=t}unequip(t){delete this.equipped[t]}slotOf(t){for(const[e,n]of Object.entries(this.equipped))if(n===t)return e;return null}totalBonus(){const t={atk:0,def:0,hp:0,mp:0,agi:0};for(const e of Object.values(this.equipped)){const n=qa(e);n&&(t.atk+=n.bonus.atk??0,t.def+=n.bonus.def??0,t.hp+=n.bonus.hp??0,t.mp+=n.bonus.mp??0,t.agi+=n.bonus.agi??0)}return t}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(t){this.owned=[...t.owned],this.equipped={...t.equipped}}}const ci=5,mi={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class T_{constructor(){R(this,"states",{});R(this,"slimeKills",0);R(this,"jellyBaseline",0);R(this,"huntKills",{});R(this,"huntBaselines",{})}get(t){return this.states[t]??null}accept(t){if(this.states[t]||(this.states[t]="active"),t==="jelly"&&(this.jellyBaseline=this.slimeKills),t in mi){const e=t;this.huntBaselines[e]=this.huntKills[mi[e].kind]??0}}complete(t){this.states[t]="done"}addKill(t){this.huntKills[t]=(this.huntKills[t]??0)+1}killsOf(t){return this.huntKills[t]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,ci)}huntProgress(t){const e=(this.huntKills[mi[t].kind]??0)-(this.huntBaselines[t]??0);return Math.min(e,mi[t].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(t){this.states={...t.states},this.slimeKills=t.kills,this.jellyBaseline=t.base,this.huntKills={...t.huntKills??{}},this.huntBaselines={...t.huntBases??{}}}}const qc="archipelago-save-v1";function A_(i){try{localStorage.setItem(qc,JSON.stringify(i))}catch{}}function R_(){try{const i=localStorage.getItem(qc);if(!i)return null;const t=JSON.parse(i);return t.v!==1?null:t}catch{return null}}const C_=`
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
`;class P_{constructor(t){R(this,"hpFill");R(this,"mpFill");R(this,"stFill");R(this,"xpFill");R(this,"levelText");R(this,"coinText");R(this,"crystalText");R(this,"toast");R(this,"deathOverlay");R(this,"toastTimer",null);this.onRespawn=t;const e=document.createElement("style");e.textContent=C_,document.head.appendChild(e);const n=document.createElement("div");n.id="hud",n.innerHTML=`
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
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast")}update(t,e){const n=t.stats;this.hpFill.style.width=`${t.hp/n.maxHP*100}%`,this.mpFill.style.width=`${t.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(t.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(t.mp)} / ${n.maxMP}`,this.stFill.style.width=`${t.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${e.coins}`;const s=e.crystals.small+e.crystals.medium+e.crystals.large;this.crystalText.textContent=`💎 ${s}`,this.byId("hud-potion").textContent=String(e.potions)}setGems(t){const e=[];t.isEquipped("flame")&&e.push("🔥 焰心石｜E 火焰斬(10 靈力)"),t.isEquipped("wind")&&e.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔"),t.isEquipped("earth")&&e.push("🪨 地殼石｜C 地震波(15 靈力)"),t.isEquipped("frost")&&e.push("❄️ 霜語晶｜V 冰箭(12 靈力)/海上行走耗靈力"),t.isEquipped("tide")&&e.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)"),t.isEquipped("void")&&e.push("🌀 虛空石｜X 瞬移(8 靈力)"),t.isEquipped("lava")&&e.push("🌋 溶岩石｜G 熔岩噴發(14 靈力,灼燒)"),t.isEquipped("aqua")&&e.push("💧 碧波石｜B 碧波震盪(16 靈力,凍結周圍)"),t.isEquipped("life")&&e.push("🌿 翠生石｜H 生命汲取(14 靈力,吸血)");const n=this.byId("hud-gem");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setFruits(t){const e=[];t.isEquipped("thunder")&&e.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),t.isEquipped("gravity")&&e.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",e.length>0),n.innerHTML=e.join("<br/>")}setTalkPrompt(t,e="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",t),t&&(n.textContent=e)}setEnv(t){const e=this.byId("hud-env");e.textContent!==t&&(e.textContent=t)}setOnline(t,e){const n=this.byId("hud-net");n.textContent=t?`🌐 連線中 · 同行 ${e} 人`:""}setQuests(t){this.byId("hud-quests").classList.toggle("show",t.length>0),this.byId("hud-quest-list").innerHTML=t.map(e=>`<div>${e}</div>`).join("")}showToast(t){this.toast.textContent=t,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(t,e=[]){if(t){const n=this.byId("death-options");n.innerHTML="";const s=[{id:"beach",label:"在曙光嶼海灘重生"},...e];for(const r of s){const a=document.createElement("button");a.textContent=r.label,a.dataset.respawn=r.id,r.id!=="beach"&&a.classList.add("shrine"),a.addEventListener("click",()=>this.onRespawn(r.id)),n.appendChild(a)}}this.deathOverlay.classList.toggle("show",t)}byId(t){const e=document.getElementById(t);if(!e)throw new Error(`HUD 元素遺失: ${t}`);return e}}const L_=`
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
`,ic={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},sc={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"};class D_{constructor(t,e,n,s,r,a,o,l,c,d,h,p){R(this,"root");R(this,"visible",!1);R(this,"teleportOpen",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=s,this.equipment=r,this.onUseCrystal=a,this.onAllocate=o,this.onEquipChange=l,this.onUseSeaGem=c,this.getShrineTargets=d,this.onTeleportShrine=h,this.onLoadoutChange=p;const f=document.createElement("style");f.textContent=L_,document.head.appendChild(f),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var p;if(!this.visible)return;const t=this.stats,e=Object.keys(ic).map(f=>{const _=this.inventory.crystals[f];return`<div class="item">
          <span>${ic[f]} ×${_} <span class="muted">(${Vc[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${_===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${_===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=t.points>0?Object.keys(sc).map(f=>`<div class="item">
                <span>${sc[f]} <span class="muted">目前 ${t.attrs[f]}</span></span>
                <button data-alloc="${f}">+1</button>
              </div>`).join(""):'<div class="muted">升級後可在此分配能力點數</div>',s=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],r=!this.gems.hasFreeSlot(),a=s.map(([f,_,x])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.gems.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-gemtoggle="${f}" ${!u&&r?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),o=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],l=!this.fruits.hasFreeSlot(),c=o.map(([f,_,x])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const u=this.fruits.isEquipped(f);return`<div class="gem-slot ${u?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${u?"on":""}" data-fruittoggle="${f}" ${!u&&l?"disabled":""}>${u?"✅ 出戰":"裝備"}</button></div>`}).join(""),d=[];this.inventory.firstSeaGem&&d.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&d.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const h=this.equipment.owned.map(f=>{const _=qa(f);if(!_)return"";const x=this.equipment.slotOf(f);return`<div class="item">
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
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${uo})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石,只有出戰中的技能與被動才生效</div>
        <div class="gems">${a}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${ho})</h3><div class="gems">${c}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${n}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.use;this.onUseCrystal(_,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(p=this.root.querySelector("button[data-tp-open]"))==null||p.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.gemtoggle;this.gems.isEquipped(_)?this.gems.unequip(_):this.gems.equip(_),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.fruittoggle;this.fruits.isEquipped(_)?this.fruits.unequip(_):this.fruits.equip(_),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const t=this.getShrineTargets();return`${t.length>0?t.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const I_=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class U_{constructor(){R(this,"root");R(this,"nameEl");R(this,"textEl");R(this,"lines",[]);R(this,"index",0);R(this,"visible",!1);const t=document.createElement("style");t.textContent=I_,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(t,e){e.length!==0&&(this.lines=e,this.index=0,this.visible=!0,this.nameEl.textContent=t,this.textEl.textContent=e[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const N_=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,rc=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class O_{constructor(t,e,n){R(this,"root");R(this,"visible",!1);this.inventory=t,this.equipment=e,this.onBuy=n;const s=document.createElement("style");s.textContent=N_,document.head.appendChild(s),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=rc.map(n=>{const s=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${s?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),e=Wa.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${t}
      <h3 style="margin-top:14px;">裝備</h3>
      ${e||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const s=rc.find(r=>r.id===n.dataset.buy);!s||this.inventory.coins<s.price||(this.inventory.coins-=s.price,s.id==="potion"?this.inventory.potions++:this.inventory.crystals[s.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const s=Wa.find(r=>r.id===n.dataset.buyequip);!s||this.equipment.has(s.id)||this.inventory.coins<s.price||(this.inventory.coins-=s.price,this.equipment.owned.push(s.id),this.onBuy(),this.render())})})}}const F_=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,ac=[100,250,500,800,1200];class z_{constructor(t,e,n,s,r,a,o){R(this,"root");R(this,"visible",!1);this.inventory=t,this.stats=e,this.gems=n,this.fruits=s,this.onUpgrade=r,this.onGemUpgrade=a,this.onFruitUpgrade=o;const l=document.createElement("style");l.textContent=F_,document.head.appendChild(l),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const t=this.stats.weaponLevel,e=t>=ac.length,n=e?0:ac[t],r=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.gems.levels[c],p=h>=nc,f=p?0:ec[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${d} Lv.${h}</span>
          <button data-gemup="${c}" ${p||this.inventory.coins<f?"disabled":""}>
            ${p?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join(""),o=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,c])=>c).map(([c,d])=>{const h=this.fruits.levels[c],p=h>=Yl,f=p?0:Xl[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
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
    `;const l=this.root.querySelector("#forge-btn");l==null||l.addEventListener("click",()=>{e||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.gemup,h=this.gems.levels[d];if(h>=nc)return;const p=ec[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.gems.levels[d]++,this.onGemUpgrade(d),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.fruitup,h=this.fruits.levels[d];if(h>=Yl)return;const p=Xl[h-1];this.inventory.coins<p||(this.inventory.coins-=p,this.fruits.levels[d]++,this.onFruitUpgrade(d),this.render())})})}}const Xc="archipelago-settings-v1",ta={volume:1,music:!0,deathDrop:!0};function B_(){try{const i=localStorage.getItem(Xc);return i?{...ta,...JSON.parse(i)}:{...ta}}catch{return{...ta}}}const k_=`
#settings { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 360px; background: rgba(10, 26, 42, 0.95); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 22px; display: none; z-index: 25; }
#settings.show { display: block; }
#settings h3 { margin: 0 0 14px; font-size: 18px; }
#settings .row { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; font-size: 14px; }
#settings input[type="range"] { width: 150px; }
#settings input[type="checkbox"] { width: 18px; height: 18px; }
#settings .danger { margin-top: 14px; width: 100%; padding: 8px; border: none; border-radius: 8px; background: #b03030; color: #fff; cursor: pointer; font-size: 14px; }
#settings .muted { opacity: 0.6; font-size: 12px; margin-top: 10px; text-align: center; }
`;class G_{constructor(t){R(this,"settings");R(this,"root");R(this,"visible",!1);this.audio=t,this.settings=B_();const e=document.createElement("style");e.textContent=k_,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(Xc,JSON.stringify(this.settings))}catch{}}render(){var t,e,n,s;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,(t=this.root.querySelector("#set-vol"))==null||t.addEventListener("input",r=>{this.settings.volume=Number(r.target.value)/100,this.apply(),this.persist()}),(e=this.root.querySelector("#set-music"))==null||e.addEventListener("change",r=>{this.settings.music=r.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",r=>{this.settings.deathDrop=r.target.checked,this.persist()}),(s=this.root.querySelector("#set-reset"))==null||s.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}}const H_=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,V_=.9;class W_{constructor(){R(this,"totalSpawned",0);R(this,"items",[]);const t=document.createElement("style");t.textContent=H_,document.head.appendChild(t)}spawn(t,e,n){const s=document.createElement("div");s.className="float-dmg",s.textContent=e,s.style.color=n,document.body.appendChild(s),this.items.push({el:s,pos:t.clone(),life:V_}),this.totalSpawned++}update(t,e){this.items=this.items.filter(n=>{if(n.life-=t,n.life<=0)return n.el.remove(),!1;n.pos.y+=t*1.6;const s=n.pos.clone().project(e);return s.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(s.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-s.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class q_{constructor(){R(this,"totalSpawned",0);R(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(t){var n;const e=document.createElement("div");for(e.textContent=t,this.root.appendChild(e),this.totalSpawned++,setTimeout(()=>e.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const X_=4;class Y_{constructor(t,e){R(this,"mesh");R(this,"respawnT",0);R(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new ve;const n=new et(new Le(1.2,.7,.85),vt(9067056));n.position.y=.35;const s=new et(new be(.45,.45,1.2,10,1,!1,0,Math.PI),vt(10119738));s.rotation.z=Math.PI/2,s.position.y=.72;const r=new et(new Le(1.26,.16,.9),vt(15777856));r.position.y=.45;const a=new et(new vi(.18),new tn({color:16769152}));a.position.y=1.25,this.mesh.add(n,s,r,a),jn(this.mesh),this.place(t,e)}get active(){return this.mesh.visible}place(t,e){this.mesh.position.set(t,0,e),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(t,e,n){if(!this.active||(this.bobPhase+=t*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=t*.2,!n))return!1;const s=e.x-this.mesh.position.x,r=e.z-this.mesh.position.z;return Math.hypot(s,r)<X_}}const $_=3.5,er=2,K_=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class j_{constructor(t){R(this,"mesh");R(this,"active",!1);R(this,"crystalGroup");R(this,"crystalMat");R(this,"ring");R(this,"phase",Math.random()*Math.PI*2);this.def=t,this.mesh=new ve;const e=new ve,n=new et(new be(1.1,1.4,.5,8),vt(8028820));n.position.y=.25;const s=new et(new be(.35,.5,2.2,8),vt(9081508));s.position.y=1.6,e.add(n,s),this.crystalMat=vt(6978186);const r=new et(new vi(.45),this.crystalMat);this.crystalGroup=new ve,this.crystalGroup.add(r),this.crystalGroup.position.y=3.2,e.add(this.crystalGroup),jn(e),e.traverse(a=>{a instanceof et&&(a.castShadow=!0)}),this.mesh.add(e),this.ring=new et(new _r(1.5,1.9,28),new tn({color:8382696,transparent:!0,opacity:.55,side:je})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(t.x,pe(t.x,t.z),t.z)}setActive(t){this.active=t,this.ring.visible=t,t?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(t,e){this.phase+=t,this.crystalGroup.rotation.y+=t*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=e.x-this.mesh.position.x,s=e.z-this.mesh.position.z;return Math.hypot(n,s)<$_}}const Z_=.3;function J_(){var bs,Ts;const i=document.getElementById("app");if(!i)throw new Error("找不到 #app 容器");const t=new T0({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=lc,i.appendChild(t.domElement);const e=new Tu;e.background=new Gt(8900331),e.fog=new no(8900331,150,650);const n=new an(60,window.innerWidth/window.innerHeight,.1,1e3),s=new C0,r=()=>s.unlock();window.addEventListener("pointerdown",r,{once:!0}),window.addEventListener("keydown",r,{once:!0});const a=new G_(s),o=new Bu(16774368,2.6);o.position.set(60,100,40),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-80,o.shadow.camera.right=80,o.shadow.camera.top=80,o.shadow.camera.bottom=-80,o.shadow.camera.far=250,o.shadow.bias=-8e-4;const l=new Ou(12574719,15258784,.7),c=new ku(16777215,.35);e.add(o,o.target,l,c);const d=new H0(e,o,l,c),h=new D0(e),p=new W_,f=new q_;let _=0;const x=O0();x.position.set(75,0,55),e.add(x,Z0());const m=new eg;e.add(m.mesh);let u=!1;const E=new et(new gr(1.5,20),new tn({color:13626111,transparent:!0,opacity:.75}));E.rotation.x=-Math.PI/2,E.visible=!1,e.add(E);function b(){for(let z=0;z<100;z++){const Y=-210+Math.random()*440,q=-240+Math.random()*580;if(Hc(Y,q)&&!Xi.some(v=>Math.hypot(Y-v.x,q-v.z)<v.r+12)&&!(Math.hypot(Y-sn.x,q-sn.z)<sn.r+8))return{x:Y,z:q}}return{x:-100,z:-40}}const S=[];for(let z=0;z<6;z++){const Y=b(),q=new Y_(Y.x,Y.z);S.push(q),e.add(q.mesh)}function N(z,Y){let q=Xi[0],v=1/0;for(const H of Xi){const B=Math.hypot(z-H.x,Y-H.z);B<v&&(v=B,q=H)}const L=Math.max(Math.hypot(z-q.x,Y-q.z),.001),G=(q.r-8)/L;return{x:q.x+(z-q.x)*G,z:q.z+(Y-q.z)*G}}const A=new A0(t.domElement),g=new wg;e.add(g.mesh);const I=new Map,w=new n_({onState(z,Y){let q=I.get(z);q?q.setState(Y):(q=new s_(z,Y),I.set(z,q),e.add(q.mesh),X.setOnline(w.connected,I.size))},onLeave(z){const Y=I.get(z);Y&&(Y.dispose(),I.delete(z),X.setOnline(w.connected,I.size))},onStatus(z){X.setOnline(z,I.size)}});new URLSearchParams(location.search).has("mp")&&w.connect();let y=0;const D=g.mesh.position.clone(),F=new og,k=[new St("slime",14,-39),new St("slime",-14,-40),new St("slime",6,-32),new St("slime",22,-18),new St("slime",-24,-12),new St("slime",16,6),new St("slime",-14,20),new St("slime",36,4),new St("slime",-32,16),new St("slime",4,40),new St("slime",26,30),new St("slime",-18,-30),new St("elite",0,14),new St("elite",-30,-22),new St("vine",148,75),new St("vine",162,88),new St("vine",133,96),new St("vine",167,116),new St("vine",140,127),new St("vine",155,142),new St("windGuardian",150,110),new St("ember",-148,88),new St("ember",-135,100),new St("ember",-165,105),new St("ember",-138,132),new St("ember",-162,138),new St("earthGuardian",-150,112),new St("frost",78,-162),new St("frost",42,-155),new St("frost",60,-198),new St("frost",85,-180),new St("frost",38,-185),new St("frostGuardian",60,-170),new St("deep",-48,222),new St("deep",-30,238),new St("deep",-44,242),new St("voidGuardian",-40,230),new St("voidLord",0,300),new St("sand",2180,130),new St("sand",2222,134),new St("sand",2166,158),new St("sand",2234,166),new St("sand",2196,190),new St("magmaGuardian",2200,144),new St("reef",1770,-138),new St("reef",1812,-134),new St("reef",1756,-110),new St("reef",1824,-102),new St("reef",1786,-82),new St("coralGuardian",1790,-124),new St("spore",2100,-208),new St("spore",2142,-204),new St("spore",2086,-180),new St("spore",2154,-172),new St("spore",2116,-152),new St("lifeGuardian",2120,-194),new St("marsh",1722,135),new St("marsh",1758,138),new St("marsh",1712,160),new St("marsh",1768,162),new St("marsh",1740,188),new St("brine",1962,228),new St("brine",1998,230),new St("brine",1952,252),new St("brine",2008,252),new St("brine",1980,278),new St("solar",2242,-62),new St("solar",2278,-60),new St("solar",2232,-38),new St("solar",2288,-38),new St("solar",2260,-14)];for(const z of k)e.add(z.mesh);const J=k[12],nt=k.find(z=>z.kind==="windGuardian"),Q=k.find(z=>z.kind==="earthGuardian"),at=k.find(z=>z.kind==="frostGuardian"),$=k.find(z=>z.kind==="voidGuardian"),xt=k.find(z=>z.kind==="voidLord"),Rt=k.find(z=>z.kind==="magmaGuardian"),Ot=k.find(z=>z.kind==="coralGuardian"),ee=k.find(z=>z.kind==="lifeGuardian");let re=[],j=[],ct=[],It=[],ht=null,Nt=!1,ce=!1,Vt=!1,we=!1,Ee=!1,he=!1,U=!1,Ne=!1,ue=!1,_e=0,yt=!1,ne=!1,Bt=!1;const V=new E_,Ht=new jg,T=new b_,M=new U_,C=new T_,Z=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],it=25,K=()=>[V.flameOwned,V.windOwned,V.earthOwned,V.frostOwned,V.tideOwned,V.voidOwned].filter(Boolean).length,Dt=()=>Z.filter(z=>C.killsOf(z)>0).length,ut=()=>K()===6&&Dt()===Z.length&&g.stats.level>=it,Pt=z=>z==="small"?"小型":z==="medium"?"中型":"大型",At=z=>new Rn(z.name,z.x,z.z,z.color,()=>{const Y=C.get(z.quest),q=mi[z.quest].target;return Y==="done"?z.doneLines:Y==="active"&&C.huntProgress(z.quest)>=q?(C.complete(z.quest),F.coins+=z.coins,F.crystals[z.crystalSize]+=z.crystalCount,s.sfx("gem"),X.showToast(`任務完成:${z.title}!獲得 ${z.coins} 貝拉幣 + ${Pt(z.crystalSize)}結晶×${z.crystalCount}`),Jt(),[`你把${z.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${z.coins} 貝拉幣和${Pt(z.crystalSize)}經驗結晶 ×${z.crystalCount}。`]):Y===null?(C.accept(z.quest),X.showToast(`接受任務:${z.title}(0/${q})`),z.intro):[`還剩 ${q-C.huntProgress(z.quest)} 隻${z.enemyLabel},加油!`,"打完回來找我領賞!"]}),st=[new Rn("村長阿海",2.5,-49.5,9067146,()=>{const z=C.get("gem"),Y=C.get("wind"),q=C.get("earth"),v=C.get("frost"),L=C.get("tide"),G=C.get("depth"),H=C.get("final");return H==="done"?F.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:H==="active"&&ne?(C.complete("final"),F.coins+=1e3,s.sfx("victory"),X.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Jt(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):H==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:G==="done"?(C.accept("final"),X.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):G==="active"&&V.voidOwned?(C.complete("depth"),F.coins+=500,F.crystals.large+=3,s.sfx("gem"),X.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Jt(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","按 X 可以短距離瞬移,連虛空的力量都為你所用了。"]):G==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:L==="done"?(C.accept("depth"),X.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):L==="active"&&V.tideOwned?(C.complete("tide"),F.coins+=300,s.sfx("gem"),X.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Jt(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):L==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:v==="done"?(C.accept("tide"),X.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):v==="active"&&V.frostOwned?(C.complete("frost"),F.coins+=400,F.crystals.large+=2,s.sfx("gem"),X.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Jt(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","按 V 射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):v==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:q==="done"?(C.accept("frost"),X.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):q==="active"&&V.earthOwned?(C.complete("earth"),F.coins+=300,F.crystals.large+=2,s.sfx("gem"),X.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Jt(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","按 C 可以放出地震波,震飛身邊所有敵人!"]):q==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:Y==="done"?(C.accept("earth"),X.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):Y==="active"&&V.windOwned?(C.complete("wind"),F.coins+=200,F.crystals.large+=1,s.sfx("gem"),X.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Jt(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):Y==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:z==="done"?(C.accept("wind"),X.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):z==="active"&&V.flameOwned?(C.complete("gem"),F.coins+=100,F.crystals.medium+=1,s.sfx("gem"),X.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Jt(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","按 E 就能施放火焰斬,去試試吧!"]):z===null?(C.accept("gem"),X.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]}),new Rn("漁夫小蝦",-4,-48,4881050,()=>{const z=C.get("jelly");return z==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:z==="active"&&C.jellyProgress()>=ci?(C.complete("jelly"),F.coins+=50,F.crystals.small+=2,s.sfx("gem"),X.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Jt(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):z===null?(C.accept("jelly"),X.showToast(`接受任務:果凍清理(0/${ci})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${ci} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${ci-C.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]}),new Rn("商人圓圓",7,-46,13142090,()=>[],"shop"),new Rn("鍛造大師爐婆",-150,78,9062954,()=>[],"forge"),At({name:"獵人小藤",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),At({name:"礦工岩叔",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),At({name:"嚮導阿凜",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),At({name:"觀星者星嵐",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new Rn("領航者汐音",230,-95,4889272,()=>F.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:ut()?(C.get("sea2")===null&&C.accept("sea2"),C.complete("sea2"),F.firstSeaGem=!0,F.secondSeaGem=!0,s.sfx("gem"),f.push("🔱 獲得重要道具【第一海寶石】"),f.push("🌐 獲得重要道具【第二海寶石】"),X.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Jt(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):(C.get("sea2")===null&&(C.accept("sea2"),X.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${K()}/6)`,`・擊敗所有種類的敵人(${Dt()}/${Z.length} 種)`,`・修煉至 Lv.${it}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"])),new Rn("鎮長波叔",Pn.x,Pn.z-36,13148234,()=>{const z=C.get("lava");return z==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:z==="active"&&V.lavaOwned?(C.complete("lava"),F.coins+=600,F.crystals.large+=2,s.sfx("gem"),X.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Jt(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):z==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:(C.accept("lava"),X.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])}),new Rn("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const z=C.get("aqua");return z==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:z==="active"&&V.aquaOwned?(C.complete("aqua"),F.coins+=700,F.crystals.large+=2,s.sfx("gem"),X.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Jt(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 B 就能震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):z==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:(C.accept("aqua"),X.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])}),new Rn("靈脈守林人葉羅",2098,-162,3846240,()=>{const z=C.get("life");return z==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:z==="active"&&V.lifeOwned?(C.complete("life"),F.coins+=700,F.crystals.large+=2,s.sfx("gem"),X.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Jt(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):z==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:(C.accept("life"),X.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])}),At({name:"拓荒者沙吉",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),At({name:"潛水夫阿蚌",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),At({name:"採集者藤吉",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),At({name:"沼澤嚮導苔翁",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),At({name:"鹽工鹵伯",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),At({name:"拾光人焰娃",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const z of st)e.add(z.mesh);const pt=K_.map(z=>new j_(z));for(const z of pt)e.add(z.mesh);const Ut=[],Ft=z=>{const Y=pt.find(q=>q.def.id===z);return Y?Gi(Y.def.x):1},dt=z=>{const Y=Gi(z.def.x),q=Ut.filter(L=>Ft(L)===Y);let v=`(本海 ${Math.min(q.length+1,er)}/${er})`;if(q.length>=er){const L=q[0];Ut.splice(Ut.indexOf(L),1);const G=pt.find(H=>H.def.id===L);G&&(G.setActive(!1),v=`(已替換本海【${G.def.island}】)`)}Ut.push(z.def.id),z.setActive(!0),s.sfx("shrine"),h.burst(z.mesh.position.clone().setY(z.mesh.position.y+3),8382696,14,6),X.showToast(`重生點已設置:【${z.def.island}】${v}`),Jt()},X=new P_(z=>{const Y=pt.find(v=>v.active&&v.def.id===z),q=Y?`【${Y.def.island}】重生點`:"海灘";if(a.settings.deathDrop){for(const v of Object.keys(F.crystals))F.crystals[v]-=Math.floor(F.crystals[v]*Z_);X.showToast(`你在${q}醒來,遺失了部分未使用的結晶……`)}else X.showToast(`你在${q}醒來……(死亡掉落已關閉)`);if(g.respawn(),Y){const{x:v,z:L}=Y.def;g.mesh.position.set(v,pe(v,L+2),L+2),m.place(Y.def.boat.x,Y.def.boat.z)}else m.resetToDock();u=!1,yt&&_n(!1),X.setDead(!1)}),O=()=>{const z=[],Y=Gi(g.mesh.position.x);for(const q of Ut){if(Ft(q)!==Y)continue;const v=pt.find(L=>L.def.id===q);v&&z.push({id:q,label:`在【${v.def.island}】重生點重生`})}X.setDead(!0,z)},mt=()=>{g.stats.equip=T.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},rt=()=>{g.hasWindGem=V.isEquipped("wind"),g.hasFrostGem=V.isEquipped("frost"),g.windLevel=V.levels.wind},Mt=z=>{V.hasFreeSlot()&&V.equip(z),rt()},ot=z=>{Ht.hasFreeSlot()&&Ht.equip(z)},tt=()=>{rt(),X.setGems(V),X.setFruits(Ht),s.sfx("ui"),Jt()},wt=new D_(F,g.stats,V,Ht,T,(z,Y)=>{const q=F.useCrystals(z,Y);if(q<=0)return;const v=g.stats.addExp(q);v>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,s.sfx("levelup"),X.showToast(`升級!Lv.${g.stats.level},獲得 ${v*3} 點能力點數`),Jt()):(s.sfx("crystal"),X.showToast(`注入 ${q} EXP`))},z=>{g.stats.allocate(z),Jt()},()=>{mt(),s.sfx("ui"),Jt()},z=>Se(z),()=>Ut.filter(z=>Ft(z)===Gi(g.mesh.position.x)).map(z=>{var Y;return{id:z,island:((Y=pt.find(q=>q.def.id===z))==null?void 0:Y.def.island)??z}}),z=>Yt(z),tt);function Yt(z){const Y=pt.find(L=>L.active&&L.def.id===z);if(!Y||g.isDead)return;yt&&_n(!1),u=!1;const{x:q,z:v}=Y.def;g.mesh.position.set(q,pe(q,v+2),v+2),m.place(Y.def.boat.x,Y.def.boat.z),s.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),X.showToast(`傳送至【${Y.def.island}】重生點`),wt.isOpen&&wt.toggle(),Jt()}function Se(z){if(!g.isDead){if(yt&&_n(!1),u=!1,z===2){const Y=Pn.x,q=Pn.z-44;g.mesh.position.set(Y,pe(Y,q),q),m.place(Pn.x+2,Pn.z-58),X.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,pe(2.5,-52),-52),m.resetToDock(),X.showToast("海流湧動……回到第一海【曙光嶼】");s.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),wt.isOpen&&wt.toggle(),Jt()}}const oe=new O_(F,T,()=>{s.sfx("coin"),Jt()}),Be=new z_(F,g.stats,V,Ht,()=>{s.sfx("anvil"),X.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Jt()},z=>{s.sfx("anvil"),z==="wind"&&(g.windLevel=V.levels.wind),X.showToast(`寶石升階成功!(Lv.${V.levels[z]})`),Jt()},z=>{s.sfx("anvil"),X.showToast(`果實升階成功!(Lv.${Ht.levels[z]})`),Jt()}),cn=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:F.coins,crystals:{...F.crystals},flameOwned:V.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:F.potions,quests:C.serialize(),windOwned:V.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:u,earthOwned:V.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:V.frostOwned,tideOwned:V.tideOwned,voidOwned:V.voidOwned,voidDefeated:ne,gemLevels:{...V.levels},equipment:T.serialize(),shrines:[...Ut],seaGems:{first:F.firstSeaGem,second:F.secondSeaGem},lavaOwned:V.lavaOwned,aquaOwned:V.aquaOwned,lifeOwned:V.lifeOwned,fruits:{thunderOwned:Ht.thunderOwned,gravityOwned:Ht.gravityOwned,levels:{...Ht.levels}},gemsEquipped:[...V.equipped],fruitsEquipped:[...Ht.equipped]}),Jt=()=>A_(cn());setInterval(Jt,12e3);const $t=R_();if($t){g.stats.level=$t.level,g.stats.exp=$t.exp,g.stats.points=$t.points,Object.assign(g.stats.attrs,$t.attrs),F.coins=$t.coins,Object.assign(F.crystals,$t.crystals),F.potions=$t.potions??0,$t.quests&&C.restore($t.quests),V.flameOwned=$t.flameOwned,V.windOwned=$t.windOwned??!1,V.earthOwned=$t.earthOwned??!1,V.frostOwned=$t.frostOwned??!1,V.tideOwned=$t.tideOwned??!1,V.voidOwned=$t.voidOwned??!1,V.lavaOwned=$t.lavaOwned??!1,V.aquaOwned=$t.aquaOwned??!1,V.lifeOwned=$t.lifeOwned??!1,$t.fruits&&(Ht.thunderOwned=$t.fruits.thunderOwned,Ht.gravityOwned=$t.fruits.gravityOwned,Object.assign(Ht.levels,$t.fruits.levels)),V.equipped=($t.gemsEquipped??h_).filter(z=>V.ownedOf(z)).slice(0,uo),Ht.equipped=($t.fruitsEquipped??Vg).filter(z=>Ht.ownedOf(z)).slice(0,ho),ne=$t.voidDefeated??!1,F.firstSeaGem=((bs=$t.seaGems)==null?void 0:bs.first)??!1,F.secondSeaGem=((Ts=$t.seaGems)==null?void 0:Ts.second)??!1,g.stats.weaponLevel=$t.weaponLevel??0,$t.gemLevels&&Object.assign(V.levels,$t.gemLevels),$t.equipment&&T.restore($t.equipment);for(const z of $t.shrines??[]){const Y=pt.find(L=>L.def.id===z);if(!Y||Y.active)continue;const q=Gi(Y.def.x);Ut.filter(L=>Ft(L)===q).length<er&&(Y.setActive(!0),Ut.push(z))}mt(),rt(),X.setGems(V),X.setFruits(Ht),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set($t.pos[0],pe($t.pos[0],$t.pos[1]),$t.pos[1]),$t.boatPos&&m.place($t.boatPos[0],$t.boatPos[1]),$t.sailing&&(u=!0),X.showToast("讀取存檔完成")}if(!V.tideOwned){const z=new Lt("gem-tide",wl.x,wl.z);e.add(z.mesh),re.push(z)}const mn=()=>{if(Nt||Ht.gravityOwned)return;Nt=!0;const z=new Lt("fruit-gravity",bl.x,bl.z);e.add(z.mesh),re.push(z)};ne&&!Ht.gravityOwned&&mn();const Zn=document.createElement("div");Zn.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(Zn);const gn=document.createElement("div");gn.id="ending",gn.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",gn.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const Jn=document.createElement("button");Jn.textContent="回去找村長阿海領賞",Jn.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",Jn.addEventListener("click",()=>{gn.style.display="none"}),gn.appendChild(Jn),document.body.appendChild(gn);const _n=z=>{yt=z,g.divingZone=z?sn:null,Zn.style.display=z?"block":"none";const Y=e.fog;z?(Y.color.setHex(1723002),Y.near=20,Y.far=110,e.background=new Gt(1723002)):(Y.color.setHex(8900331),Y.near=150,Y.far=650,e.background=new Gt(8900331))};let Qn=Math.PI,vn=.35,On=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});function Fn(z){const{x:Y,z:q}=z.mesh.position,v=[];z===J&&!V.flameOwned&&!ce&&(ce=!0,v.push(new Lt("gem-flame",Y,q))),z===nt&&!V.windOwned&&!Vt&&(Vt=!0,v.push(new Lt("gem-wind",Y,q))),z===Q&&!V.earthOwned&&!we&&(we=!0,v.push(new Lt("gem-earth",Y,q))),z===at&&!V.frostOwned&&!Ee&&(Ee=!0,v.push(new Lt("gem-frost",Y,q))),z===$&&!V.voidOwned&&!he&&(he=!0,v.push(new Lt("gem-void",Y,q))),z===Rt&&!V.lavaOwned&&!U&&(U=!0,v.push(new Lt("gem-lava",Y,q))),z===Ot&&!V.aquaOwned&&!Ne&&(Ne=!0,v.push(new Lt("gem-aqua",Y,q))),z===ee&&!V.lifeOwned&&!ue&&(ue=!0,v.push(new Lt("gem-life",Y,q))),z.kind==="slime"&&C.slimeKills++,C.addKill(z.kind),z.kind==="voidLord"||z.kind==="voidGuardian"?v.push(new Lt("large",Y,q),new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="deep"?v.push(new Lt("medium",Y,q),new Lt("medium",Y,q),new Lt("coin",Y,q)):z.kind==="frostGuardian"?v.push(new Lt("large",Y,q),new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="frost"?v.push(new Lt("medium",Y,q),new Lt("coin",Y,q)):z.kind==="earthGuardian"?v.push(new Lt("large",Y,q),new Lt("medium",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="ember"?v.push(new Lt("medium",Y,q),new Lt("coin",Y,q)):z.kind==="magmaGuardian"?v.push(new Lt("large",Y,q),new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="sand"?v.push(new Lt("medium",Y,q),new Lt("coin",Y,q)):z.kind==="coralGuardian"?v.push(new Lt("large",Y,q),new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="lifeGuardian"?v.push(new Lt("large",Y,q),new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="reef"||z.kind==="spore"?v.push(new Lt("medium",Y,q),new Lt("coin",Y,q)):z.kind==="windGuardian"?v.push(new Lt("large",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="elite"?v.push(new Lt("medium",Y,q),new Lt("small",Y,q),new Lt("coin",Y,q),new Lt("coin",Y,q)):z.kind==="vine"?v.push(new Lt("small",Y,q),new Lt("small",Y,q),new Lt("coin",Y,q)):(v.push(new Lt("small",Y,q),new Lt("coin",Y,q)),Math.random()<.35&&v.push(new Lt("small",Y,q)));for(const L of v)e.add(L.mesh),re.push(L)}const Es=new Hu;t.setAnimationLoop(()=>{const z=Math.min(Es.getDelta(),.05),Y=Es.getElapsedTime(),q=h.frozen?0:z,v=d.update(z,g.mesh.position,yt);Gi(g.mesh.position.x)===2?x.position.set(Pn.x,0,Pn.z):x.position.set(75,0,55),F0(x,Y,v.waveScale),s.setRain(v.raining&&!yt),v.thunder&&(s.sfx("thunder"),h.shake(.15,.3)),s.setMusicMode(yt?"night":u?"sail":v.isNight?"night":"day"),X.setEnv(`${v.isNight?"🌙":"☀️"}${v.weather==="clear"?"":v.weather==="rain"?" 🌧️":" ⛈️"}`),A.wasPressed("Tab")&&(s.sfx("ui"),wt.toggle()),A.wasPressed("Escape")&&(s.sfx("ui"),a.toggle());let L=null;for(const W of st)W.update(z,g.mesh.position)&&(L=W);let G=null;for(const W of pt)W.update(z,g.mesh.position)&&(G=W);const H=!u&&!yt&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,B=u?m.findLandingSpot():null,lt=u&&V.isEquipped("tide")&&Math.hypot(m.mesh.position.x-sn.x,m.mesh.position.z-sn.z)<sn.r;if(yt?X.setTalkPrompt(!0,"按 F 浮上水面"):lt?X.setTalkPrompt(!0,"按 F 潛入沉沒古城"):u&&B?X.setTalkPrompt(!0,"按 F 上岸"):H?X.setTalkPrompt(!0,"按 F 出海"):G&&!G.active&&!u&&!g.isDead&&!M.isOpen?X.setTalkPrompt(!0,"按 F 設置重生點"):X.setTalkPrompt(L!==null&&!M.isOpen&&!oe.isOpen&&!Be.isOpen&&!g.isDead&&!u,(L==null?void 0:L.role)==="shop"?"按 F 交易":(L==null?void 0:L.role)==="forge"?"按 F 鍛造":"按 F 對話"),A.wasPressed("KeyF")&&(oe.isOpen?oe.close():Be.isOpen?Be.close():M.isOpen?M.advance():yt?(_n(!1),u=!0,s.sfx("dive"),Jt()):u?lt?(u=!1,_n(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),s.sfx("dive"),X.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):B&&(u=!1,g.mesh.position.copy(B),s.sfx("ui"),Jt()):H?(u=!0,g.blocking=!1,s.sfx("ui"),X.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):G&&!G.active&&!g.isDead?dt(G):L&&!g.isDead&&(s.sfx("ui"),L.role==="shop"?oe.open():L.role==="forge"?Be.open():M.open(L.name,L.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*q),u?(m.sail(q,A,v.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(q),!u&&!g.isDead&&!wt.isOpen&&!M.isOpen&&!oe.isOpen&&!Be.isOpen&&!a.isOpen){const{attacked:W,spin:Wt,chargeReady:qt,jumped:zt,dodged:Tt}=g.update(q,A,Qn);zt&&s.sfx("jump"),Tt&&s.sfx("dodge"),qt&&s.sfx("chargeReady");const le=(ft,Kt,se)=>{const jt=ft.takeDamage(Kt,se),Pe=ft.mesh.position.clone().setY(ft.mesh.position.y+1);p.spawn(Pe.clone().setY(Pe.y+1.2),String(Kt),"#ffd23c"),h.burst(Pe,jt?10217627:16769162,jt?16:8),h.hitstop(jt?.1:.05),h.shake(jt?.28:.12,.18),s.sfx(jt?"enemyDie":"hit"),jt&&Fn(ft)};if(W){s.sfx("swing");const ft=new P(Math.sin(g.facing),0,Math.cos(g.facing));for(const Kt of k){if(Kt.isDead)continue;const se=new P().subVectors(Kt.mesh.position,g.mesh.position);se.y=0;const jt=se.length();jt>Mg||jt>.5&&se.clone().normalize().dot(ft)<yg||le(Kt,g.stats.atk,se)}}if(Wt!==null){s.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const ft=Math.round(g.stats.atk*(1+1.5*Wt));for(const Kt of k){if(Kt.isDead)continue;const se=new P().subVectors(Kt.mesh.position,g.mesh.position);se.y=0,!(se.length()>Sg)&&le(Kt,ft,se)}if(Wt>=1){s.sfx("wave");const Kt=new us(g.mesh.position,g.facing,ft);e.add(Kt.mesh),j.push(Kt)}}if(A.wasPressed("KeyE")&&V.isEquipped("flame")&&!g.blocking&&g.mp>=Kl){g.mp-=Kl,s.sfx("fire");const ft=new us(g.mesh.position,g.facing,u_(g.stats.attrs.spirit,V.levels.flame),{color:16742972,lifetime:.45,speed:18});e.add(ft.mesh),j.push(ft);const Kt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(Kt,16742972,12,6)}if(A.wasPressed("KeyR")&&F.potions>0&&g.hp<g.stats.maxHP&&(F.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),s.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),A.wasPressed("KeyC")&&V.isEquipped("earth")&&!g.blocking&&g.mp>=jl){g.mp-=jl,s.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const ft=d_(g.stats.attrs.spirit,V.levels.earth),Kt=f_(V.levels.earth);for(const se of k){if(se.isDead)continue;const jt=new P().subVectors(se.mesh.position,g.mesh.position);jt.y=0,!(jt.length()>Kt)&&le(se,ft,jt)}}if(A.wasPressed("KeyV")&&V.isEquipped("frost")&&!g.blocking&&g.mp>=Zl){g.mp-=Zl,s.sfx("ice");const ft=new us(g.mesh.position,g.facing,p_(g.stats.attrs.spirit,V.levels.frost),{color:10149119,lifetime:.7,speed:26,freezes:!0});e.add(ft.mesh),j.push(ft)}if(A.wasPressed("KeyX")&&V.isEquipped("void")&&g.mp>=Qr){const ft=Math.sin(g.facing),Kt=Math.cos(g.facing),se=g.mesh.position.clone();for(let jt=g_(V.levels.void);jt>=2;jt-=2){const Pe=se.x+ft*jt,me=se.z+Kt*jt;if(Va(Pe,me)||V.isEquipped("frost")&&g.mp>Qr||yt&&Math.hypot(Pe-sn.x,me-sn.z)<sn.r){g.mp-=Qr,s.sfx("blink"),h.burst(se.clone().setY(se.y+1),9063144,10,5),g.blinkTo(Pe,me),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),9063144,10,5);break}}}if(A.wasPressed("KeyG")&&V.isEquipped("lava")&&!g.blocking&&g.mp>=Jl){g.mp-=Jl,s.sfx("lava");const ft=new us(g.mesh.position,g.facing,__(g.stats.attrs.spirit,V.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});e.add(ft.mesh),j.push(ft);const Kt=g.mesh.position.clone().add(new P(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(Kt,16730652,16,7)}if(A.wasPressed("KeyB")&&V.isEquipped("aqua")&&!g.blocking&&g.mp>=Ql){g.mp-=Ql,s.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const ft=x_(g.stats.attrs.spirit,V.levels.aqua),Kt=y_(V.levels.aqua),se=M_(V.levels.aqua);for(const jt of k){if(jt.isDead)continue;const Pe=new P().subVectors(jt.mesh.position,g.mesh.position);Pe.y=0,!(Pe.length()>Kt)&&(le(jt,ft,Pe),jt.isDead||jt.freeze(se))}}if(A.wasPressed("KeyH")&&V.isEquipped("life")&&!g.blocking&&g.mp>=tc){g.mp-=tc,s.sfx("life");const ft=new us(g.mesh.position,g.facing,S_(g.stats.attrs.spirit,V.levels.life),{color:5957722,lifetime:.7,speed:22,leech:w_(V.levels.life)});e.add(ft.mesh),j.push(ft)}if(A.wasPressed("KeyZ")&&Ht.isEquipped("thunder")&&!g.blocking&&g.mp>=Hl){let ft=null,Kt=kg;for(const se of k){if(se.isDead)continue;const jt=se.mesh.position.distanceTo(g.mesh.position);jt<Kt&&(Kt=jt,ft=se)}if(ft){g.mp-=Hl,s.sfx("thunder");const se=qg(Ht.levels.thunder),jt=Xg(Ht.levels.thunder),Pe=Wg(g.stats.attrs.spirit,Ht.levels.thunder),me=new Set,Ge=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let He=ft,Oe=Pe;for(;He&&me.size<se;){const en=He;me.add(en);const xn=Math.round(Oe),Yc=new P().subVectors(en.mesh.position,g.mesh.position),ns=en.takeDamage(xn,Yc);ns||en.stun(jt);const As=en.mesh.position.clone().setY(en.mesh.position.y+1);Ge.push(As.clone()),p.spawn(As.clone().setY(As.y+1.4),String(xn),"#bfe8ff"),h.burst(As,ns?10217627:12577023,ns?16:8),s.sfx(ns?"enemyDie":"hit"),ns&&Fn(en);let fo=null,po=Gg;for(const Rs of k){if(Rs.isDead||me.has(Rs))continue;const mo=Rs.mesh.position.distanceTo(en.mesh.position);mo<po&&(po=mo,fo=Rs)}He=fo,Oe*=Hg}const ke=new Qg(Ge);e.add(ke.group),It.push(ke),h.shake(.2,.16)}}if(A.wasPressed("KeyT")&&Ht.isEquipped("gravity")&&!g.blocking&&g.mp>=Vl){g.mp-=Vl,s.sfx("vortex");const ft=g.mesh.position.x+Math.sin(g.facing)*Wl,Kt=g.mesh.position.z+Math.cos(g.facing)*Wl,se=new Jg(ft,Kt,$g(Ht.levels.gravity),Kg(Ht.levels.gravity),Yg(g.stats.attrs.spirit,Ht.levels.gravity));e.add(se.mesh),ct.push(se),h.burst(new P(ft,pe(ft,Kt)+1,Kt),11559167,14,6)}}!u&&!g.isDead&&Y0(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-pe(g.mesh.position.x,g.mesh.position.z)<.5?(_e+=q,_e>=.8&&(_e=0,g.applyEnvironmentDamage(6),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),s.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&O())):_e=0;const gt=!u&&!yt&&!g.isDead&&V.isEquipped("frost")&&!Va(g.mesh.position.x,g.mesh.position.z);if(E.visible=gt,gt&&(E.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=a_*q,g.mp<=0)){g.mp=0,s.sfx("shatter"),X.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const W=N(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(W.x,pe(W.x,W.z),W.z),g.isDead&&O()}for(const W of k){const Wt=(W.kind==="deep"||W.kind==="voidGuardian")&&!yt,qt=W.update(q,g.mesh.position,g.isDead||Wt);if(qt>0&&!g.isDead){const le=g.takeDamage(qt,W.mesh.position),ft=g.mesh.position.clone().setY(g.mesh.position.y+2.6);le.blocked?(p.spawn(ft,`格擋 -${le.taken}`,"#cfd8e8"),s.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):le.taken>0&&(p.spawn(ft,`-${le.taken}`,"#ff5544"),s.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&O()}const zt=W.specialEvent;if(zt){W.specialEvent=null;const le=W.mesh.position.clone().setY(W.mesh.position.y+3.2);if(p.spawn(le,`⚡${zt.name}`,"#ffd23c"),s.sfx(zt.sfx),h.shake(.3,.25),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+.6),zt.color,24,9),zt.healed>0&&p.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),`+${zt.healed}`,"#7be87b"),zt.hitPlayer&&!g.isDead){const ft=g.takeDamage(zt.dmg,W.mesh.position),Kt=g.mesh.position.clone().setY(g.mesh.position.y+2.6);ft.blocked?(p.spawn(Kt,`格擋 -${ft.taken}`,"#cfd8e8"),s.sfx("block")):ft.taken>0&&(p.spawn(Kt,`-${ft.taken}`,"#ff5544"),s.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),zt.color,12),g.shove(W.mesh.position,zt.knock),zt.effect==="chill"?g.chill(3):zt.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(zt.dmg*.15)))),g.isDead&&O()}}const Tt=W.tickBurn(q);if(Tt>0&&!W.isDead){const le=W.takeDamage(Tt);p.spawn(W.mesh.position.clone().setY(W.mesh.position.y+2.4),String(Tt),"#ff7a3c"),le&&(s.sfx("enemyDie"),h.burst(W.mesh.position.clone().setY(W.mesh.position.y+1),10217627,16),Fn(W))}}const Ct=g.tickBurn(q);Ct>0&&!g.isDead&&(g.applyEnvironmentDamage(Ct),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${Ct}`,"#ff7a3c"),g.isDead&&O());for(const W of S){if(!W.active){if(W.respawnT-=q,W.respawnT<=0){const Wt=b();W.place(Wt.x,Wt.z)}continue}if(W.update(q,m.mesh.position,u)){W.collect(),s.sfx("gem");const Wt=Math.random();if(Wt<.5){const qt=20+Math.floor(Math.random()*41);F.coins+=qt,X.showToast(`漂流寶箱:獲得 ${qt} 貝拉幣!`)}else if(Wt<.75){const qt=2+Math.floor(Math.random()*2);F.crystals.small+=qt,X.showToast(`漂流寶箱:獲得小型經驗結晶 ×${qt}!`)}else Wt<.9?(F.crystals.medium+=1,X.showToast("漂流寶箱:獲得中型經驗結晶!")):(F.potions+=1,X.showToast("漂流寶箱:獲得回復藥水!"));h.burst(W.mesh.position.clone().setY(1.2),16769152,14,6),wt.render()}}if(j=j.filter(W=>{const Wt=W.update(q,k);for(const qt of Wt){const zt=new P().subVectors(qt.mesh.position,g.mesh.position);zt.y=0;const Tt=qt.takeDamage(W.damage,zt);if(W.freezes&&!Tt&&qt.freeze(m_(V.levels.frost)),W.burns&&!Tt&&qt.burn(l_,v_(V.levels.lava)),W.leech>0&&g.hp<g.stats.maxHP){const ft=Math.max(1,Math.round(W.damage*W.leech));g.hp=Math.min(g.stats.maxHP,g.hp+ft),p.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${ft}`,"#7be87b")}const le=qt.mesh.position.clone().setY(qt.mesh.position.y+1);p.spawn(le.clone().setY(le.y+1.2),String(W.damage),"#7fe8ff"),h.burst(le,Tt?10217627:8382719,Tt?16:8),s.sfx(Tt?"enemyDie":"hit"),Tt&&Fn(qt)}return W.expired?(e.remove(W.mesh),W.dispose(),!1):!0}),ct=ct.filter(W=>{const Wt=W.update(q,k);for(const qt of Wt){const zt=qt.takeDamage(W.damage),Tt=qt.mesh.position.clone().setY(qt.mesh.position.y+1);p.spawn(Tt.clone().setY(Tt.y+1.2),String(W.damage),"#d8b0ff"),h.burst(Tt,zt?10217627:11559167,zt?16:6),zt&&(s.sfx("enemyDie"),Fn(qt))}return W.expired?(e.remove(W.mesh),W.dispose(),!1):!0}),It=It.filter(W=>(W.update(q),W.expired?(e.remove(W.group),W.dispose(),!1):!0)),!Ht.thunderOwned){const W=d.weather==="storm";W&&!ht?(ht=new Lt("fruit-thunder",El.x,El.z),e.add(ht.mesh),re.push(ht)):!W&&ht&&(e.remove(ht.mesh),re=re.filter(Wt=>Wt!==ht),ht=null)}re=re.filter(W=>{if(g.isDead)return!0;const Wt=W.update(q,g.mesh.position);if(Wt){if(W.kind==="coin")F.coins+=8,f.push("🪙 獲得 8 貝拉幣"),s.sfx("coin");else if(W.kind==="gem-flame")f.push("🔥 獲得靈紋寶石【焰心石】"),V.flameOwned=!0,Mt("flame"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Jt();else if(W.kind==="gem-wind")f.push("🌪️ 獲得靈紋寶石【風語石】"),V.windOwned=!0,Mt("wind"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Jt();else if(W.kind==="gem-earth")f.push("🪨 獲得靈紋寶石【地殼石】"),V.earthOwned=!0,Mt("earth"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Jt();else if(W.kind==="gem-frost")f.push("❄️ 獲得靈紋寶石【霜語晶】"),V.frostOwned=!0,Mt("frost"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Jt();else if(W.kind==="gem-tide")f.push("🌊 獲得靈紋寶石【潮汐石】"),V.tideOwned=!0,Mt("tide"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Jt();else if(W.kind==="gem-void")f.push("🌀 獲得靈紋寶石【虛空石】"),V.voidOwned=!0,Mt("void"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Jt();else if(W.kind==="gem-lava")f.push("🌋 獲得靈紋寶石【溶岩石】"),V.lavaOwned=!0,Mt("lava"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Jt();else if(W.kind==="gem-aqua")f.push("💧 獲得靈紋寶石【碧波石】"),V.aquaOwned=!0,Mt("aqua"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Jt();else if(W.kind==="gem-life")f.push("🌿 獲得靈紋寶石【翠生石】"),V.lifeOwned=!0,Mt("life"),X.setGems(V),s.sfx("gem"),X.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Jt();else if(W.kind==="fruit-thunder")f.push("⚡ 獲得靈樹果實【雷光果】"),Ht.thunderOwned=!0,ot("thunder"),ht=null,X.setFruits(Ht),s.sfx("gem"),X.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Jt();else if(W.kind==="fruit-gravity")f.push("🌀 獲得靈樹果實【引力果】"),Ht.gravityOwned=!0,ot("gravity"),X.setFruits(Ht),s.sfx("gem"),X.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Jt();else{F.crystals[W.kind]++;const qt=W.kind==="small"?"小型":W.kind==="medium"?"中型":"大型";f.push(`💎 獲得${qt}經驗結晶`),s.sfx("crystal")}e.remove(W.mesh),wt.render()}return!Wt}),A.rightDown&&(Qn-=A.dx*.005,vn=Ms.clamp(vn+A.dy*.004,.05,1.2)),On=Ms.clamp(On+A.wheel*.01,6,18);const Et=g.mesh.position.clone().add(new P(0,2,0)),kt=new P(Et.x+Math.sin(Qn)*Math.cos(vn)*On,Et.y+Math.sin(vn)*On,Et.z+Math.cos(Qn)*Math.cos(vn)*On);kt.y=Math.max(kt.y,pe(kt.x,kt.z)+.6);const Xt=1-Math.exp(-12*z);n.position.lerp(kt,Xt),n.position.add(h.update(z)),n.lookAt(Et);const bt=[];if(C.get("gem")==="active"&&bt.push(V.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),C.get("jelly")==="active"){const W=C.jellyProgress();bt.push(W>=ci?"果凍清理:回報漁夫小蝦":`果凍清理:${W}/${ci}`)}C.get("wind")==="active"&&bt.push(V.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),C.get("earth")==="active"&&bt.push(V.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),C.get("frost")==="active"&&bt.push(V.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),C.get("tide")==="active"&&bt.push(V.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),C.get("depth")==="active"&&bt.push(V.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),C.get("final")==="active"&&bt.push(ne?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),C.get("sea2")==="active"&&bt.push(ut()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${K()}/6・圖鑑${Dt()}/${Z.length}・Lv.${g.stats.level}/${it}`),C.get("lava")==="active"&&bt.push(V.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),C.get("aqua")==="active"&&bt.push(V.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),C.get("life")==="active"&&bt.push(V.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const ie=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const W of ie){if(C.get(W.id)!=="active")continue;const Wt=C.huntProgress(W.id);bt.push(Wt>=mi[W.id].target?`${W.title}:回報${W.npc}`:`${W.title}:${Wt}/${mi[W.id].target}`)}if(X.setQuests(bt),!Bt&&xt.isDead&&(Bt=!0,ne=!0,mn(),s.sfx("victory"),gn.style.display="flex",Jt()),o.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),o.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!u&&!g.isDead&&g.chargeRatio>=1){if(_+=z,_>=.16){_=0;const W=g.mesh.position.clone().add(new P(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(W,13625599,3,2.5)}}else _=0;for(const W of I.values())W.update(z);if(y+=z,y>=.05){y=0;const W=g.mesh.position,Wt=(W.x-D.x)**2+(W.z-D.z)**2;D.copy(W);const qt={x:W.x,y:W.y,z:W.z,facing:g.facing,moving:Wt>1e-5};w.sendState(qt)}p.update(z,n),X.update(g,F),A.endFrame(),t.render(e,n)})}J_();
