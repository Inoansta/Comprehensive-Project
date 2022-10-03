import { useEffect, useState } from 'react';

function API() {


    var [information, setInformation] = useState();
    
    useEffect(()=>{
        fetch('https://api.github.com/users').then(data => data.json()).then(data => setInformation(data)).catch(e=>console.log(e));
    }, [])
    if(!information){

        return(
            
            <p>Loading..</p>
        )
    }
    else{
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th className='api'>
                                ID
                            </th>
                            <th>
                                avatar
                            </th>
                            <th className='api'>
                                login
                            </th>
                            <th className='api'>
                                type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            information.map((items, index)=>{
                                return (<tr key={index}>
                                    <td className='api'>
                                        {items.id}
                                    </td>
                                    <td>
                                        <img src={items.avatar_url} alt='No img' className='frame'/>
                                    </td>
                                    <td className='api'>
                                        {items.login}
                                    </td>
                                    <td className='api'>
                                        {items.type}
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                    
                </table>
            </>
        )
    }


        



   
}

export default API;