/**
 * Created by likaituan on 03/01/2018.
 */

let elements = [
	{
		name: 'Rook',
		row: 1,
		col: 1
	},
	{
		name: 'Knight',
		row: 1,
		col: 2
	},
	{
		name: 'Bishop',
		row: 1,
		col: 3
	},
	{
		name: 'Guard',
		row: 1,
		col: 4
	},
	{
		name: 'King',
		row: 1,
		col: 5
	},
	{
		name: 'Guard',
		row: 1,
		col: 6
	},
	{
		name: 'Bishop',
		row: 1,
		col: 7
	},
	{
		name: 'Knight',
		row: 1,
		col: 8
	},
	{
		name: 'Rook',
		row: 1,
		col: 9
	},
	{
		name: 'Cannon',
		row: 3,
		col: 2
	},
	{
		name: 'Cannon',
		row: 3,
		col: 8
	},
	{
		name: 'Pawn',
		row: 4,
		col: 1
	},
	{
		name: 'Pawn',
		row: 4,
		col: 3
	},
	{
		name: 'Pawn',
		row: 4,
		col: 5
	},
	{
		name: 'Pawn',
		row: 4,
		col: 7
	},
	{
		name: 'Pawn',
		row: 4,
		col: 9
	}
];

elements.forEach(item => {
	item.color = 'black';
	let mirror = {
		name: item.name,
		color: 'red',
		row: 11 - item.row,
		col: 10 - item.col
	};
	elements.push(mirror);
});

module.exports = elements;