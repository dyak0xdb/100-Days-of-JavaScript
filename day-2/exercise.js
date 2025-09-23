const _ = '0xdb';
_ = '0000';
console.log(_); // Assignment to constant variable.

/////////////////////////////////////////////////////////////////////////

const $ = {
    "name":"dyak0xdb",
    "age":21,
    "job":"bug hunter"
}

console.log($.age); // 21
$.age = 31;
console.log($.age); // 31
console.log($); // {name: 'dyak0xdb', age: 31, job: 'bug hunter'}
$.nationality = "English";
console.log($); // {name: 'dyak0xdb', age: 31, job: 'bug hunter', nationality: 'English'}
