        // .Write a JavaScript program to find the longest palindrome in a string.
// Input: “babad”
// Output: “bab” or “aba”


console.log(abc("babad"))

function abc(str){
    str=str.split("")
    c=[]
    f=""
  for(i=0;i<str.length;i++){
     f=""
      for(j=i;j<str.length;j++){
           f+=str[j]
          if(f.length>=3 && f==f.split("").reverse().join("")){
               
             if(c.length===0){
              c.push(f)}
              else{
                  c.push("or")
                   c.push(f)
              }
              
          }
          
      }
  }
  return c.toString()
}
console.log(); 