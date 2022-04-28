describe("Esto es una suite de pruebas", () => {
    test("Caso de prueba 1", () => {
        const Reader = require("./../lib/utils/Reader");

        const explorers=Reader.readJsonFile("explorers.json"); 
        console.log(explorers);
    });
});
  