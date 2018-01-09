$(function(){
    loadAllPost();
});

$('#search').click(function(){
    loadPostByUser();
});

function loadAllPost() {
    $('#posts').empty();

    //Get all posts
    var url = 'http://localhost:8080/api/posts';
    
    // POINT 6. Call REST APIs with Axios [X]
    axios.get(url)
        .then(function (res) {
            $.get('post.mst', function (template) {
                for (var i = 0; i < res.data.length; i++) {
                    // POINT 7. User Mustache render template(post.mst) with json data from the API [X]
                    // https://github.com/janl/mustache.js/
                    // https://momentjs.com/
                    
                    res.data[i].create_date = moment(res.data[i].create_date).format('lll')
                    $('#posts').append(Mustache.render(template, res.data[i]))
                }
            })
        })
}

function loadPostByUser() {
    // Additional 1.
}
    

