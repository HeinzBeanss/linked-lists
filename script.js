const LinkedList = () => {
    this.head = null; // the head of the list is pointing at null at first.

    // 1 
    const appendNode = (nodeValue) => {
        let newNode = Node(nodeValue);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        } 

        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }

    // 2 
    const preppendNode = (nodeValue) => {
        let newNode = Node(nodeValue)

        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // 3
    const size = () => {
        let listSize = 0; 
        let node = this.head;
        while (node) {
            listSize++;
            node = node.next
        }
        console.log(listSize);
        return listSize;
    }

    // 4
    const getHead = () => {
        return this.head
    }

    // 5
    const getTail = () => {
        let last = this.head
        if (last) {
            while (last.next) {
                last = last.next
            }
        }
        return last
    }

    // 6
    const at = (index) => {
        //index starts at 0!
        let number = index
        let chosen = this.head
        for (let i = 0; i < number; i++) {
            chosen = chosen.next
        }
        console.log(chosen)
        return chosen;
    }

    // 7
    const pop = () => {
        if (!this.head) {
            return this.head;
        } 
        
        let tail = this.head
        while (tail.next.next !==null) {
            tail = tail.next
        }
        
        tail.next = null;


    }

    // 8
    const contains = (value) => {

        let valueIQ = value;
        let tail = this.head;
        while(tail.next !== null){
            if (valueIQ == tail.value) {
                return true;
            }
            tail = tail.next;
            
        }
        return false;
    }

    // 9
    const find = (value) => {
        let index = 0
        let valueIQ = value;
        let tail = this.head;
        while(tail.next !== null){
            if (valueIQ == tail.value) {
                return index;
            }
            tail = tail.next;
            index++;
            
        }
        return false;

    }

    // 10
    const toString = () => {
        let tail = this.head;
        let string = this.head.value;
        while(tail.next !== null){
            tail = tail.next;
            string = `${string} -> ${tail.value}`;
        }
        string = `${string} -> null`; // i guess we add this?
        return string;
    }

    // extra credit attempt 

    const insertAt = (index, value) => {
        // adds after the index
        let number = index -1;
        let chosen = this.head
        for (let i = 0; i < number; i++) {
            chosen = chosen.next
        }
        // console.log(chosen)
        // return chosen;

        // --------

        let newNode = Node(value);
        newNode.next = chosen.next;
        chosen.next = newNode;

        return this.head;


    }

    const removeAt = (index) => {
        // index starts at 0!
        let number = index -1;
        let chosen = this.head
        for (let i = 0; i < number; i++) {
            chosen = chosen.next
        }
        // console.log(chosen)
        // return chosen;
    
        // --------
        
        let temp = chosen.next.next;
        chosen.next = null;
        chosen.next = temp;
        

        return this.head;
    
    }

    return { appendNode, preppendNode, size, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt };
}

const Node = (value, next = null) => {

    this.value = value,
    this.next = next

    return { value, next };
}

let list = LinkedList(); // so we have our new instance of our list.
list.appendNode("one");
list.appendNode("two");
list.appendNode("three");
list.preppendNode("zero");
list.appendNode("four");
// console.log(list.getTail());
// console.log(this.head.next.next.next);
// list.at(3);
// list.size();
// list.pop();
// list.size();
// console.log(list.contains("aaaa"));
// console.log(list.contains("three"));
// console.log(list.find("two"));
// console.log(list.find("zero"));
// console.log(list.toString())

// extra credit

list.insertAt(2, "1.5");
list.insertAt(4, "2.5")
// console.log(list.toString());
list.at(0);
list.at(1);
list.at(2);
list.at(3);
list.at(4);
list.at(5);
list.at(6);
list.insertAt(0, "0.5");
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
list.removeAt(1);
list.removeAt(1);
console.log(list.toString());
list.insertAt(0, "one");
console.log(list.toString());
