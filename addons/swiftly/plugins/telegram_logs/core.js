exp("SendToTelegram", function(text, buttons = null) {
    const data = {
        chat_id: config.Fetch("telegram_logs.chat_id"),
        text: mainMessage(text),
        parse_mode: "MarkdownV2"
    };

    if (buttons && buttons.length > 0) {
        const rows = {};

        buttons.forEach(btn => {
            const button = { text: btn.text };

            switch (btn.type || 'url') {
                case 'url':
                    button.url = btn.value;
                    break;
                case 'web_app':
                    button.web_app = { url: btn.value };
                    break;
                case 'callback':
                    button.callback_data = btn.value;
                    break;
            }

            const rowIndex = btn.row ?? 0; 
            if (!rows[rowIndex]) rows[rowIndex] = [];
            rows[rowIndex].push(button);
        });

        data.reply_markup = {
            inline_keyboard: Object.keys(rows)
                .sort((a, b) => a - b)
                .map(key => rows[key])
        };
    }

    PerformHTTPRequest(`https://api.telegram.org/bot${config.Fetch("telegram_logs.bot_token")}/sendMessage`, () => {}, "POST", JSON.stringify(data), { "Content-Type": "application/json" }, null );
})