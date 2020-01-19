var $builtinmodule=function(name) {
  var mod={};
  mod.Foo=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self) {
      self.num=100;
      return Sk.builtin.none.none$;
    });
    $loc.get_num=new Sk.builtin.func(function (self) {
      return Sk.ffi.remapToPy(self.num);
    });
    $loc.set_num=new Sk.builtin.func(function (self, n) {
      self.num=Sk.ffi.remapToJs(n);
      return Sk.builtin.none.none$;
    });
  }, 'Foo', []);
  mod.change_foo=new Sk.builtin.func(function (foo, n) {
    Sk.misceval.callsimArray(foo["set_num"], [foo, n]);
    return Sk.builtin.none.none$;
  });
  mod.MyImage=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self) {
      self.img=new Image();
      self.x=0;
      self.y=0;
      self.img.src="knight.png";
      return Sk.builtin.none.none$;
    });
    $loc.set_pos=new Sk.builtin.func(function (self, x, y) {
      self.x=Sk.ffi.remapToJs(x);
      self.y=Sk.ffi.remapToJs(y);
      return Sk.builtin.none.none$;
    });
    $loc.draw=new Sk.builtin.func(function (self, cvId) {
      var cv=document.getElementById(Sk.ffi.remapToJs(cvId));
      var ctx=cv.getContext("2d");
      ctx.drawImage(self.img, self.x, self.y);
      return Sk.builtin.none.none$;
    });
  }, 'MyImage', []);
  return mod;
};
