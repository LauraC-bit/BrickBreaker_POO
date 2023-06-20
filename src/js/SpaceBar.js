class SpaceBar {
  constructor(color, x, y, width, height) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }
  get color() {
    return this._color;
  }
  set color(in_color) {
    this._color = in_color;
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

  get width() {
    return this._width;
  }
  set width(in_width) {
    this._width = in_width;
  }

  get height() {
    return this._height;
  }
  set height(in_height) {
    this._height = in_height;
  }

  moove(e, canvasDom) {
    switch (e.key) {
      case "ArrowRight":
        if (this.x < canvasDom.width - this.width) {
          this.x = this.x + 30;
        }
        break;

      case "ArrowLeft":
        if (this.x > 0) {
          this.x = this.x - 30;
        }
        break;
    }
  }
}

export default SpaceBar;
