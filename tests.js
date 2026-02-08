// Use Chai's expect for assertions
const expect = chai.expect;

describe('getTriangleType', () => {
  describe('Valid inputs', () => { 
    describe('Equilateral Triangles', () => {
      it('getTriangleType with all side equals to 2 should return equilateral', function() {
        expect(getTriangleType(2,2,2)).to.equal(EQUILATERAL);
      });
      it('getTriangleType with all side equals to 0.1 should return equilateral', function() {
        expect(getTriangleType(0.1,0.1,0.1)).to.equal(EQUILATERAL);
      });
      it('getTriangleType with all side equals to 99999 should return equilateral', function() {
        expect(getTriangleType(99999,99999,99999)).to.equal(EQUILATERAL);
      });
    }); 
    describe('Isosceles Triangles', () => {
      it('getTriangleType with first and second sides equal but different to third should return isosceles', function() {
        expect(getTriangleType(2,2,3)).to.equal(ISOSCELES);
      });
      it('getTriangleType with first and third sides equal but different to second should return isosceles', function() {
        expect(getTriangleType(0.1,0.15,0.1)).to.equal(ISOSCELES);
      });
      it('getTriangleType with second and third sides equal but different to first should return isosceles', function() {
        expect(getTriangleType(99999,99998,99998)).to.equal(ISOSCELES);
      });
    }); 
    describe('Scalene Triangles', () => {
      it('getTriangleType with all three sides different with third the biggest should return scalene', function() {
        expect(getTriangleType(2,3,4)).to.equal(SCALENE);
      });
      it('getTriangleType with all three sides different with second the biggest should return scalene', function() {
        expect(getTriangleType(2,10,9)).to.equal(SCALENE);
      });
      it('getTriangleType with all three sides different with first the biggest should return scalene', function() {
        expect(getTriangleType(10000.03,10000.01,10000.02)).to.equal(SCALENE);
      });
    });
  });
  describe('Not a triangle', () => {
    it('getTriangleType with sides 1,3,4 should return not a triangle', function() {
      expect(getTriangleType(1,3,4)).to.equal(NOT_A_TRIANGLE);
    });
    it('getTriangleType with sides 10,20,10 should return not a triangle', function() {
        expect(getTriangleType(10,20,10)).to.equal(NOT_A_TRIANGLE);
    });
    it('getTriangleType with sides 0.2,0.1,0.1 should return not a triangle', function() {
        expect(getTriangleType(0.2,0.1,0.1)).to.equal(NOT_A_TRIANGLE);
    });
    it('getTriangleType with sides 10,20.00001,10 should return not a triangle', function() {
          expect(getTriangleType(10,20.00001,10)).to.equal(NOT_A_TRIANGLE);
    });   
  });
  describe('Invalid arguments', () => {
    it('getTriangleType with all sides equals to 0 should return invalid arguments', function() {
      expect(getTriangleType(0,0,0)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with first side negative should return invalid arguments', function() {
      expect(getTriangleType(-1,1,1)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with second side negative should return invalid arguments', function() {
      expect(getTriangleType(2,-5,3)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with third side negative should return invalid arguments', function() {
      expect(getTriangleType(2,5, -2.99999)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with first side a letter should return invalid arguments', function() {
      expect(getTriangleType('N',1,1)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with second side a special char should return invalid arguments', function() {
      expect(getTriangleType(2,'!',3)).to.equal(INVALID_ARGUMENTS);
    }); 
    it('getTriangleType with third side a letter should return invalid arguments', function() {
      expect(getTriangleType(2,5, 'AA')).to.equal(INVALID_ARGUMENTS);
    });    
  });
});
