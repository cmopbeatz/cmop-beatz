paypal.Button.render({

env: 'sandbox',

client:{

sandbox: 'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',

production:'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'

},

style:{
	fundingicons: true,
	branding:true,
	size:'responsive',
	color:'silver',
	shape:'rect',
	label:'buynow'
	},

	payment: function(data, actions){
	
	

       

	return actions.payment.create({
		payment: {
		transactions: [
		{
	amount: {total: '69.95', currency: 'USD' },

	item_list:{

	items:[
	{
		sku:'cmo00100-3',
		name:'After Me (Untagged) WAV by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

	}
	]
},


 	experience: {
 
             input_fields: {
 
		no_shipping: 1
                    
				}
               
			 }
	

	}
	]
	}
	});

	},

	


	onAuthorize: function (data, actions){

	return actions.payment.execute().then(function(payment){

	window.alert('payment accepted.');
	window.open('https://cmopbeatz.com/00100.html');
	});
}


},
	
	onCancel: function(data, actions){
	window.alert('payment cancelled.');

	},

	onError: function(err){
	window.alert('something is wrong.');
	}

	

},'.pay1');