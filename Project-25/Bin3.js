class Bin3 extends BaseClass{

    constructor(x, y, width, height) {
               
        super(x, y, width, height);
        this.image = loadImage("dustbin.png");
        this.width = width;
        this.height = height;
          
        }
   
    display(){

      super.display()
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      
    }    


   }