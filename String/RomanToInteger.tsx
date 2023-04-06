//URL: https://leetcode.com/problems/roman-to-integer/description/
function romanToInt(s: string): number {
    let obj ={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum:number = 0;

    for(let i:number = 0; i<s.length; i++){
        let current:number = obj[s[i]];
        let next:number = obj[s[i+1]];
        if(next && current<next){
            sum-=current;
        }else{
            sum+=current;
        }
    }

    return sum;
}
