"use strict";
  $(document).ready(function(){
   // $('.content').richText();
    var count=[0,0,0];
    var a;
    //get data       
        $.ajax({
            // type: 'GET',
            type: 'GET',
            dataType: 'json',
         
            url: 'http://localhost:3000/blogdata',
            success: function(result){
            //  console.log(result[0]);
                 a=result;
                 
                console.log('response from server')
                //iterating over all the records
                  
        $("#profile").click(function()
        {

            for(var i = 0; i < a.length; i++)
             {
              var obj = a[i];
              var sessionEmail=sessionStorage.getItem("key");           
              if(obj.email==sessionEmail)
              {
                   console.log(obj.id);

               }             
            }
        })
     }
            
            
        });
      

  
    })
        
   