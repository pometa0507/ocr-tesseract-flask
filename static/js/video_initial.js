var localVideo = null;
        
function gotLocalMediaStream( mediaStream ){
  localVideo.srcObject = mediaStream;          
}

function handleLocalMediaStreamError( error ){
  console.log( "navigator.getUserMedia error: ", error );
}

$(function(){
  //. 画面サイズ取得  ex: 1920,1080
  var sw = window.parent.screen.width;
  var sh = window.parent.screen.height;
  //sw : sh = x : 480; => x = 480 * sw / sh;
  var x = Math.floor( 480 * sw / sh );
  $('#video').css( { width: x } );

  var mediaStreamConstraints = { video: true };
  localVideo = document.querySelector( "video" );
  navigator.mediaDevices.getDisplayMedia( mediaStreamConstraints ).then( gotLocalMediaStream ).catch( handleLocalMediaStreamError );
});