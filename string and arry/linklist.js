const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
 let head= new LinkedListNode()

// Complete the function below

var deleteDuplicates = function(head) {
    let currnt =head;
    while(currnt!==null){
        let tamp= currnt;
        while(tamp!==null && tamp.data==currnt.data){
            tamp=tamp.next
        }
        currnt.next=tamp;
        currnt=currnt.next
    }
   
    return head
};