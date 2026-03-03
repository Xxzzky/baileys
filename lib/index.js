"use strict";

const chalk = require("chalk");

// Fungsi untuk menampilkan teks dengan efek typewriter (per karakter)
const typeWriter = (text, delay, color = 'white', callback = null) => {
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write(chalk[color](text[index]));
    index++;
    if (index === text.length) {
      clearInterval(interval);
      console.log();
      if (callback) callback();
    }
  }, delay);
};

// Fungsi untuk menampilkan teks dengan efek rainbow (warna berganti per karakter)
const rainbowWriter = (text, delay, callback) => {
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(chalk[colors[i % colors.length]](text[i]));
    i++;
    if (i === text.length) {
      clearInterval(interval);
      console.log();
      if (callback) callback();
    }
  }, delay);
};

// Banner utama dengan efek per karakter dan jeda antar baris 1 detik
const showBanner = () => {
  const banner = [
    "██╗  ██╗██╗  ██╗███████╗███████╗██╗  ██╗██╗   ██╗",
    "╚██╗██╔╝╚██╗██╔╝╚══███╔╝╚══███╔╝██║ ██╔╝╚██╗ ██╔╝",
    " ╚███╔╝  ╚███╔╝   ███╔╝   ███╔╝ █████╔╝  ╚████╔╝ ",
    " ██╔██╗  ██╔██╗  ███╔╝   ███╔╝  ██╔═██╗   ╚██╔╝  ",
    "██╔╝ ██╗██╔╝ ██╗███████╗███████╗██║  ██╗   ██║   ",
    "╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   "
  ];

  let lineIndex = 0;

  const printNextLine = () => {
    if (lineIndex < banner.length) {
      // Gunakan rainbowWriter untuk setiap baris agar lebih hidup
      rainbowWriter(banner[lineIndex], 20, () => {
        lineIndex++;
        setTimeout(printNextLine, 1000); // jeda 1 detik antar baris
      });
    } else {
      setTimeout(showInfo, 800);
    }
  };

  printNextLine();
};

// Informasi tambahan dengan efek yang lebih detail
const showInfo = () => {
  console.log();

  // Efek teks berkedip dengan latar gradien (menggunakan chalk dan interval)
  const creatorText = "Creator : @rkyyzz";
  const creatorColors = ['cyan', 'blue', 'magenta', 'green', 'yellow', 'red'];
  let colorIndex = 0;
  
  const creatorInterval = setInterval(() => {
    process.stdout.write('\r' + chalk[creatorColors[colorIndex]].bold(creatorText));
    colorIndex = (colorIndex + 1) % creatorColors.length;
  }, 150);

  setTimeout(() => {
    clearInterval(creatorInterval);
    console.log('\n' + chalk.green.bold('═').repeat(50));

    // Tampilkan note dengan efek typewriter biasa
    const note = "Note : Thank You For Using My Baileys";
    typeWriter(note, 60, 'white', () => {
      console.log(chalk.green.bold('═').repeat(50));
      console.log();

      // Efek tambahan: teks berjalan (marquee) sederhana untuk "RKYYZZ PRESENTS"
      const marqueeText = "⚡ RKYYZZ PRESENTS ⚡";
      let marqueePos = 0;
      const marqueeInterval = setInterval(() => {
        const spaces = ' '.repeat(marqueePos);
        process.stdout.write('\r' + chalk.cyan(spaces + marqueeText));
        marqueePos = (marqueePos + 1) % 10;
      }, 200);

      setTimeout(() => {
        clearInterval(marqueeInterval);
        console.log('\r' + chalk.cyan('⚡ RKYYZZ PRESENTS ⚡').padStart(30));
        console.log(chalk.magenta.bold('『 BAILEYS WHATSAPP BOT 』'));
        console.log(chalk.green.bold('═').repeat(50));

        // Animasi loading system ready dengan spinner dan progress
        const spinner = ['◴', '◷', '◶', '◵', '◴', '◷', '◶', '◵'];
        let spinIndex = 0;
        let progress = 0;
        const systemInterval = setInterval(() => {
          process.stdout.write('\r' + chalk.yellow(`System Ready ${spinner[spinIndex]} [`) +
            chalk.green('█'.repeat(progress / 2)) +
            chalk.gray('░'.repeat(25 - progress / 2)) +
            chalk.yellow(`] ${progress}%`));
          spinIndex = (spinIndex + 1) % spinner.length;
          progress += 2;
          if (progress > 100) {
            clearInterval(systemInterval);
            console.log('\r' + chalk.green('✓ System Ready!') + ' '.repeat(30));
            console.log(chalk.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
          }
        }, 80);
      }, 1500);
    });
  }, 2000);
};

// Bersihkan console
console.clear();

// Header pembuka dengan animasi typing
console.log(chalk.cyan('╔═══════════════════════════════════════════╗'));
console.log(chalk.cyan('║      BAILEYS WHATSAPP BOT INITIALIZING     ║'));
console.log(chalk.cyan('╚═══════════════════════════════════════════╝\n'));

// Animasi loading dengan progress bar yang lebih detail
const totalSteps = 50;
let step = 0;
const loadingInterval = setInterval(() => {
  step++;
  const percent = Math.min(100, Math.floor((step / totalSteps) * 100));
  const filled = Math.floor(percent / 2);
  const empty = 50 - filled;
  process.stdout.write('\r' + chalk.yellow('Loading ') + 
    chalk.white('[') + 
    chalk.green('█'.repeat(filled)) + 
    chalk.gray('░'.repeat(empty)) + 
    chalk.white('] ') + 
    chalk.cyan(percent + '%'));
  
  if (step >= totalSteps) {
    clearInterval(loadingInterval);
    console.log('\n' + chalk.green.bold('✓ LOADING COMPLETE!\n'));
    setTimeout(showBanner, 500);
  }
}, 50);

// Kode asli library Baileys (jangan diubah)
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
