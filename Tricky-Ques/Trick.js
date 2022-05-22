var arr1 = "Pravin".split('');
var arr2 = arr1.reverse();
var arr3 = "Pankaj".split('');

arr2.push(arr3);
console.log("arr1 length is: "+ arr1.length +" last: "+arr1.slice(-1));//It prints tha last element and in this case last element is arr3 as a array
console.log("arr2 length is: "+ arr2.length +" last: "+arr2.slice(-1));
console.log(arr1);// prints array in reverse order of arr1 and afte that push arr3 from the last.
console.log(arr2);//Same as above print