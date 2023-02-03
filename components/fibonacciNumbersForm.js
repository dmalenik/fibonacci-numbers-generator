import calcFibonacciNum from '../logic/calcFibonacciNum.js'
import fibonacciNumberOutput from './fibonacciNumberOutput.js'

const fibonacciNumbersForm = () => {
    const form = document.createElement('form')

    form.setAttribute('id', 'fibonacci-form')
    form.setAttribute('method', '')
    form.setAttribute('action', '')

    form.classList.add('f-row', 'f-col-gap')

    const label = document.createElement('label')

    label.setAttribute('for', 'fibonacci-numbers')

    label.innerText = 'Type a number to see Fibonacci sequence numbers:'

    const input = document.createElement('input')

    input.setAttribute('id', 'fibonacci-numbers')
    input.setAttribute('type', 'number')
    input.setAttribute('name', 'fibonacci-numbers')

    input.addEventListener('change', (event) =>
        event.target.setAttribute('value', event.target.value)
    )

    const send = document.createElement('button')

    send.setAttribute('id', 'fibonacci-button')
    send.setAttribute('type', 'button')
    send.setAttribute('form', 'fibonacci-form')

    send.innerText = 'Send'

    let isMount = false

    send.addEventListener('click', (event) => {
        let sequenceNumber = document
            .querySelector('#fibonacci-numbers')
            .getAttribute('value')
        let fibonacciNumber = calcFibonacciNum(sequenceNumber)

        if (isMount === false) {
            form.classList.replace('f-row', 'd-hidden')
            document
                .querySelector('.container')
                .appendChild(fibonacciNumberOutput())
            document.querySelector(
                '#output h3'
            ).innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: `

            isMount = true
        } else {
            form.classList.replace('f-row', 'd-hidden')
            document
                .querySelector('#output')
                .classList.replace('d-hidden', 'f-col')
            document.querySelector(
                '#output h3'
            ).innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: `
        }

        document.querySelector('#numbers').innerText = fibonacciNumber
    })

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(send)

    return form
}

export default fibonacciNumbersForm
