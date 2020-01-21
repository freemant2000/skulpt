var P4KApp = {
  init: function() {
    this.initPython();
    //this.timerId=setInterval(this.updateAll, 1000);
  },
  stopUpdate: function() {
    clearInterval(this.timerId);
  },
  updateAll: function() {
    console.log("updating...");
  },
  outf: function (txt) {
    console.log(txt);
  },
  initPython: function () {
    Sk.configure({output:this.outf, read:this.readFile, retainglobals:true});
  },
  readFile: function(x) {
		var loadPyFile=function(x) {
		  if (!x.startsWith("src/") && x.endsWith(".py")) {
		    var ps=$.get("py/"+x);    
		    var sp=new Sk.misceval.Suspension();
		    sp.resume=function () {
		      if (sp.data["error"]) {
		        throw new Sk.builtin.IOError("unable to load python script:"+x)
		      }
		      return sp.data["result"];
		    };
		    sp.data={
		      type: "Sk.promise",
		      promise: ps
		    };
		    return sp;
		  }
		  throw "File not found: "+x;
		};
    if ((typeof Sk.builtinFiles)!="undefined" && (typeof Sk.builtinFiles["files"][x])!="undefined") {
      return Sk.builtinFiles["files"][x];
    }
    return loadPyFile(x);
  },
  runPython: function(codeId) {
    var prog=$("#"+codeId).val();
    this.runPythonCode(prog);
  },
  runPythonCode: function(code) {
    var prom=Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    });
    prom.then(function(mod) {
      console.log('success');
    }, function(err) {
      console.log(err.toString());
    });
  }
}

