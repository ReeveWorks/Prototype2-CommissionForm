/* styles */
import './formList.css'

/* functional component */
import { useEffect, useState } from 'react'

function formList() {

    function generateForm(formData) {

        return (
            <div className='formList--item'>
                <div className='listT--item-img' style={{ backgroundImage: `url('${formData.img_url}')` }}></div>

                <ol className='listT--item-content'>
                    <li style={{ flex: 5, justifyContent: 'flex-start' }}>
                        {formData.title}
                    </li>

                    <li style={{ flex: 1, justifyContent: 'center', color: 'var(--color-accent)' }}>
                        {formData.currency} {formData.min_price.toFixed(2)}
                    </li>
                </ol>

            </div>
        );
    }

    return (
        <div className='formList'>

        </div>
    );

}
export default formList