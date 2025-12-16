export function filterGifts (gifts) {
  const giftsWithoutHash = gifts.filter((gift) => !gift.includes('#'))
  return giftsWithoutHash
}
