/*
class GameObj{
    constructor(gameTraits){
    this.createdAt = gameTraits.createdAt;
    this.name = gameTraits.name;
    this.dimensions = gameTraits.dimensions;
    }
    destroy(){
        return `${this.name} has been destroyed!`;
    }
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  * 
  
class CharacterStats extends GameObj{
    constuctor(CharacterTraits)
    this.healthpoints = CharacterTraits.healthpoints;
   
      takeDamage(){
          return `${this.name} took damage`;
      }
    */
   /* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height

*/
class cuboidMaker{
    constuctor(prop){
        this.length = prop.length;
        this.height = prop.height;
        this.width = prop.width;    
    }
    volume(){
        let volume=this.length* this.height* this.width;
        return volume;
    }
    SA(){
        let SA = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}
class cubemaker extends cubiodMaker{
    constuctor(a){
        let areaofcube;
        areaofcube = a*a;
        return areaofcube;
    }
    volumeOfCube(){
        let volumeOfCube= a*a*a;
        return volumeOfCube
    }
    SAofCube(){
       let SAoC=a*a*6;
       return SAoC;
    }
}

//const cuboid = new CuboidMaker({
  //  length: 4,
  //  width: 5,
 //   height: 5
//  })
/*function CuboidMaker(prop){
    this.length = prop.length;
    this.height = prop.height;
    this.width = prop.width;
  }
   */
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
    Formula for cuboid volume: length * width * height
  */
 /* CuboidMaker.prototype.volume = function(){
    const volume = this.length * this.width * this.height
    return volume;
  }
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
 /* CuboidMaker.prototype.SA = function(){
    let SA = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    return SA;
  }
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
  */
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.SA()); // 130
