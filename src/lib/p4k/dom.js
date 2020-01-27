var $builtinmodule=function(name) {
  var mod={};
  mod.get_elem_val=new Sk.builtin.func(function (selector) {
    var s=Sk.ffi.remapToJs(selector);
    var v=$(s).val();
    return Sk.ffi.remapToPy(v);
  });
  return mod;
};
