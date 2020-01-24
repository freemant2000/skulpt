var $builtinmodule=function(name) {
  var mod={};
  mod.show_msg=new Sk.builtin.func(function (msg) {
    msg=Sk.ffi.remapToJs(msg);
    window.alert(msg);
    return Sk.builtin.none.none$;
  });
  return mod;
};
