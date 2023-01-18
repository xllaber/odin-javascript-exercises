const reverseString = function(string) {
    let answer = string;
    answer = string.split("");
    answer = answer.reverse();
    answer = answer.join("");
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
