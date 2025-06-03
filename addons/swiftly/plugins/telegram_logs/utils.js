function escapeMarkdown(str) { return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&'); }

function mainMessage(text) { 
    return `
*${FetchTranslation("telegram_logs.server_name")}:* \`${escapeMarkdown(config.Fetch("telegram_logs.server_name"))}\`
*${FetchTranslation("telegram_logs.server_ip")}:* \`${escapeMarkdown(config.Fetch("telegram_logs.server_ip"))}\`

${escapeMarkdown(text)}
`.trim();
}