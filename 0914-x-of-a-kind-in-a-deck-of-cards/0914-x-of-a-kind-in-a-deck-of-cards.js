/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    const map = new Map();
    for (let number of deck) {
        if (map.has(number)) {
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
    }

    const set = new Set(map.values());

    if (set.size === 1 && !set.has(1)) {
        return true;
    }
    
    let gcd = Math.min(...map.values());
    for (let value of map.values()) {
        gcd = getGcd(gcd, value);
    }

    if (gcd === 1) { 
        return false;
    }

    // if (!Array.from(map.values()).some((value) => value % gcd !== 0)) {
    //     return true;
    // }

    return true;

};

function getGcd(a, b) {
  return b === 0 ? a : getGcd(b, a % b);
}