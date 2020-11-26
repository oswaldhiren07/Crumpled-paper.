class dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:false


      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
     
      
    
      rect(0, 0, this.width, this.height);
      
    }
  }
  