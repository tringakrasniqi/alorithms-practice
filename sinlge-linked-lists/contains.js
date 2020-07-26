class Node {
      constructor(value) {
            this.value = value;
            this.next = null;
      }
}

class SSL {
      constructor(value) {
            this.head = new Node(value)
      }

      front(){
            if (this.head == null) {
                  return null
            } else {
                  return this.head.value
            }
      }

      addFront(value) {
            if (this.front() == null) {
                  SSL(value)
            } else {
                  var new_node = new Node(value);
                  new_node.next = this.head
                  this.head = new_node
            }
            return this
      }

      removeFront() {
            if (this.front() == null) {
                  return null
            } else {
                  this.head = this.head.next
                  return this
            }
      }

      contains(value) {      
            var node = this.head;
            while(node) {
                if(node.value == value) {
                    return true
                }
                node = node.next
            }
            return this
      }

      length() {
            var runner = this.head
            var counter = 0
            while(runner) {
                  counter ++
                  runner = runner.next
            }
            return counter
      }

      display() {
            var runner = this.head
            var string = "" 
            var counter = 0
            while (runner) {
                  string += " Node counter: " + counter + " value: " + runner.value + " -> "
                  counter++
                  runner = runner.next
            }
            console.log(string)
            return this
      }

      max() {
            var runner = this.head
            var max_value = this.head.value
            while(runner) {
                  if(runner.value > max_value) {
                        max_value = runner.value
                  }
                  runner = runner.next
            }
            return max_value
      }

      min() {
            var runner = this.head
            var min_value = this.head.value
            while(runner) {
                  if(runner.value < min_value) {
                        min_value = runner.value
                  }
                  runner = runner.next
            }
            return min_value
      }

      average() {
            var runner = this.head
            var sum = 0
            while(runner) {
                  sum += runner.value
                  runner = runner.next
            }
            return sum / this.length()
      }

      back() {
            var runner = this.head
            while(runner) {
                  if (runner.next == null) {
                        return runner.value
                  }
                  runner = runner.next
            }
            return this
      }

      addBack(value) {
            var runner = this.head
            while(runner) {
                  if (runner.next == null) {
                        runner.next = new Node(value)
                        return this;
                  }
                  runner = runner.next
            }
            return this
      }

      removeBack() {
            var runner = this.head
            while(runner) {
                  if (runner.next.next == null) {
                        runner.next = null
                        return this;
                  }
                  runner = runner.next
            }
            return this
      }
}

var ssl = new SSL(2)
ssl.addFront(15)
ssl.addFront(-6)
ssl.addFront(3)
ssl.addFront(10)

// console.log(ssl)

// console.log(ssl.contains("Hi"))
// console.log(ssl.contains(2))
// console.log(ssl.contains(10))
// console.log(ssl.contains(5))

ssl.addBack(20)
ssl.addBack(25)
console.log(ssl.back())
ssl.removeBack()
console.log(ssl.back())
