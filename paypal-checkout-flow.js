// JavaScript Document
//paypal-checkout-flow

//LIM
//00100
paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {
			tagline: false,tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00100',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
   
				var page = "00100.html";

var $dialog = $('<div></div>')
               .html('<iframe style="border: 2px;z-index:20;" src="' + page + '" width="100%" height="100%"></iframe>')
               .dialog({
                   autoOpen: false,
                   modal: true,
                   height: 800,
                   width: 1200,
                   title: "Download"
               });
$dialog.dialog('open');
				
            });
        }

    }, '#lim0');
	
	//00101
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00101',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim1');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00102',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim2');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00103',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim3');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00104',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim4');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00105',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim5');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00106',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim6');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00107',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim7');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00108',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim8');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00109',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim9');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00110',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim10');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00111',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim11');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00112',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim12');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00113',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim13');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00114',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim14');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00115',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim15');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00116',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim16');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00117',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim17');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00118',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim18');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '14.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00119',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '14.95',
		currency:'USD'
	}
	]
},

 			

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#lim19');
	
	
	
	
	
	
	

//STA
//
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta0');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta1');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta2');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta3');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta4');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta5');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta6');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta7');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta8');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta9');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta10');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta11');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta12');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta13');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta14');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta15');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta16');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta17');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta18');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '29.95',
		currency:'USD'
	}
	]
},


 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#sta19');




//PRO
//
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro0');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro1');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro2');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro3');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro4');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro5');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro6');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro7');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro8');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro9');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro10');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro11');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro12');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro13');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro14');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro15');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro16');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro17');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro18');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '69.95',
		currency:'USD'
	}
	]
},

 				

 }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#pro19');
