import './App.css';

function App() {
  return (
    <>

      {/* Header */}
      <header id="header" class="alt box-layers-fixed">
        <h1>Swim Siblings</h1>
        <nav id="nav">
          <ul>
            <li>Info</li>
            <li>Instructors</li>
            <li>Book Now</li>
          </ul>
        </nav>
      </header>
      
      {/* Banner */}
      <section id="banner">
        <div class="inner">
          <h2>Swim Siblings</h2>
          <p>Personal Swimming Lessons</p>
          <ul class="actions">
            <li>Book Lesson Now</li>
          </ul>
        </div>
      </section>
      
      {/* ONE */}
      <section id="one" class="wrapper style1">
				<div class="container">
					<header class="major">
						<h2>Weekly Features</h2>
          </header>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
				<span class="copyright">
					&copy; Copyright Swim Siblings
				</span>
			</footer>
      
      
      </>

  );
}

export default App;
