btn1 = document.querySelector('#btn-1');
display = document.querySelector('#equation-display'); 
let displayEmpty = true;


//Adding listeners to all the buttons to display in top div
allBtns = document.querySelectorAll('button');
allBtns = Array.from(allBtns); //converts nodelist to array 

for(i=0; i<allBtns.length; i++)
{
	allBtns[i].addEventListener('click', btnToDisplay); 
}

function btnToDisplay(e) 
{
	buttonTxt = e.target.textContent;
	if(displayEmpty)
	{
		display.textContent = buttonTxt;
		displayEmpty = false; 
	}
	else
	{
		display.textContent += buttonTxt;
	}
}

function clearDisplay()
{
	display.textContent = '0';
	displayEmpty = true; 
}

clrBtn = document.querySelector('#btn-clear');
clrBtn.removeEventListener('click', btnToDisplay);
clrBtn.addEventListener('click', clearDisplay); 

//if there is only 1 value in display, just change it to 0 instead of a blank slate
function deleteOp()
{
	if(display.textContent.length == 1)
	{
		display.textContent = '0';
		displayEmpty = true;
	}
	else
	{
		display.textContent = display.textContent.slice(0,-1); //shaves off the last char value of the equation display 
	}
}

delBtn = document.querySelector('#btn-del');
delBtn.removeEventListener('click', btnToDisplay);
delBtn.addEventListener('click', deleteOp);

function equalsOp()
{
	let divIndex = -1;
	let multIndex = -1;
	let addIndex = -1;
	let subIndex = -1;
	equation = display.textContent; 

	if(equation.indexOf('/') > -1)
	{
		divIndex = equation.indexOf('/');
		string1 = equation.slice(0,divIndex);
		string2 = equation.slice(divIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1/op2;
		display.textContent = result;
	}
	if(equation.indexOf('*') > -1)
	{
		multIndex = equation.indexOf('*');
		string1 = equation.slice(0,multIndex);
		string2 = equation.slice(multIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1*op2; 
		display.textContent = result;
	}
	if(equation.indexOf('+') > -1)
	{
		addIndex = equation.indexOf('+');
		string1 = equation.slice(0,addIndex);
		string2 = equation.slice(addIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1+op2; 
		display.textContent = result;
	}
	if(equation.indexOf('-') > -1)
	{
		subIndex = equation.indexOf('-');
		string1 = equation.slice(0,subIndex);
		string2 = equation.slice(subIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1-op2; 
		display.textContent = result;
	}
}

eqlsBtn = document.querySelector('#btn-equals');
eqlsBtn.removeEventListener('click', btnToDisplay);
eqlsBtn.addEventListener('click', equalsOp);






//********** to remove border overlapbtn1.style.borderTop = '2px solid #000000';