var Dd=Object.defineProperty;var Nd=(r,e,t)=>e in r?Dd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var E=(r,e,t)=>Nd(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="177",Ud=0,ll=1,Od=2,Ru=1,Cu=2,ai=3,jn=0,rn=1,Kt=2,Pi=0,Es=1,kn=2,hl=3,ul=4,Fd=5,ji=100,kd=101,Bd=102,zd=103,Hd=104,Gd=200,Vd=201,Wd=202,qd=203,Ua=204,Oa=205,Xd=206,jd=207,Yd=208,$d=209,Kd=210,Zd=211,Jd=212,Qd=213,ef=214,Fa=0,ka=1,Ba=2,Ps=3,za=4,Ha=5,Ga=6,Va=7,Nc=0,tf=1,nf=2,Li=0,sf=1,rf=2,of=3,af=4,cf=5,lf=6,hf=7,dl="attached",uf="detached",Iu=300,Ls=301,Ds=302,Wa=303,qa=304,Lo=306,Ki=1e3,Ci=1001,wo=1002,Zt=1003,Pu=1004,lr=1005,yn=1006,mo=1007,ui=1008,Yn=1009,Lu=1010,Du=1011,pr=1012,Uc=1013,Zi=1014,Bn=1015,br=1016,Oc=1017,Fc=1018,mr=1020,Nu=35902,Uu=1021,Ou=1022,In=1023,gr=1026,_r=1027,Do=1028,kc=1029,Fu=1030,Bc=1031,zc=1033,go=33776,_o=33777,xo=33778,vo=33779,Xa=35840,ja=35841,Ya=35842,$a=35843,Ka=36196,Za=37492,Ja=37496,Qa=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,dc=37821,yo=36492,fc=36494,pc=36495,ku=36283,mc=36284,gc=36285,_c=36286,Bu=2200,zu=2201,df=2202,xr=2300,vr=2301,zo=2302,bs=2400,ws=2401,So=2402,Hc=2500,ff=2501,pf=0,Hu=1,xc=2,mf=3200,gf=3201,No=0,_f=1,Ri="",kt="srgb",dn="srgb-linear",To="linear",Et="srgb",ns=7680,fl=519,xf=512,vf=513,yf=514,Gu=515,Mf=516,bf=517,wf=518,Sf=519,vc=35044,pl="300 es",di=2e3,Eo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const ur=Math.PI/180,Ns=180/Math.PI;function zn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function Gc(r,e){return(r%e+e)%e}function Tf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ef(r,e,t){return r!==e?(t-r)/(e-r):0}function dr(r,e,t){return(1-t)*r+t*e}function Af(r,e,t,n){return dr(r,e,1-Math.exp(-t*n))}function Rf(r,e=1){return e-Math.abs(Gc(r,e*2)-e)}function Cf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function If(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Pf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lf(r,e){return r+Math.random()*(e-r)}function Df(r){return r*(.5-Math.random())}function Nf(r){r!==void 0&&(ml=r);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uf(r){return r*ur}function Of(r){return r*Ns}function Ff(r){return(r&r-1)===0&&r!==0}function kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*_,c*f,a*l);break;case"YXY":r.set(c*f,a*u,c*_,a*l);break;case"ZYZ":r.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:ur,RAD2DEG:Ns,generateUUID:zn,clamp:ct,euclideanModulo:Gc,mapLinear:Tf,inverseLerp:Ef,lerp:dr,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:If,randInt:Pf,randFloat:Lf,randFloatSpread:Df,seededRandom:Nf,degToRad:Uf,radToDeg:Of,isPowerOfTwo:Ff,ceilPowerOfTwo:kf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:zf,normalize:Tt,denormalize:Fn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==_){let m=1-a;const p=c*d+l*f+u*_+h*x,v=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const R=Math.sqrt(w),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(c=c*m+d*y,l=l*m+f*y,u=u*m+_*y,h=h*m+x*y,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-a*f,e[t+2]=l*_+u*f+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new I,gl=new Hn;class et{constructor(e,t,n,i,s,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],x=i[0],m=i[3],p=i[6],v=i[1],w=i[4],y=i[7],R=i[2],A=i[5],g=i[8];return s[0]=o*x+a*v+c*R,s[3]=o*m+a*w+c*A,s[6]=o*p+a*y+c*g,s[1]=l*x+u*v+h*R,s[4]=l*m+u*w+h*A,s[7]=l*p+u*y+h*g,s[2]=d*x+f*v+_*R,s[5]=d*m+f*w+_*A,s[8]=d*p+f*y+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new et;function Vu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hf(){const r=yr("canvas");return r.style.display="block",r}const _l={};function As(r){r in _l||(_l[r]=!0,console.warn(r))}function Gf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Vf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const r={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?To:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[dn]:{primaries:e,whitePoint:n,transfer:To,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:xl,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),r}const at=qf();function fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let is;class Xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=yr("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vo(i[o].image)):s.push(Vo(i[o]))}else s=Vo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;const Wo=new I;class qt extends Qi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Ci,i=Ci,s=yn,o=ui,a=In,c=Yn,l=qt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=zn(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Iu;qt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(f+1)/2,R=(p+1)/2,A=(u+d)/4,g=(h+x)/4,L=(_+m)/4;return w>y&&w>R?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=A/n,s=g/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=g/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new qt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends $f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wu extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Ur.subVectors(this.max,Ks),ss.subVectors(e.a,Ks),rs.subVectors(e.b,Ks),os.subVectors(e.c,Ks),Mi.subVectors(rs,ss),bi.subVectors(os,rs),Oi.subVectors(ss,os);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Oi.z,Oi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Oi.z,0,-Oi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Oi.y,Oi.x,0];return!qo(t,ss,rs,os,Ur)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,ss,rs,os,Ur))?!1:(Or.crossVectors(Mi,bi),t=[Or.x,Or.y,Or.z],qo(t,ss,rs,os,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Nr=new Pn,ss=new I,rs=new I,os=new I,Mi=new I,bi=new I,Oi=new I,Ks=new I,Ur=new I,Or=new I,Fi=new I;function qo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Fi.fromArray(r,s);const a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zf=new Pn,Zs=new I,Xo=new I;class Kn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Xo)),this.expandByPoint(Zs.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new I,jo=new I,Fr=new I,wi=new I,Yo=new I,kr=new I,$o=new I;class Uo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jo.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=wi.dot(this.direction),c=-wi.dot(Fr),l=wi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*c-a,d=o*a-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jo).addScaledVector(Fr,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,s){Yo.subVectors(t,e),kr.subVectors(n,e),$o.crossVectors(Yo,kr);let o=this.direction.dot($o),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const c=a*this.direction.dot(kr.crossVectors(wi,kr));if(c<0)return null;const l=a*this.direction.dot(Yo.cross(wi));if(l<0||c+l>o)return null;const u=-a*wi.dot($o);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,s,o,a,c,l,u,h,d,f,_,x,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,d,f,_,x,m)}set(e,t,n,i,s,o,a,c,l,u,h,d,f,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,x=l*h;t[0]=d+x*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,Qf)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Si.crossVectors(n,xn),Si.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Si.crossVectors(n,xn)),Si.normalize(),Br.crossVectors(xn,Si),i[0]=Si.x,i[4]=Br.x,i[8]=xn.x,i[1]=Si.y,i[5]=Br.y,i[9]=xn.y,i[2]=Si.z,i[6]=Br.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],x=n[6],m=n[10],p=n[14],v=n[3],w=n[7],y=n[11],R=n[15],A=i[0],g=i[4],L=i[8],S=i[12],M=i[1],N=i[5],G=i[9],H=i[13],Z=i[2],ie=i[6],K=i[10],ce=i[14],Y=i[3],xe=i[7],Re=i[11],re=i[15];return s[0]=o*A+a*M+c*Z+l*Y,s[4]=o*g+a*N+c*ie+l*xe,s[8]=o*L+a*G+c*K+l*Re,s[12]=o*S+a*H+c*ce+l*re,s[1]=u*A+h*M+d*Z+f*Y,s[5]=u*g+h*N+d*ie+f*xe,s[9]=u*L+h*G+d*K+f*Re,s[13]=u*S+h*H+d*ce+f*re,s[2]=_*A+x*M+m*Z+p*Y,s[6]=_*g+x*N+m*ie+p*xe,s[10]=_*L+x*G+m*K+p*Re,s[14]=_*S+x*H+m*ce+p*re,s[3]=v*A+w*M+y*Z+R*Y,s[7]=v*g+w*N+y*ie+R*xe,s[11]=v*L+w*G+y*K+R*Re,s[15]=v*S+w*H+y*ce+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],m=e[14],p=e[15],v=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,w=_*d*l-u*m*l-_*c*f+o*m*f+u*c*p-o*d*p,y=u*x*l-_*h*l+_*a*f-o*x*f-u*a*p+o*h*p,R=_*h*c-u*x*c-_*a*d+o*x*d+u*a*m-o*h*m,A=t*v+n*w+i*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=v*g,e[1]=(x*d*s-h*m*s-x*i*f+n*m*f+h*i*p-n*d*p)*g,e[2]=(a*m*s-x*c*s+x*i*l-n*m*l-a*i*p+n*c*p)*g,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*f-n*c*f)*g,e[4]=w*g,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*g,e[6]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*p-t*c*p)*g,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*f+t*c*f)*g,e[8]=y*g,e[9]=(_*h*s-u*x*s-_*n*f+t*x*f+u*n*p-t*h*p)*g,e[10]=(o*x*s-_*a*s+_*n*l-t*x*l-o*n*p+t*a*p)*g,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*g,e[12]=R*g,e[13]=(u*x*i-_*h*i+_*n*d-t*x*d-u*n*m+t*h*m)*g,e[14]=(_*a*i-o*x*i-_*n*c+t*x*c+o*n*m-t*a*m)*g,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*g,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,_=s*h,x=o*u,m=o*h,p=a*h,v=c*l,w=c*u,y=c*h,R=n.x,A=n.y,g=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+y)*R,i[2]=(_-w)*R,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+w)*g,i[9]=(m-v)*g,i[10]=(1-(d+x))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const l=1/s,u=1/o,h=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=di){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===di)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Eo)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=di){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*l,f=(n+i)*u;let _,x;if(a===di)_=(o+s)*h,x=-2*h;else if(a===Eo)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new I,Un=new Je,Jf=new I(0,0,0),Qf=new I(1,1,1),Si=new I,Br=new I,xn=new I,yl=new Je,Ml=new Hn;class Gn{constructor(e=0,t=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const bl=new I,cs=new Hn,ni=new Je,zr=new I,Js=new I,tp=new I,np=new Hn,wl=new I(1,0,0),Sl=new I(0,1,0),Tl=new I(0,0,1),El={type:"added"},ip={type:"removed"},ls={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Dt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,t=new Gn,n=new Hn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new et}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Js,zr,this.up):ni.lookAt(zr,Js,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(ni),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(El),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(El),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new I,ii=new I,Zo=new I,si=new I,hs=new I,us=new I,Al=new I,Jo=new I,Qo=new I,ea=new I,ta=new Mt,na=new Mt,ia=new Mt;class Cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){On.subVectors(i,t),ii.subVectors(n,t),Zo.subVectors(e,t);const o=On.dot(On),a=On.dot(ii),c=On.dot(Zo),l=ii.dot(ii),u=ii.dot(Zo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),ii.subVectors(e,t),On.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),On.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;hs.subVectors(i,n),us.subVectors(s,n),Jo.subVectors(e,n);const c=hs.dot(Jo),l=us.dot(Jo);if(c<=0&&l<=0)return t.copy(n);Qo.subVectors(e,i);const u=hs.dot(Qo),h=us.dot(Qo);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(hs,o);ea.subVectors(e,s);const f=hs.dot(ea),_=us.dot(ea);if(_>=0&&f<=_)return t.copy(s);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(us,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Al.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Al,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function sa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Gc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return at.workingToColorSpace(sn.copy(this),e),Math.round(ct(sn.r*255,0,255))*65536+Math.round(ct(sn.g*255,0,255))*256+Math.round(ct(sn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(sn.copy(this),t);const n=sn.r,i=sn.g,s=sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=kt){at.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,i=sn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Hr);const n=dr(Ti.h,Hr.h,t),i=dr(Ti.s,Hr.s,t),s=dr(Ti.l,Hr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new fe;fe.NAMES=Xu;let sp=0;class un extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Es,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Oa,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bt extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new I,Gr=new He;let rp=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class ju extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let op=0;const Tn=new Je,ra=new Dt,ds=new I,vn=new Pn,Qs=new Pn,$t=new I;class Ut extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Yu:ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(vn.min,Qs.min),vn.expandByPoint($t),$t.addVectors(vn.max,Qs.max),vn.expandByPoint($t)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$t.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(e,l),$t.add(ds)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,u=new I,h=new I,d=new He,f=new He,_=new He,x=new I,m=new I;function p(L,S,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(N),a[L].add(x),a[S].add(x),a[M].add(x),c[L].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,S=v.length;L<S;++L){const M=v[L],N=M.start,G=M.count;for(let H=N,Z=N+G;H<Z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new I,y=new I,R=new I,A=new I;function g(L){R.fromBufferAttribute(i,L),A.copy(R);const S=a[L];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);const N=y.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,N)}for(let L=0,S=v.length;L<S;++L){const M=v[L],N=M.start,G=M.count;for(let H=N,Z=N+G;H<Z;H+=3)g(e.getX(H+0)),g(e.getX(H+1)),g(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[_++]=l[f++]}return new Jt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new Je,ki=new Uo,Vr=new Kn,Cl=new I,Wr=new I,qr=new I,Xr=new I,oa=new I,jr=new I,Il=new I,Yr=new I;class $ extends Dt{constructor(e=new Ut,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){jr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(oa.fromBufferAttribute(h,e),o?jr.addScaledVector(oa,u):jr.addScaledVector(oa.sub(t),u))}t.add(jr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Vr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Vr,Cl)===null||ki.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=w;y<R;y+=3){const A=a.getX(y),g=a.getX(y+1),L=a.getX(y+2);i=$r(this,p,e,n,l,u,h,A,g,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const v=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);i=$r(this,o,e,n,l,u,h,v,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=w;y<R;y+=3){const A=y,g=y+1,L=y+2;i=$r(this,p,e,n,l,u,h,A,g,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const v=m,w=m+1,y=m+2;i=$r(this,o,e,n,l,u,h,v,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ap(r,e,t,n,i,s,o,a){let c;if(e.side===rn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===jn,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:r}}function $r(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Wr),r.getVertexPosition(c,qr),r.getVertexPosition(l,Xr);const u=ap(r,e,t,n,Wr,qr,Xr,Il);if(u){const h=new I;Cn.getBarycoord(Il,Wr,qr,Xr,h),i&&(u.uv=Cn.getInterpolatedAttribute(i,a,c,l,h,new He)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,c,l,h,new He)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Cn.getNormal(Wr,qr,Xr,d.normal),u.face=d,u.barycoord=h}return u}class Xt extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function _(x,m,p,v,w,y,R,A,g,L,S){const M=y/g,N=R/L,G=y/2,H=R/2,Z=A/2,ie=g+1,K=L+1;let ce=0,Y=0;const xe=new I;for(let Re=0;Re<K;Re++){const re=Re*N-H;for(let Ce=0;Ce<ie;Ce++){const wt=Ce*M-G;xe[x]=wt*v,xe[m]=re*w,xe[p]=Z,l.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[p]=A>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(Ce/g),h.push(1-Re/L),ce+=1}}for(let Re=0;Re<L;Re++)for(let re=0;re<g;re++){const Ce=d+re+ie*Re,wt=d+re+ie*(Re+1),ne=d+(re+1)+ie*(Re+1),pe=d+(re+1)+ie*Re;c.push(Ce,wt,pe),c.push(wt,ne,pe),Y+=6}a.addGroup(f,Y,S),f+=Y,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=Os(r[t]);for(const i in n)e[i]=n[i]}return e}function cp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $u(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const lp={clone:Os,merge:ln};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new I,Pl=new He,Ll=new He;class hn extends Ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Pl,Ll),t.subVectors(Ll,Pl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class dp extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(fs,ps,e,t);i.layers=this.layers,this.add(i);const s=new hn(fs,ps,e,t);s.layers=this.layers,this.add(s);const o=new hn(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new hn(fs,ps,e,t);a.layers=this.layers,this.add(a);const c=new hn(fs,ps,e,t);c.layers=this.layers,this.add(c);const l=new hn(fs,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zu extends qt{constructor(e=[],t=Ls,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Pi});s.uniforms.tEquirect.value=t;const o=new $(i,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=yn),new dp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class rt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mp extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new I;class Mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qu extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const er=new I,gs=new I,_s=new I,xs=new He,tr=new He,ed=new Je,Kr=new I,nr=new I,Zr=new I,Dl=new He,ca=new He,Nl=new He;class td extends Dt{constructor(e=new Qu){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ju(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Mr(n,3,0,!1)),ms.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=ms,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Jr(Kr.set(-.5,-.5,0),_s,o,gs,i,s),Jr(nr.set(.5,-.5,0),_s,o,gs,i,s),Jr(Zr.set(.5,.5,0),_s,o,gs,i,s),Dl.set(0,0),ca.set(1,0),Nl.set(1,1);let a=e.ray.intersectTriangle(Kr,nr,Zr,!1,er);if(a===null&&(Jr(nr.set(-.5,.5,0),_s,o,gs,i,s),ca.set(0,1),a=e.ray.intersectTriangle(Kr,Zr,nr,!1,er),a===null))return;const c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:Cn.getInterpolation(er,Kr,nr,Zr,Dl,ca,Nl,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jr(r,e,t,n,i,s){xs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(tr.x=s*xs.x-i*xs.y,tr.y=i*xs.x+s*xs.y):tr.copy(xs),r.copy(e),r.x+=tr.x,r.y+=tr.y,r.applyMatrix4(ed)}const Ul=new I,Ol=new Mt,Fl=new Mt,gp=new I,kl=new Je,Qr=new I,la=new Kn,Bl=new Je,ha=new Uo;class yc extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1&&(Bl.copy(i).invert(),ha.copy(e.ray).applyMatrix4(Bl),!(this.boundingBox!==null&&ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ol.fromBufferAttribute(i.attributes.skinIndex,e),Fl.fromBufferAttribute(i.attributes.skinWeight,e),Ul.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Fl.getComponent(s);if(o!==0){const a=Ol.getComponent(s);kl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gp.copy(Ul).applyMatrix4(kl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nd extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qc extends qt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Zt,u=Zt,h,d){super(null,o,a,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zl=new Je,_p=new Je;class Xc{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_p;zl.multiplyMatrices(a,t[s]),zl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qc(t,e,e,In,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new nd),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Mc extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Je,Hl=new Je,eo=[],Gl=new Pn,xp=new Je,ir=new $,sr=new Kn;class vp extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),Gl.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Gl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),sr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vs),Hl.multiplyMatrices(n,vs),ir.matrixWorld=Hl,ir.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const c=eo[o];c.instanceId=s,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(i*this.count),i,this.count,Do,Bn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ua=new I,yp=new I,Mp=new et;class Wi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ua.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mp.getNormalMatrix(e),i=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Kn,to=new I;class jc{constructor(e=new Wi,t=new Wi,n=new Wi,i=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],x=i[10],m=i[11],p=i[12],v=i[13],w=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+u,m+_,y+v).normalize(),n[3].setComponents(c-o,d-u,m-_,y-v).normalize(),n[4].setComponents(c-a,d-h,m-x,y-w).normalize(),t===di)n[5].setComponents(c+a,d+h,m+x,y+w).normalize();else if(t===Eo)n[5].setComponents(a,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xn extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new I,Ro=new I,Vl=new Je,rr=new Uo,no=new Kn,da=new I,Wl=new I;class wr extends Dt{constructor(e=new Ut,t=new Xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ao.fromBufferAttribute(t,i-1),Ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ao.distanceTo(Ro);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Vl.copy(i).invert(),rr.copy(e.ray).applyMatrix4(Vl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=f,m=_-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),w=io(this,e,rr,c,p,v,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(f),p=io(this,e,rr,c,x,m,_-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=f,m=_-1;x<m;x+=l){const p=io(this,e,rr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=io(this,e,rr,c,_-1,f,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function io(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Ao.fromBufferAttribute(a,i),Ro.fromBufferAttribute(a,s),t.distanceSqToSegment(Ao,Ro,da,Wl)>n)return;da.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(da);if(!(l<e.near||l>e.far))return{distance:l,point:Wl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const ql=new I,Xl=new I;class Co extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ql.fromBufferAttribute(t,i),Xl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ql.distanceTo(Xl);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bp extends wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ss extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new Je,bc=new Uo,so=new Kn,ro=new I;class Mo extends Dt{constructor(e=new Ut,t=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;jl.copy(i).invert(),bc.copy(e.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=d,x=f;_<x;_++){const m=l.getX(_);ro.fromBufferAttribute(h,m),Yl(ro,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,x=f;_<x;_++)ro.fromBufferAttribute(h,_),Yl(ro,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yl(r,e,t,n,i,s,o){const a=bc.distanceSqToPoint(r);if(a<t){const c=new I;bc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wp extends qt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class id extends qt{constructor(e,t,n=Zi,i,s,o,a=Zt,c=Zt,l,u=gr,h=1){if(u!==gr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yc extends Ut{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,_=n*2+s,x=i+1,m=new I,p=new I;for(let v=0;v<=_;v++){let w=0,y=0,R=0,A=0;if(v<=n){const S=v/n,M=S*Math.PI/2;y=-u-e*Math.cos(M),R=e*Math.sin(M),A=-e*Math.cos(M),w=S*h}else if(v<=n+s){const S=(v-n)/s;y=-u+S*t,R=e,A=0,w=h+S*d}else{const S=(v-n-s)/n,M=S*Math.PI/2;y=u+e*Math.sin(M),R=e*Math.cos(M),A=e*Math.sin(M),w=h+d+S*h}const g=Math.max(0,Math.min(1,w/f));let L=0;v===0?L=.5/i:v===_&&(L=-.5/i);for(let S=0;S<=i;S++){const M=S/i,N=M*Math.PI*2,G=Math.sin(N),H=Math.cos(N);p.x=-R*H,p.y=y,p.z=R*G,a.push(p.x,p.y,p.z),m.set(-R*H,A,R*G),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+L,g)}if(v>0){const S=(v-1)*x;for(let M=0;M<i;M++){const N=S+M,G=S+M+1,H=v*x+M,Z=v*x+M+1;o.push(N,G,H),o.push(G,Z,H)}}}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sr extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,u=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lt extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let _=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function v(){const y=new I,R=new I;let A=0;const g=(t-e)/n;for(let L=0;L<=s;L++){const S=[],M=L/s,N=M*(t-e)+e;for(let G=0;G<=i;G++){const H=G/i,Z=H*c+a,ie=Math.sin(Z),K=Math.cos(Z);R.x=N*ie,R.y=-M*n+m,R.z=N*K,h.push(R.x,R.y,R.z),y.set(ie,g,K).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-M),S.push(_++)}x.push(S)}for(let L=0;L<i;L++)for(let S=0;S<s;S++){const M=x[S][L],N=x[S+1][L],G=x[S+1][L+1],H=x[S][L+1];(e>0||S!==0)&&(u.push(M,N,H),A+=3),(t>0||S!==s-1)&&(u.push(N,G,H),A+=3)}l.addGroup(p,A,0),p+=A}function w(y){const R=_,A=new He,g=new I;let L=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),_++;const N=_;for(let G=0;G<=i;G++){const Z=G/i*c+a,ie=Math.cos(Z),K=Math.sin(Z);g.x=S*K,g.y=m*M,g.z=S*ie,h.push(g.x,g.y,g.z),d.push(0,M,0),A.x=ie*.5+.5,A.y=K*.5*M+.5,f.push(A.x,A.y),_++}for(let G=0;G<i;G++){const H=R+G,Z=N+G;y===!0?u.push(Z,Z+1,H):u.push(Z+1,Z,H),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mn extends Lt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zs extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const w=new I,y=new I,R=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],y),f(t[A+2],R),c(w,y,R,v)}function c(v,w,y,R){const A=R+1,g=[];for(let L=0;L<=A;L++){g[L]=[];const S=v.clone().lerp(y,L/A),M=w.clone().lerp(y,L/A),N=A-L;for(let G=0;G<=N;G++)G===0&&L===A?g[L][G]=S:g[L][G]=S.clone().lerp(M,G/N)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){const M=Math.floor(S/2);S%2===0?(d(g[L][M+1]),d(g[L+1][M]),d(g[L][M])):(d(g[L][M+1]),d(g[L+1][M+1]),d(g[L+1][M]))}}function l(v){const w=new I;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(v),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function u(){const v=new I;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];const y=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(y,1-R)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const w=o[v+0],y=o[v+2],R=o[v+4],A=Math.max(w,y,R),g=Math.min(w,y,R);A>.9&&g<.1&&(w<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,w){const y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function _(){const v=new I,w=new I,y=new I,R=new I,A=new He,g=new He,L=new He;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),A.set(o[M+0],o[M+1]),g.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),R.copy(v).add(w).add(y).divideScalar(3);const N=m(R);x(A,M+0,v,N),x(g,M+2,w,N),x(L,M+4,y,N)}}function x(v,w,y,R){R<0&&v.x===1&&(o[w]=v.x-1),y.x===0&&y.z===0&&(o[w]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.vertices,e.indices,e.radius,e.details)}}class $c extends zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $c(e.radius,e.detail)}}class Tr extends zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tr(e.radius,e.detail)}}class $n extends zs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $n(e.radius,e.detail)}}class es extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let w=0;w<l;w++){const y=w*h-s;_.push(y,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const w=v+l*p,y=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;f.push(w,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Er extends Ut{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/i,f=new I,_=new He;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const v=p+m,w=v,y=v+n+1,R=v+n+2,A=v+1;a.push(w,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vt extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],_=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],w=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+w*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-w),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const w=u[p][v+1],y=u[p][v],R=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&f.push(w,y,A),(p!==n-1||c<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oo extends zs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Vn extends Ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const x=_/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const x=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kc extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Kc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sd extends un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rd extends un{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Sp extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ep(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ap(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $l(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function od(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ar{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rp extends Ar{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ws:s=e,a=2*t-n;break;case So:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ws:o=e,c=2*n-t;break;case So:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),x=_*_,m=x*_,p=-d*m+2*d*x-d*_,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,w=(-1-f)*m+(1.5+f)*x+.5*_,y=f*m-f*x;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+v*o[l+R]+w*o[c+R]+y*o[h+R];return s}}class ad extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}}class Cp extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ep(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const x=t[h+_];if(x!==t[d+_]||x!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=vr;class Hs extends Wn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=xr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class cd extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}cd.prototype.ValueTypeName="color";class Fs extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}Fs.prototype.ValueTypeName="number";class Ip extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Hn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class ks extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ip(this.times,this.values,this.getValueSize(),e)}}ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Wn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=xr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}Bs.prototype.ValueTypeName="vector";class wc{constructor(e="",t=-1,n=[],i=Hc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Lp(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Ap(c);c=$l(c,1,u),l=$l(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Fs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,x){if(f.length!==0){const m=[],p=[];od(f,m,p,_),m.length!==0&&x.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)f[d[_].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[_].morphTargets.length;++v){const w=d[_];m.push(w.time),p.push(w.morphTarget===x?1:0)}i.push(new Fs(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Bs,f+".position",d,"pos",i),n(ks,f+".quaternion",d,"rot",i),n(Bs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return cd;case"quaternion":return ks;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Lp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Pp(r.type);if(r.times===void 0){const t=[],n=[];od(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ii={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Dp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const ld=new Dp;class Ui{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class Np extends Error{constructor(e,t){super(e),this.response=t}}class Fo extends Ui{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ii.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ri[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:w,value:y})=>{if(w)p.close();else{x+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let A=0,g=u.length;A<g;A++){const L=u[A];L.onProgress&&L.onProgress(R)}p.enqueue(y),v()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Np(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Ii.add(e,l);const u=ri[e];delete ri[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ri[e];if(u===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Up extends Ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ii.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=yr("img");function c(){u(),Ii.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class hd extends Ui{constructor(e){super(e)}load(e,t,n,i){const s=new qt,o=new Up(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Rr extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Op extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new Je,Kl=new I,Zl=new I;class Zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends Zc{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kp extends Rr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jl=new Je,or=new I,pa=new I;class Bp extends Zc{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),i.makeTranslation(-or.x,-or.y,-or.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class zp extends Rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jc extends Ku{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hp extends Zc{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Hp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gp extends Rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ma=new WeakMap;class Vp extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ii.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(ma.has(o)===!0)i&&i(ma.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ii.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ma.set(c,l),Ii.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ii.add(e,c),s.manager.itemStart(e)}}class Wp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ql();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ql(){return performance.now()}class Xp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Hn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Hn.multiplyQuaternionsFlat(e,o,e,t,e,n),Hn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Qc="\\[\\]\\.:\\/",jp=new RegExp("["+Qc+"]","g"),el="[^"+Qc+"]",Yp="[^"+Qc.replace("\\.","")+"]",$p=/((?:WC+[\/:])*)/.source.replace("WC",el),Kp=/(WCOD+)?/.source.replace("WCOD",Yp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),Qp=new RegExp("^"+$p+Kp+Zp+Jp+"$"),em=["material","materials","bones","map"];class tm{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jp,"")}static parseTrackName(e){const t=Qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);em.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=tm;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:bs,endingEnd:bs};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ff:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Hc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===df;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Bu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ws,i.endingEnd=ws):(e?i.endingStart=this.zeroSlopeAtStart?ws:bs:i.endingStart=So,t?i.endingEnd=this.zeroSlopeAtEnd?ws:bs:i.endingEnd=So)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const im=new Float32Array(1);class sm extends Qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let _=u[f];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;_=new Xp(bt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,f),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ad(new Float32Array(2),new Float32Array(2),1,im),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?wc.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Hc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new nm(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?wc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function eh(r,e,t,n){const i=rm(n);switch(t){case Uu:return r*e;case Do:return r*e/i.components*i.byteLength;case kc:return r*e/i.components*i.byteLength;case Fu:return r*e*2/i.components*i.byteLength;case Bc:return r*e*2/i.components*i.byteLength;case Ou:return r*e*3/i.components*i.byteLength;case In:return r*e*4/i.components*i.byteLength;case zc:return r*e*4/i.components*i.byteLength;case go:case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xo:case vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ja:case $a:return Math.max(r,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(r,8)*Math.max(e,8)/2;case Ka:case Za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yo:case fc:case pc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ku:case mc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gc:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rm(r){switch(r){case Yn:case Lu:return{byteLength:1,components:1};case pr:case Du:case br:return{byteLength:2,components:1};case Oc:case Fc:return{byteLength:2,components:4};case Zi:case Uc:case Bn:return{byteLength:4,components:1};case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function om(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];r.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
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
}`,f0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,C0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,D0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:am,alphahash_pars_fragment:cm,alphamap_fragment:lm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:dm,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:xm,bsdfs:vm,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Tm,color_fragment:Em,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Im,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Dm,displacementmap_vertex:Nm,emissivemap_fragment:Um,emissivemap_pars_fragment:Om,colorspace_fragment:Fm,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Hm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Wm,fog_pars_vertex:qm,fog_fragment:Xm,fog_pars_fragment:jm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:cg,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:dg,map_fragment:fg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:xg,morphinstance_vertex:vg,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:bg,morphtarget_vertex:wg,normal_fragment_begin:Sg,normal_fragment_maps:Tg,normal_pars_fragment:Eg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Dg,opaque_fragment:Ng,packing:Ug,premultiplied_alpha_fragment:Og,project_vertex:Fg,dithering_fragment:kg,dithering_pars_fragment:Bg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:qg,skinbase_vertex:Xg,skinning_pars_vertex:jg,skinning_vertex:Yg,skinnormal_vertex:$g,specularmap_fragment:Kg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:e0,transmission_pars_fragment:t0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:c0,backgroundCube_frag:l0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:x0,linedashed_frag:v0,meshbasic_vert:y0,meshbasic_frag:M0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:S0,meshmatcap_frag:T0,meshnormal_vert:E0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:I0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:N0,points_frag:U0,shadow_vert:O0,shadow_frag:F0,sprite_vert:k0,sprite_frag:B0},ye={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},qn={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new fe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new fe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};qn.physical={uniforms:ln([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ao={r:0,b:0,g:0},zi=new Gn,z0=new Je;function H0(r,e,t,n,i,s,o){const a=new fe(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function _(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1;const R=_(w);R===null?p(a,c):R&&R.isColor&&(p(R,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(w,y){const R=_(y);R&&(R.isCubeTexture||R.mapping===Lo)?(u===void 0&&(u=new $(new Xt(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Os(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,g,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),zi.copy(y.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(zi)),u.material.toneMapped=at.getTransfer(R.colorSpace)!==Et,(h!==R||d!==R.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=r.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new $(new es(2,2),new Ni({name:"BackgroundMaterial",uniforms:Os(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(R.colorSpace)!==Et,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,f=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,y){w.getRGB(ao,$u(r)),n.buffers.color.setClear(ao.r,ao.g,ao.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m,dispose:v}}function G0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,N,G,H,Z){let ie=!1;const K=h(H,G,N);s!==K&&(s=K,l(s.object)),ie=f(M,H,G,Z),ie&&_(M,H,G,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,y(M,N,G,H),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,N,G){const H=G.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let ie=Z[N.id];ie===void 0&&(ie={},Z[N.id]=ie);let K=ie[H];return K===void 0&&(K=d(c()),ie[H]=K),K}function d(M){const N=[],G=[],H=[];for(let Z=0;Z<t;Z++)N[Z]=0,G[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,N,G,H){const Z=s.attributes,ie=N.attributes;let K=0;const ce=G.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const Re=Z[Y];let re=ie[Y];if(re===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),Re===void 0||Re.attribute!==re||re&&Re.data!==re.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function _(M,N,G,H){const Z={},ie=N.attributes;let K=0;const ce=G.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let Re=ie[Y];Re===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor));const re={};re.attribute=Re,Re&&Re.data&&(re.data=Re.data),Z[Y]=re,K++}s.attributes=Z,s.attributesNum=K,s.index=H}function x(){const M=s.newAttributes;for(let N=0,G=M.length;N<G;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){const G=s.newAttributes,H=s.enabledAttributes,Z=s.attributeDivisors;G[M]=1,H[M]===0&&(r.enableVertexAttribArray(M),H[M]=1),Z[M]!==N&&(r.vertexAttribDivisor(M,N),Z[M]=N)}function v(){const M=s.newAttributes,N=s.enabledAttributes;for(let G=0,H=N.length;G<H;G++)N[G]!==M[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function w(M,N,G,H,Z,ie,K){K===!0?r.vertexAttribIPointer(M,N,G,Z,ie):r.vertexAttribPointer(M,N,G,H,Z,ie)}function y(M,N,G,H){x();const Z=H.attributes,ie=G.getAttributes(),K=N.defaultAttributeValues;for(const ce in ie){const Y=ie[ce];if(Y.location>=0){let xe=Z[ce];if(xe===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),xe!==void 0){const Re=xe.normalized,re=xe.itemSize,Ce=e.get(xe);if(Ce===void 0)continue;const wt=Ce.buffer,ne=Ce.type,pe=Ce.bytesPerElement,Ue=ne===r.INT||ne===r.UNSIGNED_INT||xe.gpuType===Uc;if(xe.isInterleavedBufferAttribute){const Te=xe.data,Fe=Te.stride,mt=xe.offset;if(Te.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)p(Y.location+Ve,Te.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)m(Y.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Ve=0;Ve<Y.locationSize;Ve++)w(Y.location+Ve,re/Y.locationSize,ne,Re,Fe*pe,(mt+re/Y.locationSize*Ve)*pe,Ue)}else{if(xe.isInstancedBufferAttribute){for(let Te=0;Te<Y.locationSize;Te++)p(Y.location+Te,xe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Te=0;Te<Y.locationSize;Te++)m(Y.location+Te);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Te=0;Te<Y.locationSize;Te++)w(Y.location+Te,re/Y.locationSize,ne,Re,re*pe,re/Y.locationSize*Te*pe,Ue)}}else if(K!==void 0){const Re=K[ce];if(Re!==void 0)switch(Re.length){case 2:r.vertexAttrib2fv(Y.location,Re);break;case 3:r.vertexAttrib3fv(Y.location,Re);break;case 4:r.vertexAttrib4fv(Y.location,Re);break;default:r.vertexAttrib1fv(Y.location,Re)}}}}v()}function R(){L();for(const M in n){const N=n[M];for(const G in N){const H=N[G];for(const Z in H)u(H[Z].object),delete H[Z];delete N[G]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const N=n[M.id];for(const G in N){const H=N[G];for(const Z in H)u(H[Z].object),delete H[Z];delete N[G]}delete n[M.id]}function g(M){for(const N in n){const G=n[N];if(G[M.id]===void 0)continue;const H=G[M.id];for(const Z in H)u(H[Z].object),delete H[Z];delete G[M.id]}}function L(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function V0(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function W0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==In&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){const L=g===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Yn&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&g!==Bn&&!L)}function c(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function q0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Wi,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,w=v*4;let y=p.clippingState||null;c.value=y,y=u(_,d,w,f);for(let R=0;R!==w;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(h[w]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function X0(r){let e=new WeakMap;function t(o,a){return a===Wa?o.mapping=Ls:a===qa&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===qa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fp(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ts=4,th=[.125,.215,.35,.446,.526,.582],Yi=20,ga=new Jc,nh=new fe;let _a=null,xa=0,va=0,ya=!1;const qi=(1+Math.sqrt(5))/2,ys=1/qi,ih=[new I(-qi,ys,0),new I(qi,ys,0),new I(-ys,0,qi),new I(ys,0,qi),new I(0,qi,-ys),new I(0,qi,ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],j0=new I;class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=j0}=s;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=ya,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:br,format:In,colorSpace:dn,depthBuffer:!1},i=rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=$0(s,e,t)}return i}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,n,i,s){const c=new hn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nh),h.toneMapping=Li,h.autoClear=!1;const _=new Bt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new $(new Xt,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(nh),m=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[v],s.y,s.z)):w===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[v]));const y=this._cubeSize;co(i,w*y,v>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ih[(i-s-1)%ih.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let v=0;for(let g=0;g<Yi;++g){const L=g/x,S=Math.exp(-L*L/2);p.push(S),g===0?v+=S:g<m&&(v+=2*S)}for(let g=0;g<p.length;g++)p[g]=p[g]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const y=this._sizeLods[i],R=3*y*(i>w-Ts?i-w+Ts:0),A=4*(this._cubeSize-y);co(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(h,ga)}}function Y0(r){const e=[],t=[],n=[];let i=r;const s=r-Ts+1+th.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Ts?c=th[o-r+Ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,x=3,m=2,p=1,v=new Float32Array(x*_*f),w=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let A=0;A<f;A++){const g=A%3*2/3-1,L=A>2?0:-1,S=[g,L,0,g+2/3,L,0,g+2/3,L+1,0,g,L,0,g+2/3,L+1,0,g,L+1,0];v.set(S,x*_*A),w.set(d,m*_*A);const M=[A,A,A,A,A,A];y.set(M,p*_*A)}const R=new Ut;R.setAttribute("position",new Jt(v,x)),R.setAttribute("uv",new Jt(w,m)),R.setAttribute("faceIndex",new Jt(y,p)),e.push(R),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rh(r,e,t){const n=new Ji(r,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $0(r,e,t){const n=new Float32Array(Yi),i=new I(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function oh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ah(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function K0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wa||c===qa,u=c===Ls||c===Ds;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sh(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new sh(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let w=0,y=v.length;w<y;w+=3){const R=v[w+0],A=v[w+1],g=v[w+2];d.push(R,A,A,g,g,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let w=0,y=v.length/3-1;w<y;w+=3){const R=w+0,A=w+1,g=w+2;d.push(R,A,A,g,g,R)}}else return;const m=new(Vu(d)?Yu:ju)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Q0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function e_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function t_(r,e,t){const n=new WeakMap,i=new Mt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const g=new Float32Array(R*A*4*h),L=new Wu(g,R,A,h);L.type=Bn,L.needsUpdate=!0;const S=y*4;for(let N=0;N<h;N++){const G=p[N],H=v[N],Z=w[N],ie=R*A*4*N;for(let K=0;K<G.count;K++){const ce=K*S;_===!0&&(i.fromBufferAttribute(G,K),g[ie+ce+0]=i.x,g[ie+ce+1]=i.y,g[ie+ce+2]=i.z,g[ie+ce+3]=0),x===!0&&(i.fromBufferAttribute(H,K),g[ie+ce+4]=i.x,g[ie+ce+5]=i.y,g[ie+ce+6]=i.z,g[ie+ce+7]=0),m===!0&&(i.fromBufferAttribute(Z,K),g[ie+ce+8]=i.x,g[ie+ce+9]=i.y,g[ie+ce+10]=i.z,g[ie+ce+11]=Z.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new He(R,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function n_(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const fd=new qt,ch=new id(1,1),pd=new Wu,md=new Kf,gd=new Zu,lh=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Vs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=lh[i];if(s===void 0&&(s=new Float32Array(i),lh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function i_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function s_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Yt(t,e)}}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Yt(t,e)}}function o_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Yt(t,e)}}function a_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;fh.set(n),r.uniformMatrix2fv(this.addr,!1,fh),Yt(t,n)}}function c_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;dh.set(n),r.uniformMatrix3fv(this.addr,!1,dh),Yt(t,n)}}function l_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;uh.set(n),r.uniformMatrix4fv(this.addr,!1,uh),Yt(t,n)}}function h_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Yt(t,e)}}function d_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Yt(t,e)}}function f_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Yt(t,e)}}function p_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Yt(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Yt(t,e)}}function __(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Yt(t,e)}}function x_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ch.compareFunction=Gu,s=ch):s=fd,t.setTexture2D(e||s,i)}function v_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||md,i)}function y_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gd,i)}function M_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pd,i)}function b_(r){switch(r){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}function w_(r,e){r.uniform1fv(this.addr,e)}function S_(r,e){const t=Vs(e,this.size,2);r.uniform2fv(this.addr,t)}function T_(r,e){const t=Vs(e,this.size,3);r.uniform3fv(this.addr,t)}function E_(r,e){const t=Vs(e,this.size,4);r.uniform4fv(this.addr,t)}function A_(r,e){const t=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function R_(r,e){const t=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function C_(r,e){const t=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I_(r,e){r.uniform1iv(this.addr,e)}function P_(r,e){r.uniform2iv(this.addr,e)}function L_(r,e){r.uniform3iv(this.addr,e)}function D_(r,e){r.uniform4iv(this.addr,e)}function N_(r,e){r.uniform1uiv(this.addr,e)}function U_(r,e){r.uniform2uiv(this.addr,e)}function O_(r,e){r.uniform3uiv(this.addr,e)}function F_(r,e){r.uniform4uiv(this.addr,e)}function k_(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fd,s[o])}function B_(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||md,s[o])}function z_(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gd,s[o])}function H_(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pd,s[o])}function G_(r){switch(r){case 5126:return w_;case 35664:return S_;case 35665:return T_;case 35666:return E_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return I_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return H_}}class V_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b_(t.type)}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G_(t.type)}}class q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function ph(r,e){r.seq.push(e),r.map[e.id]=e}function X_(r,e,t){const n=r.name,i=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),o=Ma.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ph(t,l===void 0?new V_(a,r,e):new W_(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new q_(a),ph(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);X_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const j_=37297;let Y_=0;function $_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gh=new et;function K_(r){at._getMatrix(gh,at.workingColorSpace,r);const e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case To:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _h(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$_(r.getShaderSource(e),o)}else return i}function Z_(r,e){const t=K_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J_(r,e){let t;switch(e){case sf:t="Linear";break;case rf:t="Reinhard";break;case of:t="Cineon";break;case af:t="ACESFilmic";break;case lf:t="AgX";break;case hf:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new I;function Q_(){at.getLuminanceCoefficients(lo);const r=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function tx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function hr(r){return r!==""}function xh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(r){return r.replace(ix,rx)}const sx=new Map;function rx(r,e){let t=tt[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(r){return r.replace(ox,ax)}function ax(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mh(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function cx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case tf:e="ENVMAP_BLENDING_MIX";break;case nf:e="ENVMAP_BLENDING_ADD";break}return e}function dx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=cx(t),l=lx(t),u=hx(t),h=ux(t),d=dx(t),f=ex(t),_=tx(s),x=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?tt.tonemapping_pars_fragment:"",t.toneMapping!==Li?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Z_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=Sc(o),o=xh(o,t),o=vh(o,t),a=Sc(a),a=xh(a,t),a=vh(a,t),o=yh(o),a=yh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=v+m+o,y=v+p+a,R=mh(i,i.VERTEX_SHADER,w),A=mh(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function g(N){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),H=i.getShaderInfoLog(R).trim(),Z=i.getShaderInfoLog(A).trim();let ie=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,A);else{const ce=_h(i,R,"vertex"),Y=_h(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+ce+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||Z==="")&&(K=!1);K&&(N.diagnostics={runnable:ie,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(R),i.deleteShader(A),L=new bo(i,x),S=nx(i,x)}let L;this.getUniforms=function(){return L===void 0&&g(this),L};let S;this.getAttributes=function(){return S===void 0&&g(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,j_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function _x(r,e,t,n,i,s,o){const a=new qu,c=new mx,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,N,G,H){const Z=G.fog,ie=H.geometry,K=S.isMeshStandardMaterial?G.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),Y=ce&&ce.mapping===Lo?ce.image.height:null,xe=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Re=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,re=Re!==void 0?Re.length:0;let Ce=0;ie.morphAttributes.position!==void 0&&(Ce=1),ie.morphAttributes.normal!==void 0&&(Ce=2),ie.morphAttributes.color!==void 0&&(Ce=3);let wt,ne,pe,Ue;if(xe){const Q=qn[xe];wt=Q.vertexShader,ne=Q.fragmentShader}else wt=S.vertexShader,ne=S.fragmentShader,c.update(S),pe=c.getVertexShaderID(S),Ue=c.getFragmentShaderID(S);const Te=r.getRenderTarget(),Fe=r.state.buffers.depth.getReversed(),mt=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,It=!!S.map,xt=!!S.matcap,nt=!!ce,U=!!S.aoMap,Wt=!!S.lightMap,it=!!S.bumpMap,ht=!!S.normalMap,Ne=!!S.displacementMap,dt=!!S.emissiveMap,Be=!!S.metalnessMap,Ke=!!S.roughnessMap,Ot=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,V=S.iridescence>0,ee=S.sheen>0,se=S.transmission>0,j=Ot&&!!S.anisotropyMap,Pe=P&&!!S.clearcoatMap,_e=P&&!!S.clearcoatNormalMap,z=P&&!!S.clearcoatRoughnessMap,de=V&&!!S.iridescenceMap,ae=V&&!!S.iridescenceThicknessMap,Se=ee&&!!S.sheenColorMap,te=ee&&!!S.sheenRoughnessMap,ke=!!S.specularMap,ge=!!S.specularColorMap,Xe=!!S.specularIntensityMap,O=se&&!!S.transmissionMap,ve=se&&!!S.thicknessMap,le=!!S.gradientMap,Me=!!S.alphaMap,ue=S.alphaTest>0,J=!!S.alphaHash,Ee=!!S.extensions;let je=Li;S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(je=r.toneMapping);const At={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:wt,fragmentShader:ne,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:mt,instancingColor:mt&&H.instanceColor!==null,instancingMorph:mt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:dn,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:xt,envMap:nt,envMapMode:nt&&ce.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Wt,bumpMap:it,normalMap:ht,displacementMap:d&&Ne,emissiveMap:dt,normalMapObjectSpace:ht&&S.normalMapType===_f,normalMapTangentSpace:ht&&S.normalMapType===No,metalnessMap:Be,roughnessMap:Ke,anisotropy:Ot,anisotropyMap:j,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:z,dispersion:b,iridescence:V,iridescenceMap:de,iridescenceThicknessMap:ae,sheen:ee,sheenColorMap:Se,sheenRoughnessMap:te,specularMap:ke,specularColorMap:ge,specularIntensityMap:Xe,transmission:se,transmissionMap:O,thicknessMap:ve,gradientMap:le,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ue,alphaHash:J,combine:S.combine,mapUv:It&&x(S.map.channel),aoMapUv:U&&x(S.aoMap.channel),lightMapUv:Wt&&x(S.lightMap.channel),bumpMapUv:it&&x(S.bumpMap.channel),normalMapUv:ht&&x(S.normalMap.channel),displacementMapUv:Ne&&x(S.displacementMap.channel),emissiveMapUv:dt&&x(S.emissiveMap.channel),metalnessMapUv:Be&&x(S.metalnessMap.channel),roughnessMapUv:Ke&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:Pe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:te&&x(S.sheenRoughnessMap.channel),specularMapUv:ke&&x(S.specularMap.channel),specularColorMapUv:ge&&x(S.specularColorMap.channel),specularIntensityMapUv:Xe&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ve&&x(S.thicknessMap.channel),alphaMapUv:Me&&x(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ht||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ie.attributes.uv&&(It||Me),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(M,S),w(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=_[S.type];let N;if(M){const G=qn[M];N=lp.clone(G.uniforms)}else N=S.uniforms;return N}function R(S,M){let N;for(let G=0,H=u.length;G<H;G++){const Z=u[G];if(Z.cacheKey===M){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new fx(r,M,S,s),u.push(N)),N}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function g(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:g,programs:u,dispose:L}}function xx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function vx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,x,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||vx),n.length>1&&n.sort(d||bh),i.length>1&&i.sort(d||bh)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function yx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new wh,r.set(n,[o])):i>=s.length?(o=new wh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Mx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new fe};break;case"SpotLight":t={position:new I,direction:new I,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function bx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wx=0;function Sx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Tx(r){const e=new Mx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new Je,o=new Je;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,v=0,w=0,y=0,R=0,A=0,g=0;l.sort(Sx);for(let S=0,M=l.length;S<M;S++){const N=l[S],G=N.color,H=N.intensity,Z=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=G.r*H,h+=G.g*H,d+=G.b*H;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],H);g++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=ie,n.directionalShadowMatrix[f]=N.shadow.matrix,v++}n.directional[f]=K,f++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(G).multiplyScalar(H),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[x]=K;const ce=N.shadow;if(N.map&&(n.spotLightMap[R]=N.map,R++,ce.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[x]=ce.matrix,N.castShadow){const Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=ie,y++}x++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(G).multiplyScalar(H),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=K,m++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const ce=N.shadow,Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,Y.shadowCameraNear=ce.camera.near,Y.shadowCameraFar=ce.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=N.shadow.matrix,w++}n.point[_]=K,_++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(H),K.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==g)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=g,L.directionalLength=f,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=g,n.version=wx++)}function c(l,u){let h=0,d=0,f=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const w=l[p];if(w.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(w.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Sh(r){const e=new Tx(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ex(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Sh(r),e.set(i,[a])):s>=o.length?(a=new Sh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(r,e,t){let n=new jc;const i=new He,s=new He,o=new Mt,a=new Sp({depthPacking:gf}),c=new Tp,l={},u=t.maxTextureSize,h={[jn]:rn,[rn]:jn,[Kt]:Kt},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let p=this.type;this.render=function(A,g,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Pi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=p!==ai&&this.type===ai,Z=p===ai&&this.type!==ai;for(let ie=0,K=A.length;ie<K;ie++){const ce=A[ie],Y=ce.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const xe=Y.getFrameExtents();if(i.multiply(xe),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/xe.x),i.x=s.x*xe.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/xe.y),i.y=s.y*xe.y,Y.mapSize.y=s.y)),Y.map===null||H===!0||Z===!0){const re=this.type!==ai?{minFilter:Zt,magFilter:Zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ji(i.x,i.y,re),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const Re=Y.getViewportCount();for(let re=0;re<Re;re++){const Ce=Y.getViewport(re);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),G.viewport(o),Y.updateMatrices(ce,re),n=Y.getFrustum(),y(g,L,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===ai&&v(Y,L),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,N)};function v(A,g){const L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(g,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(g,null,L,f,x,null)}function w(A,g,L,S){let M=null;const N=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=L.isPointLight===!0?c:a,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=M.uuid,H=g.uuid;let Z=l[G];Z===void 0&&(Z={},l[G]=Z);let ie=Z[H];ie===void 0&&(ie=M.clone(),Z[H]=ie,g.addEventListener("dispose",R)),M=ie}if(M.visible=g.visible,M.wireframe=g.wireframe,S===ai?M.side=g.shadowSide!==null?g.shadowSide:g.side:M.side=g.shadowSide!==null?g.shadowSide:h[g.side],M.alphaMap=g.alphaMap,M.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,M.map=g.map,M.clipShadows=g.clipShadows,M.clippingPlanes=g.clippingPlanes,M.clipIntersection=g.clipIntersection,M.displacementMap=g.displacementMap,M.displacementScale=g.displacementScale,M.displacementBias=g.displacementBias,M.wireframeLinewidth=g.wireframeLinewidth,M.linewidth=g.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=r.properties.get(M);G.light=L}return M}function y(A,g,L,S,M){if(A.visible===!1)return;if(A.layers.test(g.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Z=A.material;if(Array.isArray(Z)){const ie=H.groups;for(let K=0,ce=ie.length;K<ce;K++){const Y=ie[K],xe=Z[Y.materialIndex];if(xe&&xe.visible){const Re=w(A,xe,S,M);A.onBeforeShadow(r,A,g,L,H,Re,Y),r.renderBufferDirect(L,null,H,Re,A,Y),A.onAfterShadow(r,A,g,L,H,Re,Y)}}}else if(Z.visible){const ie=w(A,Z,S,M);A.onBeforeShadow(r,A,g,L,H,ie,null),r.renderBufferDirect(L,null,H,ie,A,null),A.onAfterShadow(r,A,g,L,H,ie,null)}}const G=A.children;for(let H=0,Z=G.length;H<Z;H++)y(G[H],g,L,S,M)}function R(A){A.target.removeEventListener("dispose",R);for(const L in l){const S=l[L],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ix={[Fa]:ka,[Ba]:Ga,[za]:Va,[Ps]:Ha,[ka]:Fa,[Ga]:Ba,[Va]:za,[Ha]:Ps};function Px(r,e){function t(){let O=!1;const ve=new Mt;let le=null;const Me=new Mt(0,0,0,0);return{setMask:function(ue){le!==ue&&!O&&(r.colorMask(ue,ue,ue,ue),le=ue)},setLocked:function(ue){O=ue},setClear:function(ue,J,Ee,je,At){At===!0&&(ue*=je,J*=je,Ee*=je),ve.set(ue,J,Ee,je),Me.equals(ve)===!1&&(r.clearColor(ue,J,Ee,je),Me.copy(ve))},reset:function(){O=!1,le=null,Me.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,le=null,Me=null,ue=null;return{setReversed:function(J){if(ve!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ve=J;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return ve},setTest:function(J){J?Te(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(J){le!==J&&!O&&(r.depthMask(J),le=J)},setFunc:function(J){if(ve&&(J=Ix[J]),Me!==J){switch(J){case Fa:r.depthFunc(r.NEVER);break;case ka:r.depthFunc(r.ALWAYS);break;case Ba:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case za:r.depthFunc(r.EQUAL);break;case Ha:r.depthFunc(r.GEQUAL);break;case Ga:r.depthFunc(r.GREATER);break;case Va:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=J}},setLocked:function(J){O=J},setClear:function(J){ue!==J&&(ve&&(J=1-J),r.clearDepth(J),ue=J)},reset:function(){O=!1,le=null,Me=null,ue=null,ve=!1}}}function i(){let O=!1,ve=null,le=null,Me=null,ue=null,J=null,Ee=null,je=null,At=null;return{setTest:function(Q){O||(Q?Te(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(Q){ve!==Q&&!O&&(r.stencilMask(Q),ve=Q)},setFunc:function(Q,fn,bn){(le!==Q||Me!==fn||ue!==bn)&&(r.stencilFunc(Q,fn,bn),le=Q,Me=fn,ue=bn)},setOp:function(Q,fn,bn){(J!==Q||Ee!==fn||je!==bn)&&(r.stencilOp(Q,fn,bn),J=Q,Ee=fn,je=bn)},setLocked:function(Q){O=Q},setClear:function(Q){At!==Q&&(r.clearStencil(Q),At=Q)},reset:function(){O=!1,ve=null,le=null,Me=null,ue=null,J=null,Ee=null,je=null,At=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,v=null,w=null,y=null,R=null,A=null,g=new fe(0,0,0),L=0,S=!1,M=null,N=null,G=null,H=null,Z=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=ce>=2);let xe=null,Re={};const re=r.getParameter(r.SCISSOR_BOX),Ce=r.getParameter(r.VIEWPORT),wt=new Mt().fromArray(re),ne=new Mt().fromArray(Ce);function pe(O,ve,le,Me){const ue=new Uint8Array(4),J=r.createTexture();r.bindTexture(O,J),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<le;Ee++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ve,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(ve+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return J}const Ue={};Ue[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Te(r.DEPTH_TEST),o.setFunc(Ps),it(!1),ht(ll),Te(r.CULL_FACE),U(Pi);function Te(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Fe(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function mt(O,ve){return h[O]!==ve?(r.bindFramebuffer(O,ve),h[O]=ve,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ve),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ve(O,ve){let le=f,Me=!1;if(O){le=d.get(ve),le===void 0&&(le=[],d.set(ve,le));const ue=O.textures;if(le.length!==ue.length||le[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Ee=ue.length;J<Ee;J++)le[J]=r.COLOR_ATTACHMENT0+J;le.length=ue.length,Me=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,Me=!0);Me&&r.drawBuffers(le)}function It(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const xt={[ji]:r.FUNC_ADD,[kd]:r.FUNC_SUBTRACT,[Bd]:r.FUNC_REVERSE_SUBTRACT};xt[zd]=r.MIN,xt[Hd]=r.MAX;const nt={[Gd]:r.ZERO,[Vd]:r.ONE,[Wd]:r.SRC_COLOR,[Ua]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[Yd]:r.DST_COLOR,[Xd]:r.DST_ALPHA,[qd]:r.ONE_MINUS_SRC_COLOR,[Oa]:r.ONE_MINUS_SRC_ALPHA,[$d]:r.ONE_MINUS_DST_COLOR,[jd]:r.ONE_MINUS_DST_ALPHA,[Zd]:r.CONSTANT_COLOR,[Jd]:r.ONE_MINUS_CONSTANT_COLOR,[Qd]:r.CONSTANT_ALPHA,[ef]:r.ONE_MINUS_CONSTANT_ALPHA};function U(O,ve,le,Me,ue,J,Ee,je,At,Q){if(O===Pi){x===!0&&(Fe(r.BLEND),x=!1);return}if(x===!1&&(Te(r.BLEND),x=!0),O!==Fd){if(O!==m||Q!==S){if((p!==ji||y!==ji)&&(r.blendEquation(r.FUNC_ADD),p=ji,y=ji),Q)switch(O){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kn:r.blendFunc(r.ONE,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ul:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ul:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,w=null,R=null,A=null,g.set(0,0,0),L=0,m=O,S=Q}return}ue=ue||ve,J=J||le,Ee=Ee||Me,(ve!==p||ue!==y)&&(r.blendEquationSeparate(xt[ve],xt[ue]),p=ve,y=ue),(le!==v||Me!==w||J!==R||Ee!==A)&&(r.blendFuncSeparate(nt[le],nt[Me],nt[J],nt[Ee]),v=le,w=Me,R=J,A=Ee),(je.equals(g)===!1||At!==L)&&(r.blendColor(je.r,je.g,je.b,At),g.copy(je),L=At),m=O,S=!1}function Wt(O,ve){O.side===Kt?Fe(r.CULL_FACE):Te(r.CULL_FACE);let le=O.side===rn;ve&&(le=!le),it(le),O.blending===Es&&O.transparent===!1?U(Pi):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Me=O.stencilWrite;a.setTest(Me),Me&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){M!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),M=O)}function ht(O){O!==Ud?(Te(r.CULL_FACE),O!==N&&(O===ll?r.cullFace(r.BACK):O===Od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),N=O}function Ne(O){O!==G&&(K&&r.lineWidth(O),G=O)}function dt(O,ve,le){O?(Te(r.POLYGON_OFFSET_FILL),(H!==ve||Z!==le)&&(r.polygonOffset(ve,le),H=ve,Z=le)):Fe(r.POLYGON_OFFSET_FILL)}function Be(O){O?Te(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function Ke(O){O===void 0&&(O=r.TEXTURE0+ie-1),xe!==O&&(r.activeTexture(O),xe=O)}function Ot(O,ve,le){le===void 0&&(xe===null?le=r.TEXTURE0+ie-1:le=xe);let Me=Re[le];Me===void 0&&(Me={type:void 0,texture:void 0},Re[le]=Me),(Me.type!==O||Me.texture!==ve)&&(xe!==le&&(r.activeTexture(le),xe=le),r.bindTexture(O,ve||Ue[O]),Me.type=O,Me.texture=ve)}function P(){const O=Re[xe];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){wt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),wt.copy(O))}function te(O){ne.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function ke(O,ve){let le=l.get(ve);le===void 0&&(le=new WeakMap,l.set(ve,le));let Me=le.get(O);Me===void 0&&(Me=r.getUniformBlockIndex(ve,O.name),le.set(O,Me))}function ge(O,ve){const Me=l.get(ve).get(O);c.get(ve)!==Me&&(r.uniformBlockBinding(ve,Me,O.__bindingPointIndex),c.set(ve,Me))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},xe=null,Re={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,v=null,w=null,y=null,R=null,A=null,g=new fe(0,0,0),L=0,S=!1,M=null,N=null,G=null,H=null,Z=null,wt.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Te,disable:Fe,bindFramebuffer:mt,drawBuffers:Ve,useProgram:It,setBlending:U,setMaterial:Wt,setFlipSided:it,setCullFace:ht,setLineWidth:Ne,setPolygonOffset:dt,setScissorTest:Be,activeTexture:Ke,bindTexture:Ot,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:de,texImage3D:ae,updateUBOMapping:ke,uniformBlockBinding:ge,texStorage2D:_e,texStorage3D:z,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:Pe,scissor:Se,viewport:te,reset:Xe}}function Lx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return f?new OffscreenCanvas(P,b):yr("canvas")}function x(P,b,V){let ee=1;const se=Ot(P);if((se.width>V||se.height>V)&&(ee=V/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(ee*se.width),Pe=Math.floor(ee*se.height);h===void 0&&(h=_(j,Pe));const _e=b?_(j,Pe):h;return _e.width=j,_e.height=Pe,_e.getContext("2d").drawImage(P,0,0,j,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+Pe+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,b,V,ee,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=b;if(b===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8)),b===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),b===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8)),b===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),b===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),b===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),b===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),b===r.RGBA){const Pe=se?To:at.getTransfer(ee);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=Pe===Et?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(P,b){let V;return P?b===null||b===Zi||b===mr?V=r.DEPTH24_STENCIL8:b===Bn?V=r.DEPTH32F_STENCIL8:b===pr&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===mr?V=r.DEPTH_COMPONENT24:b===Bn?V=r.DEPTH_COMPONENT32F:b===pr&&(V=r.DEPTH_COMPONENT16),V}function R(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){const b=P.target;b.removeEventListener("dispose",A),L(b),b.isVideoTexture&&u.delete(b)}function g(P){const b=P.target;b.removeEventListener("dispose",g),M(b)}function L(P){const b=n.get(P);if(b.__webglInit===void 0)return;const V=P.source,ee=d.get(V);if(ee){const se=ee[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(P),Object.keys(ee).length===0&&d.delete(V)}n.remove(P)}function S(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const V=P.source,ee=d.get(V);delete ee[b.__cacheKey],o.memory.textures--}function M(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let se=0;se<b.__webglFramebuffer[ee].length;se++)r.deleteFramebuffer(b.__webglFramebuffer[ee][se]);else r.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[ee]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=P.textures;for(let ee=0,se=V.length;ee<se;ee++){const j=n.get(V[ee]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(V[ee])}n.remove(P)}let N=0;function G(){N=0}function H(){const P=N;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function Z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ie(P,b){const V=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(V,P,b);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function K(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function ce(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Ue(V,P,b);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function Y(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Te(V,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}const xe={[Ki]:r.REPEAT,[Ci]:r.CLAMP_TO_EDGE,[wo]:r.MIRRORED_REPEAT},Re={[Zt]:r.NEAREST,[Pu]:r.NEAREST_MIPMAP_NEAREST,[lr]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[mo]:r.LINEAR_MIPMAP_NEAREST,[ui]:r.LINEAR_MIPMAP_LINEAR},re={[xf]:r.NEVER,[Sf]:r.ALWAYS,[vf]:r.LESS,[Gu]:r.LEQUAL,[yf]:r.EQUAL,[wf]:r.GEQUAL,[Mf]:r.GREATER,[bf]:r.NOTEQUAL};function Ce(P,b){if(b.type===Bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===mo||b.magFilter===lr||b.magFilter===ui||b.minFilter===yn||b.minFilter===mo||b.minFilter===lr||b.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,xe[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,xe[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,xe[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Re[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Re[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==lr&&b.minFilter!==ui||b.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function wt(P,b){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));const ee=b.source;let se=d.get(ee);se===void 0&&(se={},d.set(ee,se));const j=Z(b);if(j!==P.__cacheKey){se[j]===void 0&&(se[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[j].usedTimes++;const Pe=se[P.__cacheKey];Pe!==void 0&&(se[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(b)),P.__cacheKey=j,P.__webglTexture=se[j].texture}return V}function ne(P,b,V){return Math.floor(Math.floor(P/V)/b)}function pe(P,b,V,ee){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,V,ee,b.data);else{j.sort((ae,Se)=>ae.start-Se.start);let Pe=0;for(let ae=1;ae<j.length;ae++){const Se=j[Pe],te=j[ae],ke=Se.start+Se.count,ge=ne(te.start,b.width,4),Xe=ne(Se.start,b.width,4);te.start<=ke+1&&ge===Xe&&ne(te.start+te.count-1,b.width,4)===ge?Se.count=Math.max(Se.count,te.start+te.count-Se.start):(++Pe,j[Pe]=te)}j.length=Pe+1;const _e=r.getParameter(r.UNPACK_ROW_LENGTH),z=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ae=0,Se=j.length;ae<Se;ae++){const te=j[ae],ke=Math.floor(te.start/4),ge=Math.ceil(te.count/4),Xe=ke%b.width,O=Math.floor(ke/b.width),ve=ge,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Xe,O,ve,le,V,ee,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,_e),r.pixelStorei(r.UNPACK_SKIP_PIXELS,z),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function Ue(P,b,V){let ee=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=r.TEXTURE_3D);const se=wt(P,b),j=b.source;t.bindTexture(ee,P.__webglTexture,r.TEXTURE0+V);const Pe=n.get(j);if(j.version!==Pe.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const _e=at.getPrimaries(at.workingColorSpace),z=b.colorSpace===Ri?null:at.getPrimaries(b.colorSpace),de=b.colorSpace===Ri||_e===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ae=x(b.image,!1,i.maxTextureSize);ae=Ke(b,ae);const Se=s.convert(b.format,b.colorSpace),te=s.convert(b.type);let ke=w(b.internalFormat,Se,te,b.colorSpace,b.isVideoTexture);Ce(ee,b);let ge;const Xe=b.mipmaps,O=b.isVideoTexture!==!0,ve=Pe.__version===void 0||se===!0,le=j.dataReady,Me=R(b,ae);if(b.isDepthTexture)ke=y(b.format===_r,b.type),ve&&(O?t.texStorage2D(r.TEXTURE_2D,1,ke,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,ke,ae.width,ae.height,0,Se,te,null));else if(b.isDataTexture)if(Xe.length>0){O&&ve&&t.texStorage2D(r.TEXTURE_2D,Me,ke,Xe[0].width,Xe[0].height);for(let ue=0,J=Xe.length;ue<J;ue++)ge=Xe[ue],O?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,Se,te,ge.data):t.texImage2D(r.TEXTURE_2D,ue,ke,ge.width,ge.height,0,Se,te,ge.data);b.generateMipmaps=!1}else O?(ve&&t.texStorage2D(r.TEXTURE_2D,Me,ke,ae.width,ae.height),le&&pe(b,ae,Se,te)):t.texImage2D(r.TEXTURE_2D,0,ke,ae.width,ae.height,0,Se,te,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,ke,Xe[0].width,Xe[0].height,ae.depth);for(let ue=0,J=Xe.length;ue<J;ue++)if(ge=Xe[ue],b.format!==In)if(Se!==null)if(O){if(le)if(b.layerUpdates.size>0){const Ee=eh(ge.width,ge.height,b.format,b.type);for(const je of b.layerUpdates){const At=ge.data.subarray(je*Ee/ge.data.BYTES_PER_ELEMENT,(je+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,je,ge.width,ge.height,1,Se,At)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,ae.depth,Se,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,ke,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,ae.depth,Se,te,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,ke,ge.width,ge.height,ae.depth,0,Se,te,ge.data)}else{O&&ve&&t.texStorage2D(r.TEXTURE_2D,Me,ke,Xe[0].width,Xe[0].height);for(let ue=0,J=Xe.length;ue<J;ue++)ge=Xe[ue],b.format!==In?Se!==null?O?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,Se,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,ke,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,Se,te,ge.data):t.texImage2D(r.TEXTURE_2D,ue,ke,ge.width,ge.height,0,Se,te,ge.data)}else if(b.isDataArrayTexture)if(O){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,ke,ae.width,ae.height,ae.depth),le)if(b.layerUpdates.size>0){const ue=eh(ae.width,ae.height,b.format,b.type);for(const J of b.layerUpdates){const Ee=ae.data.subarray(J*ue/ae.data.BYTES_PER_ELEMENT,(J+1)*ue/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,Se,te,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,te,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,ae.width,ae.height,ae.depth,0,Se,te,ae.data);else if(b.isData3DTexture)O?(ve&&t.texStorage3D(r.TEXTURE_3D,Me,ke,ae.width,ae.height,ae.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,te,ae.data)):t.texImage3D(r.TEXTURE_3D,0,ke,ae.width,ae.height,ae.depth,0,Se,te,ae.data);else if(b.isFramebufferTexture){if(ve)if(O)t.texStorage2D(r.TEXTURE_2D,Me,ke,ae.width,ae.height);else{let ue=ae.width,J=ae.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,ke,ue,J,0,Se,te,null),ue>>=1,J>>=1}}else if(Xe.length>0){if(O&&ve){const ue=Ot(Xe[0]);t.texStorage2D(r.TEXTURE_2D,Me,ke,ue.width,ue.height)}for(let ue=0,J=Xe.length;ue<J;ue++)ge=Xe[ue],O?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Se,te,ge):t.texImage2D(r.TEXTURE_2D,ue,ke,Se,te,ge);b.generateMipmaps=!1}else if(O){if(ve){const ue=Ot(ae);t.texStorage2D(r.TEXTURE_2D,Me,ke,ue.width,ue.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,te,ae)}else t.texImage2D(r.TEXTURE_2D,0,ke,Se,te,ae);m(b)&&p(ee),Pe.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Te(P,b,V){if(b.image.length!==6)return;const ee=wt(P,b),se=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const j=n.get(se);if(se.version!==j.__version||ee===!0){t.activeTexture(r.TEXTURE0+V);const Pe=at.getPrimaries(at.workingColorSpace),_e=b.colorSpace===Ri?null:at.getPrimaries(b.colorSpace),z=b.colorSpace===Ri||Pe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!de&&!ae?Se[J]=x(b.image[J],!0,i.maxCubemapSize):Se[J]=ae?b.image[J].image:b.image[J],Se[J]=Ke(b,Se[J]);const te=Se[0],ke=s.convert(b.format,b.colorSpace),ge=s.convert(b.type),Xe=w(b.internalFormat,ke,ge,b.colorSpace),O=b.isVideoTexture!==!0,ve=j.__version===void 0||ee===!0,le=se.dataReady;let Me=R(b,te);Ce(r.TEXTURE_CUBE_MAP,b);let ue;if(de){O&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Xe,te.width,te.height);for(let J=0;J<6;J++){ue=Se[J].mipmaps;for(let Ee=0;Ee<ue.length;Ee++){const je=ue[Ee];b.format!==In?ke!==null?O?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,je.width,je.height,ke,je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,je.width,je.height,ke,ge,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Xe,je.width,je.height,0,ke,ge,je.data)}}}else{if(ue=b.mipmaps,O&&ve){ue.length>0&&Me++;const J=Ot(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ae){O?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,ke,ge,Se[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Se[J].width,Se[J].height,0,ke,ge,Se[J].data);for(let Ee=0;Ee<ue.length;Ee++){const At=ue[Ee].image[J].image;O?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,At.width,At.height,ke,ge,At.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Xe,At.width,At.height,0,ke,ge,At.data)}}else{O?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,ge,Se[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,ke,ge,Se[J]);for(let Ee=0;Ee<ue.length;Ee++){const je=ue[Ee];O?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,ke,ge,je.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Xe,ke,ge,je.image[J])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),j.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Fe(P,b,V,ee,se,j){const Pe=s.convert(V.format,V.colorSpace),_e=s.convert(V.type),z=w(V.internalFormat,Pe,_e,V.colorSpace),de=n.get(b),ae=n.get(V);if(ae.__renderTarget=b,!de.__hasExternalTextures){const Se=Math.max(1,b.width>>j),te=Math.max(1,b.height>>j);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,j,z,Se,te,b.depth,0,Pe,_e,null):t.texImage2D(se,j,z,Se,te,0,Pe,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),dt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,se,ae.__webglTexture,0,Ne(b)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,se,ae.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(P,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const ee=b.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,j=y(b.stencilBuffer,se),Pe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=Ne(b);dt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,j,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,j,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,j,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const ee=b.textures;for(let se=0;se<ee.length;se++){const j=ee[se],Pe=s.convert(j.format,j.colorSpace),_e=s.convert(j.type),z=w(j.internalFormat,Pe,_e,j.colorSpace),de=Ne(b);V&&dt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,z,b.width,b.height):dt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,z,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie(b.depthTexture,0);const se=ee.__webglTexture,j=Ne(b);if(b.depthTexture.format===gr)dt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(b.depthTexture.format===_r)dt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function It(P){const b=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const ee=P.texture.mipmaps;ee&&ee.length>0?Ve(b.__webglFramebuffer[0],P):Ve(b.__webglFramebuffer,P)}else if(V){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=r.createRenderbuffer(),mt(b.__webglDepthbuffer[ee],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,j)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),mt(b.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(P,b,V){const ee=n.get(P);b!==void 0&&Fe(ee.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&It(P)}function nt(P){const b=P.texture,V=n.get(P),ee=n.get(b);P.addEventListener("dispose",g);const se=P.textures,j=P.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let z=0;z<b.mipmaps.length;z++)V.__webglFramebuffer[_e][z]=r.createFramebuffer()}else V.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)V.__webglFramebuffer[_e]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let _e=0,z=se.length;_e<z;_e++){const de=n.get(se[_e]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&dt(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){const z=se[_e];V.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);const de=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),Se=w(z.internalFormat,de,ae,z.colorSpace,P.isXRRenderTarget===!0),te=Ne(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,Se,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let z=0;z<b.mipmaps.length;z++)Fe(V.__webglFramebuffer[_e][z],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,z);else Fe(V.__webglFramebuffer[_e],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,z=se.length;_e<z;_e++){const de=se[_e],ae=n.get(de);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),Ce(r.TEXTURE_2D,de),Fe(V.__webglFramebuffer,P,de,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,0),m(de)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,ee.__webglTexture),Ce(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let z=0;z<b.mipmaps.length;z++)Fe(V.__webglFramebuffer[z],P,b,r.COLOR_ATTACHMENT0,_e,z);else Fe(V.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,_e,0);m(b)&&p(_e),t.unbindTexture()}P.depthBuffer&&It(P)}function U(P){const b=P.textures;for(let V=0,ee=b.length;V<ee;V++){const se=b[V];if(m(se)){const j=v(P),Pe=n.get(se).__webglTexture;t.bindTexture(j,Pe),p(j),t.unbindTexture()}}}const Wt=[],it=[];function ht(P){if(P.samples>0){if(dt(P)===!1){const b=P.textures,V=P.width,ee=P.height;let se=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=n.get(P),_e=b.length>1;if(_e)for(let de=0;de<b.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const z=P.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let de=0;de<b.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[de]);const ae=n.get(b[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,V,ee,0,0,V,ee,se,r.NEAREST),c===!0&&(Wt.length=0,it.length=0,Wt.push(r.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Wt.push(j),it.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,it)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let de=0;de<b.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[de]);const ae=n.get(b[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ne(P){return Math.min(i.maxSamples,P.samples)}function dt(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Be(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function Ke(P,b){const V=P.colorSpace,ee=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==dn&&V!==Ri&&(at.getTransfer(V)===Et?(ee!==In||se!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=xt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=dt}function Dx(r,e){function t(n,i=Ri){let s;const o=at.getTransfer(i);if(n===Yn)return r.UNSIGNED_BYTE;if(n===Oc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return r.BYTE;if(n===Du)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===Uc)return r.INT;if(n===Zi)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===br)return r.HALF_FLOAT;if(n===Uu)return r.ALPHA;if(n===Ou)return r.RGB;if(n===In)return r.RGBA;if(n===gr)return r.DEPTH_COMPONENT;if(n===_r)return r.DEPTH_STENCIL;if(n===Do)return r.RED;if(n===kc)return r.RED_INTEGER;if(n===Fu)return r.RG;if(n===Bc)return r.RG_INTEGER;if(n===zc)return r.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===vo)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===ja||n===Ya||n===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Za||n===Ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ka||n===Za)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qa)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===fc||n===pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===mc||n===gc||n===_c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ni({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends Qi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const x=new Ox,m=t.getContextAttributes();let p=null,v=null;const w=[],y=[],R=new He;let A=null;const g=new hn;g.viewport=new Mt;const L=new hn;L.viewport=new Mt;const S=[g,L],M=new Wp;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=w[ne];return pe===void 0&&(pe=new aa,w[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=w[ne];return pe===void 0&&(pe=new aa,w[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=w[ne];return pe===void 0&&(pe=new aa,w[ne]=pe),pe.getHandSpace()};function H(ne){const pe=y.indexOf(ne.inputSource);if(pe===-1)return;const Ue=w[pe];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,l||o),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<w.length;ne++){const pe=y[ne];pe!==null&&(y[ne]=null,w[ne].disconnect(pe))}N=null,G=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,wt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Te=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=m.stencil?_r:gr,Te=m.stencil?mr:Zi);const mt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ji(d.textureWidth,d.textureHeight,{format:In,type:Yn,depthTexture:new id(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ji(f.framebufferWidth,f.framebufferHeight,{format:In,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ne){for(let pe=0;pe<ne.removed.length;pe++){const Ue=ne.removed[pe],Te=y.indexOf(Ue);Te>=0&&(y[Te]=null,w[Te].disconnect(Ue))}for(let pe=0;pe<ne.added.length;pe++){const Ue=ne.added[pe];let Te=y.indexOf(Ue);if(Te===-1){for(let mt=0;mt<w.length;mt++)if(mt>=y.length){y.push(Ue),Te=mt;break}else if(y[mt]===null){y[mt]=Ue,Te=mt;break}if(Te===-1)break}const Fe=w[Te];Fe&&Fe.connect(Ue)}}const K=new I,ce=new I;function Y(ne,pe,Ue){K.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Ue.matrixWorld);const Te=K.distanceTo(ce),Fe=pe.projectionMatrix.elements,mt=Ue.projectionMatrix.elements,Ve=Fe[14]/(Fe[10]-1),It=Fe[14]/(Fe[10]+1),xt=(Fe[9]+1)/Fe[5],nt=(Fe[9]-1)/Fe[5],U=(Fe[8]-1)/Fe[0],Wt=(mt[8]+1)/mt[0],it=Ve*U,ht=Ve*Wt,Ne=Te/(-U+Wt),dt=Ne*-U;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(dt),ne.translateZ(Ne),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Be=Ve+Ne,Ke=It+Ne,Ot=it-dt,P=ht+(Te-dt),b=xt*It/Ke*Be,V=nt*It/Ke*Be;ne.projectionMatrix.makePerspective(Ot,P,b,V,Be,Ke),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function xe(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let pe=ne.near,Ue=ne.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),M.near=L.near=g.near=pe,M.far=L.far=g.far=Ue,(N!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,G=M.far),g.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,M.layers.mask=g.layers.mask|L.layers.mask;const Te=ne.parent,Fe=M.cameras;xe(M,Te);for(let mt=0;mt<Fe.length;mt++)xe(Fe[mt],Te);Fe.length===2?Y(M,g,L):M.projectionMatrix.copy(g.projectionMatrix),Re(ne,M,Te)};function Re(ne,pe,Ue){Ue===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ns*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let re=null;function Ce(ne,pe){if(u=pe.getViewerPose(l||o),_=pe,u!==null){const Ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Te=!1;Ue.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Ve=0;Ve<Ue.length;Ve++){const It=Ue[Ve];let xt=null;if(f!==null)xt=f.getViewport(It);else{const U=h.getViewSubImage(d,It);xt=U.viewport,Ve===0&&(e.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(v))}let nt=S[Ve];nt===void 0&&(nt=new hn,nt.layers.enable(Ve),nt.viewport=new Mt,S[Ve]=nt),nt.matrix.fromArray(It.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(It.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(xt.x,xt.y,xt.width,xt.height),Ve===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(nt)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(Ue[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,i.renderState)}}for(let Ue=0;Ue<w.length;Ue++){const Te=y[Ue],Fe=w[Ue];Te!==null&&Fe!==void 0&&Fe.update(Te,pe,l||o)}re&&re(ne,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),_=null}const wt=new dd;wt.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}const Hi=new Gn,kx=new Je;function Bx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$u(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),w=v.envMap,y=v.envMapRotation;w&&(m.envMap.value=w,Hi.copy(y),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){const y=w.program;n.uniformBlockBinding(v,y)}function l(v,w){let y=i[v.id];y===void 0&&(_(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const w=h();v.__bindingPointIndex=w;const y=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const w=i[v.id],y=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let A=0,g=y.length;A<g;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=L.length;S<M;S++){const N=L[S];if(f(N,A,S,R)===!0){const G=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let Z=0;for(let ie=0;ie<H.length;ie++){const K=H[ie],ce=x(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,G+Z,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,Z),Z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,w,y,R){const A=v.value,g=w+"_"+y;if(R[g]===void 0)return typeof A=="number"||typeof A=="boolean"?R[g]=A:R[g]=A.clone(),!0;{const L=R[g];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[g]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(v){const w=v.uniforms;let y=0;const R=16;for(let g=0,L=w.length;g<L;g++){const S=Array.isArray(w[g])?w[g]:[w[g]];for(let M=0,N=S.length;M<N;M++){const G=S[M],H=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,ie=H.length;Z<ie;Z++){const K=H[Z],ce=x(K),Y=y%R,xe=Y%ce.boundary,Re=Y+xe;y+=xe,Re!==0&&R-Re<ce.storage&&(y+=R-Re),G.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ce.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function x(v){const w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),w}function m(v){const w=v.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Hx{constructor(e={}){const{canvas:t=Hf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=kt;let A=0,g=0,L=null,S=-1,M=null;const N=new Mt,G=new Mt;let H=null;const Z=new fe(0);let ie=0,K=t.width,ce=t.height,Y=1,xe=null,Re=null;const re=new Mt(0,0,K,ce),Ce=new Mt(0,0,K,ce);let wt=!1;const ne=new jc;let pe=!1,Ue=!1;const Te=new Je,Fe=new Je,mt=new I,Ve=new Mt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function nt(){return L===null?Y:1}let U=n;function Wt(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),U===null){const k="webgl2";if(U=Wt(k,T),U===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,ht,Ne,dt,Be,Ke,Ot,P,b,V,ee,se,j,Pe,_e,z,de,ae,Se,te,ke,ge,Xe,O;function ve(){it=new Z0(U),it.init(),ge=new Dx(U,it),ht=new W0(U,it,e,ge),Ne=new Px(U,it),ht.reverseDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),dt=new e_(U),Be=new xx,Ke=new Lx(U,it,Ne,Be,ht,ge,dt),Ot=new X0(y),P=new K0(y),b=new om(U),Xe=new G0(U,b),V=new J0(U,b,dt,Xe),ee=new n_(U,V,b,dt),Se=new t_(U,ht,Ke),z=new q0(Be),se=new _x(y,Ot,P,it,ht,Xe,z),j=new Bx(y,Be),Pe=new yx,_e=new Ex(it),ae=new H0(y,Ot,P,Ne,ee,f,c),de=new Cx(y,ee,ht),O=new zx(U,dt,ht,Ne),te=new V0(U,it,dt),ke=new Q0(U,it,dt),dt.programs=se.programs,y.capabilities=ht,y.extensions=it,y.properties=Be,y.renderLists=Pe,y.shadowMap=de,y.state=Ne,y.info=dt}ve();const le=new Fx(y,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(K,ce,!1))},this.getSize=function(T){return T.set(K,ce)},this.setSize=function(T,k,W=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,ce=k,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),W===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(K*Y,ce*Y).floor()},this.setDrawingBufferSize=function(T,k,W){K=T,ce=k,Y=W,t.width=Math.floor(T*W),t.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,k,W,q){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,W,q),Ne.viewport(N.copy(re).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,k,W,q){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,k,W,q),Ne.scissor(G.copy(Ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(T){Ne.setScissorTest(wt=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){Re=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,W=!0){let q=0;if(T){let B=!1;if(L!==null){const he=L.texture.format;B=he===zc||he===Bc||he===kc}if(B){const he=L.texture.type,be=he===Yn||he===Zi||he===pr||he===mr||he===Oc||he===Fc,Le=ae.getClearColor(),Ie=ae.getClearAlpha(),We=Le.r,Ye=Le.g,Oe=Le.b;be?(_[0]=We,_[1]=Ye,_[2]=Oe,_[3]=Ie,U.clearBufferuiv(U.COLOR,0,_)):(x[0]=We,x[1]=Ye,x[2]=Oe,x[3]=Ie,U.clearBufferiv(U.COLOR,0,x))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ae.dispose(),Pe.dispose(),_e.dispose(),Be.dispose(),Ot.dispose(),P.dispose(),ee.dispose(),Xe.dispose(),O.dispose(),se.dispose(),le.dispose(),le.removeEventListener("sessionstart",Jn),le.removeEventListener("sessionend",qs),Ln.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=dt.autoReset,k=de.enabled,W=de.autoUpdate,q=de.needsUpdate,B=de.type;ve(),dt.autoReset=T,de.enabled=k,de.autoUpdate=W,de.needsUpdate=q,de.type=B}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){const k=T.target;k.removeEventListener("dispose",Ee),je(k)}function je(T){At(T),Be.remove(T)}function At(T){const k=Be.get(T).programs;k!==void 0&&(k.forEach(function(W){se.releaseProgram(W)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,q,B,he){k===null&&(k=It);const be=B.isMesh&&B.matrixWorld.determinant()<0,Le=Bo(T,k,W,q,B);Ne.setMaterial(q,be);let Ie=W.index,We=1;if(q.wireframe===!0){if(Ie=V.getWireframeAttribute(W),Ie===void 0)return;We=2}const Ye=W.drawRange,Oe=W.attributes.position;let st=Ye.start*We,vt=(Ye.start+Ye.count)*We;he!==null&&(st=Math.max(st,he.start*We),vt=Math.min(vt,(he.start+he.count)*We)),Ie!==null?(st=Math.max(st,0),vt=Math.min(vt,Ie.count)):Oe!=null&&(st=Math.max(st,0),vt=Math.min(vt,Oe.count));const Ct=vt-st;if(Ct<0||Ct===1/0)return;Xe.setup(B,q,Le,W,Ie);let C,F=te;if(Ie!==null&&(C=b.get(Ie),F=ke,F.setIndex(C)),B.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*nt()),F.setMode(U.LINES)):F.setMode(U.TRIANGLES);else if(B.isLine){let D=q.linewidth;D===void 0&&(D=1),Ne.setLineWidth(D*nt()),B.isLineSegments?F.setMode(U.LINES):B.isLineLoop?F.setMode(U.LINE_LOOP):F.setMode(U.LINE_STRIP)}else B.isPoints?F.setMode(U.POINTS):B.isSprite&&F.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),F.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))F.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const D=B._multiDrawStarts,oe=B._multiDrawCounts,me=B._multiDrawCount,Ge=Ie?b.get(Ie).bytesPerElement:1,St=Be.get(q).currentProgram.getUniforms();for(let Nt=0;Nt<me;Nt++)St.setValue(U,"_gl_DrawID",Nt),F.render(D[Nt]/Ge,oe[Nt])}else if(B.isInstancedMesh)F.renderInstances(st,Ct,B.count);else if(W.isInstancedBufferGeometry){const D=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,oe=Math.min(W.instanceCount,D);F.renderInstances(st,Ct,oe)}else F.render(st,Ct)};function Q(T,k,W){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,ts(T,k,W),T.side=jn,T.needsUpdate=!0,ts(T,k,W),T.side=Kt):ts(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),p=_e.get(W),p.init(k),w.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let be=0;be<he.length;be++){const Le=he[be];Q(Le,W,B),q.add(Le)}else Q(he,W,B),q.add(he)}),p=w.pop(),q},this.compileAsync=function(T,k,W=null){const q=this.compile(T,k,W);return new Promise(B=>{function he(){if(q.forEach(function(be){Be.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){B(T);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let fn=null;function bn(T){fn&&fn(T)}function Jn(){Ln.stop()}function qs(){Ln.start()}const Ln=new dd;Ln.setAnimationLoop(bn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(T){fn=T,le.setAnimationLoop(T),T===null?Ln.stop():Ln.start()},le.addEventListener("sessionstart",Jn),le.addEventListener("sessionend",qs),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,L),p=_e.get(T,w.length),p.init(k),w.push(p),Fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Fe),Ue=this.localClippingEnabled,pe=z.init(this.clippingPlanes,Ue),m=Pe.get(T,v.length),m.init(),v.push(m),le.enabled===!0&&le.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&gn(he,k,-1/0,y.sortObjects)}gn(T,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xe,Re),xt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,xt&&ae.addToRenderList(m,T),this.info.render.frame++,pe===!0&&z.beginShadows();const W=p.state.shadowsArray;de.render(W,T,k),pe===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const he=k.cameras;if(B.length>0)for(let be=0,Le=he.length;be<Le;be++){const Ie=he[be];Cr(q,B,T,Ie)}xt&&ae.render(T);for(let be=0,Le=he.length;be<Le;be++){const Ie=he[be];Xs(m,T,Ie,Ie.viewport)}}else B.length>0&&Cr(q,B,T,k),xt&&ae.render(T),Xs(m,T,k);L!==null&&g===0&&(Ke.updateMultisampleRenderTarget(L),Ke.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,k),Xe.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],pe===!0&&z.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function gn(T,k,W,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){q&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const be=ee.update(T),Le=T.material;Le.visible&&m.push(T,be,Le,W,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const be=ee.update(T),Le=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Le)){const Ie=be.groups;for(let We=0,Ye=Ie.length;We<Ye;We++){const Oe=Ie[We],st=Le[Oe.materialIndex];st&&st.visible&&m.push(T,be,st,W,Ve.z,Oe)}}else Le.visible&&m.push(T,be,Le,W,Ve.z,null)}}const he=T.children;for(let be=0,Le=he.length;be<Le;be++)gn(he[be],k,W,q)}function Xs(T,k,W,q){const B=T.opaque,he=T.transmissive,be=T.transparent;p.setupLightsView(W),pe===!0&&z.setGlobalState(y.clippingPlanes,W),q&&Ne.viewport(N.copy(q)),B.length>0&&_n(B,k,W),he.length>0&&_n(he,k,W),be.length>0&&_n(be,k,W),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Cr(T,k,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ji(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?br:Yn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const he=p.state.transmissionRenderTarget[q.id],be=q.viewport||N;he.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);const Le=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(Z),ie=y.getClearAlpha(),ie<1&&y.setClearColor(16777215,.5),y.clear(),xt&&ae.render(W);const Ie=y.toneMapping;y.toneMapping=Li;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),pe===!0&&z.setGlobalState(y.clippingPlanes,q),_n(T,W,q),Ke.updateMultisampleRenderTarget(he),Ke.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Oe=0,st=k.length;Oe<st;Oe++){const vt=k[Oe],Ct=vt.object,C=vt.geometry,F=vt.material,D=vt.group;if(F.side===Kt&&Ct.layers.test(q.layers)){const oe=F.side;F.side=rn,F.needsUpdate=!0,Ir(Ct,W,q,C,F,D),F.side=oe,F.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ke.updateMultisampleRenderTarget(he),Ke.updateRenderTargetMipmap(he))}y.setRenderTarget(Le),y.setClearColor(Z,ie),We!==void 0&&(q.viewport=We),y.toneMapping=Ie}function _n(T,k,W){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,he=T.length;B<he;B++){const be=T[B],Le=be.object,Ie=be.geometry,We=be.group;let Ye=be.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),Le.layers.test(W.layers)&&Ir(Le,k,W,Ie,Ye,We)}}function Ir(T,k,W,q,B,he){T.onBeforeRender(y,k,W,q,B,he),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,k,W,q,T,he),B.transparent===!0&&B.side===Kt&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,y.renderBufferDirect(W,k,q,B,T,he),B.side=jn,B.needsUpdate=!0,y.renderBufferDirect(W,k,q,B,T,he),B.side=Kt):y.renderBufferDirect(W,k,q,B,T,he),T.onAfterRender(y,k,W,q,B,he)}function ts(T,k,W){k.isScene!==!0&&(k=It);const q=Be.get(T),B=p.state.lights,he=p.state.shadowsArray,be=B.state.version,Le=se.getParameters(T,B.state,he,k,W),Ie=se.getProgramCacheKey(Le);let We=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?P:Ot).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",Ee),We=new Map,q.programs=We);let Ye=We.get(Ie);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===be)return _i(T,Le),Ye}else Le.uniforms=se.getUniforms(T),T.onBeforeCompile(Le,y),Ye=se.acquireProgram(Le,Ie),We.set(Ie,Ye),q.uniforms=Le.uniforms;const Oe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=z.uniform),_i(T,Le),q.needsLights=$e(T),q.lightsStateVersion=be,q.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function gi(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function _i(T,k){const W=Be.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Bo(T,k,W,q,B){k.isScene!==!0&&(k=It),Ke.resetTextureUnits();const he=k.fog,be=q.isMeshStandardMaterial?k.environment:null,Le=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:dn,Ie=(q.isMeshStandardMaterial?P:Ot).get(q.envMap||be),We=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let Ct=Li;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const C=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,F=C!==void 0?C.length:0,D=Be.get(q),oe=p.state.lights;if(pe===!0&&(Ue===!0||T!==M)){const zt=T===M&&q.id===S;z.setState(q,T,zt)}let me=!1;q.version===D.__version?(D.needsLights&&D.lightsStateVersion!==oe.state.version||D.outputColorSpace!==Le||B.isBatchedMesh&&D.batching===!1||!B.isBatchedMesh&&D.batching===!0||B.isBatchedMesh&&D.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&D.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&D.instancing===!1||!B.isInstancedMesh&&D.instancing===!0||B.isSkinnedMesh&&D.skinning===!1||!B.isSkinnedMesh&&D.skinning===!0||B.isInstancedMesh&&D.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&D.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&D.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&D.instancingMorph===!1&&B.morphTexture!==null||D.envMap!==Ie||q.fog===!0&&D.fog!==he||D.numClippingPlanes!==void 0&&(D.numClippingPlanes!==z.numPlanes||D.numIntersection!==z.numIntersection)||D.vertexAlphas!==We||D.vertexTangents!==Ye||D.morphTargets!==Oe||D.morphNormals!==st||D.morphColors!==vt||D.toneMapping!==Ct||D.morphTargetsCount!==F)&&(me=!0):(me=!0,D.__version=q.version);let Ge=D.currentProgram;me===!0&&(Ge=ts(q,k,B));let St=!1,Nt=!1,wn=!1;const Rt=Ge.getUniforms(),on=D.uniforms;if(Ne.useProgram(Ge.program)&&(St=!0,Nt=!0,wn=!0),q.id!==S&&(S=q.id,Nt=!0),St||M!==T){Ne.buffers.depth.getReversed()?(Te.copy(T.projectionMatrix),Vf(Te),Wf(Te),Rt.setValue(U,"projectionMatrix",Te)):Rt.setValue(U,"projectionMatrix",T.projectionMatrix),Rt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ht=Rt.map.cameraPosition;Ht!==void 0&&Ht.setValue(U,mt.setFromMatrixPosition(T.matrixWorld)),ht.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Nt=!0,wn=!0)}if(B.isSkinnedMesh){Rt.setOptional(U,B,"bindMatrix"),Rt.setOptional(U,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Rt.setValue(U,"boneTexture",zt.boneTexture,Ke))}B.isBatchedMesh&&(Rt.setOptional(U,B,"batchingTexture"),Rt.setValue(U,"batchingTexture",B._matricesTexture,Ke),Rt.setOptional(U,B,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",B._indirectTexture,Ke),Rt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",B._colorsTexture,Ke));const Qt=W.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Se.update(B,W,Ge),(Nt||D.receiveShadow!==B.receiveShadow)&&(D.receiveShadow=B.receiveShadow,Rt.setValue(U,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(on.envMap.value=Ie,on.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(on.envMapIntensity.value=k.environmentIntensity),Nt&&(Rt.setValue(U,"toneMappingExposure",y.toneMappingExposure),D.needsLights&&Qe(on,wn),he&&q.fog===!0&&j.refreshFogUniforms(on,he),j.refreshMaterialUniforms(on,q,Y,ce,p.state.transmissionRenderTarget[T.id]),bo.upload(U,gi(D),on,Ke)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(bo.upload(U,gi(D),on,Ke),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Rt.setValue(U,"center",B.center),Rt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Rt.setValue(U,"normalMatrix",B.normalMatrix),Rt.setValue(U,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const zt=q.uniformsGroups;for(let Ht=0,Ys=zt.length;Ht<Ys;Ht++){const Ft=zt[Ht];O.update(Ft,Ge),O.bind(Ft,Ge)}}return Ge}function Qe(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function $e(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,k,W){const q=Be.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Be.get(T.texture).__webglTexture=k,Be.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const W=Be.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Pr=U.createFramebuffer();this.setRenderTarget=function(T,k=0,W=0){L=T,A=k,g=W;let q=!0,B=null,he=!1,be=!1;if(T){const Ie=Be.get(T);if(Ie.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Ie.__webglFramebuffer===void 0)Ke.setupRenderTarget(T);else if(Ie.__hasExternalTextures)Ke.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(Ie.__boundDepthTexture!==Oe){if(Oe!==null&&Be.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);const Ye=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?B=Ye[k][W]:B=Ye[k],he=!0):T.samples>0&&Ke.useMultisampledRTT(T)===!1?B=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[W]:B=Ye,N.copy(T.viewport),G.copy(T.scissor),H=T.scissorTest}else N.copy(re).multiplyScalar(Y).floor(),G.copy(Ce).multiplyScalar(Y).floor(),H=wt;if(W!==0&&(B=Pr),Ne.bindFramebuffer(U.FRAMEBUFFER,B)&&q&&Ne.drawBuffers(T,B),Ne.viewport(N),Ne.scissor(G),Ne.setScissorTest(H),he){const Ie=Be.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,W)}else if(be){const Ie=Be.get(T.texture),We=k;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,W,We)}else if(T!==null&&W!==0){const Ie=Be.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(T,k,W,q,B,he,be,Le=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){Ne.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const We=T.textures[Le],Ye=We.format,Oe=We.type;if(!ht.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&W>=0&&W<=T.height-B&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Le),U.readPixels(k,W,q,B,ge.convert(Ye),ge.convert(Oe),he))}finally{const We=L!==null?Be.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,k,W,q,B,he,be,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie)if(k>=0&&k<=T.width-q&&W>=0&&W<=T.height-B){Ne.bindFramebuffer(U.FRAMEBUFFER,Ie);const We=T.textures[Le],Ye=We.format,Oe=We.type;if(!ht.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Le),U.readPixels(k,W,q,B,ge.convert(Ye),ge.convert(Oe),0);const vt=L!==null?Be.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,vt);const Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gf(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(st),U.deleteSync(Ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,W=0){const q=Math.pow(2,-W),B=Math.floor(T.image.width*q),he=Math.floor(T.image.height*q),be=k!==null?k.x:0,Le=k!==null?k.y:0;Ke.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,be,Le,B,he),Ne.unbindTexture()};const js=U.createFramebuffer(),Qn=U.createFramebuffer();this.copyTextureToTexture=function(T,k,W=null,q=null,B=0,he=null){he===null&&(B!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=B,B=0):he=0);let be,Le,Ie,We,Ye,Oe,st,vt,Ct;const C=T.isCompressedTexture?T.mipmaps[he]:T.image;if(W!==null)be=W.max.x-W.min.x,Le=W.max.y-W.min.y,Ie=W.isBox3?W.max.z-W.min.z:1,We=W.min.x,Ye=W.min.y,Oe=W.isBox3?W.min.z:0;else{const Qt=Math.pow(2,-B);be=Math.floor(C.width*Qt),Le=Math.floor(C.height*Qt),T.isDataArrayTexture?Ie=C.depth:T.isData3DTexture?Ie=Math.floor(C.depth*Qt):Ie=1,We=0,Ye=0,Oe=0}q!==null?(st=q.x,vt=q.y,Ct=q.z):(st=0,vt=0,Ct=0);const F=ge.convert(k.format),D=ge.convert(k.type);let oe;k.isData3DTexture?(Ke.setTexture3D(k,0),oe=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ke.setTexture2DArray(k,0),oe=U.TEXTURE_2D_ARRAY):(Ke.setTexture2D(k,0),oe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const me=U.getParameter(U.UNPACK_ROW_LENGTH),Ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),St=U.getParameter(U.UNPACK_SKIP_PIXELS),Nt=U.getParameter(U.UNPACK_SKIP_ROWS),wn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,C.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,C.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const Rt=T.isDataArrayTexture||T.isData3DTexture,on=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Qt=Be.get(T),zt=Be.get(k),Ht=Be.get(Qt.__renderTarget),Ys=Be.get(zt.__renderTarget);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ft=0;Ft<Ie;Ft++)Rt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.get(T).__webglTexture,B,Oe+Ft),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.get(k).__webglTexture,he,Ct+Ft)),U.blitFramebuffer(We,Ye,be,Le,st,vt,be,Le,U.DEPTH_BUFFER_BIT,U.NEAREST);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||Be.has(T)){const Qt=Be.get(T),zt=Be.get(k);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,js),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qn);for(let Ht=0;Ht<Ie;Ht++)Rt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.__webglTexture,B,Oe+Ht):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qt.__webglTexture,B),on?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,he,Ct+Ht):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zt.__webglTexture,he),B!==0?U.blitFramebuffer(We,Ye,be,Le,st,vt,be,Le,U.COLOR_BUFFER_BIT,U.NEAREST):on?U.copyTexSubImage3D(oe,he,st,vt,Ct+Ht,We,Ye,be,Le):U.copyTexSubImage2D(oe,he,st,vt,We,Ye,be,Le);Ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else on?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(oe,he,st,vt,Ct,be,Le,Ie,F,D,C.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(oe,he,st,vt,Ct,be,Le,Ie,F,C.data):U.texSubImage3D(oe,he,st,vt,Ct,be,Le,Ie,F,D,C):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,st,vt,be,Le,F,D,C.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,st,vt,C.width,C.height,F,C.data):U.texSubImage2D(U.TEXTURE_2D,he,st,vt,be,Le,F,D,C);U.pixelStorei(U.UNPACK_ROW_LENGTH,me),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wn),he===0&&k.generateMipmaps&&U.generateMipmap(oe),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W=null,q=null,B=0){return As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,W,q,B)},this.initRenderTarget=function(T){Be.get(T).__webglFramebuffer===void 0&&Ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ke.setTextureCube(T,0):T.isData3DTexture?Ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ke.setTexture2DArray(T,0):Ke.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){A=0,g=0,L=null,Ne.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Gx{constructor(e){E(this,"keys",new Set);E(this,"justPressed",new Set);E(this,"leftReleased",!1);E(this,"leftDown",!1);E(this,"rightDown",!1);E(this,"dx",0);E(this,"dy",0);E(this,"wheel",0);E(this,"suspended",!1);window.addEventListener("keydown",t=>{this.suspended||(t.code==="Tab"&&t.preventDefault(),this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code))}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("mousedown",t=>{t.button===0&&(this.leftDown=!0),t.button===2&&(this.rightDown=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.leftDown&&(this.leftReleased=!0),this.leftDown=!1),t.button===2&&(this.rightDown=!1)}),window.addEventListener("mousemove",t=>{this.dx+=t.movementX,this.dy+=t.movementY}),e.addEventListener("wheel",t=>{this.wheel+=t.deltaY})}isDown(e){return this.keys.has(e)}wasPressed(e){return this.justPressed.has(e)}consumeLeftRelease(){return this.leftReleased?(this.leftReleased=!1,!0):!1}clearKeys(){this.keys.clear(),this.justPressed.clear()}endFrame(){this.justPressed.clear(),this.dx=0,this.dy=0,this.wheel=0,this.leftReleased=!1}}const _t={C4:261.63,D4:293.66,E4:329.63,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},Vx={day:{barSeconds:3.2,chords:[[_t.C4,_t.E4,_t.G4],[220,_t.C4,_t.E4],[174.61,220,_t.C4],[196,246.94,_t.D4]],style:"melody",melody:[[[_t.E5,0,.5],[_t.G5,.25,.5],[_t.A5,.5,.5],[_t.G5,.75,.45]],[[_t.E5,0,.6],[_t.C5,.5,.85]],[[_t.D5,0,.5],[_t.E5,.25,.5],[_t.F5,.5,.5],[_t.D5,.75,.45]],[[_t.C5,0,1.5]]],hats:[.5],padType:"triangle",padVol:.05},sail:{barSeconds:2.8,chords:[[174.61,220,_t.C4],[_t.C4,_t.E4,_t.G4],[196,246.94,_t.D4],[220,_t.C4,_t.E4]],style:"arp",melody:[],hats:[0,.25,.5,.75],padType:"triangle",padVol:.04},night:{barSeconds:4.2,chords:[[220,_t.C4,_t.E4],[174.61,220,_t.C4],[130.81,164.81,196],[196,246.94,_t.D4]],style:"melody",melody:[[[_t.A4,0,1.4]],[[_t.C5,0,1],[_t.B4,.5,1.2]],[[_t.E5,0,1.8]],[]],hats:[],padType:"sine",padVol:.045}};class Wx{constructor(){E(this,"ctx",null);E(this,"sfxBus",null);E(this,"musicBus",null);E(this,"noiseBuffer",null);E(this,"chordIndex",0);E(this,"musicTimer",null);E(this,"volume",1);E(this,"musicEnabled",!0);E(this,"rainGain",null);E(this,"musicMode","day")}unlock(){if(this.ctx)return;const e=new AudioContext;this.ctx=e,this.sfxBus=e.createGain(),this.sfxBus.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(e.destination),this.applyVolume();const t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;this.noiseBuffer=t,this.startWaves(),this.startRain(),this.scheduleBar()}stopMusic(){this.musicTimer&&clearTimeout(this.musicTimer),this.musicTimer=null}setMusicMode(e){this.musicMode=e}setRain(e){if(!this.ctx||!this.rainGain)return;const t=e?.09:1e-4;this.rainGain.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}setVolume(e){this.volume=e,this.applyVolume()}setMusicEnabled(e){this.musicEnabled=e,this.applyVolume()}applyVolume(){this.sfxBus&&(this.sfxBus.gain.value=.9*this.volume),this.musicBus&&(this.musicBus.gain.value=this.musicEnabled?.55*this.volume:0)}sfx(e){if(this.ctx)switch(e){case"swing":this.noiseBurst("bandpass",900,250,.16,.35);break;case"hit":this.tone("square",160,70,.12,.3),this.noiseBurst("lowpass",500,200,.08,.2);break;case"enemyDie":this.tone("triangle",420,90,.3,.35),this.noiseBurst("lowpass",800,150,.25,.15);break;case"crystal":this.tone("sine",880,880,.08,.25),this.tone("sine",1318.5,1318.5,.14,.22,.07);break;case"coin":this.tone("sine",1568,1568,.05,.2),this.tone("sine",2093,2093,.12,.16,.05);break;case"levelup":[523.25,659.25,783.99,1046.5].forEach((t,n)=>this.tone("triangle",t,t,.3,.3,n*.11));break;case"jump":this.tone("sine",280,520,.14,.22);break;case"dodge":this.noiseBurst("highpass",1200,2800,.2,.2);break;case"hurt":this.tone("sawtooth",220,90,.18,.3);break;case"ui":this.tone("sine",600,600,.05,.15);break;case"spin":this.noiseBurst("bandpass",400,1400,.32,.4),this.tone("sawtooth",200,90,.3,.25);break;case"chargeReady":this.tone("sine",1046.5,1046.5,.1,.25),this.tone("sine",1568,1568,.18,.2,.08);break;case"block":this.tone("square",2200,1700,.07,.22),this.tone("triangle",880,660,.12,.2,.02);break;case"wave":this.tone("sine",500,1400,.35,.3),this.noiseBurst("highpass",800,3e3,.3,.18);break;case"fire":this.noiseBurst("lowpass",2400,400,.4,.4),this.tone("sawtooth",320,110,.35,.22);break;case"gem":[659.25,830.61,987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.35,.28,n*.13));break;case"potion":this.tone("sine",420,260,.1,.22),this.tone("sine",520,320,.12,.2,.1),this.tone("sine",700,900,.15,.18,.22);break;case"quake":this.noiseBurst("lowpass",320,60,.5,.5),this.tone("sine",85,40,.45,.4);break;case"anvil":this.tone("square",1800,1400,.08,.25),this.tone("triangle",900,700,.15,.22,.08);break;case"lava":this.noiseBurst("lowpass",900,300,.25,.2);break;case"ice":this.tone("sine",1400,900,.2,.25),this.noiseBurst("highpass",2500,5e3,.15,.15);break;case"shatter":this.noiseBurst("highpass",1800,4e3,.3,.3),this.tone("triangle",900,300,.25,.2);break;case"blink":this.tone("sine",600,1800,.12,.25),this.tone("sine",1800,700,.12,.2,.1);break;case"dive":this.noiseBurst("lowpass",1200,200,.5,.3),this.tone("sine",400,150,.4,.2);break;case"victory":[523.25,659.25,783.99,1046.5,783.99,1046.5].forEach((t,n)=>this.tone("triangle",t,t,.4,.3,n*.18));break;case"thunder":this.noiseBurst("lowpass",200,40,.9,.5),this.tone("sine",60,30,.8,.35);break;case"vortex":this.tone("sine",90,320,.7,.3),this.noiseBurst("bandpass",300,900,.7,.2);break;case"aqua":this.tone("sine",620,1500,.32,.28),this.noiseBurst("highpass",1800,4200,.28,.16);break;case"life":this.tone("sine",523.25,880,.26,.25),this.tone("sine",783.99,1046.5,.3,.2,.08);break;case"shrine":[659.25,987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.4,.25,n*.12)),this.tone("triangle",329.63,329.63,.6,.18);break;case"seaTravel":this.noiseBurst("bandpass",500,2200,.6,.25),this.tone("sine",300,1100,.55,.25),[523.25,783.99,1046.5].forEach((t,n)=>this.tone("sine",t,t,.3,.2,.25+n*.12));break;case"shrineTravel":this.noiseBurst("highpass",1e3,3200,.35,.2),this.tone("sine",880,1760,.3,.22),[987.77,1318.5].forEach((t,n)=>this.tone("sine",t,t,.25,.2,.18+n*.1));break}}tone(e,t,n,i,s,o=0){if(!this.ctx||!this.sfxBus)return;const a=this.ctx.currentTime+o,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=e,c.frequency.setValueAtTime(t,a),n!==t&&c.frequency.exponentialRampToValueAtTime(Math.max(n,1),a+i),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+i),c.connect(l).connect(this.sfxBus),c.start(a),c.stop(a+i+.05)}noiseBurst(e,t,n,i,s){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type=e,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+i);const l=this.ctx.createGain();l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+i),a.connect(c).connect(l).connect(this.sfxBus),a.start(o),a.stop(o+i+.05)}startWaves(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.1;const i=this.ctx.createOscillator();i.frequency.value=.08;const s=this.ctx.createGain();s.gain.value=.05,i.connect(s).connect(n.gain),e.connect(t).connect(n).connect(this.musicBus),e.start(),i.start()}startRain(){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=1400,t.Q.value=.7;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2600;const i=this.ctx.createGain();i.gain.value=1;const s=this.ctx.createOscillator();s.frequency.value=.13;const o=this.ctx.createGain();o.gain.value=.18,s.connect(o).connect(i.gain),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=1e-4,e.connect(t).connect(n).connect(i).connect(this.rainGain).connect(this.musicBus),e.start(),s.start()}scheduleBar(){if(!this.ctx||!this.musicBus)return;const e=Vx[this.musicMode],t=e.barSeconds,n=this.ctx.currentTime+.05,i=this.chordIndex%e.chords.length,s=e.chords[i];this.chordIndex++;for(const c of s){const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type=e.padType,l.frequency.value=c,u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(e.padVol,n+.7),u.gain.setValueAtTime(e.padVol,n+t-1),u.gain.exponentialRampToValueAtTime(1e-4,n+t+.5),l.connect(u).connect(this.musicBus),l.start(n),l.stop(n+t+.6)}const o=this.ctx.createOscillator(),a=this.ctx.createGain();if(o.type="sine",o.frequency.value=s[0]/2,a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.3),a.gain.exponentialRampToValueAtTime(1e-4,n+t),o.connect(a).connect(this.musicBus),o.start(n),o.stop(n+t+.1),e.style==="melody"){const c=e.melody[i%e.melody.length]??[];for(const[l,u,h]of c)this.melodyNote(l,n+u*t,h)}else{const c=[0,1,2,1,0,1,2,1];for(let l=0;l<c.length;l++)this.melodyNote(s[c[l]]*2,n+l/8*t,t/8-.05)}for(const c of e.hats)this.hatTick(n+c*t);this.musicTimer=setTimeout(()=>this.scheduleBar(),t*1e3)}melodyNote(e,t,n){if(!this.ctx||!this.musicBus)return;const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.value=e,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.09,t+.04),s.gain.exponentialRampToValueAtTime(1e-4,t+n),i.connect(s).connect(this.musicBus),i.start(t),i.stop(t+n+.05)}hatTick(e){if(!this.ctx||!this.musicBus||!this.noiseBuffer)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6e3;const i=this.ctx.createGain();i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.06),t.connect(n).connect(i).connect(this.musicBus),t.start(e),t.stop(e+.08)}}const qx=22,Xx=80;class jx{constructor(e){E(this,"hitstopT",0);E(this,"shakeT",0);E(this,"shakeDuration",1);E(this,"shakeIntensity",0);E(this,"particles",[]);this.scene=e}get frozen(){return this.hitstopT>0}hitstop(e){this.hitstopT=Math.max(this.hitstopT,e)}shake(e,t){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeT=Math.max(this.shakeT,t),this.shakeDuration=Math.max(t,.01)}burst(e,t,n=10,i=7){for(let s=0;s<n&&!(this.particles.length>=Xx);s++){const o=.07+Math.random()*.1,a=new $(new Oo(o),new Bt({color:t}));a.position.copy(e);const c=new I(Math.random()-.5,Math.random()*.8+.3,Math.random()-.5).normalize(),l=.35+Math.random()*.3;this.particles.push({mesh:a,velocity:c.multiplyScalar(i*(.5+Math.random()*.7)),life:l,maxLife:l}),this.scene.add(a)}}update(e){if(this.hitstopT=Math.max(0,this.hitstopT-e),this.particles=this.particles.filter(t=>{if(t.life-=e,t.life<=0)return this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),!1;t.velocity.y-=qx*e,t.mesh.position.addScaledVector(t.velocity,e),t.mesh.rotation.x+=e*8,t.mesh.rotation.y+=e*6;const n=t.life/t.maxLife;return t.mesh.scale.setScalar(n),!0}),this.shakeT>0){this.shakeT-=e;const t=Math.max(this.shakeT/this.shakeDuration,0),n=this.shakeIntensity*t;return this.shakeT<=0&&(this.shakeIntensity=0),new I((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}return new I}}let Ms=null;function Yx(){if(!Ms){const r=new Uint8Array([90,150,210,255]);Ms=new qc(r,r.length,1,Do),Ms.minFilter=Zt,Ms.magFilter=Zt,Ms.needsUpdate=!0}return Ms}function we(r,e={}){const t=new rd({color:r,gradientMap:Yx(),transparent:e.transparent??!1,opacity:e.opacity??1,vertexColors:e.vertexColors??!1,map:e.map??null});return e.emissive!==void 0&&(t.emissive.setHex(e.emissive),t.emissiveIntensity=e.emissiveIntensity??1),t}const $x=new Bt({color:1844019,side:rn});function mi(r,e=1.06){var n;const t=[];r.traverse(i=>{i instanceof $&&!(i instanceof td)&&t.push(i)});for(const i of t){const s=new $(i.geometry,$x);s.position.copy(i.position),s.rotation.copy(i.rotation),s.scale.copy(i.scale).multiplyScalar(e),s.raycast=()=>{},(n=i.parent)==null||n.add(s)}}function Kx(r,e=.03){var n;const t=[];r.traverse(i=>{i instanceof yc&&t.push(i)});for(const i of t){const s=new Bt({color:1844019,side:rn});s.onBeforeCompile=a=>{a.uniforms.outlineThickness={value:e},a.vertexShader=`uniform float outlineThickness;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  transformed += normalize(objectNormal) * outlineThickness;`)};const o=new yc(i.geometry,s);o.bind(i.skeleton,i.bindMatrix),o.position.copy(i.position),o.quaternion.copy(i.quaternion),o.scale.copy(i.scale),o.castShadow=!1,o.raycast=()=>{},(n=i.parent)==null||n.add(o)}}const Zx=.6,Th=.25;function Jx(){const r=new es(700,700,96,96);r.rotateX(-Math.PI/2);const e=we(2789320,{transparent:!0,opacity:.92});return new $(r,e)}function Qx(r,e,t=1){const n=r.geometry.getAttribute("position"),i=Zx*t;for(let s=0;s<n.count;s++){const o=n.getX(s),a=n.getZ(s),c=Math.sin(o*Th+e)*Math.cos(a*Th+e*.8)*i;n.setY(s,c)}n.needsUpdate=!0,r.geometry.computeVertexNormals()}const ev=360,Eh=.65,tv=new fe(8900331),nv=new fe(660528),ba=260,Ah=42,iv={clear:{wave:1,boat:1,darken:1},rain:{wave:1.35,boat:.9,darken:.72},storm:{wave:2.2,boat:.65,darken:.5}};class sv{constructor(e,t,n,i){E(this,"time",.12);E(this,"weather","clear");E(this,"weatherT",50);E(this,"lightningT",6);E(this,"flashT",0);E(this,"rain");E(this,"rainVelocity",[]);this.scene=e,this.sun=t,this.hemi=n,this.ambient=i;const s=new Float32Array(ba*6);for(let a=0;a<ba;a++){const c=(Math.random()-.5)*Ah,l=Math.random()*30,u=(Math.random()-.5)*Ah;s.set([c,l,u,c,l-.9,u],a*6),this.rainVelocity.push(30+Math.random()*14)}const o=new Ut;o.setAttribute("position",new Jt(s,3)),this.rain=new Co(o,new Xn({color:11193582,transparent:!0,opacity:.55})),this.rain.visible=!1,e.add(this.rain)}forceWeather(e){this.weather=e,this.weatherT=60}get rainVisible(){return this.rain.visible}update(e,t,n){if(this.time=(this.time+e/ev)%1,this.weatherT-=e,this.weatherT<=0){this.weatherT=45+Math.random()*45;const h=Math.random();this.weather=h<.55?"clear":h<.85?"rain":"storm"}const i=iv[this.weather],s=this.weather!=="clear",o=this.time/Eh,a=this.time<Eh?Math.sin(Math.PI*o):0,c=Math.PI*(1-o);this.sun.position.set(t.x+Math.cos(c)*120,Math.max(Math.sin(c),.12)*130+15,t.z+40),this.sun.target.position.set(t.x,0,t.z),this.sun.intensity=.15+2.45*a,this.hemi.intensity=.25+.45*a;let l=.12+.23*a,u=!1;if(this.weather==="storm"&&(this.lightningT-=e,this.lightningT<=0&&(this.lightningT=4+Math.random()*8,this.flashT=.14,u=!0)),this.flashT>0&&(this.flashT-=e,l+=1.6),this.ambient.intensity=l,!n){const h=nv.clone().lerp(tv,a).multiplyScalar(i.darken);this.flashT>0&&h.lerp(new fe(16777215),.5),this.scene.background.copy(h),this.scene.fog.color.copy(h)}if(this.rain.visible=s&&!n,this.rain.visible){this.rain.position.set(t.x,t.y,t.z);const h=this.rain.geometry.getAttribute("position"),d=this.weather==="storm"?1.6:1;for(let f=0;f<ba;f++){let _=h.getY(f*2)-this.rainVelocity[f]*d*e;_<-4&&(_=26+Math.random()*4),h.setY(f*2,_),h.setY(f*2+1,_-.9)}h.needsUpdate=!0}return{isNight:a<.08,weather:this.weather,raining:s,waveScale:i.wave,boatFactor:i.boat,thunder:u}}}const rv=/^[og]\s*(.+)?/,ov=/^mtllib /,av=/^usemtl /,cv=/^usemap /,Rh=/\s+/,Ch=new I,wa=new I,Ih=new I,Ph=new I,En=new I,ho=new fe;function lv(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Ch.fromArray(i,e),wa.fromArray(i,t),Ih.fromArray(i,n),En.subVectors(Ih,wa),Ph.subVectors(Ch,wa),En.cross(Ph),En.normalize(),s.push(En.x,En.y,En.z),s.push(En.x,En.y,En.z),s.push(En.x,En.y,En.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(h,d,f),this.addColor(h,d,f),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),d=this.parseNormalIndex(c,_),f=this.parseNormalIndex(l,_),this.addNormal(h,d,f)}else this.addFaceNormal(h,d,f);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),d=this.parseUVIndex(s,_),f=this.parseUVIndex(o,_),this.addUV(h,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class hv extends Ui{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new Fo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new lv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Rh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(ho.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),kt),t.colors.push(ho.r,ho.g,ho.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=l.slice(1).trim().split(Rh),f=[];for(let x=0,m=d.length;x<m;x++){const p=d[x];if(p.length>0){const v=p.split("/");f.push(v)}}const _=f[0];for(let x=1,m=f.length-1;x<m;x++){const p=f[x],v=f[x+1];t.addFace(_[0],p[0],v[0],_[1],p[1],v[1],_[2],p[2],v[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let d=[];const f=[];if(l.indexOf("/")===-1)d=h;else for(let _=0,x=h.length;_<x;_++){const m=h[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(u==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=rv.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(av.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(ov.test(l))t.materialLibraries.push(l.substring(7).trim());else if(cv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new rt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,d=u.type==="Line",f=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new Ut;x.setAttribute("position",new ut(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new ut(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new ut(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new ut(u.uvs,2));const m=[];for(let v=0,w=h.length;v<w;v++){const y=h[v],R=y.name+"_"+y.smooth+"_"+_;let A=t.materials[R];if(this.materials!==null){if(A=this.materials.create(y.name),d&&A&&!(A instanceof Xn)){const g=new Xn;un.prototype.copy.call(g,A),g.color.copy(A.color),A=g}else if(f&&A&&!(A instanceof Ss)){const g=new Ss({size:10,sizeAttenuation:!1});un.prototype.copy.call(g,A),g.color.copy(A.color),g.map=A.map,A=g}}A===void 0&&(d?A=new Xn:f?A=new Ss({size:1,sizeAttenuation:!1}):A=new sd,A.name=y.name,A.flatShading=!y.smooth,A.vertexColors=_,t.materials[R]=A),m.push(A)}let p;if(m.length>1){for(let v=0,w=h.length;v<w;v++){const y=h[v];x.addGroup(y.groupStart,y.groupCount,v)}d?p=new Co(x,m):f?p=new Mo(x,m):p=new $(x,m)}else d?p=new Co(x,m[0]):f?p=new Mo(x,m[0]):p=new $(x,m[0]);p.name=l.name,s.add(p)}else if(t.vertices.length>0){const a=new Ss({size:1,sizeAttenuation:!1}),c=new Ut;c.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ut(t.colors,3)),a.vertexColors=!0);const l=new Mo(c,a);s.add(l)}return s}}class uv extends Ui{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Cs.extractUrlBase(e):this.path,a=new Fo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const s=/\s+/,o={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;const u=l.indexOf(" ");let h=u>=0?l.substring(0,u):l;h=h.toLowerCase();let d=u>=0?l.substring(u+1):"";if(d=d.trim(),h==="newmtl")i={name:d},o[d]=i;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const f=d.split(s,3);i[h]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else i[h]=d}const a=new dv(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class dv{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:jn,this.wrap=this.options.wrap!==void 0?this.options.wrap:Ki}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],s={};t[n]=s;for(const o in i){let a=!0,c=i[o];const l=o.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(a=!1);break}a&&(s[l]=c)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function s(a,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:a+c}function o(a,c){if(i[a])return;const l=t.getTextureParams(c,i),u=t.loadTexture(s(t.baseUrl,l.url));u.repeat.copy(l.scale),u.offset.copy(l.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=kt),i[a]=u}for(const a in n){const c=n[a];let l;if(c!=="")switch(a.toLowerCase()){case"kd":i.color=at.colorSpaceToWorking(new fe().fromArray(c),kt);break;case"ks":i.specular=at.colorSpaceToWorking(new fe().fromArray(c),kt);break;case"ke":i.emissive=at.colorSpaceToWorking(new fe().fromArray(c),kt);break;case"map_kd":o("map",c);break;case"map_ks":o("specularMap",c);break;case"map_ke":o("emissiveMap",c);break;case"norm":o("normalMap",c);break;case"map_bump":case"bump":o("bumpMap",c);break;case"disp":o("displacementMap",c);break;case"map_d":o("alphaMap",c),i.transparent=!0;break;case"ns":i.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0);break}}return this.materials[e]=new sd(i),this.materials[e]}getTextureParams(e,t){const n={scale:new He(1,1),offset:new He(0,0)},i=e.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-mm"),s>=0&&(t.displacementBias=parseFloat(i[s+1]),t.displacementScale=parseFloat(i[s+2]),i.splice(s,3)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,s){const o=this.manager!==void 0?this.manager:ld;let a=o.getHandler(e);a===null&&(a=new hd(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const c=a.load(e,n,i,s);return t!==void 0&&(c.mapping=t),c}}const Lh="./models/",_d={common:["CommonTree_1","CommonTree_2","CommonTree_3"],birch:["BirchTree_1","BirchTree_2"],pine:["PineTree_1","PineTree_2"],pine_snow:["PineTree_Snow_1","PineTree_Snow_2","PineTree_Snow_3"],common_snow:["CommonTree_Snow_1","CommonTree_Snow_2"],dead:["CommonTree_Dead_1","CommonTree_Dead_2"],autumn:["CommonTree_Autumn_1","CommonTree_Autumn_2"],palm:["PalmTree_1","PalmTree_2","PalmTree_3"],cactus:["Cactus_1","Cactus_2","Cactus_3"],willow:["Willow_1","Willow_2"],rock:["Rock_1","Rock_2","Rock_3","Rock_4","Rock_5"],rock_snow:["Rock_Snow_1","Rock_Snow_2","Rock_Snow_3"],rock_moss:["Rock_Moss_1","Rock_Moss_2"],grass:["Grass","Grass_2"],grass_short:["Grass_Short"],flowers:["Flowers"],plant:["Plant_1","Plant_2"],bush:["Bush_1","Bush_2"],berries:["BushBerries_1"],log:["WoodLog"],stump:["TreeStump"],wheat:["Wheat"],lily:["Lilypad"]},fv={common:5.2,birch:5.6,pine:5.4,pine_snow:5.4,common_snow:5,dead:4.8,autumn:5.2,palm:6.2,cactus:2.6,willow:5.6,rock:1.7,rock_snow:1.7,rock_moss:1.7,grass:.7,grass_short:.5,flowers:.7,plant:.8,bush:1.1,berries:1.1,log:.7,stump:1,wheat:1.3,lily:.18},Io=new Map;let Tc=!1;function Dh(){return Tc}function pv(r){r.traverse(e=>{if(e instanceof $){const t=Array.isArray(e.material)?e.material[0]:e.material,n=new fe(8956518);t&&t.color&&n.copy(t.color).convertLinearToSRGB(),e.material=we(n.getHex()),e.castShadow=!0}})}function mv(r,e){pv(r),mi(r);const t=new Pn().setFromObject(r),n=t.max.y-t.min.y||1,i=e/n;r.scale.setScalar(i),r.position.y=-t.min.y*i;const s=new rt;s.add(r),s.updateMatrixWorld(!0);const o=new Pn().setFromObject(s);return s.userData.radius=Math.max(o.max.x-o.min.x,o.max.z-o.min.z)/2,s}async function gv(r,e){const t=await new uv().setPath(Lh).loadAsync(`${r}.mtl`);t.preload();const n=await new hv().setMaterials(t).setPath(Lh).loadAsync(`${r}.obj`);Io.set(r,mv(n,e))}async function _v(){const r=[];for(const[e,t]of Object.entries(_d)){const n=fv[e]??1;for(const i of t)r.push(gv(i,n).catch(s=>console.warn(`[scenery] 模型載入失敗 ${i}:`,s)))}return await Promise.all(r),Tc=Io.has("CommonTree_1")||Io.has("PalmTree_1"),Tc}function Sa(r){const e=_d[r];if(!e||e.length===0)return null;const t=e[Math.floor(Math.random()*e.length)],n=Io.get(t);return n?n.clone():null}function Nh(r,e){if(e===pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===xc||e===Hu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===xc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class xv extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Fv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Fo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===xd){try{o[lt.KHR_BINARY_GLTF]=new kv(e)}catch(h){i&&i(h);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Zv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new Mv;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Bv(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new zv;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new Hv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function vv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yv{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new fe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],dn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ud(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zp(u),l.distance=h;break;case"spot":l=new kp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Mv{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){const i=[];e.color=new fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,kt))}return Promise.all(i)}}class bv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(s)}}class Sv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Tv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Ev{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],dn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Av{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Rv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(a[0],a[1],a[2],dn),Promise.all(s)}}class Cv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Iv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(a[0],a[1],a[2],dn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(s)}}class Pv{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Lv{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Dv{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Nv{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Uv{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Ov{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Fv{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const _ of h){const x=new Je,m=new I,p=new Hn,v=new I(1,1,1),w=new vp(_.geometry,_.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),w.setMatrixAt(y,x.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const R=c[y];w.instanceColor=new Mc(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Dt.prototype.copy.call(w,_),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const xd="glTF",ar=12,Uh={JSON:1313821514,BIN:5130562};class kv{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ar,s=new DataView(e,ar);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Uh.JSON){const l=new Uint8Array(e,ar+o,a);this.content=n.decode(l)}else if(c===Uh.BIN){const l=ar+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Ec[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ec[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Is[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const x=f.attributes[_],m=c[_];m!==void 0&&(x.normalized=m)}h(f)},a,l,dn,d)})})}}class zv{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Hv{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class vd extends Ar{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*l,x=_-l,m=-2*f+3*d,p=f-d,v=1-m,w=p-d+h;for(let y=0;y!==a;y++){const R=o[x+y+a],A=o[x+y+c]*u,g=o[_+y+a],L=o[_+y]*u;s[y]=v*R+w*A+m*g+p*L}return s}}const Gv=new Hn;class Vv extends vd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Gv.fromArray(s).normalize().toArray(s),s}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Oh={9728:Zt,9729:yn,9984:Pu,9985:mo,9986:lr,9987:ui},Fh={33071:Ci,33648:wo,10497:Ki},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Kc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),r.DefaultMaterial}function Gi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function jv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yv(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Aa(t.attributes):e=r.indices+":"+Aa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Aa(r.targets[n]);return e}function Aa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ac(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Kv=new Je;class Zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new hd(this.options.manager):this.textureLoader=new Vp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gi(s,a,i),li(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Cs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ta[i.type],a=Is[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Jt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ta[i.type],l=Is[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(v);w||(x=new l(a,p*f,i.count*f/u),w=new Ju(x,f/u),t.cache.add(v,w)),m=new Mr(w,c,d%f/u,_)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new Jt(x,c,_);if(i.sparse!==void 0){const p=Ta.SCALAR,v=Is[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new v(o[1],w,i.sparse.count*p),A=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let g=0,L=R.length;g<L;g++){const S=R[g];if(m.setX(S,A[g*c]),c>=2&&m.setY(S,A[g*c+1]),c>=3&&m.setZ(S,A[g*c+2]),c>=4&&m.setW(S,A[g*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Oh[d.magFilter]||yn,u.minFilter=Oh[d.minFilter]||ui,u.wrapS=Fh[d.wrapS]||Ki,u.wrapT=Fh[d.wrapT]||Ki,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==yn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){const m=new qt(x);m.needsUpdate=!0,d(m)}),t.load(Cs.resolveURL(h,s.path),_,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),li(h,o),h.userData.mimeType=o.mimeType||$v(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ss,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Xn,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Kc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],dn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Kt);const u=s.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ea.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Bt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Bt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Bt){const h=s.emissiveFactor;a.emissive=new fe().setRGB(h[0],h[1],h[2],dn)}return s.emissiveTexture!==void 0&&o!==Bt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,kt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),li(h,s),t.associations.set(h,{materials:e}),s.extensions&&Gi(i,h,s),h})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return kh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Yv(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=kh(new Ut,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?qv(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const x=u[f],m=o[f];let p;const v=l[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new yc(x,v):new $(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,Hu):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,xc));else if(m.mode===Rn.LINES)p=new Co(x,v);else if(m.mode===Rn.LINE_STRIP)p=new wr(x,v);else if(m.mode===Rn.LINE_LOOP)p=new bp(x,v);else if(m.mode===Rn.POINTS)p=new Mo(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),li(p,s),m.extensions&&Gi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Gi(i,h[0],s),h[0];const d=new rt;s.extensions&&Gi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(Us.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Je;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],x=h[3],m=h[4],p=[];for(let v=0,w=d.length;v<w;v++){const y=d[v],R=f[v],A=_[v],g=x[v],L=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,R,A,g,L);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new wc(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Kv)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new nd:l.length>1?u=new rt:l.length===1?u=l[0]:u=new Dt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),li(u,s),s.extensions&&Gi(n,u,s),s.matrix!==void 0){const h=new Je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new rt;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&Gi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof un||d instanceof qt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Ai[s.path]===Ai.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ai[s.path]){case Ai.weights:l=Fs;break;case Ai.rotation:l=ks;break;case Ai.translation:case Ai.scale:l=Bs;break;default:switch(n.itemSize){case 1:l=Fs;break;case 2:case 3:default:l=Bs;break}break}const u=i.interpolation!==void 0?Wv[i.interpolation]:vr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+Ai[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ac(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ks?Vv:vd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jv(r,e,t){const n=e.attributes,i=new Pn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=Ac(Is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,c=new I;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const x=Ac(Is[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function kh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Ec[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return at.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),li(r,e),Jv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Xv(r,e.targets,t):r})}function Qv(r){const e=new Map,t=new Map,n=r.clone();return yd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function yd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)yd(r.children[n],e.children[n],t)}const ey="./models/monsters/",ty={GreenBlob:{file:"GreenBlob",targetH:1.7},GreenSpikyBlob:{file:"GreenSpikyBlob",targetH:1.6},Mushnub:{file:"Mushnub",targetH:1.6},Hywirl:{file:"Hywirl",targetH:1.7},Goleling:{file:"Goleling",targetH:1.5},Goleling_Evolved:{file:"Goleling_Evolved",targetH:1.7},Glub:{file:"Glub",targetH:1.5},Yeti:{file:"Yeti",targetH:1.8},Fish:{file:"Fish",targetH:1.5},Ghost:{file:"Ghost",targetH:1.7},BlueDemon:{file:"BlueDemon",targetH:1.9},Cactoro:{file:"Cactoro",targetH:1.6},Demon:{file:"Demon",targetH:1.9},Squidle:{file:"Squidle",targetH:1.6},Glub_Evolved:{file:"Glub_Evolved",targetH:1.7},Mushnub_Evolved:{file:"Mushnub_Evolved",targetH:1.7},MushroomKing:{file:"MushroomKing",targetH:1.9},Frog:{file:"Frog",targetH:1.5},PinkBlob:{file:"PinkBlob",targetH:1.6},Birb:{file:"Birb",targetH:1.7}},nl=new Map;let Bh=!1;function ny(r){r.traverse(e=>{if(e instanceof $){const t=Array.isArray(e.material)?e.material[0]:e.material,n=t&&t.map?t.map:void 0;e.material=we(16777215,{map:n}),e.castShadow=!0}})}function iy(r,e){ny(r),Kx(r);const t=new Pn().setFromObject(r),n=t.max.y-t.min.y||1,i=e/n;r.scale.setScalar(i),r.position.y=-t.min.y*i,r.position.x=-((t.min.x+t.max.x)/2)*i,r.position.z=-((t.min.z+t.max.z)/2)*i;const s=new rt;return s.add(r),s}async function sy(r,e){const t=await new xv().setPath(ey).loadAsync(`${e.file}.gltf`),n=t.scene;nl.set(r,{scene:iy(n,e.targetH),clips:t.animations})}async function ry(){const r=[];for(const[e,t]of Object.entries(ty))r.push(sy(e,t).catch(n=>console.warn(`[enemyModels] 模型載入失敗 ${e}:`,n)));return await Promise.all(r),Bh=nl.size>0,Bh}function oy(r){const e=nl.get(r);return e?{scene:Qv(e.scene),clips:e.clips}:null}const ay={trees:["common","birch"],rock:"rock",decor:["grass","flowers","bush"]},cy=new Set(["曙光嶼","翠風林島","港口鎮","靈脈島"]),ly={曙光嶼:{trees:["common","birch"],rock:"rock",decor:["grass","flowers","bush"]},翠風林島:{trees:["palm","common"],rock:"rock_moss",decor:["grass","bush","plant"]},燼岩火山島:{trees:["dead"],rock:"rock",decor:["stump"]},霜雪峰島:{trees:["pine_snow","common_snow"],rock:"rock_snow",decor:[]},虛空之心:{trees:["dead"],rock:"rock",decor:[]},界海之門:{trees:["pine_snow","birch"],rock:"rock_snow",decor:[]},港口鎮:{trees:["common","birch"],rock:"rock",decor:["grass","wheat","flowers"]},熔砂島:{trees:["cactus","palm"],rock:"rock",decor:["grass_short"]},珊瑚礁島:{trees:["palm"],rock:"rock",decor:["grass","bush"]},靈脈島:{trees:["common","willow"],rock:"rock_moss",decor:["grass","flowers","plant","bush"]},迷霧沼島:{trees:["willow","dead"],rock:"rock_moss",decor:["grass","plant"]},鹽晶島:{trees:["cactus"],rock:"rock_snow",decor:[]},烈陽礁:{trees:["palm","cactus"],rock:"rock",decor:["grass_short"]}},hy=14,uy=1.2,dy=5,Md=2e3,ci={x:Md,z:0},fy=1100;function hi(r){return r>fy?2:1}function bd(r,e){for(const t of Di)if(Math.hypot(r-t.x,e-t.z)<t.r)return t;return null}const Di=[{name:"曙光嶼",x:0,z:0,r:60,hills:[{x:0,z:12,r:40,h:10},{x:-30,z:-22,r:24,h:6},{x:32,z:-14,r:20,h:5},{x:16,z:34,r:20,h:5.5}],sand:15258784,grass:6073180,dark:4033341,treeCount:45,treeColor:4033341},{name:"翠風林島",x:150,z:110,r:55,hills:[{x:0,z:0,r:32,h:13},{x:-22,z:18,r:20,h:7},{x:20,z:-16,r:18,h:6}],sand:14207120,grass:3836490,dark:1989680,treeCount:70,treeColor:2452280},{name:"燼岩火山島",x:-150,z:120,r:50,hills:[{x:0,z:0,r:34,h:16},{x:18,z:-14,r:14,h:5}],sand:6969928,grass:8015928,dark:3811360,treeCount:8,treeColor:5914672,crater:{x:0,z:0,r:10,depth:6}},{name:"霜雪峰島",x:60,z:-170,r:52,hills:[{x:0,z:0,r:30,h:26},{x:-20,z:-15,r:16,h:7},{x:22,z:12,r:16,h:8}],sand:13621472,grass:15266040,dark:12110048,treeCount:25,treeColor:3042128},{name:"虛空之心",x:0,z:300,r:28,hills:[{x:0,z:0,r:18,h:8}],sand:4864602,grass:3811914,dark:1708068,treeCount:0,treeColor:1708068},{name:"界海之門",x:230,z:-60,r:50,hills:[{x:0,z:8,r:28,h:9},{x:-18,z:-14,r:16,h:4},{x:20,z:-10,r:14,h:4}],sand:15263968,grass:9091272,dark:4881048,treeCount:12,treeColor:3832458},{name:"港口鎮",x:Md,z:0,r:55,hills:[{x:0,z:20,r:30,h:7},{x:-24,z:-4,r:18,h:4},{x:26,z:0,r:16,h:4.5}],sand:15258784,grass:8042588,dark:4033357,treeCount:28,treeColor:4033357},{name:"熔砂島",x:2200,z:160,r:56,hills:[{x:0,z:0,r:36,h:18},{x:-22,z:16,r:18,h:6},{x:24,z:-14,r:16,h:5}],sand:15255672,grass:14198864,dark:11036728,treeCount:6,treeColor:6982218,crater:{x:0,z:0,r:11,depth:7}},{name:"珊瑚礁島",x:1790,z:-110,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-12,r:14,h:4.5}],sand:15786176,grass:4638904,dark:2787994,treeCount:16,treeColor:2792074},{name:"靈脈島",x:2120,z:-180,r:52,hills:[{x:0,z:0,r:36,h:15},{x:-22,z:14,r:18,h:6},{x:24,z:-16,r:16,h:5}],sand:14209176,grass:6998090,dark:3050042,treeCount:64,treeColor:2787898},{name:"迷霧沼島",x:1740,z:160,r:52,hills:[{x:0,z:0,r:34,h:13},{x:-20,z:16,r:16,h:5},{x:22,z:-14,r:14,h:4.5}],sand:10135672,grass:4880986,dark:2771514,treeCount:44,treeColor:3828298},{name:"鹽晶島",x:1980,z:250,r:50,hills:[{x:0,z:0,r:32,h:14},{x:-18,z:14,r:16,h:5},{x:20,z:-12,r:14,h:4.5}],sand:15789280,grass:13164768,dark:10139840,treeCount:10,treeColor:6986378},{name:"烈陽礁",x:2260,z:-40,r:50,hills:[{x:0,z:0,r:32,h:15},{x:-18,z:14,r:16,h:5},{x:20,z:-14,r:14,h:4.5}],sand:15779936,grass:14719032,dark:11561e3,treeCount:8,treeColor:9075258}],zh={x:-60,z:-120},An={x:-40,z:230,r:26},Hh={x:60,z:-170},Gh={x:0,z:288},wd=[{x:-150,z:120,r:7},{x:-132,z:128,r:4},{x:-163,z:134,r:4.5},{x:2200,z:160,r:8},{x:2186,z:168,r:4},{x:2214,z:152,r:4}];function py(r,e){return wd.some(t=>Math.hypot(r-t.x,e-t.z)<t.r)}function Ra(r){return r*r*(3-2*r)}function my(r,e,t){const n=e-r.x,i=t-r.z,s=Math.hypot(n,i);if(s>=r.r)return 0;const o=Ra(Math.min((r.r-s)/hy,1));let a=0;for(const u of r.hills){const h=Math.hypot(n-u.x,i-u.z);h<u.r&&(a+=u.h*Ra(1-h/u.r))}const c=Math.sin(e*.3)*Math.cos(t*.3)*.5;let l=0;if(r.crater){const u=Math.hypot(n-r.crater.x,i-r.crater.z);u<r.crater.r&&(l=r.crater.depth*Ra(1-u/r.crater.r))}return o*(uy+a+c-l)}function ft(r,e){let t=0;for(const n of Di)t=Math.max(t,my(n,r,e));return t}function Rc(r,e){return Di.some(t=>Math.hypot(r-t.x,e-t.z)<t.r+dy)}function Sd(r,e){return ft(r,e)<.25}const pi=[],gy=.45;function _y(r,e,t=gy){let n=r,i=e;for(const s of pi){const o=n-s.x,a=i-s.z,c=s.r+t,l=o*o+a*a;if(l>=c*c)continue;const u=Math.sqrt(l);if(u>1e-4){const h=(c-u)/u;n+=o*h,i+=a*h}else n+=c}return{x:n,z:i}}function xy(){pi.length=0;const r=new rt;for(const t of Di)r.add(yy(t));for(const t of wd){const n=new $(new Sr(t.r,24),new Bt({color:16734748}));n.rotation.x=-Math.PI/2,n.position.set(t.x,ft(t.x,t.z)+.08,t.z),r.add(n)}const e=we(10134712);for(let t=0;t<10;t++){const n=t/10*Math.PI*2,i=6+t%3*7,s=2.5+t*7%5,o=new $(new Lt(.9,1.1,s,10),e);o.position.set(An.x+Math.cos(n)*i,s/2-1,An.z+Math.sin(n)*i),o.rotation.z=(t%5-2)*.08,o.castShadow=!0,r.add(o),pi.push({x:o.position.x,z:o.position.z,r:1})}return r.add(vy()),r}function vy(){const r=new rt,e=ci.x,t=[{x:e-12,z:-26,body:15260864,roof:12606010},{x:e+12,z:-28,body:14207144,roof:3828378},{x:e-20,z:-12,body:14733488,roof:10119738},{x:e+22,z:-14,body:15260864,roof:4885082},{x:e,z:-18,body:15787208,roof:11552840}];for(const o of t){const a=new rt,c=new $(new Xt(4.2,3,3.6),we(o.body));c.position.y=1.5;const l=new $(new Mn(3.4,2,4),we(o.roof));l.position.y=3.9,l.rotation.y=Math.PI/4;const u=new $(new Xt(.9,1.5,.15),we(6964002));u.position.set(0,.75,1.85),a.add(c,l,u),mi(a),a.traverse(h=>{h instanceof $&&(h.castShadow=!0)}),a.rotation.y=(o.x+o.z)%5*.18,a.position.set(o.x,ft(o.x,o.z),o.z),r.add(a),pi.push({x:o.x,z:o.z,r:2.3})}const n=e+6,i=we(10516552),s=we(6964002);for(let o=0;o<8;o++){const a=-48-o*2.2,c=new $(new Xt(3,.25,2),i);if(c.position.set(n,.85,a),c.castShadow=!0,r.add(c),o%2===0)for(const l of[-1.4,1.4]){const u=new $(new Lt(.14,.16,1.8,8),s);u.position.set(n+l,0,a),u.castShadow=!0,r.add(u),pi.push({x:n+l,z:a,r:.35})}}return r}function yy(r){const e=new rt,t=r.r*2+14,n=150,i=new es(t,t,n,n);i.rotateX(-Math.PI/2);const s=i.getAttribute("position"),o=new Float32Array(s.count*3),a=new fe(r.sand),c=new fe(r.grass),l=new fe(r.dark),u=new fe;for(let x=0;x<s.count;x++){const m=s.getX(x)+r.x,p=s.getZ(x)+r.z,v=ft(m,p);s.setY(x,v),v<.8?u.copy(a):v<1.8?u.lerpColors(a,c,(v-.8)/1):u.lerpColors(c,l,Math.min((v-1.8)/9,1)),o[x*3]=u.r,o[x*3+1]=u.g,o[x*3+2]=u.b}i.setAttribute("color",new Jt(o,3)),i.computeVertexNormals();const h=new $(i,we(16777215,{vertexColors:!0}));h.receiveShadow=!0,h.position.set(r.x,0,r.z),e.add(h);const d=ly[r.name]??ay,f=Dh()&&!cy.has(r.name);let _=0;for(let x=0;x<300&&_<r.treeCount;x++){const m=Math.random()*Math.PI*2,p=Math.sqrt(Math.random())*(r.r-6),v=r.x+Math.cos(m)*p,w=r.z+Math.sin(m)*p,y=ft(v,w);if(y<=1.8||y>=11)continue;const R=f&&d.trees.length?Sa(d.trees[Math.random()*d.trees.length|0]):null;if(R){const A=.85+Math.random()*.35;R.scale.setScalar(A),R.rotation.y=Math.random()*Math.PI*2,R.position.set(v,y-.1,w),e.add(R),pi.push({x:v,z:w,r:(R.userData.radius||1)*A})}else e.add(wy(v,y,w,r.treeColor));_++}for(let x=0;x<14;x++){const m=Math.random()*Math.PI*2,p=Math.sqrt(Math.random())*(r.r-4),v=r.x+Math.cos(m)*p,w=r.z+Math.sin(m)*p,y=ft(v,w),R=f?Sa(d.rock):null;if(R){const A=.8+Math.random()*.7;R.scale.setScalar(A),R.rotation.y=Math.random()*Math.PI*2,R.position.set(v,y,w),e.add(R),pi.push({x:v,z:w,r:.7*A})}else{const A=.7+Math.random()*.9,g=new $(new $c(A),we(9079434));g.position.set(v,y+.3,w),g.rotation.set(Math.random(),Math.random(),Math.random()),g.castShadow=!0,e.add(g),pi.push({x:v,z:w,r:A*.75})}}if(Dh()&&d.decor.length){const x=Math.round(r.r*1.4);for(let m=0;m<x;m++){const p=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*(r.r-3),w=r.x+Math.cos(p)*v,y=r.z+Math.sin(p)*v,R=ft(w,y);if(R<=1.5||R>=9)continue;const A=Sa(d.decor[Math.random()*d.decor.length|0]);A&&(A.scale.setScalar(.8+Math.random()*.6),A.rotation.y=Math.random()*Math.PI*2,A.position.set(w,R-.05,y),e.add(A))}}return e}const My=[{r:1.75,y:3.95,dx:0,dz:0,sy:1.2},{r:1.2,y:4.7,dx:.72,dz:-.42,sy:1},{r:1.15,y:3.65,dx:-.78,dz:.55,sy:1},{r:1.05,y:4.35,dx:-.18,dz:-.82,sy:1}],by=1.05;function wy(r,e,t,n){const i=new rt,s=.8+Math.random()*.6,o=new $(new Lt(.24,.42,3.3,7),we(7293480));o.position.y=1.6,o.castShadow=!0,i.add(o);const a=new fe(n);for(const c of My){const l=a.clone().offsetHSL(0,(Math.random()-.5)*.05,(Math.random()-.5)*.1),u=new $(new Tr(c.r,0),we(l.getHex()));u.position.set(c.dx,c.y,c.dz),u.scale.set(1,c.sy,1),u.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),u.castShadow=!0,i.add(u)}return mi(i),i.scale.setScalar(s),i.rotation.y=Math.random()*Math.PI*2,i.position.set(r,e-.1,t),pi.push({x:r,z:t,r:by*s}),i}const Vh=16,Wh=10,qh=1.6,Xh=[4,-63];class Sy{constructor(){E(this,"mesh");E(this,"heading",Math.PI);E(this,"speed",0);E(this,"bobPhase",0);this.mesh=new rt;const e=new $(new Yc(1.1,2.6,4,10),we(9067056));e.rotation.x=Math.PI/2,e.scale.set(1,1,.55),e.position.y=.3;const t=new $(new Xt(1.7,.15,3.6),we(11567184));t.position.y=.75;const n=new $(new Vn(1.55,.12,8,20),we(6964002));n.rotation.x=Math.PI/2,n.position.y=.85,n.scale.set(.62,1.25,1);const i=new $(new Lt(.09,.11,3.6),we(6964002));i.position.set(0,2.4,.3);const s=new $(new es(1.9,2.4),we(15788760));s.material.side=Kt,s.position.set(0,2.6,.28);const o=new $(new Lt(.05,.05,2),we(6964002));o.rotation.z=Math.PI/2,o.position.set(0,1.4,.28),this.mesh.add(e,t,n,i,s,o),mi(this.mesh),this.mesh.traverse(a=>{a instanceof $&&(a.castShadow=!0)}),this.resetToDock()}resetToDock(){this.mesh.position.set(Xh[0],.3,Xh[1]),this.heading=Math.PI,this.speed=0,this.mesh.rotation.set(0,this.heading,0)}place(e,t){this.mesh.position.set(e,.3,t)}sail(e,t,n=1){let i=0;t.isDown("KeyW")?i=Vh*n:t.isDown("KeyS")&&(i=-5),this.speed+=Us.clamp(i-this.speed,-Wh*e,Wh*e);const s=.4+.6*Math.min(Math.abs(this.speed)/Vh,1);t.isDown("KeyA")&&(this.heading+=qh*s*e),t.isDown("KeyD")&&(this.heading-=qh*s*e);const o=new I(Math.sin(this.heading),0,Math.cos(this.heading)),a=this.mesh.position.clone().addScaledVector(o,this.speed*e);Sd(a.x,a.z)?(this.mesh.position.x=a.x,this.mesh.position.z=a.z):this.speed=0,this.idle(e)}idle(e){this.bobPhase+=e*1.6,this.mesh.position.y=.3+Math.sin(this.bobPhase)*.12,this.mesh.rotation.set(Math.sin(this.bobPhase*.8)*.03,this.heading,Math.cos(this.bobPhase*.7)*.04)}findLandingSpot(){for(let e=2.5;e<=7;e+=1.5)for(let t=0;t<8;t++){const n=t/8*Math.PI*2,i=this.mesh.position.x+Math.sin(n)*e,s=this.mesh.position.z+Math.cos(n)*e;if(ft(i,s)>.3)return new I(i,ft(i,s),s)}return null}}const Ty=100,Ey=30,Ay=10,Ry=3;class Cy{constructor(){E(this,"level",1);E(this,"exp",0);E(this,"points",0);E(this,"weaponLevel",0);E(this,"equip",{atk:0,def:0,hp:0,mp:0,agi:0});E(this,"attrs",{hp:0,str:0,spirit:0,agi:0,vit:0})}get maxHP(){return Ty+this.attrs.hp*10+this.equip.hp}get maxMP(){return Ey+this.attrs.spirit*5+this.equip.mp}get atk(){return Ay+this.attrs.str*2+this.weaponLevel*3+this.equip.atk}get def(){return this.attrs.vit*2+this.equip.def}get speedMultiplier(){return 1+(this.attrs.agi+this.equip.agi)*.01}expToNext(){return Math.round(65*Math.pow(this.level,1.35))}addExp(e){this.exp+=e;let t=0;for(;this.exp>=this.expToNext();)this.exp-=this.expToNext(),this.level++,this.points+=Ry,t++;return t}allocate(e){return this.points<=0?!1:(this.points--,this.attrs[e]++,!0)}}const Td={small:10,medium:50,large:200};class Iy{constructor(){E(this,"coins",0);E(this,"potions",0);E(this,"crystals",{small:0,medium:0,large:0});E(this,"firstSeaGem",!1);E(this,"secondSeaGem",!1)}useCrystals(e,t){const n=Math.min(t,this.crystals[e]);return this.crystals[e]-=n,n*Td[e]}}const yt={tunic:4103759,tunicDark:3045948,skin:15911328,hair:15251530,legs:15788240,boots:8016432,belt:4863264,blade:14477042,guard:3825624,grip:4864618,gold:15777856,shield:3035048,shieldRim:10134712,glove:6965802,brow:12095534,eye:3493998,collar:15784056},Cc=new I(0,1.45,-.46),Py=new I(.18,1.32,.5);function jh(r){const e=new rt,t=new $(new Lt(.14,.12,.36,10),we(yt.legs));t.position.y=-.18;const n=new rt;n.position.y=-.36;const i=new $(new Lt(.12,.1,.32,10),we(yt.legs));i.position.y=-.16;const s=new $(new Xt(.21,.18,.36),we(yt.boots));s.position.set(0,-.36,.05);const o=new $(new Lt(.15,.13,.12,10),we(yt.boots));return o.position.y=-.28,n.add(i,s,o),e.add(t,n),e.position.set(r,.72,0),{leg:e,shin:n}}function Yh(r,e){const t=new rt,n=new $(new Vt(.15,12,10),we(yt.guard));n.position.y=.02,n.scale.set(1,.8,1);const i=new $(new Lt(.1,.085,.34,10),we(e));i.position.y=-.18;const s=new rt;s.position.y=-.35;const o=new $(new Lt(.085,.07,.26,10),we(yt.skin));o.position.y=-.13;const a=new $(new Vn(.09,.035,8,12),we(yt.glove));a.position.y=-.02,a.rotation.x=Math.PI/2;const c=new $(new Vt(.1,10,8),we(yt.glove));return c.position.y=-.25,s.add(o,a,c),t.add(n,i,s),t.position.set(r,1.7,0),{arm:t,forearm:s}}function Ly(){const r=new rt,e=we(yt.blade,{emissive:6737151,emissiveIntensity:0}),t=new $(new Xt(.13,1,.035),e);t.position.y=.62;const n=new $(new Mn(.075,.24,4),e);n.position.y=1.24,n.rotation.y=Math.PI/4;const i=new $(new Xt(.035,.95,.05),we(yt.shieldRim));i.position.y=.6;const s=new $(new Xt(.4,.09,.09),we(yt.guard));s.position.y=.1;const o=new $(new Mn(.06,.16,6),we(yt.guard));o.position.set(.2,.16,0);const a=o.clone();a.position.x=-.2;const c=new $(new Lt(.05,.05,.3,8),we(yt.grip));c.position.y=-.1;const l=new $(new Vt(.08,8,8),we(yt.gold));return l.position.y=-.28,r.add(t,n,i,s,o,a,c,l),r.position.y=-.58,r.rotation.x=Math.PI/2,{sword:r,bladeMaterial:e}}function Ed(r=yt.tunic,e){const t=e??new fe(r).multiplyScalar(.74).getHex(),n=new rt,i=new rt;n.add(i);const s=jh(.17),o=jh(-.17);i.add(s.leg,o.leg);const a=we(r),c=new $(new Lt(.32,.44,.72,14),a);c.position.y=1.4;const l=new $(new Lt(.44,.6,.5,14,1,!0),a);l.position.y=.74;const u=new $(new Lt(.26,.34,.16,14),we(yt.collar));u.position.y=1.78;const h=new $(new Lt(.46,.48,.13,14),we(yt.belt));h.position.y=.98;const d=new $(new Xt(.16,.12,.05),we(yt.gold));d.position.set(0,.98,.47);const f=new $(new Xt(.16,.18,.12),we(yt.glove));f.position.set(.34,.9,.18),i.add(c,l,u,h,d,f);const _=new $(new Lt(.13,.15,.2,10),we(yt.skin));_.position.y=1.86,i.add(_);const x=new $(new Vt(.34,16,14),we(yt.skin));x.position.y=2.08;const m=new $(new Vt(.37,16,14),we(yt.hair));m.position.set(0,2.16,-.07),m.scale.set(1,.85,1);const p=new $(new Mn(.32,.66,14),we(t));p.position.set(0,2.54,-.12),p.rotation.x=-.5;const v=new $(new Mn(.1,.4,10),we(r));v.position.set(0,2.78,-.5),v.rotation.x=-1.5;const w=new $(new Vn(.31,.05,8,16),we(yt.gold));w.position.set(0,2.28,-.04),w.rotation.x=Math.PI/2,i.add(x,m,p,v,w);const y=we(yt.skin);for(const H of[-1,1]){const Z=new $(new Mn(.09,.26,6),y);Z.position.set(.32*H,2.06,-.02),Z.rotation.z=H*-1.1,i.add(Z);const ie=new $(new Vt(.12,10,8),we(yt.hair));ie.position.set(.28*H,1.96,-.04),ie.scale.set(.7,1.1,.8),i.add(ie);const K=new $(new Vt(.075,10,8),we(16777215));K.position.set(.13*H,2.1,.29),K.scale.set(.8,1.1,.6);const ce=new $(new Vt(.042,8,6),we(yt.eye));ce.position.set(.13*H,2.09,.34);const Y=new $(new Xt(.13,.035,.04),we(yt.brow));Y.position.set(.13*H,2.21,.3),Y.rotation.z=H*-.12,i.add(K,ce,Y)}const R=new $(new Mn(.04,.1,6),y);R.position.set(0,2.02,.34),R.rotation.x=Math.PI/2,i.add(R);const A=Yh(.46,r),g=Yh(-.46,r),L=Ly();g.arm.add(L.sword),i.add(A.arm,g.arm);const S=new rt,M=new $(new Lt(.42,.46,.07,16),we(yt.shield));M.rotation.x=Math.PI/2;const N=new $(new Vn(.44,.05,8,16),we(yt.shieldRim)),G=new $(new $n(.12),we(yt.gold));return G.position.z=-.06,G.scale.set(1,1.4,.4),S.add(M,N,G),S.position.copy(Cc),i.add(S),mi(n),n.traverse(H=>{H instanceof $&&(H.castShadow=!0)}),{group:n,body:i,armL:A.arm,armR:g.arm,forearmL:A.forearm,forearmR:g.forearm,legL:s.leg,legR:o.leg,shinL:s.shin,shinR:o.shin,shield:S,sword:L.sword,bladeMaterial:L.bladeMaterial,tunicMat:a}}const Dy=28,$h=11,Kh=8,Ny=22,Uy=.25,Oy=.45,Zh=25,Fy=22,Jh=.38,Qh=.22,ky=9,By=14,Vi=.25,eu=1.25,tu=.35,zy=.35,Hy=.4,nu=10,Gy=.15,Vy=.26,Wy=.5,qy=3.4,Xy=Math.cos(75*Math.PI/180),jy=4.5;class Yy{constructor(){E(this,"mesh");E(this,"stats",new Cy);E(this,"hp");E(this,"mp");E(this,"stamina",100);E(this,"facing",0);E(this,"blocking",!1);E(this,"hurtT",0);E(this,"hasWindGem",!1);E(this,"windLevel",1);E(this,"hasFrostGem",!1);E(this,"sliding",!1);E(this,"divingZone",null);E(this,"airJumpsUsed",0);E(this,"gliding",!1);E(this,"chillT",0);E(this,"burnT",0);E(this,"burnDps",0);E(this,"burnTickAccum",0);E(this,"knockbackVel",new I);E(this,"velocityY",0);E(this,"grounded",!0);E(this,"attackCd",0);E(this,"swingT",0);E(this,"dodgeT",0);E(this,"invulnT",0);E(this,"lungeT",0);E(this,"spinT",0);E(this,"holdT",0);E(this,"chargeReadyFired",!1);E(this,"walkPhase",0);E(this,"idlePhase",0);E(this,"moveAmount",0);E(this,"renderYaw",0);E(this,"dodgeDir",new I);E(this,"body");E(this,"armL");E(this,"armR");E(this,"forearmL");E(this,"forearmR");E(this,"legL");E(this,"legR");E(this,"shinL");E(this,"shinR");E(this,"shield");E(this,"sword");E(this,"bladeMaterial");E(this,"shieldHomePos",new I(0,1.45,-.46));E(this,"shieldBlockPos",new I(.18,1.32,.5));this.hp=this.stats.maxHP,this.mp=this.stats.maxMP;const e=Ed(yt.tunic,yt.tunicDark);this.mesh=e.group,this.body=e.body,this.armL=e.armL,this.armR=e.armR,this.forearmL=e.forearmL,this.forearmR=e.forearmR,this.legL=e.legL,this.legR=e.legR,this.shinL=e.shinL,this.shinR=e.shinR,this.shield=e.shield,this.sword=e.sword,this.bladeMaterial=e.bladeMaterial,this.respawn()}get invulnerable(){return this.invulnT>0}get attacking(){return this.swingT>0||this.spinT>0}get airborne(){return!this.grounded}get chargeRatio(){return Us.clamp((this.holdT-Vi)/(eu-Vi),0,1)}get isDead(){return this.hp<=0}respawn(){this.hp=this.stats.maxHP,this.mp=this.stats.maxMP,this.stamina=100,this.velocityY=0,this.mesh.position.set(0,ft(0,-52),-52)}update(e,t,n){this.attackCd=Math.max(0,this.attackCd-e),this.invulnT=Math.max(0,this.invulnT-e),this.swingT=Math.max(0,this.swingT-e),this.dodgeT=Math.max(0,this.dodgeT-e),this.lungeT=Math.max(0,this.lungeT-e),this.spinT=Math.max(0,this.spinT-e),this.chillT=Math.max(0,this.chillT-e),this.hurtT=Math.max(0,this.hurtT-e);const i=this.stats.speedMultiplier,s=new I;let o=!1,a=!1;if(this.blocking=t.isDown("KeyQ")&&this.dodgeT<=0,this.dodgeT>0)s.copy(this.dodgeDir).multiplyScalar(Ny*e);else{const x=new I(-Math.sin(n),0,-Math.cos(n)),m=new I(-x.z,0,x.x);if(t.isDown("KeyW")&&s.add(x),t.isDown("KeyS")&&s.sub(x),t.isDown("KeyD")&&s.add(m),t.isDown("KeyA")&&s.sub(m),s.lengthSq()>0){s.normalize(),this.facing=Math.atan2(s.x,s.z);const p=(this.blocking?zy:this.holdT>Vi?Hy:1)*(this.chillT>0?Wy:1);s.multiplyScalar(Kh*i*p*e)}if((t.wasPressed("ShiftLeft")||t.wasPressed("ShiftRight"))&&this.stamina>=Zh){a=!0,this.holdT=0,this.chargeReadyFired=!1;const p=s.lengthSq()>0?s.clone().normalize():new I(Math.sin(this.facing),0,Math.cos(this.facing));this.dodgeDir.copy(p),this.dodgeT=Uy,this.invulnT=Oy,this.stamina-=Zh}}if(this.lungeT>0&&s.addScaledVector(new I(Math.sin(this.facing),0,Math.cos(this.facing)),ky*e),this.stamina=Math.min(100,this.stamina+Fy*e),this.moveAmount=s.length()/Math.max(e,1e-6)/Kh,this.sliding=!1,this.grounded){const x=this.mesh.position.x,m=this.mesh.position.z,p=.6,v=(ft(x+p,m)-ft(x-p,m))/(2*p),w=(ft(x,m+p)-ft(x,m-p))/(2*p),y=Math.hypot(v,w);y>.85&&(this.sliding=!0,s.x+=-v/y*6.5*e,s.z+=-w/y*6.5*e)}this.knockbackVel.lengthSq()>.01?(s.addScaledVector(this.knockbackVel,e),this.knockbackVel.multiplyScalar(Math.max(1-e*6,0))):this.knockbackVel.set(0,0,0);const c=this.mesh.position.clone().add(s),l=_y(c.x,c.z);c.x=l.x,c.z=l.z,(Rc(c.x,c.z)||this.hasFrostGem&&this.mp>0||this.divingZone!==null&&Math.hypot(c.x-this.divingZone.x,c.z-this.divingZone.z)<this.divingZone.r)&&(this.mesh.position.x=c.x,this.mesh.position.z=c.z),t.wasPressed("Space")&&(this.grounded?(this.velocityY=$h,this.grounded=!1,o=!0):this.hasWindGem&&this.airJumpsUsed<(this.windLevel>=3?2:1)&&(this.airJumpsUsed++,this.velocityY=$h*.9,o=!0)),this.velocityY-=Dy*e,this.gliding=this.hasWindGem&&!this.grounded&&this.velocityY<0&&t.isDown("Space"),this.gliding&&(this.velocityY=Math.max(this.velocityY,-(2.5-(this.windLevel-1)*.4))),this.mesh.position.y+=this.velocityY*e;const h=ft(this.mesh.position.x,this.mesh.position.z);this.mesh.position.y<=h&&(this.mesh.position.y=h,this.velocityY=0,this.grounded=!0,this.airJumpsUsed=0,this.gliding=!1);let d=!1,f=null,_=!1;if(this.blocking)this.holdT=0,this.chargeReadyFired=!1,t.consumeLeftRelease();else if(t.leftDown&&(this.holdT+=e,this.chargeRatio>=1&&!this.chargeReadyFired&&(this.chargeReadyFired=!0,_=!0)),t.consumeLeftRelease()){const x=this.holdT;this.holdT=0,this.chargeReadyFired=!1,x>Vi?(f=this.chargeRatioFor(x),this.spinT=tu,this.attackCd=Jh/i):this.attackCd<=0&&(this.attackCd=Jh/i,this.swingT=Qh,this.lungeT=.12,d=!0)}return this.animate(e),{attacked:d,spin:f,chargeReady:_,jumped:o,dodged:a}}chargeRatioFor(e){return Us.clamp((e-Vi)/(eu-Vi),0,1)}animate(e){let t=this.facing-this.renderYaw;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;this.renderYaw+=t*Math.min(By*e,1),this.mesh.rotation.y=this.renderYaw,this.idlePhase+=e*2.2;const n=this.moveAmount>.05;n&&(this.walkPhase+=e*11*Math.min(this.moveAmount,1.4));const i=this.dodgeT>0,s=n?Math.sin(this.walkPhase)*.65:0;this.legL.rotation.x=i?1.4:s,this.legR.rotation.x=i?1.4:-s,this.shinL.rotation.x=i?1.3:n?Math.max(0,-Math.sin(this.walkPhase))*.8:0,this.shinR.rotation.x=i?1.3:n?Math.max(0,Math.sin(this.walkPhase))*.8:0,this.armL.rotation.x=this.blocking?-1.1:i?-1.6:-s*.8,this.forearmL.rotation.x=this.blocking?-.7:i?-1.4:-.25-Math.max(0,-s)*.5;const o=this.blocking?this.shieldBlockPos:this.shieldHomePos;this.shield.position.lerp(o,Math.min(e*14,1));const a=this.holdT>Vi;if(this.spinT>0)this.armR.rotation.x=-Math.PI/2,this.armR.rotation.z=0,this.sword.rotation.x=Math.PI;else if(this.swingT>0){const h=1-this.swingT/Qh;this.armR.rotation.x=-2.2+h*3.1,this.armR.rotation.z=Math.sin(h*Math.PI)*-.7}else a?(this.armR.rotation.x=-2.6,this.armR.rotation.z=0):(this.armR.rotation.x=s*.8,this.armR.rotation.z=0);this.forearmR.rotation.x=this.spinT>0||this.swingT>0||a?0:i?-1.4:-.2-Math.max(0,s)*.4,this.spinT<=0&&(this.sword.rotation.x=Math.PI/2);const c=this.chargeRatio;if(c>=1){const h=.5+.5*Math.sin(this.idlePhase*18);this.bladeMaterial.emissiveIntensity=1.6+h*1.2,this.bladeMaterial.color.setHex(14477042).lerp(new fe(16777215),h)}else this.bladeMaterial.emissiveIntensity=c*1.2,this.bladeMaterial.color.setHex(14477042);this.body.rotation.y=this.spinT>0?(1-this.spinT/tu)*Math.PI*2:0;const l=n?Math.abs(Math.sin(this.walkPhase))*.07:0,u=n?0:Math.sin(this.idlePhase)*.02;this.body.position.y=l+u,this.body.rotation.x=this.dodgeT>0?.65:this.gliding?.45:n?.08:0,this.gliding?(this.armL.rotation.z=1.2,this.armR.rotation.z=-1.2):!this.blocking&&this.swingT<=0&&this.spinT<=0&&(this.armL.rotation.z=0)}takeDamage(e,t){if(this.invulnerable||this.isDead)return{taken:0,blocked:!1};if(this.blocking&&t&&this.stamina>=nu){const i=new I().subVectors(t,this.mesh.position).setY(0).normalize(),s=new I(Math.sin(this.facing),0,Math.cos(this.facing));if(i.dot(s)>Vy){this.stamina-=nu;const o=Math.max(1,Math.round((e-this.stats.def)*Gy));return this.hp=Math.max(0,this.hp-o),this.invulnT=.25,{taken:o,blocked:!0}}}const n=Math.max(1,e-this.stats.def);return this.hp=Math.max(0,this.hp-n),this.invulnT=.5,this.hurtT=.3,{taken:n,blocked:!1}}applyEnvironmentDamage(e){this.isDead||(this.hp=Math.max(0,this.hp-e))}chill(e){this.isDead||(this.chillT=Math.max(this.chillT,e))}applyBurn(e,t){this.isDead||(this.burnT=Math.max(this.burnT,e),this.burnDps=Math.max(this.burnDps,t))}tickBurn(e){return this.burnT<=0||this.isDead?0:(this.burnT-=e,this.burnTickAccum+=e,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}shove(e,t){if(this.isDead)return;const n=new I().subVectors(this.mesh.position,e).setY(0);n.lengthSq()<1e-4&&n.set(Math.sin(this.facing),0,Math.cos(this.facing)),this.knockbackVel.copy(n.normalize()).multiplyScalar(t)}blinkTo(e,t){this.mesh.position.set(e,ft(e,t),t),this.invulnT=Math.max(this.invulnT,.3)}}const $y={elite:{name:"怒震波",sfx:"quake",color:16756314,radius:6.5,dmgMul:1.4,knock:14,telegraph:.7,cooldown:7,effect:"knockback"},windGuardian:{name:"旋風斬",sfx:"spin",color:8384736,radius:8,dmgMul:1.1,knock:24,telegraph:.6,cooldown:6,effect:"knockback"},earthGuardian:{name:"震地裂",sfx:"quake",color:13142602,radius:8.5,dmgMul:1.6,knock:18,telegraph:.85,cooldown:8,effect:"knockback"},frostGuardian:{name:"寒霜爆",sfx:"shatter",color:12577535,radius:7.5,dmgMul:1.2,knock:8,telegraph:.7,cooldown:7,effect:"chill"},voidGuardian:{name:"虛空波動",sfx:"blink",color:10115792,radius:7,dmgMul:1.4,knock:10,telegraph:.75,cooldown:8,effect:"drain"},voidLord:{name:"虛空崩裂",sfx:"blink",color:8010448,radius:10,dmgMul:1.6,knock:16,telegraph:.85,cooldown:7,effect:"drain"},magmaGuardian:{name:"熔核震爆",sfx:"lava",color:16734764,radius:8,dmgMul:1.4,knock:12,telegraph:.75,cooldown:7,effect:"burn"},coralGuardian:{name:"潮汐衝擊",sfx:"aqua",color:4638944,radius:8.5,dmgMul:1.3,knock:20,telegraph:.7,cooldown:7,effect:"knockback"},lifeGuardian:{name:"靈脈汲取",sfx:"life",color:5955706,radius:7.5,dmgMul:1.3,knock:8,telegraph:.75,cooldown:6,effect:"drain"}},Ky=1.5,Ca=.45,iu=12,Zy=3.2,Jy=20,Qy=25,eM=.45,tM=.35,nM=14,iM=1.7,su=.8,sM=.3,rM=1.1,oM={slime:{hp:30,dmg:8,speed:3.4,scale:1,color:5425272},elite:{hp:120,dmg:16,speed:2.8,scale:1.9,color:15239242},vine:{hp:60,dmg:12,speed:3.8,scale:1.15,color:3050327},windGuardian:{hp:220,dmg:20,speed:3,scale:2.3,color:4905160},ember:{hp:90,dmg:16,speed:4,scale:1.25,color:15224880},earthGuardian:{hp:320,dmg:24,speed:2.8,scale:2.6,color:12088115},frost:{hp:130,dmg:20,speed:3.6,scale:1.3,color:10149119},frostGuardian:{hp:450,dmg:28,speed:2.6,scale:3,color:15267071},deep:{hp:180,dmg:24,speed:3.4,scale:1.4,color:3824282},voidGuardian:{hp:550,dmg:30,speed:2.8,scale:2.8,color:6961818},voidLord:{hp:800,dmg:35,speed:3.2,scale:3.6,color:2759226},sand:{hp:200,dmg:26,speed:3.8,scale:1.4,color:14727264},magmaGuardian:{hp:680,dmg:34,speed:2.9,scale:3,color:16734764},reef:{hp:210,dmg:27,speed:3.7,scale:1.4,color:4638904},coralGuardian:{hp:700,dmg:34,speed:2.9,scale:3,color:2795200},spore:{hp:220,dmg:28,speed:3.9,scale:1.45,color:8835658},lifeGuardian:{hp:720,dmg:35,speed:2.9,scale:3.1,color:3846240},marsh:{hp:215,dmg:27,speed:3.8,scale:1.42,color:6986346},brine:{hp:230,dmg:26,speed:3.6,scale:1.45,color:13166832},solar:{hp:225,dmg:29,speed:4,scale:1.4,color:15771704}},aM={slime:"GreenBlob",elite:"GreenSpikyBlob",vine:"Mushnub",windGuardian:"Hywirl",ember:"Goleling",earthGuardian:"Goleling_Evolved",frost:"Glub",frostGuardian:"Yeti",deep:"Fish",voidGuardian:"Ghost",voidLord:"BlueDemon",sand:"Cactoro",magmaGuardian:"Demon",reef:"Squidle",coralGuardian:"Glub_Evolved",spore:"Mushnub_Evolved",lifeGuardian:"MushroomKing",marsh:"Frog",brine:"PinkBlob",solar:"Birb"},cM={idle:["Idle","Flying_Idle"],move:["Walk","Run","Fast_Flying","Flying"],attack:["Bite_Front","Punch","Headbutt","Weapon","Attack"],hit:["HitRecieve","HitReact"],death:["Death"]};class Ae{constructor(e,t,n){E(this,"mesh");E(this,"kind");E(this,"hp");E(this,"state","patrol");E(this,"remote",!1);E(this,"netIndex",-1);E(this,"pendingNetDamage",0);E(this,"pendingNetFreeze",0);E(this,"pendingNetStun",0);E(this,"pendingNetBurnSec",0);E(this,"pendingNetBurnDps",0);E(this,"remoteFlag",0);E(this,"remoteRingT",0);E(this,"netTarget",new I);E(this,"netYaw",0);E(this,"netDead",!1);E(this,"config");E(this,"home");E(this,"waypoint");E(this,"attackCd",0);E(this,"stateT",0);E(this,"respawnT",0);E(this,"flashT",0);E(this,"freezeT",0);E(this,"burnT",0);E(this,"burnDps",0);E(this,"burnTickAccum",0);E(this,"stunT",0);E(this,"specialEvent",null);E(this,"specialPhase","");E(this,"hopPhase",Math.random()*Math.PI*2);E(this,"lungeDir",new I);E(this,"lungeHitDone",!1);E(this,"knockback",new I);E(this,"baseColor");E(this,"body");E(this,"blob");E(this,"blobMaterial");E(this,"useModel");E(this,"mixer",null);E(this,"actions",new Map);E(this,"currentAction",null);E(this,"tintMats",[]);E(this,"tintBase",[]);E(this,"dyingTime");E(this,"hpBar");E(this,"hpCanvas");E(this,"hpTexture");E(this,"special");E(this,"specialCd",0);E(this,"specialRing",null);E(this,"specialRingMat",null);E(this,"specialRingT",0);this.kind=e,this.config=oM[e],this.hp=this.config.hp,this.home=new I(t,0,n),this.waypoint=this.home.clone(),this.baseColor=new fe(this.config.color),this.special=$y[e]??null,this.specialCd=this.special?this.special.cooldown*.6:0,this.mesh=new rt,this.body=new rt,this.mesh.add(this.body);const i=aM[e],s=i?oy(i):null;if(this.useModel=s!==null,this.dyingTime=this.useModel?rM:sM,s){this.body.add(s.scene),s.scene.traverse(o=>{if(o instanceof $&&o.material instanceof rd){const a=o.material.clone();o.material=a,this.tintMats.push(a),this.tintBase.push(a.color.clone())}}),this.mixer=new sm(s.scene);for(const[o,a]of Object.entries(cM)){const c=s.clips.find(l=>a.includes(l.name));c&&this.actions.set(o,this.mixer.clipAction(c))}this.play("idle")}else{const o=this.config.scale>=1.8,a=new fe(this.config.color).offsetHSL(0,.1,-.28).getHex();this.blobMaterial=we(this.config.color,{transparent:!0,opacity:.86}),this.blob=new $(new Vt(.8,16,14),this.blobMaterial),this.blob.scale.set(1,.85,1),this.blob.position.y=.62;const c=new $(new Mn(.26,o?.6:.45,10),we(this.config.color,{transparent:!0,opacity:.86}));if(c.position.y=o?1.42:1.35,c.rotation.z=.12,this.body.add(this.blob,c),o){const m=we(a);for(const p of[-1,1]){const v=new $(new Mn(.13,.5,8),m);v.position.set(.42*p,1.18,-.05),v.rotation.z=p*-.7,this.body.add(v)}}const l=we(16777215),u=we(2105392),h=we(a),d=o?.2:.17;for(const m of[-1,1]){const p=new $(new Vt(d,12,10),l);p.position.set(.3*m,.82,.6),p.scale.set(.85,1.05,.7);const v=new $(new Vt(d*.5,8,6),u);v.position.set(.3*m+.02*m,.8,.74);const w=new $(new Xt(.26,.07,.07),h);w.position.set(.3*m,1.04,.62),w.rotation.z=m*(o?.5:.15),this.body.add(p,v,w)}const f=new $(new Vt(o?.22:.12,12,8),we(3151904));f.position.set(0,o?.5:.54,.66),f.scale.set(1.3,o?.8:.45,.5),this.body.add(f),mi(this.body),this.body.traverse(m=>{m instanceof $&&(m.castShadow=!0)});const _=new $(new Vt(.42,12,10),we(a,{transparent:!0,opacity:.55}));_.position.y=.58,_.raycast=()=>{},this.body.add(_);const x=new $(new Vt(.22,10,8),new Bt({color:16777215,transparent:!0,opacity:.4}));x.position.set(-.28,.95,.42),x.scale.set(1.2,.7,.6),x.raycast=()=>{},this.body.add(x),this.tintMats.push(this.blobMaterial),this.tintBase.push(this.baseColor.clone())}this.hpCanvas=document.createElement("canvas"),this.hpCanvas.width=96,this.hpCanvas.height=18,this.hpTexture=new wp(this.hpCanvas),this.hpBar=new td(new Qu({map:this.hpTexture,depthTest:!1})),this.hpBar.scale.set(2,.38,1),this.hpBar.position.y=2,this.drawHpBar(),this.mesh.add(this.hpBar),this.mesh.scale.setScalar(this.config.scale),this.mesh.position.set(t,ft(t,n),n)}get isDead(){return this.state==="dying"||this.state==="dead"}stepMixer(e){var t;(t=this.mixer)==null||t.update(e)}play(e,t=!0,n=.18){if(!this.mixer)return;const i=this.actions.get(e)??this.actions.get("idle");i&&(t&&i===this.currentAction||(i.reset(),i.setLoop(t?zu:Bu,t?1/0:1),i.clampWhenFinished=!t,i.enabled=!0,i.fadeIn(n),i.play(),this.currentAction&&this.currentAction!==i&&this.currentAction.fadeOut(n),this.currentAction=i))}setTint(e,t=1){for(let n=0;n<this.tintMats.length;n++)e?this.tintMats[n].color.lerpColors(this.tintBase[n],e,t):this.tintMats[n].color.copy(this.tintBase[n])}update(e,t,n){if(this.state==="dead")return this.respawnT-=e,this.respawnT<=0&&this.revive(),0;if(this.state==="dying"){this.stateT-=e;const c=1-Math.max(this.stateT,0)/this.dyingTime;if(this.useModel)this.stepMixer(e),c>.75&&this.body.scale.setScalar(Math.max(1-(c-.75)/.25,.01));else{const l=c<.4?1+c*.9:Math.max(1.36*(1-(c-.4)/.6),.01);this.body.scale.setScalar(l)}return this.stateT<=0&&(this.state="dead",this.respawnT=Qy,this.mesh.visible=!1,this.body.scale.setScalar(1)),0}if(this.attackCd=Math.max(0,this.attackCd-e),this.specialCd=Math.max(0,this.specialCd-e),this.flashT=Math.max(0,this.flashT-e),this.freezeT>0)return this.freezeT-=e,this.setTint(new fe(12577535),.75),0;if(this.stunT>0){this.stunT-=e;const c=.4+.4*Math.abs(Math.sin(this.stunT*30));return this.setTint(new fe(16773248),c),0}this.stepMixer(e);const i=this.mesh.position,s=i.distanceTo(t),o=i.distanceTo(this.home);let a=0;switch(this.knockback.lengthSq()>.01&&(i.addScaledVector(this.knockback,e),this.knockback.multiplyScalar(Math.max(1-e*8,0))),this.state){case"windup":{this.stateT-=e,this.useModel?this.play("idle"):(this.body.scale.y=.6+Math.sin(this.stateT*60)*.04,this.body.scale.x=this.body.scale.z=1.25),this.stateT<=0&&(this.lungeDir.subVectors(t,i).setY(0).normalize(),this.lungeHitDone=!1,this.state="lunge",this.stateT=tM,this.useModel&&this.play("attack",!1));break}case"lunge":{this.stateT-=e,i.addScaledVector(this.lungeDir,nM*e),this.useModel||this.body.scale.set(.8,.7,1.35),this.mesh.rotation.y=Math.atan2(this.lungeDir.x,this.lungeDir.z),!this.lungeHitDone&&!n&&s<iM&&(this.lungeHitDone=!0,a=this.config.dmg),this.stateT<=0&&(this.state="recover",this.stateT=su);break}case"recover":{this.stateT-=e,this.useModel?this.play("idle"):this.body.scale.setScalar(1),this.stateT<=0&&(this.state="chase");break}case"special":{const c=this.special;if(this.stateT-=e,this.specialPhase==="telegraph"){const l=1-Math.max(this.stateT,0)/c.telegraph;if(this.useModel||this.body.scale.setScalar(1+l*.25),this.updateRing(l,!0),this.stateT<=0){const u=!n&&s<=c.radius,h=Math.round(this.config.dmg*c.dmgMul);let d=0;u&&c.effect==="drain"&&(d=Math.min(this.config.hp-this.hp,Math.round(h*Ky)),d>0&&(this.hp+=d,this.drawHpBar())),this.specialEvent={name:c.name,sfx:c.sfx,color:c.color,dmg:h,knock:c.knock,effect:c.effect,radius:c.radius,hitPlayer:u,healed:d},this.specialPhase="blast",this.specialRingT=0,this.stateT=Ca,this.useModel?this.play("attack",!1):this.body.scale.setScalar(1)}}else this.specialRingT+=e,this.updateRing(this.specialRingT/Ca,!1),this.stateT<=0&&(this.hideRing(),this.specialPhase="",this.state="recover",this.stateT=su);break}default:{if(n)this.state="patrol";else if(o>Jy)this.state="patrol",this.waypoint.copy(this.home);else if(this.special&&this.specialCd<=0&&s<=iu&&s<=this.special.radius+2){this.startSpecial();break}else if(s<=Zy&&this.attackCd<=0){this.state="windup",this.stateT=eM,this.attackCd=1.8;break}else s<=iu?this.state="chase":this.state="patrol";const c=this.state==="chase"?t:this.waypoint;this.state==="patrol"&&i.distanceTo(this.waypoint)<1&&this.pickWaypoint();const l=new I().subVectors(c,i);l.y=0;const u=this.state==="chase"?this.config.speed:this.config.speed*.5,h=l.lengthSq()>.01;if(h&&(l.normalize(),i.addScaledVector(l,u*e),this.mesh.rotation.y=Math.atan2(l.x,l.z)),this.useModel)this.play(h?"move":"idle");else{this.hopPhase+=e*(this.state==="chase"?9:5);const d=Math.abs(Math.sin(this.hopPhase));this.body.position.y=d*.35,this.body.scale.y=.8+d*.3,this.body.scale.x=this.body.scale.z=1.1-d*.15}break}}if(this.flashT>0?this.setTint(new fe(16777215),1):this.state==="windup"?this.setTint(new fe(16733508),.55):this.setTint(null),this.burnT>0&&this.flashT<=0)for(const c of this.tintMats)c.color.lerp(new fe(16738860),.5);return i.y=ft(i.x,i.z),a}freeze(e){if(!this.isDead){if(this.remote){this.pendingNetFreeze=Math.max(this.pendingNetFreeze,e);return}this.freezeT=Math.max(this.freezeT,e)}}burn(e,t){if(!this.isDead){if(this.remote){this.pendingNetBurnSec=Math.max(this.pendingNetBurnSec,e),this.pendingNetBurnDps=Math.max(this.pendingNetBurnDps,t);return}this.burnT=Math.max(this.burnT,e),this.burnDps=Math.max(this.burnDps,t)}}stun(e){if(!this.isDead){if(this.remote){this.pendingNetStun=Math.max(this.pendingNetStun,e);return}this.stunT=Math.max(this.stunT,e)}}get statusFlag(){return this.specialPhase==="telegraph"?1:this.specialPhase==="blast"?2:this.freezeT>0?3:this.stunT>0?4:this.burnT>0?5:0}get specialSkill(){var e;return((e=this.special)==null?void 0:e.name)??null}forceSpecial(){!this.special||this.isDead||(this.specialCd=0,this.startSpecial())}startSpecial(){this.special&&(this.state="special",this.specialPhase="telegraph",this.stateT=this.special.telegraph,this.specialCd=this.special.cooldown,this.attackCd=Math.max(this.attackCd,1),this.ensureRing())}ensureRing(){if(!this.special)return;if(this.specialRing&&this.specialRingMat){this.specialRingMat.color.setHex(this.special.color),this.specialRing.visible=!0;return}const e=new Bt({color:this.special.color,transparent:!0,opacity:.4,side:Kt,depthWrite:!1}),t=new $(new Er(.62,1,48),e);t.rotation.x=-Math.PI/2,t.position.y=.12,t.raycast=()=>{},this.mesh.add(t),this.specialRing=t,this.specialRingMat=e}updateRing(e,t){if(!this.special||!this.specialRing||!this.specialRingMat)return;const n=this.special.radius/this.config.scale;if(t)this.specialRing.scale.set(n,n,n),this.specialRingMat.opacity=.25+.4*Math.abs(Math.sin(e*Math.PI*6));else{const i=(.15+.95*Math.min(e,1))*n;this.specialRing.scale.set(i,i,i),this.specialRingMat.opacity=.7*(1-Math.min(e,1))}}hideRing(){this.specialRing&&(this.specialRing.visible=!1)}tickBurn(e){return this.burnT<=0||this.isDead?0:(this.burnT-=e,this.burnTickAccum+=e,this.burnTickAccum>=.5?(this.burnTickAccum-=.5,Math.round(this.burnDps*.5)):0)}takeDamage(e,t){return this.isDead?!1:this.remote?(this.pendingNetDamage+=e,this.flashT=.12,!1):(this.hp=Math.max(0,this.hp-e),this.flashT=.12,t&&this.knockback.copy(t).setY(0).normalize().multiplyScalar(9),this.drawHpBar(),this.hp<=0?(this.state="dying",this.stateT=this.dyingTime,this.hpBar.visible=!1,this.specialPhase="",this.specialEvent=null,this.hideRing(),this.useModel&&this.play("death",!1),!0):!1)}refreshHpBar(){this.drawHpBar()}get remoteStatusFlag(){return this.remoteFlag}becomeAuthoritative(){if(this.remote=!1,!this.isDead){switch(this.remoteFlag){case 3:this.freezeT=Math.max(this.freezeT,1.5);break;case 4:this.stunT=Math.max(this.stunT,1.5);break;case 5:this.burnT=Math.max(this.burnT,1.5),this.burnDps=Math.max(this.burnDps,4);break}this.attackCd=Math.max(this.attackCd,.8),this.specialCd=Math.max(this.specialCd,1.5),this.waypoint.copy(this.mesh.position).setY(0),this.state="patrol"}}updateRemote(e){if(!this.mesh.visible)return;const t=1-Math.exp(-12*e);this.mesh.position.lerp(this.netTarget,t);let n=this.netYaw-this.mesh.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),this.mesh.rotation.y+=n*t,this.flashT=Math.max(0,this.flashT-e),this.useModel?(this.stepMixer(e),this.play("move")):(this.hopPhase+=e*6,this.body.position.y=Math.abs(Math.sin(this.hopPhase))*.12),this.flashT>0?this.setTint(new fe(16777215),.7):this.setTint(null),this.renderRemoteStatus(e)}renderRemoteStatus(e){const t=this.remoteFlag;if(t===1?(this.ensureRing(),this.remoteRingT+=e,this.updateRing(this.remoteRingT,!0)):t===2?(this.ensureRing(),this.remoteRingT+=e,this.updateRing(this.remoteRingT/Ca,!1)):this.hideRing(),!(this.flashT>0)){if(t===3)this.setTint(new fe(12577535),.75);else if(t===4){const n=.4+.4*Math.abs(Math.sin(this.hopPhase*5));this.setTint(new fe(16773248),n)}else if(t===5)for(const n of this.tintMats)n.color.lerp(new fe(16738860),.5)}}applyNetSnapshot(e,t,n,i,s,o,a){const c=!this.netDead;return this.netDead=s,this.hp=o,this.state=s?"dead":"patrol",a!==this.remoteFlag&&(this.remoteFlag=a,this.remoteRingT=0),s?(this.remoteFlag=0,this.hideRing(),this.mesh.visible&&(this.mesh.visible=!1,this.hpBar.visible=!1),c):(this.mesh.visible||(this.mesh.visible=!0,this.hpBar.visible=!0,this.mesh.position.set(e,t,n)),this.netTarget.set(e,t,n),this.netYaw=i,this.drawHpBar(),!1)}revive(){this.hp=this.config.hp,this.state="patrol",this.freezeT=0,this.burnT=0,this.burnDps=0,this.burnTickAccum=0,this.stunT=0,this.specialPhase="",this.specialEvent=null,this.specialCd=this.special?this.special.cooldown*.6:0,this.hideRing(),this.mesh.visible=!0,this.hpBar.visible=!0,this.body.scale.setScalar(1),this.body.position.y=0,this.knockback.set(0,0,0),this.mesh.position.set(this.home.x,ft(this.home.x,this.home.z),this.home.z),this.drawHpBar(),this.useModel&&(this.currentAction=null,this.play("idle",!0,0)),this.setTint(null)}pickWaypoint(){const e=Math.random()*Math.PI*2,t=Math.random()*6;this.waypoint.set(this.home.x+Math.cos(e)*t,0,this.home.z+Math.sin(e)*t)}drawHpBar(){const e=this.hpCanvas.getContext("2d");e&&(e.clearRect(0,0,96,18),e.fillStyle="rgba(0,0,0,0.65)",e.fillRect(0,0,96,18),e.fillStyle="#e74c3c",e.fillRect(1,1,94*(this.hp/this.config.hp),16),e.font="bold 12px sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.8)",e.strokeText(`${this.hp}/${this.config.hp}`,48,10),e.fillStyle="#fff",e.fillText(`${this.hp}/${this.config.hp}`,48,10),this.hpTexture.needsUpdate=!0)}}const lM=3.5;class oi{constructor(e,t,n,i,s,o="talk"){E(this,"mesh");E(this,"idlePhase",Math.random()*Math.PI*2);E(this,"body");this.name=e,this.linesProvider=s,this.role=o,this.mesh=new rt,this.body=new rt,this.mesh.add(this.body);const a=new $(new Lt(.28,.52,1.5,12),we(i));a.position.y=.78;const c=new $(new Vt(.32,14,12),we(15911328));c.position.y=1.85;const l=new $(new Mn(.62,.3,14),we(14202976));l.position.y=2.12,this.body.add(a,c,l),mi(this.body),this.body.traverse(u=>{u instanceof $&&(u.castShadow=!0)}),this.mesh.position.set(t,ft(t,n),n)}getLines(){return this.linesProvider()}update(e,t){this.idlePhase+=e*2,this.body.position.y=Math.sin(this.idlePhase)*.025;const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z,s=Math.hypot(n,i);return s<6&&(this.mesh.rotation.y=Math.atan2(n,i)),s<lM}}const hM=6,uM=.9,dM=9,fM={small:{color:7330024,size:.28},medium:{color:4882408,size:.4},large:{color:10509544,size:.55}};class De{constructor(e,t,n){E(this,"mesh");E(this,"kind");E(this,"bobPhase",Math.random()*Math.PI*2);E(this,"baseY");if(this.kind=e,e==="coin")this.mesh=new $(new Lt(.22,.22,.06,12),we(15777856,{emissive:15777856,emissiveIntensity:.25})),this.mesh.rotation.x=Math.PI/2;else if(e==="gem-flame"||e==="gem-wind"||e==="gem-earth"||e==="gem-frost"||e==="gem-tide"||e==="gem-void"||e==="gem-lava"||e==="gem-aqua"||e==="gem-life"){const a={"gem-flame":16734764,"gem-wind":4909272,"gem-earth":13142588,"gem-frost":10149119,"gem-tide":2781160,"gem-void":9063144,"gem-lava":16730652,"gem-aqua":3856600,"gem-life":5957722}[e];this.mesh=new $(new $n(.75),we(a,{emissive:a,emissiveIntensity:.9}))}else if(e==="fruit-thunder"||e==="fruit-gravity"){const a={"fruit-thunder":16773216,"fruit-gravity":11559167}[e];this.mesh=new $(new Vt(.6,16,14),we(a,{emissive:a,emissiveIntensity:.9}))}else{const o=fM[e];this.mesh=new $(new $n(o.size),we(o.color,{emissive:o.color,emissiveIntensity:.5}))}const i=t+(Math.random()-.5)*1.6,s=n+(Math.random()-.5)*1.6;this.baseY=ft(i,s)+.7,this.mesh.position.set(i,this.baseY,s)}update(e,t){this.bobPhase+=e*3,this.mesh.rotation.y+=e*2,this.mesh.position.y=this.baseY+Math.sin(this.bobPhase)*.12;const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z,s=Math.hypot(n,i);if(s<hM&&s>.01){const o=Math.min(dM*e/s,1);this.mesh.position.x+=n*o,this.mesh.position.z+=i*o}return s<uM}}const pM=1.8;class cr{constructor(e,t,n,i={}){E(this,"mesh");E(this,"damage");E(this,"freezes");E(this,"burns");E(this,"leech");E(this,"life");E(this,"lifetime");E(this,"speed");E(this,"direction");E(this,"glowMat");E(this,"coreMat");E(this,"bodyMat");E(this,"sparkMat");E(this,"sparks",[]);E(this,"geometries",[]);E(this,"hitEnemies",new Set);this.damage=n,this.freezes=i.freezes??!1,this.burns=i.burns??!1,this.leech=i.leech??0,this.lifetime=i.lifetime??.9,this.speed=i.speed??22,this.life=this.lifetime,this.direction=new I(Math.sin(t),0,Math.cos(t));const s=i.color??8382719,o=new fe(s).lerp(new fe(16777215),.65),a=(h,d)=>new Bt({color:h,transparent:!0,opacity:d,blending:kn,depthWrite:!1,side:Kt});this.glowMat=a(s,.32),this.coreMat=a(o,.95),this.bodyMat=a(s,.7),this.sparkMat=a(o,.9);const c=Math.PI*.95;this.mesh=new rt;const l=(h,d)=>{const f=new Vn(1.2,h,8,24,c);this.geometries.push(f),this.mesh.add(new $(f,d))};l(.4,this.glowMat),l(.2,this.bodyMat),l(.09,this.coreMat);const u=new Tr(.26,0);this.geometries.push(u);for(const h of[0,c]){const d=new $(u,this.sparkMat);d.position.set(Math.cos(h)*1.2,Math.sin(h)*1.2,0),this.sparks.push(d),this.mesh.add(d)}this.mesh.position.copy(e),this.mesh.position.y=ft(e.x,e.z)+.6,this.mesh.rotation.order="YXZ",this.mesh.rotation.set(-Math.PI/2,t,-Math.PI/2-c/2)}get expired(){return this.life<=0}update(e,t){if(this.life-=e,this.expired)return[];this.mesh.position.addScaledVector(this.direction,this.speed*e),this.mesh.position.y=ft(this.mesh.position.x,this.mesh.position.z)+.6;const n=1-this.life/this.lifetime;this.mesh.scale.setScalar(1+n*.9);const i=1-n*.7;this.glowMat.opacity=.32*i,this.bodyMat.opacity=.7*i,this.coreMat.opacity=.95*i;const s=.55+Math.random()*.45;this.sparkMat.opacity=.9*i*s;for(const a of this.sparks)a.scale.setScalar(.7+.5*s);const o=[];for(const a of t){if(a.isDead||this.hitEnemies.has(a))continue;const c=a.mesh.position.x-this.mesh.position.x,l=a.mesh.position.z-this.mesh.position.z;Math.hypot(c,l)<pM*this.mesh.scale.x&&(this.hitEnemies.add(a),o.push(a))}return o}dispose(){for(const e of this.geometries)e.dispose();this.glowMat.dispose(),this.coreMat.dispose(),this.bodyMat.dispose(),this.sparkMat.dispose()}}const ru=16,ou=18,mM=16,gM=9,_M=.7,au=8,cu=.3,il=2,xM=["thunder","gravity"],lu=[500,1100],hu=3;function Ad(r){return 1+.5*(r-1)}function vM(r,e=1){return Math.round((20+r*2)*Ad(e))}function yM(r=1){return 2+r}function MM(r=1){return .3+.3*r}function bM(r,e=1){return Math.round((10+r)*Ad(e))}function wM(r=1){return 5+r}function SM(r=1){return 1+.5*r}class TM{constructor(){E(this,"thunderOwned",!1);E(this,"gravityOwned",!1);E(this,"levels",{thunder:1,gravity:1});E(this,"equipped",[])}ownedOf(e){return e==="thunder"?this.thunderOwned:this.gravityOwned}isEquipped(e){return this.equipped.includes(e)}hasFreeSlot(){return this.equipped.length<il}equip(e){return!this.ownedOf(e)||this.isEquipped(e)||!this.hasFreeSlot()?!1:(this.equipped.push(e),!0)}unequip(e){this.equipped=this.equipped.filter(t=>t!==e)}}const EM=6,AM=18,RM=.22;class CM{constructor(e,t,n,i,s){E(this,"mesh");E(this,"damage");E(this,"center");E(this,"radius");E(this,"life");E(this,"tickT",0);E(this,"spin",0);E(this,"age",0);E(this,"swirl");E(this,"groundRing");E(this,"core");E(this,"innerRings",[]);E(this,"motes",[]);E(this,"materials",[]);E(this,"geometries",[]);E(this,"groundMat");E(this,"funnelMat");E(this,"armMat");E(this,"ringMat");E(this,"coreMat");E(this,"haloMat");E(this,"moteMat");this.center=new I(e,ft(e,t)+.4,t),this.radius=n,this.life=i,this.damage=s;const o=n*.9+1.6;this.mesh=new rt,this.mesh.position.copy(this.center),this.swirl=new rt,this.mesh.add(this.swirl);const a=(m,p)=>{const v=new Bt({color:m,transparent:!0,opacity:p,blending:kn,depthWrite:!1,side:Kt});return this.materials.push(v),v};this.groundMat=a(10119912,.45);const c=new Vn(n,.22,8,48);this.geometries.push(c),this.groundRing=new $(c,this.groundMat),this.groundRing.rotation.x=-Math.PI/2,this.groundRing.position.y=-.3,this.mesh.add(this.groundRing),this.funnelMat=a(8014544,.14);const l=new Mn(n*.85,o,32,1,!0);this.geometries.push(l);const u=new $(l,this.funnelMat);u.rotation.x=Math.PI,u.position.y=o/2-.2,this.swirl.add(u),this.armMat=new Xn({color:14729471,transparent:!0,opacity:.7,blending:kn,depthWrite:!1}),this.materials.push(this.armMat);for(let m=0;m<3;m++){const p=[],v=m/3*Math.PI*2,w=2.4;for(let R=0;R<=48;R++){const A=R/48,g=v+A*w*Math.PI*2,L=n*.85*(1-A)+.2,S=(1-A)*(o-.4);p.push(new I(Math.cos(g)*L,S,Math.sin(g)*L))}const y=new Ut().setFromPoints(p);this.geometries.push(y),this.swirl.add(new wr(y,this.armMat))}this.ringMat=a(12093183,.5);const h=[{r:n*.85,y:.2},{r:n*.55,y:o*.45},{r:n*.32,y:o*.8}];for(const m of h){const p=new Vn(m.r,.16,8,32);this.geometries.push(p);const v=new $(p,this.ringMat);v.rotation.x=-Math.PI/2,v.position.y=m.y,this.innerRings.push(v),this.mesh.add(v)}this.moteMat=a(15784191,.9);const d=new $n(.13,0);this.geometries.push(d);for(let m=0;m<AM;m++){const p=new $(d,this.moteMat);this.motes.push({mesh:p,angle:Math.random()*Math.PI*2,radius:.6+Math.random()*(n-.6),height:Math.random()*o,angSpeed:3+Math.random()*2.5}),this.mesh.add(p)}this.coreMat=a(15255807,.85);const f=new Vt(.7,16,12);this.geometries.push(f),this.core=new $(f,this.coreMat),this.core.position.y=.3,this.mesh.add(this.core),this.haloMat=a(12089599,.28);const _=new Vt(1.4,16,12);this.geometries.push(_);const x=new $(_,this.haloMat);x.position.y=.3,this.mesh.add(x),this.mesh.scale.setScalar(.01)}get expired(){return this.life<=0}update(e,t){this.life-=e,this.age+=e,this.spin+=e*6;const n=Math.min(this.age/RM,1),i=Math.min(this.life/.3,1),s=Math.min(n,Math.max(i,0));this.mesh.scale.setScalar(s),this.swirl.rotation.y=this.spin;for(let l=0;l<this.innerRings.length;l++){const u=l%2===0?1:-1.4;this.innerRings[l].rotation.z=this.spin*u*(1+l*.3)}const o=.85+.15*Math.sin(this.spin*2);this.core.scale.setScalar(o);const a=this.radius*.9+1.6;for(const l of this.motes)l.angle+=l.angSpeed*e,l.radius-=e*2.4,l.height-=e*(a/1.6),(l.radius<.4||l.height<0)&&(l.radius=.8+Math.random()*(this.radius-.8),l.height=a*(.6+Math.random()*.4)),l.mesh.position.set(Math.cos(l.angle)*l.radius,l.height,Math.sin(l.angle)*l.radius),l.mesh.rotation.x+=e*6,l.mesh.rotation.y+=e*5;const c=Math.min(this.life,1);this.groundMat.opacity=.45*c,this.funnelMat.opacity=.14*c,this.armMat.opacity=.7*c,this.ringMat.opacity=.5*c,this.coreMat.opacity=.85*c,this.haloMat.opacity=.28*c*o,this.moteMat.opacity=.9*c;for(const l of t){if(l.isDead)continue;const u=this.center.x-l.mesh.position.x,h=this.center.z-l.mesh.position.z,d=Math.hypot(u,h);if(d>this.radius||d<.6)continue;const f=Math.min(EM*e,d-.5);l.mesh.position.x+=u/d*f,l.mesh.position.z+=h/d*f}if(this.tickT+=e,this.tickT>=cu){this.tickT-=cu;const l=[];for(const u of t){if(u.isDead)continue;Math.hypot(this.center.x-u.mesh.position.x,this.center.z-u.mesh.position.z)<=this.radius&&l.push(u)}return l}return[]}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class IM{constructor(e){E(this,"group");E(this,"life");E(this,"lifetime",.34);E(this,"coreMat");E(this,"glowMat");E(this,"branchMat");E(this,"nodeMat");E(this,"nodes",[]);E(this,"geometries",[]);this.life=this.lifetime,this.group=new rt,this.glowMat=new Xn({color:4892927,transparent:!0,opacity:.45,blending:kn,depthWrite:!1}),this.coreMat=new Xn({color:15398655,transparent:!0,opacity:1,blending:kn,depthWrite:!1}),this.branchMat=new Xn({color:8834303,transparent:!0,opacity:.6,blending:kn,depthWrite:!1}),this.nodeMat=new Bt({color:13495039,transparent:!0,opacity:.9,blending:kn,depthWrite:!1});for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1],s=Ic(n,i,1.6),o=Ic(n,i,.9);this.addLine(s,this.glowMat),this.addLine(s,this.glowMat),this.addLine(o,this.coreMat);for(const a of PM(o))this.addLine(a,this.branchMat)}for(let t=0;t<e.length;t++){const n=t===0?.45:.32,i=new Tr(n,0),s=new $(i,this.nodeMat);s.position.copy(e[t]),this.geometries.push(i),this.nodes.push(s),this.group.add(s)}}addLine(e,t){const n=new Ut().setFromPoints(e);this.geometries.push(n),this.group.add(new wr(n,t))}get expired(){return this.life<=0}update(e){this.life-=e;const t=Math.max(this.life/this.lifetime,0),n=t>.32?.5+Math.random()*.5:t/.32;this.coreMat.opacity=n,this.glowMat.opacity=.45*n,this.branchMat.opacity=.6*n*(.4+Math.random()*.6),this.nodeMat.opacity=.9*n;const i=.6+.4*n;for(const s of this.nodes)s.scale.setScalar(i)}dispose(){for(const e of this.geometries)e.dispose();this.coreMat.dispose(),this.glowMat.dispose(),this.branchMat.dispose(),this.nodeMat.dispose()}}function Ic(r,e,t){const n=[],i=new I().subVectors(e,r),s=i.length(),o=Math.max(5,Math.min(14,Math.round(s*1.6))),a=new I(-i.z,0,i.x).normalize();for(let c=0;c<=o;c++){const l=new I().lerpVectors(r,e,c/o);c>0&&c<o&&(l.addScaledVector(a,(Math.random()-.5)*t),l.y+=(Math.random()-.5)*t*.7),n.push(l)}return n}function PM(r){const e=[],t=new I(0,1,0);for(let n=2;n<r.length-1;n++){if(Math.random()>.35)continue;const i=r[n],s=new I().subVectors(i,r[n-1]).normalize();s.applyAxisAngle(t,(Math.random()-.5)*1.8),s.y+=(Math.random()-.5)*.8;const o=.8+Math.random()*1.4,a=i.clone().addScaledVector(s.normalize(),o);e.push(Ic(i,a,.5))}return e}class uu{constructor(e,t,n){E(this,"object");E(this,"life");E(this,"lifetime");E(this,"radius");E(this,"grav");E(this,"rings",[]);E(this,"flash");E(this,"shards",[]);E(this,"materials",[]);E(this,"geometries",[]);E(this,"ringMat");E(this,"flashMat");E(this,"shardMat");const i=ft(e,t);this.radius=n.radius,this.lifetime=n.lifetime??.75,this.life=this.lifetime,this.grav=n.shardKind==="drop"?16:22,this.object=new rt,this.object.position.set(e,i+.08,t);const s=(l,u)=>{const h=new Bt({color:l,transparent:!0,opacity:u,blending:kn,depthWrite:!1,side:Kt});return this.materials.push(h),h};this.ringMat=s(n.ringColor,.7);for(let l=0;l<2;l++){const u=new Vn(1,.14,8,40);this.geometries.push(u);const h=new $(u,this.ringMat);h.rotation.x=-Math.PI/2,this.rings.push(h),this.object.add(h)}this.flashMat=s(n.ringColor,.5);const o=new Er(.2,this.radius*.9,40);this.geometries.push(o),this.flash=new $(o,this.flashMat),this.flash.rotation.x=-Math.PI/2,this.object.add(this.flash),this.shardMat=s(n.shardColor,.95);const a=n.shardCount??14,c=n.shardKind==="drop"?new $n(.16,0):new Oo(.22,0);this.geometries.push(c);for(let l=0;l<a;l++){const u=new $(c,this.shardMat),h=l/a*Math.PI*2+Math.random()*.5,d=this.radius*(.3+Math.random()*.5);u.position.set(Math.cos(h)*.4,.2,Math.sin(h)*.4),this.shards.push({mesh:u,vel:new I(Math.cos(h)*d,6+Math.random()*5,Math.sin(h)*d),spin:new I((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10)}),this.object.add(u)}}get expired(){return this.life<=0}update(e){this.life-=e;const t=1-Math.max(this.life,0)/this.lifetime,n=1-t;for(let i=0;i<this.rings.length;i++){const s=i*.18,o=Math.min(Math.max((t-s)/(1-s),0),1),a=.3+(this.radius-.3)*(1-(1-o)*(1-o));this.rings[i].scale.set(a,a,1),this.rings[i].visible=o>0}this.ringMat.opacity=.7*n,this.flashMat.opacity=.5*Math.max(1-t/.3,0);for(const i of this.shards)i.vel.y-=this.grav*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=i.spin.x*e,i.mesh.rotation.y+=i.spin.y*e,i.mesh.rotation.z+=i.spin.z*e;this.shardMat.opacity=.95*n}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}class du{constructor(e,t,n,i,s){E(this,"object");E(this,"life");E(this,"lifetime",.42);E(this,"mode");E(this,"ring");E(this,"coreMesh");E(this,"motes",[]);E(this,"moteAng",[]);E(this,"spin",0);E(this,"materials",[]);E(this,"geometries",[]);E(this,"ringMat");E(this,"coreMat");E(this,"moteMat");this.mode=s,this.life=this.lifetime,this.object=new rt,this.object.position.set(e,t,n),this.object.rotation.y=i;const o=(u,h)=>{const d=new Bt({color:u,transparent:!0,opacity:h,blending:kn,depthWrite:!1,side:Kt});return this.materials.push(d),d};this.ringMat=o(11563263,.85);const a=new Vn(1.1,.16,8,32);this.geometries.push(a),this.ring=new $(a,this.ringMat),this.object.add(this.ring),this.coreMat=o(6959296,.5);const c=new Sr(1.05,32);this.geometries.push(c),this.coreMesh=new $(c,this.coreMat),this.object.add(this.coreMesh),this.moteMat=o(14729471,.95);const l=new $n(.16,0);this.geometries.push(l);for(let u=0;u<10;u++){const h=new $(l,this.moteMat);this.motes.push(h),this.moteAng.push(u/10*Math.PI*2),this.object.add(h)}this.object.scale.setScalar(s==="explode"?.01:1)}get expired(){return this.life<=0}update(e){this.life-=e,this.spin+=e*10;const t=Math.max(this.life,0)/this.lifetime,n=1-t,i=this.mode==="implode"?t:Math.min(n/.3,1)*(.6+.4*t);this.object.scale.setScalar(Math.max(i,.01)),this.ring.rotation.z=this.spin;const s=t;this.ringMat.opacity=.85*s,this.coreMat.opacity=.5*s,this.moteMat.opacity=.95*s;const o=this.mode==="implode"?1.1*t:1.1*(.4+.6*n);for(let a=0;a<this.motes.length;a++){const c=this.moteAng[a]+this.spin*(this.mode==="implode"?-1:1);this.motes[a].position.set(Math.cos(c)*o,Math.sin(c)*o,0),this.motes[a].rotation.x+=e*8,this.motes[a].rotation.y+=e*6}}dispose(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose()}}function LM(r){const t="wss://archipelago-song.onrender.com",n=new URL(t);return n.searchParams.set("room",r),n.toString()}const DM=800,NM=8e3,UM=3e3,OM=12e3;class FM{constructor(e){E(this,"ws",null);E(this,"cb");E(this,"localId",null);E(this,"room",null);E(this,"hostId",null);E(this,"wantConnect",!1);E(this,"reconnecting",!1);E(this,"reconnectAttempts",0);E(this,"reconnectTimer",null);E(this,"lastRecvAt",0);E(this,"watchdogTimer",null);this.cb=e}get connected(){return this.ws!==null&&this.ws.readyState===WebSocket.OPEN}get isHost(){return this.connected&&this.hostId!==null&&this.hostId===this.localId}connect(e){this.room=e,this.wantConnect=!0,this.reconnectAttempts=0,this.openSocket()}leave(){this.wantConnect=!1,this.reconnecting=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.stopWatchdog();const e=this.ws;this.ws=null,this.localId=null,this.hostId=null,e==null||e.close()}_debugDrop(){var e;(e=this.ws)==null||e.close()}openSocket(){let e;try{e=new WebSocket(LM(this.room??"lobby"))}catch(n){console.warn("[net] 無法建立連線,稍後重試:",n),this.scheduleReconnect();return}this.ws=e,e.addEventListener("open",()=>{var n,i,s,o;this.reconnectAttempts=0,this.lastRecvAt=Date.now(),this.startWatchdog(),this.reconnecting&&(this.reconnecting=!1,(i=(n=this.cb).onReconnecting)==null||i.call(n,!1)),(o=(s=this.cb).onStatus)==null||o.call(s,!0)}),e.addEventListener("message",n=>{var s,o,a,c,l,u,h,d,f,_,x,m,p,v,w,y;this.lastRecvAt=Date.now();let i;try{i=JSON.parse(n.data)}catch{return}switch(i.t){case"ping":break;case"welcome":this.localId=i.id,this.room=i.room,this.hostId=i.host;for(const R of i.others)this.cb.onState(R.id,R.state);(o=(s=this.cb).onHostChange)==null||o.call(s,this.isHost);break;case"state":this.cb.onState(i.id,i.state);break;case"join":break;case"leave":this.cb.onLeave(i.id);break;case"host":this.hostId=i.id,(c=(a=this.cb).onHostChange)==null||c.call(a,this.isHost);break;case"enemies":(u=(l=this.cb).onEnemies)==null||u.call(l,i.e);break;case"hit":(d=(h=this.cb).onHit)==null||d.call(h,i.i,i.dmg,i.id);break;case"kill":(_=(f=this.cb).onKill)==null||_.call(f,i.i,i.by);break;case"pdmg":i.to===this.localId&&((m=(x=this.cb).onPlayerDamage)==null||m.call(x,i.dmg,i.sx,i.sy,i.sz,i.knock,i.eff));break;case"cc":(v=(p=this.cb).onCc)==null||v.call(p,i.i,i.kind,i.sec,i.dps);break;case"chat":(y=(w=this.cb).onChat)==null||y.call(w,i.id,i.text);break}});const t=()=>{var n,i,s,o;this.ws===e&&(this.ws=null,this.localId=null,this.hostId=null,this.stopWatchdog(),(i=(n=this.cb).onStatus)==null||i.call(n,!1),(o=(s=this.cb).onHostChange)==null||o.call(s,!1),this.wantConnect&&this.scheduleReconnect())};e.addEventListener("close",t),e.addEventListener("error",t)}scheduleReconnect(){var n,i;if(!this.wantConnect||this.reconnectTimer)return;this.reconnecting||(this.reconnecting=!0,(i=(n=this.cb).onReconnecting)==null||i.call(n,!0));const e=Math.min(DM*2**this.reconnectAttempts,NM);this.reconnectAttempts++;const t=Math.random()*.3*e;this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.wantConnect&&this.openSocket()},e+t)}startWatchdog(){this.stopWatchdog(),this.watchdogTimer=setInterval(()=>{var e;this.connected&&Date.now()-this.lastRecvAt>OM&&((e=this.ws)==null||e.close())},UM)}stopWatchdog(){this.watchdogTimer&&clearInterval(this.watchdogTimer),this.watchdogTimer=null}sendState(e){this.connected&&this.ws.send(JSON.stringify({t:"state",state:e}))}sendEnemies(e){this.connected&&this.ws.send(JSON.stringify({t:"enemies",e}))}sendHit(e,t){this.connected&&this.ws.send(JSON.stringify({t:"hit",i:e,dmg:t}))}sendKill(e,t){this.connected&&this.ws.send(JSON.stringify({t:"kill",i:e,by:t}))}sendPlayerDamage(e,t,n,i,s,o,a){this.connected&&this.ws.send(JSON.stringify({t:"pdmg",to:e,dmg:t,sx:n,sy:i,sz:s,knock:o,eff:a}))}sendCc(e,t,n,i){this.connected&&this.ws.send(JSON.stringify({t:"cc",i:e,kind:t,sec:n,dps:i}))}sendChat(e){this.connected&&this.ws.send(JSON.stringify({t:"chat",text:e}))}}const kM=1,BM=2,zM=4,HM=8,fu=.3,GM=.3,VM=.11,WM=1;function Ia(){return performance.now()/1e3}const pu=[4891647,16747068,12086271,16765500,3985568,16739229];function Rd(r){let e=0;for(let t=0;t<r.length;t++)e=e*31+r.charCodeAt(t)|0;return pu[Math.abs(e)%pu.length]}class qM{constructor(e,t){E(this,"mesh");E(this,"rig");E(this,"tunicColor");E(this,"buffer",[]);E(this,"moving",!1);E(this,"walkPhase",0);E(this,"renderYaw",0);E(this,"act",0);E(this,"swingT",0);E(this,"hurtT",0);E(this,"dead",!1);E(this,"deathLean",0);const n=Rd(e);this.tunicColor=new fe(n),this.rig=Ed(n),this.mesh=this.rig.group,this.renderYaw=t.facing,this.moving=t.moving,this.act=t.act??0,this.buffer.push({t:Ia(),x:t.x,y:t.y,z:t.z,facing:t.facing,moving:t.moving}),this.mesh.position.set(t.x,t.y,t.z),this.mesh.rotation.y=this.renderYaw}sampleBuffer(e){const t=this.buffer,n=t[t.length-1];if(t.length===1||e>=n.t)return n;if(e<=t[0].t)return t[0];for(let i=t.length-2;i>=0;i--){const s=t[i];if(s.t<=e){const o=t[i+1],a=o.t-s.t,c=a>1e-6?(e-s.t)/a:0;return{x:s.x+(o.x-s.x)*c,y:s.y+(o.y-s.y)*c,z:s.z+(o.z-s.z)*c,facing:o.facing,moving:o.moving}}}return t[0]}setState(e){const t=Ia();this.buffer.push({t,x:e.x,y:e.y,z:e.z,facing:e.facing,moving:e.moving});const n=t-WM;for(;this.buffer.length>2&&this.buffer[0].t<n;)this.buffer.shift();const i=e.act??0;i&kM&&(this.swingT=fu),i&HM&&(this.hurtT=GM),this.act=i,this.dead=e.dead??!1}update(e){const t=1-Math.exp(-12*e),n=this.sampleBuffer(Ia()-VM);this.mesh.position.set(n.x,n.y,n.z),this.moving=n.moving;let i=n.facing-this.renderYaw;i=Math.atan2(Math.sin(i),Math.cos(i)),this.renderYaw+=i*t,this.mesh.rotation.y=this.renderYaw;const{legL:s,legR:o,armL:a,armR:c,shield:l,tunicMat:u}=this.rig;if(this.deathLean+=((this.dead?1:0)-this.deathLean)*Math.min(1,t*1.2),this.mesh.rotation.x=this.deathLean*1.45,this.dead){s.rotation.x+=(0-s.rotation.x)*t,o.rotation.x+=(0-o.rotation.x)*t,c.rotation.x+=(0-c.rotation.x)*t,l.position.lerp(Cc,t),u.color.lerpColors(this.tunicColor,new fe(5593696),.6);return}this.swingT=Math.max(0,this.swingT-e),this.hurtT=Math.max(0,this.hurtT-e);const h=(this.act&zM)!==0,d=(this.act&BM)!==0;if(h)s.rotation.x+=(.7-s.rotation.x)*t,o.rotation.x+=(.5-o.rotation.x)*t;else if(this.moving){this.walkPhase+=e*9;const x=Math.sin(this.walkPhase)*.5;s.rotation.x=x,o.rotation.x=-x}else s.rotation.x*=1-t,o.rotation.x*=1-t;let f;this.swingT>0?f=-2.4+(1-this.swingT/fu)*2.9:h?f=-.5:this.moving?f=Math.sin(this.walkPhase)*.3:f=0,c.rotation.x+=(f-c.rotation.x)*Math.min(1,t*2.5);const _=d?-.5:this.moving&&!h?-Math.sin(this.walkPhase)*.3:0;a.rotation.x+=(_-a.rotation.x)*Math.min(1,t*2.5),l.position.lerp(d?Py:Cc,Math.min(e*14,1)),this.hurtT>0?u.color.lerpColors(this.tunicColor,new fe(16731469),.6):u.color.copy(this.tunicColor)}get actBits(){return this.act}get swinging(){return this.swingT>0}dispose(){var e;(e=this.mesh.parent)==null||e.remove(this.mesh),this.mesh.traverse(t=>{t instanceof $&&t.geometry.dispose()})}}const mu=10,gu=15,XM=6,_u=12,jM=4,Pa=8,YM=8,xu=14,$M=3,vu=16,KM=7,yu=14,sl=4,ZM=["flame","earth","frost","void","lava","aqua","life"];function fr(r){return ZM.includes(r)}const Po=6,JM=["flame","wind","earth","frost","tide","void","lava","aqua","life"],Mu=[400,900],bu=3;function Ws(r){return 1+.5*(r-1)}function QM(r,e=1){return Math.round((18+r*2)*Ws(e)*1.4)}function eb(r,e=1){return Math.round((25+r*2)*Ws(e))}function tb(r=1){return XM+(r-1)}function nb(r,e=1){return Math.round((20+r*2)*Ws(e))}function ib(r=1){return 1.5+r}function sb(r=1){return YM+3*(r-1)}function rb(r,e=1){return Math.round((22+r*2)*Ws(e)*1.4)}function ob(r=1){return 8+4*(r-1)}function ab(r,e=1){return Math.round((20+r*2)*Ws(e)*1.35)}function cb(r=1){return 2+.7*(r-1)}function lb(r=1){return KM+(r-1)}function hb(r,e=1){return Math.round((18+r*2)*Ws(e)*1.5)}function ub(r=1){return .4+.1*(r-1)}class db{constructor(){E(this,"flameOwned",!1);E(this,"windOwned",!1);E(this,"earthOwned",!1);E(this,"frostOwned",!1);E(this,"tideOwned",!1);E(this,"voidOwned",!1);E(this,"lavaOwned",!1);E(this,"aquaOwned",!1);E(this,"lifeOwned",!1);E(this,"levels",{flame:1,wind:1,earth:1,frost:1,void:1,lava:1,aqua:1,life:1});E(this,"equipped",[]);E(this,"slots",new Array(Po).fill(null))}ownedOf(e){switch(e){case"flame":return this.flameOwned;case"wind":return this.windOwned;case"earth":return this.earthOwned;case"frost":return this.frostOwned;case"tide":return this.tideOwned;case"void":return this.voidOwned;case"lava":return this.lavaOwned;case"aqua":return this.aquaOwned;case"life":return this.lifeOwned;default:return!1}}isEquipped(e){return this.equipped.includes(e)}hasFreeSlot(){return this.equipped.length<sl}equip(e){return!this.ownedOf(e)||this.isEquipped(e)||!this.hasFreeSlot()?!1:(this.equipped.push(e),this.ensureSlots(),!0)}unequip(e){const t=this.slotOf(e);t>=0&&(this.slots[t]=null),this.equipped=this.equipped.filter(n=>n!==e)}slotOf(e){return this.slots.indexOf(e)}gemAt(e){return this.slots[e]??null}assignSlot(e,t){if(!fr(e)||!this.isEquipped(e)||t<0||t>=Po)return!1;const n=this.slotOf(e),i=this.slots[t];return this.slots[t]=e,n>=0&&(this.slots[n]=i),this.ensureSlots(),!0}ensureSlots(){for(let e=0;e<this.slots.length;e++){const t=this.slots[e];t&&(!this.isEquipped(t)||!fr(t))&&(this.slots[e]=null)}for(const e of this.equipped){if(!fr(e)||this.slotOf(e)>=0)continue;const t=this.slots.indexOf(null);t>=0&&(this.slots[t]=e)}}}const Pc=[{id:"cap",name:"皮帽",slot:"head",desc:"防禦 +2",price:80,bonus:{def:2}},{id:"helm",name:"鐵盔",slot:"head",desc:"防禦 +5",price:300,bonus:{def:5}},{id:"vest",name:"皮甲",slot:"chest",desc:"防禦 +3、生命 +20",price:120,bonus:{def:3,hp:20}},{id:"plate",name:"鐵甲",slot:"chest",desc:"防禦 +7、生命 +40",price:450,bonus:{def:7,hp:40}},{id:"sandals",name:"草鞋",slot:"boots",desc:"敏捷 +2",price:80,bonus:{agi:2}},{id:"greaves",name:"鐵靴",slot:"boots",desc:"防禦 +3、敏捷 +3",price:300,bonus:{def:3,agi:3}},{id:"badge",name:"勇者徽章",slot:"trinket",desc:"攻擊 +5",price:600,bonus:{atk:5}},{id:"locket",name:"生命墜飾",slot:"trinket",desc:"生命 +50",price:500,bonus:{hp:50}},{id:"ring",name:"靈能戒指",slot:"trinket",desc:"靈力 +20",price:500,bonus:{mp:20}},{id:"crown",name:"晶紋頭冠",slot:"head",desc:"防禦 +9、靈力 +15",price:900,bonus:{def:9,mp:15}},{id:"scalemail",name:"龍鱗重甲",slot:"chest",desc:"防禦 +12、生命 +80",price:1400,bonus:{def:12,hp:80}},{id:"windboots",name:"疾風長靴",slot:"boots",desc:"敏捷 +8、防禦 +4",price:900,bonus:{agi:8,def:4}},{id:"gauntlet",name:"猛擊護手",slot:"trinket",desc:"攻擊 +9、敏捷 +3",price:1100,bonus:{atk:9,agi:3}},{id:"amulet",name:"潮汐護符",slot:"trinket",desc:"生命 +40、靈力 +30",price:900,bonus:{hp:40,mp:30}},{id:"treepend",name:"世界樹墜飾",slot:"trinket",desc:"全能力 +3、生命 +30",price:1600,bonus:{atk:3,def:3,hp:30,mp:15,agi:3}}];function Lc(r){return Pc.find(e=>e.id===r)}class fb{constructor(){E(this,"owned",[]);E(this,"equipped",{})}has(e){return this.owned.includes(e)}equip(e){const t=Lc(e);if(!(!t||!this.has(e)))if(t.slot==="trinket"){const n=this.equipped.trinket1?this.equipped.trinket2?"trinket1":"trinket2":"trinket1";this.equipped[n]=e}else this.equipped[t.slot]=e}unequip(e){delete this.equipped[e]}slotOf(e){for(const[t,n]of Object.entries(this.equipped))if(n===e)return t;return null}totalBonus(){const e={atk:0,def:0,hp:0,mp:0,agi:0};for(const t of Object.values(this.equipped)){const n=Lc(t);n&&(e.atk+=n.bonus.atk??0,e.def+=n.bonus.def??0,e.hp+=n.bonus.hp??0,e.mp+=n.bonus.mp??0,e.agi+=n.bonus.agi??0)}return e}serialize(){return{owned:[...this.owned],equipped:{...this.equipped}}}restore(e){this.owned=[...e.owned],this.equipped={...e.equipped}}}const Xi=5,$i={vineHunt:{kind:"vine",target:4},emberHunt:{kind:"ember",target:4},frostHunt:{kind:"frost",target:4},deepHunt:{kind:"deep",target:3},sandHunt:{kind:"sand",target:4},reefHunt:{kind:"reef",target:4},sporeHunt:{kind:"spore",target:4},marshHunt:{kind:"marsh",target:4},brineHunt:{kind:"brine",target:4},solarHunt:{kind:"solar",target:4}};class pb{constructor(){E(this,"states",{});E(this,"slimeKills",0);E(this,"jellyBaseline",0);E(this,"huntKills",{});E(this,"huntBaselines",{})}get(e){return this.states[e]??null}accept(e){if(this.states[e]||(this.states[e]="active"),e==="jelly"&&(this.jellyBaseline=this.slimeKills),e in $i){const t=e;this.huntBaselines[t]=this.huntKills[$i[t].kind]??0}}complete(e){this.states[e]="done"}addKill(e){this.huntKills[e]=(this.huntKills[e]??0)+1}killsOf(e){return this.huntKills[e]??0}jellyProgress(){return Math.min(this.slimeKills-this.jellyBaseline,Xi)}huntProgress(e){const t=(this.huntKills[$i[e].kind]??0)-(this.huntBaselines[e]??0);return Math.min(t,$i[e].target)}serialize(){return{states:{...this.states},kills:this.slimeKills,base:this.jellyBaseline,huntKills:{...this.huntKills},huntBases:{...this.huntBaselines}}}restore(e){this.states={...e.states},this.slimeKills=e.kills,this.jellyBaseline=e.base,this.huntKills={...e.huntKills??{}},this.huntBaselines={...e.huntBases??{}}}}const Cd="archipelago-save-v1";function mb(r){try{localStorage.setItem(Cd,JSON.stringify(r))}catch{}}function gb(){try{const r=localStorage.getItem(Cd);if(!r)return null;const e=JSON.parse(r);return e.v!==1?null:e}catch{return null}}const _b=`
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
`;class xb{constructor(e){E(this,"hpFill");E(this,"mpFill");E(this,"stFill");E(this,"xpFill");E(this,"levelText");E(this,"coinText");E(this,"crystalText");E(this,"toast");E(this,"islandTitle");E(this,"deathOverlay");E(this,"toastTimer",null);E(this,"islandTimer",null);this.onRespawn=e;const t=document.createElement("style");t.textContent=_b,document.head.appendChild(t);const n=document.createElement("div");n.id="hud",n.innerHTML=`
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
    `,document.body.appendChild(n),this.deathOverlay=document.createElement("div"),this.deathOverlay.id="death",this.deathOverlay.innerHTML='<h2>你倒下了……</h2><div class="options" id="death-options"></div>',document.body.appendChild(this.deathOverlay),this.hpFill=this.byId("hud-hp"),this.mpFill=this.byId("hud-mp"),this.stFill=this.byId("hud-st"),this.xpFill=this.byId("hud-xp"),this.levelText=this.byId("hud-level"),this.coinText=this.byId("hud-coin"),this.crystalText=this.byId("hud-crystal"),this.toast=this.byId("hud-toast"),this.islandTitle=this.byId("hud-island")}update(e,t){const n=e.stats;this.hpFill.style.width=`${e.hp/n.maxHP*100}%`,this.mpFill.style.width=`${e.mp/n.maxMP*100}%`,this.byId("hud-hp-num").textContent=`${Math.ceil(e.hp)} / ${n.maxHP}`,this.byId("hud-mp-num").textContent=`${Math.floor(e.mp)} / ${n.maxMP}`,this.stFill.style.width=`${e.stamina}%`,this.xpFill.style.width=`${n.exp/n.expToNext()*100}%`,this.levelText.textContent=n.points>0?`Lv.${n.level}(${n.points} 點可分配)`:`Lv.${n.level}`,this.coinText.textContent=`🪙 ${t.coins}`;const i=t.crystals.small+t.crystals.medium+t.crystals.large;this.crystalText.textContent=`💎 ${i}`,this.byId("hud-potion").textContent=String(t.potions)}setGems(e){const t=["①","②","③","④","⑤","⑥"],n={flame:"🔥 火焰斬(10 靈力)",earth:"🪨 地震波(15 靈力)",frost:"❄️ 冰箭(12 靈力)／海上可行走",void:"🌀 瞬移(8 靈力)",lava:"🌋 熔岩噴發(14 靈力,灼燒)",aqua:"💧 碧波震盪(16 靈力,凍結)",life:"🌿 生命汲取(14 靈力,吸血)"},i=[];for(let o=0;o<e.slots.length;o++){const a=e.slots[o],c=a?n[a]:void 0;c&&i.push(`${t[o]??`[${o+1}]`} ${c}`)}e.isEquipped("wind")&&i.push("🌪️ 風語石｜二段跳/按住空白鍵滑翔(被動)"),e.isEquipped("tide")&&i.push("🌊 潮汐石｜可潛入沉沒古城(船開到遺跡按 F)");const s=this.byId("hud-gem");s.classList.toggle("show",i.length>0),s.innerHTML=i.join("<br/>")}setFruits(e){const t=[];e.isEquipped("thunder")&&t.push("⚡ 雷光果｜Z 連鎖閃電(16 靈力,麻痺)"),e.isEquipped("gravity")&&t.push("🌀 引力果｜T 引力漩渦(18 靈力,聚怪)");const n=this.byId("hud-fruit");n.classList.toggle("show",t.length>0),n.innerHTML=t.join("<br/>")}setTalkPrompt(e,t="按 F 對話"){const n=this.byId("hud-talk");n.classList.toggle("show",e),e&&(n.textContent=t)}setEnv(e){const t=this.byId("hud-env");t.textContent!==e&&(t.textContent=e)}setOnline(e,t,n){const i=this.byId("hud-net");if(!e){i.textContent="";return}const s=n&&n!=="lobby"?` · 房間 ${n}`:"";i.textContent=`🌐 連線中${s} · 同行 ${t} 人`}setReconnecting(e,t){if(!e)return;const n=this.byId("hud-net"),i=t&&t!=="lobby"?` · 房間 ${t}`:"";n.textContent=`🔄 重新連線中…${i}`}setQuests(e){this.byId("hud-quests").classList.toggle("show",e.length>0),this.byId("hud-quest-list").innerHTML=e.map(t=>`<div>${t}</div>`).join("")}showIslandTitle(e,t=""){this.islandTitle.innerHTML=`<div class="name">${e}</div>`+(t?`<div class="sub">${t}</div>`:""),this.islandTitle.classList.add("show"),this.islandTimer&&clearTimeout(this.islandTimer),this.islandTimer=setTimeout(()=>this.islandTitle.classList.remove("show"),3200)}showToast(e){this.toast.textContent=e,this.toast.classList.add("show"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast.classList.remove("show"),2200)}setDead(e,t=[]){if(e){const n=this.byId("death-options");n.innerHTML="";const i=[{id:"beach",label:"在曙光嶼海灘重生"},...t];for(const s of i){const o=document.createElement("button");o.textContent=s.label,o.dataset.respawn=s.id,s.id!=="beach"&&o.classList.add("shrine"),o.addEventListener("click",()=>this.onRespawn(s.id)),n.appendChild(o)}}this.deathOverlay.classList.toggle("show",e)}byId(e){const t=document.getElementById(e);if(!t)throw new Error(`HUD 元素遺失: ${e}`);return t}}const vb=`
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
`,uo=460,fo=460;class yb{constructor(){E(this,"root");E(this,"canvas");E(this,"ctx");E(this,"seaLabel");E(this,"legend");E(this,"isOpen",!1);const e=document.createElement("style");e.textContent=vb,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="map",this.root.innerHTML=`
      <div class="frame">
        <div class="left">
          <div class="head"><span class="t">群島地圖</span><span class="sea" id="map-sea"></span></div>
          <canvas id="map-canvas" width="${uo}" height="${fo}"></canvas>
          <div class="foot">上 = 北　按 M 關閉</div>
        </div>
        <div class="legend"><div class="lg-t">島嶼</div><div id="map-legend"></div></div>
      </div>`,document.body.appendChild(this.root),this.canvas=this.root.querySelector("#map-canvas"),this.ctx=this.canvas.getContext("2d"),this.seaLabel=this.root.querySelector("#map-sea"),this.legend=this.root.querySelector("#map-legend")}toggle(){return this.isOpen=!this.isOpen,this.root.classList.toggle("show",this.isOpen),this.isOpen}close(){this.isOpen&&(this.isOpen=!1,this.root.classList.remove("show"))}render(e,t){if(!this.isOpen)return;const n=hi(e),i=Di.filter(R=>hi(R.x)===n),s=bd(e,t);this.seaLabel.textContent=n===2?"第二海":"第一海";const o=46,a=Math.min(e,...i.map(R=>R.x-R.r)),c=Math.max(e,...i.map(R=>R.x+R.r)),l=Math.min(t,...i.map(R=>R.z-R.r)),u=Math.max(t,...i.map(R=>R.z+R.r)),h=c-a||1,d=u-l||1,f=Math.min((uo-2*o)/h,(fo-2*o)/d),_=(uo-h*f)/2-a*f,x=(fo-d*f)/2-l*f,m=R=>R*f+_,p=R=>R*f+x,v=this.ctx;v.clearRect(0,0,uo,fo);for(const R of i){const A=m(R.x),g=p(R.z),L=Math.max(6,R.r*f),S=s===R;v.beginPath(),v.arc(A,g,L,0,Math.PI*2),v.fillStyle=`#${R.grass.toString(16).padStart(6,"0")}`,v.globalAlpha=.92,v.fill(),v.globalAlpha=1,v.lineWidth=S?3:1.5,v.strokeStyle=S?"#ffd24a":"rgba(255,255,255,0.7)",v.stroke(),v.fillStyle=S?"#ffe9a8":"#eaf4ff",v.font=`${S?"bold ":""}13px "PingFang TC", sans-serif`,v.textAlign="center",v.fillText(R.name,A,g+L+14)}const w=m(e),y=p(t);v.beginPath(),v.arc(w,y,6,0,Math.PI*2),v.fillStyle="#ff4d4d",v.fill(),v.lineWidth=2,v.strokeStyle="#fff",v.stroke(),this.legend.innerHTML=i.map(R=>{const A=s===R?"item here":"item",g=`#${R.grass.toString(16).padStart(6,"0")}`;return`<div class="${A}"><span class="dot" style="background:${g}"></span>${s===R?"📍 ":""}${R.name}</div>`}).join("")}}const Mb=`
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
#bag .keybinds { display: flex; gap: 2px; justify-content: center; margin-top: 4px; }
#bag .kb { padding: 1px 0; width: 16px; margin: 0; font-size: 10px; line-height: 1.4; background: #3a4760; border-radius: 4px; }
#bag .kb.on { background: #f0c040; color: #1a1a22; font-weight: 700; }
`,wu={small:"小型經驗結晶",medium:"中型經驗結晶",large:"大型經驗結晶"},Su={hp:"生命(最大生命 +10)",str:"力量(攻擊 +2)",spirit:"靈能(靈力上限 +5)",agi:"敏捷(速度 +1%)",vit:"體魄(防禦 +2)"};class bb{constructor(e,t,n,i,s,o,a,c,l,u,h,d){E(this,"root");E(this,"visible",!1);E(this,"teleportOpen",!1);this.inventory=e,this.stats=t,this.gems=n,this.fruits=i,this.equipment=s,this.onUseCrystal=o,this.onAllocate=a,this.onEquipChange=c,this.onUseSeaGem=l,this.getShrineTargets=u,this.onTeleportShrine=h,this.onLoadoutChange=d;const f=document.createElement("style");f.textContent=Mb,document.head.appendChild(f),this.root=document.createElement("div"),this.root.id="bag",document.body.appendChild(this.root)}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible),this.visible&&(this.teleportOpen=!1,this.render())}render(){var d;if(!this.visible)return;this.gems.ensureSlots();const e=this.stats,t=Object.keys(wu).map(f=>{const _=this.inventory.crystals[f];return`<div class="item">
          <span>${wu[f]} ×${_} <span class="muted">(${Td[f]} EXP)</span></span>
          <span>
            <button data-use="${f}" data-count="1" ${_===0?"disabled":""}>使用</button>
            <button data-use="${f}" data-count="999" ${_===0?"disabled":""}>全部</button>
          </span>
        </div>`}).join(""),n=e.points>0?Object.keys(Su).map(f=>`<div class="item">
                <span>${Su[f]} <span class="muted">目前 ${e.attrs[f]}</span></span>
                <button data-alloc="${f}">+1</button>
              </div>`).join(""):'<div class="muted">升級後可在此分配能力點數</div>',i=[["flame","🔥","焰心石"],["wind","🌪️","風語石"],["earth","🪨","地殼石"],["frost","❄️","霜語晶"],["tide","🌊","潮汐石"],["void","🌀","虛空石"],["lava","🌋","溶岩石"],["aqua","💧","碧波石"],["life","🌿","翠生石"]],s=!this.gems.hasFreeSlot(),o=i.map(([f,_,x])=>{if(!this.gems.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const p=this.gems.isEquipped(f),v=!p&&s;let w="";if(p&&fr(f)){const y=this.gems.slotOf(f);w=`<div class="keybinds">${Array.from({length:Po},(A,g)=>`<button class="kb ${y===g?"on":""}" data-bind="${f}" data-slot="${g}">${g+1}</button>`).join("")}</div>`}return`<div class="gem-slot ${p?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${p?"on":""}" data-gemtoggle="${f}" ${v?"disabled":""}>${p?"✅ 出戰":"裝備"}</button>${w}</div>`}).join(""),a=[["thunder","⚡","雷光果"],["gravity","🌀","引力果"]],c=!this.fruits.hasFreeSlot(),l=a.map(([f,_,x])=>{if(!this.fruits.ownedOf(f))return`<div class="gem-slot off">${_}<br/>${x}<br/><span class='muted'>未取得</span></div>`;const p=this.fruits.isEquipped(f);return`<div class="gem-slot ${p?"eq":""}">${_}<br/>${x}<br/>
          <button class="gembtn ${p?"on":""}" data-fruittoggle="${f}" ${!p&&c?"disabled":""}>${p?"✅ 出戰":"裝備"}</button></div>`}).join(""),u=[];this.inventory.firstSeaGem&&u.push(`<div class="item">
        <span>🔱 第一海寶石 <span class="muted">(傳送至第一海・曙光嶼)</span></span>
        <button data-sea="1">使用</button>
      </div>`),this.inventory.secondSeaGem&&u.push(`<div class="item">
        <span>🌐 第二海寶石 <span class="muted">(傳送至第二海・港口鎮)</span></span>
        <button data-sea="2">使用</button>
      </div>`);const h=this.equipment.owned.map(f=>{const _=Lc(f);if(!_)return"";const x=this.equipment.slotOf(f);return`<div class="item">
          <span>${x?"✅ ":""}${_.name} <span class="muted">(${_.desc})</span></span>
          ${x?`<button data-unequip="${x}">卸下</button>`:`<button data-equip="${f}">裝備</button>`}
        </div>`}).join("");this.root.innerHTML=`
      <h3>背包</h3>
      <div class="section">
        <div class="muted">Lv.${e.level}｜EXP ${e.exp} / ${e.expToNext()}｜可分配點數 ${e.points}<br/>
        攻擊 ${e.atk}｜防禦 ${e.def}｜生命上限 ${e.maxHP}｜靈力上限 ${e.maxMP}</div>
      </div>
      <div class="section">${t}</div>
      ${u.length>0?`<div class="section"><h3>重要道具</h3>${u.join("")}</div>`:""}
      <div class="section"><h3>裝備</h3>${h||'<div class="muted">尚無裝備,去商人圓圓那裡看看吧</div>'}</div>
      <div class="section"><h3>靈紋寶石盤(出戰 ${this.gems.equipped.length}/${sl})</h3>
        <div class="muted" style="margin-bottom:6px;">點「裝備」選擇出戰寶石(只有出戰中的技能與被動才生效);出戰的主動寶石點下方數字 1–6 指定快捷鍵位</div>
        <div class="gems">${o}</div></div>
      <div class="section"><h3>靈樹果實(出戰 ${this.fruits.equipped.length}/${il})</h3><div class="gems">${l}</div></div>
      <div class="section alloc"><h3>能力點分配</h3>${n}</div>
      <div class="section"><h3>傳送</h3>${this.renderTeleport()}</div>
      <div class="muted">按 Tab 關閉</div>
    `,this.root.querySelectorAll("button[data-use]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.use;this.onUseCrystal(_,Number(f.dataset.count)),this.render()})}),this.root.querySelectorAll("button[data-sea]").forEach(f=>{f.addEventListener("click",()=>{this.onUseSeaGem(Number(f.dataset.sea)===2?2:1)})}),(d=this.root.querySelector("button[data-tp-open]"))==null||d.addEventListener("click",()=>{this.teleportOpen=!this.teleportOpen,this.render()}),this.root.querySelectorAll("button[data-tp]").forEach(f=>{f.addEventListener("click",()=>{this.onTeleportShrine(f.dataset.tp)})}),this.root.querySelectorAll("button[data-alloc]").forEach(f=>{f.addEventListener("click",()=>{this.onAllocate(f.dataset.alloc),this.render()})}),this.root.querySelectorAll("button[data-equip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.equip(f.dataset.equip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{this.equipment.unequip(f.dataset.unequip),this.onEquipChange(),this.render()})}),this.root.querySelectorAll("button[data-gemtoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.gemtoggle;this.gems.isEquipped(_)?this.gems.unequip(_):this.gems.equip(_),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-bind]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.bind,x=Number(f.dataset.slot);this.gems.assignSlot(_,x),this.onLoadoutChange(),this.render()})}),this.root.querySelectorAll("button[data-fruittoggle]").forEach(f=>{f.addEventListener("click",()=>{const _=f.dataset.fruittoggle;this.fruits.isEquipped(_)?this.fruits.unequip(_):this.fruits.equip(_),this.onLoadoutChange(),this.render()})})}renderTeleport(){if(!this.teleportOpen)return`<div class="item">
        <span class="muted">傳送到已設置的重生點</span>
        <button data-tp-open>選擇傳送點</button>
      </div>`;const e=this.getShrineTargets();return`${e.length>0?e.map(n=>`<div class="item">
                <span>🗿 【${n.island}】重生點</span>
                <button data-tp="${n.id}">傳送</button>
              </div>`).join(""):'<div class="muted">尚未設置重生點(靠近島上的石碑按 F 設置)</div>'}<div class="item"><span></span><button data-tp-open>收合</button></div>`}}const wb=`
#dialog { position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%); width: min(620px, 86vw); background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 14px 20px 12px; display: none; z-index: 20; }
#dialog.show { display: block; }
#dialog .name { display: inline-block; background: #3a6fd8; border-radius: 6px; padding: 2px 10px; font-size: 13px; margin-bottom: 8px; }
#dialog .text { font-size: 16px; line-height: 1.7; min-height: 3em; }
#dialog .next { text-align: right; font-size: 12px; opacity: 0.7; }
`;class Sb{constructor(){E(this,"root");E(this,"nameEl");E(this,"textEl");E(this,"lines",[]);E(this,"index",0);E(this,"visible",!1);const e=document.createElement("style");e.textContent=wb,document.head.appendChild(e),this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="name"></div>
      <div class="text"></div>
      <div class="next">F 或點擊 繼續 ▸</div>
    `,document.body.appendChild(this.root),this.nameEl=this.root.querySelector(".name"),this.textEl=this.root.querySelector(".text"),this.root.addEventListener("click",()=>this.advance())}get isOpen(){return this.visible}open(e,t){t.length!==0&&(this.lines=t,this.index=0,this.visible=!0,this.nameEl.textContent=e,this.textEl.textContent=t[0],this.root.classList.add("show"))}advance(){if(this.visible){if(this.index++,this.index>=this.lines.length){this.close();return}this.textEl.textContent=this.lines[this.index]}}close(){this.visible=!1,this.root.classList.remove("show")}}const Tb=`
#shop { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; max-height: 86vh; overflow-y: auto; background: rgba(10, 26, 42, 0.94); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#shop.show { display: block; }
#shop h3 { margin: 0 0 4px; font-size: 18px; }
#shop .coins { font-size: 13px; opacity: 0.85; margin-bottom: 12px; }
#shop .item { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
#shop .item .desc { display: block; font-size: 12px; opacity: 0.65; }
#shop button { border: none; border-radius: 6px; padding: 5px 14px; cursor: pointer; background: #3a6fd8; color: #fff; font-size: 13px; }
#shop button:disabled { background: #44546a; cursor: default; opacity: 0.6; }
#shop .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Tu=[{id:"potion",name:"回復藥水",desc:"+50 HP(按 R 使用)",price:30},{id:"small",name:"小型經驗結晶",desc:"10 EXP",price:30},{id:"medium",name:"中型經驗結晶",desc:"50 EXP",price:120}];class Eb{constructor(e,t,n){E(this,"root");E(this,"visible",!1);this.inventory=e,this.equipment=t,this.onBuy=n;const i=document.createElement("style");i.textContent=Tb,document.head.appendChild(i),this.root=document.createElement("div"),this.root.id="shop",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const e=Tu.map(n=>{const i=this.inventory.coins>=n.price;return`<div class="item">
        <span>${n.name} <span class="desc">${n.desc}</span></span>
        <button data-buy="${n.id}" ${i?"":"disabled"}>🪙 ${n.price}</button>
      </div>`}).join(""),t=Pc.filter(n=>!this.equipment.has(n.id)).map(n=>`<div class="item">
          <span>${n.name} <span class="desc">${n.desc}</span></span>
          <button data-buyequip="${n.id}" ${this.inventory.coins>=n.price?"":"disabled"}>🪙 ${n.price}</button>
        </div>`).join("");this.root.innerHTML=`
      <h3>商人圓圓的雜貨攤</h3>
      <div class="coins">持有 🪙 ${this.inventory.coins}｜🧪 ${this.inventory.potions}</div>
      ${e}
      <h3 style="margin-top:14px;">裝備</h3>
      ${t||'<div class="muted">裝備都被你買光啦!</div>'}
      <div class="muted">按 F 關閉(買到的裝備在背包 Tab 穿戴)</div>
    `,this.root.querySelectorAll("button[data-buy]").forEach(n=>{n.addEventListener("click",()=>{const i=Tu.find(s=>s.id===n.dataset.buy);!i||this.inventory.coins<i.price||(this.inventory.coins-=i.price,i.id==="potion"?this.inventory.potions++:this.inventory.crystals[i.id]++,this.onBuy(),this.render())})}),this.root.querySelectorAll("button[data-buyequip]").forEach(n=>{n.addEventListener("click",()=>{const i=Pc.find(s=>s.id===n.dataset.buyequip);!i||this.equipment.has(i.id)||this.inventory.coins<i.price||(this.inventory.coins-=i.price,this.equipment.owned.push(i.id),this.onBuy(),this.render())})})}}const Ab=`
#forge { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 380px; background: rgba(26, 16, 10, 0.95); border: 1px solid rgba(255,170,80,0.3); border-radius: 14px; color: #fff; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; padding: 18px 20px; display: none; z-index: 10; }
#forge.show { display: block; }
#forge h3 { margin: 0 0 4px; font-size: 18px; color: #ffb060; }
#forge .info { font-size: 14px; line-height: 1.8; margin-bottom: 12px; }
#forge button { border: none; border-radius: 6px; padding: 8px 20px; cursor: pointer; background: #c8642c; color: #fff; font-size: 14px; }
#forge button:disabled { background: #5a4438; cursor: default; opacity: 0.6; }
#forge .muted { opacity: 0.7; font-size: 12px; margin-top: 10px; }
`,Eu=[100,250,500,800,1200];class Rb{constructor(e,t,n,i,s,o,a){E(this,"root");E(this,"visible",!1);this.inventory=e,this.stats=t,this.gems=n,this.fruits=i,this.onUpgrade=s,this.onGemUpgrade=o,this.onFruitUpgrade=a;const c=document.createElement("style");c.textContent=Ab,document.head.appendChild(c),this.root=document.createElement("div"),this.root.id="forge",document.body.appendChild(this.root)}get isOpen(){return this.visible}open(){this.visible=!0,this.root.classList.add("show"),this.render()}close(){this.visible=!1,this.root.classList.remove("show")}render(){const e=this.stats.weaponLevel,t=e>=Eu.length,n=t?0:Eu[e],s=[["flame","🔥 焰心石(火焰斬威力)",this.gems.flameOwned],["wind","🌪️ 風語石(滑翔/三段跳)",this.gems.windOwned],["earth","🪨 地殼石(地震波威力與範圍)",this.gems.earthOwned],["frost","❄️ 霜語晶(冰箭威力與凍結時間)",this.gems.frostOwned],["void","🌀 虛空石(瞬移距離)",this.gems.voidOwned],["lava","🌋 溶岩石(熔岩噴發威力與灼燒)",this.gems.lavaOwned],["aqua","💧 碧波石(碧波震盪威力與凍結)",this.gems.aquaOwned],["life","🌿 翠生石(生命汲取威力與吸血)",this.gems.lifeOwned]].filter(([,,l])=>l).map(([l,u])=>{const h=this.gems.levels[l],d=h>=bu,f=d?0:Mu[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${u} Lv.${h}</span>
          <button data-gemup="${l}" ${d||this.inventory.coins<f?"disabled":""}>
            ${d?"已滿階":`升階(🪙 ${f})`}
          </button>
        </div>`}).join(""),a=[["thunder","⚡ 雷光果(連鎖閃電威力與跳數)",this.fruits.thunderOwned],["gravity","🌀 引力果(漩渦威力與範圍)",this.fruits.gravityOwned]].filter(([,,l])=>l).map(([l,u])=>{const h=this.fruits.levels[l],d=h>=hu,f=d?0:lu[h-1];return`<div class="info" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span>${u} Lv.${h}</span>
          <button data-fruitup="${l}" ${d||this.inventory.coins<f?"disabled":""}>
            ${d?"已滿階":`升階(🪙 ${f})`}
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
    `;const c=this.root.querySelector("#forge-btn");c==null||c.addEventListener("click",()=>{t||this.inventory.coins<n||(this.inventory.coins-=n,this.stats.weaponLevel++,this.onUpgrade(),this.render())}),this.root.querySelectorAll("button[data-gemup]").forEach(l=>{l.addEventListener("click",()=>{const u=l.dataset.gemup,h=this.gems.levels[u];if(h>=bu)return;const d=Mu[h-1];this.inventory.coins<d||(this.inventory.coins-=d,this.gems.levels[u]++,this.onGemUpgrade(u),this.render())})}),this.root.querySelectorAll("button[data-fruitup]").forEach(l=>{l.addEventListener("click",()=>{const u=l.dataset.fruitup,h=this.fruits.levels[u];if(h>=hu)return;const d=lu[h-1];this.inventory.coins<d||(this.inventory.coins-=d,this.fruits.levels[u]++,this.onFruitUpgrade(u),this.render())})})}}const Id="archipelago-settings-v1",La={volume:1,music:!0,deathDrop:!0};function Da(){var t;const r=new URLSearchParams(location.search),e=(t=r.get("room"))==null?void 0:t.trim();return e||(r.has("mp")?"lobby":null)}function Na(r){return`${location.origin}${location.pathname}?room=${encodeURIComponent(r)}`}function Cb(){return Math.random().toString(36).slice(2,8)}function Ib(){try{const r=localStorage.getItem(Id);return r?{...La,...JSON.parse(r)}:{...La}}catch{return{...La}}}const Pb=`
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
`;class Lb{constructor(e){E(this,"settings");E(this,"root");E(this,"visible",!1);this.audio=e,this.settings=Ib();const t=document.createElement("style");t.textContent=Pb,document.head.appendChild(t),this.root=document.createElement("div"),this.root.id="settings",document.body.appendChild(this.root),this.render(),this.apply()}get isOpen(){return this.visible}toggle(){this.visible=!this.visible,this.root.classList.toggle("show",this.visible)}close(){this.visible=!1,this.root.classList.remove("show")}apply(){this.audio.setVolume(this.settings.volume),this.audio.setMusicEnabled(this.settings.music)}persist(){try{localStorage.setItem(Id,JSON.stringify(this.settings))}catch{}}render(){var e,t,n,i;this.root.innerHTML=`
      <h3>設定</h3>
      <div class="row"><span>主音量</span><input id="set-vol" type="range" min="0" max="100" value="${Math.round(this.settings.volume*100)}" /></div>
      <div class="row"><span>背景音樂</span><input id="set-music" type="checkbox" ${this.settings.music?"checked":""} /></div>
      <div class="row"><span>死亡掉落結晶</span><input id="set-drop" type="checkbox" ${this.settings.deathDrop?"checked":""} /></div>
      <hr />
      ${this.multiplayerSection()}
      <button class="danger" id="set-reset">重置存檔(從頭開始)</button>
      <div class="muted">按 ESC 關閉</div>
    `,this.wireMultiplayer(),(e=this.root.querySelector("#set-vol"))==null||e.addEventListener("input",s=>{this.settings.volume=Number(s.target.value)/100,this.apply(),this.persist()}),(t=this.root.querySelector("#set-music"))==null||t.addEventListener("change",s=>{this.settings.music=s.target.checked,this.apply(),this.persist()}),(n=this.root.querySelector("#set-drop"))==null||n.addEventListener("change",s=>{this.settings.deathDrop=s.target.checked,this.persist()}),(i=this.root.querySelector("#set-reset"))==null||i.addEventListener("click",()=>{confirm("確定要刪除存檔、從頭開始嗎?")&&(localStorage.removeItem("archipelago-save-v1"),location.reload())})}multiplayerSection(){const e=Da();return e?`
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
      `}wireMultiplayer(){var n,i,s,o,a;const e=c=>{const l=c.trim();l&&(location.href=Na(l))},t=this.root.querySelector("#set-mp-code");t==null||t.addEventListener("keydown",c=>{c.stopPropagation(),c.key==="Enter"&&e(t.value)}),(n=this.root.querySelector("#set-mp-join"))==null||n.addEventListener("click",()=>{t&&e(t.value)}),(i=this.root.querySelector("#set-mp-create"))==null||i.addEventListener("click",()=>{location.href=Na(Cb())}),(s=this.root.querySelector("#set-mp-leave"))==null||s.addEventListener("click",()=>{location.href=location.pathname}),(o=this.root.querySelector("#set-mp-copy-code"))==null||o.addEventListener("click",async()=>{const c=Da();if(!c)return;const l=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(c),l&&(l.textContent="已複製邀請碼!")}catch{l&&(l.textContent=`邀請碼:${c}`)}}),(a=this.root.querySelector("#set-mp-copy"))==null||a.addEventListener("click",async()=>{const c=Da();if(!c)return;const l=Na(c),u=this.root.querySelector("#set-mp-hint");try{await navigator.clipboard.writeText(l),u&&(u.textContent="已複製邀請連結!")}catch{u&&(u.textContent=l)}})}}const Db=`
.float-dmg { position: fixed; pointer-events: none; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; font-weight: 800; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.7); transform: translate(-50%, -50%); z-index: 6; }
#pickup-feed { position: fixed; top: 30%; left: 50%; transform: translateX(-50%); pointer-events: none; text-align: center; z-index: 6; font-family: "PingFang TC", "Microsoft JhengHei", sans-serif; }
#pickup-feed div { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 2px 5px rgba(0,0,0,0.7); margin-top: 4px; opacity: 0; animation: feed-in 1.6s ease-out forwards; }
@keyframes feed-in { 0% { opacity: 0; transform: translateY(8px); } 12% { opacity: 1; transform: translateY(0); } 75% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }
`,Nb=.9;class Ub{constructor(){E(this,"totalSpawned",0);E(this,"items",[]);const e=document.createElement("style");e.textContent=Db,document.head.appendChild(e)}spawn(e,t,n){const i=document.createElement("div");i.className="float-dmg",i.textContent=t,i.style.color=n,document.body.appendChild(i),this.items.push({el:i,pos:e.clone(),life:Nb}),this.totalSpawned++}update(e,t){this.items=this.items.filter(n=>{if(n.life-=e,n.life<=0)return n.el.remove(),!1;n.pos.y+=e*1.6;const i=n.pos.clone().project(t);return i.z>1?(n.el.style.display="none",!0):(n.el.style.display="block",n.el.style.left=`${(i.x*.5+.5)*window.innerWidth}px`,n.el.style.top=`${(-i.y*.5+.5)*window.innerHeight}px`,n.el.style.opacity=String(Math.min(n.life/.35,1)),!0)})}}class Ob{constructor(){E(this,"totalSpawned",0);E(this,"root");this.root=document.createElement("div"),this.root.id="pickup-feed",document.body.appendChild(this.root)}push(e){var n;const t=document.createElement("div");for(t.textContent=e,this.root.appendChild(t),this.totalSpawned++,setTimeout(()=>t.remove(),1700);this.root.children.length>5;)(n=this.root.firstChild)==null||n.remove()}}const Fb=8,kb=9e3,Au=200;function Bb(r){return"#"+r.toString(16).padStart(6,"0")}class zb{constructor(e){E(this,"log");E(this,"input");E(this,"isTyping",!1);this.onSend=e;const t=document.createElement("style");t.textContent=`
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
    `,document.head.appendChild(t);const n=document.createElement("div");n.id="chat",n.innerHTML=`<div id="chat-log"></div><input id="chat-input" maxlength="${Au}" placeholder="輸入訊息…Enter 送出、Esc 取消" />`,document.body.appendChild(n),this.log=n.querySelector("#chat-log"),this.input=n.querySelector("#chat-input"),this.input.addEventListener("keydown",i=>{if(i.stopPropagation(),i.key==="Enter"){const s=this.input.value.trim().slice(0,Au);s&&this.onSend(s),this.stopTyping()}else i.key==="Escape"&&this.stopTyping()})}startTyping(){this.isTyping=!0,this.input.classList.add("show"),this.input.value="",this.input.focus()}stopTyping(){this.isTyping=!1,this.input.classList.remove("show"),this.input.value="",this.input.blur()}push(e,t,n){var a;const i=document.createElement("div");i.className="line";const s=document.createElement("span");s.className="who",s.style.color=Bb(n),s.textContent=e;const o=document.createElement("span");for(o.textContent=t,i.append(s,o),this.log.appendChild(i);this.log.childElementCount>Fb;)(a=this.log.firstElementChild)==null||a.remove();setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),600)},kb)}}const Hb=4;class Gb{constructor(e,t){E(this,"mesh");E(this,"respawnT",0);E(this,"bobPhase",Math.random()*Math.PI*2);this.mesh=new rt;const n=new $(new Xt(1.2,.7,.85),we(9067056));n.position.y=.35;const i=new $(new Lt(.45,.45,1.2,10,1,!1,0,Math.PI),we(10119738));i.rotation.z=Math.PI/2,i.position.y=.72;const s=new $(new Xt(1.26,.16,.9),we(15777856));s.position.y=.45;const o=new $(new $n(.18),new Bt({color:16769152}));o.position.y=1.25,this.mesh.add(n,i,s,o),mi(this.mesh),this.place(e,t)}get active(){return this.mesh.visible}place(e,t){this.mesh.position.set(e,0,t),this.mesh.visible=!0,this.respawnT=0}collect(){this.mesh.visible=!1,this.respawnT=60}update(e,t,n){if(!this.active||(this.bobPhase+=e*1.4,this.mesh.position.y=Math.sin(this.bobPhase)*.15,this.mesh.rotation.z=Math.sin(this.bobPhase*.8)*.08,this.mesh.rotation.y+=e*.2,!n))return!1;const i=t.x-this.mesh.position.x,s=t.z-this.mesh.position.z;return Math.hypot(i,s)<Hb}}const Vb=3.5,po=2,Wb=[{id:"dawn",island:"曙光嶼",x:-9,z:-44,boat:{x:4,z:-63}},{id:"verdant",island:"翠風林島",x:150,z:64,boat:{x:150,z:48}},{id:"ember",island:"燼岩火山島",x:-143,z:74,boat:{x:-150,z:62}},{id:"frost",island:"霜雪峰島",x:60,z:-210,boat:{x:60,z:-230}},{id:"void",island:"虛空之心",x:0,z:278,boat:{x:0,z:264}},{id:"port",island:"港口鎮",x:1988,z:14,boat:{x:2006,z:-58}},{id:"desert",island:"熔砂島",x:2178,z:130,boat:{x:2200,z:98}},{id:"coral",island:"珊瑚礁島",x:1812,z:-92,boat:{x:1790,z:-54}},{id:"spring",island:"靈脈島",x:2142,z:-162,boat:{x:2120,z:-124}},{id:"marsh",island:"迷霧沼島",x:1758,z:142,boat:{x:1740,z:222}},{id:"brine",island:"鹽晶島",x:1962,z:268,boat:{x:1980,z:312}},{id:"solar",island:"烈陽礁",x:2278,z:-22,boat:{x:2260,z:28}}];class qb{constructor(e){E(this,"mesh");E(this,"active",!1);E(this,"crystalGroup");E(this,"crystalMat");E(this,"ring");E(this,"phase",Math.random()*Math.PI*2);this.def=e,this.mesh=new rt;const t=new rt,n=new $(new Lt(1.1,1.4,.5,8),we(8028820));n.position.y=.25;const i=new $(new Lt(.35,.5,2.2,8),we(9081508));i.position.y=1.6,t.add(n,i),this.crystalMat=we(6978186);const s=new $(new $n(.45),this.crystalMat);this.crystalGroup=new rt,this.crystalGroup.add(s),this.crystalGroup.position.y=3.2,t.add(this.crystalGroup),mi(t),t.traverse(o=>{o instanceof $&&(o.castShadow=!0)}),this.mesh.add(t),this.ring=new $(new Er(1.5,1.9,28),new Bt({color:8382696,transparent:!0,opacity:.55,side:Kt})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.06,this.ring.visible=!1,this.mesh.add(this.ring),this.mesh.position.set(e.x,ft(e.x,e.z),e.z)}setActive(e){this.active=e,this.ring.visible=e,e?(this.crystalMat.color.setHex(8382696),this.crystalMat.emissive.setHex(4909288),this.crystalMat.emissiveIntensity=1.2):(this.crystalMat.color.setHex(6978186),this.crystalMat.emissive.setHex(0),this.crystalMat.emissiveIntensity=1)}update(e,t){this.phase+=e,this.crystalGroup.rotation.y+=e*(this.active?2.2:.6),this.crystalGroup.position.y=3.2+Math.sin(this.phase*1.8)*.12,this.active&&(this.crystalMat.emissiveIntensity=1+Math.sin(this.phase*4)*.4);const n=t.x-this.mesh.position.x,i=t.z-this.mesh.position.z;return Math.hypot(n,i)<Vb}}const Xb=.3;function jb(){var st,vt,Ct;const r=document.getElementById("app");if(!r)throw new Error("找不到 #app 容器");const e=new Hx({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Cu,r.appendChild(e.domElement);const t=new mp;t.background=new fe(8900331),t.fog=new Wc(8900331,150,650);const n=new hn(60,window.innerWidth/window.innerHeight,.1,1e3),i=new Wx,s=()=>i.unlock();window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0});const o=new Lb(i),a=new ud(16774368,2.6);a.position.set(60,100,40),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-80,a.shadow.camera.right=80,a.shadow.camera.top=80,a.shadow.camera.bottom=-80,a.shadow.camera.far=250,a.shadow.bias=-8e-4;const c=new Op(12574719,15258784,.7),l=new Gp(16777215,.35);t.add(a,a.target,c,l);const u=new sv(t,a,c,l),h=new jx(t),d=new Ub,f=new Ob;let _=0;const x=Jx();x.position.set(75,0,55),t.add(x,xy());const m=new Sy;t.add(m.mesh);let p=!1;const v=new $(new Sr(1.5,20),new Bt({color:13626111,transparent:!0,opacity:.75}));v.rotation.x=-Math.PI/2,v.visible=!1,t.add(v);function w(){for(let C=0;C<100;C++){const F=-210+Math.random()*440,D=-240+Math.random()*580;if(Sd(F,D)&&!Di.some(oe=>Math.hypot(F-oe.x,D-oe.z)<oe.r+12)&&!(Math.hypot(F-An.x,D-An.z)<An.r+8))return{x:F,z:D}}return{x:-100,z:-40}}const y=[];for(let C=0;C<6;C++){const F=w(),D=new Gb(F.x,F.z);y.push(D),t.add(D.mesh)}function R(C,F){let D=Di[0],oe=1/0;for(const St of Di){const Nt=Math.hypot(C-St.x,F-St.z);Nt<oe&&(oe=Nt,D=St)}const me=Math.max(Math.hypot(C-D.x,F-D.z),.001),Ge=(D.r-8)/me;return{x:D.x+(C-D.x)*Ge,z:D.z+(F-D.z)*Ge}}const A=new Gx(e.domElement),g=new Yy;t.add(g.mesh);const L=new Map;let S=!1;const M=new FM({onState(C,F){let D=L.get(C);D?D.setState(F):(D=new qM(C,F),L.set(C,D),t.add(D.mesh),Q.setOnline(M.connected,L.size,M.room))},onLeave(C){const F=L.get(C);F&&(F.dispose(),L.delete(C),Q.setOnline(M.connected,L.size,M.room))},onStatus(C){if(!C){for(const F of L.values())F.dispose();L.clear()}Q.setOnline(C,L.size,M.room)},onReconnecting(C){Q.setReconnecting(C,M.room)},onHostChange(C){if(C&&!S)for(const F of Ce)F.becomeAuthoritative();S=C},onEnemies(C){be(C)},onHit(C,F,D){Le(C,F,D)},onKill(C,F){const D=Ce[C];F===M.localId&&D&&he(D)},onPlayerDamage(C,F,D,oe,me,Ge){Ye(C,F,D,oe,me,Ge)},onCc(C,F,D,oe){Ie(C,F,D,oe)},onChat(C,F){G.push(N(C),F,Rd(C))}}),N=C=>`玩家·${C.slice(-2)}`,G=new zb(C=>{M.sendChat(C),G.push("你",C,10216298)}),H=new URLSearchParams(location.search),Z=(st=H.get("room"))==null?void 0:st.trim(),ie=Z||(H.has("mp")?"lobby":null);ie&&M.connect(ie);let K=0;const ce=g.mesh.position.clone();let Y=0;const xe=C=>Math.round(C*100)/100,Re=7,re=new Iy,Ce=[new Ae("slime",14,-39),new Ae("slime",-14,-40),new Ae("slime",6,-32),new Ae("slime",22,-18),new Ae("slime",-24,-12),new Ae("slime",16,6),new Ae("slime",-14,20),new Ae("slime",36,4),new Ae("slime",-32,16),new Ae("slime",4,40),new Ae("slime",26,30),new Ae("slime",-18,-30),new Ae("elite",0,14),new Ae("elite",-30,-22),new Ae("vine",148,75),new Ae("vine",162,88),new Ae("vine",133,96),new Ae("vine",167,116),new Ae("vine",140,127),new Ae("vine",155,142),new Ae("windGuardian",150,110),new Ae("ember",-148,88),new Ae("ember",-135,100),new Ae("ember",-165,105),new Ae("ember",-138,132),new Ae("ember",-162,138),new Ae("earthGuardian",-150,112),new Ae("frost",78,-162),new Ae("frost",42,-155),new Ae("frost",60,-198),new Ae("frost",85,-180),new Ae("frost",38,-185),new Ae("frostGuardian",60,-170),new Ae("deep",-48,222),new Ae("deep",-30,238),new Ae("deep",-44,242),new Ae("voidGuardian",-40,230),new Ae("voidLord",0,300),new Ae("sand",2180,130),new Ae("sand",2222,134),new Ae("sand",2166,158),new Ae("sand",2234,166),new Ae("sand",2196,190),new Ae("magmaGuardian",2200,144),new Ae("reef",1770,-138),new Ae("reef",1812,-134),new Ae("reef",1756,-110),new Ae("reef",1824,-102),new Ae("reef",1786,-82),new Ae("coralGuardian",1790,-124),new Ae("spore",2100,-208),new Ae("spore",2142,-204),new Ae("spore",2086,-180),new Ae("spore",2154,-172),new Ae("spore",2116,-152),new Ae("lifeGuardian",2120,-194),new Ae("marsh",1722,135),new Ae("marsh",1758,138),new Ae("marsh",1712,160),new Ae("marsh",1768,162),new Ae("marsh",1740,188),new Ae("brine",1962,228),new Ae("brine",1998,230),new Ae("brine",1952,252),new Ae("brine",2008,252),new Ae("brine",1980,278),new Ae("solar",2242,-62),new Ae("solar",2278,-60),new Ae("solar",2232,-38),new Ae("solar",2288,-38),new Ae("solar",2260,-14)];for(const C of Ce)t.add(C.mesh);Ce.forEach((C,F)=>C.netIndex=F);const wt=Ce[12],ne=Ce.find(C=>C.kind==="windGuardian"),pe=Ce.find(C=>C.kind==="earthGuardian"),Ue=Ce.find(C=>C.kind==="frostGuardian"),Te=Ce.find(C=>C.kind==="voidGuardian"),Fe=Ce.find(C=>C.kind==="voidLord"),mt=Ce.find(C=>C.kind==="magmaGuardian"),Ve=Ce.find(C=>C.kind==="coralGuardian"),It=Ce.find(C=>C.kind==="lifeGuardian");let xt=[],nt=[],U=[],Wt=[],it=[],ht=null,Ne=!1,dt=!1,Be=!1,Ke=!1,Ot=!1,P=!1,b=!1,V=!1,ee=!1,se=0,j=!1,Pe=!1,_e=!1;const z=new db,de=new TM,ae=new fb,Se=new Sb,te=new pb,ke=["slime","elite","vine","windGuardian","ember","earthGuardian","frost","frostGuardian","deep","voidGuardian","voidLord"],ge=25,Xe=()=>[z.flameOwned,z.windOwned,z.earthOwned,z.frostOwned,z.tideOwned,z.voidOwned].filter(Boolean).length,O=()=>ke.filter(C=>te.killsOf(C)>0).length,ve=()=>Xe()===6&&O()===ke.length&&g.stats.level>=ge,le=C=>C==="small"?"小型":C==="medium"?"中型":"大型",Me=C=>new oi(C.name,C.x,C.z,C.color,()=>{const F=te.get(C.quest),D=$i[C.quest].target;return F==="done"?C.doneLines:F==="active"&&te.huntProgress(C.quest)>=D?(te.complete(C.quest),re.coins+=C.coins,re.crystals[C.crystalSize]+=C.crystalCount,i.sfx("gem"),Q.showToast(`任務完成:${C.title}!獲得 ${C.coins} 貝拉幣 + ${le(C.crystalSize)}結晶×${C.crystalCount}`),Qe(),[`你把${C.enemyLabel}都清掉了,太厲害了!`,`這是謝禮:${C.coins} 貝拉幣和${le(C.crystalSize)}經驗結晶 ×${C.crystalCount}。`]):F===null?(te.accept(C.quest),Q.showToast(`接受任務:${C.title}(0/${D})`),C.intro):[`還剩 ${D-te.huntProgress(C.quest)} 隻${C.enemyLabel},加油!`,"打完回來找我領賞!"]}),ue=[new oi("村長阿海",2.5,-49.5,9067146,()=>{const C=te.get("gem"),F=te.get("wind"),D=te.get("earth"),oe=te.get("frost"),me=te.get("tide"),Ge=te.get("depth"),St=te.get("final");return St==="done"?re.secondSeaGem?["碎界之夜的陰影散去了……群島又能安心唱歌了。","聽說你已經能往返第二海了——真不愧是引路人!"]:["碎界之夜的陰影散去了……群島又能安心唱歌了。","對了,東南外海浮現了一座「界海之門」。","島上的領航者,能為通過試煉的人開啟第二海之路。去見見她吧!"]:St==="active"&&Pe?(te.complete("final"),re.coins+=1e3,i.sfx("victory"),Q.showToast("任務完成:終焉之戰!獲得 1000 貝拉幣"),Qe(),["你……你打敗虛空魔王了!","碎界之夜再也不會降臨,群島自由了!","這 1000 貝拉幣是全村的心意。謝謝你,英雄!"]):St==="active"?["虛空之心在最北端的暗紫色孤島。","那是碎界之夜的源頭……集齊寶石的你一定辦得到。","去吧,終結這一切!"]:Ge==="done"?(te.accept("final"),Q.showToast("接受任務:終焉之戰"),["虛空石到手,六顆寶石只差最後的審判。","最北端海上的「虛空之心」——碎界之夜的源頭。","【最終任務】擊敗虛空魔王,拯救群島!"]):Ge==="active"&&z.voidOwned?(te.complete("depth"),re.coins+=500,re.crystals.large+=3,i.sfx("gem"),Q.showToast("任務完成:深淵遺跡!獲得 500 貝拉幣 + 大型結晶×3"),Qe(),["虛空石!古城的守護者也被你制伏了……","謝禮:500 貝拉幣和三顆大型經驗結晶。","用技能鍵(數字 1–6)就能短距離瞬移,連虛空的力量都為你所用了。"]):Ge==="active"?["沉沒古城在北方海上,露出水面的斷柱就是入口。","把船開到遺跡中央按 F 潛入——有潮汐石就能在水下呼吸。"]:me==="done"?(te.accept("depth"),Q.showToast("接受任務:深淵遺跡"),["潮汐石會保護你在水下呼吸。","北方海上的沉沒古城——斷裂的石柱群就是標記。","【任務】潛入古城,擊敗虛空守護者,取回「虛空石」!"]):me==="active"&&z.tideOwned?(te.complete("tide"),re.coins+=300,i.sfx("gem"),Q.showToast("任務完成:隱藏海域!獲得 300 貝拉幣"),Qe(),["潮汐石!傳說是真的……","謝禮:300 貝拉幣。","有了它就能潛入北方的沉沒古城了。"]):me==="active"?["西南方的外海,夜裡會有發光的浪。","開船過去靠近,潮汐石就漂在那裡。"]:oe==="done"?(te.accept("tide"),Q.showToast("接受任務:隱藏海域"),["四顆靈紋寶石……碎界之夜的真相越來越近了。","傳說西南方的隱藏海域漂著第五顆寶石「潮汐石」。","【任務】出海尋找發光的海域,取得潮汐石!"]):oe==="active"&&z.frostOwned?(te.complete("frost"),re.coins+=400,re.crystals.large+=2,i.sfx("gem"),Q.showToast("任務完成:霜語之晶!獲得 400 貝拉幣 + 大型結晶×2"),Qe(),["霜語晶!雪怪也敗在你劍下了!","謝禮:400 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)射出冰箭凍結敵人;有霜語晶還能直接走在海面上(會消耗靈力)!"]):oe==="active"?["霜雪峰島在南方海上,全群島最高的山。","山坡又陡又滑,站著不動會往下滑——朝上坡硬走或用翻滾衝刺!","雪怪就在山頂等著你。"]:D==="done"?(te.accept("frost"),Q.showToast("接受任務:霜語之晶"),["三顆靈紋寶石……你就是傳說中的引路人!","南方的霜雪峰島藏著第四顆寶石「霜語晶」。","【任務】登上全群島最高的雪峰,擊敗雪怪!","山坡很滑,小心滑落;多帶些藥水禦寒。"]):D==="active"&&z.earthOwned?(te.complete("earth"),re.coins+=300,re.crystals.large+=2,i.sfx("gem"),Q.showToast("任務完成:地殼之石!獲得 300 貝拉幣 + 大型結晶×2"),Qe(),["地殼石!連大地守護者都不是你的對手!","謝禮:300 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)放出地震波,震飛身邊所有敵人!"]):D==="active"?["燼岩火山島在西北方的海上,小心熔岩!","站在橘紅色的熔岩上會持續受傷,別逗留。","聽說島上有位鍛造大師,可以幫你強化武器。"]:F==="done"?(te.accept("earth"),Q.showToast("接受任務:地殼之石"),["兩顆靈紋寶石……傳說正在你身上應驗。","西北方的燼岩火山島藏著第三顆寶石「地殼石」。","【任務】擊敗火山頂的大地守護者!","提醒:熔岩會持續灼傷,記得多帶藥水;島上的鍛造大師能強化武器。"]):F==="active"&&z.windOwned?(te.complete("wind"),re.coins+=200,re.crystals.large+=1,i.sfx("gem"),Q.showToast("任務完成:翠風之石!獲得 200 貝拉幣 + 大型結晶"),Qe(),["風語石!你連叢林守護者都打贏了!","謝禮:200 貝拉幣和一顆大型經驗結晶。","有了風語石,空中再按一次空白鍵能二段跳,按住可以滑翔!"]):F==="active"?["翠風林島在東北方的海上。","靠近南灘的小船按 F 出海;W 前進、A/D 轉向、F 靠岸。"]:C==="done"?(te.accept("wind"),Q.showToast("接受任務:翠風之石"),["看你身手不錯,有件事想拜託你。","東北方的翠風林島,藏著第二顆靈紋寶石「風語石」。","【任務】搭南灘的小船出海,擊敗叢林深處的守護者!","操作:靠近小船按 F 上船;W 前進、A/D 轉向、F 靠岸。"]):C==="active"&&z.flameOwned?(te.complete("gem"),re.coins+=100,re.crystals.medium+=1,i.sfx("gem"),Q.showToast("任務完成:取回焰心石!獲得 100 貝拉幣 + 中型結晶"),Qe(),["這、這就是焰心石!你辦到了!","說好的謝禮:100 貝拉幣和一顆中型經驗結晶。","裝備焰心石後,用技能列的數字鍵(1–6)就能施放火焰斬,去試試吧!"]):C===null?(te.accept("gem"),Q.showToast("接受任務:取回焰心石"),["年輕人,你醒啦!這裡是曙光嶼的漁村。","主峰上的大橘果凍吞了一顆會發光的石頭……","【任務】打敗牠,把「靈紋寶石」帶回來!","提示:按住左鍵集氣,滿氣放開有衝擊波。"]):["大果凍還在主峰上等著你……","記得打怪撿結晶,Tab 背包裡「使用」變強!"]}),new oi("漁夫小蝦",-4,-48,4881050,()=>{const C=te.get("jelly");return C==="done"?["村子安全多了,謝謝你!","聽說商人圓圓進了新貨,去看看吧。"]:C==="active"&&te.jellyProgress()>=Xi?(te.complete("jelly"),re.coins+=50,re.crystals.small+=2,i.sfx("gem"),Q.showToast("任務完成:果凍清理!獲得 50 貝拉幣 + 小型結晶×2"),Qe(),["哇,你把牠們都清掉了!","這是謝禮:50 貝拉幣和兩顆小型結晶。"]):C===null?(te.accept("jelly"),Q.showToast(`接受任務:果凍清理(0/${Xi})`),["最近果凍怪變多了,漁網都被啃壞……",`【任務】幫我清掉 ${Xi} 隻果凍怪!`,"提示:被圍住時按 Q 舉盾擋正面攻擊。"]):[`還剩 ${Xi-te.jellyProgress()} 隻果凍怪,加油!`,"結晶要在背包(Tab)裡「使用」才會變強喔!"]}),new oi("商人圓圓",7,-46,13142090,()=>[],"shop"),new oi("鍛造大師爐婆",-150,78,9062954,()=>[],"forge"),Me({name:"獵人小藤",x:160,z:66,color:4885050,quest:"vineHunt",title:"藤蔓清剿",enemyLabel:"藤蔓果凍",intro:["這片叢林是我的獵場,但藤蔓果凍越來越多……","【任務】幫我清掉 4 隻藤蔓果凍!","牠們散布在島上各處,小心別被圍住。"],coins:150,crystalSize:"medium",crystalCount:2,doneLines:["獵徑暢通了,謝謝你!","叢林深處的守護者就拜託你了。"]}),Me({name:"礦工岩叔",x:-160,z:76,color:10119738,quest:"emberHunt",title:"餘燼清剿",enemyLabel:"餘燼果凍",intro:["我在挖火山的礦脈,餘燼果凍老是燙壞我的鎬子!","【任務】幫我清掉 4 隻餘燼果凍!","報酬豐厚,但小心別踩進熔岩。"],coins:250,crystalSize:"medium",crystalCount:3,doneLines:["礦脈安全了,挖礦效率翻倍!","有空再來火山島坐坐。"]}),Me({name:"嚮導阿凜",x:74,z:-212,color:6986440,quest:"frostHunt",title:"霜寒清剿",enemyLabel:"霜寒果凍",intro:["山上的霜寒果凍會凍住登山客,太危險了。","【任務】幫我清掉 4 隻霜寒果凍!","牠們會放冰凍攻擊,記得多帶藥水。"],coins:350,crystalSize:"large",crystalCount:1,doneLines:["登山客們安全多了,謝謝你!","山頂的風景值得一看。"]}),Me({name:"觀星者星嵐",x:-6,z:282,color:8018600,quest:"deepHunt",title:"深海清剿",enemyLabel:"深海果凍",intro:["我在這裡觀測碎界之夜的星象……","北方沉沒古城的深海果凍讓潮流變得混亂。","【任務】潛入古城,清掉 3 隻深海果凍!","需要潮汐石才能下潛,小心虛空守護者。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["潮流恢復平靜,星象也清晰了……","碎界之夜的終結,就靠你了。"]}),new oi("領航者汐音",230,-95,4889272,()=>re.secondSeaGem?["海寶石與你同行,界海不再是阻隔。","在背包(Tab)使用海寶石,即可往返兩片海域。","第二海的故事,才正要開始……"]:ve()?(te.get("sea2")===null&&te.accept("sea2"),te.complete("sea2"),re.firstSeaGem=!0,re.secondSeaGem=!0,i.sfx("gem"),f.push("🔱 獲得重要道具【第一海寶石】"),f.push("🌐 獲得重要道具【第二海寶石】"),Q.showToast("獲得海寶石!在背包(Tab)使用即可往返第一、二海"),Qe(),["六顆靈紋寶石、群島眾魔的記憶、足以橫渡界海的修為……","你通過了全部的試煉。收下吧——【第一海寶石】與【第二海寶石】。","在背包中使用它們,海流就會帶你往返兩片海域。","第二海的門戶「港口鎮」,正等著你。"]):(te.get("sea2")===null&&(te.accept("sea2"),Q.showToast("接受任務:跨越界海")),["我是領航者汐音,界海的看守者。","界海之外是第二海——想跨越,須得群島的全部認可:",`・集齊靈紋寶石(${Xe()}/6)`,`・擊敗所有種類的敵人(${O()}/${ke.length} 種)`,`・修煉至 Lv.${ge}(目前 Lv.${g.stats.level})`,"達成之後,再回來找我。"])),new oi("鎮長波叔",ci.x,ci.z-36,13148234,()=>{const C=te.get("lava");return C==="done"?["熔砂島的熱浪,連海風都燙得發顫……","有了溶岩石,你連腳下的岩漿都能驅使了。","想回第一海?在背包使用【第一海寶石】就行。"]:C==="active"&&z.lavaOwned?(te.complete("lava"),re.coins+=600,re.crystals.large+=2,i.sfx("gem"),Q.showToast("任務完成:熔砂的試煉!獲得 600 貝拉幣 + 大型結晶×2"),Qe(),["溶岩石!你真的從熔岩守護者手裡奪回來了……","謝禮:600 貝拉幣和兩顆大型經驗結晶。","按 G 就能向前噴出岩漿,還會點燃敵人持續灼燒——小心別自己踩進岩漿。"]):C==="active"?["熔砂島在港口鎮東方的外海,整座島覆著滾燙的熱砂。","島心的熔岩坑盤踞著『熔岩守護者』,溶岩石就在牠身上。","踩到岩漿會被燙傷,留意腳下!"]:(te.accept("lava"),Q.showToast("接受任務:熔砂的試煉"),["歡迎來到第二海的門戶——港口鎮!","能跨越界海的,都是了不起的冒險者。","東方外海有座『熔砂島』,熱砂底下埋著遠古的岩漿。","島心的『熔岩守護者』守著第七顆靈紋寶石——『溶岩石』。","【任務】登上熔砂島,擊敗熔岩守護者,取得溶岩石!","想回第一海?在背包使用【第一海寶石】就行。"])}),new oi("珊瑚祭司娜瑪",1768,-92,3843776,()=>{const C=te.get("aqua");return C==="done"?["礁海重歸寧靜,潮聲又能入眠了……","碧波石在你手中,連海浪都聽你號令。"]:C==="active"&&z.aquaOwned?(te.complete("aqua"),re.coins+=700,re.crystals.large+=2,i.sfx("gem"),Q.showToast("任務完成:礁海的低語!獲得 700 貝拉幣 + 大型結晶×2"),Qe(),["碧波石!你真的制伏了珊瑚守護者……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","用技能鍵(數字 1–6)震盪出碧波,凍結周身所有敵人——危急時的救命符。"]):C==="active"?["珊瑚守護者就盤踞在礁島中心的礁石之上。","牠身上嵌著傳說中的『碧波石』,小心牠的衝撞。"]:(te.accept("aqua"),Q.showToast("接受任務:礁海的低語"),["歡迎來到珊瑚礁島,旅人。我是祭司娜瑪。","這片礁海被『珊瑚守護者』攪得不得安寧……","牠守著一顆『碧波石』——能凝聚潮汐凍結萬物的靈紋寶石。","【任務】擊敗島心的珊瑚守護者,取得碧波石!"])}),new oi("靈脈守林人葉羅",2098,-162,3846240,()=>{const C=te.get("life");return C==="done"?["靈脈的搏動恢復了,林木又開始低聲歌唱。","翠生石與你同在,傷痕都能化作前行的力量。"]:C==="active"&&z.lifeOwned?(te.complete("life"),re.coins+=700,re.crystals.large+=2,i.sfx("gem"),Q.showToast("任務完成:靈脈的搏動!獲得 700 貝拉幣 + 大型結晶×2"),Qe(),["翠生石!靈脈守護者終於肯把它交還大地了……","謝禮:700 貝拉幣和兩顆大型經驗結晶。","按 H 向前汲取生命,傷害敵人的同時還能回復自身——攻守兼備。"]):C==="active"?["靈脈守護者在島心的生命之樹下扎了根。","牠體內的『翠生石』,是這座島搏動的源頭。"]:(te.accept("life"),Q.showToast("接受任務:靈脈的搏動"),["你也感覺到了嗎?這座島像有心跳一樣搏動著。","我是守林人葉羅。靈脈的力量被『靈脈守護者』奪走了……","牠藏著一顆『翠生石』——能將傷害化為生命的靈紋寶石。","【任務】擊敗島心的靈脈守護者,取得翠生石!"])}),Me({name:"拓荒者沙吉",x:2168,z:178,color:13146192,quest:"sandHunt",title:"熱砂清剿",enemyLabel:"熔砂果凍",intro:["這片熱砂地我想開墾,可熔砂果凍多到沒法下鏟。","【任務】幫我清掉 4 隻熔砂果凍!","牠們耐熱又兇,小心腳下的岩漿坑。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["熱砂地總算能開墾了,謝謝你!","島心的熔岩守護者就交給你了。"]}),Me({name:"潛水夫阿蚌",x:1812,z:-130,color:3840696,quest:"reefHunt",title:"礁石清剿",enemyLabel:"礁石果凍",intro:["我靠採珍珠過活,礁石果凍卻把礁區霸佔了。","【任務】幫我清掉 4 隻礁石果凍!","牠們會用水流衝撞,記得適時舉盾。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁區安全了,珍珠又能採了!","祭司娜瑪說的碧波石,值得一試。"]}),Me({name:"採集者藤吉",x:2142,z:-200,color:6989882,quest:"sporeHunt",title:"孢子清剿",enemyLabel:"孢子果凍",intro:["靈脈的草藥很珍貴,但孢子果凍把它們啃光了。","【任務】幫我清掉 4 隻孢子果凍!","牠們行動敏捷,別讓牠們圍住你。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["草藥園恢復生機了,謝謝你!","島心的靈脈守護者,就拜託你了。"]}),Me({name:"沼澤嚮導苔翁",x:1740,z:142,color:4880986,quest:"marshHunt",title:"沼氣清剿",enemyLabel:"沼氣果凍",intro:["霧裡那些沼氣果凍,吐的毒霧連我都迷了路。","【任務】幫我清掉 4 隻沼氣果凍!","牠們藏在霧裡,靠近了再出手。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["霧散了些,我又能帶路了,謝謝!","這片沼地總算安寧了。"]}),Me({name:"鹽工鹵伯",x:1980,z:232,color:10139840,quest:"brineHunt",title:"鹽晶清剿",enemyLabel:"鹽晶果凍",intro:["鹽田被鹽晶果凍佔了,結的鹽都帶著怪味。","【任務】幫我清掉 4 隻鹽晶果凍!","牠們殼硬,多砍幾刀準沒錯。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["鹽田能開工了,這下有好鹽了!","改天送你一袋雪鹽。"]}),Me({name:"拾光人焰娃",x:2260,z:-22,color:14719032,quest:"solarHunt",title:"熾光清剿",enemyLabel:"熾光果凍",intro:["礁上的熾光果凍燙得發亮,曬鹽曬果都得繞著走。","【任務】幫我清掉 4 隻熾光果凍!","牠們動作快,小心被撲到。"],coins:500,crystalSize:"large",crystalCount:2,doneLines:["礁石涼下來了,可以好好拾光啦!","謝謝你,旅人。"]})];for(const C of ue)t.add(C.mesh);const J=Wb.map(C=>new qb(C));for(const C of J)t.add(C.mesh);const Ee=[],je=C=>{const F=J.find(D=>D.def.id===C);return F?hi(F.def.x):1},At=C=>{const F=hi(C.def.x),D=Ee.filter(me=>je(me)===F);let oe=`(本海 ${Math.min(D.length+1,po)}/${po})`;if(D.length>=po){const me=D[0];Ee.splice(Ee.indexOf(me),1);const Ge=J.find(St=>St.def.id===me);Ge&&(Ge.setActive(!1),oe=`(已替換本海【${Ge.def.island}】)`)}Ee.push(C.def.id),C.setActive(!0),i.sfx("shrine"),h.burst(C.mesh.position.clone().setY(C.mesh.position.y+3),8382696,14,6),Q.showToast(`重生點已設置:【${C.def.island}】${oe}`),Qe()},Q=new xb(C=>{const F=J.find(oe=>oe.active&&oe.def.id===C),D=F?`【${F.def.island}】重生點`:"海灘";if(o.settings.deathDrop){for(const oe of Object.keys(re.crystals))re.crystals[oe]-=Math.floor(re.crystals[oe]*Xb);Q.showToast(`你在${D}醒來,遺失了部分未使用的結晶……`)}else Q.showToast(`你在${D}醒來……(死亡掉落已關閉)`);if(g.respawn(),F){const{x:oe,z:me}=F.def;g.mesh.position.set(oe,ft(oe,me+2),me+2),m.place(F.def.boat.x,F.def.boat.z)}else m.resetToDock();p=!1,j&&k(!1),Q.setDead(!1)}),fn=new yb;let bn=null;const Jn=()=>{const C=[],F=hi(g.mesh.position.x);for(const D of Ee){if(je(D)!==F)continue;const oe=J.find(me=>me.def.id===D);oe&&C.push({id:D,label:`在【${oe.def.island}】重生點重生`})}Q.setDead(!0,C)},qs=()=>{g.stats.equip=ae.totalBonus(),g.hp=Math.min(g.hp,g.stats.maxHP),g.mp=Math.min(g.mp,g.stats.maxMP)},Ln=()=>{g.hasWindGem=z.isEquipped("wind"),g.hasFrostGem=z.isEquipped("frost"),g.windLevel=z.levels.wind},gn=C=>{z.hasFreeSlot()&&z.equip(C),Ln()},Xs=C=>{de.hasFreeSlot()&&de.equip(C)},Cr=()=>{Ln(),Q.setGems(z),Q.setFruits(de),i.sfx("ui"),Qe()},_n=new bb(re,g.stats,z,de,ae,(C,F)=>{const D=re.useCrystals(C,F);if(D<=0)return;const oe=g.stats.addExp(D);oe>0?(g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,i.sfx("levelup"),Q.showToast(`升級!Lv.${g.stats.level},獲得 ${oe*3} 點能力點數`),Qe()):(i.sfx("crystal"),Q.showToast(`注入 ${D} EXP`))},C=>{g.stats.allocate(C),Qe()},()=>{qs(),i.sfx("ui"),Qe()},C=>ts(C),()=>Ee.filter(C=>je(C)===hi(g.mesh.position.x)).map(C=>{var F;return{id:C,island:((F=J.find(D=>D.def.id===C))==null?void 0:F.def.island)??C}}),C=>Ir(C),Cr);function Ir(C){const F=J.find(me=>me.active&&me.def.id===C);if(!F||g.isDead)return;j&&k(!1),p=!1;const{x:D,z:oe}=F.def;g.mesh.position.set(D,ft(D,oe+2),oe+2),m.place(F.def.boat.x,F.def.boat.z),i.sfx("shrineTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8382696,16,6),Q.showToast(`傳送至【${F.def.island}】重生點`),_n.isOpen&&_n.toggle(),Qe()}function ts(C){if(!g.isDead){if(j&&k(!1),p=!1,C===2){const F=ci.x,D=ci.z-44;g.mesh.position.set(F,ft(F,D),D),m.place(ci.x+2,ci.z-58),Q.showToast("海流湧動……抵達第二海【港口鎮】")}else g.mesh.position.set(2.5,ft(2.5,-52),-52),m.resetToDock(),Q.showToast("海流湧動……回到第一海【曙光嶼】");i.sfx("seaTravel"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8378623,18,7),_n.isOpen&&_n.toggle(),Qe()}}const gi=new Eb(re,ae,()=>{i.sfx("coin"),Qe()}),_i=new Rb(re,g.stats,z,de,()=>{i.sfx("anvil"),Q.showToast(`武器強化成功!攻擊力 ${g.stats.atk}`),Qe()},C=>{i.sfx("anvil"),C==="wind"&&(g.windLevel=z.levels.wind),Q.showToast(`寶石升階成功!(Lv.${z.levels[C]})`),Qe()},C=>{i.sfx("anvil"),Q.showToast(`果實升階成功!(Lv.${de.levels[C]})`),Qe()}),Bo=()=>({v:1,level:g.stats.level,exp:g.stats.exp,points:g.stats.points,attrs:{...g.stats.attrs},coins:re.coins,crystals:{...re.crystals},flameOwned:z.flameOwned,pos:[g.mesh.position.x,g.mesh.position.z],potions:re.potions,quests:te.serialize(),windOwned:z.windOwned,boatPos:[m.mesh.position.x,m.mesh.position.z],sailing:p,earthOwned:z.earthOwned,weaponLevel:g.stats.weaponLevel,frostOwned:z.frostOwned,tideOwned:z.tideOwned,voidOwned:z.voidOwned,voidDefeated:Pe,gemLevels:{...z.levels},equipment:ae.serialize(),shrines:[...Ee],seaGems:{first:re.firstSeaGem,second:re.secondSeaGem},lavaOwned:z.lavaOwned,aquaOwned:z.aquaOwned,lifeOwned:z.lifeOwned,fruits:{thunderOwned:de.thunderOwned,gravityOwned:de.gravityOwned,levels:{...de.levels}},gemsEquipped:[...z.equipped],gemSlots:[...z.slots],fruitsEquipped:[...de.equipped]}),Qe=()=>mb(Bo());setInterval(Qe,12e3);const $e=gb();if($e){g.stats.level=$e.level,g.stats.exp=$e.exp,g.stats.points=$e.points,Object.assign(g.stats.attrs,$e.attrs),re.coins=$e.coins,Object.assign(re.crystals,$e.crystals),re.potions=$e.potions??0,$e.quests&&te.restore($e.quests),z.flameOwned=$e.flameOwned,z.windOwned=$e.windOwned??!1,z.earthOwned=$e.earthOwned??!1,z.frostOwned=$e.frostOwned??!1,z.tideOwned=$e.tideOwned??!1,z.voidOwned=$e.voidOwned??!1,z.lavaOwned=$e.lavaOwned??!1,z.aquaOwned=$e.aquaOwned??!1,z.lifeOwned=$e.lifeOwned??!1,$e.fruits&&(de.thunderOwned=$e.fruits.thunderOwned,de.gravityOwned=$e.fruits.gravityOwned,Object.assign(de.levels,$e.fruits.levels)),z.equipped=($e.gemsEquipped??JM).filter(C=>z.ownedOf(C)).slice(0,sl),z.slots=Array.from({length:Po},(C,F)=>{var oe;const D=((oe=$e.gemSlots)==null?void 0:oe[F])??null;return D&&z.isEquipped(D)&&fr(D)?D:null}),z.ensureSlots(),de.equipped=($e.fruitsEquipped??xM).filter(C=>de.ownedOf(C)).slice(0,il),Pe=$e.voidDefeated??!1,re.firstSeaGem=((vt=$e.seaGems)==null?void 0:vt.first)??!1,re.secondSeaGem=((Ct=$e.seaGems)==null?void 0:Ct.second)??!1,g.stats.weaponLevel=$e.weaponLevel??0,$e.gemLevels&&Object.assign(z.levels,$e.gemLevels),$e.equipment&&ae.restore($e.equipment);for(const C of $e.shrines??[]){const F=J.find(me=>me.def.id===C);if(!F||F.active)continue;const D=hi(F.def.x);Ee.filter(me=>je(me)===D).length<po&&(F.setActive(!0),Ee.push(C))}qs(),Ln(),Q.setGems(z),Q.setFruits(de),g.hp=g.stats.maxHP,g.mp=g.stats.maxMP,g.mesh.position.set($e.pos[0],ft($e.pos[0],$e.pos[1]),$e.pos[1]),$e.boatPos&&m.place($e.boatPos[0],$e.boatPos[1]),$e.sailing&&(p=!0),Q.showToast("讀取存檔完成")}if(!z.tideOwned){const C=new De("gem-tide",zh.x,zh.z);t.add(C.mesh),xt.push(C)}const Pr=()=>{if(Ne||de.gravityOwned)return;Ne=!0;const C=new De("fruit-gravity",Gh.x,Gh.z);t.add(C.mesh),xt.push(C)};Pe&&!de.gravityOwned&&Pr();const js=document.createElement("div");js.style.cssText="position:fixed;inset:0;pointer-events:none;display:none;background:radial-gradient(ellipse at center, rgba(20,80,140,0.25) 0%, rgba(8,40,90,0.55) 100%);z-index:5;",document.body.appendChild(js);const Qn=document.createElement("div");Qn.id="ending",Qn.style.cssText="position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:rgba(8,4,18,0.92);color:#fff;z-index:30;font-family:'PingFang TC','Microsoft JhengHei',sans-serif;text-align:center;",Qn.innerHTML=`
    <div style="font-size:42px;font-weight:700;letter-spacing:8px;">群島之歌</div>
    <div style="font-size:18px;line-height:2;opacity:0.9;">
      虛空魔王倒下,碎界之夜的陰影徹底散去。<br/>
      散落的大陸不再哭泣——六顆靈紋寶石在你手中合鳴,<br/>
      群島的歌聲,將永遠傳唱你的名字。
    </div>
    <div style="font-size:14px;opacity:0.6;">—— 主線完結,感謝遊玩 ——</div>
  `;const T=document.createElement("button");T.textContent="回去找村長阿海領賞",T.style.cssText="font-size:16px;padding:10px 28px;border:none;border-radius:8px;background:#8a4ae8;color:#fff;cursor:pointer;",T.addEventListener("click",()=>{Qn.style.display="none"}),Qn.appendChild(T),document.body.appendChild(Qn);const k=C=>{j=C,g.divingZone=C?An:null,js.style.display=C?"block":"none";const F=t.fog;C?(F.color.setHex(1723002),F.near=20,F.far=110,t.background=new fe(1723002)):(F.color.setHex(8900331),F.near=150,F.far=650,t.background=new fe(8900331))};let W=Math.PI,q=.35,B=11;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});function he(C){const{x:F,z:D}=C.mesh.position,oe=[];C===wt&&!z.flameOwned&&!dt&&(dt=!0,oe.push(new De("gem-flame",F,D))),C===ne&&!z.windOwned&&!Be&&(Be=!0,oe.push(new De("gem-wind",F,D))),C===pe&&!z.earthOwned&&!Ke&&(Ke=!0,oe.push(new De("gem-earth",F,D))),C===Ue&&!z.frostOwned&&!Ot&&(Ot=!0,oe.push(new De("gem-frost",F,D))),C===Te&&!z.voidOwned&&!P&&(P=!0,oe.push(new De("gem-void",F,D))),C===mt&&!z.lavaOwned&&!b&&(b=!0,oe.push(new De("gem-lava",F,D))),C===Ve&&!z.aquaOwned&&!V&&(V=!0,oe.push(new De("gem-aqua",F,D))),C===It&&!z.lifeOwned&&!ee&&(ee=!0,oe.push(new De("gem-life",F,D))),C.kind==="slime"&&te.slimeKills++,te.addKill(C.kind),C.kind==="voidLord"||C.kind==="voidGuardian"?oe.push(new De("large",F,D),new De("large",F,D),new De("coin",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="deep"?oe.push(new De("medium",F,D),new De("medium",F,D),new De("coin",F,D)):C.kind==="frostGuardian"?oe.push(new De("large",F,D),new De("large",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="frost"?oe.push(new De("medium",F,D),new De("coin",F,D)):C.kind==="earthGuardian"?oe.push(new De("large",F,D),new De("medium",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="ember"?oe.push(new De("medium",F,D),new De("coin",F,D)):C.kind==="magmaGuardian"?oe.push(new De("large",F,D),new De("large",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="sand"?oe.push(new De("medium",F,D),new De("coin",F,D)):C.kind==="coralGuardian"?oe.push(new De("large",F,D),new De("large",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="lifeGuardian"?oe.push(new De("large",F,D),new De("large",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="reef"||C.kind==="spore"?oe.push(new De("medium",F,D),new De("coin",F,D)):C.kind==="windGuardian"?oe.push(new De("large",F,D),new De("coin",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="elite"?oe.push(new De("medium",F,D),new De("small",F,D),new De("coin",F,D),new De("coin",F,D)):C.kind==="vine"?oe.push(new De("small",F,D),new De("small",F,D),new De("coin",F,D)):(oe.push(new De("small",F,D),new De("coin",F,D)),Math.random()<.35&&oe.push(new De("small",F,D)));for(const me of oe)t.add(me.mesh),xt.push(me)}function be(C){if(!M.isHost)for(let F=0;F<Ce.length;F++){const D=F*Re;if(D+Re-1>=C.length)break;const oe=Ce[F];if(oe.applyNetSnapshot(C[D],C[D+1],C[D+2],C[D+3],C[D+4]===1,C[D+5],C[D+6])){const Ge=oe.mesh.position;i.sfx("enemyDie"),h.burst(Ge.clone().setY(Ge.y+1),10217627,16)}}}function Le(C,F,D){if(!M.isHost)return;const oe=Ce[C];if(!oe||oe.isDead)return;const me=oe.takeDamage(F),Ge=oe.mesh.position.clone().setY(oe.mesh.position.y+2.4);d.spawn(Ge,`-${Math.round(F)}`,"#ffd27a"),me&&(i.sfx("enemyDie"),h.burst(oe.mesh.position.clone().setY(oe.mesh.position.y+1),10217627,16),M.sendKill(C,D))}function Ie(C,F,D,oe){if(!M.isHost)return;const me=Ce[C];!me||me.isDead||(F==="freeze"?me.freeze(D):F==="burn"?me.burn(D,oe):me.stun(D))}function We(C){let F=g.mesh.position,D=null,oe=g.isDead?1/0:C.distanceToSquared(g.mesh.position);for(const[me,Ge]of L){if(Ge.dead)continue;const St=C.distanceToSquared(Ge.mesh.position);St<oe&&(oe=St,F=Ge.mesh.position,D=me)}return{pos:F,remoteId:D}}function Ye(C,F,D,oe,me,Ge){if(g.isDead)return;const St=new I(F,D,oe),Nt=g.takeDamage(C,St),wn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);Nt.blocked?(d.spawn(wn,`格擋 -${Nt.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):Nt.taken>0&&(d.spawn(wn,`-${Nt.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10),me>0&&g.shove(St,me),Ge==="chill"?g.chill(3):Ge==="burn"&&g.applyBurn(4,Math.max(2,Math.round(C*.15)))),g.isDead&&Jn()}const Oe=new qp;e.setAnimationLoop(()=>{const C=Math.min(Oe.getDelta(),.05),F=Oe.getElapsedTime(),D=h.frozen?0:C,oe=M.connected&&!M.isHost;for(const X of Ce)X.remote=oe;const me=u.update(C,g.mesh.position,j);hi(g.mesh.position.x)===2?x.position.set(ci.x,0,ci.z):x.position.set(75,0,55),Qx(x,F,me.waveScale),i.setRain(me.raining&&!j),me.thunder&&(i.sfx("thunder"),h.shake(.15,.3)),i.setMusicMode(j?"night":p?"sail":me.isNight?"night":"day"),Q.setEnv(`${me.isNight?"🌙":"☀️"}${me.weather==="clear"?"":me.weather==="rain"?" 🌧️":" ⛈️"}`),!G.isTyping&&A.wasPressed("Enter")&&G.startTyping(),A.suspended=G.isTyping,G.isTyping&&A.clearKeys(),A.wasPressed("Tab")&&(i.sfx("ui"),_n.toggle()),A.wasPressed("Escape")&&(i.sfx("ui"),o.toggle()),A.wasPressed("KeyM")&&(i.sfx("ui"),fn.toggle());{const X=bd(g.mesh.position.x,g.mesh.position.z),Ze=(X==null?void 0:X.name)??null;Ze!==bn&&(bn=Ze,Ze&&Q.showIslandTitle(Ze,hi(g.mesh.position.x)===2?"第二海":"第一海")),fn.render(g.mesh.position.x,g.mesh.position.z)}let Ge=null;for(const X of ue)X.update(C,g.mesh.position)&&(Ge=X);let St=null;for(const X of J)X.update(C,g.mesh.position)&&(St=X);const Nt=!p&&!j&&!g.isDead&&g.mesh.position.distanceTo(m.mesh.position)<5,wn=p?m.findLandingSpot():null,Rt=p&&z.isEquipped("tide")&&Math.hypot(m.mesh.position.x-An.x,m.mesh.position.z-An.z)<An.r;if(j?Q.setTalkPrompt(!0,"按 F 浮上水面"):Rt?Q.setTalkPrompt(!0,"按 F 潛入沉沒古城"):p&&wn?Q.setTalkPrompt(!0,"按 F 上岸"):Nt?Q.setTalkPrompt(!0,"按 F 出海"):St&&!St.active&&!p&&!g.isDead&&!Se.isOpen?Q.setTalkPrompt(!0,"按 F 設置重生點"):Q.setTalkPrompt(Ge!==null&&!Se.isOpen&&!gi.isOpen&&!_i.isOpen&&!g.isDead&&!p,(Ge==null?void 0:Ge.role)==="shop"?"按 F 交易":(Ge==null?void 0:Ge.role)==="forge"?"按 F 鍛造":"按 F 對話"),A.wasPressed("KeyF")&&(gi.isOpen?gi.close():_i.isOpen?_i.close():Se.isOpen?Se.advance():j?(k(!1),p=!0,i.sfx("dive"),Qe()):p?Rt?(p=!1,k(!0),g.mesh.position.set(m.mesh.position.x,0,m.mesh.position.z),i.sfx("dive"),Q.showToast("潛入沉沒古城……潮汐石守護著你的呼吸")):wn&&(p=!1,g.mesh.position.copy(wn),i.sfx("ui"),Qe()):Nt?(p=!0,g.blocking=!1,i.sfx("ui"),Q.showToast("出海!W 前進、A/D 轉向,近岸按 F 上岸")):St&&!St.active&&!g.isDead?At(St):Ge&&!g.isDead&&(i.sfx("ui"),Ge.role==="shop"?gi.open():Ge.role==="forge"?_i.open():Se.open(Ge.name,Ge.getLines()))),g.mp=Math.min(g.stats.maxMP,g.mp+2*D),p?(m.sail(D,A,me.boatFactor),g.mesh.position.copy(m.mesh.position),g.mesh.position.y+=.85,g.facing=m.heading,g.mesh.rotation.y=m.heading):m.idle(D),!p&&!g.isDead&&!_n.isOpen&&!Se.isOpen&&!gi.isOpen&&!_i.isOpen&&!o.isOpen){const{attacked:X,spin:Ze,chargeReady:gt,jumped:Sn,dodged:en}=g.update(D,A,W);Sn&&i.sfx("jump"),en&&i.sfx("dodge"),gt&&i.sfx("chargeReady");const Dn=(qe,ze,ot)=>{const pt=qe.takeDamage(ze,ot),Pt=qe.mesh.position.clone().setY(qe.mesh.position.y+1);d.spawn(Pt.clone().setY(Pt.y+1.2),String(ze),"#ffd23c"),h.burst(Pt,pt?10217627:16769162,pt?16:8),h.hitstop(pt?.1:.05),h.shake(pt?.28:.12,.18),i.sfx(pt?"enemyDie":"hit"),pt&&he(qe)};if(X){i.sfx("swing");const qe=new I(Math.sin(g.facing),0,Math.cos(g.facing));for(const ze of Ce){if(ze.isDead)continue;const ot=new I().subVectors(ze.mesh.position,g.mesh.position);ot.y=0;const pt=ot.length();pt>qy||pt>.5&&ot.clone().normalize().dot(qe)<Xy||Dn(ze,g.stats.atk,ot)}}if(Ze!==null){i.sfx("spin"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1),10217727,18,9);const qe=Math.round(g.stats.atk*(1+1.5*Ze));for(const ze of Ce){if(ze.isDead)continue;const ot=new I().subVectors(ze.mesh.position,g.mesh.position);ot.y=0,!(ot.length()>jy)&&Dn(ze,qe,ot)}if(Ze>=1){i.sfx("wave");const ze=new cr(g.mesh.position,g.facing,qe);t.add(ze.mesh),nt.push(ze)}}z.ensureSlots();const pn=qe=>{const ze=z.slotOf(qe);return ze>=0&&A.wasPressed(`Digit${ze+1}`)};if(pn("flame")&&z.isEquipped("flame")&&!g.blocking&&g.mp>=mu){g.mp-=mu,i.sfx("fire");const qe=new cr(g.mesh.position,g.facing,QM(g.stats.attrs.spirit,z.levels.flame),{color:16742972,lifetime:.45,speed:18});t.add(qe.mesh),nt.push(qe);const ze=g.mesh.position.clone().add(new I(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(ze,16742972,12,6)}if(A.wasPressed("KeyR")&&re.potions>0&&g.hp<g.stats.maxHP&&(re.potions--,g.hp=Math.min(g.stats.maxHP,g.hp+50),d.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"+50","#7be87b"),i.sfx("potion"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),8120443,8,4)),pn("earth")&&z.isEquipped("earth")&&!g.blocking&&g.mp>=gu){g.mp-=gu,i.sfx("quake"),h.shake(.55,.4),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.5),13142588,22,9);const qe=eb(g.stats.attrs.spirit,z.levels.earth),ze=tb(z.levels.earth),ot=new uu(g.mesh.position.x,g.mesh.position.z,{ringColor:14194492,shardColor:13140028,radius:ze,shardKind:"rock"});t.add(ot.object),it.push(ot);for(const pt of Ce){if(pt.isDead)continue;const Pt=new I().subVectors(pt.mesh.position,g.mesh.position);Pt.y=0,!(Pt.length()>ze)&&Dn(pt,qe,Pt)}}if(pn("frost")&&z.isEquipped("frost")&&!g.blocking&&g.mp>=_u){g.mp-=_u,i.sfx("ice");const qe=new cr(g.mesh.position,g.facing,nb(g.stats.attrs.spirit,z.levels.frost),{color:10149119,lifetime:.7,speed:26,freezes:!0});t.add(qe.mesh),nt.push(qe)}if(pn("void")&&z.isEquipped("void")&&g.mp>=Pa){const qe=Math.sin(g.facing),ze=Math.cos(g.facing),ot=g.mesh.position.clone();for(let pt=sb(z.levels.void);pt>=2;pt-=2){const Pt=ot.x+qe*pt,tn=ot.z+ze*pt;if(Rc(Pt,tn)||z.isEquipped("frost")&&g.mp>Pa||j&&Math.hypot(Pt-An.x,tn-An.z)<An.r){g.mp-=Pa,i.sfx("blink"),h.burst(ot.clone().setY(ot.y+1),9063144,10,5);const an=new du(ot.x,ot.y+1.2,ot.z,g.facing,"implode");t.add(an.object),it.push(an),g.blinkTo(Pt,tn);const mn=g.mesh.position;h.burst(mn.clone().setY(mn.y+1),9063144,10,5);const vi=new du(mn.x,mn.y+1.2,mn.z,g.facing,"explode");t.add(vi.object),it.push(vi);break}}}if(pn("lava")&&z.isEquipped("lava")&&!g.blocking&&g.mp>=xu){g.mp-=xu,i.sfx("lava");const qe=new cr(g.mesh.position,g.facing,rb(g.stats.attrs.spirit,z.levels.lava),{color:16730652,lifetime:.5,speed:17,burns:!0});t.add(qe.mesh),nt.push(qe);const ze=g.mesh.position.clone().add(new I(Math.sin(g.facing),1,Math.cos(g.facing)));h.burst(ze,16730652,16,7)}if(pn("aqua")&&z.isEquipped("aqua")&&!g.blocking&&g.mp>=vu){g.mp-=vu,i.sfx("aqua"),h.shake(.3,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),3856600,24,8);const qe=ab(g.stats.attrs.spirit,z.levels.aqua),ze=lb(z.levels.aqua),ot=new uu(g.mesh.position.x,g.mesh.position.z,{ringColor:4905192,shardColor:10154239,radius:ze,shardKind:"drop",shardCount:18});t.add(ot.object),it.push(ot);const pt=cb(z.levels.aqua);for(const Pt of Ce){if(Pt.isDead)continue;const tn=new I().subVectors(Pt.mesh.position,g.mesh.position);tn.y=0,!(tn.length()>ze)&&(Dn(Pt,qe,tn),Pt.isDead||Pt.freeze(pt))}}if(pn("life")&&z.isEquipped("life")&&!g.blocking&&g.mp>=yu){g.mp-=yu,i.sfx("life");const qe=new cr(g.mesh.position,g.facing,hb(g.stats.attrs.spirit,z.levels.life),{color:5957722,lifetime:.7,speed:22,leech:ub(z.levels.life)});t.add(qe.mesh),nt.push(qe)}if(A.wasPressed("KeyZ")&&de.isEquipped("thunder")&&!g.blocking&&g.mp>=ru){let qe=null,ze=mM;for(const ot of Ce){if(ot.isDead)continue;const pt=ot.mesh.position.distanceTo(g.mesh.position);pt<ze&&(ze=pt,qe=ot)}if(qe){g.mp-=ru,i.sfx("thunder");const ot=yM(de.levels.thunder),pt=MM(de.levels.thunder),Pt=vM(g.stats.attrs.spirit,de.levels.thunder),tn=new Set,xi=[g.mesh.position.clone().setY(g.mesh.position.y+1.4)];let an=qe,mn=Pt;for(;an&&tn.size<ot;){const yi=an;tn.add(yi);const rl=Math.round(mn),Ld=new I().subVectors(yi.mesh.position,g.mesh.position),$s=yi.takeDamage(rl,Ld);$s||yi.stun(pt);const Lr=yi.mesh.position.clone().setY(yi.mesh.position.y+1);xi.push(Lr.clone()),d.spawn(Lr.clone().setY(Lr.y+1.4),String(rl),"#bfe8ff"),h.burst(Lr,$s?10217627:12577023,$s?16:8),i.sfx($s?"enemyDie":"hit"),$s&&he(yi);let ol=null,al=gM;for(const Dr of Ce){if(Dr.isDead||tn.has(Dr))continue;const cl=Dr.mesh.position.distanceTo(yi.mesh.position);cl<al&&(al=cl,ol=Dr)}an=ol,mn*=_M}const vi=new IM(xi);t.add(vi.group),Wt.push(vi),h.shake(.2,.16)}}if(A.wasPressed("KeyT")&&de.isEquipped("gravity")&&!g.blocking&&g.mp>=ou){g.mp-=ou,i.sfx("vortex");const qe=g.mesh.position.x+Math.sin(g.facing)*au,ze=g.mesh.position.z+Math.cos(g.facing)*au,ot=new CM(qe,ze,wM(de.levels.gravity),SM(de.levels.gravity),bM(g.stats.attrs.spirit,de.levels.gravity));t.add(ot.mesh),U.push(ot),h.burst(new I(qe,ft(qe,ze)+1,ze),11559167,14,6)}}!p&&!g.isDead&&py(g.mesh.position.x,g.mesh.position.z)&&g.mesh.position.y-ft(g.mesh.position.x,g.mesh.position.z)<.5?(se+=D,se>=.8&&(se=0,g.applyEnvironmentDamage(6),d.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),"-6","#ff7a3c"),i.sfx("lava"),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+.6),16734748,6,4),g.isDead&&Jn())):se=0;const on=!p&&!j&&!g.isDead&&z.isEquipped("frost")&&!Rc(g.mesh.position.x,g.mesh.position.z);if(v.visible=on,on&&(v.position.set(g.mesh.position.x,.06,g.mesh.position.z),g.mp-=jM*D,g.mp<=0)){g.mp=0,i.sfx("shatter"),Q.showToast("冰面碎裂!被海浪沖回岸邊"),g.applyEnvironmentDamage(10);const X=R(g.mesh.position.x,g.mesh.position.z);g.mesh.position.set(X.x,ft(X.x,X.z),X.z),g.isDead&&Jn()}for(const X of Ce){if(oe){X.updateRemote(D);continue}const Ze=(X.kind==="deep"||X.kind==="voidGuardian")&&!j,gt=M.isHost&&L.size>0?We(X.mesh.position):null,Sn=gt?gt.pos:g.mesh.position,en=gt?gt.remoteId:null,Dn=Ze||(en===null?g.isDead:!1),pn=X.update(D,Sn,Dn),qe=X.mesh.position;if(pn>0&&!Dn)if(en!==null)M.sendPlayerDamage(en,pn,qe.x,qe.y,qe.z,0,"");else{const pt=g.takeDamage(pn,qe),Pt=g.mesh.position.clone().setY(g.mesh.position.y+2.6);pt.blocked?(d.spawn(Pt,`格擋 -${pt.taken}`,"#cfd8e8"),i.sfx("block"),h.shake(.12,.12),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.3),13621480,6,5)):pt.taken>0&&(d.spawn(Pt,`-${pt.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.4,.3),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),16737877,10)),g.isDead&&Jn()}const ze=X.specialEvent;if(ze){X.specialEvent=null;const pt=X.mesh.position.clone().setY(X.mesh.position.y+3.2);d.spawn(pt,`⚡${ze.name}`,"#ffd23c"),i.sfx(ze.sfx),h.shake(.3,.25),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+.6),ze.color,24,9),ze.healed>0&&d.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),`+${ze.healed}`,"#7be87b");const Pt=ze.radius*ze.radius;if(!g.isDead){const tn=g.mesh.position.x-qe.x,xi=g.mesh.position.z-qe.z;if(tn*tn+xi*xi<=Pt){const an=g.takeDamage(ze.dmg,X.mesh.position),mn=g.mesh.position.clone().setY(g.mesh.position.y+2.6);an.blocked?(d.spawn(mn,`格擋 -${an.taken}`,"#cfd8e8"),i.sfx("block")):an.taken>0&&(d.spawn(mn,`-${an.taken}`,"#ff5544"),i.sfx("hurt"),h.shake(.5,.35),h.burst(g.mesh.position.clone().setY(g.mesh.position.y+1.2),ze.color,12),g.shove(X.mesh.position,ze.knock),ze.effect==="chill"?g.chill(3):ze.effect==="burn"&&g.applyBurn(4,Math.max(2,Math.round(ze.dmg*.15)))),g.isDead&&Jn()}}if(M.isHost){const tn=ze.effect==="chill"?"chill":ze.effect==="burn"?"burn":"";for(const[xi,an]of L){if(an.dead)continue;const mn=an.mesh.position.x-qe.x,vi=an.mesh.position.z-qe.z;mn*mn+vi*vi<=Pt&&M.sendPlayerDamage(xi,ze.dmg,qe.x,qe.y,qe.z,ze.knock,tn)}}}const ot=X.tickBurn(D);if(ot>0&&!X.isDead){const pt=X.takeDamage(ot);d.spawn(X.mesh.position.clone().setY(X.mesh.position.y+2.4),String(ot),"#ff7a3c"),pt&&(i.sfx("enemyDie"),h.burst(X.mesh.position.clone().setY(X.mesh.position.y+1),10217627,16),he(X))}}const Qt=g.tickBurn(D);Qt>0&&!g.isDead&&(g.applyEnvironmentDamage(Qt),d.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`-${Qt}`,"#ff7a3c"),g.isDead&&Jn());for(const X of y){if(!X.active){if(X.respawnT-=D,X.respawnT<=0){const Ze=w();X.place(Ze.x,Ze.z)}continue}if(X.update(D,m.mesh.position,p)){X.collect(),i.sfx("gem");const Ze=Math.random();if(Ze<.5){const gt=20+Math.floor(Math.random()*41);re.coins+=gt,Q.showToast(`漂流寶箱:獲得 ${gt} 貝拉幣!`)}else if(Ze<.75){const gt=2+Math.floor(Math.random()*2);re.crystals.small+=gt,Q.showToast(`漂流寶箱:獲得小型經驗結晶 ×${gt}!`)}else Ze<.9?(re.crystals.medium+=1,Q.showToast("漂流寶箱:獲得中型經驗結晶!")):(re.potions+=1,Q.showToast("漂流寶箱:獲得回復藥水!"));h.burst(X.mesh.position.clone().setY(1.2),16769152,14,6),_n.render()}}if(nt=nt.filter(X=>{const Ze=X.update(D,Ce);for(const gt of Ze){const Sn=new I().subVectors(gt.mesh.position,g.mesh.position);Sn.y=0;const en=gt.takeDamage(X.damage,Sn);if(X.freezes&&!en&&gt.freeze(ib(z.levels.frost)),X.burns&&!en&&gt.burn($M,ob(z.levels.lava)),X.leech>0&&g.hp<g.stats.maxHP){const pn=Math.max(1,Math.round(X.damage*X.leech));g.hp=Math.min(g.stats.maxHP,g.hp+pn),d.spawn(g.mesh.position.clone().setY(g.mesh.position.y+2.6),`+${pn}`,"#7be87b")}const Dn=gt.mesh.position.clone().setY(gt.mesh.position.y+1);d.spawn(Dn.clone().setY(Dn.y+1.2),String(X.damage),"#7fe8ff"),h.burst(Dn,en?10217627:8382719,en?16:8),i.sfx(en?"enemyDie":"hit"),en&&he(gt)}return X.expired?(t.remove(X.mesh),X.dispose(),!1):!0}),U=U.filter(X=>{const Ze=X.update(D,Ce);for(const gt of Ze){const Sn=gt.takeDamage(X.damage),en=gt.mesh.position.clone().setY(gt.mesh.position.y+1);d.spawn(en.clone().setY(en.y+1.2),String(X.damage),"#d8b0ff"),h.burst(en,Sn?10217627:11559167,Sn?16:6),Sn&&(i.sfx("enemyDie"),he(gt))}return X.expired?(t.remove(X.mesh),X.dispose(),!1):!0}),it=it.filter(X=>(X.update(D),X.expired?(t.remove(X.object),X.dispose(),!1):!0)),Wt=Wt.filter(X=>(X.update(D),X.expired?(t.remove(X.group),X.dispose(),!1):!0)),!de.thunderOwned){const X=u.weather==="storm";X&&!ht?(ht=new De("fruit-thunder",Hh.x,Hh.z),t.add(ht.mesh),xt.push(ht)):!X&&ht&&(t.remove(ht.mesh),xt=xt.filter(Ze=>Ze!==ht),ht=null)}xt=xt.filter(X=>{if(g.isDead)return!0;const Ze=X.update(D,g.mesh.position);if(Ze){if(X.kind==="coin")re.coins+=8,f.push("🪙 獲得 8 貝拉幣"),i.sfx("coin");else if(X.kind==="gem-flame")f.push("🔥 獲得靈紋寶石【焰心石】"),z.flameOwned=!0,gn("flame"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【焰心石】!按 E 施放火焰斬"),Qe();else if(X.kind==="gem-wind")f.push("🌪️ 獲得靈紋寶石【風語石】"),z.windOwned=!0,gn("wind"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【風語石】!二段跳 + 按住空白鍵滑翔"),Qe();else if(X.kind==="gem-earth")f.push("🪨 獲得靈紋寶石【地殼石】"),z.earthOwned=!0,gn("earth"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【地殼石】!按 C 施放地震波"),Qe();else if(X.kind==="gem-frost")f.push("❄️ 獲得靈紋寶石【霜語晶】"),z.frostOwned=!0,gn("frost"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【霜語晶】!V 冰箭,還能走在海面上"),Qe();else if(X.kind==="gem-tide")f.push("🌊 獲得靈紋寶石【潮汐石】"),z.tideOwned=!0,gn("tide"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【潮汐石】!可以潛入北方的沉沒古城了"),Qe();else if(X.kind==="gem-void")f.push("🌀 獲得靈紋寶石【虛空石】"),z.voidOwned=!0,gn("void"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【虛空石】!按 X 短距離瞬移"),Qe();else if(X.kind==="gem-lava")f.push("🌋 獲得靈紋寶石【溶岩石】"),z.lavaOwned=!0,gn("lava"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【溶岩石】!按 G 噴發岩漿並點燃敵人"),Qe();else if(X.kind==="gem-aqua")f.push("💧 獲得靈紋寶石【碧波石】"),z.aquaOwned=!0,gn("aqua"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【碧波石】!按 B 震盪碧波凍結周身敵人"),Qe();else if(X.kind==="gem-life")f.push("🌿 獲得靈紋寶石【翠生石】"),z.lifeOwned=!0,gn("life"),Q.setGems(z),i.sfx("gem"),Q.showToast("獲得靈紋寶石【翠生石】!按 H 生命汲取,傷敵回血"),Qe();else if(X.kind==="fruit-thunder")f.push("⚡ 獲得靈樹果實【雷光果】"),de.thunderOwned=!0,Xs("thunder"),ht=null,Q.setFruits(de),i.sfx("gem"),Q.showToast("獲得靈樹果實【雷光果】!按 Z 召喚連鎖閃電(麻痺敵人)"),Qe();else if(X.kind==="fruit-gravity")f.push("🌀 獲得靈樹果實【引力果】"),de.gravityOwned=!0,Xs("gravity"),Q.setFruits(de),i.sfx("gem"),Q.showToast("獲得靈樹果實【引力果】!按 T 生成引力漩渦聚怪"),Qe();else{re.crystals[X.kind]++;const gt=X.kind==="small"?"小型":X.kind==="medium"?"中型":"大型";f.push(`💎 獲得${gt}經驗結晶`),i.sfx("crystal")}t.remove(X.mesh),_n.render()}return!Ze}),A.rightDown&&(W-=A.dx*.005,q=Us.clamp(q+A.dy*.004,.05,1.2)),B=Us.clamp(B+A.wheel*.01,6,18);const zt=g.mesh.position.clone().add(new I(0,2,0)),Ht=new I(zt.x+Math.sin(W)*Math.cos(q)*B,zt.y+Math.sin(q)*B,zt.z+Math.cos(W)*Math.cos(q)*B);Ht.y=Math.max(Ht.y,ft(Ht.x,Ht.z)+.6);const Ys=1-Math.exp(-12*C);n.position.lerp(Ht,Ys),n.position.add(h.update(C)),n.lookAt(zt);const Ft=[];if(te.get("gem")==="active"&&Ft.push(z.flameOwned?"取回焰心石:回去找村長阿海":"取回焰心石:擊敗主峰的大果凍"),te.get("jelly")==="active"){const X=te.jellyProgress();Ft.push(X>=Xi?"果凍清理:回報漁夫小蝦":`果凍清理:${X}/${Xi}`)}te.get("wind")==="active"&&Ft.push(z.windOwned?"翠風之石:回報村長阿海":"翠風之石:搭船前往東北方的翠風林島"),te.get("earth")==="active"&&Ft.push(z.earthOwned?"地殼之石:回報村長阿海":"地殼之石:搭船前往西北方的燼岩火山島"),te.get("frost")==="active"&&Ft.push(z.frostOwned?"霜語之晶:回報村長阿海":"霜語之晶:搭船前往南方的霜雪峰島"),te.get("tide")==="active"&&Ft.push(z.tideOwned?"隱藏海域:回報村長阿海":"隱藏海域:西南外海尋找發光的浪"),te.get("depth")==="active"&&Ft.push(z.voidOwned?"深淵遺跡:回報村長阿海":"深淵遺跡:潛入北方沉沒古城擊敗守護者"),te.get("final")==="active"&&Ft.push(Pe?"終焉之戰:回報村長阿海":"終焉之戰:前往最北端的虛空之心"),te.get("sea2")==="active"&&Ft.push(ve()?"跨越界海:回界海之門找領航者汐音":`跨越界海:寶石${Xe()}/6・圖鑑${O()}/${ke.length}・Lv.${g.stats.level}/${ge}`),te.get("lava")==="active"&&Ft.push(z.lavaOwned?"熔砂的試煉:回港口鎮找鎮長波叔回報":"熔砂的試煉:港口鎮東方的熔砂島,擊敗島心的熔岩守護者"),te.get("aqua")==="active"&&Ft.push(z.aquaOwned?"礁海的低語:回珊瑚礁島找祭司娜瑪回報":"礁海的低語:登上珊瑚礁島,擊敗島心的珊瑚守護者"),te.get("life")==="active"&&Ft.push(z.lifeOwned?"靈脈的搏動:回靈脈島找守林人葉羅回報":"靈脈的搏動:登上靈脈島,擊敗島心的靈脈守護者");const Pd=[{id:"vineHunt",title:"藤蔓清剿",npc:"獵人小藤"},{id:"emberHunt",title:"餘燼清剿",npc:"礦工岩叔"},{id:"frostHunt",title:"霜寒清剿",npc:"嚮導阿凜"},{id:"deepHunt",title:"深海清剿",npc:"觀星者星嵐"},{id:"sandHunt",title:"熱砂清剿",npc:"拓荒者沙吉"},{id:"reefHunt",title:"礁石清剿",npc:"潛水夫阿蚌"},{id:"sporeHunt",title:"孢子清剿",npc:"採集者藤吉"}];for(const X of Pd){if(te.get(X.id)!=="active")continue;const Ze=te.huntProgress(X.id);Ft.push(Ze>=$i[X.id].target?`${X.title}:回報${X.npc}`:`${X.title}:${Ze}/${$i[X.id].target}`)}if(Q.setQuests(Ft),!_e&&Fe.isDead&&(_e=!0,Pe=!0,Pr(),i.sfx("victory"),Qn.style.display="flex",Qe()),a.position.set(g.mesh.position.x+60,100,g.mesh.position.z+40),a.target.position.set(g.mesh.position.x,0,g.mesh.position.z),!p&&!g.isDead&&g.chargeRatio>=1){if(_+=C,_>=.16){_=0;const X=g.mesh.position.clone().add(new I(Math.sin(g.facing)*.5,1.7,Math.cos(g.facing)*.5));h.burst(X,13625599,3,2.5)}}else _=0;for(const X of L.values())X.update(C);if(K+=C,K>=.05){K=0;const X=g.mesh.position,Ze=(X.x-ce.x)**2+(X.z-ce.z)**2;ce.copy(X);const gt=(g.attacking?1:0)|(g.blocking?2:0)|(g.airborne?4:0)|(g.hurtT>0?8:0),Sn={x:X.x,y:X.y,z:X.z,facing:g.facing,moving:Ze>1e-5,act:gt,dead:g.isDead};M.sendState(Sn)}if(oe)for(const X of Ce){const Ze=X.netIndex;X.pendingNetDamage>0&&(M.sendHit(Ze,Math.round(X.pendingNetDamage)),X.pendingNetDamage=0),X.pendingNetFreeze>0&&(M.sendCc(Ze,"freeze",X.pendingNetFreeze,0),X.pendingNetFreeze=0),X.pendingNetStun>0&&(M.sendCc(Ze,"stun",X.pendingNetStun,0),X.pendingNetStun=0),X.pendingNetBurnSec>0&&(M.sendCc(Ze,"burn",X.pendingNetBurnSec,X.pendingNetBurnDps),X.pendingNetBurnSec=0,X.pendingNetBurnDps=0)}else if(M.isHost&&L.size>0&&(Y+=C,Y>=.08)){Y=0;const X=[];for(const Ze of Ce){const gt=Ze.mesh.position;X.push(xe(gt.x),xe(gt.y),xe(gt.z),xe(Ze.mesh.rotation.y),Ze.isDead?1:0,Ze.hp,Ze.statusFlag)}M.sendEnemies(X)}d.update(C,n),Q.update(g,re),A.endFrame(),e.render(t,n)})}Promise.all([_v().catch(()=>!1),ry().catch(()=>!1)]).catch(()=>{}).finally(()=>jb());
