import * as challenge from "./js11";

describe("greet() tests", () => {
     
    it("Should return the response ", () => {
      expect(challenge.greet()).toBe("Hello, nice to meet you");
     
    });
  });

  describe("sumTwoNumbers tests", () => {     
    it("Should return the sumTwoNumbers are 4 and 5 return 9  ", () => {
      expect(challenge.sumTwoNumbers(4,5)).toBe(9);
     });
     it("Should return the sumTwoNumbers are 4.3 and 5.5 return 9.8  ", () => {
        expect(challenge.sumTwoNumbers(4.3,5.5)).toBe(9.8);
       });
  });

  describe('checkLarger tests', () => {
     it('should returns greater number 40 when 30, 40 passed', () => {
        expect(challenge.checkLarger(30,40)).toBe("40 is bigger than 30");
     }); 
     it('should returns greater number 50 when 50, 40 passed', () => {
        expect(challenge.checkLarger(50,40)).toBe("50 is bigger than 40");
    });
    it('should returns greater number -40 when -50, -40 passed', () => {
        expect(challenge.checkLarger(-40,-50)).toBe("-40 is bigger than -50");
    });
    it('should returns greater number -30 when -30, -40 passed', () => {
        expect(challenge.checkLarger(-30,-40)).toBe("-30 is bigger than -40");
    });
    //Both numbers are equal
    it('should returns equal numbers when -30, -30 passed', () => {
        expect(challenge.checkLarger(-30,-30)).toBe("Both numbers are equal");
    });
  });

  describe('test filterByLength', () => {
      const names=["kirti","ria","raveen", "tripti","vaishya"];

      it('should returns valid name', () => {
        expect(challenge.filterByLength(names)).toStrictEqual(["kirti","ria","raveen", "tripti"]);
      });
      it('should returns invalid name', () => {
        expect(challenge.filterByLength(["vaishya"])).toBe("Sorry, no valid names supplied");
      });
  })

  describe('test reduceNumbers', () => {    

    it('should returns 0', () => {
      expect(challenge.reduceNumbers([3,5,5],15)).toStrictEqual([0,0,0]);
    });
    it('should returns 255', () => {
        expect(challenge.reduceNumbers([500,600,400],100)).toStrictEqual([255, 255, 255]);
      });
      it('should returns less than 255', () => {
        expect(challenge.reduceNumbers([15,15,16],15)).toStrictEqual([0, 0, 1]);
      });
})
  
  