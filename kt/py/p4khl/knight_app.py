from p4k.draw import CanvasContext,Image
from p4khl.knight import Knight

cc=CanvasContext("cv")
k=Knight(0, 0)
k.draw(cc.get_context())
auto_move=False

def move():
  k.move()
  cc.clear_rect(0, 0, cc.get_width(), cc.get_height())
  k.draw(cc.get_context())

def update_all():
  if auto_move:
    move()

