
function chow (){
    console.log( 'Hello World')
  }
  
  function fallback(){
      console.log('Fall back bro')
  }
setTimeout(chow, 800, 'bruh');

function myFunc(arg) {
    console.log(`arg was => ${arg}`);
  }
  
  setTimeout(myFunc, 1500, 'funky');