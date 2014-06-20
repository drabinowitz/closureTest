$(document).ready(function () {

	$('button').on('click',addRandNum);	

})

var iterator = (function (){

	var privateCounter = 0;
	
	function changeVal(val){

		privateCounter += val;

	}

	return {

		increment: function(){

			changeVal(1);

		},

		decrement: function(){

			changeVal(-1);

		},

		value: function(){

			return privateCounter;

		}

	};
})();

var addRandNum = function () {

	iterator.increment();

	$('.row').append($('<p>').attr('class','col-md-12').text(Math.random()));

	$('.counter').text(iterator.value());

}