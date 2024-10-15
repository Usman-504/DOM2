//Task 1
function task1(){

    let num1 = 10;
    let num2 = 5;
    num1+=num2; // num1 = num1 + num2 so value of num1 will become 15

    num2--; //decrement num2 so value of num2 will become 4
    let num3 = num1 * num1; // 60 will be stored in num3
    num1 = num1/2; // num1= num1/2 so value of num1 will beocome 7.5
    num3%=num1; //num1= num3%num1 so value of num3 will become 0
    
    console.log('Final Values:', num1, num2, num3);
}



//Task2
function task2(){
    let names = ['Usman', 'Ali', 'Ahmad', 'Umar', 'Amir'];
    // let num = [1,1000, 2];
    console.log('Initial_Array:', names);
    names.sort();
    
    console.log('Sorted_Array:',names);
    // console.log('Sorted_Array:',num);
    names.push('Khan');
    console.log('Adding New Element Khan:',names);
    names.pop();
    console.log('Removing Last Element:',names);
    SearchArray(names, 'Usman')

}

function SearchArray(arr, name){
let itemIndex;
    if(arr.includes(name)){
        itemIndex = arr.indexOf(name);
        console.log('Name Found At Index:', itemIndex);
    }
    else {
        console.log('Name Not Found:');
    }
}

//Task 3
let con = document.getElementById('container');
let par = document.getElementById('par');
let bgColor = con.style.backgroundColor;
let pColor = con.style.color;
let text = con.innerText;

con.addEventListener('mouseover', function (){
    con.style.backgroundColor = 'black';
    con.style.color = 'white';
    par.innerText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
});

con.addEventListener('mouseout', function (){
    con.style.backgroundColor = bgColor;
    con.style.color = pColor;
    par.innerText = text;
});

//Task 4
function formSubmit(){
    let userName = document.getElementById('name').value;
let userAge = document.getElementById('age').value;
let age = Number(userAge);
    if(userName === ''){
        alert('Please Enter Name');
       
        return false
    }
    
    else if(!isNaN(userName)){
        alert('Please Enter Valid Name');
        
         
        return false
    }

    if(age === 0){
        alert('Please Enter Age');
        return false
    }
    else if(isNaN(age)){
        alert('Please Enter Valid Age');
        return false
    }
        alert('Form Submitted Successfully');
        return true
    
}