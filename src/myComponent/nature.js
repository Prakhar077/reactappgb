
import React from 'react'

export const Nature = () => {
    return (
        <div>
             
             <header class="w3-container w3-teal">
  <h1>Login Example</h1>
</header>

<div class="w3-container w3-half w3-margin-top">

<form class="w3-container w3-card-4">

<p>
<input class="w3-input" type="text" style="width:90%" required/>
<label>Name</label></p>
<p>
<input class="w3-input" type="password" style="width:90%" required/>
<label>Password</label></p>

<p>
<input class="w3-radio" type="radio" name="gender" value="male" checked/>
<label>Male</label></p>

<p>
<input class="w3-radio" type="radio" name="gender" value="female"/>
<label>Female</label></p>

<p>
<input class="w3-radio" type="radio" name="gender" value="" disabled/>
<label>Don't know (Disabled)</label></p>

<p>
<input id="milk" class="w3-check" type="checkbox" checked="checked"/>
<label>Stay logged in</label></p>

<p>
<button class="w3-button w3-section w3-teal w3-ripple"> Log in </button></p>

</form>
      
        
        
        <div/>
        </div>  
    
    
    <div/>
        </div>
    )
}
