"use strict";

const chalk = require("chalk");

const borderStyle = "border: 2px solid #feca57; padding: 2px 5px; border-radius: 5px;";

console.log("%c╔════════════════════════════════╗", "color: #feca57; font-weight: bold;");
console.log("%c║      BAILEYS CONNECTION       ║", "color: #feca57; font-weight: bold; font-size: 14px;");
console.log("%c╚════════════════════════════════╝", "color: #feca57; font-weight: bold;");

console.log("%c Hi bro! Thanks for using my Baileys. ", "color: #222f3e; background: #c8d6e5; font-weight: bold; " + borderStyle);

console.log("%c📅 Last Core Update", "color: #00d2d3; font-weight: bold;");
console.log("   └── 15 Februari 2026");

console.log("%c💬 Developer Contact", "color: #f368e0; font-weight: bold;");
console.log("   └── Telegram: %c@rkyyzz", "color: #ff9f43; font-weight: bold; text-decoration: underline;");

console.log("%c✅ Panel siap digunakan! ✅", "color: #1dd1a1; font-weight: bold; font-size: 12px;");

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;