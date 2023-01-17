import { Header } from "./Header"
import {Footer} from './Footer'

import videoscr from "../assets/videos/Flipped Titles.mp4"
export const Home = () => {
    return (
        <div>
            <Header />


            <div>

                <p> inspiration</p>

                <p> r sit amet, consectetur adipiscing elit. Nullam in nisi non diam 
                    blandit consequat ac vitae ante. Donec bibendum felis vel dignissim cursus. Proin non turpis fermentum, dictum diam vel, posuere purus. Vivamus pretium leo non ullamcorper efficitur. Duis nisi nisl, malesuada ut augue eu, venenatis placerat libero. Mauris a pretium se
                    m, vel auctor lacus. Fusce id elementum sem. Donec felis metus, ultrices vitae ligula sed, pulvi </p>
            </div>

                <video src={ videoscr} width="100%" height="500" controls></video>
            <Footer />
        </div>
    )
}