// paypal-flow.js

var bLocs = [];

var bLoc;

var dlLinks = [];

var dLink;


dlLinks[0] = "http://www.mediafire.com/file/g3jk4kdf3y33h0b/After_ME_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[1] = "http://www.mediafire.com/file/ifswgxrxax94ojv/All_In_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[2] = "http://www.mediafire.com/file/5bnkpbcsi4bbx7g/Baddest_Bitch_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[3] = "http://www.mediafire.com/file/wwlba5bwyvvhvn5/Beach_Cruiser_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[4] = "http://www.mediafire.com/file/nquzqj6b64p58d1/Bi-Coastal_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.zip";
dlLinks[5] = "http://www.mediafire.com/file/kib9xw3054v654o/Bottles_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[6] = "http://www.mediafire.com/file/jfrscaedyzw6f5t/Destined_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[7] = "http://www.mediafire.com/file/88lviflrv79fsdx/F-n_Do_It_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[8] = "http://www.mediafire.com/file/x52gy5acpjn2hqj/Frenchie_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[9] = "http://www.mediafire.com/file/ay2dhmt7p8h4zv7/Functional_Fyre_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[10] = "http://www.mediafire.com/file/nd5fajbz3mddf2g/Gyros_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[11] = "http://www.mediafire.com/file/sc1ol6vupbcc7l2/Hands-Up_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[12] = "http://www.mediafire.com/file/f7sg47i47352bl4/HH-e_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[13] = "http://www.mediafire.com/file/z8p72szgqm769bj/Hi-Jinx_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[14] = "http://www.mediafire.com/file/kthcr3b2jrh4b3o/In_My_Mind_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[15] = "http://www.mediafire.com/file/7vjldy6wlscxcg4/Justify_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[16] = "http://www.mediafire.com/file/ipvzka180p3iwsy/Like_Neon_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[17] = "http://www.mediafire.com/file/5926it051m4wao6/Make_It_Count_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[18] = "http://www.mediafire.com/file/4u46ejjb668padc/Numbers_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[19] = "http://www.mediafire.com/file/niaov7jhd7ozs0e/Position2_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

dlLinks[20] = "http://www.mediafire.com/file/hvoq5f2llz7mbjz/After_ME%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[21] = "http://www.mediafire.com/file/kd81azohmmoe1ze/All_In%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[22] = "http://www.mediafire.com/file/dbhfd7jd12hv7ad/Baddest_Bitch%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[23] = "http://www.mediafire.com/file/p22ad45d5bc1210/Beach_Cruiser%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[24] = "http://www.mediafire.com/file/nfrb1flly01pnzl/Bi-Coastal%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[25] = "http://www.mediafire.com/file/8w603saow8af1j4/Bottles%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[26] = "http://www.mediafire.com/file/02esk55tmgc6fga/Destined%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[27] = "http://www.mediafire.com/file/bd6beizw4bntl6p/F-n_Do_It%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[28] = "http://www.mediafire.com/file/5kqtbo1bh8f65ra/Frenchie%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[29] = "http://www.mediafire.com/file/usabrs1cx6vxi6z/Functional_Fyre%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[30] = "http://www.mediafire.com/file/7n2j4ba4a9ayf3j/Gyros%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[31] = "http://www.mediafire.com/file/9n4yzdtz3m647ny/Hands-Up%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[32] = "http://www.mediafire.com/file/s1opx6ep1d2rm47/HH-e%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[33] = "http://www.mediafire.com/file/57rq4kxi50oj542/Hi-Jinx%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com_.zip";
dlLinks[34] = "http://www.mediafire.com/file/hhatfqmh9ttz8nk/In_My_Mind%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[35] = "http://www.mediafire.com/file/86tby6bbd7cdkan/Justify%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[36] = "http://www.mediafire.com/file/v0mbt2fbz1svk3d/Like_Neon%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[37] = "http://www.mediafire.com/file/e5g6u25tnuu56ie/Make_It_Count%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[38] = "http://www.mediafire.com/file/62xed6333ny96j3/Numbers%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[39] = "http://www.mediafire.com/file/2zi6c8oh129x773/Position2%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

