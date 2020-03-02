var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
$(document).ready(function(){

    $(".q1Choice").on("click",function(){
       $(".q1Choice").css("border", "");
       $(this).css("border", "5px solid #FFFFFF");
       console.log($(this).css("border-color"));
    });
    
    $(".q2Choice").on("click",function(){
       $(".q2Choice").css("border", "");
       $(this).css("border", "5px solid #FFFFFF");
    });
    
    $(".q3Choice").on("click",function(){
       $(".q3Choice").css("border", "");
       $(this).css("border", "5px solid #FFFFFF");
    });
     
    $(".btn").click(function(){
           // First Question Result
        
    if($("#img1").css("border-color") == "rgb(255, 255, 255)"){
        counter1 += 1;
    }
    else if($("#img2").css("border-color") == "rgb(255, 255, 255)"){
        counter2 += 1;
    }
    else if($("#img3").css("border-color") == "rgb(255, 255, 255)"){
        counter3 += 1;
    }
    else if($("#img4").css("border-color") == "rgb(255, 255, 255)"){
        counter4 += 1;
    }
    if($("#img5").css("border-color") == "rgb(255, 255, 255)"){
        counter1 += 1;
    }
    else if($("#img6").css("border-color") == "rgb(255, 255, 255)"){
        counter2 += 1;
    }
    else if($("#img7").css("border-color") == "rgb(255, 255, 255)"){
        counter3 += 1;
    }
    else if($("#img8").css("border-color") == "rgb(255, 255, 255)"){
        counter4 += 1;
    }
    if($("#img9").css("border-color") == "rgb(255, 255, 255)"){
        counter1 += 1;
    }
    else if($("#img10").css("border-color") == "rgb(255, 255, 255)"){
        counter2 += 1;
    }
    else if($("#img11").css("border-color") == "rgb(255, 255, 255)"){
        counter3 += 1;
    }
    else if($("#img12").css("border-color") == "rgb(255, 255, 255)"){
        counter4 += 1;
    }
    
        console.log(counter1);
        console.log(counter2);
        console.log(counter3);
        console.log(counter4);
        
        if(counter1 > counter2 && counter1 > counter3 && counter1 > counter4){
            $("#resultImg").html("<img src=img/adventure.jpg>");
            $("#results").html("You are the kind of student who seeks adventure all while trying to constantly improve your career growth!");
        }
        else if(counter2 > counter1 && counter2 > counter3 && counter2 > counter4){
            $("#resultImg").html("<img src=img/balance.jpg>");
            $("#results").html("You are the kind of student who likes to work alone and have a more tendency to balance school and personal time!");
        }
        else if(counter3 > counter1 && counter3 > counter2 && counter3 > counter4){
            $("#resultImg").html("<img src=img/studyGroup.jpg>");
            $("#results").html("You are the kind of student who prefers working with other people to understand multiple perspectives!");
        }
        else if(counter4 > counter1 && counter4 > counter2 && counter4 > counter3){
            $("#resultImg").html("<img src=img/cultural.jpg>");
            $("#results").html("You are the kind of student who likes to observe other cultures and practices, so that you can incorporate that into your daily life and work!");
        }
        else{
            $("#resultImg").html("<img src=img/change.jpg>");
            $("#results").html("You are the kind of student who likes to change things up and never stay static with school, work, learning, and more!");
        }
    });
});