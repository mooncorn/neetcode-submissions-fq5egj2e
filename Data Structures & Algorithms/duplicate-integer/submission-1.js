class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occ = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (occ.has(nums[i])) return true;
            occ.add(nums[i]);
        }
        return false;
    }
}
