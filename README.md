User1978LinkerBot

User1978LinkerBot is a simple Telegram bot built with Node.js that converts Telegram usernames into clickable profile links.

Project Overview

This project demonstrates backend development skills, secure environment variable handling, Git version control workflow, and cloud deployment. The bot integrates with the Telegram Bot API and validates usernames before generating a profile link.

The bot transforms input like:
@username
username
https://t.me/username

into a direct profile link:
https://t.me/username

Features

Accepts different username formats

Validates Telegram username rules (5–32 characters, letters, numbers, underscore)

Returns a correct clickable t.me link

Handles invalid input properly

Uses environment variables for secure token storage

Ready for cloud deployment

Technology Stack

Node.js

node-telegram-bot-api

dotenv

Git & GitHub

Render (cloud hosting)

Security

The Telegram bot token is stored securely in an environment variable called BOT_TOKEN.
The .env file is excluded from version control using .gitignore.

Local Setup

Clone the repository.

Run npm install.

Create a .env file with BOT_TOKEN set to your Telegram bot token.

Run npm start.

Deployment

The bot can be deployed on any Node.js hosting platform such as Render or Railway.
Build command: npm install
Start command: node index.js
Environment variable required: BOT_TOKEN

What This Project Demonstrates

Backend development fundamentals

Integration with external APIs

Secure handling of secrets

Basic cloud deployment

Clean project structure

Example

Input:
@durov

Output:
https://t.me/durov
