_jsload2&&_jsload2('menu', 'w.object.extend(cc.prototype,{pa:function(a,b){if(this.z)return q;this.B=a;this.sl=b||p;this.ya();var c=this,d=a.D.Vb;b&&b.w.ff&&(d="pointer");this.z.style.cursor=d;this.xd&&(this.xd.style.cursor=d);w.K(document,"mousedown",function(){c.z&&c.R()});w.K(this.z,"click",function(a){c.R();ma(a)});d=this.k.Ta;d||(d=a.Ta);this.sl?this.sl.addEventListener("rightclick",function(a){c.z&&c.OI(a)}):a.addEventListener("rightclickex",function(a){c.z&&(!a.Za&&!a.yb)&&c.OI(a)});for(var d=0,e=this.wa.length;d<e;d++)"menuitem"== this.wa[d].Jb&&this.wa[d].pa(a,this),"divider"==this.wa[d].Jb&&(this.Ae[this.wa[d].Kj].C=xb(this.z,"<div class=\'BMap_cmDivider\'></div>"));this.Mr()},vb:function(){this.B&&(this.pa(this.B,this.sl),this.Nh&&(this.Nh=q,this.show()))},remove:function(){this.z&&(this.z.parentNode.removeChild(this.z),this.z=p);this.xd&&(this.xd.parentNode.removeChild(this.xd),this.xd=p);for(var a=0,b=this.wa.length;a<b;a++)"menuitem"==this.wa[a].Jb&&(this.wa[a].z=p);this.B=this.sl=p},ya:function(){this.z=xb(this.B.Ta,"<div unselectable=\'on\'></div>"); this.z.className="BMap_contextMenu";var a=this.z.style;a.font="12px "+E.fontFamily;9>w.ca.ka?this.xd=xb(this.B.Ta,"<div class=\'BMap_cmShadow\'></div>"):a.TU=a.$O=a.WebkitBoxShadow="1px 2px 6px #666";return this.z},bw:function(a){if(a&&!("menuitem"!=a.Jb||""==a.Tg||0>=a.Xi)){for(var b=0,c=this.wa.length;b<c;b++)if(this.wa[b]===a)return;this.wa.push(a);this.Ff.push(a);this.B&&(a.pa(this.B,this),w.C.Sa(a.Ed(),"BMap_cmLstItem"),1<this.wa.length?"menuitem"==this.wa[this.wa.length-2].Jb&&w.C.Qb(this.wa[this.wa.length- 2].Ed(),"BMap_cmLstItem"):"menuitem"==this.wa[0].Jb&&w.C.Sa(this.wa[0].Ed(),"BMap_cmFstItem"),this.Mr())}},removeItem:function(a){if(a&&"menuitem"==a.Jb){for(var b=0,c=this.wa.length;b<c;b++)this.wa[b]===a&&(this.wa[b].remove(),this.wa.splice(b,1),c--);b=0;for(c=this.Ff.length;b<c;b++)this.Ff[b]===a&&(this.Ff[b].remove(),this.Ff.splice(b,1),c--);this.z&&(0<this.wa.length&&"menuitem"==this.wa[this.wa.length-1].Jb&&w.C.Sa(this.wa[this.wa.length-1].Ed(),"BMap_cmLstItem"),this.Mr())}},DB:function(){this.wa.push({Jb:"divider", Kj:this.Ae.length});this.Ae.push({C:p});this.z&&(this.Ae[this.Ae.length-1].C=xb(this.z,"<div class=\'BMap_cmDivider\'></div>"),this.Mr())},PE:function(a){if(this.Ae[a]){this.Ae[a].C&&this.Ae[a].C.parentNode&&this.Ae[a].C.parentNode.removeChild(this.Ae[a].C);for(var b=0,c=this.wa.length;b<c;b++)this.wa[b]&&("divider"==this.wa[b].Jb&&this.wa[b].Kj==a)&&(this.wa.splice(b,1),c--),this.wa[b]&&("divider"==this.wa[b].Jb&&this.wa[b].Kj>a)&&this.wa[b].Kj--;this.Ae.splice(a,1);this.Mr()}},ra:function(a,b){this.z.style.left= a+"px";this.z.style.top=b+"px";this.xd&&(this.xd.style.left=a+1+"px",this.xd.style.top=b+2+"px")},show:function(){if(this.Nh!=o&&0!=this.Ff.length){this.Nh=o;this.z&&(this.z.style.visibility="visible");this.xd&&(this.xd.style.visibility="visible");var a=new N("onopen");a.point=this.Dw;a.pixel=this.$r;this.dispatchEvent(a)}},R:function(){if(this.Nh!=q){this.Nh=q;this.z&&(this.z.style.visibility="hidden");this.xd&&(this.xd.style.visibility="hidden");var a=new N("onclose");a.point=this.Dw;a.pixel=this.$r; this.dispatchEvent(a)}},sZ:function(a){if(a&&(this.k.cursor=a,this.z&&(this.z.style.cursor=this.k.cursor),this.xd))this.xd.style.cursor=this.k.cursor},Mr:function(){this.z&&this.xd&&(this.xd.style.width=this.z.offsetWidth+"px",this.xd.style.height=this.z.offsetHeight+"px")},OI:function(a){if(0!=this.Ff.length){this.$r=a.hb;this.Dw=this.B.tb(this.$r);var b=this.Ed().offsetHeight,c=this.Ed().offsetWidth,d=a.hb.x,e=a.hb.y;a.hb.x+c>this.B.width&&(d=a.hb.x-c);a.hb.y+b>this.B.height&&(e=a.hb.y-b);this.ra(d, e);this.show()}}});T(hf,{addItem:hf.bw,removeItem:hf.removeItem,addSeparator:hf.DB,removeSeparator:hf.PE});w.object.extend(fc.prototype,{pa:function(a,b){if(this.z)return q;this.B=a;this.Fh=b;b.Ed()&&(this.ya(),this.ba(),this.Jh||(this.Jh=o,this.disable()));return o},remove:function(){this.z&&(this.z.parentNode.removeChild(this.z),this.z=p);this.B=this.Fh=p},vb:function(){this.Fh&&this.B&&this.pa(this.B,this.Fh)},ya:function(){var a=this.k.ym?"<div"+(this.k.id?" id=\'"+this.k.id+"\'":"")+" unselectable=\'on\'><div style=\'width: 17px;height: 17px;margin-right: 3px;display: inline-block;zoom: 1;*display: inline;vertical-align: middle;background: url("+ this.k.ym+") no-repeat;\'></div><span style=\'vertical-align: middle;\'>"+this.Tg+"</span></div>":"<div"+(this.k.id?" id=\'"+this.k.id+"\'":"")+" unselectable=\'on\'><span>"+this.Tg+"</span></div>";this.z=xb(this.Fh.Ed(),a);this.k.ym?(this.$u=this.z.firstChild,this.Ir=this.z.lastChild):this.Ir=this.z;a=this.z.style;a.padding="2px 6px";a.margin="0 2px";a.fontSize="14px";a.MozUserSelect="none";a.lineHeight="17px";a.width=this.k.width+"px";this.Jh?(a.color="#000",a.cursor="pointer"):(a.color="#aaa",a.cursor= this.B.D.Vb);return this.z},ba:function(){var a=this;w.K(this.z,"click",function(b){a.Jh?a.kz&&a.kz.call&&a.kz.call(a,a.Fh.Dw,a.Fh.$r,a.Fh.sl):ma(b)});w.K(this.z,"mousedown",function(a){ma(a)});w.K(this.z,"mouseover",function(){a.Jh&&(a.z.style.color="#6688cc")});w.K(this.z,"mouseout",function(){a.Jh&&(a.z.style.color="#000")})},Jt:function(a){a&&(this.Tg=a+"",this.Ir&&(this.Ir.innerHTML="<span>"+this.Tg+"</span>"))},Sb:function(a){a&&(this.k.ym=a,this.$u?this.$u.style.background="url("+a+")":(this.z.innerHTML= "<div"+(this.k.id?" id=\'"+this.k.id+"\'":"")+" unselectable=\'on\'><div style=\'width: 17px;height: 17px;margin-right: 3px;display: inline-block;zoom: 1;*display: inline;vertical-align: middle;background: url("+this.k.ym+") no-repeat;\'></div><span style=\'vertical-align: middle;\'>"+this.Tg+"</span></div>",this.$u=this.z.firstChild,this.Ir=this.z.lastChild))},enable:function(){this.Jh=o;this.z&&(this.z.style.color="#000",this.z.style.cursor="pointer")},disable:function(){this.Jh=q;this.z&&(this.z.style.color= "#aaa",this.z.style.cursor=this.B.D.Vb)}});T(jf,{setIcon:jf.Sb,setText:jf.Jt,enable:jf.enable,disable:jf.disable}); ');
