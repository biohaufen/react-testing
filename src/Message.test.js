import fetchMock from 'fetch-mock'
import ReactDOM from "react-dom";
import Message from './Message'

describe('App', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('renders without error', async () => {
      fetchMock.get('end:/api/messages', [{
              "id": 1,
              "subject": "Hi",
              "starred": true,
              "read": true,
              "labels": [
                "dev",
                "personal"
              ]
            }])
      const response = await fetch("end:/api/messages")
      const responseJson = await response.json()
      const div = document.createElement('div')
      
      ReactDOM.render(
        responseJson.map((message) => (
          <Message key={message.id} id={message.id} subject={message.subject} selected={message.selected} read={message.read} starred={message.starred} labels={message.labels} />
        )), div
      )
    })
})