(function(){

let namberPiple = document.querySelector('.numberPuple');
let days = document.querySelector('.numberDays');
let result = document.querySelector('.result');
let batton = document.querySelector('.calc');

result.value = result.value.textContent = 'Вы не вели данные!'
let resultCalc = () =>{

    let finish = (Number(namberPiple.value) + Number(days.value)) * 1000

    result.value = finish + ' Тысяч' 

}
let chek = () =>{
     if (namberPiple.value === '' || namberDays.value === ''){
     	result.value = result.value.textContent = 'Enter is not date'

     }

}
batton.addEventListener('click', () => {
		resultCalc()
		chek()
	})
})()