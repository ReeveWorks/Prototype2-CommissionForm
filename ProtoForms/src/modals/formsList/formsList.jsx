/* styles */
import './formsList.css'

/* functional component */
import { useEffect, useState } from 'react'

/*Redux*/
import { useSelector } from 'react-redux'

function formsList() {

    const [formList, setFormList] = useState(useSelector((state) => state.formsList.formDatabase.formData));

    function generateForm(formData) {
        return (
            <div className='formsList--item'>
                <div className='formsList--image' style={{ backgroundImage: `url(${formData.img_url})` }}></div>

                <ol className='formsList--content'>
                    <li style={{ flex: 5, justifyContent: 'flex-start' }}>
                        {formData.title}
                    </li>

                    <li style={{ flex: 1, justifyContent: 'center', color: 'var(--color-accent)' }}>
                        {formData.currency} {formData.min_price}
                    </li>
                </ol>

            </div>
        );
    }

    return (
        <div className='formsList'>
            {formList.map((formData) => generateForm(formData))}

        </div>
    );

}
export default formsList