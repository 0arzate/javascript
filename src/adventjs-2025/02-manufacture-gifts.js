function manufactureGifts(giftsToProduce) {
  const gifts = [];

  giftsToProduce.forEach((gift) => {
    if(gift.quantity <= 0) {
      return
    }

    for(let i = 1; i <= gift.quantity; i++) {
      gifts.push(gift.toy)
    }
  })

  return gifts
}