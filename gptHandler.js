const { Configuration, OpenAIApi } = require("openai");
const config = require("./config");

const openai = new OpenAIApi(new Configuration({
  apiKey: config.openaiApiKey
}));

async function generateResponse(prompt) {
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });
  return completion.data.choices[0].message.content;
}

module.exports = { generateResponse };