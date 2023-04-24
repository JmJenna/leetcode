var maxArea = function(height) {
    // find highest number of height
    // if number is bigger than last number
     var left = 0;
    var right = height.length - 1;
    var lm = -1;
    var rm = -1;
    var maxSize = -1;
    var maxTmp;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > lm) {
                lm = height[left];
                maxTmp = lm * (right - left);
                maxSize = maxTmp > maxSize? maxTmp:maxSize;
            }
            left++;
        }
        else {
            if (height[right] > rm) {
                rm = height[right];
                maxTmp = rm * (right - left);
                maxSize = maxTmp > maxSize? maxTmp:maxSize;
            }
            right--;
        }
    }
    return maxSize;
};