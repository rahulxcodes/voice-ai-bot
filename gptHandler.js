const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getGPTResponse(prompt) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    return chatCompletion.choices[0].message.content;
  } catch (err) {
    console.error("Error in getGPTResponse:", err);
    return "Sorry, there was an error processing your request.";
  }
}

module.exports = { getGPTResponse };
