import { useEffect, useState } from 'react';
import chatting from '../../public/assets/image/image-chatting.webp'

const Video = () => {
    return (

        <div className=" w-1/2 sm:w-2/3 md:w-3/4 lg:w-full flex justify-center items-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7hquJzhRg6M?si=yBMYg9Z4Bkz9hnR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='' ></iframe>
        </div>
    );
}

export default Video