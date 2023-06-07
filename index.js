//EXPERIENCES DATA FILE
const data=[
  {
      id: 1,
      intro1: "Life Lessons with Katie Zaferes",
      intro2: "From $136/person",
      price: 136,
      img: "swimmer.png",
      stats: {
          star: 5.0,
          rating: 6
      },
      cty: "Online",
      openSpots: 0,
  },
  {
      id: 2,
      intro1: "Learn Wedding Photography",
     intro2: "From $143/person",
      price: 125,
      img: "card2.png",
      stats: {
          star: 5.0,
          rating: 30
      },
      cty: "Online",
      openSpots: 27,
  },
  {
      id: 3,
      intro1: "Group Mountain Biking",
      intro2: "From $128/person",
      price: 50,
      img: "card3.png",
      stats: {
          star: 4.8,
          rating: 2
      },
      cty: "Norway",
      openSpots: 3,
  }
]


function Nav() {
  return (
    <navbar className="nav">
      <img className="nav--logo" src="logo.png" />
    </navbar>
  );
}

function Hero() {
  return (
    <div className="hero">
      <img className="hero--image" src="hero_image.png" />
      <h1 className="hero--h1">Online Experiences</h1>
      <p className="hero--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

function Card(props) {

  let badgeText
    if (props.ele.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.ele.cty === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="contact_card">
     {badgeText&&  <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.ele.img} />
      <div className="card--stats">
        <img className="card--star" src="star.png" />
        <span>{props.ele.stats.star}</span>
        <span>{props.ele.stats.rating}• </span>
        <span>{props.ele.cty}</span>
      </div>
      <p className="card-p1">{props.ele.intro1}</p>
      <p className="card-p2">{props.ele.intro2}</p>
    </div>
  )
}

// function Main() {
//   return (
//     <div className="d1">
//       <Nav />
//       <Hero />
//     <div className="card">
//       <Card
//         img="./swimmer.png"
//         star={5}
//         rating="(6)"
//         cty="USA"
//         intro1="Life Lessons with Katie Zaferes"
//         intro2="From $136/person"
//       />
     

//       <Card
//         img="./card2.png"
//         star={3}
//         rating="(6)"
//         cty="USA"
//         intro1="Learn wedding photography"
//         intro2="From $125 / person"
//       />

// <Card
//         img="./card3.png"
//         star={3}
//         rating="(6)"
//         cty="India"
//         intro1="Group Mountain Biking"
//         intro2="From $130/ person"
//       />

//       </div>
      
//     </div>
//   )
// }


function Main(){
  const cards=data.map((ele) => { 
    return ( < Card img={ele.img} 
    // star={ele.stats.star} 
    // rating={ele.stats.rating}
    // cty={ele.cty}
    // intro1={ele.intro1}
    // intro2={ele.intro2}
    // openSpots={ele.openSpots}


    key={ele.id}
    ele={ele}
    />
  )

  })  
  return (
        <div className="d1">
          <Nav />
          <Hero />
       <div className="card">
        {cards}
        </div>
       
        </div>

 )}


ReactDOM.render(<Main />, document.getElementById("root"));






//PROPS

// function App(){
//     const fname="khaleel"
//     const lname="khan"
//     let date=new Date();
//     return (<h1>hii {fname} {lname} welcome to board it is already {date.getHours() %12} 'o' clock</h1>)

// }

// ReactDOM.render(<App />,document.getElementById("root"));

//PROPS  CAT APP

// function Contact(props){
//     return (<div className="contact-card">
//                 <img src={props.img}/>
//                 <h3>{props.name}</h3>
//                 <div className="info-group">
//                     <img src="./phone_icon.png" />
//                     <p>{props.phone}</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./mail_icon.png" />
//                     <p>{props.email}</p>
//                 </div>
//             </div>
// )}

// function App() {
//     return (
//         <div className="contacts">
//              <Contact
//                 img="./cat1.png"
//                 name="Mr. Whiskerson"
//                 phone="(212) 555-1234"
//                 email="mr.whiskaz@catnap.meow"
//             />
//             <Contact
//                 img="./cat2.png"
//                 name="Fluffykins"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//             <Contact
//                 img="./cat3.png"
//                 name="Felix"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//             <Contact
//                 img="./cat4.png"
//                 name="Pumpkin"
//                 phone="(0800) CAT KING"
//                 email="pumpkin@scrimba.com"
//             />
//         </div>
//     )
// }

// ReactDOM.render(<App/>,document.getElementById("root"));

//quiz

// 1. What do props help us accomplish?
// Make a component more reusable.

// 2. How do you pass a prop into a component?
// <MyAwesomeHeader title="???" />

// 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
// No, because the JSX we use to describe native DOM elements will
// be turned into REAL DOM elements by React. And real DOM elements
// only have the properties/attributes specified in the HTML specification.
// (Which doesn't include properties like `blahblahblah`)

// 4. How do I receive props in a component?
// function Navbar(props) {
//     console.log(props.blahblahblah)
//     return (
//         <header>
//             ...
//         </header>
//     )
// }

// 5. What data type is `props` when the component receives it?
// An object!


//MAPS

// 1. What does the `.map()` array method do?
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.


// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?
// It makes our code more "self-sustaining" - not requiring
// additional changes whenever the data changes.

