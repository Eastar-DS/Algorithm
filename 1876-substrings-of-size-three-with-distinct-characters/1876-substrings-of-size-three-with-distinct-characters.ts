function countGoodSubstrings(s: string): number {
    if (s.length < 3) {
        return 0;
    }

    let result = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let a = s[i];
        let b = s[i + 1];
        let c = s[i + 2];
        if (a === b || b === c || c === a) {
            continue;
        }
        result += 1;

    }
    return result;
};