dlLinks[40] = "http://www.mediafire.com/file/3ecqvrxos3128or/After_ME%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[41] = "http://www.mediafire.com/file/kd81azohmmoe1ze/All_In%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[42] = "http://www.mediafire.com/file/sc38jg3ikad2to3/Baddest_Bitch%28No_Tag%29-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[43] = "http://www.mediafire.com/file/a5ide5mphbb5xov/Beach_Cruiser%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[44] = "http://www.mediafire.com/file/hp92xysqhxb3hx5/Bi-Coastal%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[45] = "http://www.mediafire.com/file/ba7hyph58ou15z2/Bottles%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[46] = "http://www.mediafire.com/file/rq4m5ajzwtvob5m/Destined%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[47] = "http://www.mediafire.com/file/kfpe2o299ffyx84/F-n_Do_It%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[48] = "http://www.mediafire.com/file/42zdve4tq4ey3io/Frenchie%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[49] = "http://www.mediafire.com/file/ohr2hw4vcjrne02/Functional_Fyre%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[50] = "http://www.mediafire.com/file/iomtbz3iq1gak1j/Gyros%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[51] = "http://www.mediafire.com/file/a2cfts2w9qvd29w/Hands-Up%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[52] = "http://www.mediafire.com/file/aw5c4ce540znxiw/HH-e%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[53] = "http://www.mediafire.com/file/aw5c4ce540znxiw/HH-e%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[54] = "http://www.mediafire.com/file/2dxrcc1ijzxf0nq/In_My_Mind%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[55] = "http://www.mediafire.com/file/emtumnn2tbw1hnc/Justify%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[56] = "http://www.mediafire.com/file/utanwup6ajt5ha9/Like_Neon%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[57] = "http://www.mediafire.com/file/974yda7h425al1a/Make_It_Count%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[58] = "http://www.mediafire.com/file/b6bpt11e3zapzb6/Numbers%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[59] = "http://www.mediafire.com/file/g49jro8o0n1k14w/Position2%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

	
 //LIM
//00100
function lim0(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00100',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
   text: "Your download is waiting.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}
  	
				 
	  
			});
			 $('.goBtn').click(function(){
	
	 window.open(dlLinks[0],"Download");
		});



	
		});
	
					
			
				
            });
        }

    }, '#lim0');
}
	
	
	//00101
	function lim1(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00101',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[1],"Download");
		});
		});
	

				
            });
        }

    }, '#lim1');
	}
	
	
	//00100
	function lim2(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00102',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
 window.open(dlLinks[2],"Download");
		});
		});
	
            });
        }

    }, '#lim2');
	}
	
	
	//00100
	function lim3(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00103',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[3],"Download");
		});
		});
	
            });
        }

    }, '#lim3');
	}
	
	//00100
	function lim4(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00104',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[4],"Download");
		});
		});
	
				
            });
        }

    }, '#lim4');
	}
	//00100
	function lim5(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00105',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[5],"Download");
		});
		});
	

				 });
           
        }

    }, '#lim5');
	}
	//00100
	function lim6(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00106',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	  window.open(dlLinks[6],"Download");

		});
	
	

				 });
            });
        }

    }, '#lim6');
	}
	
	//00100
	function lim7(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00107',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[7],"Download");
		});
		});
	
            });
        }

    }, '#lim7');
	}
	//00100
	function lim8(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00108',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[8],"Download");
		});
		});
	
            });
        }

    }, '#lim8');
	}
	//00100
	function lim9(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00109',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
 window.open(dlLinks[9],"Download");
		});
		});
	
            });
        }

    }, '#lim9');
	}
	//00100
	function lim10(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00110',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[10],"Download");
		});
		});
	
            });
        }

    }, '#lim10');
	}
	
	//00100
	function lim11(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00111',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[11],"Download");
		});
		});
	
            });
        }

    }, '#lim11');
	}
	
	//00100
	function lim12(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00112',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[12],"Download");
		});
		});
	
            });
        }

    }, '#lim12');
	}
	
	//00100
	function lim13(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00113',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[13],"Download");
		});
		});
	
            });
        }

    }, '#lim13');
	}
	
	//00100
	function lim14(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00114',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[14],"Download");
		});
		});
	
            });
        }

    }, '#lim14');
	}
	
	//00100
	function lim15(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00115',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[15],"Download");
		});
		});
	
            });
        }

    }, '#lim15');
	}
	
	//00100
	function lim16(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00116',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[16],"Download");
		});
		});
	
            });
        }

    }, '#lim16');
	}
	
	//00100
	function lim17(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00117',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[17],"Download");
		});
		});
	
            });
        }

    }, '#lim17');
	}
	
	//00100
	function lim18(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00118',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[18],"Download");
		});
		});
	
            });
        }

    }, '#lim18');
	}
	
	//00100
	function lim19(){
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
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00119',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[19],"Download");
		});
		});
	
            });
        }

    }, '#lim19');
	}
	
	
//STA
//
function sta0(){
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
                            amount: { total: '19.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 $(window).open(dlLinks[20],"Download");
		});
		});
	
            });
        }

    }, '#sta0');
}


