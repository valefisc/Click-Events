const button1 = document.querySelector('#foo');
const button2 = document.querySelector('#bar');
const button3 = document.querySelector('#foobar');
const main = document.querySelector('main');
button1.addEventListener("click", function(){
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Foo";
    main.appendChild(h3Tag);
})
button2.addEventListener("click", function(){
    const h3 = document.createElement('h3');
    h3.textContent = "Bar";
    main.appendChild(h3);
})
button3.addEventListener("click", function(){
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = "FooBar";
    main.appendChild(h2Tag);
})
