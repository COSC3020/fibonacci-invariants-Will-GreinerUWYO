# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

The invariant must be true for every recursive call. For the fibonacci sequence that means it specifically needs to be true when n = 0, n = 1, and any other n. When n = 0, values = [0], when n = 1, values = [0,1], for any other given n, values = [0,1,...fib(n-2),fib(n-1)].

Therefore, the invariant is: The elements in values with an index < n follow the correct [0,1,...fib(n-2),fib(n-1)] fibonacci sequence. Excluding the base cases of n = 0 and n = 1 which only have one possibility, this means that every iteration after those base cases will be already done correctly by the time it arrives. This is true starting at n=2, since when n=2, values = [0,1] following the correct format and matching the invariant. This will continue to be true.

### Sources and Plagarism Statement

I took a look at this fellow student's repo, and realized that I did not need to do this recursively. https://github.com/COSC3020/fibonacci-invariants-DJReflexive 
I did not copy the code, but it was very helpful for giving me the ability to pivot back to a linear approach to the problem.

I used the slides for lecture01-sorting to help with writing the invariant https://uwyo.instructure.com/courses/593273/files/folder/slides?preview=86250260 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
