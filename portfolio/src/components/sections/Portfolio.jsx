import SnekSnak from "../projects/SnekSnack";
import Bhere from "../projects/Bhere";
import MyPlates from "../projects/MyPlates";
import PakRat from "../projects/PakRat";

export default function Portfolio () {

    return (
        <div>
            <div id='projects' className="h-16"></div>
            <div className="mx-auto bg-lit sm:w-full md:w-4/5 mt-12 p-4 border-t-4 border-b-4 border-medgry">
                <div className="font-serif text-2xl mb-6">Projects</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    <PakRat />
                    <SnekSnak/>
                    <MyPlates/>
                    <Bhere/>
                </div>
            </div>
        </div>
    )
}