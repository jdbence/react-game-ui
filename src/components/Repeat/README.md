#### EXAMPLES:

---

The element as a String
```js
<Repeat element="🍕" />
```

Change the elements based on the clicked element
```js
let rating = 5;
let target;
const onClick = (e) => {
  rating = Number(e.target.getAttribute('data-key'));
  target.forceRender();
};
const renderer = (u, i) => (<span key={i} data-key={i} onClick={onClick}>{i <= rating ? "❤️" : "🖤"}</span>);
<Repeat ref={(r) => target = r} value={10} element={renderer} />
```