/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        // left는 1부터 시작.
        let left = 1;
        let right = n;

        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                // right를 mid -1로 두면 mid -1 이 bad가 아닐 경우가 발생. 첫 bad를 찾는데 집중해야함.
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};