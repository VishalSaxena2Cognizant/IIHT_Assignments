// 1 - Write a JavaScript program to display the current day and time in the following format. Sample Output :Today is : Friday.Current time is : 4 PM : 50 : 22
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var hour = today.getHours();
var minute = String(today.getMinutes()).padStart(2, "0");
var second = String(today.getSeconds()).padStart(2, "0");
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{
  if (minute===0 && second===0)
  { 
    hour=12;
    prepand=' Noon';
  } 
  else
  { 
    hour=12;
    prepand=' PM';
  } 
} 
if (hour===0 && prepand===' AM ') 
{ 
  if (minute===0 && second===0)
  { 
    hour=12;
    prepand=' Midnight';
  } 
  else
  { 
    hour=12;
    prepand=' AM';
  } 
} 

console.log("Today is : " + daylist[day] + ".\n");
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// 2 - Write a JavaScript program to print the contents of the current window.
window.print();

// 3 - Write a JavaScript program to get the current date. Expected Output:mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
  dd='0'+dd;
} 

if(mm<10) 
{
  mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today + "\n");
today = mm+'/'+dd+'/'+yyyy;
console.log(today + "\n");
today = dd+'-'+mm+'-'+yyyy;
console.log(today + "\n");
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

// 4 - Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
   console.log('Good Work');
else
   console.log('Not matched');
   

// 6 - Write a JavaScript program to get the website URL (loading page) & print on console.
console.log(document.URL);

// 7 - Write a JavaScript program to capitalize the first letter of each word of a given string.
function capital_letter(str) 
{
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));


// 8 - Write a JavaScript program to check if a given string contains equal number of p's and s's present.
function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_s = str.replace(/[^s]/g, "");

  var p_num = str_p.length;
  var s_num = str_s.length;

  return p_num === s_num;
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));

// 9 - Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
function newstring(str)
{
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return result_str + result_str + result_str + result_str;
  }
  else
    return false;
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));

// 10 - Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swap(arra) {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
  return arra;
}
console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3])); 

// 11 - Write a JavaScript function that reverse a number.Using built in functions.
function reverse_a_number(n)
{
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

// 12 - Write a JavaScript function that returns a passed string with letters in alphabetical order. Using built in functions.
function alphabet_order(str)
{
  return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

// 13(a) - Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.Using built in functions.
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// 13(b) - Write a JavaScript function to extract unique characters from a string.
function unique_char(str1)
{
  var str=str1;
  var uniql="";
  for (var x=0;x < str.length;x++)
  {
    if(uniql.indexOf(str.charAt(x))==-1)
    {
      uniql += str[x];  
    }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 13(c) - Write a JavaScript function to get the number of occurrences of each letter in specified string.
function char_counts(str1) 
{
  var uchars = {};
  str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

// 14 - Write a JavaScript function that generates a string id (specified length) of random characters.
function make_id(len)
{
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0; i < len; i++ )
  {  
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}
console.log(make_id(8));

// 15 - Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longest_substring(input) 
{
  var chars = input.split('');
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) 
  {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
      str += curr_char; 
      hash[chars[i]] = {index:i};
    }
    else 
    {
      if(longest_string.length <= str.length)
      {
        longest_string = str;
      }
      var prev_dupeIndex = hash[curr_char].index;
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + curr_char;
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) 
	  {
        hash[input.charAt(j)] = {index:j};
      }
    }
  }
  return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring("google.com")); 
console.log(longest_substring("example.com")); 
