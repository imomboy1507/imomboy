var ul = document.querySelector('.ul')
var ul1 = document.querySelector('.ul1')
var ul2 = document.querySelector('.ul2')
var inp = document.querySelector('.inp')
var btn = document.querySelector('.btn')
var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
btn.addEventListener('click', () => {
    let s = document.createElement('li')
    s.classList.add('li')
    let n = document.createTextNode(inp.value)
    s.appendChild(n)
    ul.appendChild(s)

    // ul1
    let surn = document.createElement('li')
    surn.classList.add('li')
    let surm = document.createTextNode(inp1.value)
    surn.appendChild(surm)
    ul1.appendChild(surn)

    // ul2
    let agen = document.createElement('li')
    agen.classList.add('li')
    let agem = document.createTextNode(inp2.value)
    agen.appendChild(agem)
    ul2.appendChild(agen)
})
ul1.appendChild(agen)