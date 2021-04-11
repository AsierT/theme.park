
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                   
  ______ ________          .________ __   
 /  __  \\_____  \___  ___ |   ____//  |_ 
 >      <  _(__  <\  \/  / |____  \\   __\
/   --   \/       \>    <  /       \|  |  
\______  /______  /__/\_ \/______  /|__|  
       \/       \/      \/       \/       
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
