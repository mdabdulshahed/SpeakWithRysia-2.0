const btn = document.querySelector(".btn");
const text = document.querySelector(".para");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

var greetings = ["Hello,how are you", "Hey! Whats up.."];

recognition.onstart = () => {
  console.log("VOICE IS ACTIVATED...");
};

recognition.onresult = function (event) {
  console.log(event);
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  text.textContent = "YOU SAID :" + transcript;
  readoutput(transcript);
};

//on click button method
btn.addEventListener("click", () => {
  recognition.start();
});

function readoutput(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I didn't get you";
  if (message.includes("hello") || message.includes("hi")) {
    var reply = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = reply;
  } else if (message.includes("delete first")) {
    speech.text = "deleting a div with classname first";
    document.querySelector(".first").remove();
  } else if (
    message.includes("create an element") ||
    message.includes("add an element")
  ) {
    speech.text = "new div added";
    var node = document.createElement("div");
    var textnode = document.createTextNode("new div");
    node.appendChild(textnode);
    node.className = "newdiv";
    document.getElementById("temp").appendChild(node);
  } else if (message.includes("delete an element")) {
    if (temp.childElementCount !== 0) {
      document.querySelector(".newdiv").remove();
      speech.text = "an element was deleted";
    } else {
      speech.text = "no elements to delete";
    }
  } else if (
    message.includes("add a file") ||
    message.includes("upload a file")
  ) {
    var change = document.getElementById("ufile");
    change.style.display = "block";
    speech.text = "Choose a file";
  }
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
