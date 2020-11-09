
import React, { Component } from "react";


export class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      telephone: "",
      dateOfBirth: "",
      favoriteColor: "",
      weight: "",
      country: "select",
      gender: "select",
      skills: {
        html: false,
        css: false,
        javascript: false,
      },
      bio: "",
      file: "",
      formErrors: {},
    };
    this.initialState = this.state;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormValidation() {
    const {
      firstName,
      lastName,
      emailId,
      telephone,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      skills,
      bio,
      file,
    } = this.state;
    let formErrors = {};
    let formIsValid = true;
    //firstName
    if (!firstName) {
      formIsValid = false;
      formErrors["firstNameErr"] = "Name is required.";
    }

    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = "Last Name is required";
    }
    if (!emailId) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Email id is required.";
    } else {
      let email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.test(emailId)) {
        formIsValid = false;
        formErrors["emailIdErr"] = "Invalid Email.";
      }
    }
    //Phone number
    if (!telephone) {
      formIsValid = false;
      formErrors["telephoneErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(telephone)) {
        formIsValid = false;
        formErrors["telephoneErr"] = "Invalid phone number.";
      }
    }
    //DOB
    if (!dateOfBirth) {
      formIsValid = false;
      formErrors["dateOfBirthErr"] = "Date of birth is required.";
    } else {
      let pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      if (!pattern.test(dateOfBirth)) {
        formIsValid = false;
        formErrors["dateOfBirthErr"] = "Invalid date of birth";
      }
    }

    //Color
    if (!favoriteColor) {
      formIsValid = false;
      formErrors["favoriteColorErr"] = "Color";
    }

    //Weight
    if (!weight) {
      formIsValid = false;
      formErrors["weightErr"] = "Weight is required";
    }

    //Country
    if (country === "" || country === "select") {
      formIsValid = false;
      formErrors["countryErr"] = "Select country.";
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }

    //Skills

    if (!skills) {
      formIsValid = false;
      formErrors["skillsErr"] = "Please Check";
    }

    // Bio
    if (!bio) {
      formIsValid = false;
      formErrors["bioErr"] = "Bio Needed";
    }

    if (!file) {
      formIsValid = false;
      formErrors["fileErr"] = "Please Upload your file (Max of 12mb)";
    }
    this.setState({ formErrors: formErrors });

    return formIsValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("Cool! Just that We are still Validating Sir");
      this.setState(this.initialState);
    }
  };

  render() {
    const {
      firstNameErr,
      lastNameErr,
      emailIdErr,
      telephoneErr,
      dateOfBirthErr,
      favoriteColorErr,
      weightErr,
      countryErr,
      genderErr,
      skillsErr,
      bioErr,
      fileErr,
    } = this.state.formErrors;
    return (
      <div className="formDiv">
        <h2 style={{ textAlign: "center" }}>Add Student</h2>
        <div>
          <form noValidate onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First name.."
                className={firstNameErr ? "showError" : "avoidError"}
              />
              {firstNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {firstNameErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last name.."
                className={lastNameErr ? "showError" : "avoidError"}
              />
              {lastNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {lastNameErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="emailId">Email Id</label>
              <input
                type="text"
                name="emailId"
                value={this.state.emailId}
                onChange={this.handleChange}
                placeholder="Your email id.."
                className={emailIdErr ? " showError" : ""}
              />
              {emailIdErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {emailIdErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                name="telephone"
                onChange={this.handleChange}
                value={this.state.telephone}
                placeholder="Your phone number.."
                className={telephoneErr ? " showError" : ""}
              />
              {telephoneErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {telephoneErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                id="dateOfBirth"
                value={this.state.dob}
                onChange={this.handleChange}
                placeholder="DD/MM/YYYY.."
                className={dateOfBirthErr ? " showError" : ""}
              />
              {dateOfBirthErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {dateOfBirthErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="favoriteColor">Favorite Color</label>
              <input
                type="color"
                id="favoriteColor"
                name="favoriteColor"
                value={this.state.favoriteColor}
                onChange={this.handleChange}
                placeholder="Favorite Color"
                className={favoriteColorErr ? " showError" : ""}
              />
              {favoriteColorErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {favoriteColorErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="weight">Weight </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={this.state.weight}
                onChange={this.handleChange}
                placeholder="Weight in Kg"
                className={weightErr ? " showError" : ""}
              />
              {weightErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {weightErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                onChange={this.handleChange}
                className={countryErr ? " showError" : ""}
                value={this.state.country}
              >
                <option value="select">--Select--</option>
                <option value="finland">Finland</option>
                <option value="nigeria">Nigeria</option>
                <option value="england">England</option>
              </select>
              {countryErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {countryErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                type="radio"
                onChange={this.handleChange}
                className={genderErr ? " showError" : ""}
                value={this.state.gender}
              >
                <option value="select">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
              {genderErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {genderErr}
                </div>
              )}
            </div>

            <div>
              <p>Select your skills</p>
              <div>
                <input
                  type="checkbox"
                  id="html"
                  name="html"
                  onChange={this.handleChange}
                />
                <label htmlFor="html">HTML</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="css"
                  name="css"
                  onChange={this.handleChange}
                />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="javascript"
                  name="javascript"
                  onChange={this.handleChange}
                />
                <label htmlFor="javascript">JavaScript</label>
              </div>
              {skillsErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {skillsErr}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="bio">Bio</label> <br />
              <textarea
                id="bio"
                name="bio"
                value={this.state.bio}
                onChange={this.handleChange}
                cols="120"
                rows="10"
                placeholder="Write about yourself ..."
                className={bioErr ? " showError" : ""}
              />
              {bioErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>{bioErr}</div>
              )}
            </div>

            <div>
              <label htmlFor="file">Choose File</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.handleChange}
                className={fileErr ? " showError" : ""}
              />
              {fileErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>{fileErr}</div>
              )}
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form2;

