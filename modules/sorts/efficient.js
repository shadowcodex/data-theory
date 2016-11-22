/* eslint-env node */
module.exports = {
    'mergeTopDown': function(a) {
        var TopDownSplitMerge = function(a, iBegin, iEnd, b) {
            if(iEnd - iBegin < 2) {
                return;
            }
            
            var iMiddle = Math.floor((iEnd + iBegin) / 2);
            TopDownSplitMerge(a, iBegin, iMiddle, b);
            TopDownSplitMerge(a, iMiddle, iEnd, b);
            TopDownMerge(a, iBegin, iMiddle, iEnd, b);
            CopyArray(b, iBegin, iEnd, a);
        };

        
        var TopDownMerge = function(a, iBegin, iMiddle, iEnd, b) {
            var i = iBegin;
            var j = iMiddle;
            
            for(var k = iBegin; k < iEnd; k++) {
                if(i<iMiddle && (j >= iEnd || a[i] <= a[j])) {
                    b[k] = a[i];
                    i++;
                } else {
                    b[k] = a[j];
                    j++;
                }
            }
        };
        
        var CopyArray = function(b, iBegin, iEnd, a) {
            for(var k = iBegin; k < iEnd; k++) {
                a[k] = b[k];
            }
        };
        
        var b = [];
        TopDownSplitMerge(a, 0, a.length, b);
    },
    'mergeBottomUp': function(a) {
        var BottomUpMergeSort = function(a, b, n)
        {
            for(var width = 1; width < n; width = 2 * width)
            {
                for(var i = 0; i < n; i = i + 2 * width) {
                    BottomUpMerge(a, i, Math.min(i+width, n), Math.min(i+2*width, n), b);
                }
                CopyArray(b, a, n);
            }
        };
        
        var BottomUpMerge = function(a, iLeft, iRight, iEnd, b) {
            var i = iLeft;
            var j = iRight;
            
            for(var k = iLeft; k < iEnd; k++) {
                if(i < iRight && (j >= iEnd || a[i] <= a[j])) {
                    b[k] = a[i];
                    i++;
                } else {
                    b[k] = a[j];
                    j++;
                }
            }
        };
        
        var CopyArray = function(b, a, n) {
            for(var i = 0; i < n; i++) {
                a[i] = b[i];
            }
        };
        
        var b = [];
        BottomUpMergeSort(a,b,a.length);
        
    },
    'heap': function() {
        //whatever
    },
    'quick': function() {
        //whatever
    }
};