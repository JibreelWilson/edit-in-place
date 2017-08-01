$(document).ready(function(){
	
	$('#myNameP').on('click',function(){
		$('#myNameP').addClass('hidden')
		$('#myNameInput').removeClass('hidden')
		$('#myNameInput').trigger('focus')
		$('#myNameInput').val($('#myNameP').text())
	})
	$('#myNameInput').on('blur',function(){
		$('#myNameP').removeClass('hidden')
		$('myNameInput').addClass('hidden')
		$('#myNameP').text($('#myNameInput').val())
	})
	
	$('#bioP').on('click',function(){
		$('#bioP').addClass('hidden')
		$('#bioTextArea').removeClass('hidden')
		$('#bioTextArea').trigger('focus')
		$('#bioTextArea').val($('#bioP').text())
	})
	$("#bioTextArea").on('blur',function(){
		$('#bioP').removeClass('hidden')
		$('#bioTextArea').addClass('hidden')
		$('#bioP').text($('#bioTextArea').val())
	})
})

