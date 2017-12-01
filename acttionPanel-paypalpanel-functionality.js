// JavaScript Document
//Declare var(s):





var leaseC = [];


var payC = [];

var leaseSel = [];

var bPay1 = [];

var bPay2 = [];

var bPay3 = [];



var bType1 = [];

var bType2 = [];

var bType3 = [];

var closeL = [];
 var closeP = [];

var paycontainer1;

var paycontainer2;

var paycontainer3;
 
//Assign array elements:

//[LC1]
leaseC[0] = $('#lease-cont0');
leaseC[1] = $('#lease-cont1');
leaseC[2] = $('#lease-cont2');
leaseC[3] = $('#lease-cont3');
leaseC[4] = $('#lease-cont4');
leaseC[5] = $('#lease-cont5');
leaseC[6] = $('#lease-cont6');
leaseC[7] = $('#lease-cont7');
leaseC[8] = $('#lease-cont8');
leaseC[9] = $('#lease-cont9');
leaseC[10] = $('#lease-cont10');
leaseC[11] = $('#lease-cont11');
leaseC[12] = $('#lease-cont12');
leaseC[13] = $('#lease-cont13');
leaseC[14] = $('#lease-cont14');
leaseC[15] = $('#lease-cont15');
leaseC[16] = $('#lease-cont16');
leaseC[17] = $('#lease-cont17');
leaseC[18] = $('#lease-cont18');
leaseC[19] = $('#lease-cont19');

//[PC1]
payC[0] = $('#payCont-0');
payC[1] = $('#payCont-1');
payC[2] = $('#payCont-2');
payC[3] = $('#payCont-3');
payC[4] = $('#payCont-4');
payC[5] = $('#payCont-5');
payC[6] = $('#payCont-6');
payC[7] = $('#payCont-7');
payC[8] = $('#payCont-8');
payC[9] = $('#payCont-9');
payC[10] = $('#payCont-10');
payC[11] = $('#payCont-11');
payC[12] = $('#payCont-12');
payC[13] = $('#payCont-13');
payC[14] = $('#payCont-14');
payC[15] = $('#payCont-15');
payC[16] = $('#payCont-16');
payC[17] = $('#payCont-17');
payC[18] = $('#payCont-18');
payC[19] = $('#payCont-19');


//[PCa]
bPay1[0] = payC[0].find('.pay1');
bPay1[1] = payC[1].find('.pay1');
bPay1[2] = payC[2].find('.pay1');
bPay1[3] = payC[3].find('.pay1');
bPay1[4] = payC[4].find('.pay1');
bPay1[5] = payC[5].find('.pay1');
bPay1[6] = payC[6].find('.pay1');
bPay1[7] = payC[7].find('.pay1');
bPay1[8] = payC[8].find('.pay1');
bPay1[9] = payC[9].find('.pay1');
bPay1[10] = payC[10].find('.pay1');
bPay1[11] = payC[11].find('.pay1');
bPay1[12] = payC[12].find('.pay1');
bPay1[13] = payC[13].find('.pay1');
bPay1[14] = payC[14].find('.pay1');
bPay1[15] = payC[15].find('.pay1');
bPay1[16] = payC[16].find('.pay1');
bPay1[17] = payC[17].find('.pay1');
bPay1[18] = payC[18].find('.pay1');
bPay1[19] = payC[19].find('.pay1');

//[PCb]
bPay2[0] = payC[0].find('.pay2');
bPay2[1] = payC[1].find('.pay2');
bPay2[2] = payC[2].find('.pay2');
bPay2[3] = payC[3].find('.pay2');
bPay2[4] = payC[4].find('.pay2');
bPay2[5] = payC[5].find('.pay2');
bPay2[6] = payC[6].find('.pay2');
bPay2[7] = payC[7].find('.pay2');
bPay2[8] = payC[8].find('.pay2');
bPay2[9] = payC[9].find('.pay2');
bPay2[10] = payC[10].find('.pay2');
bPay2[11] = payC[11].find('.pay2');
bPay2[12] = payC[12].find('.pay2');
bPay2[13] = payC[13].find('.pay2');
bPay2[14] = payC[14].find('.pay2');
bPay2[15] = payC[15].find('.pay2');
bPay2[16] = payC[16].find('.pay2');
bPay2[17] = payC[17].find('.pay2');
bPay2[18] = payC[18].find('.pay2');
bPay2[19] = payC[19].find('.pay2');


