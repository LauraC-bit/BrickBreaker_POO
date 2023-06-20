class Circle {
  constructor(color, radius, x, y) {
    this._color = color;
    this._radius = radius;
    this._x = x;
    this._y = y;
    this._currentDirectionVertical = 1;
    this._currentDirectionHorizontal = 1;
  }

  get currentDirectionVertical() {
    return this._currentDirectionVertical;
  }
  set currentDirectionVertical(in_currentDirectionVertical) {
    this._currentDirectionVertical = in_currentDirectionVertical;
  }

  get currentDirectionHorizontal() {
    return this._currentDirectionHorizontal;
  }
  set currentDirectionHorizontal(in_currentDirectionHorizontal) {
    this._currentDirectionHorizontal = in_currentDirectionHorizontal;
  }

  get radius() {
    return this._radius;
  }
  set radius(in_radius) {
    this._radius = in_radius;
  }

  get x() {
    return this._x;
  }
  set x(in_x) {
    this._x = in_x;
  }

  get y() {
    return this._y;
  }
  set y(in_y) {
    this._y = in_y;
  }

  get color() {
    return this._color;
  }
  set color(in_color) {
    this._color = in_color;
  }

  mooveCircle(ballDirection, spaceBar, canvasDom, display) {
    let game_over = false;
    if (
      this.x >= spaceBar.x &&
      this.x <= spaceBar.x + spaceBar.width &&
      this.y + this.radius >= spaceBar.y
    ) {
      this.currentDirectionVertical = ballDirection.top;
    }
    if (this.y >= canvasDom.height - this.radius) {
      game_over = true;
      alert("Game Over! Press SPACE for replay");
      this.x = Math.floor(Math.random() * canvasDom.width - this.radius);
      this.y = 5;
    }
    if (this.x >= canvasDom.width - this.radius) {
      this.currentDirectionHorizontal = ballDirection.right;
    }
    if (this.y <= 0 + this.radius) {
      this.currentDirectionVertical = ballDirection.bottom;
    }
    if (this.x <= 0 + this.radius) {
      this.currentDirectionHorizontal = ballDirection.left;
    }
    this.y = this.y + 10 * this.currentDirectionVertical;
    this.x = this.x + 10 * this.currentDirectionHorizontal;
    display(this.currentDirectionVertical, this.currentDirectionHorizontal);

    return game_over;
  }
}

export default Circle;
