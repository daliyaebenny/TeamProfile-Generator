const Engineer =require( "../lib/Engineer");
describe ("Engineer",()=>{
    describe("Instantiation",()=>{
        it("should create an object with a name,id,emailand Ph no  if provided valid arguments", () => {
            const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
            expect(emp.name).toEqual("Sarah");
            expect(emp.id).toEqual(3);
            expect(emp.email).toEqual("sarah@gmail.com");
            expect(emp.github).toEqual("SARAHGITHUB");
          });

    });

    describe("getName", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
          expect(emp.getName()).toBe("Sarah");
        });
    });
    describe("getId", () => {
        it("should return the Id", () => {
          // Create new objects to test with
          const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
          expect(emp.getId()).toBe(3);
        });
    });
    describe("getEmail", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
          expect(emp.getEmail()).toBe("sarah@gmail.com");
        });
    });
    describe("getGithub", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
          expect(emp.getGithub()).toBe("SARAHGITHUB");
        });
    });

    describe("getRole", () => {
        it("should return the name", () => {
          // Create new objects to test with
          const emp = new Engineer("Sarah", 3,"sarah@gmail.com","SARAHGITHUB");
          expect(emp.getRole()).toBe("Engineer");
        });
    });


});