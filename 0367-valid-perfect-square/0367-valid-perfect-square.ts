function isPerfectSquare(num: number): boolean {
    // 루트를 이진탐색으로 찾을게영
    let left = 0;
    let right = num;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if (square === num) return true;
        if (square > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (left * left === num) return true;
    return false
};