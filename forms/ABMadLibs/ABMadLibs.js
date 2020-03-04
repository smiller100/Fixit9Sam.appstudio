
btnSubmitML.onclick=function(){
  let noun1 = inptNoun1.value
  let noun2 = inptNoun2.value
  let noun3 = inptNoun3.value
  let noun4 = inptNoun4.value
  let noun5 = inptNoun5.value
  let noun6 = inptNoun6.value
  let noun7 = inptNoun7.value
  let verb1 = inptVerb1.value
  let verb2 = inptVerb2.value
  let verb3 = inptVerb3.value
  let verb4 = inptVerb4.value
  let adj1 = inptAdj1.value
  let adj2 = inptAdj2.value
  let adj3 = inptAdj3.value
  let verbAction1 = verb1.concat("ing")
  let verbAction2 = verb2.concat("ing")
  let verbAction4 = verb4.concat("ing")
  let nounPlural7 = noun7.concat("s")
  lblResult.value = `A ${noun1} in Nebraska was arrested this morning after ${verbAction1} in front of a ${adj1} ${noun2}. The perpetrator had a history of ${verbAction2}, but no one - not even her ${noun3} - ever imagined she'd ${verb3} with a ${noun4}. Even her ${noun5} was surprised. "I always thought she was ${adj2}, but I never thought she would do something like this." Either way, we imagine that after witnessing her ${verbAction4} with a ${adj3} ${noun6}, there are probably a whole lot of ${nounPlural7} that are going to need therapy.`
}


btnReset.onclick=function(){
  lblResult.value = 'Play again!'
  inptNoun1.value = ''
  inptNoun2.value = ''
  inptNoun3.value = ''
  inptNoun4.value = ''
  inptNoun5.value = ''
  inptNoun6.value = ''
  inptNoun7.value = ''
  inptVerb1.value = ''
  inptVerb2.value = ''
  inptVerb3.value = ''
  inptVerb4.value = ''
  inptAdj1.value = ''
  inptAdj2.value = ''
  inptAdj3.value = ''
}
