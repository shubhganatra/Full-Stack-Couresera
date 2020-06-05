import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h2>Hello Shubh! (With JSX)</h2>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h2',null,'Hello Shubh! (Without JSX)'))
}


export default Hello