export class Motor {
  constructor(propulsionTo, historyInstance) {
    let status = 'off'
    let history = historyInstance

    this.getStatus = () => status

    let setStatus = (newStatus) => {
      const currentHistory = historyInstance.getFullState()
      const lastHistoryItem = currentHistory.at(-1)
      status = newStatus

      if (currentHistory.length === 0) {
        return historyInstance.getFullState().push({
          propulsionTo,
          status,
        })
      }

      if (lastHistoryItem.status !== newStatus) {
        historyInstance.getFullState().push({
          propulsionTo,
          status,
        })
      }
    }

    this.turnOn = () => setStatus('on')
    this.turnOff = () => setStatus('off')

    this.getHistory = () => history.getFullState()
  }
}

export class History {
  constructor() {
    let history = []

    this.getFullState = () => history
  }
}

const history = new History()
const motorUp = new Motor('up', history)
const motorDown = new Motor('down', history)
motorUp.turnOn()
motorDown.turnOn()
motorUp.turnOff()
motorUp.turnOff() // Repetido
motorUp.turnOn()
motorUp.turnOn() // Repetido
motorDown.turnOff()
console.log(history.getFullState())
