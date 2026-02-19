require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("Set BOT_TOKEN env var");

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = (msg.text || "").trim();

  if (!text || text.startsWith("/")) {
    bot.sendMessage(chatId, "Отправь username: @durov или durov");
    return;
  }

  let u = text.replace(/^@/, "").replace(/^https?:\/\/t\.me\//i, "");
  const ok = /^[a-zA-Z0-9_]{5,32}$/.test(u);

  bot.sendMessage(chatId, ok ? `https://t.me/${u}` : "Неверный username. Пример: @durov");
});
