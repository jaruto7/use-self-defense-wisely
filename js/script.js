// Create constructor. 
// Add arguments to the function (class). 
function Button( item, text ){
    
    // Create and append a new object values to the function.
    // Additionally set one of them a string as default and output when text is not found.
    this.item = item || 'Click Me';
    this.text = text;
}

// Create prototype function.
Button.prototype = {
    
    // Create method (function) named as create. 
    create: function(){
        
        // Define variable "self" to avoid situation where "this" has no context (is not seen) inside function.
        var self = this;
        
        // Create new button element and assign to "this" parameter.
        this.element = document.createElement('button');
        
        // Use innerHTML method and assign "this" object to item parameter.
        this.element.innerHTML = this.item; 
        
        // Listen your event when user click element (here is assign to the button element).
        this.element.addEventListener('click', function(){
            
            // Output in new window a message text when user clicked element & use "self" to avoid no context for your message.
            alert(self.text);
        });
        
        // Append your new element inside body to DOM (Document Object Model).
        document.body.appendChild(this.element);        
    }
}
// Create new instance for your object and assign in new variable.
var btn1 = new Button('Click Me', 'Hollow World...? Wait, something went wrong here...');

// Output your new object.
btn1.create();
