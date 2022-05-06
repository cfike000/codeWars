function correct(string)
{
	return string.split('').map(x => x == '0' ? 'O' : 
                    x == '5' ? 'S' : (
                    x == '1' ? 'I' : x)).join('')
}
