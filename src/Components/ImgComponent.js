import React, { useEffect, useState } from 'react';
import ApiCall from './ApiCall';


const ImgComponent = ({ data }) => {
    // const [data, setData] = useState();

    // useEffect(() => {
    //     // const result = await ApiCall();
    //     // setData(result);
    //     // console.log('result...??', result);
    //     resultFunction();
    // }, [0]);

    // const resultFunction = async () => {
    //     const result = await ApiCall();
    //     setData(result);
    //     console.log('result...??', result);
    // }

    return (
        <div className='image-container'>
            {
                data?.map((image) => {
                    let farm = image.farm;
                    let server = image.server;
                    let id = image.id;
                    let secret = image.secret;
                    let title = image.title;
                    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                    return (
                        <div className='grid-item'>
                            <img src={url} alt='images' className='zoom-image' />
                        </div>
                    )
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
