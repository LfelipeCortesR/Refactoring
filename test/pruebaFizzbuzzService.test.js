describe("Esto es una suite de pruebas", () => {
    test("Caso de prueba 1", () => {
        const FizzbuzzService = require("./../lib/services/FizzbuzzService");

        const explorer1 = {name: "Explorer1", score: 1};
        // {name: "Explorer1", score: 1, trick: 1} 
        console.log(FizzbuzzService.applyValidationInExplorer(explorer1));

        const explorer3 = {name: "Explorer3", score: 3};
        console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

        const explorer5 = {name: "Explorer5", score: 5};
        console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

        const explorer15 = {name: "Explorer15", score: 15};
        console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
    });
});