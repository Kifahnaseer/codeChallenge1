//Code Challenge 1 : Student grade generator

function generator (marks){

 //let marks = prompt ("enter grade")

  if (marks <= 100 && marks >79) {
    console.log("A");

  } else if (marks <=79 && marks > 60) {
    console.log("B");

  } else if (marks > 49 && marks <= 59) {
    console.log("C");

  } else if (marks > 40 && marks <= 49) {
    console.log("D");

  } else if (marks <= 0 && marks > 40) {
    console.log("E")
  }
  else {
    console.log("not applicable")
  }

generator(86)

}