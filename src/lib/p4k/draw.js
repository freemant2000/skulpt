/*
  how to call a method on a python object:
  mod.change_foo=new Sk.builtin.func(function (foo, n) {
    Sk.misceval.callsimArray(foo["set_num"], [foo, n]);
    return Sk.builtin.none.none$;
  });
*/

var $builtinmodule=function(name) {
  var mod={};
  mod.CanvasContext=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self, cvId) {
      self.cvId=Sk.ffi.remapToJs(cvId);
      self.cv=document.getElementById(self.cvId);
      self.ctx=cv.getContext("2d");
      return Sk.builtin.none.none$;
    });
    $loc.get_context=new Sk.builtin.func(function (self) {
      return self.ctx;
    });
    $loc.save=new Sk.builtin.func(function (self) {
      self.ctx.save();
      return Sk.builtin.none.none$;
    });
    $loc.restore=new Sk.builtin.func(function (self) {
      self.ctx.restore();
      return Sk.builtin.none.none$;
    });
    $loc.set_fill_style=new Sk.builtin.func(function (self, fs) {
      self.ctx.fillStyle=Sk.ffi.remapToJs(fs);
      return Sk.builtin.none.none$;
    });
    $loc.set_stroke_style=new Sk.builtin.func(function (self, ss) {
      self.ctx.strokeStyle=Sk.ffi.remapToJs(ss);
      return Sk.builtin.none.none$;
    });
    $loc.set_font=new Sk.builtin.func(function (self, fn) {
      self.ctx.font=Sk.ffi.remapToJs(fn);
      return Sk.builtin.none.none$;
    });
    $loc.fill_text=new Sk.builtin.func(function (self, txt, x, y) {
      self.ctx.fillText(Sk.ffi.remapToJs(txt), Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y));
      return Sk.builtin.none.none$;
    });
    $loc.fill_rect=new Sk.builtin.func(function (self, x, y, w, h) {
      self.ctx.fillRect(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), Sk.ffi.remapToJs(w), Sk.ffi.remapToJs(h));
      return Sk.builtin.none.none$;
    });
    $loc.clear_rect=new Sk.builtin.func(function (self, x, y, w, h) {
      self.ctx.clearRect(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), Sk.ffi.remapToJs(w), Sk.ffi.remapToJs(h));
      return Sk.builtin.none.none$;
    });
    $loc.begin_path=new Sk.builtin.func(function (self) {
      self.ctx.beginPath();
      return Sk.builtin.none.none$;
    });
    $loc.move_to=new Sk.builtin.func(function (self, x, y) {
      self.ctx.moveTo(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y));
      return Sk.builtin.none.none$;
    })
    $loc.line_to=new Sk.builtin.func(function (self, x, y) {
      self.ctx.lineTo(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y));
      return Sk.builtin.none.none$;
    })
    $loc.arc=new Sk.builtin.func(function (self, x, y, start_rad, end_rad, acw) {
      self.ctx.arc(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), Sk.ffi.remapToJs(start_rad), Sk.ffi.remapToJs(end_rad), Sk.ffi.remapToJs(acw));
      return Sk.builtin.none.none$;
    });
    $loc.fill=new Sk.builtin.func(function (self) {
      self.ctx.fill();
      return Sk.builtin.none.none$;
    });
    $loc.stroke=new Sk.builtin.func(function (self) {
      self.ctx.stroke();
      return Sk.builtin.none.none$;
    });
    $loc.translate=new Sk.builtin.func(function (self, x, y) {
      self.ctx.translate(Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y));
      return Sk.builtin.none.none$;
    });
    $loc.rotate=new Sk.builtin.func(function (self, rad) {
      self.ctx.rotate(Sk.ffi.remapToJs(rad));
      return Sk.builtin.none.none$;
    });
    $loc.scale=new Sk.builtin.func(function (self, sx, sy) {
      self.ctx.scale(Sk.ffi.remapToJs(sx), Sk.ffi.remapToJs(sy));
      return Sk.builtin.none.none$;
    });
    $loc.get_width=new Sk.builtin.func(function (self) {
      return Sk.ffi.remapToPy(self.cv.width);
    });
    $loc.get_height=new Sk.builtin.func(function (self) {
      return Sk.ffi.remapToPy(self.cv.height);
    });
  }, 'CanvasContext', []);
  mod.Image=Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__=new Sk.builtin.func(function (self, srcUrl, x, y) {
      self.x=Sk.ffi.remapToJs(x);
      self.y=Sk.ffi.remapToJs(y);
      self.img=new Image();
      self.img.src=Sk.ffi.remapToJs(srcUrl);
      var sp=new Sk.misceval.Suspension();
      sp.resume=function() {
        if (sp.data["error"]) {
          throw new Sk.builtin.IOError("unable to load image:" + self.img.src);
        }
      };
      sp.data={
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {
          self.img.addEventListener("load", function() {
            resolve();
          });      
          self.img.addEventListener("error", function() {
            reject(new Error("Unable to load the image"));
          });      
        })
      };
      return sp;
    });
    $loc.set_pos=new Sk.builtin.func(function (self, x, y) {
      self.x=Sk.ffi.remapToJs(x);
      self.y=Sk.ffi.remapToJs(y);
      return Sk.builtin.none.none$;
    });
    $loc.set_size=new Sk.builtin.func(function (self, w, h) {
      self.w=Sk.ffi.remapToJs(w);
      self.h=Sk.ffi.remapToJs(h);
      return Sk.builtin.none.none$;
    });
    $loc.draw=new Sk.builtin.func(function (self, ctx) {
      if ((typeof self.w != "undefined") && (typeof self.h != "undefined")) {
        ctx.drawImage(self.img, self.x, self.y, self.w, self.h);
      } else {
        ctx.drawImage(self.img, self.x, self.y);
      }
      return Sk.builtin.none.none$;
    });
    $loc.drawWithMapping=new Sk.builtin.func(function (self, ctx, sx, sy, sw, sh) {
      var sx=Sk.ffi.remapToJs(sx);
      var sy=Sk.ffi.remapToJs(sy);
      var sw=Sk.ffi.remapToJs(sw);
      var sh=Sk.ffi.remapToJs(sh);
      ctx.drawImage(self.img, sx, sy, sw, sh, self.x, self.y, self.w, self.h);
      return Sk.builtin.none.none$;
    });
  }, 'Image', []);
  return mod;
};
