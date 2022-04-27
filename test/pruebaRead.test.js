const Reader=require("../refactoring/lib/utils/Reader")

const explorers=Reader.readJsonFile("explorers.json")
console.log(explorers)