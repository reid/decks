YUI.add("upstage-keyboard",function(a){a.Plugin.UpstageKeyboard=a.Base.create("upstage-keyboard",a.Plugin.Base,[],{initializer:function(b){var c=this.get("host");c.publish("keydown",{emitFacade:true});a.one(a.config.win).on("keydown",a.bind("keydown",this));},destructor:function(b){a.one(a.config.win).detach("keydown",a.bind("keydown",this));},keydown:function(c){var b=this.get("host"),d=true;var d=true;switch(c.keyCode){case 32:case 34:case 39:case 40:b.fire("warp",1);break;case 33:case 37:case 38:b.fire("warp",-1);break;case 36:b.fire("navigate",1);break;case 35:b.fire("navigate",9999);break;case 116:case 27:if(!this.get("playKeycode")){this.set("playKeycode",c.keyCode);}if(c.keyCode===this.get("playKeycode")){this.set("lastSlideBeforeReset",b.get("currentSlide"));b.fire("navigate",1);}else{b.fire("navigate",this.get("lastSlideBeforeReset"));}break;default:d=false;break;}if(d){c.halt();}else{b.fire("keydown",c);}}},{NS:"keyboard",ATTRS:{playKeycode:{value:116},lastSlideBeforeReset:{value:1}}});},"@VERSION@",{requires:["upstage-slideshow","base-build","node","event"]});