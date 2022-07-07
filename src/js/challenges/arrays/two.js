function solution(array) {
	return array.filter((item) => {
		if (item.total >= 100 && item.delivered) {
			return item
		}
	})
}

console.log(
	solution([
		{
			customerName: 'Nicolas',
			total: 100,
			delivered: true,
		},
		{
			customerName: 'Zulema',
			total: 120,
			delivered: false,
		},
	])
)
