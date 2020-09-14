[![Discord](https://img.shields.io/discord/630805507782868992.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/GghbTQA)

# Data Theory

This is a repository dedicated to data structures and data theory for JavaScript and in the future maybe C++ as Native Node Addons.

If you are looking for the original repository for this, you can find it in the [original](/shadowcodex/data-theory/tree/original) branch.

## Benchmarks

If you would like to see some benchmarks on these data structures then [click here...](/benchmark/README.md);

## Theories & Structures

As theories and structures are built, I'll list them under this heading.

> You won't see a todo list or a target list this time around. I'll take suggestions as issues on the repository, but I'm going to focus on building common structures and items one at a time. One thing I have learned as a developer is never get ahead of yourself, you can get paralyzed with planning and expectations.

- `LinkedStack`: based on a linked list (slower)
- `UArrayStack`: based on JS unbounded array (fast)
- `BArrayStack`: based on JS bounded array (fastest)
- `LinkedQueue`: based on a linked list (fast)
- `UArrayQueue`: based on JS array unbound (very slow) **Sadly this is the one most professionals teach and it is so wrong**
- `BFixArrayQueue`: based on JS array bounded but with fixed front at 0 index (slowest) **only shown for educational purposes**
- `BFltArrayQueue`: based on JS array bounded but with floating front index (fastest)

## Use in your projects

```
npm install data-theory
```

```
yarn add data-theory
```

## Usage

```javascript
const { queues } = require('data-theory');

let queue = new queues.LinkedQueue();

queue.enqueue('item');
queue.dequeue();
```

## What is the `original` branch?

I moved the old repo to the `original` branch, this old repo was a different appraoch on how to do the data theory applications. I am redoing the entire repo and showing the new types and systems and making it importable.
