var $builtinmodule=function(name) {
  var mod={};
  var dr=function(cvId) {
    var cv=document.getElementById(cvId); 
    var ctx=cv.getContext("2d");
    ctx.fillRect(0, 0, 100, 100);
  };
  mod.drawRect=new Sk.builtin.func(function (a) {
    dr(a.v);
    return Sk.builtin.none.none$;
  });
  mod.drawKnight=new Sk.builtin.func(function (a) {
    var cvId=a.v;
    var cv=document.getElementById(cvId); 
    var ctx=cv.getContext("2d");
    var img=new Image();
    img.src="knight.png";
    img.addEventListener("load", function() {
      ctx.drawImage(img, 0, 0);
    });
    return Sk.builtin.none.none$;
  });
  mod.MyCanvas=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self, cvId) {
      var cvId=a.v;
      self.cv=document.getElementById(cvId); 
      self.ctx=cv.getContext("2d");
      return Sk.builtin.none.none$;
    });
    $loc.draw=new Sk.builtin.func(function (self) {
      self.ctx.clearRect(0, 0, self.cv.width, self.cv.height);
      self.widgets.forEach(function (w) {
        Sk.misceval.callsim(w["draw"], self.ctx);
      });         
      return Sk.builtin.none.none$;
    });
  }, 'MyCanvas', []);
  mod.MyImage=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self) {
      var cvId=a.v;
      var cv=document.getElementById(cvId); 
      var ctx=cv.getContext("2d");
      self.img=new Image();
      self.x=0;
      self.y=0;
      img.src="knight.png";
      img.addEventListener("load", function() {
        ctx.drawImage(img, 0, 0);
      });
      return Sk.builtin.none.none$;
    });
    $loc.set_pos=new Sk.builtin.func(function (self, x, y) {
      self.x=Sk.ffi.remapToJs(x);
      self.y=Sk.ffi.remapToJs(y);
      return Sk.builtin.none.none$;
    });
  }, 'MyImage', []);
  return mod;
};
