var $builtinmodule=function(name) {
  var mod={};
  mod.Timer=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self, intMs) {
      var intv=Sk.ffi.remapToJs(intMs);
      self.timerId=setInterval(function() {
      	 //Sk.misceval.callsimArray(self["on_timer"], [self]);
         Sk.misceval.applyAsync(undefined, self["on_timer"], undefined, undefined, undefined, [self]);
      }, intv);
      return Sk.builtin.none.none$;
    });
    $loc.cancel=new Sk.builtin.func(function (self) {
      clearInterval(self.timerId);
      return Sk.builtin.none.none$;
    });
    $loc.on_timer=new Sk.builtin.func(function (self) {
      return Sk.builtin.none.none$;
    });
  }, 'Timer', []);
  return mod;
};
