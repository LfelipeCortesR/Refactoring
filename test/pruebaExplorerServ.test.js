describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const Reader = require("./../lib/utils/Reader")
        const ExplorerService = require("./../lib/services/ExplorerService")

        const explorers=Reader.readJsonFile("explorers.json")
        console.log(ExplorerService.filterByMission(explorers, "node"))
    });
    test('Caso de prueba 3', () => {
        const Reader = require("./../lib/utils/Reader")
        const ExplorerService = require("./../lib/services/ExplorerService")

        const explorers=Reader.readJsonFile("explorers.json")
        console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))
    });
  })