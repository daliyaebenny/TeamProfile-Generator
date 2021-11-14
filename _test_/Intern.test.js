
const Intern =require( "../lib/Intern");
describe ("Intern",()=>{
    describe("Instantiation",()=>{
        it("should create an object with a name,id,emailand Ph no  if provided valid arguments", () => {
            const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.school).toEqual("ABC");
          });

    });

    describe("getName", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
          expect(emp.getName()).toBe("Sarah");
        });
    });
    describe("getId", () => {
        it("should return the Id", () => {
          // Create new objects to test with
          const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
          expect(emp.getId()).toBe(3);
        });
    });
    describe("getEmail", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
          expect(emp.getEmail()).toBe("sarah@gmail.com");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
          expect(emp.getSchool()).toBe("ABC");
        });
    });

    describe("getRole", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Intern("Sarah", 3,"sarah@gmail.com","ABC");
          expect(emp.getRole()).toBe("Intern");
        });
    });


});