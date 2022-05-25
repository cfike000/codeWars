function defineSuit(card) {
  return card.charAt(card.length-1) == '♣' ? 'clubs':
        card.charAt(card.length-1) == '♠' ? 'spades':
        card.charAt(card.length-1) == '♦' ? 'diamonds' :
        card.charAt(card.length-1) == '♥' ? 'hearts' : null
}
