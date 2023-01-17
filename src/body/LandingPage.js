import React from "react";
import Classes from "./LandingPage.module.css";
// page
import Menu from "./menu/Menu";
// image
import firstImage from "../image/Home/image1.png";
import secondImage from "../image/Home/image2.png";
import thirdImage from "../image/Home/image3.png";
import fourthImage from "../image/Home/image4.png";

const LandingPage = () => {
  const landingPageContent = [
    {
      id: "1",
      text: "Indulge in the rich, smooth flavor of grey coffee - the perfect blend of bold and sophisticated",
      src: secondImage,
    },
    {
      id: "2",
      text: "Start your day with the irresistible aroma of freshly brewed coffee - the perfect start to any morning!",
      src: thirdImage,
    },
    {
      id: "3",
      text: "As a leading coffee shop in country, we are dedicated to providing you with the perfect cup of coffee for any occasion. , we have become a trusted source for high-quality, flavorful coffee. Our selection includes a range of aromatic, strong, and flavorful options in various flavors and formats, available for people around the globe to enjoy.",
      src: fourthImage,
    },
  ];

  const content = landingPageContent.map((content) => {
    return (
      <div
        className={Classes.landingPageHandler}
        key={content.id}
        style={{
          backgroundImage: `url(${content.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={Classes.contentText}>
          <span id={Classes.itemDescript}>{content.text}</span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className={Classes.landingPage}>
        <div className={Classes.successfullPerson}>
          <span>
            Behind Every Successful Person, there is a taste of COFFEE!
          </span>
        </div>
        <img
          src={firstImage}
          alt="Behind Every Successful Person, there is a taste of COFFEE!"
        />
      </div>
      {content}
      <Menu />
    </div>
  );
};

export default LandingPage;
