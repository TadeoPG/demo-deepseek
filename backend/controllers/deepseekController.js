const axios = require('axios');

async function callDeepseek(messages) {
  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'deepseek/deepseek-r1:free',
      messages: messages,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Title': 'api-productos'
        'User-Agent': 'api-productos/1.0',
      },
    }
  );

  return response.data;
}

module.exports = { callDeepseek };
