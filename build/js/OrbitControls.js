!function(){let b={type:"change"},c={type:"start"},d={type:"end"};class a extends THREE.EventDispatcher{constructor(f,e){super(),void 0===e&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=f,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN},this.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return n.phi},this.getAzimuthalAngle=function(){return n.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(a){a.addEventListener("keydown",Y),this._domElementKeyEvents=a},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(b),a.update(),l=g.NONE},this.update=function(){let d=new THREE.Vector3,c=new THREE.Quaternion().setFromUnitVectors(f.up,new THREE.Vector3(0,1,0)),e=c.clone().invert(),h=new THREE.Vector3,i=new THREE.Quaternion,j=2*Math.PI;return function(){let s=a.object.position;d.copy(s).sub(a.target),d.applyQuaternion(c),n.setFromVector3(d),a.autoRotate&&l===g.NONE&&F(D()),a.enableDamping?(n.theta+=o.theta*a.dampingFactor,n.phi+=o.phi*a.dampingFactor):(n.theta+=o.theta,n.phi+=o.phi);let f=a.minAzimuthAngle,k=a.maxAzimuthAngle;return isFinite(f)&&isFinite(k)&&(f< -Math.PI?f+=j:f>Math.PI&&(f-=j),k< -Math.PI?k+=j:k>Math.PI&&(k-=j),f<=k?n.theta=Math.max(f,Math.min(k,n.theta)):n.theta=n.theta>(f+k)/2?Math.max(f,n.theta):Math.min(k,n.theta)),n.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,n.phi)),n.makeSafe(),n.radius*=p,n.radius=Math.max(a.minDistance,Math.min(a.maxDistance,n.radius)),!0===a.enableDamping?a.target.addScaledVector(q,a.dampingFactor):a.target.add(q),d.setFromSpherical(n),d.applyQuaternion(e),s.copy(a.target).add(d),a.object.lookAt(a.target),!0===a.enableDamping?(o.theta*=1-a.dampingFactor,o.phi*=1-a.dampingFactor,q.multiplyScalar(1-a.dampingFactor)):(o.set(0,0,0),q.set(0,0,0)),p=1,!!(r||h.distanceToSquared(a.object.position)>m||8*(1-i.dot(a.object.quaternion))>m)&&(a.dispatchEvent(b),h.copy(a.object.position),i.copy(a.object.quaternion),r=!1,!0)}}(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",k),a.domElement.removeEventListener("pointerdown",h),a.domElement.removeEventListener("pointercancel",i),a.domElement.removeEventListener("wheel",j),a.domElement.removeEventListener("pointermove",U),a.domElement.removeEventListener("pointerup",V),null!==a._domElementKeyEvents&&a._domElementKeyEvents.removeEventListener("keydown",Y)};let a=this,g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=g.NONE,m=1e-6,n=new THREE.Spherical,o=new THREE.Spherical,p=1,q=new THREE.Vector3,r=!1,s=new THREE.Vector2,t=new THREE.Vector2,u=new THREE.Vector2,v=new THREE.Vector2,w=new THREE.Vector2,x=new THREE.Vector2,y=new THREE.Vector2,z=new THREE.Vector2,A=new THREE.Vector2,B=[],C={};function D(){return 2*Math.PI/60/60*a.autoRotateSpeed}function E(){return Math.pow(.95,a.zoomSpeed)}function F(a){o.theta-=a}function G(a){o.phi-=a}let H=function(){let a=new THREE.Vector3;return function(b,c){a.setFromMatrixColumn(c,0),a.multiplyScalar(-b),q.add(a)}}(),I=function(){let b=new THREE.Vector3;return function(d,c){!0===a.screenSpacePanning?b.setFromMatrixColumn(c,1):(b.setFromMatrixColumn(c,0),b.crossVectors(a.object.up,b)),b.multiplyScalar(d),q.add(b)}}(),J=function(){let b=new THREE.Vector3;return function(d,e){let c=a.domElement;if(a.object.isPerspectiveCamera){let g=a.object.position;b.copy(g).sub(a.target);let f=b.length();H(2*d*(f*=Math.tan(a.object.fov/2*Math.PI/180))/c.clientHeight,a.object.matrix),I(2*e*f/c.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(H(d*(a.object.right-a.object.left)/a.object.zoom/c.clientWidth,a.object.matrix),I(e*(a.object.top-a.object.bottom)/a.object.zoom/c.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}}();function K(b){a.object.isPerspectiveCamera?p/=b:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom*b)),a.object.updateProjectionMatrix(),r=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function L(b){a.object.isPerspectiveCamera?p*=b:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/b)),a.object.updateProjectionMatrix(),r=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function M(a){s.set(a.clientX,a.clientY)}function N(a){v.set(a.clientX,a.clientY)}function O(){if(1===B.length)s.set(B[0].pageX,B[0].pageY);else{let a=.5*(B[0].pageX+B[1].pageX),b=.5*(B[0].pageY+B[1].pageY);s.set(a,b)}}function P(){if(1===B.length)v.set(B[0].pageX,B[0].pageY);else{let a=.5*(B[0].pageX+B[1].pageX),b=.5*(B[0].pageY+B[1].pageY);v.set(a,b)}}function Q(){let a=B[0].pageX-B[1].pageX,b=B[0].pageY-B[1].pageY;y.set(0,Math.sqrt(a*a+b*b))}function R(b){if(1==B.length)t.set(b.pageX,b.pageY);else{let c=ac(b),e=.5*(b.pageX+c.x),f=.5*(b.pageY+c.y);t.set(e,f)}u.subVectors(t,s).multiplyScalar(a.rotateSpeed);let d=a.domElement;F(2*Math.PI*u.x/d.clientHeight),G(2*Math.PI*u.y/d.clientHeight),s.copy(t)}function S(b){if(1===B.length)w.set(b.pageX,b.pageY);else{let c=ac(b),d=.5*(b.pageX+c.x),e=.5*(b.pageY+c.y);w.set(d,e)}x.subVectors(w,v).multiplyScalar(a.panSpeed),J(x.x,x.y),v.copy(w)}function T(b){let c=ac(b),d=b.pageX-c.x,e=b.pageY-c.y;z.set(0,Math.sqrt(d*d+e*e)),A.set(0,Math.pow(z.y/y.y,a.zoomSpeed)),K(A.y),y.copy(z)}function h(b){!1!==a.enabled&&(0===B.length&&(a.domElement.setPointerCapture(b.pointerId),a.domElement.addEventListener("pointermove",U),a.domElement.addEventListener("pointerup",V)),_(b),"touch"===b.pointerType?Z(b):W(b))}function U(b){!1!==a.enabled&&("touch"===b.pointerType?$(b):X(b))}function V(b){aa(b),0===B.length&&(a.domElement.releasePointerCapture(b.pointerId),a.domElement.removeEventListener("pointermove",U),a.domElement.removeEventListener("pointerup",V)),a.dispatchEvent(d),l=g.NONE}function i(a){aa(a)}function W(b){let d;switch(b.button){case 0:d=a.mouseButtons.LEFT;break;case 1:d=a.mouseButtons.MIDDLE;break;case 2:d=a.mouseButtons.RIGHT;break;default:d=-1}switch(d){case THREE.MOUSE.DOLLY:var e;if(!1===a.enableZoom)return;e=b,y.set(e.clientX,e.clientY),l=g.DOLLY;break;case THREE.MOUSE.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(!1===a.enablePan)return;N(b),l=g.PAN}else{if(!1===a.enableRotate)return;M(b),l=g.ROTATE}break;case THREE.MOUSE.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(!1===a.enableRotate)return;M(b),l=g.ROTATE}else{if(!1===a.enablePan)return;N(b),l=g.PAN}break;default:l=g.NONE}l!==g.NONE&&a.dispatchEvent(c)}function X(b){var c,d;if(!1!==a.enabled)switch(l){case g.ROTATE:if(!1===a.enableRotate)return;!function(b){t.set(b.clientX,b.clientY),u.subVectors(t,s).multiplyScalar(a.rotateSpeed);let c=a.domElement;F(2*Math.PI*u.x/c.clientHeight),G(2*Math.PI*u.y/c.clientHeight),s.copy(t),a.update()}(b);break;case g.DOLLY:if(!1===a.enableZoom)return;c=b,z.set(c.clientX,c.clientY),A.subVectors(z,y),A.y>0?K(E()):A.y<0&&L(E()),y.copy(z),a.update();break;case g.PAN:if(!1===a.enablePan)return;d=b,w.set(d.clientX,d.clientY),x.subVectors(w,v).multiplyScalar(a.panSpeed),J(x.x,x.y),v.copy(w),a.update()}}function j(b){if(!1!==a.enabled&& !1!==a.enableZoom&&l===g.NONE){var e;b.preventDefault(),a.dispatchEvent(c),(e=b).deltaY<0?L(E()):e.deltaY>0&&K(E()),a.update(),a.dispatchEvent(d)}}function Y(b){!1!==a.enabled&& !1!==a.enablePan&&function(c){let b=!1;switch(c.code){case a.keys.UP:J(0,a.keyPanSpeed),b=!0;break;case a.keys.BOTTOM:J(0,-a.keyPanSpeed),b=!0;break;case a.keys.LEFT:J(a.keyPanSpeed,0),b=!0;break;case a.keys.RIGHT:J(-a.keyPanSpeed,0),b=!0}b&&(c.preventDefault(),a.update())}(b)}function Z(b){switch(ab(b),B.length){case 1:switch(a.touches.ONE){case THREE.TOUCH.ROTATE:if(!1===a.enableRotate)return;O(),l=g.TOUCH_ROTATE;break;case THREE.TOUCH.PAN:if(!1===a.enablePan)return;P(),l=g.TOUCH_PAN;break;default:l=g.NONE}break;case 2:switch(a.touches.TWO){case THREE.TOUCH.DOLLY_PAN:if(!1===a.enableZoom&& !1===a.enablePan)return;a.enableZoom&&Q(),a.enablePan&&P(),l=g.TOUCH_DOLLY_PAN;break;case THREE.TOUCH.DOLLY_ROTATE:if(!1===a.enableZoom&& !1===a.enableRotate)return;a.enableZoom&&Q(),a.enableRotate&&O(),l=g.TOUCH_DOLLY_ROTATE;break;default:l=g.NONE}break;default:l=g.NONE}l!==g.NONE&&a.dispatchEvent(c)}function $(b){var c,d;switch(ab(b),l){case g.TOUCH_ROTATE:if(!1===a.enableRotate)return;R(b),a.update();break;case g.TOUCH_PAN:if(!1===a.enablePan)return;S(b),a.update();break;case g.TOUCH_DOLLY_PAN:if(!1===a.enableZoom&& !1===a.enablePan)return;c=b,a.enableZoom&&T(c),a.enablePan&&S(c),a.update();break;case g.TOUCH_DOLLY_ROTATE:if(!1===a.enableZoom&& !1===a.enableRotate)return;d=b,a.enableZoom&&T(d),a.enableRotate&&R(d),a.update();break;default:l=g.NONE}}function k(b){!1!==a.enabled&&b.preventDefault()}function _(a){B.push(a)}function aa(b){delete C[b.pointerId];for(let a=0;a<B.length;a++)if(B[a].pointerId==b.pointerId){B.splice(a,1);return}}function ab(a){let b=C[a.pointerId];void 0===b&&(b=new THREE.Vector2,C[a.pointerId]=b),b.set(a.pageX,a.pageY)}function ac(a){let b=a.pointerId===B[0].pointerId?B[1]:B[0];return C[b.pointerId]}a.domElement.addEventListener("contextmenu",k),a.domElement.addEventListener("pointerdown",h),a.domElement.addEventListener("pointercancel",i),a.domElement.addEventListener("wheel",j,{passive:!1}),this.update()}}THREE.MapControls=class extends a{constructor(a,b){super(a,b),this.screenSpacePanning=!1,this.mouseButtons.LEFT=THREE.MOUSE.PAN,this.mouseButtons.RIGHT=THREE.MOUSE.ROTATE,this.touches.ONE=THREE.TOUCH.PAN,this.touches.TWO=THREE.TOUCH.DOLLY_ROTATE}},THREE.OrbitControls=a}()