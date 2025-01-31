const members = [
  { name: 'Harry potter', id: 'potter' },
  { name: 'Hermione', id: 'hermione' },
  { name: 'Rony', id: 'rony' },
  { name: 'Dobby', id: 'dobby' },
  { name: 'Dumbledore', id: 'dumbledore' },
  { name: 'Snape', id: 'snape' },
  { name: 'Lord', id: 'lord' },
]

let activeMember = 0
const images = document.getElementById("images")
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const memberName = document.getElementById('member_name')

function changeStatusButtons() {
  const prev = document.getElementById('button_prev')
  const isFirst = activeMember == 0
  prev.disabled = isFirst

  const next = document.getElementById('button_next')
  const isLast = activeMember == members.length  -1
  next.disabled = isLast
}

function changeMember(memberId){
 activeMember = memberId
  const member = members[activeMember]

  // Move o contêiner de imagens verticalmente
  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  memberName.classList = member.id

  changeName(member.name)
  changeStatusButtons()
}

function navigationMember(direction) {
changeMember(activeMember + direction)
}

function changeMenu() {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId){
changeMember(memberId);
changeMenu();
}