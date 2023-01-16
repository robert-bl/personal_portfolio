import SnekSnak from "../projects/SnekSnack";
import Bhere from "../projects/Bhere";
import MyPlates from "../projects/MyPlates";
import PakRat from "../projects/PakRat";

export default function Portfolio () {

    return (
        <div>
            <div id='projects' className="h-6 md:h-10"></div>
            <div className="mx-auto bg-c2 sm:w-full md:w-4/5 mt-12 border-b-4 border-c6 pb-4">
                <div className="font-serif bg-c5 text-2xl p-4">Projects</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center p-4">
                    <PakRat />
                    <SnekSnak/>
                    <MyPlates/>
                    <Bhere/>
                </div>
            </div>
        </div>
    )
}