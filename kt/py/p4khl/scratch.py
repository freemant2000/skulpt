from p4k.draw import CanvasContext
cc=CanvasContext("cv")
cc.translate(0, 200)
cc.scale(1, -1)
cc.set_stroke_style("red")
cc.move_to(0, 0)
cc.line_to(50, 100)
cc.stroke()

from p4k.draw import CanvasContext,Image
cc=CanvasContext("cv")
img=Image("assets/knight.png", 0, 0)
img.set_size(100, 100)
img.draw(cc.get_context())
cc.begin_path()
cc.move_to(0, 0)
cc.line_to(64, 64)
cc.stroke()


from p4k.draw import CanvasContext,Image
cc=CanvasContext("cv")
from p4khl.knight import Knight
k=Knight(0, 0)
k.draw(cc.get_context())

k.move()
cc.clear_rect(0, 0, cc.get_width(), cc.get_height())
k.draw(cc.get_context())

import urllib.request

import pkg1.mod2
import p4khl.knight
import p4k.draw




from p4k.audio import Audio
a=Audio("assets/lose.mp3")
a.play()



from p4k.draw import CanvasContext
from p4khl.knight import Knight
cc=CanvasContext("cv")
cc.translate(0, 200)
cc.scale(1, -1)
cc.move_to(100, 100)
cc.line_to(164, 164)
cc.stroke()
cc.save()
cc.translate(100, 100+64)
cc.scale(1, -1)
img=Image("assets/knight.png", 0, 0)
img.draw(cc.get_context())
cc.restore()


