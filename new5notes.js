function getNewNotes(salary,bills){
  const totalBills = bills === [] ? 0 : bills.reduce((acc, c) => acc + c)
  const leftOver = salary - totalBills
  return leftOver > 0 ? Math.floor(leftOver/5) : 0
}
