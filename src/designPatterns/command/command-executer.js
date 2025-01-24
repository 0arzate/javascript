export class CommandExecuter {
  constructor() {
    this.commandsHistory = [];
  }

  executeCommand(command, args) {
    command.execute(...args)
    this.commandsHistory.push(command);
  }

  undeCommand() {
    const lastCommand = this.commandsHistory.pop();
    lastCommand.undo();
  }
}