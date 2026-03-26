/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) {
        return;
    }

    let pt1 = 0;
    let pt2 = 0;

    while (pt2 < n) {
        if (nums1[pt1] < nums2[pt2]) {
            if (pt1 >= m + pt2 && nums1[pt1] === 0) {
                nums1[pt1] = nums2[pt2];
                pt2 += 1;
            } 
            pt1 += 1;
        } else {

            nums1.splice(pt1, 0, nums2[pt2]);
            nums1.pop();
            pt1 += 1;
            pt2 += 1;


        }
    }

};