function removeBlanks(stringValue) {
      var newString = stringValue.split(" ")
      return newString.join("")
}
// console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))

function getDigits(stringValue) {
      var array = stringValue.split("")
      var new_array = []
      for (var i = 0; i < array.length; i++) {
            if (array[i] >= '0' && array[i] <= '9') {
                  new_array.push(array[i])
            } 
      }
      return new_array.join("")
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function accronyms(stringValue) {
      var newString = []
      var stringArray = stringValue.split(" ")

      for( var i = 0; i < stringArray.length; i++) {
            newString.push(stringArray[i][0])
      }
      return newString.join("").toUpperCase()
}
// console.log(accronyms("Live from New York, it's Saturday Night!"))

function countNonSpaces(stringValue) {
      var stringArray = stringValue.split("")
      var counter = 0
      for(var i=0; i < stringArray.length;i++) {
            if (stringArray[i] != ' ') {
                  counter++
            }
      }
      console.log(counter)
}

// countNonSpaces("Honey pie, you are driving me crazy")

function removeShortStrings(stringArray, length) {
      for (var i = 0; i < stringArray.length; i++) {
            var new_arr = stringArray[i].split("")
            if(new_arr.length < length ) {
                  for(var j = i; j < stringArray.length; j++){
                        stringArray[j] = stringArray[j+1]
                  }
                  stringArray.length = stringArray.length-1;
                  i--;
            }
      }
      console.log(stringArray)
}

// removeShortStrings(["aaa", "bbbbbb", "ccc", "ddd", "gggg"], 4)