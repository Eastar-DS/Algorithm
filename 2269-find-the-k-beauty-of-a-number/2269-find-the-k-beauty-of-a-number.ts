function divisorSubstrings(num: number, k: number): number {
    const numString = `${num}`;
    let result = 0;
    
    for (let i = 0; i < numString.length - k + 1; i++ ) {
        const testNum = Number(numString.slice(i,i+k));
        console.log(testNum);
        if (testNum === 0) {
            continue;
        }
        if (num % testNum === 0) {
            result += 1;
        }
    };

    return result;

};