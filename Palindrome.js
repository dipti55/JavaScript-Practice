function isPalindrome(string){
    const len = string.length;
    for (let i=0; i<len/2; i++)
    {
        if(string[i]!==string[len-1-i]){
            return 'It is not Palindrome'
        }
        return 'It is a palindrome'
    }
    
}

const string = 'radar';
const value = isPalindrome(string);
console.log(value)