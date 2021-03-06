// DATA --------------------------------------------
var Albums = 
[
  {
    albumName: "Slip n Slide",
    songList: ["Water or Silicon?", "It Puts The Lube On It's Skin", "Lubed Up And Let Down", "Emergency Lube", "Paula Dean's Butter Stash"],
    songDuration: ["2:34", "3:45", "4:56", "5:67", "3:56"],
    filePath: '/files/album1.html',
    divId: 'album1',
    btnNumber: 'btn1'
  },
  {
    albumName: "Living the Lube Life",
    songList: ["Lube 24/7", "Dinosaur Friendly", "Not For Consumption", "Mr. Rogers Secret", "Rehydrated Raisins"],
    songDuration: ["2:50", "3:35", "4:10", "5:57", "3:56"],
    filePath: '/files/album2.html',
    divId: 'album2',
    btnNumber: 'btn2'
  },
  {
    albumName: "Slip n Slide the II",
    songList: ["Gimme More", "Your Grandma Is My Best Friend", "Smells Like Lube", "Lube Is Love, Lube is Life", "Lube Cellar"],
    songDuration: ["2:37", "3:33", "4:16", "5:11", "3:40"],
    filePath: '/files/album3.html',
    divId: 'album3',
    btnNumber: 'btn3'
  },
  {
    albumName: "Confessions of a Lube Bottle",
    songList: ["The Things I've Seen", "The Things I've Done", "The Places I've Been", "Keep Refrigerated", "Not Jello"],
    songDuration: ["7:54", "5:42", "1:23", "6:46", "3:34"],
    filePath: '/files/album4.html',
    divId: 'album4',
    btnNumber: 'btn4'
  },
  {
    albumName: "The Final Bottle",
    songList: ["Fond Memories", "Lube Legacy", "Socially Awkward", "Puddle Of Lube", "Last Drop Of the Bottle"],
    songDuration: ["2:47", "3:38", "4:29", "5:18", "3:37"],
    filePath: '/files/album5.html',
    divId: 'album5',
    btnNumber: 'btn5'
  }
];

var merchPhotos = [
    'http://cdn.shopify.com/s/files/1/0714/1079/products/Clickbait_DadHat_Harvard_MockUp_600x.jpg?v=1499204416', 
    'https://image.spreadshirtmedia.com/image-server/v1/mp/products/P16001602MPC21750282PC21750283/views/1,width=800,height=800,appearanceId=129,backgroundColor=E8E8E8,version=1474453379/social-lubricant-women-s-fine-jersey-t-shirt.jpg', 
    'https://ih0.redbubble.net/image.3912281.9306/fc,300x300,teal.jpg', 
    'https://rlv.zcache.com/uncle_swifty_social_lubricant_t_shirt-ra3596948828c404b81c853e8ec0f296e_jyryf_324.jpg', 
    'https://cdn.shopify.com/s/files/1/1608/6279/products/product-image-231174191_800x.jpg?v=1495895287', 
    'https://i.ebayimg.com/images/g/Xg4AAOSwyQtVpJR1/s-l300.jpg'
];

var profiles = [
    {
        Name: 'Drake',
        Instrument: 'Guitar',
        Hobby: 'Eat', 
        FavFood: 'Hamburger'
    },
    {
        Name: 'Barry',
        Instrument: 'Flute',
        Hobby: 'Sing', 
        FavFood: 'Pizza'
    },
    {
        Name: 'Juno',
        Instrument: 'Drums',
        Hobby: 'Running', 
        FavFood: 'Ham'
    },
    {
        Name: 'Corey',
        Instrument: 'Violin',
        Hobby: 'Protest', 
        FavFood: 'Beans'
    }
];



//Merch Cards
var albumPhotos = [
    'http://deow9bq0xqvbj.cloudfront.net/image-logo/1379207/logo-v1.png',
    'http://www.designformusic.com/wp-content/uploads/2017/07/hout-sauce-soundcheck-samples-500x500.jpg',
    'https://f4.bcbits.com/img/a2756769813_10.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91h8YsLwNtL._SY355_.jpg',
    'http://pinktentacle.com/images/s_nagaoka_23_large.jpg'
];

// End of DATA ---------------------------------------

// printToDom function--------------------------------
function printToDom(stringToPrint, divId)
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;

}

//Merch Cards

