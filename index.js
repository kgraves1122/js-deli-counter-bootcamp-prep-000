function takeANumber (lineNumber, name) {
  lineNumber = lineNumber.push(name);
   var num = 0;
   for (var i = 0; i < lineNumber.length; i++) {
     if (i )
     num = num + i;
   }
  
  return "Welcome, "+ name + ". You are number " + num +" in line.";
}

function nowServing (num) {
  if (num.length > 0) {
    var name = num[0];
    num.shift();
    return name;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (num) {
  var emp = "The line is currently: "
  if (num.length > 0) {
    for (var i = 0; i < num.length; i++) {
      if (i + 1 === num.length) {
      emp = emp + (i + 1) +" . " + num[i]
      } else {
        emp = emp + (i + 1) +" . " + num[i] +", "
      }
      return emp;
    }
  } else { 
    return "The line is currently empty." }
}