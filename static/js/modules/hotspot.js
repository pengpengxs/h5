_jsload2&&_jsload2('hotspot', 'z.Se(function(a){function b(a){var b=this.P;b.Ne=[];if(this.Mh)for(var c in this.Mh)if(!(0==c.indexOf("vector_")&&!this.Tb()||0==c.indexOf("tile_")&&this.Tb())){var g=this.Mh[c],i;for(i in g){var k=g[i];if(!(k.Oh>this.ea()||k.Cf<this.ea())){var l=this.$b(k.ga());l.x<this.width&&l.y<this.height&&a.offsetX<l.x+k.kv[1]&&(a.offsetX>l.x-k.kv[3]&&a.offsetY>l.y-k.kv[0]&&a.offsetY<l.y+k.kv[2])&&b.Ne.push(k)}}}}function c(){a.P.oK&&0<a.P.Ne.length?(a.platform.style.cursor="pointer",a.P.oK=q):(a.P.Ne=[],a.platform.style.cursor= a.D.Vb)}a.P.Rt=new rc("",{xa:new M(15,-3),Lp:{border:"1px solid #aaa",background:"#fffec2",whiteSpace:"nowrap",font:"12px "+E.fontFamily,mozBoxShadow:"1px 2px 6px #666",webkitBoxShadow:"1px 2px 6px #666",boxShadow:"1px 2px 6px #666",padding:"2px 4px"}});a.addEventListener("mousemove",function(c){if(!(c.Za&&!(c.Za instanceof lc)||c.yb)){var e=this.P,f=e.Ne.slice(0);b.call(this,c);for(var g=e.Ne.slice(0),i=0;i<f.length;i++)for(var k=0;k<g.length;k++)f[i]===g[k]&&(f.splice(i,1),i--,g.splice(k,1),k--); if(0<f.length){var l=new N("onhotspotout");l.spots=f.slice(0);this.dispatchEvent(l)}if(0==e.Ne.length&&!e.Ax)this.platform.style.cursor!=this.D.Vb&&(this.platform.style.cursor=this.D.Vb),e.Kp&&(clearTimeout(e.Kp),e.Kp=p),e.oF=setTimeout(function(){e.Rt.R()},400);else if(0<g.length&&(this.platform.style.cursor="pointer",l=new N("onhotspotover"),l.spots=g.slice(0),this.dispatchEvent(l),e.Kp&&(clearTimeout(e.Kp),e.Kp=p),e.oF&&(clearTimeout(e.oF),e.oF=p),l.spots[0].JD()))e.Kp=setTimeout(function(){e.Rt.Zc(l.spots[0].JD()); e.Rt.ra(c.point);e.Rt.show();a.Ha(e.Rt)},400)}});a.addEventListener("clickex",function(a){var c=this.P;a.overlay||(0==c.Ne.length&&b.call(this,a),0<c.Ne.length&&(a=new N("onhotspotclick"),a.spots=c.Ne.slice(0),a.spots.sort(function(a,b){return a.ga().lat-b.ga().lat}),this.dispatchEvent(a),c.Ne.length=0))});a.addEventListener("load",c);a.addEventListener("moveend",c);a.addEventListener("zoomend",c);a.addEventListener("dragend",function(){this.P.oK=o})}); ');
