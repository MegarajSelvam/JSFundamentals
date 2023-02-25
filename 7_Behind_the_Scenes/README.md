# ########################## JS Behind the screen

# ##### JS High Level Intro - start

JS is a high level, prototype-based object oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage collected programming language with first-class functions and a non-blocking event loop concurrenty model.

High Level and Low Level:

- High Level - Developer does not have to worry, everything happens automatically
- Low Level - Developer has to manage resources manually

Garabage Collected:

- Cleaning the memory so we don't have to do it manually

Interpreted or JIT:

- Computer processor only understand 0 and 1. ie., Machine Code. We write human readable code which is later transferred to machine code.

Multi Paradigm:

- Approach and mindet of structuring code, which will direct your coding style and technique - Three popular paradigms are 1) Procedural Programming (Eg: DOM Manipulation) 2) OOP - Object Oriented Programming 3) Functional Programming.
  -JS support all three paradigms

Prototype-based Object-Oriented:

First-Class Functions:

- Functions are simply treated as varaibles. We can pass them into other functions and return them from functions

Dynamic:

- Dynamically typed language. We don't assign data types. Types becomes known at runtime. Type can be changed when we re-assign the value.

Single Threaded and Non-blocking event loop:

- Concurrency Model: how the Javascript engine handles multiple tasks happening at the same time
  Why do we need Concurreny Model?
- JS runs in one single thread, so it can only do one thing at a time.
  so What about a long-running task?
- Sounds like it would block the single thread. However, we want non-block behavior
  How do we achieve that
- By using an event loop: takes long running tasks, executes them in the background and puts them back in the main thread once they are finished

# ##### JS High Level Intro - End

# ##### JS High Level

# ##### JS Engine & Runtime - start

JS Engine:

- Program that executes JS code. Every browser have thier own JS engine
  Eg: V8 Engine (Chrome, Node JS)

- Every JS engine have Call Stack and Heap
- Call Stack: Where our code is executed using something execution context
- Heap: Where object are stored in memory

- Compilation vs Interpretation

- Compilation: Entire code is converted into machine code at once, and written to binary file that can be executed by a computer
  Source Code ---- Compilation (step 1) ----> Portable file (Machine Code) ---- Execution (Step 2) ----> Program running

- Interpretation: Interpreter runs through the source code and executes it line by line
  Source Code -------- Execution line by line (step 1) ---------> Program running
- Old JS is interpretation language. It is slow.

- Just-in-time (JIT compilation): Entire code is converted into machine code at once, then executed immediately. It doesn't have a portable file
  Source Code ---- Compilation (step 1) ----> Machine Code ---- Execution (Step 2) ----> Program running
- Modern JS uses this apporach

JS Engine Flow:

Step 1: Your code will enter into JS engine
Step 2: Parsing to AST (Abstract Syntax Tree)
Step 3: Compilation (AST to machine Code) - JIT compilation
machine code will keep on does optimization during execution. This happens in special thread that we can't have access form code. It's like cycle: Compilation -> Execution -> Optimization -> Compilation -> Execution -> Optimization ------------
Step 4: Execution (Happens in call stack)

JS Runtime in the browser:

- JS Engine: (Heap, Call Stack)
- WEB APIs: (DOM, Timers, Fetch API) -> Functionalities provided to the engine, accessible on windows object
- Callback Queue: (click, timer, data etc.,)-> Eg: Call back function from DOM event listener. Event loop takes the call back function from the callback queue and puts it in call stack, so that they can be executed.

JS Runtime in the Node JS:

- JS Engine
- Multiple C++ bindings and thread pool
- Callback queue

# ##### JS Engine & Runtime - End

# ##### Execution Context & Callstack - Start

What is Execution Context?
Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed.

What's inside Execution context?

1. Variable Environment
   -let, const and var declarations
   -Functions
   -arguments object
2. Scope chain
3. this keyword
   NOTE: Arrow functions doesnt have arguments objects and this keyword

Steps in Execution:

1. Creation of global execution context (for top level code). It will not execute the code inside the function. Funciton body will only executed when called.
2. Execution of top-level code (inside golbal EC).
3. Execution of functions and waiting for call backs

Exactly one global execution context (EC):
default context, created for code that is not inside any function (top-level)

One execution context per function:
For each funciton call, a new execution context are generated.

Callstack:
Place where execution contexts gets stacked on top of each other, to keep track of where we are in the execution. First In Last Out concept. Order in which functions were called.

# ##### Execution Context & Callstack - End

# ##### Scope - Start

Scope concepts:
Scoping: How our program's variables are organized and acessed. "Where do variable live?" or "Where can we access a certain variable and where not?"

Lexical Scoping:
Scoping is controlled buy placement of functions and blocks in the code

Scope:
Space or environment in which a certain variable is declared (variable environment in case of functions). There is global, function and block scope

Scope of a variable:
Regionof our code where a certain variable can be accessed.

The 3 Types of Scope:

Global Scope

- Outside of any function or block.
- Variable declared in global scope are accessible everywhere

Eg:
const me = `megaraj`
const job = `programmer`
const year = 1996

Function Scope (Function expression, Arrow funciton, Function)

- Variables are accessible only inside function, NOT outside
- Also called local scope
- var is function scope

Eg:

function calcAge(birthYear){
const now = 2037;
const age = now - birthYear;
return age;
}

console.log(now) // Reference error

Block Scope (ES6)
(if block, for loop block etc.,)

- Variables are accessible only inside block (block scoped)
- However, this only applies to let and const variables!
- For var, it can be accessible. var is a function scoped.
- ES6 Function are also blcok scoped (only in strict mode)

Eg:
if (year > 1981 && year <= 1996){
const millenial = true;
const food = `Avacode toast`;
}
console.log(food) // reference error

Scope Chain:

- Every scope always has acess to all the variables from all its outer scope. This is the scope chain.
- When a variable is not in the current scope, the engine looks up in the scope chain, until it finds the variable it's looking for. This is called variable lookup.
- And it is important to note that these variables are not copied from one scope to another scope
- Scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
- Scope has access to variables from all outer scopes.
- Scope chain in a certain scope is equal to adding together all the variable environments of the all parents scope.
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all.

Scope Chain vs Call Stack:
Scope Chain: Order in which functinos are written in the code. It has nothing to do with order in which functions were called.
Call Stack: Order in which function were called.

NOTE:
Check Reference_Images folder for more information.

# ##### Scope - End

# ########################## End
