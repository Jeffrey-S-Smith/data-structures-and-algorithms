# Stack and Queue

## Challenge

<!-- Description of the challenge -->
Write the following methods for the Linked List class:

### append

arguments: new value
adds a new node with the given value to the end of the list

### insert before

arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

### insert after

arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

You have access to the Node class and all the properties on the Linked List class.

Write tests to prove the following functionality:

- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception

## Whiteboard Process

![White Board6](img/)
![White Board6]()

## Approach & Efficiency

I took the approach to limit the function to only a single loop, for time and space efficiency.

## Solution

Worked with Rhea Mimi Carillo, Jordan Yamada, Alfredo Ortiz, Amy Pierce, on this solution

Test- npm test stack-and-queue
