export default class ChatManager {
  constructor() {}

  publish(params = "", callback = () => {}) {
    callback(...params)
  }
}