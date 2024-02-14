export function simulacion({ satelite, estacion, astronauta, texto }) {
  satelite.send({
    from: astronauta,
    to: estacion,
    text: texto,
  })

  return satelite.messages
}

export class Astronaut {
  constructor({ name }) {
    this.name = name
  }
}

export class SpaceStation {
  constructor({ name }) {
    this.name = name
    this.team = []
  }

  addTeamMember(newMember) {
    if (newMember instanceof Astronaut) {
      this.team.push(newMember.name)
    }
  }
}

export class Satelite {
  constructor({ name }) {
    this.name = name
    this.messages = []
  }

  send({ from, to, text }) {
    if (!from instanceof Astronaut) return

    if (!to instanceof SpaceStation) return

    const isPartOfTeam = to.team.some((teamName) => teamName === from.name)

    if (!isPartOfTeam) return

    this.messages.push({
      from: from.name,
      to: to.name,
      text,
    })
  }
}
