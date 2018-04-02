//haciendo show request
$(function(){


        $('#app-body')
        .find('form')
        .submit(  function  (ev)  {
          ev.preventDefault();
          var busqueda = $(this)
          .find('input[type="text"]')
          .val();
          alert('Se ha buscado: ' + busqueda);
  })
  // string html

  var template = ' <article class="tv-show">'+
    ' <div class="left img-container">'+
    '<img src=":img:" alt=":img alt:">'+
     '</div>'+
     '<div class="right info">'+
      ' <h1>:name:</h1>'+
  '<p> :summary:</p>' +
    ' </div>'+

   '</article>';



//  /string html


  $.ajax({
    url: 'http://api.tvmaze.com/shows',
    success: function (shows, textStatus, xhr) {
    var $tvShowsContainer = $('#app-body').find('.tv-shows');
    shows.forEach(function(show){
      var article = template
      .replace(':name:' , show.name)
      .replace(':img:' , show.image.medium)
      .replace(':summary:' , show.summary)
      .replace(':img alt:' , show.name + "Logo")


      $tvShowsContainer.append($(article))
    })
    }

  })
})
