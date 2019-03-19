var question = ['What is 1 + 1?', 'What is 2 + 2?', 'What is 3 + 3?', 'What is 4 + 4?']

var option1 = ['<button class=buttons002 onclick=q1c()>2</button>',
    '<button class=buttons002 onclick=q2i()>1</button>',
    '<button class=buttons002 onclick=q3i()>8</button>'];

var option2 = ['<button class=buttons002 onclick=q2i()>1</button>',
    '<button class=buttons002 onclick=q2i()>10</button>',
    '<button class=buttons002 onclick=q3i()>3</button>'];

var option3 = ['<button class=buttons002 onclick=q1i()>1</button>',
    '<button class=buttons002 onclick=q2c()>4</button>',
    '<button class=buttons002 onclick=q3c()>1</button>']

var option4 = ['<button class=buttons002 onclick=q1i()>2</button>',
    '<button class=buttons002 onclick=q2i()>1</button>',
    '<button class=buttons002 onclick=q3c()>2</button>']

var c = ['Correct', 'Correct', 'Correct', 'Correct', '']

var i = ['Incorrect', 'Incorrect', 'Incorrect']

var n = 0;
n++
var s = 0;
s++;

function start001() {
    disappear001.innerHTML = '';
    message001.innerHTML = '';
    question001.innerHTML = question[0];
    option001.innerHTML = option1[0];
    option002.innerHTML = option2[0];
    option003.innerHTML = option3[0];
    option004.innerHTML = option4[0];
    number001.innerHTML = n++;
}

function q1c() {
    answer001.innerHTML = '<div id=green001>' + c[0] + '</div>';
    option001.innerHTML = '';
    option002.innerHTML = '';
    option003.innerHTML = '';
    option004.innerHTML = '';
    next001.innerHTML = '<button class=buttons001 onclick=new002()>Next</button>';
    score001.innerHTML = s++; 
}

function q1i() {
    answer001.innerHTML = '<div id=red001>' + i[0] + '</div>';
    option001.innerHTML = '';
    option002.innerHTML = '';
    option003.innerHTML = '';
    option004.innerHTML = '';
    next001.innerHTML = '<button class=buttons001 onclick=new002()>Next</button>';
    
}

function new002() {
    // disappear001.innerHTML = '';
    // message001.innerHTML = '';
    question001.innerHTML = question[1];
    option001.innerHTML = option1[1];
    option002.innerHTML = option2[1];
    option003.innerHTML = option3[1];
    option004.innerHTML = option4[1];
    next001.innerHTML = '';
    answer001.innerHTML = '';
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = '<div id=green001>' + c[1] + '</div>';
    option001.innerHTML = '';
    option002.innerHTML = '';
    option003.innerHTML = '';
    option004.innerHTML = '';
    next001.innerHTML = '<button class=buttons001 onclick=new003()>Next</button>';
    score001.innerHTML = s++; 
}

function q2i() {
    answer001.innerHTML = '<div id=red001>' + i[1] + '</div>';
    option001.innerHTML = '';
    option002.innerHTML = '';
    option003.innerHTML = '';
    option004.innerHTML = '';
    next001.innerHTML = '<button class=buttons001 onclick=new003()>Next</button>';
    
}

function new003() {
    // disappear001.innerHTML = '';
    // message001.innerHTML = '';
    question001.innerHTML = question[1];
    option001.innerHTML = option1[1];
    option002.innerHTML = option2[1];
    option003.innerHTML = option3[1];
    option004.innerHTML = option4[1];
    next002.innerHTML = '';
    answer002.innerHTML = '';
    number001.innerHTML = n++;
}








// question objects

// [
//  { questionId, isCorrect}
// ]

// render questions
// create question tag (What is something?)
// render choices (data-value = true or false)

// whenver we click a choice
// set the clicked one to look different
// set all others to go back to default
// modify the question object to have value for whether they answered right or wrong

// whenever finish game button is clicked OR the timer runs out
// iterate over questions, count up isCorrect