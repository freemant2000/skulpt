from p4k.draw import Image

class Knight(Image):
  def __init__(self, x, y):
    Image.__init__(self, "assets/knight.png", x, y);
    self.n=0
  def move(self):
    self.n=self.n+1
    self.set_pos(self.n*20, 0)

