var $builtinmodule=function(name) {
  var mod={};
  mod.show_msg=new Sk.builtin.func(function (msg) {
    msg=Sk.ffi.remapToJs(msg);
    window.alert(msg);
    return Sk.builtin.none.none$;
  });
  mod.show_dlg=new Sk.builtin.func(function (title, contentHtml, onCloseFunc) {
    title=Sk.ffi.remapToJs(title);
    contentHtml=Sk.ffi.remapToJs(contentHtml);
    $(contentHtml).dialog({
      title: title,
      close: function() {
        Sk.misceval.applyAsync(undefined, onCloseFunc, undefined, undefined, undefined, []);
      }
    });
    return Sk.builtin.none.none$;
  });
  return mod;
};
