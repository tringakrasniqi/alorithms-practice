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
            var value = array[array.length-1]
            for (var j = array.length-1; j > 0; j--) {
                  var temp = array [j]
                  array[j] = array[j-1]
                  array[j-1] = temp
            }
            array[0] = value
      }      
      return array
}
// console.log(rotateArr([1,2,3,4,5],2))

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

