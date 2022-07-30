let car = {
    type: "Four Wheeler",
    company: "Tata",
    country: "India",
    fuel: "patrol",
    ABS: "Yes"
  }

  let Safari = Object.create(car);
  Safari.Name = "Safari";
  Safari.color = "Red"
  let Harrier = Object.create(car);
  let Nano = Object.create(car);
  let Tiago = Object.create(car);
  console.log("Safari", Safari)
  console.log("Harrier", Harrier);
  console.log("Nano", Nano);
  console.log("Tiago", Tiago);

  //Using Constructor function :
  function Cars(a, b, c, d){
     this.type = a,
     this.company = b,
     this.fuel = c,
     this.ABS = d
  }
  Cars.prototype.Model=function(name, color, model_year, price){
  this.name= name,
  this.color= color,
  this.model= model_year,
  this.price= price
}
 let car1 = new Cars("Four Wheeler", "Tata", "Patrol", "Yes");
 car1.Model("Safari", "Red", "2022", 120000);
 console.log("car1", car1);