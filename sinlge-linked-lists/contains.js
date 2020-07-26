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

      }

}

var ssl = new SSL(2)
ssl.addFront(5)
ssl.addFront(6)
ssl.addFront("Hi")
ssl.addFront(3)
ssl.addFront(10)

// console.log(ssl)

// console.log(ssl.contains("Hi"))
// console.log(ssl.contains(2))
// console.log(ssl.contains(10))
// console.log(ssl.contains(5))

console.log(ssl.length())