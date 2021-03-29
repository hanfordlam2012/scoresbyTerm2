// Make sure students' code is beautiful and consistent

// This function showResults() is called when our HTML <button> is clicked
// Everything in this function's curly braces run one at a time from top to bottom (with the complications of interacting with computer memory left out)
function showResults(){

  // We need these variables to store our quiz HTML elements
  // Requirement #17 Use getElementBySomething() functions
  // Requirement #19 Use variables
  let question1response = document.getElementsByName('question1response'); // this returns a list object of all the HTML elements with a name attribute of the value "question1response"
  let question2response = document.getElementsByName('question2response'); // this returns a list object of all the HTML elements with a name attribute of the value "question2response"
  let question3response = document.getElementsByName('question3response'); // this returns a list object of all the HTML elements with a name attribute of the value "question3response"
  let results = document.getElementById("results"); // this returns an empty <div> HTML element with the ID "results"

  // Let's add a variable to help us do some counting
  let questionsCorrect = 0; // we hoist this into our computer memory and give it an integer value of 0

  // STEP ONE
  // We need to know what our client has put in their browser
  // We can access that information by looping through our list objects and performing certain actions on them
  for (i = 0; i < question1response.length; i++) { // in our for loop, we specify that we begin at 0, then iterate through to 3 (note: because it is (0, 1, 2, 3)), each time incrementing by 1
    
    // Requirement #18 Use if... logic statements
    if (question1response[i].checked) { // our if condition asks if a particular iteration produces true for having a checked attribute
      question1response = question1response[i].value; // when it does, JavaScript rewrites our current list object stored in question1response, into a string which is the value attribute of our element
    }
  }

  // Let's do the same for our question2response
  for (i = 0; i < question2response.length; i++) {
    if(question2response[i].checked) {
      question2response = question2response[i].value;
    }
  }

  // And again the same for our question3response
  for(i = 0; i < question3response.length; i++) {
    if (question3response[i].checked) {
      question3response = question3response[i].value;
    }
  }

  // STEP TWO
  // We need to know if your client has put in the correct answers
  // We can do this by comparing their answers, now stored in our variables, with our own answers
  if (question1response == "B") { // We ask if the string we stored here is equivalent to this string "B"
    questionsCorrect += 1; // If it is, we tell our counter to increment by 1
  } // If it is not, nothing happens and JavaScript moves on to the next instruction

  if (question2response == "D") { // We check like this for question 2
    questionsCorrect += 1;
  }

  if (question3response == "A") { // And one more time for question 3
    questionsCorrect += 1;
  }

  // STEP THREE
  // We should give our client some feedback to tell them how they went with their attempt
  // Let's tell them how many questions they got correct
  // We already have that information stored in our questionsCorrect variable
  if (questionsCorrect == 3) { // We use the if statement to do some comparisons again
    results.innerHTML = `You got all the questions correct!`; // This changes the text content in the empty results <div> to this string
  } else if (questionsCorrect == 0) { // Otherwise, let's check for this condition instead
    results.innerHTML = `You got none of the questions correct!`; // do this for this condition
  } else { // Finally, if none of the previous conditions produce true...
    results.innerHTML = `You got ${questionsCorrect} out of 3 questions correct!`; // We do this
  }
} 