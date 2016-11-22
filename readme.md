# Data Theory

This is a collection of Data Science and Theory implementations. I know there are a lot of 
things out there that do these same things, but I wanted to create my own library
for this. This helps me learn / keep knowledge sharp, and gives another resource for others to learn with. 
I chose to do this in javascript because that is the language I enjoy
the most.

I am also going to make this available on npm so people may include these 
sorts and data algorithms into their projects easily.

If you have things you would like to add to contribute, please do via a 
Pull Request. Issues? File them in issues.

Once I finish a base project. I'll write up a full tutorial and article 
about the sorting algorithms.

## Current Array Sorting Algorithms

| Sorting Algorithm    | Function Call                 | Status                                                                   | Source Link |
|----------------------|-------------------------------|--------------------------------------------------------------------------|-------------|
| Selection Sort       | simple.selection(data)        | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/simple.js#L39)|
| Insertion Sort       | simple.insertion(data)        | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/simple.js#L16)|
| Top Down Merge Sort  | efficient.mergeTopDown(data)  | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/efficient.js#L3)|
| Bottom Up Merge Sort | efficient.mergeBottomUp(data) | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/efficient.js#L41)|
| Heap Sort            | efficient.heap(data)          | ![status](https://img.shields.io/badge/status-in%20progress-yellow.svg)  ||
| Heap Sort Bottom Up  | efficient.heapBottomUp(data)  | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     ||
| Quick Sort           | efficient.quick(data)         | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     ||
| Bubble Sort          | bubble.bubble(data)           | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/bubble.js#L4)|
| Shell Sort           | bubble.shell(data)            | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/bubble.js#L16)|
| Comb Sort            | bubble.comb(data)             | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/bubble.js#L30)|
| Cocktail Sort        | bubble.cocktail(data)         | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/bubble.js#L48)|
| Counting Sort        | distribution.counting(data)   | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/distribution.js#L6)|
| Bucket Sort          | distribution.bucket(data)     | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/distribution.js#L39)|
| Radix Sort           | distribution.radix(data)      | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     ||
| Bogo Sort            | inefficient.bogo(data)        | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/inefficient.js#L4)|
| Stooge Sort          | inefficient.stooge(data)      | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/inefficient.js#L9)|
| Codex Sort           | other.codexSort(data)         | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) |[View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/sorts/other.js#L18)|

## Current List of Data Types

Link for reference of data types: [https://en.wikipedia.org/wiki/List_of_data_structures](https://en.wikipedia.org/wiki/List_of_data_structures)

| Data Type                   | Status                                                                   | Source Link |
|-----------------------------|--------------------------------------------------------------------------|-------------| 
| array                       | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| dynamic array               | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| stack                       | ![status](https://img.shields.io/badge/status-completed-brightgreen.svg) | [View Source](https://github.com/shadowcodex/data-theory/blob/master/modules/data-types/stack.js) |
| tree                        | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| balanced tree               | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| container                   | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| dictionary                  | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| graph adjacency list        | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| graph adjacency matrix      | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| graph incidence matrix      | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| list                        | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| linked list                 | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| doubly linked list          | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| multiply linked list        | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| circular linked list        | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| map                         | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| multimap                    | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| set                         | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| multiset                    | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| queue                       | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| priority queue              | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| double ended queue          | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |
| double ended priority queue | ![status](https://img.shields.io/badge/status-not%20started-red.svg)     | |

### Note for contributors

To make doc generation work, change line #18 in `node_modules\grunt-mrdoc\tasks\mrdoc.js` to:

```
	var pluginPath = path.resolve(__dirname, '../../../'),
```