function sta1(){
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
                            amount: { total: '19.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00201',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
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
	 window.open(dlLinks[21],"Download");
		});
		});
	
            });
        }

    }, '#sta1');
}

function sta2(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00202',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[22],"Download");
		});
		});
	
            });
        }

    }, '#sta2');
}

function sta3(){	
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00203',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[23],"Download");
		});
		});
	
            });
        }

    }, '#sta3');
}

function sta4(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00204',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
 window.open(dlLinks[24],"Download");
		});
		});
	
            });
        }

    }, '#sta4');
}

function sta5(){

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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00205',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[25],"Download");
		});
		});
	
            });
        }

    }, '#sta5');
}


function sta6(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00206',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[26],"Download");
		});
		});
	
            });
        }

    }, '#sta6');
}


function sta7(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00207',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[27],"Download");
		});
		});
	
            });
        }

    }, '#sta7');
}

function sta8(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00208',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[28],"Download");
		});
		});
	
            });
        }

    }, '#sta8');
}

function sta9(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00209',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[29],"Download");
		});
		});
	
            });
        }

    }, '#sta9');
}


function sta10(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00210',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[30],"Download");
		});
		});
	
            });
        }

    }, '#sta10');
}

function sta11(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00211',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[31],"Download");
		});
		});
	
            });
        }

    }, '#sta11');
}

function sta12(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00212',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[32],"Download");
		});
		});
	
            });
        }

    }, '#sta12');
}

function sta13(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00213',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[33],"Download");
		});
		});
	
            });
        }

    }, '#sta13');
}

function sta14(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00214',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[34],"Download");
		});
		});
	
            });
        }

    }, '#sta14');
}

function sta15(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00215',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[35],"Download");
		});
		});
	
            });
        }

    }, '#sta15');
}

function sta16(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00216',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[36],"Download");
		});
		});
	
            });
        }

    }, '#sta16');
}

function sta17(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00217',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[37],"Download");
		});
		});
	
            });
        }

    }, '#sta17');
}

function sta18(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00218',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[38],"Download");
		});
		});
	
            });
        }

    }, '#sta18');
}

function sta19(){
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
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00219',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
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
	 window.open(dlLinks[39],"Download");
		});
		});
	
            });
        }

    }, '#sta19');

}


//PRO
//
function pro0(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[40],"Download");
		});
		});
	
            });
        }

    }, '#pro0');
}

function pro1(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00301',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[41],"Download");
		});
		});
	
            });
        }

    }, '#pro1');
}

function pro2(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00302',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[42],"Download");
		});
		});
	
            });
        }

    }, '#pro2');
}

function pro3(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00303',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[43],"Download");
		});
		});
	
            });
        }

    }, '#pro3');
}

function pro4(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00304',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[44],"Download");
		});
		});
	
            });
        }

    }, '#pro4');
}

function pro5(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00305',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[45],"Download");
		});
		});
	
            });
        }

    }, '#pro5');
}

function pro6(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00306',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[46],"Download");
		});
		});
	
            });
        }

    }, '#pro6');
}

function pro7(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00307',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[47],"Download");
		});
		});
	
            });
        }

    }, '#pro7');
}

function pro8(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00308',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[48],"Download");
		});
		});
	
            });
        }

    }, '#pro8');
}

function pro9(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00309',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[49],"Download");
		});
		});
	
            });
        }

    }, '#pro9');
}

function pro10(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00310',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[50],"Download");
		});
		});
	
            });
        }

    }, '#pro10');
}

function pro11(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00311',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[51],"Download");
		});
		});
	
            });
        }

    }, '#pro11');
}

function pro12(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00312',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[52],"Download");
		});
		});
	
            });
        }

    }, '#pro12');
}

function pro13(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00313',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[53],"Download");
		});
		});
	
            });
        }

    }, '#pro13');
}

function pro14(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00314',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[54],"Download");
		});
		});
	
            });
        }

    }, '#pro14');
}

function pro15(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00315',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[55],"Download");
		});
		});
	
            });
        }

    }, '#pro15');
}


function pro16(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00316',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[56],"Download");
		});
		});
	
            });
        }

    }, '#pro16');
}

function pro17(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00317',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[57],"Download");
		});
		});
	
            });
        }

    }, '#pro17');
}

function pro18(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00318',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
 window.open(dlLinks[58],"Download");
		});
		});
	
            });
        }

    }, '#pro18');
}

function pro19(){
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
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00319',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
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
	 window.open(dlLinks[59],"Download");
		});
		});
	
            });
        }

    }, '#pro19');
}