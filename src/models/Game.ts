class Game {
  category: string
  description: string
  id: number
  image: string
  infos: string[]
  system: string
  title: string

  constructor(
    category: string,
    description: string,
    id: number,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.category = category
    this.description = description
    this.id = id
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
