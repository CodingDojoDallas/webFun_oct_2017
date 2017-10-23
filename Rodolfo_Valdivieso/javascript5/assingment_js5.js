printRange(2, 10, 2);

function printRange(start, end, skip)
{
	for (var i=2;i<=10;i=i+2)
	{
		if (i!=end)
		{
			console.log(i);
		}
	}
}