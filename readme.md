# Data Theory

This is a repository dedicated to data structures and data theory for JavaScript and in the future maybe C++ as Native Node Addons.

If you are looking for the original repository for this, you can find it in the [original](/shadowcodex/data-theory/tree/original) branch.

## Why did you wipe out the old repo?

I moved the old repo to the `original` branch, because it can be slightly misleading. It was a project I started 2 years ago when I feel I wasn't as knowledgeable about JavaScript as I am now. I also have spent more time studying data theory and applications along with real world use cases with JavaScript in CryptoCurrency. So looking back I would have done things differently, but I wanted to keep the historical state of it preserved for comparisons.

So I am starting fresh and am going to work to tackle different types of data structures. I'd like to also do instructional videos on these after writing them to go over their use cases, how they work, and different ways to do them if there are multiple ways.

> For example there are a few ways to do stacks and queues in JavaScript, but one way (array based) requires linear time to make changes and another way (linked list based) takes constant time. What is the difference? Well that's something I hope to cover in videos after I get librarys and code.

I want to walk the walk before I talk the talk. Using this repository.

## Theories & Structures

As theories and structures are built, I'll list them under this heading.

> You won't see a todo list or a target list this time around. I'll take suggestions as issues on the repository, but I'm going to focus on building commong structures and items one at a time. One thing I have learned as a developer is never get ahead of yourself, you can get paralyzed with planning and expectations.

- `LinkedStack`: based on a linked list (slow)
- `UArrayStack`: based on JS unbounded array (fast)
- `BArrayStack`: based on JS bounded array (fastest)
- `Queue`: based on a linked list (fast)
- `ArrayQueue`: based on JS array (slow)

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

let queue = new queues.Queue();

queue.enqueue('item'); // 1
queue.dequeue(); // 'item'
```