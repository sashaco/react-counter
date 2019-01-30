import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div ClassName="container-fluid">
						<a className="navbar-brand" href="#">
							Bootstrap
						</a>
						<div className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Contact
								</a>
							</li>
						</div>
					</div>
				</nav>

				<div className="container">
					<div className="jumbotron">
						<h1> A Warm Welcome! </h1>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Ipsa, ipsam, eligendi, in quo sunt possimus
							non incidunt odit vero aliquid similique quaerat nam
							nobis illo aspernatur vitae fugiat numquam repellat.
						</h3>
						<button type="button" className="btn btn-primary">
							Call to Action
						</button>
					</div>
				</div>

				<div className="card-deck">
					<div className="card">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Sapiente esse necessitatibus
								neque.
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Our More!
							</a>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Sapiente esse necessitatibus
								neque.
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Our More!
							</a>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Sapiente esse necessitatibus
								neque.
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Our More!
							</a>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Sapiente esse necessitatibus
								neque.
							</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Our More!
							</a>
						</div>
					</div>
				</div>
				<div className="footer" />
				<p>Copyright Your Website 2018</p>
			</div>
		);
	}
}
