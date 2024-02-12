/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

P: 
String

R: 
String but reverse from given

E:
'world' => 'dlrow'

P:
split
reverse
join("")
*/

function solution(str){
  return str.split('').reverse().join('');
}