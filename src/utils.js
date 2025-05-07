"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPreset = exports.cloneDeep = exports.saveToFile = void 0;
const PresetWeightings_json_1 = __importDefault(require("../config/PresetWeightings.json"));
const Presets_json_1 = __importDefault(require("../config/advanced/Presets.json"));
const saveToFile = (data, filePath) => {
    var fs = require("fs");
    let dir = __dirname;
    let dirArray = dir.split("\\");
    const directory = `${dirArray[dirArray.length - 4]}/${dirArray[dirArray.length - 3]}/${dirArray[dirArray.length - 2]}/`;
    fs.writeFile(directory + filePath, JSON.stringify(data, null, 4), function (err) {
        if (err)
            throw err;
    });
};
exports.saveToFile = saveToFile;
const cloneDeep = (objectToClone) => JSON.parse(JSON.stringify(objectToClone));
exports.cloneDeep = cloneDeep;
const getRandomPreset = (logger) => {
    const all = [];
    const itemKeys = Object.keys(PresetWeightings_json_1.default);
    for (const key of itemKeys) {
        for (let i = 0; i < PresetWeightings_json_1.default[key]; i++) {
            all.push(key);
        }
    }
    const preset = all[Math.round(Math.random() * (all.length - 1))];
    console.log(`[MOAR] Bot preset set to: ${preset.toUpperCase()}`);
    return Presets_json_1.default[preset];
};
exports.getRandomPreset = getRandomPreset;
//# sourceMappingURL=utils.js.map