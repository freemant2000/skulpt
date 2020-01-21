from bottle import static_file, route, run

@route("/<filename:path>")
def send_static(filename):
  return static_file(filename, root="/home/kent/skulpt/kt")

run(host="localhost", port=8080, debug=True)
