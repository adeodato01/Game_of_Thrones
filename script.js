$(document).ready(function(){

    $("div").on("click", function(){

        $.get("https://www.anapioficeandfire.com/api/houses/"+($(this).attr("id")), function(res) {

            $(".info").empty();

            $(".info").append(
                "<h3 id='topName'>Name: "+res.name+"</h3>"+
                '<h3>Words: "'+res.words+'"</h3>'+
                "<h3 id='titles'>Titles: "+res.titles.join(", ")+"</h3>"
            )        
        })
    })
    $(".right").on("click", function(){
        
        $(".info").on("click", function(){
            event.stopPropagation();
        })    
        $(".info").empty();
    })
})