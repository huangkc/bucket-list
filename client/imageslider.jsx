AutoSlider = React.createClass({
  render (){
    return (
      <div>
        <div className="banner">
          <p className="welcome-text">Whether you would like to spend your life making beautiful and meaningful things, or make sure that your life itself is beautiful and meaningful, the Bucket List will be a wonderful partner throughout your life.</p>
        </div>
      </div>
      )
  }

})

// AutoSlider = React.createClass({
// render (){
//     return (
//     <div>
//       <div id="content-slider">
//         <div id="slider">
//           <div id="mask">
//           <ul>
//           <li id="first" className="firstanimation">
//           <a href="#">
//           <img src="https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d2caa73026ef83d5701e1d6d3f1957a6" alt="Image"/>
//           </a>
//           <div className="tooltip">
//           <h1>Welcome to BList</h1>
//           </div>
//           </li>

//           <li id="second" className="secondanimation">
//           <a href="#">
//           <img src="https://images.unsplash.com/photo-1428434828181-9d110c490087?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=74f120a985f4e5a45dea5966f5dce182" alt="Image"/>
//           </a>
//           <div className="tooltip">
//           <h1>This is created for DBC final project</h1>
//           </div>
//           </li>

//           <li id="third" className="thirdanimation">
//           <a href="#">
//           <img src="https://images.unsplash.com/photo-1447522760800-59f967f9083e?crop=entropy&dpr=0.75&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1900" alt="Image"/>
//           </a>
//           <div className="tooltip">
//           <h1>We worked really hard on it</h1>
//           </div>
//           </li>

//           <li id="fourth" className="fourthanimation">
//           <a href="#">
//           <img src="https://images.unsplash.com/photo-1428434828181-9d110c490087?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=74f120a985f4e5a45dea5966f5dce182" alt="Image"/>
//           </a>
//           <div className="tooltip">
//           <h1>and we a greater appreciation for todo list</h1>
//           </div>
//           </li>

//           <li id="fifth" className="fifthanimation">
//           <a href="#">
//           <img src="https://images.unsplash.com/photo-1452509133926-2b180c6d6245?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=522dbd6dd5ef841dea730e25e3c19709" alt="Image"/>
//           </a>
//           <div className="tooltip">
//           <h1>Enjoy it!</h1>
//           </div>
//           </li>
//           </ul>
//           </div>
//           <div className="progress-bar"></div>
//         </div>
//       </div>
//     </div>
//     )
//   }
// })

StaticSlider = React.createClass({
	render (){
		return (

    <div>
		<ul className="slides">
    <input type="radio" name="radio-btn" id="img-1" defaultChecked />
    <li className="slide-container">
		<div className="slide">
			<img src="https://images.unsplash.com/photo-1443453489887-98f56bc5bb38?crop=entropy&dpr=0.67&fit=crop&fm=jpg&h=1075&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2150"/>
    </div>
		<div className="nav">
			<label htmlFor="img-6" className="prev">&#x2039;</label>
			<label htmlFor="img-2" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1443916765281-9937110585db?crop=entropy&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425" />
        </div>
		<div className="nav">
			<label htmlFor="img-1" className="prev">&#x2039;</label>
			<label htmlFor="img-3" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?crop=entropy&dpr=0.67&fit=crop&fm=jpg&h=1075&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2150"/>
        </div>
		<div className="nav">
			<label htmlFor="img-2" className="prev">&#x2039;</label>
			<label htmlFor="img-4" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li className="slide-container">
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1463962549367-83071ab2618f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=19e8807bd14777711d1da3f32b2f6fee"/>
        </div>
    <div className="nav">
      <label htmlFor="img-3" className="prev">&#x2039;</label>
      <label htmlFor="img-5" className="next">&#x203a;</label>
    </div>
    </li>

<input type="radio" name="radio-btn" id="img-5" />
    <li className="slide-container">
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1463790452759-ce66b98dfca2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=86630d51c790752eea9b2611800b5e2a" />
        </div>
    <div className="nav">
      <label htmlFor="img-4" className="prev">&#x2039;</label>
      <label htmlFor="img-6" className="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li className="slide-container">
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c03bef35e32083ae966f091e2a5e27c9"/>
        </div>
    <div className="nav">
      <label htmlFor="img-5" className="prev">&#x2039;</label>
      <label htmlFor="img-1" className="next">&#x203a;</label>
    </div>
    </li>

    <li className="nav-dots">
      <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
      <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
      <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
      <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
      <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
      <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>

    </li>
  </ul>
  </div>

	)
	}
})


// Carousel = React.createClass({
//   getInitialState() {
//     return {
//     hover: false
//     }
//   },

//   mouseOverHandler() {
//     // console.log('true')
//     this.setState({hover: true})
//   },

//   mouseOutHandler() {
//     // console.log('false')
//     this.setState({hover: false})
//   },

//   componentDidMount(){
//     $(document).ready(function(){
//       $('.carousel').carousel();
//     });
//   },

// render (){
//   return (
//   <div id="this-carousel-id" class="carousel slide">
//   <div class="carousel-inner">
//     <div class="item active">
//       <img src="https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d2caa73026ef83d5701e1d6d3f1957a6" alt="" />
//       <div class="carousel-caption">
//         <p>Caption text here</p>
//       </div>
//     </div>
//     <div class="item">
//       <img src="https://images.unsplash.com/photo-1452509133926-2b180c6d6245?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=522dbd6dd5ef841dea730e25e3c19709" alt="" />
//       <div class="carousel-caption">
//         <p>Caption text here</p>
//       </div>
//     </div>
//     <div class="item">
//       <img src="https://images.unsplash.com/photo-1428434828181-9d110c490087?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=74f120a985f4e5a45dea5966f5dce182" alt="" />
//       <div class="carousel-caption">
//         <p>Caption text here</p>
//       </div>
//     </div>
//     <div class="item">
//       <img src="https://images.unsplash.com/photo-1447522760800-59f967f9083e?crop=entropy&dpr=0.75&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1900" alt="" />
//       <div class="carousel-caption">
//         <p>Caption text here</p>
//       </div>
//     </div>
//   </div>


//     <a class="carousel-control left" href="#this-carousel-id" data-slide="prev">&lsaquo;</a>
//     <a class="carousel-control right" href="#this-carousel-id" data-slide="next">&rsaquo;</a>
// </div>
//   )
//   }
// })
