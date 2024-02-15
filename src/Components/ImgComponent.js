import React, { useEffect, useState } from 'react';
import ApiCall from './ApiCall';


const ImgComponent = () => {
    const [data, setData] = useState();

    useEffect(() => {
        // const result = await ApiCall();
        // setData(result);
        // console.log('result...??', result);
        resultFunction();
    }, [0]);

    const resultFunction = async () => {
        const result = await ApiCall();
        setData(result);
        console.log('result...??', result);
    }

    return (
        <div>
            <h1>Hi this is the img components...</h1>
            {
                data?.map((image) => {
                    let farm = image.farm;
                    let server = image.server;
                    let id = image.id;
                    let secret = image.secret;
                    let title = image.title;
                    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                    return <img src={url} alt='images' />
                })
            }
        </div>
    );
}

export default ImgComponent;
// imp link for regarding destroy function(stack overflow link)
//https://stackoverflow.com/questions/71769990/react-18-destroy-is-not-a-function
//flicker actual image link...
//https://farm66.staticflickr.com/65535/53529152886_9be945806e_m.jpg
