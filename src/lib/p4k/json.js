var $builtinmodule=function(name) {
  var mod={};
  mod.dumps=new Sk.builtin.func(function (data) {
    data=Sk.ffi.remapToJs(data);
    var json=JSON.stringify(data);
    return Sk.ffi.remapToPy(json);
  });
  mod.loads=new Sk.builtin.func(function (json) {
    json=Sk.ffi.remapToJs(json);
    var data=JSON.parse(json);
    return Sk.ffi.remapToPy(data);
  });
  return mod;
};
