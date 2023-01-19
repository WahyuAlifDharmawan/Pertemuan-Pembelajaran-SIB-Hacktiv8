//const user = {};
//user.name = 'Wahyu Alif';
//user.handle = '@wahyualif';
//user.location = 'Semarang, Indonesia';

// extraction

//const name = user.name;
//const handle = user.handle;
//const location = user.location;
//console.log(name, handle, location);



//const getUser = () => {
//    return {
//        name: 'Wahyu Alif',
//        handle: '@wahyualif',
//        location: 'Semarang, Indonesia'
//    };
//}
//const {name, handle, location} = getUser();
//console.log(name, handle, location);



//const csv = "1997, Ford, F350, Must Sell";

//const[year, make, model, description]=
//csv.split(",");



//const user = {
//    n: 'Wahyu Alif',
//    h: '@wahyualif',
//    l: 'Semarang, Indonesia'
//}

//const {n: name, h: handle, l, location} = user;
//console.log(name, handle, location);



// function changecolor(){

// this.document.body.style.backgroundcolor = '#bada55a'
// }
// $('.button').click((e, t) => {

//     this.style.backgroundcolor = 'papayawhip'
// });


// console.log(add(1,5))
// function add(a,b){
//     return a+b
// }

// const add_const =function (a,b){
//     return a+b
// }
// console.log(add_const(1,5));

// let status = false
// if(status){
// //lebih komplek
// }else{

// }

// function person(){
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }



// let counter = {
//     val: 0,
//     increment: function(){
//     this.val += 1
//     }
// }


// const animals = [
//     {name: "Flurry", species: "cat"},
//     {name: "Carlo", species: "dog"},
//     {name: "Nemo", species: "fish"},
//     {name: "Hamilton", species: "dog"},
//     {name: "Dory", species: "fish"},
//     {name: "Ursa", species: "cat"}
// ];

// // let names = [];
// // for (let i=0; i<animals.length; i++) {
// //     names.push(animals[i].name);
// // }
// // console.log(names);

// let names = animals.map((animal) => animal.name + " is a " + animal.species);

// console.log(names);



// let orders =[
//     {total : 325},
//     {total : 512},
//     {total : 128},
//     {total : 32}
// ];

// // let total = 0;
// // for (let i=0; i<orders.length; i++) {
// //     total = total + orders[i].total;
// // }
// // console.log(total);

// let total = orders.reduce((total, order) => total + order.total, 0);

// console.log(total);


const videoData = [
    {
      name: "Mis Scarlet",
      present: true,
      rooms: [
        { kitchen: false },
        { ballrom: false },
        { conservatory: false },
        { "dinding room": false },
        { "billiard room": false },
        { library: false },
      ],
    },
    {
      name: "Mis White",
      present: false,
      rooms: [
        { kitchen: false },
        { ballrom: false },
        { conservatory: false },
        { "dinding room": false },
        { "billiard room": false },
        { library: false },
      ],
    },
    {
      name: "Reverend Green",
      present: true,
      rooms: [
        { kitchen: false },
        { ballrom: false },
        { conservatory: false },
        { "dinding room": false },
        { "billiard room": false },
        { library: false },
      ],
    },
    {
      name: "Rusty",
      present: false,
      rooms: [
        { kitchen: false },
        { ballrom: false },
        { conservatory: false },
        { "dinding room": false },
        { "billiard room": false },
        { library: false },
      ],
    },
    {
      name: "Colonel Mustad",
      present: true,
      rooms: [
        { kitchen: false },
        { ballrom: false },
        { conservatory: false },
        { "dinding room": false },
        { "billiard room": false },
        { library: false },
      ],
    },
  ];
  
  // looping
  
  // for(var i=9, 1 =videoData.length; i<1, i++){
  //     console.log(videoData[i])
  // }
  
  // const present = videoData.filter((video) => video.present);
  
  // let pres = videoData.filter(({ present }) => present);
  
  // console.log(present);
  // console.log(pres);
  
  const filteredData = videoData.filter((video) => {
    return video.present;
  });
  
  console.log(filteredData);
  // console.log(filteredData.length);
  
  const dataFilter = filteredData.map((data) => {
    let name = data.name.toString();
    let present = data.present.toString();
    let rooms = data.rooms;
  
    let roomsObject = {
      nama: name,
      present: present,
      rooms: rooms,
    };
    console.log(roomsObject);
  });
  
  // console.log(dataFilter);
  