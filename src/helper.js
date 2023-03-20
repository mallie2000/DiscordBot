function attack_brown(message) {
  const responses = ["What a fithy sand negro",
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

module.exports = { attack_brown };