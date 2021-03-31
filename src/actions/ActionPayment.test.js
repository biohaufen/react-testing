/* eslint-disable no-undef */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./ActionPayment";
import fetchMock from "fetch-mock";


describe('Payment action', () => {
    it("should create PAYMENT_REQUEST_STARTED and PAYMENT_REQUEST_SUCCESS when payments are being fetched", async () => {
        fetchMock.get('/payments', [
            { amount: 10, date: '2017-04-05' },
            { amount: 12, date: '2017-12-05' }
        ])

        const action = [
            { type: actions.PAYMENT_REQUEST_STARTED },
            {
                type: actions.PAYMENT_REQUEST_SUCCESS,
                payments: [
                    { amount: 10, date: '2017-04-05' },
                    { amount: 12, date: '2017-12-05' },
                ]
            }
        ]
        const storeMock = configureMockStore([thunk])
        const store = storeMock({ payments: {} })
        await store.dispatch(actions.fetchPayments())
        expect(store.getActions()).toEqual(action)
    })
})