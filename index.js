class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((t, n) => t + n, 0)
    }
}
class Triangle extends Polygon{
    constructor(sides){
        super(sides);
    }
    get isValid(){
        let a = this.sides[0],
            b = this.sides[1],
            c = this.sides[2];
        switch (true){
            case a + b <= c:
            case b + c <= a:
            case a + c <= b:
            case this.countSides !==3:
                return false;
            default:
                return true;
        }
    }
}
class Square extends Polygon{
    constructor(sides){
        super(sides)
    }
    get area(){
        return this.sides[0] **2;
    }
    get isValid(){
        if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides [3] && this.sides.length === 4){
            return true;
        }
        else {
            return false;
        }
    }
}

/*
describe( "Square", () => {
  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.perimeter ).to.eq( 20 )
  } )

  it( "calculates the area", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.area ).to.eq( 25 )
  } )

  it( "checks for valid square", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )
    let square2 = new Square( [ 5, 4, 3, 2 ] )

    expect( square.countSides ).to.eq( 4 )
    expect( square.isValid ).to.be.true
    expect( square2.isValid ).to.be.false
  } )
} )
*/