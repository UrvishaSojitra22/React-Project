import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="card-grid ">
      <ProfileCard
        name="Urvi Patel"
        title="Bsc-chemistry, B.ed(Math-Science)"
        experience="6 Years Experience teaching fild"
        profilePicture="1st img.jpeg"
      />
      <ProfileCard
        name="Urvisha Sojitra"
        title="Bsc-chemistry, B.ed(Math-Science)"
        experience="2 Years Experience"
        profilePicture="2nd img.jpeg"
      />
      <ProfileCard
        name="Anmol Ginoya"
        title="Bsc-Chemistry, Msc(organic-Chemistry)"
        experience="7 Years Experience"
        profilePicture="3rd img.jpeg"
      />
      <ProfileCard
        name="Rutvik Ginoya"
        title="Bsc-IC (indestrial Chemistry), Msc-IC"
        experience="8 Years Experience"
        profilePicture="4th img.jpeg"
      />
      <ProfileCard
        name=" Drupal Sojitra"
        title="B.com, M-com, CA"
        experience="9 Years Experience"
        profilePicture="5th img.jpeg"
      />
      <ProfileCard
        name="Aryan Ginoya"
        title="Computer Engineering"
        experience="10 Years Experience"
        profilePicture="6th img.jpeg"
      />
    </div>
  );
}
export default App;