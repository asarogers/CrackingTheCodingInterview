//Given an unsorted list, remove all duplicates
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 
    // adds an element at the end
    push(data){
        this.head = new Node(data, this.head)
        this.size++;
    }
    insertLast(element)
    {
        //makes a new node
        var node = new Node(element);
        var current;

        //if there is no head
        if (!this.head)
        //make the new node the head
            this.head = node;
        else {
            //else, make current the head
            current = this.head;
            //while there is a next node
            while (current.next) {
                //sent the current node to the next node
                current = current.next;
            }
            //when we reach the end, insert the new node
            current.next = node;
        }
        //increment size
        this.size++;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current)
            current = current.next;
        }
    }

    insertAt(data, index){
        //if index is out of range
        if(index > 0 && index > this.size) return ;
        if(index > this.size -1) return;

        //if first index
        if(this.head === null){
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous, count =0;
        current = this.head;

        //if index is negative
        if(index < 0 && -index <= this.size){

            for(let i = 1; i < -index; i++){
                current = current.next;
            }
            current.data = node.data;
            return;
        }
        
        while(count < index){
            current = current.next;//node after index;
            count++;
        }
            current.data = node.data;

        this.size;
    }
    // removeFrom(location)
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
}

var n = new LinkedList();
n.push(1);
n.push(3);
n.push(5);
n.insertAt(7,-3)
n.printList();
