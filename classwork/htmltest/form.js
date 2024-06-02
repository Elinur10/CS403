const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password1 = document.querySelector('#password')
const check = document.querySelector('#check')
const btn = document.querySelector('#btn')
const form = document.querySelector('form')

const users = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value
    }
    users.push(user)
    console.log(user);
})

username.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value && password.value && password1.value && check.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

email.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value && password.value && password1.value && check.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

password.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value && password.value && password1.value && check.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

password1.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value && password.value && password1.value && check.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

check.addEventListener('input', (e) => {
    if (username.value.length >= 5 && email.value && password.value && password1.value && check.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})

