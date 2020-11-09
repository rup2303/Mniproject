$(document).ready(function () {
  var id;

  // $("#profile").click((a)=>{
  $.getJSON("http://localhost:3000/users", function (data) {
    //get users data

    $.each(data, function (key, value) {
      var sessionName = sessionStorage.getItem("key");
      //console.log(sessionName);

      if (value.email == "vijay@senate.gov") {
        // display user information
        //console.log(value.id);
        document.getElementById("1").innerHTML = value.first_name;
        $("p#sp1").append(value.first_name);
        $("p#sp2").append(value.last_name);
        $("p#sp3").append(value.email);
        $("p#sp4").append(value.gender);
        //value.remove(email);
        id = value.id;
        const content = `
       <blockquote id='${value.id}' class='quote-card'><p>${value.content}</p></blockquote>
       <button id='${value.id}' onclick='deletePost()' >Delete</button>`;

        document.getElementById("post-column").innerHTML += content;

        console.log(id);
      }
    });

    console.log(id);
    sessionStorage.setItem("id",id);

  })
});
function deletePost() {
  console.log("fghsgh");
  // console.log(id);
  var blogId=sessionStorage.getItem("id");

  $.ajax({
    url: "http://localhost:3000/users/" + blogId,
    method: "DELETE",
    success: function () {
      alert("post has been deleted");
    },
    error: function (error) {
      alert(error);
    },
  });
}
