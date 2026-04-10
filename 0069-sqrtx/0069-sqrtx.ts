function mySqrt(x: number): number {
    // 똑같이 돌려볼게요~~
    let left = 0;
    let right = x;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const temp = mid * mid;
        if (temp === x) {
            return mid;
        } else if (temp > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (left * left > x) {
        return left - 1;
    }
    return left;
};