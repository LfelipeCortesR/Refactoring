const Reader =require("./../utils/Reader");
const ExplorerService =require("./../services/ExplorerService");
const FizzbuzzService =require("./../services/FizzbuzzService");

class ExplorerContreller{

    static getExplorersByMission(mission){
        const explorer =Reader.readJsonFile("explorers.json")
        const listexplorers=ExplorerService.filterByMission(explorer,mission)
        return listexplorers;
    }

    static getExplorersAmonutByMission(mission){
        const explorer =Reader.readJsonFile("explorers.json")
        const amountexplorers=ExplorerService.getAmountOfExplorersByMission(explorer,mission)
        return amountexplorers;
    }

}

module.exports=ExplorerContreller;