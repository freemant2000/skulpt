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
  mod.show_input_dlg=new Sk.builtin.func(function (title, labels, onOkFunc, onCancelFunc) {
    title=Sk.ffi.remapToJs(title);
    labels=Sk.ffi.remapToJs(labels);
    var html="";
    for (var i=0; i < labels.length; i++) {
        html+="<tr><td>"+labels[i]+"</td><td><input type='text' id='input_box_"+i.toString()+"'></td></tr>";
    }
    var html="<div><table><tbody>"+html+"</tbody></table></div>";
    var d=$(html).dialog({
      title: title,
      buttons: {
        OK: function() {
            var vs=[];
            for (var i=0; i < labels.length; i++) {
                var v=d.find("#input_box_"+i.toString()).val();
                vs.push(v);
            }
            d.dialog("close");
            // if the python code throws an error, you may catch it with the promise returned
            Sk.misceval.applyAsync(undefined, onOkFunc, undefined, undefined, undefined, [Sk.ffi.remapToPy(vs)]); 
        },
        Cancel: function() {
            d.dialog("close");
            Sk.misceval.applyAsync(undefined, onCancelFunc, undefined, undefined, undefined, []);
        }
      }
    });
    return Sk.builtin.none.none$;
  });
  return mod;
};
