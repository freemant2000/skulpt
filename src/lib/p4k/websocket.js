var $builtinmodule=function(name) {
  var mod={};
  mod.connect=new Sk.builtin.func(function (url, on_open, on_message) {
    url=Sk.ffi.remapToJs(url);
    var ws=new WebSocket(url);
    ws.onopen=function(ev) {
      Sk.misceval.applyAsync(undefined, on_open, undefined, undefined, undefined, [ws]);
    };
    ws.onmessage=function(ev) {
      var data=Sk.ffi.remapToPy(ev.data);
      Sk.misceval.applyAsync(undefined, on_message, undefined, undefined, undefined, [data]);
    };
    return ws;
  });
  mod.send=new Sk.builtin.func(function (ws, data) {
    ws.send(Sk.ffi.remapToJs(data));
    return Sk.builtin.none.none$;
  });
  mod.close=new Sk.builtin.func(function (ws) {
    ws.close();
    return Sk.builtin.none.none$;
  });
  return mod;
};
