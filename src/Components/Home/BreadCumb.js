import React from "react";
import MobileBC from "../../Images/Mobile-DriveWay-House.jpg";
import MobileMedBC from "../../Images/Mobile-Medium-DriveWay-House.jpg";
import TabletBC from "../../Images/Tablet-DriveWay-House.jpg";
import TabletMedBC from "../../Images/Tablet-Medium-DriveWay-House.jpg";
import DesktopBC from "../../Images/Desktop-DriveWay-House.jpg";
import DesktopMedBC from "../../Images/Desktop-Medium-DriveWay-House.jpg";
import { BreadCumbContainer, Header } from "../../Styled/Home/BreadCumb";
import Button from "../ReusableComponents/Button";
class BreadCumb extends React.Component {
  render() {
    return (
      <BreadCumbContainer>
        <img
          srcSet={`${MobileBC} 320w, ${MobileMedBC} 480w, ${TabletBC} 640w, ${TabletMedBC} 992w, ${DesktopBC} 1280w, ${DesktopMedBC} 1920w`}
          alt={"DriveWay"}
        />
        <Header>
          <h3>CYZ Solar R - 10</h3>
          <h5>Brighting Up Your PathWay</h5>
          <Button />
        </Header>
      </BreadCumbContainer>
    );
  }
}
export default BreadCumb;
