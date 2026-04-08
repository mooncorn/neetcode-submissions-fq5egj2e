class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}

        nums.forEach(num => map[num] = (map[num] || 0) + 1)

        return Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => Number(entry[0]))
    }
}