function domStringMaker(merchArray)
{
    var merchString = ""
        for (var idx = 0; idx < merchArray.length; idx++)
    {
      merchString += "<div class='merchCard'>" + "<img class='merchPhoto' src='"  + merchArray[idx] + "'>" + "<div class='middle'>" + "<div class='text'>" + "Buy" + "</div>" + "</div>" + "</div>";
    }
    printToDom(merchString, "merchandise");   
}
if (document.getElementById('merchandise')) {
    domStringMaker(merchPhotos);
}

function alertMe(){
    if(document.getElementById("merchandise")){
      alert("I'm sorry, that item is out of stock at the moment.");
    }
  }
  
  if (document.getElementById("merchandise")) {
    var merch = document.getElementById("merchandise");
    merch.addEventListener("click", alertMe);
  }

// Album Cards -----------------------------------------


function albumCardBuilder(albumArray, coverArray) {
    var domString = '';
    for (var i = 0; i < albumArray.length; i++) {
        domString += '<article>';
        domString += '<img src="' + coverArray[i] + '">';
        domString += '<button id="' + albumArray[i].btnNumber +  '">' + albumArray[i].albumName + '</button>';
        domString += '</article>';
    }

    printToDom(domString, 'albumCards');
}


if (document.getElementById('albumCards')) {
    albumCardBuilder(Albums, albumPhotos);
}

// Album Songs -----------------------------------------

function albumSongBuilder(albumArray, albumIndex, albumDiv) {
    var domString = '';
    domString += '<div>';
    for (var i = 0; i < albumArray[albumIndex].songList.length; i++) {
        domString += '<p>' + albumArray[albumIndex].songList[i] + '</p>';
        domString += '<p>' + albumArray[albumIndex].songDuration[i] + '</p>';
    }
    domString += '</div>';
    domString += '<a href="/files/albums.html">Album Page</a>';
    printToDom(domString, albumDiv);
}

if (document.getElementById('album1')) {
    albumSongBuilder(Albums, 0, 'album1');
} else if (document.getElementById('album2')) {
    albumSongBuilder(Albums, 1, 'album2');
} else if (document.getElementById('album3')) {
    albumSongBuilder(Albums, 2, 'album3');
} else if (document.getElementById('album4')) {
    albumSongBuilder(Albums, 3, 'album4');
} else if (document.getElementById('album5')) {
    albumSongBuilder(Albums, 4, 'album5');
}


//---------------------- Member Profile ------------------------------


var n1 = profiles[0];
var n2 = profiles[1];
var n3 = profiles[2];
var n4 = profiles[3];

var test1 = document.getElementById("profile-1p");
var test2 = document.getElementById("profile-2p");
var test3 = document.getElementById("profile-3p");
var test4 = document.getElementById("profile-4p");

var clearString = document.getElementById("member-info");

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
 

function writetest() {
    var strang = "";
    strang += "<div class='profile-card'>";
    strang += "<h1>" + "name: "+ n1.Name + "</h1>";
    strang += "<h3>" + "instrument: " + n1.Instrument + "</h3>"
    strang += "<h3>" + "hobby: " + n1.Hobby + "</h3>"
    strang += "<h3>" + "favorite food: " + n1.FavFood + "</h3>"
    strang += "</div>";
    printToDom(strang, 'member-info');
}

function writetest2() {
    var strang = "";
    strang += "<div class='profile-card'>";
    strang += "<h1>" + "name: " + n2.Name + "</h1>";
    strang += "<h3>" + "instrument: " + n2.Instrument + "</h3>"
    strang += "<h3>" + "hobby: " + n2.Hobby + "</h3>"
    strang += "<h3>" + "favorite food: " + n2.FavFood + "</h3>"
    strang += "</div>";
    printToDom(strang, 'member-info');
}

function writetest3() {
    var strang = "";
    strang += "<div class='profile-card'>";
    strang += "<h1>" + "name: " + n3.Name + "</h1>";
    strang += "<h3>" + "instrument: " + n3.Instrument + "</h3>"
    strang += "<h3>" + "hobby: " + n3.Hobby + "</h3>"
    strang += "<h3>" + "favorite food: " + n3.FavFood + "</h3>"
    strang += "</div>";
    printToDom(strang, 'member-info');
}

function writetest4() {
    var strang = "";
    strang += "<div class='profile-card'>";
    strang += "<h1>" + "name: " +  n4.Name + "</h1>";
    strang += "<h3>" + "instrument: " + n4.Instrument + "</h3>"
    strang += "<h3>" + "hobby: " + n4.Hobby + "</h3>"
    strang += "<h3>" + "favorite food: " + n4.FavFood + "</h3>"
    strang += "</div>";
    printToDom(strang, 'member-info');
}

