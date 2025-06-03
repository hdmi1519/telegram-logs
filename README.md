# [CORE] Telegram logs

Plugin for CS2 servers, for logging in telegram

## 📌 Installation
1. Download swiftly [core](https://github.com/swiftly-solution/swiftly/releases)
2. Move the addons folder
3. Setup config
```json
{
    "server_name": "name",
    "server_ip": "0.0.0.0:27015",

    "bot_token": "@BotFather",
    "chat_id": "chat_id"
}
```

## 🚀 Usage
```javascript
AddEventHandler("OnPlayerConnectFull", function(event) {
    exports["telegram_logs"].SendToTelegram("👤 New Player Connect!")
    
    return EventResult.Continue;
});

AddEventHandler("OnPlayerConnectFull", function(event) {
    const userId = event.GetInt("userid");
    const player = GetPlayer(userId);
    if (!player || player.IsFakeClient()) return EventResult.Continue;

    const steamId = player.GetSteamID();

    exports["telegram_logs"].SendToTelegram("👤 New Player Connect!", [
        { text: "Web Site", type: "url", value: "https://domain.com", row: 0 },
        { text: "Web App Site", type: "web_app", value: "https://domain.com", row: 1 },
        { text: "Kick", type: "callback", value: `kick_player_${steamId}`, row: 2 }
    ])
    
    return EventResult.Continue;
});
```