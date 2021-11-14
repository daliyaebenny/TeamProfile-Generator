const Employee =require( "../lib/Employee.js");
describe ("Employee",()=>{
    describe("Instantiation",()=>{
        it("should create an object with a name,id,email if provided valid arguments", () => {
            const emp = new Employee("Sarah", 3,"sarah@gmail.com");
      
            // Verify that the new object has the correct properties
            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
          });

    });

    describe("getName", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Employee("Tammy", 1,"t@gmail.com");
          expect(emp.getName()).toBe("Tammy");
        });
    });
    describe("getId", () => {
        it("should return the Id", () => {
          // Create new objects to test with
          const emp = new Employee("Tammy", 1,"t@gmail.com");
          expect(emp.getId()).toBe(1);
        });
    });
    describe("getEmail", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Employee("Tammy", 1,"t@gmail.com");
          expect(emp.getEmail()).toBe("t@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Employee("Sarah", 3,"sarah@gmail.com");
          expect(emp.getRole()).toBe("Employee");
        });
    });

});