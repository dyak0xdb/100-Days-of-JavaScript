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
