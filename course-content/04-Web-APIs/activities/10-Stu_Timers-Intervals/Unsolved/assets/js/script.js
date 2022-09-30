// timer el == <h2 id = countdown> </h2>
var timerEl = document.getElementById('countdown');
// mainEl == <p id = main> </p>
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');
//['Some', 'say', 'the', 'world', 'will', 'end', 'in', '🔥,', 'Some', 'say', 'in', 'ice.', 'From', 'what', 'I’ve', 'tasted', 'of', 'desire,', 'I', 'hold', 'with', 'those', 'who', 'favor', 'fire.', 'But', 'if', 'it', 'had', 'to', 'perish', 'twice,', 'I', 'think', 'I', 'know', 'enough', 'of', 'hate.', 'To', 'say', 'that', 'for', 'destruction', 'ice,', 'Is', 'also', 'great,', 'And', 'would', 'suffice.']
//(51)
function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft = timeLeft - 1;
    if(timeLeft > 0)
      timerEl.textContent = timeLeft;
    else
    {
      timerEl.textContent = "";
      displayMessage();
    }
      
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
