var $builtinmodule=function(name) {
  var mod={};
  mod.import_main_with_body=new Sk.builtin.func(function (name, dumpJs, body, canSuspend) {
    Sk.importMainWithBody(Sk.ffi.remapToJs(name), Sk.ffi.remapToJs(dumpJs), Sk.ffi.remapToJs(body), Sk.ffi.remapToJs(canSuspend));
    return Sk.builtin.none.none$;
  });
  return mod;
};
