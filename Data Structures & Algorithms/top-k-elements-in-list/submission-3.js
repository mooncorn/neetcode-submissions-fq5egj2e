class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        
        nums.forEach(num => map[num] = (map[num] || 0) + 1)

        const buckets = Array.from({length: nums.length + 1}, () => [])

        Object.entries(map).forEach((v) => buckets[v[1]].push(v[0]))

        const result = []

        for (let i = buckets.length - 1; i > 0; i--) {
            for (let num of buckets[i]) {
                result.push(Number(num))
                if (result.length === k) return result
            }
        }
    }
}