//[PCc]
bPay3[0] = payC[0].find('.pay3');
bPay3[1] = payC[1].find('.pay3');
bPay3[2] = payC[2].find('.pay3');
bPay3[3] = payC[3].find('.pay3');
bPay3[4] = payC[4].find('.pay3');
bPay3[5] = payC[5].find('.pay3');
bPay3[6] = payC[6].find('.pay3');
bPay3[7] = payC[7].find('.pay3');
bPay3[8] = payC[8].find('.pay3');
bPay3[9] = payC[9].find('.pay3');
bPay3[10] = payC[10].find('.pay3');
bPay3[11] = payC[11].find('.pay3');
bPay3[12] = payC[12].find('.pay3');
bPay3[13] = payC[13].find('.pay3');
bPay3[14] = payC[14].find('.pay3');
bPay3[15] = payC[15].find('.pay3');
bPay3[16] = payC[16].find('.pay3');
bPay3[17] = payC[17].find('.pay3');
bPay3[18] = payC[18].find('.pay3');
bPay3[19] = payC[19].find('.pay3');

//[LCa]
bType1[0] = leaseC[0].find('.types1');
bType1[1] = leaseC[1].find('.types1');
bType1[2] = leaseC[2].find('.types1');
bType1[3] = leaseC[3].find('.types1');
bType1[4] = leaseC[4].find('.types1');
bType1[5] = leaseC[5].find('.types1');
bType1[6] = leaseC[6].find('.types1');
bType1[7] = leaseC[7].find('.types1');
bType1[8] = leaseC[8].find('.types1');
bType1[9] = leaseC[9].find('.types1');
bType1[10] = leaseC[10].find('.types1');
bType1[11] = leaseC[11].find('.types1');
bType1[12] = leaseC[12].find('.types1');
bType1[13] = leaseC[13].find('.types1');
bType1[14] = leaseC[14].find('.types1');
bType1[15] = leaseC[15].find('.types1');
bType1[16] = leaseC[16].find('.types1');
bType1[17] = leaseC[17].find('.types1');
bType1[18] = leaseC[18].find('.types1');
bType1[19] = leaseC[19].find('.types1');


//[LCb]
bType2[0] = leaseC[0].find('.types2');
bType2[1] = leaseC[1].find('.types2');
bType2[2] = leaseC[2].find('.types2');
bType2[3] = leaseC[3].find('.types2');
bType2[4] = leaseC[4].find('.types2');
bType2[5] = leaseC[5].find('.types2');
bType2[6] = leaseC[6].find('.types2');
bType2[7] = leaseC[7].find('.types2');
bType2[8] = leaseC[8].find('.types2');
bType2[9] = leaseC[9].find('.types2');
bType2[10] = leaseC[10].find('.types2');
bType2[11] = leaseC[11].find('.types2');
bType2[12] = leaseC[12].find('.types2');
bType2[13] = leaseC[13].find('.types2');
bType2[14] = leaseC[14].find('.types2');
bType2[15] = leaseC[15].find('.types2');
bType2[16] = leaseC[16].find('.types2');
bType2[17] = leaseC[17].find('.types2');
bType2[18] = leaseC[18].find('.types2');
bType2[19] = leaseC[19].find('.types2');


//[LCc]
bType3[0] = leaseC[0].find('.types3');
bType3[1] = leaseC[1].find('.types3');
bType3[2] = leaseC[2].find('.types3');
bType3[3] = leaseC[3].find('.types3');
bType3[4] = leaseC[4].find('.types3');
bType3[5] = leaseC[5].find('.types3');
bType3[6] = leaseC[6].find('.types3');
bType3[7] = leaseC[7].find('.types3');
bType3[8] = leaseC[8].find('.types3');
bType3[9] = leaseC[9].find('.types3');
bType3[10] = leaseC[10].find('.types3');
bType3[11] = leaseC[11].find('.types3');
bType3[12] = leaseC[12].find('.types3');
bType3[13] = leaseC[13].find('.types3');
bType3[14] = leaseC[14].find('.types3');
bType3[15] = leaseC[15].find('.types3');
bType3[16] = leaseC[16].find('.types3');
bType3[17] = leaseC[17].find('.types3');
bType3[18] = leaseC[18].find('.types3');
bType3[19] = leaseC[19].find('.types3');

