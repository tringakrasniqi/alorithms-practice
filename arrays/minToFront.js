console.log(minToFront([4,2,3,1,5]))

// function minToFront(array) {
//       var min_value = array[0]
//       for (var i=0; i < array.length; i++) {
//             if (array[i] < min_value) {
//                   min_value = array[i]
//                   var temp = array[0]
//                   array[0] = array[i]
//                   array[i] = temp
//             }
//       }
//       return array
// }

function minToFront(arr) {
      var min = arr[0];
      var idx = 0;
      for (var i = 1; i < arr.length; i++){
          if (arr[i] < min) {
              min = arr[i];
              idx = i;
          }
      }
      for (var x = idx; x > 0; x--){
          var temp = arr[x];
          arr[x] = arr[x-1];
          arr[x-1] = temp;
      }
      return arr;
  }