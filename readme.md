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

[View Sorts Folder](https://github.com/shadowcodex/data-theory/tree/master/modules/sorts)

## Current List of Data Types

[View Data Types Folder](https://github.com/shadowcodex/data-theory/tree/master/modules/data-types)

## Current List of Algorithms

[View Algorithms Folder](https://github.com/shadowcodex/data-theory/tree/master/modules/algorithms)

### Note for contributors

To make doc generation work, change line #18 in `node_modules\grunt-mrdoc\tasks\mrdoc.js` to:

```
	var pluginPath = path.resolve(__dirname, '../../../'),
```