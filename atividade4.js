function lengthOfLongestSubstring(s) {

    const map = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        const current = s[right];

        if (map.has(current)) {

            left = Math.max(
                left,
                map.get(current) + 1
            );
        }

        map.set(current, right);

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}
