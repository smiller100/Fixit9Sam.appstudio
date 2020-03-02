
btnMember.onclick=function(){
  memberName = inptFirstName.value
  if (memberName == members)
  alert("Member's name already exists in register")
else
  members.push(inptFirstName.value)
  alert("Member has been registered")
}


let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

