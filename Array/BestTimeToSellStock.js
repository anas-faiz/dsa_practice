//problem : search and find in an array 
//Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1760718679/
//solution:

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        // Update the minimum price so far
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate profit if we sold at current price
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};
