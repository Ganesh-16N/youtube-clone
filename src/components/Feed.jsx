import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdLocalFireDepartment, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

const Feed = () => {
    const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">

            <div className="text-[0.7rem]  w-[80px] bg-black text-white flex flex-col items-center pt-6 gap-6">

                <NavLink to='/'>
                    <div className=" flex flex-col items-center justify-center">
                        <AiFillHome className="text-[1.2rem] mb-1" />
                        <div>Home</div>
                    </div>
                </NavLink>

                <NavLink to='#'>
                    <div className=" flex flex-col items-center justify-center">
                        <MdLocalFireDepartment className="text-[1.2rem] mb-1"/>
                        <div>Shorts</div>
                    </div>
                </NavLink>
                <NavLink to='#'>
                    <div className=" flex flex-col items-center justify-center">
                        <MdOutlineSubscriptions className="text-[1.2rem] mb-1"/>
                        <div>Subscriptions</div>
                    </div>
                </NavLink>
                <NavLink to='#'>
                    <div className=" flex flex-col items-center justify-center">
                        <MdOutlineVideoLibrary className="text-[1.2rem] mb-1"/>
                        <div>Library</div>
                    </div>
                </NavLink>
            </div>

            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;