if (test1 || test2 || test3 || test4) {
    test1.addEventListener("click", function(){
        if (test1) { 
          test2.style.opacity = ".3";
          test3.style.opacity = ".3";
          test4.style.opacity = ".3";
          test1.style.opacity = "1";
          clearBox("member-info"); 
          writetest();
        }
      });
      
      test2.addEventListener("click", function () {
          if (test2) {
              test1.style.opacity = ".3";
              test3.style.opacity = ".3";
              test4.style.opacity = ".3";
              test2.style.opacity = "1";
              clearBox("member-info"); 
              writetest2();
          }
      });
      
      test3.addEventListener("click", function () {
          if (test3) {
              test1.style.opacity = ".3";
              test2.style.opacity = ".3";
              test4.style.opacity = ".3";
              test3.style.opacity = "1";
              clearBox("member-info");
              writetest3();
          }
      });
      
      test4.addEventListener("click", function () {
          if (test4) {
              test1.style.opacity = ".3";
              test2.style.opacity = ".3";
              test3.style.opacity = ".3";
              test4.style.opacity = "1";
              clearBox("member-info");
              writetest4();
          }
      });
}

// modal stuff ---------------------------------------------------------

var Modal = function(child, strictClose) {
    this.child = child;
    this.portal = false;

    //strictClose can be passed in as true to enforce
        //only close on clicking 'X' ** Must have font awesome or change
        //closeModal.className in render method to other svg font icon class
    this.strictClose = strictClose;
};


Modal.prototype.show = function() {
    if (!this.portal) {
        this.portal = document.createElement('div');
        this.portal.className = 'modal fade';
        var backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop';
            backdrop.addEventListener('click', this.hide.bind(this));
        this.portal.appendChild(backdrop);
        document.body.insertBefore(this.portal, document.body.children[0]);
        this.render();
    }
};


Modal.prototype.render = function() {
    if (this.portal) {
        setTimeout(function() {
            this.portal.classList.add('in');
        }.bind(this), 10);
        var inner = document.createElement('div');
            inner.className = 'modal-inner';
        var closeModal = document.createElement('div');
            closeModal.id = 'close-modal';
            closeModal.className = 'fa fa-times';
        inner.appendChild(closeModal);
        inner.appendChild(this.child);
        this.portal.children[0].appendChild(inner);
    }
};

Modal.prototype.settleOnMount = function() {
    if (this.portal) {
        this.portal.classList.add('in');
    }
};

Modal.prototype.hide = function(e) {
    if (e.target.className === 'modal-backdrop' && !this.strictClose) {
        this.unmount();
    }
    if (e.target.id === 'close-modal') {
        this.unmount();
    }
};

Modal.prototype.unmount = function() {
    if (this.portal) {
        document.body.removeChild(this.portal);
        this.portal = false;
    }
};

// Change Modal stuff here ---------------------------------------------------------

(function() {

    var btn = document.getElementById('btn1');
        btn.addEventListener('click', function() {
            openModalWindow('album1');
        });
        btn.addEventListener('click', function(e) {
            albumSongBuilder(Albums, 0, 'album1');
        });

    var btn2 = document.getElementById('btn2');
        btn2.addEventListener('click', function() {
            openModalWindow('album2');
        });
        btn2.addEventListener('click', function(e) {
            albumSongBuilder(Albums, 1, 'album2');
        });

    var btn3 = document.getElementById('btn3');
        btn3.addEventListener('click', function() {
            openModalWindow('album3');
        });
        btn3.addEventListener('click', function(e) {
            albumSongBuilder(Albums, 2, 'album3');
        });

    var btn4 = document.getElementById('btn4');
        btn4.addEventListener('click', function() {
            openModalWindow('album4');
        });
        btn4.addEventListener('click', function(e) {
            albumSongBuilder(Albums, 3, 'album4');
        });

    var btn5 = document.getElementById('btn5');
        btn5.addEventListener('click', function() {
            openModalWindow('album5');
        });
        btn5.addEventListener('click', function(e) {
            albumSongBuilder(Albums, 4, 'album5');
        });

    function openModalWindow(albumClicked) {
        var child = document.createElement('div');
            child.className = "inside";
        var text = document.createElement('div');
            text.className = "inside-text";
            text.id = albumClicked;
        child.appendChild(text);

        //create modal instance and pass in child elements
            //can be whatever, styled however you want
        var modal = new Modal(child, false);
        modal.show(); //open the modal window
    }

})();
