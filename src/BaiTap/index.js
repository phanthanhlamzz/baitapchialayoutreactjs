import React ,{Component} from "react";
import Navbar from "./navbar.js";
import Carousel from "./carousel";
import Smartphone from "./smartphone";
import Laptop from "./laptop";
import Promotion from "./promotion";

export default class BaiTap extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Carousel />
                <Smartphone />
                <Laptop />
                <Promotion />
            </div>
        );
    }
}
