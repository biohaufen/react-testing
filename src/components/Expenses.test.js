import React from 'react'
import ReactDOM from 'react-dom'
import Expenses from './Expenses'


describe('Expenses', () => {
    it('should render without error when passing expenses to it', () => {
        const expenses = [
                { date: '2017-04-05', amount: 0 },
                { date: '2017-04-05', amount: 4 }
        ]
        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={expenses} />,div)
    })

    it('should render without error when passing no expenses to it', () => {
        const expenses = []
        const div = document.createElement('div')
        ReactDOM.render(<Expenses expenses={expenses} />,div)
    })
}) 