$(document).ready(function(){

	$("#welcome").css('visibility','visible').hide().delay(700).fadeIn(1000);
	$("#desc").css('visibility','visible').hide().delay(1000).fadeIn(1000);


	$("#box1").mouseenter(function(){
		$("#box2").fadeIn(500);
	});

	$("#box2").mouseenter(function(){
		$("#box3").fadeIn(500);
	});

	$("#urlinput").submit(function(e) {

    $.ajax({
           type: "POST",
           url: "/urls",
           data: $("#urlinput").serialize(), // serializes the form's elements.
           dataType: "JSON",
           success: function(data)
           {
           	$("#result").prepend("<tr><td><a href='http://localhost:9393/" + data.short_url + "'>http://shor.ty/" + data.short_url + "</a></td><td>"+ data.long_url +"</td><td>"+ data.click_count+"</td></tr>");
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
	});
});