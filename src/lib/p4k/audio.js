var $builtinmodule=function(name) {
  var mod={};
  mod.Audio=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self, audioUrl) {
      self.au=new Audio(Sk.ffi.remapToJs(audioUrl));
      return Sk.builtin.none.none$;
    });
    $loc.play=new Sk.builtin.func(function (self) {
      self.au.play();
      return Sk.builtin.none.none$;
    });
  }, 'Audio', []);
  return mod;
};
