const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function returnRules(command){
    command = command.replace("OSBERT:","")
    return [{ "role": "user", "content": command }]
  }
async function runCompletion(ctx,message) {
  if(message.includes("OSBERT")){
    var rules = returnRules(message)
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: rules,
      temperature: .7,
      max_tokens: 1000,
      frequency_penalty: 0,
    });
    const result = completion.data.choices[0].message["content"]
    ctx.channel.send(result)
  }
}

function attack_brown(message) {
  const responses = ["What a fithy sand dweller",
    "Wow that guy should be hung from a tree",
    "Whats his caste tho?!?",
    "Fupa",
    "That dudes built like a range rover",
    "I can't imagine that guy being able to eat 6 wheels of cheese",
    "Imagine my shock when he starts pissing rocks",
    "Sir this is Wendys parking lot"]
  var substring = message.content.toUpperCase()
  if (substring.includes("SHATTY")) {
    message.channel.send(responses[Math.floor(Math.random() * responses.length)])
  }
}
function pray(message) {
  var substring = message.content.toUpperCase()
  if (substring.includes("TAKBIR")) {
    message.channel.send("ALLAHU AKBAR")
  }
}
module.exports = { attack_brown, pray, runCompletion };