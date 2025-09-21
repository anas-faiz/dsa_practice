//problem: REmove nodes from Linked List
//link: https://leetcode.com/problems/remove-nodes-from-linked-list/submissions/1778321868/
//Time complexity : O(n)
//solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodes(head) {
    // helper to reverse list
    function reverse(head) {
        let prev = null, curr = head;
        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }

    // Step 1: reverse
    head = reverse(head);

    // Step 2: traverse and remove smaller nodes
    let maxSoFar = head.val;
    let curr = head;
    while (curr && curr.next) {
        if (curr.next.val < maxSoFar) {
            curr.next = curr.next.next; // delete node
        } else {
            curr = curr.next;
            maxSoFar = curr.val;
        }
    }

    // Step 3: reverse back
    head = reverse(head);
    return head;
}
