// JavaScript Document
//paypal-checkout-flow

var indexURL = "index.html";
//LIM
//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer
        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
   
				 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}
  	
				 
	  
			});
			 $('.goBtn').click(function(){
	window.open("00100.html");
		});



	
		});
	
					
			
				
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00101.html");
		});
		});
	

				
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00102.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00103.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00104.html");
		});
		});
	
				
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00105.html");
		});
		});
	

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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00106.html");
		});
	
	

				 });
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00107.html");
		});
		});
	
            });
        }

    }, '#lim7');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00108.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00109.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00110.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00111.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00112.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00113.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00114.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00115.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00116.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                             $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00117.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00118.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00119.html");
		});
		});
	
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
                payment: {
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                            $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00200.html");
		});
		});
	
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
                payment: {
                    transactions: [
                        {
                            amount: { total: '29.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00201',
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
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00201.html");
		});
		});
	
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
               payment:{ 
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00202',
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
			   },
			     experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00202.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00203',
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
			},
			experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00203.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00204',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00204.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00205',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00205.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00206',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00206.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00207',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00207.html");
		});
		});
	
            });
        }

    }, '#sta7');

paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00208',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00208.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00209',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00209.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00210',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                         $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00210.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00211',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00211.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00212',
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
			},
			experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00212.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00213',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                             $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00213.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00214',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00214.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00215',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00215.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00216',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00216.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00217',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00217.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00218',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00218.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '29.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00219',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00219.html");
		});
		});
	
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
                payment:{
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00300.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00301',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00301.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00302',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00302.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00303',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00303.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00304',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00304.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00305',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00305.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00306',
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
				}, 
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00306.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00307',
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
				}, 
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00307.html");
		});
		});
	
            });
        }

    }, '#pro7');
	
	paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00308',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00308.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00309',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00309.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00310',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00310.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00311',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00311.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00312',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                           $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00312.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00313',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00313.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00314',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00314.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00315',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00315.html");
		});
		});
	
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
                payment:{
					transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00316',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00316.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00317',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00317.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00318',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00318.html");
		});
		});
	
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
                payment:{
				transactions: [
                    {
                        amount: { total: '69.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00319',
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
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	window.open("00319.html");
		});
		});
	
            });
        }

    }, '#pro19');
