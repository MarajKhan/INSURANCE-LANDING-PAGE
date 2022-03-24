jQuery('#frm').validate({
	rules:{
      name:{
      	required:true,
      	minlength:2,
      	lettersonly:true,

      },

      email:{
      	required: true,
      	email:true
      },
      mobile:{
      	required:true,
      	maxlength:10,
      	number:true,
        
      },
      city:"required",
      income:"required",
      age:{
      	required:true,
      	
      	
      },
      
     },messages:{
      name:{
        required:"Please Enter Your Name",
        minlength:"Please Enter lass than 2 char",
        lettersonly:"Only Alphabets Allowed and No Space Allowed",
      },
      email:{
        required: "Please Enter Email",
        email: "Please Enter valid Email",
      },
      mobile:{
        required:"Please Enter Your Mobile No",
        maxlength:"Please Enter 10 number",
        number:"Please Enter valid number",

    
        
      },
    
          city:"Enter Your City Name",
          income:"Enter Your Income",
          age:{
            required:"Please Enter Your Date Of Birth",
            
          },
            
          },
          
});