//[SL1] 'select a lease...'
leaseSel[0] = $('#leaseType0');
leaseSel[1] = $('#leaseType1');
leaseSel[2] = $('#leaseType2');
leaseSel[3] = $('#leaseType3');
leaseSel[4] = $('#leaseType4');
leaseSel[5] = $('#leaseType5');
leaseSel[6] = $('#leaseType6');
leaseSel[7] = $('#leaseType7');
leaseSel[8] = $('#leaseType8');
leaseSel[9] = $('#leaseType9');
leaseSel[10] = $('#leaseType10');
leaseSel[11] = $('#leaseType11');
leaseSel[12] = $('#leaseType12');
leaseSel[13] = $('#leaseType13');
leaseSel[14] = $('#leaseType14');
leaseSel[15] = $('#leaseType15');
leaseSel[16] = $('#leaseType16');
leaseSel[17] = $('#leaseType17');
leaseSel[18] = $('#leaseType18');
leaseSel[19] = $('#leaseType19');


//[CLP]
//CL0/CP0
closeP[0] = payC[0].find('.closePay');
closeL[0] = leaseC[0].find('.closeLease');

//CL1/CP1
closeP[1] = payC[1].find('.closePay');
closeL[1] = leaseC[1].find('.closeLease');

//CL2/CP2
closeP[2] = payC[2].find('.closePay');
closeL[2] = leaseC[2].find('.closeLease');

//CL3/CP3
closeP[3] = payC[3].find('.closePay');
closeL[3] = leaseC[3].find('.closeLease');

//CL4/CP4
closeP[4] = payC[4].find('.closePay');
closeL[4] = leaseC[4].find('.closeLease');

//CL5/CP5
closeP[5] = payC[5].find('.closePay');
closeL[5] = leaseC[5].find('.closeLease');

//CL6/CP6
closeP[6] = payC[6].find('.closePay');
closeL[6] = leaseC[6].find('.closeLease');

//CL7/CP7
closeP[7] = payC[7].find('.closePay');
closeL[7] = leaseC[7].find('.closeLease');

//CL8/CP8
closeP[8] = payC[8].find('.closePay');
closeL[8] = leaseC[8].find('.closeLease');

//CL9/CP9
closeP[9] = payC[9].find('.closePay');
closeL[9] = leaseC[9].find('.closeLease');

//CL10/CP10
closeP[10] = payC[10].find('.closePay');
closeL[10] = leaseC[10].find('.closeLease');

//CL11/CP11
closeP[11] = payC[11].find('.closePay');
closeL[11] = leaseC[11].find('.closeLease');

//CL12/CP12
closeP[12] = payC[12].find('.closePay');
closeL[12] = leaseC[12].find('.closeLease');

//CL13/CP13
closeP[13] = payC[13].find('.closePay');
closeL[13] = leaseC[13].find('.closeLease');

//CL14/CP14
closeP[14] = payC[14].find('.closePay');
closeL[14] = leaseC[14].find('.closeLease');

//CL15/CP15
closeP[15] = payC[15].find('.closePay');
closeL[15] = leaseC[15].find('.closeLease');

//CL16/CP16
closeP[16] = payC[16].find('.closePay');
closeL[16] = leaseC[16].find('.closeLease');

//CL17/CP17
closeP[17] = payC[17].find('.closePay');
closeL[17] = leaseC[17].find('.closeLease');

//CL18/CP18
closeP[18] = payC[18].find('.closePay');
closeL[18] = leaseC[18].find('.closeLease');

//CL19/CP19
closeP[19] = payC[19].find('.closePay');
closeL[19] = leaseC[19].find('.closeLease');







//Assign functions:

//[SL2] 'initialize lease selection process'

//[ls0]
leaseSel[0].click(function(){
	leaseSel[0].hide();
	leaseC[0].show();
	});
	
	//[ls1]
leaseSel[1].click(function(){
	leaseSel[1].hide();
	leaseC[1].show();
	});
	
	//[ls2]
leaseSel[2].click(function(){
	leaseSel[2].hide();
	leaseC[2].show();
	});
	
	//[ls3]
leaseSel[3].click(function(){
	leaseSel[3].hide();
	leaseC[3].show();
	});
	
	//[ls4]
leaseSel[4].click(function(){
	leaseSel[4].hide();
	leaseC[4].show();
	});
	
	//[ls5]
leaseSel[5].click(function(){
	leaseSel[5].hide();
	leaseC[5].show();
	});
	
	//[ls6]
leaseSel[6].click(function(){
	leaseSel[6].hide();
	leaseC[6].show();
	});
	
	//[ls7]
leaseSel[7].click(function(){
	leaseSel[7].hide();
	leaseC[7].show();
	});
	
	//[ls8]
leaseSel[8].click(function(){
	leaseSel[8].hide();
	leaseC[8].show();
	});
	
	//[ls9]
leaseSel[9].click(function(){
	leaseSel[9].hide();
	leaseC[9].show();
	});
	
	//[ls10]
leaseSel[10].click(function(){
	leaseSel[10].hide();
	leaseC[10].show();
	});
	
	//[ls11]
leaseSel[11].click(function(){
	leaseSel[11].hide();
	leaseC[11].show();
	});
	
	//[ls12]
leaseSel[12].click(function(){
	leaseSel[12].hide();
	leaseC[12].show();
	});
	
	//[ls13]
leaseSel[13].click(function(){
	leaseSel[13].hide();
	leaseC[13].show();
	});
	
	//[ls14]
leaseSel[14].click(function(){
	leaseSel[14].hide();
	leaseC[14].show();
	});
	
	//[ls15]
leaseSel[15].click(function(){
	leaseSel[15].hide();
	leaseC[15].show();
	});
	
	//[ls16]
leaseSel[16].click(function(){
	leaseSel[16].hide();
	leaseC[16].show();
	});
	
	//[ls17]
leaseSel[17].click(function(){
	leaseSel[17].hide();
	leaseC[17].show();
	});
	
	//[ls18]
leaseSel[18].click(function(){
	leaseSel[18].hide();
	leaseC[18].show();
	});
	
	//[ls19]
leaseSel[19].click(function(){
	leaseSel[19].hide();
	leaseC[19].show();
	});
	
//[LC2]
	//[lc0]
	bType1[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].show();
		bPay2[0].hide();
		bPay3[0].hide();
		
		});
		bType2[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].hide();
		bPay2[0].show();
		bPay3[0].hide();
		
		});
		bType3[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].hide();
		bPay2[0].hide();
		bPay3[0].show();
		
		});
		
		//[lc1]
	bType1[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].show();
		bPay2[1].hide();
		bPay3[1].hide();
		
		});
		bType2[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].hide();
		bPay2[1].show();
		bPay3[1].hide();
		});
		bType3[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].hide();
		bPay2[1].hide();
		bPay3[1].show();
		
		});
		
		//[lc2]
	bType1[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].show();
		bPay2[2].hide();
		bPay3[2].hide();
		
		});
		bType2[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].hide();
		bPay2[2].show();
		bPay3[2].hide();
		
		});
		bType3[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].hide();
		bPay2[2].hide();
		bPay3[2].show();
		
		});
		
		//[lc3]
	bType1[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].show();
		bPay2[2].hide();
		bPay3[2].hide();
		
		});
		bType2[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].hide();
		bPay2[3].show();
		bPay3[3].hide();
		
		});
		bType3[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].hide();
		bPay2[3].hide();
		bPay3[3].show();
		
		});
		
		//[lc4]
	bType1[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].show();
		bPay2[4].hide();
		bPay3[4].hide();
		
		});
		bType2[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].hide();
		bPay2[4].show();
		bPay3[4].hide();
		
		});
		bType3[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].hide();
		bPay2[4].hide();
		bPay3[4].show();
		
		});
		
		//[lc5]
	bType1[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].show();
		bPay2[5].hide();
		bPay3[5].hide();
		
		});
		bType2[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].hide();
		bPay2[5].show();
		bPay3[5].hide();
		
		});
		bType3[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].hide();
		bPay2[5].hide();
		bPay3[5].show();
		
		});
		
		//[lc6]
	bType1[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].show();
		bPay2[6].hide();
		bPay3[6].hide();
		
		});
		bType2[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].hide();
		bPay2[6].show();
		bPay3[6].hide();
		
		});
		bType3[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].hide();
		bPay2[6].hide();
		bPay3[6].show();
		
		});
		
		//[lc7]
	bType1[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].show();
		bPay2[7].hide();
		bPay3[7].hide();
		
		});
		bType2[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].hide();
		bPay2[7].show();
		bPay3[7].hide();
		
		});
		bType3[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].hide();
		bPay2[7].hide();
		bPay3[7].show();
		
		});
		
		//[lc8]
	bType1[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].show();
		bPay2[8].hide();
		bPay3[8].hide();
		
		});
		bType2[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].hide();
		bPay2[8].show();
		bPay3[8].hide();
		
		});
		bType3[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].hide();
		bPay2[8].hide();
		bPay3[8].show();
		
		});
		
		//[lc9]
	bType1[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].show();
		bPay2[9].hide();
		bPay3[9].hide();
		
		});
		bType2[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].hide();
		bPay2[9].show();
		bPay3[9].hide();
		
		});
		bType3[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].hide();
		bPay2[9].hide();
		bPay3[9].show();
		
		});
		
		//[lc10]
	bType1[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].show();
		bPay2[10].hide();
		bPay3[10].hide();
		
		});
		bType2[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].hide();
		bPay2[10].show();
		bPay3[10].hide();
		
		});
		bType3[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].hide();
		bPay2[10].hide();
		bPay3[10].show();
		
		});
		
		//[lc11]
	bType1[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].show();
		bPay2[11].hide();
		bPay3[11].hide();
		
		});
		bType2[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].hide();
		bPay2[11].show();
		bPay3[11].hide();
		
		});
		bType3[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].hide();
		bPay2[11].hide();
		bPay3[11].show();
		
		});
		
		//[lc12]
	bType1[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].show();
		bPay2[12].hide();
		bPay3[12].hide();
		
		});
		bType2[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].hide();
		bPay2[12].show();
		bPay3[12].hide();
		
		});
		bType3[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].hide();
		bPay2[12].hide();
		bPay3[12].show();
		
		});
		
		//[lc13]
	bType1[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].show();
		bPay2[13].hide();
		bPay3[13].hide();
		
		});
		bType2[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].hide();
		bPay2[13].show();
		bPay3[13].hide();
		
		});
		bType3[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].hide();
		bPay2[13].hide();
		bPay3[13].show();
		
		});
		
		//[lc14]
	bType1[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].show();
		bPay2[14].hide();
		bPa31[14].hide();
		
		});
		bType2[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].hide();
		bPay2[14].show();
		bPay3[14].hide();
		
		});
		bType3[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].hide();
		bPay2[14].hide();
		bPay3[14].show();
		
		});
		
		//[lc15]
	bType1[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].show();
		bPay2[15].hide();
		bPay3[15].hide();
		
		});
		bType2[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].hide();
		bPay2[15].show();
		bPay3[15].hide();
		
		});
		bType3[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].hide();
		bPay2[15].hide();
		bPay3[15].show();
		
		});
		
		//[lc16]
	bType1[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].show();
		bPay2[16].hide();
		bPay3[16].hide();
		
		});
		bType2[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].hide();
		bPay2[16].show();
		bPay3[16].hide();
		
		});
		bType3[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].hide();
		bPay2[16].hide();
		bPay3[16].show();
		
		});
		
		//[lc17]
	bType1[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].show();
		bPay2[17].hide();
		bPay3[17].hide();
	
		});
		bType2[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].hide();
		bPay2[17].show();
		bPay3[17].hide();
		
		});
		bType3[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].hide();
		bPay2[17].hide();
		bPay3[17].show();
		
		});
		
		//[lc18]
	bType1[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].show();
		bPay2[18].hide();
		bPay3[18].hide();
		
		
		});
		bType2[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].hide();
		bPay2[18].show();
		bPay3[18].hide();
		
		});
		bType3[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].hide();
		bPay2[18].hide();
		bPay3[18].show();
		
		});
		
		//[lc19]
	bType1[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].show();
		bPay2[19].hide();
		bPay3[19].hide();
		
		});
		bType2[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].hide();
		bPay2[19].show();
		bPay3[19].hide();
		
		});
		bType3[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].hide();
		bPay2[19].hide();
		bPay3[19].show();
		
		});
		
	
//[CP1]
//close-pay0
closeP[0].click(function(){
	payC[0].hide();
	leaseC[0].show();
});

//close-pay0
closeP[1].click(function(){
	payC[1].hide();
	leaseC[1].show();
});

//close-pay2
closeP[2].click(function(){
	payC[2].hide();
	leaseC[2].show();
});

//close-pay3
closeP[3].click(function(){
	payC[3].hide();
	leaseC[3].show();
});

//close-pay4
closeP[4].click(function(){
	payC[4].hide();
	leaseC[4].show();
});

//close-pay5
closeP[5].click(function(){
	payC[5].hide();
	leaseC[5].show();
});

//close-pay6
closeP[6].click(function(){
	payC[6].hide();
	leaseC[6].show();
});

//close-pay7
closeP[7].click(function(){
	payC[7].hide();
	leaseC[7].show();
});

//close-pay8
closeP[8].click(function(){
	payC[8].hide();
	leaseC[8].show();
});

//close-pay9
closeP[9].click(function(){
	payC[9].hide();
	leaseC[9].show();
});

//close-pay910
closeP[10].click(function(){
	payC[10].hide();
	leaseC[10].show();
});

//close-pay11
closeP[11].click(function(){
	payC[11].hide();
	leaseC[11].show();
});

//close-pay12
closeP[12].click(function(){
	payC[12].hide();
	leaseC[12].show();
});

//close-pay13
closeP[13].click(function(){
	payC[13].hide();
	leaseC[13].show();
});

//close-pay14
closeP[14].click(function(){
	payC[14].hide();
	leaseC[14].show();
});

//close-pay15
closeP[15].click(function(){
	payC[15].hide();
	leaseC[15].show();
});

//close-pay16
closeP[16].click(function(){
	payC[16].hide();
	leaseC[16].show();
});

//close-pay17
closeP[17].click(function(){
	payC[17].hide();
	leaseC[17].show();
});

//close-pay18
closeP[18].click(function(){
	payC[18].hide();
	leaseC[18].show();
});

//close-pay19
closeP[19].click(function(){
	payC[19].hide();
	leaseC[19].show();
});



//[CL1]	
//close-lease0
closeL[0].click(function(){
	leaseC[0].hide();
	leaseSel[0].show();
});

//close-lease1
closeL[1].click(function(){
	leaseC[1].hide();
	leaseSel[1].show();
});

//close-lease2
closeL[2].click(function(){
	leaseC[2].hide();
	leaseSel[2].show();
});

//close-lease3
closeL[3].click(function(){
	leaseC[3].hide();
	leaseSel[3].show();
});

//close-lease4
closeL[4].click(function(){
	leaseC[4].hide();
	leaseSel[4].show();
});

//close-lease5
closeL[5].click(function(){
	leaseC[5].hide();
	leaseSel[5].show();
});

//close-lease6
closeL[6].click(function(){
	leaseC[6].hide();
	leaseSel[6].show();
});

//close-lease7
closeL[7].click(function(){
	leaseC[7].hide();
	leaseSel[7].show();
});

//close-lease8
closeL[8].click(function(){
	leaseC[8].hide();
	leaseSel[8].show();
});

//close-lease9
closeL[9].click(function(){
	leaseC[9].hide();
	leaseSel[9].show();
});

//close-lease10
closeL[10].click(function(){
	leaseC[10].hide();
	leaseSel[10].show();
});

//close-lease11
closeL[11].click(function(){
	leaseC[11].hide();
	leaseSel[11].show();
});

//close-lease12
closeL[12].click(function(){
	leaseC[12].hide();
	leaseSel[12].show();
});

//close-lease13
closeL[13].click(function(){
	leaseC[13].hide();
	leaseSel[13].show();
});

//close-lease14
closeL[14].click(function(){
	leaseC[14].hide();
	leaseSel[14].show();
});

//close-lease15
closeL[15].click(function(){
	leaseC[15].hide();
	leaseSel[15].show();
});

//close-lease16
closeL[16].click(function(){
	leaseC[16].hide();
	leaseSel[16].show();
});

//close-lease17
closeL[17].click(function(){
	leaseC[17].hide();
	leaseSel[17].show();
});

//close-lease18
closeL[18].click(function(){
	leaseC[18].hide();
	leaseSel[18].show();
});

//close-lease19
closeL[19].click(function(){
	leaseC[19].hide();
	leaseSel[19].show();
});

//paybtn-text
$(document).ready(function(e) {
    $('.types1').text('(L)' +'$14.95');
$('.types2').text('(S)' + '$29.95');
$('.types3').text('(P)' + '$69.95');
});



//LIM
//

