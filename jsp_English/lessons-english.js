//lesson content
let container = document.createElement('div');
container.className = "container-eng";
container.setAttribute("onclick","showIDLesson(1)");

//div > row
let container_row = document.createElement('div');
container_row.className = "row";

//div > column_img
let container_column_img = document.createElement('div');
container_column_img.className = "column-img";

//content of column_img
let imgsrc = document.createElement("img");
imgsrc.className = "image";
imgsrc.setAttribute("src","");
container_column_img.appendChild(imgsrc);

//div  > column_desc
let container_column_desc = document.createElement('div');
container_column_desc.className = "column-desc";

//content of column_desc
let title = document.createElement("h1");
var titletext = document.createTextNode("Phonetics");
title.appendChild(titletext);


let hrline= document.createElement("hr");

let textcontent = document.createElement("h3");
var content = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consectetur libero accusamus eum molestias qui accusantium corrupti autem consequatur und");
textcontent.appendChild(content);
//

//appendingChild to container_column_desc
container_column_desc.appendChild(title);
container_column_desc.appendChild(hrline);
container_column_desc.appendChild(textcontent);

//appendingChild to container and container_row
container.appendChild(container_row);
container_row.appendChild(container_column_img);
container_row.appendChild(container_column_desc);
document.body.appendChild(container);

function showIDLesson(id){
    alert(id);
    window.location.href = "/English Page/vid-eng.html";

}