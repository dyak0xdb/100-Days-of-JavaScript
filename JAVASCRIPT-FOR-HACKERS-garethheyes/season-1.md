## HEX DECIMAL:

```js
'\x61' // a
"\x61" // a
`\x61` // a

**basse 16**

// encoded
`\x61`.toString()
'a'
```

## unicoded:

**have 2 formate `\u` and `\u{}`**

```js
"\u0061"; //a
"\u0061" //a
`\u0061`; //a

function a() {
  return "ok";
}
undefined;
a();
("ok");
```

**between `0x00` to `0xff`**

```js
"\u{61}"; //a
"\u{000000000061}" //a
`\u{0061}`; //a

function a() {}
a();
```

**and we can set varibale:**

```js
let b = 123;

b;
123;
```

## OCTAL:

**base 8 just use inside string**

## eval:

**eval  a function in Js and whith stiing run a code Js example**

```js
eval("console.log('Hello')");
eval("2 + 3 * 4"); // 14

// and

eval(\u0061=123);
123
\u0061;
123
a
123
```

## string's:

```js
\b   → %08   // backspace
\f   → %0C   // form feed
\n   → %0A   // new line (LF)
\r   → %0D   // carriage return (CR)
\t   → %09   // tab (HT)
\v   → %0B   // vertical tab
\0   → %00   // null byte
'    → %27   // single quote
"    → %22   // double quote
\    → %5C   // backslash
```

**It's interesting that you can use a backslash at the end of a line to continue it to the next line. This is called a line continuation.**

```js
let str = "This is a long string that \
spans multiple lines.";
```
```js
`${7*7}`//49
`${`${`${`${7*7}`}`}`}`//49
```

## call , apply:
