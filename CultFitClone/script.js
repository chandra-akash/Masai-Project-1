var body = document.getElementById( "body" )

// location popup
var count = 0;
function showLocation ()
{
    count++;
    if ( count % 2 != 0 )
    {
        document.getElementById( "location" ).style.display = "block";
        document.getElementById( "main" ).style.position = "fixed";
        document.getElementById( "main" ).style.filter = "blur";
        // document.getElementById( "main" ).style.zIndex = "1000";
    } else
    {
        document.getElementById( "location" ).style.display = "none";
        // window.location.reload()
    }
}

// set location name in navbar
function setLocationNameBangalore ()
{
    let locationName = document.getElementById( "BangaloreTxt" ).innerHTML;
    document.getElementById( "BangaloreTxt" ).style.color = "rgb( 255, 50, 50 )";
    document.getElementById( "BangaloreImg" ).style.filter = "grayscale(0%)";
    document.getElementById( "showSelectedLocationName" ).textContent = locationName;
    document.getElementById( "DelhiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "DelhiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "HyderabadTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "HyderabadImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "MumbaiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "MumbaiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "KolkataTxt" ).style.color = "rgb( 22, 22, 22)";
    console.log( locationName );
    document.getElementById( "location" ).style.display = "none";
}
function setLocationNameDelhi ()
{
    let locationName = document.getElementById( "DelhiTxt" ).innerHTML;
    document.getElementById( "DelhiTxt" ).style.color = "rgb( 255, 50, 50 )";
    document.getElementById( "DelhiImg" ).style.filter = "grayscale(0%)";
    // let locationName = document.getElementByClassName( 'city-card' ).getAttribute( 'value' );
    document.getElementById( "showSelectedLocationName" ).textContent = locationName;
    document.getElementById( "BangaloreTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "BangaloreImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "HyderabadTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "HyderabadImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "MumbaiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "MumbaiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "KolkataTxt" ).style.color = "rgb( 22, 22, 22)";
    console.log( locationName );
    document.getElementById( "location" ).style.display = "none";
}
function setLocationNameHyderabad ()
{
    let locationName = document.getElementById( "HyderabadTxt" ).innerHTML;
    document.getElementById( "HyderabadTxt" ).style.color = "rgb( 255, 50, 50 )";
    document.getElementById( "HyderabadImg" ).style.filter = "grayscale(0%)";
    // let locationName = document.getElementByClassName( 'city-card' ).getAttribute( 'value' );
    document.getElementById( "showSelectedLocationName" ).textContent = locationName;
    document.getElementById( "BangaloreTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "BangaloreImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "DelhiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "DelhiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "MumbaiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "MumbaiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "KolkataTxt" ).style.color = "rgb( 22, 22, 22)";
    console.log( locationName );
    document.getElementById( "location" ).style.display = "none";
}
function setLocationNameMumbai ()
{
    let locationName = document.getElementById( "MumbaiTxt" ).innerHTML;
    document.getElementById( "MumbaiTxt" ).style.color = "rgb( 255, 50, 50 )";
    document.getElementById( "MumbaiImg" ).style.filter = "grayscale(0%)";
    // let locationName = document.getElementByClassName( 'city-card' ).getAttribute( 'value' );
    document.getElementById( "showSelectedLocationName" ).textContent = locationName;
    document.getElementById( "BangaloreTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "BangaloreImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "DelhiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "DelhiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "HyderabadTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "HyderabadImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "KolkataTxt" ).style.color = "rgb( 22, 22, 22)";
    console.log( locationName );
    document.getElementById( "location" ).style.display = "none";
    window.location.reload()
}
function setLocationNameKolkata ()
{
    let locationName = document.getElementById( "KolkataTxt" ).innerHTML;
    document.getElementById( "KolkataTxt" ).style.color = "rgb( 255, 50, 50 )";
    // let locationName = document.getElementByClassName( 'city-card' ).getAttribute( 'value' );
    document.getElementById( "showSelectedLocationName" ).textContent = locationName;
    document.getElementById( "BangaloreTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "BangaloreImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "DelhiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "DelhiImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "HyderabadTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "HyderabadImg" ).style.filter = "grayscale(100%)";
    document.getElementById( "MumbaiTxt" ).style.color = "rgb( 22, 22, 22 )";
    document.getElementById( "MumbaiImg" ).style.filter = "grayscale(100%)";
    console.log( locationName );
    document.getElementById( "location" ).style.display = "none";
}



// Mute/Unmute Button functions
var mute = 0;
function muteUnmute ()
{
    mute++;
    var video = document.getElementById( "muteUnmute" );
    if ( mute % 2 != 0 )
    {
        document.getElementById( "volumeBtn" ).src = "https://static.cure.fit/assets/images/volume-up-outline.svg";
        video.muted = false;
    } else
    {
        document.getElementById( "volumeBtn" ).src = "https://static.cure.fit/assets/images/volume-off-outline.svg";
        video.muted = true;
    }
}


//Pop Up Div
// Get the modal
var popUpDiv = document.getElementById( "popUpDiv" );
// Get the button that opens the popUpDiv
var btn = document.getElementById( "popUpBtn" );
// Get the <span> element that closes the popUpDiv
var span = document.getElementsByClassName( "close" )[ 0 ];
// When the user clicks the button, open the popUpDiv 
btn.onclick = function ()
{
    popUpDiv.style.display = "block";
}
// When the user clicks on <span> (x), close the popUpDiv
span.onclick = function ()
{
    popUpDiv.style.display = "none";
}
// When the user clicks anywhere outside of the popUpDiv, close it
window.onclick = function ( event )
{
    if ( event.target == popUpDiv )
    {
        popUpDiv.style.display = "none";
    }
}


// valid phone number length checker
function validNumber ()
{
    var num = document.getElementById( "mobNum" ).value;
    if ( num.length == 9 )
    {

        document.getElementById( "continueBtn" ).style.backgroundImage = " linear-gradient(101deg, rgb( 247, 69, 48 ), rgb( 255, 46, 115 ))";
        document.getElementById( "continueBtn" ).style.boxShadow = " rgb(247 123 155 / 71%) 0px 3px 16px 0px";
    } else
    {
        document.getElementById( "continueBtn" ).style.backgroundImage = " linear-gradient(99deg, rgb(202, 202, 202), rgb(199, 199, 199))";
        document.getElementById( "continueBtn" ).style.boxShadow = " none";
    }
}

validNumber();



// div: Cult animations
function increaseA1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "60%";
        document.getElementById( "a1" ).style.cursor = "pointer";
        document.getElementById( "b1" ).style.width = "20%";
        document.getElementById( "c1" ).style.width = "20%";
        document.getElementById( "textContent1" ).style.display = "block";
        document.getElementById( "textContent2" ).style.display = "none";
        document.getElementById( "textContent3" ).style.display = "none";
    }, 300 );
}
function increaseB1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "20%";
        document.getElementById( "b1" ).style.width = "60%";
        document.getElementById( "b1" ).style.cursor = "pointer";
        document.getElementById( "c1" ).style.width = "20%";
        document.getElementById( "textContent1" ).style.display = "none";
        document.getElementById( "textContent2" ).style.display = "block";
        document.getElementById( "textContent3" ).style.display = "none";
    }, 300 );
}
function increaseC1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "20%";
        document.getElementById( "b1" ).style.width = "20%";
        document.getElementById( "c1" ).style.width = "60%";
        document.getElementById( "c1" ).style.cursor = "pointer";
        document.getElementById( "textContent1" ).style.display = "none";
        document.getElementById( "textContent2" ).style.display = "none";
        document.getElementById( "textContent3" ).style.display = "block";
    }, 300 )
}

// div: Care animations
function increaseA2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "60%";
        document.getElementById( "a2" ).style.cursor = "pointer";
        document.getElementById( "b2" ).style.width = "20%";
        document.getElementById( "c2" ).style.width = "20%";
        document.getElementById( "textContent4" ).style.display = "block";
        document.getElementById( "textContent5" ).style.display = "none";
        document.getElementById( "textContent6" ).style.display = "none";
    }, 300 );
}
function increaseB2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "20%";
        document.getElementById( "b2" ).style.width = "60%";
        document.getElementById( "b2" ).style.cursor = "pointer";
        document.getElementById( "c2" ).style.width = "20%";
        document.getElementById( "textContent4" ).style.display = "none";
        document.getElementById( "textContent5" ).style.display = "block";
        document.getElementById( "textContent6" ).style.display = "none";
    }, 300 );
}
function increaseC2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "20%";
        document.getElementById( "b2" ).style.width = "20%";
        document.getElementById( "c2" ).style.width = "60%";
        document.getElementById( "c2" ).style.cursor = "pointer";
        document.getElementById( "textContent4" ).style.display = "none";
        document.getElementById( "textContent5" ).style.display = "none";
        document.getElementById( "textContent6" ).style.display = "block";
    }, 300 )
}

// div: Mind animations
function increaseA3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "60%";
        document.getElementById( "a3" ).style.cursor = "pointer";
        document.getElementById( "b3" ).style.width = "20%";
        document.getElementById( "c3" ).style.width = "20%";
        document.getElementById( "textContent7" ).style.display = "block";
        document.getElementById( "textContent8" ).style.display = "none";
        document.getElementById( "textContent9" ).style.display = "none";
    }, 300 );
}
function increaseB3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "20%";
        document.getElementById( "b3" ).style.width = "60%";
        document.getElementById( "b3" ).style.cursor = "pointer";
        document.getElementById( "c3" ).style.width = "20%";
        document.getElementById( "textContent7" ).style.display = "none";
        document.getElementById( "textContent8" ).style.display = "block";
        document.getElementById( "textContent9" ).style.display = "none";
    }, 300 );
}
function increaseC3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "20%";
        document.getElementById( "b3" ).style.width = "20%";
        document.getElementById( "c3" ).style.width = "60%";
        document.getElementById( "c3" ).style.cursor = "pointer";
        document.getElementById( "textContent7" ).style.display = "none";
        document.getElementById( "textContent8" ).style.display = "none";
        document.getElementById( "textContent9" ).style.display = "block";
    }, 300 )
}


// going to cult

function goToCult ()
{

    window.location.href = "care.html";

}

function goingToStorePage ()
{
    window.location.href = "store.html";
}

function cart ()
{

    window.location.href = "card.html";

}

function goToProfile ()
{

    let number = document.getElementById( "mobNum" ).value;
    console.log( number );

    if ( number.length == 10 )
    {
        window.location.href = "profile.html";
    } else
    {
        alert( "enter valid Number" );
    }


}

