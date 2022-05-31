const root:HTMLElement | null  = document.getElementById('root')

const cell  = (id:number) : string => {
  return `<div class="cell" data-img = ${id}></div>`
}
const addCells = () => {
  for (let i = 0; i < 16; i++) {
    root?.insertAdjacentHTML('afterbegin', cell(i))
  }
}
const addImageToRandomCell = () => {
  const random = Math.ceil(Math.random() * (15));
  let target = document.querySelector(`[data-img="${random}"]`)
  const oldChild= document.querySelector('img')
  target?.insertAdjacentHTML('beforeend', '<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">' )
  oldChild?.remove()
  setInterval(() => {
    const random = Math.ceil(Math.random() * (15));
    let target = document.querySelector(`[data-img="${random}"]`)
    const oldChild= document.querySelector('img')
    target?.insertAdjacentHTML('beforeend', '<img id="img" class="goblin" src="../../src/assets/imgs/goblin.png" alt="goblin">' )
    oldChild?.remove()
  }, 1000)

}
addCells()
addImageToRandomCell()
