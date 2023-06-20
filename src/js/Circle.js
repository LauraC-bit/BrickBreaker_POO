class Circle {
  constructor(color, radius, x, y) {
    this._color = color;
    this._radius = radius;
    this._x = x;
    this._y = y;
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
}

export default Circle;
