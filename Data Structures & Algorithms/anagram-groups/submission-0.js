class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for (let str of strs) {
            const sorted = Array.from(str).sort().join('')
            
            map[sorted] = (map[sorted] || [])
            map[sorted].push(str)
        }

        return Object.values(map)
    }
}
