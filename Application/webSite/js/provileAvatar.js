
//=============================================================================================
//Function Developed by: Rani Arraf
//Initializes Profile Pictures
function selectDoc1(){
    resetDoc();
    checkDoc[0] = true;

    var doc4 = document.getElementById("avatar4");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc1.style.backgroundColor = "green";
    doc4.style.backgroundColor = "lightblue";
    doc3.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
    
}

function selectDoc2(){
    resetDoc();
    checkDoc[1] = true;


    var doc4 = document.getElementById("avatar4");
    var doc1 = document.getElementById("avatar1");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc2.style.backgroundColor = "green";
    doc4.style.backgroundColor = "lightblue";
    doc3.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
}

function selectDoc3(){
    resetDoc();
    checkDoc[2] = true;

    
    var doc4 = document.getElementById("avatar4");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");
    var doc3 = document.getElementById("avatar3");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc3.style.backgroundColor = "green";
    doc4.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
}

function selectDoc4(){
    resetDoc();
    checkDoc[3] = true;


    var doc4 = document.getElementById("avatar4");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc4.style.backgroundColor = "green";
    doc3.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
}

function selectDoc5(){
    resetDoc();
    checkDoc[4] = true;

    var doc4 = document.getElementById("avatar4");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc1.style.backgroundColor = "lightblue";
    doc4.style.backgroundColor = "lightblue";
    doc3.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "green";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
    
}

function selectDoc6(){
    resetDoc();
    checkDoc[5] = true;


    var doc4 = document.getElementById("avatar4");
    var doc1 = document.getElementById("avatar1");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc2.style.backgroundColor = "lightblue";
    doc4.style.backgroundColor = "lightblue";
    doc3.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "green";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "lightblue";
}

function selectDoc7(){

    resetDoc();
    checkDoc[6] = true;

    
    var doc4 = document.getElementById("avatar4");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");
    var doc3 = document.getElementById("avatar3");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc3.style.backgroundColor = "lightblue";
    doc4.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "green";
    doc8.style.backgroundColor = "lightblue";
}

function selectDoc8(){
    resetDoc();
    checkDoc[7] = true;


    var doc4 = document.getElementById("avatar4");
    var doc3 = document.getElementById("avatar3");
    var doc2 = document.getElementById("avatar2");
    var doc1 = document.getElementById("avatar1");

    var doc5 = document.getElementById("avatar5");
    var doc6 = document.getElementById("avatar6");
    var doc7 = document.getElementById("avatar7");
    var doc8 = document.getElementById("avatar8");

    doc4.style.backgroundColor = "lightblue";
    doc3.style.backgroundColor = "lightblue";
    doc2.style.backgroundColor = "lightblue";
    doc1.style.backgroundColor = "lightblue";

    doc5.style.backgroundColor = "lightblue";
    doc6.style.backgroundColor = "lightblue";
    doc7.style.backgroundColor = "lightblue";
    doc8.style.backgroundColor = "green";
}

function resetDoc()
{
    for(var i = 0; i < 8; i++)
    {
        checkDoc[i] = false;
    }
}

function confirmPic(){
    var pictureFrame1 = document.querySelector(".profile");
    if(checkDoc[0] == true){
        
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_a_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[1] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_b_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[2] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_i_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[3] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_w_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[4] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_a_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[5] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_b_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[6] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_i_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
    if(checkDoc[7] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_w_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
    }
}

function confirmPicture(){
    var avatar = "0";
    var pictureFrame1 = document.querySelector(".profile");
    if(checkDoc[0] == true){
        
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_a_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "0";
    }
    if(checkDoc[1] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_b_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "1";
    }
    if(checkDoc[2] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_i_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "2";
    }
    if(checkDoc[3] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_w_male.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "3";
    }
    if(checkDoc[4] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_a_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "4";
    }
    if(checkDoc[5] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_b_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "5";
    }
    if(checkDoc[6] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_i_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "6";
    }
    if(checkDoc[7] == true){
        var population = "<img id='profilePic' src='../css/images/Avatars/doc_w_female.png' alt='Profile Picture' width='200px' height='200px'>";
        pictureFrame1.innerHTML = population;
        avatar = "7";
    }

    var response = fetch("/setAvatarChoice",{
        method:"POST",
        headers:{'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({"avatar":avatar})
    });
}