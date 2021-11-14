
const Manager =require( "../lib/Manager");
describe ("Manager",()=>{
    describe("Instantiation",()=>{
        it("should create an object with a name,id,emailand Ph no  if provided valid arguments", () => {
            const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.officeNumber).toEqual(1234567890);
          });

    });

    describe("getName", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
          expect(emp.getName()).toBe("Sarah");
        });
    });
    describe("getId", () => {
        it("should return the Id", () => {
          // Create new objects to test with
          const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
          expect(emp.getId()).toBe(3);
        });
    });
    describe("getEmail", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
          expect(emp.getEmail()).toBe("sarah@gmail.com");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
          expect(emp.getOfficeNumber()).toBe(1234567890);
        });
    });

    describe("getRole", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Manager("Sarah", 3,"sarah@gmail.com",1234567890);
          expect(emp.getRole()).toBe("Manager");
        });
    });


});