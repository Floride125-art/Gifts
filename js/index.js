$(document).ready(function(){
    $("#Deliver").click(function(){
      $("#formD").show();
    });
  });
  $(document).ready(function(){
    $("form#formD").submit(function(event){
        var Name = $("input#Name").val();
        var Phone = $("input#Phone").val();
        var Location = $("input#Location").val();
        alert("Dear " + Name + " Who is located at " + Location + " we will get back to you on " + Phone + " Whenever the Pizza are delivered to you");
        event.preventDefault();
  
    });
  
  });