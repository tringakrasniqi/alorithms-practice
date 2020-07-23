function reverse(array) {
      for (var i = 0 ; i < array.length /2;i++) {
            var temp = array[i]
            array[i] = array[array.length-i-1]
            array[array.length-i-1] = temp
      }     
    return array
}

// console.log(reverse([1,2,3,4,5]))

function rotateArr(array, shiftBy) {
      for(var i = 0; i < shiftBy; i++) {
            for (var j = array.length-1; j > 0; j--) {
                  var temp = array[j]
                  console.log(temp)
                  console.log(array[array.length-j-i-1])
                  array[j] = array[array.length-j-i-1]
                  array[array.length-j-i-1] = temp
            }
      }      
      return array
}
// NOT FINISHED
// console.log(rotateArr([1,2,3],1))

function range(array, min, max) {
      console.log(array.length)

      for (var i=0; i < array.length; i++) {
            if (array[i] < min) {
                  var temp = array[i]
                  array.push(temp).pop()
            } else if (array[i] > max) {
                  delete array[i]
            }
      }
      console.log(array.length)
      return array
}

console.log(range([1,2,7,2,5,4,6,3], 1, 6))

function arrConcat(array1, array2) {
      var new_array = []
      for (var i = 0; i < array1.length; i++) {
            new_array.push(array1[i])
      }
      for (var i = 0; i < array2.length; i++) {
            new_array.push(array2[i])
      }
      return new_array
}

// console.log(arrConcat( ['a','b'], [1,2] ))