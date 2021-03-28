import React, { Fragment } from "react";
import "../../styles/formulario.scss";

export function Formulario() {
	return (
		<Fragment>
			<div className="container warning">
				<div className="form row ">
					<div className="col-md-12">
						<form method="POST" action="">
							<div className="form row border1">
								<div className="form-group-Card col-md-6 back">
									<label htmlFor="Card">
										<strong className="backgroundtitle ">Card # </strong>{" "}
									</label>
									<input
										type="text"
										className="redondeado"
										placeholder="XXXXXXXXXXXXX"
										id="Card"
										name="Card"
									/>
								</div>
								<div className="htmlForm-group-CVC col-md-3 back">
									<label htmlFor="CVC">
										<strong className="backgroundtitle">CVC # </strong>
									</label>
									<input type="text" className="redondeado2" placeholder="0000" id="CVC" name="CVC" />
								</div>
								<div className="form-group-Amount col-md-3 back">
									<label htmlFor="Amount">
										<strong className="backgroundtitle">Amount</strong>
									</label>
									<input
										type="text"
										className="redondeado3"
										placeholder="Amount"
										id="Amount"
										name="Amount"
									/>
								</div>
							</div>
							<br></br>
							<div className="form row ">
								<div className="col-md-5 ">
									<div className="form-group-Card back">
										<div className=" form-group" id="expiration-date">
											<label>
												<strong className="backgroundtitle">Expiration Date</strong>
											</label>
											<select id="inputdate" className="dateborder">
												<option value="01">January</option>
												<option value="02">February </option>
												<option value="03">March</option>
												<option value="04">April</option>
												<option value="05">May</option>
												<option value="06">June</option>
												<option value="07">July</option>
												<option value="08">August</option>
												<option value="09">September</option>
												<option value="10">October</option>
												<option value="11">November</option>
												<option value="12">December</option>
											</select>
											<select id="inputyear" className="yeareborder">
												<option value="21"> 2021</option>
												<option value="22"> 2022</option>
												<option value="23"> 2023</option>
												<option value="24"> 2024</option>
												<option value="25"> 2025</option>
												<option value="26"> 2026</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<br></br>
							<div className="form row">
								<div className="col-md-6 back">
									<label htmlFor="First Name">
										<strong className="backgroundtitle">First Name</strong>
									</label>
									<input type="text" className="firstname" placeholder="First name" />
								</div>
								<div className="col-md-6 back">
									<label htmlFor="Last Name">
										<strong className="backgroundtitle">Last Name</strong>
									</label>
									<input type="text" className="lastname" placeholder="Last name" />
								</div>
							</div>
							<br></br>
							<div className="form row">
								<div className="form-group col-md-6 back">
									<label htmlFor="inputCity">
										<strong className="backgroundtitle">City</strong>
									</label>
									<input type="text" className="cityborder" id="inputCity" />
								</div>
								<div className="form-group col-md-4 back">
									<label htmlFor="inputState">
										<strong className="backgroundtitle">State</strong>
									</label>
									<select id="inputState" className="stateborder">
										<option selected>Choose...</option>
										<option value="1">Spain</option>
										<option value="2">Venezuela</option>
										<option value="3">USA</option>
									</select>
								</div>
								<div className="form-group col-md-2 back">
									<label htmlFor="Postal">
										<strong className="backgroundtitle">Postal</strong>
									</label>
									<input type="text" className="postalborder" id="Postal" />
								</div>
							</div>
							<br></br>
							<div className="row justify ">
								<div className="col-md-5 back">
									<span>
										{" "}
										<strong className="backgroundtitle">We Accept</strong>
									</span>
									<div className="form-group col-md-12 check bg-warning">
										<div className="form-check-inline ">
											<input
												className="form-check-input"
												type="radio"
												name="exampleRadios"
												id="inlineCheckbox1"
												value="option1"
												checked
											/>
											<label className="form-check-label" htmlFor="exampleRadios1">
												<strong>MasterCard</strong>
											</label>
										</div>
										<div className="form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="exampleRadios"
												id="inlineCheckbox2"
												value="option2"
												checked
											/>
											<label className="form-check-label" htmlFor="exampleRadios2">
												<strong>American Express</strong>
											</label>
										</div>
										<div className="form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="exampleRadios"
												id="inlineCheckbox3"
												value="option3"
												checked
											/>
											<label className="form-check-label" htmlFor="exampleRadios3">
												<strong>Visa</strong>
											</label>
										</div>
									</div>
									<div className="imagen1">
										<img
											src="https://lh3.googleusercontent.com/proxy/PhzVyXFjXIdcDHTFunlQ4UMSAjAKHQ-hmTex1_FZUqN5A0J2DT8vDm88Aoc6bSs_GrfrgZ-6iVVLfJ0abcGFf5068HtO5fYNbj9a8z_V4MhYXQ6kkiGseKncOlISw-Uz-g"
											width="369px"
											height="120px"
										/>
									</div>
								</div>
								<div className="col-md-5">
									<div className="pay">
										<button type="submit" className="btn btn-outline-danger">
											<strong className="personalized">Finalize</strong>
										</button>
									</div>
								</div>
							</div>
							<br></br>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
